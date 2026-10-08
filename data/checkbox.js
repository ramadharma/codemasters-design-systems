// Checkbox, radio and check circle: one Figma component, picked with Type. Source: DESIGN.md §6 Checkbox, radio, check circle,
// Figma nodes 1097-63886 (_Checkbox base), 1097-63652 (Checkbox).
(() => {
  const { esc } = DS;

  // ---- "Select all": the header box checks every row, and turns indeterminate when only some rows are checked.
  function selectAll(e) {
    const head = e.target.closest?.('input[data-select-all]');
    if (head) {
      document.querySelectorAll(`input[data-select-item="${head.dataset.selectAll}"]:not(:disabled)`).forEach(i => (i.checked = head.checked));
      head.removeAttribute('data-indeterminate');
      return;
    }
    const item = e.target.closest?.('input[data-select-item]');
    if (!item) return;
    const name = item.dataset.selectItem;
    const items = [...document.querySelectorAll(`input[data-select-item="${name}"]`)];
    const box = document.querySelector(`input[data-select-all="${name}"]`);
    const n = items.filter(i => i.checked).length;
    box.checked = n === items.length;
    box.indeterminate = n > 0 && n < items.length;
    box.removeAttribute('data-indeterminate'); // the property takes over from the first-paint attribute
  }
  const SCRIPT = `// "Select all" checkbox: checks every row; turns indeterminate when only some rows are checked.
// <input data-select-all="klaim"> on the header box, <input data-select-item="klaim"> on each row.
${selectAll.toString().replace(/^  /gm, '')}
document.addEventListener('change', selectAll);`;

  const MARK = (d, w) => `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='${d}' fill='none' stroke='black' stroke-width='${w}' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`;

  const CSS = `/* Checkbox, radio and check circle, Codemasters Design System
   Needs tokens.css. No script for the control itself.

   <div class="sb-check" data-size="sm">
     <input class="sb-check-input" type="checkbox" id="setuju" aria-describedby="setuju-sup">
     <div class="sb-check-text">
       <label class="sb-check-label" for="setuju">Kirim salinan ke peserta</label>
       <p class="sb-check-sup" id="setuju-sup">Peserta menerima email berisi keputusan klaim.</p>
     </div>
   </div>

   Type          type="checkbox" (square) | type="radio" (circle) | data-variant="circle" (check circle, filled when checked)
   data-size     sm (16 px) | md (20 px)
   Checked       checked. Indeterminate (checkbox only): input.indeterminate = true in JS;
                 data-indeterminate draws it before the script runs.
   Disabled      disabled. data-state="hover" | "focus" forces a state in static mockups and docs only. */

.sb-check { --ck: 16px; --ck-r: var(--radius-sm); --ck-mark: 12px; --ck-dot: 6px; display: inline-flex; align-items: flex-start; gap: 8px; }
.sb-check[data-size="md"] { --ck: 20px; --ck-r: var(--radius-sm); --ck-mark: 14px; --ck-dot: 8px; gap: 12px; }

.sb-check-input {
  --ck-icon: ${MARK('M10 3 4.5 8.5 2 6', '1.67')};
  position: relative; flex: none; box-sizing: border-box;
  width: var(--ck); height: var(--ck); margin: 0;
  background: var(--white); border: 1px solid var(--gray-300); border-radius: var(--ck-r);
  color: var(--brand-600);
  appearance: none; cursor: pointer;
  transition-property: background-color, border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
/* The control sits 2 px down so it centres on the first line of its label. */
.sb-check:has(.sb-check-text) .sb-check-input { margin-top: 2px; }
.sb-check-input[type="radio"], .sb-check-input[data-variant="circle"] { border-radius: var(--radius-full); }
.sb-check-input[type="checkbox"]:indeterminate, .sb-check-input[data-indeterminate] { --ck-icon: ${MARK('M2.5 6h7', '1.67')}; }

/* Mark: check, minus or radio dot, drawn in currentColor.
   :indeterminate is scoped to checkboxes: browsers also match it on a radio whose group has nothing checked. */
.sb-check-input::before {
  content: ''; position: absolute; inset: 0; margin: auto;
  width: var(--ck-mark); height: var(--ck-mark);
  background: currentColor; -webkit-mask: var(--ck-icon) center / contain no-repeat; mask: var(--ck-icon) center / contain no-repeat;
  visibility: hidden;
}
.sb-check-input[type="radio"]:not([data-variant])::before { width: var(--ck-dot); height: var(--ck-dot); border-radius: var(--radius-full); -webkit-mask: none; mask: none; }
.sb-check-input:is(:checked, [type="checkbox"]:indeterminate, [data-indeterminate])::before { visibility: visible; }

/* States. Disabled uses [type] so it outranks the checked rule. */
.sb-check-input:is(:checked, [type="checkbox"]:indeterminate, [data-indeterminate]) { background: var(--brand-50); border-color: var(--brand-600); }
.sb-check-input:not(:checked, [type="checkbox"]:indeterminate, [data-indeterminate], :disabled):is(:hover, [data-state="hover"]) { background: var(--brand-50); border-color: var(--brand-600); }
.sb-check-input:focus-visible, .sb-check-input[data-state="focus"] { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }
.sb-check-input:not(:checked, [type="checkbox"]:indeterminate, [data-indeterminate]):is(:focus-visible, [data-state="focus"]) { border-color: var(--brand-300); }
.sb-check-input[type]:disabled { background: var(--gray-100); border-color: var(--gray-200); color: var(--gray-200); cursor: not-allowed; }

/* Check circle: solid brand-600 with a white check when checked. */
.sb-check-input[data-variant="circle"]:checked { background: var(--brand-600); border-color: var(--brand-600); color: var(--white); }
.sb-check-input[data-variant="circle"]:checked:disabled { background: var(--gray-200); border-color: var(--gray-200); color: var(--white); }

/* Text: same layout as Toggle */
.sb-check-text { display: grid; }
.sb-check-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); cursor: pointer; }
.sb-check-sup { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-check[data-size="md"] .sb-check-label { font-size: 16px; line-height: 24px; }
.sb-check[data-size="md"] .sb-check-sup { margin-top: 2px; font-size: 16px; line-height: 24px; }
.sb-check:has(:disabled) .sb-check-label, .sb-check:has(:disabled) .sb-check-sup { color: var(--gray-300); cursor: not-allowed; }

/* A list of choices: 12 between rows. A radio group gets one visible label. */
.sb-choices { display: grid; gap: 12px; margin: 0; padding: 0; border: 0; }
.sb-choices-label { margin-bottom: 4px; padding: 0; font: 500 var(--text-sm) var(--font); color: var(--gray-700); }

@media (prefers-reduced-motion: reduce) {
  .sb-check-input { transition: none; }
}
`;

  let uid = 0;
  // type: checkbox | radio | circle
  function check({ type = 'checkbox', size = 'sm', checked = false, indeterminate = false, state = 'default', text = true, sup = true, label = 'Kirim salinan ke peserta', supText = 'Peserta menerima email berisi keputusan klaim.', name, id, extra = '' } = {}) {
    const key = id || `ck-${++uid}`;
    const a = ['class="sb-check-input"', `type="${type === 'radio' ? 'radio' : 'checkbox'}"`, `id="${key}"`];
    if (type === 'circle') a.push('data-variant="circle"');
    if (name) a.push(`name="${name}"`);
    if (!text) a.push(`aria-label="${esc(label)}"`);
    if (text && sup) a.push(`aria-describedby="${key}-sup"`);
    if (checked && !indeterminate) a.push('checked');
    if (indeterminate && type === 'checkbox') a.push('data-indeterminate');
    if (state === 'disabled') a.push('disabled');
    if (state === 'hover' || state === 'focus') a.push(`data-state="${state}"`);
    if (extra) a.push(extra);
    const lines = [`<div class="sb-check" data-size="${size}">`, `  <input ${a.join(' ')}>`];
    if (text) {
      lines.push('  <div class="sb-check-text">', `    <label class="sb-check-label" for="${key}">${esc(label)}</label>`);
      if (sup) lines.push(`    <p class="sb-check-sup" id="${key}-sup">${esc(supText)}</p>`);
      lines.push('  </div>');
    }
    lines.push('</div>');
    return lines.join('\n');
  }
  const indent = (html, n = 2) => html.replace(/^/gm, ' '.repeat(n));

  const radioGroup = (id, size = 'sm') => `<div class="sb-choices" role="radiogroup" aria-labelledby="${id}-label">
  <span class="sb-choices-label" id="${id}-label">Metode pembayaran klaim</span>
${[['Cashless', 'Rumah sakit menagih langsung ke asuransi.', true], ['Reimbursement', 'Peserta membayar dulu, lalu diganti.'], ['Kombinasi', 'Sebagian cashless, sisanya diganti.']]
  .map(([l, s, c], i) => indent(check({ type: 'radio', size, name: `${id}-pay`, label: l, supText: s, checked: c, id: `${id}-${i}` })))
  .join('\n')}
</div>`;

  const selectAllDemo = `<div class="sb-choices">
${indent(check({ label: 'Pilih semua klaim', sup: false, indeterminate: true, id: 'sa-head', extra: 'data-select-all="klaim"' }))}
${['Klaim A', 'Klaim B', 'Klaim C', 'Klaim D'].map((l, i) => indent(check({ label: l, sup: false, checked: i < 2, id: `sa-${i}`, extra: 'data-select-item="klaim"' }))).join('\n')}
</div>`;

  const STATES = [['default', 'Default'], ['hover', 'Hover'], ['focus', 'Focused'], ['disabled', 'Disabled']];
  const row = (type, opts) => STATES.map(([s]) => check({ type, state: s, text: false, ...opts, id: `ck-m-${type}-${opts.checked ? 'on' : opts.indeterminate ? 'mix' : 'off'}-${s}` })).join('');
  const matrix = `<div class="matrix" style="--cols: 4" inert>
<span></span>${STATES.map(([, l]) => `<span class="mx">${l}</span>`).join('')}
<span class="mx">Checkbox</span>${row('checkbox', {})}
<span class="mx">Checkbox, checked</span>${row('checkbox', { checked: true })}
<span class="mx">Checkbox, indeterminate</span>${row('checkbox', { indeterminate: true })}
<span class="mx">Radio</span>${row('radio', {})}
<span class="mx">Radio, checked</span>${row('radio', { checked: true })}
<span class="mx">Check circle</span>${row('circle', {})}
<span class="mx">Check circle, checked</span>${row('circle', { checked: true })}
</div>`;

  const anatomy = `<div class="sb-check" data-size="md">
  <span data-pin="1" data-pin-at="start"><input class="sb-check-input" type="checkbox" checked tabindex="-1" aria-label="Contoh"></span>
  <div class="sb-check-text">
    <span data-pin="2"><span class="sb-check-label">Kirim salinan ke peserta</span></span>
    <p class="sb-check-sup" data-pin="3" data-pin-at="bottom">Peserta menerima email berisi keputusan klaim.</p>
  </div>
</div>`;

  DS.components.push({
    slug: 'checkbox',
    name: 'Checkbox and radio',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-06',
    description: 'One component for three selection controls, picked with Type: Checkbox for any number of options, Radio for exactly one, and Check circle for selectable cards and rows.',
    css: CSS,
    cssFile: 'checkbox.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'The control is live: click it or its label, or Tab to it and press Space.' },
          {
            type: 'playground',
            initial: { type: 'checkbox', size: 'sm', state: 'default', checked: true, indeterminate: false, text: true, sup: true },
            controls: [
              { key: 'type', label: 'Type', type: 'segmented', options: [['checkbox', 'Checkbox'], ['radio', 'Radio'], ['circle', 'Check circle']] },
              { key: 'size', label: 'Size', type: 'segmented', options: [['sm', 'sm'], ['md', 'md']] },
              { key: 'state', label: 'State', type: 'segmented', options: STATES },
              { key: 'checked', label: 'Checked', type: 'toggle' },
              { key: 'indeterminate', label: 'Indeterminate (checkbox)', type: 'toggle' },
              { key: 'text', label: 'Text', type: 'toggle' },
              { key: 'sup', label: 'Supporting text', type: 'toggle' },
            ],
            render: s => check({ ...s, indeterminate: s.indeterminate && s.type === 'checkbox', id: 'pg-ck' }),
          },
        ],
      },
      {
        id: 'usage',
        title: 'Usage',
        blocks: [
          {
            type: 'table',
            head: ['Type', 'Shape', 'Use'],
            rows: [
              ['Checkbox', 'Square, radius 4', 'Any number of options; a single yes/no that applies on Save'],
              ['Radio', 'Circle', 'Exactly one of 2–5 visible options. More than 5: use Input dropdown'],
              ['Check circle', 'Circle, filled when checked', 'Selectable cards and list rows where the whole item is the target'],
            ],
          },
          {
            type: 'list',
            items: [
              'A yes/no that takes effect immediately is a Toggle, not a Checkbox.',
              'Clicking the label toggles the control; the whole row is the hit area.',
              'Radios in one group share a `name` and sit in a `role="radiogroup"` with one group label. Preselect one radio when a sensible default exists.',
              'Table rows use Checkbox `sm` without text; the header box turns indeterminate when only some rows are selected.',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: anatomy, code: false, layout: 'anat' },
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Control', '16 px (`sm`) or 20 px (`md`). Sits 2 px down so it centres on the first line of the label.'],
              ['2', 'Label', 'Optional. Text sm / Medium (`md`: Text md / Medium), `gray-700`. Gap 8 (`md`: 12).'],
              ['3', 'Supporting text', 'Optional. Text sm / Regular (`md`: Text md / Regular, 2 px below), `gray-500`.'],
            ],
          },
        ],
      },
      {
        id: 'properties',
        title: 'Properties',
        blocks: [
          {
            type: 'table',
            head: ['Property', 'Values', 'Code'],
            rows: [
              ['Type', 'Checkbox, Radio, Check circle', '`type="checkbox"`, `type="radio"`, `data-variant="circle"`'],
              ['Checked', 'True, False', '`checked`'],
              ['Indeterminate', 'True, False (Checkbox only)', '`input.indeterminate = true`; `data-indeterminate` for first paint'],
              ['Size', '`sm` (16), `md` (20)', '`data-size` on `.sb-check`'],
              ['State', 'Default, Hover, Focused, Disabled', '`:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state`'],
              ['Text / Supporting text', 'True, False', '`<label for>` / `<p id>` + `aria-describedby`; without text, `aria-label`'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-checkbox', text: 'Checkbox' },
          {
            type: 'example',
            html: `<div class="sb-choices">\n${[['Resume medis', true], ['Invoice rumah sakit', true], ['Hasil laboratorium', false]].map(([l, c], i) => indent(check({ label: l, sup: false, checked: c, id: `ty-ck-${i}` }))).join('\n')}\n</div>`,
          },
          { type: 'h3', id: 'type-radio', text: 'Radio' },
          { type: 'example', html: radioGroup('ty-rd') },
          { type: 'h3', id: 'type-circle', text: 'Check circle' },
          { type: 'p', text: 'For selectable cards and rows, where the whole item is the target. Checkbox group (selectable cards) is built on it.' },
          { type: 'example', html: [check({ type: 'circle', checked: true, sup: false, label: 'Paket Rawat Inap', id: 'ty-cc-0' }), check({ type: 'circle', sup: false, label: 'Paket Rawat Jalan', id: 'ty-cc-1' })].join('\n') },
        ],
      },
      {
        id: 'sizes',
        title: 'Sizes',
        blocks: [
          { type: 'example', html: [check({ size: 'sm', checked: true, id: 'sz-sm' }), check({ size: 'md', checked: true, id: 'sz-md' })].join('\n') },
          {
            type: 'table',
            head: ['Size', 'Control', 'Checkbox radius', 'Gap', 'Label', 'Supporting text'],
            rows: [
              ['`sm`', '16', '4', '8', 'Text sm / Medium `gray-700`', 'Text sm / Regular `gray-500`'],
              ['`md`', '20', '4', '12', 'Text md / Medium `gray-700`', 'Text md / Regular `gray-500`, 2 px below'],
            ],
          },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'example', html: matrix, code: false },
          {
            type: 'table',
            head: ['State', 'Unchecked', 'Checked / indeterminate'],
            rows: [
              ['Default', '`white`, 1 px `gray-300` border', '`brand-50` fill, `brand-600` border, `brand-600` check / minus / dot'],
              ['Hover', '`brand-50` fill, `brand-600` border', 'same as Default'],
              ['Focused', '`white`, `brand-300` border + 4 px `focus-ring` ring', 'Default + 4 px `focus-ring` ring'],
              ['Disabled', '`gray-100` fill, `gray-200` border', '`gray-100` fill, `gray-200` border, `gray-200` mark'],
            ],
          },
          { type: 'p', text: 'Check circle, checked: solid `brand-600` with a white check (disabled: `gray-200` fill). Disabled also drops the label and supporting text to `gray-300`.' },
        ],
      },
      {
        id: 'select-all',
        title: 'Select all (indeterminate)',
        blocks: [
          { type: 'p', text: 'Indeterminate (minus) means some but not all children are checked, such as the "select all" box in a table header. Click the rows or the header box.' },
          { type: 'example', html: selectAllDemo },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: radioGroup('dd-rd'), text: 'Three options, all visible: Radio.' },
              {
                kind: 'dont',
                html: `<div class="sb-choices">\n${[['Cashless', true], ['Reimbursement', true]].map(([l, c], i) => indent(check({ label: l, sup: false, checked: c, id: `dd-ck-${i}` }))).join('\n')}\n</div>`,
                text: 'Checkboxes for a choice that allows only one answer. Both look valid until the form rejects it.',
              },
            ],
          },
        ],
      },
      {
        id: 'accessibility',
        title: 'Accessibility',
        blocks: [
          {
            type: 'list',
            items: [
              'Use native inputs: Space toggles a checkbox, arrow keys move within a radio group, and the label toggles through `for`.',
              'Give a radio group `role="radiogroup"` and a visible label via `aria-labelledby` (or a `fieldset` with a `legend`).',
              'Set `indeterminate` with JS so screen readers announce "mixed"; `data-indeterminate` only draws it before the script runs.',
              'Supporting text is connected with `aria-describedby`, so it is read after the label.',
            ],
          },
          {
            type: 'table',
            head: ['Pair', 'Ratio', 'Needed', 'Result'],
            rows: [
              ['Checked border and mark `brand-600` on `white` / `brand-50`', '5.06:1 / 4.65:1', '3:1', 'Passes'],
              ['Unchecked border `gray-300` on `white`', '1.47:1', '3:1', '**Fails**'],
              ['Label `gray-700`, supporting text `gray-500` on `white`', '10.46:1, 4.97:1', '4.5:1', 'Passes'],
            ],
          },
          { type: 'note', tone: 'warning', text: 'The unchecked `gray-300` border is the same faint boundary as Input field (1.47:1). `gray-400` (2.58:1) is closer, `gray-500` (4.97:1) passes. Decision for the design team, ideally for all controls at once.' },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css` and `checkbox.css`. The controls need no script; add `checkbox-select-all.js` only for a select-all header.' },
          { type: 'code', lang: 'css', filename: 'checkbox.css', code: CSS },
          { type: 'h3', id: 'select-all-script', text: 'Select-all script' },
          { type: 'code', lang: 'js', filename: 'checkbox-select-all.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('change', selectAll);
})();

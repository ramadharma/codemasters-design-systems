// Toggle: an on/off switch that takes effect immediately. Source: DESIGN.md §6 Toggle,
// Figma nodes 122-3294 (_Toggle base), 1102-4208 (Toggle).
(() => {
  const { esc } = DS;

  const CSS = `/* Toggle, Codemasters Design System
   Needs tokens.css. No script: it is a native checkbox.

   <div class="sb-toggle" data-size="sm">
     <input class="sb-toggle-input" type="checkbox" role="switch" id="notif" aria-describedby="notif-sup">
     <div class="sb-toggle-text">
       <label class="sb-toggle-label" for="notif">Notifikasi email</label>
       <p class="sb-toggle-sup" id="notif-sup">Kirim email saat status klaim berubah.</p>
     </div>
   </div>

   data-size    sm | md
   data-theme   light: brand-tinted, only on brand-tinted surfaces (omit for the standard Dark theme)
   Pressed      the checked attribute. Disabled: the disabled attribute.
   data-state   hover | focus on the input forces a state in static mockups and docs only. */

.sb-toggle {
  --tg-w: 36px; --tg-h: 20px; --tg-knob: 16px;
  --tg-off: var(--gray-100); --tg-off-hover: var(--gray-200); --tg-on: var(--brand-600); --tg-on-hover: var(--brand-700);
  display: inline-flex; align-items: flex-start; gap: 8px;
}
.sb-toggle[data-size="md"] { --tg-w: 44px; --tg-h: 24px; --tg-knob: 20px; gap: 12px; }
.sb-toggle[data-theme="light"] { --tg-off: var(--brand-50); --tg-off-hover: var(--brand-100); --tg-on: var(--brand-200); --tg-on-hover: var(--brand-200); }

/* Track: fully rounded, 2 px padding. Knob: white, shadow-sm, slides 150 ms. */
.sb-toggle-input {
  position: relative; flex: none; box-sizing: border-box;
  width: var(--tg-w); height: var(--tg-h); margin: 0;
  border-radius: var(--radius-full); background: var(--tg-off);
  appearance: none; cursor: pointer;
  transition: background-color 150ms var(--ease), box-shadow 150ms var(--ease);
}
.sb-toggle-input::before {
  content: ''; position: absolute; top: 2px; left: 2px;
  width: var(--tg-knob); height: var(--tg-knob); border-radius: var(--radius-full);
  background: var(--raised-sheen-light) var(--white); box-shadow: var(--shadow-sm);
  transition: translate 150ms var(--ease);
}
.sb-toggle-input:checked { background: var(--tg-on); }
.sb-toggle-input:checked::before { translate: calc(var(--tg-w) - var(--tg-knob) - 4px) 0; }
.sb-toggle-input:hover:not(:disabled), .sb-toggle-input[data-state="hover"] { background: var(--tg-off-hover); }
.sb-toggle-input:checked:hover:not(:disabled), .sb-toggle-input:checked[data-state="hover"] { background: var(--tg-on-hover); }
.sb-toggle-input:focus-visible, .sb-toggle-input[data-state="focus"] { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }
.sb-toggle-input:disabled { background: var(--gray-100); cursor: not-allowed; }
.sb-toggle-input:disabled::before { background: var(--gray-50); }

/* Text */
.sb-toggle-text { display: grid; }
.sb-toggle-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); cursor: pointer; }
.sb-toggle-sup { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-toggle[data-size="md"] .sb-toggle-label { font-size: 16px; line-height: 24px; }
.sb-toggle[data-size="md"] .sb-toggle-sup { margin-top: 2px; font-size: 16px; line-height: 24px; }
.sb-toggle:has(:disabled) .sb-toggle-label, .sb-toggle:has(:disabled) .sb-toggle-sup { color: var(--gray-300); cursor: not-allowed; }

@media (prefers-reduced-motion: reduce) {
  .sb-toggle-input, .sb-toggle-input::before { transition: none; }
}
`;

  const C = { label: 'Notifikasi email', sup: 'Kirim email saat status klaim berubah.' };
  let uid = 0;
  function toggle({ size = 'sm', pressed = false, theme = 'dark', state = 'default', text = true, sup = true, label = C.label, supText = C.sup, id } = {}) {
    const key = id || `tg-${++uid}`;
    const a = ['class="sb-toggle-input"', 'type="checkbox"', 'role="switch"', `id="${key}"`];
    if (!text) a.push(`aria-label="${esc(label)}"`);
    if (text && sup) a.push(`aria-describedby="${key}-sup"`);
    if (pressed) a.push('checked');
    if (state === 'disabled') a.push('disabled');
    if (state === 'hover' || state === 'focus') a.push(`data-state="${state}"`);
    const wrap = ['class="sb-toggle"', `data-size="${size}"`];
    if (theme === 'light') wrap.push('data-theme="light"');
    const lines = [`<div ${wrap.join(' ')}>`, `  <input ${a.join(' ')}>`];
    if (text) {
      lines.push('  <div class="sb-toggle-text">', `    <label class="sb-toggle-label" for="${key}">${esc(label)}</label>`);
      if (sup) lines.push(`    <p class="sb-toggle-sup" id="${key}-sup">${esc(supText)}</p>`);
      lines.push('  </div>');
    }
    lines.push('</div>');
    return lines.join('\n');
  }

  const tint = html => `<div class="tint-stage">${html}</div>`;
  const STATES = [['default', 'Default'], ['hover', 'Hover'], ['focus', 'Focus'], ['disabled', 'Disabled']];
  const matrix = theme => `<div class="matrix" style="--cols: 4" inert>
<span></span>${STATES.map(([, l]) => `<span class="mx">${l}</span>`).join('')}
<span class="mx">Off</span>${STATES.map(([s]) => toggle({ state: s, theme, text: false, id: `tg-m-${theme}-off-${s}` })).join('')}
<span class="mx">On</span>${STATES.map(([s]) => toggle({ state: s, theme, pressed: true, text: false, id: `tg-m-${theme}-on-${s}` })).join('')}
</div>`;

  const anatomy = `<div class="sb-toggle" data-size="md">
  <span data-pin="1" data-pin-at="start"><input class="sb-toggle-input" type="checkbox" role="switch" checked tabindex="-1" aria-label="Contoh"></span>
  <div class="sb-toggle-text">
    <span data-pin="2"><span class="sb-toggle-label">Notifikasi email</span></span>
    <p class="sb-toggle-sup" data-pin="3" data-pin-at="bottom">Kirim email saat status klaim berubah.</p>
  </div>
</div>`;

  DS.components.push({
    slug: 'toggle',
    name: 'Toggle',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-06',
    description: 'An on/off switch whose change takes effect immediately, such as "Tampilkan hanya klaim saya" or a notification setting. If the choice is applied only after Save, use a Checkbox.',
    css: CSS,
    cssFile: 'toggle.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'The switch is live: click it or its label, or Tab to it and press Space.' },
          {
            type: 'playground',
            initial: { size: 'sm', pressed: true, theme: 'dark', state: 'default', text: true, sup: true },
            controls: [
              { key: 'size', label: 'Size', type: 'segmented', options: [['sm', 'sm'], ['md', 'md']] },
              { key: 'theme', label: 'Theme', type: 'segmented', options: [['dark', 'Dark (standard)'], ['light', 'Light']] },
              { key: 'state', label: 'State', type: 'segmented', options: STATES },
              { key: 'pressed', label: 'Pressed', type: 'toggle' },
              { key: 'text', label: 'Text', type: 'toggle' },
              { key: 'sup', label: 'Supporting text', type: 'toggle' },
            ],
            render: s => (s.theme === 'light' ? tint : x => x)(toggle({ ...s, id: 'pg-tg' })),
          },
        ],
      },
      {
        id: 'usage',
        title: 'Usage',
        blocks: [
          {
            type: 'list',
            items: [
              '**Takes effect immediately.** Use a toggle when flipping it changes something right away. If the choice is only applied after a Save or Submit button, use a Checkbox.',
              '**The label says what is turned on, not the state:** "Notifikasi email", not "Aktif/Nonaktif".',
              'Clicking the label toggles too.',
              'Use the Light theme only on brand-tinted surfaces.',
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
              ['1', 'Track + knob', 'Track fully rounded with 2 px padding. Knob white, raised (`raised-sheen-light`) with `shadow-sm`, left when off, right when on; it slides in 150 ms with `--ease`.'],
              ['2', 'Label', 'Optional. Text sm / Medium (`md`: Text md / Medium), `gray-700`. Says what is turned on.'],
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
              ['Pressed', 'True, False', '`checked`'],
              ['Size', '`sm`, `md`', '`data-size` on `.sb-toggle`'],
              ['Theme', 'Dark (standard), Light (brand-tinted)', '`data-theme="light"` (omit for Dark)'],
              ['State', 'Default, Hover, Focus, Disabled', '`:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state`'],
              ['Text / Supporting text', 'True, False', '`<label for>` / `<p id>` + `aria-describedby`; without text, `aria-label`'],
            ],
          },
        ],
      },
      {
        id: 'sizes',
        title: 'Sizes',
        blocks: [
          { type: 'example', html: [toggle({ size: 'sm', pressed: true, id: 'tg-sm' }), toggle({ size: 'md', pressed: true, id: 'tg-md' })].join('\n') },
          {
            type: 'table',
            head: ['Size', 'Track', 'Knob', 'Gap to text', 'Label', 'Supporting text'],
            rows: [
              ['`sm`', '36 × 20', '16', '8', 'Text sm / Medium `gray-700`', 'Text sm / Regular `gray-500`'],
              ['`md`', '44 × 24', '20', '12', 'Text md / Medium `gray-700`', 'Text md / Regular `gray-500`, 2 px below'],
            ],
          },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'example', html: matrix('dark'), code: false },
          {
            type: 'table',
            head: ['State', 'Off (track)', 'On (track)'],
            rows: [
              ['Default', '`gray-100`', '`brand-600`'],
              ['Hover', '`gray-200`', '`brand-700`'],
              ['Focus', 'Default + `0 0 0 4px` `focus-ring` ring', 'Default + `0 0 0 4px` `focus-ring` ring'],
              ['Disabled', '`gray-100`, knob `gray-50`', '`gray-100`, knob `gray-50`'],
            ],
          },
          { type: 'p', text: 'Disabled: the label and supporting text drop to `gray-300`.' },
        ],
      },
      {
        id: 'theme',
        title: 'Light theme',
        blocks: [
          { type: 'p', text: 'For brand-tinted surfaces only, such as the AI summary box. Off `brand-50`, hover `brand-100`, on `brand-200`.' },
          { type: 'example', html: tint(matrix('light')), code: false },
          { type: 'example', html: tint(toggle({ theme: 'light', pressed: true, label: 'Tampilkan ringkasan AI', supText: 'Ringkasan muncul di atas detail klaim.', id: 'tg-light' })) },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: toggle({ pressed: true, sup: false, label: 'Tampilkan hanya klaim saya', id: 'tg-do-now' }), text: 'The list filters as soon as the switch flips.' },
              {
                kind: 'dont',
                html: `<div class="dd-form">${toggle({ pressed: true, sup: false, label: 'Kirim salinan ke peserta', id: 'tg-dont-save' })}\n<button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">Simpan</button></div>`,
                text: 'Nothing happens until Simpan. Use a Checkbox in forms.',
              },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: toggle({ pressed: true, sup: false, label: 'Notifikasi email', id: 'tg-do-label' }), text: 'The label names what is switched on.' },
              { kind: 'dont', html: toggle({ pressed: true, sup: false, label: 'Aktif', id: 'tg-dont-label' }), text: 'The label repeats the state. Aktif what?' },
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
              'Use a native checkbox with `role="switch"`: it is focusable, Space flips it, and screen readers announce "switch, on/off" from `checked`.',
              'Connect the label with `for` / `id`, and the supporting text with `aria-describedby`. A toggle without visible text needs `aria-label`.',
              'The state also shows by position (knob left or right), not only by colour.',
              'Focus shows a 4 px `focus-ring` ring on `:focus-visible`.',
            ],
          },
          {
            type: 'table',
            head: ['Pair', 'Ratio', 'Needed', 'Result'],
            rows: [
              ['On track `brand-600` on `white`', '5.06:1', '3:1', 'Passes'],
              ['Off track `gray-100` on `white`', '1.10:1', '3:1', '**Fails**'],
              ['Light theme on track `brand-200` on `brand-50`', '1.30:1', '3:1', '**Fails**'],
              ['Label `gray-700`, supporting text `gray-500` on `white`', '10.46:1, 4.97:1', '4.5:1', 'Passes'],
            ],
          },
          { type: 'note', tone: 'warning', text: 'The Off track barely stands out from a white page (1.10:1); the knob\'s `shadow-sm` is what makes it visible. WCAG 1.4.11 asks 3:1 for the parts that show a control\'s state. A `gray-400` off track (2.58:1) or a 1 px `gray-300` border would help. Decision for the design team.' },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css` and `toggle.css`. No script: the switch is a native checkbox, so click, label and keyboard work out of the box. Listen for `change` to apply the setting immediately.' },
          { type: 'code', lang: 'css', filename: 'toggle.css', code: CSS },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
})();

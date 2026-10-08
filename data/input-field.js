// Input field: single-line text input with label, hint and error. Source: DESIGN.md §6 Input field,
// Figma nodes 1090-57627 (_Input field base), 1090-57817 (Input field).
(() => {
  const { icon, esc } = DS;

  const CSS = `/* Input field, Codemasters Design System
   Needs tokens.css.

   <div class="sb-field">
     <label class="sb-field-label" for="polis">Nomor polis</label>
     <div class="sb-input">
       <input id="polis" type="text" placeholder="10 digit nomor polis" aria-describedby="polis-hint">
     </div>
     <p class="sb-field-hint" id="polis-hint">Ada di kartu peserta, 10 digit.</p>
   </div>

   data-type on .sb-input   leading-dropdown | trailing-dropdown | leading-text | payment   (omit for Default)
   Destructive              aria-invalid="true" on the input. The hint becomes the error message.
   Disabled                 the disabled attribute on the input. A disabled field is never in error.
   data-state="focus"       on .sb-input forces Focused in static mockups and docs only. */

/* Label, control and hint sit 6 apart. */
.sb-field { display: grid; gap: 6px; }
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }

.sb-input {
  --inp-border: var(--gray-300); --inp-focus: var(--brand-300); --inp-ring: var(--focus-ring);
  position: relative; box-sizing: border-box;
  display: flex; align-items: center; gap: 8px;
  height: 44px; padding: 0 14px; /* control padding exception: 10 14 lands the height on 44 */
  background: var(--white);
  border: 1px solid var(--inp-border); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-input > svg { width: 20px; height: 20px; flex: none; color: var(--gray-500); }
.sb-input input {
  flex: 1; min-width: 0; height: 100%; margin: 0; padding: 0;
  font: 400 var(--text-md) var(--font); color: var(--gray-900);
  background: none; border: 0; outline: 0; /* focus shows on the whole field below */
}
.sb-input input::placeholder { color: var(--gray-500); opacity: 1; }

/* States */
.sb-input:hover:not(:focus-within, :has(input:disabled, [aria-invalid="true"])) { border-color: var(--gray-400); }
.sb-input:has(input:focus), .sb-input[data-state="focus"] {
  border-color: var(--inp-focus); box-shadow: var(--shadow-xs), 0 0 0 4px var(--inp-ring);
}
.sb-input:has(input:disabled) { background: var(--gray-50); cursor: not-allowed; }
.sb-input input:disabled { color: var(--gray-500); cursor: not-allowed; }
.sb-input:has([aria-invalid="true"]) { --inp-border: var(--error-300); --inp-focus: var(--error-300); --inp-ring: var(--error-100); }
.sb-field:has([aria-invalid="true"]) .sb-field-hint { color: var(--error-500); }

/* Help icon: 16 px help-circle at the end, opens a Dark tooltip on hover and focus.
   In error it is an alert-circle in error-500. */
.sb-input-help {
  display: inline-flex; flex: none; margin: 0; padding: 0; border: 0; border-radius: var(--radius-sm);
  background: none; color: var(--gray-400); cursor: help;
}
.sb-input-help > svg { width: 16px; height: 16px; }
.sb-input-help:hover, .sb-input-help:focus-visible { color: var(--gray-500); }
.sb-input-help:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-input:has([aria-invalid="true"]) .sb-input-help { color: var(--error-500); }
.sb-input-tip {
  position: absolute; z-index: 10; bottom: calc(100% + 8px); inset-inline-end: 4px;
  max-width: 320px; padding: 8px 12px; border-radius: var(--radius-md);
  background: var(--gray-900); box-shadow: var(--shadow-lg);
  font: 600 var(--text-xs) var(--font); color: var(--white); white-space: nowrap;
  visibility: hidden; opacity: 0; transition: opacity 150ms var(--ease), visibility 0s 150ms;
}
.sb-input-help:is(:hover, :focus-visible) + .sb-input-tip { visibility: visible; opacity: 1; transition: opacity 150ms var(--ease); }

/* Types */
.sb-input-select {
  flex: none; height: 100%; margin: 0; padding: 0 24px 0 0; border: 0; outline: 0; appearance: none; cursor: pointer;
  font: 400 var(--text-md) var(--font); color: var(--gray-900);
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23667085' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right center / 20px;
}
.sb-input-select:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; border-radius: var(--radius-sm); }
.sb-input[data-type="leading-dropdown"] .sb-input-select { margin-inline-end: 4px; } /* dropdown padding 10 12 10 14 */
.sb-input-prefix { flex: none; font: 400 var(--text-md) var(--font); color: var(--gray-500); }
.sb-input[data-type="leading-text"] { padding-inline-start: 0; gap: 0; }
.sb-input[data-type="leading-text"] input { padding-inline-start: 14px; }
.sb-input-addon {
  align-self: stretch; display: flex; align-items: center; flex: none;
  padding: 0 12px 0 14px; border-inline-end: 1px solid var(--gray-300);
  font: 400 var(--text-md) var(--font); color: var(--gray-500);
}
.sb-input[data-type="payment"] { padding-inline-start: 10px; }
.sb-input-card {
  display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 34px; height: 24px; box-sizing: border-box;
  background: var(--white); border: 1px solid var(--gray-100); border-radius: var(--radius-sm);
}
.sb-input-card > svg { width: 22px; height: 14px; }

@media (prefers-reduced-motion: reduce) {
  .sb-input, .sb-input-tip { transition: none; }
}
`;

  // One set of example content per type. Values are obvious placeholders, not real people's data.
  const TYPES = {
    default: { label: 'Nomor polis', glyph: 'file-text', placeholder: '10 digit nomor polis', value: '0123456789', bad: '01234', hint: 'Ada di kartu peserta, 10 digit.', error: 'Nomor polis harus 10 digit.', help: 'Lihat bagian depan kartu peserta.' },
    'leading-dropdown': { label: 'Nomor telepon', placeholder: '812 0000 0000', value: '812 0000 0000', bad: '812', hint: 'Kami kirim kode verifikasi ke nomor ini.', error: 'Nomor telepon minimal 9 digit.', help: 'Pilih kode negara, lalu nomor tanpa 0 di depan.', inputmode: 'tel' },
    'trailing-dropdown': { label: 'Nilai klaim', placeholder: '0', value: '1.725.283.300', bad: '0', hint: 'Tulis angka penuh, tanpa singkatan.', error: 'Nilai klaim harus lebih dari Rp 0.', help: 'Nilai sesuai invoice rumah sakit.', inputmode: 'numeric' },
    'leading-text': { label: 'Situs web', placeholder: 'www.contoh.co.id', value: 'www.sembuh.ai', bad: 'sembuh', hint: 'Alamat situs perusahaan asuransi.', error: 'Alamat situs belum lengkap. Contoh: www.contoh.co.id', help: 'Tanpa https://, sudah otomatis.' },
    payment: { label: 'Nomor kartu', placeholder: '0000 0000 0000 0000', value: '•••• •••• •••• 1234', bad: '1234 5678', hint: 'Kartu debit atau kredit.', error: 'Nomor kartu harus 16 digit.', help: '16 digit di bagian depan kartu.', inputmode: 'numeric' },
  };
  const MASTERCARD = '<svg data-i="mastercard-logo" viewBox="0 0 22 14" aria-hidden="true"><circle cx="7" cy="7" r="7" fill="#EB001B"/><circle cx="15" cy="7" r="7" fill="#F79E1B"/><path d="M11 1.53a7 7 0 0 1 0 10.94 7 7 0 0 1 0-10.94Z" fill="#FF5F00"/></svg>';

  let uid = 0;
  // state: placeholder | filled | focus | disabled. Destructive never combines with disabled (DESIGN.md).
  function field({ type = 'default', state = 'placeholder', destructive = false, leading = false, label = true, hint = true, help = false, id } = {}) {
    const t = TYPES[type];
    const key = id || `field-${++uid}`;
    const disabled = state === 'disabled' && !destructive;
    const value = destructive ? t.bad : state === 'placeholder' ? '' : t.value;
    const describedBy = [hint || destructive ? `${key}-hint` : '', help ? `${key}-tip` : ''].filter(Boolean).join(' ');

    const inputAttrs = [`id="${key}"`, 'type="text"', `placeholder="${esc(t.placeholder)}"`];
    if (t.inputmode) inputAttrs.push(`inputmode="${t.inputmode}"`);
    if (value) inputAttrs.push(`value="${esc(value)}"`);
    if (!label) inputAttrs.push(`aria-label="${esc(t.label)}"`);
    if (describedBy) inputAttrs.push(`aria-describedby="${describedBy}"`);
    if (destructive) inputAttrs.push('aria-invalid="true"');
    if (disabled) inputAttrs.push('disabled');
    const input = `<input ${inputAttrs.join(' ')}>`;
    const off = disabled ? ' disabled' : '';

    const parts = {
      default: [leading ? icon(t.glyph) : '', input],
      'leading-dropdown': [`<select class="sb-input-select" aria-label="Kode negara"${off}><option>ID +62</option><option>MY +60</option><option>SG +65</option></select>`, input],
      'trailing-dropdown': ['<span class="sb-input-prefix" aria-hidden="true">Rp</span>', input, `<select class="sb-input-select" aria-label="Mata uang"${off}><option>IDR</option><option>USD</option><option>MYR</option></select>`],
      'leading-text': ['<span class="sb-input-addon" aria-hidden="true">https://</span>', input],
      payment: [`<span class="sb-input-card" aria-hidden="true">${MASTERCARD}</span>`, input],
    }[type].filter(Boolean);
    if (help) {
      parts.push(`<button class="sb-input-help" type="button" aria-label="Info" aria-describedby="${key}-tip"${off}>${icon(destructive ? 'alert-circle' : 'help-circle')}</button>`);
      parts.push(`<span class="sb-input-tip" role="tooltip" id="${key}-tip">${esc(t.help)}</span>`);
    }

    const boxAttrs = ['class="sb-input"'];
    if (type !== 'default') boxAttrs.push(`data-type="${type}"`);
    if (state === 'focus' && !disabled) boxAttrs.push('data-state="focus"');

    const lines = ['<div class="sb-field">'];
    if (label) lines.push(`  <label class="sb-field-label" for="${key}">${esc(t.label)}</label>`);
    lines.push(`  <div ${boxAttrs.join(' ')}>`, ...parts.map(p => `    ${p}`), '  </div>');
    if (hint || destructive) lines.push(`  <p class="sb-field-hint" id="${key}-hint">${esc(destructive ? t.error : t.hint)}</p>`);
    lines.push('</div>');
    return lines.join('\n');
  }

  const STATES = [['placeholder', 'Placeholder'], ['filled', 'Filled'], ['focus', 'Focused'], ['disabled', 'Disabled']];
  const stateStack = `<div class="matrix field-matrix" style="--cols: 1">
${[...STATES.map(([s, l]) => [l, field({ state: s, id: `st-${s}` })]), ['Destructive', field({ destructive: true, help: true, id: 'st-err' })], ['Destructive, Focused', field({ destructive: true, state: 'focus', id: 'st-err-focus' })]]
  .map(([l, f]) => `<span class="mx">${l}</span>${f}`).join('\n')}
</div>`;

  const anatomy = `<div class="sb-field" data-pin-group>
  <label class="sb-field-label" for="anat-polis" data-pin="1" data-pin-at="start">Nomor polis</label>
  <div class="sb-input" data-pin="2" data-pin-at="start">
    <span data-pin="3">${icon('file-text')}</span>
    <span data-pin="4" style="flex: 1"><input id="anat-polis" type="text" placeholder="10 digit nomor polis" tabindex="-1" aria-describedby="anat-polis-hint"></span>
    <span data-pin="5"><button class="sb-input-help" type="button" tabindex="-1" aria-label="Info">${icon('help-circle')}</button></span>
  </div>
  <p class="sb-field-hint" id="anat-polis-hint" data-pin="6" data-pin-at="start">Ada di kartu peserta, 10 digit.</p>
</div>`;

  DS.components.push({
    slug: 'input-field',
    name: 'Input field',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-06',
    description: 'A single-line text field with a label above, an optional hint below, and an error state that says what is wrong and how to fix it.',
    css: CSS,
    cssFile: 'input-field.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Type in the preview: the field is live. Hover or focus the help icon to see its tooltip.' },
          {
            type: 'playground',
            initial: { type: 'default', state: 'placeholder', destructive: false, leading: false, label: true, hint: true, help: false },
            controls: [
              { key: 'type', label: 'Type', type: 'select', options: [['default', 'Default'], ['leading-dropdown', 'Leading dropdown'], ['trailing-dropdown', 'Trailing dropdown'], ['leading-text', 'Leading text'], ['payment', 'Payment input']] },
              { key: 'state', label: 'State', type: 'segmented', options: STATES },
              { key: 'destructive', label: 'Destructive', type: 'toggle' },
              { key: 'leading', label: 'Leading icon (Default type)', type: 'toggle' },
              { key: 'label', label: 'Label', type: 'toggle' },
              { key: 'hint', label: 'Hint text', type: 'toggle' },
              { key: 'help', label: 'Help icon', type: 'toggle' },
            ],
            render: s => `<div class="field-stage">${field({ ...s, id: 'pg-field' })}</div>`,
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
              '**Always show a label above the field.** The placeholder is an example, never the label: it disappears as soon as the user types.',
              '**Hint text explains format or purpose.** In error it is replaced by the message, which says what is wrong and how to fix it ("Nomor polis harus 10 digit").',
              '**Show the error on blur or submit,** not while the user is still typing.',
              '**Money fields** use Trailing dropdown (or a plain `Rp` prefix) and keep the full-number format: `Rp 1.725.283.300`.',
              'For more than one line of text use Textarea input field.',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: anatomy, code: false, layout: 'anat', caption: 'Parts are spaced out to fit the numbers; the real gap between label, field and hint is 6.' },
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Label', 'Text sm / Medium, `gray-700`. 6 above the field.'],
              ['2', 'Field', '44 high, padding `10 14`, `white`, 1 px `gray-300` border, radius 8, `shadow-xs`, gap 8 between items.'],
              ['3', 'Leading icon', 'Optional. 20 px, `gray-500`.'],
              ['4', 'Value / placeholder', 'Text md / Regular. Placeholder `gray-500`, value `gray-900`.'],
              ['5', 'Help icon', 'Optional. 16 px `help-circle`, `gray-400`, at the end. Opens a Dark tooltip on hover and focus.'],
              ['6', 'Hint text', 'Optional. Text sm / Regular, `gray-500`, 6 below the field. In error it becomes the error message in `error-500`.'],
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
              ['Type', 'Default, Leading dropdown, Trailing dropdown, Leading text, Payment input', '`data-type` on `.sb-input` (omit for Default)'],
              ['Leading icon', 'True, False', '20 px `<svg>` before the input'],
              ['Label', 'True, False', '`<label class="sb-field-label" for>`; without it, `aria-label` on the input'],
              ['Hint text', 'True, False', '`<p class="sb-field-hint" id>` + `aria-describedby`'],
              ['Help icon', 'True, False', '`<button class="sb-input-help">` + `<span role="tooltip">`'],
              ['Destructive', 'True, False', '`aria-invalid="true"` on the input'],
              ['State', 'Placeholder, Filled, Focused, Disabled', 'empty, `value`, `:focus`, `disabled`. Static mockups only: `data-state="focus"`'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-default', text: 'Default' },
          { type: 'p', text: 'Optional leading icon + text. Most fields: nama, email, nomor polis.' },
          { type: 'example', html: `<div class="field-stage">${field({ leading: true, id: 'ty-default' })}</div>` },
          { type: 'h3', id: 'type-leading-dropdown', text: 'Leading dropdown' },
          { type: 'p', text: 'A dropdown (`gray-900` value + 20 px chevron, padding `10 12 10 14`) before the text. Phone number with country code.' },
          { type: 'example', html: `<div class="field-stage">${field({ type: 'leading-dropdown', id: 'ty-phone' })}</div>` },
          { type: 'h3', id: 'type-trailing-dropdown', text: 'Trailing dropdown' },
          { type: 'p', text: 'Prefix text (`Rp`) + value, dropdown after it (padding `10 14`). Amount with currency.' },
          { type: 'example', html: `<div class="field-stage">${field({ type: 'trailing-dropdown', state: 'filled', id: 'ty-amount' })}</div>` },
          { type: 'h3', id: 'type-leading-text', text: 'Leading text' },
          { type: 'p', text: 'A gray add-on (`gray-500`, padding `10 12 10 14`) joined to the input by a divider. Fixed prefix such as `https://`.' },
          { type: 'example', html: `<div class="field-stage">${field({ type: 'leading-text', id: 'ty-url' })}</div>` },
          { type: 'h3', id: 'type-payment', text: 'Payment input' },
          { type: 'p', text: '34 × 24 card logo (`white`, `gray-100` border, radius 4), left padding 10. Card number.' },
          { type: 'example', html: `<div class="field-stage">${field({ type: 'payment', id: 'ty-card' })}</div>` },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'example', html: stateStack, code: false },
          {
            type: 'table',
            head: ['State', 'Fill', 'Border', 'Text', 'Extra'],
            rows: [
              ['Placeholder', '`white`', '`gray-300`', '`gray-500`', 'Hover: border `gray-400`'],
              ['Filled', '`white`', '`gray-300`', '`gray-900`', '—'],
              ['Focused', '`white`', '`brand-300`', '`gray-900`', 'ring `0 0 0 4px` `focus-ring` + `shadow-xs`'],
              ['Disabled', '`gray-50`', '`gray-300`', '`gray-500`', 'not editable, `cursor: not-allowed`'],
              ['Destructive', '`white`', '`error-300`', 'as above', 'help icon becomes 16 px `alert-circle` in `error-500`; hint becomes the error message in `error-500`'],
              ['Destructive + Focused', '`white`', '`error-300`', '`gray-900`', 'ring `0 0 0 4px` `error-100`'],
            ],
          },
          { type: 'p', text: 'Destructive has no Disabled variant: a disabled field cannot be in error.' },
        ],
      },
      {
        id: 'errors',
        title: 'Hint and error messages',
        blocks: [
          {
            type: 'list',
            items: [
              'The hint says what to enter: format, length, where to find it.',
              'The error replaces the hint in the same place, so the layout does not jump. It names the problem and the fix: "Nomor polis harus 10 digit", not "Input tidak valid".',
              'Connect both to the input with `aria-describedby`; set `aria-invalid="true"` while the error shows.',
              'Show the error on blur or submit. Clear it as soon as the value is valid.',
            ],
          },
          { type: 'example', html: `<div class="field-stage">${field({ destructive: true, help: true, id: 'err-polis' })}</div>` },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: `<div class="field-stage">${field({ hint: false, id: 'dd-label' })}</div>`, text: 'A visible label above the field.' },
              { kind: 'dont', html: `<div class="field-stage">${field({ label: false, hint: false, id: 'dd-nolabel' }).replace('10 digit nomor polis', 'Nomor polis')}</div>`, text: 'The placeholder as the label. It vanishes while typing.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: `<div class="field-stage">${field({ destructive: true, id: 'dd-err' })}</div>`, text: 'The error names the problem and the fix.' },
              { kind: 'dont', html: `<div class="field-stage">${field({ destructive: true, id: 'dd-vague' }).replace('Nomor polis harus 10 digit.', 'Input tidak valid.')}</div>`, text: 'A vague error. The user has to guess what to change.' },
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
              'Connect the label with `for` / `id`. A field without a visible label needs `aria-label`.',
              'Point `aria-describedby` at the hint (and the tooltip when there is a help icon). In error, set `aria-invalid="true"`.',
              'Use the right keyboard on mobile: `inputmode="numeric"` for amounts and card numbers, `"tel"` for phone numbers.',
              'The help icon is a real button (`aria-label="Info"`) and its tooltip has `role="tooltip"`, so it works with keyboard focus, not only hover.',
              'Focus shows on the whole field: `brand-300` border and a 4 px `focus-ring` ring.',
            ],
          },
          {
            type: 'table',
            head: ['Text', 'On', 'Ratio', 'AA'],
            rows: [
              ['Label `gray-700`', '`white`', '10.46:1', 'Passes'],
              ['Value `gray-900`', '`white`', '17.75:1', 'Passes'],
              ['Placeholder, hint `gray-500`', '`white`', '4.97:1', 'Passes'],
              ['Disabled text `gray-500`', '`gray-50`', '4.76:1', 'Passes'],
              ['Error message `error-500`', '`white`', '3.76:1', '**Fails**'],
              ['Field border `gray-300`', '`white`', '1.47:1', 'Below the 3:1 WCAG 1.4.11 asks for control boundaries'],
            ],
          },
          {
            type: 'note',
            tone: 'warning',
            text: '**Open decision.** The error message in `error-500` is 3.76:1, below AA for 14 px text. `error-600` (4.83:1) or `error-700` (6.57:1) pass. The `gray-300` border is also faint (1.47:1); the label above the field keeps it identifiable, but a darker border (`gray-400`) would help low-vision users. Both need a design team decision.',
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, then `input-field.css`. States come from the input itself (`:focus`, `disabled`, `aria-invalid`), so no script is needed.' },
          { type: 'code', lang: 'css', filename: 'input-field.css', code: CSS },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
})();

// Button: spec, reference CSS and examples. Variants, sizes and rules follow shadcn/ui (base-nova style);
// colours are the Codemasters tokens. Source before 2026-10-26: DESIGN.md §6 Buttons and Figma node 1038-34411.
(() => {
  const { icon, esc } = DS;

  const CSS = `/* Button, Codemasters Design System
   Needs tokens.css; loading.css for the spinner of the loading state.

   <button class="sb-btn" type="button">Kirim</button>
   <button class="sb-btn" type="button" data-variant="outline" data-size="sm">Batal</button>
   <button class="sb-btn" type="button" data-variant="ghost" data-size="icon" aria-label="Hapus"><svg…/></button>

   data-variant   default (omit) | outline | secondary | ghost | destructive | link
   data-size      xs | sm | default (omit) | lg | xl | icon-xs | icon-sm | icon | icon-lg | icon-xl   (icon sizes are square; add aria-label)
   aria-invalid="true"   error border and ring, for a button that picks a value in a form
   aria-busy="true"      Loading: a <span class="sb-spinner" aria-hidden="true"> before the label, the label in -ing form ("Mengirim…")
   data-state            hover | focus. Forces a state in static mockups and docs. Never ship it in live UI. */

.sb-btn {
  --btn-h: 32px; --btn-px: 10px; --btn-px-icon: 8px; --btn-gap: 6px; --btn-icon: 16px; --btn-type: var(--text-sm); --btn-r: var(--radius-control);
  --btn-bg: var(--brand-500); --btn-border: transparent; --btn-fg: var(--white); /* brand-500 by choice: white text 3.62:1, below AA (see Contrast) */
  --btn-bg-hover: var(--brand-600); --btn-fg-hover: var(--white);
  --btn-shadow: var(--shadow-xs); --btn-ring: var(--focus-ring); --btn-ring-border: var(--border-brand);
  box-sizing: border-box; position: relative;
  display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; gap: var(--btn-gap);
  height: var(--btn-h); padding: 0 var(--btn-px);
  font: 500 var(--btn-type) var(--font); white-space: nowrap; text-decoration: none; user-select: none;
  color: var(--btn-fg); background: var(--btn-bg) padding-box;
  border: 1px solid var(--btn-border); border-radius: var(--btn-r);
  box-shadow: var(--btn-shadow);
  cursor: pointer;
  transition-property: color, background-color, border-color, box-shadow, translate;
  transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-btn > svg { width: var(--btn-icon); height: var(--btn-icon); flex: none; pointer-events: none; }
.sb-btn-dot { width: 8px; height: 8px; flex: none; border-radius: var(--radius-full); background: var(--success-500); }
/* A leading or trailing icon pulls that side's padding in a little, so the icon looks centred in the space. */
.sb-btn:has(> :is(svg, .sb-spinner, .sb-btn-dot):first-child:not(:only-child)) { padding-inline-start: var(--btn-px-icon); }
.sb-btn:has(> svg:last-child:not(:only-child)) { padding-inline-end: var(--btn-px-icon); }

/* Sizes. Height includes the 1 px border. */
.sb-btn[data-size="xs"] { --btn-h: 24px; --btn-px: 8px; --btn-px-icon: 6px; --btn-gap: 4px; --btn-icon: 12px; --btn-type: var(--text-xs); --btn-r: var(--radius-md); }
.sb-btn[data-size="sm"] { --btn-h: 28px; --btn-px: 10px; --btn-px-icon: 6px; --btn-gap: 4px; --btn-icon: 14px; --btn-type: var(--text-xs); --btn-r: var(--radius-md); }
.sb-btn[data-size="lg"] { --btn-h: 36px; }
.sb-btn[data-size="xl"] { --btn-h: 40px; --btn-px: 14px; --btn-px-icon: 12px; --btn-gap: 8px; } /* not in shadcn: a roomier size for page and form actions */
.sb-btn[data-size^="icon"] { width: var(--btn-h); padding: 0; }
.sb-btn[data-size="icon-xs"] { --btn-h: 24px; --btn-icon: 12px; --btn-r: var(--radius-md); }
.sb-btn[data-size="icon-sm"] { --btn-h: 28px; --btn-r: var(--radius-md); }
.sb-btn[data-size="icon-lg"] { --btn-h: 36px; }
.sb-btn[data-size="icon-xl"] { --btn-h: 40px; }

/* Variants. Default (brand fill) is the base above. */
.sb-btn[data-variant="outline"] {
  --btn-bg: var(--bg-primary); --btn-border: var(--border-control); --btn-fg: var(--text-primary);
  --btn-bg-hover: var(--bg-secondary); --btn-fg-hover: var(--text-primary);
}
.sb-btn[data-variant="secondary"] {
  --btn-bg: var(--bg-tertiary); --btn-fg: var(--text-primary); --btn-shadow: 0 0 #0000;
  --btn-bg-hover: color-mix(in srgb, var(--bg-tertiary), var(--text-primary) 5%); --btn-fg-hover: var(--text-primary);
}
.sb-btn[data-variant="ghost"] {
  --btn-bg: transparent; --btn-fg: var(--text-primary); --btn-shadow: 0 0 #0000;
  --btn-bg-hover: var(--bg-secondary); --btn-fg-hover: var(--text-primary);
}
.sb-btn[data-variant="destructive"] {
  --btn-bg: color-mix(in srgb, var(--error-600) 10%, transparent); --btn-fg: var(--text-error); --btn-shadow: 0 0 #0000;
  --btn-bg-hover: color-mix(in srgb, var(--error-600) 20%, transparent); --btn-fg-hover: var(--text-error);
  --btn-ring: color-mix(in srgb, var(--error-600) 20%, transparent); --btn-ring-border: color-mix(in srgb, var(--error-600) 40%, transparent);
}
:root[data-theme="dark"] .sb-btn[data-variant="destructive"] {
  --btn-bg: color-mix(in srgb, var(--error-600) 20%, transparent); --btn-bg-hover: color-mix(in srgb, var(--error-600) 30%, transparent);
  --btn-ring: color-mix(in srgb, var(--error-600) 40%, transparent);
}
/* Link: text in running copy, underlined on hover. No box, so it sits on the text baseline. */
.sb-btn[data-variant="link"] {
  --btn-h: auto; --btn-px: 0; --btn-px-icon: 0; --btn-shadow: 0 0 #0000;
  --btn-bg: transparent; --btn-bg-hover: transparent; --btn-fg: var(--text-brand); --btn-fg-hover: var(--text-brand);
  border-width: 0; text-underline-offset: 4px;
}
.sb-btn[data-variant="link"]:hover:not(:disabled), .sb-btn[data-variant="link"][data-state="hover"] { text-decoration: underline; }

/* States */
.sb-btn:hover:not(:disabled, [aria-disabled="true"]), .sb-btn[data-state="hover"] { color: var(--btn-fg-hover); background-color: var(--btn-bg-hover); }
.sb-btn[aria-expanded="true"]:is([data-variant="outline"], [data-variant="ghost"]) { background-color: var(--bg-secondary); }
/* Focused: the border takes the ring colour and a 3 px ring goes around, in every variant. */
.sb-btn:focus-visible, .sb-btn[data-state="focus"] { outline: none; border-color: var(--btn-ring-border); box-shadow: var(--btn-shadow), 0 0 0 3px var(--btn-ring); }
.sb-btn[data-variant="link"]:focus-visible, .sb-btn[data-variant="link"][data-state="focus"] { box-shadow: none; outline: 2px solid var(--border-brand); outline-offset: 2px; border-radius: var(--radius-sm); }
/* Invalid: a button that picks a value in a form (a date, a file) and holds a wrong one. */
.sb-btn[aria-invalid="true"] { border-color: var(--border-error); box-shadow: 0 0 0 3px color-mix(in srgb, var(--error-600) 20%, transparent); }
:root[data-theme="dark"] .sb-btn[aria-invalid="true"] { box-shadow: 0 0 0 3px color-mix(in srgb, var(--error-600) 40%, transparent); }
/* Disabled: the default look at half opacity, no shadow, no pointer events. */
.sb-btn:disabled, .sb-btn[aria-disabled="true"] { opacity: .5; box-shadow: none; pointer-events: none; }
/* Pressed: down 1 px. Not on menu triggers, which stay put while their menu opens. */
.sb-btn:active:not(:disabled, [aria-disabled="true"], [aria-busy="true"], [aria-haspopup]) { translate: 0 1px; }
/* Loading: the look stays (not the faded Disabled), a spinner in the text colour replaces the leading icon, clicks are ignored. */
.sb-btn[aria-busy="true"] { cursor: progress; pointer-events: none; }
.sb-btn > .sb-spinner { --sp-size: var(--btn-icon); color: inherit; }

/* A button that opens a menu: its chevron (class sb-btn-chevron) turns when open. Other icons, such as ⋮, stay put. */
.sb-btn[aria-expanded] > .sb-btn-chevron { transition: rotate 200ms var(--ease); }
.sb-btn[aria-expanded="true"] > .sb-btn-chevron { rotate: 180deg; }

@media (prefers-reduced-motion: reduce) {
  .sb-btn, .sb-btn > svg { transition: none; }
  .sb-btn:active:not(:disabled) { translate: none; }
}
`;

  const VARIANTS = [
    ['default', 'Default'],
    ['outline', 'Outline'],
    ['secondary', 'Secondary'],
    ['ghost', 'Ghost'],
    ['destructive', 'Destructive'],
    ['link', 'Link'],
  ];
  const SIZES = ['xs', 'sm', 'default', 'lg', 'xl'];
  const ICON_SIZE = { xs: 'icon-xs', sm: 'icon-sm', default: 'icon', lg: 'icon-lg', xl: 'icon-xl' };
  const STATES = [['default', 'Default'], ['hover', 'Hover'], ['focus', 'Focused'], ['disabled', 'Disabled']];

  // One button as HTML. Feeds previews, the playground and (through DS.snippet) the code samples.
  function btn({ v = 'default', size = 'default', label = 'Simpan', icon: mode = 'none', glyph, state, extra } = {}) {
    const attrs = ['class="sb-btn"', 'type="button"'];
    if (v !== 'default') attrs.push(`data-variant="${v}"`);
    const s = mode === 'only' ? ICON_SIZE[size] : size;
    if (s !== 'default') attrs.push(`data-size="${s}"`);
    if (mode === 'only') attrs.push(`aria-label="${esc(label)}"`);
    if (state === 'hover' || state === 'focus') attrs.push(`data-state="${state}"`);
    if (state === 'disabled') attrs.push('disabled');
    if (extra) attrs.push(extra);
    const text = esc(label);
    const parts = {
      none: [text],
      leading: [icon(glyph || 'plus'), text],
      trailing: [text, glyph === 'chevron-down' ? icon(glyph, 'sb-btn-chevron') : icon(glyph || 'arrow-right')],
      dot: ['<span class="sb-btn-dot" aria-hidden="true"></span>', text],
      only: [icon(glyph || 'plus')],
    }[mode];
    const open = `<button ${attrs.join(' ')}>`;
    return mode === 'none' ? `${open}${text}</button>` : `${open}\n  ${parts.join('\n  ')}\n</button>`;
  }

  const row = items => items.join('\n');
  const flexRow = buttons => `<div style="display: flex; justify-content: flex-end; gap: 8px; width: 100%;">\n${buttons.map(b => b.replace(/^/gm, '  ')).join('\n')}\n</div>`;

  const matrix = `<div class="matrix">
<span></span>${STATES.map(([, l]) => `<span class="mx">${l}</span>`).join('')}
${VARIANTS.map(([v, l]) => `<span class="mx">${l}</span>` + STATES.map(([s]) => btn({ v, state: s })).join('')).join('\n')}
</div>`;

  const anatomy = `<button class="sb-btn" type="button" data-variant="outline" data-size="lg" data-pin="1" data-pin-at="start" tabindex="-1" style="zoom: 1.6">
  <span data-pin="2">${icon('plus')}</span>
  <span data-pin="3">Tambah Klaim</span>
  <span data-pin="4">${icon('chevron-down')}</span>
</button>`;

  const tooltipDemo = `<span class="tip-demo">
  ${btn({ v: 'outline', icon: 'only', glyph: 'trash', label: 'Hapus' })}
  <span class="tip" role="tooltip">Hapus</span>
</span>`;

  DS.components.push({
    slug: 'button',
    name: 'Button',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-26',
    description:
      'Runs an action on the current page: save, submit, open a dialog, start an analysis. Six variants and the sizes of shadcn/ui, in the Codemasters colours.',
    css: CSS,
    cssFile: 'button.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Set any combination of properties and copy the HTML. Hover and Focused are forced here with `data-state` so you can inspect them; in live UI they come from the browser.' },
          {
            type: 'playground',
            initial: { v: 'default', size: 'default', icon: 'none', state: 'default', label: 'Simpan' },
            controls: [
              { key: 'v', label: 'Variant', type: 'select', options: VARIANTS },
              { key: 'label', label: 'Label', type: 'text' },
              { key: 'size', label: 'Size', type: 'segmented', options: SIZES.map(s => [s, s]) },
              { key: 'icon', label: 'Icon', type: 'segmented', options: [['none', 'False'], ['leading', 'Leading'], ['trailing', 'Trailing'], ['dot', 'Dot'], ['only', 'Only']] },
              { key: 'state', label: 'State', type: 'segmented', options: STATES },
            ],
            render: s => btn({ ...s, label: s.label.trim() || 'Simpan' }),
          },
        ],
      },
      {
        id: 'usage',
        title: 'Usage',
        blocks: [
          { type: 'p', text: 'Use a button for an action on the current page. The Link variant is for links inside running text, not for actions.' },
          {
            type: 'list',
            items: [
              '**A button looks like a button.** A rectangle with radius 10 (8 at `xs` and `sm`) and a fill or a border. Never turn an action into bare text or text with an arrow.',
              '**One Default per view.** Default (the brand fill) is the next step of the flow: Mulai Analisis, Kirim ke Advisor, Keputusan. Every other action steps down: Outline, then Secondary or Ghost, then Link.',
              '**Outline** for the other actions next to Default (Batal, Ajukan). **Secondary** for low-emphasis actions on a busy surface. **Ghost** for toolbars, icon buttons and actions inside rows.',
              '**Order in a row.** Least important on the left, Default on the right, gap 8.',
              '**Destructive** is a soft red, for the action that deletes or rejects. In a dialog whose purpose is deleting, it is the main action; elsewhere, a destructive choice among others (Tolak next to Setujui) stays Outline.',
              '**Labels are verbs in Title Case:** Mulai Analisis, Kirim ke Advisor, Ajukan Persetujuan, Sepakati Klaim.',
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
              ['1', 'Container', 'Radius 10 (`--radius-control`; 8 at `xs` and `sm`), 1 px border (transparent on filled variants), `shadow-xs` on Default and Outline. Height and padding come from the size; heights include the border.'],
              ['2', 'Leading icon', 'Optional. 16 px (12 at `xs`, 14 at `sm`), `currentColor`. The padding on its side drops to 8 (6 at `xs` and `sm`), so the icon looks centred.'],
              ['3', 'Label', 'Medium. Text sm at `default` and `lg`, Text xs at `xs` and `sm`. A verb in Title Case.'],
              ['4', 'Trailing icon', 'Optional. Same size as the leading icon. A menu trigger uses chevron-down with `class="sb-btn-chevron"`, which turns 180° when the menu is open.'],
            ],
          },
          { type: 'p', text: 'The specimen is shown at 160 %.' },
        ],
      },
      {
        id: 'variants',
        title: 'Variants',
        blocks: [
          { type: 'example', html: row(VARIANTS.map(([v, l]) => btn({ v, label: l }))) },
          { type: 'h3', id: 'variant-colours', text: 'Colours per state' },
          {
            type: 'table',
            head: ['Variant', 'Default (fill / border / text)', 'Hover', 'Focused'],
            rows: [
              ['Default', '`brand-500` / none / `white`', '`brand-600`', '`brand-300` border, 3 px `focus-ring`'],
              ['Outline', '`white` / `gray-200` / `gray-900`', '`gray-50` fill', '`brand-300` border, 3 px `focus-ring`'],
              ['Secondary', '`gray-100` / none / `gray-900`', '`gray-100` with 5 % `gray-900`', '`brand-300` border, 3 px `focus-ring`'],
              ['Ghost', 'none / none / `gray-900`', '`gray-50` fill', '`brand-300` border, 3 px `focus-ring`'],
              ['Destructive', '`error-600` at 10 % / none / `error-700`', '`error-600` at 20 %', '`error-600` at 40 % border, 3 px ring at 20 %'],
              ['Link', 'text `brand-700`, no box', 'underline, offset 4', '2 px `brand-300` outline'],
            ],
          },
          { type: 'p', text: 'In the dark theme Destructive takes 20 % (hover 30 %), and the semantic tokens remap the rest.' },
        ],
      },
      {
        id: 'sizes',
        title: 'Sizes',
        blocks: [
          { type: 'example', html: row(SIZES.map(size => btn({ size, label: size }))) },
          { type: 'example', html: row(SIZES.map(size => btn({ v: 'outline', size, icon: 'only', label: 'Tambah' }))) },
          {
            type: 'table',
            head: ['Size', 'Height', 'Padding x (icon side)', 'Text', 'Icon', 'Gap', 'Radius'],
            rows: [
              ['`xs`', '24', '8 (6)', 'Text xs / Medium', '12', '4', '8'],
              ['`sm`', '28', '10 (6)', 'Text xs / Medium', '14', '4', '8'],
              ['`default`', '32', '10 (8)', 'Text sm / Medium', '16', '6', '10'],
              ['`lg`', '36', '10 (8)', 'Text sm / Medium', '16', '6', '10'],
              ['`xl`', '40', '14 (12)', 'Text sm / Medium', '16', '8', '10'],
              ['`icon-xs` · `icon-sm` · `icon` · `icon-lg` · `icon-xl`', '24 · 28 · 32 · 36 · 40', 'square', '—', '12 · 16 · 16 · 16 · 16', '—', '8 · 8 · 10 · 10 · 10'],
            ],
          },
          { type: 'h3', id: 'choosing-a-size', text: 'Choosing a size' },
          {
            type: 'list',
            items: [
              '`default`: almost everything: forms, card toolbars, filters, dialogs. Inputs and dropdowns are 32 too, so they line up.',
              '`lg`: the page header\'s main action and form submits that should stand out a little.',
              '`xl` (40, our addition to the shadcn scale): roomier actions: a form\'s submit row, empty states, landing pages and anywhere 32 feels too tight.',
              '`sm`: tables, dense lists and code or toolbar headers.',
              '`xs`: actions inside a table row, a chip or a tight toolbar.',
              'Touch: every size is below the 44 px touch target. On touch screens give a button at least 44 px of tappable space (spacing around it, or a larger `::after` hit area).',
            ],
          },
        ],
      },
      {
        id: 'icon',
        title: 'Icon',
        blocks: [
          { type: 'example', html: row([['none', 'False'], ['leading', 'Leading'], ['trailing', 'Trailing'], ['dot', 'Dot'], ['only', 'Tambah']].map(([m, l]) => btn({ v: 'outline', icon: m, label: l }))) },
          {
            type: 'list',
            items: [
              '**Leading** and **Trailing:** a 16 px icon before or after the label; the padding on that side drops by 2 (4 at `xs` and `sm`).',
              '**Dot:** an 8 px `success-500` status dot before the label.',
              '**Only:** an `icon` size, width = height. Always give it an `aria-label` and a tooltip with the same text.',
              'Icons are Feather-style outlines coloured with `currentColor`, so they follow the text in every state.',
            ],
          },
          { type: 'h3', id: 'menu-trigger', text: 'Menu trigger' },
          { type: 'p', text: 'A button that opens a menu carries a trailing chevron-down. Set `aria-haspopup` and `aria-expanded` and give the chevron `class="sb-btn-chevron"`; it turns 180° in 200 ms when the menu is open. While open, Outline and Ghost keep their hover fill. Menu triggers do not move when pressed.' },
          { type: 'example', html: btn({ v: 'outline', icon: 'trailing', glyph: 'chevron-down', label: 'Ekspor', extra: 'aria-haspopup="menu" aria-expanded="false" data-demo' }), caption: 'Click the button to flip `aria-expanded`.' },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'p', text: 'Hover changes the fill, Focused adds a ring for keyboard users, Disabled is the default look at 50 % opacity. Pressing moves the button down 1 px.' },
          { type: 'example', html: matrix, code: false },
          {
            type: 'list',
            items: [
              'Colour changes take 150 ms with `--ease`.',
              'Focused shows only on `:focus-visible`: the border takes the ring colour (`brand-300`) and a 3 px `focus-ring` goes around it. Link has no box, so it uses a 2 px outline.',
              'Invalid (`aria-invalid="true"`): `error-300` border and a 3 px `error-600` ring at 20 %, the same as an invalid field.',
              'Disabled: 50 % opacity, no shadow and no pointer events, so there is no hover or press either.',
            ],
          },
          { type: 'h3', id: 'state-loading', text: 'Loading' },
          {
            type: 'p',
            text: 'After a click that waits on the server (Simpan, Kirim ke Advisor), the button stays as it is and shows a spinner in its text colour before the label, which turns into the -ing form ("Mengirim…"). `aria-busy="true"` ignores further clicks, so the action is never sent twice. Keep the button\'s width so the row does not jump. The spinner comes from Loading (`loading.css`).',
          },
          { type: 'example', html: row([['', 'Mengirim…'], [' data-variant="outline"', 'Menyimpan…'], [' data-variant="secondary"', 'Memuat…']].map(([v, l]) => `<button class="sb-btn" type="button"${v} aria-busy="true"><span class="sb-spinner" aria-hidden="true"></span>${l}</button>`)) },
        ],
      },
      {
        id: 'button-row',
        title: 'Button row',
        blocks: [
          { type: 'p', text: 'Least important on the left, Default on the right, gap 8. Here: Batal (Ghost), Simpan Draf (Secondary), Ajukan (Outline), Kirim (Default).' },
          {
            type: 'example',
            html: flexRow([
              btn({ v: 'ghost', label: 'Batal' }),
              btn({ v: 'secondary', label: 'Simpan Draf' }),
              btn({ v: 'outline', label: 'Ajukan' }),
              btn({ label: 'Kirim' }),
            ]),
          },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: row([btn({ v: 'outline', label: 'Batal' }), btn({ label: 'Kirim' })]), text: 'One Default per view. The other action steps down.' },
              { kind: 'dont', html: row([btn({ label: 'Batal' }), btn({ label: 'Simpan Draf' }), btn({ label: 'Kirim' })]), text: 'Three Default buttons. Users must read every label to find the next step.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: btn({ v: 'outline', label: 'Lihat Detail' }), text: 'An action is a rectangle with a fill or a border.' },
              { kind: 'dont', html: '<span class="bare">Lihat detail →</span>', text: 'Bare text with an arrow. Users have to search for the action.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: row([btn({ v: 'outline', label: 'Tolak' }), btn({ label: 'Setujui' })]), text: 'Tolak is one of several choices, so it is Outline.' },
              { kind: 'dont', html: row([btn({ v: 'destructive', label: 'Tolak' }), btn({ label: 'Setujui' })]), text: 'Two loud buttons compete. Destructive is for a view whose main action deletes or rejects.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: row([btn({ v: 'outline', label: 'Batal' }), btn({ v: 'destructive', label: 'Hapus Klaim' })]), text: 'A dialog whose purpose is deleting: Destructive is its main action.' },
              { kind: 'dont', html: row([btn({ v: 'outline', label: 'OK' }), btn({ label: 'Ya' })]), text: 'Vague labels. Name the result with a verb: Hapus Klaim, not Ya.' },
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
              'Use `<button type="button">` for actions and `<a class="sb-btn" href="…">` for navigation. Both take the same attributes.',
              'Icon-only buttons need an `aria-label` and a tooltip with the same text.',
              'Never remove the focus ring. Buttons show it on `:focus-visible`; Link shows a 2 px outline.',
              'Disable with the `disabled` attribute. Use `aria-disabled="true"` instead when the button must stay focusable, for example to show a tooltip that explains why. The CSS styles both.',
              'Menu triggers set `aria-haspopup="menu"` and `aria-expanded`.',
              'Sizes are below 44 px: on touch screens add tappable space around buttons.',
              'With `prefers-reduced-motion: reduce`, transitions and the 1 px press switch off.',
            ],
          },
          { type: 'example', html: tooltipDemo, code: false, caption: 'Icon-only button with its tooltip. Tooltip spec: DESIGN.md, Tooltip and help icon.' },
          { type: 'h3', id: 'contrast', text: 'Contrast' },
          { type: 'p', text: 'Text against its fill, measured with the WCAG 2.1 formula. AA needs 4.5:1 for button text. Disabled states are exempt.' },
          { type: 'note', tone: 'warning', text: 'Default uses `brand-500` by design decision (2026-10-26): the lighter blue suits the flat style. White text on it is 3.62:1, below AA for 12 to 14 px labels. `brand-600` (5.06:1) is the accessible alternative; switch `--btn-bg` if a product must meet AA.' },
          {
            type: 'table',
            head: ['Variant', 'Text on fill', 'Ratio', 'AA'],
            rows: [
              ['Default', '`white` on `brand-500`', '3.62:1', '**Fails** (passes for text of 18.66 px bold or 24 px)'],
              ['Default, hover', '`white` on `brand-600`', '5.06:1', 'Passes'],
              ['Outline, Ghost', '`gray-900` on `white`', '17.75:1', 'Passes'],
              ['Secondary', '`gray-900` on `gray-100`', '16.11:1', 'Passes'],
              ['Destructive', '`error-700` on `error-600` at 10 %', '5.65:1', 'Passes'],
              ['Link', '`brand-700` on `white`', '6.61:1', 'Passes'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css` (on the Overview page), then `button.css`. Every colour, size and shadow is a token, so changing a token changes every button. The attribute names match shadcn/ui: `data-variant` and `data-size`.' },
          { type: 'code', lang: 'css', filename: 'button.css', code: CSS },
        ],
      },
      {
        id: 'tokens',
        title: 'Tokens used',
        blocks: [
          { type: 'p', text: 'The tokens `button.css` reads, with their values. Generated from the stylesheet.' },
          { type: 'tokens' },
        ],
      },
    ],
  });

  DS.addCss(CSS);
})();

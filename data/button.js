// Button: spec, reference CSS and examples. Source: DESIGN.md §6 Buttons and Figma node 1038-34411.
(() => {
  const { icon, esc } = DS;

  const CSS = `/* Button, Codemasters Design System
   Needs tokens.css.

   <button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Kirim</button>

   data-hierarchy    primary | secondary-gray | secondary-color | tertiary-color | tertiary-gray | link-color | link-gray
   data-size         xs | sm | md | lg | xl | 2xl   (xs: dense desktop UI only)
   data-destructive  present = Destructive=True
   data-icon="only"  square icon-only button; add aria-label
   data-state        hover | focus. Forces a state in static mockups and docs. Never ship it in live UI:
                     live states come from :hover, :focus-visible and the disabled attribute. */

.sb-btn {
  --btn-h: 40px; --btn-px: 16px; --btn-gap: 8px; --btn-icon: 20px; --btn-type: var(--text-sm);
  --btn-bg: var(--brand-600); --btn-border: var(--brand-600); --btn-fg: var(--white);
  --btn-bg-hover: var(--brand-700); --btn-border-hover: var(--brand-700); --btn-fg-hover: var(--white);
  --btn-bg-disabled: var(--brand-200); --btn-border-disabled: var(--brand-200); --btn-fg-disabled: var(--white);
  --btn-ring: var(--focus-ring); --btn-shadow: var(--shadow-xs);
  box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; gap: var(--btn-gap);
  height: var(--btn-h); padding: 0 var(--btn-px);
  font: 600 var(--btn-type) var(--font); white-space: nowrap; text-decoration: none;
  color: var(--btn-fg); background: var(--btn-bg);
  border: 1px solid var(--btn-border); border-radius: var(--radius-md);
  box-shadow: var(--btn-shadow);
  cursor: pointer;
  transition-property: color, background-color, border-color, box-shadow, scale;
  transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-btn > svg { width: var(--btn-icon); height: var(--btn-icon); flex: none; }
.sb-btn-dot { width: 10px; height: 10px; flex: none; border-radius: var(--radius-full); background: var(--success-500); }

/* Sizes. Height includes the 1px border. */
.sb-btn[data-size="xs"]  { --btn-h: 32px; --btn-px: 12px; --btn-icon: 16px; --btn-gap: 4px; } /* code-first size for dense rows; below 44, so never on touch */
.sb-btn[data-size="sm"]  { --btn-h: 36px; --btn-px: 14px; }
.sb-btn[data-size="lg"]  { --btn-h: 44px; --btn-px: 18px; --btn-type: var(--text-md); }
.sb-btn[data-size="xl"]  { --btn-h: 48px; --btn-px: 20px; --btn-type: var(--text-md); }
.sb-btn[data-size="2xl"] { --btn-h: 60px; --btn-px: 28px; --btn-type: var(--text-lg); --btn-icon: 24px; --btn-gap: 12px; }
.sb-btn[data-icon="only"] { width: var(--btn-h); padding: 0; }

/* Hierarchy. Primary is the base above. */
.sb-btn[data-hierarchy="secondary-gray"] {
  --btn-bg: var(--white); --btn-border: var(--gray-300); --btn-fg: var(--gray-700);
  --btn-bg-hover: var(--gray-50); --btn-border-hover: var(--gray-300); --btn-fg-hover: var(--gray-800);
  --btn-bg-disabled: var(--white); --btn-border-disabled: var(--gray-200); --btn-fg-disabled: var(--gray-300);
}
.sb-btn[data-hierarchy="secondary-color"] {
  --btn-bg: var(--brand-50); --btn-border: var(--brand-50); --btn-fg: var(--brand-700);
  --btn-bg-hover: var(--brand-100); --btn-border-hover: var(--brand-100); --btn-fg-hover: var(--brand-700);
  --btn-bg-disabled: var(--brand-50); --btn-border-disabled: var(--brand-50); --btn-fg-disabled: var(--brand-300);
}
.sb-btn[data-hierarchy^="tertiary"] {
  --btn-bg: transparent; --btn-border: transparent;
  --btn-bg-disabled: transparent; --btn-border-disabled: transparent; --btn-fg-disabled: var(--gray-300);
  --btn-shadow: 0 0 #0000;
}
.sb-btn[data-hierarchy="tertiary-color"] {
  --btn-fg: var(--brand-700); --btn-bg-hover: var(--brand-50); --btn-border-hover: var(--brand-50); --btn-fg-hover: var(--brand-700);
}
.sb-btn[data-hierarchy="tertiary-gray"] {
  --btn-fg: var(--gray-500); --btn-bg-hover: var(--gray-50); --btn-border-hover: var(--gray-50); --btn-fg-hover: var(--gray-600);
}
.sb-btn[data-hierarchy^="link"] {
  --btn-h: auto; --btn-px: 0; --btn-shadow: 0 0 #0000;
  --btn-bg: transparent; --btn-border: transparent; --btn-bg-hover: transparent; --btn-border-hover: transparent;
  --btn-bg-disabled: transparent; --btn-border-disabled: transparent; --btn-fg-disabled: var(--gray-300);
  border-width: 0;
}
.sb-btn[data-hierarchy="link-color"] { --btn-fg: var(--brand-600); --btn-fg-hover: var(--brand-700); }
.sb-btn[data-hierarchy="link-gray"]  { --btn-fg: var(--gray-500); --btn-fg-hover: var(--gray-600); }

/* Destructive=True swaps Brand and Gray for Error. */
.sb-btn[data-destructive] {
  --btn-bg: var(--error-600); --btn-border: var(--error-600); --btn-fg: var(--white);
  --btn-bg-hover: var(--error-700); --btn-border-hover: var(--error-700); --btn-fg-hover: var(--white);
  --btn-bg-disabled: var(--error-200); --btn-border-disabled: var(--error-200); --btn-fg-disabled: var(--white);
  --btn-ring: var(--error-100);
}
.sb-btn[data-destructive][data-hierarchy="secondary-gray"] {
  --btn-bg: var(--white); --btn-border: var(--error-300); --btn-fg: var(--error-700);
  --btn-bg-hover: var(--error-50); --btn-border-hover: var(--error-300); --btn-fg-hover: var(--error-800);
  --btn-bg-disabled: var(--white); --btn-border-disabled: var(--error-200); --btn-fg-disabled: var(--error-300);
}
.sb-btn[data-destructive][data-hierarchy="secondary-color"] {
  --btn-bg: var(--error-50); --btn-border: var(--error-50); --btn-fg: var(--error-700);
  --btn-bg-hover: var(--error-100); --btn-border-hover: var(--error-100); --btn-fg-hover: var(--error-700);
  --btn-bg-disabled: var(--error-50); --btn-border-disabled: var(--error-50); --btn-fg-disabled: var(--error-300);
}
.sb-btn[data-destructive][data-hierarchy^="tertiary"] {
  --btn-bg: transparent; --btn-border: transparent; --btn-fg: var(--error-700);
  --btn-bg-hover: var(--error-50); --btn-border-hover: var(--error-50); --btn-fg-hover: var(--error-700);
  --btn-bg-disabled: transparent; --btn-border-disabled: transparent; --btn-fg-disabled: var(--error-300);
}
.sb-btn[data-destructive][data-hierarchy="tertiary-gray"] { --btn-fg-hover: var(--error-800); }
.sb-btn[data-destructive][data-hierarchy^="link"] {
  --btn-bg: transparent; --btn-border: transparent; --btn-fg: var(--error-700);
  --btn-bg-hover: transparent; --btn-border-hover: transparent; --btn-fg-hover: var(--error-800);
  --btn-bg-disabled: transparent; --btn-border-disabled: transparent; --btn-fg-disabled: var(--error-300);
}

/* States */
.sb-btn:hover:not(:disabled, [aria-disabled="true"]), .sb-btn[data-state="hover"] {
  color: var(--btn-fg-hover); background: var(--btn-bg-hover); border-color: var(--btn-border-hover);
}
.sb-btn:focus-visible, .sb-btn[data-state="focus"] {
  outline: none; box-shadow: var(--btn-shadow), 0 0 0 4px var(--btn-ring);
}
.sb-btn[data-hierarchy^="link"]:focus-visible, .sb-btn[data-hierarchy^="link"][data-state="focus"] {
  box-shadow: none; outline: 2px solid var(--brand-600); outline-offset: 2px;
}
.sb-btn:disabled, .sb-btn[aria-disabled="true"] {
  color: var(--btn-fg-disabled); background: var(--btn-bg-disabled); border-color: var(--btn-border-disabled);
  cursor: not-allowed;
}
.sb-btn:disabled > .sb-btn-dot, .sb-btn[aria-disabled="true"] > .sb-btn-dot { background: currentColor; }
.sb-btn:active:not(:disabled, [aria-disabled="true"]) { scale: .96; }

/* A button that opens a menu: the trailing chevron turns when open. */
.sb-btn[aria-expanded] > svg:last-child { transition: rotate 200ms var(--ease); }
.sb-btn[aria-expanded="true"] > svg:last-child { rotate: 180deg; }

@media (prefers-reduced-motion: reduce) {
  .sb-btn, .sb-btn > svg { transition: none; }
  .sb-btn:active:not(:disabled) { scale: 1; }
}
`;

  const HIERARCHIES = [
    ['primary', 'Primary'],
    ['secondary-gray', 'Secondary gray'],
    ['secondary-color', 'Secondary color'],
    ['tertiary-color', 'Tertiary color'],
    ['tertiary-gray', 'Tertiary gray'],
    ['link-color', 'Link color'],
    ['link-gray', 'Link gray'],
  ];
  const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  const STATES = [['default', 'Default'], ['hover', 'Hover'], ['focus', 'Focused'], ['disabled', 'Disabled']];

  // One button as HTML. Feeds previews, the playground and (through DS.snippet) the code samples.
  function btn({ h = 'primary', size = 'md', label = 'Simpan', icon: mode = 'none', glyph, destructive, state, extra } = {}) {
    const attrs = ['class="sb-btn"', 'type="button"', `data-hierarchy="${h}"`, `data-size="${size}"`];
    if (destructive) attrs.push('data-destructive');
    if (mode === 'only') attrs.push('data-icon="only"', `aria-label="${esc(label)}"`);
    if (state === 'hover' || state === 'focus') attrs.push(`data-state="${state}"`);
    if (state === 'disabled') attrs.push('disabled');
    if (extra) attrs.push(extra);
    const text = esc(label);
    const parts = {
      none: [text],
      leading: [icon(glyph || 'plus'), text],
      trailing: [text, icon(glyph || 'arrow-right')],
      dot: ['<span class="sb-btn-dot" aria-hidden="true"></span>', text],
      only: [icon(glyph || 'plus')],
    }[mode];
    const open = `<button ${attrs.join(' ')}>`;
    return mode === 'none' ? `${open}${text}</button>` : `${open}\n  ${parts.join('\n  ')}\n</button>`;
  }

  const row = items => items.join('\n');
  const flexRow = buttons => `<div style="display: flex; justify-content: flex-end; gap: 12px; width: 100%;">\n${buttons.map(b => b.replace(/^/gm, '  ')).join('\n')}\n</div>`;

  const matrix = destructive => `<div class="matrix">
<span></span>${STATES.map(([, l]) => `<span class="mx">${l}</span>`).join('')}
${HIERARCHIES.map(([h, l]) => `<span class="mx">${l}</span>` + STATES.map(([s]) => btn({ h, state: s, destructive })).join('')).join('\n')}
</div>`;

  const anatomy = `<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="2xl" data-pin="1" data-pin-at="start" tabindex="-1">
  <span data-pin="2">${icon('plus')}</span>
  <span data-pin="3">Tambah Klaim</span>
  <span data-pin="4">${icon('chevron-down')}</span>
</button>`;

  const tooltipDemo = `<span class="tip-demo">
  ${btn({ h: 'secondary-gray', icon: 'only', glyph: 'trash', label: 'Hapus' })}
  <span class="tip" role="tooltip">Hapus</span>
</span>`;

  DS.components.push({
    slug: 'button',
    name: 'Button',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-06',
    description:
      'Runs an action on the current page: save, submit, open a dialog, start an analysis. Seven hierarchies tell the user which action matters most.',
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
            initial: { h: 'primary', size: 'md', icon: 'none', state: 'default', label: 'Simpan', destructive: false },
            controls: [
              { key: 'h', label: 'Hierarchy', type: 'select', options: HIERARCHIES },
              { key: 'label', label: 'Label', type: 'text' },
              { key: 'size', label: 'Size', type: 'segmented', options: SIZES.map(s => [s, s]) },
              { key: 'icon', label: 'Icon', type: 'segmented', options: [['none', 'False'], ['leading', 'Leading'], ['trailing', 'Trailing'], ['dot', 'Dot'], ['only', 'Only']] },
              { key: 'state', label: 'State', type: 'segmented', options: STATES },
              { key: 'destructive', label: 'Destructive', type: 'toggle' },
            ],
            render: s => btn({ ...s, label: s.label.trim() || 'Simpan' }),
          },
        ],
      },
      {
        id: 'usage',
        title: 'Usage',
        blocks: [
          { type: 'p', text: 'Use a button for an action on the current page. Link hierarchies exist for links inside running text, not for actions.' },
          {
            type: 'list',
            items: [
              '**A button looks like a button.** Always a rectangle with radius 8 and a fill or a border. Never turn an action into bare text, an underlined word or text with an arrow; users then have to search for it.',
              '**One primary action per view.** Primary is the next step of the flow (Mulai Analisis, Kirim ke Advisor, Keputusan). Every other action steps down: Primary, then Secondary color or Secondary gray, then Tertiary, then Link.',
              '**Hierarchy, not sameness.** Never give all buttons in a row the same style. Without hierarchy, users must read every label.',
              '**Order in a row.** Least important on the left, Primary on the right, gap 12. Several secondary actions are fine; keep their order consistent.',
              '**Destructive is not automatically red.** Most destructive actions (Hapus, Tolak in a dialog with other choices) use Secondary gray. Use Destructive only when the destructive action is the primary action of the view.',
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
              ['1', 'Container', 'Radius 8, 1 px border, `shadow-xs` on Primary and Secondary. Height and horizontal padding come from the size; heights include the border (`box-sizing: border-box`).'],
              ['2', 'Leading icon', 'Optional. 20 px (16 at `xs`, 24 at `2xl`), gap 8 (4 at `xs`, 12 at `2xl`), `currentColor`.'],
              ['3', 'Label', 'Semibold. Text sm at `xs`, `sm` and `md`, Text md at `lg` and `xl`, Text lg at `2xl`. A verb in Title Case.'],
              ['4', 'Trailing icon', 'Optional. Same size and gap as the leading icon. A menu trigger uses chevron-down, which turns 180° when the menu is open.'],
            ],
          },
        ],
      },
      {
        id: 'properties',
        title: 'Properties',
        blocks: [
          { type: 'p', text: 'Each property maps to one attribute, so a slide, a spec and the code describe a button with the same words.' },
          {
            type: 'table',
            head: ['Property', 'Values', 'Code'],
            rows: [
              ['Hierarchy', 'Primary, Secondary gray, Secondary color, Tertiary color, Tertiary gray, Link color, Link gray', '`data-hierarchy="primary"` to `"link-gray"`'],
              ['Size', '`sm`, `md`, `lg`, `xl`, `2xl` (`xs` is code-only for now)', '`data-size="md"`'],
              ['Icon', 'False, Leading, Trailing, Dot, Only', '`<svg>` before or after the label, `<span class="sb-btn-dot">`, or `data-icon="only"` with `aria-label`'],
              ['Destructive', 'False, True', '`data-destructive`'],
              ['State', 'Default, Hover, Focused, Disabled', '`:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state="hover"` or `"focus"`'],
            ],
          },
        ],
      },
      {
        id: 'hierarchy',
        title: 'Hierarchy',
        blocks: [
          { type: 'p', text: 'Seven levels, from the one next step (Primary) to links inside text. Primary, Secondary gray and Secondary color carry `shadow-xs`; Tertiary and Link have no box until hover.' },
          { type: 'example', html: row(HIERARCHIES.map(([h, l]) => btn({ h, label: l }))) },
          { type: 'h3', id: 'hierarchy-colours', text: 'Colours per state' },
          {
            type: 'table',
            head: ['Hierarchy', 'Default (fill / border / text)', 'Hover', 'Disabled', 'Focused'],
            rows: [
              ['Primary', '`brand-600` / `brand-600` / `white`', '`brand-700` / `brand-700` / `white`', '`brand-200` / `brand-200` / `white`', '4 px `focus-ring` ring'],
              ['Secondary gray', '`white` / `gray-300` / `gray-700`', '`gray-50` / `gray-300` / `gray-800`', '`white` / `gray-200` / `gray-300`', '4 px `focus-ring` ring'],
              ['Secondary color', '`brand-50` / `brand-50` / `brand-700`', '`brand-100` / `brand-100` / `brand-700`', '`brand-50` / `brand-50` / `brand-300`', '4 px `focus-ring` ring'],
              ['Tertiary color', 'none / none / `brand-700`', '`brand-50` fill', 'text `gray-300`', '4 px `focus-ring` ring'],
              ['Tertiary gray', 'none / none / `gray-500`', '`gray-50` fill, text `gray-600`', 'text `gray-300`', '4 px `focus-ring` ring'],
              ['Link color', 'text `brand-600`, no padding', 'text `brand-700`', 'text `gray-300`', '2 px `brand-600` outline'],
              ['Link gray', 'text `gray-500`, no padding', 'text `gray-600`', 'text `gray-300`', '2 px `brand-600` outline'],
            ],
          },
        ],
      },
      {
        id: 'sizes',
        title: 'Sizes',
        blocks: [
          { type: 'example', html: row(SIZES.map(size => btn({ size, label: size }))) },
          { type: 'example', html: row(SIZES.map(size => btn({ h: 'secondary-gray', size, icon: 'only', label: 'Tambah' }))) },
          {
            type: 'table',
            head: ['Size', 'Height', 'Padding (y x)', 'Icon-only', 'Text style', 'Icon', 'Gap'],
            rows: [
              ['`xs`', '32', '`6 12`', '32 × 32, padding 8', 'Text sm / Semibold', '16', '4'],
              ['`sm`', '36', '`8 14`', '36 × 36, padding 8', 'Text sm / Semibold', '20', '8'],
              ['`md`', '40', '`10 16`', '40 × 40, padding 10', 'Text sm / Semibold', '20', '8'],
              ['`lg`', '44', '`10 18`', '44 × 44, padding 12', 'Text md / Semibold', '20', '8'],
              ['`xl`', '48', '`12 20`', '48 × 48, padding 14', 'Text md / Semibold', '20', '8'],
              ['`2xl`', '60', '`16 28`', '60 × 60, padding 18', 'Text lg / Semibold', '24', '12'],
            ],
          },
          { type: 'note', tone: 'info', text: '`xs` is for dense desktop UI only. Padding `6 12` uses the control padding exception (Grids & Spacing): it lands the height on 32.' },
          { type: 'h3', id: 'choosing-a-size', text: 'Choosing a size' },
          {
            type: 'list',
            items: [
              '`lg`: page header actions and form submits. The app\'s main `.btn` is this size.',
              '`md`: card toolbars, filters and compact forms.',
              '`sm`: tables, dense lists and inline pairs such as approve and reject.',
              '`xs`: actions that sit inside a table row, a card header or a toolbar next to other dense controls ("Lihat", "Unduh", a row\'s more menu). Desktop only: at 32 px it is below the 44 px touch target.',
              '`xl` and `2xl`: website heroes, landing pages and slides. Not used in the app.',
              'On touch screens use `lg` or larger, so the target is at least 44 px.',
            ],
          },
        ],
      },
      {
        id: 'icon',
        title: 'Icon',
        blocks: [
          { type: 'example', html: row([['none', 'False'], ['leading', 'Leading'], ['trailing', 'Trailing'], ['dot', 'Dot'], ['only', 'Tambah']].map(([m, l]) => btn({ h: 'secondary-gray', icon: m, label: l }))) },
          {
            type: 'list',
            items: [
              '**Leading** and **Trailing:** a 20 px icon before or after the label (24 px at `2xl`), same gap as the size.',
              '**Dot:** a 10 px `success-500` status dot before the label, same gap as an icon. Disabled turns it to the text colour.',
              '**Only:** a square button, width = height. Always give it an `aria-label` and a tooltip with the same text.',
              'Icons are Feather-style outlines with a 1.67 px stroke at 20 px, coloured with `currentColor` so they follow the text in every state.',
            ],
          },
          { type: 'h3', id: 'menu-trigger', text: 'Menu trigger' },
          { type: 'p', text: 'A button that opens a menu carries a trailing chevron-down. Set `aria-expanded`; the chevron turns 180° in 200 ms when it is `true`.' },
          { type: 'example', html: btn({ h: 'secondary-gray', icon: 'trailing', glyph: 'chevron-down', label: 'Ekspor', extra: 'aria-haspopup="menu" aria-expanded="false" data-demo' }), caption: 'Click the button to flip `aria-expanded`.' },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'p', text: 'Hover moves one step darker, Focused adds a ring for keyboard users, Disabled fades to the light steps. Pressing scales the button to 96 %.' },
          { type: 'example', html: matrix(false), code: false },
          {
            type: 'list',
            items: [
              'Colour changes take 150 ms with `--ease`. Press is `scale(.96)`.',
              'Focused shows only on `:focus-visible`, so a mouse click leaves no ring.',
              'The ring is `0 0 0 4px var(--focus-ring)` (`brand-600` at 20 %) in every hierarchy, on top of `shadow-xs` where the variant has one. Link hierarchies have no box, so they use the global 2 px `brand-600` outline with 2 px offset.',
              'Disabled has no hover and no press, and shows `cursor: not-allowed`.',
            ],
          },
        ],
      },
      {
        id: 'destructive',
        title: 'Destructive',
        blocks: [
          { type: 'p', text: 'Destructive=True swaps Brand and Gray for Error. Use it only when the destructive action is the primary action of the view, so the user sees it is high-consequence.' },
          { type: 'example', html: row(HIERARCHIES.map(([h, l]) => btn({ h, label: l, destructive: true }))) },
          { type: 'example', html: matrix(true), code: false },
          {
            type: 'table',
            head: ['Hierarchy', 'Default', 'Hover', 'Disabled', 'Focused'],
            rows: [
              ['Primary', '`error-600` / `error-600` / `white`', '`error-700`', '`error-200`', '4 px `error-100` ring'],
              ['Secondary gray', '`white` / `error-300` / `error-700`', '`error-50` fill, text `error-800`', 'border `error-200`, text `error-300`', '4 px `error-100` ring'],
              ['Secondary color', '`error-50` / `error-50` / `error-700`', '`error-100`', '`error-50`, text `error-300`', '4 px `error-100` ring'],
              ['Tertiary color, Tertiary gray', 'text `error-700`', '`error-50` fill (gray: text `error-800`)', 'text `error-300`', '4 px `error-100` ring'],
              ['Link color, Link gray', 'text `error-700`', 'text `error-800`', 'text `error-300`', '2 px `brand-600` outline'],
            ],
          },
        ],
      },
      {
        id: 'button-row',
        title: 'Button row',
        blocks: [
          { type: 'p', text: 'Least important on the left, Primary on the right, gap 12. Here: Batal (Tertiary gray), Simpan Draf (Secondary color), Ajukan (Secondary gray), Kirim (Primary).' },
          {
            type: 'example',
            html: flexRow([
              btn({ h: 'tertiary-gray', label: 'Batal' }),
              btn({ h: 'secondary-color', label: 'Simpan Draf' }),
              btn({ h: 'secondary-gray', label: 'Ajukan' }),
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
              { kind: 'do', html: row([btn({ h: 'tertiary-gray', label: 'Batal' }), btn({ label: 'Kirim' })]), text: 'One Primary per view. The other action steps down the hierarchy.' },
              { kind: 'dont', html: row([btn({ label: 'Batal' }), btn({ label: 'Simpan Draf' }), btn({ label: 'Kirim' })]), text: 'Three Primary buttons. Users must read every label to find the next step.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: btn({ h: 'secondary-gray', label: 'Lihat Detail' }), text: 'An action is a rectangle with a fill or a border.' },
              { kind: 'dont', html: '<span class="bare">Lihat detail →</span>', text: 'Bare text with an arrow. Users have to search for the action.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: row([btn({ h: 'secondary-gray', label: 'Tolak' }), btn({ label: 'Setujui' })]), text: 'Tolak is one of several choices, so it uses Secondary gray.' },
              { kind: 'dont', html: row([btn({ label: 'Tolak', destructive: true }), btn({ label: 'Setujui' })]), text: 'Two loud buttons compete. Red is for a view whose main action is destructive.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: row([btn({ h: 'secondary-gray', label: 'Batal' }), btn({ label: 'Hapus Klaim', destructive: true })]), text: 'A dialog whose purpose is deleting: the delete is the primary action, so it is Destructive.' },
              { kind: 'dont', html: row([btn({ h: 'secondary-gray', label: 'OK' }), btn({ label: 'Ya' })]), text: 'Vague labels. Name the result with a verb: Hapus Klaim, not Ya.' },
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
              'Icon-only buttons need an `aria-label` and a title-only tooltip with the same text.',
              'Never remove the focus ring. Buttons show it on `:focus-visible`; Link hierarchies show the 2 px outline.',
              'Disable with the `disabled` attribute. Use `aria-disabled="true"` instead when the button must stay focusable, for example to show a tooltip that explains why. The CSS styles both.',
              'Menu triggers set `aria-haspopup="menu"` and `aria-expanded`.',
              'With `prefers-reduced-motion: reduce`, transitions and the press scale switch off.',
            ],
          },
          { type: 'example', html: tooltipDemo, code: false, caption: 'Icon-only button with its tooltip. Tooltip spec: DESIGN.md, Tooltip and help icon.' },
          { type: 'h3', id: 'contrast', text: 'Contrast' },
          { type: 'p', text: 'Text against its fill, measured with the WCAG 2.1 formula. AA needs 4.5:1 for button text. Disabled states are exempt.' },
          {
            type: 'table',
            head: ['Variant', 'Text on fill', 'Ratio', 'AA'],
            rows: [
              ['Primary', '`white` on `brand-600`', '5.06:1', 'Passes'],
              ['Primary, hover', '`white` on `brand-700`', '6.61:1', 'Passes'],
              ['Secondary gray', '`gray-700` on `white`', '10.46:1', 'Passes'],
              ['Secondary color', '`brand-700` on `brand-50`', '6.09:1', 'Passes'],
              ['Tertiary color', '`brand-700` on `white`', '6.61:1', 'Passes'],
              ['Tertiary gray, Link gray', '`gray-500` on `white`', '4.97:1', 'Passes'],
              ['Link color', '`brand-600` on `white`', '5.06:1', 'Passes'],
              ['Destructive Primary', '`white` on `error-600`', '4.83:1', 'Passes'],
              ['Destructive Secondary gray, Tertiary, Link', '`error-700` on `white`', '6.57:1', 'Passes'],
              ['Destructive Secondary color', '`error-700` on `error-50`', '6.05:1', 'Passes'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css` (on the Overview page), then `button.css`. Every colour, size and shadow is a token, so changing a token changes every button.' },
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

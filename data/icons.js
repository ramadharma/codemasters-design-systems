// Foundations: Icons. Source: DESIGN.md §6 Icons and the icon set in data/foundations.js (DS.icon).
(() => {
  const { icon, iconNames, meta } = DS;

  const gallery = `<div class="f-icons">
${iconNames.map(n => `<button class="f-icon" type="button" data-copy-text="${n}" aria-label="Copy icon name ${n}">${icon(n)}<span>${n}</span></button>`).join('\n')}
</div>`;

  const sizes = `<div class="f-icon-sizes">
${[12, 16, 20, 24].map(s => `<figure class="f-icon-size"><span style="--s: ${s}px">${icon('file-text')}</span><figcaption class="mx">${s} px</figcaption></figure>`).join('\n')}
</div>`;

  const colours = `<div class="f-icon-sizes">
${[['gray-400', 'Inactive'], ['gray-500', 'Default in inputs'], ['brand-600', 'Active, links'], ['error-500', 'Error'], ['white', 'On gray-900']].map(([c, l]) => `<figure class="f-icon-size"><span class="${c === 'white' ? 'is-dark' : ''}" style="--s: 20px; color: var(--${c})">${icon('settings')}</span><figcaption class="mx">${l}<br><code>${c}</code></figcaption></figure>`).join('\n')}
</div>`;

  const MASK = `/* Icons that change colour with state: an SVG file drawn as a mask, coloured by currentColor. */
.ic {
  display: inline-block; flex: none; width: 20px; height: 20px;
  background: currentColor;
  -webkit-mask: var(--ic) center / contain no-repeat;
  mask: var(--ic) center / contain no-repeat;
}

<span class="ic" style="--ic: url(/assets/icons/file-text.svg)" aria-hidden="true"></span>`;

  const INLINE = `<!-- Inline SVG: stroke follows the text colour. Decorative, so hidden from screen readers. -->
<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
</svg>`;

  DS.foundations.push({
    slug: 'icons',
    name: 'Icons',
    category: 'Foundations',
    status: 'In Figma and app',
    updated: '2026-10-07',
    description: 'Feather-style outline icons on a 24 grid, in four sizes. Icons take the colour of their text, so one file serves every state.',
    figma: [{ label: 'Design system file', url: meta.figma }],
    sections: [
      {
        id: 'style',
        title: 'Style',
        blocks: [
          {
            type: 'list',
            items: [
              '**Outline, Feather style.** Drawn on a 24 × 24 grid with a 2 px round stroke, which renders at 1.67 px when the icon is 20 px.',
              '**Sizes 12, 16, 20, 24.** 20 is the default in buttons, inputs and menus; 16 in small controls and badges; 24 in large buttons and empty states.',
              '**Colour = text colour.** Icons use `currentColor`, so they follow the label next to them and every state change.',
              'Exported from Figma as SVG into `public/assets/`. Do not mix in filled or two-tone icons from other sets.',
            ],
          },
          { type: 'h3', id: 'sizes', text: 'Sizes' },
          { type: 'example', html: sizes, code: false },
          {
            type: 'table',
            head: ['Size', 'Stroke on screen', 'Use'],
            rows: [
              ['12', '1 px', 'Badge icons, tiny indicators'],
              ['16', '1.33 px', 'Small buttons, help icon, chips, menu checkmarks'],
              ['20', '1.67 px', 'Default: buttons, inputs, menu items, sidebar'],
              ['24', '2 px', 'Large buttons (`xl`, `2xl`), empty states'],
            ],
          },
        ],
      },
      {
        id: 'colour',
        title: 'Colour',
        blocks: [
          { type: 'example', html: colours, code: false },
          {
            type: 'list',
            items: [
              'Inactive sidebar icons are `gray-400` and turn white when active (sidebar `gray-900`).',
              'Icons inside inputs and tertiary buttons are `gray-500`; on a coloured element they take that element\'s text colour.',
              'Status icons use the `500` step of their role: `success-500`, `warning-500`, `error-500`, `blue-500`.',
            ],
          },
          { type: 'note', tone: 'warning', text: '`gray-400` on white is 2.58:1, below 3:1 for icons that carry meaning (help icon, toolbar, add button). `gray-500` (4.97:1) passes. Open decision for the design team.' },
        ],
      },
      {
        id: 'library',
        title: 'Library',
        blocks: [
          { type: 'p', text: `The ${iconNames.length} icons used in this documentation. Click one to copy its name. The full set lives in the Figma file.` },
          { type: 'example', html: gallery, code: false },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'h3', id: 'code-inline', text: 'Inline SVG' },
          { type: 'p', text: 'The default. The stroke follows `color`, so hover and active states need no extra file.' },
          { type: 'code', lang: 'html', code: INLINE },
          { type: 'h3', id: 'code-mask', text: 'CSS mask' },
          { type: 'p', text: 'For icons loaded as files that still need to change colour with state (the app\'s `.ic`).' },
          { type: 'code', lang: 'css', filename: 'icon.css', code: MASK },
        ],
      },
      {
        id: 'accessibility',
        title: 'Accessibility',
        blocks: [
          {
            type: 'list',
            items: [
              'An icon next to a text label is decorative: `aria-hidden="true"`.',
              'An icon-only button needs an `aria-label` and a title-only tooltip with the same text.',
              'An icon that carries meaning on its own (status, error) needs 3:1 against its background and a text alternative.',
            ],
          },
        ],
      },
    ],
  });
})();

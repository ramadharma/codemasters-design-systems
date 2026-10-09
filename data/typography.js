// Foundations: Typography. Source: DESIGN.md §3, Figma Foundations → Typography.
(() => {
  const { tokens, tokenGroupCss } = DS;

  // [token, style name, tracked]. Sizes and line heights come from the tokens.
  const SCALE = [
    ['display-2xl', 'Display 2xl', true], ['display-xl', 'Display xl', true], ['display-lg', 'Display lg', true], ['display-md', 'Display md', true],
    ['display-sm', 'Display sm', false], ['display-xs', 'Display xs', false],
    ['text-xl', 'Text xl', false], ['text-lg', 'Text lg', false], ['text-md', 'Text md', false], ['text-sm', 'Text sm', false], ['text-xs', 'Text xs', false],
  ];
  const parts = t => tokens[`--${t}`].split('/').map(v => parseInt(v, 10));
  const rem = px => `${px / 16}rem`;

  const specimen = `<div class="f-type">
${SCALE.map(([t, name, tracked]) => {
  const [size, lh] = parts(t);
  const weight = t.startsWith('display') ? 600 : 400;
  const style = `font: ${weight} var(--${t}) var(--font)${tracked ? '; letter-spacing: var(--tracking-display)' : ''}`;
  return `<div class="f-type-row">
  <button class="f-type-meta" type="button" data-copy-text="font: ${weight} var(--${t}) var(--font);" aria-label="Copy the font declaration for ${name}">
    <strong>${name}</strong><span>${size} / ${lh}${tracked ? ' · −2 %' : ''}</span>
  </button>
  <p class="f-type-sample" style="${style}">Klaim disetujui</p>
</div>`;
}).join('\n')}
</div>`;

  const weights = `<div class="f-weights">
${[[400, 'Regular'], [500, 'Medium'], [600, 'Semibold'], [700, 'Bold']].map(([w, n]) => `<div class="f-weight"><span class="f-weight-aa" style="font-weight: ${w}">Aa</span><span><strong>${n}</strong> ${w}</span></div>`).join('\n')}
</div>`;

  const font = `<div class="f-font">
  <p class="f-font-name">Timeless Grotesk</p>
  <p class="f-font-glyphs">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789 Rp % . , : ; ( ) ! ?</p>
</div>`;

  const numbers = `<div class="f-nums">
  <div><span class="mx">Proportional</span><p>Rp 1.111.111<br>Rp 8.888.888</p></div>
  <div><span class="mx">tabular-nums</span><p style="font-variant-numeric: tabular-nums">Rp 1.111.111<br>Rp 8.888.888</p></div>
</div>`;

  DS.foundations.push({
    slug: 'typography',
    name: 'Typography',
    category: 'Foundations',
    status: 'Ready',
    updated: '2026-10-09',
    description: 'One typeface, Timeless Grotesk, on an 11-step scale from Display 2xl to Text xs. Every text uses a style from the scale; never set a size or line height by hand.',
    sections: [
      {
        id: 'typeface',
        title: 'Typeface',
        blocks: [
          { type: 'p', text: '**Timeless Grotesk**, self-hosted, fallback `sans-serif`. One typeface for display and text. It ships as one variable file, `TimelessSansVF.woff2` (weights 300 to 800); Grotesk is its default style (`STYL` axis 0), so no `font-variation-settings` is needed. Decided 2026-10-09; replaced Inter.' },
          { type: 'list', items: [
            'Text xs (12 px) is the smallest size. Status, amounts and other text that must be read at 12 px use Medium 500: Timeless has a smaller x-height than Inter.',
            'IDs, claim and policy numbers use the monospace stack (`ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`): capital I and lowercase l look the same in Timeless.',
            'Preload the file on pages that use it: `<link rel="preload" href="…/TimelessSansVF.woff2" as="font" type="font/woff2" crossorigin>`.',
          ] },
          { type: 'example', html: font, code: false },
          { type: 'code', lang: 'css', filename: 'Load the font', code: DS.fontImport },
        ],
      },
      {
        id: 'scale',
        title: 'Type scale',
        blocks: [
          { type: 'p', text: 'Click a style name to copy its `font` declaration. Every style comes in four weights, named `{Style}/{Weight}`, for example `Text sm/Medium`.' },
          { type: 'example', html: specimen, code: false },
          {
            type: 'table',
            head: ['Style', 'Size', 'Line height', 'Tracking', 'Token'],
            rows: SCALE.map(([t, name, tracked]) => {
              const [size, lh] = parts(t);
              return [name, `${size} px / ${rem(size)}`, `${lh} px / ${rem(lh)}`, tracked ? '−2 % (`-0.02em`)' : '0', `\`--${t}\``];
            }),
          },
          { type: 'code', lang: 'css', filename: 'Usage', code: `.card-title { font: 600 var(--text-xl) var(--font); }\n.page-hero  { font: 600 var(--display-md) var(--font); letter-spacing: var(--tracking-display); }` },
          { type: 'p', text: 'There are also `Text xl/Regular underlined` and `Text lg/Medium underlined` for inline links.' },
        ],
      },
      {
        id: 'weights',
        title: 'Weights',
        blocks: [
          { type: 'example', html: weights, code: false },
          {
            type: 'table',
            head: ['Weight', 'Use'],
            rows: [
              ['Regular 400', 'Body text, inputs, table cells'],
              ['Medium 500', 'Labels, tabs, values, pills'],
              ['Semibold 600', 'Titles and buttons'],
              ['Bold 700', 'Not used in the app yet. Reserve for display headings outside the app (slides, marketing)'],
            ],
          },
        ],
      },
      {
        id: 'rules',
        title: 'Rules',
        blocks: [
          {
            type: 'list',
            items: [
              '**Display vs text.** Display styles are for headings only (H1–H6), never for running copy. Text styles cover everything else: body, labels, UI elements.',
              '**Base size 16 px** (`Text md`): paragraphs, inputs, dropdown options, buttons. Dense app UI (tables, tabs, labels) steps down to `Text sm`.',
              '**Line height.** Body text 1.5–2× the size (16 → 24). The bigger the text, the tighter the ratio: display text 1–1.25× (60 → 72). The scale already does this; do not override it.',
              '**Letter spacing.** Display md and larger use −2 %. In CSS write `letter-spacing: var(--tracking-display)` (`-0.02em`), never `%`.',
              '**Numbers** use `font-variant-numeric: tabular-nums` in tables, KPIs and amounts, so digits line up.',
            ],
          },
          { type: 'example', html: numbers, code: false },
        ],
      },
      {
        id: 'app',
        title: 'Use in the app',
        blocks: [
          {
            type: 'table',
            head: ['Style / weight', 'Use'],
            rows: [
              ['Display xs / Semibold', 'Page title (header bar), breadcrumb ID, KPI value'],
              ['Text xl / Semibold', 'Card title, dialog title'],
              ['Text xl / Medium', 'Stat number'],
              ['Text lg / Medium', 'Group title inside a card, KPI label'],
              ['Text md / Regular · Medium · Semibold', 'Body, inputs, dropdown options · values · buttons'],
              ['Text sm / Regular · Medium', 'Default UI text, table cells · tabs, form labels, menu items'],
              ['Text xs / Regular · Medium', 'Captions, field labels in fact grids, sub-amounts · pills'],
            ],
          },
          { type: 'p', text: 'Colour pairing: titles and values `gray-900`, labels `gray-500`, form labels `gray-700`.' },
          { type: 'note', tone: 'warning', text: 'The app also uses **Micro 10 / 16** (stat card labels, step notes). It is off the scale. Do not use it in new work.' },
        ],
      },
      {
        id: 'outside-web',
        title: 'Slides and documents',
        blocks: [
          {
            type: 'list',
            items: [
              'Use Inter, not Timeless: Google Slides and Docs offer Inter from More fonts, Timeless has to be installed. Titles Inter Semibold 600 (Bold 700 allowed for display headings), body Inter Regular or Medium.',
              'Keep the ratios of the scale, for example 40 / 24 / 16 on a 16:9 slide.',
            ],
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
              { kind: 'do', html: '<p style="margin: 0; font: 600 var(--text-xl) var(--font); color: var(--gray-900)">Ringkasan klaim</p>', text: 'A style from the scale: Text xl / Semibold.' },
              { kind: 'dont', html: '<p style="margin: 0; font: 600 19px/23px var(--font); color: var(--gray-900)">Ringkasan klaim</p>', text: '19 / 23 set by hand. Nearly Text xl, but off the scale, so the rhythm breaks.' },
            ],
          },
        ],
      },
      { id: 'tokens', title: 'Tokens', blocks: [{ type: 'code', lang: 'css', filename: 'tokens.css (typography)', code: tokenGroupCss('Typography') }] },
    ],
  });
})();

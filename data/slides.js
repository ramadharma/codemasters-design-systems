// Applications: Slides. Source: the Sembuh pitch deck kit (create-sembuh-pitchdeck skill: references/*.md and the
// layout constants in scripts/sembuh_deck.py, measured from "Sembuh AI Deck Guides.pdf"). The skill itself is not
// changed; this page is the design-system record. Differences from the kit: Inter instead of Google Sans, colours named
// as tokens, and the "Powered by Codemasters" endorsement.
(() => {
  // ---- Slide mockups are drawn in canvas px (1920 x 1080) and scale with their frame: % for position, cqw for type.
  const X = v => `${(v / 19.2).toFixed(3)}%`;
  const Y = v => `${(v / 10.8).toFixed(3)}%`;
  const F = v => `${(v / 19.2).toFixed(3)}cqw`;
  const box = (x, y, w, h, style = '', html = '') =>
    `<div class="f-sl" style="left: ${X(x)}; top: ${Y(y)}; width: ${X(w)};${h ? ` height: ${Y(h)};` : ''} ${style}">${html}</div>`;
  const text = (size, weight, colour, lh = 1.4) => `font: ${weight} ${F(size)}/${lh} var(--font); color: var(--${colour});`;
  const LOGO = 'assets/brand/sembuh-logo.png';
  const LOGO_W = 'assets/brand/sembuh-logo-white.png';
  const CM = 'assets/brand/codemasters-logo.png';

  // Logo with "Powered by Codemasters": endorsement 40 % of the logo height, 20 % gap (Logo page).
  const lockup = (x, y, w, white = false) => {
    const h = w / 6.84;
    return box(x, y, w, 0, '', `<img src="${white ? LOGO_W : LOGO}" alt="Sembuh AI" style="display: block; width: 100%">
<p style="display: flex; align-items: center; gap: ${F(8)}; margin: ${F(h * 0.2)} 0 0; ${text(h * 0.32, 500, white ? 'white' : 'gray-500', 1)}">Powered by <img src="${CM}" alt="Codemasters" style="height: ${F(h * 0.4)}"></p>`);
  };
  const footer = (light = true) =>
    (light ? box(80, 1000, 1760, 1, 'background: var(--gray-300);') + box(80, 1027, 860, 0, text(16, 400, 'gray-500'), 'Sumber: data internal Sembuh AI, Q3 2026') : '') +
    box(1130, 1017, 710, 0, `text-align: right; ${text(16, 400, light ? 'brand-800' : 'white')}`, 'Internal documentation shared for limited client review only.<br>Unauthorized use, copy, or distribution is prohibited');
  const frame = (bg, inner, caption) => `<figure class="f-slide"><div class="f-slide-frame" style="background-image: url(assets/slides/${bg}.jpg)">${inner}</div><figcaption class="mx">${caption}</figcaption></figure>`;

  const cover = frame('bg-content', [
    box(80, 80, 268, 100, `display: grid; place-items: center; border: ${F(1)} solid var(--gray-300); border-radius: ${F(8)}; background: var(--white); ${text(20, 400, 'gray-500')}`, "[Client's logo here]"),
    box(80, 0, 770, 0, `top: auto; bottom: ${Y(1080 - 906)}; ${text(96, 500, 'gray-900', 1.2)}`, 'Keputusan klaim lebih cepat'), // bottom-anchored at 906: longer titles grow upwards
    box(80, 946, 900, 0, text(24, 400, 'gray-500'), '7 Oktober 2026&emsp;Seri A'),
    lockup(1540, 912, 300),
  ].join(''), 'Cover · logo bottom-right with the endorsement');

  const METRICS = [['Asuransi aktif', '3', 'Sejak Januari 2026'], ['Waktu analisis', '−60%', 'Dibanding proses manual'], ['Akurasi FWA', '94%', 'Pada 12.000 klaim uji']];
  const content = frame('bg-content', [
    box(1620, 80, 220, 32, '', `<img src="${LOGO}" alt="Sembuh AI" style="display: block; width: 100%">`),
    box(80, 80, 1310, 0, `text-transform: uppercase; ${text(20, 400, 'gray-500')}`, 'Traction'),
    box(80, 124, 1760, 0, text(48, 500, 'gray-900', 1.2), 'Tiga asuransi aktif, waktu analisis turun 60%'),
    ...METRICS.map(([l, v, s], i) => box(80 + i * 600, 222, 560, 0, `padding: ${F(40)}; border-radius: ${F(12)}; background: var(--gray-100); box-sizing: border-box;`,
      `<div style="text-transform: uppercase; ${text(20, 400, 'gray-500')}">${l}</div><div style="margin-top: ${F(16)}; ${text(36, 500, 'brand-800', 1.2)}">${v}</div><div style="margin-top: ${F(8)}; ${text(20, 400, 'gray-500')}">${s}</div>`)),
    footer(true),
  ].join(''), 'Content · eyebrow 80, headline 124, body 222, footer rule 1000');

  const AGENDA = ['Masalah', 'Solusi', 'Traction', 'Rencana', 'Tim'];
  const toc = frame('bg-divider', [
    box(1620, 80, 220, 32, '', `<img src="${LOGO_W}" alt="Sembuh AI" style="display: block; width: 100%">`),
    box(80, 80, 1160, 0, text(48, 500, 'white', 1.2), 'Table of The Contents'),
    box(83, 462, 4, AGENDA.length * 70, 'background: var(--brand-300);'),
    box(80, 462 + 2 * 70, 10, 70, 'background: var(--white);'),
    ...AGENDA.map((a, i) => box(132, 462 + i * 70, 900, 70, `display: flex; align-items: center; gap: ${F(32)}; ${text(36, 500, i === 2 ? 'white' : 'brand-300', 1.2)}`, `<span>0${i + 1}</span><span>${a}</span>`)),
    footer(false),
  ].join(''), 'Section · the agenda again, current item in white');

  const back = frame('bg-content', [
    lockup(80, 80, 384),
    box(80, 200, 1310, 0, text(36, 500, 'gray-900', 1.2), 'Analisis klaim yang adil, cepat dan bisa dipertanggungjawabkan.'),
    box(80, 640, 900, 0, '', `<div style="${text(30, 400, 'gray-900')}">Nama Pengguna</div><div style="margin-top: ${F(32)}; ${text(24, 400, 'gray-500')}">Head of Partnerships</div><div style="margin-top: ${F(24)}; ${text(24, 400, 'gray-500')}">email@perusahaan.com</div>`),
    box(80, 958, 900, 0, text(30, 400, 'gray-500'), 'www.sembuh.ai'),
  ].join(''), 'Back cover · logo top-left with the endorsement');

  // Canvas diagram: margins, 12 columns of 110 with 40 gutters, vertical anchors.
  const ANCHORS = [[80, 'Eyebrow, logo 80'], [124, 'Headline 124'], [222, 'Content 222'], [1000, 'Footer rule 1000']];
  const canvas = `<figure class="f-slide is-wide"><div class="f-slide-frame" style="background: var(--white)">
${box(80, 80, 1760, 920, `outline: ${F(2)} dashed var(--brand-300);`)}
${Array.from({ length: 12 }, (_, i) => box(80 + i * 150, 80, 110, 920, 'background: rgba(240,68,56,.08);')).join('')}
${ANCHORS.map(([y, l]) => box(0, y, 1920, 0, `border-top: ${F(2)} solid var(--brand-500);`, `<span style="position: absolute; left: ${F(1300)}; top: ${F(4)}; ${text(22, 600, 'brand-700', 1)}">${l}</span>`)).join('')}
</div><figcaption class="mx">1920 × 1080 · margin 80 · 12 columns × 110 · gutter 40</figcaption></figure>`;

  const TYPE = [
    ['title1', 96, '1.2', 'Medium', 'gray-900', 'Cover title, hero statement'],
    ['headline1', 48, '1.2', 'Medium', 'gray-900 (white on section slides)', 'Slide title, agenda title'],
    ['headline2', 36, '1.2', 'Medium', 'gray-900', 'Metric values, secondary headlines, agenda rows, back-cover tagline'],
    ['body_large', 30, '1.4', 'Regular', 'gray-900', 'Card titles, quotes, callouts'],
    ['body', 24, '1.4', 'Regular', 'gray-500', 'Body copy, card descriptions, support line'],
    ['note', 20, '1.4', 'Regular', 'gray-500', 'Eyebrow (uppercase), labels, chart labels, attribution'],
    ['table', 20, '1.4', 'Regular (Medium in header and group rows)', 'gray-900', 'Table cells'],
    ['footer', 16, '1.4', 'Regular', 'gray-500 (legal notice `brand-800`)', 'Source, legal notice'],
  ];
  const typeSpecimen = `<div class="f-type">
${TYPE.map(([t, px, lh, w]) => `<div class="f-type-row"><div class="f-type-meta" style="cursor: default"><strong>${t}</strong><span>${px} px · ${px / 2} pt · ${w.split(' ')[0]}</span></div><p class="f-type-sample" style="font: ${w.startsWith('Medium') ? 500 : 400} ${Math.round(px / 2)}px/${lh} var(--font)">Klaim lebih cepat</p></div>`).join('\n')}
</div>`;

  const COLOURS = [
    ['color.primary', 'gray-900', 'Primary text, headlines'],
    ['color.secondary', 'gray-500', 'Secondary text, metadata'],
    ['color.grey', 'gray-300', 'Borders, dividers, image placeholder'],
    ['color.surface', 'gray-100', 'Neutral containers'],
    ['color.white', 'white', 'Canvas, table body, text on dark blue'],
    ['color.blue.dark', 'brand-800', 'High-emphasis blue text, legal notice, flow lines'],
    ['color.blue.main', 'brand-400', 'Brand blue: solid fills, table header, section background'],
    ['color.blue.secondary', 'brand-300', 'Inactive agenda rows, secondary bars'],
    ['color.blue.surface', 'brand-100', 'Blue-tinted surfaces, table group rows'],
  ];

  DS.slideTokens = {
    canvas: { width: 1920, height: 1080, margin: 80, unit: 'px; 1 px = 0.5 pt on a 13.333 × 7.5 in page' },
    grid: { columns: 12, column: 110, gutter: 40, contentWidth: 1760 },
    anchors: { eyebrow: 80, logo: 80, headline: 124, content: 222, footerRule: 1000, legalText: 1017, sourceText: 1027 },
    font: 'Inter',
    type: Object.fromEntries(TYPE.map(([t, px, lh, w]) => [t, { size: px, lineHeight: +lh, weight: w.startsWith('Medium') ? 500 : 400 }])),
    colour: Object.fromEntries(COLOURS.map(([k, t]) => [k.replace('color.', ''), `var(--${t})`])),
    spacing: [4, 8, 16, 20, 24, 28, 32, 40, 56, 64, 80],
    radius: { card: 12, small: 8, max: 16 },
    shadow: 'none',
    logo: { ratio: 6.84, cover: { x: 1540, width: 300 }, content: { x: 1620, y: 80, width: 220 }, backCover: { x: 80, y: 80, width: 384 } },
  };
  const SLIDE_TOKENS = JSON.stringify(DS.slideTokens, null, 2);

  DS.applications.push({
    slug: 'slides',
    name: 'Slides',
    category: 'Applications',
    status: 'In progress',
    updated: '2026-10-07',
    description: 'Pitch decks and presentations for Codemasters, Sembuh AI and Flipmaster: a 1920 × 1080 canvas, a 12-column grid, fixed anchors and the same tokens as the web.',
    figma: [{ label: 'Design system file', url: DS.meta.figma }],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          { type: 'p', text: 'This page records the slide system from the Sembuh pitch deck kit. The team builds in **Google Slides**; a deck generated as `.pptx` opens there with every text, shape and table still editable.' },
          {
            type: 'list',
            items: [
              '**Flexible content, consistent design.** The author owns topic, story, data and slide count. The system owns type, colour, grid, spacing, components and logo use.',
              '**Inter** in every deck. It is a Google Font, so Google Slides and Docs can add it from **More fonts** without installing anything. (The kit specifies Google Sans, which Google Slides does not offer.)',
              'Colours are the web tokens. Each company swaps only its blue scale (see Logo).',
            ],
          },
          { type: 'example', html: `<div class="f-slides">\n${cover}\n${content}\n${toc}\n${back}\n</div>`, code: false },
        ],
      },
      {
        id: 'canvas',
        title: 'Canvas and grid',
        blocks: [
          { type: 'example', html: canvas, code: false },
          {
            type: 'table',
            head: ['Item', 'Value'],
            rows: [
              ['Canvas', '1920 × 1080 px, 16:9. In Google Slides: custom size 13.333 × 7.5 in, where 1 px = 0.5 pt'],
              ['Margins', '80 on every side. Safe area x 80–1840, y 80–1000'],
              ['Content width', '1760'],
              ['Grid', '12 columns of 110, gutter 40'],
              ['Common spans', '3 col = 380 (4-up), 4 = 560 (3-up), 6 = 860 (2-up), 7 + 5 = 1010 + 710 (feature split), 12 = 1760'],
              ['Footer zone', 'y 1000–1080, below the safe area'],
            ],
          },
          {
            type: 'table',
            head: ['Vertical anchor', 'y'],
            rows: [
              ['Eyebrow, logo', '80'],
              ['Headline', '124'],
              ['Content top', '222. Content is top-aligned; leftover space goes to the bottom'],
              ['Support line (optional)', 'Headline bottom + 16; content then starts at max(222, support bottom + 40)'],
              ['Footer rule', '1000'],
            ],
          },
        ],
      },
      {
        id: 'typography',
        title: 'Typography',
        blocks: [
          { type: 'p', text: 'Inter, two weights: Regular 400 and Medium 500. Sizes are canvas px; pt is what Google Slides shows on the 13.333 × 7.5 in page.' },
          { type: 'example', html: typeSpecimen, code: false },
          {
            type: 'table',
            head: ['Token', 'px', 'pt', 'Line height', 'Weight', 'Colour', 'Use'],
            rows: TYPE.map(([t, px, lh, w, c, use]) => [`\`${t}\``, String(px), String(px / 2), lh, w, c.replace(/([a-z]+-\d+)/g, '`$1`'), use]),
          },
        ],
      },
      {
        id: 'colour',
        title: 'Colour',
        blocks: [
          {
            type: 'table',
            head: ['Kit name', 'Token', 'Use'],
            rows: COLOURS.map(([k, t, use]) => [`\`${k}\``, `\`${t}\``, use]),
          },
          { type: 'p', text: 'Chart series order: `brand-400`, `brand-300`, `brand-100`, `gray-300`. The only exception is the red "today" line in a Gantt chart.' },
          {
            type: 'table',
            head: ['Card variant', 'Fill', 'Border', 'Title / body'],
            rows: [
              ['standard', '`white`', '1 px `gray-300`', '`gray-900` / `gray-500`'],
              ['surface', '`gray-100`', 'none', '`gray-900` / `gray-500`'],
              ['blue', '`brand-100`', 'none', '`brand-800` / `brand-800`'],
              ['blue_main', '`brand-400`', 'none', '`white` / `white`'],
              ['blue_dark', '`brand-800`', 'none', '`white` / `white`'],
              ['highlight', '`white`', '1 px `brand-400`', '`gray-900` / `gray-500`'],
            ],
          },
          { type: 'note', tone: 'warning', text: 'White on `brand-400` is 2.63:1: section slide text, table headers, the blue_main card and the section bar. It fails even the 3:1 large-text bar. `brand-800` (8.64:1) passes. Open decision for the design team.' },
        ],
      },
      {
        id: 'spacing',
        title: 'Spacing, radius and shadow',
        blocks: [
          {
            type: 'table',
            head: ['Item', 'Value'],
            rows: [
              ['Spacing tokens', '4, 8, 16, 20, 24, 28, 32, 40, 56, 64, 80'],
              ['Card padding', '40'],
              ['Radius', 'Cards 12; badges, bars, placeholders and the client-logo box 8; never above 16'],
              ['Shadow', 'None, anywhere'],
            ],
          },
          { type: 'p', text: 'Stack elements by measured text height plus a spacing token, never by guessed offsets.' },
        ],
      },
      {
        id: 'slide-types',
        title: 'Slide types',
        blocks: [
          {
            type: 'table',
            head: ['Type', 'Background', 'Logo', 'Contents'],
            rows: [
              ['Cover', 'Light (`bg-content`)', 'Colour lockup, 300 wide, bottom-right, bottom edge at 1000', 'Client-logo box 268 × 100 at (80, 80). Title `title1`, span 7, bottom at 906. Date line `body` at 946. No footer'],
              ['Section', 'Blue (`bg-divider`)', 'White logo 220 wide at (1620, 80)', '"Table of The Contents" `headline1` white. Agenda rows `headline2`, 70 apart from y 462; current row white with a 10 px white marker, others `brand-300` on a 4 px rail. Legal notice only'],
              ['Content', 'Light', 'Colour logo 220 wide at (1620, 80)', 'Eyebrow `note` uppercase, headline `headline1`, optional support line, body from 222, full footer'],
              ['Back cover', 'Light', 'Colour lockup, 384 wide, top-left at (80, 80)', 'Tagline `headline2` at 200. Contact block from 640. Website URL `body_large`, bottom at 1000'],
            ],
          },
          { type: 'note', tone: 'info', text: '"Powered by Codemasters" sits under the logo on the cover and the back cover. Content and section slides keep the logo alone, where the 32 px logo leaves no room for a readable endorsement. Proposal: confirm with the brand owner. The back-cover tagline moves from y 160 to 200 to clear the lockup.' },
          {
            type: 'table',
            head: ['Footer element', 'Spec'],
            rows: [
              ['Rule', '1 px `gray-300`, x 80, y 1000, 1760 wide. Not on section slides'],
              ['Source', '`footer` `gray-500`, left, box at (80, 1027), 860 wide'],
              ['Legal notice', '`footer` `brand-800` (white on section slides), right-aligned, box x 1130, 710 wide, y 1017, two lines'],
            ],
          },
        ],
      },
      {
        id: 'components',
        title: 'Components',
        blocks: [
          {
            type: 'table',
            head: ['Component', 'Spec'],
            rows: [
              ['Card', 'Six variants (Colour), radius 12, padding 40, height fits the content'],
              ['Metric card', 'surface. Label `note` uppercase, +16, value `headline2` (`brand-800` when emphasised), +8, support `note`'],
              ['Feature card', 'standard. Title `body_large`, +16, description `body`'],
              ['Process steps', 'standard cards on equal tracks, equal heights. Number "01" `note` `brand-400`, title `body_large`, description `body`. Optional 2 px `brand-300` connectors'],
              ['Table', 'Header and rows 72 high, cell padding `16 24`. Header `brand-400` with white Medium text, centred; numbers right-aligned; group rows `brand-100`. Neutral variant: `gray-100` header'],
              ['Bar / column chart', 'Native shapes, not chart objects. Bars 40 high (columns up to 160 wide), radius 8. Highlight `brand-400`, others `brand-300`. Labels `note`'],
              ['Gantt', 'Neutral table, label column 200. Bars 40 high, radius 8, in `brand-800` / `brand-400` / `brand-300`'],
              ['Quote', '`body_large` `gray-900`, +24, "— attribution" `note` `gray-500`'],
              ['Callout', 'blue card. Label `note` uppercase `brand-800`, +16, text `body_large`'],
              ['Badge', '`brand-100` fill, `note` `brand-800`, padding `8 16`, radius 8'],
              ['Section bar', '56 high, `brand-400`, radius 8, `body` Medium white, centred'],
              ['Bullets', '"—" marker `brand-400`, indent 32, gap 16, `body` `gray-500`'],
              ['Image placeholder', '`gray-300` fill, radius 8, "Place an image here". Real images fit inside the box, never stretched'],
              ['Legend', '24 × 24 swatch, 16 to the label (`body` `gray-500`), 40 between entries'],
            ],
          },
        ],
      },
      {
        id: 'patterns',
        title: 'Patterns',
        blocks: [
          { type: 'p', text: 'Pick the pattern from the information, never the other way round: content → one primary message → relationship → structure → pattern → components → tokens.' },
          {
            type: 'table',
            head: ['Information', 'Pattern'],
            rows: [
              ['One message that needs strong emphasis', 'Hero message, Central statement, Large number + context'],
              ['A claim backed by evidence', 'Text + visual, Text + metric, Insight + evidence'],
              ['Several related numbers', 'Metric group, Headline + chart, Headline + table'],
              ['Equal-weight concepts', 'Card group, Multi-column information (Highlighted card group when one matters more)'],
              ['Change or contrast', 'Problem → solution, Before → after, Comparison'],
              ['How something works', 'Process, Product workflow (input → AI → analysis → output), Layered architecture'],
              ['Structure of ideas', 'Framework, Nested hierarchy, Hub and spoke, 2 × 2 matrix, Funnel'],
              ['Time', 'Roadmap'],
              ['Proof from outside', 'Quote + context, Image + caption, Screenshot + explanation, Full-bleed visual'],
              ['Ending', 'Closing insight, CTA'],
            ],
          },
        ],
      },
      {
        id: 'rules',
        title: 'Composition rules',
        blocks: [
          {
            type: 'list',
            items: [
              'Every content slide uses the same anchors: eyebrow 80, headline 124, body 222, rule 1000.',
              'Top-align content at 222; never vertically centre a card row to fill the slide.',
              'Every content slide carries the footer. Section transitions repeat the agenda with the current item highlighted.',
              'Every x comes from the grid. Cards in a group share top edges, padding and treatment, and are never taller than their content.',
              'One focal point per slide; supporting content is visibly subordinate. Highlight one data point per chart.',
              'Headlines state the takeaway, not the topic ("Waktu analisis turun 60%", not "Hasil").',
              'Left-align by default; never centre dense text. Put text straight on the background instead of carding everything.',
              'Text too long? Simplify, remove, reorganise, change the pattern, split the slide, and only then adjust the type size.',
            ],
          },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'table',
            head: ['Do', "Don't"],
            rows: [
              ['Only token colours, type sizes, spacing values and radii', 'Shadows, gradients or decorative shapes'],
              ['Colour logo on light slides, white logo on blue or photos', 'Stretch, crop, rotate or recolour a logo'],
              ['Light background for content, blue only for section slides', 'The section background behind ordinary content'],
              ['Charts as native shapes in the brand blues', 'Embedded chart objects, which bring their own colours'],
              ['Images at their own proportions', 'Radius above 16, pill shapes, heavy borders around everything'],
              ['Varied layouts when the information differs', 'Crowded slides, tiny text in tables and charts'],
            ],
          },
        ],
      },
      {
        id: 'google-slides',
        title: 'Google Slides',
        blocks: [
          {
            type: 'list',
            items: [
              'Page setup: **File → Page setup → Custom, 13.333 × 7.5 in**, so the px values above map to pt by halving them.',
              'Font: Inter, added once via **Font → More fonts** (Regular and Medium). It renders the same on every machine.',
              'Keep everything editable: text, shapes, lines and tables stay native; never flatten a slide to an image.',
              'Draw charts as shapes (or paste them as shapes). Turn off autofit; set text box insets to 0 so text sits on the anchors.',
              'No animations or effects.',
            ],
          },
          { type: 'note', tone: 'info', text: 'A shared Google Slides template (master layouts for the four slide types per company) is the next step. Until it exists, start from a deck generated with the pitch deck kit.' },
        ],
      },
      {
        id: 'conflicts',
        title: 'Decisions and open points',
        blocks: [
          {
            type: 'table',
            head: ['Topic', 'Kit says', 'This system'],
            rows: [
              ['Font', 'Google Sans', 'Inter (decided 7 Oct 2026, after trying Instrument Sans and Albert Sans)'],
              ['Grid', 'Prose 124 / 24; code 110 / 40', '110 / 40, which reproduces every card width in the reference deck'],
              ['Card padding', 'Docstring 32; constant 40', '40'],
              ['Headline y', '124 and 128 in different places', '124'],
              ['Table header', 'Prose: neutral fill; code: `brand-400` + white', '`brand-400` + white, neutral as a variant (contrast open, see Colour)'],
              ['`brand-400` on white', 'Step numbers, bullet markers', '2.63:1: fine for the marker shape, too light for the "01" text. Open'],
              ['Endorsement', '—', 'Cover and back cover only. Proposal'],
            ],
          },
        ],
      },
      { id: 'tokens', title: 'Slide tokens', blocks: [{ type: 'code', lang: 'json', filename: 'slides.tokens.json', code: SLIDE_TOKENS }] },
    ],
  });
})();

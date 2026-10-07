// Foundations: Colors. Source: DESIGN.md §2 Colour and §10, Figma Foundations → Colors.
// Swatches are generated from DS.scales, so the page, tokens.css and the export never disagree.
(() => {
  const { scales, steps, tokenGroupCss } = DS;
  const FIGMA = 'https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=';

  // WCAG contrast, used to say which text colour each swatch can carry.
  const lum = hex => {
    const c = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255).map(v => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };
  const ratio = (a, b) => {
    const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
    return (x + 0.05) / (y + 0.05);
  };
  const NAMES = { gray: 'Gray', brand: 'Brand', error: 'Error', warning: 'Warning', success: 'Success', 'blue-gray': 'Blue gray', 'blue-light': 'Blue light', blue: 'Blue', indigo: 'Indigo', purple: 'Purple', pink: 'Pink', rose: 'Rosé', orange: 'Orange' };
  const PRIMARY = ['gray', 'brand', 'error', 'warning', 'success'];
  const SECONDARY = ['blue-gray', 'blue-light', 'blue', 'indigo', 'purple', 'pink', 'rose', 'orange'];
  const hexOf = (family, i) => `#${scales[family].split(' ')[i].toUpperCase()}`;

  // One swatch: the chip shows "Aa" in white when white text passes AA (4.5:1) on it, else in gray-900.
  const swatch = (family, i) => {
    const hex = hexOf(family, i);
    const onWhite = ratio(hex, '#FFFFFF');
    const ink = onWhite >= 4.5 ? 'var(--white)' : 'var(--gray-900)';
    const r = onWhite >= 4.5 ? onWhite : ratio(hex, '#101828');
    const token = `${family}-${steps[i]}`;
    return `<button class="f-swatch" type="button" data-copy-text="var(--${token})" aria-label="Copy var(--${token}), ${hex}">
  <span class="f-chip" style="background: var(--${token}); color: ${ink}">Aa <small>${r.toFixed(1)}</small></span>
  <span class="f-step">${steps[i]}</span><span class="f-hex">${hex}</span>
</button>`;
  };
  const scale = family => `<div class="f-swatches">\n${steps.map((_, i) => swatch(family, i)).join('\n')}\n</div>`;
  const hexTable = families => ({
    type: 'table',
    head: ['Step', ...families.map(f => NAMES[f])],
    rows: steps.map((s, i) => [String(s), ...families.map(f => `\`${hexOf(f, i)}\``)]),
  });

  const ROLE = { gray: 'Neutral foundation. Almost everything in the UI: text, form fields, backgrounds, dividers.', brand: 'The primary colour. All interactive elements: buttons, links, inputs, active tabs. Sets the feel of the product.', error: 'Error states and destructive actions (delete, reject, remove a user).', warning: 'Potentially destructive or on-hold actions; confirmations that must catch the eye.', success: 'Positive actions, positive trends, successful confirmations.' };

  const semanticDemo = `<div class="f-roles">
${[['success', 'Success', 'check', 'Klaim disetujui.'], ['warning', 'Warning', 'alert', 'AI confidence berada dibawah 80%, silakan periksa klaim kembali.'], ['error', 'Error', 'alert-circle', 'Dokumen invoice tidak terbaca.'], ['blue', 'Info', 'info', 'Analisis berjalan di latar belakang.']]
  .map(([f, l, g, t]) => `<div class="f-role" style="--r-bg: var(--${f}-50); --r-bd: var(--${f}-200); --r-fg: var(--${f}-700); --r-ic: var(--${f}-500)">${DS.icon(g)}<span><strong>${l}.</strong> ${t}</span></div>`)
  .join('\n')}
</div>`;

  const PILLS = [['gray', 'Baru'], ['indigo', 'Siap diekstrak'], ['blue', 'Sedang Ditinjau'], ['purple', 'Siap Ditinjau'], ['warning', 'Memeriksa Eligibility'], ['orange', 'Perlu Revisi'], ['success', 'Disetujui: Sembuh'], ['error', 'Ditolak'], ['blue-gray', 'Multiple']];
  const pillsDemo = `<div class="f-pills">\n${PILLS.map(([f, t]) => `<span class="sb-badge" data-size="sm" data-color="${f}">${t}</span>`).join('\n')}\n</div>`;

  const SERIES = [['Sembuh AI', 'brand'], ['TPA', 'orange'], ['Seri 3', 'blue-light'], ['Seri 4', 'purple'], ['Seri 5', 'pink'], ['Seri 6', 'indigo'], ['Seri 7', 'blue-gray']];
  const dataviz = `<div class="f-viz">
${SERIES.map(([n, f], i) => `<div class="f-viz-row"><span class="f-viz-name">${n}</span><span class="f-viz-bar" style="width: ${92 - i * 10}%; background: var(--${f}-500)"></span><span class="f-viz-bar is-light" style="width: ${40 - i * 4}%; background: var(--${f}-300)"></span></div>`).join('\n')}
</div>`;

  DS.foundations.push({
    slug: 'colors',
    name: 'Colors',
    category: 'Foundations',
    status: 'In Figma and app',
    updated: '2026-10-07',
    description: 'Thirteen colour families of 11 steps each. Every colour on screen is one of these tokens, never a free-picked hex.',
    figma: [
      { label: 'Colors', url: `${FIGMA}1525-271581` },
      { label: 'Notes and documentation', url: `${FIGMA}1525-274384` },
    ],
    sections: [
      {
        id: 'principles',
        title: 'Principles',
        blocks: [
          { type: 'p', text: 'Every colour is a step on one of the scales below. Token name = `--{family}-{step}` (`Rosé` is `rose`, `Blue gray` is `blue-gray`, `Blue light` is `blue-light`). Click a swatch to copy its token.' },
          {
            type: 'list',
            items: [
              '**Define before you design.** Never pick a colour with the colour picker. Pick a colour style (Figma) or a token (code). Free-picked colours give inconsistent screens and developers cannot tell which colour to use.',
              '**Full scales from the start.** Every family has 11 steps (25–900), also when a screen needs only two of them.',
              '**Data first, chrome second.** Colour is reserved for status, data series and the one primary action.',
            ],
          },
          {
            type: 'table',
            head: ['Group', 'Families', 'Role'],
            rows: [
              ['Neutral', 'Gray', 'Foundation of the system: text, form fields, backgrounds, dividers.'],
              ['Primary', 'Brand', 'The brand colour. All interactive elements: buttons, links, inputs.'],
              ['Accent', 'Blue gray, Blue light, Blue, Indigo, Purple, Pink, Rosé, Orange', 'Supporting colours for labels, badges and chart series. Use sparingly.'],
              ['Feedback', 'Success, Warning, Error', 'Semantic states: feedback and warnings to the user.'],
            ],
          },
        ],
      },
      {
        id: 'primary',
        title: 'Primary colours',
        blocks: [
          { type: 'p', text: 'The main colours; they make up most of every screen. "Aa" on each chip shows which text colour passes 4.5:1 on it, with the ratio.' },
          ...PRIMARY.flatMap(f => [
            { type: 'h3', id: `color-${f}`, text: NAMES[f] },
            { type: 'p', text: ROLE[f] },
            { type: 'example', html: scale(f), code: false },
          ]),
          hexTable(PRIMARY),
          { type: 'p', text: 'Plus `--white: #FFFFFF`.' },
        ],
      },
      {
        id: 'secondary',
        title: 'Secondary colours',
        blocks: [
          { type: 'p', text: 'For pills, tags, alerts, labels and chart series. Use them sparingly, as accents; the primary colours take precedence.' },
          ...SECONDARY.flatMap(f => [{ type: 'h3', id: `color-${f}`, text: NAMES[f] }, { type: 'example', html: scale(f), code: false }]),
          hexTable(SECONDARY),
        ],
      },
      {
        id: 'usage',
        title: 'How the scales are used',
        blocks: [
          {
            type: 'list',
            items: [
              '**Fill / border / text pattern** for any tinted element: `50` fill, `200` border, `700` text, `500` icon. Use `25` for very quiet row tints (flagged or review rows).',
              '**Text on white:** `700`–`900` for text; `500` and up only for icons or large text. Steps `25`–`400` never carry text on white.',
              '**Solid fills with white text** (buttons): `500`–`900`.',
              '**Grays: few, used the same way every time.** Give each gray one job and keep it in every component: `gray-300` is always the input border, `gray-200` always the divider.',
            ],
          },
          { type: 'h3', id: 'usage-gray', text: 'Gray in the app' },
          {
            type: 'table',
            head: ['Token', 'Use in the app'],
            rows: [
              ['`gray-25`', 'Page background, subtle card fill, inner boxes'],
              ['`gray-50`', 'Table header, hover row, secondary hover'],
              ['`gray-100`', 'Chips, menu borders, dividers in menus, skeletons'],
              ['`gray-200`', 'Row dividers, inner card borders'],
              ['`gray-300`', 'Card, input and tab borders'],
              ['`gray-400`', 'Inactive icons, muted text, input hover border'],
              ['`gray-500`', 'Secondary text, labels, placeholders'],
              ['`gray-600`', 'Supporting text that needs more weight than `gray-500`'],
              ['`gray-700`', 'Form labels, secondary button text'],
              ['`gray-800`', 'Sidebar hover / active item'],
              ['`gray-900`', 'Body text, sidebar background, toast'],
            ],
          },
          { type: 'h3', id: 'usage-brand', text: 'Brand in the app' },
          {
            type: 'table',
            head: ['Token', 'Use in the app'],
            rows: [
              ['`brand-25`', 'Inactive tab, AI summary fill'],
              ['`brand-50`', 'Selected range, Secondary color button'],
              ['`brand-100`', 'Secondary color button hover'],
              ['`brand-200`', 'Disabled primary button, AI summary border'],
              ['`brand-300`', 'Input focus border, disabled Secondary color text, light Sembuh AI series'],
              ['`brand-500`', '**Primary**: buttons, active tab, Sembuh AI series; at 20 % it is the focus ring (`--focus-ring`)'],
              ['`brand-600`', 'Primary button hover, Link color text'],
              ['`brand-700`', 'Secondary color / Tertiary color button text, Link color hover, table ID links, tab text'],
              ['`brand-800`', 'Deep accent'],
            ],
          },
        ],
      },
      {
        id: 'semantic',
        title: 'Semantic roles',
        blocks: [
          { type: 'example', html: semanticDemo, code: false },
          {
            type: 'table',
            head: ['Role', 'Fill', 'Border', 'Text', 'Icon / strong'],
            rows: [
              ['Success', '`success-50`', '`success-200`', '`success-700`', 'icon `success-500`'],
              ['Warning', '`warning-50` (row tint `warning-25`)', '`warning-200` / `warning-300`', '`warning-700`', 'icon `warning-500`, strong `warning-800`'],
              ['Error', '`error-50` (row tint `error-25`)', '`error-200`', '`error-700`', 'icon `error-500`, strong `error-600`'],
              ['Info', '`blue-50`', '`blue-200`', '`blue-700`', 'icon `blue-500`'],
              ['Pending (button)', '`warning-500`, hover `warning-600`', '`warning-500`', '`white`', '—'],
            ],
          },
        ],
      },
      {
        id: 'status',
        title: 'Status pills',
        blocks: [
          { type: 'p', text: 'One colour pair per claim status: `50` fill and `700` text of one family (Gray: `100 / 700`). Each pill is a Badge `sm`.' },
          { type: 'example', html: pillsDemo, code: false },
          {
            type: 'table',
            head: ['Family', 'Statuses'],
            rows: [
              ['`gray` (`100 / 700`)', 'Baru'],
              ['`indigo`', 'Siap diekstrak'],
              ['`blue`', 'Siap dianalisis (list), Memeriksa FWA, Sedang Ditinjau, Proses QC'],
              ['`purple`', 'Siap dianalisis (detail), Siap Ditinjau, Sedang dianalisis'],
              ['`warning`', 'Memeriksa Eligibility'],
              ['`orange`', 'Memeriksa FWA (list), Perlu Revisi, Potensi Duplikat'],
              ['`success`', 'Disetujui: Sembuh, Disetujui: TPA'],
              ['`error`', 'Ditolak'],
              ['`blue-gray`', 'Single / Multiple claim type'],
            ],
          },
          {
            type: 'list',
            items: [
              'Claim type tags: Inpatient `blue`, Outpatient `purple`, Maternity `pink`, Optical `indigo`, Dental `orange`.',
              'AI confidence: **≥ 90 %** `success`, **80–89 %** `warning`, **< 80 %** `error`, plus a warning banner.',
            ],
          },
          { type: 'note', tone: 'warning', text: '"Siap dianalisis" and "Memeriksa FWA" have two colours each (list vs detail). Open decision; see the Badge page.' },
        ],
      },
      {
        id: 'data-viz',
        title: 'Data visualisation',
        blocks: [
          { type: 'example', html: dataviz, code: false },
          {
            type: 'table',
            head: ['Series', 'Solid (approved / main)', 'Light (rejected / secondary)'],
            rows: [
              ['Sembuh AI', '`brand-500`', '`brand-300`'],
              ['TPA', '`orange-500`', '`orange-300`'],
              ['Extra series, in order', '`500` of `blue-light`, `purple`, `pink`, `indigo`, `blue-gray`', '`300` of the same family'],
            ],
          },
          {
            type: 'list',
            items: [
              'Approved = solid; rejected = light fill (bars, sankey) or a **dashed** line (`6 4`) in line charts.',
              'Line charts: one point per x label, centred on it; lines only, a dot appears on hover.',
              'Unfocused series fade to 15–25 % opacity on hover or legend focus.',
              'Up = bad (more cost) is `error-600`; down = good is `success-600`.',
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
              { kind: 'do', html: '<span class="sb-badge" data-size="sm" data-color="success">Disetujui: Sembuh</span>', text: 'A token pair from the scale: `success-50` fill, `success-700` text.' },
              { kind: 'dont', html: '<span class="sb-badge" data-size="sm" style="background: #e8f8ee; color: #2f9e5b">Disetujui: Sembuh</span>', text: 'A hex from the colour picker. Close to the scale, but not on it, and it fails AA.' },
            ],
          },
        ],
      },
      {
        id: 'figma',
        title: 'Changing colours in Figma',
        blocks: [
          { type: 'p', text: 'Colours are Figma styles / variables. A change to a style cascades to every component and design that uses it.' },
          {
            type: 'list',
            ordered: true,
            items: [
              'Open the style: click the edit icon on the colour style, or select any layer that uses it and click **Edit style**.',
              'Change the colour properties.',
              'Repeat for every style that changes, in one pass, so none is missed. Large files take time to update.',
              'To change the brand colour, edit the **Brand** styles. Do not switch components to another family one by one.',
            ],
          },
          { type: 'p', text: 'When a Figma colour changes, update `data/foundations.js` (the scales) in the same change; this page and `tokens.css` follow.' },
        ],
      },
      { id: 'tokens', title: 'Tokens', blocks: [{ type: 'code', lang: 'css', filename: 'tokens.css (colour)', code: tokenGroupCss('Colour') }] },
    ],
  });
})();

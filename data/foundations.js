// Foundations: the single source for tokens, icons and system-wide text.
// Loaded first. Every data/*.js file registers into window.DS; app.js renders and exports from it.
(() => {
  const DS = (window.DS = { components: [], foundations: [], applications: [] });

  DS.meta = {
    name: 'Codemasters Design System',
    version: '1.0.0',
    updated: '2026-10-06',
    intro:
      'The shared visual language of Codemasters and its companies, Sembuh AI and Flipmaster: web apps, websites, mobile, slides, documents and posters. ' +
      'Every value is a token and every component documents its variants, states and rules, so each surface ' +
      'built from it looks and behaves the same.',
  };

  DS.principles = [
    '**Data first, chrome second.** White cards on a near-white page; colour is reserved for status, series and the one primary action. No decorative gradients or illustrations; the only gradient is the raised sheen on controls.',
    '**One primary action per view.** The blue button is the next step of the flow (Mulai Analisis, Kirim ke Advisor, Keputusan). Everything else is secondary (white, gray border) or orange for Pending.',
    '**Status is always a coloured pill.** Every claim status has one fixed colour pair, used in tables, headers, summary cards and filters alike.',
    '**Never empty.** Every cell, field and card shows a value. Placeholder data is deterministic (same record, same value).',
    '**Full numbers.** Money is written in full Rupiah (`Rp 1.725.283.300`), never abbreviated, except on chart axis ticks.',
    '**Indonesian UI copy.** Sentence case for body text, Title Case for buttons, tabs and card titles.',
  ];

  // ---- Tokens (DESIGN.md §9). Edit here; the page, tokens.css and every export follow.
  const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]; // Tailwind's steps
  const SCALES = {
    gray: 'f9fafb f2f4f7 eaecf0 d0d5dd 98a2b3 667085 475467 344054 1d2939 101828 060c17',
    brand: 'f0f6fe dfeafb c5dbfa 9fc5f6 6ca1f0 5183eb 3966e0 2e51cd 2942a7 273b83 142258',
    error: 'fef3f2 fee4e2 fecdca fda29b f97066 f04438 d92d20 b42318 912018 7a271a 511209',
    warning: 'fffaeb fef0c7 fedf89 fec84b fdb022 f79009 dc6803 b54708 93370d 7a2e0e 501800',
    success: 'ecfdf3 d1fadf a6f4c5 6ce9a6 32d583 12b76a 039855 027a48 05603a 054f31 00311b',
    'blue-gray': 'f8f9fc eaecf5 d5d9eb afb5d9 717bbc 4e5ba6 3e4784 363f72 293056 101323 060814',
    'blue-light': 'f0f9ff e0f2fe b9e6fe 7cd4fd 36bffa 0ba5ec 0086c9 026aa2 065986 0b4a6f 002d49',
    blue: 'eff8ff d1e9ff b2ddff 84caff 53b1fd 2e90fa 1570ef 175cd3 1849a9 194185 082659',
    indigo: 'eef4ff e0eaff c7d7fe a4bcfd 8098f9 6172f3 444ce7 3538cd 2d31a6 2d3282 191b57',
    purple: 'f4f3ff ebe9fe d9d6fe bdb4fe 9b8afb 7a5af8 6938ef 5925dc 4a1fb8 3e1c96 260766',
    pink: 'fdf2fa fce7f6 fcceee faa7e0 f670c7 ee46bc dd2590 c11574 9e165f 851651 580232',
    rose: 'fff1f3 ffe4e8 fecdd6 fea3b4 fd6f8e f63d68 e31b54 c01048 a11043 89123e 5b0024',
    orange: 'fff6ed ffead5 fddcab feb273 fd853a fb6514 ec4a0a c4320a 9c2a10 7e2410 530f02',
  };

  const colour = { '--white': '#ffffff' };
  for (const [family, hexes] of Object.entries(SCALES)) {
    hexes.split(' ').forEach((hex, i) => (colour[`--${family}-${STEPS[i]}`] = `#${hex}`));
  }

  const GROUPS = [
    ['Colour', colour],
    ['Spacing: token number x 4 = px', Object.fromEntries([1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64].map(n => [`--space-${n}`, `${n * 4}px`]))],
    ['Containers', { '--container-sm': '640px', '--container-md': '768px', '--container-lg': '1024px', '--container-xl': '1280px' }],
    ['Radius: 4 small parts, 8 controls, 12 containers, 16 badges, full circles', { '--radius-sm': '4px', '--radius-md': '8px', '--radius-lg': '12px', '--radius-xl': '16px', '--radius-full': '9999px' }],
    ['Shadows: all gray-900 at low opacity', {
      '--shadow-xs': '0 1px 2px rgba(16,24,40,.05)',
      '--shadow-sm': '0 1px 3px rgba(16,24,40,.1), 0 1px 2px rgba(16,24,40,.06)',
      '--shadow-md': '0 4px 8px -2px rgba(16,24,40,.1), 0 2px 4px -2px rgba(16,24,40,.06)',
      '--shadow-lg': '0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03)',
      '--shadow-xl': '0 20px 24px -4px rgba(16,24,40,.08), 0 8px 8px -4px rgba(16,24,40,.03)',
      '--shadow-2xl': '0 24px 48px -12px rgba(16,24,40,.18)',
      '--shadow-3xl': '0 32px 64px -12px rgba(16,24,40,.14)',
    }],
    ['Raised controls: background-image and box-shadow on solid and white controls (Button, Tabs, Button group)', {
      '--raised-sheen': 'linear-gradient(180deg, rgb(255 255 255 / .1), rgb(0 0 0 / .08))',
      '--raised-sheen-light': 'linear-gradient(180deg, rgb(255 255 255 / 0), rgb(16 24 40 / .04))',
      '--raised-highlight': 'inset 0 1px 0 rgb(255 255 255 / .28)',
      '--pressed-inset': 'inset 0 1px 2px rgb(16 24 40 / .1)',
    }],
    ['Chart series: fixed order, validated for colour-blind separation. Light step (300) of the same family for rejected or secondary', {
      '--chart-1': 'var(--brand-500)', '--chart-2': 'var(--orange-600)', '--chart-3': 'var(--blue-light-600)',
      '--chart-4': 'var(--purple-600)', '--chart-5': 'var(--pink-600)', '--chart-6': 'var(--indigo-500)', '--chart-other': 'var(--gray-400)',
      '--chart-grid': 'var(--gray-100)', '--chart-axis': 'var(--gray-300)',
    }],
    ['Overlay: the scrim behind modal dialogs', { '--scrim': 'rgba(0, 0, 0, .2)' }],
    ['Background blur: use as backdrop-filter: var(--blur-md)', { '--blur-sm': 'blur(4px)', '--blur-md': 'blur(8px)', '--blur-lg': 'blur(12px)', '--blur-xl': 'blur(20px)' }],
    ['Focus ring: box-shadow: 0 0 0 4px var(--focus-ring) on :focus-visible', { '--focus-ring': 'color-mix(in srgb, var(--brand-600) 20%, transparent)' }],
    ['Motion', { '--ease': 'cubic-bezier(.22,.61,.36,1)' }],
    ['Typography: font: 600 var(--text-sm) var(--font). Display md and larger add letter-spacing: var(--tracking-display)', {
      '--font': "'Inter', sans-serif",
      '--display-2xl': '72px/90px', '--display-xl': '60px/72px', '--display-lg': '48px/60px', '--display-md': '36px/44px',
      '--display-sm': '30px/38px', '--display-xs': '24px/32px',
      '--text-xl': '20px/30px', '--text-lg': '18px/28px', '--text-md': '16px/24px', '--text-sm': '14px/20px', '--text-xs': '12px/18px',
      '--tracking-display': '-0.02em',
    }],
  ];

  DS.tokens = Object.assign({}, ...GROUPS.map(([, t]) => t));
  DS.tokenGroups = GROUPS;
  DS.scales = SCALES;
  DS.steps = STEPS;
  // A slice of tokens.css for one foundation page: the groups whose title starts with one of the names.
  DS.tokenGroupCss = (...names) =>
    ':root {\n' +
    GROUPS.filter(([title]) => names.some(n => title.startsWith(n)))
      .map(([title, t]) => `  /* ${title} */\n` + Object.entries(t).map(([k, v]) => `  ${k}: ${v};`).join('\n'))
      .join('\n\n') +
    '\n}';
  DS.fontImport = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');";
  DS.tokensCss =
    ':root {\n' +
    GROUPS.map(([title, t]) => `  /* ${title} */\n` + Object.entries(t).map(([k, v]) => `  ${k}: ${v};`).join('\n')).join('\n\n') +
    '\n}\n';

  DS.addCss = css => document.head.append(Object.assign(document.createElement('style'), { textContent: css }));
  DS.addCss(DS.tokensCss);

  // ---- Helpers shared by data files and app.js
  DS.esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

  // Feather-style outline icons, 24 grid, stroke 2 (renders 1.67 px at 20 px, as DESIGN.md §6 Icons).
  const ICONS = {
    plus: '<path d="M12 5v14M5 12h14"/>',
    'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
    'arrow-left': '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    'arrow-up': '<path d="M12 19V5M5 12l7-7 7 7"/>',
    'arrow-down': '<path d="M12 5v14M19 12l-7 7-7-7"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    'credit-card': '<rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    selector: '<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    bold: '<path d="M6 4h8a4 4 0 0 1 0 8H6zM6 12h9a4 4 0 0 1 0 8H6z"/>',
    italic: '<path d="M19 4h-9M14 20H5M15 4 9 20"/>',
    underline: '<path d="M6 3v7a6 6 0 0 0 12 0V3M4 21h16"/>',
    h1: '<path d="M4 6v12M12 6v12M4 12h8M17 10l3-2v10"/>',
    h2: '<path d="M4 6v12M12 6v12M4 12h8M16.5 10a2.5 2.5 0 0 1 5 .5c0 1.5-1.2 2.4-2.4 3.4L16.5 18H21.5"/>',
    quote: '<path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6a4 4 0 0 1-4 4M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6a4 4 0 0 1-4 4"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
    'more-vertical': '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
    'user-plus': '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/>',
    'list-ordered': '<path d="M10 6h11M10 12h11M10 18h11M4 6h1v4M4 10h2M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/>',
    trash: '<path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
    'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    'external-link': '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',
    menu: '<path d="M3 12h18M3 6h18M3 18h18"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
    hash: '<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
    'corner-down-left': '<path d="m9 10-5 5 5 5"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    'help-circle': '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>',
    'alert-circle': '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    loader: '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
    signal: '<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/>',
    alert: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/>',
  };
  DS.iconNames = Object.keys(ICONS).sort();
  DS.icon = name =>
    `<svg data-i="${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

  // Demo "photos" for avatars: abstract head-and-shoulders shapes, never real people (DESIGN.md: no Figma demo faces in docs).
  const PHOTOS = [['#D1E9FF', '#53B1FD'], ['#FEF0C7', '#FDB022'], ['#D1FADF', '#32D583'], ['#FCE7F6', '#F670C7'], ['#EBE9FE', '#9B8AFB'], ['#FFE6D5', '#FF9C66'], ['#E0F2FE', '#36BFFA']];
  DS.demoPhoto = i => {
    const [bg, fg] = PHOTOS[i % PHOTOS.length];
    return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" fill="${bg}"/><circle cx="20" cy="16" r="7" fill="${fg}"/><path d="M6 40c1-9 7-13 14-13s13 4 14 13z" fill="${fg}"/></svg>`)}`;
  };

  // Preview HTML to copyable snippet: icon bodies collapse to a named placeholder, docs-only attributes go.
  DS.snippet = html =>
    html
      .replace(/^<div class="(?:field|wys|dd|menu|tint|cg|progress|avatar|slider|tabs|card|chart|table|modal)-stage[^"]*"(?: inert)?>([\s\S]*)<\/div>$/, '$1') // docs-only width wrappers
      .replace(/<svg data-i="([\w-]+)"[\s\S]*?<\/svg>/g, '<svg aria-hidden="true"><!-- $1 --></svg>')
      .replace(/ data-(state|demo)(="[^"]*")?/g, '')
      .replace(/src="data:image\/[^"]*"/g, 'src="…"'); // inline demo images

  DS.overview = {
    slug: '',
    name: 'Overview',
    category: 'Getting started',
    description: DS.meta.intro,
    sections: [
      {
        id: 'export',
        title: 'Export',
        blocks: [
          { type: 'p', text: 'The pages here are the source of truth. Markdown is generated from them, so a designer, a developer and Claude read the same spec.' },
          {
            type: 'list',
            items: [
              '**One component:** open its page and use **Copy Markdown**, or open the menu next to it to download `button.md` or preview it first.',
              '**Whole system:** **Export DESIGN.md** in the header downloads principles, tokens, foundations and every documented component in one file.',
              '**Tokens:** download `tokens.css` below. Component CSS (`button.css`, `social-button.css`) reads only these tokens.',
              '**Files for tools and skills:** `node build.mjs` writes everything to `dist/` (`index.json`, `DESIGN.md`, one Markdown file per page, `tokens.json`, `code/`). They are published at `codemasters-design-systems.pages.dev/dist/`, starting with `index.json`.',
            ],
          },
        ],
      },
      { id: 'principles', title: 'Principles', blocks: [{ type: 'list', ordered: true, items: DS.principles }] },
      { id: 'foundations', title: 'Foundations', blocks: [{ type: 'components', of: 'foundations' }] },
      { id: 'components', title: 'Components', blocks: [{ type: 'components' }] },
      { id: 'applications', title: 'Applications', blocks: [{ type: 'components', of: 'applications' }] },
      {
        id: 'tokens',
        title: 'Tokens',
        blocks: [
          { type: 'p', text: 'Every colour is a step on an 11-step scale (50 to 950). Never write a hex that is not on a scale; reference the token.' },
          { type: 'code', lang: 'css', filename: 'tokens.css', code: `${DS.fontImport}\n\n${DS.tokensCss}` },
        ],
      },
      {
        id: 'coverage',
        title: 'Coverage',
        blocks: [
          {
            type: 'note',
            text: 'Foundations and the components listed above live here. Still only in the repository `DESIGN.md`: motion, focus, page layout, content and accessibility rules, and the app patterns (cards, tables, dialogs). Until they move here, do not replace the repository file with Export DESIGN.md.',
          },
        ],
      },
    ],
  };
})();

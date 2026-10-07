// Badges: status pills, tags, chips and badge groups. Source: DESIGN.md §6 Badges, §2.5 Status pills,
// Figma nodes 1046-28 (_Badge base), 1046-3819 (Badge), 1046-8088 (Badge group).
(() => {
  const { icon, esc } = DS;
  const FIGMA = 'https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=';

  // Figma Color -> token family. Every colour uses fill 50, text 700, dot/icon 500; Gray uses fill 100.
  const COLORS = [
    ['gray', 'gray', 'Gray'], ['primary', 'brand', 'Primary'], ['error', 'error', 'Error'], ['warning', 'warning', 'Warning'],
    ['success', 'success', 'Success'], ['blue-gray', 'blue-gray', 'Blue gray'], ['blue-light', 'blue-light', 'Blue light'],
    ['blue', 'blue', 'Blue'], ['indigo', 'indigo', 'Indigo'], ['purple', 'purple', 'Purple'], ['pink', 'pink', 'Pink'],
    ['rose', 'rose', 'Rosé'], ['orange', 'orange', 'Orange'],
  ];
  const GROUP_COLORS = ['primary', 'gray', 'error', 'warning', 'success'];
  const family = c => COLORS.find(x => x[0] === c)[1];

  const CSS = `/* Badge, Codemasters Design System
   Figma: Shared components / Badges: _Badge base (1046-28), Badge (1046-3819), Badge group (1046-8088)
   Needs tokens.css.

   <span class="sb-badge" data-size="sm" data-color="success">Disetujui: Sembuh</span>

   data-size   sm | md | lg
   data-color  gray | primary | error | warning | success | blue-gray | blue-light | blue | indigo | purple | pink | rose | orange
   data-icon   dot | country | avatar | icon-left | icon-right | x-close | only   (omit for text only)
   A badge is not a button. The only interactive part allowed is the X close button (aria-label "Hapus …"). */

.sb-badge {
  --bdg-h: 22px; --bdg-px: 8px; --bdg-type: var(--text-xs);
  --bdg-bg: var(--gray-100); --bdg-fg: var(--gray-700); --bdg-icon: var(--gray-500);
  box-sizing: border-box;
  display: inline-flex; align-items: center; gap: 4px;
  height: var(--bdg-h); padding: 0 var(--bdg-px);
  font: 500 var(--bdg-type) var(--font); white-space: nowrap;
  color: var(--bdg-fg); background: var(--bdg-bg);
  border-radius: var(--radius-xl); /* fully rounded, no border */
}
.sb-badge > svg { width: 12px; height: 12px; flex: none; color: var(--bdg-icon); }
.sb-badge-dot { width: 8px; height: 8px; flex: none; border-radius: var(--radius-full); background: var(--bdg-icon); }
.sb-badge-img { display: inline-flex; width: 16px; height: 16px; flex: none; border-radius: var(--radius-full); overflow: hidden; }
.sb-badge-img > svg { width: 100%; height: 100%; }
/* Placeholder avatar: user icon in brand-600 on brand-50 (DESIGN.md Avatar). Real screens use the photo or initials. */
.sb-badge-avatar { align-items: center; justify-content: center; background: var(--brand-50); color: var(--brand-600); }
.sb-badge-avatar > svg { width: 12px; height: 12px; }
.sb-badge-x {
  display: inline-flex; margin: -2px; padding: 2px; border: 0; border-radius: var(--radius-sm);
  background: none; color: var(--bdg-icon); cursor: pointer;
  transition: color 150ms var(--ease);
}
.sb-badge-x > svg { width: 12px; height: 12px; }
.sb-badge-x:hover { color: var(--bdg-fg); }
.sb-badge-x:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 0; }

/* Sizes. Height comes from the text line plus the vertical padding (sm 2, md 2, lg 4). */
.sb-badge[data-size="md"] { --bdg-h: 24px; --bdg-px: 10px; --bdg-type: var(--text-sm); }
.sb-badge[data-size="lg"] { --bdg-h: 28px; --bdg-px: 12px; --bdg-type: var(--text-sm); }

/* Icon variants. Figma gives the sm values; md and lg follow the same rule. */
.sb-badge[data-icon="dot"], .sb-badge[data-icon="icon-left"] { padding-inline-start: calc(var(--bdg-px) - 2px); }
.sb-badge[data-icon="icon-right"], .sb-badge[data-icon="x-close"] { padding-inline-end: calc(var(--bdg-px) - 2px); }
.sb-badge[data-icon="dot"], .sb-badge[data-icon="country"], .sb-badge[data-icon="avatar"] { gap: 6px; }
.sb-badge[data-icon="country"], .sb-badge[data-icon="avatar"] { padding-inline-start: calc((var(--bdg-h) - 16px) / 2); }
.sb-badge[data-icon="only"] { width: var(--bdg-h); padding: 0; justify-content: center; }
.sb-badge[data-icon="only"]:not([data-size="md"], [data-size="lg"]) { --bdg-h: 20px; }

/* Colours */
${COLORS.slice(1).map(([c, f]) => `.sb-badge[data-color="${c}"] { --bdg-bg: var(--${f}-50); --bdg-fg: var(--${f}-700); --bdg-icon: var(--${f}-500); }`).join('\n')}

/* Badge group: a badge plus a short message in one pill.
   <a class="sb-badge-group" href="…" data-color="primary" data-theme="light">
     <span class="sb-badge" data-size="sm">Fitur baru</span>
     Ringkasan AI kini bisa diedit
     <svg aria-hidden="true">…arrow-right…</svg>
   </a>
   data-size md | lg, data-color primary | gray | error | warning | success,
   data-theme light | medium | dark, data-badge leading | trailing */
.sb-badge-group {
  --g50: var(--brand-50); --g100: var(--brand-100); --g500: var(--brand-500); --g600: var(--brand-600); --g700: var(--brand-700);
  box-sizing: border-box;
  display: inline-flex; align-items: center; gap: 8px;
  padding: 4px; padding-inline-end: 12px;
  font: 500 var(--text-xs) var(--font); white-space: nowrap; text-decoration: none;
  color: var(--g700); background: var(--g50);
  border-radius: var(--radius-xl);
}
.sb-badge-group > svg { width: 12px; height: 12px; flex: none; color: var(--g500); }
.sb-badge-group > .sb-badge { --bdg-bg: var(--white); --bdg-fg: var(--g700); --bdg-icon: var(--g500); }
.sb-badge-group[data-size="lg"] { gap: 12px; padding-inline-end: 14px; font-size: 14px; line-height: 20px; }
.sb-badge-group[data-badge="trailing"] { padding-inline: 12px 4px; }
.sb-badge-group[data-badge="trailing"][data-size="lg"] { padding-inline: 14px 4px; }
.sb-badge-group[data-theme="medium"] { background: var(--g100); }
.sb-badge-group[data-theme="medium"] > .sb-badge { --bdg-bg: var(--g50); }
.sb-badge-group[data-theme="dark"] > .sb-badge { --bdg-bg: var(--g600); --bdg-fg: var(--white); --bdg-icon: var(--white); }
${GROUP_COLORS.slice(1).map(c => {
    const f = family(c);
    return `.sb-badge-group[data-color="${c}"] { --g50: var(--${f}-50); --g100: var(--${f}-100); --g500: var(--${f}-500); --g600: var(--${f === 'gray' ? 'gray-700' : `${f}-600`}); --g700: var(--${f}-700); }`;
  }).join('\n')}
a.sb-badge-group:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 2px; }
`;

  // Round Indonesian flag and a placeholder avatar (DESIGN.md: never invent a person's photo).
  const FLAG = '<span class="sb-badge-img" aria-hidden="true"><svg data-i="flag-id" viewBox="0 0 16 16"><rect width="16" height="8" fill="#CE1126"/><rect y="8" width="16" height="8" fill="#FFFFFF"/><circle cx="8" cy="8" r="7.5" fill="none" stroke="rgba(16,24,40,.12)"/></svg></span>';
  const AVATAR = `<span class="sb-badge-img sb-badge-avatar" aria-hidden="true">${icon('user')}</span>`;

  function badge({ color = 'gray', size = 'sm', icon: mode = 'none', label = 'Label', glyph, demo } = {}) {
    const attrs = ['class="sb-badge"', `data-size="${size}"`];
    if (color !== 'gray') attrs.push(`data-color="${color}"`);
    if (mode !== 'none') attrs.push(`data-icon="${mode}"`);
    if (mode === 'only') attrs.push('role="img"', `aria-label="${esc(label)}"`);
    const text = esc(label);
    const x = `<button class="sb-badge-x" type="button" aria-label="Hapus ${text}"${demo ? ' data-demo' : ''}>${icon('x')}</button>`;
    const parts = {
      none: [text],
      dot: ['<span class="sb-badge-dot" aria-hidden="true"></span>', text],
      country: [FLAG, text],
      avatar: [AVATAR, text],
      'icon-left': [icon(glyph || 'arrow-up'), text],
      'icon-right': [text, icon(glyph || 'arrow-right')],
      'x-close': [text, x],
      only: [icon(glyph || 'arrow-up')],
    }[mode];
    const open = `<span ${attrs.join(' ')}>`;
    return mode === 'none' ? `${open}${text}</span>` : `${open}\n  ${parts.join('\n  ')}\n</span>`;
  }

  function badgeGroup({ color = 'primary', theme = 'light', size = 'md', position = 'leading', arrow = true, badgeText = 'Fitur baru', message = 'Ringkasan AI kini bisa diedit', href = '#/badge/badge-group' } = {}) {
    const attrs = ['class="sb-badge-group"', `href="${href}"`, `data-size="${size}"`, `data-color="${color}"`, `data-theme="${theme}"`];
    if (position === 'trailing') attrs.push('data-badge="trailing"');
    const inner = badge({ size: size === 'lg' ? 'md' : 'sm', label: badgeText });
    const parts = position === 'trailing' ? [esc(message), inner] : [inner, esc(message)];
    if (arrow) parts.push(icon('arrow-right'));
    return `<a ${attrs.join(' ')}>\n  ${parts.join('\n  ')}\n</a>`;
  }

  const row = items => items.join('\n');
  const STATUSES = [
    ['gray', 'Baru'],
    ['indigo', 'Siap diekstrak'],
    ['blue', 'Siap dianalisis (list)', 'Memeriksa FWA', 'Sedang Ditinjau', 'Proses QC'],
    ['purple', 'Siap dianalisis (detail)', 'Siap Ditinjau', 'Sedang dianalisis'],
    ['warning', 'Memeriksa Eligibility'],
    ['orange', 'Memeriksa FWA (list)', 'Perlu Revisi', 'Potensi Duplikat'],
    ['success', 'Disetujui: Sembuh', 'Disetujui: TPA'],
    ['error', 'Ditolak'],
    ['blue-gray', 'Single', 'Multiple'],
  ];
  const statusMatrix = `<div class="matrix" style="--cols: 1">
${STATUSES.map(([c, ...s]) => `<span class="mx">${COLORS.find(x => x[0] === c)[2]}</span><span class="badge-row">${s.map(l => badge({ color: c, label: l.replace(/ \((list|detail)\)/, '') })).join('')}</span>`).join('\n')}
</div>`;

  const colorMatrix = `<div class="matrix" style="--cols: 3">
${COLORS.map(([c, , l]) => `<span class="mx">${l}</span>${badge({ color: c, label: 'Label' })}${badge({ color: c, icon: 'dot', label: 'Label' })}${badge({ color: c, icon: 'icon-left', label: '12%' })}`).join('\n')}
</div>`;

  const groupMatrix = `<div class="matrix" style="--cols: 3">
<span></span><span class="mx">Light</span><span class="mx">Medium</span><span class="mx">Dark</span>
${GROUP_COLORS.map(c => `<span class="mx">${COLORS.find(x => x[0] === c)[2]}</span>` + ['light', 'medium', 'dark'].map(t => badgeGroup({ color: c, theme: t, arrow: false, message: 'Pesan singkat' })).join('')).join('\n')}
</div>`;

  const anatomy = `<span class="sb-badge" data-size="sm" data-color="success" data-icon="x-close" data-pin="1" data-pin-at="start">
  <span data-pin="2"><span class="sb-badge-dot" aria-hidden="true"></span></span>
  <span data-pin="3">Inpatient</span>
  <span data-pin="4"><button class="sb-badge-x" type="button" tabindex="-1" aria-label="Hapus Inpatient">${icon('x')}</button></span>
</span>`;

  DS.components.push({
    slug: 'badge',
    name: 'Badge',
    category: 'Components',
    status: 'In Figma and app',
    updated: '2026-10-06',
    description:
      'A small, non-interactive label for a status, category or count. Status pills, claim type tags, AI confidence and filter chips are all badges.',
    figma: [
      { label: 'Badge', url: `${FIGMA}1046-3819` },
      { label: '_Badge base', url: `${FIGMA}1046-28` },
      { label: 'Badge group', url: `${FIGMA}1046-8088` },
    ],
    css: CSS,
    cssFile: 'badge.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          {
            type: 'playground',
            initial: { color: 'success', size: 'sm', icon: 'none', label: 'Disetujui: Sembuh' },
            controls: [
              { key: 'color', label: 'Color', type: 'select', options: COLORS.map(([c, , l]) => [c, l]) },
              { key: 'label', label: 'Label', type: 'text' },
              { key: 'size', label: 'Size', type: 'segmented', options: [['sm', 'sm'], ['md', 'md'], ['lg', 'lg']] },
              {
                key: 'icon',
                label: 'Icon',
                type: 'select',
                options: [['none', 'False'], ['dot', 'Dot'], ['country', 'Country'], ['avatar', 'Avatar'], ['x-close', 'X close'], ['icon-left', 'Icon left'], ['icon-right', 'Icon right'], ['only', 'Only']],
              },
            ],
            render: s => badge({ ...s, label: s.label.trim() || 'Label' }),
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
              '**A badge is not a button.** If it does something, use a Button. The only interactive part allowed is the X close icon.',
              '**Status always has a text label.** Colour alone never carries meaning.',
              '**One size per context:** `sm` in tables and dense lists, `md` in headers and cards, `lg` in large summary areas.',
              '**One colour pair per status.** A claim status keeps the same colour in tables, headers, summary cards and filters (see Status pills).',
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
              ['1', 'Container', 'Radius 16 (fully rounded), no border. Height and padding from the size. Fill `50` of the colour family (Gray: `gray-100`).'],
              ['2', 'Leading element', 'Optional: 8 px dot, 16 px flag or avatar, or a 12 px icon. Dot and icons use the `500` step.'],
              ['3', 'Label', 'Medium weight. Text xs at `sm`, Text sm at `md` and `lg`. Text in the `700` step.'],
              ['4', 'Trailing element', 'Optional: 12 px icon, or the X close button that removes the badge.'],
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
            head: ['Property', 'Figma values', 'Code'],
            rows: [
              ['Size', '`sm`, `md`, `lg`', '`data-size="sm"`'],
              ['Icon', 'False, Dot, Country, Avatar, X close, Icon left, Icon right, Only', '`data-icon="dot"`, `"country"`, `"avatar"`, `"x-close"`, `"icon-left"`, `"icon-right"`, `"only"`'],
              ['Color', 'Gray, Primary, Error, Warning, Success, Blue gray, Blue light, Blue, Indigo, Purple, Pink, Rosé, Orange', '`data-color="success"` (omit for Gray)'],
            ],
          },
        ],
      },
      {
        id: 'sizes',
        title: 'Sizes',
        blocks: [
          { type: 'example', html: row(['sm', 'md', 'lg'].map(size => badge({ color: 'primary', size, label: `Badge ${size}` }))) },
          {
            type: 'table',
            head: ['Size', 'Height', 'Padding', 'Text style', 'Icon-only'],
            rows: [
              ['`sm`', '22', '`2 8`', 'Text xs / Medium', '20 × 20'],
              ['`md`', '24', '`2 10`', 'Text sm / Medium', '24 × 24'],
              ['`lg`', '28', '`4 12`', 'Text sm / Medium', '28 × 28'],
            ],
          },
        ],
      },
      {
        id: 'icon',
        title: 'Icon',
        blocks: [
          {
            type: 'example',
            html: row([
              badge({ color: 'success', icon: 'dot', label: 'Aktif' }),
              badge({ icon: 'country', label: 'Indonesia' }),
              badge({ color: 'primary', icon: 'avatar', label: 'Advisor' }),
              badge({ color: 'success', icon: 'icon-left', label: '12%' }),
              badge({ color: 'primary', icon: 'icon-right', label: 'Lihat' }),
              badge({ icon: 'x-close', label: 'Inpatient' }),
              badge({ color: 'error', icon: 'only', glyph: 'arrow-up', label: 'Naik' }),
            ]),
          },
          {
            type: 'table',
            head: ['Icon', 'Element', 'Gap', 'Padding change (sm)'],
            rows: [
              ['Dot', '8 px dot, `500` step', '6', 'left 6 (md: left 8)'],
              ['Country, Avatar', '16 px round flag or avatar', '6', 'left 3'],
              ['Icon left', '12 px icon, e.g. arrow-up for a trend', '4', 'left 6'],
              ['Icon right', '12 px icon, e.g. arrow-right', '4', 'right 6'],
              ['X close', '12 px × button that removes the badge', '4', 'right 6'],
              ['Only', '12 px icon, no label; needs an `aria-label`', '—', 'padding 4'],
            ],
          },
          {
            type: 'note',
            text: 'Figma gives the paddings for `sm` only (and Dot at `md`). The CSS keeps the same rule for every size: the icon side is 2 px tighter than the text side, and a flag or avatar sits as far from the edge as from the top and bottom.',
          },
          { type: 'h3', id: 'chips', text: 'Chips (X close)' },
          { type: 'p', text: 'A filter chip is a Gray `sm` badge with X close. The × button is the only interactive part and says what it removes: `aria-label="Hapus Inpatient"`.' },
          {
            type: 'example',
            html: row(['Inpatient', 'Outpatient', 'Cashless'].map(l => badge({ icon: 'x-close', label: l, demo: true }))),
            caption: 'Click × to remove a chip.',
          },
        ],
      },
      {
        id: 'colours',
        title: 'Colours',
        blocks: [
          { type: 'p', text: 'Every colour uses the same steps of its scale: fill `50`, text `700`, dot and icons `500`. **Gray** is the exception: fill `gray-100`, text `gray-700`, dot `gray-500`.' },
          { type: 'example', html: colorMatrix, code: false },
          {
            type: 'table',
            head: ['Figma Color', 'Token family', 'Use in the app'],
            rows: [
              ['Gray', '`gray` (fill 100)', 'Neutral info, Baru, chips'],
              ['Primary', '`brand`', 'Selected filters, Sembuh AI labels'],
              ['Error', '`error`', 'Ditolak, AI confidence < 80 %'],
              ['Warning', '`warning`', 'Memeriksa Eligibility, AI confidence 80–89 %'],
              ['Success', '`success`', 'Disetujui, AI confidence ≥ 90 %'],
              ['Blue gray', '`blue-gray`', 'Single / Multiple claim type'],
              ['Blue light', '`blue-light`', 'Not used yet'],
              ['Blue', '`blue`', 'Siap dianalisis, Inpatient'],
              ['Indigo', '`indigo`', 'Siap diekstrak, Optical'],
              ['Purple', '`purple`', 'Siap Ditinjau, Outpatient'],
              ['Pink', '`pink`', 'Maternity'],
              ['Rosé', '`rose`', 'Not used yet'],
              ['Orange', '`orange`', 'Perlu Revisi, Potensi Duplikat, Dental'],
            ],
          },
          { type: 'p', text: 'In Figma the fill uses `mix-blend-mode: multiply`, so it tints on coloured backgrounds. On white it is the plain `50` colour, which is what the CSS draws.' },
        ],
      },
      {
        id: 'status-pills',
        title: 'Status pills',
        blocks: [
          { type: 'p', text: 'Every claim status has one fixed colour pair, used in tables, headers, summary cards and filters alike. Each pill is a Badge `sm`.' },
          { type: 'example', html: statusMatrix, code: false },
          {
            type: 'table',
            head: ['Colour', 'Statuses'],
            rows: STATUSES.map(([c, ...s]) => [COLORS.find(x => x[0] === c)[2], s.join(', ')]),
          },
          {
            type: 'note',
            tone: 'warning',
            text: '**Open question from DESIGN.md §2.5.** Siap dianalisis is Blue in the list and Purple on the detail page, and Memeriksa FWA is both Blue and Orange. That breaks the one-colour-per-status rule. Pick one colour for each before the next release.',
          },
          { type: 'h3', id: 'claim-types', text: 'Claim type tags' },
          {
            type: 'example',
            html: row([['blue', 'Inpatient'], ['purple', 'Outpatient'], ['pink', 'Maternity'], ['indigo', 'Optical'], ['orange', 'Dental']].map(([c, l]) => badge({ color: c, label: l }))),
          },
          { type: 'h3', id: 'ai-confidence', text: 'AI confidence' },
          { type: 'p', text: '**≥ 90 %** Success, **80–89 %** Warning, **< 80 %** Error. Below 80 % the claim also shows a warning banner: "AI confidence berada dibawah 80%, silakan periksa klaim kembali."' },
          { type: 'example', html: row([['success', '95%'], ['warning', '84%'], ['error', '72%']].map(([c, l]) => badge({ color: c, label: l }))) },
        ],
      },
      {
        id: 'badge-group',
        title: 'Badge group',
        blocks: [
          { type: 'p', text: 'A badge plus a short message in one pill, for announcements and inline notices ("Fitur baru · …", "Error · Ada masalah …"). When the whole group links somewhere, add the arrow icon and make the full pill the link target.' },
          { type: 'example', html: row([badgeGroup({}), badgeGroup({ size: 'lg', position: 'trailing', badgeText: 'Baru' })]) },
          { type: 'example', html: groupMatrix, code: false },
          {
            type: 'table',
            head: ['Property', 'Figma values', 'Code'],
            rows: [
              ['Badge', 'Leading, Trailing', '`data-badge="trailing"` (omit for Leading)'],
              ['Icon', 'True, False', '12 px arrow-right `<svg>` at the end'],
              ['Size', '`md`, `lg`', '`data-size="md"`'],
              ['Color', 'Primary, Gray, Error, Warning, Success', '`data-color="primary"`'],
              ['Theme', 'Light, Medium, Dark', '`data-theme="light"`'],
            ],
          },
          {
            type: 'table',
            head: ['Part', '`md`', '`lg`'],
            rows: [
              ['Container', 'radius 16, padding 4, gap 8', 'radius 16, padding 4, gap 12'],
              ['Padding on the message side', '12', '14'],
              ['Message text', 'Text xs / Medium, `700`', 'Text sm / Medium, `700`'],
              ['Inner badge', 'Badge `sm`', 'Badge `md`'],
            ],
          },
          {
            type: 'table',
            head: ['Theme', 'Container', 'Inner badge'],
            rows: [
              ['Light', '`50`', '`white` fill, `700` text'],
              ['Medium', '`100`', '`50` fill, `700` text'],
              ['Dark', '`50`', 'solid `600` fill (Gray: `gray-700`), `white` text'],
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
              { kind: 'do', html: badge({ color: 'error', icon: 'dot', label: 'Ditolak' }), text: 'Status in colour and in words.' },
              { kind: 'dont', html: badge({ color: 'error', icon: 'only', glyph: 'x', label: 'Ditolak' }), text: 'Colour alone. Users who cannot tell red from orange lose the status.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: '<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Lihat Detail</button>', text: 'An action is a Button.' },
              { kind: 'dont', html: badge({ color: 'primary', icon: 'icon-right', label: 'Lihat Detail' }), text: 'A badge that looks clickable. Badges label; they do not act.' },
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
              'Write the status as text. A dot or colour only supports it.',
              'Icon-only badges need `role="img"` and an `aria-label`.',
              'The X close button needs `aria-label="Hapus …"` that names what it removes, and a visible focus outline.',
              'A badge group that links somewhere is one `<a>`: the whole pill is the target.',
            ],
          },
          { type: 'p', text: 'Text on fill, WCAG 2.1. AA needs 4.5:1; badge text is 12–14 px.' },
          {
            type: 'table',
            head: ['Pair', 'Ratio', 'AA'],
            rows: [
              ['Badge `700` on `50`, all 13 colours', '5.13:1 (Success) to 9.49:1 (Gray)', 'Passes'],
              ['Badge group Medium: `700` on `100`', '4.72:1 (Orange) to 9.49:1 (Gray); the five group colours ≥ 4.76:1', 'Passes'],
              ['Badge group Dark: `white` on `600`, Primary / Error / Gray', '5.06:1 / 4.83:1 / 10.46:1', 'Passes'],
              ['Badge group Dark: `white` on `warning-600`', '3.49:1', '**Fails**'],
              ['Badge group Dark: `white` on `success-600`', '3.73:1', '**Fails**'],
            ],
          },
          {
            type: 'note',
            tone: 'warning',
            text: 'Dark theme inner badges fail AA on Warning and Success. Use Light or Medium for those colours, or move the Dark fill to `700` (white on `warning-700` is 5.43:1, on `success-700` 5.41:1). Decision for the design team.',
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, then `badge.css`. It covers Badge and Badge group.' },
          { type: 'code', lang: 'css', filename: 'badge.css', code: CSS },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
})();

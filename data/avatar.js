// Avatar, avatar group, avatar label group. Source: DESIGN.md §6 Avatar, Figma nodes 19-1012 (Avatar),
// 1274-812 (Avatar group), 82-2793 (Avatar label group).
(() => {
  const { esc, icon } = DS;

  // ---- Initials: first + last name, at most 2 letters.
  function initials(name) {
    const words = name.trim().split(/\s+/).filter(Boolean);
    if (!words.length) return '';
    return ((words[0][0] || '') + (words.length > 1 ? words[words.length - 1][0] : '')).toUpperCase();
  }
  const SCRIPT = `// Avatar initials: first + last name, at most 2 letters. When there is no photo, show these;
// when there is no name either, show the placeholder user icon. Never leave an avatar empty.
${initials.toString().replace(/^  /gm, '')}

// initials('Nama Pengguna') === 'NP', initials('Advisor') === 'A'`;

  const CSS = `/* Avatar, avatar group and avatar label group, Codemasters Design System
   Needs tokens.css.

   <span class="sb-avatar" data-size="md" role="img" aria-label="Nama Pengguna">NP</span>
   <span class="sb-avatar" data-size="md"><img src="foto.jpg" alt="Nama Pengguna"></span>

   Content     photo <img> | initials (text) | placeholder user icon <svg>. In that order of preference; never empty.
   data-size   xs 24 | sm 32 | md 40 | lg 48 | xl 56 | 2xl 64
   Status      <span class="sb-avatar-status" role="img" aria-label="Online"></span> (online dot)
               <img class="sb-avatar-company" src="logo.png" alt="Nama perusahaan"> (company badge)
   State       only when the avatar is a <button> or <a>: hover and :focus-visible rings.
               data-state="hover" | "focus" forces a state in static mockups and docs only. */

.sb-avatar {
  --av: 40px; --av-icon: 24px; --av-dot: 10px; --av-co: 14px;
  position: relative; display: inline-grid; place-items: center; flex: none; box-sizing: border-box;
  width: var(--av); height: var(--av); margin: 0; padding: 0; border: 0; border-radius: var(--radius-full);
  background: var(--brand-50); color: var(--brand-600); font: 500 var(--text-md) var(--font); text-decoration: none;
}
.sb-avatar[data-size="xs"]  { --av: 24px; --av-icon: 16px; --av-dot: 6px;  --av-co: 10px; font: 500 var(--text-xs) var(--font); }
.sb-avatar[data-size="sm"]  { --av: 32px; --av-icon: 20px; --av-dot: 8px;  --av-co: 12px; font: 500 var(--text-sm) var(--font); }
.sb-avatar[data-size="lg"]  { --av: 48px; --av-icon: 28px; --av-dot: 12px; --av-co: 16px; font: 500 var(--text-lg) var(--font); }
.sb-avatar[data-size="xl"]  { --av: 56px; --av-icon: 32px; --av-dot: 14px; --av-co: 18px; font: 500 var(--text-xl) var(--font); }
.sb-avatar[data-size="2xl"] { --av: 64px; --av-icon: 32px; --av-dot: 16px; --av-co: 20px; font: 500 var(--display-xs) var(--font); }
.sb-avatar > img:not(.sb-avatar-company) { width: 100%; height: 100%; border-radius: inherit; object-fit: cover; }
.sb-avatar > svg { width: var(--av-icon); height: var(--av-icon); }

/* Status, bottom-right, 1.5 px white border. Online: success-500 dot. Company: logo, 2 px outside the circle. */
.sb-avatar-status { position: absolute; right: 0; bottom: 0; box-sizing: border-box; width: var(--av-dot); height: var(--av-dot); border: 1.5px solid var(--white); border-radius: var(--radius-full); background: var(--success-500); }
.sb-avatar-company { position: absolute; right: -2px; bottom: -2px; box-sizing: border-box; width: var(--av-co); height: var(--av-co); border: 1.5px solid var(--white); border-radius: var(--radius-full); background: var(--white); object-fit: cover; }

/* States: only for an avatar that is a button or link (account menu). A 4 px ring outside the circle. */
:is(button, a).sb-avatar { cursor: pointer; transition: box-shadow 150ms var(--ease); }
:is(button, a).sb-avatar:is(:hover, [data-state="hover"]) { box-shadow: 0 0 0 4px var(--gray-100); }
:is(button, a).sb-avatar:is(:focus-visible, [data-state="focus"]) { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }

/* ---- Avatar group: overlapping avatars with a 1.5 px white ring, then "+N", then the add button 8 apart. */
.sb-avatar-group { --av-overlap: -12px; display: inline-flex; align-items: center; gap: 8px; }
.sb-avatar-group[data-size="xs"] { --av-overlap: -4px; }
.sb-avatar-group[data-size="sm"] { --av-overlap: -8px; }
.sb-avatar-stack { display: flex; align-items: center; }
.sb-avatar-stack > :is(.sb-avatar, .sb-tooltip-wrap) + * { margin-left: var(--av-overlap); }
.sb-avatar-stack .sb-avatar { box-shadow: 0 0 0 1.5px var(--white); }
.sb-avatar-stack button.sb-avatar:is(:focus-visible, [data-state="focus"]) { box-shadow: 0 0 0 1.5px var(--white), 0 0 0 5.5px var(--focus-ring); }
/* Add: white, dashed gray-300 border, gray-400 plus icon at half the box. */
.sb-avatar-add {
  display: inline-grid; place-items: center; flex: none; box-sizing: border-box; width: var(--av, 40px); height: var(--av, 40px);
  margin: 0; padding: 0; border: 1px dashed var(--gray-300); border-radius: var(--radius-full); background: var(--raised-sheen-light) var(--white); color: var(--gray-400); cursor: pointer;
  transition-property: color, border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-avatar-group[data-size="xs"] .sb-avatar-add { --av: 24px; }
.sb-avatar-group[data-size="sm"] .sb-avatar-add { --av: 32px; }
.sb-avatar-add > svg { width: calc(var(--av, 40px) / 2); height: calc(var(--av, 40px) / 2); }
.sb-avatar-add:is(:hover, [data-state="hover"]) { border-color: var(--gray-400); color: var(--gray-500); }
.sb-avatar-add:is(:focus-visible, [data-state="focus"]) { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }

/* ---- Avatar label group: avatar + name + secondary line. Long text truncates (show it in a tooltip). */
.sb-avatar-label { display: inline-flex; align-items: center; gap: 12px; max-width: 100%; margin: 0; padding: 0; border: 0; background: none; text-align: start; text-decoration: none; }
.sb-avatar-label[data-size="sm"] { gap: 10px; } /* between the 8 and 12 steps */
.sb-avatar-label[data-size="xl"] { gap: 16px; }
.sb-avatar-label-text { display: grid; min-width: 0; }
.sb-avatar-name, .sb-avatar-sub { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sb-avatar-name { font: 600 var(--text-sm) var(--font); color: var(--gray-700); transition: color 150ms var(--ease); }
.sb-avatar-sub { font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-avatar-label[data-size="sm"] .sb-avatar-sub { font: 400 var(--text-xs) var(--font); }
.sb-avatar-label[data-size="lg"] .sb-avatar-name { font: 600 var(--text-md) var(--font); }
.sb-avatar-label[data-size="xl"] .sb-avatar-name { font: 600 var(--text-lg) var(--font); }
.sb-avatar-label:is([data-size="lg"], [data-size="xl"]) .sb-avatar-sub { font: 400 var(--text-md) var(--font); }
/* Clickable group (button or link): one hit target; the avatar takes the ring, the name darkens. */
:is(button, a).sb-avatar-label { cursor: pointer; }
:is(button, a).sb-avatar-label:focus-visible { outline: none; }
:is(button, a).sb-avatar-label:is(:hover, [data-state="hover"]) .sb-avatar { box-shadow: 0 0 0 4px var(--gray-100); }
:is(button, a).sb-avatar-label:is(:focus-visible, [data-state="focus"]) .sb-avatar { box-shadow: 0 0 0 4px var(--focus-ring); }
:is(button, a).sb-avatar-label:is(:hover, :focus-visible, [data-state]) .sb-avatar-name { color: var(--gray-900); }
.sb-avatar-label .sb-avatar { transition: box-shadow 150ms var(--ease); }

@media (prefers-reduced-motion: reduce) {
  .sb-avatar, .sb-avatar-add, .sb-avatar-name { transition: none; }
}
`;

  const photo = DS.demoPhoto;
  const svgUri = svg => `data:image/svg+xml,${encodeURIComponent(svg)}`;
  // Generic insurer logo for the Company badge: a cross on a green disc. Real logos come from the company's assets.
  const LOGO = svgUri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect width="20" height="20" fill="#039855"/><path d="M8 4h4v4h4v4h-4v4H8v-4H4V8h4z" fill="#fff"/></svg>');

  const NAMES = ['Advisor A', 'Advisor B', 'Reviewer C', 'Analis D', 'Analis E', 'Admin F', 'Admin G', 'Reviewer H', 'Analis I', 'Admin J'];

  function avatar({ size = 'md', content = 'initials', status = 'none', state = 'default', button = state !== 'default', name = 'Nama Pengguna', i = 0, decorative = false, extra = '' } = {}) {
    const tag = button ? 'button' : 'span';
    const a = ['class="sb-avatar"', `data-size="${size}"`];
    if (button) a.splice(1, 0, 'type="button"', `aria-label="Akun ${esc(name)}"`);
    if (state !== 'default') a.push(`data-state="${state}"`);
    else if (decorative) a.push('aria-hidden="true"');
    else if (content !== 'photo') a.push('role="img"', `aria-label="${esc(name)}"`);
    if (extra) a.push(extra);
    const body = {
      photo: `<img src="${photo(i)}" alt="${decorative || tag === 'button' ? '' : esc(name)}">`,
      initials: initials(name),
      placeholder: icon('user'),
    }[content];
    const badge = { none: '', online: '<span class="sb-avatar-status" role="img" aria-label="Online"></span>', company: `<img class="sb-avatar-company" src="${LOGO}" alt="Asuransi A">` }[status];
    return `<${tag} ${a.join(' ')}>${body}${badge}</${tag}>`;
  }

  const group = ({ size = 'md', count = 5, more = 5, add = true, id }) => {
    const items = NAMES.slice(0, count).map((n, i) => `    ${avatar({ size, content: i % 3 === 2 ? 'initials' : 'photo', name: n, i })}`);
    if (more) {
      const rest = NAMES.slice(count, count + more).join(', ');
      items.push(`    <span class="sb-tooltip-wrap">
      <button class="sb-avatar" type="button" data-size="${size}" aria-label="${more} anggota lain" aria-describedby="${id}-more">+${more}</button>
      <span class="sb-tooltip" role="tooltip" id="${id}-more" data-arrow="bottom-right"><span class="sb-tooltip-title">${esc(rest)}</span></span>
    </span>`);
    }
    return [
      `<div class="sb-avatar-group" data-size="${size}">`,
      '  <div class="sb-avatar-stack">',
      ...items,
      '  </div>',
      add ? `  <button class="sb-avatar-add" type="button" aria-label="Tambah anggota">${icon('plus')}</button>` : '',
      '</div>',
    ].filter(Boolean).join('\n');
  };

  const label = ({ size = 'md', status = 'none', clickable = false, state, name = 'Advisor A', sub = 'advisor.a@perusahaan.com', content = 'photo', i = 0 } = {}) => {
    const tag = clickable ? 'button' : 'div';
    const attrs = [`class="sb-avatar-label"`, `data-size="${size}"`];
    if (clickable) attrs.splice(0, 0, 'type="button"');
    if (state && state !== 'default') attrs.push(`data-state="${state}"`);
    return `<${tag} ${attrs.join(' ')}>
  ${avatar({ size, status, content, name, i, decorative: true })}
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">${esc(name)}</span>
    <span class="sb-avatar-sub">${esc(sub)}</span>
  </span>
</${tag}>`;
  };

  const SIZES = [['xs', 'xs'], ['sm', 'sm'], ['md', 'md'], ['lg', 'lg'], ['xl', 'xl'], ['2xl', '2xl']];
  const STATES = [['default', 'Default'], ['hover', 'Hover'], ['focus', 'Focused']];
  const row = html => `<div class="avatar-stage is-row">\n${html}\n</div>`;

  const anatomy = `<span class="sb-avatar" data-size="2xl" data-pin="1" data-pin-at="start" role="img" aria-label="Nama Pengguna">
  <span data-pin="2">NP</span>
  <span class="sb-avatar-status" data-pin="3" data-pin-at="bottom"></span>
</span>`;

  const statesMatrix = `<div class="matrix" style="--cols: 3" inert>
<span></span>${STATES.map(([, l]) => `<span class="mx">${l}</span>`).join('')}
${[['photo', 'Photo'], ['initials', 'Initials'], ['placeholder', 'Placeholder']].map(([c, l], ci) => `<span class="mx">${l}</span>${STATES.map(([s]) => avatar({ size: 'lg', content: c, state: s, button: true, i: ci })).join('')}`).join('\n')}
</div>`;

  DS.components.push({
    slug: 'avatar',
    name: 'Avatar',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-07',
    description: 'A person or a company, shown as a photo, initials or a placeholder icon. Comes alone, in an overlapping group, or with a name and a secondary line.',
    css: CSS,
    cssFile: 'avatar.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          {
            type: 'playground',
            initial: { size: 'xl', content: 'initials', status: 'online', state: 'default', name: 'Nama Pengguna' },
            controls: [
              { key: 'size', label: 'Size', type: 'segmented', options: SIZES },
              { key: 'content', label: 'Content', type: 'segmented', options: [['photo', 'Photo'], ['initials', 'Initials'], ['placeholder', 'Placeholder']] },
              { key: 'status', label: 'Status icon', type: 'segmented', options: [['none', 'False'], ['online', 'Online indicator'], ['company', 'Company']] },
              { key: 'state', label: 'State (as a button)', type: 'segmented', options: STATES },
              { key: 'name', label: 'Name (for initials)', type: 'text' },
            ],
            render: s => avatar(s),
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
              'Content priority: the user\'s photo, then initials (first + last name, at most 2 letters), then the placeholder user icon. Never leave an avatar empty.',
              'Online indicator for people who can be reached now; Company badge for the organisation a user belongs to, such as the insurer of a TPA user.',
              'Avatar groups show at most 5 avatars, then "+N" that opens a list of the rest.',
              'Avatar label groups sit in the sidebar profile, dropdown headers, assignee fields and table cells (`sm`).',
              'Demo photos and names are for mock-ups only. Real screens show the user\'s photo or initials.',
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
              ['1', 'Container', 'Circle, `brand-50` fill. 24 to 64 by size.'],
              ['2', 'Content', 'Photo (cover), initials (Medium, `brand-600`) or the `user` icon (`brand-600`).'],
              ['3', 'Status icon', 'Optional, bottom-right, 1.5 px white border. Online: `success-500` dot. Company: logo, 2 px outside the circle.'],
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
              ['Size', '`xs`, `sm`, `md`, `lg`, `xl`, `2xl`', '`data-size`'],
              ['Placeholder / Text', 'Photo, Text, Placeholder', '`<img>`, initials as text, or the `user` icon `<svg>`'],
              ['Status icon', 'False, Online indicator, Company', '`.sb-avatar-status` or `.sb-avatar-company` inside the avatar'],
              ['State', 'Default, Hover, Focused', 'Only on `<button>` / `<a>`: `:hover`, `:focus-visible`. Static mockups: `data-state`'],
            ],
          },
        ],
      },
      {
        id: 'content',
        title: 'Content',
        blocks: [
          { type: 'example', html: row([avatar({ size: 'xl', content: 'photo', name: 'Nama Pengguna' }), avatar({ size: 'xl', content: 'initials', name: 'Nama Pengguna' }), avatar({ size: 'xl', content: 'placeholder', name: 'Pengguna' })].join('\n')) },
          { type: 'p', text: 'Photo, then initials, then the placeholder. Photos take `alt` = the person\'s name; an avatar next to the name is decorative (`alt=""` or `aria-hidden`).' },
        ],
      },
      {
        id: 'sizes',
        title: 'Sizes',
        blocks: [
          { type: 'example', html: row(SIZES.map(([s]) => avatar({ size: s, name: 'Nama Pengguna', status: 'online' })).join('\n')) },
          {
            type: 'table',
            head: ['Size', 'Box', 'Initials', 'Placeholder icon', 'Online dot', 'Company badge'],
            rows: [
              ['`xs`', '24', 'Text xs 12 / 18', '16', '6', '10'],
              ['`sm`', '32', 'Text sm 14 / 20', '20', '8', '12'],
              ['`md`', '40', 'Text md 16 / 24', '24', '10', '14'],
              ['`lg`', '48', 'Text lg 18 / 28', '28', '12', '16'],
              ['`xl`', '56', 'Text xl 20 / 30', '32', '14', '18'],
              ['`2xl`', '64', 'Display xs 24 / 32', '32', '16', '20'],
            ],
          },
        ],
      },
      {
        id: 'status',
        title: 'Status icons',
        blocks: [
          { type: 'h3', id: 'status-online', text: 'Online indicator' },
          { type: 'example', html: row(SIZES.map(([s], i) => avatar({ size: s, content: 'photo', status: 'online', name: NAMES[i], i })).join('\n')) },
          { type: 'h3', id: 'status-company', text: 'Company' },
          { type: 'example', html: row(SIZES.map(([s], i) => avatar({ size: s, content: 'initials', status: 'company', name: NAMES[i], i })).join('\n')) },
          { type: 'p', text: 'The green cross logo here is a generic stand-in. Use the company\'s own logo file, with its name as `alt`.' },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'p', text: 'Only an avatar that is a button or a link (the account menu) has states. A static avatar has none.' },
          { type: 'example', html: statesMatrix, code: false },
          {
            type: 'table',
            head: ['State', 'Look'],
            rows: [
              ['Hover', '4 px `gray-100` ring outside the circle'],
              ['Focused', '4 px `focus-ring` ring outside the circle (`:focus-visible`)'],
            ],
          },
        ],
      },
      {
        id: 'group',
        title: 'Avatar group',
        blocks: [
          { type: 'p', text: 'Overlapping avatars with a 1.5 px white ring. Hover or focus "+N" to see who else is in the group.' },
          { type: 'example', html: `<div class="avatar-stage is-stack">\n${['xs', 'sm', 'md'].map(s => group({ size: s, id: `ag-${s}` })).join('\n')}\n</div>` },
          {
            type: 'table',
            head: ['Size', 'Overlap', '"+N" avatar', 'Add button'],
            rows: [
              ['`xs`', '−4', '24, `brand-50` fill, `brand-600` 12 / 18 Medium', '24, white, 1 px dashed `gray-300` border, `gray-400` plus icon'],
              ['`sm`', '−8', '32, Text sm Medium', '32'],
              ['`md`', '−12', '40, Text md Medium', '40'],
            ],
          },
          {
            type: 'list',
            items: [
              'Gap 8 between the avatars and the add button. Show at most 5 avatars, then "+N".',
              '"+N" is a button that lists the rest: a tooltip for a short list, a popover when the list is long or actionable.',
              'The add button needs `aria-label="Tambah anggota"`.',
            ],
          },
        ],
      },
      {
        id: 'label-group',
        title: 'Avatar label group',
        blocks: [
          { type: 'example', html: `<div class="avatar-stage is-stack">\n${['sm', 'md', 'lg', 'xl'].map((s, i) => label({ size: s, i, status: s === 'md' ? 'online' : 'none' })).join('\n')}\n</div>` },
          {
            type: 'table',
            head: ['Size', 'Avatar', 'Gap', 'Name (Semibold `gray-700`)', 'Secondary (Regular `gray-500`)'],
            rows: [
              ['`sm`', '32', '10', 'Text sm 14 / 20', 'Text xs 12 / 18'],
              ['`md`', '40', '12', 'Text sm 14 / 20', 'Text sm 14 / 20'],
              ['`lg`', '48', '12', 'Text md 16 / 24', 'Text md 16 / 24'],
              ['`xl`', '56', '16', 'Text lg 18 / 28', 'Text md 16 / 24'],
            ],
          },
          { type: 'h3', id: 'label-group-clickable', text: 'Clickable' },
          { type: 'p', text: 'As a button or link the whole group is one hit target. Hover: avatar `gray-100` ring and name `gray-900`. Focus: avatar `focus-ring` ring and name `gray-900`.' },
          { type: 'example', html: row([label({ clickable: true, name: 'Nama Pengguna', sub: 'email@perusahaan.com', content: 'initials' }), label({ clickable: true, state: 'hover', name: 'Nama Pengguna', sub: 'Hover', content: 'initials' }), label({ clickable: true, state: 'focus', name: 'Nama Pengguna', sub: 'Focused', content: 'initials' })].join('\n')) },
          { type: 'h3', id: 'label-group-truncate', text: 'Long text' },
          { type: 'p', text: 'Long names and emails truncate with an ellipsis; show the full value in a tooltip.' },
          { type: 'example', html: `<div class="avatar-stage is-narrow">\n${label({ size: 'md', name: 'Nama Pengguna yang Sangat Panjang Sekali', sub: 'nama.pengguna.yang.panjang@perusahaan-asuransi.co.id', content: 'initials' })}\n</div>` },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: row([avatar({ size: 'lg', name: 'Nama Pengguna' }), avatar({ size: 'lg', content: 'placeholder' })].join('\n')), text: 'No photo: initials. No name either: the placeholder icon.' },
              { kind: 'dont', html: row(['<span class="sb-avatar" data-size="lg" aria-hidden="true"></span>', '<span class="sb-avatar" data-size="lg" aria-hidden="true">NPA</span>'].join('\n')), text: 'An empty circle, or three letters. Initials are at most two: first and last name.' },
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
              'A photo needs `alt` = the person\'s name. Initials and the placeholder use `role="img"` with `aria-label`.',
              'An avatar next to the visible name is decorative: `alt=""` or `aria-hidden="true"`, so the name is not read twice.',
              'The online dot is colour only: give it `role="img"` and `aria-label="Online"`.',
              'An avatar that opens a menu is a `<button>` with a label such as "Akun Nama Pengguna".',
            ],
          },
          {
            type: 'table',
            head: ['Pair', 'Ratio', 'Needed', 'Result'],
            rows: [
              ['Initials and icon `brand-600` on `brand-50`', '4.65:1', '4.5:1', 'Passes'],
              ['Name `gray-700`, secondary `gray-500` on `white`', '10.46:1, 4.97:1', '4.5:1', 'Passes'],
              ['Add button: plus `gray-400` on `white`', '2.58:1', '3:1', '**Fails**'],
              ['Add button: dashed border `gray-300` on `white`', '1.47:1', '3:1', '**Fails**'],
            ],
          },
          { type: 'note', tone: 'warning', text: 'The add button is a faint `gray-400` plus inside a `gray-300` dashed border, both below 3:1. Same open decision as the help icon and input borders: `gray-500` passes.' },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css` and `avatar.css`. Avatar groups with "+N" also use `tooltip.css`. The initials helper is optional.' },
          { type: 'code', lang: 'css', filename: 'avatar.css', code: CSS },
          { type: 'h3', id: 'initials-script', text: 'Initials helper' },
          { type: 'code', lang: 'js', filename: 'avatar-initials.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
})();

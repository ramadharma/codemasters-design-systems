// Sidebar: the app's main navigation. Built from DESIGN.md §5 App layout (Sidebar), with Badge, Tooltip, Avatar label group
// and Dropdown menu inside. No Figma component yet.
(() => {
  const { esc, icon } = DS;

  // ---- Collapse button and sub-menus. A parent clicked while the sidebar is collapsed opens the sidebar and its sub-menu.
  function sidebarClick(e) {
    const btn = e.target.closest?.('.sb-side-toggle, .sb-side-item[aria-expanded]');
    if (!btn) return;
    const side = btn.closest('.sb-sidebar'), toggle = side.querySelector('.sb-side-toggle');
    const collapsed = side.hasAttribute('data-collapsed');
    if (btn === toggle) {
      side.toggleAttribute('data-collapsed', !collapsed);
      toggle.setAttribute('aria-expanded', String(collapsed));
      return;
    }
    const open = collapsed || btn.getAttribute('aria-expanded') !== 'true';
    if (collapsed) {
      side.removeAttribute('data-collapsed');
      toggle.setAttribute('aria-expanded', 'true');
    }
    btn.setAttribute('aria-expanded', String(open));
    document.getElementById(btn.getAttribute('aria-controls')).hidden = !open;
  }
  const SCRIPT = `// Sidebar: the collapse button and sub-menus. The account menu uses dropdown-menu.js, tooltips use tooltip.js.
${sidebarClick.toString().replace(/^  /gm, '')}
document.addEventListener('click', sidebarClick);`;

  const CSS = `/* Sidebar, Codemasters Design System
   Needs tokens.css, badge.css, tooltip.css, avatar.css and dropdown-menu.css for the parts inside;
   sidebar.js for collapsing and sub-menus, dropdown-menu.js for the account menu.

   <nav class="sb-sidebar" aria-label="Menu utama">
     <div class="sb-side-head">
       <img class="sb-side-logo" src="sembuh-logo-white.png" alt="Sembuh AI">
       <button class="sb-side-toggle" type="button" aria-label="Sidebar" aria-expanded="true">…chevron-left…</button>
     </div>
     <div class="sb-side-body">
       <div class="sb-side-group">
         <p class="sb-side-title" id="nav-menu">Menu</p>
         <ul class="sb-side-list" aria-labelledby="nav-menu">
           <li class="sb-tooltip-wrap">
             <a class="sb-side-item" href="/dashboard" aria-current="page">…icon…<span class="sb-side-label">Dashboard</span></a>
             <span class="sb-tooltip" data-theme="light" data-arrow="left" aria-hidden="true"><span class="sb-tooltip-title">Dashboard</span></span>
           </li>
           <li class="sb-tooltip-wrap">
             <button class="sb-side-item" type="button" aria-expanded="true" aria-controls="nav-klaim">…icon…<span class="sb-side-label">Klaim</span>
               <span class="sb-badge" data-size="sm" data-color="gray">12</span>…chevron-down…</button>
             <span class="sb-tooltip" …>…</span>
             <ul class="sb-side-sub" id="nav-klaim"><li><a class="sb-side-item" href="…"><span class="sb-side-label">Rawat inap</span></a></li>…</ul>
           </li>
         </ul>
       </div>
     </div>
     <div class="sb-side-foot">…Avatar label group as a Dropdown menu trigger…</div>
   </nav>

   data-collapsed   on .sb-sidebar: 72 wide, icons only; labels stay for screen readers and show as tooltips
   aria-current     "page" on the item of the current page
   aria-expanded    on the collapse button and on every parent item; folded sub-menus are hidden
   data-state       hover | focus on an item. Static mockups and docs only. */

.sb-sidebar {
  box-sizing: border-box; display: flex; flex-direction: column; flex: none;
  width: 280px; height: 100%; padding: 0 16px 16px;
  background: var(--gray-900); font-family: var(--font);
  transition: width 200ms var(--ease);
}
.sb-sidebar[data-collapsed] { width: 72px; }

/* Head: 80 high, the height of the page header bar, so both bottoms line up. */
.sb-side-head { display: flex; flex: none; align-items: center; justify-content: space-between; gap: 8px; height: 80px; padding-inline-start: 10px; }
.sb-side-logo { display: block; width: auto; height: 20px; }
.sb-side-toggle {
  display: inline-grid; place-items: center; flex: none; width: 32px; height: 32px; margin: 0; padding: 0;
  border: 0; border-radius: var(--radius-md); background: none; color: var(--gray-400); cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-side-toggle > svg { width: 20px; height: 20px; transition: rotate 200ms var(--ease); }
.sb-side-toggle:hover { background: var(--gray-800); color: var(--white); }
.sb-side-toggle:focus-visible { outline: 2px solid var(--brand-400); outline-offset: 0; }

/* Body: groups 24 apart; scrolls when the menu is taller than the screen. */
.sb-side-body { display: grid; flex: 1; align-content: start; gap: 24px; min-height: 0; overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--gray-700) transparent; }
.sb-side-title { margin: 0 0 8px; padding-inline: 10px; font: 600 var(--text-xs) var(--font); color: var(--gray-400); }
.sb-side-list, .sb-side-sub { display: grid; gap: 4px; margin: 0; padding: 0; list-style: none; }
.sb-side-list > li { display: block; } /* each li is a .sb-tooltip-wrap, for the collapsed tooltip */
.sb-side-sub { padding-top: 4px; }
.sb-side-sub[hidden] { display: none; }

/* Item: 44 high, radius 8. Icon and label share one colour in every state. Padding 10 puts the 20 px icon in the middle of the 72 px collapsed sidebar, so it never moves. */
.sb-side-item {
  box-sizing: border-box; display: flex; align-items: center; gap: 12px;
  width: 100%; height: 44px; margin: 0; padding: 0 10px; border: 0; border-radius: var(--radius-md);
  background: none; font: 500 var(--text-md) var(--font); color: var(--gray-400); text-align: start; text-decoration: none; white-space: nowrap;
  cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-side-item > svg { width: 20px; height: 20px; flex: none; }
.sb-side-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.sb-side-item > .sb-badge { flex: none; }
.sb-side-item > .sb-side-chevron { transition: rotate 150ms var(--ease); }
.sb-side-item[aria-expanded="true"] > .sb-side-chevron { rotate: 180deg; }
.sb-side-item:is(:hover, [data-state="hover"]) { background: var(--gray-800); color: var(--gray-300); }
.sb-side-item:is(:focus-visible, [data-state="focus"]) { outline: 2px solid var(--brand-400); outline-offset: -2px; }
/* Current page: gray-800 fill, white label and icon, Semibold. */
.sb-side-item[aria-current="page"] { background: var(--gray-800); color: var(--white); font-weight: 600; }
/* A parent whose sub-menu holds the current page keeps a white label and icon while folded. */
.sb-side-item[aria-expanded="false"]:has(+ .sb-tooltip + .sb-side-sub [aria-current="page"]) { color: var(--white); }
/* Sub-item: 40 high, Text sm, label in line with the parent's label (10 + 20 icon + 12 gap). */
.sb-side-sub .sb-side-item { height: 40px; padding-inline-start: 42px; font-size: var(--text-sm); }

/* Foot: the signed-in person, above a gray-800 divider. Opens the account menu upwards. */
.sb-side-foot { flex: none; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--gray-800); }
.sb-side-foot > .sb-menu-wrap { display: flex; }
.sb-side-profile { display: flex; width: 100%; }
.sb-side-profile > .sb-avatar-label-text { flex: 1; }
.sb-side-profile > svg { width: 20px; height: 20px; flex: none; color: var(--gray-400); }
.sb-side-foot .sb-side-profile .sb-avatar-name, .sb-side-foot .sb-side-profile:is(:hover, :focus-visible, [data-state]) .sb-avatar-name { color: var(--white); }
.sb-side-foot .sb-side-profile .sb-avatar-sub { color: var(--gray-400); }
/* On gray-900 the avatar rings are gray-700 (hover, open) and brand-400 (focus) instead of gray-100 and focus-ring. */
.sb-side-foot .sb-side-profile:is(:hover, [data-state="hover"], [aria-expanded="true"]) .sb-avatar { box-shadow: 0 0 0 4px var(--gray-700); }
.sb-side-foot .sb-side-profile:is(:focus-visible, [data-state="focus"]) .sb-avatar { box-shadow: 0 0 0 2px var(--gray-900), 0 0 0 4px var(--brand-400); }
.sb-side-foot .sb-menu { top: auto; bottom: calc(100% + 8px); inset-inline: 0 auto; }

/* Tooltips show only while collapsed, 10 px outside the sidebar's edge (16 padding + 10). */
.sb-sidebar .sb-tooltip { --tip-gap: 26px; }
.sb-sidebar:not([data-collapsed]) .sb-tooltip { display: none; }

/* Collapsed: 72 wide. Labels, group titles, counts and the name stay for screen readers; a divider replaces each later title. */
.sb-sidebar[data-collapsed] .sb-side-head { justify-content: center; padding: 0; }
.sb-sidebar[data-collapsed] .sb-side-logo,
.sb-sidebar[data-collapsed] .sb-side-chevron,
.sb-sidebar[data-collapsed] .sb-side-profile > svg,
.sb-sidebar[data-collapsed] .sb-side-sub { display: none; }
.sb-sidebar[data-collapsed] .sb-side-toggle > svg { rotate: 180deg; }
.sb-sidebar[data-collapsed] :is(.sb-side-label, .sb-side-title, .sb-side-item > .sb-badge, .sb-avatar-label-text) {
  position: absolute; width: 1px; height: 1px; margin: 0; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap;
}
.sb-sidebar[data-collapsed] .sb-side-body { gap: 16px; overflow: visible; } /* tooltips reach out to the right */
.sb-sidebar[data-collapsed] .sb-side-group + .sb-side-group { padding-top: 16px; border-top: 1px solid var(--gray-800); }
.sb-sidebar[data-collapsed] .sb-side-item:has(+ .sb-tooltip + .sb-side-sub [aria-current="page"]) { background: var(--gray-800); }
.sb-sidebar[data-collapsed] .sb-side-foot .sb-menu { bottom: 0; inset-inline-start: calc(100% + 8px); }

@media (prefers-reduced-motion: reduce) {
  .sb-sidebar, .sb-side-toggle, .sb-side-toggle > svg, .sb-side-item, .sb-side-item > .sb-side-chevron { transition: none; }
}
`;

  // ---- Content. Item: [label, icon, [badge colour, count], sub-items].
  const NAV = [
    ['Menu', [
      ['Dashboard', 'grid'],
      ['Klaim', 'file-text', ['gray', '12'], ['Rawat inap', 'Rawat jalan', 'Rawat gigi']],
      ['Analisis FWA', 'signal', ['error', '6']],
      ['Laporan', 'activity'],
    ]],
    ['Manajemen', [['Pengguna', 'user'], ['Rumah Sakit', 'building'], ['Pengaturan', 'settings']]],
  ];
  const LOGO = 'assets/brand/sembuh-logo-white.png';
  const chevron = icon('chevron-down').replace('<svg ', '<svg class="sb-side-chevron" ');
  const tip = text => `<span class="sb-tooltip" data-theme="light" data-arrow="left" aria-hidden="true"><span class="sb-tooltip-title">${esc(text)}</span></span>`;
  const current = (label, cur) => (label === cur ? ' aria-current="page"' : '');

  let uid = 0;
  function sidebar({ collapsed = false, badges = true, sub = true, open = true, cur = 'Dashboard', states = {}, menuOpen = false, pins = false } = {}) {
    const id = `side-${++uid}`;
    const pin = n => (pins ? ` data-pin="${n}" data-pin-at="end"` : '');
    const st = label => (states[label] ? ` data-state="${states[label]}"` : '');
    const groups = NAV.map(([title, items], g) => {
      const lis = items.map(([label, glyph, badge, kids]) => {
        const count = badges && badge ? `<span class="sb-badge" data-size="sm" data-color="${badge[0]}">${badge[1]}</span>` : '';
        const name = `${icon(glyph)}<span class="sb-side-label">${esc(label)}</span>${count}`;
        const tipText = count ? `${label} (${badge[1]})` : label;
        if (!(sub && kids)) {
          return `        <li class="sb-tooltip-wrap">
          <a class="sb-side-item" href="#/sidebar"${current(label, cur)}${st(label)}${label === cur ? pin(3) : ''}>${name}</a>
          ${tip(tipText)}
        </li>`;
        }
        const subId = `${id}-${label.toLowerCase()}`;
        return `        <li class="sb-tooltip-wrap">
          <button class="sb-side-item" type="button" aria-expanded="${open}" aria-controls="${subId}"${st(label)}${pin(4)}>${name}${chevron}</button>
          ${tip(tipText)}
          <ul class="sb-side-sub" id="${subId}"${open ? '' : ' hidden'}>
${kids.map((k, i) => `            <li><a class="sb-side-item" href="#/sidebar"${current(k, cur)}${st(k)}${i === 0 ? pin(5) : ''}><span class="sb-side-label">${esc(k)}</span></a></li>`).join('\n')}
          </ul>
        </li>`;
      });
      return `    <div class="sb-side-group">
      <p class="sb-side-title" id="${id}-g${g}"${g === 0 ? pin(2) : ''}>${esc(title)}</p>
      <ul class="sb-side-list" aria-labelledby="${id}-g${g}">
${lis.join('\n')}
      </ul>
    </div>`;
    });
    return `<nav class="sb-sidebar" aria-label="Menu utama"${collapsed ? ' data-collapsed' : ''}>
  <div class="sb-side-head"${pin(1)}>
    <img class="sb-side-logo" src="${LOGO}" alt="Sembuh AI">
    <button class="sb-side-toggle" type="button" aria-label="Sidebar" aria-expanded="${!collapsed}">${icon('chevron-left')}</button>
  </div>
  <div class="sb-side-body">
${groups.join('\n')}
  </div>
  <div class="sb-side-foot"${pin(6)}>
    <div class="sb-menu-wrap">
      <button class="sb-avatar-label sb-side-profile" type="button" data-size="md" aria-haspopup="menu" aria-expanded="${menuOpen}" aria-controls="${id}-akun">
        <span class="sb-avatar" data-size="md" aria-hidden="true">AD</span>
        <span class="sb-avatar-label-text"><span class="sb-avatar-name">Analis D</span><span class="sb-avatar-sub">analis.d@sembuh.ai</span></span>
        ${icon('selector')}
      </button>
      <div class="sb-menu" id="${id}-akun" role="menu" aria-label="Akun"${menuOpen ? '' : ' hidden'}>
        <div class="sb-menu-group" role="group">
          <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1">${icon('user')}<span class="sb-menu-label">Lihat profil</span></button>
          <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1">${icon('settings')}<span class="sb-menu-label">Pengaturan akun</span></button>
        </div>
        <div class="sb-menu-sep" role="separator"></div>
        <div class="sb-menu-group" role="group">
          <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1">${icon('log-out')}<span class="sb-menu-label">Keluar</span></button>
        </div>
      </div>
    </div>
  </div>
</nav>`;
  }
  // Docs-only frame: a 720 px app window, gray-50 page area right of the sidebar. DS.snippet strips it from the code.
  const stage = (html, cls = '') => `<div class="side-stage${cls ? ` ${cls}` : ''}">\n${html}\n</div>`;

  // Item states on a dark tile, one item each.
  const STATES = [['Default', ''], ['Hover', 'hover'], ['Focused', 'focus'], ['Current page', 'current']];
  const stateItem = ([label, s]) => `<ul class="sb-side-list"><li><a class="sb-side-item" href="#/sidebar"${s === 'current' ? ' aria-current="page"' : s ? ` data-state="${s}"` : ''}>${icon('file-text')}<span class="sb-side-label">Klaim</span></a></li></ul>`;
  const states = `<div class="side-tile">
${STATES.map(s => `<span class="mx">${s[0]}</span>\n${stateItem(s)}`).join('\n')}
</div>`;

  DS.components.push({
    slug: 'sidebar',
    name: 'Sidebar',
    category: 'Components',
    status: 'In progress',
    updated: '2026-10-13',
    description: 'The app\'s main navigation: a fixed gray-900 column on the left with grouped menu items, count badges, sub-menus and the account menu. Collapses from 280 to 72 with icons and tooltips.',
    css: CSS,
    cssFile: 'sidebar.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Use the chevron at the top to collapse it, the Klaim item to fold its sub-menu, and the profile at the bottom for the account menu.' },
          {
            type: 'playground',
            initial: { collapsed: false, badges: true, sub: true },
            controls: [
              { key: 'collapsed', label: 'Collapsed', type: 'toggle' },
              { key: 'badges', label: 'Count badges', type: 'toggle' },
              { key: 'sub', label: 'Sub-menu', type: 'toggle' },
            ],
            render: s => stage(sidebar(s)),
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
              'One sidebar per app, fixed on the left and as tall as the screen. Pages scroll on its right; the sidebar never scrolls with them.',
              'Items go to pages. Actions (Buat klaim, Unduh) belong in the page header, not in the sidebar.',
              'Group items under short titles ("Menu", "Manajemen"). Put the daily work first and the admin pages last.',
              'Every top-level item has an icon, so the collapsed sidebar still works. Labels are one to three words in sentence case.',
              'A count badge shows work waiting: Error for counts that need action (FWA findings), Gray for plain totals. Never show 0; hide the badge instead.',
              'Use a sub-menu only for sections with several pages of the same kind (Rawat inap, Rawat jalan). One level only; deeper structure belongs on the page as tabs.',
              'Remember the collapsed or open choice per person, so the sidebar opens the way they left it.',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: stage(sidebar({ pins: true }), 'is-anat'), code: false, layout: 'anat' },
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Head', '80 high, like the page header bar. White logo 20 high on the left, 32 × 32 collapse button on the right: `gray-400` chevron, hover `gray-800` fill and `white` chevron.'],
              ['2', 'Group title', 'Text xs / Semibold `gray-400`, padding `0 10`, 8 above its items. Groups sit 24 apart.'],
              ['3', 'Item (current page)', '44 high, radius 8, padding `0 10`, gap 12. 20 px icon and Text md / Medium label, both `gray-400`. Current page: `gray-800` fill, `white` label (Semibold) and icon.'],
              ['4', 'Parent item', 'An item with a count badge (Badge sm) and a 20 px chevron that turns up when the sub-menu is open.'],
              ['5', 'Sub-item', '40 high, Text sm, no icon; the label lines up with the parent\'s label (padding-start 42).'],
              ['6', 'Profile', 'Avatar label group md: `white` name, `gray-400` email, `selector` icon. Opens the account menu above it. 16 above, a 1 px `gray-800` divider.'],
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
              ['Collapsed', 'False (280), True (72)', '`data-collapsed` on `.sb-sidebar`; the collapse button has `aria-expanded`'],
              ['Current page', 'True, False', '`aria-current="page"` on the item'],
              ['Count badge', 'True, False', '`<span class="sb-badge" data-size="sm">` after the label'],
              ['Sub-menu', 'Open, Folded', 'The parent is a `<button>` with `aria-expanded` and `aria-controls`; the `ul.sb-side-sub` is `hidden` when folded'],
              ['State', 'Default, Hover, Focused', '`:hover`, `:focus-visible`. Static mockups only: `data-state="hover"` or `"focus"`'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-open', text: 'Open' },
          { type: 'p', text: '280 wide. The default on screens of 1440 and up.' },
          { type: 'example', html: stage(sidebar({ cur: 'Rawat inap' })), code: false },
          { type: 'h3', id: 'type-collapsed', text: 'Collapsed' },
          {
            type: 'p',
            text: '72 wide: icons only, centred, with a light Tooltip on the right on hover and focus. Group titles turn into a 1 px `gray-800` divider, counts and the name stay for screen readers. A parent holding the current page takes the `gray-800` fill. Clicking a parent opens the sidebar with its sub-menu.',
          },
          { type: 'example', html: stage(sidebar({ collapsed: true, cur: 'Rawat inap' })), code: false },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'example', html: states, code: false },
          {
            type: 'table',
            head: ['State', 'Fill', 'Label', 'Icon'],
            rows: [
              ['Default', 'none', '`gray-400`, Medium', '`gray-400`'],
              ['Hover', '`gray-800`', '`gray-300`', '`gray-300`'],
              ['Focused', 'none, 2 px `brand-400` outline inside', '`gray-400`', '`gray-400`'],
              ['Current page', '`gray-800`', '`white`, Semibold', '`white`'],
              ['Folded parent of the current page', 'none (collapsed: `gray-800`)', '`white`', '`white`'],
            ],
          },
          { type: 'note', text: 'The focus outline is `brand-400`, not the usual `brand-600`: `brand-600` reaches only 3.51:1 on `gray-900`, `brand-400` 6.76:1.' },
        ],
      },
      {
        id: 'account',
        title: 'Account menu',
        blocks: [
          { type: 'p', text: 'The profile is a Dropdown menu trigger. The menu opens above the profile, left-aligned (to the right when collapsed). The last group is Keluar, after a divider.' },
          { type: 'example', html: stage(sidebar({ menuOpen: true })), code: false },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: `<div class="side-tile">${stateItem(['', 'current'])}</div>`, text: 'The current page as a filled item with a white label.' },
              { kind: 'dont', html: `<div class="side-tile"><ul class="sb-side-list"><li><a class="sb-side-item" href="#/sidebar" aria-current="page" style="background: none; color: var(--brand-400)">${icon('file-text')}<span class="sb-side-label">Klaim</span></a></li></ul></div>`, text: 'Brand-coloured text only. It reads as a link and the item has no shape.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: `<div class="side-tile"><ul class="sb-side-list"><li><a class="sb-side-item" href="#/sidebar">${icon('signal')}<span class="sb-side-label">Analisis FWA</span><span class="sb-badge" data-size="sm" data-color="error">6</span></a></li></ul></div>`, text: 'A count only where work is waiting.' },
              { kind: 'dont', html: `<div class="side-tile"><ul class="sb-side-list"><li><a class="sb-side-item" href="#/sidebar">${icon('signal')}<span class="sb-side-label">Analisis FWA</span><span class="sb-badge" data-size="sm" data-color="gray">0</span></a></li></ul></div>`, text: 'A badge with 0. Hide it instead.' },
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
              'The sidebar is a `<nav aria-label="Menu utama">`. Each group is a `<ul>` labelled by its title (`aria-labelledby`).',
              'Items are links (`<a href>`); the current page has `aria-current="page"`. Parents with a sub-menu are `<button>`s with `aria-expanded` and `aria-controls`.',
              'The collapse button keeps one label ("Sidebar") and reports its state with `aria-expanded`.',
              'Collapsed, the labels, group titles and counts are visually hidden but still read. The tooltips repeat the label, so they are `aria-hidden`.',
              'The profile opens a WAI-ARIA menu: Enter, Space or ↓ opens it, Esc closes it back to the profile.',
            ],
          },
          {
            type: 'table',
            head: ['Text', 'On', 'Ratio', 'AA'],
            rows: [
              ['Label `gray-400`', '`gray-900`', '6.89:1', 'Passes'],
              ['Hover label `gray-300`', '`gray-800`', '9.97:1', 'Passes'],
              ['Current label `white`', '`gray-800`', '14.70:1', 'Passes'],
              ['Group title `gray-400`', '`gray-900`', '6.89:1', 'Passes'],
              ['Focus outline `brand-400`', '`gray-900`', '6.76:1', 'Passes (3:1 needed)'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `badge.css`, `tooltip.css`, `avatar.css` and `dropdown-menu.css`, then `sidebar.css`. Add `sidebar.js`, `dropdown-menu.js` and `tooltip.js`.' },
          { type: 'code', lang: 'css', filename: 'sidebar.css', code: CSS },
          { type: 'h3', id: 'sidebar-script', text: 'Script' },
          { type: 'code', lang: 'js', filename: 'sidebar.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('click', sidebarClick);
})();

// Header bar: the top of every app page, with the page title (or breadcrumb) on the left and the page actions on the right.
// Built from DESIGN.md §5 App layout (Header bar) and §6 Navigation (Breadcrumb). No Figma component yet.
(() => {
  const { esc, icon } = DS;

  const CSS = `/* Header bar, Codemasters Design System
   Needs tokens.css, button.css and badge.css; input-field.css for search;
   dropdown-menu.css and dropdown-menu.js for the "…" breadcrumb and action menus. No script of its own.

   <header class="sb-header">
     <div class="sb-header-title">
       <a class="sb-btn" href="/klaim/rawat-inap" data-hierarchy="secondary-gray" data-size="sm" data-icon="only" aria-label="Kembali ke Rawat inap">…arrow-left…</a>
       <nav aria-label="Breadcrumb">
         <ol class="sb-crumbs">
           <li><div class="sb-menu-wrap"><button class="sb-crumb-more" type="button" aria-label="Level lain" aria-haspopup="menu" aria-expanded="false" aria-controls="crumbs-more">…</button>
             <div class="sb-menu" id="crumbs-more" role="menu" aria-label="Level lain" hidden>…<a class="sb-menu-item" role="menuitem" href="/klaim">…</a></div></div></li>
           <li><a class="sb-crumb" href="/klaim/rawat-inap">Rawat inap</a></li>
         </ol>
       </nav>
       <h1 class="sb-header-heading">KLM-0241</h1>
       <span class="sb-badge" data-size="md" data-color="blue">Sedang Ditinjau</span>
     </div>
     <div class="sb-header-search" role="search">…Input field with a search icon…</div>
     <div class="sb-header-actions">…buttons lg, primary last…</div>
   </header>

   List page    the title alone: <h1 class="sb-header-heading">Klaim</h1>
   Detail page  back button + breadcrumb (… for middle levels) + ID as the title + status badge
   Search       .sb-header-search between the title and the actions, 320 wide, shrinks to 200
   Bell         <button class="sb-btn sb-header-bell" … data-icon="only" aria-label="Notifikasi, 3 baru">…bell…<span class="sb-header-dot"></span></button> */

/* Bar: sticky at the top of the page column, 80 high (the sidebar head's height), padding 0 32 (the page padding). */
.sb-header {
  position: sticky; top: 0; z-index: 10;
  box-sizing: border-box; display: flex; align-items: center; gap: 24px;
  height: 80px; padding: 0 32px;
  background: var(--bg-primary); border-bottom: 1px solid var(--border-secondary);
  font-family: var(--font);
}

/* Title: Display xs / Semibold gray-900, one line; a long title truncates.
   On detail pages the ID never truncates: the breadcrumb levels shrink first. */
.sb-header-title { display: flex; flex: 1; align-items: center; gap: 12px; min-width: 0; }
.sb-header-title > :not(.sb-header-heading, nav) { flex: none; }
.sb-header-title > nav { min-width: 0; }
.sb-header-title > nav + .sb-header-heading { flex: none; }
.sb-header-heading { min-width: 0; margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font: 600 var(--display-xs) var(--font); color: var(--text-primary); }
.sb-header-title > .sb-btn { margin-inline-end: 4px; } /* back button: 16 to the breadcrumb */

/* Breadcrumb: the levels above the page in Display xs / Medium gray-500, "/" in gray-300 between them. */
.sb-crumbs { display: flex; align-items: center; gap: 12px; margin: 0; padding: 0; list-style: none; font: 500 var(--display-xs) var(--font); color: var(--text-quaternary); white-space: nowrap; }
.sb-crumbs > li { display: flex; align-items: center; min-width: 0; }
.sb-crumbs > li:has(.sb-menu-wrap) { flex: none; }
.sb-crumbs > li::after { content: '/' / ''; margin-inline-start: 12px; color: var(--border-primary); }
.sb-crumb { overflow: hidden; text-overflow: ellipsis; border-radius: var(--radius-sm); color: inherit; text-decoration: none; transition: color 150ms var(--ease); }
.sb-crumb:hover { color: var(--text-secondary); }
.sb-crumb:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-crumb-more {
  height: 32px; margin: 0; padding: 0 6px; border: 0; border-radius: var(--radius-md);
  background: none; font: inherit; color: inherit; cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-crumb-more:is(:hover, [aria-expanded="true"]) { background: var(--bg-secondary); color: var(--text-secondary); }
.sb-crumb-more:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-crumbs .sb-menu { inset-inline: 0 auto; } /* opens under the "…", left-aligned */
.sb-crumbs a.sb-menu-item { text-decoration: none; }

/* Search: an Input field, 320 wide, shrinking to 200 before the title truncates further. */
.sb-header-search { flex: 0 1 320px; min-width: 200px; margin: 0; }

/* Actions: Buttons lg, gap 8, the primary action last. */
.sb-header-actions { display: flex; flex: none; align-items: center; gap: 8px; }
.sb-header-bell { position: relative; }
.sb-header-dot { position: absolute; top: 10px; right: 11px; width: 8px; height: 8px; border-radius: var(--radius-full); background: var(--error-500); box-shadow: 0 0 0 2px var(--bg-primary); }

@media (prefers-reduced-motion: reduce) {
  .sb-crumb, .sb-crumb-more { transition: none; }
}
`;

  // ---- Markup
  let uid = 0;
  const btn = (label, hierarchy, glyph, extra = '') =>
    `<button class="sb-btn" type="button" data-hierarchy="${hierarchy}" data-size="lg"${extra}>${glyph ? icon(glyph) : ''}${esc(label)}</button>`;
  const menuItems = items => items.map(([glyph, label, href]) =>
    href
      ? `<a class="sb-menu-item" role="menuitem" href="${href}" tabindex="-1">${icon(glyph)}<span class="sb-menu-label">${esc(label)}</span></a>`
      : `<button class="sb-menu-item" type="button" role="menuitem" tabindex="-1">${icon(glyph)}<span class="sb-menu-label">${esc(label)}</span></button>`).join('');

  function header({ type = 'list', search = false, bell = false, menuOpen = false, pins = false, title, primaryFirst = false, twoPrimary = false } = {}) {
    const id = `hdr-${++uid}`;
    const pin = (n, at) => (pins ? ` data-pin="${n}"${at ? ` data-pin-at="${at}"` : ''}` : '');
    const left = type === 'detail'
      ? `<a class="sb-btn" href="#/header-bar" data-hierarchy="secondary-gray" data-size="sm" data-icon="only" aria-label="Kembali ke Rawat inap"${pin(2)}>${icon('arrow-left')}</a>
    <nav aria-label="Breadcrumb"${pin(3)}>
      <ol class="sb-crumbs">
        <li><div class="sb-menu-wrap">
          <button class="sb-crumb-more" type="button" aria-label="Level lain" aria-haspopup="menu" aria-expanded="${menuOpen}" aria-controls="${id}-more">…</button>
          <div class="sb-menu" id="${id}-more" role="menu" aria-label="Level lain"${menuOpen ? '' : ' hidden'}>
            <div class="sb-menu-group" role="group">${menuItems([['layers', 'Klaim', '#/header-bar']])}</div>
          </div>
        </div></li>
        <li><a class="sb-crumb" href="#/header-bar">Rawat inap</a></li>
      </ol>
    </nav>
    <h1 class="sb-header-heading"${pin(4)}>${esc(title || 'KLM-0241')}</h1>
    <span class="sb-badge" data-size="md" data-color="blue"${pin(5)}>Sedang Ditinjau</span>`
      : `<h1 class="sb-header-heading">${esc(title || 'Klaim')}</h1>`;
    const find = search
      ? `\n  <div class="sb-header-search" role="search"${pin(6)}>
    <div class="sb-input">${icon('search')}<input type="search" placeholder="Cari klaim, peserta, rumah sakit" aria-label="Cari"></div>
  </div>`
      : '';
    const ring = bell ? `\n    <button class="sb-btn sb-header-bell" type="button" data-hierarchy="secondary-gray" data-size="lg" data-icon="only" aria-label="Notifikasi, 3 baru"${pin(type === 'detail' ? 6 : 7)}>${icon('bell')}<span class="sb-header-dot"></span></button>` : '';
    const actions = type === 'detail'
      ? `<div class="sb-menu-wrap">
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="lg" data-icon="only" aria-label="Aksi lain" aria-haspopup="menu" aria-expanded="false" aria-controls="${id}-aksi">${icon('more-vertical')}</button>
      <div class="sb-menu" id="${id}-aksi" role="menu" aria-label="Aksi lain" hidden>
        <div class="sb-menu-group" role="group">${menuItems([['download', 'Unduh PDF'], ['user-plus', 'Tugaskan ulang']])}</div>
        <div class="sb-menu-sep" role="separator"></div>
        <div class="sb-menu-group" role="group">${menuItems([['trash', 'Hapus klaim']])}</div>
      </div>
    </div>
    ${btn('Setujui', 'primary', 'check')}`
      : twoPrimary
        ? `${btn('Unduh', 'primary', 'download')}\n    ${btn('Buat klaim', 'primary', 'plus')}`
        : primaryFirst
          ? `${btn('Buat klaim', 'primary', 'plus')}\n    ${btn('Unduh', 'secondary-gray', 'download')}`
          : `${btn('Unduh', 'secondary-gray', 'download')}\n    ${btn('Buat klaim', 'primary', 'plus')}`;
    return `<header class="sb-header"${pin(1, 'bottom edge')}>
  <div class="sb-header-title">
    ${left}
  </div>${find}
  <div class="sb-header-actions"${pin(type === 'detail' ? (bell ? 7 : 6) : 8)}>${ring}
    ${actions}
  </div>
</header>`;
  }

  // Docs-only frames. DS.snippet strips them from the code.
  const stage = (html, cls = '') => `<div class="header-stage${cls ? ` ${cls}` : ''}">\n${html}\n</div>`;
  const placeholder = n => Array.from({ length: n }, () => '<div class="shell-card"></div>').join('');
  const shell = `<div class="shell-stage">
${DS.sidebar({ collapsed: true, cur: 'Rawat inap' })}
<div class="shell-main">
${header({ type: 'detail', bell: true })}
<div class="shell-body">${placeholder(4)}</div>
</div>
</div>`;

  DS.components.push({
    slug: 'header-bar',
    name: 'Header bar',
    category: 'Components',
    status: 'In progress',
    updated: '2026-10-13',
    description: 'The top of every app page: the page title, or a breadcrumb on detail pages, on the left and the page actions on the right. Sticky, white, 80 high. Optional search and notifications.',
    css: CSS,
    cssFile: 'header-bar.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'The "…" in the breadcrumb and the ⋮ button open their menus.' },
          {
            type: 'playground',
            initial: { type: 'list', search: false, bell: false },
            controls: [
              { key: 'type', label: 'Type', type: 'segmented', options: [['list', 'List page'], ['detail', 'Detail page']] },
              { key: 'search', label: 'Search', type: 'toggle' },
              { key: 'bell', label: 'Notifications', type: 'toggle' },
            ],
            render: s => stage(header(s), s.type === 'detail' ? 'is-tall' : ''),
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
              'Every app page starts with one header bar. It sits at the top of the page column, right of the Sidebar, and stays there while the page scrolls.',
              'The title is the page\'s one `<h1>`: the page name on list pages ("Klaim"), the record ID on detail pages ("KLM-0241").',
              'Detail pages add a back button and a breadcrumb. Show the parent level; fold the levels above it into "…", which opens a menu of them.',
              'Actions act on the whole page. One primary action at most, always last (rightmost). Secondary actions go before it; rarely used and destructive ones go into the ⋮ menu.',
              'Search in the header searches the whole app. A search that filters one table belongs above that table.',
              'The notification button shows a dot while something is unread, and says how many in its label.',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: stage(header({ type: 'detail', bell: true, pins: true }), 'is-anat'), code: false, layout: 'anat' },
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Bar', 'Sticky, `white`, 80 high, padding `0 32`, 1 px `gray-200` bottom border. Parts 24 apart, centred vertically.'],
              ['2', 'Back button', 'Button secondary gray sm, icon only (`arrow-left`). Goes to the parent level. 16 to the breadcrumb.'],
              ['3', 'Breadcrumb', 'Display xs / Medium `gray-500`, hover `gray-700`; "/" in `gray-300`, 12 apart. Levels above the parent fold into "…" (opens a Dropdown menu).'],
              ['4', 'Title', 'Display xs / Semibold `gray-900`, one line; a long title truncates with an ellipsis. A record ID never truncates: the breadcrumb shrinks first.'],
              ['5', 'Status', 'Optional Badge md in the status colour, 12 after the title.'],
              ['6', 'Notifications', 'Button secondary gray lg, icon only (`bell`). Unread: an 8 px `error-500` dot with a 2 px `white` ring.'],
              ['7', 'Actions', 'Buttons lg, gap 8, primary last. Extra actions in a ⋮ Dropdown menu.'],
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
              ['Type', 'List page, Detail page', 'List: `<h1 class="sb-header-heading">` alone. Detail: back button, `<nav aria-label="Breadcrumb">` with `ol.sb-crumbs`, then the `h1`'],
              ['Status', 'True, False', 'A Badge md after the `h1`'],
              ['Search', 'True, False', '`<div class="sb-header-search" role="search">` with an Input field, between the title and the actions'],
              ['Notifications', 'True, False', '`.sb-header-bell` button; `.sb-header-dot` inside while something is unread'],
              ['Actions', '0 to 3 buttons + ⋮ menu', '`.sb-header-actions` with Buttons lg'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-list', text: 'List page' },
          { type: 'p', text: 'The page name and the page actions.' },
          { type: 'example', html: stage(header()), code: false },
          { type: 'h3', id: 'type-detail', text: 'Detail page' },
          { type: 'p', text: 'Back button, breadcrumb, the record ID as the title and its status. The "…" opens the levels above the parent.' },
          { type: 'example', html: stage(header({ type: 'detail', menuOpen: true }), 'is-tall'), code: false },
          { type: 'h3', id: 'type-search', text: 'With search' },
          { type: 'p', text: 'An Input field with a search icon, 320 wide. It shrinks to 200 when space runs out; after that the title truncates.' },
          { type: 'example', html: stage(header({ search: true, bell: true })), code: false },
          { type: 'h3', id: 'type-bell', text: 'With notifications' },
          { type: 'p', text: 'The bell sits first in the actions. The dot shows only while something is unread.' },
          { type: 'example', html: stage(header({ bell: true })), code: false },
        ],
      },
      {
        id: 'app-shell',
        title: 'In the app',
        blocks: [
          { type: 'p', text: 'The header bar and the Sidebar head are both 80 high, so their bottom lines meet. Scroll the page: the header bar stays at the top.' },
          { type: 'example', html: shell, code: false },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(header({ title: 'Klaim' }), 'is-mini'), text: 'One primary action, last.' },
              { kind: 'dont', html: stage(header({ title: 'Klaim', twoPrimary: true }), 'is-mini'), text: 'Two primary actions. Neither stands out.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(header({ title: 'Klaim' }), 'is-mini'), text: 'Secondary actions before the primary one.' },
              { kind: 'dont', html: stage(header({ title: 'Klaim', primaryFirst: true }), 'is-mini'), text: 'The primary action first. People look for it at the end.' },
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
              'The title is the page\'s only `<h1>`, so screen reader users can jump to it.',
              'The breadcrumb is a `<nav aria-label="Breadcrumb">` with an ordered list. The "/" separators come from CSS with empty alt text (`content: \'/\' / \'\'`), so they are not read.',
              'The back button is a link with a label that names where it goes ("Kembali ke Rawat inap").',
              'The "…" and ⋮ buttons are WAI-ARIA menu buttons (see Dropdown menu) with labels ("Level lain", "Aksi lain").',
              'Search sits in a `role="search"` landmark; the input has an `aria-label` because the placeholder is not a label.',
              'The notification button says the count in its label ("Notifikasi, 3 baru"); the dot is decoration.',
            ],
          },
          {
            type: 'table',
            head: ['Text', 'On', 'Ratio', 'AA'],
            rows: [
              ['Title `gray-900`', '`white`', '17.75:1', 'Passes'],
              ['Breadcrumb `gray-500`', '`white`', '4.97:1', 'Passes'],
              ['Breadcrumb hover `gray-700`', '`white` / `gray-50`', '10.46:1 / 10.01:1', 'Passes'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `button.css`, `badge.css`, `input-field.css` and `dropdown-menu.css`, then `header-bar.css`. Add `dropdown-menu.js` for the "…" and ⋮ menus.' },
          { type: 'code', lang: 'css', filename: 'header-bar.css', code: CSS },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
})();

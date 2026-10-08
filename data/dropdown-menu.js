// Dropdown menu: an action menu opened from a button, an icon or an avatar. Source: DESIGN.md §6 Dropdown (Dropdown menu),
// Figma nodes 18-319 (list item), 1050-40224 (list header), 1050-109778 (menu base), 1050-146925 (Dropdown), 1050-105632 (Dropdown menu).
(() => {
  const { icon, esc } = DS;

  // ---- Behaviour: WAI-ARIA menu button. Picking an item fires a "sb-menu-select" event the app can listen to.
  function menuParts(el) {
    const wrap = el.closest('.sb-menu-wrap');
    return wrap && { wrap, trigger: wrap.querySelector('[aria-haspopup="menu"]'), menu: wrap.querySelector('[role="menu"]') };
  }
  function menuItems(menu) {
    return [...menu.querySelectorAll('[role^="menuitem"]')].filter(i => i.getAttribute('aria-disabled') !== 'true');
  }
  function menuSetOpen(p, open, focus) {
    p.trigger.setAttribute('aria-expanded', String(open));
    p.menu.hidden = !open;
    if (open && focus) {
      const items = menuItems(p.menu);
      (focus === 'last' ? items[items.length - 1] : items[0])?.focus();
    }
  }
  function menuClick(e) {
    const item = e.target.closest?.('[role^="menuitem"]');
    const trigger = e.target.closest?.('.sb-menu-wrap [aria-haspopup="menu"]');
    document.querySelectorAll('.sb-menu-wrap [aria-haspopup="menu"][aria-expanded="true"]').forEach(t => {
      if (t !== trigger && !t.closest('.sb-menu-wrap').contains(e.target)) menuSetOpen(menuParts(t), false);
    });
    if (item) {
      if (item.getAttribute('aria-disabled') === 'true') return;
      const p = menuParts(item);
      if (item.getAttribute('role') === 'menuitemcheckbox') {
        item.setAttribute('aria-checked', String(item.getAttribute('aria-checked') !== 'true')); // menu stays open
      } else {
        menuSetOpen(p, false);
        p.trigger.focus();
      }
      item.dispatchEvent(new CustomEvent('sb-menu-select', { bubbles: true, detail: item.querySelector('.sb-menu-label').textContent }));
    } else if (trigger) {
      const p = menuParts(trigger);
      menuSetOpen(p, p.menu.hidden, e.detail === 0 ? 'first' : null); // keyboard "click" (Enter/Space) moves focus in
    }
  }
  function menuKeydown(e) {
    const trigger = e.target.closest?.('.sb-menu-wrap [aria-haspopup="menu"]');
    if (trigger && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault();
      return menuSetOpen(menuParts(trigger), true, e.key === 'ArrowUp' ? 'last' : 'first');
    }
    const item = e.target.closest?.('[role^="menuitem"]');
    if (!item) return;
    const p = menuParts(item);
    const items = menuItems(p.menu);
    const i = items.indexOf(item);
    const go = n => { e.preventDefault(); items[(n + items.length) % items.length].focus(); };
    if (e.key === 'ArrowDown') go(i + 1);
    else if (e.key === 'ArrowUp') go(i - 1);
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(items.length - 1);
    else if (e.key === 'Escape') { e.preventDefault(); menuSetOpen(p, false); p.trigger.focus(); }
    else if (e.key === 'Tab') menuSetOpen(p, false);
  }

  const strip = f => f.toString().replace(/^  /gm, '');
  const SCRIPT = `// Dropdown menu behaviour (WAI-ARIA menu button): click, Enter, Space or ↓ opens and focuses the first item,
// ↑ opens on the last; ↑ ↓ Home End move; Enter / Space picks; Esc closes back to the trigger; Tab closes.
// Checkbox items toggle and keep the menu open. Every pick fires "sb-menu-select" with the item label.
${[menuParts, menuItems, menuSetOpen, menuClick, menuKeydown].map(strip).join('\n')}
document.addEventListener('click', menuClick);
document.addEventListener('keydown', menuKeydown);`;

  const CSS = `/* Dropdown menu, Codemasters Design System
   Needs tokens.css and dropdown-menu.js;
   the Button trigger also needs button.css.

   <div class="sb-menu-wrap">
     <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md"
             aria-haspopup="menu" aria-expanded="false" aria-controls="aksi">Aksi <svg aria-hidden="true">…chevron…</svg></button>
     <div class="sb-menu" id="aksi" role="menu" aria-label="Aksi" hidden>
       <div class="sb-menu-group" role="group">
         <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1">
           <svg aria-hidden="true">…</svg><span class="sb-menu-label">Unduh PDF</span>
         </button>
       </div>
       <div class="sb-menu-sep" role="separator"></div>
       <div class="sb-menu-group" role="group">…last group: the exit or destructive action…</div>
     </div>
   </div>

   Triggers: .sb-btn (Button), .sb-menu-icon (Icon, more-vertical), .sb-menu-avatar (Avatar).
   Checkbox items: role="menuitemcheckbox" aria-checked + <span class="sb-menu-box">. Never with an icon.
   Shortcut: <span class="sb-menu-kbd">. Disabled item: aria-disabled="true". */

.sb-menu-wrap { position: relative; display: inline-flex; }

/* Triggers */
.sb-menu-wrap > .sb-btn[aria-expanded="true"] { box-shadow: var(--shadow-xs), 0 0 0 4px var(--gray-100); } /* open: chevron up + gray-100 ring */
.sb-menu-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; margin: 0; padding: 0; border: 0; border-radius: var(--radius-md); /* hit area at least 32 x 32; radius 8 like every icon button of 32+ */
  background: none; color: var(--gray-500); cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-menu-icon > svg { width: 20px; height: 20px; }
.sb-menu-icon:hover, .sb-menu-icon[aria-expanded="true"] { background: var(--gray-50); color: var(--gray-700); }
.sb-menu-icon:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-menu-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; margin: 0; padding: 0; border: 0; border-radius: var(--radius-full);
  background: var(--brand-50); font: 500 var(--text-md) var(--font); color: var(--brand-600); cursor: pointer;
  transition: box-shadow 150ms var(--ease);
}
.sb-menu-avatar:hover { box-shadow: 0 0 0 4px var(--gray-100); }
.sb-menu-avatar:focus-visible, .sb-menu-avatar[aria-expanded="true"] { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }

/* Panel: 240 wide (wider for long labels, never truncated), opens 8 below, right-aligned. */
.sb-menu {
  position: absolute; z-index: 30; top: calc(100% + 8px); inset-inline-end: 0;
  box-sizing: border-box; min-width: 240px; overflow: hidden;
  background: var(--white); border: 1px solid var(--gray-100); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
}
.sb-menu[hidden] { display: none; }
.sb-menu-group { padding: 4px; } /* items sit inset, as rounded rows; dividers stay full width */
.sb-menu-sep { height: 1px; background: var(--gray-100); }

/* Header */
.sb-menu-header { display: flex; align-items: center; gap: 12px; padding: 12px 16px; }
.sb-menu-header-title { font: 600 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-menu-person { position: relative; display: inline-flex; align-items: center; justify-content: center; flex: none; width: 40px; height: 40px; border-radius: var(--radius-full); background: var(--brand-50); font: 500 var(--text-md) var(--font); color: var(--brand-600); }
.sb-menu-person::after { content: ''; position: absolute; right: -1px; bottom: -1px; width: 10px; height: 10px; border: 1.5px solid var(--white); border-radius: var(--radius-full); background: var(--success-500); }
.sb-menu-name { display: block; font: 600 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-menu-email { display: block; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }

/* Item: 40 high, padding 10 12 (text still 16 from the edge), gap 12, radius 8 (12 panel - 4 padding) */
.sb-menu-item {
  box-sizing: border-box; display: flex; align-items: center; gap: 12px;
  width: 100%; height: 40px; margin: 0; padding: 0 12px; border: 0; border-radius: var(--radius-md);
  background: none; font: 500 var(--text-sm) var(--font); color: var(--gray-700); text-align: start; white-space: nowrap;
  cursor: pointer;
}
.sb-menu-item > svg { width: 16px; height: 16px; flex: none; }
.sb-menu-item:hover, .sb-menu-item:focus { outline: none; background: var(--gray-50); }
.sb-menu-item:focus-visible { box-shadow: inset 0 0 0 2px var(--brand-600); }
.sb-menu-label { flex: 1; }
.sb-menu-kbd { margin-inline-start: 16px; font: 400 var(--text-xs) var(--font); color: var(--gray-500); }
.sb-menu-item[aria-disabled="true"] { background: none; opacity: .5; cursor: not-allowed; } /* the default look at 50 % opacity */

/* Checkbox (16 px, radius 4) */
.sb-menu-box {
  box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 16px; height: 16px; border: 1px solid var(--gray-300); border-radius: var(--radius-sm); background: var(--white); color: var(--brand-600);
}
.sb-menu-box > svg { width: 12px; height: 12px; visibility: hidden; }
.sb-menu-item:hover .sb-menu-box, .sb-menu-item:focus .sb-menu-box, .sb-menu-item[aria-checked="true"] .sb-menu-box { background: var(--brand-50); border-color: var(--brand-600); }
.sb-menu-item[aria-checked="true"] .sb-menu-box > svg { visibility: visible; }

@media (prefers-reduced-motion: reduce) {
  .sb-menu-icon, .sb-menu-avatar { transition: none; }
}
`;

  // ---- Content. The person in the header is an honest placeholder.
  const ACTIONS = [
    [['user', 'Lihat profil', '⌘P'], ['settings', 'Pengaturan', '⌘,'], ['user-plus', 'Undang anggota', '⌘I']],
    [['log-out', 'Keluar', '⇧⌘Q']],
  ];
  const COLUMNS = [[['', 'No. klaim'], ['', 'Peserta'], ['', 'Status'], ['', 'Nilai klaim'], ['', 'Tanggal masuk']]];
  const ROW = [[['eye', 'Lihat detail'], ['download', 'Unduh PDF'], ['user-plus', 'Tugaskan ulang']], [['trash', 'Hapus klaim']]];

  let uid = 0;
  function item([glyph, label, kbd], { withIcon, checkbox, shortcut, checked, disabled }) {
    const a = ['class="sb-menu-item"', 'type="button"', `role="${checkbox ? 'menuitemcheckbox' : 'menuitem'}"`, 'tabindex="-1"'];
    if (checkbox) a.push(`aria-checked="${Boolean(checked)}"`);
    if (disabled) a.push('aria-disabled="true"');
    const lead = checkbox ? `<span class="sb-menu-box" aria-hidden="true">${icon('check')}</span>` : withIcon && glyph ? icon(glyph) : '';
    return `<button ${a.join(' ')}>${lead}<span class="sb-menu-label">${esc(label)}</span>${shortcut && kbd ? `<span class="sb-menu-kbd" aria-hidden="true">${kbd}</span>` : ''}</button>`;
  }

  // trigger: button | icon | avatar. header: none | heading | avatar. specimen: the panel alone, static, for showing content.
  function menu({ trigger = 'button', header = 'none', withIcon = true, checkbox = false, shortcut = false, open = false, specimen = false, groups, label, id, checked = [], disabled = [] } = {}) {
    const key = id || `menu-${++uid}`;
    const set = groups || (checkbox ? COLUMNS : ACTIONS);
    const name = label || (checkbox ? 'Tampilkan kolom' : trigger === 'avatar' ? 'Menu akun' : 'Aksi');
    const tAttrs = `aria-haspopup="menu" aria-expanded="${open}" aria-controls="${key}"`;
    const triggerHtml = {
      button: `<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" ${tAttrs}>${esc(name)}${icon('chevron-down')}</button>`,
      icon: `<button class="sb-menu-icon" type="button" aria-label="${esc(name)}" ${tAttrs}>${icon('more-vertical')}</button>`,
      avatar: `<button class="sb-menu-avatar" type="button" aria-label="${esc(name)}" ${tAttrs}>NP</button>`,
    }[trigger];

    const parts = [];
    if (header === 'heading') parts.push(`<div class="sb-menu-header" role="presentation"><span class="sb-menu-header-title">${esc(name)}</span></div>`, '<div class="sb-menu-sep" role="separator"></div>');
    if (header === 'avatar') parts.push('<div class="sb-menu-header" role="presentation"><span class="sb-menu-person" aria-hidden="true">NP</span><span><span class="sb-menu-name">Nama Pengguna</span><span class="sb-menu-email">email@perusahaan.com</span></span></div>', '<div class="sb-menu-sep" role="separator"></div>');
    let n = 0;
    set.forEach((group, g) => {
      if (g) parts.push('<div class="sb-menu-sep" role="separator"></div>');
      parts.push(`<div class="sb-menu-group" role="group">\n${group.map(it => `      ${item(it, { withIcon: withIcon && !checkbox, checkbox, shortcut, checked: checked.includes(n), disabled: disabled.includes(n++) })}`).join('\n')}\n    </div>`);
    });

    if (specimen) return `<div class="sb-menu menu-specimen" role="menu" aria-label="${esc(name)}" inert>\n  ${parts.join('\n  ')}\n</div>`;
    return `<div class="sb-menu-wrap">
  ${triggerHtml}
  <div class="sb-menu" id="${key}" role="menu" aria-label="${esc(name)}"${open ? '' : ' hidden'}>
    ${parts.join('\n    ')}
  </div>
</div>`;
  }

  // Live demos start closed with the trigger centred; an opened panel overlaps the code below (docs.css).
  const stage = html => `<div class="menu-stage">${html}</div>`;

  const itemSpecimen = `<div class="sb-menu menu-specimen" role="menu" aria-label="Contoh" inert>
<div class="sb-menu-group">
${item(['user', 'Default', '⌘P'], { withIcon: true, shortcut: true })}
${item(['user', 'Hover / focus', '⌘P'], { withIcon: true, shortcut: true }).replace('class="sb-menu-item"', 'class="sb-menu-item" style="background: var(--gray-50)"')}
${item(['user', 'Disabled', '⌘P'], { withIcon: true, shortcut: true, disabled: true })}
</div>
<div class="sb-menu-sep"></div>
<div class="sb-menu-group">
${item(['', 'Checkbox'], { checkbox: true })}
${item(['', 'Checkbox, checked'], { checkbox: true, checked: true })}
${item(['', 'Checkbox, disabled'], { checkbox: true, disabled: true })}
</div>
</div>`;
  const headerSpecimens = `<div class="menu-specimen-row" inert>
<div class="sb-menu menu-specimen"><div class="sb-menu-header"><span class="sb-menu-header-title">Header</span></div></div>
<div class="sb-menu menu-specimen"><div class="sb-menu-header"><span class="sb-menu-person">NP</span><span><span class="sb-menu-name">Nama Pengguna</span><span class="sb-menu-email">email@perusahaan.com</span></span></div></div>
</div>`;

  const anatomy = `<div class="sb-menu menu-specimen" style="position: relative">
  <div class="sb-menu-header" data-pin="1" data-pin-at="start"><span class="sb-menu-person">NP</span><span><span class="sb-menu-name">Nama Pengguna</span><span class="sb-menu-email">email@perusahaan.com</span></span></div>
  <div class="sb-menu-sep" data-pin="2" data-pin-at="start"></div>
  <div class="sb-menu-group">
    <div class="sb-menu-item" data-pin="3" data-pin-at="start"><span data-pin="4" data-pin-at="bottom">${icon('user')}</span><span class="sb-menu-label">Lihat profil</span><span data-pin="5" data-pin-at="bottom"><span class="sb-menu-kbd">⌘P</span></span></div>
  </div>
</div>`;

  DS.components.push({
    slug: 'dropdown-menu',
    name: 'Dropdown menu',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-06',
    description: 'An action menu opened from a button, a row-actions icon or the account avatar. For choosing a value in a form, use Input dropdown.',
    css: CSS,
    cssFile: 'dropdown-menu.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'The menu is live: click the trigger or focus it and press ↓, move with the arrow keys, Esc to close. Shortcuts shown here are specimens; in a product show a shortcut only when it really works.' },
          {
            type: 'playground',
            initial: { trigger: 'button', header: 'none', withIcon: true, checkbox: false, shortcut: false },
            controls: [
              { key: 'trigger', label: 'Trigger', type: 'segmented', options: [['button', 'Button'], ['icon', 'Icon'], ['avatar', 'Avatar']] },
              { key: 'header', label: 'Header', type: 'segmented', options: [['none', 'False'], ['heading', 'Heading'], ['avatar', 'Avatar group']] },
              { key: 'withIcon', label: 'Icon', type: 'toggle' },
              { key: 'checkbox', label: 'Checkbox (replaces Icon)', type: 'toggle' },
              { key: 'shortcut', label: 'Shortcut', type: 'toggle' },
            ],
            render: s => stage(menu({ ...s, checked: [0, 1, 2], id: 'pg-menu' })),
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
              '**Dropdown menu runs an action; Input dropdown chooses a value.** Never mix both in one list.',
              'Group related actions with dividers. Put the exit or destructive action (Hapus, Keluar) last, after a divider.',
              'All items in one menu share the same Icon, Checkbox and Shortcut setting, so labels line up. Icon and Checkbox never together.',
              '`Checkbox` is for multi-select filters inside a menu, such as "Tampilkan kolom"; the menu stays open while the user toggles.',
              'Menus may be wider than 240 for long labels. Never truncate an action label.',
              'Show a shortcut only when the shortcut really works.',
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
              ['1', 'Header', 'Optional. Heading: 44 high, title Text sm / Semibold `gray-700`. Avatar group: 64 high, 40 px avatar with a 10 px `success-500` online dot, name Text sm / Semibold `gray-700`, email Text sm / Regular `gray-500`, gap 12. Padding `12 16`.'],
              ['2', 'Divider', '1 px `gray-100` between the header and each group.'],
              ['3', 'Item', '40 high, padding `10 12`, radius 8, inset 4 from the panel edge, gap 12, Text sm / Medium `gray-700`. Hover and focus `gray-50`.'],
              ['4', 'Icon or checkbox', '16 px icon `gray-700`, or a 16 px checkbox (radius 4). Never both.'],
              ['5', 'Shortcut', 'Optional, right-aligned, Text xs / Regular `gray-500`.'],
            ],
          },
          { type: 'p', text: 'The panel is 240 wide, `white`, 1 px `gray-100` border, radius 12 (like every popover panel), `shadow-lg`, and clips its content. It opens 8 below its trigger, right-aligned.' },
        ],
      },
      {
        id: 'properties',
        title: 'Properties',
        blocks: [
          {
            type: 'table',
            head: ['Component', 'Property', 'Values', 'Code'],
            rows: [
              ['Dropdown', 'Type', 'Button, Icon, Avatar', '`.sb-btn` + chevron, `.sb-menu-icon`, `.sb-menu-avatar`'],
              ['Dropdown', 'Open', 'True, False', '`aria-expanded` on the trigger, `hidden` on the menu'],
              ['Dropdown menu', 'Header', 'False, Heading, Avatar group', '`.sb-menu-header` + divider'],
              ['Dropdown menu', 'Icon / Checkbox / Shortcut', 'True, False', '16 px `<svg>`; `role="menuitemcheckbox"` + `.sb-menu-box`; `.sb-menu-kbd`'],
              ['List item', 'State', 'Default, Hover, Focus, Disabled', '`:hover`, `:focus`, `aria-disabled="true"`'],
            ],
          },
        ],
      },
      {
        id: 'triggers',
        title: 'Triggers',
        blocks: [
          { type: 'h3', id: 'trigger-button', text: 'Button' },
          { type: 'p', text: 'Secondary gray `md` with the label and a 20 px chevron-down. Open: chevron up and a `0 0 0 4px` `gray-100` ring.' },
          { type: 'example', html: stage(menu({ trigger: 'button', groups: ROW, label: 'Aksi klaim', id: 'tr-button' })) },
          { type: 'h3', id: 'trigger-icon', text: 'Icon' },
          { type: 'p', text: '20 px `more-vertical` for row actions ("⋯"), with a hit area of at least 32 × 32.' },
          { type: 'example', html: stage(menu({ trigger: 'icon', groups: ROW, label: 'Aksi baris', id: 'tr-icon' })) },
          { type: 'h3', id: 'trigger-avatar', text: 'Avatar' },
          { type: 'p', text: '40 px avatar for the account menu in the sidebar or header. Open: 4 px `focus-ring` ring.' },
          { type: 'example', html: stage(menu({ trigger: 'avatar', header: 'avatar', id: 'tr-avatar' })) },
        ],
      },
      {
        id: 'items',
        title: 'Items and states',
        blocks: [
          { type: 'example', html: itemSpecimen, code: false },
          {
            type: 'table',
            head: ['Part', 'Default', 'Hover / Focus', 'Disabled'],
            rows: [
              ['Row (40 high, padding `10 12`, radius 8, gap 12)', 'no fill', '`gray-50`', 'no fill, whole row at 50 % opacity'],
              ['Label, Text sm / Medium', '`gray-700`', '`gray-700`', 'Default at 50 % opacity'],
              ['Icon 16 px', '`gray-700`', '`gray-700`', 'Default at 50 % opacity'],
              ['Checkbox 16 px, radius 4', '`white`, `gray-300` border', '`brand-50` fill, `brand-600` border', 'Default at 50 % opacity'],
              ['Shortcut (right-aligned)', 'Text xs / Regular `gray-500`', '`gray-500`', 'Default at 50 % opacity'],
            ],
          },
          { type: 'h3', id: 'headers', text: 'Headers' },
          { type: 'example', html: headerSpecimens, code: false },
        ],
      },
      {
        id: 'checkbox-menu',
        title: 'Checkbox menu',
        blocks: [
          { type: 'p', text: 'For multi-select filters inside a menu. Toggling an item keeps the menu open; Esc or a click outside closes it.' },
          { type: 'example', html: stage(menu({ checkbox: true, checked: [0, 1, 2], disabled: [0], id: 'cb-menu' })) },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: menu({ groups: ROW, specimen: true, label: 'Aksi baris' }), text: 'The destructive action is last, after a divider.' },
              { kind: 'dont', html: menu({ groups: [[['trash', 'Hapus klaim'], ['eye', 'Lihat detail'], ['download', 'Unduh PDF']]], specimen: true, label: 'Aksi baris' }), text: 'Hapus klaim first, right where the pointer lands.' },
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
              'The trigger has `aria-haspopup="menu"`, `aria-expanded` and `aria-controls`; icon and avatar triggers also need an `aria-label`.',
              'The panel is `role="menu"`; items are `menuitem` or `menuitemcheckbox` with `aria-checked`. The header is `role="presentation"`, dividers `role="separator"`.',
              'Keyboard: Enter, Space or ↓ opens on the first item (↑ on the last); ↑ ↓ Home End move; Enter or Space picks; Esc closes and returns focus to the trigger; Tab closes.',
              'Disabled items keep `aria-disabled="true"` so they are announced but skipped.',
            ],
          },
          {
            type: 'table',
            head: ['Text', 'On', 'Ratio', 'AA'],
            rows: [
              ['Item label `gray-700`', '`white` / `gray-50`', '10.46:1 / 10.01:1', 'Passes'],
              ['Shortcut, email `gray-500`', '`white`', '4.97:1', 'Passes'],
              ['Checkbox border `gray-300`', '`white`', '1.47:1', '**Fails** 3:1 for controls'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `dropdown-menu.css` (and `button.css` for the Button trigger), then `dropdown-menu.js`. Listen for `sb-menu-select` to run the action.' },
          { type: 'code', lang: 'css', filename: 'dropdown-menu.css', code: CSS },
          { type: 'h3', id: 'menu-script', text: 'Script' },
          { type: 'code', lang: 'js', filename: 'dropdown-menu.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('click', menuClick);
  document.addEventListener('keydown', menuKeydown);
})();

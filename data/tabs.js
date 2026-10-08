// Tabs: switch between panels of content in one place. No Figma component yet: built from DESIGN.md
// Navigation (Tabs, Mini tab) and the claim detail page, in the style of Button group and Badge.
(() => {
  const { esc, icon, meta } = DS;

  // ---- Click and arrow keys select a tab and show its panel (automatic activation, roving tabindex).
  function tabsSelect(tab) {
    for (const t of tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]')) {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
    }
  }
  function tabsClick(e) {
    const tab = e.target.closest?.('.sb-tabs [role="tab"]');
    if (tab && !tab.disabled) tabsSelect(tab);
  }
  function tabsKeydown(e) {
    const tab = e.target.closest?.('.sb-tabs [role="tab"]');
    if (!tab) return;
    const list = tab.closest('[role="tablist"]');
    const [prev, next] = list.getAttribute('aria-orientation') === 'vertical' ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];
    const tabs = [...list.querySelectorAll('[role="tab"]:not(:disabled)')];
    const i = tabs.indexOf(tab);
    const to = { [prev]: (i - 1 + tabs.length) % tabs.length, [next]: (i + 1) % tabs.length, Home: 0, End: tabs.length - 1 }[e.key];
    if (to === undefined) return;
    e.preventDefault();
    tabsSelect(tabs[to]);
    tabs[to].focus(); // focus also scrolls a long row to the tab
  }
  const SCRIPT = `// Tabs: click or ← → (↑ ↓ when vertical), Home and End select a tab and show its panel.
${tabsSelect.toString().replace(/^  /gm, '')}
${tabsClick.toString().replace(/^  /gm, '')}
${tabsKeydown.toString().replace(/^  /gm, '')}
document.addEventListener('click', tabsClick);
document.addEventListener('keydown', tabsKeydown);`;

  const CSS = `/* Tabs, Codemasters Design System
   No Figma component yet: built from DESIGN.md Navigation (Tabs, Mini tab). Needs tokens.css; tabs.js for clicks and keys.

   <div class="sb-tabs" data-type="folder" role="tablist" aria-label="Detail klaim">
     <button class="sb-tab" type="button" role="tab" id="klaim-t1" aria-selected="true" aria-controls="klaim-p1" tabindex="0">…icon… Informasi Klaim</button>
     <button class="sb-tab" type="button" role="tab" id="klaim-t2" aria-selected="false" aria-controls="klaim-p2" tabindex="-1">…icon… FWA <span class="sb-badge" data-size="sm" data-color="error">6</span></button>
   </div>
   <div class="sb-tab-panel" role="tabpanel" id="klaim-p1" aria-labelledby="klaim-t1" tabindex="0">…</div>
   <div class="sb-tab-panel" role="tabpanel" id="klaim-p2" aria-labelledby="klaim-t2" tabindex="0" hidden>…</div>

   data-type   folder | underline | segmented | vertical (vertical also sets aria-orientation="vertical")
   data-size   sm (omit for md)
   Selected    aria-selected="true". The ARIA state is the style hook, so selection never shows by colour alone.
   Badge       Badge sm after the label: error for counts that need action, gray for plain totals.
   data-state  hover | focus on a tab. Static mockups and docs only. */

.sb-tabs {
  --tab-h: 44px; --tab-px: 4px;
  box-sizing: border-box;
  display: flex; gap: 8px;
  overflow-x: auto; scrollbar-width: thin; /* too many tabs scroll sideways, never a second row */
}
.sb-tab {
  --tab-icon: currentColor;
  box-sizing: border-box; flex: none;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: var(--tab-h); margin: 0; padding: 0 var(--tab-px);
  font: 500 var(--text-sm) var(--font); white-space: nowrap;
  color: var(--gray-500); background: none;
  border: 0; border-radius: 0;
  cursor: pointer;
  transition-property: color, background-color, border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-tab > svg { width: 20px; height: 20px; flex: none; color: var(--tab-icon); }
/* Inside the tab, like Button group: the scrolling row clips anything drawn outside. */
.sb-tab:is(:focus-visible, [data-state="focus"]) { outline: 2px solid var(--brand-500); outline-offset: -2px; }
.sb-tab:disabled { --tab-icon: var(--gray-300); color: var(--gray-300); cursor: not-allowed; }
.sb-tab-panel:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 2px; border-radius: var(--radius-sm); }

/* Folder: the sections of a page. Tabs stand on a gray-300 baseline; the selected one fills brand-500. */
.sb-tabs[data-type="folder"] { --tab-h: 52px; --tab-px: 24px; box-shadow: inset 0 -1px var(--gray-300); }
.sb-tabs[data-type="folder"][data-size="sm"] { --tab-h: 44px; --tab-px: 16px; }
.sb-tabs[data-type="folder"] > .sb-tab {
  color: var(--brand-700); background: var(--brand-25);
  border: 1px solid var(--gray-300); border-radius: var(--radius-md) var(--radius-md) 0 0;
}
.sb-tabs[data-type="folder"] > .sb-tab:is(:hover, [data-state="hover"]):not(:disabled, [aria-selected="true"]) { background: var(--brand-50); }
.sb-tabs[data-type="folder"] > .sb-tab[aria-selected="true"] { color: var(--white); background: var(--brand-500); border-color: var(--brand-500); }
.sb-tabs[data-type="folder"] > .sb-tab[aria-selected="true"]:is(:focus-visible, [data-state="focus"]) { outline-color: var(--white); outline-offset: -4px; }
.sb-tabs[data-type="folder"] > .sb-tab[aria-selected="true"] .sb-badge { --bdg-bg: var(--white); }
.sb-tabs[data-type="folder"] > .sb-tab:disabled { color: var(--gray-300); background: var(--gray-25); border-color: var(--gray-200); }

/* Underline: sections inside a card or below folder tabs. A 2 px line marks the selected tab. */
.sb-tabs[data-type="underline"] { gap: 16px; box-shadow: inset 0 -1px var(--gray-200); }
.sb-tabs[data-type="underline"][data-size="sm"] { --tab-h: 36px; }
.sb-tabs[data-type="underline"] > .sb-tab { box-shadow: inset 0 -2px transparent; }
.sb-tabs[data-type="underline"] > .sb-tab:is(:hover, [data-state="hover"]):not(:disabled, [aria-selected="true"]) { color: var(--gray-700); box-shadow: inset 0 -2px var(--gray-300); }
.sb-tabs[data-type="underline"] > .sb-tab[aria-selected="true"] { color: var(--brand-700); box-shadow: inset 0 -2px var(--brand-500); }

/* Segmented: 2 to 4 short views of one card. 40 high in all, like Button md; radius 8 = 4 inner + 4 padding. */
.sb-tabs[data-type="segmented"] {
  --tab-h: 30px; --tab-px: 12px;
  display: inline-flex; max-width: 100%; gap: 4px; padding: 4px;
  background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: var(--radius-md);
}
.sb-tabs[data-type="segmented"][data-size="sm"] { --tab-h: 26px; --tab-px: 10px; }
.sb-tabs[data-type="segmented"] > .sb-tab { border: 1px solid transparent; border-radius: var(--radius-sm); }
.sb-tabs[data-type="segmented"] > .sb-tab:is(:hover, [data-state="hover"]):not(:disabled, [aria-selected="true"]) { color: var(--gray-700); }
.sb-tabs[data-type="segmented"] > .sb-tab[aria-selected="true"] { color: var(--gray-800); background: var(--white); border-color: var(--gray-200); box-shadow: var(--shadow-xs); }

/* Vertical: settings pages and long section lists. Same look as the sidebar navigation. */
.sb-tabs[data-type="vertical"] { --tab-h: 40px; --tab-px: 12px; flex-direction: column; gap: 4px; overflow: visible; }
.sb-tabs[data-type="vertical"][data-size="sm"] { --tab-h: 36px; }
.sb-tabs[data-type="vertical"] > .sb-tab { --tab-icon: var(--gray-500); justify-content: flex-start; color: var(--gray-700); border-radius: var(--radius-md); }
.sb-tabs[data-type="vertical"] > .sb-tab > .sb-badge { margin-inline-start: auto; }
.sb-tabs[data-type="vertical"] > .sb-tab:is(:hover, [data-state="hover"]):not(:disabled, [aria-selected="true"]) { --tab-icon: var(--gray-700); color: var(--gray-800); background: var(--gray-50); }
.sb-tabs[data-type="vertical"] > .sb-tab[aria-selected="true"] { --tab-icon: var(--brand-700); color: var(--brand-700); background: var(--brand-50); }
.sb-tabs[data-type="vertical"] > .sb-tab:disabled { --tab-icon: var(--gray-300); color: var(--gray-300); }

@media (prefers-reduced-motion: reduce) {
  .sb-tab { transition: none; }
}
`;

  // One real set per type, so labels stay specific. Item: [label, icon, [badge colour, badge text]].
  const SETS = {
    folder: {
      label: 'Detail klaim',
      current: 2,
      items: [['Ringkasan Klaim', 'loader'], ['Informasi Klaim', 'info'], ['Informasi Medis', 'activity'], ['Rincian Invoice', 'database'], ['FWA', 'signal', ['error', '6']], ['Plan dan Manfaat', 'check-circle']],
    },
    underline: { label: 'Status klaim', items: [['Semua', 'layers', ['gray', '128']], ['Menunggu', 'loader', ['gray', '12']], ['Disetujui', 'check-circle'], ['Ditolak', 'alert-circle']] },
    segmented: { label: 'Tampilan data', items: [['Grafik', 'activity'], ['Tabel', 'list'], ['Catatan', 'file-text', ['gray', '3']]] },
    vertical: { label: 'Pengaturan akun', items: [['Profil', 'user'], ['Tim', 'user-plus', ['gray', '4']], ['Tagihan', 'credit-card'], ['Integrasi', 'link'], ['Preferensi', 'settings']] },
  };

  let uid = 0; // ids stay unique across every example on the page
  function tabs({ type = 'folder', size = 'md', icons = true, badges = true, current, disabled = [], states = [], items, label, panels = true, style = '' } = {}) {
    const set = items ? { label, items } : SETS[type];
    const cur = current ?? set.current ?? 0;
    const id = `tabs-${++uid}`;
    const attrs = ['class="sb-tabs"', `data-type="${type}"`];
    if (size === 'sm') attrs.push('data-size="sm"');
    attrs.push('role="tablist"', `aria-label="${esc(set.label)}"`);
    if (type === 'vertical') attrs.push('aria-orientation="vertical"');
    if (style) attrs.push(`style="${style}"`);
    const list = set.items.map(([text, glyph, badge], i) => {
      const on = i === cur;
      const a = ['class="sb-tab"', 'type="button"', 'role="tab"'];
      if (panels) a.push(`id="${id}-t${i}"`);
      a.push(`aria-selected="${on}"`);
      if (panels) a.push(`aria-controls="${id}-p${i}"`);
      a.push(`tabindex="${on ? 0 : -1}"`);
      if (states[i]) a.push(`data-state="${states[i]}"`);
      if (disabled.includes(i)) a.push('disabled');
      const inner = [icons && glyph ? icon(glyph) : '', esc(text), badges && badge ? `<span class="sb-badge" data-size="sm" data-color="${badge[0]}">${badge[1]}</span>` : ''].filter(Boolean);
      return `  <button ${a.join(' ')}>\n    ${inner.join('\n    ')}\n  </button>`;
    });
    const html = `<div ${attrs.join(' ')}>\n${list.join('\n')}\n</div>`;
    if (!panels) return html;
    const panes = set.items.map(([text], i) => `<div class="sb-tab-panel" role="tabpanel" id="${id}-p${i}" aria-labelledby="${id}-t${i}" tabindex="0"${i === cur ? '' : ' hidden'}>Isi tab ${esc(text)}.</div>`);
    return `${html}\n${panes.join('\n')}`;
  }
  // Docs-only wrapper: full width, panel text, vertical layout. DS.snippet strips it from the code.
  const stage = (html, cls = '') => `<div class="tabs-stage${cls ? ` ${cls}` : ''}">\n${html}\n</div>`;
  const example = (o = {}) => stage(tabs(o), o.type === 'vertical' ? 'is-vertical' : '');

  // State matrix: one-tab lists so each cell shows a single state.
  const TYPES = [['folder', 'Folder'], ['underline', 'Underline'], ['segmented', 'Segmented'], ['vertical', 'Vertical']];
  const STATES = [['default', 'Default'], ['hover', 'Hover'], ['focus', 'Focused'], ['selected', 'Selected'], ['disabled', 'Disabled']];
  const cell = (type, s) =>
    tabs({ type, size: 'sm', panels: false, items: [['Klaim', 'info']], label: 'Contoh', current: s === 'selected' ? 0 : -1, states: [s === 'hover' || s === 'focus' ? s : ''], disabled: s === 'disabled' ? [0] : [] });
  const matrix = `<div class="matrix" style="--cols: 5">
<span></span>${STATES.map(([, l]) => `<span class="mx">${l}</span>`).join('')}
${TYPES.map(([t, l]) => `<span class="mx">${l}</span>${STATES.map(([s]) => cell(t, s)).join('')}`).join('\n')}
</div>`;

  const anatomy = `<div class="sb-tabs" data-type="folder" role="tablist" aria-label="Detail klaim" data-pin="1" data-pin-at="start">
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1" data-pin="2" data-pin-at="bottom">${icon('info')}Informasi Klaim</button>
  <button class="sb-tab" type="button" role="tab" aria-selected="true" tabindex="-1" data-pin="3" data-pin-at="bottom">
    <span data-pin="4">${icon('activity')}</span>
    <span data-pin="5">Informasi Medis</span>
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">${icon('signal')}FWA<span data-pin="6"><span class="sb-badge" data-size="sm" data-color="error">6</span></span></button>
</div>`;

  const two = (type, items, o = {}) => tabs({ type, size: 'sm', panels: false, items, label: 'Contoh', current: 0, ...o });
  const pair = (a, b) => `<div class="tabs-stage is-stack">\n${a}\n${b}\n</div>`;
  const SECTIONS = [['Informasi Klaim', 'info'], ['Informasi Medis', 'activity']];
  const SUB = [['Diagnosis'], ['Tindakan'], ['Obat']];
  const STATUS = [['Semua', 'layers'], ['Menunggu', 'loader']];
  const SHORT = [['Klaim', 'info'], ['Medis', 'activity']]; // fits the narrow Do and Don't cards

  DS.components.push({
    slug: 'tabs',
    name: 'Tabs',
    category: 'Components',
    status: 'In progress',
    updated: '2026-10-08',
    description: 'Switch between panels of content in one place: the sections of a claim, the views of a card or the parts of a settings page. Four types: Folder, Underline, Segmented and Vertical.',
    figma: [{ label: 'Design system file (no Tabs component yet)', url: meta.figma }],
    css: CSS,
    cssFile: 'tabs.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Switch the type and size. The preview works with the mouse and with ← → (↑ ↓ for Vertical), Home and End.' },
          {
            type: 'playground',
            initial: { type: 'folder', size: 'md', icons: true, badges: true, disabled: false },
            controls: [
              { key: 'type', label: 'Type', type: 'segmented', options: [['folder', 'Folder'], ['underline', 'Underline'], ['segmented', 'Segmented'], ['vertical', 'Vertical']] },
              { key: 'size', label: 'Size', type: 'segmented', options: [['md', 'md'], ['sm', 'sm']] },
              { key: 'icons', label: 'Icon', type: 'toggle' },
              { key: 'badges', label: 'Badge', type: 'toggle' },
              { key: 'disabled', label: 'Last tab disabled', type: 'toggle' },
            ],
            render: s => example({ ...s, disabled: s.disabled ? [SETS[s.type].items.length - 1] : [] }),
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
              'Use tabs to switch between panels of content in the same place, without leaving the page. Each tab owns one panel.',
              'To change how the same data is shown or filtered (Hari, Minggu, Bulan), use a Button group. To go to another page, use a link or the sidebar.',
              'One Folder row per page, at the top of the content. Sections inside it use Underline, never a second Folder row.',
              'Labels are short and in Title Case, one to three words. Never wrap or truncate a label.',
              'When the tabs do not fit, the row scrolls sideways. No second row and no "More" menu.',
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
              ['1', 'Tab list', 'One row, gap 8, on a 1 px `gray-300` baseline. Scrolls sideways when the tabs do not fit.'],
              ['2', 'Tab', '52 high (sm 44), padding `0 24` (sm `0 16`), radius `8 8 0 0`, 1 px `gray-300` border, `brand-25` fill, `brand-700` text. Hover: `brand-50` fill.'],
              ['3', 'Selected tab', '`brand-500` fill and border, `white` text and icon. Its bottom edge covers the baseline.'],
              ['4', 'Icon', 'Optional. 20 px, gap 8, the text colour. Every tab in a row has one, or none has.'],
              ['5', 'Label', 'Text sm / Medium, Title Case, never wraps.'],
              ['6', 'Badge', 'Optional count, Badge sm. Error for counts that need action (FWA findings), Gray for plain totals. `white` fill on the selected Folder tab.'],
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
              ['Type', 'Folder, Underline, Segmented, Vertical', '`data-type` on the tab list. Vertical also sets `aria-orientation="vertical"`'],
              ['Size', 'md, sm', 'Omit for md, `data-size="sm"`'],
              ['Icon', 'True, False', '`<svg>` before the label'],
              ['Badge', 'True, False', '`<span class="sb-badge" data-size="sm">` after the label'],
              ['Selected', 'True, False', '`aria-selected="true"`, `tabindex="0"`; the others `false` and `-1`'],
              ['State', 'Default, Hover, Focused, Disabled', '`:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state="hover"` or `"focus"`'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          {
            type: 'table',
            head: ['Type', 'Use for', 'Height md / sm'],
            rows: [
              ['Folder', 'The sections of a detail page (claim detail). One row per page.', '52 / 44'],
              ['Underline', 'Sections inside a card or below Folder tabs; status views of a list.', '44 / 36'],
              ['Segmented', 'Two to four short views of one card (Grafik, Tabel).', '40 / 36, the whole control'],
              ['Vertical', 'Settings pages and lists of five or more sections.', '40 / 36 per tab'],
            ],
          },
          { type: 'h3', id: 'type-folder', text: 'Folder' },
          { type: 'example', html: example({ type: 'folder' }) },
          { type: 'h3', id: 'type-underline', text: 'Underline' },
          { type: 'p', text: 'Text `gray-500`, hover `gray-700` with a `gray-300` line, selected `brand-700` with a 2 px `brand-500` line on a `gray-200` baseline. Padding `0 4`, gap 16.' },
          { type: 'example', html: example({ type: 'underline' }) },
          { type: 'h3', id: 'type-segmented', text: 'Segmented' },
          {
            type: 'p',
            text: 'A `gray-50` track with a `gray-200` border, radius 8, padding 4. The selected tab is `white` with a `gray-200` border and `shadow-xs`, radius 4, so the corners stay concentric. Same height as Button md.',
          },
          { type: 'example', html: example({ type: 'segmented' }) },
          {
            type: 'note',
            text: 'Segmented tabs look close to a Button group but switch panels, not the data in one panel. Grafik and Tabel are two panels: tabs. Hari, Minggu, Bulan filter one chart: Button group.',
          },
          { type: 'h3', id: 'type-vertical', text: 'Vertical' },
          { type: 'p', text: 'Same look as the sidebar: radius 8, padding `0 12`, text `gray-700` with a `gray-500` icon; hover `gray-50`; selected `brand-50` fill with `brand-700` text and icon. A badge sits at the end.' },
          { type: 'example', html: example({ type: 'vertical' }) },
        ],
      },
      {
        id: 'sizes',
        title: 'Sizes',
        blocks: [
          { type: 'p', text: 'md for the main level, sm for sub-levels and dense cards. The text stays Text sm in both; only height and padding change.' },
          { type: 'example', html: stage(`<span class="mx">md · 52</span>\n${tabs({ type: 'folder', panels: false, items: SECTIONS, label: 'md', current: 1 })}\n<span class="mx">sm · 44</span>\n${tabs({ type: 'folder', size: 'sm', panels: false, items: SECTIONS, label: 'sm', current: 1 })}`, 'is-stack') },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'example', html: matrix, code: false },
          {
            type: 'table',
            head: ['Type', 'Default (fill / text)', 'Hover', 'Selected', 'Disabled'],
            rows: [
              ['Folder', '`brand-25` / `brand-700`, `gray-300` border', '`brand-50` fill', '`brand-500` / `white`, `brand-500` border', '`gray-25` / `gray-300`, `gray-200` border'],
              ['Underline', 'none / `gray-500`', '`gray-700`, 2 px `gray-300` line', '`brand-700`, 2 px `brand-500` line', '`gray-300`'],
              ['Segmented', 'none / `gray-500`', '`gray-700`', '`white` / `gray-800`, `gray-200` border, `shadow-xs`', '`gray-300`'],
              ['Vertical', 'none / `gray-700`, icon `gray-500`', '`gray-50` / `gray-800`', '`brand-50` / `brand-700`', '`gray-300`'],
            ],
          },
          {
            type: 'note',
            text: 'Focus is a 2 px `brand-500` outline inside the tab, as in Button group, because the scrolling row clips anything drawn outside. On the selected Folder tab the outline is `white`, 4 px in.',
          },
        ],
      },
      {
        id: 'overflow',
        title: 'Overflow',
        blocks: [
          { type: 'p', text: 'When the tabs do not fit, the row scrolls sideways. Arrow keys move focus and scroll the selected tab into view.' },
          { type: 'example', html: stage(tabs({ type: 'folder', size: 'sm' }), 'is-narrow'), caption: 'Scroll sideways, or focus a tab and use ← →.' },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: pair(two('folder', SHORT), two('underline', SUB)), text: 'Folder for the page sections, Underline for the sections inside them.' },
              { kind: 'dont', html: pair(two('folder', SHORT), two('folder', SUB)), text: 'Folder tabs inside Folder tabs. The two levels look equal.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(two('underline', STATUS)), text: 'An icon on every tab, or on none.' },
              { kind: 'dont', html: stage(two('underline', [STATUS[0], ['Menunggu']])), text: 'Icons on some tabs only.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(tabs({ type: 'folder', size: 'sm', panels: false, current: 0 })), text: 'One row that scrolls sideways.' },
              { kind: 'dont', html: stage(tabs({ type: 'folder', size: 'sm', panels: false, current: 0, style: 'flex-wrap: wrap' })), text: 'Tabs wrapped onto a second row. The selected tab loses its baseline.' },
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
              'The row is a `role="tablist"` with an `aria-label`; each tab is a `<button role="tab">` with `aria-selected` and `aria-controls`; each panel is a `role="tabpanel"` with `aria-labelledby` and `tabindex="0"`.',
              'Roving `tabindex`: Tab reaches the row once, on the selected tab, then moves on to the panel. ← → (↑ ↓ when vertical), Home and End move and select.',
              'Selection follows focus (automatic activation). For panels that load slowly, select on Enter instead and keep focus moving without selecting.',
              'The selected style comes from `aria-selected`, so it never shows by colour alone; Folder and Segmented also change the fill, Underline adds the line.',
              'A badge is read as part of the tab name ("FWA 6"). When the number needs a word, set `aria-label="FWA, 6 temuan"` on the tab.',
            ],
          },
          {
            type: 'table',
            head: ['Tab', 'Text on fill', 'Ratio', 'AA'],
            rows: [
              ['Folder, default', '`brand-700` on `brand-25`', '6.44:1', 'Passes'],
              ['Folder, selected', '`white` on `brand-500`', '3.62:1', 'Fails for 14 px text. Same open decision as the Primary button'],
              ['Underline, default', '`gray-500` on `white`', '4.97:1', 'Passes'],
              ['Underline, selected', '`brand-700` on `white`', '6.61:1', 'Passes; the `brand-500` line is 3.62:1 (3:1 needed)'],
              ['Segmented, default', '`gray-500` on `gray-50`', '4.76:1', 'Passes'],
              ['Segmented, selected', '`gray-800` on `white`', '14.70:1', 'Passes'],
              ['Vertical, selected', '`brand-700` on `brand-50`', '6.09:1', 'Passes'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `badge.css` when tabs carry a count, then `tabs.css`. Add `tabs.js` for clicks and keys.' },
          { type: 'code', lang: 'css', filename: 'tabs.css', code: CSS },
          { type: 'h3', id: 'tabs-script', text: 'Script' },
          { type: 'code', lang: 'js', filename: 'tabs.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('click', tabsClick);
  document.addEventListener('keydown', tabsKeydown);
})();

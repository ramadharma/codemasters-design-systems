// Input dropdown: a select field that picks one value. Source: DESIGN.md §6 Dropdown (Input dropdown),
// Figma nodes 1096-2 (base), 1096-3156 (menu item), 1096-4590 (menu), 1096-8566 (Input dropdown).
(() => {
  const { icon, esc } = DS;

  // ---- Behaviour: select-only combobox (Default, Icon, Avatar, Dot) and editable combobox (Search), WAI-ARIA APG.
  function ddParts(el) {
    const dd = el.closest('.sb-dd');
    return dd && { dd, trigger: dd.querySelector('[role="combobox"]'), list: dd.querySelector('[role="listbox"]') };
  }
  function ddOptions(list) {
    return [...list.querySelectorAll('[role="option"]')].filter(o => !o.hidden && o.getAttribute('aria-disabled') !== 'true');
  }
  function ddActivate(p, opt) {
    p.list.querySelectorAll('[data-active]').forEach(o => o.removeAttribute('data-active'));
    if (!opt) return p.trigger.removeAttribute('aria-activedescendant');
    opt.setAttribute('data-active', '');
    p.trigger.setAttribute('aria-activedescendant', opt.id);
    opt.scrollIntoView({ block: 'nearest' });
  }
  function ddSetOpen(p, open) {
    p.trigger.setAttribute('aria-expanded', String(open));
    p.list.hidden = !open;
    const opts = ddOptions(p.list);
    ddActivate(p, open ? opts.find(o => o.getAttribute('aria-selected') === 'true') || opts[0] : null);
  }
  function ddChoose(p, opt) {
    if (!opt || opt.getAttribute('aria-disabled') === 'true') return;
    p.list.querySelectorAll('[role="option"]').forEach(o => o.setAttribute('aria-selected', String(o === opt)));
    if (p.trigger.tagName === 'INPUT') p.trigger.value = opt.querySelector('.sb-dd-label').textContent;
    else p.dd.querySelector('.sb-dd-value').innerHTML = opt.querySelector('.sb-dd-main').innerHTML;
    ddSetOpen(p, false);
    p.trigger.focus();
  }
  function ddClick(e) {
    const opt = e.target.closest?.('.sb-dd [role="option"]');
    if (opt) return ddChoose(ddParts(opt), opt);
    const trigger = e.target.closest?.('.sb-dd [role="combobox"]');
    document.querySelectorAll('.sb-dd [aria-expanded="true"]').forEach(t => t !== trigger && ddSetOpen(ddParts(t), false));
    if (!trigger || trigger.disabled) return;
    const p = ddParts(trigger);
    ddSetOpen(p, trigger.tagName === 'INPUT' ? true : p.list.hidden);
  }
  function ddKeydown(e) {
    const trigger = e.target.closest?.('.sb-dd [role="combobox"]');
    if (!trigger) return;
    const p = ddParts(trigger);
    const open = !p.list.hidden;
    const opts = ddOptions(p.list);
    const i = opts.findIndex(o => o.hasAttribute('data-active'));
    const isButton = trigger.tagName !== 'INPUT';
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) return ddSetOpen(p, true);
      ddActivate(p, opts[(i + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length]);
    } else if (open && (e.key === 'Home' || e.key === 'End')) {
      e.preventDefault();
      ddActivate(p, opts[e.key === 'Home' ? 0 : opts.length - 1]);
    } else if (e.key === 'Enter' || (isButton && e.key === ' ')) {
      e.preventDefault();
      open ? ddChoose(p, opts[i]) : ddSetOpen(p, true);
    } else if (e.key === 'Escape' && open) {
      e.preventDefault();
      e.stopPropagation();
      ddSetOpen(p, false);
    } else if (e.key === 'Tab' && open) {
      ddSetOpen(p, false);
    }
  }
  // Search type: typing filters the list; an empty result shows the "no results" row.
  function ddFilter(e) {
    const input = e.target.closest?.('.sb-dd input[role="combobox"]');
    if (!input) return;
    const p = ddParts(input);
    const q = input.value.trim().toLowerCase();
    p.list.querySelectorAll('[role="option"]').forEach(o => (o.hidden = !o.querySelector('.sb-dd-label').textContent.toLowerCase().includes(q)));
    const empty = p.list.querySelector('.sb-dd-empty');
    if (empty) empty.hidden = ddOptions(p.list).length > 0;
    p.trigger.setAttribute('aria-expanded', 'true');
    p.list.hidden = false;
    ddActivate(p, ddOptions(p.list)[0]);
  }

  const strip = f => f.toString().replace(/^  /gm, '');
  const SCRIPT = `// Input dropdown behaviour: click or Enter / Space / ↓ opens, ↑ ↓ Home End move, Enter selects,
// Esc closes, Tab closes. The Search type filters as you type. Focus stays on the field (aria-activedescendant).
${[ddParts, ddOptions, ddActivate, ddSetOpen, ddChoose, ddClick, ddKeydown, ddFilter].map(strip).join('\n')}
document.addEventListener('click', ddClick);
document.addEventListener('keydown', ddKeydown);
document.addEventListener('input', ddFilter);`;


  const CSS = `/* Input dropdown, Codemasters Design System
   Needs tokens.css and input-dropdown.js. Label and hint rules match input-field.css.

   <div class="sb-field">
     <span class="sb-field-label" id="jenis-label">Jenis klaim</span>
     <div class="sb-dd">
       <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false"
               aria-controls="jenis-list" aria-labelledby="jenis-label jenis-value">
         <span class="sb-dd-value" id="jenis-value"><span class="sb-dd-placeholder">Pilih jenis klaim</span></span>
         <svg class="sb-dd-chevron" aria-hidden="true">…chevron-down…</svg>
       </button>
       <div class="sb-dd-menu" id="jenis-list" role="listbox" aria-labelledby="jenis-label" hidden>
         <div class="sb-dd-opt" id="jenis-1" role="option" aria-selected="false">
           <span class="sb-dd-main"><span class="sb-dd-label">Inpatient</span><span class="sb-dd-sup">Rawat inap</span></span>
           <svg class="sb-dd-check" aria-hidden="true">…check…</svg>
         </div>
       </div>
     </div>
   </div>

   Leading element (Type): <svg> icon, <span class="sb-dd-avatar">, or <span class="sb-dd-dot"> before .sb-dd-label.
   Search type: <div class="sb-dd-trigger" data-type="search"> holding <svg> + <input role="combobox">, no chevron.
   Disabled option: aria-disabled="true". Disabled field: disabled on the button.
   data-state="open" on .sb-dd-trigger forces Open/focused in static mockups and docs only. */

.sb-field { display: grid; gap: 6px; } /* label, control, hint 6 apart */
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }

.sb-dd { position: relative; }

/* Field: same box as Input field */
.sb-dd-trigger {
  box-sizing: border-box; display: flex; align-items: center; gap: 8px;
  width: 100%; height: 44px; margin: 0; padding: 0 14px;
  font: 400 var(--text-md) var(--font); color: var(--gray-900); text-align: start;
  background: var(--white); border: 1px solid var(--gray-300); border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  cursor: pointer;
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-dd-trigger:hover:not(:disabled, [aria-expanded="true"], :focus-within) { border-color: var(--gray-400); }
.sb-dd-trigger:focus-visible, .sb-dd-trigger[aria-expanded="true"], .sb-dd-trigger:has([aria-expanded="true"], input:focus), .sb-dd-trigger[data-state="open"] {
  outline: none; border-color: var(--brand-300); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring);
}
.sb-dd-trigger:disabled { opacity: .5; cursor: not-allowed; } /* the default look at 50 % opacity */
.sb-dd-value, .sb-dd-main { display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0; }
.sb-dd-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sb-dd-sup { flex: none; color: var(--gray-500); font-weight: 400; }
.sb-dd-placeholder { color: var(--gray-500); }
.sb-dd-trigger > svg, .sb-dd-value > svg, .sb-dd-main > svg { width: 20px; height: 20px; flex: none; color: var(--gray-500); }
.sb-dd-chevron { transition: rotate 200ms var(--ease); }
.sb-dd-trigger[aria-expanded="true"] .sb-dd-chevron, .sb-dd-trigger[data-state="open"] .sb-dd-chevron { rotate: 180deg; }
.sb-dd-trigger[data-type="search"] { cursor: text; }
.sb-dd-trigger input { flex: 1; min-width: 0; height: 100%; margin: 0; padding: 0; border: 0; outline: 0; background: none; font: inherit; color: inherit; }
.sb-dd-trigger input::placeholder { color: var(--gray-500); opacity: 1; }

/* Leading elements */
.sb-dd-avatar {
  display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 24px; height: 24px; border-radius: var(--radius-full);
  background: var(--brand-50); font: 500 var(--text-xs) var(--font); color: var(--brand-600);
}
.sb-dd-dot { width: 10px; height: 10px; flex: none; border-radius: var(--radius-full); background: var(--success-500); }

/* Menu: width of the field, max height 320 (about 7 options), opens 8 below. */
.sb-dd-menu {
  position: absolute; z-index: 30; top: calc(100% + 8px); inset-inline: 0;
  box-sizing: border-box; max-height: 320px; overflow-y: auto; padding: 4px; /* options sit inset, as rounded rows */
  background: var(--white); border: 1px solid var(--gray-100); border-radius: var(--radius-md); box-shadow: var(--shadow-lg);
  scrollbar-width: thin; scrollbar-color: var(--gray-200) transparent;
}
.sb-dd-menu[hidden] { display: none; }
/* _Scroll bar: 16 wide with padding 4, thumb 8 wide gray-200 radius 8, no track. Shows only when the list scrolls. */
.sb-dd-menu::-webkit-scrollbar { width: 16px; }
.sb-dd-menu::-webkit-scrollbar-thumb { background: var(--gray-200); border: 4px solid transparent; border-radius: var(--radius-md); background-clip: padding-box; }

/* Option row: 44 high, padding 10 10 (text still 14 from the edge), gap 8, radius 4 (8 panel - 4 padding) */
.sb-dd-opt {
  display: flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 10px; border-radius: var(--radius-sm);
  font: 500 var(--text-md) var(--font); color: var(--gray-900); cursor: pointer;
}
.sb-dd-opt:hover, .sb-dd-opt[data-active], .sb-dd-opt[aria-selected="true"] { background: var(--gray-50); }
.sb-dd-opt:hover .sb-dd-main > svg, .sb-dd-opt[data-active] .sb-dd-main > svg { color: var(--gray-700); }
.sb-dd-check { width: 20px; height: 20px; flex: none; color: var(--brand-600); visibility: hidden; }
.sb-dd-opt[aria-selected="true"] .sb-dd-check { visibility: visible; }
.sb-dd-opt[aria-disabled="true"] { background: none; opacity: .5; cursor: not-allowed; }
.sb-dd-opt[aria-disabled="true"][aria-selected="true"] { background: var(--gray-50); }
.sb-dd-empty { margin: 0; padding: 12px 14px; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-dd-empty[hidden] { display: none; }

@media (prefers-reduced-motion: reduce) {
  .sb-dd-trigger, .sb-dd-chevron { transition: none; }
}
`;

  // ---- Content per Type. People are honest placeholders (Advisor A, B…), never invented names.
  const SETS = {
    default: { label: 'Jenis klaim', placeholder: 'Pilih jenis klaim', options: [['Inpatient', 'Rawat inap'], ['Outpatient', 'Rawat jalan'], ['Maternity', 'Persalinan'], ['Optical', 'Kacamata', true], ['Dental', 'Gigi']] },
    icon: { label: 'Peran', placeholder: 'Pilih peran', glyph: 'user', options: [['Admin'], ['Advisor'], ['Reviewer'], ['Viewer']] },
    avatar: { label: 'Ditugaskan ke', placeholder: 'Pilih advisor', options: [['Advisor A', '@advisor-a'], ['Advisor B', '@advisor-b'], ['Advisor C', '@advisor-c'], ['Advisor D', '@advisor-d', true]] },
    dot: { label: 'Advisor online', placeholder: 'Pilih advisor', options: [['Advisor A', '@advisor-a'], ['Advisor B', '@advisor-b'], ['Advisor C', '@advisor-c']] },
    search: { label: 'Kota', placeholder: 'Cari kota', options: ['Jakarta', 'Bandung', 'Surabaya', 'Medan', 'Semarang', 'Makassar', 'Palembang', 'Denpasar', 'Yogyakarta', 'Malang', 'Balikpapan', 'Pontianak'].map(c => [c]) },
  };
  const initials = name => name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const lead = (type, name, glyph) =>
    ({ icon: icon(glyph || 'user'), avatar: `<span class="sb-dd-avatar" aria-hidden="true">${initials(name)}</span>`, dot: '<span class="sb-dd-dot" aria-hidden="true"></span>' })[type] || '';

  let uid = 0;
  // state: placeholder | default | open. selected: index of the chosen option.
  function dropdown({ type = 'default', state = 'placeholder', label = true, sup = true, hint = false, disabled = false, selected = 0, id } = {}) {
    const key = id || `dd-${++uid}`;
    const set = SETS[type];
    const chosen = state === 'placeholder' ? -1 : selected;
    const open = state === 'open' && !disabled;
    const mainOf = ([name, supText]) =>
      `${lead(type, name, set.glyph)}<span class="sb-dd-label">${esc(name)}</span>${sup && supText ? `<span class="sb-dd-sup">${esc(supText)}</span>` : ''}`;

    const options = set.options.map((o, i) => {
      const a = ['class="sb-dd-opt"', `id="${key}-${i}"`, 'role="option"', `aria-selected="${i === chosen}"`];
      if (o[2]) a.push('aria-disabled="true"');
      if (open && i === Math.max(chosen, 0)) a.push('data-active');
      return `      <div ${a.join(' ')}>\n        <span class="sb-dd-main">${mainOf(o)}</span>\n        ${icon('check').replace('<svg', '<svg class="sb-dd-check"')}\n      </div>`;
    });
    if (type === 'search') options.push('      <p class="sb-dd-empty" hidden>Tidak ada kota yang cocok.</p>');

    const labelledBy = label ? `${key}-label` : '';
    let trigger;
    if (type === 'search') {
      const a = ['type="text"', 'role="combobox"', 'aria-autocomplete="list"', `aria-expanded="${open}"`, `aria-controls="${key}-list"`, `placeholder="${esc(set.placeholder)}"`, 'autocomplete="off"'];
      a.push(label ? `aria-labelledby="${labelledBy}"` : `aria-label="${esc(set.label)}"`);
      if (chosen >= 0) a.push(`value="${esc(set.options[chosen][0])}"`);
      if (disabled) a.push('disabled');
      trigger = [`  <div class="sb-dd-trigger" data-type="search"${open ? ' data-state="open"' : ''}>`, `    ${icon('search')}`, `    <input ${a.join(' ')}>`, '  </div>'];
    } else {
      const a = ['class="sb-dd-trigger"', 'type="button"', 'role="combobox"', 'aria-haspopup="listbox"', `aria-expanded="${open}"`, `aria-controls="${key}-list"`];
      a.push(label ? `aria-labelledby="${labelledBy} ${key}-value"` : `aria-label="${esc(set.label)}"`);
      if (open) a.push(`aria-activedescendant="${key}-${Math.max(chosen, 0)}"`);
      if (disabled) a.push('disabled');
      const value = chosen >= 0 ? mainOf(set.options[chosen]) : `<span class="sb-dd-placeholder">${esc(set.placeholder)}</span>`;
      trigger = [`  <button ${a.join(' ')}>`, `    <span class="sb-dd-value" id="${key}-value">${value}</span>`, `    ${icon('chevron-down').replace('<svg', '<svg class="sb-dd-chevron"')}`, '  </button>'];
    }

    const lines = ['<div class="sb-field">'];
    if (label) lines.push(`  <span class="sb-field-label" id="${labelledBy}">${esc(set.label)}</span>`);
    lines.push('  <div class="sb-dd">', ...trigger.map(l => `  ${l}`));
    lines.push(`    <div class="sb-dd-menu" id="${key}-list" role="listbox" ${label ? `aria-labelledby="${labelledBy}"` : `aria-label="${esc(set.label)}"`}${open ? '' : ' hidden'}>`, ...options, '    </div>', '  </div>');
    if (hint) lines.push(`  <p class="sb-field-hint">${type === 'search' ? 'Ketik untuk menyaring daftar.' : 'Bisa diubah sebelum klaim dikirim.'}</p>`);
    lines.push('</div>');
    return lines.join('\n');
  }

  // Live fields sit centred and their list opens over the code below; only a field shown open (is-open) gets room for it.
  const stage = (html, open, inert) => `<div class="dd-stage${open ? ' is-open' : ''}"${inert ? ' inert' : ''}>${html}</div>`;
  const TYPES = [['default', 'Default'], ['icon', 'Icon leading'], ['avatar', 'Avatar leading'], ['dot', 'Dot leading'], ['search', 'Search']];

  const stateRow = `<div class="dd-states" inert>
${[['placeholder', 'Placeholder'], ['default', 'Default'], ['open', 'Open / focused']].map(([s, l]) => `<div class="dd-state"><span class="mx">${l}</span>${dropdown({ state: s, id: `dd-st-${s}` }).replace('aria-expanded="true"', 'aria-expanded="false" data-state="open"')}</div>`).join('\n')}
</div>`;

  const itemRows = `<div class="dd-item-specimen sb-dd-menu" style="position: relative" inert>
<div class="sb-dd-opt" role="option" aria-selected="false"><span class="sb-dd-main">${icon('user')}<span class="sb-dd-label">Default</span><span class="sb-dd-sup">supporting</span></span>${icon('check').replace('<svg', '<svg class="sb-dd-check"')}</div>
<div class="sb-dd-opt" role="option" aria-selected="false" data-active><span class="sb-dd-main">${icon('user')}<span class="sb-dd-label">Hover / focus</span><span class="sb-dd-sup">supporting</span></span>${icon('check').replace('<svg', '<svg class="sb-dd-check"')}</div>
<div class="sb-dd-opt" role="option" aria-selected="true"><span class="sb-dd-main">${icon('user')}<span class="sb-dd-label">Selected</span><span class="sb-dd-sup">supporting</span></span>${icon('check').replace('<svg', '<svg class="sb-dd-check"')}</div>
<div class="sb-dd-opt" role="option" aria-selected="false" aria-disabled="true"><span class="sb-dd-main">${icon('user')}<span class="sb-dd-label">Disabled</span><span class="sb-dd-sup">supporting</span></span>${icon('check').replace('<svg', '<svg class="sb-dd-check"')}</div>
<div class="sb-dd-opt" role="option" aria-selected="true" aria-disabled="true"><span class="sb-dd-main">${icon('user')}<span class="sb-dd-label">Disabled, selected</span></span>${icon('check').replace('<svg', '<svg class="sb-dd-check"')}</div>
</div>`;

  const anatomy = `<div class="sb-field" style="width: 320px">
  <div class="sb-field-label" data-pin="1" data-pin-at="start">Ditugaskan ke</div>
  <div class="sb-dd">
    <div class="sb-dd-trigger" data-state="open" data-pin="2" data-pin-at="start">
      <span class="sb-dd-value"><span data-pin="3"><span class="sb-dd-avatar">AA</span></span><span class="sb-dd-label">Advisor A</span><span data-pin="4"><span class="sb-dd-sup">@advisor-a</span></span></span>
      <span data-pin="5">${icon('chevron-down').replace('<svg', '<svg class="sb-dd-chevron" style="rotate: 180deg"')}</span>
    </div>
    <div class="sb-dd-menu" style="position: relative; top: 8px; margin-bottom: 8px" data-pin="6" data-pin-at="start">
      <div class="sb-dd-opt"><span class="sb-dd-main"><span class="sb-dd-avatar">AB</span><span class="sb-dd-label">Advisor B</span></span></div>
      <div class="sb-dd-opt" aria-selected="true"><span class="sb-dd-main"><span class="sb-dd-avatar">AA</span><span class="sb-dd-label">Advisor A</span></span><span data-pin="7" data-pin-at="bottom">${icon('check').replace('<svg', '<svg class="sb-dd-check"')}</span></div>
    </div>
  </div>
</div>`;

  DS.components.push({
    slug: 'input-dropdown',
    name: 'Input dropdown',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-06',
    description: 'A select field: pick one value for a form field or a filter. For running an action from a button, use Dropdown menu.',
    css: CSS,
    cssFile: 'input-dropdown.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'The field is live: click it or focus it and press ↓, move with the arrow keys, Enter to choose, Esc to close. In Search, type to filter.' },
          {
            type: 'playground',
            initial: { type: 'default', state: 'placeholder', label: true, sup: true, hint: false, disabled: false },
            controls: [
              { key: 'type', label: 'Type', type: 'select', options: TYPES },
              { key: 'state', label: 'State', type: 'segmented', options: [['placeholder', 'Placeholder'], ['default', 'Default'], ['open', 'Open']] },
              { key: 'label', label: 'Label', type: 'toggle' },
              { key: 'sup', label: 'Supporting text', type: 'toggle' },
              { key: 'hint', label: 'Hint text', type: 'toggle' },
              { key: 'disabled', label: 'Disabled', type: 'toggle' },
            ],
            render: s => stage(dropdown({ ...s, id: 'pg-dd' }), s.state === 'open' && !s.disabled),
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
              '**Input dropdown chooses a value; Dropdown menu runs an action.** Never mix both in one list.',
              'About 7 options are visible before the list scrolls. Above about 10 options, use the Search type.',
              'For 2–5 options that fit on screen, Radio buttons show every choice at once.',
              'The open list is as wide as the field and opens 8 below it, with the chosen option checked.',
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
              ['1', 'Label', 'Text sm / Medium `gray-700`, 6 above the field. 44 high without a label, 70 with one.'],
              ['2', 'Field', 'Same box as Input field: 44 high, padding `10 14`, gap 8, `white`, 1 px `gray-300` border, radius 8, `shadow-xs`. Open/focused: `brand-300` border + 4 px `focus-ring` ring.'],
              ['3', 'Leading element', 'Optional: 20 px icon `gray-500`, 24 px avatar, 10 px `success-500` dot, or 20 px search icon (Search type).'],
              ['4', 'Value + supporting text', 'Text md / Regular. Placeholder `gray-500`, value `gray-900`, supporting text after it in `gray-500`.'],
              ['5', 'Chevron', '20 px `gray-500`; turns up when open. The Search type has none.'],
              ['6', 'Menu', 'Width of the field, max height 320, `white`, 1 px `gray-100` border, radius 8, `shadow-lg`, padding 4 so the options sit inset, 8 below the field.'],
              ['7', 'Check', '20 px `brand-600` at the end of the chosen option.'],
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
              ['Type', 'Default, Icon leading, Avatar leading, Dot leading, Search', 'leading `<svg>`, `.sb-dd-avatar` or `.sb-dd-dot` before the label; Search uses `<div class="sb-dd-trigger" data-type="search">` with an `<input role="combobox">`'],
              ['State', 'Placeholder, Default (value chosen), Open/focused', '`.sb-dd-placeholder`, a chosen value, `aria-expanded="true"`. Static mockups only: `data-state="open"`'],
              ['Supporting text', 'True, False', '`<span class="sb-dd-sup">` after the label'],
              ['Label', 'True, False', 'label element referenced by `aria-labelledby`; without it, `aria-label`'],
              ['Item: State', 'Default, Hover, Focus, Disabled', '`:hover`, `data-active` (keyboard), `aria-disabled="true"`'],
              ['Item: Check', 'True, False', '`aria-selected="true"` shows the check'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: TYPES.flatMap(([t, l]) => [
          { type: 'h3', id: `type-${t}`, text: l },
          { type: 'example', html: stage(dropdown({ type: t, state: t === 'search' ? 'placeholder' : 'default', id: `ty-${t}` })) },
        ]),
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'example', html: stateRow, code: false },
          { type: 'h3', id: 'menu-items', text: 'Menu items' },
          { type: 'example', html: itemRows, code: false },
          {
            type: 'table',
            head: ['Part', 'Default', 'Hover / Focus', 'Disabled'],
            rows: [
              ['Row (44 high, padding `10 10`, radius 4, gap 8)', 'no fill', '`gray-50`', 'no fill, whole row at 50 % opacity'],
              ['Label, Text md / Medium', '`gray-900`', '`gray-900`', 'Default at 50 % opacity'],
              ['Supporting text, Text md / Regular', '`gray-500`', '`gray-500`', 'Default at 50 % opacity'],
              ['Leading icon 20 px', '`gray-500`', '`gray-700`', 'Default at 50 % opacity'],
              ['Check (selected)', '20 px `brand-600`, row fill `gray-50`', 'same', 'Default at 50 % opacity, fill `gray-50`'],
            ],
          },
          { type: 'p', text: 'Keyboard focus (arrow keys) looks like Hover. The scroll bar (16 wide, 8 px `gray-200` thumb, no track) shows only when the list scrolls.' },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(dropdown({ type: 'search', state: 'default', selected: 8, label: true, id: 'dd-dd-search' }), false, true), text: '12 cities: the Search type lets the user type instead of scroll.' },
              { kind: 'dont', html: stage(dropdown({ type: 'default', state: 'placeholder', id: 'dd-dd-actions' }).replace(/Jenis klaim/g, 'Aksi').replace('Pilih jenis klaim', 'Pilih aksi').replace(/Inpatient/, 'Unduh PDF').replace(/Outpatient/, 'Hapus klaim'), false, true), text: 'Actions in a select field. Use a Dropdown menu for actions.' },
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
              'The field is a `combobox` (`aria-haspopup="listbox"`, `aria-expanded`, `aria-controls`); the list is a `listbox` of `option`s with `aria-selected`.',
              'Focus stays on the field. The highlighted option is announced through `aria-activedescendant`, so screen readers follow the arrow keys.',
              'Keyboard: Enter, Space or ↓ opens; ↑ ↓ Home End move; Enter selects; Esc closes and keeps focus on the field; Tab closes and moves on.',
              'Disabled options keep `aria-disabled="true"`, so they are read but skipped by the arrow keys.',
            ],
          },
          {
            type: 'table',
            head: ['Text', 'On', 'Ratio', 'AA'],
            rows: [
              ['Value, option label `gray-900`', '`white` / `gray-50`', '17.75:1 / 16.98:1', 'Passes'],
              ['Placeholder, supporting text `gray-500`', '`white` / `gray-50`', '4.97:1 / 4.76:1', 'Passes'],
              ['Check `brand-600`', '`gray-50`', '4.84:1', 'Passes (icons need 3:1)'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `input-dropdown.css` and `input-dropdown.js`. The script follows the WAI-ARIA select-only combobox pattern; the Search type uses the editable combobox pattern.' },
          { type: 'code', lang: 'css', filename: 'input-dropdown.css', code: CSS },
          { type: 'h3', id: 'dd-script', text: 'Script' },
          { type: 'code', lang: 'js', filename: 'input-dropdown.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('click', ddClick);
  document.addEventListener('keydown', ddKeydown);
  document.addEventListener('input', ddFilter);
})();

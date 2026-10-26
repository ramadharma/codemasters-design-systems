// Combobox: type to find people or values and pick one or many; results can come from the server and new values can be
// added. Built from DESIGN.md §6 Inputs (Combobox, "search user"); the list is the Input dropdown menu. No Figma component yet.
(() => {
  const { esc, icon } = DS;

  // ---- Behaviour: WAI-ARIA editable combobox with list autocomplete. Focus stays in the input (aria-activedescendant).
  const cbEsc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const cbSvg = (d, cls) => `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  const CB_PATH = {
    check: 'M20 6 9 17l-5-5',
    x: 'M18 6 6 18M6 6l12 12',
    loader: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83',
    alert: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 8v4M12 16h.01',
  };
  // An option: { value, label, sub (email), initials (avatar) }. The same markup the page renders up front.
  const cbOption = (item, selected, id) =>
    `<div class="sb-dd-opt" role="option" id="${id}" data-value="${cbEsc(item.value)}" aria-selected="${selected}"><span class="sb-dd-main">${item.initials ? `<span class="sb-dd-avatar" aria-hidden="true">${cbEsc(item.initials)}</span>` : ''}<span class="sb-dd-label">${cbEsc(item.label)}</span>${item.sub ? `<span class="sb-dd-sup">${cbEsc(item.sub)}</span>` : ''}</span>${cbSvg(CB_PATH.check, 'sb-dd-check')}</div>`;
  const cbChip = (value, label) =>
    `<li class="sb-cb-chip" data-value="${cbEsc(value)}"><span class="sb-badge" data-size="md" data-icon="x-close">${cbEsc(label)}<button class="sb-badge-x" type="button" aria-label="Hapus ${cbEsc(label)}">${cbSvg(CB_PATH.x)}</button></span></li>`;

  function cbParts(el) {
    const cb = el.closest('.sb-cb');
    return cb && { cb, input: cb.querySelector('input[role="combobox"]'), panel: cb.querySelector('.sb-cb-panel'), list: cb.querySelector('[role="listbox"]'), chips: cb.querySelector('.sb-cb-chips') };
  }
  const cbFind = (root, value) => [...root.querySelectorAll('[data-value]')].find(el => el.dataset.value === value); // any value, no selector escaping
  const cbVisible = p => [...p.list.querySelectorAll('[role="option"]')].filter(o => !o.hidden);
  const cbValues = p => ('multiple' in p.cb.dataset ? [...p.chips.children].map(c => c.dataset.value) : p.cb.dataset.value ? [p.cb.dataset.value] : []);
  function cbActivate(p, opt) {
    p.list.querySelectorAll('[data-active]').forEach(o => o.removeAttribute('data-active'));
    if (!opt) return p.input.removeAttribute('aria-activedescendant');
    opt.setAttribute('data-active', '');
    p.input.setAttribute('aria-activedescendant', opt.id);
    opt.scrollIntoView({ block: 'nearest' });
  }
  function cbOpen(p, open) {
    p.input.setAttribute('aria-expanded', String(open));
    p.panel.hidden = !open;
    if (!open) cbActivate(p, null);
  }
  // The line under the options: loading, nothing found, an error or a hint. Read out through role="status".
  function cbStatus(p, kind, text) {
    const s = p.panel.querySelector('.sb-cb-status');
    const msg = { loading: [CB_PATH.loader, 'Mencari…'], empty: [null, 'Tidak ada yang cocok'], error: [CB_PATH.alert, 'Gagal memuat. Ketik lagi untuk mencoba.'], hint: [null, text] }[kind];
    s.hidden = !kind;
    s.dataset.kind = kind || '';
    s.innerHTML = kind ? `${msg[0] ? cbSvg(msg[0], kind === 'loading' ? 'sb-cb-spin' : '') : ''}${cbEsc(msg[1])}` : '';
  }
  // The "Tambah …" row: only with data-creatable, a query, and no option with exactly that label.
  function cbCreateRow(p, q) {
    const row = p.list.querySelector('.sb-cb-create');
    if (!row) return false;
    const exact = [...p.list.querySelectorAll('[role="option"]:not(.sb-cb-create) .sb-dd-label')].some(l => l.textContent.toLowerCase() === q.toLowerCase());
    row.hidden = !q || exact;
    row.querySelector('.sb-dd-label').textContent = `Tambah “${q}”`;
    return !row.hidden;
  }
  function cbFilter(p) {
    const q = p.input.value.trim();
    p.list.querySelectorAll('[role="option"]:not(.sb-cb-create)').forEach(o => (o.hidden = !o.textContent.toLowerCase().includes(q.toLowerCase())));
    const create = cbCreateRow(p, q);
    cbStatus(p, cbVisible(p).length || create ? null : 'empty');
  }
  // Async results: the page answers "sb-cb-search" with cbResults(cb, items), or cbResults(cb, null) when the request failed.
  function cbResults(cb, items) {
    const p = cbParts(cb), picked = cbValues(p), create = p.list.querySelector('.sb-cb-create');
    p.list.querySelectorAll('[role="option"]:not(.sb-cb-create)').forEach(o => o.remove());
    p.list.removeAttribute('aria-busy');
    if (!items) { if (create) create.hidden = true; return cbStatus(p, 'error'); }
    (create || p.list).insertAdjacentHTML(create ? 'beforebegin' : 'beforeend', items.map((it, i) => cbOption(it, picked.includes(it.value), `${p.list.id}-r${i}`)).join(''));
    const q = p.input.value.trim(), withCreate = cbCreateRow(p, q);
    cbStatus(p, items.length || withCreate ? null : 'empty');
  }
  function cbChanged(p) {
    p.cb.dispatchEvent(new CustomEvent('sb-cb-change', { bubbles: true, detail: { values: cbValues(p) } }));
  }
  function cbRemove(p, value) {
    cbFind(p.chips, value)?.remove();
    cbFind(p.list, value)?.setAttribute('aria-selected', 'false');
    p.input.focus();
    cbChanged(p);
  }
  function cbPick(p, opt) {
    if (opt.matches('.sb-cb-create')) {
      const label = p.input.value.trim();
      opt.insertAdjacentHTML('beforebegin', cbOption({ value: label, label }, false, `${p.list.id}-n${p.list.children.length}`));
      opt = opt.previousElementSibling;
    }
    const value = opt.dataset.value, label = opt.querySelector('.sb-dd-label').textContent;
    if (!('multiple' in p.cb.dataset)) {
      p.list.querySelectorAll('[aria-selected="true"]').forEach(o => o.setAttribute('aria-selected', 'false'));
      opt.setAttribute('aria-selected', 'true');
      p.cb.dataset.value = value;
      p.input.value = label;
      cbOpen(p, false);
      return cbChanged(p);
    }
    const on = opt.getAttribute('aria-selected') !== 'true';
    opt.setAttribute('aria-selected', String(on));
    if (on) p.chips.insertAdjacentHTML('beforeend', cbChip(value, label));
    else cbFind(p.chips, value)?.remove();
    if (!('async' in p.cb.dataset)) { p.input.value = ''; cbFilter(p); } // async keeps the query, so the results stay
    p.input.focus();
    cbActivate(p, cbFind(p.list, value));
    cbChanged(p);
  }
  function cbShow(p) {
    cbOpen(p, true);
    if (!('async' in p.cb.dataset)) cbFilter(p);
    else if (!p.input.value.trim()) cbStatus(p, 'hint', 'Ketik nama atau email');
  }
  function cbClick(e) {
    const cb = e.target.closest?.('.sb-cb');
    document.querySelectorAll('.sb-cb').forEach(o => o !== cb && !o.querySelector('.sb-cb-panel').hidden && cbOpen(cbParts(o), false));
    if (!cb || cb.querySelector('input').disabled) return;
    const p = cbParts(cb), x = e.target.closest('.sb-badge-x'), opt = e.target.closest('[role="option"]');
    if (x) return cbRemove(p, x.closest('.sb-cb-chip').dataset.value);
    if (opt) return cbPick(p, opt);
    if (e.target.closest('.sb-cb-field')) { p.input.focus(); if (p.panel.hidden) cbShow(p); }
  }
  function cbInput(e) {
    const input = e.target.closest?.('.sb-cb input[role="combobox"]');
    if (!input) return;
    const p = cbParts(input), q = input.value.trim();
    cbOpen(p, true);
    if (!('async' in p.cb.dataset)) return cbFilter(p), cbActivate(p, cbVisible(p)[0]);
    clearTimeout(p.cb.cbTimer);
    if (!q) { cbResults(p.cb, []); return cbStatus(p, 'hint', 'Ketik nama atau email'); }
    p.list.setAttribute('aria-busy', 'true');
    cbStatus(p, 'loading');
    p.cb.cbTimer = setTimeout(() => p.cb.dispatchEvent(new CustomEvent('sb-cb-search', { bubbles: true, detail: { query: q } })), 250); // wait for a pause in typing
  }
  function cbKeydown(e) {
    const input = e.target.closest?.('.sb-cb input[role="combobox"]');
    if (!input) return;
    const p = cbParts(input), open = !p.panel.hidden, opts = cbVisible(p), i = opts.findIndex(o => o.hasAttribute('data-active'));
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) return cbShow(p);
      if (opts.length) cbActivate(p, opts[(i + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length]);
    } else if (e.key === 'Enter' && open && i >= 0) {
      e.preventDefault();
      cbPick(p, opts[i]);
    } else if (e.key === 'Escape' && open) {
      e.preventDefault();
      cbOpen(p, false);
    } else if (e.key === 'Backspace' && !input.value && 'multiple' in p.cb.dataset && p.chips.lastElementChild) {
      cbRemove(p, p.chips.lastElementChild.dataset.value); // the last chip goes, as in most tag fields
    } else if (e.key === 'Tab') {
      cbOpen(p, false);
    }
  }

  const strip = f => f.toString().replace(/^  /gm, '');
  const CONSTS = { cbEsc, cbSvg, CB_PATH, cbOption, cbChip, cbFind, cbVisible, cbValues };
  const SCRIPT = `// Combobox: type to filter (or, with data-async, to ask the page for results), ↑ ↓ to move, Enter or a click to pick,
// Esc to close; Backspace in an empty field removes the last chip. Fires "sb-cb-change" with { values } and, with
// data-async, "sb-cb-search" with { query }: answer it with cbResults(combobox, items) or cbResults(combobox, null) on error.
${Object.entries(CONSTS).map(([n, v]) => `const ${n} = ${typeof v === 'function' ? v.toString() : JSON.stringify(v, null, 2)};`).join('\n')}
${[cbParts, cbActivate, cbOpen, cbStatus, cbCreateRow, cbFilter, cbResults, cbChanged, cbRemove, cbPick, cbShow, cbClick, cbInput, cbKeydown].map(strip).join('\n')}
document.addEventListener('click', cbClick);
document.addEventListener('input', cbInput);
document.addEventListener('keydown', cbKeydown);`;

  const CSS = `/* Combobox, Codemasters Design System
   Needs tokens.css, input-field.css (label, hint), input-dropdown.css (the list and its options), badge.css (chips)
   and combobox.js.

   <div class="sb-field">
     <label class="sb-field-label" for="reviewer">Reviewer</label>
     <div class="sb-cb" data-multiple>
       <div class="sb-cb-field">
         <svg aria-hidden="true">…user…</svg>
         <div class="sb-cb-values">
           <ul class="sb-cb-chips" role="list" aria-label="Terpilih">…<li class="sb-cb-chip" data-value="ad">Badge with ×</li>…</ul>
           <input id="reviewer" type="text" role="combobox" aria-expanded="false" aria-controls="reviewer-list" aria-autocomplete="list" placeholder="Cari nama atau email" autocomplete="off">
         </div>
         <svg class="sb-cb-chevron" aria-hidden="true">…chevron-down…</svg>
       </div>
       <div class="sb-dd-menu sb-cb-panel" hidden>
         <div role="listbox" id="reviewer-list" aria-multiselectable="true" aria-label="Reviewer">….sb-dd-opt role="option"…</div>
         <p class="sb-cb-status" role="status" hidden></p>
       </div>
     </div>
   </div>

   data-multiple    pick many: chips in the field, the list stays open (omit to pick one: the label fills the field)
   data-async       results come from the page: listen for "sb-cb-search", answer with cbResults(cb, items | null)
   data-creatable   a last "Tambah …" option adds what was typed: <div class="sb-dd-opt sb-cb-create" role="option" id="…" hidden>
   Options are Input dropdown options: .sb-dd-avatar (initials), .sb-dd-label (name), .sb-dd-sup (email), .sb-dd-check. */

.sb-cb { position: relative; }

/* Field: Input field's box. It grows a line at a time as chips wrap; 3 + 24 + 3 + borders = 32 for one line. */
.sb-cb-field {
  box-sizing: border-box; display: flex; align-items: center; gap: 8px;
  min-height: 32px; padding: 3px 10px;
  background: var(--bg-primary); border: 1px solid var(--border-control); border-radius: var(--radius-control); box-shadow: var(--shadow-xs);
  cursor: text;
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-cb-field > svg { width: 16px; height: 16px; flex: none; color: var(--text-quaternary); }
.sb-cb-field:focus-within, .sb-cb:has([aria-expanded="true"]) .sb-cb-field { border-color: var(--border-brand); box-shadow: var(--shadow-xs), 0 0 0 3px var(--focus-ring); }
.sb-cb:has(input:disabled) .sb-cb-field { opacity: .5; cursor: not-allowed; }
.sb-cb-chevron { transition: rotate 200ms var(--ease); }
.sb-cb:has([aria-expanded="true"]) .sb-cb-chevron { rotate: 180deg; }

/* Values: chips and the text input share the lines, 4 apart. */
.sb-cb-values { display: flex; flex: 1; flex-wrap: wrap; align-items: center; gap: 4px; min-width: 0; }
.sb-cb-chips { display: contents; margin: 0; padding: 0; list-style: none; }
.sb-cb-chip { display: flex; }
.sb-cb-values input {
  flex: 1; width: 0; min-width: 64px; height: 24px; margin: 0; padding: 0; border: 0; outline: 0; background: none; /* 64: room to type beside the chips before wrapping */
  font: 400 var(--text-sm) var(--font); color: var(--text-primary);
}
.sb-cb-values input::placeholder { color: var(--text-quaternary); opacity: 1; }
.sb-cb-chips:not(:empty) + input::placeholder { color: transparent; } /* chips already say what is picked */

/* Panel: the Input dropdown menu, plus a status line. */
.sb-cb-panel[hidden] { display: none; }
.sb-cb-panel [role="listbox"][aria-busy="true"] { opacity: .5; } /* old results while new ones load */
.sb-cb-status { display: flex; align-items: center; gap: 8px; margin: 0; padding: 10px; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }
.sb-cb-status[hidden] { display: none; }
.sb-cb-status > svg { width: 16px; height: 16px; flex: none; }
.sb-cb-status[data-kind="error"] { color: var(--text-error); }
.sb-cb-spin { animation: sb-cb-spin 1s linear infinite; }
@keyframes sb-cb-spin { to { rotate: 360deg; } }
.sb-cb-create .sb-dd-label { color: var(--text-brand); }
.sb-cb-create .sb-dd-main > svg { color: var(--fg-brand); }

@media (prefers-reduced-motion: reduce) {
  .sb-cb-field, .sb-cb-chevron { transition: none; }
  .sb-cb-spin { animation: none; }
}
/* Phones: 16 px text in fields, so iOS does not zoom in on focus (shadcn: text-base md:text-sm). */
@media (max-width: 767px) {
  .sb-cb-values input { font-size: 16px; }
}
`;

  // ---- Docs content. People are honest placeholders (Advisor A, Reviewer C …), as on Avatar and Input dropdown.
  const PEOPLE = [['aa', 'Advisor A'], ['ab', 'Advisor B'], ['rc', 'Reviewer C'], ['ad', 'Analis D'], ['ae', 'Analis E'], ['af', 'Admin F'], ['ag', 'Admin G'], ['rh', 'Reviewer H']]
    .map(([v, l]) => ({ value: v, label: l, sub: `${l.toLowerCase().replace(' ', '.')}@sembuh.ai`, initials: l.split(' ').map(w => w[0]).join('') }));
  const TAGS = ['Prioritas', 'Butuh dokumen', 'Rujukan', 'Kecelakaan', 'Rawat inap', 'Kronis'].map(t => ({ value: t, label: t }));

  let uid = 0;
  function combobox({ count, multiple = true, async = false, creatable = false, people = true, selected = multiple ? ['ad', 'af'] : [], query = '', label, open = false, status, specimen = false, pins = false, results } = {}) {
    const id = `cb-${++uid}`, items = (people ? PEOPLE : TAGS).slice(0, count);
    const name = label || (people ? (multiple ? 'Reviewer' : 'Ditugaskan ke') : 'Label klaim');
    const data = [multiple && 'data-multiple', async && 'data-async', creatable && 'data-creatable'].filter(Boolean);
    const single = !multiple && selected[0] ? items.find(i => i.value === selected[0]) : null;
    if (single) data.push(`data-value="${single.value}"`);
    const pin = (n, at) => (pins ? ` data-pin="${n}"${at ? ` data-pin-at="${at}"` : ''}` : '');
    const chips = multiple ? selected.map(v => items.find(i => i.value === v)).map((it, i) => cbChip(it.value, it.label).replace('<li class="sb-cb-chip"', `<li class="sb-cb-chip"${i === 0 ? pin(2) : ''}`)).join('') : '';
    const shown = async ? results || [] : items.filter(i => !query || `${i.label} ${i.sub || ''}`.toLowerCase().includes(query.toLowerCase()));
    let opts = shown.map((it, i) => cbOption(it, selected.includes(it.value), `${id}-o${i}`)).join('');
    if (pins) opts = opts.replace(`id="${id}-o1"`, `id="${id}-o1"${pin(4, 'start')}`).replace(`id="${id}-o3"`, `id="${id}-o3"${pin(5, 'end')}`);
    const create = creatable ? `<div class="sb-dd-opt sb-cb-create" role="option" id="${id}-new"${query && !shown.some(s => s.label.toLowerCase() === query.toLowerCase()) ? '' : ' hidden'}><span class="sb-dd-main">${icon('plus')}<span class="sb-dd-label">Tambah “${esc(query)}”</span></span></div>` : '';
    const msg = status && { loading: [icon('loader').replace('<svg ', '<svg class="sb-cb-spin" '), 'Mencari…'], empty: ['', 'Tidak ada yang cocok'], error: [icon('alert-circle'), 'Gagal memuat. Ketik lagi untuk mencoba.'], hint: ['', 'Ketik nama atau email'] }[status];
    return `<div class="sb-field">${label === false ? '' : `\n  <label class="sb-field-label" for="${id}">${esc(name)}</label>`}
  <div class="${specimen ? 'cb-specimen' : 'sb-cb'}"${data.length ? ` ${data.join(' ')}` : ''}>
    <div class="sb-cb-field"${pin(1, 'start')}>
      ${icon(people ? 'user' : 'hash')}
      <div class="sb-cb-values"${pin(3)}>${multiple ? `\n        <ul class="sb-cb-chips" role="list" aria-label="Terpilih">${chips}</ul>` : ''}
        <input id="${id}" type="text" role="combobox" aria-expanded="${open}" aria-controls="${id}-list" aria-autocomplete="list" placeholder="${people ? 'Cari nama atau email' : 'Cari atau tambah label'}" value="${esc(single ? single.label : query)}" autocomplete="off">
      </div>
      ${icon('chevron-down').replace('<svg ', '<svg class="sb-cb-chevron" ')}
    </div>
    <div class="sb-dd-menu sb-cb-panel"${open ? '' : ' hidden'}>
      <div role="listbox" id="${id}-list"${multiple ? ' aria-multiselectable="true"' : ''} aria-label="${esc(name)}"${status === 'loading' ? ' aria-busy="true"' : ''}>${opts}${create}</div>
      <p class="sb-cb-status" role="status"${msg ? ` data-kind="${status}"` : ' hidden'}>${msg ? `${msg[0]}${msg[1]}` : ''}</p>
    </div>
  </div>
</div>`;
  }
  // Docs-only frames: live fields sit centred and open over the code below, like Input dropdown; specimens are still,
  // always open and out of the script's reach. DS.snippet strips the frame.
  const stage = (html, cls = '') => `<div class="cb-stage${cls ? ` ${cls}` : ''}">\n${html}\n</div>`;
  const still = html => `<div class="cb-stage is-still" inert>\n${html}\n</div>`;

  // Docs only: answer async searches from the people list after 0.7 s; the query "error" fails.
  document.addEventListener('sb-cb-search', e => {
    const q = e.detail.query.toLowerCase(), cb = e.target;
    setTimeout(() => cbResults(cb, q === 'error' ? null : PEOPLE.filter(p => `${p.label} ${p.sub}`.toLowerCase().includes(q))), 700);
  });

  DS.components.push({
    slug: 'combobox',
    name: 'Combobox',
    category: 'Components',
    status: 'In progress',
    updated: '2026-10-14',
    description: 'Type to find people or values and pick one or many. Picks show as chips, results can come from the server while you type, and a value that does not exist yet can be added.',
    css: CSS,
    cssFile: 'combobox.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Click the field and type a name or an email. ↑ ↓ move, Enter picks, Backspace in an empty field removes the last chip. With Async on, results arrive after a short wait; type "error" to see a failed search.' },
          {
            type: 'playground',
            initial: { multiple: true, async: false, creatable: false },
            controls: [
              { key: 'multiple', label: 'Multiple', type: 'toggle' },
              { key: 'async', label: 'Async', type: 'toggle' },
              { key: 'creatable', label: 'Add new values', type: 'toggle' },
            ],
            render: s => stage(combobox({ ...s, people: !s.creatable, selected: s.creatable ? (s.multiple ? ['Prioritas'] : []) : undefined })),
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
              'Use a combobox when people search a long or open list: reviewers, hospitals, labels. For one value from a short, fixed list, use Input dropdown; for 2 to 6 visible choices, use Checkbox group or Toggle.',
              'Pick many (`data-multiple`) when the field takes a set: reviewers on a claim, hospitals in a filter. Picks show as chips in the field and the list stays open.',
              'Search the server (`data-async`) when the list is too long to send to the page. Show "Mencari…" while waiting, and say so when nothing matches or the request fails.',
              'Let people add a value (`data-creatable`) only where new values are welcome, such as labels. Never for people or hospitals: those must already exist.',
              'People options show the avatar, the name and the email, and the search matches both.',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: still(combobox({ count: 6, open: true, specimen: true, pins: true, label: false })), code: false, layout: 'anat' },
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Field', 'Input field box: `gray-200` border, radius 10, `shadow-xs`, padding `3 10`; 32 high for one line and a line taller for each wrap. Leading 16 px icon (`user` for people), trailing chevron that turns when open.'],
              ['2', 'Chip', 'Badge md Gray with an × that removes the pick ("Hapus Analis D"). Chips and the text sit 4 apart and wrap.'],
              ['3', 'Values', 'Chips and the search text on shared lines. The text is Text md, at least 64 wide before it wraps under the chips. The placeholder ("Cari nama atau email") hides once there are chips.'],
              ['4', 'Option', 'An Input dropdown option: 20 px initials avatar, name in Text sm / Regular, email in `gray-500`. 32 high, radius 8; hover and active `gray-50`.'],
              ['5', 'Picked option', '`gray-50` fill and a 20 px `brand-600` check. In Multiple the list stays open, so picks can be undone in place.'],
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
              ['Multiple', 'True, False', '`data-multiple` on `.sb-cb`, `aria-multiselectable="true"` on the listbox, a `ul.sb-cb-chips` before the input'],
              ['Async', 'True, False', '`data-async`; the page listens for `sb-cb-search` and answers with `cbResults(cb, items)` or `cbResults(cb, null)`'],
              ['Add new values', 'True, False', '`data-creatable` and a hidden `.sb-cb-create` option last in the list'],
              ['Option content', 'Text, Person', 'Person: `.sb-dd-avatar` + `.sb-dd-label` + `.sb-dd-sup` (email)'],
              ['State', 'Default, Open, Disabled', 'Open: `aria-expanded="true"` on the input. Disabled: `disabled` on the input'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-multiple', text: 'Multiple' },
          { type: 'p', text: 'Picks become chips; the list stays open and the search text clears after each pick.' },
          { type: 'example', html: stage(combobox()) },
          { type: 'h3', id: 'type-single', text: 'Single person' },
          { type: 'p', text: 'One pick fills the field with the name and closes the list, as in Input dropdown; the field stays searchable for the next change.' },
          { type: 'example', html: stage(combobox({ multiple: false, selected: ['rc'] })) },
          { type: 'h3', id: 'type-async', text: 'Async' },
          { type: 'p', text: 'Nothing is listed until people type. 250 ms after the last key the page asks the server; old results dim while new ones load.' },
          { type: 'example', html: stage(combobox({ async: true, selected: [] })) },
          { type: 'h3', id: 'type-creatable', text: 'Add new values' },
          { type: 'p', text: 'When nothing matches exactly, the last option offers to add what was typed. The new value is picked and joins the list.' },
          { type: 'example', html: stage(combobox({ people: false, creatable: true, selected: ['Prioritas'] })) },
        ],
      },
      {
        id: 'states',
        title: 'List states',
        blocks: [
          { type: 'example', html: `<div class="cb-states">\n${[['loading', 'an', 'Loading'], ['empty', 'xyz', 'Nothing found'], ['error', 'error', 'Error']].map(([s, q, t]) => `<figure class="cb-state"><figcaption class="mx">${t}</figcaption>${still(combobox({ async: true, selected: [], query: q, open: true, status: s, specimen: true, label: false }))}</figure>`).join('\n')}\n</div>`, code: false },
          {
            type: 'table',
            head: ['State', 'Shows'],
            rows: [
              ['Loading', '16 px spinner + "Mencari…" in `gray-500`. Results already shown stay, at 50 % opacity.'],
              ['Nothing found', '"Tidak ada yang cocok" in `gray-500`; with Add new values, the "Tambah …" option instead.'],
              ['Error', '16 px `alert-circle` + "Gagal memuat. Ketik lagi untuk mencoba." in `error-700`.'],
              ['Hint (Async, empty field)', '"Ketik nama atau email" in `gray-500`.'],
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
              { kind: 'do', html: still(combobox({ label: 'Reviewer', specimen: true })), text: 'People found by name or email, picked as chips.' },
              { kind: 'dont', html: still(combobox({ label: 'Reviewer', creatable: true, query: 'Budi', selected: [], open: true, specimen: true })), text: '"Tambah" on a list of people. A typo becomes a reviewer who does not exist.' },
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
              'The input is a `role="combobox"` with `aria-expanded`, `aria-controls` and `aria-autocomplete="list"`; focus stays in it and `aria-activedescendant` points at the active option.',
              'The list is a `role="listbox"` (`aria-multiselectable` when picking many); picked options have `aria-selected="true"`, so the check is not the only signal.',
              'Each chip\'s × is a button named after the pick ("Hapus Analis D"). Backspace in an empty field removes the last chip.',
              'Loading, nothing found and errors are written in a `role="status"` line, so screen readers hear them without moving focus.',
            ],
          },
          {
            type: 'table',
            head: ['Key', 'Does'],
            rows: [
              ['Typing', 'Filters the list, or asks the server (Async)'],
              ['↓ / ↑', 'Opens the list; moves the active option'],
              ['Enter', 'Picks or un-picks the active option ("Tambah …" adds the value)'],
              ['Backspace (empty field)', 'Removes the last chip'],
              ['Esc', 'Closes the list'],
              ['Tab', 'Closes the list and moves on'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `input-field.css`, `input-dropdown.css` and `badge.css`, then `combobox.css`, and add `combobox.js`. Listen for `sb-cb-change` to read the picks.' },
          { type: 'code', lang: 'css', filename: 'combobox.css', code: CSS },
          { type: 'h3', id: 'cb-script', text: 'Script' },
          { type: 'code', lang: 'js', filename: 'combobox.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('click', cbClick);
  document.addEventListener('input', cbInput);
  document.addEventListener('keydown', cbKeydown);
})();

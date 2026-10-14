// Filter bar: the controls above a list (claims, invoices, members) that narrow it down: status tabs with counts, search,
// filter menus, a date range and the active filters as chips. Built with Button group, Input field, Dropdown menu,
// Date picker and Badge. Filters apply as they change. No spec in DESIGN.md yet; no Figma component yet.
(() => {
  const { esc, icon } = DS;

  // ---- Behaviour. The bar keeps its chips and counts in step with the controls and fires "sb-filter-change" with
  // { status, q, filters: { key: [values] }, start, end } on every change. The page filters or loads the list.
  const fbEsc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const fbDay = s => new Date(`${s}T00:00:00Z`).toLocaleDateString('id-ID', { timeZone: 'UTC', day: 'numeric', month: 'short', year: 'numeric' });
  const fbChip = (key, value, label) => `<li><span class="sb-badge" data-size="md" data-icon="x-close">${fbEsc(label)}<button class="sb-badge-x" type="button" data-remove="${key}" data-value="${fbEsc(value)}" aria-label="Hapus filter ${fbEsc(label)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li>`;
  function fbState(bar) {
    const dp = bar.querySelector('.sb-dp'), filters = {};
    for (const w of bar.querySelectorAll('.sb-menu-wrap[data-filter]')) filters[w.dataset.filter] = [...w.querySelectorAll('[aria-checked="true"]')].map(i => i.dataset.value);
    return {
      status: bar.querySelector('.sb-filter-status [aria-checked="true"]')?.dataset.value || '',
      q: bar.querySelector('.sb-filter-search input')?.value.trim() || '',
      filters,
      start: dp?.dataset.start || '',
      end: dp?.dataset.end || '',
    };
  }
  // Chips: the period first, then each picked menu value. Trigger badges count each menu's picks; the narrow Filter button counts all.
  function fbRender(bar) {
    const st = fbState(bar), chips = [];
    if (st.start) chips.push(fbChip('date', '', `${fbDay(st.start)} – ${fbDay(st.end)}`));
    for (const w of bar.querySelectorAll('.sb-menu-wrap[data-filter]')) {
      const on = [...w.querySelectorAll('[aria-checked="true"]')], n = w.querySelector('.sb-filter-n');
      if (n) { n.textContent = on.length; n.hidden = !on.length; }
      for (const i of on) chips.push(fbChip(w.dataset.filter, i.dataset.value, i.querySelector('.sb-menu-label').textContent));
    }
    bar.querySelector('.sb-filter-chip-list').innerHTML = chips.join('');
    bar.querySelector('.sb-filter-chips').hidden = !chips.length;
    const more = bar.querySelector('.sb-filter-more .sb-badge');
    if (more) { more.textContent = chips.length; more.hidden = !chips.length; }
    return st;
  }
  function fbChange(bar) {
    bar.dispatchEvent(new CustomEvent('sb-filter-change', { bubbles: true, detail: fbRender(bar) }));
  }
  function fbSelect(seg) {
    for (const b of seg.parentElement.children) {
      b.setAttribute('aria-checked', String(b === seg));
      b.tabIndex = b === seg ? 0 : -1;
    }
    fbChange(seg.closest('.sb-filter'));
  }
  // value null clears every pick of that menu.
  function fbRemove(bar, key, value) {
    if (key === 'date') {
      const dp = bar.querySelector('.sb-dp');
      delete dp.dataset.start;
      delete dp.dataset.end;
      dp.querySelector('input').value = '';
      return;
    }
    for (const i of bar.querySelectorAll(`.sb-menu-wrap[data-filter="${key}"] [aria-checked="true"]`)) {
      if (value === null || i.dataset.value === value) i.setAttribute('aria-checked', 'false');
    }
  }
  function fbClick(e) {
    const bar = e.target.closest?.('.sb-filter');
    if (!bar) return;
    const seg = e.target.closest('.sb-filter-status > [role="radio"]');
    const x = e.target.closest('.sb-filter-chips [data-remove]');
    const clear = e.target.closest('[data-filter-clear]');
    if (seg && !seg.disabled) return fbSelect(seg);
    if (x) { // focus goes to the next chip, else the previous one, else the search
      const i = [...bar.querySelectorAll('.sb-filter-chips [data-remove]')].indexOf(x);
      fbRemove(bar, x.dataset.remove, x.dataset.value);
      fbChange(bar);
      const left = bar.querySelectorAll('.sb-filter-chips [data-remove]');
      return (left[Math.min(i, left.length - 1)] || bar.querySelector('.sb-filter-search input'))?.focus();
    }
    if (clear) {
      fbRemove(bar, 'date');
      for (const w of bar.querySelectorAll('.sb-menu-wrap[data-filter]')) fbRemove(bar, w.dataset.filter, null);
      fbChange(bar);
      if (!clear.closest('.sb-filter-sheet')) bar.querySelector('.sb-filter-search input')?.focus(); // the chip row is gone
    }
  }
  // Status tabs: ← → move the choice, like the Button group switch.
  function fbKeydown(e) {
    const seg = e.target.closest?.('.sb-filter-status > [role="radio"]');
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!seg || !step) return;
    e.preventDefault();
    const segs = [...seg.parentElement.children].filter(b => !b.disabled);
    const next = segs[(segs.indexOf(seg) + step + segs.length) % segs.length];
    fbSelect(next);
    next.focus();
  }
  // Search typing, menu picks, a committed period, and a period field emptied by hand.
  function fbEvent(e) {
    const bar = e.target.closest?.('.sb-filter');
    if (!bar) return;
    if (e.type === 'input' && !e.target.matches('.sb-filter-search input')) return;
    if (e.type === 'change' && !(e.target.matches('.sb-dp input') && !e.target.value.trim())) return;
    fbChange(bar);
  }

  const strip = f => f.toString().replace(/^  /gm, '');
  const SCRIPT = `// Filter bar: keeps the chips, the menu counts and the narrow Filter button's count in step with the controls, and
// fires "sb-filter-change" with { status, q, filters, start, end } on every change: filter or load the list then.
// Status tabs move with ← →; a chip's × removes that filter; "Hapus semua" clears the menus and the period.
// Needs dropdown-menu.js and date-picker.js for the controls. Load this file after them.
const fbEsc = ${fbEsc.toString()};
const fbDay = ${fbDay.toString()};
const fbChip = ${fbChip.toString()};
${[fbState, fbRender, fbChange, fbSelect, fbRemove, fbClick, fbKeydown, fbEvent].map(strip).join('\n')}
document.addEventListener('click', fbClick);
document.addEventListener('keydown', fbKeydown);
for (const type of ['input', 'change', 'sb-menu-select', 'sb-date-change']) document.addEventListener(type, fbEvent);`;

  const CSS = `/* Filter bar, Codemasters Design System
   Needs tokens.css, button.css, button-group.css, badge.css, input-field.css, dropdown-menu.css + .js and
   date-picker.css + .js; filter-bar.js keeps the chips and counts in step and fires "sb-filter-change".

   <div class="sb-filter" role="group" aria-label="Filter klaim">
     <div class="sb-filter-top">
       <div class="sb-btn-group sb-filter-status" role="radiogroup" aria-label="Status klaim">
         <button type="button" role="radio" aria-checked="true" tabindex="0" data-value="">Semua <span class="sb-badge" data-size="sm">10</span></button>…
       </div>
       <div class="sb-input sb-filter-search"><svg…search…/><input type="search" placeholder="Cari ID klaim atau peserta" aria-label="Cari klaim"></div>
       <button class="sb-btn sb-filter-more" … popovertarget="klaim-filter">Filter <span class="sb-badge" data-size="sm" data-color="primary">1</span></button>
     </div>
     <div class="sb-filter-row">
       <div class="sb-filter-sheet" id="klaim-filter" popover>
         <div class="sb-filter-sheet-head">…title, close…</div>
         <div class="sb-dp" data-type="range" data-presets data-start="…" data-end="…">…Date picker…</div>
         <div class="sb-menu-wrap" data-filter="rs">…Dropdown menu with checkbox items, each with data-value; trigger holds .sb-filter-n…</div>
         <div class="sb-filter-sheet-foot">…Hapus semua, Lihat hasil…</div>
       </div>
       <div class="sb-filter-chips"><ul class="sb-filter-chip-list" aria-label="Filter aktif">…</ul><button … data-filter-clear>Hapus semua</button></div>
     </div>
   </div>

   Wide (600 and up): status and search, then the period and the menus, then the chips.
   Narrow: status on its own row, search with a Filter button; the period and the menus move into a bottom sheet
   (the popover). The chips stay on the page. */

.sb-filter { container-type: inline-size; display: grid; gap: 16px; min-width: 0; }
.sb-filter > * { min-width: 0; } /* the status row scrolls instead of widening the bar */
.sb-filter-top { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.sb-filter-row { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }

/* Every control in the bar is 40 high, the height of Button md and Button group. */
.sb-filter .sb-input { height: 40px; }
.sb-filter-status { flex: none; max-width: 100%; overflow-x: auto; scrollbar-width: none; }
.sb-filter-status > button > .sb-badge { font-variant-numeric: tabular-nums; }
.sb-filter-status > [aria-checked="true"] > .sb-badge { --bdg-bg: var(--bg-primary); } /* the pressed segment is gray-100 too */
.sb-filter-search { flex: 1 1 200px; } /* fills the rest of the status row, or a row of its own when it wraps */
.sb-filter .sb-dp { width: 264px; }
.sb-filter .sb-menu { inset-inline: 0 auto; } /* menus open from the trigger's start edge, like the calendar */
.sb-filter :is(.sb-filter-n, .sb-filter-more .sb-badge)[hidden] { display: none; }
.sb-filter-more { display: none; }

/* Wide: the sheet is only the row of filters, so the popover's own box is undone. */
.sb-filter-sheet {
  position: static; inset: auto; display: flex; flex-wrap: wrap; align-items: center; gap: 12px;
  width: auto; height: auto; margin: 0; padding: 0; overflow: visible;
  border: 0; background: none; color: inherit;
}
.sb-filter-sheet-head, .sb-filter-sheet-foot { display: none; }

/* Active filters: Badge md with ×, on their own row under the controls. "Hapus semua" ends the row. */
.sb-filter-chips { display: flex; flex: 1 1 100%; flex-wrap: wrap; align-items: center; gap: 8px; }
.sb-filter-chips[hidden] { display: none; }
.sb-filter-chip-list { display: contents; margin: 0; padding: 0; list-style: none; }
.sb-filter-chip-list > li { display: flex; }

@container (min-width: 800px) {
  .sb-filter-search { flex-grow: 0; flex-basis: 320px; margin-inline-start: auto; } /* room for both: 320, right-aligned */
}
@container (max-width: 599px) {
  .sb-filter-search { min-width: 0; }
  .sb-filter-more { display: inline-flex; }
  .sb-filter-sheet:not(:popover-open) { display: none; }
}

/* Narrow, open: a bottom sheet over the scrim, the controls full width and their panels in flow. */
.sb-filter-sheet:popover-open {
  position: fixed; inset: auto 0 0; display: grid; align-content: start; gap: 16px;
  box-sizing: border-box; width: min(100%, 480px); max-height: 85dvh; margin: auto auto 0; padding: 0 16px;
  overflow-y: auto; overscroll-behavior: contain;
  background: var(--bg-primary); border-radius: var(--radius-xl) var(--radius-xl) 0 0; box-shadow: var(--shadow-xl);
  transition-property: translate, opacity; transition-duration: 200ms; transition-timing-function: var(--ease);
}
@starting-style {
  .sb-filter-sheet:popover-open { translate: 0 24px; opacity: 0; }
}
.sb-filter-sheet::backdrop { background: var(--scrim); }
.sb-filter-sheet:popover-open > :is(.sb-filter-sheet-head, .sb-filter-sheet-foot) {
  position: sticky; z-index: 1; display: flex; align-items: center; gap: 12px; background: var(--bg-primary);
}
.sb-filter-sheet:popover-open > .sb-filter-sheet-head { top: 0; justify-content: space-between; padding-top: 16px; }
.sb-filter-sheet-title { margin: 0; font: 600 var(--text-lg) var(--font); color: var(--text-primary); }
.sb-filter-sheet:popover-open > .sb-filter-sheet-foot { bottom: 0; padding-block: 16px; border-top: 1px solid var(--border-secondary); }
.sb-filter-sheet-foot > .sb-btn { flex: 1; }
.sb-filter-sheet:popover-open > :is(.sb-dp, .sb-menu-wrap) { display: grid; width: 100%; }
.sb-filter-sheet:popover-open > .sb-menu-wrap > .sb-btn { justify-content: flex-start; }
.sb-filter-sheet:popover-open > .sb-menu-wrap > .sb-btn > .sb-btn-chevron { margin-inline-start: auto; }
.sb-filter-sheet:popover-open :is(.sb-menu, .sb-dp-panel) { position: static; min-width: 0; width: auto; margin-top: 8px; box-shadow: none; translate: none; }
.sb-filter-sheet:popover-open .sb-dp-panel { flex-direction: column; }
.sb-filter-sheet:popover-open .sb-dp-presets { display: flex; flex-wrap: wrap; width: auto; border-inline-end: 0; border-bottom: 1px solid var(--border-secondary); }
.sb-filter-sheet:popover-open .sb-dp-months { flex-direction: column; }
.sb-filter-sheet:popover-open .sb-dp-month + .sb-dp-month { border-inline-start: 0; border-top: 1px solid var(--border-secondary); }

@media (prefers-reduced-motion: reduce) {
  .sb-filter-sheet:popover-open { transition: none; }
}
`;

  // ---- Docs data: claims in the last six weeks. Today is fixed so the pages read the same every day.
  const TODAY = '2026-10-14';
  const STATUS = { review: ['blue', 'Sedang Ditinjau'], approved: ['success', 'Disetujui'], rejected: ['error', 'Ditolak'] };
  const TABS = [['', 'Semua'], ['review', 'Ditinjau'], ['approved', 'Disetujui'], ['rejected', 'Ditolak']];
  const RS = ['RS Medika Utama', 'RS Harapan Kita', 'RS Bunda', 'Klinik Sehat Sentosa'];
  const SVC = ['Rawat inap', 'Rawat jalan', 'Gigi'];
  const CLAIMS = [
    ['KLM-0241', 'Budi Santoso', 0, 0, '2026-10-13', 12450000, 'approved'],
    ['KLM-0240', 'Dewi Lestari', 1, 1, '2026-10-12', 650000, 'review'],
    ['KLM-0238', 'Siti Rahma', 1, 0, '2026-10-10', 3275000, 'review'],
    ['KLM-0236', 'Andi Wijaya', 3, 1, '2026-10-08', 875000, 'rejected'],
    ['KLM-0233', 'Maya Putri', 0, 0, '2026-10-05', 21980000, 'review'],
    ['KLM-0230', 'Rizky Pratama', 2, 2, '2026-10-02', 4610000, 'approved'],
    ['KLM-0227', 'Fajar Nugroho', 2, 1, '2026-09-29', 420000, 'approved'],
    ['KLM-0224', 'Lina Marlina', 0, 2, '2026-09-25', 1150000, 'rejected'],
    ['KLM-0221', 'Hendra Gunawan', 3, 1, '2026-09-22', 300000, 'approved'],
    ['KLM-0219', 'Ratna Sari', 1, 0, '2026-09-18', 8900000, 'approved'],
    ['KLM-0215', 'Yusuf Hidayat', 2, 0, '2026-09-12', 15300000, 'approved'],
    ['KLM-0212', 'Indah Permata', 0, 1, '2026-09-08', 540000, 'rejected'],
    ['KLM-0208', 'Agus Salim', 3, 2, '2026-09-03', 780000, 'review'],
  ].map(([id, name, rs, svc, date, amount, status]) => ({ id, name, rs: RS[rs], svc: SVC[svc], date, amount, status }));
  const MONTH = ['2026-09-15', TODAY]; // "30 hari terakhir"

  const match = (c, st, status = st.status) =>
    (!status || c.status === status) &&
    (!st.q || `${c.id} ${c.name}`.toLowerCase().includes(st.q.toLowerCase())) &&
    (!st.filters.rs?.length || st.filters.rs.includes(c.rs)) &&
    (!st.filters.svc?.length || st.filters.svc.includes(c.svc)) &&
    (!st.start || (c.date >= st.start && c.date <= st.end));
  const counts = st => Object.fromEntries(TABS.map(([v]) => [v, CLAIMS.filter(c => match(c, st, v)).length]));

  const rp = n => `Rp ${n.toLocaleString('id-ID')}`;
  const row = c => `<tr><td><a class="sb-table-link" href="#/filter-bar">${c.id}</a><span class="sb-table-sub">${esc(c.name)}</span></td><td>${esc(c.rs)}<span class="sb-table-sub">${c.svc}</span></td><td data-num>${fbDay(c.date)}</td><td data-num>${rp(c.amount)}</td><td><span class="sb-badge" data-size="sm" data-color="${STATUS[c.status][0]}">${STATUS[c.status][1]}</span></td></tr>`;
  const NONE = `<tr><td colspan="5"><div class="sb-card-empty">${icon('search')}<div class="sb-card-empty-text"><p class="sb-card-empty-title">Tidak ada klaim yang cocok</p><p>Ubah filter atau rentang waktu.</p></div></div></td></tr>`;
  const body = (list, page = 1, size = 5) => (list.length ? list.slice((page - 1) * size, page * size).map(row).join('\n') : NONE);

  // ---- Docs markup
  let uid = 0;
  const menuItem = (value, on) => `<button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="${on}" data-value="${esc(value)}"><span class="sb-menu-box" aria-hidden="true">${icon('check')}</span><span class="sb-menu-label">${esc(value)}</span></button>`;
  const filterMenu = (id, key, label, values, picked, pin) => `<div class="sb-menu-wrap" data-filter="${key}"${pin || ''}>
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" aria-haspopup="menu" aria-expanded="false" aria-controls="${id}-${key}">${esc(label)}<span class="sb-badge sb-filter-n" data-size="sm" data-color="primary"${picked.length ? '' : ' hidden'}>${picked.length}</span>${icon('chevron-down', 'sb-btn-chevron')}</button>
      <div class="sb-menu" id="${id}-${key}" role="menu" aria-label="${esc(label)}" hidden>
        <div class="sb-menu-group" role="group">
          ${values.map(v => menuItem(v, picked.includes(v))).join('\n          ')}
        </div>
      </div>
    </div>`;

  // The bar alone. pins: numbers for the anatomy. counts: per tab, from the data unless given.
  function bar({ status = '', q = '', rs = [], svc = [], start = MONTH[0], end = MONTH[1], pins = false } = {}) {
    const id = `fb-${++uid}`, st = { status, q, filters: { rs, svc }, start, end };
    const n = counts(st);
    const pin = (k, at) => (pins ? ` data-pin="${k}"${at ? ` data-pin-at="${at}"` : ''}` : '');
    const tabs = TABS.map(([v, l]) => `<button type="button" role="radio" aria-checked="${v === status}" tabindex="${v === status ? 0 : -1}" data-value="${v}">${l} <span class="sb-badge" data-size="sm">${n[v]}</span></button>`);
    const chips = [start && fbChip('date', '', `${fbDay(start)} – ${fbDay(end)}`), ...rs.map(v => fbChip('rs', v, v)), ...svc.map(v => fbChip('svc', v, v))].filter(Boolean);
    const dates = start ? `data-start="${start}" data-end="${end}" ` : '';
    const text = start ? `${start.split('-').reverse().join('/')} – ${end.split('-').reverse().join('/')}` : '';
    return `<div class="sb-filter" role="group" aria-label="Filter klaim">
  <div class="sb-filter-top">
    <div class="sb-btn-group sb-filter-status" role="radiogroup" aria-label="Status klaim"${pin(1, 'start')}>
      ${tabs.join('\n      ')}
    </div>
    <div class="sb-input sb-filter-search"${pin(2, 'end')}>${icon('search')}<input type="search" placeholder="Cari ID klaim atau peserta" aria-label="Cari klaim" value="${esc(q)}"></div>
    <button class="sb-btn sb-filter-more" type="button" data-hierarchy="secondary-gray" data-size="md" popovertarget="${id}-sheet">${icon('filter-lines')}Filter<span class="sb-badge" data-size="sm" data-color="primary"${chips.length ? '' : ' hidden'}>${chips.length}</span></button>
  </div>
  <div class="sb-filter-row">
    <div class="sb-filter-sheet" id="${id}-sheet" popover aria-label="Filter">
      <div class="sb-filter-sheet-head"><p class="sb-filter-sheet-title">Filter</p><button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Tutup" popovertarget="${id}-sheet" popovertargetaction="hide">${icon('x')}</button></div>
      <div class="sb-dp" data-type="range" ${dates}data-today="${TODAY}" data-presets${pin(3, 'bottom')}>
        <div class="sb-input">
          <button class="sb-dp-toggle" type="button" aria-label="Pilih periode" aria-haspopup="dialog" aria-expanded="false" aria-controls="${id}-cal">${icon('calendar')}</button>
          <input type="text" inputmode="numeric" placeholder="Semua tanggal" aria-label="Periode" value="${text}" autocomplete="off">
        </div>
        <div class="sb-dp-panel" id="${id}-cal" role="dialog" aria-label="Pilih periode" hidden></div>
      </div>
    ${filterMenu(id, 'rs', 'Rumah sakit', RS, rs, pin(4, 'bottom'))}
    ${filterMenu(id, 'svc', 'Layanan', SVC, svc)}
      <div class="sb-filter-sheet-foot"><button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" data-filter-clear>Hapus semua</button><button class="sb-btn" type="button" data-hierarchy="primary" data-size="md" popovertarget="${id}-sheet" popovertargetaction="hide">Lihat hasil</button></div>
    </div>
    <div class="sb-filter-chips"${chips.length ? '' : ' hidden'}>
      <ul class="sb-filter-chip-list" aria-label="Filter aktif">${chips.join('').replace('<li>', `<li${pin(5, 'bottom')}>`)}</ul>
      <button class="sb-btn" type="button" data-hierarchy="link-gray" data-size="sm" data-filter-clear${pin(6, 'end')}>Hapus semua</button>
    </div>
  </div>
</div>`;
  }

  // The bar in its place: a Card with the claims table and Pagination under it. The demo below filters the rows live.
  function card(o = {}) {
    const b = bar(o);
    const st = { status: o.status || '', q: o.q || '', filters: { rs: o.rs || [], svc: o.svc || [] }, start: o.start ?? MONTH[0], end: o.end ?? MONTH[1] };
    const list = CLAIMS.filter(c => match(c, st));
    return `<section class="sb-card" aria-label="Daftar klaim" data-fb-demo>
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title">Daftar klaim</h3>
      <p class="sb-card-desc">Klaim yang masuk dari rumah sakit rekanan.</p>
    </div>
  </header>
  <div class="sb-card-body">
${b}
<div class="sb-table-wrap">
  <table class="sb-table">
    <thead><tr><th scope="col">Klaim</th><th scope="col">Rumah Sakit</th><th scope="col" data-num>Tanggal</th><th scope="col" data-num>Tagihan</th><th scope="col">Status</th></tr></thead>
    <tbody>
${body(list)}
    </tbody>
  </table>
</div>
<div class="sb-table-foot">${DS.pagination({ total: list.length, size: 5, label: 'Halaman daftar klaim' })}</div>
  </div>
</section>`;
  }

  // Docs demo: what a page does on "sb-filter-change": filter the rows, update the tab counts, start at page 1.
  function demo(e) {
    const cardEl = e.target.closest?.('[data-fb-demo]');
    if (!cardEl) return;
    const st = fbState(cardEl.querySelector('.sb-filter')), list = CLAIMS.filter(c => match(c, st));
    let nav = cardEl.querySelector('.sb-pagination');
    if (e.type === 'sb-filter-change') {
      const n = counts(st);
      for (const b of cardEl.querySelectorAll('.sb-filter-status > [role="radio"]')) b.querySelector('.sb-badge').textContent = n[b.dataset.value];
      nav.outerHTML = DS.pagination({ total: list.length, size: +nav.dataset.size, label: 'Halaman daftar klaim' });
      nav = cardEl.querySelector('.sb-pagination');
    }
    cardEl.querySelector('tbody').innerHTML = body(list, +nav.dataset.page, +nav.dataset.size);
  }

  const stage = (html, cls = '') => `<div class="fb-stage${cls ? ` ${cls}` : ''}">\n${html}\n</div>`;
  const still = html => stage(html.replace('<div class="sb-filter"', '<div class="sb-filter" inert'), 'is-still');

  DS.components.push({
    slug: 'filter-bar',
    name: 'Filter bar',
    category: 'Components',
    status: 'In progress',
    updated: TODAY,
    description: 'The controls above a list that narrow it down: status tabs with counts, search, filter menus, a period and the active filters as chips. Filters apply as soon as they change. On narrow screens the filters move into a sheet.',
    css: CSS,
    cssFile: 'filter-bar.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'The table follows the bar: pick a status, type a name, tick a hospital, change the period or remove a chip. Narrow puts the card at phone width, where the period and the menus open in a sheet from the Filter button.' },
          {
            type: 'playground',
            initial: { layout: 'wide', active: true },
            controls: [
              { key: 'layout', label: 'Width', type: 'segmented', options: [['wide', 'Wide'], ['narrow', 'Narrow']] },
              { key: 'active', label: 'Active filters', type: 'toggle' },
            ],
            render: s => stage(card(s.active ? { rs: ['RS Medika Utama'] } : { start: '' }), s.layout === 'narrow' ? 'is-narrow' : ''),
            code: s => DS.snippet(bar(s.active ? { rs: ['RS Medika Utama'] } : { start: '' })),
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
              'Use a filter bar above a list people narrow down often: claims, invoices, members. It sits in the list\'s Card, between the head and the table, with Pagination under the table.',
              'Status goes in tabs (Button group) with a count on each, because people switch status more than anything else. Keep it to five tabs or fewer, "Semua" first.',
              'Search finds a record by what people know: ID, name. It matches as they type.',
              'Other filters are menus with checkboxes, so one filter can take several values. The period is a Date picker range with quick ranges.',
              'Filters apply as they change, with no Terapkan button. Debounce server requests for search by about 300 ms.',
              'Every active filter shows as a chip under the controls, so people see why rows are missing. A chip\'s × removes it; "Hapus semua" clears the menus and the period.',
              'Keep the filters in the URL, so a filtered list can be shared and survives a reload.',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: still(bar({ rs: ['RS Medika Utama'], pins: true })), code: false, layout: 'anat' },
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Status tabs', 'Button group switch, 40 high. Each segment ends with a Badge sm count, white on the pressed segment.'],
              ['2', 'Search', 'Input field with the search icon, 40 high. 320 wide and right-aligned when the bar is 800 or wider; below that it fills the rest of the status row, or a row of its own.'],
              ['3', 'Period', 'Date picker range with quick ranges, 264 wide, empty for "Semua tanggal".'],
              ['4', 'Filter menu', 'Button md secondary gray with a chevron; opens a Dropdown menu of checkbox items. A Badge sm primary counts the picks.'],
              ['5', 'Chips', 'Badge md with ×, on their own row. The period first, then each picked value.'],
              ['6', 'Clear', 'Button sm link gray "Hapus semua". Shows only with chips.'],
            ],
          },
          { type: 'p', text: 'Rows 16 apart (12 between the controls and the chips); 12 between controls, 8 between chips.' },
        ],
      },
      {
        id: 'properties',
        title: 'Properties',
        blocks: [
          {
            type: 'table',
            head: ['Part', 'Code'],
            rows: [
              ['Status', '`.sb-filter-status` Button group, `role="radiogroup"`; `data-value` on each radio (`""` for Semua)'],
              ['Search', '`.sb-filter-search` Input field with `<input type="search">`'],
              ['Filter menu', '`.sb-menu-wrap[data-filter="key"]`; `menuitemcheckbox` items with `data-value`; `.sb-filter-n` badge in the trigger'],
              ['Period', '`.sb-dp[data-type="range"][data-presets]`; `data-start` / `data-end` when set'],
              ['Narrow sheet', '`.sb-filter-more` with `popovertarget`; `.sb-filter-sheet[popover]` holds the period and the menus'],
              ['Chips', '`.sb-filter-chips` with `ul.sb-filter-chip-list` (drawn by the script) and `[data-filter-clear]`'],
              ['Event', '`sb-filter-change` on `.sb-filter`, `detail = { status, q, filters: { key: [values] }, start, end }`'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-full', text: 'Full' },
          { type: 'p', text: 'Status, search, period and menus, for the main list of a module.' },
          { type: 'example', html: stage(card({ svc: ['Rawat inap'] })), code: false },
          { type: 'h3', id: 'type-narrow', text: 'Narrow' },
          { type: 'p', text: 'Under 600 wide (the bar\'s own width, not the screen\'s), status takes its own row and scrolls sideways if needed. Search shares a row with a Filter button that counts the active filters. The period and the menus open in a bottom sheet; the chips stay on the page.' },
          { type: 'example', html: stage(card({ rs: ['RS Medika Utama'] }), 'is-narrow'), code: false },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'h3', id: 'state-none', text: 'No filters' },
          { type: 'p', text: 'No chips and no "Hapus semua"; the period field shows "Semua tanggal".' },
          { type: 'example', html: still(bar({ start: '' })), code: false },
          { type: 'h3', id: 'state-active', text: 'Active filters' },
          { type: 'p', text: 'Each menu trigger counts its picks and every value has a chip.' },
          { type: 'example', html: still(bar({ status: 'approved', rs: ['RS Medika Utama', 'RS Bunda'], svc: ['Rawat inap'] })), code: false },
          { type: 'h3', id: 'state-empty', text: 'No results' },
          { type: 'p', text: 'The table keeps its header and says so in one full-width cell. The chips stay, so the way back is one click away.' },
          { type: 'example', html: stage(card({ q: 'Kartika' })), code: false },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: still(bar({ rs: ['RS Bunda'] })), text: 'Every active filter shows as a chip.' },
              { kind: 'dont', html: still(bar({ rs: ['RS Bunda'] }).replace(/<div class="sb-filter-chips"[^>]*>/, '<div class="sb-filter-chips" hidden>')), text: 'Filters only inside their menus. Rows go missing and nothing on the page says why.' },
            ],
          },
          {
            type: 'list',
            items: [
              'Don\'t repeat the status tabs as a Status menu: two controls for one field disagree.',
              'Don\'t add a Terapkan button to the bar. Filters apply as they change; only the date range confirms, inside its calendar.',
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
              'The bar is a `role="group"` named for the list ("Filter klaim"). The status tabs are a radiogroup: one Tab stop, ← → move.',
              'Search has an `aria-label`, since the placeholder disappears as people type.',
              'Menu triggers say their count in their name ("Rumah sakit 2"); each chip\'s × says what it removes ("Hapus filter RS Bunda").',
              'Removing a chip moves focus to the next chip, or to the search when none are left, so keyboard users never land on nothing.',
              'The sheet is a popover: Esc and a tap on the scrim close it, and focus returns to the Filter button.',
              'Announce the result count near the list (for example the Pagination range, which is `aria-live`).',
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, the CSS of the parts (Button, Button group, Badge, Input field, Dropdown menu, Date picker), then `filter-bar.css`. Scripts: `dropdown-menu.js`, `date-picker.js`, then `filter-bar.js`.' },
          { type: 'code', lang: 'css', filename: 'filter-bar.css', code: CSS },
          { type: 'h3', id: 'filter-script', text: 'Filter script' },
          { type: 'code', lang: 'js', filename: 'filter-bar.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('click', fbClick);
  document.addEventListener('keydown', fbKeydown);
  for (const type of ['input', 'change', 'sb-menu-select', 'sb-date-change']) document.addEventListener(type, fbEvent);
  document.addEventListener('sb-filter-change', demo);
  document.addEventListener('sb-page-change', demo);
})();

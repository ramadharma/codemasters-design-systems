// Pagination: draws itself from data-page, data-total and data-size; the arrows change the page and the
// Input dropdown ("sb-dd-change") the page size. Fires "sb-page-change" with { page, size }: load that page.
// Needs input-dropdown.js for the page-size list.
function pgRender(nav) {
  const s = nav.dataset, size = +s.size || 5, total = +s.total || 0, pages = Math.max(1, Math.ceil(total / size));
  const page = Math.min(Math.max(1, +s.page || 1), pages), id = nav.id || 'pg';
  const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  const num = n => n.toLocaleString('id-ID');
  const sizes = (s.sizes || '5,10,25,50').split(',').map(Number);
  const opts = sizes.map((n, i) => `<div class="sb-dd-opt" id="${id}-o${i}" role="option" aria-selected="${n === size}" data-value="${n}"><span class="sb-dd-main"><span class="sb-dd-label">${n}</span></span>${svg('M20 6 9 17l-5-5').replace('<svg ', '<svg class="sb-dd-check" ')}</div>`).join('');
  const step = (to, label, d) => `<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="lg" data-icon="only" aria-label="${label}" data-go="${to}"${to < 1 || to > pages ? ' disabled' : ''}>${svg(d)}</button>`;
  const first = total ? (page - 1) * size + 1 : 0, last = Math.min(total, page * size);
  nav.innerHTML = `<span class="sb-pagination-label" id="${id}-l">Baris per halaman</span>
<div class="sb-dd sb-pagination-size">
<button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="${id}-list" aria-labelledby="${id}-l ${id}-v"><span class="sb-dd-value" id="${id}-v"><span class="sb-dd-label">${size}</span></span>${svg('m6 9 6 6 6-6').replace('<svg ', '<svg class="sb-dd-chevron" ')}</button>
<div class="sb-dd-menu" id="${id}-list" role="listbox" aria-labelledby="${id}-l" hidden>${opts}</div>
</div>
<p class="sb-pagination-count" aria-live="polite">${num(first)}–${num(last)} dari ${num(total)} ${s.noun || 'data'}</p>
<div class="sb-pagination-steps">${step(page - 1, 'Halaman sebelumnya', 'm15 18-6-6 6-6')}${step(page + 1, 'Halaman berikutnya', 'm9 18 6-6-6-6')}</div>`;
  s.page = page;
}
function pgSet(nav, page, size, focus) {
  const s = nav.dataset;
  if (size) { page = Math.floor(((+s.page - 1) * +s.size) / size) + 1; s.size = size; } // the first row stays in view
  s.page = page;
  pgRender(nav);
  const target = nav.querySelector(focus);
  (target && !target.disabled ? target : nav.querySelector('[data-go]:not(:disabled)'))?.focus(); // first or last page: the other arrow
  nav.dispatchEvent(new CustomEvent('sb-page-change', { bubbles: true, detail: { page: +s.page, size: +s.size } }));
}
function pgClick(e) {
  const go = e.target.closest?.('.sb-pagination [data-go]');
  if (go && !go.disabled) pgSet(go.closest('.sb-pagination'), +go.dataset.go, null, `[aria-label="${go.getAttribute('aria-label')}"]`);
}
function pgSize(e) {
  const nav = e.target.closest?.('.sb-pagination');
  if (nav && +e.detail.value !== +nav.dataset.size) pgSet(nav, null, +e.detail.value, '.sb-dd-trigger');
}
document.querySelectorAll('.sb-pagination').forEach(pgRender);
document.addEventListener('click', pgClick);
document.addEventListener('sb-dd-change', pgSize);

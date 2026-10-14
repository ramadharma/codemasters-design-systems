// Filter bar: keeps the chips, the menu counts and the narrow Filter button's count in step with the controls, and
// fires "sb-filter-change" with { status, q, filters, start, end } on every change: filter or load the list then.
// Status tabs move with ← →; a chip's × removes that filter; "Hapus semua" clears the menus and the period.
// Needs dropdown-menu.js and date-picker.js for the controls. Load this file after them.
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
function fbEvent(e) {
  const bar = e.target.closest?.('.sb-filter');
  if (!bar) return;
  if (e.type === 'input' && !e.target.matches('.sb-filter-search input')) return;
  if (e.type === 'change' && !(e.target.matches('.sb-dp input') && !e.target.value.trim())) return;
  fbChange(bar);
}
document.addEventListener('click', fbClick);
document.addEventListener('keydown', fbKeydown);
for (const type of ['input', 'change', 'sb-menu-select', 'sb-date-change']) document.addEventListener(type, fbEvent);

// Table: sortable headers, foldable groups and the sticky column edge.
function tableSort(e) {
  const btn = e.target.closest?.('.sb-table-sort');
  if (!btn) return;
  const th = btn.closest('th'), table = th.closest('table'), col = th.cellIndex;
  const dir = th.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
  for (const h of table.tHead.rows[0].cells) h.removeAttribute('aria-sort');
  th.setAttribute('aria-sort', dir);
  const val = r => r.cells[col].dataset.value ?? r.cells[col].textContent.trim();
  const body = table.tBodies[0];
  const rows = [...body.rows].sort((a, b) => {
    const x = val(a), y = val(b), n = x - y;
    return (Number.isNaN(n) ? x.localeCompare(y, 'id') : n) * (dir === 'ascending' ? 1 : -1);
  });
  body.append(...rows);
}
function tableGroup(e) {
  const btn = e.target.closest?.('.sb-table-fold');
  if (!btn) return;
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', String(open));
  const row = btn.closest('tr'), level = +row.dataset.level;
  if (!level) {
    for (const r of row.closest('tbody').querySelectorAll('tr[data-child]')) r.hidden = !open;
    return;
  }
  let shut = Infinity; // level of the nearest folded row inside this branch
  for (let r = row.nextElementSibling; r && +r.dataset.level > level; r = r.nextElementSibling) {
    const l = +r.dataset.level;
    if (l <= shut) shut = Infinity;
    r.hidden = !open || l > shut;
    if (shut === Infinity && r.querySelector('.sb-table-fold[aria-expanded="false"]')) shut = l;
  }
}
function tableScroll(e) {
  const wrap = e.target.closest?.('.sb-table-wrap');
  if (wrap) wrap.toggleAttribute('data-scrolled', wrap.scrollLeft > 0);
}
document.addEventListener('click', tableSort);
document.addEventListener('click', tableGroup);
document.addEventListener('scroll', tableScroll, true); // scroll does not bubble: listen in the capture phase

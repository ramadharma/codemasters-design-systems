// Table: sortable headers and foldable groups.
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
  for (const row of btn.closest('tbody').querySelectorAll('tr[data-child]')) row.hidden = !open;
}
document.addEventListener('click', tableSort);
document.addEventListener('click', tableGroup);

// "Select all" checkbox: checks every row; turns indeterminate when only some rows are checked.
// <input data-select-all="klaim"> on the header box, <input data-select-item="klaim"> on each row.
function selectAll(e) {
  const head = e.target.closest?.('input[data-select-all]');
  if (head) {
    document.querySelectorAll(`input[data-select-item="${head.dataset.selectAll}"]:not(:disabled)`).forEach(i => (i.checked = head.checked));
    head.removeAttribute('data-indeterminate');
    return;
  }
  const item = e.target.closest?.('input[data-select-item]');
  if (!item) return;
  const name = item.dataset.selectItem;
  const items = [...document.querySelectorAll(`input[data-select-item="${name}"]`)];
  const box = document.querySelector(`input[data-select-all="${name}"]`);
  const n = items.filter(i => i.checked).length;
  box.checked = n === items.length;
  box.indeterminate = n > 0 && n < items.length;
  box.removeAttribute('data-indeterminate'); // the property takes over from the first-paint attribute
}
document.addEventListener('change', selectAll);

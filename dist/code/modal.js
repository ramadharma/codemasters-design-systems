// Modal: [data-modal-open="id"] opens <dialog id="id">, [data-modal-close] and a scrim click close it.
// Esc, the focus trap and returning focus to the opener come from showModal().
function modalClick(e) {
  const opener = e.target.closest?.('[data-modal-open]');
  if (opener) return document.getElementById(opener.dataset.modalOpen)?.showModal();
  const closer = e.target.closest?.('[data-modal-close]');
  if (closer) return closer.closest('dialog')?.close();
  // A click on the scrim lands on the dialog element itself, outside its box.
  const dialog = e.target.closest?.('dialog.sb-modal');
  if (dialog && e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  }
}
document.addEventListener('click', modalClick);

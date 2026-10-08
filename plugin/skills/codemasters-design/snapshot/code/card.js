// Card fold: the chevron shows and hides the parts named in its aria-controls.
function cardFold(e) {
  const btn = e.target.closest?.('.sb-card-fold');
  if (!btn) return;
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', String(open));
  for (const id of btn.getAttribute('aria-controls').split(' ')) document.getElementById(id).hidden = !open;
}
document.addEventListener('click', cardFold);

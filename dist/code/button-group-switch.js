// Click or ← → selects one segment in every role="radiogroup" button group.
document.addEventListener('click', e => {
  const seg = e.target.closest('.sb-btn-group[role="radiogroup"] > button');
  if (seg && !seg.disabled) select(seg);
});
document.addEventListener('keydown', e => {
  const seg = e.target.closest('.sb-btn-group[role="radiogroup"] > button');
  const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
  if (!seg || !step) return;
  e.preventDefault();
  const segs = [...seg.parentElement.children].filter(b => !b.disabled);
  const next = segs[(segs.indexOf(seg) + step + segs.length) % segs.length];
  select(next);
  next.focus();
});
function select(seg) {
  for (const b of seg.parentElement.children) {
    b.setAttribute('aria-checked', String(b === seg));
    b.tabIndex = b === seg ? 0 : -1;
  }
}

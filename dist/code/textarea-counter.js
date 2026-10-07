// Character counter for every textarea with data-limit. Typing past the limit is allowed:
// the counter turns red, the field goes into error and the hint says what to do. Text is never cut.
function updateCounter(e) {
  const ta = e.target.closest('.sb-textarea textarea[data-limit]');
  if (!ta) return;
  const limit = Number(ta.dataset.limit);
  const over = ta.value.length > limit;
  const count = ta.parentElement.querySelector('.sb-textarea-count');
  count.textContent = `${ta.value.length}/${limit}`;
  count.toggleAttribute('data-over', over);
  if (over) ta.setAttribute('aria-invalid', 'true');
  else ta.removeAttribute('aria-invalid');
  const hint = ta.closest('.sb-field').querySelector('.sb-field-hint[data-error]');
  if (hint) hint.textContent = over ? hint.dataset.error : hint.dataset.hint;
}
document.addEventListener('input', updateCounter);

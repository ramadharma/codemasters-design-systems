// Verification code boxes: typing moves to the next box, Backspace on an empty box goes back,
// ← → move between boxes, and pasting (or autofill) spreads the code over all boxes.
function codeInput(e) {
  const box = e.target.closest?.('.sb-code-digit');
  if (!box) return;
  const boxes = [...box.closest('.sb-code').querySelectorAll('.sb-code-digit')];
  const i = boxes.indexOf(box);
  const digits = box.value.replace(/\D/g, '');
  clearCodeError(box);
  if (digits.length > 1) return fillCode(boxes, i, digits); // autofill of the whole code into one box
  box.value = digits;
  if (digits) boxes[i + 1]?.focus();
}
function codeKeydown(e) {
  const box = e.target.closest?.('.sb-code-digit');
  if (!box) return;
  const boxes = [...box.closest('.sb-code').querySelectorAll('.sb-code-digit')];
  const i = boxes.indexOf(box);
  if (e.key === 'Backspace' && !box.value && i > 0) {
    e.preventDefault();
    boxes[i - 1].value = '';
    boxes[i - 1].focus();
    clearCodeError(box);
  } else if (e.key === 'ArrowLeft') boxes[i - 1]?.focus();
  else if (e.key === 'ArrowRight') boxes[i + 1]?.focus();
}
function codePaste(e) {
  const box = e.target.closest?.('.sb-code-digit');
  if (!box) return;
  e.preventDefault();
  const boxes = [...box.closest('.sb-code').querySelectorAll('.sb-code-digit')];
  clearCodeError(box);
  fillCode(boxes, boxes.indexOf(box), e.clipboardData.getData('text').replace(/\D/g, ''));
}
function fillCode(boxes, start, digits) {
  [...digits].slice(0, boxes.length - start).forEach((d, k) => (boxes[start + k].value = d));
  boxes[Math.min(start + digits.length, boxes.length - 1)].focus();
}
function clearCodeError(box) {
  const group = box.closest('.sb-code');
  const invalid = group.querySelectorAll('[aria-invalid="true"]');
  if (!invalid.length) return;
  invalid.forEach(b => b.removeAttribute('aria-invalid'));
  const hint = document.getElementById(group.getAttribute('aria-describedby'));
  if (hint && hint.dataset.hint) hint.textContent = hint.dataset.hint;
}
document.addEventListener('input', codeInput);
document.addEventListener('keydown', codeKeydown);
document.addEventListener('paste', codePaste);

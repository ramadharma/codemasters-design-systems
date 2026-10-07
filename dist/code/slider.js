// Slider: keeps range handles apart and mirrors values into the fill, labels and aria-valuetext.
// Labels use the unit of the data: data-prefix="Rp " or data-suffix="%" on .sb-slider.
function sliderText(root, value) {
  return (root.dataset.prefix || '') + Number(value).toLocaleString('id-ID') + (root.dataset.suffix || '');
}
function sliderSync(root) {
  const inputs = [...root.querySelectorAll('.sb-slider-input')];
  const pct = i => `${((i.value - i.min) / (i.max - i.min)) * 100}%`;
  root.style.setProperty('--lo', inputs.length > 1 ? pct(inputs[0]) : '0%');
  root.style.setProperty('--hi', pct(inputs[inputs.length - 1]));
  const labels = root.querySelectorAll('.sb-slider-value');
  inputs.forEach((input, n) => {
    const text = sliderText(root, input.value);
    input.setAttribute('aria-valuetext', text);
    if (labels[n]) labels[n].textContent = text;
  });
}
function sliderInput(e) {
  const input = e.target.closest?.('.sb-slider-input');
  if (!input) return;
  const root = input.closest('.sb-slider');
  const [lo, hi] = root.querySelectorAll('.sb-slider-input');
  const step = Number(input.step) || 1;
  // Range: the handles never cross; the minimum distance is one step.
  if (hi && input === lo && Number(lo.value) > Number(hi.value) - step) lo.value = Number(hi.value) - step;
  if (hi && input === hi && Number(hi.value) < Number(lo.value) + step) hi.value = Number(lo.value) + step;
  sliderSync(root);
}
document.addEventListener('input', sliderInput);

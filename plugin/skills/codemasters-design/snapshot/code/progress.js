// Progress: set the value from JS. The fill animates in CSS (300 ms, --ease).
// Only ever move forward, except when the task restarts from 0.
function setProgress(el, value) {
  const v = Math.round(Math.min(100, Math.max(0, value)));
  el.style.setProperty('--value', v);
  el.setAttribute('aria-valuenow', v);
  el.querySelectorAll('.sb-progress-label, .sb-pc-value').forEach(t => (t.textContent = `${v}%`));
}

// setProgress(document.querySelector('#unggah'), 40);

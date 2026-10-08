// Chart tooltip: hover or focus any [data-tip] mark. Marks with the same data-i light up; the rest fade.
function chartTip(e) {
  const hit = e.target.closest?.('.sb-chart [data-tip]');
  const chart = e.target.closest?.('.sb-chart');
  if (!chart) return;
  const tip = chart.querySelector('.sb-chart-tip');
  const off = e.type === 'pointerout' || e.type === 'focusout';
  chart.querySelectorAll('.is-on').forEach(m => m.classList.remove('is-on'));
  if (off || !hit) {
    chart.removeAttribute('data-hover');
    tip.hidden = true;
    return;
  }
  const { t, rows } = JSON.parse(hit.dataset.tip);
  chart.setAttribute('data-hover', '');
  chart.querySelectorAll(`[data-i="${hit.dataset.i}"]`).forEach(m => m.classList.add('is-on'));
  const cross = chart.querySelector('.sb-chart-cross');
  if (cross && hit.dataset.x) cross.setAttribute('x1', hit.dataset.x), cross.setAttribute('x2', hit.dataset.x);
  // Labels are data: textContent only, never innerHTML.
  tip.replaceChildren();
  const head = document.createElement('p');
  head.className = 'sb-chart-tip-title';
  head.textContent = t;
  tip.append(head);
  for (const [label, value, color] of rows) {
    const row = document.createElement('p');
    row.className = 'sb-chart-tip-row';
    row.style.setProperty('--key', color);
    const v = document.createElement('strong');
    v.textContent = value;
    row.append(v, ` ${label}`);
    tip.append(row);
  }
  tip.hidden = false;
  const c = chart.getBoundingClientRect();
  // Anchor above the highest lit mark (bars, dots), else above the hovered mark itself.
  const lit = [...chart.querySelectorAll('.is-on')].map(m => m.getBoundingClientRect());
  // A donut segment's box is the whole ring, so follow the pointer there (keyboard focus falls back to the ring).
  const ring = hit.hasAttribute('pathLength') && e.clientX;
  const r = ring ? { left: e.clientX, width: 0, top: e.clientY - 4 } : lit.length ? { left: Math.min(...lit.map(b => b.left)), width: Math.max(...lit.map(b => b.right)) - Math.min(...lit.map(b => b.left)), top: Math.min(...lit.map(b => b.top)) } : hit.getBoundingClientRect();
  if (hit.dataset.x) {
    // Line charts: beside the crosshair at the top of the plot, flipped left near the right edge.
    const h = hit.getBoundingClientRect(), x = h.left + h.width / 2 - c.left;
    const right = x + 12 + tip.offsetWidth <= c.width;
    tip.dataset.side = '';
    tip.style.left = `${right ? x + 12 : x - 12 - tip.offsetWidth}px`;
    tip.style.top = `${h.top - c.top}px`;
    return;
  }
  delete tip.dataset.side;
  const x = Math.min(Math.max(r.left + r.width / 2 - c.left, tip.offsetWidth / 2), c.width - tip.offsetWidth / 2);
  tip.style.left = `${x}px`;
  tip.style.top = `${r.top - c.top}px`;
}
for (const type of ['pointerover', 'pointerout', 'focusin', 'focusout']) document.addEventListener(type, chartTip);

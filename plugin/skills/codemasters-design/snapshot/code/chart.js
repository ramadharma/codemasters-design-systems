// Chart tooltip: hover or focus any [data-tip] mark. Marks with the same data-i light up; the rest fade.
// The tooltip follows the pointer smoothly; keyboard focus pins it above the mark.
function chartTipPlace(chart, tip, e, hit, instant) {
  const c = chart.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
  let x, y;
  if (e.type.startsWith('pointer')) {
    // 12 right of and below the pointer; flips at the chart's right and bottom edges.
    const px = e.clientX - c.left, py = e.clientY - c.top;
    x = px + 12 + w <= c.width ? px + 12 : px - 12 - w;
    y = py + 12 + h <= c.height ? py + 12 : py - 12 - h;
  } else {
    const r = hit.getBoundingClientRect();
    x = r.left + r.width / 2 - c.left - w / 2;
    y = r.top - c.top - h - 8;
  }
  tip.style.transition = instant ? 'none' : ''; // appear in place, then glide
  tip.style.translate = `${Math.max(0, Math.min(x, c.width - w))}px ${y}px`;
}
function chartTip(e) {
  const chart = e.target.closest?.('.sb-chart');
  if (!chart) return;
  const tip = chart.querySelector('.sb-chart-tip');
  if (e.type === 'pointermove') return tip.hidden || chartTipPlace(chart, tip, e);
  const hit = e.target.closest('.sb-chart [data-tip]');
  const off = e.type === 'pointerout' || e.type === 'focusout';
  // Moving from one mark to the next: keep the tooltip, the next pointerover refills it.
  if (off && e.relatedTarget?.closest?.('.sb-chart [data-tip]') && e.relatedTarget.closest('.sb-chart') === chart) return;
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
  const fresh = tip.hidden;
  tip.hidden = false;
  chartTipPlace(chart, tip, e, hit, fresh);
}
for (const type of ['pointerover', 'pointerout', 'pointermove', 'focusin', 'focusout']) document.addEventListener(type, chartTip);

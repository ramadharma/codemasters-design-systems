// Chart: bar, line, stacked bar and donut, drawn as plain SVG with no chart library. Built from DESIGN.md
// Data display (legend, chart tooltip), Colors > Data visualisation and the dataviz method (marks, spacers,
// validated series order, table view).
(() => {
  const { esc } = DS;

  // ---- Tooltip: hover or focus a mark (or a column of a line chart). Every value is also in the table view.
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
  const SCRIPT = `// Chart tooltip: hover or focus any [data-tip] mark. Marks with the same data-i light up; the rest fade.
${chartTip.toString().replace(/^  /gm, '')}
for (const type of ['pointerover', 'pointerout', 'focusin', 'focusout']) document.addEventListener(type, chartTip);`;

  const CSS = `/* Chart, Codemasters Design System
   Needs tokens.css (series colours --chart-1 … --chart-6, --chart-other, --chart-grid, --chart-axis); chart.js for the tooltip.
   Plain SVG, no library. Usually sits in a Card (Framed for dashboards).

   <figure class="sb-chart">
     <ul class="sb-legend">…</ul>
     <svg class="sb-chart-plot" viewBox="0 0 560 240" role="img" aria-label="…">…</svg>
     <div class="sb-chart-tip" role="status" hidden></div>
     <details class="sb-chart-table"><summary>Lihat sebagai tabel</summary><table>…</table></details>
   </figure>

   Marks: bars ≤ 24 thick with a 4 px rounded data end, 2 px gap between touching marks; lines 2 px, rejected dashed 6 4;
   dots 8 with a 2 px white ring, shown on hover. Grid and axes are solid hairlines. Text never takes a series colour. */

.sb-chart { position: relative; display: grid; gap: 16px; margin: 0; min-width: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-chart-plot { display: block; width: 100%; height: auto; overflow: visible; }
.sb-chart-plot text { font: 400 12px var(--font); fill: var(--gray-500); font-variant-numeric: tabular-nums; }
.sb-chart-plot .sb-chart-total { font: 600 var(--text-md) var(--font); fill: var(--gray-900); }
.sb-chart[data-layout="donut"] { grid-template-columns: 240px minmax(0, 1fr); align-items: center; gap: 16px 32px; }
.sb-chart[data-layout="donut"] .sb-legend { flex-direction: column; align-items: flex-start; }
.sb-chart[data-layout="donut"] > .sb-chart-table { grid-column: 1 / -1; }
@media (max-width: 560px) { .sb-chart[data-layout="donut"] { grid-template-columns: minmax(0, 1fr); justify-items: center; } }
.sb-chart-grid { stroke: var(--chart-grid); stroke-width: 1; shape-rendering: crispEdges; }
.sb-chart-base { stroke: var(--chart-axis); stroke-width: 1; shape-rendering: crispEdges; }
.sb-chart-line { fill: none; stroke-width: 2; stroke-linejoin: round; stroke-linecap: round; }
.sb-chart-line[data-dashed] { stroke-dasharray: 6 4; }
.sb-chart-area { opacity: .1; }
.sb-chart-dot { stroke: var(--white); stroke-width: 2; opacity: 0; } /* the white ring keeps it legible on the line */
.sb-chart-dot.is-on { opacity: 1; }
.sb-chart-cross { stroke: var(--gray-300); stroke-width: 1; opacity: 0; shape-rendering: crispEdges; }
.sb-chart[data-hover] .sb-chart-cross { opacity: 1; }
.sb-chart-hit { fill: transparent; outline: none; cursor: default; }
.sb-chart-mark { transition: opacity 150ms var(--ease); }
.sb-chart[data-hover] .sb-chart-mark:not(.is-on) { opacity: .25; } /* the hovered mark stays, the rest step back */
.sb-chart [data-tip]:focus-visible { stroke: var(--brand-600); stroke-width: 2; }
.sb-chart[aria-busy="true"] .sb-chart-plot { opacity: .5; } /* refetch keeps the last render, faded; no skeleton */

/* Legend: always for 2+ series. Key mirrors the mark: square for bars and segments, line for lines (dashed = rejected). */
.sb-legend { display: flex; flex-wrap: wrap; gap: 8px 16px; margin: 0; padding: 0; list-style: none; }
.sb-legend > li { display: inline-flex; align-items: center; gap: 8px; font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-legend-key { --key: var(--chart-1); width: 12px; height: 12px; flex: none; border-radius: var(--radius-sm); background: var(--key); }
.sb-legend-key[data-line] { height: 2px; width: 16px; border-radius: 0; }
.sb-legend-key[data-line="dashed"] { background: repeating-linear-gradient(90deg, var(--key) 0 6px, transparent 6px 10px); }
.sb-legend-value { color: var(--gray-900); font-weight: 600; font-variant-numeric: tabular-nums; }

/* Tooltip: white, gray-200 border, radius 8, shadow-lg as a filter. Value first, then the series name. */
.sb-chart-tip {
  position: absolute; z-index: 20; translate: -50% calc(-100% - 8px); pointer-events: none;
  display: grid; gap: 4px; min-width: 140px; padding: 8px 12px;
  background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-md);
  filter: drop-shadow(0 12px 8px rgba(16,24,40,.08)) drop-shadow(0 4px 3px rgba(16,24,40,.03));
  font: 400 var(--text-xs) var(--font); color: var(--gray-500); white-space: nowrap;
}
.sb-chart-tip[hidden] { display: none; }
.sb-chart-tip[data-side] { translate: 0 0; } /* line charts: beside the crosshair */
.sb-chart-tip p { margin: 0; }
.sb-chart-tip-title { font-weight: 500; color: var(--gray-700); }
.sb-chart-tip-row { --key: var(--chart-1); display: flex; align-items: center; gap: 8px; }
.sb-chart-tip-row::before { content: ''; width: 12px; height: 2px; flex: none; background: var(--key); } /* line key, not a box */
.sb-chart-tip-row > strong { font: 600 var(--text-sm) var(--font); color: var(--gray-900); font-variant-numeric: tabular-nums; }

/* Table view: the accessible twin of every chart. */
.sb-chart-table > summary { width: fit-content; font: 500 var(--text-sm) var(--font); color: var(--gray-500); cursor: pointer; }
.sb-chart-table > summary:hover { color: var(--gray-700); }
.sb-chart-table table { width: 100%; margin-top: 12px; border-collapse: collapse; font: 400 var(--text-sm) var(--font); }
.sb-chart-table :is(th, td) { padding: 8px 12px; border-bottom: 1px solid var(--gray-200); text-align: end; font-variant-numeric: tabular-nums; }
.sb-chart-table :is(th, td):first-child { text-align: start; }
.sb-chart-table th { font: 500 var(--text-xs) var(--font); color: var(--gray-500); background: var(--gray-50); }

@media (prefers-reduced-motion: reduce) {
  .sb-chart-mark { transition: none; }
}
`;

  // ---- Data: claims per month, Sembuh AI vs TPA.
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
  const SERIES = [
    { name: 'Sembuh AI', color: 'var(--chart-1)', data: [120, 135, 150, 142, 168, 180] },
    { name: 'TPA', color: 'var(--chart-2)', data: [98, 102, 110, 105, 118, 121] },
  ];
  const REJECTED = { name: 'Ditolak, Sembuh AI', color: 'var(--chart-1)', dashed: true, data: [18, 15, 14, 16, 12, 11] };
  const PARTS = [['Kamar', 412000000, 'var(--chart-1)'], ['Obat', 268000000, 'var(--chart-2)'], ['Tindakan', 190000000, 'var(--chart-3)'], ['Lab', 96000000, 'var(--chart-4)']];
  const STACK = [
    ['Rawat inap', [62, 14, 9]],
    ['Rawat jalan', [148, 21, 12]],
    ['Gigi', [34, 6, 3]],
  ];
  const STACK_SERIES = [['Disetujui', 'var(--chart-1)'], ['Ditolak', 'var(--chart-2)'], ['Diproses', 'var(--chart-3)']];

  const num = n => n.toLocaleString('id-ID');
  const rp = n => `Rp ${num(n)}`;
  const tip = (t, rows) => esc(JSON.stringify({ t, rows }));

  // ---- Geometry
  const W = 560, H = 240, L = 40, R = 8, T = 8, B = 28;
  const PW = W - L - R, PH = H - T - B, BASE = T + PH;
  const niceMax = max => { const p = 10 ** Math.floor(Math.log10(max / 4)); return [1, 2, 2.5, 5, 10].map(m => m * p).find(s => s * 4 >= max) * 4; }; // 4 clean steps
  const yAxis = max => [0, 1, 2, 3, 4].map(i => {
    const v = (max / 4) * i, y = BASE - (PH * i) / 4;
    return `  <line class="${i ? 'sb-chart-grid' : 'sb-chart-base'}" x1="${L}" x2="${W - R}" y1="${y}" y2="${y}"/>\n  <text x="${L - 8}" y="${y + 4}" text-anchor="end">${num(v)}</text>`;
  }).join('\n');
  const xLabels = cx => MONTHS.map((m, i) => `  <text x="${cx(i)}" y="${H - 8}" text-anchor="middle">${m}</text>`).join('\n');
  // A bar rounded only at its data end (top), square on the baseline.
  const barPath = (x, y, w, h) => { const r = Math.min(4, h, w / 2); return `M${x},${BASE}V${y + r}Q${x},${y} ${x + r},${y}H${x + w - r}Q${x + w},${y} ${x + w},${y + r}V${BASE}Z`; };

  const legend = (items) => `<ul class="sb-legend">\n${items.map(([n, c, line, value]) => `  <li><span class="sb-legend-key"${line ? ` data-line="${line}"` : ''} style="--key: ${c}"></span>${esc(n)}${value ? ` <span class="sb-legend-value">${value}</span>` : ''}</li>`).join('\n')}\n</ul>`;
  const table = (head, rows) => `<details class="sb-chart-table">\n  <summary>Lihat sebagai tabel</summary>\n  <table>\n    <thead><tr>${head.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead>\n    <tbody>\n${rows.map(r => `      <tr>${r.map((c, i) => (i ? `<td>${c}</td>` : `<th scope="row">${esc(c)}</th>`)).join('')}</tr>`).join('\n')}\n    </tbody>\n  </table>\n</details>`;
  const figure = (label, parts) => `<figure class="sb-chart">\n${parts.filter(Boolean).join('\n')}\n<div class="sb-chart-tip" role="status" hidden></div>\n</figure>`.replace('<svg', `<svg class="sb-chart-plot" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label)}"`);

  // Grouped bars: per month, one bar per series, ≤ 24 thick, 2 px apart.
  function barChart(series = SERIES, { withLegend = true, withTable = true } = {}) {
    const max = niceMax(Math.max(...series.flatMap(s => s.data)));
    const band = PW / MONTHS.length, bw = Math.min(24, (band * 0.6 - 2 * (series.length - 1)) / series.length);
    const cx = i => L + band * i + band / 2;
    const marks = MONTHS.map((m, i) => {
      const gw = bw * series.length + 2 * (series.length - 1), x0 = cx(i) - gw / 2;
      const bars = series.map((s, k) => {
        const h = (s.data[i] / max) * PH;
        return `  <path class="sb-chart-mark" data-i="${i}" d="${barPath(x0 + k * (bw + 2), BASE - h, bw, h)}" fill="${s.color}"/>`;
      }).join('\n');
      const hit = `  <rect class="sb-chart-hit" data-i="${i}" x="${L + band * i}" y="${T}" width="${band}" height="${PH}" tabindex="0" aria-label="${m}: ${series.map(s => `${s.name} ${num(s.data[i])}`).join(', ')}" data-tip="${tip(m, series.map(s => [s.name, num(s.data[i]), s.color]))}"/>`;
      return `${bars}\n${hit}`;
    }).join('\n');
    const svg = `<svg>\n${yAxis(max)}\n${marks}\n${xLabels(cx)}\n</svg>`;
    return figure(`Klaim disetujui per bulan, ${series.map(s => s.name).join(' dan ')}`, [
      withLegend && series.length > 1 ? legend(series.map(s => [s.name, s.color])) : '',
      svg,
      withTable ? table(['Bulan', ...series.map(s => s.name)], MONTHS.map((m, i) => [m, ...series.map(s => num(s.data[i]))])) : '',
    ]);
  }

  // Lines: one point per month, centred on the label; dots appear on hover; rejected is dashed. One series gets a 10 % area.
  function lineChart(series = [...SERIES, REJECTED], { area = false } = {}) {
    const max = niceMax(Math.max(...series.flatMap(s => s.data)));
    const band = PW / MONTHS.length, cx = i => L + band * i + band / 2;
    const y = v => BASE - (v / max) * PH;
    const pts = s => s.data.map((v, i) => `${cx(i)},${y(v)}`).join(' ');
    const lines = series.map(s => [
      area ? `  <polygon class="sb-chart-area" points="${cx(0)},${BASE} ${pts(s)} ${cx(MONTHS.length - 1)},${BASE}" fill="${s.color}"/>` : '',
      `  <polyline class="sb-chart-line"${s.dashed ? ' data-dashed' : ''} points="${pts(s)}" stroke="${s.color}"/>`,
    ].filter(Boolean).join('\n')).join('\n');
    const dots = MONTHS.map((m, i) => series.map(s => `  <circle class="sb-chart-dot" data-i="${i}" cx="${cx(i)}" cy="${y(s.data[i])}" r="4" fill="${s.color}"/>`).join('\n')).join('\n');
    const hits = MONTHS.map((m, i) => `  <rect class="sb-chart-hit" data-i="${i}" data-x="${cx(i)}" x="${L + band * i}" y="${T}" width="${band}" height="${PH}" tabindex="0" aria-label="${m}: ${series.map(s => `${s.name} ${num(s.data[i])}`).join(', ')}" data-tip="${tip(m, series.map(s => [s.name, num(s.data[i]), s.color]))}"/>`).join('\n');
    const svg = `<svg>\n${yAxis(max)}\n  <line class="sb-chart-cross" x1="${L}" x2="${L}" y1="${T}" y2="${BASE}"/>\n${lines}\n${dots}\n${hits}\n${xLabels(cx)}\n</svg>`;
    return figure(`Tren klaim per bulan: ${series.map(s => s.name).join(', ')}`, [
      series.length > 1 ? legend(series.map(s => [s.name, s.color, s.dashed ? 'dashed' : 'solid'])) : '',
      svg,
      table(['Bulan', ...series.map(s => s.name)], MONTHS.map((m, i) => [m, ...series.map(s => num(s.data[i]))])),
    ]);
  }

  // Stacked horizontal bars: part-to-whole per row, 2 px gaps between segments, rounded only at the far end.
  function stackChart() {
    const rowH = 20, gap = 28, top = 8, labelW = 96, w = W - labelW - 56;
    const max = Math.max(...STACK.map(([, v]) => v.reduce((a, b) => a + b, 0)));
    const h = top + STACK.length * (rowH + gap);
    const rows = STACK.map(([name, vals], r) => {
      const y = top + r * (rowH + gap);
      const total = vals.reduce((a, b) => a + b, 0);
      let x = labelW;
      const segs = vals.map((v, k) => {
        const sw = (v / max) * w - (k < vals.length - 1 ? 2 : 0);
        const last = k === vals.length - 1, rr = Math.min(4, sw / 2);
        const d = last ? `M${x},${y}H${x + sw - rr}Q${x + sw},${y} ${x + sw},${y + rr}V${y + rowH - rr}Q${x + sw},${y + rowH} ${x + sw - rr},${y + rowH}H${x}Z` : `M${x},${y}H${x + sw}V${y + rowH}H${x}Z`;
        const seg = `  <path class="sb-chart-mark" data-i="${r}-${k}" d="${d}" fill="${STACK_SERIES[k][1]}" tabindex="0" aria-label="${name}, ${STACK_SERIES[k][0]}: ${num(v)}" data-tip="${tip(name, [[STACK_SERIES[k][0], num(v), STACK_SERIES[k][1]]])}"/>`;
        x += sw + 2;
        return seg;
      }).join('\n');
      return `  <text x="0" y="${y + 14}">${esc(name)}</text>\n${segs}\n  <text x="${x + 6}" y="${y + 14}">${num(total)}</text>`;
    }).join('\n');
    const svg = `<svg class="sb-chart-plot" viewBox="0 0 ${W} ${h}" role="img" aria-label="Status klaim per jenis layanan">\n${rows}\n</svg>`;
    return `<figure class="sb-chart">\n${legend(STACK_SERIES.map(([n, c]) => [n, c]))}\n${svg}\n<div class="sb-chart-tip" role="status" hidden></div>\n${table(['Layanan', ...STACK_SERIES.map(s => s[0])], STACK.map(([n, v]) => [n, ...v.map(num)]))}\n</figure>`;
  }

  // Donut: part-to-whole at a glance, ≤ 6 segments, 2 px gaps, total in the centre. Legend carries the values.
  function donutChart() {
    const total = PARTS.reduce((a, [, v]) => a + v, 0);
    const r = 90, C = 2 * Math.PI * r, gapPct = (2 / C) * 100;
    let at = 0;
    const segs = PARTS.map(([n, v, c], i) => {
      const pct = (v / total) * 100;
      const s = `  <circle class="sb-chart-mark" data-i="${i}" cx="120" cy="120" r="${r}" pathLength="100" fill="none" stroke="${c}" stroke-width="20" stroke-dasharray="${(pct - gapPct).toFixed(2)} ${(100 - pct + gapPct).toFixed(2)}" stroke-dashoffset="${(-at).toFixed(2)}" transform="rotate(-90 120 120)" tabindex="0" aria-label="${n}: ${rp(v)}" data-tip="${tip(n, [[`${Math.round(pct)} % dari total`, rp(v), c]])}"/>`;
      at += pct;
      return s;
    }).join('\n');
    const svg = `<svg class="sb-chart-plot" viewBox="0 0 240 240" role="img" aria-label="Komposisi tagihan" style="max-width: 240px">\n${segs}\n  <text x="120" y="112" text-anchor="middle">Total tagihan</text>\n  <text class="sb-chart-total" x="120" y="140" text-anchor="middle">${rp(total)}</text>\n</svg>`;
    return `<figure class="sb-chart" data-layout="donut">\n${svg}\n${legend(PARTS.map(([n, v, c]) => [n, c, '', rp(v)]))}\n<div class="sb-chart-tip" role="status" hidden></div>\n${table(['Komponen', 'Tagihan'], PARTS.map(([n, v]) => [n, rp(v)]))}\n</figure>`;
  }

  const stage = (html, cls = '') => `<div class="chart-stage${cls ? ` ${cls}` : ''}">\n${html}\n</div>`;
  const inCard = (title, html) => `<section class="sb-card" data-variant="framed" aria-label="${esc(title)}">\n  <header class="sb-card-head"><div class="sb-card-heading"><h3 class="sb-card-title">${esc(title)}</h3></div></header>\n  <div class="sb-card-body">\n${html}\n  </div>\n</section>`;
  const empty = '<div class="sb-card-empty" data-frame="dashed" style="min-height: 240px">\n  <p>Belum ada data untuk rentang waktu ini.</p>\n</div>';

  const anatomy = `<figure class="sb-chart" style="width: 560px">
<ul class="sb-legend" data-pin="1" data-pin-at="start"><li><span class="sb-legend-key" style="--key: var(--chart-1)"></span>Sembuh AI</li><li><span class="sb-legend-key" style="--key: var(--chart-2)"></span>TPA</li></ul>
<svg class="sb-chart-plot" viewBox="0 0 ${W} ${H}" role="img" aria-label="Anatomi chart">
${yAxis(200)}
${MONTHS.map((m, i) => { const band = PW / 6, x0 = L + band * i + band / 2 - 25; return SERIES.map((s, k) => { const h = (s.data[i] / 200) * PH; return `  <path d="${barPath(x0 + k * 26, BASE - h, 24, h)}" fill="${s.color}"/>`; }).join('\n'); }).join('\n')}
${xLabels(i => L + (PW / 6) * i + PW / 12)}
</svg>
<span class="anat-at" data-pin="2" data-pin-at="start" style="position: absolute; left: 8px; top: 38px; width: 28px; height: 14px"></span>
<span class="anat-at" data-pin="3" style="position: absolute; left: 40px; width: 512px; top: 95px; height: 1px"></span>
<span class="anat-at" data-pin="4" style="position: absolute; left: 58px; top: 126px; width: 24px; height: 122px"></span>
<span class="anat-at" data-pin="5" data-pin-at="bottom" style="position: absolute; left: 300px; top: 248px; width: 1px; height: 1px"></span>
<span class="anat-at" data-pin="6" data-pin-at="bottom" style="position: absolute; left: 495px; top: 258px; width: 28px; height: 14px"></span>
</figure>`;

  DS.components.push({
    slug: 'chart',
    name: 'Chart',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-08',
    description: 'Bar, line, stacked bar and donut charts in plain SVG: a validated series order, thin marks, legend, tooltip and a table view. For one number, use the Card metric instead.',
    css: CSS,
    cssFile: 'chart.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Hover or tab through the chart for the tooltip. Every chart also opens as a table.' },
          {
            type: 'playground',
            initial: { type: 'bar' },
            controls: [{ key: 'type', label: 'Type', type: 'segmented', options: [['bar', 'Bar'], ['line', 'Line'], ['stack', 'Stacked'], ['donut', 'Donut']] }],
            render: s => stage({ bar: barChart, line: () => lineChart(), stack: stackChart, donut: donutChart }[s.type]()),
          },
        ],
      },
      {
        id: 'usage',
        title: 'Usage',
        blocks: [
          { type: 'p', text: 'Pick the form from what the reader must do, before any colour. Sometimes the answer is not a chart.' },
          {
            type: 'table',
            head: ['The reader must…', 'Use', 'Not'],
            rows: [
              ['See one current number', 'Card metric (value + change)', 'A one-bar chart'],
              ['Compare amounts across a few categories or months', 'Bar', 'A donut'],
              ['Follow a trend over time', 'Line (area for a single series)', 'Bars for 12+ points'],
              ['See the parts of one whole', 'Stacked bar; donut only for ≤ 6 clearly different parts', 'A donut for close values'],
              ['Read exact values across many categories', 'A table, or a table under the chart', 'More colours'],
            ],
          },
          {
            type: 'list',
            items: [
              'A chart sits in a Card, usually Framed: title and tools on the shell, chart on the sheet.',
              'Date range and filters sit in one row above all the charts they scope, never inside a chart card.',
              'One y-axis per chart. Two measures with different units are two charts.',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: anatomy, code: false, layout: 'anat' },
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Legend', 'Above the plot, left. Always for 2+ series, none for one (the card title names it). Key 12 px, radius 4, or a 16 × 2 line for line charts (dashed for rejected); label Text sm / Medium `gray-700`.'],
              ['2', 'Y-axis ticks', 'Text xs `gray-500`, tabular, right-aligned 8 left of the plot. Four or five clean steps from 0. Ticks may abbreviate (`1,2 M`); everything else uses full numbers.'],
              ['3', 'Gridline', '1 px solid `--chart-grid` (`gray-100`). Never dashed.'],
              ['4', 'Bar', '≤ 24 thick, 4 px rounded at the data end, square on the baseline. Touching bars sit 2 px apart.'],
              ['5', 'Baseline', '1 px solid `--chart-axis` (`gray-300`) at 0.'],
              ['6', 'X-axis labels', 'Text xs `gray-500`, centred under each band. The container includes this band, so the card never scrolls.'],
            ],
          },
        ],
      },
      {
        id: 'color',
        title: 'Series colours',
        blocks: [
          { type: 'p', text: 'Six series colours in a fixed order. The order and steps were checked with a colour-blind simulation (protanopia and deuteranopia): the worst neighbouring pair is ΔE 10.9 (target 8) and 19.4 for normal vision (floor 15). The 300 step of the same family marks rejected or secondary values.' },
          { type: 'example', html: `<div class="chart-swatches">\n${['Sembuh AI · brand-500', 'TPA · orange-600', 'blue-light-600', 'purple-600', 'pink-600', 'indigo-500', 'Lainnya · gray-400'].map((l, i) => `<span><i style="background: var(--chart-${i < 6 ? i + 1 : 'other'})"></i>--chart-${i < 6 ? i + 1 : 'other'}<small>${l}</small></span>`).join('\n')}\n</div>`, code: false },
          {
            type: 'list',
            items: [
              'Assign in order, never skip, never cycle. A seventh series folds into "Lainnya" (`--chart-other`) or the chart splits into small charts.',
              'Colour follows the entity, not its rank: Sembuh AI is always `--chart-1`, also when a filter hides other series.',
              '`--chart-1` is the company\'s `brand-500`, so each company\'s charts take its own blue.',
              'Approved is solid; rejected is the 300 step in bars and a dashed line (`6 4`) in line charts.',
              'Status colours (success, warning, error) mean good or bad only. They never stand in as series colours.',
              'Text never takes a series colour. Labels, values and legends stay `gray-500` to `gray-900`; the coloured key beside them carries the identity.',
              '`--chart-2` and `--chart-3` are just above 3:1 on white; `--chart-other` is below it. That is why every chart has a legend and a table view.',
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-bar', text: 'Bar' },
          { type: 'p', text: 'Grouped columns per period. The whole band is the hover target; the hovered group stays, the others step back to 25 %.' },
          { type: 'example', html: stage(barChart()) },
          { type: 'h3', id: 'type-line', text: 'Line' },
          { type: 'p', text: '2 px lines, one point per label, centred on it. Hovering anywhere in a band snaps a hairline crosshair to it, shows the dots (8 px with a 2 px white ring) and lists every series in one tooltip. Rejected is dashed.' },
          { type: 'example', html: stage(lineChart()), code: false },
          { type: 'p', text: 'A single series gets a 10 % area under its line and no legend.' },
          { type: 'example', html: stage(lineChart([SERIES[0]], { area: true })), code: false },
          { type: 'h3', id: 'type-stack', text: 'Stacked bar' },
          { type: 'p', text: 'Part-to-whole per row, horizontal so long labels fit. Segments sit 2 px apart and only the far end is rounded. The total sits at the end of the row; segment values live in the tooltip and the table.' },
          { type: 'example', html: stage(stackChart()), code: false },
          { type: 'h3', id: 'type-donut', text: 'Donut' },
          { type: 'p', text: 'Only for a whole split into at most six clearly different parts. 20 px ring, 2 px gaps, the total in the centre (Text md / Semibold, full Rupiah), values in the legend in full Rupiah.' },
          { type: 'example', html: stage(donutChart()), code: false },
        ],
      },
      {
        id: 'tooltip',
        title: 'Tooltip',
        blocks: [
          {
            type: 'list',
            items: [
              '`white`, 1 px `gray-200` border, radius 8, padding `8 12`, `shadow-lg` drawn as a filter. Bars and segments: 8 above the highest hovered mark. Line charts: 12 beside the crosshair at the top of the plot, flipped to the left near the edge. Always inside the chart.',
              'Title: the period or category, Text xs / Medium `gray-700`. Rows: a 12 × 2 line key, the value (Text sm / Semibold `gray-900`, tabular), then the series name in `gray-500`. Value first: the reader already knows the series.',
              'Shows on hover and on keyboard focus alike. It adds detail; it never holds a value that is not also in the table view.',
              'Fill it with `textContent`: series names are data.',
            ],
          },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'h3', id: 'state-empty', text: 'Empty' },
          { type: 'p', text: 'Keep the chart\'s size and show the Card empty state with a dashed frame, so the layout does not jump when data arrives.' },
          { type: 'example', html: stage(inCard('Klaim Masuk', empty)), code: false },
          { type: 'h3', id: 'state-loading', text: 'Refreshing' },
          { type: 'p', text: 'While new data loads, keep the last chart at 50 % opacity (`aria-busy="true"` on the figure). No skeleton, no flash.' },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(barChart([SERIES[0]], { withTable: false })), text: 'One series, one colour. The card title names it, so no legend.' },
              { kind: 'dont', html: stage(barChart([SERIES[0]], { withTable: false }).replace(/(<path class="sb-chart-mark" data-i="(\d)"[^>]*fill=")var\(--chart-1\)/g, (m, a, i) => `${a}var(--chart-${(+i % 6) + 1})`)), text: 'A different colour per bar. Colour is for identity; the bar length already shows the amount.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(lineChart([SERIES[0], SERIES[1]]).replace(/<details[\s\S]*?<\/details>/, '')), text: 'A legend and a tooltip carry the values.' },
              { kind: 'dont', html: stage(lineChart([SERIES[0], SERIES[1]]).replace(/<details[\s\S]*?<\/details>/, '').replace('</svg>', `${[SERIES[0], SERIES[1]].flatMap(s => s.data.map((v, i) => `  <text x="${L + (PW / 6) * i + PW / 12}" y="${BASE - (v / 200) * PH - 8}" text-anchor="middle">${v}</text>`)).join('\n')}\n</svg>`)), text: 'A number on every point. Nobody reads them; they bury the lines.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(stackChart().replace(/<details[\s\S]*?<\/details>/, '')), text: 'Parts of a whole as a stacked bar: lengths compare at a glance.' },
              { kind: 'dont', html: '<div class="chart-stage"><p class="chart-note">Two y-axes on one chart: claims (0–200) on the left, Rupiah (0–1 M) on the right.</p></div>', text: 'Two y-axes. Where the lines cross means nothing; make two charts.' },
            ],
          },
        ],
      },
      {
        id: 'accessibility',
        title: 'Accessibility',
        blocks: [
          {
            type: 'list',
            items: [
              'The chart is a `<figure>`; the SVG has `role="img"` and an `aria-label` that says what it shows.',
              'Every chart has a table view (`<details>` "Lihat sebagai tabel"): the full data, readable without colour, hover or a mouse.',
              'Identity never rests on colour alone: a legend for 2+ series, dashed lines for rejected, the table view.',
              'Hover targets are whole bands or segments, not thin lines. Each is focusable with an `aria-label` holding its values, and focus shows the same tooltip as hover.',
              'Series colours are 3:1 or more against white except `--chart-other`; text in and around the chart uses text colours (`gray-500` and darker).',
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, then `chart.css`, and `chart.js` for the tooltip. Draw the SVG with the specs above; the markup of each mark is in the examples. The examples scale one 560 × 240 drawing; in the app, draw the SVG at its rendered width (measure the card, redraw on resize) so axis text stays 12 px.' },
          { type: 'code', lang: 'css', filename: 'chart.css', code: CSS },
          { type: 'h3', id: 'chart-script', text: 'Tooltip script' },
          { type: 'code', lang: 'js', filename: 'chart.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  for (const type of ['pointerover', 'pointerout', 'focusin', 'focusout']) document.addEventListener(type, chartTip);
})();

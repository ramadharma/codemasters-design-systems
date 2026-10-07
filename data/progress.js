// Progress bar and progress circle. Source: DESIGN.md §6 Progress bar and progress circle,
// Figma nodes 1085-57382 (Progress bar), 1154-89981 (Progress circle).
(() => {
  const { esc } = DS;
  const FIGMA = 'https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=';

  // ---- Updating: one function sets the fill, the ARIA value and the visible percentage together.
  function setProgress(el, value) {
    const v = Math.round(Math.min(100, Math.max(0, value)));
    el.style.setProperty('--value', v);
    el.setAttribute('aria-valuenow', v);
    el.querySelectorAll('.sb-progress-label, .sb-pc-value').forEach(t => (t.textContent = `${v}%`));
  }
  const SCRIPT = `// Progress: set the value from JS. The fill animates in CSS (300 ms, --ease).
// Only ever move forward, except when the task restarts from 0.
${setProgress.toString().replace(/^  /gm, '')}

// setProgress(document.querySelector('#unggah'), 40);`;

  const CSS = `/* Progress bar and progress circle, Codemasters Design System
   Figma: Progress bar (1085-57382), Progress circle (1154-89981). Needs tokens.css. progress.js sets the value.

   <div class="sb-progress" data-label="right" role="progressbar" aria-label="Unggah dokumen klaim"
        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="--value: 40">
     <div class="sb-progress-track"><div class="sb-progress-fill"></div></div>
     <span class="sb-progress-label">40%</span>
   </div>

   --value        0–100, drives the fill. Keep aria-valuenow and the label text in step (setProgress does all three).
   data-label     right | bottom | top-floating | bottom-floating (omit the label span for False)
   Circle         .sb-progress-circle, data-size xxs | xs | sm | md | lg, data-shape="half" for the gauge. */

/* ---- Progress bar: track 8 high, gray-100; fill brand-600, min 8 wide so 0 % still shows a dot. */
.sb-progress { --value: 0; position: relative; display: flex; align-items: center; gap: 12px; width: 100%; }
.sb-progress-track { flex: 1; min-width: 0; height: 8px; border-radius: var(--radius-sm); background: var(--gray-100); }
.sb-progress-fill { width: max(8px, calc(var(--value) * 1%)); height: 100%; border-radius: inherit; background: var(--brand-600); transition: width 300ms var(--ease); }
.sb-progress-label { flex: none; font: 500 var(--text-sm) var(--font); color: var(--gray-700); font-variant-numeric: tabular-nums; }
.sb-progress[data-label="bottom"] { flex-direction: column; align-items: stretch; gap: 8px; }
.sb-progress[data-label="bottom"] .sb-progress-track { flex: none; }
.sb-progress[data-label="bottom"] .sb-progress-label { align-self: flex-end; }
/* Floating: a Light tooltip that follows the end of the fill, 8 away. The bar reserves its 34 px + 8 so it covers nothing.
   translate slides it from left-aligned at 0 % to right-aligned at 100 %, centred at 50 %, so it never leaves the bar. */
.sb-progress[data-label$="floating"] .sb-progress-label {
  position: absolute; left: calc(var(--value) * 1%); translate: calc(var(--value) * -1%) 0;
  padding: 8px 12px; border-radius: var(--radius-md); background: var(--white); box-shadow: var(--shadow-lg);
  font: 600 var(--text-xs) var(--font); white-space: nowrap; transition: left 300ms var(--ease);
}
.sb-progress[data-label="top-floating"] { padding-top: 42px; }
.sb-progress[data-label="top-floating"] .sb-progress-label { top: 0; }
.sb-progress[data-label="bottom-floating"] { padding-bottom: 42px; }
.sb-progress[data-label="bottom-floating"] .sb-progress-label { bottom: 0; }

/* ---- Progress circle: SVG in a 100-unit box, stroke 10 (= 16/160 … 28/280; xxs 6/64).
   pathLength="100" makes the dash length the percentage. Starts at 12 o'clock, runs clockwise; the half circle runs left to right. */
.sb-progress-circle { --value: 0; --pc-box: 200px; display: inline-grid; place-items: center; }
.sb-progress-circle > svg, .sb-pc-text { grid-area: 1 / 1; }
.sb-progress-circle > svg { display: block; width: var(--pc-box); height: auto; }
.sb-pc-track, .sb-pc-line { fill: none; stroke-width: 10; }
.sb-pc-track { stroke: var(--gray-100); }
.sb-pc-line { stroke: var(--brand-600); stroke-linecap: round; stroke-dasharray: var(--value) 100; transition: stroke-dasharray 300ms var(--ease); }
.sb-progress-circle:not([data-shape="half"]) .sb-pc-line { transform: rotate(-90deg); transform-origin: center; transform-box: fill-box; }
.sb-progress-circle[data-shape="half"] .sb-pc-text { align-self: end; }

.sb-pc-text { display: grid; justify-items: center; text-align: center; }
.sb-pc-caption { font: 500 var(--text-xs) var(--font); color: var(--gray-500); }
.sb-pc-value { font: 500 var(--display-sm) var(--font); color: var(--gray-900); font-variant-numeric: tabular-nums; }

.sb-progress-circle[data-size="xxs"] { --pc-box: 64px; }
.sb-progress-circle[data-size="xxs"] :is(.sb-pc-track, .sb-pc-line) { stroke-width: 9.375; } /* 6 px at 64 */
.sb-progress-circle[data-size="xxs"] .sb-pc-value { font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
/* xxs: the caption moves below the circle, 4 apart. */
.sb-progress-circle[data-size="xxs"] .sb-pc-text { display: contents; }
.sb-progress-circle[data-size="xxs"] .sb-pc-value { grid-area: 1 / 1; }
.sb-progress-circle[data-size="xxs"][data-shape="half"] .sb-pc-value { align-self: end; }
.sb-progress-circle[data-size="xxs"] .sb-pc-caption { grid-area: 2 / 1; margin-top: 4px; }
.sb-progress-circle[data-size="xs"] { --pc-box: 160px; }
.sb-progress-circle[data-size="xs"] .sb-pc-value { font: 500 var(--display-xs) var(--font); }
.sb-progress-circle[data-size="md"] { --pc-box: 240px; }
.sb-progress-circle[data-size="md"] .sb-pc-value { font: 500 var(--display-md) var(--font); }
.sb-progress-circle[data-size="lg"] { --pc-box: 280px; }
.sb-progress-circle[data-size="lg"] .sb-pc-value { font: 500 var(--display-lg) var(--font); }
.sb-progress-circle:is([data-size="md"], [data-size="lg"]) .sb-pc-caption { font: 500 var(--text-sm) var(--font); }

@media (prefers-reduced-motion: reduce) {
  .sb-progress-fill, .sb-progress-label, .sb-pc-line { transition: none; }
}
`;

  let uid = 0;
  const LABELS = [['none', 'False'], ['right', 'Right'], ['bottom', 'Bottom'], ['top-floating', 'Top floating'], ['bottom-floating', 'Bottom floating']];
  const SIZES = [['xxs', 'xxs'], ['xs', 'xs'], ['sm', 'sm'], ['md', 'md'], ['lg', 'lg']];
  const aria = (v, name, labelledby) =>
    `role="progressbar" ${labelledby ? `aria-labelledby="${labelledby}"` : `aria-label="${esc(name)}"`} aria-valuenow="${v}" aria-valuemin="0" aria-valuemax="100" style="--value: ${v}"`;

  function bar({ value = 40, label = 'right', name = 'Unggah dokumen klaim', id } = {}) {
    const v = Math.round(+value);
    const lines = [`<div class="sb-progress"${label !== 'none' ? ` data-label="${label}"` : ''}${id ? ` id="${id}"` : ''} ${aria(v, name)}>`, '  <div class="sb-progress-track"><div class="sb-progress-fill"></div></div>'];
    if (label !== 'none') lines.push(`  <span class="sb-progress-label">${v}%</span>`);
    lines.push('</div>');
    return lines.join('\n');
  }

  function circle({ value = 40, size = 'sm', shape = 'circle', caption = 'Klaim dianalisis', id } = {}) {
    const v = Math.round(+value);
    const key = id || `pc-${++uid}`;
    const half = shape === 'half';
    const svg = half
      ? `<svg viewBox="0 0 100 60" aria-hidden="true"><path class="sb-pc-track" d="M5 50a45 45 0 0 1 90 0"/><path class="sb-pc-line" d="M5 50a45 45 0 0 1 90 0" pathLength="100"/></svg>`
      : `<svg viewBox="0 0 100 100" aria-hidden="true"><circle class="sb-pc-track" cx="50" cy="50" r="45"/><circle class="sb-pc-line" cx="50" cy="50" r="45" pathLength="100"/></svg>`;
    const lines = [`<div class="sb-progress-circle" data-size="${size}"${half ? ' data-shape="half"' : ''} id="${key}" ${aria(v, caption, caption ? `${key}-cap` : '')}>`, `  ${svg}`, '  <div class="sb-pc-text">'];
    if (caption) lines.push(`    <span class="sb-pc-caption" id="${key}-cap">${esc(caption)}</span>`);
    lines.push(`    <span class="sb-pc-value">${v}%</span>`, '  </div>', '</div>');
    return lines.join('\n');
  }

  const demo = `<div class="progress-demo">
${bar({ value: 0, label: 'top-floating', name: 'Analisis AI', id: 'pd-bar' })}
${circle({ value: 0, size: 'xs', caption: 'Analisis AI', id: 'pd-circle' })}
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm" data-demo="progress">Mulai analisis</button>
</div>`;

  const anatomyBar = `<div class="sb-progress" data-label="right" role="progressbar" aria-label="Contoh" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="--value: 30">
  <div class="sb-progress-track" data-pin="1" data-pin-at="bottom"><div class="sb-progress-fill" data-pin="2"></div></div>
  <span class="sb-progress-label" data-pin="3">30%</span>
</div>`;
  const anatomyCircle = `<div class="sb-progress-circle" data-size="md" role="progressbar" aria-label="Contoh" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="--value: 40">
  <svg viewBox="0 0 100 100" aria-hidden="true"><circle class="sb-pc-track" cx="50" cy="50" r="45"/><circle class="sb-pc-line" cx="50" cy="50" r="45" pathLength="100"/></svg>
  <span class="anat-at" data-at="track" data-pin="4" data-pin-at="start"></span>
  <span class="anat-at" data-at="line" data-pin="5"></span>
  <div class="sb-pc-text">
    <span class="sb-pc-caption" data-pin="6">Klaim dianalisis</span>
    <span class="sb-pc-value" data-pin="7" data-pin-at="bottom">40%</span>
  </div>
</div>`;

  DS.components.push({
    slug: 'progress',
    name: 'Progress bar and circle',
    category: 'Components',
    status: 'In Figma and app',
    updated: '2026-10-06',
    description: 'Shows how far a measurable task or value has got: an upload, AI analysis steps, quota used. For work of unknown length use a spinner instead.',
    figma: [
      { label: 'Progress bar', url: `${FIGMA}1085-57382` },
      { label: 'Progress circle', url: `${FIGMA}1154-89981` },
    ],
    css: CSS,
    cssFile: 'progress.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'h3', id: 'playground-bar', text: 'Progress bar' },
          {
            type: 'playground',
            initial: { value: 40, label: 'right' },
            controls: [
              { key: 'value', label: 'Progress', type: 'range', min: 0, max: 100, step: 10 },
              { key: 'label', label: 'Label', type: 'segmented', options: LABELS },
            ],
            render: s => `<div class="field-stage">\n${bar(s)}\n</div>`,
          },
          { type: 'h3', id: 'playground-circle', text: 'Progress circle' },
          {
            type: 'playground',
            initial: { value: 40, size: 'sm', shape: 'circle', caption: true },
            controls: [
              { key: 'value', label: 'Progress', type: 'range', min: 0, max: 100, step: 10 },
              { key: 'size', label: 'Size', type: 'segmented', options: SIZES },
              { key: 'shape', label: 'Shape', type: 'segmented', options: [['circle', 'Circle'], ['half', 'Half circle']] },
              { key: 'caption', label: 'Label', type: 'toggle' },
            ],
            render: s => circle({ ...s, caption: s.caption ? 'Klaim dianalisis' : '', id: 'pg-pc' }),
          },
        ],
      },
      {
        id: 'usage',
        title: 'Usage',
        blocks: [
          {
            type: 'table',
            head: ['Use', 'Example', 'Component'],
            rows: [
              ['A task with a known end', 'Uploading claim documents, AI analysis step 4 of 10', 'Progress bar'],
              ['A share of a whole, as a headline number', 'Quota used, claims analysed this month', 'Progress circle'],
              ['The same, in a compact card or a dashboard row', 'Score next to a title', 'Half circle, or circle `xxs`'],
              ['Work of unknown length', 'Waiting for the server', 'Spinner, not a progress bar'],
            ],
          },
          {
            type: 'list',
            items: [
              'The value text is the rounded percentage ("40%"). Put the exact number in a tooltip if someone needs it.',
              'The colour stays `brand-600`. When the value is itself a status (AI confidence, risk), colour a badge next to it, not the bar.',
              'Changes animate over 300 ms with `--ease`. Never animate backwards, except a reset to 0 when a task restarts.',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: anatomyBar, code: false, layout: 'anat' },
          { type: 'example', html: anatomyCircle, code: false, layout: 'anat' },
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Bar track', '8 high, full width, `gray-100`, radius 4'],
              ['2', 'Bar fill', '`brand-600`, radius 4, min width 8 so 0 % still shows a dot'],
              ['3', 'Bar label', 'Text sm / Medium `gray-700`. Right: gap 12, the track shrinks to fit'],
              ['4', 'Circle track', '`gray-100`, stroke 10 % of the box (16 at 160 … 28 at 280; 6 at 64)'],
              ['5', 'Circle line', '`brand-600`, round caps. From 12 o\'clock, clockwise; the half circle runs left to right'],
              ['6', 'Caption', 'Optional label. Text xs / Medium `gray-500` (`md`, `lg`: Text sm), above the value; `xxs`: below the circle'],
              ['7', 'Value', 'Rounded percentage. Medium `gray-900`, Display xs to Display lg by size; `xxs`: Text sm `gray-700`'],
            ],
          },
        ],
      },
      {
        id: 'bar',
        title: 'Progress bar labels',
        blocks: [
          { type: 'example', html: `<div class="progress-stage is-stack">\n${LABELS.map(([k], i) => bar({ value: [30, 40, 50, 60, 70][i], label: k, id: `pb-${k}` })).join('\n')}\n</div>` },
          {
            type: 'table',
            head: ['Label', 'Spec'],
            rows: [
              ['False', 'Track only. Show the number somewhere else on the screen.'],
              ['Right', 'Text sm / Medium `gray-700`, 12 after the track.'],
              ['Bottom', 'Text sm / Medium `gray-700`, 8 below, right-aligned.'],
              ['Top floating / Bottom floating', 'Light tooltip (white, `shadow-lg`, Text xs / Semibold `gray-700`) following the end of the fill, 8 away. It slides from left-aligned at 0 % to right-aligned at 100 % so it never sticks out of the bar. The bar reserves 42 px for it.'],
            ],
          },
        ],
      },
      {
        id: 'circle',
        title: 'Progress circle sizes',
        blocks: [
          { type: 'example', html: `<div class="progress-stage is-row">\n${SIZES.map(([s]) => circle({ size: s, id: `pcs-${s}` })).join('\n')}\n</div>` },
          {
            type: 'table',
            head: ['Size', 'Box', 'Stroke', 'Value', 'Caption'],
            rows: [
              ['`xxs`', '64', '6', 'Text sm / Medium `gray-700`', 'Text xs / Medium `gray-500`, below the circle'],
              ['`xs`', '160', '16', 'Display xs 24 / Medium `gray-900`', 'Text xs / Medium `gray-500`, above the value'],
              ['`sm`', '200', '20', 'Display sm 30 / Medium `gray-900`', 'Text xs / Medium `gray-500`'],
              ['`md`', '240', '24', 'Display md 36 / Medium `gray-900`', 'Text sm / Medium `gray-500`'],
              ['`lg`', '280', '28', 'Display lg 48 / Medium `gray-900`', 'Text sm / Medium `gray-500`'],
            ],
          },
          { type: 'h3', id: 'half-circle', text: 'Half circle' },
          { type: 'p', text: 'A gauge that runs left to right. Its height is half the box plus the stroke.' },
          { type: 'example', html: `<div class="progress-stage is-row">\n${SIZES.map(([s]) => circle({ size: s, shape: 'half', id: `pch-${s}` })).join('\n')}\n</div>` },
        ],
      },
      {
        id: 'properties',
        title: 'Properties',
        blocks: [
          {
            type: 'table',
            head: ['Component', 'Property', 'Figma values', 'Code'],
            rows: [
              ['Progress bar', 'Progress', '0–100 % in steps of 10', '`--value` + `aria-valuenow` + label text (any integer works)'],
              ['Progress bar', 'Label', 'False, Right, Bottom, Top floating, Bottom floating', '`data-label`; leave out the label span for False'],
              ['Progress circle', 'Size', '`xxs`, `xs`, `sm`, `md`, `lg`', '`data-size`'],
              ['Progress circle', 'Shape', 'Circle, Half circle', '`data-shape="half"` + the half-circle SVG'],
              ['Progress circle', 'Label', 'True, False', '`<span class="sb-pc-caption">`, also the accessible name'],
            ],
          },
        ],
      },
      {
        id: 'updating',
        title: 'Updating the value',
        blocks: [
          { type: 'p', text: '`setProgress(el, value)` sets the fill, `aria-valuenow` and the visible percentage in one go; CSS animates the change. Run the demo.' },
          { type: 'example', html: demo, code: false },
          { type: 'code', lang: 'js', filename: 'progress.js', code: SCRIPT },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: `<div class="dd-form">\n<span class="sb-badge" data-size="sm" data-color="error">Risiko FWA tinggi</span>\n${circle({ value: 80, size: 'xxs', shape: 'half', caption: 'Skor', id: 'dd-pc1' })}\n</div>`, text: 'The score stays brand; the badge carries the status colour.' },
              { kind: 'dont', html: `<div class="field-stage">\n${bar({ value: 80, label: 'right', name: 'Risiko FWA', id: 'dd-pb2' }).replace('class="sb-progress-fill"', 'class="sb-progress-fill" style="background: var(--error-600)"')}\n</div>`, text: 'A red bar for a high-risk score. Red reads as "failed", not "80 % done".' },
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
              'Use `role="progressbar"` with `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`.',
              'Name it: `aria-labelledby` the caption, or `aria-label` when nothing visible names it.',
              'Children of a progressbar are presentational, so the SVG is `aria-hidden` and the percentage text is not read twice.',
              'Animations are turned off for `prefers-reduced-motion`.',
            ],
          },
          {
            type: 'table',
            head: ['Pair', 'Ratio', 'Needed', 'Result'],
            rows: [
              ['Fill `brand-600` on track `gray-100`', '4.59:1', '3:1', 'Passes'],
              ['Track `gray-100` on `white`', '1.10:1', '3:1', 'Below, but not needed: the fill carries the value'],
              ['Value `gray-900`, caption `gray-500` on `white`', '17.75:1, 4.97:1', '4.5:1', 'Passes'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css` and `progress.css`. Add `progress.js` to update the value from a task.' },
          { type: 'code', lang: 'css', filename: 'progress.css', code: CSS },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);

  // Docs demo only: step the demo bar and circle from 0 to 100.
  let timer;
  document.addEventListener('click', e => {
    const btn = e.target.closest?.('[data-demo="progress"]');
    if (!btn) return;
    const els = btn.parentElement.querySelectorAll('[role="progressbar"]');
    clearInterval(timer);
    let v = 0;
    els.forEach(el => setProgress(el, 0));
    timer = setInterval(() => {
      v += 10;
      els.forEach(el => setProgress(el, v));
      if (v >= 100) clearInterval(timer);
    }, 400);
  });
})();

// Slider. Source: DESIGN.md §6 Slider, Figma node 1086-534.
// Built on native <input type="range">: keyboard, touch and the slider role come from the browser.
(() => {
  const { esc } = DS;

  // ---- Script: keeps the two handles apart, then mirrors the values into the CSS positions, labels and aria-valuetext.
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
  const SCRIPT = `// Slider: keeps range handles apart and mirrors values into the fill, labels and aria-valuetext.
// Labels use the unit of the data: data-prefix="Rp " or data-suffix="%" on .sb-slider.
${[sliderText, sliderSync, sliderInput].map(f => f.toString().replace(/^  /gm, '')).join('\n')}
document.addEventListener('input', sliderInput);`;

  const CSS = `/* Slider, Codemasters Design System
   Needs tokens.css and slider.js. Native <input type="range">, one per handle.

   <div class="sb-slider" data-label="bottom" data-suffix="%" role="group" aria-label="Skor FWA"
        style="--lo: 20%; --hi: 80%">
     <div class="sb-slider-rail">
       <input class="sb-slider-input" type="range" min="0" max="100" value="20" aria-label="Skor minimum" aria-valuetext="20%">
       <input class="sb-slider-input" type="range" min="0" max="100" value="80" aria-label="Skor maksimum" aria-valuetext="80%">
       <output class="sb-slider-value" data-for="lo">20%</output>
       <output class="sb-slider-value" data-for="hi">80%</output>
     </div>
   </div>

   One input = single value (the range starts at 0); two = range.
   --lo / --hi    handle positions in %, written by slider.js (write them in the markup for the first paint)
   data-label     bottom | top-floating | bottom-floating (omit the outputs for False)
   data-state="hover" | "focus" on an input forces a handle state in static mockups and docs only. */

.sb-slider { --lo: 0%; --hi: 50%; width: 100%; }
/* Space for the labels, so they never cover the content around the slider. The slider reserves
   the room instead of letting the labels overhang. */
.sb-slider[data-label="bottom"] { padding-bottom: 32px; }          /* 8 gap + 24 label, from the handle's bottom edge */
.sb-slider[data-label="top-floating"] { padding-top: 44px; }       /* 34 label + 6 arrow + 4 gap */
.sb-slider[data-label="bottom-floating"] { padding-bottom: 44px; }

/* Rail: 24 high (the handle). Track 8 high, gray-200; selected range brand-600 between the handles. */
.sb-slider-rail { position: relative; height: 24px; }
.sb-slider-rail::before, .sb-slider-rail::after { content: ''; position: absolute; top: 8px; height: 8px; border-radius: var(--radius-sm); }
.sb-slider-rail::before { left: 0; right: 0; background: var(--gray-200); }
.sb-slider-rail::after { left: var(--lo); right: calc(100% - var(--hi)); background: var(--brand-600); }

/* Inputs: 24 px wider than the track so each handle centres on 0 % and 100 %. Only the handle takes the pointer. */
.sb-slider-input {
  --th-bg: var(--white); --th-bd: var(--brand-600); --th-shadow: var(--shadow-md); --th-sheen: var(--raised-sheen-light);
  position: absolute; z-index: 1; top: 0; left: -12px; width: calc(100% + 24px); height: 24px; margin: 0; /* above the rail's ::after, which paints last */
  background: none; appearance: none; -webkit-appearance: none; pointer-events: none;
}
.sb-slider-input:focus { outline: none; }
.sb-slider-input::-webkit-slider-runnable-track { height: 24px; background: none; }
.sb-slider-input::-moz-range-track { height: 24px; background: none; }
.sb-slider-input::-webkit-slider-thumb {
  box-sizing: border-box; width: 24px; height: 24px; border: 1px solid var(--th-bd); border-radius: var(--radius-full);
  background: var(--th-sheen) var(--th-bg); box-shadow: var(--th-shadow); cursor: grab; pointer-events: auto; appearance: none; -webkit-appearance: none;
  transition: background-color 150ms var(--ease), box-shadow 150ms var(--ease);
}
.sb-slider-input::-moz-range-thumb {
  box-sizing: border-box; width: 24px; height: 24px; border: 1px solid var(--th-bd); border-radius: var(--radius-full);
  background: var(--th-sheen) var(--th-bg); box-shadow: var(--th-shadow); cursor: grab; pointer-events: auto;
  transition: background-color 150ms var(--ease), box-shadow 150ms var(--ease);
}

/* Handle states. Focused and dragging share the ring. */
.sb-slider-input:is(:hover, [data-state="hover"]) { --th-bg: var(--brand-50); }
.sb-slider-input:is(:focus-visible, :active, [data-state="focus"]) { --th-shadow: var(--shadow-md), 0 0 0 4px var(--focus-ring); }
.sb-slider-input:active::-webkit-slider-thumb { cursor: grabbing; }
.sb-slider-input:active::-moz-range-thumb { cursor: grabbing; }
.sb-slider:has(:disabled) .sb-slider-rail::before { background: var(--gray-100); }
.sb-slider:has(:disabled) .sb-slider-rail::after { background: var(--gray-300); }
.sb-slider-input:disabled { --th-bg: var(--white); --th-bd: var(--gray-300); --th-shadow: none; --th-sheen: none; }
.sb-slider-input:disabled::-webkit-slider-thumb { cursor: not-allowed; }
.sb-slider-input:disabled::-moz-range-thumb { cursor: not-allowed; }

/* Labels: centred on each handle. Bottom: Text md / Medium gray-900, 8 below the handle.
   Floating: a Light tooltip (Tooltip, Light theme) with a 16 x 6 arrow pointing at the handle, 4 away. */
.sb-slider-value { --pos: var(--hi); position: absolute; left: var(--pos); translate: -50% 0; font: 500 var(--text-md) var(--font); color: var(--gray-900); white-space: nowrap; pointer-events: none; }
.sb-slider-value[data-for="lo"] { --pos: var(--lo); }
.sb-slider[data-label="bottom"] .sb-slider-value { top: 32px; }
.sb-slider[data-label$="floating"] .sb-slider-value { padding: 8px 12px; border-radius: var(--radius-md); background: var(--white); box-shadow: var(--shadow-lg); font: 600 var(--text-xs) var(--font); color: var(--gray-700); }
.sb-slider[data-label$="floating"] .sb-slider-value::after { content: ''; position: absolute; left: 50%; translate: -50% 0; width: 16px; height: 6px; background: var(--white); }
.sb-slider[data-label="top-floating"] .sb-slider-value { bottom: calc(100% + 10px); }
.sb-slider[data-label="top-floating"] .sb-slider-value::after { top: 100%; clip-path: polygon(0 0, 100% 0, 50% 100%); }
.sb-slider[data-label="bottom-floating"] .sb-slider-value { top: calc(100% + 10px); }
.sb-slider[data-label="bottom-floating"] .sb-slider-value::after { bottom: 100%; clip-path: polygon(50% 0, 100% 100%, 0 100%); }
.sb-slider:has(:disabled) .sb-slider-value { color: var(--gray-400); }

@media (prefers-reduced-motion: reduce) {
  .sb-slider-input::-webkit-slider-thumb { transition: none; }
  .sb-slider-input::-moz-range-thumb { transition: none; }
}
`;

  let uid = 0;
  const LABELS = [['none', 'False'], ['bottom', 'Bottom'], ['top-floating', 'Top floating'], ['bottom-floating', 'Bottom floating']];
  const STATES = [['default', 'Default'], ['hover', 'Hover'], ['focus', 'Focused'], ['disabled', 'Disabled']];
  const fmt = (prefix, suffix, v) => prefix + Number(v).toLocaleString('id-ID') + suffix;

  // values: [hi] for a single slider, [lo, hi] for a range.
  function slider({ values = [20, 80], min = 0, max = 100, step = 1, label = 'bottom', prefix = '', suffix = '%', state = 'default', name = 'Skor FWA', handles = ['Skor minimum', 'Skor maksimum'], labelledby, id } = {}) {
    const key = id || `sl-${++uid}`;
    const pct = v => `${((v - min) / (max - min)) * 100}%`;
    const lo = values.length > 1 ? pct(values[0]) : '0%';
    const hi = pct(values[values.length - 1]);
    const a = ['class="sb-slider"'];
    if (label !== 'none') a.push(`data-label="${label}"`);
    if (prefix) a.push(`data-prefix="${esc(prefix)}"`);
    if (suffix) a.push(`data-suffix="${esc(suffix)}"`);
    a.push('role="group"', labelledby ? `aria-labelledby="${labelledby}"` : `aria-label="${esc(name)}"`, `style="--lo: ${lo}; --hi: ${hi}"`);
    const names = values.length > 1 ? handles : [name];
    const inputs = values.map((v, n) => {
      const extra = state === 'disabled' ? ' disabled' : (state === 'hover' || state === 'focus') && n === values.length - 1 ? ` data-state="${state}"` : '';
      return `    <input class="sb-slider-input" type="range" min="${min}" max="${max}" step="${step}" value="${v}" aria-label="${esc(names[n])}" aria-valuetext="${esc(fmt(prefix, suffix, v))}"${extra}>`;
    });
    const outs = label === 'none' ? [] : values.map((v, n) => `    <output class="sb-slider-value" data-for="${values.length > 1 && n === 0 ? 'lo' : 'hi'}">${esc(fmt(prefix, suffix, v))}</output>`);
    return [`<div ${a.join(' ')} id="${key}">`, '  <div class="sb-slider-rail">', ...inputs, ...outs, '  </div>', '</div>'].join('\n');
  }
  const stage = html => `<div class="slider-stage">\n${html}\n</div>`;
  // A visible label above the slider (input-field.css), as in a filter panel.
  const field = (title, id, opts) => `<div class="sb-field">
  <span class="sb-field-label" id="${id}-label">${esc(title)}</span>
${slider({ ...opts, id, labelledby: `${id}-label` }).replace(/^/gm, '  ')}
</div>`;

  const RUPIAH = { min: 0, max: 50000000, step: 500000, prefix: 'Rp ', suffix: '', handles: ['Nominal minimum', 'Nominal maksimum'] };

  const anatomy = `<div class="sb-slider" data-label="bottom" data-suffix="%" style="--lo: 20%; --hi: 70%">
  <div class="sb-slider-rail">
    <span class="anat-at" data-at="track" data-pin="1" data-pin-at="start"></span>
    <input class="sb-slider-input" type="range" value="20" tabindex="-1" aria-label="Contoh minimum">
    <input class="sb-slider-input" type="range" value="70" tabindex="-1" aria-label="Contoh maksimum">
    <span class="anat-at" data-at="range" data-pin="2"></span>
    <span class="anat-at" data-at="handle" data-pin="3"></span>
    <output class="sb-slider-value" data-for="hi" data-pin="4" data-pin-at="bottom">70%</output>
  </div>
</div>`;

  DS.components.push({
    slug: 'slider',
    name: 'Slider',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-07',
    description: 'Picks a value or a range by dragging, when the position matters more than the exact number: a confidence threshold, an amount range.',
    css: CSS,
    cssFile: 'slider.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'The slider is live: drag a handle, or Tab to it and use the arrow keys, Page Up / Down, Home and End.' },
          {
            type: 'playground',
            initial: { mode: 'range', lo: 20, hi: 80, label: 'bottom', state: 'default' },
            controls: [
              { key: 'mode', label: 'Handles', type: 'segmented', options: [['range', 'Range (two)'], ['single', 'Single']] },
              { key: 'lo', label: 'Left control', type: 'range', min: 0, max: 75, step: 5 },
              { key: 'hi', label: 'Right control', type: 'range', min: 25, max: 100, step: 5 },
              { key: 'label', label: 'Label', type: 'segmented', options: LABELS },
              { key: 'state', label: 'State', type: 'segmented', options: STATES },
            ],
            render: s => {
              const lo = Math.min(+s.lo, +s.hi - 1);
              return stage(slider({ values: s.mode === 'single' ? [+s.hi] : [lo, +s.hi], label: s.label, state: s.state, id: 'pg-sl' }));
            },
          },
        ],
      },
      {
        id: 'usage',
        title: 'Usage',
        blocks: [
          {
            type: 'list',
            items: [
              'Use a slider when the position matters more than the exact number: a confidence threshold filter, an amount range.',
              'For exact values pair it with an Input field, or use the input alone.',
              'Labels show the value in the unit of the data ("Rp 5.000.000", "80%"), not always %.',
              'Two handles pick a range; they never cross and stay at least one step apart.',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: `<div class="slider-stage" inert>\n${anatomy}\n</div>`, code: false, layout: 'anat' },
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Track', '8 high, full width (320 in examples), `gray-200`, radius 4'],
              ['2', 'Selected range', '`brand-600`, radius 4, between the handles (from 0 for a single slider)'],
              ['3', 'Handle', '24 px circle, `white` raised (`raised-sheen-light`), 1 px `brand-600` border, `shadow-md`, centred on the value'],
              ['4', 'Label', 'Optional. Bottom: Text md / Medium `gray-900`, 8 below the handle. Floating: Light tooltip with an arrow, 4 from the handle'],
            ],
          },
        ],
      },
      {
        id: 'properties',
        title: 'Properties',
        blocks: [
          {
            type: 'table',
            head: ['Property', 'Values', 'Code'],
            rows: [
              ['Left control', '0 % to 75 %', 'First `<input type="range">` value; leave it out for a single slider'],
              ['Right control', '25 % to 100 %', 'Last `<input type="range">` value'],
              ['Label', 'False, Bottom, Top floating, Bottom floating', '`data-label` + one `<output class="sb-slider-value">` per handle'],
              ['State', 'None in the component set; specified in DESIGN.md (Default, Hover, Focused, Disabled)', '`:hover`, `:focus-visible` / `:active`, `disabled`. Static mockups only: `data-state` on the input'],
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Examples',
        blocks: [
          { type: 'h3', id: 'example-single', text: 'Single value' },
          { type: 'p', text: 'A threshold filter: show claims with an FWA score of at least this value.' },
          { type: 'example', html: stage(field('Skor FWA minimum', 'ex-single', { values: [70], step: 5, name: 'Skor FWA minimum' })) },
          { type: 'h3', id: 'example-range', text: 'Range in Rupiah' },
          { type: 'p', text: 'The step is Rp 500.000; labels and `aria-valuetext` use the Rupiah format.' },
          { type: 'example', html: stage(field('Nominal klaim', 'ex-range', { ...RUPIAH, values: [5000000, 20000000] })) },
        ],
      },
      {
        id: 'labels',
        title: 'Labels',
        blocks: [
          { type: 'example', html: `<div class="slider-stage is-stack">\n${LABELS.map(([k], i) => slider({ values: [25, 75], label: k, id: `lb-${i}` })).join('\n')}\n</div>`, code: false },
          {
            type: 'table',
            head: ['Label', 'Spec'],
            rows: [
              ['False', 'Handles only. Show the values elsewhere, e.g. in inputs next to the slider.'],
              ['Bottom', 'Text md / Medium `gray-900`, centred under each handle, 8 below the handle (16 below the track). The slider is 56 high.'],
              ['Top floating / Bottom floating', 'Light tooltip (white, padding `8 12`, Text xs / Semibold `gray-700`, `shadow-lg`) with a 16 × 6 arrow pointing at the handle, 4 away. Centred above / below each handle. The slider reserves 44 px for it.'],
            ],
          },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'example', html: `<div class="slider-stage is-stack" inert>\n${STATES.map(([s, l]) => `<div class="slider-state"><span class="mx">${l}</span>\n${slider({ values: [25, 75], label: 'none', state: s, id: `st-${s}` })}</div>`).join('\n')}\n</div>`, code: false },
          {
            type: 'table',
            head: ['State (handle)', 'Spec'],
            rows: [
              ['Hover', '`brand-50` fill'],
              ['Focused / dragging', '`0 0 0 4px focus-ring` ring + `shadow-md`'],
              ['Disabled', 'Track `gray-100`, range `gray-300`, handle border `gray-300`, no shadow'],
            ],
          },
        ],
      },
      {
        id: 'keyboard',
        title: 'Keyboard',
        blocks: [
          {
            type: 'table',
            head: ['Key', 'Action'],
            rows: [
              ['← → (↓ ↑)', 'One step'],
              ['Page Up / Page Down', 'A big jump: 10 % of the range in Chrome (checked); other browsers set their own size'],
              ['Home / End', 'Minimum / maximum (a range handle stops one step from the other)'],
              ['Tab', 'Moves between the handles'],
            ],
          },
          { type: 'p', text: 'All of this comes from the native range input; `slider.js` only stops the handles from crossing. If Page Up / Down must be exactly 10 % everywhere, add a keydown handler for those two keys.' },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(slider({ ...RUPIAH, values: [5000000, 20000000], id: 'dd-sl1' })), text: 'Labels in the unit of the data.' },
              { kind: 'dont', html: stage(slider({ values: [10, 40], id: 'dd-sl2', handles: ['Minimum', 'Maksimum'] })), text: 'A Rupiah range shown as 10 % – 40 %. The user has to do the maths.' },
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
              'Each handle is a native range input, so it has `role="slider"` with `aria-valuenow`, `aria-valuemin` and `aria-valuemax` built in.',
              'Give every handle its own `aria-label` ("Nominal minimum", "Nominal maksimum") and wrap them in `role="group"` labelled by the visible title.',
              '`aria-valuetext` carries the formatted value ("Rp 5.000.000"), so screen readers do not read a bare number.',
              'The track and handle are 24 px high, the minimum target size.',
            ],
          },
          {
            type: 'table',
            head: ['Pair', 'Ratio', 'Needed', 'Result'],
            rows: [
              ['Range `brand-600` on track `gray-200`', '4.28:1', '3:1', 'Passes'],
              ['Handle border `brand-600` on `white`', '5.06:1', '3:1', 'Passes'],
              ['Track `gray-200` on `white`', '1.18:1', '3:1', 'Below, but the handles and range carry the value'],
              ['Bottom label `gray-900` on `white`', '17.75:1', '4.5:1', 'Passes'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `slider.css` and `slider.js`. Labelled sliders in a form also use `input-field.css` for the title.' },
          { type: 'code', lang: 'css', filename: 'slider.css', code: CSS },
          { type: 'h3', id: 'slider-script', text: 'Script' },
          { type: 'code', lang: 'js', filename: 'slider.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('input', sliderInput);
})();

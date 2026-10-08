// Tooltip and help icon. Source: DESIGN.md §6 Tooltip and help icon, Figma nodes 1052-489 (Tooltip), 1054-13 (Help icon).
(() => {
  const { esc, icon } = DS;

  // ---- Esc closes the open tooltip (WCAG 1.4.13) until the pointer leaves or focus moves on.
  function tooltipKeydown(e) {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.sb-tooltip-wrap:is(:hover, :focus-within)').forEach(w => w.setAttribute('data-dismissed', ''));
  }
  function tooltipReset(e) {
    const wrap = e.type === 'mouseleave' ? e.target : e.target.closest?.('.sb-tooltip-wrap');
    if (wrap?.classList?.contains('sb-tooltip-wrap')) wrap.removeAttribute('data-dismissed');
  }
  const SCRIPT = `// Tooltip: Esc closes it until the pointer leaves or focus moves on. Showing and hiding is CSS.
${tooltipKeydown.toString().replace(/^  /gm, '')}
${tooltipReset.toString().replace(/^  /gm, '')}
document.addEventListener('keydown', tooltipKeydown);
document.addEventListener('mouseleave', tooltipReset, true); // mouseleave does not bubble: listen in the capture phase
document.addEventListener('focusout', tooltipReset);`;

  const CSS = `/* Tooltip and help icon, Codemasters Design System
   Needs tokens.css; tooltip.js only for Esc to close.

   <span class="sb-tooltip-wrap">
     <button class="sb-help" type="button" aria-label="Info" aria-describedby="polis-tip">…help-circle…</button>
     <span class="sb-tooltip" role="tooltip" id="polis-tip">
       <span class="sb-tooltip-title">Nomor polis</span>
       <span class="sb-tooltip-text">Nomor 10 digit di kartu peserta.</span>
     </span>
   </span>

   Opens on hover (after ~300 ms) and at once on keyboard focus; closes on mouse leave, blur and Esc.
   data-theme   dark (default) | light (on dark surfaces such as the sidebar)
   data-arrow   bottom-center (default: tooltip above) | bottom-left | bottom-right | top-center (below) |
                left (tooltip on the right) | right (tooltip on the left) | none (above, no arrow)
                The arrow side names where the arrow sits. Pick the one that keeps the tooltip on screen.
   data-state="open" on .sb-tooltip-wrap forces it open in static mockups and docs only. */

.sb-tooltip-wrap { position: relative; display: inline-flex; }

.sb-tooltip {
  --tip-bg: var(--gray-900); --tip-title: var(--white); --tip-text: var(--white);
  --tip-gap: 10px; /* 6 px arrow + 4 px to the trigger */
  position: absolute; z-index: 20; bottom: calc(100% + var(--tip-gap)); left: 50%; translate: -50% 0;
  display: grid; gap: 4px; box-sizing: border-box; width: max-content; max-width: min(320px, calc(100vw - 32px));
  padding: 8px 12px; border-radius: var(--radius-md); background: var(--tip-bg); box-shadow: var(--shadow-lg);
  font: 400 var(--text-xs) var(--font); color: var(--tip-text); text-align: start; white-space: normal;
  visibility: hidden; opacity: 0; transition: opacity 150ms var(--ease), visibility 0s linear 150ms;
}
.sb-tooltip[data-theme="light"] { --tip-bg: var(--white); --tip-title: var(--gray-700); --tip-text: var(--gray-500); }
.sb-tooltip:has(.sb-tooltip-text) { padding: 12px; }
.sb-tooltip-title { font-weight: 600; color: var(--tip-title); }
.sb-tooltip-text { color: var(--tip-text); }

/* Open: hover waits ~300 ms, keyboard focus opens at once. The 150 ms fade-out lets the pointer cross onto the tooltip. */
.sb-tooltip-wrap:is(:hover, :has(:focus-visible), [data-state="open"]) > .sb-tooltip { visibility: visible; opacity: 1; transition: opacity 150ms var(--ease); }
.sb-tooltip-wrap:hover:not(:has(:focus-visible), [data-state="open"]) > .sb-tooltip { transition-delay: 300ms; }
.sb-tooltip-wrap[data-dismissed] > .sb-tooltip { visibility: hidden; opacity: 0; }

/* Arrow: 16 x 6 in the fill colour. Corner arrows sit 14 from the edge (centre of a 28 px corner). */
.sb-tooltip::after { content: ''; position: absolute; top: 100%; left: 50%; translate: -50% 0; width: 16px; height: 6px; background: var(--tip-bg); clip-path: polygon(0 0, 100% 0, 50% 100%); }
.sb-tooltip[data-arrow="none"] { --tip-gap: 4px; }
.sb-tooltip[data-arrow="none"]::after { content: none; }
.sb-tooltip[data-arrow="bottom-left"] { translate: -14px 0; }
.sb-tooltip[data-arrow="bottom-left"]::after { left: 14px; }
.sb-tooltip[data-arrow="bottom-right"] { left: auto; right: 50%; translate: 14px 0; }
.sb-tooltip[data-arrow="bottom-right"]::after { left: auto; right: 14px; translate: 50% 0; }
.sb-tooltip[data-arrow="top-center"] { bottom: auto; top: calc(100% + var(--tip-gap)); }
.sb-tooltip[data-arrow="top-center"]::after { top: auto; bottom: 100%; clip-path: polygon(50% 0, 100% 100%, 0 100%); }
.sb-tooltip:is([data-arrow="left"], [data-arrow="right"]) { bottom: auto; top: 50%; translate: 0 -50%; }
.sb-tooltip:is([data-arrow="left"], [data-arrow="right"])::after { top: 50%; translate: 0 -50%; width: 6px; height: 16px; }
.sb-tooltip[data-arrow="left"] { left: calc(100% + var(--tip-gap)); }
.sb-tooltip[data-arrow="left"]::after { left: auto; right: 100%; clip-path: polygon(100% 0, 100% 100%, 0 50%); }
.sb-tooltip[data-arrow="right"] { left: auto; right: calc(100% + var(--tip-gap)); }
.sb-tooltip[data-arrow="right"]::after { left: 100%; clip-path: polygon(0 0, 100% 50%, 0 100%); }

/* Help icon: 16 px help-circle, gray-400; hover and open gray-500. A real button with the global focus outline. */
.sb-help { display: inline-flex; flex: none; margin: 0; padding: 0; border: 0; border-radius: var(--radius-full); background: none; color: var(--gray-400); cursor: help; }
.sb-help > svg { width: 16px; height: 16px; }
.sb-help:hover, .sb-help:focus-visible, .sb-tooltip-wrap[data-state="open"] > .sb-help { color: var(--gray-500); }
.sb-help:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 2px; }
/* After a label: label + help icon on one line, 4 apart. */
.sb-help-row { display: inline-flex; align-items: center; gap: 4px; }

@media (prefers-reduced-motion: reduce) {
  .sb-tooltip { transition: none; }
}
`;

  let uid = 0;
  const ARROWS = [['bottom-center', 'Bottom center'], ['bottom-left', 'Bottom left'], ['bottom-right', 'Bottom right'], ['top-center', 'Top center'], ['left', 'Left'], ['right', 'Right'], ['none', 'None']];
  const TEXT = 'Nomor 10 digit di kartu peserta atau di halaman pertama polis asuransi.';

  function tip({ title = 'Nomor polis', text = '', theme = 'dark', arrow = 'bottom-center', id, extra = '' } = {}) {
    const a = ['class="sb-tooltip"', 'role="tooltip"', `id="${id}"`];
    if (theme === 'light') a.push('data-theme="light"');
    if (arrow !== 'bottom-center') a.push(`data-arrow="${arrow}"`);
    if (extra) a.push(extra);
    const lines = [`<span ${a.join(' ')}>`, `  <span class="sb-tooltip-title">${esc(title)}</span>`];
    if (text) lines.push(`  <span class="sb-tooltip-text">${esc(text)}</span>`);
    lines.push('</span>');
    return lines.join('\n');
  }
  const indent = (html, n = 2) => html.replace(/^/gm, ' '.repeat(n));

  // A trigger (help icon by default) with its tooltip. open = forced open for docs.
  function help({ open = false, id, trigger, label = 'Info', ...t } = {}) {
    const key = id || `tip-${++uid}`;
    const btn = trigger ? trigger(`${key}-tip`) : `<button class="sb-help" type="button" aria-label="${esc(label)}" aria-describedby="${key}-tip">${icon('help-circle')}</button>`;
    return [`<span class="sb-tooltip-wrap"${open ? ' data-state="open"' : ''}>`, `  ${btn}`, indent(tip({ ...t, id: `${key}-tip` })), '</span>'].join('\n');
  }

  const gallery = (theme = 'dark') => `<div class="tip-grid" inert>
${ARROWS.map(([k, l]) => `<figure class="tip-cell">${help({ open: true, arrow: k, theme, title: 'Info polis', id: `ga-${theme}-${k}` })}<figcaption class="mx">${l}</figcaption></figure>`).join('\n')}
</div>`;

  const anatomy = `<span class="anat-tip" data-pin="1" data-pin-at="edge"><span class="sb-tooltip" role="tooltip" data-arrow="bottom-left">
  <span class="sb-tooltip-title"><span data-pin="2">Nomor polis</span></span>
  <span class="sb-tooltip-text" data-pin="3" data-pin-at="start">${esc(TEXT)}</span>
  <span class="anat-arrow" data-pin="4" data-pin-at="bottom"></span>
</span></span>`;

  const iconButton = help({
    id: 'tb-dl',
    title: 'Unduh laporan',
    trigger: tid => `<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" data-icon="only" aria-label="Unduh laporan" aria-describedby="${tid}">${icon('download')}</button>`,
  });

  const labelRow = `<div class="field-stage">
<div class="sb-field">
  <div class="sb-help-row">
    <label class="sb-field-label" for="tp-polis">Nomor polis</label>
${indent(help({ id: 'tp-help', text: TEXT, arrow: 'bottom-left' }), 4)}
  </div>
  <div class="sb-input">
    <input id="tp-polis" type="text" placeholder="10 digit nomor polis">
  </div>
</div>
</div>`;

  DS.components.push({
    slug: 'tooltip',
    name: 'Tooltip and help icon',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-06',
    description: 'A small label that appears on hover or keyboard focus to explain an element or show text that was cut off. The help icon is the standard trigger after a label or inside an input.',
    css: CSS,
    cssFile: 'tooltip.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Turn Open off, then hover the help icon or Tab to it. Press Esc to close it.' },
          {
            type: 'playground',
            initial: { theme: 'dark', text: true, arrow: 'bottom-center', open: true },
            controls: [
              { key: 'theme', label: 'Theme', type: 'segmented', options: [['dark', 'Dark'], ['light', 'Light']] },
              { key: 'arrow', label: 'Arrow', type: 'segmented', options: ARROWS },
              { key: 'text', label: 'Supporting text', type: 'toggle' },
              { key: 'open', label: 'Open', type: 'toggle' },
            ],
            render: s => help({ ...s, text: s.text ? TEXT : '', id: 'pg-tip' }),
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
              'A tooltip only adds a short explanation, or the full text of something truncated. Never put essential information or actions in it: it is invisible on touch screens and easy to miss.',
              'Icon-only buttons and collapsed sidebar items always get a title-only tooltip with their label.',
              'Use the help icon after a field label (or inside the input, see Input field) when a term needs one sentence of explanation.',
              'Default to the tooltip above the trigger. Pick another arrow only when the tooltip would leave the viewport.',
              'Chart tooltips are a different component: a white card, see Data display.',
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
              ['1', 'Container', 'Radius 8, `shadow-lg`. Padding `8 12` title only, `12` with supporting text. Max width 320.'],
              ['2', 'Title', 'Text xs / Semibold. Dark: `white`; Light: `gray-700`.'],
              ['3', 'Supporting text', 'Optional. Text xs / Regular, 4 below the title. Dark: `white`; Light: `gray-500`.'],
              ['4', 'Arrow', '16 × 6 in the fill colour, 4 px from the trigger. Corner arrows sit 14 from the edge.'],
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
            head: ['Component', 'Property', 'Values', 'Code'],
            rows: [
              ['Tooltip', 'Theme', 'Dark, Light', '`data-theme="light"`; Dark is the default'],
              ['Tooltip', 'Supporting text', 'True, False', '`<span class="sb-tooltip-text">`'],
              ['Tooltip', 'Arrow', 'None, Top center, Bottom center, Bottom left, Bottom right, Left, Right', '`data-arrow`; Bottom center is the default'],
              ['Help icon', 'Open', 'True, False', '`:hover`, `:focus-visible`. Static mockups only: `data-state="open"` on the wrap'],
              ['Help icon', 'Tooltip', 'Top no arrow, Top arrow, Top left, Top right, Bottom, Left, Right', '`data-arrow`: `none`, `bottom-center`, `bottom-left`, `bottom-right`, `top-center`, `right`, `left`'],
            ],
          },
        ],
      },
      {
        id: 'arrows',
        title: 'Arrow positions',
        blocks: [
          { type: 'p', text: 'The arrow points at the trigger. Bottom center (tooltip above) is the default.' },
          { type: 'example', html: gallery(), code: false },
        ],
      },
      {
        id: 'themes',
        title: 'Themes',
        blocks: [
          {
            type: 'table',
            head: ['Theme', 'Fill', 'Title', 'Supporting text'],
            rows: [
              ['Dark (default)', '`gray-900`', '`white`', '`white`'],
              ['Light, on dark surfaces such as the sidebar', '`white`', '`gray-700`', '`gray-500`'],
            ],
          },
          { type: 'h3', id: 'theme-dark', text: 'Dark' },
          { type: 'example', html: `<div class="tip-stage">\n${help({ open: true, text: TEXT, id: 'th-d' })}\n</div>`, code: false },
          { type: 'h3', id: 'theme-light', text: 'Light' },
          { type: 'example', html: `<div class="tip-stage is-dark">\n${help({ open: true, text: TEXT, theme: 'light', id: 'th-l' })}\n</div>`, code: false },
        ],
      },
      {
        id: 'help-icon',
        title: 'Help icon',
        blocks: [
          { type: 'p', text: 'A 16 px `help-circle` after a field label (needs `input-field.css` here), `gray-400` (hover and open `gray-500`). It is a button, so it takes keyboard focus and shows the global focus outline. Hover it or Tab to it.' },
          { type: 'example', html: labelRow },
          { type: 'p', text: 'Inside an input the same icon sits at the end of the field; see Input field.' },
        ],
      },
      {
        id: 'icon-button',
        title: 'Icon-only buttons',
        blocks: [
          { type: 'p', text: 'Icon-only buttons get a title-only tooltip with their label. Hover or focus the button.' },
          { type: 'example', html: iconButton },
        ],
      },
      {
        id: 'behaviour',
        title: 'Behaviour',
        blocks: [
          {
            type: 'table',
            head: ['Event', 'Result'],
            rows: [
              ['Pointer enters the trigger', 'Opens after ~300 ms, fades in 150 ms'],
              ['Keyboard focus on the trigger', 'Opens at once'],
              ['Pointer moves onto the tooltip', 'Stays open (the 150 ms fade-out covers the 10 px gap)'],
              ['Pointer leaves, blur', 'Closes'],
              ['Esc', 'Closes until the pointer leaves or focus moves on (`tooltip.js`)'],
            ],
          },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: `<div class="tip-stage is-short">\n${help({ open: true, title: 'Nomor 10 digit di kartu peserta', id: 'dd-t1' })}\n</div>`, text: 'One short sentence that explains a term.' },
              {
                kind: 'dont',
                html: `<div class="tip-stage is-short">\n${help({ open: true, title: 'Klaim ditolak', text: 'Dokumen kurang. Unggah ulang sebelum 12 Okt.', id: 'dd-t2' })}\n</div>`,
                text: 'A rejection and a deadline in a tooltip. Essential information belongs on the page; touch users never see it.',
              },
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
              'The tooltip has `role="tooltip"` and an `id`; the trigger points at it with `aria-describedby`.',
              'The help icon is a `<button>` with `aria-label="Info"`, so it opens on keyboard focus, not only on hover.',
              'Esc closes the tooltip without moving focus, and the pointer can move onto it (WCAG 1.4.13).',
              'Nothing in a tooltip is focusable: no links or buttons inside.',
            ],
          },
          {
            type: 'table',
            head: ['Pair', 'Ratio', 'Needed', 'Result'],
            rows: [
              ['Dark: `white` on `gray-900`', '17.75:1', '4.5:1', 'Passes'],
              ['Light: title `gray-700`, text `gray-500` on `white`', '10.46:1, 4.97:1', '4.5:1', 'Passes'],
              ['Help icon `gray-400` on `white`', '2.58:1', '3:1', '**Fails**'],
            ],
          },
          { type: 'note', tone: 'warning', text: 'The help icon in `gray-400` is 2.58:1, below 3:1 for meaningful icons (same as the WYSIWYG toolbar). `gray-500` (4.97:1) passes and is already its hover colour. Decision for the design team.' },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css` and `tooltip.css`. Showing and hiding is CSS; add `tooltip.js` so Esc closes it.' },
          { type: 'code', lang: 'css', filename: 'tooltip.css', code: CSS },
          { type: 'h3', id: 'tooltip-script', text: 'Esc script' },
          { type: 'code', lang: 'js', filename: 'tooltip.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('keydown', tooltipKeydown);
  document.addEventListener('mouseleave', tooltipReset, true);
  document.addEventListener('focusout', tooltipReset);
})();

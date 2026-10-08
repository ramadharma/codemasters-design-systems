// Foundations: Shadows and blur. Source: DESIGN.md §4.5–4.6, Figma Foundations → Shadows & blurs.
(() => {
  const { tokens, tokenGroupCss } = DS;
  const SHADOWS = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];
  const BLURS = [['sm', 8], ['md', 16], ['lg', 24], ['xl', 40]];

  const shadowCards = `<div class="f-shadows">
${SHADOWS.map(s => `<button class="f-shadow" type="button" style="box-shadow: var(--shadow-${s})" data-copy-text="var(--shadow-${s})" aria-label="Copy var(--shadow-${s})"><strong>shadow-${s}</strong><span>Shadow/${s}</span></button>`).join('\n')}
</div>`;

  const layers = `<div class="f-layers">
  <div class="f-layer is-card"><span class="mx">Card · no shadow, gray-300 border</span>
    <div class="f-layer is-input"><span class="mx">Input · shadow-xs</span></div>
    <div class="f-layer is-menu"><span class="mx">Menu · shadow-lg</span></div>
  </div>
</div>`;

  const blurs = (tone = 'light') => `<div class="f-blur-stage">
${BLURS.map(([b]) => `<div class="f-blur is-${tone}" style="backdrop-filter: var(--blur-${b}); -webkit-backdrop-filter: var(--blur-${b})"><strong>blur-${b}</strong><span>${tokens[`--blur-${b}`]}</span></div>`).join('\n')}
</div>`;

  DS.foundations.push({
    slug: 'shadows',
    name: 'Shadows & Blur',
    category: 'Foundations',
    status: 'Ready',
    updated: '2026-10-07',
    description: 'Seven shadows and four background blurs that put elements on the z-axis. The higher the layer, the bigger the shadow.',
    sections: [
      {
        id: 'shadows',
        title: 'Shadows',
        blocks: [
          { type: 'p', text: 'All shadows are `gray-900` (`16, 24, 40`) at low opacity. Use only these seven; never write a custom shadow. Click one to copy its token.' },
          { type: 'example', html: shadowCards, code: false },
          {
            type: 'table',
            head: ['Token', 'CSS value'],
            rows: SHADOWS.map(s => [`\`--shadow-${s}\``, `\`${tokens[`--shadow-${s}`]}\``]),
          },
        ],
      },
      {
        id: 'elevation',
        title: 'Elevation in the app',
        blocks: [
          { type: 'example', html: layers, code: false },
          {
            type: 'table',
            head: ['Layer, lowest to highest', 'Shadow'],
            rows: [
              ['Page, cards, inner boxes', 'None. Cards have only a `1px solid gray-300` border'],
              ['Buttons, inputs', '`shadow-xs`'],
              ['Menus, popovers, dropdown panels, toast, dialogs', '`shadow-lg`'],
              ['Floating chart tooltip', '`shadow-lg` drawn as a filter so it follows the arrow shape'],
            ],
          },
          { type: 'code', lang: 'css', filename: 'Chart tooltip', code: '.chart-tip { filter: drop-shadow(0 12px 8px rgba(16,24,40,.08)) drop-shadow(0 4px 3px rgba(16,24,40,.03)); }' },
          { type: 'p', text: '`sm`, `md`, `xl`, `2xl` and `3xl` are not used in the app yet (Slider handles use `md`). When a new layer needs one, keep the order: an element that sits above another gets the bigger shadow.' },
        ],
      },
      {
        id: 'blur',
        title: 'Background blur',
        blocks: [
          { type: 'p', text: 'A background blur also lifts an element: it blurs what is behind a translucent surface. Use it as `backdrop-filter`.' },
          { type: 'h3', id: 'blur-light', text: 'Light' },
          { type: 'example', html: blurs('light'), code: false },
          { type: 'h3', id: 'blur-dark', text: 'Dark' },
          { type: 'example', html: blurs('dark'), code: false },
          {
            type: 'table',
            head: ['Token', 'CSS value'],
            rows: BLURS.map(([b]) => [`\`--blur-${b}\``, `\`${tokens[`--blur-${b}`]}\``]),
          },
          {
            type: 'list',
            items: [
              'A blur needs a translucent fill to show: **light** `rgba(255,255,255,.6)` (white 60 %) with `gray-900` text, or **dark** `rgba(52,64,84,.6)` (`gray-700` 60 %) with white text.',
              'Use blur sparingly, as an accent: scrims behind dialogs, overlays on images or charts. Never put body text or tables on a blurred surface without a fill.',
              'The app does not use blur yet; the modal scrim is a flat `rgba(0,0,0,.2)`.',
            ],
          },
          { type: 'code', lang: 'css', filename: 'Usage', code: '.scrim { background: rgba(255,255,255,.6); backdrop-filter: var(--blur-md); }' },
        ],
      },
      {
        id: 'raised',
        title: 'Raised controls',
        blocks: [
          { type: 'p', text: 'Pressable controls get a little depth, so they read as buttons: a sheen over the fill (lighter top, darker bottom) and, on solid fills, a 1 px light line inside the top edge. The sheen is translucent, so one token works over any fill: brand, error or another company\'s blue.' },
          { type: 'example', html: `<div class="f-raised">\n  <span class="f-raised-tile" style="background: var(--raised-sheen) var(--brand-600); border-color: var(--brand-700); box-shadow: var(--raised-highlight), var(--shadow-xs); color: var(--white)">raised-sheen</span>\n  <span class="f-raised-tile" style="background: var(--raised-sheen-light) var(--white); box-shadow: var(--shadow-xs)">raised-sheen-light</span>\n  <span class="f-raised-tile" style="background: var(--brand-600); border-color: var(--brand-600); color: var(--white)">flat</span>\n</div>`, code: false },
          {
            type: 'table',
            head: ['Token', 'Use on', 'CSS value'],
            rows: [
              ['`--raised-sheen`', 'Solid fills: Primary and Destructive Primary buttons, selected Folder tab, Social button Brand theme', `\`${tokens['--raised-sheen']}\``],
              ['`--raised-sheen-light`', 'White controls: Secondary gray button, Button group segments, selected Segmented tab, Social buttons, Toggle knob, Slider handle, Avatar add button', `\`${tokens['--raised-sheen-light']}\``],
              ['`--raised-highlight`', 'With `--raised-sheen`, first in `box-shadow`', `\`${tokens['--raised-highlight']}\``],
              ['`--pressed-inset`', 'The opposite of raised: the chosen Button group segment, on a `gray-100` fill', `\`${tokens['--pressed-inset']}\``],
            ],
          },
          {
            type: 'list',
            items: [
              'Write it as `background: var(--raised-sheen) var(--brand-600)`. On hover change only `background-color`, so the sheen stays.',
              'A solid raised control takes a border one step darker than its fill (`brand-600` fill, `brand-700` border).',
              'Flat: inputs, badges, cards, Secondary color, Tertiary, Link, chosen Button group segments (pressed in with `--pressed-inset`) and every Disabled state (the default look at 50 % opacity).',
              'Never on cards, panels or large surfaces. It is for controls only.',
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
              { kind: 'do', html: '<div class="f-dd-box" style="box-shadow: var(--shadow-lg)">Menu</div>', text: 'A menu on `shadow-lg`, the token for floating panels.' },
              { kind: 'dont', html: '<div class="f-dd-box" style="box-shadow: 0 6px 18px rgba(57,102,224,.35)">Menu</div>', text: 'A custom blue glow. Shadows are always gray-900 and always from the set.' },
            ],
          },
        ],
      },
      { id: 'tokens', title: 'Tokens', blocks: [{ type: 'code', lang: 'css', filename: 'tokens.css (shadows and blur)', code: tokenGroupCss('Shadows', 'Raised controls', 'Background blur') }] },
    ],
  });
})();

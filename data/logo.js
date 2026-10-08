// Foundations: Logo and brand architecture. Codemasters is the parent company of Sembuh AI and Flipmaster;
// all three share this system and differ only in their blue scale. Logo files live in assets/brand/.
(() => {
  const { meta } = DS;
  const SRC = {
    codemasters: 'assets/brand/codemasters-logo.png',
    sembuh: 'assets/brand/sembuh-logo.png',
    sembuhWhite: 'assets/brand/sembuh-logo-white.png',
  };

  const CSS = `/* Logo lockup, Codemasters Design System. Needs tokens.css.
   A company logo with the "Powered by Codemasters" endorsement underneath.

   <div class="sb-lockup">
     <img class="sb-lockup-main" src="sembuh-logo.svg" alt="Sembuh AI">
     <p class="sb-lockup-endorse">Powered by <img src="codemasters-logo.svg" alt="Codemasters"></p>
   </div>

   --lockup-h   height of the company logo (default 40px). The Codemasters logo is 40 % of it. */

.sb-lockup { --lockup-h: 40px; display: inline-grid; justify-items: start; gap: calc(var(--lockup-h) * .2); }
.sb-lockup-main { display: block; width: auto; max-width: 100%; height: var(--lockup-h); object-fit: contain; object-position: left; }
.sb-lockup-endorse { display: inline-flex; align-items: center; gap: 8px; margin: 0; font: 500 var(--text-xs) var(--font); color: var(--gray-500); white-space: nowrap; }
.sb-lockup-endorse img { display: block; width: auto; height: calc(var(--lockup-h) * .4); }
`;

  const tile = (html, bg = 'white', label = '') => `<figure class="f-logo-tile" data-bg="${bg}">${html}${label ? `<figcaption class="mx">${label}</figcaption>` : ''}</figure>`;
  const img = (src, alt, h = 40) => `<img src="${src}" alt="${alt}" style="height: ${h}px">`;
  const lockup = (h = 40) => `<div class="sb-lockup" style="--lockup-h: ${h}px">
  <img class="sb-lockup-main" src="${SRC.sembuh}" alt="Sembuh AI">
  <p class="sb-lockup-endorse">Powered by <img src="${SRC.codemasters}" alt="Codemasters"></p>
</div>`;

  const LOCKUP_CODE = `<div class="sb-lockup">
  <img class="sb-lockup-main" src="sembuh-logo.svg" alt="Sembuh AI">
  <p class="sb-lockup-endorse">Powered by <img src="codemasters-logo.svg" alt="Codemasters"></p>
</div>`;

  const logos = `<div class="f-logos">
${tile(img(SRC.codemasters, 'Codemasters', 48), 'white', 'Codemasters · parent company')}
${tile(img(SRC.sembuh, 'Sembuh AI', 40), 'white', 'Sembuh AI · colour')}
${tile(img(SRC.sembuhWhite, 'Sembuh AI', 40), 'dark', 'Sembuh AI · white')}
${tile('<span class="f-logo-missing">Flipmaster logo<br><small>file not supplied yet</small></span>', 'empty', 'Flipmaster')}
</div>`;

  DS.foundations.push({
    slug: 'logo',
    name: 'Logo',
    category: 'Foundations',
    status: 'In progress',
    updated: '2026-10-07',
    description: 'One system, three companies. Codemasters is the parent of Sembuh AI and Flipmaster; company materials carry their own logo with "Powered by Codemasters" underneath.',
    css: CSS,
    cssFile: 'logo.css',
    sections: [
      {
        id: 'architecture',
        title: 'Brand architecture',
        blocks: [
          { type: 'p', text: 'An endorsed brand family: the companies keep their own names and logos, and all three use this design system. Only the blue scale (`--brand-50` to `--brand-950`) differs per company.' },
          {
            type: 'table',
            head: ['Brand', 'Role', 'Logo', 'Blue scale'],
            rows: [
              ['Codemasters', 'Parent company', 'Symbol + wordmark', 'To be confirmed'],
              ['Sembuh AI', 'Company (claims analysis)', 'Wordmark, "AI" in brand blue', 'Current `brand` scale (primary `brand-600` `#3966E0`)'],
              ['Flipmaster', 'Company', 'To be supplied', 'To be confirmed'],
            ],
          },
          { type: 'note', tone: 'info', text: 'The Codemasters and Flipmaster blue scales are not defined yet. Until they are, every page and export uses the Sembuh AI scale.' },
        ],
      },
      {
        id: 'logos',
        title: 'Logos',
        blocks: [
          { type: 'example', html: logos, code: false },
          {
            type: 'table',
            head: ['File', 'Use', 'Status'],
            rows: [
              ['`assets/brand/codemasters-logo.png`', 'Codemasters, colour, light backgrounds', 'PNG from a screenshot (506 × 88). **Need SVG** and a white version'],
              ['`assets/brand/sembuh-logo.png`', 'Sembuh AI, colour, light backgrounds', 'PNG 2052 × 300 (from the pitch deck kit). SVG preferred'],
              ['`assets/brand/sembuh-logo-white.png`', 'Sembuh AI on dark or image backgrounds', 'PNG 2052 × 300'],
              ['—', 'Flipmaster', '**Not supplied**'],
            ],
          },
          { type: 'p', text: 'Use the files as they are. Never redraw a logo, retype the wordmark in another font, or rebuild the Codemasters symbol in CSS.' },
        ],
      },
      {
        id: 'endorsement',
        title: 'Powered by Codemasters',
        blocks: [
          { type: 'p', text: 'Sembuh AI and Flipmaster materials (slide covers and back covers, document headers, posters, the website footer) carry the endorsement under the company logo.' },
          { type: 'example', html: `<div class="f-logos">\n${tile(lockup(40), 'white', 'Light background')}\n${tile(lockup(64), 'white', 'Larger, same proportions')}\n</div>`, code: LOCKUP_CODE },
          {
            type: 'table',
            head: ['Part', 'Spec'],
            rows: [
              ['Company logo', 'Height `--lockup-h` (40 by default)'],
              ['Gap', '20 % of the logo height (8 at 40)'],
              ['"Powered by"', 'Text xs / Medium `gray-500`, sentence case, never translated or abbreviated'],
              ['Codemasters logo', '40 % of the company logo height (16 at 40), 8 after "Powered by"'],
              ['Alignment', 'Left edge of the company logo'],
            ],
          },
          { type: 'note', tone: 'warning', text: 'Proportions are a proposal from the docs team. Confirm them with the brand owner. A white endorsement for dark backgrounds needs the white Codemasters logo first.' },
        ],
      },
      {
        id: 'clear-space',
        title: 'Clear space and minimum size',
        blocks: [
          {
            type: 'table',
            head: ['Rule', 'Codemasters', 'Sembuh AI'],
            rows: [
              ['Clear space on every side', 'Half the symbol height', 'The height of the "S"'],
              ['Minimum height, screen', '24 px', '16 px'],
              ['Minimum height, print', '8 mm', '5 mm'],
              ['"Powered by" lockup', 'Company logo at least 32 px, so the Codemasters logo stays at least 13 px', '—'],
            ],
          },
          { type: 'note', tone: 'warning', text: 'Proposed values; confirm with the brand owner before they go into templates.' },
        ],
      },
      {
        id: 'backgrounds',
        title: 'Backgrounds',
        blocks: [
          { type: 'example', html: `<div class="f-logos">\n${tile(img(SRC.sembuh, 'Sembuh AI', 32), 'white', 'white')}\n${tile(img(SRC.sembuh, 'Sembuh AI', 32), 'gray', 'gray-50')}\n${tile(img(SRC.sembuh, 'Sembuh AI', 32), 'brand', 'brand-50')}\n${tile(img(SRC.sembuhWhite, 'Sembuh AI', 32), 'dark', 'gray-900')}\n${tile(img(SRC.sembuhWhite, 'Sembuh AI', 32), 'blue', 'brand-700')}\n</div>`, code: false },
          {
            type: 'list',
            items: [
              'Colour logo on `white`, `gray-50` and `brand-50`.',
              'White logo on `gray-900`, `brand-600` and darker, and on photos (with enough contrast behind the logo).',
              'Never on a mid-tone such as `brand-300` to `brand-500`, where neither version reads.',
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
              { kind: 'do', html: img(SRC.codemasters, 'Codemasters', 40), text: 'The supplied file, at its own proportions, on a light background.' },
              { kind: 'dont', html: `<img src="${SRC.codemasters}" alt="Codemasters, stretched" style="width: 260px; height: 32px">`, text: 'Stretched or squashed. Scale by height only.' },
              { kind: 'do', html: lockup(40), text: 'Company logo first, endorsement underneath.' },
              { kind: 'dont', html: `<img src="${SRC.codemasters}" alt="Codemasters, recoloured" style="height: 40px; filter: hue-rotate(140deg) drop-shadow(0 4px 6px rgba(16,24,40,.3))">`, text: 'Recoloured, or with a shadow or other effect.' },
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css` and `logo.css`. Swap the PNG paths for SVG files when they arrive.' },
          { type: 'code', lang: 'css', filename: 'logo.css', code: CSS },
        ],
      },
    ],
  });

  DS.addCss(CSS);
})();

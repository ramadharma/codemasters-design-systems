// Foundations: Logo and brand architecture. Codemasters is the parent company of Sembuh AI;
// both share this system and differ only in their blue scale. Logo files live in assets/brand/.
(() => {
  const { meta, icon } = DS;
  const SRC = {
    codemasters: 'assets/brand/codemasters-logo.svg',
    codemastersWhite: 'assets/brand/codemasters-logo-white.svg',
    sembuh: 'assets/brand/sembuh-logo.svg',
    sembuhWhite: 'assets/brand/sembuh-logo-white.svg',
    powered: 'assets/brand/sembuh-powered.svg',
    poweredWhite: 'assets/brand/sembuh-powered-white.svg',
    symbol: 'assets/brand/codemasters-symbol.svg',
  };

  const tile = (html, bg = 'white', label = '', file = '') => `<figure class="f-logo-tile" data-bg="${bg}">${html}${label ? `<figcaption class="mx">${label}</figcaption>` : ''}${file ? `<a class="sb-btn" data-hierarchy="secondary-gray" data-size="sm" href="${file}" download>${icon('download')}Download ${file.split('.').pop().toUpperCase()}</a>` : ''}</figure>`;
  const img = (src, alt, h = 40, style = '') => `<img src="${src}" alt="${alt}" style="height: ${h}px${style ? `; ${style}` : ''}">`;
  const on = (bg, html) => `<div style="display: grid; place-items: center; padding: 24px 32px; border-radius: 8px; background: var(--${bg})">${html}</div>`; // a logo on a stated background, for do and don't
  const logos = `<div class="f-logos">
${tile(img(SRC.codemasters, 'Codemasters', 40), 'white', 'Codemasters · colour', SRC.codemasters)}
${tile(img(SRC.codemastersWhite, 'Codemasters', 40), 'dark', 'Codemasters · white', SRC.codemastersWhite)}
${tile(img(SRC.sembuh, 'Sembuh AI', 40), 'white', 'Sembuh AI · colour', SRC.sembuh)}
${tile(img(SRC.sembuhWhite, 'Sembuh AI', 40), 'dark', 'Sembuh AI · white', SRC.sembuhWhite)}
</div>`;

  DS.foundations.push({
    slug: 'logo',
    name: 'Logo',
    category: 'Foundations',
    status: 'In progress',
    updated: '2026-10-14',
    description: 'One system, two brands. Codemasters is the parent of Sembuh AI; Sembuh AI materials carry its logo with "Powered by Codemasters" underneath.',
    sections: [
      {
        id: 'architecture',
        title: 'Brand architecture',
        blocks: [
          { type: 'p', text: 'An endorsed brand: Sembuh AI keeps its own name and logo, and both brands use this design system. Only the blue scale (`--brand-50` to `--brand-950`) differs.' },
          {
            type: 'table',
            head: ['Brand', 'Role', 'Logo', 'Blue scale'],
            rows: [
              ['Codemasters', 'Parent company', 'Symbol + wordmark', 'To be confirmed'],
              ['Sembuh AI', 'Company (claims analysis)', 'Wordmark: "Sembuh" in `gray-900`, "AI" in `brand-400` `#6CA1F0`', 'Current `brand` scale (primary `brand-600` `#3966E0`)'],
            ],
          },
          { type: 'note', tone: 'info', text: 'The Codemasters blue scale is not defined yet. Until it is, every page and export uses the Sembuh AI scale.' },
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
              ['`assets/brand/codemasters-logo.svg`', 'Codemasters, colour, light backgrounds', 'SVG (951.5 × 132.5). Symbol in gradients, wordmark `#051641`'],
              ['`assets/brand/codemasters-logo-white.svg`', 'Codemasters on dark or image backgrounds', 'SVG, the colour file with a white wordmark; the symbol keeps its gradients'],
              ['`assets/brand/sembuh-logo.svg`', 'Sembuh AI, colour, light backgrounds', 'SVG (657 × 96), the wordmark cut from the official lockup'],
              ['`assets/brand/sembuh-logo-white.svg`', 'Sembuh AI on dark or image backgrounds', 'SVG, the colour file all white'],
              ['`assets/brand/sembuh-powered.svg`', 'Sembuh AI with "Powered by Codemasters", light backgrounds', 'SVG (657 × 177), the official lockup'],
              ['`assets/brand/sembuh-powered-white.svg`', 'The lockup on dark or image backgrounds', 'SVG, the colour file in white, "Powered by" in `gray-300`'],
              ['`assets/brand/codemasters-symbol.svg`', 'Codemasters symbol alone: favicon, app icon, avatar', 'SVG, square, cut from the colour logo'],
            ],
          },
          { type: 'p', text: 'Use the files as they are. Never redraw a logo, retype the wordmark in another font, or rebuild the Codemasters symbol in CSS.' },
        ],
      },
      {
        id: 'endorsement',
        title: 'Powered by Codemasters',
        blocks: [
          { type: 'p', text: 'Sembuh AI materials (slide covers and back covers, document headers, posters, the website footer) carry the endorsement under the logo. It is one file: use it as it is, never rebuild it from the two logos and text.' },
          { type: 'example', html: `<div class="f-logos">\n${tile(img(SRC.powered, 'Sembuh AI, powered by Codemasters', 72), 'white', 'Lockup · colour', SRC.powered)}\n${tile(img(SRC.poweredWhite, 'Sembuh AI, powered by Codemasters', 72), 'dark', 'Lockup · white', SRC.poweredWhite)}\n</div>`, code: false },
          {
            type: 'table',
            head: ['Part', 'Spec'],
            rows: [
              ['Sembuh AI logo', 'The top 54 % of the lockup'],
              ['Gap', '30 % of the Sembuh AI logo height'],
              ['"Powered by"', '`gray-500` (`gray-300` in the white file), sentence case, never translated or abbreviated'],
              ['Codemasters logo', '42 % of the Sembuh AI logo height, 21 % after "Powered by"'],
              ['Alignment', 'Left edge of the Sembuh AI logo'],
              ['Size', 'Scale the whole file by height; at 44 px tall the Codemasters logo is about 10 px'],
            ],
          },
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
              ['"Powered by" lockup', '—', 'Lockup at least 44 px tall (logo 24 px), so the Codemasters logo stays at least 10 px'],
            ],
          },
          { type: 'note', tone: 'warning', text: 'Proposed values; confirm with the brand owner before they go into templates.' },
        ],
      },
      {
        id: 'symbol',
        title: 'Symbol',
        blocks: [
          { type: 'example', html: `<div class="f-logos">\n${tile(img(SRC.symbol, 'Codemasters', 64), 'white', 'Codemasters symbol', SRC.symbol)}\n${tile(img(SRC.symbol, 'Codemasters', 64), 'dark', 'On gray-900')}\n</div>`, code: false },
          {
            type: 'list',
            items: [
              'The symbol stands alone only where the full logo cannot fit: the favicon, an app icon, a social avatar and the Company badge on an Avatar.',
              'Anywhere the full logo fits, use the full logo. Never put the symbol next to a typed "Codemasters".',
              'At least 16 px. The symbol keeps its gradients on white and on `gray-900`; it has no white version.',
              'Sembuh AI has no symbol: its logo is a wordmark only. A square mark for Sembuh AI (favicon, app icon) needs one from the brand owner.',
            ],
          },
        ],
      },
      {
        id: 'backgrounds',
        title: 'Backgrounds',
        blocks: [
          { type: 'h3', id: 'bg-sembuh', text: 'Sembuh AI' },
          { type: 'example', html: `<div class="f-logos">\n${tile(img(SRC.sembuh, 'Sembuh AI', 32), 'white', 'white')}\n${tile(img(SRC.sembuh, 'Sembuh AI', 32), 'gray', 'gray-50')}\n${tile(img(SRC.sembuh, 'Sembuh AI', 32), 'brand', 'brand-50')}\n${tile(img(SRC.sembuhWhite, 'Sembuh AI', 32), 'dark', 'gray-900')}\n${tile(img(SRC.sembuhWhite, 'Sembuh AI', 32), 'blue', 'brand-700')}\n</div>`, code: false },
          {
            type: 'list',
            items: [
              'Colour logo on `white`, `gray-50` and `brand-50`.',
              'White logo on `gray-900`, `brand-600` and darker, and on photos (with enough contrast behind the logo).',
              'Never on a mid-tone such as `brand-300` to `brand-500`, where neither version reads.',
            ],
          },
          { type: 'h3', id: 'bg-codemasters', text: 'Codemasters' },
          { type: 'example', html: `<div class="f-logos">\n${tile(img(SRC.codemasters, 'Codemasters', 28), 'white', 'white')}\n${tile(img(SRC.codemasters, 'Codemasters', 28), 'gray', 'gray-50')}\n${tile(img(SRC.codemasters, 'Codemasters', 28), 'brand', 'brand-50')}\n${tile(img(SRC.codemastersWhite, 'Codemasters', 28), 'dark', 'gray-900')}\n</div>`, code: false },
          {
            type: 'list',
            items: [
              'Colour logo on `white`, `gray-50` and `brand-50`.',
              'White logo on `gray-900` and other near-black backgrounds only. Its symbol stays blue, so it disappears on blue: never on `brand-600` or darker blues, and never on a blue photo.',
              'A Codemasters logo for blue backgrounds needs a one-colour white file from the brand owner.',
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
              { kind: 'dont', html: `<img src="${SRC.codemasters}" alt="Codemasters, squashed" style="height: 40px; transform: scaleY(.55)">`, text: 'Stretched or squashed. Scale by height only.' },
              { kind: 'do', html: img(SRC.powered, 'Sembuh AI, powered by Codemasters', 64), text: 'The lockup file, with the endorsement under the Sembuh AI logo.' },
              { kind: 'dont', html: `<img src="${SRC.codemasters}" alt="Codemasters, recoloured" style="height: 40px; filter: hue-rotate(140deg) drop-shadow(0 4px 6px rgba(16,24,40,.3))">`, text: 'Recoloured, or with a shadow or other effect.' },
              { kind: 'do', html: img(SRC.sembuh, 'Sembuh AI', 36), text: 'Level, on the baseline of the layout.' },
              { kind: 'dont', html: img(SRC.sembuh, 'Sembuh AI, rotated', 36, 'transform: rotate(-12deg)'), text: 'Rotated or set on an angle.' },
              { kind: 'do', html: on('brand-50', img(SRC.sembuh, 'Sembuh AI', 32)), text: 'Colour logo on a light tint.' },
              { kind: 'dont', html: on('brand-400', img(SRC.sembuh, 'Sembuh AI on a mid-tone', 32)), text: 'On a mid-tone: "AI" vanishes and "Sembuh" loses contrast.' },
              { kind: 'do', html: on('gray-900', img(SRC.codemastersWhite, 'Codemasters', 28)), text: 'White Codemasters logo on near-black.' },
              { kind: 'dont', html: on('brand-700', img(SRC.codemastersWhite, 'Codemasters on blue', 28)), text: 'White Codemasters logo on blue: the symbol disappears.' },
            ],
          },
          {
            type: 'list',
            items: [
              'Never outline the logo, crop it, or let an edge of the frame cut through it.',
              'Never move the symbol away from the wordmark, change their spacing or swap their order.',
              'Never set the logo on a busy photo. Put it on a calm area, or on a solid panel in an allowed colour.',
              'Never animate parts of the logo separately.',
            ],
          },
        ],
      },
      {
        id: 'name',
        title: 'Name in text',
        blocks: [
          {
            type: 'table',
            head: ['Write', 'Never'],
            rows: [
              ['Sembuh AI', 'Sembuh.AI, SembuhAI, Sembuh Ai, SEMBUH AI'],
              ['Codemasters', 'CodeMasters, Code Masters, CODEMASTERS'],
            ],
          },
          {
            type: 'list',
            items: [
              'Write the names as the logos spell them, in the font of the surrounding text. Never imitate the logo with styled text.',
              'The domain is only for addresses: sembuh.ai in URLs and emails, never as the name in a sentence.',
              'Keep a name on one line: a non-breaking space in "Sembuh AI" (`Sembuh&nbsp;AI`).',
              'Names are never translated: "Powered by Codemasters" stays in English in Indonesian materials.',
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Logos are images: no CSS needed. Set the height and let the width follow.' },
          { type: 'code', lang: 'html', filename: 'logo.html', code: `<img src="assets/brand/codemasters-logo.svg" alt="Codemasters" height="32">\n<img src="assets/brand/sembuh-powered.svg" alt="Sembuh AI, powered by Codemasters" height="56">\n\n<!-- favicon -->\n<link rel="icon" href="assets/brand/codemasters-symbol.svg" type="image/svg+xml">` },
        ],
      },
    ],
  });

})();

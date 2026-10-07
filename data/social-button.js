// Social button: third-party sign-in. Source: DESIGN.md §6 Social buttons and Figma nodes 1256-130788, 1256-132638.
(() => {
  const FIGMA = 'https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=';

  const CSS = `/* Social button, Codemasters Design System
   Figma: Shared components / Buttons / Social button (node 1256-130788), Social button groups (node 1256-132638)
   Needs tokens.css.

   <button class="sb-social" type="button" data-social="google" data-theme="brand">
     <svg aria-hidden="true">…logo…</svg>
     Masuk dengan Google
   </button>

   data-social       google | facebook | apple | twitter | figma | dribbble
   data-theme        brand | color-brand | color   (Figma: Brand, Color with brand, Color)
   data-icon="only"  logo only; add aria-label
   data-state        hover | focus. Static mockups and docs only.
   No disabled state. */

.sb-social {
  --sc-brand: var(--gray-700); --sc-brand-hover: var(--gray-700);
  --sc-bg: var(--white); --sc-border: var(--gray-300); --sc-fg: var(--gray-700); --sc-logo: var(--sc-brand);
  --sc-bg-hover: var(--gray-50); --sc-border-hover: var(--gray-300);
  box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; gap: 12px;
  height: 44px; padding: 0 16px;
  font: 600 var(--text-md) var(--font); white-space: nowrap; text-decoration: none;
  color: var(--sc-fg); background: var(--sc-bg);
  border: 1px solid var(--sc-border); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  cursor: pointer;
  transition-property: color, background-color, border-color, box-shadow, scale;
  transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-social > svg { width: 24px; height: 24px; flex: none; color: var(--sc-logo); }
.sb-social[data-icon="only"] { width: 44px; padding: 0; }

/* Platform colours: the only colours allowed outside the palette. */
.sb-social[data-social="facebook"] { --sc-brand: #1877F2; --sc-brand-hover: #0C63D4; }
.sb-social[data-social="twitter"]  { --sc-brand: #1DA1F2; --sc-brand-hover: #0C8BD9; }
.sb-social[data-social="dribbble"] { --sc-brand: #EA4C89; --sc-brand-hover: #E62872; }
.sb-social[data-social="apple"],
.sb-social[data-social="figma"]    { --sc-brand: #000000; --sc-brand-hover: #000000; }

/* Brand: platform fill with white logo and text. Google stays white with a colour logo. */
.sb-social[data-theme="brand"]:not([data-social="google"]) {
  --sc-bg: var(--sc-brand); --sc-border: var(--sc-brand); --sc-fg: var(--white); --sc-logo: var(--white);
  --sc-bg-hover: var(--sc-brand-hover); --sc-border-hover: var(--sc-brand-hover);
}
/* Color with brand (default): white, colour logo. Color: white, gray logo. */
.sb-social[data-theme="color"] { --sc-logo: var(--gray-400); }
.sb-social[data-theme="color"] > svg * { fill: currentColor; }

/* States */
.sb-social:hover, .sb-social[data-state="hover"] { background: var(--sc-bg-hover); border-color: var(--sc-border-hover); }
.sb-social:focus-visible, .sb-social[data-state="focus"] { outline: none; box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring); }
.sb-social:active { scale: .96; }

/* Groups: a 360 px column of full-width buttons, or a row of equal icon buttons. Gap 12. */
.sb-social-group { display: grid; gap: 12px; width: 100%; max-width: 360px; }
.sb-social-group[data-style="icons"] { grid-template-columns: repeat(3, 1fr); }
.sb-social-group > .sb-social { width: 100%; }

@media (prefers-reduced-motion: reduce) {
  .sb-social { transition: none; }
  .sb-social:active { scale: 1; }
}
`;

  // 24 x 24 logos. Single-colour logos use currentColor; Google and Figma keep their own colours except in the Color theme.
  const LOGOS = {
    google:
      '<path fill="#4285F4" d="M23.766 12.277c0-.816-.066-1.636-.207-2.438H12.24v4.621h6.482a5.554 5.554 0 0 1-2.399 3.647v2.998h3.867c2.271-2.09 3.576-5.177 3.576-8.828Z"/>' +
      '<path fill="#34A853" d="M12.24 24c3.237 0 5.966-1.062 7.955-2.896l-3.867-2.998c-1.076.731-2.465 1.146-4.083 1.146-3.131 0-5.786-2.112-6.738-4.952H1.517v3.091A12.002 12.002 0 0 0 12.24 24Z"/>' +
      '<path fill="#FBBC04" d="M5.503 14.3a7.188 7.188 0 0 1 0-4.594V6.615H1.517a12.01 12.01 0 0 0 0 10.776L5.503 14.3Z"/>' +
      '<path fill="#EA4335" d="M12.24 4.75a6.52 6.52 0 0 1 4.603 1.799l3.427-3.426A11.533 11.533 0 0 0 12.24 0 11.998 11.998 0 0 0 1.517 6.615l3.986 3.091C6.45 6.862 9.109 4.75 12.24 4.75Z"/>',
    facebook:
      '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
    apple:
      '<path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>',
    twitter:
      '<path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"/>',
    figma:
      '<path fill="#1ABCFE" d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"/>' +
      '<path fill="#0ACF83" d="M4 20a4 4 0 0 1 4-4h4v4a4 4 0 1 1-8 0Z"/>' +
      '<path fill="#FF7262" d="M12 0v8h4a4 4 0 1 0 0-8h-4Z"/>' +
      '<path fill="#F24E1E" d="M4 4a4 4 0 0 0 4 4h4V0H8a4 4 0 0 0-4 4Z"/>' +
      '<path fill="#A259FF" d="M4 12a4 4 0 0 0 4 4h4V8H8a4 4 0 0 0-4 4Z"/>',
    dribbble:
      '<path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>',
  };
  const NAMES = { google: 'Google', facebook: 'Facebook', apple: 'Apple', twitter: 'Twitter', figma: 'Figma', dribbble: 'Dribbble' };
  const PLATFORMS = Object.keys(NAMES);
  const THEMES = [['brand', 'Brand'], ['color-brand', 'Color with brand'], ['color', 'Color']];

  const logo = name => `<svg data-i="${name}-logo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${LOGOS[name]}</svg>`;

  function social({ social = 'google', theme = 'brand', text = true, state } = {}) {
    const label = `Masuk dengan ${NAMES[social]}`;
    const attrs = ['class="sb-social"', 'type="button"', `data-social="${social}"`, `data-theme="${theme}"`];
    if (!text) attrs.push('data-icon="only"', `aria-label="${label}"`);
    if (state === 'hover' || state === 'focus') attrs.push(`data-state="${state}"`);
    return `<button ${attrs.join(' ')}>\n  ${logo(social)}${text ? `\n  ${label}` : ''}\n</button>`;
  }

  const group = (style, buttons) =>
    `<div class="sb-social-group"${style ? ` data-style="${style}"` : ''}>\n${buttons.map(b => b.replace(/^/gm, '  ')).join('\n')}\n</div>`;

  const themeMatrix = `<div class="matrix" style="--cols: 6">
${THEMES.map(([t, l]) => `<span class="mx">${l}</span>` + PLATFORMS.map(p => social({ social: p, theme: t, text: false })).join('')).join('\n')}
</div>`;

  const stateMatrix = `<div class="matrix" style="--cols: 3">
<span></span><span class="mx">Default</span><span class="mx">Hover</span><span class="mx">Focused</span>
${[['google', 'color-brand'], ['facebook', 'brand']]
  .map(([p, t]) => `<span class="mx">${NAMES[p]}, ${THEMES.find(x => x[0] === t)[1]}</span>` + ['default', 'hover', 'focus'].map(state => social({ social: p, theme: t, state })).join(''))
  .join('\n')}
</div>`;

  const anatomy = `<button class="sb-social" type="button" data-social="google" data-theme="color-brand" data-pin="1" data-pin-at="start" tabindex="-1">
  <span data-pin="2">${logo('google')}</span>
  <span data-pin="3">Masuk dengan Google</span>
</button>`;

  const logosCode =PLATFORMS.map(p => `<!-- ${NAMES[p]} -->\n<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${LOGOS[p]}</svg>`).join('\n\n');

  DS.components.push({
    slug: 'social-button',
    name: 'Social button',
    category: 'Components',
    status: 'In Figma',
    updated: '2026-10-06',
    description: 'Signs the user in with an account on another platform. For third-party sign-in only.',
    figma: [
      { label: 'Social button', url: `${FIGMA}1256-130788` },
      { label: 'Social button groups', url: `${FIGMA}1256-132638` },
    ],
    css: CSS,
    cssFile: 'social-button.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          {
            type: 'playground',
            initial: { social: 'google', theme: 'brand', state: 'default', text: true },
            controls: [
              { key: 'social', label: 'Social', type: 'select', options: PLATFORMS.map(p => [p, NAMES[p]]) },
              { key: 'theme', label: 'Theme', type: 'segmented', options: THEMES },
              { key: 'state', label: 'State', type: 'segmented', options: [['default', 'Default'], ['hover', 'Hover'], ['focus', 'Focused']] },
              { key: 'text', label: 'Supporting text', type: 'toggle' },
            ],
            render: social,
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
              'Use social buttons only to sign in with a third-party account. For any other action use Button.',
              'Pick one theme per screen. Never mix themes in one group.',
              'Order in a group: Google, Facebook, Apple.',
              'Platform fills are the only colours allowed outside the palette, because they belong to the platform.',
              'Social buttons have no Disabled state.',
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
              ['1', 'Container', 'One size, matching Button `lg`: 44 high, padding `10 16`, radius 8, `shadow-xs`. `white` with a 1 px `gray-300` border; the Brand theme fills it with the platform colour. Logo only: 44 × 44, padding 10.'],
              ['2', 'Logo', '24 px, gap 12. Colour logo; white on a Brand fill; `gray-400` in the Color theme.'],
              ['3', 'Label', 'Text md / Semibold, `gray-700` (white on a Brand fill). "Masuk dengan …" plus the platform name.'],
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
            head: ['Property', 'Figma values', 'Code'],
            rows: [
              ['Social', 'Google, Facebook, Apple, Twitter, Figma, Dribbble', '`data-social="google"`'],
              ['Supporting text', 'True (logo + "Masuk dengan …"), False (logo only)', 'Label text, or `data-icon="only"` with `aria-label`'],
              ['Theme', 'Brand, Color with brand, Color', '`data-theme="brand"`, `"color-brand"`, `"color"`'],
              ['State', 'Default, Hover, Focused', '`:hover`, `:focus-visible`. Static mockups only: `data-state`'],
            ],
          },
        ],
      },
      {
        id: 'themes',
        title: 'Themes',
        blocks: [
          { type: 'example', html: themeMatrix, code: false },
          {
            type: 'table',
            head: ['Theme', 'Look', 'Hover'],
            rows: [
              ['Brand', 'Fill in the platform colour, white logo and text. Google is the exception: white, `gray-300` border, colour logo, `gray-700` text.', 'Darker platform colour'],
              ['Color with brand', 'White, `gray-300` border, colour logo, `gray-700` text.', '`gray-50` fill'],
              ['Color', 'Same as Color with brand, with a `gray-400` logo.', '`gray-50` fill'],
            ],
          },
          { type: 'h3', id: 'platform-colours', text: 'Platform colours' },
          {
            type: 'table',
            head: ['Platform', 'Fill', 'Hover'],
            rows: [
              ['Facebook', '`#1877F2`', '`#0C63D4`'],
              ['Twitter', '`#1DA1F2`', '`#0C8BD9`'],
              ['Dribbble', '`#EA4C89`', '`#E62872`'],
              ['Apple, Figma', '`#000000`', '`#000000`'],
              ['Google', 'White (Brand theme exception)', '`gray-50`'],
            ],
          },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'example', html: stateMatrix, code: false },
          { type: 'p', text: 'Focused is `shadow-xs` plus a 4 px `focus-ring` ring in every theme. There is no Disabled state.' },
        ],
      },
      {
        id: 'groups',
        title: 'Groups',
        blocks: [
          { type: 'p', text: 'A 360 px column of full-width buttons, or a row of three equal icon buttons (3 × 112). Gap 12 in both.' },
          { type: 'example', html: group('', ['google', 'facebook', 'apple'].map(p => social({ social: p, theme: 'color-brand' }))) },
          { type: 'example', html: group('icons', ['google', 'facebook', 'apple'].map(p => social({ social: p, theme: 'color-brand', text: false }))) },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: group('icons', ['google', 'facebook', 'apple'].map(p => social({ social: p, theme: 'brand', text: false }))), text: 'One theme for the whole group.' },
              { kind: 'dont', html: group('icons', [social({ social: 'google', theme: 'color', text: false }), social({ social: 'facebook', theme: 'brand', text: false }), social({ social: 'apple', theme: 'color-brand', text: false })]), text: 'Three themes in one group.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: social({ social: 'google', theme: 'color-brand' }), text: 'Sign in with an existing account.' },
              { kind: 'dont', html: social({ social: 'facebook', theme: 'brand' }).replace('Masuk dengan Facebook', 'Bagikan ke Facebook'), text: 'Sharing or following is not sign-in. Use Button.' },
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
              'The logo `<svg>` is `aria-hidden="true"`; the label carries the name.',
              'Logo-only buttons need `aria-label="Masuk dengan Google"`.',
              'Never remove the focus ring.',
            ],
          },
          {
            type: 'table',
            head: ['Variant', 'Text on fill', 'Ratio', 'AA'],
            rows: [
              ['Color with brand, Color, Google', '`gray-700` on `white`', '10.46:1', 'Passes'],
              ['Brand, Facebook', '`white` on `#1877F2`', '4.23:1', '**Fails**'],
              ['Brand, Dribbble', '`white` on `#EA4C89`', '3.56:1', '**Fails**'],
              ['Brand, Twitter', '`white` on `#1DA1F2`', '2.83:1', '**Fails**'],
            ],
          },
          { type: 'note', tone: 'warning', text: 'Brand theme text on Facebook, Dribbble and Twitter fills is below AA. The fills belong to the platforms, so they cannot change. Prefer Color with brand where the label must meet AA.' },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, then `social-button.css`. The logos are below.' },
          { type: 'code', lang: 'css', filename: 'social-button.css', code: CSS },
          { type: 'h3', id: 'logos', text: 'Logos' },
          { type: 'code', lang: 'html', filename: 'social-logos.html', code: logosCode },
        ],
      },
      {
        id: 'tokens',
        title: 'Tokens used',
        blocks: [{ type: 'tokens' }],
      },
    ],
  });

  DS.addCss(CSS);
})();

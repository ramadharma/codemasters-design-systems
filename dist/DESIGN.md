# Codemasters Design System

> Exported from the design system dashboard. Version 1.0.0.

The shared visual language of Codemasters and its companies, Sembuh AI and Flipmaster: web apps, websites, mobile, slides, documents and posters. Every value is a token and every component documents its variants, states and rules, so each surface built from it looks and behaves the same.

## Contents

- Principles
- Tokens
- Logo
- Colors
- Typography
- Icons
- Shadows & Blur
- Grids & Spacing
- Avatar
- Badge
- Banner
- Button
- Button group
- Card
- Chart
- Checkbox and radio
- Checkbox group
- Combobox
- Date picker
- Dropdown menu
- Header bar
- Input dropdown
- Input field
- Loading
- Modal
- Pagination
- Progress bar and circle
- Sidebar
- Slider
- Social button
- Table
- Tabs
- Textarea input field
- Toast
- Toggle
- Tooltip and help icon
- Verification code
- WYSIWYG editor
- Slides

## Principles

1. **Data first, chrome second.** White cards on a near-white page; colour is reserved for status, series and the one primary action. No decorative gradients or illustrations; the only gradient is the raised sheen on controls.
2. **One primary action per view.** The blue button is the next step of the flow (Mulai Analisis, Kirim ke Advisor, Keputusan). Everything else is secondary (white, gray border) or orange for Pending.
3. **Status is always a coloured pill.** Every claim status has one fixed colour pair, used in tables, headers, summary cards and filters alike.
4. **Never empty.** Every cell, field and card shows a value. Placeholder data is deterministic (same record, same value).
5. **Full numbers.** Money is written in full Rupiah (`Rp 1.725.283.300`), never abbreviated, except on chart axis ticks.
6. **Indonesian UI copy.** Sentence case for body text, Title Case for buttons, tabs and card titles.

## Tokens

```css
@font-face {
  font-family: 'Timeless Sans';
  src: url('https://codemasters-design-systems.pages.dev/assets/fonts/TimelessSansVF.woff2') format('woff2');
  font-weight: 300 800;
  font-display: swap;
}

:root {
  /* Colour */
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f2f4f7;
  --gray-200: #eaecf0;
  --gray-300: #d0d5dd;
  --gray-400: #98a2b3;
  --gray-500: #667085;
  --gray-600: #475467;
  --gray-700: #344054;
  --gray-800: #1d2939;
  --gray-900: #101828;
  --gray-950: #060c17;
  --brand-50: #f0f6fe;
  --brand-100: #dfeafb;
  --brand-200: #c5dbfa;
  --brand-300: #9fc5f6;
  --brand-400: #6ca1f0;
  --brand-500: #5183eb;
  --brand-600: #3966e0;
  --brand-700: #2e51cd;
  --brand-800: #2942a7;
  --brand-900: #273b83;
  --brand-950: #142258;
  --error-50: #fef3f2;
  --error-100: #fee4e2;
  --error-200: #fecdca;
  --error-300: #fda29b;
  --error-400: #f97066;
  --error-500: #f04438;
  --error-600: #d92d20;
  --error-700: #b42318;
  --error-800: #912018;
  --error-900: #7a271a;
  --error-950: #511209;
  --warning-50: #fffaeb;
  --warning-100: #fef0c7;
  --warning-200: #fedf89;
  --warning-300: #fec84b;
  --warning-400: #fdb022;
  --warning-500: #f79009;
  --warning-600: #dc6803;
  --warning-700: #b54708;
  --warning-800: #93370d;
  --warning-900: #7a2e0e;
  --warning-950: #501800;
  --success-50: #ecfdf3;
  --success-100: #d1fadf;
  --success-200: #a6f4c5;
  --success-300: #6ce9a6;
  --success-400: #32d583;
  --success-500: #12b76a;
  --success-600: #039855;
  --success-700: #027a48;
  --success-800: #05603a;
  --success-900: #054f31;
  --success-950: #00311b;
  --blue-gray-50: #f8f9fc;
  --blue-gray-100: #eaecf5;
  --blue-gray-200: #d5d9eb;
  --blue-gray-300: #afb5d9;
  --blue-gray-400: #717bbc;
  --blue-gray-500: #4e5ba6;
  --blue-gray-600: #3e4784;
  --blue-gray-700: #363f72;
  --blue-gray-800: #293056;
  --blue-gray-900: #101323;
  --blue-gray-950: #060814;
  --blue-light-50: #f0f9ff;
  --blue-light-100: #e0f2fe;
  --blue-light-200: #b9e6fe;
  --blue-light-300: #7cd4fd;
  --blue-light-400: #36bffa;
  --blue-light-500: #0ba5ec;
  --blue-light-600: #0086c9;
  --blue-light-700: #026aa2;
  --blue-light-800: #065986;
  --blue-light-900: #0b4a6f;
  --blue-light-950: #002d49;
  --blue-50: #eff8ff;
  --blue-100: #d1e9ff;
  --blue-200: #b2ddff;
  --blue-300: #84caff;
  --blue-400: #53b1fd;
  --blue-500: #2e90fa;
  --blue-600: #1570ef;
  --blue-700: #175cd3;
  --blue-800: #1849a9;
  --blue-900: #194185;
  --blue-950: #082659;
  --indigo-50: #eef4ff;
  --indigo-100: #e0eaff;
  --indigo-200: #c7d7fe;
  --indigo-300: #a4bcfd;
  --indigo-400: #8098f9;
  --indigo-500: #6172f3;
  --indigo-600: #444ce7;
  --indigo-700: #3538cd;
  --indigo-800: #2d31a6;
  --indigo-900: #2d3282;
  --indigo-950: #191b57;
  --purple-50: #f4f3ff;
  --purple-100: #ebe9fe;
  --purple-200: #d9d6fe;
  --purple-300: #bdb4fe;
  --purple-400: #9b8afb;
  --purple-500: #7a5af8;
  --purple-600: #6938ef;
  --purple-700: #5925dc;
  --purple-800: #4a1fb8;
  --purple-900: #3e1c96;
  --purple-950: #260766;
  --pink-50: #fdf2fa;
  --pink-100: #fce7f6;
  --pink-200: #fcceee;
  --pink-300: #faa7e0;
  --pink-400: #f670c7;
  --pink-500: #ee46bc;
  --pink-600: #dd2590;
  --pink-700: #c11574;
  --pink-800: #9e165f;
  --pink-900: #851651;
  --pink-950: #580232;
  --rose-50: #fff1f3;
  --rose-100: #ffe4e8;
  --rose-200: #fecdd6;
  --rose-300: #fea3b4;
  --rose-400: #fd6f8e;
  --rose-500: #f63d68;
  --rose-600: #e31b54;
  --rose-700: #c01048;
  --rose-800: #a11043;
  --rose-900: #89123e;
  --rose-950: #5b0024;
  --orange-50: #fff6ed;
  --orange-100: #ffead5;
  --orange-200: #fddcab;
  --orange-300: #feb273;
  --orange-400: #fd853a;
  --orange-500: #fb6514;
  --orange-600: #ec4a0a;
  --orange-700: #c4320a;
  --orange-800: #9c2a10;
  --orange-900: #7e2410;
  --orange-950: #530f02;

  /* Semantic colour: what a colour is for. Components use these; the dark theme remaps them */
  --bg-page: var(--white);
  --bg-primary: var(--white);
  --bg-secondary: var(--gray-50);
  --bg-tertiary: var(--gray-100);
  --bg-quaternary: var(--gray-200);
  --bg-inverse: var(--gray-900);
  --bg-brand-subtle: var(--brand-50);
  --bg-brand-subtle-hover: var(--brand-100);
  --bg-error-subtle: var(--error-50);
  --bg-error-subtle-hover: var(--error-100);
  --bg-warning-subtle: var(--warning-50);
  --bg-success-subtle: var(--success-50);
  --text-primary: var(--gray-900);
  --text-secondary: var(--gray-700);
  --text-tertiary: var(--gray-600);
  --text-quaternary: var(--gray-500);
  --text-disabled: var(--gray-400);
  --text-brand: var(--brand-700);
  --text-brand-strong: var(--brand-800);
  --text-error: var(--error-700);
  --text-error-strong: var(--error-800);
  --fg-quaternary: var(--gray-400);
  --fg-brand: var(--brand-600);
  --border-primary: var(--gray-300);
  --border-secondary: var(--gray-200);
  --border-tertiary: var(--gray-100);
  --border-strong: var(--gray-400);
  --border-brand: var(--brand-300);
  --border-brand-subtle: var(--brand-200);
  --border-error: var(--error-300);

  /* Spacing: token number x 4 = px */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
  --space-40: 160px;
  --space-48: 192px;
  --space-56: 224px;
  --space-64: 256px;

  /* Containers */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;

  /* Radius: 4 small parts, 8 controls, 12 containers, 16 badges, full circles */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Shadows: all gray-900 at low opacity */
  --shadow-xs: 0 1px 2px rgba(16,24,40,.05);
  --shadow-sm: 0 1px 3px rgba(16,24,40,.1), 0 1px 2px rgba(16,24,40,.06);
  --shadow-md: 0 4px 8px -2px rgba(16,24,40,.1), 0 2px 4px -2px rgba(16,24,40,.06);
  --shadow-lg: 0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03);
  --shadow-xl: 0 20px 24px -4px rgba(16,24,40,.08), 0 8px 8px -4px rgba(16,24,40,.03);
  --shadow-2xl: 0 24px 48px -12px rgba(16,24,40,.18);
  --shadow-3xl: 0 32px 64px -12px rgba(16,24,40,.14);

  /* Raised controls: background-image and box-shadow on solid and white controls (Button, Tabs, Button group) */
  --raised-sheen: linear-gradient(180deg, rgb(255 255 255 / .1), rgb(0 0 0 / .08));
  --raised-sheen-light: linear-gradient(180deg, rgb(255 255 255 / 0), rgb(16 24 40 / .04));
  --raised-highlight: inset 0 1px 0 rgb(255 255 255 / .28);
  --pressed-inset: inset 0 1px 2px rgb(16 24 40 / .1);

  /* Chart series: fixed order, validated for colour-blind separation. Light step (300) of the same family for rejected or secondary */
  --chart-1: var(--brand-500);
  --chart-2: var(--orange-600);
  --chart-3: var(--blue-light-600);
  --chart-4: var(--purple-600);
  --chart-5: var(--pink-600);
  --chart-6: var(--indigo-500);
  --chart-other: var(--gray-400);
  --chart-grid: var(--gray-100);
  --chart-axis: var(--gray-300);

  /* Overlay: the scrim behind modal dialogs */
  --scrim: rgba(0, 0, 0, .2);

  /* Background blur: use as backdrop-filter: var(--blur-md) */
  --blur-sm: blur(4px);
  --blur-md: blur(8px);
  --blur-lg: blur(12px);
  --blur-xl: blur(20px);

  /* Focus ring: box-shadow: 0 0 0 4px var(--focus-ring) on :focus-visible */
  --focus-ring: color-mix(in srgb, var(--brand-600) 20%, transparent);

  /* Motion */
  --ease: cubic-bezier(.22,.61,.36,1);

  /* Typography: font: 600 var(--text-sm) var(--font). Display md and larger add letter-spacing: var(--tracking-display) */
  --font: 'Timeless Sans', sans-serif;
  --display-2xl: 72px/90px;
  --display-xl: 60px/72px;
  --display-lg: 48px/60px;
  --display-md: 36px/44px;
  --display-sm: 30px/38px;
  --display-xs: 24px/32px;
  --text-xl: 20px/30px;
  --text-lg: 18px/28px;
  --text-md: 16px/24px;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
  --tracking-display: -0.02em;
}
```

## Logo

One system, three companies. Codemasters is the parent of Sembuh AI and Flipmaster; company materials carry their own logo with "Powered by Codemasters" underneath.

### Brand architecture

An endorsed brand family: the companies keep their own names and logos, and all three use this design system. Only the blue scale (`--brand-50` to `--brand-950`) differs per company.

| Brand | Role | Logo | Blue scale |
| --- | --- | --- | --- |
| Codemasters | Parent company | Symbol + wordmark | To be confirmed |
| Sembuh AI | Company (claims analysis) | Wordmark, "AI" in brand blue | Current `brand` scale (primary `brand-600` `#3966E0`) |
| Flipmaster | Company | To be supplied | To be confirmed |

> **Note:** The Codemasters and Flipmaster blue scales are not defined yet. Until they are, every page and export uses the Sembuh AI scale.

### Logos

| File | Use | Status |
| --- | --- | --- |
| `assets/brand/codemasters-logo.png` | Codemasters, colour, light backgrounds | PNG from a screenshot (506 × 88). **Need SVG** and a white version |
| `assets/brand/sembuh-logo.png` | Sembuh AI, colour, light backgrounds | PNG 2052 × 300 (from the pitch deck kit). SVG preferred |
| `assets/brand/sembuh-logo-white.png` | Sembuh AI on dark or image backgrounds | PNG 2052 × 300 |
| — | Flipmaster | **Not supplied** |

Use the files as they are. Never redraw a logo, retype the wordmark in another font, or rebuild the Codemasters symbol in CSS.

### Powered by Codemasters

Sembuh AI and Flipmaster materials (slide covers and back covers, document headers, posters, the website footer) carry the endorsement under the company logo.

```html
<div class="sb-lockup">
  <img class="sb-lockup-main" src="sembuh-logo.svg" alt="Sembuh AI">
  <p class="sb-lockup-endorse">Powered by <img src="codemasters-logo.svg" alt="Codemasters"></p>
</div>
```

| Part | Spec |
| --- | --- |
| Company logo | Height `--lockup-h` (40 by default) |
| Gap | 20 % of the logo height (8 at 40) |
| "Powered by" | Text xs / Medium `gray-500`, sentence case, never translated or abbreviated |
| Codemasters logo | 40 % of the company logo height (16 at 40), 8 after "Powered by" |
| Alignment | Left edge of the company logo |

> **Warning:** Proportions are a proposal from the docs team. Confirm them with the brand owner. A white endorsement for dark backgrounds needs the white Codemasters logo first.

### Clear space and minimum size

| Rule | Codemasters | Sembuh AI |
| --- | --- | --- |
| Clear space on every side | Half the symbol height | The height of the "S" |
| Minimum height, screen | 24 px | 16 px |
| Minimum height, print | 8 mm | 5 mm |
| "Powered by" lockup | Company logo at least 32 px, so the Codemasters logo stays at least 13 px | — |

> **Warning:** Proposed values; confirm with the brand owner before they go into templates.

### Backgrounds

- Colour logo on `white`, `gray-50` and `brand-50`.
- White logo on `gray-900`, `brand-600` and darker, and on photos (with enough contrast behind the logo).
- Never on a mid-tone such as `brand-300` to `brand-500`, where neither version reads.

### Do and don't

**Do:** The supplied file, at its own proportions, on a light background.

```html
<img src="assets/brand/codemasters-logo.png" alt="Codemasters" style="height: 40px">
```

**Don't:** Stretched or squashed. Scale by height only.

```html
<img src="assets/brand/codemasters-logo.png" alt="Codemasters, stretched" style="width: 260px; height: 32px">
```

**Do:** Company logo first, endorsement underneath.

```html
<div class="sb-lockup" style="--lockup-h: 40px">
  <img class="sb-lockup-main" src="assets/brand/sembuh-logo.png" alt="Sembuh AI">
  <p class="sb-lockup-endorse">Powered by <img src="assets/brand/codemasters-logo.png" alt="Codemasters"></p>
</div>
```

**Don't:** Recoloured, or with a shadow or other effect.

```html
<img src="assets/brand/codemasters-logo.png" alt="Codemasters, recoloured" style="height: 40px; filter: hue-rotate(140deg) drop-shadow(0 4px 6px rgba(16,24,40,.3))">
```

### Code

Load `tokens.css` and `logo.css`. Swap the PNG paths for SVG files when they arrive.

`logo.css`

```css
/* Logo lockup, Codemasters Design System. Needs tokens.css.
   A company logo with the "Powered by Codemasters" endorsement underneath.

   <div class="sb-lockup">
     <img class="sb-lockup-main" src="sembuh-logo.svg" alt="Sembuh AI">
     <p class="sb-lockup-endorse">Powered by <img src="codemasters-logo.svg" alt="Codemasters"></p>
   </div>

   --lockup-h   height of the company logo (default 40px). The Codemasters logo is 40 % of it. */

.sb-lockup { --lockup-h: 40px; display: inline-grid; justify-items: start; gap: calc(var(--lockup-h) * .2); }
.sb-lockup-main { display: block; width: auto; max-width: 100%; height: var(--lockup-h); object-fit: contain; object-position: left; }
.sb-lockup-endorse { display: inline-flex; align-items: center; gap: 8px; margin: 0; font: 500 var(--text-xs) var(--font); color: var(--text-quaternary); white-space: nowrap; }
.sb-lockup-endorse img { display: block; width: auto; height: calc(var(--lockup-h) * .4); }
```

## Colors

Thirteen colour families of 11 steps each. Every colour on screen is one of these tokens, never a free-picked hex.

### Principles

Every colour is a step on one of the scales below. Token name = `--{family}-{step}` (`Rosé` is `rose`, `Blue gray` is `blue-gray`, `Blue light` is `blue-light`). Click a swatch to copy its token.

- **Define before you design.** Never pick a colour with the colour picker. Pick a colour token. Free-picked colours give inconsistent screens and developers cannot tell which colour to use.
- **Full scales from the start.** Every family has 11 steps (50–950), the same steps as Tailwind CSS, also when a screen needs only two of them.
- **Data first, chrome second.** Colour is reserved for status, data series and the one primary action.

| Group | Families | Role |
| --- | --- | --- |
| Neutral | Gray | Foundation of the system: text, form fields, backgrounds, dividers. |
| Primary | Brand | The brand colour. All interactive elements: buttons, links, inputs. |
| Accent | Blue gray, Blue light, Blue, Indigo, Purple, Pink, Rosé, Orange | Supporting colours for labels, badges and chart series. Use sparingly. |
| Feedback | Success, Warning, Error | Semantic states: feedback and warnings to the user. |

### Primary colours

The main colours; they make up most of every screen. "Aa" on each chip shows which text colour passes 4.5:1 on it, with the ratio.

#### Gray

Neutral foundation. Almost everything in the UI: text, form fields, backgrounds, dividers.

#### Brand

The primary colour. All interactive elements: buttons, links, inputs, active tabs. Sets the feel of the product.

#### Error

Error states and destructive actions (delete, reject, remove a user).

#### Warning

Potentially destructive or on-hold actions; confirmations that must catch the eye.

#### Success

Positive actions, positive trends, successful confirmations.

| Step | Gray | Brand | Error | Warning | Success |
| --- | --- | --- | --- | --- | --- |
| 50 | `#F9FAFB` | `#F0F6FE` | `#FEF3F2` | `#FFFAEB` | `#ECFDF3` |
| 100 | `#F2F4F7` | `#DFEAFB` | `#FEE4E2` | `#FEF0C7` | `#D1FADF` |
| 200 | `#EAECF0` | `#C5DBFA` | `#FECDCA` | `#FEDF89` | `#A6F4C5` |
| 300 | `#D0D5DD` | `#9FC5F6` | `#FDA29B` | `#FEC84B` | `#6CE9A6` |
| 400 | `#98A2B3` | `#6CA1F0` | `#F97066` | `#FDB022` | `#32D583` |
| 500 | `#667085` | `#5183EB` | `#F04438` | `#F79009` | `#12B76A` |
| 600 | `#475467` | `#3966E0` | `#D92D20` | `#DC6803` | `#039855` |
| 700 | `#344054` | `#2E51CD` | `#B42318` | `#B54708` | `#027A48` |
| 800 | `#1D2939` | `#2942A7` | `#912018` | `#93370D` | `#05603A` |
| 900 | `#101828` | `#273B83` | `#7A271A` | `#7A2E0E` | `#054F31` |
| 950 | `#060C17` | `#142258` | `#511209` | `#501800` | `#00311B` |

Plus `--white: #FFFFFF`.

### Secondary colours

For pills, tags, alerts, labels and chart series. Use them sparingly, as accents; the primary colours take precedence.

#### Blue gray

#### Blue light

#### Blue

#### Indigo

#### Purple

#### Pink

#### Rosé

#### Orange

| Step | Blue gray | Blue light | Blue | Indigo | Purple | Pink | Rosé | Orange |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 50 | `#F8F9FC` | `#F0F9FF` | `#EFF8FF` | `#EEF4FF` | `#F4F3FF` | `#FDF2FA` | `#FFF1F3` | `#FFF6ED` |
| 100 | `#EAECF5` | `#E0F2FE` | `#D1E9FF` | `#E0EAFF` | `#EBE9FE` | `#FCE7F6` | `#FFE4E8` | `#FFEAD5` |
| 200 | `#D5D9EB` | `#B9E6FE` | `#B2DDFF` | `#C7D7FE` | `#D9D6FE` | `#FCCEEE` | `#FECDD6` | `#FDDCAB` |
| 300 | `#AFB5D9` | `#7CD4FD` | `#84CAFF` | `#A4BCFD` | `#BDB4FE` | `#FAA7E0` | `#FEA3B4` | `#FEB273` |
| 400 | `#717BBC` | `#36BFFA` | `#53B1FD` | `#8098F9` | `#9B8AFB` | `#F670C7` | `#FD6F8E` | `#FD853A` |
| 500 | `#4E5BA6` | `#0BA5EC` | `#2E90FA` | `#6172F3` | `#7A5AF8` | `#EE46BC` | `#F63D68` | `#FB6514` |
| 600 | `#3E4784` | `#0086C9` | `#1570EF` | `#444CE7` | `#6938EF` | `#DD2590` | `#E31B54` | `#EC4A0A` |
| 700 | `#363F72` | `#026AA2` | `#175CD3` | `#3538CD` | `#5925DC` | `#C11574` | `#C01048` | `#C4320A` |
| 800 | `#293056` | `#065986` | `#1849A9` | `#2D31A6` | `#4A1FB8` | `#9E165F` | `#A11043` | `#9C2A10` |
| 900 | `#101323` | `#0B4A6F` | `#194185` | `#2D3282` | `#3E1C96` | `#851651` | `#89123E` | `#7E2410` |
| 950 | `#060814` | `#002D49` | `#082659` | `#191B57` | `#260766` | `#580232` | `#5B0024` | `#530F02` |

### How the scales are used

- **Fill / border / text pattern** for any tinted element: `50` fill, `200` border, `700` text, `500` icon.
- **Text on white:** `700`–`900` for text; `500` and up only for icons or large text. Steps `50`–`400` never carry text on white.
- **Solid fills with white text** (buttons): `500`–`900`.
- **Grays: few, used the same way every time.** Give each gray one job and keep it in every component: `gray-300` is always the input border, `gray-200` always the divider.

#### Gray in the app

| Token | Use in the app |
| --- | --- |
| `gray-50` | Page background, subtle card fill, inner boxes, table header, hover row, secondary hover |
| `gray-100` | Chips, menu borders, dividers in menus, skeletons |
| `gray-200` | Row dividers, inner card borders |
| `gray-300` | Card, input and tab borders |
| `gray-400` | Inactive icons, muted text, input hover border |
| `gray-500` | Secondary text, labels, placeholders |
| `gray-600` | Supporting text that needs more weight than `gray-500` |
| `gray-700` | Form labels, secondary button text |
| `gray-800` | Sidebar hover / active item |
| `gray-900` | Body text, sidebar background, toast |

#### Brand in the app

| Token | Use in the app |
| --- | --- |
| `brand-50` | Inactive tab, AI summary fill, selected range, Secondary color button |
| `brand-100` | Secondary color button hover |
| `brand-200` | AI summary border |
| `brand-300` | Input focus border, light Sembuh AI series |
| `brand-600` | Sembuh AI chart series |
| `brand-600` | **Primary**: buttons, active tab, links, checked controls, focus outline; at 20 % it is the focus ring (`--focus-ring`) |
| `brand-700` | Primary button hover, Secondary color / Tertiary color button text, Link color hover, table ID links, tab text |
| `brand-800` | Deep accent |

### Semantic roles

| Role | Fill | Border | Text | Icon / strong |
| --- | --- | --- | --- | --- |
| Success | `success-50` | `success-200` | `success-700` | icon `success-500` |
| Warning | `warning-50` | `warning-200` / `warning-300` | `warning-700` | icon `warning-500`, strong `warning-800` |
| Error | `error-50` | `error-200` | `error-700` | icon `error-500`, strong `error-600` |
| Info | `blue-50` | `blue-200` | `blue-700` | icon `blue-500` |
| Pending (button) | `warning-500`, hover `warning-600` | `warning-500` | `white` | — |

### Status pills

One colour pair per claim status: `50` fill and `700` text of one family (Gray: `100 / 700`). Each pill is a Badge `sm`.

| Family | Statuses |
| --- | --- |
| `gray` (`100 / 700`) | Baru |
| `indigo` | Siap diekstrak |
| `blue` | Siap dianalisis (list), Memeriksa FWA, Sedang Ditinjau, Proses QC |
| `purple` | Siap dianalisis (detail), Siap Ditinjau, Sedang dianalisis |
| `warning` | Memeriksa Eligibility |
| `orange` | Memeriksa FWA (list), Perlu Revisi, Potensi Duplikat |
| `success` | Disetujui: Sembuh, Disetujui: TPA |
| `error` | Ditolak |
| `blue-gray` | Single / Multiple claim type |

- Claim type tags: Inpatient `blue`, Outpatient `purple`, Maternity `pink`, Optical `indigo`, Dental `orange`.
- AI confidence: **≥ 90 %** `success`, **80–89 %** `warning`, **< 80 %** `error`, plus a warning banner.

> **Warning:** "Siap dianalisis" and "Memeriksa FWA" have two colours each (list vs detail). Open decision; see the Badge page.

### Data visualisation

| Series | Solid (approved / main) | Light (rejected / secondary) |
| --- | --- | --- |
| 1 · Sembuh AI (`--chart-1`) | `brand-500` | `brand-300` |
| 2 · TPA (`--chart-2`) | `orange-600` | `orange-300` |
| 3–6 (`--chart-3` to `--chart-6`) | `blue-light-600`, `purple-600`, `pink-600`, `indigo-500`, in this order | `300` of the same family |
| More than 6 | Fold the rest into "Lainnya" (`--chart-other`, `gray-400`) or split into small charts | — |

- Approved = solid; rejected = light fill (bars, sankey) or a **dashed** line (`6 4`) in line charts.
- Line charts: one point per x label, centred on it; lines only, a dot appears on hover.
- Unfocused series fade to 15–25 % opacity on hover or legend focus.
- Up = bad (more cost) is `error-600`; down = good is `success-600`.
- The order and steps pass the colour-blind checks (worst neighbours ΔE 10.9, normal vision 19.4). Full rules on the Chart page.

### Do and don't

**Do:** A token pair from the scale: `success-50` fill, `success-700` text.

```html
<span class="sb-badge" data-size="sm" data-color="success">Disetujui: Sembuh</span>
```

**Don't:** A hex from the colour picker. Close to the scale, but not on it, and it fails AA.

```html
<span class="sb-badge" data-size="sm" style="background: #e8f8ee; color: #2f9e5b">Disetujui: Sembuh</span>
```

### Tokens

`tokens.css (colour)`

```css
:root {
  /* Colour */
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f2f4f7;
  --gray-200: #eaecf0;
  --gray-300: #d0d5dd;
  --gray-400: #98a2b3;
  --gray-500: #667085;
  --gray-600: #475467;
  --gray-700: #344054;
  --gray-800: #1d2939;
  --gray-900: #101828;
  --gray-950: #060c17;
  --brand-50: #f0f6fe;
  --brand-100: #dfeafb;
  --brand-200: #c5dbfa;
  --brand-300: #9fc5f6;
  --brand-400: #6ca1f0;
  --brand-500: #5183eb;
  --brand-600: #3966e0;
  --brand-700: #2e51cd;
  --brand-800: #2942a7;
  --brand-900: #273b83;
  --brand-950: #142258;
  --error-50: #fef3f2;
  --error-100: #fee4e2;
  --error-200: #fecdca;
  --error-300: #fda29b;
  --error-400: #f97066;
  --error-500: #f04438;
  --error-600: #d92d20;
  --error-700: #b42318;
  --error-800: #912018;
  --error-900: #7a271a;
  --error-950: #511209;
  --warning-50: #fffaeb;
  --warning-100: #fef0c7;
  --warning-200: #fedf89;
  --warning-300: #fec84b;
  --warning-400: #fdb022;
  --warning-500: #f79009;
  --warning-600: #dc6803;
  --warning-700: #b54708;
  --warning-800: #93370d;
  --warning-900: #7a2e0e;
  --warning-950: #501800;
  --success-50: #ecfdf3;
  --success-100: #d1fadf;
  --success-200: #a6f4c5;
  --success-300: #6ce9a6;
  --success-400: #32d583;
  --success-500: #12b76a;
  --success-600: #039855;
  --success-700: #027a48;
  --success-800: #05603a;
  --success-900: #054f31;
  --success-950: #00311b;
  --blue-gray-50: #f8f9fc;
  --blue-gray-100: #eaecf5;
  --blue-gray-200: #d5d9eb;
  --blue-gray-300: #afb5d9;
  --blue-gray-400: #717bbc;
  --blue-gray-500: #4e5ba6;
  --blue-gray-600: #3e4784;
  --blue-gray-700: #363f72;
  --blue-gray-800: #293056;
  --blue-gray-900: #101323;
  --blue-gray-950: #060814;
  --blue-light-50: #f0f9ff;
  --blue-light-100: #e0f2fe;
  --blue-light-200: #b9e6fe;
  --blue-light-300: #7cd4fd;
  --blue-light-400: #36bffa;
  --blue-light-500: #0ba5ec;
  --blue-light-600: #0086c9;
  --blue-light-700: #026aa2;
  --blue-light-800: #065986;
  --blue-light-900: #0b4a6f;
  --blue-light-950: #002d49;
  --blue-50: #eff8ff;
  --blue-100: #d1e9ff;
  --blue-200: #b2ddff;
  --blue-300: #84caff;
  --blue-400: #53b1fd;
  --blue-500: #2e90fa;
  --blue-600: #1570ef;
  --blue-700: #175cd3;
  --blue-800: #1849a9;
  --blue-900: #194185;
  --blue-950: #082659;
  --indigo-50: #eef4ff;
  --indigo-100: #e0eaff;
  --indigo-200: #c7d7fe;
  --indigo-300: #a4bcfd;
  --indigo-400: #8098f9;
  --indigo-500: #6172f3;
  --indigo-600: #444ce7;
  --indigo-700: #3538cd;
  --indigo-800: #2d31a6;
  --indigo-900: #2d3282;
  --indigo-950: #191b57;
  --purple-50: #f4f3ff;
  --purple-100: #ebe9fe;
  --purple-200: #d9d6fe;
  --purple-300: #bdb4fe;
  --purple-400: #9b8afb;
  --purple-500: #7a5af8;
  --purple-600: #6938ef;
  --purple-700: #5925dc;
  --purple-800: #4a1fb8;
  --purple-900: #3e1c96;
  --purple-950: #260766;
  --pink-50: #fdf2fa;
  --pink-100: #fce7f6;
  --pink-200: #fcceee;
  --pink-300: #faa7e0;
  --pink-400: #f670c7;
  --pink-500: #ee46bc;
  --pink-600: #dd2590;
  --pink-700: #c11574;
  --pink-800: #9e165f;
  --pink-900: #851651;
  --pink-950: #580232;
  --rose-50: #fff1f3;
  --rose-100: #ffe4e8;
  --rose-200: #fecdd6;
  --rose-300: #fea3b4;
  --rose-400: #fd6f8e;
  --rose-500: #f63d68;
  --rose-600: #e31b54;
  --rose-700: #c01048;
  --rose-800: #a11043;
  --rose-900: #89123e;
  --rose-950: #5b0024;
  --orange-50: #fff6ed;
  --orange-100: #ffead5;
  --orange-200: #fddcab;
  --orange-300: #feb273;
  --orange-400: #fd853a;
  --orange-500: #fb6514;
  --orange-600: #ec4a0a;
  --orange-700: #c4320a;
  --orange-800: #9c2a10;
  --orange-900: #7e2410;
  --orange-950: #530f02;
}
```

## Typography

One typeface, Timeless Grotesk, on an 11-step scale from Display 2xl to Text xs. Every text uses a style from the scale; never set a size or line height by hand.

### Typeface

**Timeless Grotesk**, self-hosted, fallback `sans-serif`. One typeface for display and text. It ships as one variable file, `TimelessSansVF.woff2` (weights 300 to 800); Grotesk is its default style (`STYL` axis 0), so no `font-variation-settings` is needed. Decided 2026-10-09; replaced Inter.

- Text xs (12 px) is the smallest size. Status, amounts and other text that must be read at 12 px use Medium 500: Timeless has a smaller x-height than Inter.
- IDs, claim and policy numbers use the monospace stack (`ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`): capital I and lowercase l look the same in Timeless.
- Preload the file on pages that use it: `<link rel="preload" href="…/TimelessSansVF.woff2" as="font" type="font/woff2" crossorigin>`.

`Load the font`

```css
@font-face {
  font-family: 'Timeless Sans';
  src: url('https://codemasters-design-systems.pages.dev/assets/fonts/TimelessSansVF.woff2') format('woff2');
  font-weight: 300 800;
  font-display: swap;
}
```

### Type scale

Click a style name to copy its `font` declaration. Every style comes in four weights, named `{Style}/{Weight}`, for example `Text sm/Medium`.

| Style | Size | Line height | Tracking | Token |
| --- | --- | --- | --- | --- |
| Display 2xl | 72 px / 4.5rem | 90 px / 5.625rem | −2 % (`-0.02em`) | `--display-2xl` |
| Display xl | 60 px / 3.75rem | 72 px / 4.5rem | −2 % (`-0.02em`) | `--display-xl` |
| Display lg | 48 px / 3rem | 60 px / 3.75rem | −2 % (`-0.02em`) | `--display-lg` |
| Display md | 36 px / 2.25rem | 44 px / 2.75rem | −2 % (`-0.02em`) | `--display-md` |
| Display sm | 30 px / 1.875rem | 38 px / 2.375rem | 0 | `--display-sm` |
| Display xs | 24 px / 1.5rem | 32 px / 2rem | 0 | `--display-xs` |
| Text xl | 20 px / 1.25rem | 30 px / 1.875rem | 0 | `--text-xl` |
| Text lg | 18 px / 1.125rem | 28 px / 1.75rem | 0 | `--text-lg` |
| Text md | 16 px / 1rem | 24 px / 1.5rem | 0 | `--text-md` |
| Text sm | 14 px / 0.875rem | 20 px / 1.25rem | 0 | `--text-sm` |
| Text xs | 12 px / 0.75rem | 18 px / 1.125rem | 0 | `--text-xs` |

`Usage`

```css
.card-title { font: 600 var(--text-xl) var(--font); }
.page-hero  { font: 600 var(--display-md) var(--font); letter-spacing: var(--tracking-display); }
```

There are also `Text xl/Regular underlined` and `Text lg/Medium underlined` for inline links.

### Weights

| Weight | Use |
| --- | --- |
| Regular 400 | Body text, inputs, table cells |
| Medium 500 | Labels, tabs, values, pills |
| Semibold 600 | Titles and buttons |
| Bold 700 | Not used in the app yet. Reserve for display headings outside the app (slides, marketing) |

### Rules

- **Display vs text.** Display styles are for headings only (H1–H6), never for running copy. Text styles cover everything else: body, labels, UI elements.
- **Base size 16 px** (`Text md`): paragraphs, inputs, dropdown options, buttons. Dense app UI (tables, tabs, labels) steps down to `Text sm`.
- **Line height.** Body text 1.5–2× the size (16 → 24). The bigger the text, the tighter the ratio: display text 1–1.25× (60 → 72). The scale already does this; do not override it.
- **Letter spacing.** Display md and larger use −2 %. In CSS write `letter-spacing: var(--tracking-display)` (`-0.02em`), never `%`.
- **Numbers** use `font-variant-numeric: tabular-nums` in tables, KPIs and amounts, so digits line up.

### Use in the app

| Style / weight | Use |
| --- | --- |
| Display xs / Semibold | Page title (header bar), breadcrumb ID, KPI value |
| Text xl / Semibold | Card title, dialog title |
| Text xl / Medium | Stat number |
| Text lg / Medium | Group title inside a card, KPI label |
| Text md / Regular · Medium · Semibold | Body, inputs, dropdown options · values · buttons |
| Text sm / Regular · Medium | Default UI text, table cells · tabs, form labels, menu items |
| Text xs / Regular · Medium | Captions, field labels in fact grids, sub-amounts · pills |

Colour pairing: titles and values `gray-900`, labels `gray-500`, form labels `gray-700`.

> **Warning:** The app also uses **Micro 10 / 16** (stat card labels, step notes). It is off the scale. Do not use it in new work.

### Slides and documents

- Use Inter, not Timeless: Google Slides and Docs offer Inter from More fonts, Timeless has to be installed. Titles Inter Semibold 600 (Bold 700 allowed for display headings), body Inter Regular or Medium.
- Keep the ratios of the scale, for example 40 / 24 / 16 on a 16:9 slide.

### Do and don't

**Do:** A style from the scale: Text xl / Semibold.

```html
<p style="margin: 0; font: 600 var(--text-xl) var(--font); color: var(--text-primary)">Ringkasan klaim</p>
```

**Don't:** 19 / 23 set by hand. Nearly Text xl, but off the scale, so the rhythm breaks.

```html
<p style="margin: 0; font: 600 19px/23px var(--font); color: var(--text-primary)">Ringkasan klaim</p>
```

### Tokens

`tokens.css (typography)`

```css
:root {
  /* Typography: font: 600 var(--text-sm) var(--font). Display md and larger add letter-spacing: var(--tracking-display) */
  --font: 'Timeless Sans', sans-serif;
  --display-2xl: 72px/90px;
  --display-xl: 60px/72px;
  --display-lg: 48px/60px;
  --display-md: 36px/44px;
  --display-sm: 30px/38px;
  --display-xs: 24px/32px;
  --text-xl: 20px/30px;
  --text-lg: 18px/28px;
  --text-md: 16px/24px;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
  --tracking-display: -0.02em;
}
```

## Icons

Feather-style outline icons on a 24 grid, in four sizes. Icons take the colour of their text, so one file serves every state.

### Style

- **Outline, Feather style.** Drawn on a 24 × 24 grid with a 2 px round stroke, which renders at 1.67 px when the icon is 20 px.
- **Sizes 12, 16, 20, 24.** 20 is the default in buttons, inputs and menus; 16 in small controls and badges; 24 in large buttons and empty states.
- **Colour = text colour.** Icons use `currentColor`, so they follow the label next to them and every state change.
- SVG files in `public/assets/`. Do not mix in filled or two-tone icons from other sets.

#### Sizes

| Size | Stroke on screen | Use |
| --- | --- | --- |
| 12 | 1 px | Badge icons, tiny indicators |
| 16 | 1.33 px | Small buttons, help icon, chips, menu checkmarks |
| 20 | 1.67 px | Default: buttons, inputs, menu items, sidebar |
| 24 | 2 px | Large buttons (`xl`, `2xl`), empty states |

### Colour

- Inactive sidebar icons are `gray-400` and turn white when active (sidebar `gray-900`).
- Icons inside inputs and tertiary buttons are `gray-500`; on a coloured element they take that element's text colour.
- Status icons use the `500` step of their role: `success-500`, `warning-500`, `error-500`, `blue-500`.

> **Warning:** `gray-400` on white is 2.58:1, below 3:1 for icons that carry meaning (help icon, toolbar, add button). `gray-500` (4.97:1) passes. Open decision for the design team.

### Library

The 54 icons used in this documentation. Click one to copy its name.

### Code

#### Inline SVG

The default. The stroke follows `color`, so hover and active states need no extra file.

```html
<!-- Inline SVG: stroke follows the text colour. Decorative, so hidden from screen readers. -->
<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
</svg>
```

#### CSS mask

For icons loaded as files that still need to change colour with state (the app's `.ic`).

`icon.css`

```css
/* Icons that change colour with state: an SVG file drawn as a mask, coloured by currentColor. */
.ic {
  display: inline-block; flex: none; width: 20px; height: 20px;
  background: currentColor;
  -webkit-mask: var(--ic) center / contain no-repeat;
  mask: var(--ic) center / contain no-repeat;
}

<span class="ic" style="--ic: url(/assets/icons/file-text.svg)" aria-hidden="true"></span>
```

### Accessibility

- An icon next to a text label is decorative: `aria-hidden="true"`.
- An icon-only button needs an `aria-label` and a title-only tooltip with the same text.
- An icon that carries meaning on its own (status, error) needs 3:1 against its background and a text alternative.

## Shadows & Blur

Seven shadows and four background blurs that put elements on the z-axis. The higher the layer, the bigger the shadow.

### Shadows

All shadows are `gray-900` (`16, 24, 40`) at low opacity. Use only these seven; never write a custom shadow. Click one to copy its token.

| Token | CSS value |
| --- | --- |
| `--shadow-xs` | `0 1px 2px rgba(16,24,40,.05)` |
| `--shadow-sm` | `0 1px 3px rgba(16,24,40,.1), 0 1px 2px rgba(16,24,40,.06)` |
| `--shadow-md` | `0 4px 8px -2px rgba(16,24,40,.1), 0 2px 4px -2px rgba(16,24,40,.06)` |
| `--shadow-lg` | `0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03)` |
| `--shadow-xl` | `0 20px 24px -4px rgba(16,24,40,.08), 0 8px 8px -4px rgba(16,24,40,.03)` |
| `--shadow-2xl` | `0 24px 48px -12px rgba(16,24,40,.18)` |
| `--shadow-3xl` | `0 32px 64px -12px rgba(16,24,40,.14)` |

### Elevation in the app

| Layer, lowest to highest | Shadow |
| --- | --- |
| Page, cards, inner boxes | None. Cards have only a `1px solid gray-300` border |
| Buttons, inputs | `shadow-xs` |
| Menus, popovers, dropdown panels, toast, dialogs | `shadow-lg` |
| Floating chart tooltip | `shadow-lg` drawn as a filter so it follows the arrow shape |

`Chart tooltip`

```css
.chart-tip { filter: drop-shadow(0 12px 8px rgba(16,24,40,.08)) drop-shadow(0 4px 3px rgba(16,24,40,.03)); }
```

`sm`, `md`, `xl`, `2xl` and `3xl` are not used in the app yet (Slider handles use `md`). When a new layer needs one, keep the order: an element that sits above another gets the bigger shadow.

### Background blur

A background blur also lifts an element: it blurs what is behind a translucent surface. Use it as `backdrop-filter`.

#### Light

#### Dark

| Token | CSS value |
| --- | --- |
| `--blur-sm` | `blur(4px)` |
| `--blur-md` | `blur(8px)` |
| `--blur-lg` | `blur(12px)` |
| `--blur-xl` | `blur(20px)` |

- A blur needs a translucent fill to show: **light** `rgba(255,255,255,.6)` (white 60 %) with `gray-900` text, or **dark** `rgba(52,64,84,.6)` (`gray-700` 60 %) with white text.
- Use blur sparingly, as an accent: scrims behind dialogs, overlays on images or charts. Never put body text or tables on a blurred surface without a fill.
- The app does not use blur yet; the modal scrim is a flat `rgba(0,0,0,.2)`.

`Usage`

```css
.scrim { background: rgba(255,255,255,.6); backdrop-filter: var(--blur-md); }
```

### Raised controls

Pressable controls get a little depth, so they read as buttons: a sheen over the fill (lighter top, darker bottom) and, on solid fills, a 1 px light line inside the top edge. The sheen is translucent, so one token works over any fill: brand, error or another company's blue.

| Token | Use on | CSS value |
| --- | --- | --- |
| `--raised-sheen` | Solid fills: Primary and Destructive Primary buttons, selected Folder tab, Social button Brand theme | `linear-gradient(180deg, rgb(255 255 255 / .1), rgb(0 0 0 / .08))` |
| `--raised-sheen-light` | White controls: Secondary gray button, Button group segments, selected Segmented tab, Social buttons, Toggle knob, Slider handle, Avatar add button | `linear-gradient(180deg, rgb(255 255 255 / 0), rgb(16 24 40 / .04))` |
| `--raised-highlight` | With `--raised-sheen`, first in `box-shadow` | `inset 0 1px 0 rgb(255 255 255 / .28)` |
| `--pressed-inset` | The opposite of raised: the chosen Button group segment, on a `gray-100` fill | `inset 0 1px 2px rgb(16 24 40 / .1)` |

- Write it as `background: var(--raised-sheen) var(--brand-600)`. On hover change only `background-color`, so the sheen stays.
- A solid raised control takes a border one step darker than its fill (`brand-600` fill, `brand-700` border).
- Flat: inputs, badges, cards, Secondary color, Tertiary, Link, chosen Button group segments (pressed in with `--pressed-inset`) and every Disabled state (the default look at 50 % opacity).
- Never on cards, panels or large surfaces. It is for controls only.

### Do and don't

**Do:** A menu on `shadow-lg`, the token for floating panels.

```html
<div class="f-dd-box" style="box-shadow: var(--shadow-lg)">Menu</div>
```

**Don't:** A custom blue glow. Shadows are always gray-900 and always from the set.

```html
<div class="f-dd-box" style="box-shadow: 0 6px 18px rgba(57,102,224,.35)">Menu</div>
```

### Tokens

`tokens.css (shadows and blur)`

```css
:root {
  /* Shadows: all gray-900 at low opacity */
  --shadow-xs: 0 1px 2px rgba(16,24,40,.05);
  --shadow-sm: 0 1px 3px rgba(16,24,40,.1), 0 1px 2px rgba(16,24,40,.06);
  --shadow-md: 0 4px 8px -2px rgba(16,24,40,.1), 0 2px 4px -2px rgba(16,24,40,.06);
  --shadow-lg: 0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03);
  --shadow-xl: 0 20px 24px -4px rgba(16,24,40,.08), 0 8px 8px -4px rgba(16,24,40,.03);
  --shadow-2xl: 0 24px 48px -12px rgba(16,24,40,.18);
  --shadow-3xl: 0 32px 64px -12px rgba(16,24,40,.14);

  /* Raised controls: background-image and box-shadow on solid and white controls (Button, Tabs, Button group) */
  --raised-sheen: linear-gradient(180deg, rgb(255 255 255 / .1), rgb(0 0 0 / .08));
  --raised-sheen-light: linear-gradient(180deg, rgb(255 255 255 / 0), rgb(16 24 40 / .04));
  --raised-highlight: inset 0 1px 0 rgb(255 255 255 / .28);
  --pressed-inset: inset 0 1px 2px rgb(16 24 40 / .1);

  /* Background blur: use as backdrop-filter: var(--blur-md) */
  --blur-sm: blur(4px);
  --blur-md: blur(8px);
  --blur-lg: blur(12px);
  --blur-xl: blur(20px);
}
```

## Grids & Spacing

A 4 px soft grid: a fixed spacing scale, four containers, column grids for desktop, tablet and mobile, and the radius set.

### Spacing

A fixed set of values removes guesswork and gives every screen the same rhythm. Token number × 4 = px. Click a row to copy its token.

| Token | rem (16 px base) | px |
| --- | --- | --- |
| `--space-1` | 0.25rem | 4 |
| `--space-2` | 0.5rem | 8 |
| `--space-3` | 0.75rem | 12 |
| `--space-4` | 1rem | 16 |
| `--space-5` | 1.25rem | 20 |
| `--space-6` | 1.5rem | 24 |
| `--space-8` | 2rem | 32 |
| `--space-10` | 2.5rem | 40 |
| `--space-12` | 3rem | 48 |
| `--space-16` | 4rem | 64 |
| `--space-20` | 5rem | 80 |
| `--space-24` | 6rem | 96 |
| `--space-32` | 8rem | 128 |
| `--space-40` | 10rem | 160 |
| `--space-48` | 12rem | 192 |
| `--space-56` | 14rem | 224 |
| `--space-64` | 16rem | 256 |

#### Rules

- **4 px soft grid.** Every spacing value, size and position is divisible by 4. Prefer multiples of 8; use the 4 px steps (4, 12, 20) for fine adjustments.
- **Only values from the set.** A value on the 4 px grid but not in the set is still off: use 128, not 124.
- **Line things up** on both axes, and give similar components the same values so the vertical rhythm repeats.
- **Control padding exception.** Buttons, inputs and tabs may use inner padding off the set (`10 18`, `10 14`, `9 16`) when that lands the outer height on the grid (40 / 44 / 52). Gaps between elements never do.

#### Use in the app

| Where | Value |
| --- | --- |
| Page padding | 32 |
| Gap between cards | 24 |
| Card padding | 24 (compact cards 16) |
| Between blocks inside a card | 16 |
| Between rows of a list | 12 |
| Between inline items | 8 |

> **Warning:** The app also uses `2` and `6` (for example the 6 px gap between a field label and its control). They are off the scale; use 4 or 8 in new work.

### Grid layouts

| Breakpoint | Frame | Container | Side padding | Content width | Columns | Gutter | Column width |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Desktop | 1440 | 1280 (`container-xl`), centred, 80 outer margin | 32 | 1216 | 12 | 32 | 72 |
| Tablet | 768 | 768, full width | 32 | 704 | 6 | 32 | ~90.7 (auto) |
| Mobile | 375 | 375, full width | 16 | 343 | 4 | 16 | ~73.75 (auto) |

- Columns stretch (auto width); gutters and side padding are fixed.
- Inside a container, sub-grids of **12, 6, 5, 3 or 2** auto columns split a section, for example a row of 3 KPI cards or a 2-column form.
- Elements span whole columns and start on a column edge.

`Usage`

```css
.page { max-width: var(--container-xl); margin-inline: auto; padding-inline: var(--space-8); }
.page-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--space-8); }

@media (max-width: 1023px) { .page-grid { grid-template-columns: repeat(6, 1fr); } }
@media (max-width: 767px)  { .page { padding-inline: var(--space-4); } .page-grid { grid-template-columns: repeat(4, 1fr); gap: var(--space-4); } }
```

### Containers

Content sits in a centred container with a fixed max width.

| Token | rem | px |
| --- | --- | --- |
| `--container-sm` | 40rem | 640 |
| `--container-md` | 48rem | 768 |
| `--container-lg` | 64rem | 1024 |
| `--container-xl` | 80rem | 1280 |

### App layout

- **Desktop only**, minimum width 1280, designed at 1440. The grid applies to the content area right of the sidebar.
- **Sidebar:** fixed, `gray-900`; collapsed 72 (icons + tooltips), open 280. Item 44 tall, radius 8; active and hover `gray-800`.
- **Header bar:** sticky, white, 80 tall, padding `24 32`, bottom border `gray-200`. Title left (Display xs), actions right (gap 8).
- **Body:** padding 32, vertical stack with gap 24, on the 12-column grid.
- **Detail page:** header bar, then fact card (7-column grid, `gray-50` fill), then sticky tab row, then tab panels.

### Radius

| Value | Token | Use |
| --- | --- | --- |
| 4 | `--radius-sm` | Checkboxes, calendar days, progress and slider tracks, targets under 24 px (help icon, badge ×) |
| 8 | `--radius-md` | Icon buttons of 32 px and up, buttons, inputs, menu rows, tab tops (`8 8 0 0`), inner cards, banners |
| 12 | `--radius-lg` | Cards, dialogs, popover panels, dropdown menus |
| 16 | `--radius-xl` | Badges, tags, chips |
| 9999 (full) | `--radius-full` | Avatar, toggle, radio, check circle, dots |

Components use only these tokens, never a px value. 6 was dropped on 7 Oct 2026: checkbox `md` and calendar days moved to 4, editor icons (icon buttons) to 8.

### Do and don't

**Do:** 16 between blocks, from the set.

```html
<div class="f-dd-stack" style="gap: var(--space-4)"><span></span><span></span><span></span></div>
```

**Don't:** 14: on no grid step of the set. Use 12 or 16.

```html
<div class="f-dd-stack" style="gap: 14px"><span></span><span></span><span></span></div>
```

### Tokens

`tokens.css (spacing, containers, radius)`

```css
:root {
  /* Spacing: token number x 4 = px */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
  --space-40: 160px;
  --space-48: 192px;
  --space-56: 224px;
  --space-64: 256px;

  /* Containers */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;

  /* Radius: 4 small parts, 8 controls, 12 containers, 16 badges, full circles */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
}
```

## Avatar

A person or a company, shown as a photo, initials or a placeholder icon. Comes alone, in an overlapping group, or with a name and a secondary line.

### Usage

- Content priority: the user's photo, then initials (first + last name, at most 2 letters), then the placeholder user icon. Never leave an avatar empty.
- Online indicator for people who can be reached now; Company badge for the organisation a user belongs to, such as the insurer of a TPA user.
- Avatar groups show at most 5 avatars, then "+N" that opens a list of the rest.
- Avatar label groups sit in the sidebar profile, dropdown headers, assignee fields and table cells (`sm`).
- Demo photos and names are for mock-ups only. Real screens show the user's photo or initials.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | Circle, `brand-50` fill. 24 to 64 by size. |
| 2 | Content | Photo (cover), initials (Medium, `brand-600`) or the `user` icon (`brand-600`). |
| 3 | Status icon | Optional, bottom-right, 1.5 px white border. Online: `success-500` dot. Company: logo, 2 px outside the circle. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Size | `xs`, `sm`, `md`, `lg`, `xl`, `2xl` | `data-size` |
| Placeholder / Text | Photo, Text, Placeholder | `<img>`, initials as text, or the `user` icon `<svg>` |
| Status icon | False, Online indicator, Company | `.sb-avatar-status` or `.sb-avatar-company` inside the avatar |
| State | Default, Hover, Focused | Only on `<button>` / `<a>`: `:hover`, `:focus-visible`. Static mockups: `data-state` |

### Content

```html
<span class="sb-avatar" data-size="xl"><img src="…" alt="Nama Pengguna"></span>
<span class="sb-avatar" data-size="xl" role="img" aria-label="Nama Pengguna">NP</span>
<span class="sb-avatar" data-size="xl" role="img" aria-label="Pengguna"><svg aria-hidden="true"><!-- user --></svg></span>
```

Photo, then initials, then the placeholder. Photos take `alt` = the person's name; an avatar next to the name is decorative (`alt=""` or `aria-hidden`).

### Sizes

```html
<span class="sb-avatar" data-size="xs" role="img" aria-label="Nama Pengguna">NP<span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="sm" role="img" aria-label="Nama Pengguna">NP<span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="md" role="img" aria-label="Nama Pengguna">NP<span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="lg" role="img" aria-label="Nama Pengguna">NP<span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="xl" role="img" aria-label="Nama Pengguna">NP<span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="2xl" role="img" aria-label="Nama Pengguna">NP<span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
```

| Size | Box | Initials | Placeholder icon | Online dot | Company badge |
| --- | --- | --- | --- | --- | --- |
| `xs` | 24 | Text xs 12 / 18 | 16 | 6 | 10 |
| `sm` | 32 | Text sm 14 / 20 | 20 | 8 | 12 |
| `md` | 40 | Text md 16 / 24 | 24 | 10 | 14 |
| `lg` | 48 | Text lg 18 / 28 | 28 | 12 | 16 |
| `xl` | 56 | Text xl 20 / 30 | 32 | 14 | 18 |
| `2xl` | 64 | Display xs 24 / 32 | 32 | 16 | 20 |

### Status icons

#### Online indicator

```html
<span class="sb-avatar" data-size="xs"><img src="…" alt="Advisor A"><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="sm"><img src="…" alt="Advisor B"><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="md"><img src="…" alt="Reviewer C"><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="lg"><img src="…" alt="Analis D"><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="xl"><img src="…" alt="Analis E"><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="2xl"><img src="…" alt="Admin F"><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
```

#### Company

```html
<span class="sb-avatar" data-size="xs" role="img" aria-label="Advisor A">AA<img class="sb-avatar-company" src="…" alt="Asuransi A"></span>
<span class="sb-avatar" data-size="sm" role="img" aria-label="Advisor B">AB<img class="sb-avatar-company" src="…" alt="Asuransi A"></span>
<span class="sb-avatar" data-size="md" role="img" aria-label="Reviewer C">RC<img class="sb-avatar-company" src="…" alt="Asuransi A"></span>
<span class="sb-avatar" data-size="lg" role="img" aria-label="Analis D">AD<img class="sb-avatar-company" src="…" alt="Asuransi A"></span>
<span class="sb-avatar" data-size="xl" role="img" aria-label="Analis E">AE<img class="sb-avatar-company" src="…" alt="Asuransi A"></span>
<span class="sb-avatar" data-size="2xl" role="img" aria-label="Admin F">AF<img class="sb-avatar-company" src="…" alt="Asuransi A"></span>
```

The green cross logo here is a generic stand-in. Use the company's own logo file, with its name as `alt`.

### States

Only an avatar that is a button or a link (the account menu) has states. A static avatar has none.

| State | Look |
| --- | --- |
| Hover | 4 px `gray-100` ring outside the circle |
| Focused | 4 px `focus-ring` ring outside the circle (`:focus-visible`) |

### Avatar group

Overlapping avatars with a 1.5 px white ring. Hover or focus "+N" to see who else is in the group.

```html
<div class="sb-avatar-group" data-size="xs">
  <div class="sb-avatar-stack">
    <span class="sb-avatar" data-size="xs"><img src="…" alt="Advisor A"></span>
    <span class="sb-avatar" data-size="xs"><img src="…" alt="Advisor B"></span>
    <span class="sb-avatar" data-size="xs" role="img" aria-label="Reviewer C">RC</span>
    <span class="sb-avatar" data-size="xs"><img src="…" alt="Analis D"></span>
    <span class="sb-avatar" data-size="xs"><img src="…" alt="Analis E"></span>
    <span class="sb-tooltip-wrap">
      <button class="sb-avatar" type="button" data-size="xs" aria-label="5 anggota lain" aria-describedby="ag-xs-more">+5</button>
      <span class="sb-tooltip" role="tooltip" id="ag-xs-more" data-arrow="bottom-right"><span class="sb-tooltip-title">Admin F, Admin G, Reviewer H, Analis I, Admin J</span></span>
    </span>
  </div>
  <button class="sb-avatar-add" type="button" aria-label="Tambah anggota"><svg aria-hidden="true"><!-- plus --></svg></button>
</div>
<div class="sb-avatar-group" data-size="sm">
  <div class="sb-avatar-stack">
    <span class="sb-avatar" data-size="sm"><img src="…" alt="Advisor A"></span>
    <span class="sb-avatar" data-size="sm"><img src="…" alt="Advisor B"></span>
    <span class="sb-avatar" data-size="sm" role="img" aria-label="Reviewer C">RC</span>
    <span class="sb-avatar" data-size="sm"><img src="…" alt="Analis D"></span>
    <span class="sb-avatar" data-size="sm"><img src="…" alt="Analis E"></span>
    <span class="sb-tooltip-wrap">
      <button class="sb-avatar" type="button" data-size="sm" aria-label="5 anggota lain" aria-describedby="ag-sm-more">+5</button>
      <span class="sb-tooltip" role="tooltip" id="ag-sm-more" data-arrow="bottom-right"><span class="sb-tooltip-title">Admin F, Admin G, Reviewer H, Analis I, Admin J</span></span>
    </span>
  </div>
  <button class="sb-avatar-add" type="button" aria-label="Tambah anggota"><svg aria-hidden="true"><!-- plus --></svg></button>
</div>
<div class="sb-avatar-group" data-size="md">
  <div class="sb-avatar-stack">
    <span class="sb-avatar" data-size="md"><img src="…" alt="Advisor A"></span>
    <span class="sb-avatar" data-size="md"><img src="…" alt="Advisor B"></span>
    <span class="sb-avatar" data-size="md" role="img" aria-label="Reviewer C">RC</span>
    <span class="sb-avatar" data-size="md"><img src="…" alt="Analis D"></span>
    <span class="sb-avatar" data-size="md"><img src="…" alt="Analis E"></span>
    <span class="sb-tooltip-wrap">
      <button class="sb-avatar" type="button" data-size="md" aria-label="5 anggota lain" aria-describedby="ag-md-more">+5</button>
      <span class="sb-tooltip" role="tooltip" id="ag-md-more" data-arrow="bottom-right"><span class="sb-tooltip-title">Admin F, Admin G, Reviewer H, Analis I, Admin J</span></span>
    </span>
  </div>
  <button class="sb-avatar-add" type="button" aria-label="Tambah anggota"><svg aria-hidden="true"><!-- plus --></svg></button>
</div>
```

| Size | Overlap | "+N" avatar | Add button |
| --- | --- | --- | --- |
| `xs` | −4 | 24, `brand-50` fill, `brand-600` 12 / 18 Medium | 24, white, 1 px dashed `gray-300` border, `gray-400` plus icon |
| `sm` | −8 | 32, Text sm Medium | 32 |
| `md` | −12 | 40, Text md Medium | 40 |

- Gap 8 between the avatars and the add button. Show at most 5 avatars, then "+N".
- "+N" is a button that lists the rest: a tooltip for a short list, a popover when the list is long or actionable.
- The add button needs `aria-label="Tambah anggota"`.

### Avatar label group

```html
<div class="sb-avatar-label" data-size="sm">
  <span class="sb-avatar" data-size="sm" aria-hidden="true"><img src="…" alt=""></span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Advisor A</span>
    <span class="sb-avatar-sub">advisor.a@perusahaan.com</span>
  </span>
</div>
<div class="sb-avatar-label" data-size="md">
  <span class="sb-avatar" data-size="md" aria-hidden="true"><img src="…" alt=""><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Advisor A</span>
    <span class="sb-avatar-sub">advisor.a@perusahaan.com</span>
  </span>
</div>
<div class="sb-avatar-label" data-size="lg">
  <span class="sb-avatar" data-size="lg" aria-hidden="true"><img src="…" alt=""></span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Advisor A</span>
    <span class="sb-avatar-sub">advisor.a@perusahaan.com</span>
  </span>
</div>
<div class="sb-avatar-label" data-size="xl">
  <span class="sb-avatar" data-size="xl" aria-hidden="true"><img src="…" alt=""></span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Advisor A</span>
    <span class="sb-avatar-sub">advisor.a@perusahaan.com</span>
  </span>
</div>
```

| Size | Avatar | Gap | Name (Semibold `gray-700`) | Secondary (Regular `gray-500`) |
| --- | --- | --- | --- | --- |
| `sm` | 32 | 10 | Text sm 14 / 20 | Text xs 12 / 18 |
| `md` | 40 | 12 | Text sm 14 / 20 | Text sm 14 / 20 |
| `lg` | 48 | 12 | Text md 16 / 24 | Text md 16 / 24 |
| `xl` | 56 | 16 | Text lg 18 / 28 | Text md 16 / 24 |

#### Clickable

As a button or link the whole group is one hit target. Hover: avatar `gray-100` ring and name `gray-900`. Focus: avatar `focus-ring` ring and name `gray-900`.

```html
<button type="button" class="sb-avatar-label" data-size="md">
  <span class="sb-avatar" data-size="md" aria-hidden="true">NP</span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Nama Pengguna</span>
    <span class="sb-avatar-sub">email@perusahaan.com</span>
  </span>
</button>
<button type="button" class="sb-avatar-label" data-size="md">
  <span class="sb-avatar" data-size="md" aria-hidden="true">NP</span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Nama Pengguna</span>
    <span class="sb-avatar-sub">Hover</span>
  </span>
</button>
<button type="button" class="sb-avatar-label" data-size="md">
  <span class="sb-avatar" data-size="md" aria-hidden="true">NP</span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Nama Pengguna</span>
    <span class="sb-avatar-sub">Focused</span>
  </span>
</button>
```

#### Long text

Long names and emails truncate with an ellipsis; show the full value in a tooltip.

```html
<div class="sb-avatar-label" data-size="md">
  <span class="sb-avatar" data-size="md" aria-hidden="true">NS</span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Nama Pengguna yang Sangat Panjang Sekali</span>
    <span class="sb-avatar-sub">nama.pengguna.yang.panjang@perusahaan-asuransi.co.id</span>
  </span>
</div>
```

### Do and don't

**Do:** No photo: initials. No name either: the placeholder icon.

```html
<span class="sb-avatar" data-size="lg" role="img" aria-label="Nama Pengguna">NP</span>
<span class="sb-avatar" data-size="lg" role="img" aria-label="Nama Pengguna"><svg aria-hidden="true"><!-- user --></svg></span>
```

**Don't:** An empty circle, or three letters. Initials are at most two: first and last name.

```html
<span class="sb-avatar" data-size="lg" aria-hidden="true"></span>
<span class="sb-avatar" data-size="lg" aria-hidden="true">NPA</span>
```

### Accessibility

- A photo needs `alt` = the person's name. Initials and the placeholder use `role="img"` with `aria-label`.
- An avatar next to the visible name is decorative: `alt=""` or `aria-hidden="true"`, so the name is not read twice.
- The online dot is colour only: give it `role="img"` and `aria-label="Online"`.
- An avatar that opens a menu is a `<button>` with a label such as "Akun Nama Pengguna".

| Pair | Ratio | Needed | Result |
| --- | --- | --- | --- |
| Initials and icon `brand-600` on `brand-50` | 4.65:1 | 4.5:1 | Passes |
| Name `gray-700`, secondary `gray-500` on `white` | 10.46:1, 4.97:1 | 4.5:1 | Passes |
| Add button: plus `gray-400` on `white` | 2.58:1 | 3:1 | **Fails** |
| Add button: dashed border `gray-300` on `white` | 1.47:1 | 3:1 | **Fails** |

> **Warning:** The add button is a faint `gray-400` plus inside a `gray-300` dashed border, both below 3:1. Same open decision as the help icon and input borders: `gray-500` passes.

### Code

Load `tokens.css` and `avatar.css`. Avatar groups with "+N" also use `tooltip.css`. The initials helper is optional.

`avatar.css`

```css
/* Avatar, avatar group and avatar label group, Codemasters Design System
   Needs tokens.css.

   <span class="sb-avatar" data-size="md" role="img" aria-label="Nama Pengguna">NP</span>
   <span class="sb-avatar" data-size="md"><img src="foto.jpg" alt="Nama Pengguna"></span>

   Content     photo <img> | initials (text) | placeholder user icon <svg>. In that order of preference; never empty.
   data-size   xs 24 | sm 32 | md 40 | lg 48 | xl 56 | 2xl 64
   Status      <span class="sb-avatar-status" role="img" aria-label="Online"></span> (online dot)
               <img class="sb-avatar-company" src="logo.png" alt="Nama perusahaan"> (company badge)
   State       only when the avatar is a <button> or <a>: hover and :focus-visible rings.
               data-state="hover" | "focus" forces a state in static mockups and docs only. */

.sb-avatar {
  --av: 40px; --av-icon: 24px; --av-dot: 10px; --av-co: 14px;
  position: relative; display: inline-grid; place-items: center; flex: none; box-sizing: border-box;
  width: var(--av); height: var(--av); margin: 0; padding: 0; border: 0; border-radius: var(--radius-full);
  background: var(--bg-brand-subtle); color: var(--fg-brand); font: 500 var(--text-md) var(--font); text-decoration: none;
}
.sb-avatar[data-size="xs"]  { --av: 24px; --av-icon: 16px; --av-dot: 6px;  --av-co: 10px; font: 500 var(--text-xs) var(--font); }
.sb-avatar[data-size="sm"]  { --av: 32px; --av-icon: 20px; --av-dot: 8px;  --av-co: 12px; font: 500 var(--text-sm) var(--font); }
.sb-avatar[data-size="lg"]  { --av: 48px; --av-icon: 28px; --av-dot: 12px; --av-co: 16px; font: 500 var(--text-lg) var(--font); }
.sb-avatar[data-size="xl"]  { --av: 56px; --av-icon: 32px; --av-dot: 14px; --av-co: 18px; font: 500 var(--text-xl) var(--font); }
.sb-avatar[data-size="2xl"] { --av: 64px; --av-icon: 32px; --av-dot: 16px; --av-co: 20px; font: 500 var(--display-xs) var(--font); }
.sb-avatar > img:not(.sb-avatar-company) { width: 100%; height: 100%; border-radius: inherit; object-fit: cover; }
.sb-avatar > svg { width: var(--av-icon); height: var(--av-icon); }

/* Status, bottom-right, 1.5 px white border. Online: success-500 dot. Company: logo, 2 px outside the circle. */
.sb-avatar-status { position: absolute; right: 0; bottom: 0; box-sizing: border-box; width: var(--av-dot); height: var(--av-dot); border: 1.5px solid var(--bg-primary); border-radius: var(--radius-full); background: var(--success-500); }
.sb-avatar-company { position: absolute; right: -2px; bottom: -2px; box-sizing: border-box; width: var(--av-co); height: var(--av-co); border: 1.5px solid var(--bg-primary); border-radius: var(--radius-full); background: var(--bg-primary); object-fit: cover; }

/* States: only for an avatar that is a button or link (account menu). A 4 px ring outside the circle. */
:is(button, a).sb-avatar { cursor: pointer; transition: box-shadow 150ms var(--ease); }
:is(button, a).sb-avatar:is(:hover, [data-state="hover"]) { box-shadow: 0 0 0 4px var(--bg-tertiary); }
:is(button, a).sb-avatar:is(:focus-visible, [data-state="focus"]) { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }

/* ---- Avatar group: overlapping avatars with a 1.5 px white ring, then "+N", then the add button 8 apart. */
.sb-avatar-group { --av-overlap: -12px; display: inline-flex; align-items: center; gap: 8px; }
.sb-avatar-group[data-size="xs"] { --av-overlap: -4px; }
.sb-avatar-group[data-size="sm"] { --av-overlap: -8px; }
.sb-avatar-stack { display: flex; align-items: center; }
.sb-avatar-stack > :is(.sb-avatar, .sb-tooltip-wrap) + * { margin-left: var(--av-overlap); }
.sb-avatar-stack .sb-avatar { box-shadow: 0 0 0 1.5px var(--bg-primary); }
.sb-avatar-stack button.sb-avatar:is(:focus-visible, [data-state="focus"]) { box-shadow: 0 0 0 1.5px var(--bg-primary), 0 0 0 5.5px var(--focus-ring); }
/* Add: white, dashed gray-300 border, gray-400 plus icon at half the box. */
.sb-avatar-add {
  display: inline-grid; place-items: center; flex: none; box-sizing: border-box; width: var(--av, 40px); height: var(--av, 40px);
  margin: 0; padding: 0; border: 1px dashed var(--border-primary); border-radius: var(--radius-full); background: var(--raised-sheen-light) var(--bg-primary); color: var(--fg-quaternary); cursor: pointer;
  transition-property: color, border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-avatar-group[data-size="xs"] .sb-avatar-add { --av: 24px; }
.sb-avatar-group[data-size="sm"] .sb-avatar-add { --av: 32px; }
.sb-avatar-add > svg { width: calc(var(--av, 40px) / 2); height: calc(var(--av, 40px) / 2); }
.sb-avatar-add:is(:hover, [data-state="hover"]) { border-color: var(--border-strong); color: var(--text-quaternary); }
.sb-avatar-add:is(:focus-visible, [data-state="focus"]) { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }

/* ---- Avatar label group: avatar + name + secondary line. Long text truncates (show it in a tooltip). */
.sb-avatar-label { display: inline-flex; align-items: center; gap: 12px; max-width: 100%; margin: 0; padding: 0; border: 0; background: none; text-align: start; text-decoration: none; }
.sb-avatar-label[data-size="sm"] { gap: 10px; } /* between the 8 and 12 steps */
.sb-avatar-label[data-size="xl"] { gap: 16px; }
.sb-avatar-label-text { display: grid; min-width: 0; }
.sb-avatar-name, .sb-avatar-sub { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sb-avatar-name { font: 600 var(--text-sm) var(--font); color: var(--text-secondary); transition: color 150ms var(--ease); }
.sb-avatar-sub { font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }
.sb-avatar-label[data-size="sm"] .sb-avatar-sub { font: 400 var(--text-xs) var(--font); }
.sb-avatar-label[data-size="lg"] .sb-avatar-name { font: 600 var(--text-md) var(--font); }
.sb-avatar-label[data-size="xl"] .sb-avatar-name { font: 600 var(--text-lg) var(--font); }
.sb-avatar-label:is([data-size="lg"], [data-size="xl"]) .sb-avatar-sub { font: 400 var(--text-md) var(--font); }
/* Clickable group (button or link): one hit target; the avatar takes the ring, the name darkens. */
:is(button, a).sb-avatar-label { cursor: pointer; }
:is(button, a).sb-avatar-label:focus-visible { outline: none; }
:is(button, a).sb-avatar-label:is(:hover, [data-state="hover"]) .sb-avatar { box-shadow: 0 0 0 4px var(--bg-tertiary); }
:is(button, a).sb-avatar-label:is(:focus-visible, [data-state="focus"]) .sb-avatar { box-shadow: 0 0 0 4px var(--focus-ring); }
:is(button, a).sb-avatar-label:is(:hover, :focus-visible, [data-state]) .sb-avatar-name { color: var(--text-primary); }
.sb-avatar-label .sb-avatar { transition: box-shadow 150ms var(--ease); }

@media (prefers-reduced-motion: reduce) {
  .sb-avatar, .sb-avatar-add, .sb-avatar-name { transition: none; }
}
```

#### Initials helper

`avatar-initials.js`

```js
// Avatar initials: first + last name, at most 2 letters. When there is no photo, show these;
// when there is no name either, show the placeholder user icon. Never leave an avatar empty.
function initials(name) {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return '';
  return ((words[0][0] || '') + (words.length > 1 ? words[words.length - 1][0] : '')).toUpperCase();
}

// initials('Nama Pengguna') === 'NP', initials('Advisor') === 'A'
```

## Badge

A small, non-interactive label for a status, category or count. Status pills, claim type tags, AI confidence and filter chips are all badges.

### Usage

- **A badge is not a button.** If it does something, use a Button. The only interactive part allowed is the X close icon.
- **Status always has a text label.** Colour alone never carries meaning.
- **One size per context:** `sm` in tables and dense lists, `md` in headers and cards, `lg` in large summary areas.
- **One colour pair per status.** A claim status keeps the same colour in tables, headers, summary cards and filters (see Status pills).

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | Radius 16 (fully rounded), no border. Height and padding from the size. Fill `50` of the colour family (Gray: `gray-100`). |
| 2 | Leading element | Optional: 8 px dot, 16 px flag or avatar, or a 12 px icon. Dot and icons use the `500` step. |
| 3 | Label | Medium weight. Text xs at `sm`, Text sm at `md` and `lg`. Text in the `700` step. |
| 4 | Trailing element | Optional: 12 px icon, or the X close button that removes the badge. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Size | `sm`, `md`, `lg` | `data-size="sm"` |
| Icon | False, Dot, Country, Avatar, X close, Icon left, Icon right, Only | `data-icon="dot"`, `"country"`, `"avatar"`, `"x-close"`, `"icon-left"`, `"icon-right"`, `"only"` |
| Color | Gray, Primary, Error, Warning, Success, Blue gray, Blue light, Blue, Indigo, Purple, Pink, Rosé, Orange | `data-color="success"` (omit for Gray) |

### Sizes

```html
<span class="sb-badge" data-size="sm" data-color="primary">Badge sm</span>
<span class="sb-badge" data-size="md" data-color="primary">Badge md</span>
<span class="sb-badge" data-size="lg" data-color="primary">Badge lg</span>
```

| Size | Height | Padding | Text style | Icon-only |
| --- | --- | --- | --- | --- |
| `sm` | 22 | `2 8` | Text xs / Medium | 20 × 20 |
| `md` | 24 | `2 10` | Text sm / Medium | 24 × 24 |
| `lg` | 28 | `4 12` | Text sm / Medium | 28 × 28 |

### Icon

```html
<span class="sb-badge" data-size="sm" data-color="success" data-icon="dot">
  <span class="sb-badge-dot" aria-hidden="true"></span>
  Aktif
</span>
<span class="sb-badge" data-size="sm" data-icon="country">
  <span class="sb-badge-img" aria-hidden="true"><svg aria-hidden="true"><!-- flag-id --></svg></span>
  Indonesia
</span>
<span class="sb-badge" data-size="sm" data-color="primary" data-icon="avatar">
  <span class="sb-badge-img sb-badge-avatar" aria-hidden="true"><svg aria-hidden="true"><!-- user --></svg></span>
  Advisor
</span>
<span class="sb-badge" data-size="sm" data-color="success" data-icon="icon-left">
  <svg aria-hidden="true"><!-- arrow-up --></svg>
  12%
</span>
<span class="sb-badge" data-size="sm" data-color="primary" data-icon="icon-right">
  Lihat
  <svg aria-hidden="true"><!-- arrow-right --></svg>
</span>
<span class="sb-badge" data-size="sm" data-icon="x-close">
  Inpatient
  <button class="sb-badge-x" type="button" aria-label="Hapus Inpatient"><svg aria-hidden="true"><!-- x --></svg></button>
</span>
<span class="sb-badge" data-size="sm" data-color="error" data-icon="only" role="img" aria-label="Naik">
  <svg aria-hidden="true"><!-- arrow-up --></svg>
</span>
```

| Icon | Element | Gap | Padding change (sm) |
| --- | --- | --- | --- |
| Dot | 8 px dot, `500` step | 6 | left 6 (md: left 8) |
| Country, Avatar | 16 px round flag or avatar | 6 | left 3 |
| Icon left | 12 px icon, e.g. arrow-up for a trend | 4 | left 6 |
| Icon right | 12 px icon, e.g. arrow-right | 4 | right 6 |
| X close | 12 px × button that removes the badge | 4 | right 6 |
| Only | 12 px icon, no label; needs an `aria-label` | — | padding 4 |

> **Note:** Every size follows the same padding rule: the icon side is 2 px tighter than the text side, and a flag or avatar sits as far from the edge as from the top and bottom.

#### Chips (X close)

A filter chip is a Gray `sm` badge with X close. The × button is the only interactive part and says what it removes: `aria-label="Hapus Inpatient"`.

```html
<span class="sb-badge" data-size="sm" data-icon="x-close">
  Inpatient
  <button class="sb-badge-x" type="button" aria-label="Hapus Inpatient"><svg aria-hidden="true"><!-- x --></svg></button>
</span>
<span class="sb-badge" data-size="sm" data-icon="x-close">
  Outpatient
  <button class="sb-badge-x" type="button" aria-label="Hapus Outpatient"><svg aria-hidden="true"><!-- x --></svg></button>
</span>
<span class="sb-badge" data-size="sm" data-icon="x-close">
  Cashless
  <button class="sb-badge-x" type="button" aria-label="Hapus Cashless"><svg aria-hidden="true"><!-- x --></svg></button>
</span>
```

### Colours

Every colour uses the same steps of its scale: fill `50`, text `700`, dot and icons `500`. **Gray** is the exception: fill `gray-100`, text `gray-700`, dot `gray-500`.

| Color | Token family | Use in the app |
| --- | --- | --- |
| Gray | `gray` (fill 100) | Neutral info, Baru, chips |
| Primary | `brand` | Selected filters, Sembuh AI labels |
| Error | `error` | Ditolak, AI confidence < 80 % |
| Warning | `warning` | Memeriksa Eligibility, AI confidence 80–89 % |
| Success | `success` | Disetujui, AI confidence ≥ 90 % |
| Blue gray | `blue-gray` | Single / Multiple claim type |
| Blue light | `blue-light` | Not used yet |
| Blue | `blue` | Siap dianalisis, Inpatient |
| Indigo | `indigo` | Siap diekstrak, Optical |
| Purple | `purple` | Siap Ditinjau, Outpatient |
| Pink | `pink` | Maternity |
| Rosé | `rose` | Not used yet |
| Orange | `orange` | Perlu Revisi, Potensi Duplikat, Dental |

The fill is the plain `50` colour of the family.

### Status pills

Every claim status has one fixed colour pair, used in tables, headers, summary cards and filters alike. Each pill is a Badge `sm`.

| Colour | Statuses |
| --- | --- |
| Gray | Baru |
| Indigo | Siap diekstrak |
| Blue | Siap dianalisis (list), Memeriksa FWA, Sedang Ditinjau, Proses QC |
| Purple | Siap dianalisis (detail), Siap Ditinjau, Sedang dianalisis |
| Warning | Memeriksa Eligibility |
| Orange | Memeriksa FWA (list), Perlu Revisi, Potensi Duplikat |
| Success | Disetujui: Sembuh, Disetujui: TPA |
| Error | Ditolak |
| Blue gray | Single, Multiple |

> **Warning:** **Open question from DESIGN.md §2.5.** Siap dianalisis is Blue in the list and Purple on the detail page, and Memeriksa FWA is both Blue and Orange. That breaks the one-colour-per-status rule. Pick one colour for each before the next release.

#### Claim type tags

```html
<span class="sb-badge" data-size="sm" data-color="blue">Inpatient</span>
<span class="sb-badge" data-size="sm" data-color="purple">Outpatient</span>
<span class="sb-badge" data-size="sm" data-color="pink">Maternity</span>
<span class="sb-badge" data-size="sm" data-color="indigo">Optical</span>
<span class="sb-badge" data-size="sm" data-color="orange">Dental</span>
```

#### AI confidence

**≥ 90 %** Success, **80–89 %** Warning, **< 80 %** Error. Below 80 % the claim also shows a warning banner: "AI confidence berada dibawah 80%, silakan periksa klaim kembali."

```html
<span class="sb-badge" data-size="sm" data-color="success">95%</span>
<span class="sb-badge" data-size="sm" data-color="warning">84%</span>
<span class="sb-badge" data-size="sm" data-color="error">72%</span>
```

### Badge group

A badge plus a short message in one pill, for announcements and inline notices ("Fitur baru · …", "Error · Ada masalah …"). When the whole group links somewhere, add the arrow icon and make the full pill the link target.

```html
<a class="sb-badge-group" href="#/badge/badge-group" data-size="md" data-color="primary" data-theme="light">
  <span class="sb-badge" data-size="sm">Fitur baru</span>
  Ringkasan AI kini bisa diedit
  <svg aria-hidden="true"><!-- arrow-right --></svg>
</a>
<a class="sb-badge-group" href="#/badge/badge-group" data-size="lg" data-color="primary" data-theme="light" data-badge="trailing">
  Ringkasan AI kini bisa diedit
  <span class="sb-badge" data-size="md">Baru</span>
  <svg aria-hidden="true"><!-- arrow-right --></svg>
</a>
```

| Property | Values | Code |
| --- | --- | --- |
| Badge | Leading, Trailing | `data-badge="trailing"` (omit for Leading) |
| Icon | True, False | 12 px arrow-right `<svg>` at the end |
| Size | `md`, `lg` | `data-size="md"` |
| Color | Primary, Gray, Error, Warning, Success | `data-color="primary"` |
| Theme | Light, Medium, Dark | `data-theme="light"` |

| Part | `md` | `lg` |
| --- | --- | --- |
| Container | radius 16, padding 4, gap 8 | radius 16, padding 4, gap 12 |
| Padding on the message side | 12 | 14 |
| Message text | Text xs / Medium, `700` | Text sm / Medium, `700` |
| Inner badge | Badge `sm` | Badge `md` |

| Theme | Container | Inner badge |
| --- | --- | --- |
| Light | `50` | `white` fill, `700` text |
| Medium | `100` | `50` fill, `700` text |
| Dark | `50` | solid `600` fill (Gray: `gray-700`), `white` text |

### Do and don't

**Do:** Status in colour and in words.

```html
<span class="sb-badge" data-size="sm" data-color="error" data-icon="dot">
  <span class="sb-badge-dot" aria-hidden="true"></span>
  Ditolak
</span>
```

**Don't:** Colour alone. Users who cannot tell red from orange lose the status.

```html
<span class="sb-badge" data-size="sm" data-color="error" data-icon="only" role="img" aria-label="Ditolak">
  <svg aria-hidden="true"><!-- x --></svg>
</span>
```

**Do:** An action is a Button.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Lihat Detail</button>
```

**Don't:** A badge that looks clickable. Badges label; they do not act.

```html
<span class="sb-badge" data-size="sm" data-color="primary" data-icon="icon-right">
  Lihat Detail
  <svg aria-hidden="true"><!-- arrow-right --></svg>
</span>
```

### Accessibility

- Write the status as text. A dot or colour only supports it.
- Icon-only badges need `role="img"` and an `aria-label`.
- The X close button needs `aria-label="Hapus …"` that names what it removes, and a visible focus outline.
- A badge group that links somewhere is one `<a>`: the whole pill is the target.

Text on fill, WCAG 2.1. AA needs 4.5:1; badge text is 12–14 px.

| Pair | Ratio | AA |
| --- | --- | --- |
| Badge `700` on `50`, all 13 colours | 5.13:1 (Success) to 9.49:1 (Gray) | Passes |
| Badge group Medium: `700` on `100` | 4.72:1 (Orange) to 9.49:1 (Gray); the five group colours ≥ 4.76:1 | Passes |
| Badge group Dark: `white` on `600`, Primary / Error / Gray | 5.06:1 / 4.83:1 / 10.46:1 | Passes |
| Badge group Dark: `white` on `warning-600` | 3.49:1 | **Fails** |
| Badge group Dark: `white` on `success-600` | 3.73:1 | **Fails** |

> **Warning:** Dark theme inner badges fail AA on Warning and Success. Use Light or Medium for those colours, or move the Dark fill to `700` (white on `warning-700` is 5.43:1, on `success-700` 5.41:1). Decision for the design team.

### Code

Load `tokens.css`, then `badge.css`. It covers Badge and Badge group.

`badge.css`

```css
/* Badge, Codemasters Design System
   Needs tokens.css.

   <span class="sb-badge" data-size="sm" data-color="success">Disetujui: Sembuh</span>

   data-size   sm | md | lg
   data-color  gray | primary | error | warning | success | blue-gray | blue-light | blue | indigo | purple | pink | rose | orange
   data-icon   dot | country | avatar | icon-left | icon-right | x-close | only   (omit for text only)
   A badge is not a button. The only interactive part allowed is the X close button (aria-label "Hapus …"). */

.sb-badge {
  --bdg-h: 22px; --bdg-px: 8px; --bdg-type: var(--text-xs);
  --bdg-bg: var(--bg-tertiary); --bdg-fg: var(--text-secondary); --bdg-icon: var(--text-quaternary);
  box-sizing: border-box;
  display: inline-flex; align-items: center; gap: 4px;
  height: var(--bdg-h); padding: 0 var(--bdg-px);
  font: 500 var(--bdg-type) var(--font); white-space: nowrap;
  color: var(--bdg-fg); background: var(--bdg-bg);
  border-radius: var(--radius-xl); /* fully rounded, no border */
}
.sb-badge > svg { width: 12px; height: 12px; flex: none; color: var(--bdg-icon); }
.sb-badge-dot { width: 8px; height: 8px; flex: none; border-radius: var(--radius-full); background: var(--bdg-icon); }
.sb-badge-img { display: inline-flex; width: 16px; height: 16px; flex: none; border-radius: var(--radius-full); overflow: hidden; }
.sb-badge-img > svg { width: 100%; height: 100%; }
/* Placeholder avatar: user icon in brand-600 on brand-50 (DESIGN.md Avatar). Real screens use the photo or initials. */
.sb-badge-avatar { align-items: center; justify-content: center; background: var(--bg-brand-subtle); color: var(--fg-brand); }
.sb-badge-avatar > svg { width: 12px; height: 12px; }
.sb-badge-x {
  display: inline-flex; margin: -2px; padding: 2px; border: 0; border-radius: var(--radius-sm);
  background: none; color: var(--bdg-icon); cursor: pointer;
  transition: color 150ms var(--ease);
}
.sb-badge-x > svg { width: 12px; height: 12px; }
.sb-badge-x:hover { color: var(--bdg-fg); }
.sb-badge-x:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 0; }

/* Sizes. Height comes from the text line plus the vertical padding (sm 2, md 2, lg 4). */
.sb-badge[data-size="md"] { --bdg-h: 24px; --bdg-px: 10px; --bdg-type: var(--text-sm); }
.sb-badge[data-size="lg"] { --bdg-h: 28px; --bdg-px: 12px; --bdg-type: var(--text-sm); }

/* Icon variants. md and lg follow the sm rule. */
.sb-badge[data-icon="dot"], .sb-badge[data-icon="icon-left"] { padding-inline-start: calc(var(--bdg-px) - 2px); }
.sb-badge[data-icon="icon-right"], .sb-badge[data-icon="x-close"] { padding-inline-end: calc(var(--bdg-px) - 2px); }
.sb-badge[data-icon="dot"], .sb-badge[data-icon="country"], .sb-badge[data-icon="avatar"] { gap: 6px; }
.sb-badge[data-icon="country"], .sb-badge[data-icon="avatar"] { padding-inline-start: calc((var(--bdg-h) - 16px) / 2); }
.sb-badge[data-icon="only"] { width: var(--bdg-h); padding: 0; justify-content: center; }
.sb-badge[data-icon="only"]:not([data-size="md"], [data-size="lg"]) { --bdg-h: 20px; }

/* Colours */
.sb-badge[data-color="primary"] { --bdg-bg: var(--brand-50); --bdg-fg: var(--brand-700); --bdg-icon: var(--brand-500); }
.sb-badge[data-color="error"] { --bdg-bg: var(--error-50); --bdg-fg: var(--error-700); --bdg-icon: var(--error-500); }
.sb-badge[data-color="warning"] { --bdg-bg: var(--warning-50); --bdg-fg: var(--warning-700); --bdg-icon: var(--warning-500); }
.sb-badge[data-color="success"] { --bdg-bg: var(--success-50); --bdg-fg: var(--success-700); --bdg-icon: var(--success-500); }
.sb-badge[data-color="blue-gray"] { --bdg-bg: var(--blue-gray-50); --bdg-fg: var(--blue-gray-700); --bdg-icon: var(--blue-gray-500); }
.sb-badge[data-color="blue-light"] { --bdg-bg: var(--blue-light-50); --bdg-fg: var(--blue-light-700); --bdg-icon: var(--blue-light-500); }
.sb-badge[data-color="blue"] { --bdg-bg: var(--blue-50); --bdg-fg: var(--blue-700); --bdg-icon: var(--blue-500); }
.sb-badge[data-color="indigo"] { --bdg-bg: var(--indigo-50); --bdg-fg: var(--indigo-700); --bdg-icon: var(--indigo-500); }
.sb-badge[data-color="purple"] { --bdg-bg: var(--purple-50); --bdg-fg: var(--purple-700); --bdg-icon: var(--purple-500); }
.sb-badge[data-color="pink"] { --bdg-bg: var(--pink-50); --bdg-fg: var(--pink-700); --bdg-icon: var(--pink-500); }
.sb-badge[data-color="rose"] { --bdg-bg: var(--rose-50); --bdg-fg: var(--rose-700); --bdg-icon: var(--rose-500); }
.sb-badge[data-color="orange"] { --bdg-bg: var(--orange-50); --bdg-fg: var(--orange-700); --bdg-icon: var(--orange-500); }
/* Dark theme: the 950 step as the fill, 300 text, 400 icon. */
:root[data-theme="dark"] .sb-badge[data-color="primary"] { --bdg-bg: var(--brand-950); --bdg-fg: var(--brand-300); --bdg-icon: var(--brand-400); }
:root[data-theme="dark"] .sb-badge[data-color="error"] { --bdg-bg: var(--error-950); --bdg-fg: var(--error-300); --bdg-icon: var(--error-400); }
:root[data-theme="dark"] .sb-badge[data-color="warning"] { --bdg-bg: var(--warning-950); --bdg-fg: var(--warning-300); --bdg-icon: var(--warning-400); }
:root[data-theme="dark"] .sb-badge[data-color="success"] { --bdg-bg: var(--success-950); --bdg-fg: var(--success-300); --bdg-icon: var(--success-400); }
:root[data-theme="dark"] .sb-badge[data-color="blue-gray"] { --bdg-bg: var(--blue-gray-950); --bdg-fg: var(--blue-gray-300); --bdg-icon: var(--blue-gray-400); }
:root[data-theme="dark"] .sb-badge[data-color="blue-light"] { --bdg-bg: var(--blue-light-950); --bdg-fg: var(--blue-light-300); --bdg-icon: var(--blue-light-400); }
:root[data-theme="dark"] .sb-badge[data-color="blue"] { --bdg-bg: var(--blue-950); --bdg-fg: var(--blue-300); --bdg-icon: var(--blue-400); }
:root[data-theme="dark"] .sb-badge[data-color="indigo"] { --bdg-bg: var(--indigo-950); --bdg-fg: var(--indigo-300); --bdg-icon: var(--indigo-400); }
:root[data-theme="dark"] .sb-badge[data-color="purple"] { --bdg-bg: var(--purple-950); --bdg-fg: var(--purple-300); --bdg-icon: var(--purple-400); }
:root[data-theme="dark"] .sb-badge[data-color="pink"] { --bdg-bg: var(--pink-950); --bdg-fg: var(--pink-300); --bdg-icon: var(--pink-400); }
:root[data-theme="dark"] .sb-badge[data-color="rose"] { --bdg-bg: var(--rose-950); --bdg-fg: var(--rose-300); --bdg-icon: var(--rose-400); }
:root[data-theme="dark"] .sb-badge[data-color="orange"] { --bdg-bg: var(--orange-950); --bdg-fg: var(--orange-300); --bdg-icon: var(--orange-400); }

/* Badge group: a badge plus a short message in one pill.
   <a class="sb-badge-group" href="…" data-color="primary" data-theme="light">
     <span class="sb-badge" data-size="sm">Fitur baru</span>
     Ringkasan AI kini bisa diedit
     <svg aria-hidden="true">…arrow-right…</svg>
   </a>
   data-size md | lg, data-color primary | gray | error | warning | success,
   data-theme light | medium | dark, data-badge leading | trailing */
.sb-badge-group {
  --g50: var(--brand-50); --g100: var(--brand-100); --g500: var(--brand-500); --g600: var(--brand-600); --g700: var(--brand-700);
  box-sizing: border-box;
  display: inline-flex; align-items: center; gap: 8px;
  padding: 4px; padding-inline-end: 12px;
  font: 500 var(--text-xs) var(--font); white-space: nowrap; text-decoration: none;
  color: var(--g700); background: var(--g50);
  border-radius: var(--radius-xl);
}
.sb-badge-group > svg { width: 12px; height: 12px; flex: none; color: var(--g500); }
.sb-badge-group > .sb-badge { --bdg-bg: var(--bg-primary); --bdg-fg: var(--g700); --bdg-icon: var(--g500); }
.sb-badge-group[data-size="lg"] { gap: 12px; padding-inline-end: 14px; font-size: 14px; line-height: 20px; }
.sb-badge-group[data-badge="trailing"] { padding-inline: 12px 4px; }
.sb-badge-group[data-badge="trailing"][data-size="lg"] { padding-inline: 14px 4px; }
.sb-badge-group[data-theme="medium"] { background: var(--g100); }
.sb-badge-group[data-theme="medium"] > .sb-badge { --bdg-bg: var(--g50); }
.sb-badge-group[data-theme="dark"] > .sb-badge { --bdg-bg: var(--g600); --bdg-fg: var(--white); --bdg-icon: var(--white); }
.sb-badge-group[data-color="gray"] { --g50: var(--gray-50); --g100: var(--gray-100); --g500: var(--gray-500); --g600: var(--gray-700); --g700: var(--gray-700); }
.sb-badge-group[data-color="error"] { --g50: var(--error-50); --g100: var(--error-100); --g500: var(--error-500); --g600: var(--error-600); --g700: var(--error-700); }
.sb-badge-group[data-color="warning"] { --g50: var(--warning-50); --g100: var(--warning-100); --g500: var(--warning-500); --g600: var(--warning-600); --g700: var(--warning-700); }
.sb-badge-group[data-color="success"] { --g50: var(--success-50); --g100: var(--success-100); --g500: var(--success-500); --g600: var(--success-600); --g700: var(--success-700); }
/* Dark theme: the same steps mirrored around 500 (950 fill, 900 medium fill, 300 text, 400 icon). */
:root[data-theme="dark"] .sb-badge-group { --g50: var(--brand-950); --g100: var(--brand-900); --g500: var(--brand-400); --g700: var(--brand-300); }
:root[data-theme="dark"] .sb-badge-group[data-color="gray"] { --g50: var(--gray-950); --g100: var(--gray-900); --g500: var(--gray-400); --g700: var(--gray-300); }
:root[data-theme="dark"] .sb-badge-group[data-color="error"] { --g50: var(--error-950); --g100: var(--error-900); --g500: var(--error-400); --g700: var(--error-300); }
:root[data-theme="dark"] .sb-badge-group[data-color="warning"] { --g50: var(--warning-950); --g100: var(--warning-900); --g500: var(--warning-400); --g700: var(--warning-300); }
:root[data-theme="dark"] .sb-badge-group[data-color="success"] { --g50: var(--success-950); --g100: var(--success-900); --g500: var(--success-400); --g700: var(--success-300); }
a.sb-badge-group:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
```

## Banner

A message about a page, a card or a form in one of four roles: info, success, warning and error. Inline inside the content, or as a full-width strip under the header bar.

### Usage

- Use a banner for a message that stays while it is true: a claim needs review, a form could not be sent, the plan is old. For a short confirmation that goes away by itself, use a Toast.
- Pick the tone by what the person must do. Error: fix something before going on. Warning: check something before deciding. Success: an action worked and changed something lasting. Info: context that helps, nothing to do.
- Inline banners sit at the top of the card or form they are about. Page banners sit under the header bar and are about the whole page.
- One banner per place. Two messages of the same tone become one banner; never stack three.
- The title says what happened in a few words; the description says why and what to do next. A short message needs only one line.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | Radius 8, padding `14 16`, 1 px border in the tone's 200 step, fill in its 50 step. Icon and text 12 apart. |
| 2 | Icon | 20 px, the tone's 500 step: `info`, `check-circle`, `alert`, `alert-circle`. Top-aligned with the first line. |
| 3 | Title | Optional. Text sm / Semibold, the tone's 700 step. |
| 4 | Description | Text sm / Regular, the tone's 700 step, 4 below the title. Links inside are Semibold and underlined in the same colour. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Tone | Info, Success, Warning, Error | `data-tone` (omit for Info) |
| Placement | Inline, Page | `data-placement="page"` (omit for Inline) |
| Title | True, False | `<p class="sb-banner-title">` before the description |

### Types

#### Tones

| Tone | Fill | Border | Text | Icon |
| --- | --- | --- | --- | --- |
| Info | `blue-50` | `blue-200` | `blue-700` | `blue-500` `info` |
| Success | `success-50` | `success-200` | `success-700` | `success-500` `check-circle` |
| Warning | `warning-50` | `warning-200` | `warning-700` | `warning-500` `alert` |
| Error | `error-50` | `error-200` | `error-700` | `error-500` `alert-circle` |

#### One line

Without a title, for short messages. The container is 48 high.

```html
<div class="sb-banner">
  <svg aria-hidden="true"><!-- info --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-desc">Data peserta diperbarui dari sistem polis 5 menit lalu.</p>
  </div>
</div>
```

#### Page

Full width under the header bar: no radius, no side borders, only a bottom border; padding `12 32` so the text lines up with the page content.

### Dark theme

On dark surfaces the 50 fill glows, so the fill is 12 % of the tone's 500 over `gray-900`, with an 800 border, 300 text and 400 icon. Switch the theme in the site header to compare.

### Do and don't

**Do:** Says what went wrong and how to fix it.

```html
<div class="sb-banner" data-tone="error">
  <svg aria-hidden="true"><!-- alert-circle --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-title">Klaim gagal dikirim</p>
    <p class="sb-banner-desc">Nomor polis tidak ditemukan. Periksa nomor di kartu peserta, lalu kirim lagi.</p>
  </div>
</div>
```

**Don't:** A vague error. The person cannot act on it.

```html
<div class="sb-banner" data-tone="error">
  <svg aria-hidden="true"><!-- alert-circle --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-title">Terjadi kesalahan</p>
    <p class="sb-banner-desc">Silakan coba lagi nanti.</p>
  </div>
</div>
```

**Do:** Related messages of one tone in one banner.

```html
<div class="sb-banner" data-tone="warning">
  <svg aria-hidden="true"><!-- alert --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-desc">3 item melewati batas manfaat dan 1 obat di luar formularium.</p>
  </div>
</div>
```

**Don't:** A stack of banners. None of them stands out.

```html
<div class="sb-banner" data-tone="warning">
  <svg aria-hidden="true"><!-- alert --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-desc">3 item melewati batas manfaat.</p>
  </div>
</div>
<div class="sb-banner" data-tone="warning">
  <svg aria-hidden="true"><!-- alert --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-desc">1 obat di luar formularium.</p>
  </div>
</div>
<div class="sb-banner">
  <svg aria-hidden="true"><!-- info --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-desc">Plan 2025 dipakai.</p>
  </div>
</div>
```

### Accessibility

- The tone never shows by colour alone: each tone has its own icon, and the text says what happened.
- The icon is decoration (`aria-hidden`); the title carries the meaning.
- A banner that is on the page when it loads needs no role. A banner that appears after an action gets `role="alert"` (error, warning) or `role="status"` (info, success), so screen readers announce it.
- After a failed submit, move focus to the error banner (give it `tabindex="-1"`) so keyboard users land on the message.

| Text | On | Light | Dark | AA |
| --- | --- | --- | --- | --- |
| Info `blue-700` / dark `blue-300` | fill | 5.57:1 | 8.58:1 | Passes |
| Success `success-700` / `success-300` | fill | 5.13:1 | 9.82:1 | Passes |
| Warning `warning-700` / `warning-300` | fill | 5.20:1 | 9.63:1 | Passes |
| Error `error-700` / `error-300` | fill | 6.05:1 | 8.25:1 | Passes |

### Code

Load `tokens.css`, then `banner.css`. No script.

`banner.css`

```css
/* Banner, Codemasters Design System
   Needs tokens.css. No script.

   <div class="sb-banner" data-tone="warning">
     <svg aria-hidden="true">…alert…</svg>
     <div class="sb-banner-text">
       <p class="sb-banner-title">Klaim perlu ditinjau ulang</p>
       <p class="sb-banner-desc">3 item melewati batas manfaat rawat inap.</p>
     </div>
   </div>

   data-tone       info | success | warning | error (the icon follows the tone: info, check-circle, alert, alert-circle)
   data-placement  page: a full-width strip under the header bar (omit for inline, inside a card or form)
   One line        drop .sb-banner-title and keep only .sb-banner-desc
   role            role="alert" (error, warning) or role="status" (info, success) only when the banner appears after an action */

.sb-banner {
  --ban-bg: var(--blue-50); --ban-border: var(--blue-200); --ban-fg: var(--blue-700); --ban-icon: var(--blue-500);
  box-sizing: border-box; display: flex; align-items: flex-start; gap: 12px;
  padding: 14px 16px; /* control padding exception: 14 + the 20 px line lands one line on 48 */
  border: 1px solid var(--ban-border); border-radius: var(--radius-md);
  background: var(--ban-bg); font: 400 var(--text-sm) var(--font); color: var(--ban-fg);
}
.sb-banner > svg { width: 20px; height: 20px; flex: none; color: var(--ban-icon); }
.sb-banner-text { display: grid; flex: 1; gap: 4px; min-width: 0; }
.sb-banner-title, .sb-banner-desc { margin: 0; }
.sb-banner-title { font-weight: 600; }
.sb-banner a { color: inherit; font-weight: 600; text-decoration: underline; text-underline-offset: 2px; }
.sb-banner a:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; border-radius: var(--radius-sm); }

.sb-banner[data-tone="success"] { --ban-bg: var(--success-50); --ban-border: var(--success-200); --ban-fg: var(--success-700); --ban-icon: var(--success-500); }
.sb-banner[data-tone="warning"] { --ban-bg: var(--warning-50); --ban-border: var(--warning-200); --ban-fg: var(--warning-700); --ban-icon: var(--warning-500); }
.sb-banner[data-tone="error"] { --ban-bg: var(--error-50); --ban-border: var(--error-200); --ban-fg: var(--error-700); --ban-icon: var(--error-500); }

/* Page: full width under the header bar. No radius and no side borders, padding 12 32 (the page padding). */
.sb-banner[data-placement="page"] { padding: 12px 32px; border-width: 0 0 1px; border-radius: 0; }

/* Dark theme: a quiet tint of the 500 step over gray-900, 800 border, 300 text, 400 icon. */
:root[data-theme="dark"] .sb-banner { --ban-bg: color-mix(in srgb, var(--blue-500) 12%, var(--gray-900)); --ban-border: var(--blue-800); --ban-fg: var(--blue-300); --ban-icon: var(--blue-400); }
:root[data-theme="dark"] .sb-banner[data-tone="success"] { --ban-bg: color-mix(in srgb, var(--success-500) 12%, var(--gray-900)); --ban-border: var(--success-800); --ban-fg: var(--success-300); --ban-icon: var(--success-400); }
:root[data-theme="dark"] .sb-banner[data-tone="warning"] { --ban-bg: color-mix(in srgb, var(--warning-500) 12%, var(--gray-900)); --ban-border: var(--warning-800); --ban-fg: var(--warning-300); --ban-icon: var(--warning-400); }
:root[data-theme="dark"] .sb-banner[data-tone="error"] { --ban-bg: color-mix(in srgb, var(--error-500) 12%, var(--gray-900)); --ban-border: var(--error-800); --ban-fg: var(--error-300); --ban-icon: var(--error-400); }
```

## Button

Runs an action on the current page: save, submit, open a dialog, start an analysis. Seven hierarchies tell the user which action matters most.

### Usage

Use a button for an action on the current page. Link hierarchies exist for links inside running text, not for actions.

- **A button looks like a button.** Always a rectangle with radius 8 and a fill or a border. Never turn an action into bare text, an underlined word or text with an arrow; users then have to search for it.
- **One primary action per view.** Primary is the next step of the flow (Mulai Analisis, Kirim ke Advisor, Keputusan). Every other action steps down: Primary, then Secondary color or Secondary gray, then Tertiary, then Link.
- **Hierarchy, not sameness.** Never give all buttons in a row the same style. Without hierarchy, users must read every label.
- **Order in a row.** Least important on the left, Primary on the right, gap 12. Several secondary actions are fine; keep their order consistent.
- **Destructive is not automatically red.** Most destructive actions (Hapus, Tolak in a dialog with other choices) use Secondary gray. Use Destructive only when the destructive action is the primary action of the view.
- **Labels are verbs in Title Case:** Mulai Analisis, Kirim ke Advisor, Ajukan Persetujuan, Sepakati Klaim.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | Radius 8, 1 px border, `shadow-xs` on Primary and Secondary. Height and horizontal padding come from the size; heights include the border (`box-sizing: border-box`). |
| 2 | Leading icon | Optional. 20 px (16 at `xs`, 24 at `2xl`), gap 8 (4 at `xs`, 12 at `2xl`), `currentColor`. |
| 3 | Label | Semibold. Text sm at `xs`, `sm` and `md`, Text md at `lg` and `xl`, Text lg at `2xl`. A verb in Title Case. |
| 4 | Trailing icon | Optional. Same size and gap as the leading icon. A menu trigger uses chevron-down with `class="sb-btn-chevron"`, which turns 180° when the menu is open. |

### Properties

Each property maps to one attribute, so a slide, a spec and the code describe a button with the same words.

| Property | Values | Code |
| --- | --- | --- |
| Hierarchy | Primary, Secondary gray, Secondary color, Tertiary color, Tertiary gray, Link color, Link gray | `data-hierarchy="primary"` to `"link-gray"` |
| Size | `sm`, `md`, `lg`, `xl`, `2xl` (`xs` is code-only for now) | `data-size="md"` |
| Icon | False, Leading, Trailing, Dot, Only | `<svg>` before or after the label, `<span class="sb-btn-dot">`, or `data-icon="only"` with `aria-label` |
| Destructive | False, True | `data-destructive` |
| State | Default, Hover, Focused, Disabled, Loading | `:hover`, `:focus-visible`, `disabled`, `aria-busy="true"` + `.sb-spinner`. Static mockups only: `data-state="hover"` or `"focus"` |

### Hierarchy

Seven levels, from the one next step (Primary) to links inside text. Primary, Secondary gray and Secondary color carry `shadow-xs`; Tertiary and Link have no box until hover.

Primary and Secondary gray are **raised**: a sheen over the fill (lighter top, darker bottom) and, on Primary, a 1 px light line inside the top edge and a border one step darker than the fill. Secondary color, Tertiary, Link and every Disabled state stay flat. Tokens: `--raised-sheen`, `--raised-sheen-light`, `--raised-highlight` (Shadows & Blur).

```html
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Primary</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">Secondary gray</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-color" data-size="md">Secondary color</button>
<button class="sb-btn" type="button" data-hierarchy="tertiary-color" data-size="md">Tertiary color</button>
<button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="md">Tertiary gray</button>
<button class="sb-btn" type="button" data-hierarchy="link-color" data-size="md">Link color</button>
<button class="sb-btn" type="button" data-hierarchy="link-gray" data-size="md">Link gray</button>
```

#### Colours per state

| Hierarchy | Default (fill / border / text) | Hover | Default at 50 % opacity, flat | Focused |
| --- | --- | --- | --- | --- |
| Primary | `brand-600` + `raised-sheen` / `brand-700` / `white` | `brand-700` / `brand-800` / `white` | Default at 50 % opacity, flat | 4 px `focus-ring` ring |
| Secondary gray | `white` + `raised-sheen-light` / `gray-300` / `gray-700` | `gray-50` / `gray-300` / `gray-800` | Default at 50 % opacity, flat | 4 px `focus-ring` ring |
| Secondary color | `brand-50` / `brand-50` / `brand-700` | `brand-100` / `brand-100` / `brand-700` | Default at 50 % opacity, flat | 4 px `focus-ring` ring |
| Tertiary color | none / none / `brand-700` | `brand-50` fill | Default at 50 % opacity, flat | 4 px `focus-ring` ring |
| Tertiary gray | none / none / `gray-500` | `gray-50` fill, text `gray-600` | Default at 50 % opacity, flat | 4 px `focus-ring` ring |
| Link color | text `brand-600`, no padding | text `brand-700` | Default at 50 % opacity, flat | 2 px `brand-600` outline |
| Link gray | text `gray-500`, no padding | text `gray-600` | Default at 50 % opacity, flat | 2 px `brand-600` outline |

### Sizes

```html
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="xs">xs</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">sm</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">md</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="lg">lg</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="xl">xl</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="2xl">2xl</button>
```

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="xs" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="lg" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="xl" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="2xl" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
```

| Size | Height | Padding (y x) | Icon-only | Text style | Icon | Gap |
| --- | --- | --- | --- | --- | --- | --- |
| `xs` | 32 | `6 12` | 32 × 32, padding 8 | Text sm / Semibold | 16 | 4 |
| `sm` | 36 | `8 14` | 36 × 36, padding 8 | Text sm / Semibold | 20 | 8 |
| `md` | 40 | `10 16` | 40 × 40, padding 10 | Text sm / Semibold | 20 | 8 |
| `lg` | 44 | `10 18` | 44 × 44, padding 12 | Text md / Semibold | 20 | 8 |
| `xl` | 48 | `12 20` | 48 × 48, padding 14 | Text md / Semibold | 20 | 8 |
| `2xl` | 60 | `16 28` | 60 × 60, padding 18 | Text lg / Semibold | 24 | 12 |

> **Note:** `xs` is for dense desktop UI only. Padding `6 12` uses the control padding exception (Grids & Spacing): it lands the height on 32.

#### Choosing a size

- `lg`: page header actions and form submits. The app's main `.btn` is this size.
- `md`: card toolbars, filters and compact forms.
- `sm`: tables, dense lists and inline pairs such as approve and reject.
- `xs`: actions that sit inside a table row, a card header or a toolbar next to other dense controls ("Lihat", "Unduh", a row's more menu). Desktop only: at 32 px it is below the 44 px touch target.
- `xl` and `2xl`: website heroes, landing pages and slides. Not used in the app.
- On touch screens use `lg` or larger, so the target is at least 44 px.

### Icon

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">False</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">
  <svg aria-hidden="true"><!-- plus --></svg>
  Leading
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">
  Trailing
  <svg aria-hidden="true"><!-- arrow-right --></svg>
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">
  <span class="sb-btn-dot" aria-hidden="true"></span>
  Dot
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
```

- **Leading** and **Trailing:** a 20 px icon before or after the label (24 px at `2xl`), same gap as the size.
- **Dot:** a 10 px `success-500` status dot before the label, same gap as an icon.
- **Only:** a square button, width = height. Always give it an `aria-label` and a tooltip with the same text.
- Icons are Feather-style outlines with a 1.67 px stroke at 20 px, coloured with `currentColor` so they follow the text in every state.

#### Menu trigger

A button that opens a menu carries a trailing chevron-down. Set `aria-expanded` and give the chevron `class="sb-btn-chevron"`; it turns 180° in 200 ms when the menu is open. Icon-only triggers such as ⋮ do not turn.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" aria-haspopup="menu" aria-expanded="false">
  Ekspor
  <svg class="sb-btn-chevron" aria-hidden="true"><!-- chevron-down --></svg>
</button>
```

### States

Hover moves one step darker, Focused adds a ring for keyboard users, Disabled is the default look at 50 % opacity, flat. Pressing scales the button to 96 %.

- Colour changes take 150 ms with `--ease`. Press is `scale(.96)`.
- Focused shows only on `:focus-visible`, so a mouse click leaves no ring.
- The ring is `0 0 0 4px var(--focus-ring)` (`brand-600` at 20 %) in every hierarchy, on top of `shadow-xs` where the variant has one. Link hierarchies have no box, so they use the global 2 px `brand-600` outline with 2 px offset.
- Disabled has no hover and no press, and shows `cursor: not-allowed`.

#### Loading

After a click that waits on the server (Simpan, Kirim ke Advisor), the button stays as it is and shows a spinner in its text colour before the label, which turns into the -ing form ("Mengirim…"). `aria-busy="true"` ignores further clicks, so the action is never sent twice. Keep the button's width so the row does not jump; when the wait ends, show the result (a Toast, the next page) and restore the button. The spinner comes from Loading (`loading.css`).

```html
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md" aria-busy="true"><span class="sb-spinner" aria-hidden="true"></span>Mengirim…</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" aria-busy="true"><span class="sb-spinner" aria-hidden="true"></span>Menyimpan…</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-color" data-size="md" aria-busy="true"><span class="sb-spinner" aria-hidden="true"></span>Memuat…</button>
```

### Destructive

Destructive=True swaps Brand and Gray for Error. Use it only when the destructive action is the primary action of the view, so the user sees it is high-consequence.

```html
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md" data-destructive>Primary</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" data-destructive>Secondary gray</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-color" data-size="md" data-destructive>Secondary color</button>
<button class="sb-btn" type="button" data-hierarchy="tertiary-color" data-size="md" data-destructive>Tertiary color</button>
<button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="md" data-destructive>Tertiary gray</button>
<button class="sb-btn" type="button" data-hierarchy="link-color" data-size="md" data-destructive>Link color</button>
<button class="sb-btn" type="button" data-hierarchy="link-gray" data-size="md" data-destructive>Link gray</button>
```

| Hierarchy | Default | Hover | Default at 50 % opacity, flat | Focused |
| --- | --- | --- | --- | --- |
| Primary | `error-600` + `raised-sheen` / `error-700` / `white` | `error-700`, border `error-800` | Default at 50 % opacity, flat | 4 px `error-100` ring |
| Secondary gray | `white` / `error-300` / `error-700` | `error-50` fill, text `error-800` | Default at 50 % opacity, flat | 4 px `error-100` ring |
| Secondary color | `error-50` / `error-50` / `error-700` | `error-100` | Default at 50 % opacity, flat | 4 px `error-100` ring |
| Tertiary color, Tertiary gray | text `error-700` | `error-50` fill (gray: text `error-800`) | Default at 50 % opacity, flat | 4 px `error-100` ring |
| Link color, Link gray | text `error-700` | text `error-800` | Default at 50 % opacity, flat | 2 px `brand-600` outline |

### Button row

Least important on the left, Primary on the right, gap 12. Here: Batal (Tertiary gray), Simpan Draf (Secondary color), Ajukan (Secondary gray), Kirim (Primary).

```html
<div style="display: flex; justify-content: flex-end; gap: 12px; width: 100%;">
  <button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="md">Batal</button>
  <button class="sb-btn" type="button" data-hierarchy="secondary-color" data-size="md">Simpan Draf</button>
  <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">Ajukan</button>
  <button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Kirim</button>
</div>
```

### Do and don't

**Do:** One Primary per view. The other action steps down the hierarchy.

```html
<button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="md">Batal</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Kirim</button>
```

**Don't:** Three Primary buttons. Users must read every label to find the next step.

```html
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Batal</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Simpan Draf</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Kirim</button>
```

**Do:** An action is a rectangle with a fill or a border.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">Lihat Detail</button>
```

**Don't:** Bare text with an arrow. Users have to search for the action.

```html
<span class="bare">Lihat detail →</span>
```

**Do:** Tolak is one of several choices, so it uses Secondary gray.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">Tolak</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Setujui</button>
```

**Don't:** Two loud buttons compete. Red is for a view whose main action is destructive.

```html
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md" data-destructive>Tolak</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Setujui</button>
```

**Do:** A dialog whose purpose is deleting: the delete is the primary action, so it is Destructive.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">Batal</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md" data-destructive>Hapus Klaim</button>
```

**Don't:** Vague labels. Name the result with a verb: Hapus Klaim, not Ya.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">OK</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Ya</button>
```

### Accessibility

- Use `<button type="button">` for actions and `<a class="sb-btn" href="…">` for navigation. Both take the same attributes.
- Icon-only buttons need an `aria-label` and a title-only tooltip with the same text.
- Never remove the focus ring. Buttons show it on `:focus-visible`; Link hierarchies show the 2 px outline.
- Disable with the `disabled` attribute. Use `aria-disabled="true"` instead when the button must stay focusable, for example to show a tooltip that explains why. The CSS styles both.
- Menu triggers set `aria-haspopup="menu"` and `aria-expanded`.
- With `prefers-reduced-motion: reduce`, transitions and the press scale switch off.

#### Contrast

Text against its fill, measured with the WCAG 2.1 formula. AA needs 4.5:1 for button text. Disabled states are exempt. On raised buttons the text sits in the middle, where the sheen is transparent, so the ratio is the plain fill.

| Variant | Text on fill | Ratio | AA |
| --- | --- | --- | --- |
| Primary | `white` on `brand-600` | 5.06:1 | Passes |
| Primary, hover | `white` on `brand-700` | 6.61:1 | Passes |
| Secondary gray | `gray-700` on `white` | 10.46:1 | Passes |
| Secondary color | `brand-700` on `brand-50` | 6.09:1 | Passes |
| Tertiary color | `brand-700` on `white` | 6.61:1 | Passes |
| Tertiary gray, Link gray | `gray-500` on `white` | 4.97:1 | Passes |
| Link color | `brand-600` on `white` | 5.06:1 | Passes |
| Destructive Primary | `white` on `error-600` | 4.83:1 | Passes |
| Destructive Secondary gray, Tertiary, Link | `error-700` on `white` | 6.57:1 | Passes |
| Destructive Secondary color | `error-700` on `error-50` | 6.05:1 | Passes |

### Code

Load `tokens.css` (on the Overview page), then `button.css`. Every colour, size and shadow is a token, so changing a token changes every button.

`button.css`

```css
/* Button, Codemasters Design System
   Needs tokens.css; loading.css for the spinner of the loading state.

   <button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Kirim</button>

   data-hierarchy    primary | secondary-gray | secondary-color | tertiary-color | tertiary-gray | link-color | link-gray
   data-size         xs | sm | md | lg | xl | 2xl   (xs: dense desktop UI only)
   data-destructive  present = Destructive=True
   data-icon="only"  square icon-only button; add aria-label
   aria-busy="true"  Loading: a <span class="sb-spinner" aria-hidden="true"> before the label, the label in -ing form ("Mengirim…")
   data-state        hover | focus. Forces a state in static mockups and docs. Never ship it in live UI:
                     live states come from :hover, :focus-visible and the disabled attribute. */

.sb-btn {
  --btn-h: 40px; --btn-px: 16px; --btn-gap: 8px; --btn-icon: 20px; --btn-type: var(--text-sm);
  --btn-bg: var(--brand-600); --btn-border: var(--brand-700); --btn-fg: var(--white);
  --btn-bg-hover: var(--brand-700); --btn-border-hover: var(--brand-800); --btn-fg-hover: var(--white);
  --btn-ring: var(--focus-ring); --btn-shadow: var(--raised-highlight), var(--shadow-xs);
  --btn-sheen: var(--raised-sheen); /* raised: lighter top, darker bottom, over any fill */
  box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; gap: var(--btn-gap);
  height: var(--btn-h); padding: 0 var(--btn-px);
  font: 600 var(--btn-type) var(--font); white-space: nowrap; text-decoration: none;
  color: var(--btn-fg); background: var(--btn-sheen) var(--btn-bg);
  border: 1px solid var(--btn-border); border-radius: var(--radius-md);
  box-shadow: var(--btn-shadow);
  cursor: pointer;
  transition-property: color, background-color, border-color, box-shadow, scale;
  transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-btn > svg { width: var(--btn-icon); height: var(--btn-icon); flex: none; }
.sb-btn-dot { width: 10px; height: 10px; flex: none; border-radius: var(--radius-full); background: var(--success-500); }

/* Sizes. Height includes the 1px border. */
.sb-btn[data-size="xs"]  { --btn-h: 32px; --btn-px: 12px; --btn-icon: 16px; --btn-gap: 4px; } /* code-first size for dense rows; below 44, so never on touch */
.sb-btn[data-size="sm"]  { --btn-h: 36px; --btn-px: 14px; }
.sb-btn[data-size="lg"]  { --btn-h: 44px; --btn-px: 18px; --btn-type: var(--text-md); }
.sb-btn[data-size="xl"]  { --btn-h: 48px; --btn-px: 20px; --btn-type: var(--text-md); }
.sb-btn[data-size="2xl"] { --btn-h: 60px; --btn-px: 28px; --btn-type: var(--text-lg); --btn-icon: 24px; --btn-gap: 12px; }
.sb-btn[data-icon="only"] { width: var(--btn-h); padding: 0; }

/* Hierarchy. Primary is the base above. */
.sb-btn[data-hierarchy="secondary-gray"] {
  --btn-bg: var(--bg-primary); --btn-border: var(--border-primary); --btn-fg: var(--text-secondary); --btn-sheen: var(--raised-sheen-light); --btn-shadow: var(--shadow-xs);
  --btn-bg-hover: var(--bg-secondary); --btn-border-hover: var(--border-primary); --btn-fg-hover: var(--text-primary);
}
.sb-btn[data-hierarchy="secondary-color"] {
  --btn-bg: var(--bg-brand-subtle); --btn-border: var(--bg-brand-subtle); --btn-fg: var(--text-brand); --btn-sheen: none; --btn-shadow: var(--shadow-xs);
  --btn-bg-hover: var(--bg-brand-subtle-hover); --btn-border-hover: var(--bg-brand-subtle-hover); --btn-fg-hover: var(--text-brand);
}
.sb-btn[data-hierarchy^="tertiary"] {
  --btn-bg: transparent; --btn-border: transparent;
  --btn-shadow: 0 0 #0000; --btn-sheen: none;
}
.sb-btn[data-hierarchy="tertiary-color"] {
  --btn-fg: var(--text-brand); --btn-bg-hover: var(--bg-brand-subtle); --btn-border-hover: var(--bg-brand-subtle); --btn-fg-hover: var(--text-brand);
}
.sb-btn[data-hierarchy="tertiary-gray"] {
  --btn-fg: var(--text-quaternary); --btn-bg-hover: var(--bg-secondary); --btn-border-hover: var(--bg-secondary); --btn-fg-hover: var(--text-tertiary);
}
.sb-btn[data-hierarchy^="link"] {
  --btn-h: auto; --btn-px: 0; --btn-shadow: 0 0 #0000; --btn-sheen: none;
  --btn-bg: transparent; --btn-border: transparent; --btn-bg-hover: transparent; --btn-border-hover: transparent;
  border-width: 0;
}
.sb-btn[data-hierarchy="link-color"] { --btn-fg: var(--fg-brand); --btn-fg-hover: var(--text-brand); }
.sb-btn[data-hierarchy="link-gray"]  { --btn-fg: var(--text-quaternary); --btn-fg-hover: var(--text-tertiary); }

/* Destructive=True swaps Brand and Gray for Error. */
.sb-btn[data-destructive] {
  --btn-bg: var(--error-600); --btn-border: var(--error-700); --btn-fg: var(--white);
  --btn-bg-hover: var(--error-700); --btn-border-hover: var(--error-800); --btn-fg-hover: var(--white);
  --btn-ring: var(--bg-error-subtle-hover);
}
.sb-btn[data-destructive][data-hierarchy="secondary-gray"] {
  --btn-bg: var(--bg-primary); --btn-border: var(--border-error); --btn-fg: var(--text-error);
  --btn-bg-hover: var(--bg-error-subtle); --btn-border-hover: var(--border-error); --btn-fg-hover: var(--text-error-strong);
}
.sb-btn[data-destructive][data-hierarchy="secondary-color"] {
  --btn-bg: var(--bg-error-subtle); --btn-border: var(--bg-error-subtle); --btn-fg: var(--text-error);
  --btn-bg-hover: var(--bg-error-subtle-hover); --btn-border-hover: var(--bg-error-subtle-hover); --btn-fg-hover: var(--text-error);
}
.sb-btn[data-destructive][data-hierarchy^="tertiary"] {
  --btn-bg: transparent; --btn-border: transparent; --btn-fg: var(--text-error);
  --btn-bg-hover: var(--bg-error-subtle); --btn-border-hover: var(--bg-error-subtle); --btn-fg-hover: var(--text-error);
}
.sb-btn[data-destructive][data-hierarchy="tertiary-gray"] { --btn-fg-hover: var(--text-error-strong); }
.sb-btn[data-destructive][data-hierarchy^="link"] {
  --btn-bg: transparent; --btn-border: transparent; --btn-fg: var(--text-error);
  --btn-bg-hover: transparent; --btn-border-hover: transparent; --btn-fg-hover: var(--text-error-strong);
}

/* States */
.sb-btn:hover:not(:disabled, [aria-disabled="true"]), .sb-btn[data-state="hover"] {
  color: var(--btn-fg-hover); background-color: var(--btn-bg-hover); border-color: var(--btn-border-hover);
}
.sb-btn:focus-visible, .sb-btn[data-state="focus"] {
  outline: none; box-shadow: var(--btn-shadow), 0 0 0 4px var(--btn-ring);
}
.sb-btn[data-hierarchy^="link"]:focus-visible, .sb-btn[data-hierarchy^="link"][data-state="focus"] {
  box-shadow: none; outline: 2px solid var(--brand-600); outline-offset: 2px;
}
/* Disabled: the default look at half opacity, flat (no sheen, highlight or shadow). One rule for every hierarchy. */
.sb-btn:disabled, .sb-btn[aria-disabled="true"] { opacity: .5; background-image: none; box-shadow: none; cursor: not-allowed; }
.sb-btn:active:not(:disabled, [aria-disabled="true"], [aria-busy="true"]) { scale: .96; }
/* Loading: the look stays (not the faded Disabled), a spinner in the text colour replaces the leading icon, clicks are ignored. */
.sb-btn[aria-busy="true"] { cursor: progress; pointer-events: none; }
.sb-btn > .sb-spinner { --sp-size: var(--btn-icon); color: inherit; }

/* A button that opens a menu: its chevron (class sb-btn-chevron) turns when open. Other icons, such as ⋮, stay put. */
.sb-btn[aria-expanded] > .sb-btn-chevron { transition: rotate 200ms var(--ease); }
.sb-btn[aria-expanded="true"] > .sb-btn-chevron { rotate: 180deg; }

@media (prefers-reduced-motion: reduce) {
  .sb-btn, .sb-btn > svg { transition: none; }
  .sb-btn:active:not(:disabled) { scale: 1; }
}
```

## Button group

A row of joined buttons for related, equal-weight choices: a view switch (Hari, Minggu, Bulan), pagination arrows or a small set of tools.

### Usage

- Use a button group for related, equal-weight choices: a view switch (Hari, Minggu, Bulan), pagination arrows, or a small set of tools.
- Never put a primary action next to secondary ones in a group. Use separate Buttons for that, so the hierarchy shows.
- All segments in one group use the same Icon type.
- When the group works as a switch, only one segment is Current at a time.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Group | 40 high (same as Button `md`), 1 px `gray-300` border, radius 8, `shadow-xs`. Clips its children, so only the outer corners are rounded. |
| 2 | Segment | `white` fill, padding `10 16` (icon-only `10 12`). Current=True is pressed in: `gray-100` fill with `pressed-inset`. |
| 3 | Divider | 1 px `gray-300` on the trailing side of each segment. The last one is hidden by the group border. |
| 4 | Icon | Optional. 20 px, gap 8, `gray-500` (Current: `gray-900`). The Dot variant puts a 10 px `success-500` dot here instead. |
| 5 | Label | Text sm / Semibold, `gray-700` (Current: `gray-900`). Icon-only segments drop it and carry an `aria-label`. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Icon (group) | False, Leading, Only | Label only, `<svg>` before the label, or `data-icon="only"` with `aria-label` per segment |
| Icon (segment) | False, Leading, Only, Dot | Dot: `<span class="sb-btn-group-dot">` before the label |
| Current | True, False | `aria-checked="true"` (switch) or `aria-pressed="true"` (toggle) |
| State | Default, Hover, Focused, Disabled | `:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state="hover"` or `"focus"` |

### Icon

#### Text

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Rentang waktu">
  <button type="button" role="radio" aria-checked="true" tabindex="0">Hari</button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">Minggu</button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">Bulan</button>
</div>
```

#### Leading icon

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Tampilan">
  <button type="button" role="radio" aria-checked="true" tabindex="0">
    <svg aria-hidden="true"><!-- list --></svg>
    Daftar
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">
    <svg aria-hidden="true"><!-- grid --></svg>
    Grid
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">
    <svg aria-hidden="true"><!-- calendar --></svg>
    Kalender
  </button>
</div>
```

#### Icon only

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Tampilan" data-icon="only">
  <button type="button" role="radio" aria-checked="true" tabindex="0" aria-label="Daftar">
    <svg aria-hidden="true"><!-- list --></svg>
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1" aria-label="Grid">
    <svg aria-hidden="true"><!-- grid --></svg>
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1" aria-label="Kalender">
    <svg aria-hidden="true"><!-- calendar --></svg>
  </button>
</div>
```

#### Dot

For status filters. The dot stays `success-500` in every state.

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Status">
  <button type="button" role="radio" aria-checked="true" tabindex="0">
    <span class="sb-btn-group-dot" aria-hidden="true"></span>
    Aktif
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">
    <span class="sb-btn-group-dot" aria-hidden="true"></span>
    Tertunda
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">
    <span class="sb-btn-group-dot" aria-hidden="true"></span>
    Selesai
  </button>
</div>
```

### States

| State | Current=False (fill / text / icon) | Current=True |
| --- | --- | --- |
| Default | `white` raised / `gray-700` / `gray-500` | `gray-100` + `pressed-inset` / `gray-900` / `gray-900` |
| Hover | `gray-50` / `gray-800` / `gray-700` | same as Default |
| Focused | `gray-50` / `gray-700` / `gray-700` | same as Default + focus outline |
| Disabled | Default at 50 % opacity | Default at 50 % opacity |

> **Note:** Focused has the same `gray-50` fill as Hover, plus the 2 px `brand-600` focus outline on `:focus-visible`, drawn inside the segment because the group clips its children.

### Switch, toggle or actions

The same look carries three behaviours. Pick the one that matches what a click does, and set the matching ARIA; the Current style follows the ARIA state.

| Behaviour | Example | Markup |
| --- | --- | --- |
| Switch: one of several | Hari, Minggu, Bulan | `role="radiogroup"` on the group, `role="radio"` + `aria-checked` on each segment, roving `tabindex` |
| Toggle: each on or off | Tebal, Miring, Garis bawah | `role="group"`, `aria-pressed` on each segment |
| Actions: no selection | Previous and next page | `role="group"`, plain buttons, never Current |

#### Switch

Tab reaches the group once, on the checked segment. ← → move and select.

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Rentang waktu">
  <button type="button" role="radio" aria-checked="true" tabindex="0">Hari</button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">Minggu</button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">Bulan</button>
</div>
```

#### Toggle

```html
<div class="sb-btn-group" role="group" aria-label="Format teks" data-icon="only">
  <button type="button" aria-pressed="true" aria-label="Tebal">
    <svg aria-hidden="true"><!-- bold --></svg>
  </button>
  <button type="button" aria-pressed="false" aria-label="Miring">
    <svg aria-hidden="true"><!-- italic --></svg>
  </button>
  <button type="button" aria-pressed="false" aria-label="Garis bawah">
    <svg aria-hidden="true"><!-- underline --></svg>
  </button>
</div>
```

#### Actions

```html
<div class="sb-btn-group" role="group" aria-label="Navigasi halaman" data-icon="only">
  <button type="button" aria-label="Halaman sebelumnya">
    <svg aria-hidden="true"><!-- chevron-left --></svg>
  </button>
  <button type="button" aria-label="Halaman berikutnya">
    <svg aria-hidden="true"><!-- chevron-right --></svg>
  </button>
</div>
```

### Do and don't

**Do:** Equal-weight choices of one kind.

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Rentang waktu">
  <button type="button" role="radio" aria-checked="true" tabindex="0">Hari</button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">Minggu</button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">Bulan</button>
</div>
```

**Don't:** A primary action hidden in a group. Use separate Buttons: Batal (Tertiary gray), Kirim (Primary).

```html
<div class="sb-btn-group" role="group" aria-label="Aksi formulir">
  <button type="button">Batal</button>
  <button type="button">Simpan Draf</button>
  <button type="button">Kirim</button>
</div>
```

**Do:** One Icon type for every segment.

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Tampilan" data-icon="only">
  <button type="button" role="radio" aria-checked="true" tabindex="0" aria-label="Daftar">
    <svg aria-hidden="true"><!-- list --></svg>
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1" aria-label="Grid">
    <svg aria-hidden="true"><!-- grid --></svg>
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1" aria-label="Kalender">
    <svg aria-hidden="true"><!-- calendar --></svg>
  </button>
</div>
```

**Don't:** Icon-only segments mixed with a text segment.

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Tampilan" data-icon="only">
  <button type="button" role="radio" aria-checked="true" tabindex="0" aria-label="Daftar">
    <svg aria-hidden="true"><!-- list --></svg>
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1" aria-label="Grid">
    <svg aria-hidden="true"><!-- grid --></svg>
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1" aria-label="Kalender">
    Kalender
  </button>
</div>
```

### Accessibility

- Never show the choice by colour alone. Set `aria-checked` (switch) or `aria-pressed` (toggle); the CSS styles Current from that attribute.
- Give the group an `aria-label` that names the choice ("Rentang waktu").
- A switch uses roving `tabindex`: the checked segment has `tabindex="0"`, the others `-1`, and ← → move the choice.
- Icon-only segments need an `aria-label` and a tooltip with the same text.
- Focus shows a 2 px `brand-600` outline inside the segment on `:focus-visible`.

| Segment | Text on fill | Ratio | AA |
| --- | --- | --- | --- |
| Default | `gray-700` on `white` | 10.46:1 | Passes |
| Hover | `gray-800` on `gray-50` | 14.07:1 | Passes |
| Current | `gray-900` on `gray-100` | 16.11:1 | Passes |
| Focused | `gray-700` on `gray-50` | 10.01:1 | Passes |
| Icon, Default | `gray-500` on `white` | 4.97:1 | Passes (3:1 needed for icons) |

### Code

Load `tokens.css`, then `button-group.css`. A switch also needs the arrow-key script below; toggles and actions need none.

`button-group.css`

```css
/* Button group, Codemasters Design System
   Needs tokens.css.

   Switch, one choice at a time (arrow keys move the choice):
   <div class="sb-btn-group" role="radiogroup" aria-label="Rentang waktu">
     <button type="button" role="radio" aria-checked="true" tabindex="0">Hari</button>
     <button type="button" role="radio" aria-checked="false" tabindex="-1">Minggu</button>
   </div>

   Toggles, each on or off: <div class="sb-btn-group" role="group"> with <button aria-pressed="true|false">.

   Current=True     aria-checked="true" (switch) or aria-pressed="true" (toggle). The ARIA state is the style hook,
                    so the choice is never shown by colour alone.
   data-icon="only" icon-only segments; each button needs aria-label
   data-state       hover | focus on a segment. Static mockups and docs only. */

.sb-btn-group {
  box-sizing: border-box;
  display: inline-flex; height: 40px;
  background: var(--bg-primary);
  border: 1px solid var(--border-primary); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  overflow: hidden; /* only the outer corners are rounded */
}
.sb-btn-group > button {
  --seg-icon: var(--text-quaternary);
  box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 100%; margin: 0; padding: 0 16px;
  font: 600 var(--text-sm) var(--font); white-space: nowrap;
  color: var(--text-secondary); background: var(--raised-sheen-light) var(--bg-primary);
  border: 0; border-inline-end: 1px solid var(--border-primary); border-radius: 0;
  cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-btn-group > button:last-child { border-inline-end: 0; }
.sb-btn-group > button > svg { width: 20px; height: 20px; flex: none; color: var(--seg-icon); }
.sb-btn-group[data-icon="only"] > button { padding: 0 12px; }
.sb-btn-group-dot { width: 10px; height: 10px; flex: none; border-radius: var(--radius-full); background: var(--success-500); }

/* States (fill / text / icon). Order matters: Current overrides Hover and Focused. Disabled: the default look at 50 % opacity. */
.sb-btn-group > button:hover:not(:disabled), .sb-btn-group > button[data-state="hover"] {
  --seg-icon: var(--text-secondary); color: var(--text-primary); background: var(--bg-secondary);
}
.sb-btn-group > button:focus-visible, .sb-btn-group > button[data-state="focus"] {
  --seg-icon: var(--text-secondary); color: var(--text-secondary); background: var(--bg-secondary);
  outline: 2px solid var(--brand-600); outline-offset: -2px; /* inside, because the group clips */
}
.sb-btn-group > [aria-checked="true"], .sb-btn-group > [aria-pressed="true"] {
  --seg-icon: var(--text-primary); color: var(--text-primary); background: var(--bg-tertiary); box-shadow: var(--pressed-inset); /* pressed in, against the raised segments */
}
.sb-btn-group > button:disabled { opacity: .5; cursor: not-allowed; }

@media (prefers-reduced-motion: reduce) {
  .sb-btn-group > button { transition: none; }
}
```

#### Switch keyboard script

`button-group-switch.js`

```js
// Click or ← → selects one segment in every role="radiogroup" button group.
document.addEventListener('click', e => {
  const seg = e.target.closest('.sb-btn-group[role="radiogroup"] > button');
  if (seg && !seg.disabled) select(seg);
});
document.addEventListener('keydown', e => {
  const seg = e.target.closest('.sb-btn-group[role="radiogroup"] > button');
  const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
  if (!seg || !step) return;
  e.preventDefault();
  const segs = [...seg.parentElement.children].filter(b => !b.disabled);
  const next = segs[(segs.indexOf(seg) + step + segs.length) % segs.length];
  select(next);
  next.focus();
});
function select(seg) {
  for (const b of seg.parentElement.children) {
    b.setAttribute('aria-checked', String(b === seg));
    b.tabIndex = b === seg ? 0 : -1;
  }
}
```

## Card

The container for one topic on a page: a claim summary, a table, a chart, a metric. White, bordered, radius 12. Includes the inner card, the AI summary card, metric cards and link cards.

### Usage

- One card holds one topic: a summary, a table, a chart, a form section. The title names the topic.
- Cards sit on the page 24 apart (Grids & Spacing). Blocks inside a card sit 16 apart.
- Group related values inside a card with an inner card, never with a second card in a card.
- One primary action per card at most, in the footer or the head. Other actions are Secondary gray, Tertiary or in a "more" menu.
- Cards are flat: a `gray-300` border, no shadow. Shadows are for layers that float (menus, dialogs).

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | `white`, 1 px `gray-300` border, radius 12, padding 24 (sm 16). No shadow. |
| 2 | Head | Title block on the left, actions on the right, top-aligned, gap 16. |
| 3 | Title | Text xl / Semibold (sm: Text md), `gray-900`, Title Case. A heading element at the level the page needs. Optional description below: Text sm `gray-500`, 4 apart. |
| 4 | Badge | Optional status pill or count, Badge sm, 8 after the title. |
| 5 | Actions | Buttons sm, gap 8: Secondary gray or Tertiary, an icon button with a "more" menu. Centred on the title line and allowed to overhang it, so the head is only as tall as the title. |
| 6 | Fold chevron | Optional. Tertiary gray icon button sm; points up when open, down when folded. Hides the body and footer. |
| 7 | Body | Blocks 16 apart (sm 12): text, inner cards, tables, charts. |
| 8 | Footer | Optional. Actions right-aligned, gap 12, above a `gray-200` divider that runs edge to edge. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Variant | Card, Inner, Tint, Framed | Omit, `data-variant="inner"`, `"tint"` or `"framed"` |
| Size | md, sm | Omit for md, `data-size="sm"` |
| Description | True, False | `<p class="sb-card-desc">` under the title |
| Badge | True, False | Badge sm inside the title |
| Actions | True, False | `<div class="sb-card-actions">` with Buttons sm |
| Fold | Open, Folded | `.sb-card-fold` with `aria-expanded` and `aria-controls`; `hidden` on the body and footer |
| Footer | True, False | `<footer class="sb-card-foot">` |
| Link | True, False | `<a class="sb-card-link">` in the title |

### Types

#### Card

The white card for a topic. Here with an inner card of summary rows and a footer.

```html
<section class="sb-card" aria-labelledby="card-3-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-3-title">Ringkasan Klaim <span class="sb-badge" data-size="sm" data-color="success" data-icon="dot"><span class="sb-badge-dot" aria-hidden="true"></span>Disetujui</span></h3>
      <p class="sb-card-desc">Diperbarui 7 Oktober 2026, 14.20</p>
    </div>
    <div class="sb-card-actions">
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Lihat Detail</button>
      <button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Opsi lain"><svg aria-hidden="true"><!-- more-vertical --></svg></button>
    </div>
  </header>
  <div class="sb-card-body" id="card-3-body">
    <div class="sb-card" data-variant="inner">
      <dl class="sb-card-rows">
        <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
        <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
        <div class="sb-card-row"><dt>Tidak ditanggung</dt><dd>Rp 1.250.000</dd></div>
        <div class="sb-card-row" data-total><dt>Selisih</dt><dd>Rp 1.250.000</dd></div>
      </dl>
    </div>
  </div>
  <footer class="sb-card-foot" id="card-3-foot">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Tolak</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">Setujui Klaim</button>
  </footer>
</section>
```

#### Inner card

A box inside a card for a group of values: `gray-50`, 1 px `gray-200` border, radius 8, padding `12 16`, rows 8 apart. "Label …… Value" rows use a `<dl>`; values are Medium, `gray-900`, tabular, right-aligned. A total row sits above a `gray-200` line.

```html
<div class="sb-card" data-variant="inner">
  <p class="sb-card-title">Rincian Tagihan</p>
  <dl class="sb-card-rows">
    <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
    <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
    <div class="sb-card-row"><dt>Tidak ditanggung</dt><dd>Rp 1.250.000</dd></div>
    <div class="sb-card-row" data-total><dt>Selisih</dt><dd>Rp 1.250.000</dd></div>
  </dl>
</div>
```

#### Tint: AI summary

For text the AI wrote: `brand-50`, 1 px `brand-200` border, radius 8, padding 16. Title Text md / Semibold `brand-700` with the `loader` icon, "Edit Ringkasan" as Secondary gray sm, fold chevron.

```html
<section class="sb-card" data-variant="tint" aria-labelledby="card-4-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-4-title"><svg aria-hidden="true"><!-- loader --></svg>Ringkasan AI</h3>
    </div>
    <div class="sb-card-actions">
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Edit Ringkasan</button>
      <button class="sb-btn sb-card-fold" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-expanded="true" aria-controls="card-4-body" aria-labelledby="card-4-title"><svg aria-hidden="true"><!-- chevron-down --></svg></button>
    </div>
  </header>
  <div class="sb-card-body" id="card-4-body">
    <p class="sb-card-text">Klaim rawat inap 3 hari untuk demam berdarah. Tagihan sesuai tarif rumah sakit rekanan; satu item obat di luar formularium (Rp 1.250.000) tidak ditanggung.</p>
  </div>
</section>
```

#### Framed

A `gray-100` shell (one step darker than the `gray-50` page) with a `gray-200` border holds the head or the footer; the content sits on a white sheet with its own `gray-200` border and radius 12, laid over the shell's edge. Use it for chart and table panels (title and tools on the shell) and for forms (actions on the shell, so they stay apart from the fields). Head and footer padding `12 16`, sheet padding 16, title Text md / Semibold `gray-700`.

```html
<section class="sb-card" data-variant="framed" aria-labelledby="card-2-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-2-title">Klaim Masuk</h3>
    </div>
    <div class="sb-card-actions">
      <button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Buka Laporan Klaim"><svg aria-hidden="true"><!-- external-link --></svg></button>
    </div>
  </header>
  <div class="sb-card-body" id="card-2-body">
    <div class="sb-card-empty" data-frame="dashed">
      <p>Belum ada data untuk rentang waktu ini.</p>
    </div>
  </div>
</section>
<section class="sb-card" data-variant="framed" aria-labelledby="form-title">
  <div class="sb-card-body">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="form-title">Tambah Rekanan</h3>
      <p class="sb-card-desc">Rumah sakit baru masuk daftar rekanan setelah diverifikasi.</p>
    </div>
    <div class="sb-field">
      <label class="sb-field-label" for="rs-name">Nama rumah sakit</label>
      <div class="sb-input"><input id="rs-name" type="text" placeholder="RS Medika Utama" aria-describedby="rs-hint"></div>
      <p class="sb-field-hint" id="rs-hint">Sesuai izin operasional.</p>
    </div>
  </div>
  <footer class="sb-card-foot">
    <button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm" disabled>Lanjutkan</button>
  </footer>
</section>
```

#### Metric

A compact card (sm) for one number: label Text sm / Medium `gray-500`, value Display xs / Semibold `gray-900` tabular, then a change badge and a caption in Text xs `gray-500`. The badge colour says good or bad, not up or down: a shorter analysis time is `success` with a down arrow. Money stays in full Rupiah.

```html
<section class="sb-card" data-size="sm" aria-label="Klaim masuk">
  <dl class="sb-metric">
    <dt class="sb-metric-label">Klaim masuk</dt>
    <dd class="sb-metric-value">1.284</dd>
    <dd class="sb-metric-foot"><span class="sb-badge" data-size="sm" data-color="success" data-icon="icon-left"><svg aria-hidden="true"><!-- arrow-up --></svg>12%</span>vs bulan lalu</dd>
  </dl>
</section>
<section class="sb-card" data-size="sm" aria-label="Total tagihan">
  <dl class="sb-metric">
    <dt class="sb-metric-label">Total tagihan</dt>
    <dd class="sb-metric-value">Rp 1.725.283.300</dd>
    <dd class="sb-metric-foot"><span class="sb-badge" data-size="sm" data-color="success" data-icon="icon-left"><svg aria-hidden="true"><!-- arrow-up --></svg>8%</span>vs bulan lalu</dd>
  </dl>
</section>
<section class="sb-card" data-size="sm" aria-label="Waktu analisis rata-rata">
  <dl class="sb-metric">
    <dt class="sb-metric-label">Waktu analisis rata-rata</dt>
    <dd class="sb-metric-value">4 mnt 12 dtk</dd>
    <dd class="sb-metric-foot"><span class="sb-badge" data-size="sm" data-color="success" data-icon="icon-left"><svg aria-hidden="true"><!-- arrow-down --></svg>−60%</span>vs bulan lalu</dd>
  </dl>
</section>
<section class="sb-card" data-size="sm" aria-label="Temuan FWA">
  <dl class="sb-metric">
    <dt class="sb-metric-label">Temuan FWA</dt>
    <dd class="sb-metric-value">37</dd>
    <dd class="sb-metric-foot"><span class="sb-badge" data-size="sm" data-color="error" data-icon="icon-left"><svg aria-hidden="true"><!-- arrow-up --></svg>5</span>vs bulan lalu</dd>
  </dl>
</section>
```

#### Link card

A card that opens a page. The title is the link; its hit area stretches over the whole card, so the card has one tab stop and the link text is the accessible name. Hover: `gray-50` fill and `gray-400` border. Focus: `brand-300` border and the 4 px `focus-ring` ring.

```html
<section class="sb-card" data-size="sm">
  <div class="sb-card-heading">
    <h3 class="sb-card-title"><a class="sb-card-link" href="#/card">Laporan Bulanan</a></h3>
    <p class="sb-card-desc">Klaim, tagihan dan temuan FWA per bulan.</p>
  </div>
</section>
<section class="sb-card" data-size="sm">
  <div class="sb-card-heading">
    <h3 class="sb-card-title"><a class="sb-card-link" href="#/card">Rekanan Rumah Sakit</a></h3>
    <p class="sb-card-desc">128 rumah sakit dengan tarif dan status kerja sama.</p>
  </div>
</section>
<section class="sb-card" data-size="sm">
  <div class="sb-card-heading">
    <h3 class="sb-card-title"><a class="sb-card-link" href="#/card">Pengaturan Polis</a></h3>
    <p class="sb-card-desc">Plan, manfaat dan batas tanggungan per produk.</p>
  </div>
</section>
<section class="sb-card" data-size="sm">
  <div class="sb-card-heading">
    <h3 class="sb-card-title"><a class="sb-card-link" href="#/card">Pengguna dan Akses</a></h3>
    <p class="sb-card-desc">Anggota tim, peran dan hak akses.</p>
  </div>
</section>
```

### Sizes

md for page sections, sm for compact cards in a grid (metrics, links, side panels). sm: padding 16, blocks 12 apart, title Text md.

```html
<section class="sb-card" aria-labelledby="card-5-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-5-title">Ringkasan Klaim <span class="sb-badge" data-size="sm" data-color="success" data-icon="dot"><span class="sb-badge-dot" aria-hidden="true"></span>Disetujui</span></h3>
      <p class="sb-card-desc">Diperbarui 7 Oktober 2026, 14.20</p>
    </div>
    <div class="sb-card-actions">
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Lihat Detail</button>
      <button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Opsi lain"><svg aria-hidden="true"><!-- more-vertical --></svg></button>
    </div>
  </header>
  <div class="sb-card-body" id="card-5-body">
    <div class="sb-card" data-variant="inner">
      <dl class="sb-card-rows">
        <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
        <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
        <div class="sb-card-row"><dt>Tidak ditanggung</dt><dd>Rp 1.250.000</dd></div>
        <div class="sb-card-row" data-total><dt>Selisih</dt><dd>Rp 1.250.000</dd></div>
      </dl>
    </div>
  </div>
</section>
<section class="sb-card" data-size="sm" aria-labelledby="card-6-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-6-title">Ringkasan Klaim <span class="sb-badge" data-size="sm" data-color="success" data-icon="dot"><span class="sb-badge-dot" aria-hidden="true"></span>Disetujui</span></h3>
      <p class="sb-card-desc">Diperbarui 7 Oktober 2026, 14.20</p>
    </div>
    <div class="sb-card-actions">
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Lihat Detail</button>
      <button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Opsi lain"><svg aria-hidden="true"><!-- more-vertical --></svg></button>
    </div>
  </header>
  <div class="sb-card-body" id="card-6-body">
    <div class="sb-card" data-variant="inner">
      <dl class="sb-card-rows">
        <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
        <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
        <div class="sb-card-row"><dt>Tidak ditanggung</dt><dd>Rp 1.250.000</dd></div>
        <div class="sb-card-row" data-total><dt>Selisih</dt><dd>Rp 1.250.000</dd></div>
      </dl>
    </div>
  </div>
</section>
```

### States

#### Open and folded

Folding keeps the head and hides the body and footer. The chevron turns in 150 ms; the body appears without animation.

```html
<section class="sb-card" data-variant="tint" aria-labelledby="card-7-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-7-title"><svg aria-hidden="true"><!-- loader --></svg>Ringkasan AI</h3>
    </div>
    <div class="sb-card-actions">
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Edit Ringkasan</button>
      <button class="sb-btn sb-card-fold" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-expanded="true" aria-controls="card-7-body" aria-labelledby="card-7-title"><svg aria-hidden="true"><!-- chevron-down --></svg></button>
    </div>
  </header>
  <div class="sb-card-body" id="card-7-body">
    <p class="sb-card-text">Klaim rawat inap 3 hari untuk demam berdarah. Tagihan sesuai tarif rumah sakit rekanan; satu item obat di luar formularium (Rp 1.250.000) tidak ditanggung.</p>
  </div>
</section>
<section class="sb-card" data-variant="tint" aria-labelledby="card-8-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-8-title"><svg aria-hidden="true"><!-- loader --></svg>Ringkasan AI</h3>
    </div>
    <div class="sb-card-actions">
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Edit Ringkasan</button>
      <button class="sb-btn sb-card-fold" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-expanded="false" aria-controls="card-8-body" aria-labelledby="card-8-title"><svg aria-hidden="true"><!-- chevron-down --></svg></button>
    </div>
  </header>
  <div class="sb-card-body" id="card-8-body" hidden>
    <p class="sb-card-text">Klaim rawat inap 3 hari untuk demam berdarah. Tagihan sesuai tarif rumah sakit rekanan; satu item obat di luar formularium (Rp 1.250.000) tidak ditanggung.</p>
  </div>
</section>
```

#### Link card

#### Empty

A card never shows a blank body. Say what is missing in Text sm `gray-500`, centred, with a 24 px `gray-400` icon and, when the user can fix it, one Secondary gray button.

```html
<section class="sb-card" aria-labelledby="card-1-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-1-title">Riwayat Klaim</h3>
    </div>
  </header>
  <div class="sb-card-body" id="card-1-body">
    <div class="sb-card-empty">
      <svg aria-hidden="true"><!-- search --></svg>
      <div class="sb-card-empty-text">
        <p class="sb-card-empty-title">Belum ada klaim</p>
        <p>Klaim peserta ini akan tampil di sini setelah dikirim rumah sakit.</p>
      </div>
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Tambah Klaim</button>
    </div>
  </div>
</section>
```

Where a chart or table would be, keep its size and draw a dashed `gray-300` frame (radius 8, at least 160 high) with one line of text, so the layout does not jump when data arrives. A page-level empty state adds a title (Text md / Semibold `gray-900`) above the description.

### Do and don't

**Do:** Group values with an inner card.

```html
<div class="sb-card" data-variant="inner">
  <p class="sb-card-title">Rincian Tagihan</p>
  <dl class="sb-card-rows">
    <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
    <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
  </dl>
</div>
```

**Don't:** A white card inside a white card. The borders stack up and the levels look equal.

```html
<section class="sb-card" data-size="sm"><section class="sb-card" data-size="sm"><dl class="sb-card-rows">
  <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
  <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
</dl></section></section>
```

**Do:** A border and no shadow.

```html
<section class="sb-card" data-size="sm"><dl class="sb-card-rows">
  <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
  <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
</dl></section>
```

**Don't:** A floating shadow on a card. Shadows are for menus and dialogs that sit above the page.

```html
<section class="sb-card" data-size="sm" style="border-color: transparent; box-shadow: var(--shadow-lg)"><dl class="sb-card-rows">
  <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
  <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
</dl></section>
```

**Do:** One primary action, in the footer.

```html
<section class="sb-card" data-size="sm" aria-labelledby="card-9-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-9-title">Ringkasan Klaim</h3>
    </div>
  </header>
  <div class="sb-card-body" id="card-9-body">
    <dl class="sb-card-rows">
      <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
      <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
    </dl>
  </div>
  <footer class="sb-card-foot" id="card-9-foot">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Tolak</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">Setujui Klaim</button>
  </footer>
</section>
```

**Don't:** Several primary buttons. Pick the one next step; the others are Secondary gray.

```html
<section class="sb-card" data-size="sm"><dl class="sb-card-rows">
  <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
  <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
</dl><footer class="sb-card-foot"><button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">Simpan</button><button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">Kirim</button><button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">Setujui</button></footer></section>
```

### Accessibility

- A card that is a page section is a `<section>` labelled by its title (`aria-labelledby`). The title is a real heading (`h2`, `h3`) at the level the page needs.
- The fold chevron is a `<button>` with `aria-expanded` and `aria-controls` naming the body and footer; it takes its name from the title (`aria-labelledby`), and `aria-expanded` says open or folded.
- A link card has one link, in the title, so screen readers read a short name and keyboard users get one tab stop. Never wrap a whole card, with its buttons, in an `<a>`.
- Summary rows and metrics are a `<dl>`: each value is read with its label.
- The `gray-300` border is 1.47:1 against white. That is fine for a card, which also has its own content and spacing to show where it ends; the same open note as the Input field border applies to controls, not cards.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Title `gray-900` | `white` | 17.75:1 | Passes |
| Description, row labels `gray-500` | `white` / `gray-50` | 4.97:1 / 4.76:1 | Passes |
| AI summary title `brand-700` | `brand-50` | 6.09:1 | Passes |
| Empty state `gray-500` | `white` | 4.97:1 | Passes |

### Code

Load `tokens.css`, `button.css` and `badge.css` for the parts inside, then `card.css`. Add `card.js` only for the fold chevron.

`card.css`

```css
/* Card, Codemasters Design System
   Needs tokens.css; button.css and badge.css for the parts inside; card.js only for the fold chevron.

   <section class="sb-card" aria-labelledby="ringkasan-title">
     <header class="sb-card-head">
       <div class="sb-card-heading">
         <h3 class="sb-card-title" id="ringkasan-title">Ringkasan Klaim <span class="sb-badge" …>Disetujui</span></h3>
         <p class="sb-card-desc">Diperbarui 7 Oktober 2026</p>
       </div>
       <div class="sb-card-actions">…sb-btn sm…</div>
     </header>
     <div class="sb-card-body">…</div>
     <footer class="sb-card-foot">…sb-btn…</footer>
   </section>

   data-variant  inner | tint | framed   (omit for the white card)
   data-size     sm                (compact: padding 16)
   Link card     one <a class="sb-card-link"> in the title; its hit area covers the card.
   data-state    hover | focus on a link card. Static mockups and docs only. */

.sb-card {
  --card-py: 24px; --card-px: 24px; --card-gap: 16px; --card-title-lh: 30px; /* title line height: Text xl */
  box-sizing: border-box; position: relative;
  display: grid; align-content: start; gap: var(--card-gap); min-width: 0;
  padding: var(--card-py) var(--card-px);
  font: 400 var(--text-sm) var(--font); color: var(--text-secondary);
  background: var(--bg-primary);
  border: 1px solid var(--border-primary); border-radius: var(--radius-lg); /* cards are flat: a border, never a shadow */
}
.sb-card[data-size="sm"] { --card-py: 16px; --card-px: 16px; --card-gap: 12px; --card-title-lh: 24px; }

/* Head: title (+ badges) and description on the left, actions and the fold chevron on the right. */
.sb-card-head { display: flex; align-items: flex-start; gap: 16px; }
.sb-card-heading { display: grid; gap: 4px; flex: 1; min-width: 0; }
.sb-card-title {
  display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 0;
  font: 600 var(--text-xl) var(--font); color: var(--text-primary); text-wrap: balance;
}
.sb-card[data-size="sm"] .sb-card-title { font: 600 var(--text-md) var(--font); }
.sb-card-title > svg { width: 20px; height: 20px; flex: none; }
.sb-card-desc { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); text-wrap: pretty; }
/* Actions (36 px buttons) centre on the title line and overhang it, so they never make the head taller than the title. */
.sb-card-actions { position: relative; z-index: 1; display: flex; align-items: center; gap: 8px; flex: none; margin-block: calc((var(--card-title-lh) - 36px) / 2); }
.sb-card-fold > svg { transition: rotate 150ms var(--ease); }
.sb-card-fold[aria-expanded="true"] > svg { rotate: 180deg; }

/* Body and footer. The footer divider runs edge to edge. */
.sb-card-body { display: grid; gap: var(--card-gap); min-width: 0; }
.sb-card-foot {
  display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 12px;
  margin-inline: calc(var(--card-px) * -1); padding: var(--card-gap) var(--card-px) 0;
  border-top: 1px solid var(--border-secondary);
}
.sb-card-body[hidden], .sb-card-foot[hidden] { display: none; }
.sb-card-text { margin: 0; text-wrap: pretty; }

/* Inner card: a box inside a card. gray-50, radius 8, padding 12 16. */
.sb-card[data-variant="inner"] { --card-py: 12px; --card-px: 16px; --card-gap: 8px; --card-title-lh: 20px; background: var(--bg-secondary); border-color: var(--border-secondary); border-radius: var(--radius-md); }
.sb-card[data-variant="inner"] .sb-card-title { font: 600 var(--text-sm) var(--font); }

/* Tint: AI summary. brand-50, brand-200 border, radius 8, title in brand-700 with the loader icon. */
.sb-card[data-variant="tint"] { --card-py: 16px; --card-px: 16px; --card-gap: 12px; --card-title-lh: 24px; background: var(--bg-brand-subtle); border-color: var(--border-brand-subtle); border-radius: var(--radius-md); }
.sb-card[data-variant="tint"] .sb-card-title { font: 600 var(--text-md) var(--font); color: var(--text-brand); }

/* Summary rows: "Label …… Value". */
.sb-card-rows { display: grid; gap: 8px; margin: 0; }
.sb-card-row { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; }
.sb-card-row > dt { color: var(--text-quaternary); }
.sb-card-row > dd { margin: 0; font-weight: 500; color: var(--text-primary); text-align: end; font-variant-numeric: tabular-nums; }
.sb-card-row[data-total] { padding-top: 8px; border-top: 1px solid var(--border-secondary); }
.sb-card-row[data-total] > dt { font-weight: 500; color: var(--text-primary); }

/* Metric: label, value, change. */
.sb-metric { display: grid; gap: 8px; margin: 0; }
.sb-metric > dd { margin: 0; }
.sb-metric-label { font: 500 var(--text-sm) var(--font); color: var(--text-quaternary); }
.sb-metric-value { margin: 0; font: 600 var(--display-xs) var(--font); color: var(--text-primary); font-variant-numeric: tabular-nums; }
.sb-metric-foot { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font: 400 var(--text-xs) var(--font); color: var(--text-quaternary); }

/* Framed: a gray-100 shell (one step darker than the gray-50 page) holds the head and the footer; the content sits on a white sheet with its own border and
   radius, laid over the shell's edge. For chart and table panels (head on the shell) and forms (actions on the shell). */
.sb-card[data-variant="framed"] { --card-px: 16px; --card-title-lh: 24px; gap: 0; padding: 0; background: var(--bg-tertiary); border-color: var(--border-secondary); }
.sb-card[data-variant="framed"] > .sb-card-head { padding: 12px 16px; }
.sb-card[data-variant="framed"] > .sb-card-head .sb-card-title { font: 600 var(--text-md) var(--font); color: var(--text-secondary); }
.sb-card[data-variant="framed"] > .sb-card-body { margin: -1px; padding: 16px; background: var(--bg-primary); border: 1px solid var(--border-secondary); border-radius: var(--radius-lg); }
.sb-card[data-variant="framed"] > .sb-card-body .sb-card-title { font: 600 var(--text-md) var(--font); }
.sb-card[data-variant="framed"] > .sb-card-head + .sb-card-body { margin-top: 0; }
.sb-card[data-variant="framed"] > .sb-card-body:has(+ .sb-card-foot:not([hidden])) { margin-bottom: 0; }
.sb-card[data-variant="framed"] > .sb-card-foot { margin: 0; padding: 12px 16px; border-top: 0; }

/* Empty state, inside the body. In a chart or table area it takes a dashed frame the size of the missing content. */
.sb-card-empty { display: grid; justify-items: center; align-content: center; gap: 12px; padding: 32px 16px; text-align: center; color: var(--text-quaternary); text-wrap: pretty; }
.sb-card-empty > svg { width: 24px; height: 24px; color: var(--fg-quaternary); }
.sb-card-empty p { margin: 0; }
.sb-card-empty-text { display: grid; gap: 4px; }
.sb-card-empty-title { font: 600 var(--text-md) var(--font); color: var(--text-primary); }
.sb-card-empty[data-frame="dashed"] { min-height: 160px; border: 1px dashed var(--border-primary); border-radius: var(--radius-md); }

/* Link card: the title link stretches over the card. Buttons inside stay clickable (z-index above). */
.sb-card-link { color: inherit; text-decoration: none; outline: none; }
.sb-card-link::after { content: ''; position: absolute; inset: -1px; border-radius: inherit; }
.sb-card:has(.sb-card-link) { transition-property: background-color, border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease); }
.sb-card:has(.sb-card-link:hover), .sb-card[data-state="hover"] { background: var(--bg-secondary); border-color: var(--border-strong); }
.sb-card:has(.sb-card-link:focus-visible), .sb-card[data-state="focus"] { border-color: var(--border-brand); box-shadow: 0 0 0 4px var(--focus-ring); }

@media (prefers-reduced-motion: reduce) {
  .sb-card, .sb-card-fold > svg { transition: none; }
}
```

#### Fold script

`card.js`

```js
// Card fold: the chevron shows and hides the parts named in its aria-controls.
function cardFold(e) {
  const btn = e.target.closest?.('.sb-card-fold');
  if (!btn) return;
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', String(open));
  for (const id of btn.getAttribute('aria-controls').split(' ')) document.getElementById(id).hidden = !open;
}
document.addEventListener('click', cardFold);
```

## Chart

Bar, line, stacked bar and donut charts in plain SVG: a validated series order, thin marks, legend, tooltip and a table view. For one number, use the Card metric instead.

### Usage

Pick the form from what the reader must do, before any colour. Sometimes the answer is not a chart.

| The reader must… | Use | Not |
| --- | --- | --- |
| See one current number | Card metric (value + change) | A one-bar chart |
| Compare amounts across a few categories or months | Bar | A donut |
| Follow a trend over time | Line (area for a single series) | Bars for 12+ points |
| See the parts of one whole | Stacked bar; donut only for ≤ 6 clearly different parts | A donut for close values |
| Read exact values across many categories | A table, or a table under the chart | More colours |

- A chart sits in a Card, usually Framed: title and tools on the shell, chart on the sheet.
- Date range and filters sit in one row above all the charts they scope, never inside a chart card.
- One y-axis per chart. Two measures with different units are two charts.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Legend | Above the plot, left. Always for 2+ series, none for one (the card title names it). Key 12 px, radius 4, or a 16 × 2 line for line charts (dashed for rejected); label Text sm / Medium `gray-700`. |
| 2 | Y-axis ticks | Text xs `gray-500`, tabular, right-aligned 8 left of the plot. Four or five clean steps from 0. Ticks may abbreviate (`1,2 M`); everything else uses full numbers. |
| 3 | Gridline | 1 px solid `--chart-grid` (`gray-100`). Never dashed. |
| 4 | Bar | ≤ 24 thick, 4 px rounded at the data end, square on the baseline. Touching bars sit 2 px apart. |
| 5 | Baseline | 1 px solid `--chart-axis` (`gray-300`) at 0. |
| 6 | X-axis labels | Text xs `gray-500`, centred under each band. The container includes this band, so the card never scrolls. |

### Series colours

Six series colours in a fixed order. The order and steps were checked with a colour-blind simulation (protanopia and deuteranopia): the worst neighbouring pair is ΔE 10.9 (target 8) and 19.4 for normal vision (floor 15). The 300 step of the same family marks rejected or secondary values.

- Assign in order, never skip, never cycle. A seventh series folds into "Lainnya" (`--chart-other`) or the chart splits into small charts.
- Colour follows the entity, not its rank: Sembuh AI is always `--chart-1`, also when a filter hides other series.
- `--chart-1` is the company's `brand-500`, so each company's charts take its own blue.
- Approved is solid; rejected is the 300 step in bars and a dashed line (`6 4`) in line charts.
- Status colours (success, warning, error) mean good or bad only. They never stand in as series colours.
- Text never takes a series colour. Labels, values and legends stay `gray-500` to `gray-900`; the coloured key beside them carries the identity.
- `--chart-2` and `--chart-3` are just above 3:1 on white; `--chart-other` is below it. That is why every chart has a legend and a table view.

### Types

#### Bar

Grouped columns per period. The whole band is the hover target: it fills `gray-100` behind its bars, the hovered group stays and the others step back to 25 %.

```html
<figure class="sb-chart">
<ul class="sb-legend">
  <li><span class="sb-legend-key" style="--key: var(--chart-1)"></span>Sembuh AI</li>
  <li><span class="sb-legend-key" style="--key: var(--chart-2)"></span>TPA</li>
</ul>
<svg class="sb-chart-plot" viewBox="0 0 560 240" role="img" aria-label="Klaim disetujui per bulan, Sembuh AI dan TPA">
  <line class="sb-chart-base" x1="40" x2="552" y1="212" y2="212"/>
  <text x="32" y="216" text-anchor="end">0</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="161" y2="161"/>
  <text x="32" y="165" text-anchor="end">50</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="110" y2="110"/>
  <text x="32" y="114" text-anchor="end">100</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="59" y2="59"/>
  <text x="32" y="63" text-anchor="end">150</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="8" y2="8"/>
  <text x="32" y="12" text-anchor="end">200</text>
  <rect class="sb-chart-hit" data-band data-i="0" x="40" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jan: Sembuh AI 120, TPA 98" data-tip="{&quot;t&quot;:&quot;Jan&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;120&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;98&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="0" d="M57.66666666666666,212V93.60000000000001Q57.66666666666666,89.60000000000001 61.66666666666666,89.60000000000001H77.66666666666666Q81.66666666666666,89.60000000000001 81.66666666666666,93.60000000000001V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <path class="sb-chart-mark" data-i="0" d="M83.66666666666666,212V116.04Q83.66666666666666,112.04 87.66666666666666,112.04H103.66666666666666Q107.66666666666666,112.04 107.66666666666666,116.04V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="1" x="125.33333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Feb: Sembuh AI 135, TPA 102" data-tip="{&quot;t&quot;:&quot;Feb&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;135&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;102&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="1" d="M143,212V78.29999999999998Q143,74.29999999999998 147,74.29999999999998H163Q167,74.29999999999998 167,78.29999999999998V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <path class="sb-chart-mark" data-i="1" d="M169,212V111.96Q169,107.96 173,107.96H189Q193,107.96 193,111.96V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="2" x="210.66666666666666" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mar: Sembuh AI 150, TPA 110" data-tip="{&quot;t&quot;:&quot;Mar&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;150&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;110&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="2" d="M228.33333333333331,212V63Q228.33333333333331,59 232.33333333333331,59H248.33333333333331Q252.33333333333331,59 252.33333333333331,63V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <path class="sb-chart-mark" data-i="2" d="M254.33333333333331,212V103.8Q254.33333333333331,99.8 258.3333333333333,99.8H274.3333333333333Q278.3333333333333,99.8 278.3333333333333,103.8V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="3" x="296" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Apr: Sembuh AI 142, TPA 105" data-tip="{&quot;t&quot;:&quot;Apr&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;142&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;105&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="3" d="M313.6666666666667,212V71.16Q313.6666666666667,67.16 317.6666666666667,67.16H333.6666666666667Q337.6666666666667,67.16 337.6666666666667,71.16V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <path class="sb-chart-mark" data-i="3" d="M339.6666666666667,212V108.89999999999999Q339.6666666666667,104.89999999999999 343.6666666666667,104.89999999999999H359.6666666666667Q363.6666666666667,104.89999999999999 363.6666666666667,108.89999999999999V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="4" x="381.3333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mei: Sembuh AI 168, TPA 118" data-tip="{&quot;t&quot;:&quot;Mei&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;168&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;118&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="4" d="M399,212V44.640000000000015Q399,40.640000000000015 403,40.640000000000015H419Q423,40.640000000000015 423,44.640000000000015V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <path class="sb-chart-mark" data-i="4" d="M425,212V95.64Q425,91.64 429,91.64H445Q449,91.64 449,95.64V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="5" x="466.66666666666663" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jun: Sembuh AI 180, TPA 121" data-tip="{&quot;t&quot;:&quot;Jun&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;180&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;121&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="5" d="M484.3333333333333,212V32.400000000000006Q484.3333333333333,28.400000000000006 488.3333333333333,28.400000000000006H504.3333333333333Q508.3333333333333,28.400000000000006 508.3333333333333,32.400000000000006V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <path class="sb-chart-mark" data-i="5" d="M510.3333333333333,212V92.58Q510.3333333333333,88.58 514.3333333333333,88.58H530.3333333333333Q534.3333333333333,88.58 534.3333333333333,92.58V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <text x="82.66666666666666" y="232" text-anchor="middle">Jan</text>
  <text x="168" y="232" text-anchor="middle">Feb</text>
  <text x="253.33333333333331" y="232" text-anchor="middle">Mar</text>
  <text x="338.6666666666667" y="232" text-anchor="middle">Apr</text>
  <text x="424" y="232" text-anchor="middle">Mei</text>
  <text x="509.3333333333333" y="232" text-anchor="middle">Jun</text>
</svg>
<details class="sb-chart-table">
  <summary>Lihat sebagai tabel</summary>
  <table>
    <thead><tr><th scope="col">Bulan</th><th scope="col">Sembuh AI</th><th scope="col">TPA</th></tr></thead>
    <tbody>
      <tr><th scope="row">Jan</th><td>120</td><td>98</td></tr>
      <tr><th scope="row">Feb</th><td>135</td><td>102</td></tr>
      <tr><th scope="row">Mar</th><td>150</td><td>110</td></tr>
      <tr><th scope="row">Apr</th><td>142</td><td>105</td></tr>
      <tr><th scope="row">Mei</th><td>168</td><td>118</td></tr>
      <tr><th scope="row">Jun</th><td>180</td><td>121</td></tr>
    </tbody>
  </table>
</details>
<div class="sb-chart-tip" role="status" hidden></div>
</figure>
```

#### Line

2 px lines, one point per label, centred on it. Hovering anywhere in a band snaps a hairline crosshair to it, shows the dots (8 px with a 2 px white ring) and lists every series in one tooltip. Rejected is dashed.

A single series gets a 10 % area under its line and no legend.

#### Stacked bar

Part-to-whole per row, horizontal so long labels fit. Segments sit 2 px apart and only the far end is rounded. The total sits at the end of the row; segment values live in the tooltip and the table.

#### Donut

Only for a whole split into at most six clearly different parts. 20 px ring, 2 px gaps, the total in the centre (Text md / Semibold, full Rupiah), values in the legend in full Rupiah.

### Tooltip

- `white`, 1 px `gray-200` border, radius 8, padding `8 12`, `shadow-lg` drawn as a filter. It follows the pointer, 12 right of and below it, gliding to each new position in 200 ms (`translate` transition, so it can be interrupted); it flips at the right and bottom edges and stays inside the chart. On keyboard focus it sits 8 above the focused mark. With reduced motion it jumps instead of gliding.
- Title: the period or category, Text xs / Medium `gray-700`. Rows: a 12 × 2 line key, the value (Text sm / Semibold `gray-900`, tabular), then the series name in `gray-500`. Value first: the reader already knows the series.
- Shows on hover and on keyboard focus alike. It adds detail; it never holds a value that is not also in the table view.
- Fill it with `textContent`: series names are data.

### States

#### Empty

Keep the chart's size and show the Card empty state with a dashed frame, so the layout does not jump when data arrives.

#### Refreshing

While new data loads, keep the last chart at 50 % opacity (`aria-busy="true"` on the figure). No skeleton, no flash.

### Do and don't

**Do:** One series, one colour. The card title names it, so no legend.

```html
<figure class="sb-chart">
<svg class="sb-chart-plot" viewBox="0 0 560 240" role="img" aria-label="Klaim disetujui per bulan, Sembuh AI">
  <line class="sb-chart-base" x1="40" x2="552" y1="212" y2="212"/>
  <text x="32" y="216" text-anchor="end">0</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="161" y2="161"/>
  <text x="32" y="165" text-anchor="end">50</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="110" y2="110"/>
  <text x="32" y="114" text-anchor="end">100</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="59" y2="59"/>
  <text x="32" y="63" text-anchor="end">150</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="8" y2="8"/>
  <text x="32" y="12" text-anchor="end">200</text>
  <rect class="sb-chart-hit" data-band data-i="0" x="40" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jan: Sembuh AI 120" data-tip="{&quot;t&quot;:&quot;Jan&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;120&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="0" d="M70.66666666666666,212V93.60000000000001Q70.66666666666666,89.60000000000001 74.66666666666666,89.60000000000001H90.66666666666666Q94.66666666666666,89.60000000000001 94.66666666666666,93.60000000000001V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="1" x="125.33333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Feb: Sembuh AI 135" data-tip="{&quot;t&quot;:&quot;Feb&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;135&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="1" d="M156,212V78.29999999999998Q156,74.29999999999998 160,74.29999999999998H176Q180,74.29999999999998 180,78.29999999999998V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="2" x="210.66666666666666" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mar: Sembuh AI 150" data-tip="{&quot;t&quot;:&quot;Mar&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;150&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="2" d="M241.33333333333331,212V63Q241.33333333333331,59 245.33333333333331,59H261.3333333333333Q265.3333333333333,59 265.3333333333333,63V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="3" x="296" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Apr: Sembuh AI 142" data-tip="{&quot;t&quot;:&quot;Apr&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;142&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="3" d="M326.6666666666667,212V71.16Q326.6666666666667,67.16 330.6666666666667,67.16H346.6666666666667Q350.6666666666667,67.16 350.6666666666667,71.16V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="4" x="381.3333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mei: Sembuh AI 168" data-tip="{&quot;t&quot;:&quot;Mei&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;168&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="4" d="M412,212V44.640000000000015Q412,40.640000000000015 416,40.640000000000015H432Q436,40.640000000000015 436,44.640000000000015V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="5" x="466.66666666666663" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jun: Sembuh AI 180" data-tip="{&quot;t&quot;:&quot;Jun&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;180&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="5" d="M497.3333333333333,212V32.400000000000006Q497.3333333333333,28.400000000000006 501.3333333333333,28.400000000000006H517.3333333333333Q521.3333333333333,28.400000000000006 521.3333333333333,32.400000000000006V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <text x="82.66666666666666" y="232" text-anchor="middle">Jan</text>
  <text x="168" y="232" text-anchor="middle">Feb</text>
  <text x="253.33333333333331" y="232" text-anchor="middle">Mar</text>
  <text x="338.6666666666667" y="232" text-anchor="middle">Apr</text>
  <text x="424" y="232" text-anchor="middle">Mei</text>
  <text x="509.3333333333333" y="232" text-anchor="middle">Jun</text>
</svg>
<div class="sb-chart-tip" role="status" hidden></div>
</figure>
```

**Don't:** A different colour per bar. Colour is for identity; the bar length already shows the amount.

```html
<figure class="sb-chart">
<svg class="sb-chart-plot" viewBox="0 0 560 240" role="img" aria-label="Klaim disetujui per bulan, Sembuh AI">
  <line class="sb-chart-base" x1="40" x2="552" y1="212" y2="212"/>
  <text x="32" y="216" text-anchor="end">0</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="161" y2="161"/>
  <text x="32" y="165" text-anchor="end">50</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="110" y2="110"/>
  <text x="32" y="114" text-anchor="end">100</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="59" y2="59"/>
  <text x="32" y="63" text-anchor="end">150</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="8" y2="8"/>
  <text x="32" y="12" text-anchor="end">200</text>
  <rect class="sb-chart-hit" data-band data-i="0" x="40" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jan: Sembuh AI 120" data-tip="{&quot;t&quot;:&quot;Jan&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;120&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="0" d="M70.66666666666666,212V93.60000000000001Q70.66666666666666,89.60000000000001 74.66666666666666,89.60000000000001H90.66666666666666Q94.66666666666666,89.60000000000001 94.66666666666666,93.60000000000001V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="1" x="125.33333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Feb: Sembuh AI 135" data-tip="{&quot;t&quot;:&quot;Feb&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;135&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="1" d="M156,212V78.29999999999998Q156,74.29999999999998 160,74.29999999999998H176Q180,74.29999999999998 180,78.29999999999998V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="2" x="210.66666666666666" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mar: Sembuh AI 150" data-tip="{&quot;t&quot;:&quot;Mar&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;150&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="2" d="M241.33333333333331,212V63Q241.33333333333331,59 245.33333333333331,59H261.3333333333333Q265.3333333333333,59 265.3333333333333,63V212Z" fill="var(--chart-3)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="3" x="296" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Apr: Sembuh AI 142" data-tip="{&quot;t&quot;:&quot;Apr&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;142&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="3" d="M326.6666666666667,212V71.16Q326.6666666666667,67.16 330.6666666666667,67.16H346.6666666666667Q350.6666666666667,67.16 350.6666666666667,71.16V212Z" fill="var(--chart-4)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="4" x="381.3333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mei: Sembuh AI 168" data-tip="{&quot;t&quot;:&quot;Mei&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;168&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="4" d="M412,212V44.640000000000015Q412,40.640000000000015 416,40.640000000000015H432Q436,40.640000000000015 436,44.640000000000015V212Z" fill="var(--chart-5)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="5" x="466.66666666666663" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jun: Sembuh AI 180" data-tip="{&quot;t&quot;:&quot;Jun&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;180&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="5" d="M497.3333333333333,212V32.400000000000006Q497.3333333333333,28.400000000000006 501.3333333333333,28.400000000000006H517.3333333333333Q521.3333333333333,28.400000000000006 521.3333333333333,32.400000000000006V212Z" fill="var(--chart-6)" pointer-events="none"/>
  <text x="82.66666666666666" y="232" text-anchor="middle">Jan</text>
  <text x="168" y="232" text-anchor="middle">Feb</text>
  <text x="253.33333333333331" y="232" text-anchor="middle">Mar</text>
  <text x="338.6666666666667" y="232" text-anchor="middle">Apr</text>
  <text x="424" y="232" text-anchor="middle">Mei</text>
  <text x="509.3333333333333" y="232" text-anchor="middle">Jun</text>
</svg>
<div class="sb-chart-tip" role="status" hidden></div>
</figure>
```

**Do:** A legend and a tooltip carry the values.

```html
<figure class="sb-chart">
<ul class="sb-legend">
  <li><span class="sb-legend-key" data-line="solid" style="--key: var(--chart-1)"></span>Sembuh AI</li>
  <li><span class="sb-legend-key" data-line="solid" style="--key: var(--chart-2)"></span>TPA</li>
</ul>
<svg class="sb-chart-plot" viewBox="0 0 560 240" role="img" aria-label="Tren klaim per bulan: Sembuh AI, TPA">
  <line class="sb-chart-base" x1="40" x2="552" y1="212" y2="212"/>
  <text x="32" y="216" text-anchor="end">0</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="161" y2="161"/>
  <text x="32" y="165" text-anchor="end">50</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="110" y2="110"/>
  <text x="32" y="114" text-anchor="end">100</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="59" y2="59"/>
  <text x="32" y="63" text-anchor="end">150</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="8" y2="8"/>
  <text x="32" y="12" text-anchor="end">200</text>
  <line class="sb-chart-cross" x1="40" x2="40" y1="8" y2="212"/>
  <polyline class="sb-chart-line" points="82.66666666666666,89.60000000000001 168,74.29999999999998 253.33333333333331,59 338.6666666666667,67.16 424,40.640000000000015 509.3333333333333,28.400000000000006" stroke="var(--chart-1)"/>
  <polyline class="sb-chart-line" points="82.66666666666666,112.04 168,107.96 253.33333333333331,99.8 338.6666666666667,104.89999999999999 424,91.64 509.3333333333333,88.58" stroke="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="0" cx="82.66666666666666" cy="89.60000000000001" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="0" cx="82.66666666666666" cy="112.04" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="1" cx="168" cy="74.29999999999998" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="1" cx="168" cy="107.96" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="2" cx="253.33333333333331" cy="59" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="2" cx="253.33333333333331" cy="99.8" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="3" cx="338.6666666666667" cy="67.16" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="3" cx="338.6666666666667" cy="104.89999999999999" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="4" cx="424" cy="40.640000000000015" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="4" cx="424" cy="91.64" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="5" cx="509.3333333333333" cy="28.400000000000006" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="5" cx="509.3333333333333" cy="88.58" r="4" fill="var(--chart-2)"/>
  <rect class="sb-chart-hit" data-i="0" data-x="82.66666666666666" x="40" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jan: Sembuh AI 120, TPA 98" data-tip="{&quot;t&quot;:&quot;Jan&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;120&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;98&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="1" data-x="168" x="125.33333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Feb: Sembuh AI 135, TPA 102" data-tip="{&quot;t&quot;:&quot;Feb&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;135&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;102&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="2" data-x="253.33333333333331" x="210.66666666666666" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mar: Sembuh AI 150, TPA 110" data-tip="{&quot;t&quot;:&quot;Mar&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;150&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;110&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="3" data-x="338.6666666666667" x="296" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Apr: Sembuh AI 142, TPA 105" data-tip="{&quot;t&quot;:&quot;Apr&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;142&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;105&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="4" data-x="424" x="381.3333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mei: Sembuh AI 168, TPA 118" data-tip="{&quot;t&quot;:&quot;Mei&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;168&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;118&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="5" data-x="509.3333333333333" x="466.66666666666663" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jun: Sembuh AI 180, TPA 121" data-tip="{&quot;t&quot;:&quot;Jun&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;180&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;121&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <text x="82.66666666666666" y="232" text-anchor="middle">Jan</text>
  <text x="168" y="232" text-anchor="middle">Feb</text>
  <text x="253.33333333333331" y="232" text-anchor="middle">Mar</text>
  <text x="338.6666666666667" y="232" text-anchor="middle">Apr</text>
  <text x="424" y="232" text-anchor="middle">Mei</text>
  <text x="509.3333333333333" y="232" text-anchor="middle">Jun</text>
</svg>

<div class="sb-chart-tip" role="status" hidden></div>
</figure>
```

**Don't:** A number on every point. Nobody reads them; they bury the lines.

```html
<figure class="sb-chart">
<ul class="sb-legend">
  <li><span class="sb-legend-key" data-line="solid" style="--key: var(--chart-1)"></span>Sembuh AI</li>
  <li><span class="sb-legend-key" data-line="solid" style="--key: var(--chart-2)"></span>TPA</li>
</ul>
<svg class="sb-chart-plot" viewBox="0 0 560 240" role="img" aria-label="Tren klaim per bulan: Sembuh AI, TPA">
  <line class="sb-chart-base" x1="40" x2="552" y1="212" y2="212"/>
  <text x="32" y="216" text-anchor="end">0</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="161" y2="161"/>
  <text x="32" y="165" text-anchor="end">50</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="110" y2="110"/>
  <text x="32" y="114" text-anchor="end">100</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="59" y2="59"/>
  <text x="32" y="63" text-anchor="end">150</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="8" y2="8"/>
  <text x="32" y="12" text-anchor="end">200</text>
  <line class="sb-chart-cross" x1="40" x2="40" y1="8" y2="212"/>
  <polyline class="sb-chart-line" points="82.66666666666666,89.60000000000001 168,74.29999999999998 253.33333333333331,59 338.6666666666667,67.16 424,40.640000000000015 509.3333333333333,28.400000000000006" stroke="var(--chart-1)"/>
  <polyline class="sb-chart-line" points="82.66666666666666,112.04 168,107.96 253.33333333333331,99.8 338.6666666666667,104.89999999999999 424,91.64 509.3333333333333,88.58" stroke="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="0" cx="82.66666666666666" cy="89.60000000000001" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="0" cx="82.66666666666666" cy="112.04" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="1" cx="168" cy="74.29999999999998" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="1" cx="168" cy="107.96" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="2" cx="253.33333333333331" cy="59" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="2" cx="253.33333333333331" cy="99.8" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="3" cx="338.6666666666667" cy="67.16" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="3" cx="338.6666666666667" cy="104.89999999999999" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="4" cx="424" cy="40.640000000000015" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="4" cx="424" cy="91.64" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="5" cx="509.3333333333333" cy="28.400000000000006" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="5" cx="509.3333333333333" cy="88.58" r="4" fill="var(--chart-2)"/>
  <rect class="sb-chart-hit" data-i="0" data-x="82.66666666666666" x="40" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jan: Sembuh AI 120, TPA 98" data-tip="{&quot;t&quot;:&quot;Jan&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;120&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;98&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="1" data-x="168" x="125.33333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Feb: Sembuh AI 135, TPA 102" data-tip="{&quot;t&quot;:&quot;Feb&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;135&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;102&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="2" data-x="253.33333333333331" x="210.66666666666666" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mar: Sembuh AI 150, TPA 110" data-tip="{&quot;t&quot;:&quot;Mar&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;150&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;110&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="3" data-x="338.6666666666667" x="296" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Apr: Sembuh AI 142, TPA 105" data-tip="{&quot;t&quot;:&quot;Apr&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;142&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;105&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="4" data-x="424" x="381.3333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mei: Sembuh AI 168, TPA 118" data-tip="{&quot;t&quot;:&quot;Mei&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;168&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;118&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="5" data-x="509.3333333333333" x="466.66666666666663" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jun: Sembuh AI 180, TPA 121" data-tip="{&quot;t&quot;:&quot;Jun&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;180&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;121&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <text x="82.66666666666666" y="232" text-anchor="middle">Jan</text>
  <text x="168" y="232" text-anchor="middle">Feb</text>
  <text x="253.33333333333331" y="232" text-anchor="middle">Mar</text>
  <text x="338.6666666666667" y="232" text-anchor="middle">Apr</text>
  <text x="424" y="232" text-anchor="middle">Mei</text>
  <text x="509.3333333333333" y="232" text-anchor="middle">Jun</text>
  <text x="82.66666666666666" y="81.60000000000001" text-anchor="middle">120</text>
  <text x="168" y="66.29999999999998" text-anchor="middle">135</text>
  <text x="253.33333333333331" y="51" text-anchor="middle">150</text>
  <text x="338.6666666666667" y="59.16" text-anchor="middle">142</text>
  <text x="424" y="32.640000000000015" text-anchor="middle">168</text>
  <text x="509.3333333333333" y="20.400000000000006" text-anchor="middle">180</text>
  <text x="82.66666666666666" y="104.04" text-anchor="middle">98</text>
  <text x="168" y="99.96" text-anchor="middle">102</text>
  <text x="253.33333333333331" y="91.8" text-anchor="middle">110</text>
  <text x="338.6666666666667" y="96.89999999999999" text-anchor="middle">105</text>
  <text x="424" y="83.64" text-anchor="middle">118</text>
  <text x="509.3333333333333" y="80.58" text-anchor="middle">121</text>
</svg>

<div class="sb-chart-tip" role="status" hidden></div>
</figure>
```

**Do:** Parts of a whole as a stacked bar: lengths compare at a glance.

```html
<figure class="sb-chart">
<ul class="sb-legend">
  <li><span class="sb-legend-key" style="--key: var(--chart-1)"></span>Disetujui</li>
  <li><span class="sb-legend-key" style="--key: var(--chart-2)"></span>Ditolak</li>
  <li><span class="sb-legend-key" style="--key: var(--chart-3)"></span>Diproses</li>
</ul>
<svg class="sb-chart-plot" viewBox="0 0 560 152" role="img" aria-label="Status klaim per jenis layanan">
  <text x="0" y="22">Rawat inap</text>
  <path class="sb-chart-mark" data-i="0-0" d="M96,8H233.75690607734808V28H96Z" fill="var(--chart-1)" tabindex="0" aria-label="Rawat inap, Disetujui: 62" data-tip="{&quot;t&quot;:&quot;Rawat inap&quot;,&quot;rows&quot;:[[&quot;Disetujui&quot;,&quot;62&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="0-1" d="M235.75690607734808,8H265.31491712707185V28H235.75690607734808Z" fill="var(--chart-2)" tabindex="0" aria-label="Rawat inap, Ditolak: 14" data-tip="{&quot;t&quot;:&quot;Rawat inap&quot;,&quot;rows&quot;:[[&quot;Ditolak&quot;,&quot;14&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="0-2" d="M267.31491712707185,8H283.6022099447514Q287.6022099447514,8 287.6022099447514,12V24Q287.6022099447514,28 283.6022099447514,28H267.31491712707185Z" fill="var(--chart-3)" tabindex="0" aria-label="Rawat inap, Diproses: 9" data-tip="{&quot;t&quot;:&quot;Rawat inap&quot;,&quot;rows&quot;:[[&quot;Diproses&quot;,&quot;9&quot;,&quot;var(--chart-3)&quot;]]}"/>
  <text x="295.6022099447514" y="22">85</text>
  <text x="0" y="70">Rawat jalan</text>
  <path class="sb-chart-mark" data-i="1-0" d="M96,56H427.6132596685083V76H96Z" fill="var(--chart-1)" tabindex="0" aria-label="Rawat jalan, Disetujui: 148" data-tip="{&quot;t&quot;:&quot;Rawat jalan&quot;,&quot;rows&quot;:[[&quot;Disetujui&quot;,&quot;148&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="1-1" d="M429.6132596685083,56H474.9502762430939V76H429.6132596685083Z" fill="var(--chart-2)" tabindex="0" aria-label="Rawat jalan, Ditolak: 21" data-tip="{&quot;t&quot;:&quot;Rawat jalan&quot;,&quot;rows&quot;:[[&quot;Ditolak&quot;,&quot;21&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="1-2" d="M476.9502762430939,56H500Q504,56 504,60V72Q504,76 500,76H476.9502762430939Z" fill="var(--chart-3)" tabindex="0" aria-label="Rawat jalan, Diproses: 12" data-tip="{&quot;t&quot;:&quot;Rawat jalan&quot;,&quot;rows&quot;:[[&quot;Diproses&quot;,&quot;12&quot;,&quot;var(--chart-3)&quot;]]}"/>
  <text x="512" y="70">181</text>
  <text x="0" y="118">Gigi</text>
  <path class="sb-chart-mark" data-i="2-0" d="M96,104H170.64088397790056V124H96Z" fill="var(--chart-1)" tabindex="0" aria-label="Gigi, Disetujui: 34" data-tip="{&quot;t&quot;:&quot;Gigi&quot;,&quot;rows&quot;:[[&quot;Disetujui&quot;,&quot;34&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="2-1" d="M172.64088397790056,104H184.1657458563536V124H172.64088397790056Z" fill="var(--chart-2)" tabindex="0" aria-label="Gigi, Ditolak: 6" data-tip="{&quot;t&quot;:&quot;Gigi&quot;,&quot;rows&quot;:[[&quot;Ditolak&quot;,&quot;6&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="2-2" d="M186.1657458563536,104H189.54696132596683Q192.9281767955801,104 192.9281767955801,107.38121546961327V120.61878453038673Q192.9281767955801,124 189.54696132596683,124H186.1657458563536Z" fill="var(--chart-3)" tabindex="0" aria-label="Gigi, Diproses: 3" data-tip="{&quot;t&quot;:&quot;Gigi&quot;,&quot;rows&quot;:[[&quot;Diproses&quot;,&quot;3&quot;,&quot;var(--chart-3)&quot;]]}"/>
  <text x="200.9281767955801" y="118">43</text>
</svg>
<div class="sb-chart-tip" role="status" hidden></div>

</figure>
```

**Don't:** Two y-axes. Where the lines cross means nothing; make two charts.

```html
<p class="chart-note">Two y-axes on one chart: claims (0–200) on the left, Rupiah (0–1 M) on the right.</p>
```

### Accessibility

- The chart is a `<figure>`; the SVG has `role="img"` and an `aria-label` that says what it shows.
- Every chart has a table view (`<details>` "Lihat sebagai tabel"): the full data, readable without colour, hover or a mouse.
- Identity never rests on colour alone: a legend for 2+ series, dashed lines for rejected, the table view.
- Hover targets are whole bands or segments, not thin lines. Each is focusable with an `aria-label` holding its values, and focus shows the same tooltip as hover.
- Series colours are 3:1 or more against white except `--chart-other`; text in and around the chart uses text colours (`gray-500` and darker).

### Code

Load `tokens.css`, then `chart.css`, and `chart.js` for the tooltip. Draw the SVG with the specs above; the markup of each mark is in the examples. The examples scale one 560 × 240 drawing; in the app, draw the SVG at its rendered width (measure the card, redraw on resize) so axis text stays 12 px.

`chart.css`

```css
/* Chart, Codemasters Design System
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

.sb-chart { position: relative; display: grid; gap: 16px; margin: 0; min-width: 0; font: 400 var(--text-sm) var(--font); color: var(--text-secondary); }
.sb-chart-plot { display: block; width: 100%; height: auto; overflow: visible; }
.sb-chart-plot text { font: 400 12px var(--font); fill: var(--text-quaternary); font-variant-numeric: tabular-nums; }
.sb-chart-plot .sb-chart-total { font: 600 var(--text-md) var(--font); fill: var(--text-primary); }
.sb-chart[data-layout="donut"] { grid-template-columns: 240px minmax(0, 1fr); align-items: center; gap: 16px 32px; }
.sb-chart[data-layout="donut"] .sb-legend { flex-direction: column; align-items: flex-start; }
.sb-chart[data-layout="donut"] > .sb-chart-table { grid-column: 1 / -1; }
@media (max-width: 560px) { .sb-chart[data-layout="donut"] { grid-template-columns: minmax(0, 1fr); justify-items: center; } }
.sb-chart-grid { stroke: var(--chart-grid); stroke-width: 1; shape-rendering: crispEdges; }
.sb-chart-base { stroke: var(--chart-axis); stroke-width: 1; shape-rendering: crispEdges; }
.sb-chart-line { fill: none; stroke-width: 2; stroke-linejoin: round; stroke-linecap: round; }
.sb-chart-line[data-dashed] { stroke-dasharray: 6 4; }
.sb-chart-area { opacity: .1; }
.sb-chart-dot { stroke: var(--bg-primary); stroke-width: 2; opacity: 0; } /* the white ring keeps it legible on the line */
.sb-chart-dot.is-on { opacity: 1; }
.sb-chart-cross { stroke: var(--border-primary); stroke-width: 1; opacity: 0; shape-rendering: crispEdges; }
.sb-chart[data-hover] .sb-chart-cross { opacity: 1; }
.sb-chart-hit { fill: transparent; outline: none; cursor: default; transition: fill 150ms var(--ease); }
.sb-chart-hit[data-band].is-on { fill: var(--bg-tertiary); } /* bar charts: the hovered period's band fills behind its bars */
.sb-chart-mark { transition: opacity 150ms var(--ease); }
.sb-chart[data-hover] .sb-chart-mark:not(.is-on) { opacity: .25; } /* the hovered mark stays, the rest step back */
.sb-chart [data-tip]:focus-visible { stroke: var(--brand-600); stroke-width: 2; }
.sb-chart[aria-busy="true"] .sb-chart-plot { opacity: .5; } /* refetch keeps the last render, faded; no skeleton */

/* Legend: always for 2+ series. Key mirrors the mark: square for bars and segments, line for lines (dashed = rejected). */
.sb-legend { display: flex; flex-wrap: wrap; gap: 8px 16px; margin: 0; padding: 0; list-style: none; }
.sb-legend > li { display: inline-flex; align-items: center; gap: 8px; font: 500 var(--text-sm) var(--font); color: var(--text-secondary); }
.sb-legend-key { --key: var(--chart-1); width: 12px; height: 12px; flex: none; border-radius: var(--radius-sm); background: var(--key); }
.sb-legend-key[data-line] { height: 2px; width: 16px; border-radius: 0; }
.sb-legend-key[data-line="dashed"] { background: repeating-linear-gradient(90deg, var(--key) 0 6px, transparent 6px 10px); }
.sb-legend-value { color: var(--text-primary); font-weight: 600; font-variant-numeric: tabular-nums; }

/* Tooltip: white, gray-200 border, radius 8, shadow-lg as a filter. Value first, then the series name. */
.sb-chart-tip {
  position: absolute; z-index: 20; top: 0; left: 0; pointer-events: none;
  transition: translate 200ms var(--ease); /* glides after the pointer, like a spring with no bounce */
  display: grid; gap: 4px; min-width: 140px; padding: 8px 12px;
  background: var(--bg-primary); border: 1px solid var(--border-secondary); border-radius: var(--radius-md);
  filter: drop-shadow(0 12px 8px rgba(16,24,40,.08)) drop-shadow(0 4px 3px rgba(16,24,40,.03));
  font: 400 var(--text-xs) var(--font); color: var(--text-quaternary); white-space: nowrap;
}
.sb-chart-tip[hidden] { display: none; }
.sb-chart-tip p { margin: 0; }
.sb-chart-tip-title { font-weight: 500; color: var(--text-secondary); }
.sb-chart-tip-row { --key: var(--chart-1); display: flex; align-items: center; gap: 8px; }
.sb-chart-tip-row::before { content: ''; width: 12px; height: 2px; flex: none; background: var(--key); } /* line key, not a box */
.sb-chart-tip-row > strong { font: 600 var(--text-sm) var(--font); color: var(--text-primary); font-variant-numeric: tabular-nums; }

/* Table view: the accessible twin of every chart. */
.sb-chart-table > summary { width: fit-content; font: 500 var(--text-sm) var(--font); color: var(--text-quaternary); cursor: pointer; }
.sb-chart-table > summary:hover { color: var(--text-secondary); }
.sb-chart-table table { width: 100%; margin-top: 12px; border-collapse: collapse; font: 400 var(--text-sm) var(--font); }
.sb-chart-table :is(th, td) { padding: 8px 12px; border-bottom: 1px solid var(--border-secondary); text-align: end; font-variant-numeric: tabular-nums; }
.sb-chart-table :is(th, td):first-child { text-align: start; }
.sb-chart-table th { font: 500 var(--text-xs) var(--font); color: var(--text-quaternary); background: var(--bg-secondary); }

@media (prefers-reduced-motion: reduce) {
  .sb-chart-mark, .sb-chart-tip, .sb-chart-hit { transition: none; }
}
```

#### Tooltip script

`chart.js`

```js
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
```

## Checkbox and radio

One component for three selection controls, picked with Type: Checkbox for any number of options, Radio for exactly one, and Check circle for selectable cards and rows.

### Usage

| Type | Shape | Use |
| --- | --- | --- |
| Checkbox | Square, radius 4 | Any number of options; a single yes/no that applies on Save |
| Radio | Circle | Exactly one of 2–5 visible options. More than 5: use Input dropdown |
| Check circle | Circle, filled when checked | Selectable cards and list rows where the whole item is the target |

- A yes/no that takes effect immediately is a Toggle, not a Checkbox.
- Clicking the label toggles the control; the whole row is the hit area.
- Radios in one group share a `name` and sit in a `role="radiogroup"` with one group label. Preselect one radio when a sensible default exists.
- Table rows use Checkbox `sm` without text; the header box turns indeterminate when only some rows are selected.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Control | 16 px (`sm`) or 20 px (`md`). Sits 2 px down so it centres on the first line of the label. |
| 2 | Label | Optional. Text sm / Medium (`md`: Text md / Medium), `gray-700`. Gap 8 (`md`: 12). |
| 3 | Supporting text | Optional. Text sm / Regular (`md`: Text md / Regular, 2 px below), `gray-500`. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Type | Checkbox, Radio, Check circle | `type="checkbox"`, `type="radio"`, `data-variant="circle"` |
| Checked | True, False | `checked` |
| Indeterminate | True, False (Checkbox only) | `input.indeterminate = true`; `data-indeterminate` for first paint |
| Size | `sm` (16), `md` (20) | `data-size` on `.sb-check` |
| State | Default, Hover, Focused, Disabled | `:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state` |
| Text / Supporting text | True, False | `<label for>` / `<p id>` + `aria-describedby`; without text, `aria-label` |

### Types

#### Checkbox

```html
<div class="sb-choices">
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="ty-ck-0" checked>
    <div class="sb-check-text">
      <label class="sb-check-label" for="ty-ck-0">Resume medis</label>
    </div>
  </div>
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="ty-ck-1" checked>
    <div class="sb-check-text">
      <label class="sb-check-label" for="ty-ck-1">Invoice rumah sakit</label>
    </div>
  </div>
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="ty-ck-2">
    <div class="sb-check-text">
      <label class="sb-check-label" for="ty-ck-2">Hasil laboratorium</label>
    </div>
  </div>
</div>
```

#### Radio

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="ty-rd-label">
  <span class="sb-choices-label" id="ty-rd-label">Metode pembayaran klaim</span>
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="radio" id="ty-rd-0" name="ty-rd-pay" aria-describedby="ty-rd-0-sup" checked>
    <div class="sb-check-text">
      <label class="sb-check-label" for="ty-rd-0">Cashless</label>
      <p class="sb-check-sup" id="ty-rd-0-sup">Rumah sakit menagih langsung ke asuransi.</p>
    </div>
  </div>
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="radio" id="ty-rd-1" name="ty-rd-pay" aria-describedby="ty-rd-1-sup">
    <div class="sb-check-text">
      <label class="sb-check-label" for="ty-rd-1">Reimbursement</label>
      <p class="sb-check-sup" id="ty-rd-1-sup">Peserta membayar dulu, lalu diganti.</p>
    </div>
  </div>
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="radio" id="ty-rd-2" name="ty-rd-pay" aria-describedby="ty-rd-2-sup">
    <div class="sb-check-text">
      <label class="sb-check-label" for="ty-rd-2">Kombinasi</label>
      <p class="sb-check-sup" id="ty-rd-2-sup">Sebagian cashless, sisanya diganti.</p>
    </div>
  </div>
</div>
```

#### Check circle

For selectable cards and rows, where the whole item is the target. Checkbox group (selectable cards) is built on it.

```html
<div class="sb-check" data-size="sm">
  <input class="sb-check-input" type="checkbox" id="ty-cc-0" data-variant="circle" checked>
  <div class="sb-check-text">
    <label class="sb-check-label" for="ty-cc-0">Paket Rawat Inap</label>
  </div>
</div>
<div class="sb-check" data-size="sm">
  <input class="sb-check-input" type="checkbox" id="ty-cc-1" data-variant="circle">
  <div class="sb-check-text">
    <label class="sb-check-label" for="ty-cc-1">Paket Rawat Jalan</label>
  </div>
</div>
```

### Sizes

```html
<div class="sb-check" data-size="sm">
  <input class="sb-check-input" type="checkbox" id="sz-sm" aria-describedby="sz-sm-sup" checked>
  <div class="sb-check-text">
    <label class="sb-check-label" for="sz-sm">Kirim salinan ke peserta</label>
    <p class="sb-check-sup" id="sz-sm-sup">Peserta menerima email berisi keputusan klaim.</p>
  </div>
</div>
<div class="sb-check" data-size="md">
  <input class="sb-check-input" type="checkbox" id="sz-md" aria-describedby="sz-md-sup" checked>
  <div class="sb-check-text">
    <label class="sb-check-label" for="sz-md">Kirim salinan ke peserta</label>
    <p class="sb-check-sup" id="sz-md-sup">Peserta menerima email berisi keputusan klaim.</p>
  </div>
</div>
```

| Size | Control | Checkbox radius | Gap | Label | Supporting text |
| --- | --- | --- | --- | --- | --- |
| `sm` | 16 | 4 | 8 | Text sm / Medium `gray-700` | Text sm / Regular `gray-500` |
| `md` | 20 | 4 | 12 | Text md / Medium `gray-700` | Text md / Regular `gray-500`, 2 px below |

### States

| State | Unchecked | Checked / indeterminate |
| --- | --- | --- |
| Default | `white`, 1 px `gray-300` border | `brand-50` fill, `brand-600` border, `brand-600` check / minus / dot |
| Hover | `brand-50` fill, `brand-600` border | same as Default |
| Focused | `white`, `brand-300` border + 4 px `focus-ring` ring | Default + 4 px `focus-ring` ring |
| Disabled | Default at 50 % opacity, label included | Default at 50 % opacity, label included |

Check circle, checked: solid `brand-600` with a white check.

### Select all (indeterminate)

Indeterminate (minus) means some but not all children are checked, such as the "select all" box in a table header. Click the rows or the header box.

```html
<div class="sb-choices">
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="sa-head" data-indeterminate data-select-all="klaim">
    <div class="sb-check-text">
      <label class="sb-check-label" for="sa-head">Pilih semua klaim</label>
    </div>
  </div>
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="sa-0" checked data-select-item="klaim">
    <div class="sb-check-text">
      <label class="sb-check-label" for="sa-0">Klaim A</label>
    </div>
  </div>
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="sa-1" checked data-select-item="klaim">
    <div class="sb-check-text">
      <label class="sb-check-label" for="sa-1">Klaim B</label>
    </div>
  </div>
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="sa-2" data-select-item="klaim">
    <div class="sb-check-text">
      <label class="sb-check-label" for="sa-2">Klaim C</label>
    </div>
  </div>
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="sa-3" data-select-item="klaim">
    <div class="sb-check-text">
      <label class="sb-check-label" for="sa-3">Klaim D</label>
    </div>
  </div>
</div>
```

### Do and don't

**Do:** Three options, all visible: Radio.

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="dd-rd-label">
  <span class="sb-choices-label" id="dd-rd-label">Metode pembayaran klaim</span>
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="radio" id="dd-rd-0" name="dd-rd-pay" aria-describedby="dd-rd-0-sup" checked>
    <div class="sb-check-text">
      <label class="sb-check-label" for="dd-rd-0">Cashless</label>
      <p class="sb-check-sup" id="dd-rd-0-sup">Rumah sakit menagih langsung ke asuransi.</p>
    </div>
  </div>
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="radio" id="dd-rd-1" name="dd-rd-pay" aria-describedby="dd-rd-1-sup">
    <div class="sb-check-text">
      <label class="sb-check-label" for="dd-rd-1">Reimbursement</label>
      <p class="sb-check-sup" id="dd-rd-1-sup">Peserta membayar dulu, lalu diganti.</p>
    </div>
  </div>
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="radio" id="dd-rd-2" name="dd-rd-pay" aria-describedby="dd-rd-2-sup">
    <div class="sb-check-text">
      <label class="sb-check-label" for="dd-rd-2">Kombinasi</label>
      <p class="sb-check-sup" id="dd-rd-2-sup">Sebagian cashless, sisanya diganti.</p>
    </div>
  </div>
</div>
```

**Don't:** Checkboxes for a choice that allows only one answer. Both look valid until the form rejects it.

```html
<div class="sb-choices">
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="dd-ck-0" checked>
    <div class="sb-check-text">
      <label class="sb-check-label" for="dd-ck-0">Cashless</label>
    </div>
  </div>
  <div class="sb-check" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="dd-ck-1" checked>
    <div class="sb-check-text">
      <label class="sb-check-label" for="dd-ck-1">Reimbursement</label>
    </div>
  </div>
</div>
```

### Accessibility

- Use native inputs: Space toggles a checkbox, arrow keys move within a radio group, and the label toggles through `for`.
- Give a radio group `role="radiogroup"` and a visible label via `aria-labelledby` (or a `fieldset` with a `legend`).
- Set `indeterminate` with JS so screen readers announce "mixed"; `data-indeterminate` only draws it before the script runs.
- Supporting text is connected with `aria-describedby`, so it is read after the label.

| Pair | Ratio | Needed | Result |
| --- | --- | --- | --- |
| Checked border and mark `brand-600` on `white` / `brand-50` | 5.06:1 / 4.65:1 | 3:1 | Passes |
| Unchecked border `gray-300` on `white` | 1.47:1 | 3:1 | **Fails** |
| Label `gray-700`, supporting text `gray-500` on `white` | 10.46:1, 4.97:1 | 4.5:1 | Passes |

> **Warning:** The unchecked `gray-300` border is the same faint boundary as Input field (1.47:1). `gray-400` (2.58:1) is closer, `gray-500` (4.97:1) passes. Decision for the design team, ideally for all controls at once.

### Code

Load `tokens.css` and `checkbox.css`. The controls need no script; add `checkbox-select-all.js` only for a select-all header.

`checkbox.css`

```css
/* Checkbox, radio and check circle, Codemasters Design System
   Needs tokens.css. No script for the control itself.

   <div class="sb-check" data-size="sm">
     <input class="sb-check-input" type="checkbox" id="setuju" aria-describedby="setuju-sup">
     <div class="sb-check-text">
       <label class="sb-check-label" for="setuju">Kirim salinan ke peserta</label>
       <p class="sb-check-sup" id="setuju-sup">Peserta menerima email berisi keputusan klaim.</p>
     </div>
   </div>

   Type          type="checkbox" (square) | type="radio" (circle) | data-variant="circle" (check circle, filled when checked)
   data-size     sm (16 px) | md (20 px)
   Checked       checked. Indeterminate (checkbox only): input.indeterminate = true in JS;
                 data-indeterminate draws it before the script runs.
   Disabled      disabled. data-state="hover" | "focus" forces a state in static mockups and docs only. */

.sb-check { --ck: 16px; --ck-r: var(--radius-sm); --ck-mark: 12px; --ck-dot: 6px; display: inline-flex; align-items: flex-start; gap: 8px; }
.sb-check[data-size="md"] { --ck: 20px; --ck-r: var(--radius-sm); --ck-mark: 14px; --ck-dot: 8px; gap: 12px; }

.sb-check-input {
  --ck-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M10 3 4.5 8.5 2 6' fill='none' stroke='black' stroke-width='1.67' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  position: relative; flex: none; box-sizing: border-box;
  width: var(--ck); height: var(--ck); margin: 0;
  background: var(--bg-primary); border: 1px solid var(--border-primary); border-radius: var(--ck-r);
  color: var(--fg-brand);
  appearance: none; cursor: pointer;
  transition-property: background-color, border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
/* The control sits 2 px down so it centres on the first line of its label. */
.sb-check:has(.sb-check-text) .sb-check-input { margin-top: 2px; }
.sb-check-input[type="radio"], .sb-check-input[data-variant="circle"] { border-radius: var(--radius-full); }
.sb-check-input[type="checkbox"]:indeterminate, .sb-check-input[data-indeterminate] { --ck-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 6h7' fill='none' stroke='black' stroke-width='1.67' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); }

/* Mark: check, minus or radio dot, drawn in currentColor.
   :indeterminate is scoped to checkboxes: browsers also match it on a radio whose group has nothing checked. */
.sb-check-input::before {
  content: ''; position: absolute; inset: 0; margin: auto;
  width: var(--ck-mark); height: var(--ck-mark);
  background: currentColor; -webkit-mask: var(--ck-icon) center / contain no-repeat; mask: var(--ck-icon) center / contain no-repeat;
  visibility: hidden;
}
.sb-check-input[type="radio"]:not([data-variant])::before { width: var(--ck-dot); height: var(--ck-dot); border-radius: var(--radius-full); -webkit-mask: none; mask: none; }
.sb-check-input:is(:checked, [type="checkbox"]:indeterminate, [data-indeterminate])::before { visibility: visible; }

/* States. Disabled uses [type] so it outranks the checked rule. */
.sb-check-input:is(:checked, [type="checkbox"]:indeterminate, [data-indeterminate]) { background: var(--bg-brand-subtle); border-color: var(--brand-600); }
.sb-check-input:not(:checked, [type="checkbox"]:indeterminate, [data-indeterminate], :disabled):is(:hover, [data-state="hover"]) { background: var(--bg-brand-subtle); border-color: var(--brand-600); }
.sb-check-input:focus-visible, .sb-check-input[data-state="focus"] { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }
.sb-check-input:not(:checked, [type="checkbox"]:indeterminate, [data-indeterminate]):is(:focus-visible, [data-state="focus"]) { border-color: var(--border-brand); }
.sb-check-input[type]:disabled { cursor: not-allowed; }

/* Check circle: solid brand-600 with a white check when checked. */
.sb-check-input[data-variant="circle"]:checked { background: var(--brand-600); border-color: var(--brand-600); color: var(--white); }

/* Text: same layout as Toggle */
.sb-check-text { display: grid; }
.sb-check-label { font: 500 var(--text-sm) var(--font); color: var(--text-secondary); cursor: pointer; }
.sb-check-sup { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }
.sb-check[data-size="md"] .sb-check-label { font-size: 16px; line-height: 24px; }
.sb-check[data-size="md"] .sb-check-sup { margin-top: 2px; font-size: 16px; line-height: 24px; }
/* Disabled: the whole control, label included, at 50 % opacity. */
.sb-check:has(:disabled) { opacity: .5; }
.sb-check:has(:disabled) :is(.sb-check-label, .sb-check-sup) { cursor: not-allowed; }

/* A list of choices: 12 between rows. A radio group gets one visible label. */
.sb-choices { display: grid; gap: 12px; margin: 0; padding: 0; border: 0; }
.sb-choices-label { margin-bottom: 4px; padding: 0; font: 500 var(--text-sm) var(--font); color: var(--text-secondary); }

@media (prefers-reduced-motion: reduce) {
  .sb-check-input { transition: none; }
}
```

#### Select-all script

`checkbox-select-all.js`

```js
// "Select all" checkbox: checks every row; turns indeterminate when only some rows are checked.
// <input data-select-all="klaim"> on the header box, <input data-select-item="klaim"> on each row.
function selectAll(e) {
  const head = e.target.closest?.('input[data-select-all]');
  if (head) {
    document.querySelectorAll(`input[data-select-item="${head.dataset.selectAll}"]:not(:disabled)`).forEach(i => (i.checked = head.checked));
    head.removeAttribute('data-indeterminate');
    return;
  }
  const item = e.target.closest?.('input[data-select-item]');
  if (!item) return;
  const name = item.dataset.selectItem;
  const items = [...document.querySelectorAll(`input[data-select-item="${name}"]`)];
  const box = document.querySelector(`input[data-select-all="${name}"]`);
  const n = items.filter(i => i.checked).length;
  box.checked = n === items.length;
  box.indeterminate = n > 0 && n < items.length;
  box.removeAttribute('data-indeterminate'); // the property takes over from the first-paint attribute
}
document.addEventListener('change', selectAll);
```

## Checkbox group

Selectable cards: a list of bordered cards where the whole card is the control. Use it when each option needs a description or a visual, such as a plan, a payment method or an assignee.

### Usage

| Type | Content | Control | Use for |
| --- | --- | --- | --- |
| Checkbox | Title + inline subtitle + description | Checkbox, left | Pick any number: modules, notification channels |
| Radio button | Title + subtitle + description | Radio, left | Pick exactly one: report frequency, claim method |
| Icon simple | 32 px featured icon + text | Check circle, right | Options that read faster with an icon: data sources |
| Avatar | Avatar + name, handle, role | Check circle, right | Picking people: reviewer, assignee |
| Payment icon | Card logo + text + text links | Check circle, right | Saved payment methods, with Set as default and Edit |
| Icon card | Header (icon, title, check circle) + body (price, description, badge) | Check circle, top right | Plans and packages |

- Use cards only when each option needs a description or a visual. Short text options are plain Checkbox or Radio.
- Stack cards vertically, full width, 12 apart. One group uses one type and one size.
- Check circle types are single-select (`type="radio"`) or multi-select (`type="checkbox"`) underneath; say which in the group label when it is not obvious.
- Preselect one card in a single-select group when a sensible default exists.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Card | Radius 8, padding 16, 1 px border. Full width; the whole card is the hit area. |
| 2 | Control | Checkbox and radio, same size as the card (`sm` 16, `md` 20). Leading: 2 px down, gap 8 (`md` 12). Check circle types: trailing. |
| 3 | Title | Text sm / Medium (`md`: Text md / Medium). `gray-700`, selected `brand-800`. |
| 4 | Subtitle | Optional, inline after the title. Regular weight, `gray-500`, selected `brand-600`. |
| 5 | Description | Text sm / Regular (`md`: Text md, 2 px below). `gray-500`, selected `brand-600`. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Selected | True, False | `checked` on the input; the card follows with `:has()` |
| Size | `sm`, `md` | `data-size` on `.sb-cg-item` |
| Type | Checkbox, Radio button, Icon simple, Avatar, Payment icon, Icon card | What sits in the row; Icon card adds `data-type="card"` |
| State | Default, Hover, Focused, Disabled | `:hover`, `:focus-visible` on the input, `disabled`. Static mockups only: `data-state` on the card |
| Breakpoint | Desktop (768), Mobile (343) | None: the card is fluid and text wraps. The Icon card badge drops below the price when narrow |

### Types

#### Checkbox

```html
<div class="sb-choices" role="group" aria-labelledby="cg-mod-label">
  <span class="sb-choices-label" id="cg-mod-label">Modul analisis</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="cg-mod-0" aria-describedby="cg-mod-0-desc" checked>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-mod-0">Deteksi FWA <span class="sb-cg-sub">per klaim</span></label>
      <p class="sb-cg-desc" id="cg-mod-0-desc">Tandai klaim yang berpotensi fraud, waste atau abuse sebelum dibayar.</p>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="cg-mod-1" aria-describedby="cg-mod-1-desc" checked>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-mod-1">Ringkasan medis AI <span class="sb-cg-sub">per dokumen</span></label>
      <p class="sb-cg-desc" id="cg-mod-1-desc">Resume medis dan hasil lab diringkas jadi satu halaman.</p>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="cg-mod-2" aria-describedby="cg-mod-2-desc">
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-mod-2">Verifikasi tagihan <span class="sb-cg-sub">per invoice</span></label>
      <p class="sb-cg-desc" id="cg-mod-2-desc">Tagihan rumah sakit dicocokkan dengan tarif kontrak.</p>
    </div>
  </div>
</div>
```

#### Radio button

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="cg-lap-label">
  <span class="sb-choices-label" id="cg-lap-label">Frekuensi laporan</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="cg-lap-0" name="cg-lap" aria-describedby="cg-lap-0-desc" checked>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-lap-0">Harian <span class="sb-cg-sub">setiap 07.00</span></label>
      <p class="sb-cg-desc" id="cg-lap-0-desc">Ringkasan klaim kemarin dikirim ke email tim.</p>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="cg-lap-1" name="cg-lap" aria-describedby="cg-lap-1-desc">
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-lap-1">Mingguan <span class="sb-cg-sub">setiap Senin</span></label>
      <p class="sb-cg-desc" id="cg-lap-1-desc">Tren klaim dan temuan FWA selama tujuh hari terakhir.</p>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="cg-lap-2" name="cg-lap" aria-describedby="cg-lap-2-desc">
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-lap-2">Bulanan <span class="sb-cg-sub">tanggal 1</span></label>
      <p class="sb-cg-desc" id="cg-lap-2-desc">Laporan lengkap untuk rapat evaluasi bulanan.</p>
    </div>
  </div>
</div>
```

#### Icon simple

```html
<div class="sb-choices" role="group" aria-labelledby="cg-src-label">
  <span class="sb-choices-label" id="cg-src-label">Sumber data klaim</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <span class="sb-cg-icon"><svg aria-hidden="true"><!-- layers --></svg></span>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-src-0">Integrasi API <span class="sb-cg-sub">real time</span></label>
      <p class="sb-cg-desc" id="cg-src-0-desc">Klaim masuk langsung dari sistem asuransi, tanpa unggah manual.</p>
    </div>
    <input class="sb-check-input" type="checkbox" id="cg-src-0" data-variant="circle" aria-describedby="cg-src-0-desc" checked>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <span class="sb-cg-icon"><svg aria-hidden="true"><!-- file-text --></svg></span>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-src-1">Unggah manual <span class="sb-cg-sub">PDF, JPG</span></label>
      <p class="sb-cg-desc" id="cg-src-1-desc">Tim mengunggah berkas klaim dari dashboard.</p>
    </div>
    <input class="sb-check-input" type="checkbox" id="cg-src-1" data-variant="circle" aria-describedby="cg-src-1-desc">
  </div>
</div>
```

#### Avatar

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="cg-rev-label">
  <span class="sb-choices-label" id="cg-rev-label">Tugaskan reviewer</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <span class="sb-avatar" data-size="sm"><img src="…" alt=""></span>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-rev-0">Advisor A <span class="sb-cg-sub">@advisor.a</span></label>
      <p class="sb-cg-desc" id="cg-rev-0-desc">Medical reviewer</p>
    </div>
    <input class="sb-check-input" type="radio" id="cg-rev-0" data-variant="circle" name="cg-rev" aria-describedby="cg-rev-0-desc" checked>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <span class="sb-avatar" data-size="sm"><img src="…" alt=""></span>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-rev-1">Advisor B <span class="sb-cg-sub">@advisor.b</span></label>
      <p class="sb-cg-desc" id="cg-rev-1-desc">Claim analyst</p>
    </div>
    <input class="sb-check-input" type="radio" id="cg-rev-1" data-variant="circle" name="cg-rev" aria-describedby="cg-rev-1-desc">
  </div>
</div>
```

#### Payment icon

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="cg-pay-label">
  <span class="sb-choices-label" id="cg-pay-label">Metode pembayaran</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <span class="sb-cg-pay" aria-hidden="true"><svg aria-hidden="true"><!-- credit-card --></svg></span>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-pay-0">Kartu berakhiran 1234</label>
      <p class="sb-cg-desc" id="cg-pay-0-desc">Berlaku s.d. 06/2027</p>
      <div class="sb-cg-actions">
        <button class="sb-btn" type="button" data-hierarchy="link-gray" data-size="sm">Jadikan utama</button>
        <button class="sb-btn" type="button" data-hierarchy="link-color" data-size="sm">Ubah</button>
      </div>
    </div>
    <input class="sb-check-input" type="radio" id="cg-pay-0" data-variant="circle" name="cg-pay" aria-describedby="cg-pay-0-desc" checked>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <span class="sb-cg-pay" aria-hidden="true"><svg aria-hidden="true"><!-- credit-card --></svg></span>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-pay-1">Kartu berakhiran 5678</label>
      <p class="sb-cg-desc" id="cg-pay-1-desc">Berlaku s.d. 11/2026</p>
      <div class="sb-cg-actions">
        <button class="sb-btn" type="button" data-hierarchy="link-gray" data-size="sm">Jadikan utama</button>
        <button class="sb-btn" type="button" data-hierarchy="link-color" data-size="sm">Ubah</button>
      </div>
    </div>
    <input class="sb-check-input" type="radio" id="cg-pay-1" data-variant="circle" name="cg-pay" aria-describedby="cg-pay-1-desc">
  </div>
</div>
```

#### Icon card

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="cg-plan-label">
  <span class="sb-choices-label" id="cg-plan-label">Paket langganan</span>
  <div class="sb-check sb-cg-item" data-size="sm" data-type="card">
    <div class="sb-cg-head">
      <span class="sb-cg-icon"><svg aria-hidden="true"><!-- layers --></svg></span>
      <label class="sb-cg-title" for="cg-plan-0">Paket Starter</label>
      <input class="sb-check-input" type="radio" id="cg-plan-0" data-variant="circle" name="cg-plan" aria-describedby="cg-plan-0-desc" checked>
    </div>
    <div class="sb-cg-body">
      <div class="sb-cg-text">
        <p class="sb-cg-price"><strong>Rp5 jt</strong> per bulan</p>
        <p class="sb-cg-desc" id="cg-plan-0-desc">Hingga 1.000 klaim per bulan dan semua modul analisis.</p>
      </div>
      <span class="sb-badge" data-size="sm" data-color="success">Paling populer</span>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm" data-type="card">
    <div class="sb-cg-head">
      <span class="sb-cg-icon"><svg aria-hidden="true"><!-- layers --></svg></span>
      <label class="sb-cg-title" for="cg-plan-1">Paket Enterprise</label>
      <input class="sb-check-input" type="radio" id="cg-plan-1" data-variant="circle" name="cg-plan" aria-describedby="cg-plan-1-desc">
    </div>
    <div class="sb-cg-body">
      <div class="sb-cg-text">
        <p class="sb-cg-price"><strong>Rp12 jt</strong> per bulan</p>
        <p class="sb-cg-desc" id="cg-plan-1-desc">Klaim tanpa batas, integrasi API dan reviewer khusus.</p>
      </div>
      <span class="sb-badge" data-size="sm" data-color="success">Hemat 20%</span>
    </div>
  </div>
</div>
```

### Sizes

```html
<div class="sb-check sb-cg-item" data-size="sm">
  <input class="sb-check-input" type="checkbox" id="sz-cg-sm" aria-describedby="sz-cg-sm-desc" checked>
  <div class="sb-cg-text">
    <label class="sb-cg-title" for="sz-cg-sm">Deteksi FWA <span class="sb-cg-sub">per klaim</span></label>
    <p class="sb-cg-desc" id="sz-cg-sm-desc">Tandai klaim yang berpotensi fraud, waste atau abuse sebelum dibayar.</p>
  </div>
</div>
<div class="sb-check sb-cg-item" data-size="md">
  <input class="sb-check-input" type="checkbox" id="sz-cg-md" aria-describedby="sz-cg-md-desc" checked>
  <div class="sb-cg-text">
    <label class="sb-cg-title" for="sz-cg-md">Deteksi FWA <span class="sb-cg-sub">per klaim</span></label>
    <p class="sb-cg-desc" id="sz-cg-md-desc">Tandai klaim yang berpotensi fraud, waste atau abuse sebelum dibayar.</p>
  </div>
</div>
```

| Size | Control | Title, description | Featured icon / avatar | Gap |
| --- | --- | --- | --- | --- |
| `sm` | 16 | Text sm (14/20) | 32 / 32 | Control 8, visual 12 |
| `md` | 20 | Text md (16/24), description 2 px below | 40 / 40 | Control 12, avatar and card logo 16, featured icon 12 |

Icon card titles are Text md in both sizes; `md` raises the price from Display sm to Display md.

### States

| State | Unselected | Selected |
| --- | --- | --- |
| Default | `white`, `gray-200` border | `brand-50` fill, `brand-300` border |
| Hover | `white`, `brand-300` border | `brand-50` fill, `brand-600` border |
| Focused | `white`, `brand-300` border + 4 px `focus-ring` ring | `brand-50`, `brand-300` border + 4 px `focus-ring` ring |
| Disabled | Default at 50 % opacity | Default at 50 % opacity |

- Only the card shows the focus ring; the control inside keeps its Default or checked look.
- Selected text: title `brand-800`, subtitle and description `brand-600`.
- Icon card: the header takes the fill and border, the body stays white with a `gray-200` border.
- Payment icon, selected: "Set as default" (Link gray) turns `brand-600`.

### Do and don't

**Do:** Cards when each option needs a description.

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="dd-cg-label">
  <span class="sb-choices-label" id="dd-cg-label">Frekuensi laporan</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="dd-cg-0" name="dd-cg" aria-describedby="dd-cg-0-desc" checked>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="dd-cg-0">Harian <span class="sb-cg-sub">setiap 07.00</span></label>
      <p class="sb-cg-desc" id="dd-cg-0-desc">Ringkasan klaim kemarin dikirim ke email tim.</p>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="dd-cg-1" name="dd-cg" aria-describedby="dd-cg-1-desc">
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="dd-cg-1">Mingguan <span class="sb-cg-sub">setiap Senin</span></label>
      <p class="sb-cg-desc" id="dd-cg-1-desc">Tren klaim tujuh hari terakhir.</p>
    </div>
  </div>
</div>
```

**Don't:** Cards for a short yes/no. The description only repeats the title; use Radio or a Toggle.

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="dd-cg2-label">
  <span class="sb-choices-label" id="dd-cg2-label">Kirim salinan?</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="dd-cg2-0" name="dd-cg2" aria-describedby="dd-cg2-0-desc" checked>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="dd-cg2-0">Ya</label>
      <p class="sb-cg-desc" id="dd-cg2-0-desc">Ya</p>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="dd-cg2-1" name="dd-cg2" aria-describedby="dd-cg2-1-desc">
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="dd-cg2-1">Tidak</label>
      <p class="sb-cg-desc" id="dd-cg2-1-desc">Tidak</p>
    </div>
  </div>
</div>
```

### Accessibility

- The input is a native checkbox or radio: Space toggles it, arrow keys move within a radio group.
- The title is the `<label for>`; its `::after` covers the card, so a click anywhere selects it. The description is linked with `aria-describedby`.
- Text links (Set as default, Edit) sit above the label layer (`z-index: 2`), so they act on their own and never toggle the card. Disable them with the card.
- Wrap the cards in `role="radiogroup"` (single select) or `role="group"` (multi select) with a visible label via `aria-labelledby`.
- The control shows selection as well as the colour, so the state does not rely on colour alone.

| Pair | Ratio | Needed | Result |
| --- | --- | --- | --- |
| Selected title `brand-800` on `brand-50` | 7.94:1 | 4.5:1 | Passes |
| Selected subtitle, description `brand-600` on `brand-50` | 4.65:1 | 4.5:1 | Passes |
| Unselected title `gray-700`, description `gray-500` on `white` | 10.46:1, 4.97:1 | 4.5:1 | Passes |
| Selected "Set as default" `brand-600` on `brand-50` | 4.65:1 | 4.5:1 | Passes |

### Code

Load `tokens.css`, `checkbox.css` and `checkbox-group.css`; add `avatar.css` for Avatar cards, `button.css` for Payment icon links and `badge.css` for Icon card badges. No script.

`checkbox-group.css`

```css
/* Checkbox group (selectable cards), Codemasters Design System
   Needs tokens.css and checkbox.css (the control). Avatar cards also use avatar.css, Payment icon cards button.css, Icon cards badge.css.

   <div class="sb-choices" role="radiogroup" aria-labelledby="lap-label">
     <span class="sb-choices-label" id="lap-label">Frekuensi laporan</span>
     <div class="sb-check sb-cg-item" data-size="sm">
       <input class="sb-check-input" type="radio" name="lap" id="lap-1" aria-describedby="lap-1-desc" checked>
       <div class="sb-cg-text">
         <label class="sb-cg-title" for="lap-1">Harian <span class="sb-cg-sub">setiap 07.00</span></label>
         <p class="sb-cg-desc" id="lap-1-desc">Ringkasan klaim kemarin dikirim ke email tim.</p>
       </div>
     </div>
   </div>

   The label stretches over the whole card (::after), so the card is the hit area while text links inside
   stay clickable on their own. Selected, hover, focus and disabled all follow the input: no script.
   data-size     sm | md (on .sb-cg-item; also sizes the control through .sb-check)
   data-type     card = Icon card (header + body). Other types are just what sits in the row.
   data-state    hover | focus on .sb-cg-item forces a state in static mockups and docs only. */

.sb-cg-item {
  --cg-bg: var(--bg-primary); --cg-bd: var(--border-secondary); --cg-title: var(--text-secondary); --cg-text: var(--text-quaternary);
  position: relative; display: flex; width: 100%; box-sizing: border-box; padding: 16px;
  background: var(--cg-bg); border: 1px solid var(--cg-bd); border-radius: var(--radius-md);
  transition-property: background-color, border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
/* Gap: a leading checkbox or radio sits as in Checkbox (8, md 12, from .sb-check). An icon, avatar or card logo: 12 (md 16;
   the md featured icon keeps 12 because its ring already adds space). A trailing check circle uses the same gap. */
.sb-cg-item:has(> .sb-cg-icon, > .sb-avatar, > .sb-cg-pay) { gap: 12px; }
.sb-cg-item[data-size="md"]:has(> .sb-avatar, > .sb-cg-pay) { gap: 16px; }
.sb-cg-item > .sb-check-input:first-child { margin-top: 2px; } /* centres on the first line, as in Checkbox */

/* States. Disabled comes last so it wins over Selected. */
.sb-cg-item:has(.sb-check-input:checked) { --cg-bg: var(--bg-brand-subtle); --cg-bd: var(--border-brand); --cg-title: var(--text-brand-strong); --cg-text: var(--fg-brand); }
.sb-cg-item:not(:has(:disabled)):is(:hover, [data-state="hover"]) { --cg-bd: var(--border-brand); }
.sb-cg-item:has(.sb-check-input:checked):not(:has(:disabled)):is(:hover, [data-state="hover"]) { --cg-bd: var(--brand-600); }
.sb-cg-item:is(:has(.sb-check-input:focus-visible), [data-state="focus"]) { --cg-bd: var(--border-brand); box-shadow: 0 0 0 4px var(--focus-ring); }
.sb-cg-item:has(.sb-check-input:disabled) { cursor: not-allowed; } /* 50 % opacity comes from .sb-check */

/* Only the card shows focus; the control keeps its Default / checked look. */
.sb-cg-item .sb-check-input:focus-visible { box-shadow: none; }
.sb-cg-item .sb-check-input:not(:checked, [type="checkbox"]:indeterminate):focus-visible { border-color: var(--border-primary); }

/* Text */
.sb-cg-text { display: grid; flex: 1; min-width: 0; }
.sb-cg-title { font: 500 var(--text-sm) var(--font); color: var(--cg-title); cursor: pointer; }
.sb-cg-title::after { content: ''; position: absolute; z-index: 1; inset: 0; border-radius: var(--radius-md); } /* the whole card is the hit area */
.sb-cg-sub { font-weight: 400; color: var(--cg-text); }
.sb-cg-desc { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--cg-text); }
.sb-cg-item[data-size="md"] .sb-cg-title { font: 500 var(--text-md) var(--font); }
.sb-cg-item[data-size="md"] .sb-cg-desc { margin-top: 2px; font: 400 var(--text-md) var(--font); }
.sb-cg-item:has(:disabled) .sb-cg-title { cursor: not-allowed; }

/* Leading visuals. Featured icon: 32 (md 40) brand-100 circle with a 4 px brand-50 ring, overhanging the text line by 2 (md 4). */
.sb-cg-icon { display: grid; place-items: center; flex: none; box-sizing: border-box; width: 32px; height: 32px; margin-block: -2px; border: 4px solid var(--bg-brand-subtle); border-radius: var(--radius-full); background: var(--bg-brand-subtle-hover); color: var(--fg-brand); }
.sb-cg-icon svg { width: 16px; height: 16px; }
.sb-cg-item[data-size="md"] .sb-cg-icon { width: 40px; height: 40px; margin-block: -4px; }
.sb-cg-item[data-size="md"] .sb-cg-icon svg { width: 20px; height: 20px; }
/* Card logo tile, 46 x 32. Use the real brand logos. */
.sb-cg-pay { display: grid; place-items: center; flex: none; box-sizing: border-box; width: 46px; height: 32px; border: 1px solid var(--border-tertiary); border-radius: var(--radius-sm); background: var(--bg-primary); color: var(--text-secondary); }
.sb-cg-pay svg { width: 20px; height: 20px; }

/* Payment icon: text links sit above the stretched label, so they never toggle the card. */
.sb-cg-actions { position: relative; z-index: 2; display: flex; gap: 12px; margin-top: 8px; }
.sb-cg-item:has(.sb-check-input:checked) .sb-btn[data-hierarchy="link-gray"] { --btn-fg: var(--fg-brand); --btn-fg-hover: var(--text-brand); }

/* Icon card: the header carries the selection colours, the body stays white. */
.sb-cg-item[data-type="card"] { flex-direction: column; align-items: stretch; gap: 0; padding: 0; background: var(--bg-primary); border-color: var(--border-secondary); }
.sb-cg-head { display: flex; align-items: center; gap: 12px; margin: -1px -1px 0; padding: 16px 20px 16px 16px; background: var(--cg-bg); border: 1px solid var(--cg-bd); border-radius: var(--radius-md) var(--radius-md) 0 0; transition: inherit; }
.sb-cg-head .sb-cg-title, .sb-cg-item[data-size="md"] .sb-cg-head .sb-cg-title { flex: 1; font: 500 var(--text-md) var(--font); }
.sb-cg-head .sb-cg-icon { margin-block: 0; }
.sb-cg-body { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 8px 16px; padding: 16px; }
.sb-cg-body .sb-cg-text { flex: 1 1 240px; } /* narrow cards: the badge wraps below */
.sb-cg-price { margin: 0 0 4px; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }
.sb-cg-price strong { font: 600 var(--display-sm) var(--font); color: var(--text-secondary); }
.sb-cg-body .sb-cg-desc { color: var(--text-quaternary); }
.sb-cg-item[data-size="md"] .sb-cg-price strong { font: 600 var(--display-md) var(--font); }

@media (prefers-reduced-motion: reduce) {
  .sb-cg-item, .sb-cg-head { transition: none; }
}
```

## Combobox

Type to find people or values and pick one or many. Picks show as chips, results can come from the server while you type, and a value that does not exist yet can be added.

### Usage

- Use a combobox when people search a long or open list: reviewers, hospitals, labels. For one value from a short, fixed list, use Input dropdown; for 2 to 6 visible choices, use Checkbox group or Toggle.
- Pick many (`data-multiple`) when the field takes a set: reviewers on a claim, hospitals in a filter. Picks show as chips in the field and the list stays open.
- Search the server (`data-async`) when the list is too long to send to the page. Show "Mencari…" while waiting, and say so when nothing matches or the request fails.
- Let people add a value (`data-creatable`) only where new values are welcome, such as labels. Never for people or hospitals: those must already exist.
- People options show the avatar, the name and the email, and the search matches both.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Field | Input field box: `gray-300` border, radius 8, `shadow-xs`, padding `9 14`; 44 high for one line and a line taller for each wrap. Leading 20 px icon (`user` for people), trailing chevron that turns when open. |
| 2 | Chip | Badge md Gray with an × that removes the pick ("Hapus Analis D"). Chips and the text sit 4 apart and wrap. |
| 3 | Values | Chips and the search text on shared lines. The text is Text md, at least 64 wide before it wraps under the chips. The placeholder ("Cari nama atau email") hides once there are chips. |
| 4 | Option | An Input dropdown option: 24 px initials avatar, name in Text md / Medium, email in `gray-500`. 44 high, radius 8; hover and active `gray-50`. |
| 5 | Picked option | `gray-50` fill and a 20 px `brand-600` check. In Multiple the list stays open, so picks can be undone in place. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Multiple | True, False | `data-multiple` on `.sb-cb`, `aria-multiselectable="true"` on the listbox, a `ul.sb-cb-chips` before the input |
| Async | True, False | `data-async`; the page listens for `sb-cb-search` and answers with `cbResults(cb, items)` or `cbResults(cb, null)` |
| Add new values | True, False | `data-creatable` and a hidden `.sb-cb-create` option last in the list |
| Option content | Text, Person | Person: `.sb-dd-avatar` + `.sb-dd-label` + `.sb-dd-sup` (email) |
| State | Default, Open, Disabled | Open: `aria-expanded="true"` on the input. Disabled: `disabled` on the input |

### Types

#### Multiple

Picks become chips; the list stays open and the search text clears after each pick.

```html
<div class="sb-field">
  <label class="sb-field-label" for="cb-2">Reviewer</label>
  <div class="sb-cb" data-multiple>
    <div class="sb-cb-field">
      <svg aria-hidden="true"><!-- user --></svg>
      <div class="sb-cb-values">
        <ul class="sb-cb-chips" role="list" aria-label="Terpilih"><li class="sb-cb-chip" data-value="ad"><span class="sb-badge" data-size="md" data-icon="x-close">Analis D<button class="sb-badge-x" type="button" aria-label="Hapus Analis D"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li><li class="sb-cb-chip" data-value="af"><span class="sb-badge" data-size="md" data-icon="x-close">Admin F<button class="sb-badge-x" type="button" aria-label="Hapus Admin F"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li></ul>
        <input id="cb-2" type="text" role="combobox" aria-expanded="false" aria-controls="cb-2-list" aria-autocomplete="list" placeholder="Cari nama atau email" value="" autocomplete="off">
      </div>
      <svg class="sb-cb-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </div>
    <div class="sb-dd-menu sb-cb-panel" hidden>
      <div role="listbox" id="cb-2-list" aria-multiselectable="true" aria-label="Reviewer"><div class="sb-dd-opt" role="option" id="cb-2-o0" data-value="aa" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AA</span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">advisor.a@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o1" data-value="ab" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AB</span><span class="sb-dd-label">Advisor B</span><span class="sb-dd-sup">advisor.b@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o2" data-value="rc" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">RC</span><span class="sb-dd-label">Reviewer C</span><span class="sb-dd-sup">reviewer.c@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o3" data-value="ad" aria-selected="true"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AD</span><span class="sb-dd-label">Analis D</span><span class="sb-dd-sup">analis.d@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o4" data-value="ae" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AE</span><span class="sb-dd-label">Analis E</span><span class="sb-dd-sup">analis.e@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o5" data-value="af" aria-selected="true"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AF</span><span class="sb-dd-label">Admin F</span><span class="sb-dd-sup">admin.f@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o6" data-value="ag" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AG</span><span class="sb-dd-label">Admin G</span><span class="sb-dd-sup">admin.g@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o7" data-value="rh" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">RH</span><span class="sb-dd-label">Reviewer H</span><span class="sb-dd-sup">reviewer.h@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div></div>
      <p class="sb-cb-status" role="status" hidden></p>
    </div>
  </div>
</div>
```

#### Single person

One pick fills the field with the name and closes the list, as in Input dropdown; the field stays searchable for the next change.

```html
<div class="sb-field">
  <label class="sb-field-label" for="cb-3">Ditugaskan ke</label>
  <div class="sb-cb" data-value="rc">
    <div class="sb-cb-field">
      <svg aria-hidden="true"><!-- user --></svg>
      <div class="sb-cb-values">
        <input id="cb-3" type="text" role="combobox" aria-expanded="false" aria-controls="cb-3-list" aria-autocomplete="list" placeholder="Cari nama atau email" value="Reviewer C" autocomplete="off">
      </div>
      <svg class="sb-cb-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </div>
    <div class="sb-dd-menu sb-cb-panel" hidden>
      <div role="listbox" id="cb-3-list" aria-label="Ditugaskan ke"><div class="sb-dd-opt" role="option" id="cb-3-o0" data-value="aa" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AA</span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">advisor.a@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o1" data-value="ab" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AB</span><span class="sb-dd-label">Advisor B</span><span class="sb-dd-sup">advisor.b@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o2" data-value="rc" aria-selected="true"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">RC</span><span class="sb-dd-label">Reviewer C</span><span class="sb-dd-sup">reviewer.c@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o3" data-value="ad" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AD</span><span class="sb-dd-label">Analis D</span><span class="sb-dd-sup">analis.d@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o4" data-value="ae" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AE</span><span class="sb-dd-label">Analis E</span><span class="sb-dd-sup">analis.e@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o5" data-value="af" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AF</span><span class="sb-dd-label">Admin F</span><span class="sb-dd-sup">admin.f@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o6" data-value="ag" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AG</span><span class="sb-dd-label">Admin G</span><span class="sb-dd-sup">admin.g@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o7" data-value="rh" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">RH</span><span class="sb-dd-label">Reviewer H</span><span class="sb-dd-sup">reviewer.h@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div></div>
      <p class="sb-cb-status" role="status" hidden></p>
    </div>
  </div>
</div>
```

#### Async

Nothing is listed until people type. 250 ms after the last key the page asks the server; old results dim while new ones load.

```html
<div class="sb-field">
  <label class="sb-field-label" for="cb-4">Reviewer</label>
  <div class="sb-cb" data-multiple data-async>
    <div class="sb-cb-field">
      <svg aria-hidden="true"><!-- user --></svg>
      <div class="sb-cb-values">
        <ul class="sb-cb-chips" role="list" aria-label="Terpilih"></ul>
        <input id="cb-4" type="text" role="combobox" aria-expanded="false" aria-controls="cb-4-list" aria-autocomplete="list" placeholder="Cari nama atau email" value="" autocomplete="off">
      </div>
      <svg class="sb-cb-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </div>
    <div class="sb-dd-menu sb-cb-panel" hidden>
      <div role="listbox" id="cb-4-list" aria-multiselectable="true" aria-label="Reviewer"></div>
      <p class="sb-cb-status" role="status" hidden></p>
    </div>
  </div>
</div>
```

#### Add new values

When nothing matches exactly, the last option offers to add what was typed. The new value is picked and joins the list.

```html
<div class="sb-field">
  <label class="sb-field-label" for="cb-5">Label klaim</label>
  <div class="sb-cb" data-multiple data-creatable>
    <div class="sb-cb-field">
      <svg aria-hidden="true"><!-- hash --></svg>
      <div class="sb-cb-values">
        <ul class="sb-cb-chips" role="list" aria-label="Terpilih"><li class="sb-cb-chip" data-value="Prioritas"><span class="sb-badge" data-size="md" data-icon="x-close">Prioritas<button class="sb-badge-x" type="button" aria-label="Hapus Prioritas"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li></ul>
        <input id="cb-5" type="text" role="combobox" aria-expanded="false" aria-controls="cb-5-list" aria-autocomplete="list" placeholder="Cari atau tambah label" value="" autocomplete="off">
      </div>
      <svg class="sb-cb-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </div>
    <div class="sb-dd-menu sb-cb-panel" hidden>
      <div role="listbox" id="cb-5-list" aria-multiselectable="true" aria-label="Label klaim"><div class="sb-dd-opt" role="option" id="cb-5-o0" data-value="Prioritas" aria-selected="true"><span class="sb-dd-main"><span class="sb-dd-label">Prioritas</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-5-o1" data-value="Butuh dokumen" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-label">Butuh dokumen</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-5-o2" data-value="Rujukan" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-label">Rujukan</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-5-o3" data-value="Kecelakaan" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-label">Kecelakaan</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-5-o4" data-value="Rawat inap" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-label">Rawat inap</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-5-o5" data-value="Kronis" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-label">Kronis</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt sb-cb-create" role="option" id="cb-5-new" hidden><span class="sb-dd-main"><svg aria-hidden="true"><!-- plus --></svg><span class="sb-dd-label">Tambah “”</span></span></div></div>
      <p class="sb-cb-status" role="status" hidden></p>
    </div>
  </div>
</div>
```

### List states

| State | Shows |
| --- | --- |
| Loading | 16 px spinner + "Mencari…" in `gray-500`. Results already shown stay, at 50 % opacity. |
| Nothing found | "Tidak ada yang cocok" in `gray-500`; with Add new values, the "Tambah …" option instead. |
| Error | 16 px `alert-circle` + "Gagal memuat. Ketik lagi untuk mencoba." in `error-700`. |
| Hint (Async, empty field) | "Ketik nama atau email" in `gray-500`. |

### Do and don't

**Do:** People found by name or email, picked as chips.

```html
<div class="sb-field">
  <label class="sb-field-label" for="cb-9">Reviewer</label>
  <div class="cb-specimen" data-multiple>
    <div class="sb-cb-field">
      <svg aria-hidden="true"><!-- user --></svg>
      <div class="sb-cb-values">
        <ul class="sb-cb-chips" role="list" aria-label="Terpilih"><li class="sb-cb-chip" data-value="ad"><span class="sb-badge" data-size="md" data-icon="x-close">Analis D<button class="sb-badge-x" type="button" aria-label="Hapus Analis D"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li><li class="sb-cb-chip" data-value="af"><span class="sb-badge" data-size="md" data-icon="x-close">Admin F<button class="sb-badge-x" type="button" aria-label="Hapus Admin F"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li></ul>
        <input id="cb-9" type="text" role="combobox" aria-expanded="false" aria-controls="cb-9-list" aria-autocomplete="list" placeholder="Cari nama atau email" value="" autocomplete="off">
      </div>
      <svg class="sb-cb-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </div>
    <div class="sb-dd-menu sb-cb-panel" hidden>
      <div role="listbox" id="cb-9-list" aria-multiselectable="true" aria-label="Reviewer"><div class="sb-dd-opt" role="option" id="cb-9-o0" data-value="aa" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AA</span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">advisor.a@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o1" data-value="ab" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AB</span><span class="sb-dd-label">Advisor B</span><span class="sb-dd-sup">advisor.b@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o2" data-value="rc" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">RC</span><span class="sb-dd-label">Reviewer C</span><span class="sb-dd-sup">reviewer.c@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o3" data-value="ad" aria-selected="true"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AD</span><span class="sb-dd-label">Analis D</span><span class="sb-dd-sup">analis.d@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o4" data-value="ae" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AE</span><span class="sb-dd-label">Analis E</span><span class="sb-dd-sup">analis.e@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o5" data-value="af" aria-selected="true"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AF</span><span class="sb-dd-label">Admin F</span><span class="sb-dd-sup">admin.f@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o6" data-value="ag" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AG</span><span class="sb-dd-label">Admin G</span><span class="sb-dd-sup">admin.g@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o7" data-value="rh" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">RH</span><span class="sb-dd-label">Reviewer H</span><span class="sb-dd-sup">reviewer.h@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div></div>
      <p class="sb-cb-status" role="status" hidden></p>
    </div>
  </div>
</div>
```

**Don't:** "Tambah" on a list of people. A typo becomes a reviewer who does not exist.

```html
<div class="sb-field">
  <label class="sb-field-label" for="cb-10">Reviewer</label>
  <div class="cb-specimen" data-multiple data-creatable>
    <div class="sb-cb-field">
      <svg aria-hidden="true"><!-- user --></svg>
      <div class="sb-cb-values">
        <ul class="sb-cb-chips" role="list" aria-label="Terpilih"></ul>
        <input id="cb-10" type="text" role="combobox" aria-expanded="true" aria-controls="cb-10-list" aria-autocomplete="list" placeholder="Cari nama atau email" value="Budi" autocomplete="off">
      </div>
      <svg class="sb-cb-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </div>
    <div class="sb-dd-menu sb-cb-panel">
      <div role="listbox" id="cb-10-list" aria-multiselectable="true" aria-label="Reviewer"><div class="sb-dd-opt sb-cb-create" role="option" id="cb-10-new"><span class="sb-dd-main"><svg aria-hidden="true"><!-- plus --></svg><span class="sb-dd-label">Tambah “Budi”</span></span></div></div>
      <p class="sb-cb-status" role="status" hidden></p>
    </div>
  </div>
</div>
```

### Accessibility

- The input is a `role="combobox"` with `aria-expanded`, `aria-controls` and `aria-autocomplete="list"`; focus stays in it and `aria-activedescendant` points at the active option.
- The list is a `role="listbox"` (`aria-multiselectable` when picking many); picked options have `aria-selected="true"`, so the check is not the only signal.
- Each chip's × is a button named after the pick ("Hapus Analis D"). Backspace in an empty field removes the last chip.
- Loading, nothing found and errors are written in a `role="status"` line, so screen readers hear them without moving focus.

| Key | Does |
| --- | --- |
| Typing | Filters the list, or asks the server (Async) |
| ↓ / ↑ | Opens the list; moves the active option |
| Enter | Picks or un-picks the active option ("Tambah …" adds the value) |
| Backspace (empty field) | Removes the last chip |
| Esc | Closes the list |
| Tab | Closes the list and moves on |

### Code

Load `tokens.css`, `input-field.css`, `input-dropdown.css` and `badge.css`, then `combobox.css`, and add `combobox.js`. Listen for `sb-cb-change` to read the picks.

`combobox.css`

```css
/* Combobox, Codemasters Design System
   Needs tokens.css, input-field.css (label, hint), input-dropdown.css (the list and its options), badge.css (chips)
   and combobox.js.

   <div class="sb-field">
     <label class="sb-field-label" for="reviewer">Reviewer</label>
     <div class="sb-cb" data-multiple>
       <div class="sb-cb-field">
         <svg aria-hidden="true">…user…</svg>
         <div class="sb-cb-values">
           <ul class="sb-cb-chips" role="list" aria-label="Terpilih">…<li class="sb-cb-chip" data-value="ad">Badge with ×</li>…</ul>
           <input id="reviewer" type="text" role="combobox" aria-expanded="false" aria-controls="reviewer-list" aria-autocomplete="list" placeholder="Cari nama atau email" autocomplete="off">
         </div>
         <svg class="sb-cb-chevron" aria-hidden="true">…chevron-down…</svg>
       </div>
       <div class="sb-dd-menu sb-cb-panel" hidden>
         <div role="listbox" id="reviewer-list" aria-multiselectable="true" aria-label="Reviewer">….sb-dd-opt role="option"…</div>
         <p class="sb-cb-status" role="status" hidden></p>
       </div>
     </div>
   </div>

   data-multiple    pick many: chips in the field, the list stays open (omit to pick one: the label fills the field)
   data-async       results come from the page: listen for "sb-cb-search", answer with cbResults(cb, items | null)
   data-creatable   a last "Tambah …" option adds what was typed: <div class="sb-dd-opt sb-cb-create" role="option" id="…" hidden>
   Options are Input dropdown options: .sb-dd-avatar (initials), .sb-dd-label (name), .sb-dd-sup (email), .sb-dd-check. */

.sb-cb { position: relative; }

/* Field: Input field's box. It grows a line at a time as chips wrap; 9 + 24 + 9 + borders = 44 for one line. */
.sb-cb-field {
  box-sizing: border-box; display: flex; align-items: center; gap: 8px;
  min-height: 44px; padding: 9px 14px;
  background: var(--bg-primary); border: 1px solid var(--border-primary); border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  cursor: text;
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-cb-field > svg { width: 20px; height: 20px; flex: none; color: var(--text-quaternary); }
.sb-cb-field:hover:not(:focus-within) { border-color: var(--border-strong); }
.sb-cb-field:focus-within, .sb-cb:has([aria-expanded="true"]) .sb-cb-field { border-color: var(--border-brand); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring); }
.sb-cb:has(input:disabled) .sb-cb-field { opacity: .5; cursor: not-allowed; }
.sb-cb-chevron { transition: rotate 200ms var(--ease); }
.sb-cb:has([aria-expanded="true"]) .sb-cb-chevron { rotate: 180deg; }

/* Values: chips and the text input share the lines, 4 apart. */
.sb-cb-values { display: flex; flex: 1; flex-wrap: wrap; align-items: center; gap: 4px; min-width: 0; }
.sb-cb-chips { display: contents; margin: 0; padding: 0; list-style: none; }
.sb-cb-chip { display: flex; }
.sb-cb-values input {
  flex: 1; width: 0; min-width: 64px; height: 24px; margin: 0; padding: 0; border: 0; outline: 0; background: none; /* 64: room to type beside the chips before wrapping */
  font: 400 var(--text-md) var(--font); color: var(--text-primary);
}
.sb-cb-values input::placeholder { color: var(--text-quaternary); opacity: 1; }
.sb-cb-chips:not(:empty) + input::placeholder { color: transparent; } /* chips already say what is picked */

/* Panel: the Input dropdown menu, plus a status line. */
.sb-cb-panel[hidden] { display: none; }
.sb-cb-panel [role="listbox"][aria-busy="true"] { opacity: .5; } /* old results while new ones load */
.sb-cb-status { display: flex; align-items: center; gap: 8px; margin: 0; padding: 10px; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }
.sb-cb-status[hidden] { display: none; }
.sb-cb-status > svg { width: 16px; height: 16px; flex: none; }
.sb-cb-status[data-kind="error"] { color: var(--text-error); }
.sb-cb-spin { animation: sb-cb-spin 1s linear infinite; }
@keyframes sb-cb-spin { to { rotate: 360deg; } }
.sb-cb-create .sb-dd-label { color: var(--text-brand); }
.sb-cb-create .sb-dd-main > svg { color: var(--fg-brand); }

@media (prefers-reduced-motion: reduce) {
  .sb-cb-field, .sb-cb-chevron { transition: none; }
  .sb-cb-spin { animation: none; }
}
```

#### Script

`combobox.js`

```js
// Combobox: type to filter (or, with data-async, to ask the page for results), ↑ ↓ to move, Enter or a click to pick,
// Esc to close; Backspace in an empty field removes the last chip. Fires "sb-cb-change" with { values } and, with
// data-async, "sb-cb-search" with { query }: answer it with cbResults(combobox, items) or cbResults(combobox, null) on error.
const cbEsc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const cbSvg = (d, cls) => `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
const CB_PATH = {
  "check": "M20 6 9 17l-5-5",
  "x": "M18 6 6 18M6 6l12 12",
  "loader": "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
  "alert": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 8v4M12 16h.01"
};
const cbOption = (item, selected, id) =>
    `<div class="sb-dd-opt" role="option" id="${id}" data-value="${cbEsc(item.value)}" aria-selected="${selected}"><span class="sb-dd-main">${item.initials ? `<span class="sb-dd-avatar" aria-hidden="true">${cbEsc(item.initials)}</span>` : ''}<span class="sb-dd-label">${cbEsc(item.label)}</span>${item.sub ? `<span class="sb-dd-sup">${cbEsc(item.sub)}</span>` : ''}</span>${cbSvg(CB_PATH.check, 'sb-dd-check')}</div>`;
const cbChip = (value, label) =>
    `<li class="sb-cb-chip" data-value="${cbEsc(value)}"><span class="sb-badge" data-size="md" data-icon="x-close">${cbEsc(label)}<button class="sb-badge-x" type="button" aria-label="Hapus ${cbEsc(label)}">${cbSvg(CB_PATH.x)}</button></span></li>`;
const cbFind = (root, value) => [...root.querySelectorAll('[data-value]')].find(el => el.dataset.value === value);
const cbVisible = p => [...p.list.querySelectorAll('[role="option"]')].filter(o => !o.hidden);
const cbValues = p => ('multiple' in p.cb.dataset ? [...p.chips.children].map(c => c.dataset.value) : p.cb.dataset.value ? [p.cb.dataset.value] : []);
function cbParts(el) {
  const cb = el.closest('.sb-cb');
  return cb && { cb, input: cb.querySelector('input[role="combobox"]'), panel: cb.querySelector('.sb-cb-panel'), list: cb.querySelector('[role="listbox"]'), chips: cb.querySelector('.sb-cb-chips') };
}
function cbActivate(p, opt) {
  p.list.querySelectorAll('[data-active]').forEach(o => o.removeAttribute('data-active'));
  if (!opt) return p.input.removeAttribute('aria-activedescendant');
  opt.setAttribute('data-active', '');
  p.input.setAttribute('aria-activedescendant', opt.id);
  opt.scrollIntoView({ block: 'nearest' });
}
function cbOpen(p, open) {
  p.input.setAttribute('aria-expanded', String(open));
  p.panel.hidden = !open;
  if (!open) cbActivate(p, null);
}
function cbStatus(p, kind, text) {
  const s = p.panel.querySelector('.sb-cb-status');
  const msg = { loading: [CB_PATH.loader, 'Mencari…'], empty: [null, 'Tidak ada yang cocok'], error: [CB_PATH.alert, 'Gagal memuat. Ketik lagi untuk mencoba.'], hint: [null, text] }[kind];
  s.hidden = !kind;
  s.dataset.kind = kind || '';
  s.innerHTML = kind ? `${msg[0] ? cbSvg(msg[0], kind === 'loading' ? 'sb-cb-spin' : '') : ''}${cbEsc(msg[1])}` : '';
}
function cbCreateRow(p, q) {
  const row = p.list.querySelector('.sb-cb-create');
  if (!row) return false;
  const exact = [...p.list.querySelectorAll('[role="option"]:not(.sb-cb-create) .sb-dd-label')].some(l => l.textContent.toLowerCase() === q.toLowerCase());
  row.hidden = !q || exact;
  row.querySelector('.sb-dd-label').textContent = `Tambah “${q}”`;
  return !row.hidden;
}
function cbFilter(p) {
  const q = p.input.value.trim();
  p.list.querySelectorAll('[role="option"]:not(.sb-cb-create)').forEach(o => (o.hidden = !o.textContent.toLowerCase().includes(q.toLowerCase())));
  const create = cbCreateRow(p, q);
  cbStatus(p, cbVisible(p).length || create ? null : 'empty');
}
function cbResults(cb, items) {
  const p = cbParts(cb), picked = cbValues(p), create = p.list.querySelector('.sb-cb-create');
  p.list.querySelectorAll('[role="option"]:not(.sb-cb-create)').forEach(o => o.remove());
  p.list.removeAttribute('aria-busy');
  if (!items) { if (create) create.hidden = true; return cbStatus(p, 'error'); }
  (create || p.list).insertAdjacentHTML(create ? 'beforebegin' : 'beforeend', items.map((it, i) => cbOption(it, picked.includes(it.value), `${p.list.id}-r${i}`)).join(''));
  const q = p.input.value.trim(), withCreate = cbCreateRow(p, q);
  cbStatus(p, items.length || withCreate ? null : 'empty');
}
function cbChanged(p) {
  p.cb.dispatchEvent(new CustomEvent('sb-cb-change', { bubbles: true, detail: { values: cbValues(p) } }));
}
function cbRemove(p, value) {
  cbFind(p.chips, value)?.remove();
  cbFind(p.list, value)?.setAttribute('aria-selected', 'false');
  p.input.focus();
  cbChanged(p);
}
function cbPick(p, opt) {
  if (opt.matches('.sb-cb-create')) {
    const label = p.input.value.trim();
    opt.insertAdjacentHTML('beforebegin', cbOption({ value: label, label }, false, `${p.list.id}-n${p.list.children.length}`));
    opt = opt.previousElementSibling;
  }
  const value = opt.dataset.value, label = opt.querySelector('.sb-dd-label').textContent;
  if (!('multiple' in p.cb.dataset)) {
    p.list.querySelectorAll('[aria-selected="true"]').forEach(o => o.setAttribute('aria-selected', 'false'));
    opt.setAttribute('aria-selected', 'true');
    p.cb.dataset.value = value;
    p.input.value = label;
    cbOpen(p, false);
    return cbChanged(p);
  }
  const on = opt.getAttribute('aria-selected') !== 'true';
  opt.setAttribute('aria-selected', String(on));
  if (on) p.chips.insertAdjacentHTML('beforeend', cbChip(value, label));
  else cbFind(p.chips, value)?.remove();
  if (!('async' in p.cb.dataset)) { p.input.value = ''; cbFilter(p); } // async keeps the query, so the results stay
  p.input.focus();
  cbActivate(p, cbFind(p.list, value));
  cbChanged(p);
}
function cbShow(p) {
  cbOpen(p, true);
  if (!('async' in p.cb.dataset)) cbFilter(p);
  else if (!p.input.value.trim()) cbStatus(p, 'hint', 'Ketik nama atau email');
}
function cbClick(e) {
  const cb = e.target.closest?.('.sb-cb');
  document.querySelectorAll('.sb-cb').forEach(o => o !== cb && !o.querySelector('.sb-cb-panel').hidden && cbOpen(cbParts(o), false));
  if (!cb || cb.querySelector('input').disabled) return;
  const p = cbParts(cb), x = e.target.closest('.sb-badge-x'), opt = e.target.closest('[role="option"]');
  if (x) return cbRemove(p, x.closest('.sb-cb-chip').dataset.value);
  if (opt) return cbPick(p, opt);
  if (e.target.closest('.sb-cb-field')) { p.input.focus(); if (p.panel.hidden) cbShow(p); }
}
function cbInput(e) {
  const input = e.target.closest?.('.sb-cb input[role="combobox"]');
  if (!input) return;
  const p = cbParts(input), q = input.value.trim();
  cbOpen(p, true);
  if (!('async' in p.cb.dataset)) return cbFilter(p), cbActivate(p, cbVisible(p)[0]);
  clearTimeout(p.cb.cbTimer);
  if (!q) { cbResults(p.cb, []); return cbStatus(p, 'hint', 'Ketik nama atau email'); }
  p.list.setAttribute('aria-busy', 'true');
  cbStatus(p, 'loading');
  p.cb.cbTimer = setTimeout(() => p.cb.dispatchEvent(new CustomEvent('sb-cb-search', { bubbles: true, detail: { query: q } })), 250); // wait for a pause in typing
}
function cbKeydown(e) {
  const input = e.target.closest?.('.sb-cb input[role="combobox"]');
  if (!input) return;
  const p = cbParts(input), open = !p.panel.hidden, opts = cbVisible(p), i = opts.findIndex(o => o.hasAttribute('data-active'));
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (!open) return cbShow(p);
    if (opts.length) cbActivate(p, opts[(i + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length]);
  } else if (e.key === 'Enter' && open && i >= 0) {
    e.preventDefault();
    cbPick(p, opts[i]);
  } else if (e.key === 'Escape' && open) {
    e.preventDefault();
    cbOpen(p, false);
  } else if (e.key === 'Backspace' && !input.value && 'multiple' in p.cb.dataset && p.chips.lastElementChild) {
    cbRemove(p, p.chips.lastElementChild.dataset.value); // the last chip goes, as in most tag fields
  } else if (e.key === 'Tab') {
    cbOpen(p, false);
  }
}
document.addEventListener('click', cbClick);
document.addEventListener('input', cbInput);
document.addEventListener('keydown', cbKeydown);
```

## Date picker

A date field people can type into or pick from a calendar: one date (one month, picks and closes) or a range (two months, quick ranges, Batal and Terapkan). Monday first, dd/mm/yyyy.

### Usage

- Use Single for a date in a form (tanggal masuk, tanggal lahir) and Range for a period that filters a list or a report.
- People can always type. The calendar helps when the date is near today or when the weekday matters; a birth date is faster to type.
- The field shows dd/mm/yyyy, the calendar long dates, the range footer short dates (`14 Okt 2026`), as in Content rules.
- Limit the dates people can pick with `data-min` and `data-max` (no future tanggal masuk). Days outside the limits stay visible, so the calendar keeps its shape.
- Add quick ranges when most filters use the same periods. Keep the list to the six standard ones.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Field | Input field with a leading calendar button (20 px icon, 32 hit area). Opens the calendar on click or ↓. Shows dd/mm/yyyy; a range joins two dates with " – ". |
| 2 | Month header | Month and year, Text sm / Medium `gray-900`, centred. 32 × 32 chevron buttons, `gray-500`, radius 8; on a range only the outer months have them. |
| 3 | Weekdays | Sen to Min, Monday first. Text xs / Medium `gray-500`. |
| 4 | Range | Days between the ends on a `brand-50` band with `brand-700` numbers. The ends, like a single selected day, are `brand-600` with `white` numbers. |
| 5 | Day | 32 × 32, radius 4, Text sm `gray-700`. Hover `gray-50`. Days of another month and days outside min / max: `gray-400`. Today: a 4 px brand dot under the number. |
| 6 | Footer | Range only. The pick in short dates on the left; Batal (Secondary gray sm) and Terapkan (Primary sm, disabled until both ends are set) on the right. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Type | Single, Range | `data-type` on `.sb-dp` |
| Value | A date, or a start and an end | `data-value="2026-10-08"`, or `data-start` and `data-end` (ISO). The field shows dd/mm/yyyy |
| Limits | Min, Max | `data-min`, `data-max` (ISO) |
| Quick ranges | True, False | `data-presets` (Range only) |
| State | Default, Open, Error, Disabled | Open: the calendar button's `aria-expanded`. Error: `aria-invalid` on the input. Disabled: `disabled` on the input and the button |

### Types

#### Single

One month, as wide as the field. A click picks the day, fills the field and closes the calendar.

```html
<div class="sb-field">
  <label class="sb-field-label" for="dp-3">Tanggal masuk</label>
  <div class="sb-dp" data-type="single" data-value="2026-10-08" data-today="2026-10-14" data-max="2026-10-14">
    <div class="sb-input">
      <button class="sb-dp-toggle" type="button" aria-label="Pilih tanggal" aria-haspopup="dialog" aria-expanded="false" aria-controls="dp-3-cal"><svg aria-hidden="true"><!-- calendar --></svg></button>
      <input id="dp-3" type="text" inputmode="numeric" placeholder="dd/mm/yyyy" value="08/10/2026" autocomplete="off">
    </div>
    <div class="sb-dp-panel" id="dp-3-cal" role="dialog" aria-label="Pilih tanggal masuk" hidden></div>
  </div>
</div>
```

#### Range

Two months side by side. The first click sets the start, the second the end; a click before the start begins again. Terapkan writes the range into the field, Batal and Esc leave it as it was.

```html
<div class="sb-field">
  <label class="sb-field-label" for="dp-5">Periode klaim</label>
  <div class="sb-dp" data-type="range" data-start="2026-10-01" data-end="2026-10-14" data-today="2026-10-14">
    <div class="sb-input">
      <button class="sb-dp-toggle" type="button" aria-label="Pilih tanggal" aria-haspopup="dialog" aria-expanded="false" aria-controls="dp-5-cal"><svg aria-hidden="true"><!-- calendar --></svg></button>
      <input id="dp-5" type="text" inputmode="numeric" placeholder="dd/mm/yyyy – dd/mm/yyyy" value="01/10/2026 – 14/10/2026" autocomplete="off">
    </div>
    <div class="sb-dp-panel" id="dp-5-cal" role="dialog" aria-label="Pilih periode klaim" hidden></div>
  </div>
</div>
```

#### Range with quick ranges

The six standard periods on the left. The one that matches the pick is marked, so a range made by hand that equals "Bulan ini" shows it too.

```html
<div class="sb-field">
  <label class="sb-field-label" for="dp-7">Periode klaim</label>
  <div class="sb-dp" data-type="range" data-start="2026-10-01" data-end="2026-10-14" data-today="2026-10-14" data-presets>
    <div class="sb-input">
      <button class="sb-dp-toggle" type="button" aria-label="Pilih tanggal" aria-haspopup="dialog" aria-expanded="false" aria-controls="dp-7-cal"><svg aria-hidden="true"><!-- calendar --></svg></button>
      <input id="dp-7" type="text" inputmode="numeric" placeholder="dd/mm/yyyy – dd/mm/yyyy" value="01/10/2026 – 14/10/2026" autocomplete="off">
    </div>
    <div class="sb-dp-panel" id="dp-7-cal" role="dialog" aria-label="Pilih periode klaim" hidden></div>
  </div>
</div>
```

### States

#### Field

| State | Look |
| --- | --- |
| Default | Input field: `gray-300` border, placeholder dd/mm/yyyy in `gray-500`. |
| Open | The field keeps the focus look (`brand-300` border, `focus-ring`) while the calendar is open, even with focus in the calendar. |
| Error | A typed date that does not exist, is in the wrong format or is outside min / max: Input field error state, and the hint says what to write. |
| Disabled | Input field disabled; the calendar button cannot open. |

#### Day

| Day | Fill | Number |
| --- | --- | --- |
| Default | none | `gray-700` |
| Hover | `gray-50` | `gray-900` |
| Today | none, 4 px `brand-600` dot | `gray-700` |
| Selected / range end | `brand-600` (hover `brand-700`) | `white`, Medium; the today dot turns `white` |
| In range | `brand-50` band (hover `brand-100`) | `brand-700` |
| Other month, outside min / max | none | `gray-400`; outside min / max cannot be picked |
| Focused | 2 px `brand-600` outline, 1 px out | as its state |

### Do and don't

**Do:** A field people can type into, dd/mm/yyyy.

```html
<div class="sb-field">
  <label class="sb-field-label" for="dp-12">Tanggal masuk</label>
  <div class="sb-dp" data-type="single" data-value="2026-10-08" data-today="2026-10-14">
    <div class="sb-input">
      <button class="sb-dp-toggle" type="button" aria-label="Pilih tanggal" aria-haspopup="dialog" aria-expanded="false" aria-controls="dp-12-cal"><svg aria-hidden="true"><!-- calendar --></svg></button>
      <input id="dp-12" type="text" inputmode="numeric" placeholder="dd/mm/yyyy" value="08/10/2026" autocomplete="off">
    </div>
    <div class="sb-dp-panel" id="dp-12-cal" role="dialog" aria-label="Pilih tanggal masuk" hidden></div>
  </div>
</div>
```

**Don't:** A long date in the field. It cannot be typed and does not fit.

```html
<div class="sb-field">
  <label class="sb-field-label" for="dp-13">Tanggal masuk</label>
  <div class="sb-dp" data-type="single" data-value="2026-10-08" data-today="2026-10-14">
    <div class="sb-input">
      <button class="sb-dp-toggle" type="button" aria-label="Pilih tanggal" aria-haspopup="dialog" aria-expanded="false" aria-controls="dp-13-cal"><svg aria-hidden="true"><!-- calendar --></svg></button>
      <input id="dp-13" type="text" inputmode="numeric" placeholder="dd/mm/yyyy" value="Rabu, 8 Oktober 2026" autocomplete="off">
    </div>
    <div class="sb-dp-panel" id="dp-13-cal" role="dialog" aria-label="Pilih tanggal masuk" hidden></div>
  </div>
</div>
```

### Accessibility

- The field is a real text input with a `<label>`, so the date can always be typed; the calendar is a shortcut, not the only way in.
- The calendar button has `aria-haspopup="dialog"` and `aria-expanded`; the panel is a non-modal `role="dialog"` named after the field.
- Each month is a `role="grid"` labelled by its month name. Weekday headers carry the full name in `abbr`. Each day is a button whose label is the full date ("14 Oktober 2026"); today has `aria-current="date"`; selected days sit in cells with `aria-selected`.
- One day is in the tab order at a time (roving `tabindex`). Changing month announces the new month (`aria-live="polite"`).
- Days that cannot be picked have `aria-disabled` and stay focusable, so arrow keys still pass over them.

| Key | In the calendar |
| --- | --- |
| ↓ (in the field) | Opens the calendar on the selected day, or today |
| ← → ↑ ↓ | Previous / next day, same day last / next week; crosses into other months |
| Home / End | Monday / Sunday of the week |
| PageUp / PageDown | Same day last / next month (Shift: year) |
| Enter / Space | Picks the day (Single closes; Range sets the start or end) |
| Esc | Closes without changing the field; focus returns to it |

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Day `gray-700` | `white` | 10.46:1 | Passes |
| Weekday `gray-500` | `white` | 4.97:1 | Passes |
| Selected `white` | `brand-600` | 5.06:1 | Passes |
| In range `brand-700` | `brand-50` | 6.09:1 | Passes |

### Code

Load `tokens.css`, `input-field.css` and `button.css`, then `date-picker.css`, and add `date-picker.js`. The markup is only the field and an empty panel; the script draws the calendar when it opens and fires `sb-date-change` with `{ start, end }` when a date is committed.

`date-picker.css`

```css
/* Date picker, Codemasters Design System
   Needs tokens.css, input-field.css (the field) and button.css (the range footer); date-picker.js renders the calendar.

   <div class="sb-field">
     <label class="sb-field-label" for="masuk">Tanggal masuk</label>
     <div class="sb-dp" data-type="single" data-value="2026-10-08" data-max="2026-10-14">
       <div class="sb-input">
         <button class="sb-dp-toggle" type="button" aria-label="Pilih tanggal" aria-haspopup="dialog" aria-expanded="false" aria-controls="masuk-cal">…calendar…</button>
         <input id="masuk" type="text" inputmode="numeric" placeholder="dd/mm/yyyy" value="08/10/2026" autocomplete="off">
       </div>
       <div class="sb-dp-panel" id="masuk-cal" role="dialog" aria-label="Pilih tanggal masuk" hidden></div>
     </div>
   </div>

   data-type      single (one month, picks and closes) | range (two months, Batal and Terapkan)
   data-value     single: the date, ISO yyyy-mm-dd. Range: data-start and data-end
   data-min, data-max   dates outside are shown but cannot be picked
   data-presets   range only: the quick ranges on the left (Hari ini … Bulan lalu)
   The field shows dd/mm/yyyy (DESIGN.md §7); typed dates commit on change. */

.sb-dp { position: relative; }
.sb-dp input { font-variant-numeric: tabular-nums; }
/* Calendar button: the field's leading icon, a 32 hit area that does not widen the field. */
.sb-dp-toggle {
  display: inline-grid; place-items: center; flex: none; width: 32px; height: 32px; margin-inline: -6px; padding: 0;
  border: 0; border-radius: var(--radius-sm); background: none; color: var(--text-quaternary); cursor: pointer;
  transition: color 150ms var(--ease);
}
.sb-dp-toggle > svg { width: 20px; height: 20px; }
.sb-dp-toggle:is(:hover, [aria-expanded="true"]) { color: var(--text-secondary); }
.sb-dp-toggle:focus-visible { outline: 2px solid var(--brand-600); outline-offset: -2px; }
.sb-dp:has(.sb-dp-toggle[aria-expanded="true"]) .sb-input { border-color: var(--border-brand); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring); }

/* Panel: opens 8 below the field, white, radius 12, shadow-lg. Months side by side with a divider. */
.sb-dp-panel {
  position: absolute; z-index: 30; top: calc(100% + 8px); inset-inline-start: 0;
  display: flex; width: max-content; box-sizing: border-box;
  background: var(--bg-primary); border: 1px solid var(--border-tertiary); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
  font-family: var(--font);
}
.sb-dp-panel[hidden] { display: none; }
.sb-dp[data-type="single"] .sb-dp-panel { inset-inline-end: 0; width: auto; min-width: max-content; } /* as wide as the field */
.sb-dp-main { display: grid; }
.sb-dp-months { display: flex; flex: 1; }
.sb-dp-month { flex: 1; padding: 16px; } /* months fill the panel; a single month as wide as the field */
.sb-dp-month + .sb-dp-month { border-inline-start: 1px solid var(--border-secondary); }
.sb-dp-head { display: grid; grid-template-columns: 32px 1fr 32px; align-items: center; margin-bottom: 8px; }
.sb-dp-title { margin: 0; text-align: center; font: 500 var(--text-sm) var(--font); color: var(--text-primary); } /* Text sm stops at Medium in app UI */
.sb-dp-nav {
  display: inline-grid; place-items: center; width: 32px; height: 32px; margin: 0; padding: 0;
  border: 0; border-radius: var(--radius-md); background: none; color: var(--text-quaternary); cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-dp-nav > svg { width: 20px; height: 20px; }
.sb-dp-nav:hover { background: var(--bg-secondary); color: var(--text-secondary); }
.sb-dp-nav:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 0; }

/* Grid: 32 px days, rows 4 apart; columns touch, so a range reads as one band. */
.sb-dp-grid { width: 100%; border-collapse: separate; border-spacing: 0 4px; margin-block: -4px; } /* columns share a wider panel */
.sb-dp-grid th { width: 32px; height: 32px; padding: 0; font: 500 var(--text-xs) var(--font); color: var(--text-quaternary); }
.sb-dp-grid td { padding: 0; }
.sb-dp-grid td > .sb-dp-day { margin-inline: auto; }
.sb-dp-day {
  position: relative; display: grid; place-items: center; width: 32px; height: 32px; margin: 0; padding: 0;
  border: 0; border-radius: var(--radius-sm); background: none;
  font: 400 var(--text-sm) var(--font); font-variant-numeric: tabular-nums; color: var(--text-secondary); cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-dp-day:hover { background: var(--bg-secondary); color: var(--text-primary); }
.sb-dp-day:focus-visible { z-index: 1; outline: 2px solid var(--brand-600); outline-offset: 1px; }
.sb-dp-day[data-outside], .sb-dp-day[aria-disabled="true"] { color: var(--text-disabled); }
.sb-dp-day[aria-disabled="true"] { background: none; cursor: not-allowed; }
/* Today: a 4 px dot under the number. */
.sb-dp-day[aria-current="date"]::after { content: ''; position: absolute; bottom: 4px; left: 50%; translate: -50% 0; width: 4px; height: 4px; border-radius: var(--radius-full); background: var(--fg-brand); }

/* Range: brand-50 band between the ends; each end fills half its cell, so the band starts at the end's centre. */
.sb-dp-grid td[data-range="mid"] { background: var(--bg-brand-subtle); }
.sb-dp-grid td[data-range="start"] { background: linear-gradient(to right, transparent 50%, var(--bg-brand-subtle) 50%); }
.sb-dp-grid td[data-range="end"] { background: linear-gradient(to left, transparent 50%, var(--bg-brand-subtle) 50%); }
.sb-dp-grid td[data-range="mid"]:first-child { border-radius: var(--radius-sm) 0 0 var(--radius-sm); }
.sb-dp-grid td[data-range="mid"]:last-child { border-radius: 0 var(--radius-sm) var(--radius-sm) 0; }
.sb-dp-grid td[data-range="mid"] > .sb-dp-day { color: var(--text-brand); }
.sb-dp-grid td[data-range="mid"] > .sb-dp-day:hover { background: var(--bg-brand-subtle-hover); }
/* Selected day, and both ends of a range: the primary fill. */
.sb-dp-grid td[aria-selected]:not([data-range="mid"]) > .sb-dp-day { background: var(--brand-600); color: var(--white); font-weight: 500; }
.sb-dp-grid td[aria-selected]:not([data-range="mid"]) > .sb-dp-day:hover { background: var(--brand-700); }
.sb-dp-grid td[aria-selected]:not([data-range="mid"]) > .sb-dp-day::after { background: var(--white); }

/* Presets: the quick ranges, left of the months. */
.sb-dp-presets { display: grid; align-content: start; gap: 4px; width: 160px; padding: 12px; border-inline-end: 1px solid var(--border-secondary); }
.sb-dp-preset {
  height: 36px; margin: 0; padding: 0 12px; border: 0; border-radius: var(--radius-md); background: none;
  font: 500 var(--text-sm) var(--font); color: var(--text-secondary); text-align: start; cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-dp-preset:hover { background: var(--bg-secondary); }
.sb-dp-preset[aria-pressed="true"] { background: var(--bg-brand-subtle); color: var(--text-brand); } /* the matching range: brand-50 + brand-700, apart from the gray hover */
.sb-dp-preset:focus-visible { outline: 2px solid var(--brand-600); outline-offset: -2px; }

/* Footer (range): the pick on the left, Batal and Terapkan on the right, gap 12 like any button row. */
.sb-dp-foot { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px; border-top: 1px solid var(--border-secondary); }
.sb-dp-picked { font: 500 var(--text-sm) var(--font); font-variant-numeric: tabular-nums; color: var(--text-secondary); }
.sb-dp-actions { display: flex; gap: 12px; }

@media (prefers-reduced-motion: reduce) {
  .sb-dp-toggle, .sb-dp-nav, .sb-dp-day, .sb-dp-preset { transition: none; }
}
```

#### Script

`date-picker.js`

```js
// Date picker: click the field or the calendar button, or press ↓ in the field, to open. In the calendar:
// ← → ↑ ↓ move by day and week, Home / End to the week's ends, PageUp / PageDown by month (with Shift by year),
// Enter or Space picks, Esc closes. A range needs Terapkan. Every committed value fires "sb-date-change".
const dpIso = d => d.toISOString().slice(0, 10);
const dpDate = s => new Date(`${s}T00:00:00Z`);
const dpAdd = (s, days) => { const d = dpDate(s); d.setUTCDate(d.getUTCDate() + days); return dpIso(d); };
const dpFirst = s => `${s.slice(0, 8)}01`;
const dpMonthAdd = (s, n) => { const d = dpDate(dpFirst(s)); d.setUTCMonth(d.getUTCMonth() + n); return dpIso(d); };
const dpShift = (s, n) => { const first = dpMonthAdd(s, n), last = dpAdd(dpMonthAdd(first, 1), -1); return `${first.slice(0, 8)}${String(Math.min(+s.slice(8), +last.slice(8))).padStart(2, '0')}`; };
const dpFmt = (s, o) => dpDate(s).toLocaleDateString('id-ID', { timeZone: 'UTC', ...o });
const dpToday = () => { const d = new Date(); return dpIso(new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))); };
const dpText = s => s.split('-').reverse().join('/');
const dpPresets = t => [
    ['Hari ini', t, t], ['Kemarin', dpAdd(t, -1), dpAdd(t, -1)], ['7 hari terakhir', dpAdd(t, -6), t],
    ['30 hari terakhir', dpAdd(t, -29), t], ['Bulan ini', dpFirst(t), t], ['Bulan lalu', dpMonthAdd(t, -1), dpAdd(dpFirst(t), -1)],
  ];
function dpParse(v) {
  const m = v.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!m) return null;
  const s = `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`, d = dpDate(s);
  return !Number.isNaN(+d) && dpIso(d) === s ? s : null; // rejects 31/02
}
function dpMonth(first, st, i, n) {
  const WEEK = [['Sen', 'Senin'], ['Sel', 'Selasa'], ['Rab', 'Rabu'], ['Kam', 'Kamis'], ['Jum', 'Jumat'], ['Sab', 'Sabtu'], ['Min', 'Minggu']];
  const chev = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  const nav = step => `<button class="sb-dp-nav" type="button" data-step="${step}" aria-label="${step < 0 ? 'Bulan sebelumnya' : 'Bulan berikutnya'}">${chev(step < 0 ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6')}</button>`;
  const lead = (dpDate(first).getUTCDay() + 6) % 7, days = +dpAdd(dpMonthAdd(first, 1), -1).slice(8), end = st.end || st.start;
  let rows = '';
  for (let w = 0; w < Math.ceil((lead + days) / 7); w++) {
    rows += '<tr>';
    for (let c = 0; c < 7; c++) {
      const day = dpAdd(first, w * 7 + c - lead), inMonth = day.slice(0, 7) === first.slice(0, 7);
      if (!inMonth && st.range) { rows += '<td></td>'; continue; } // two months side by side: no repeated days
      const on = st.start && day >= st.start && day <= end;
      const band = st.range && on ? ` data-range="${[day === st.start && 'start', day === end && 'end'].filter(Boolean).join(' ') || 'mid'}"` : '';
      const off = (st.min && day < st.min) || (st.max && day > st.max);
      rows += `<td${on ? ' aria-selected="true"' : ''}${band}><button class="sb-dp-day" type="button" tabindex="${day === st.focus ? 0 : -1}" data-date="${day}" aria-label="${dpFmt(day, { day: 'numeric', month: 'long', year: 'numeric' })}"${day === st.today ? ' aria-current="date"' : ''}${inMonth ? '' : ' data-outside'}${off ? ' aria-disabled="true"' : ''}>${+day.slice(8)}</button></td>`;
    }
    rows += '</tr>';
  }
  return `<div class="sb-dp-month"><div class="sb-dp-head">${i === 0 ? nav(-1) : '<span></span>'}<p class="sb-dp-title" id="${st.id}-m${i}">${dpFmt(first, { month: 'long', year: 'numeric' })}</p>${i === n - 1 ? nav(1) : '<span></span>'}</div><table class="sb-dp-grid" role="grid" aria-labelledby="${st.id}-m${i}"><thead><tr>${WEEK.map(([s, l]) => `<th scope="col" abbr="${l}">${s}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>`;
}
function dpPanel(st) {
  const views = st.range ? [st.view, dpMonthAdd(st.view, 1)] : [st.view];
  const months = `<div class="sb-dp-months" aria-live="polite">${views.map((m, i) => dpMonth(m, st, i, views.length)).join('')}</div>`;
  if (!st.range) return months;
  const short = { day: 'numeric', month: 'short', year: 'numeric' };
  const presets = st.presets ? `<div class="sb-dp-presets" role="group" aria-label="Rentang cepat">${dpPresets(st.today).map(([l, a, b]) => `<button class="sb-dp-preset" type="button" data-start="${a}" data-end="${b}" aria-pressed="${a === st.start && b === st.end}">${l}</button>`).join('')}</div>` : '';
  const picked = st.start ? `${dpFmt(st.start, short)} – ${st.end ? dpFmt(st.end, short) : '…'}` : 'Pilih tanggal awal';
  return `${presets}<div class="sb-dp-main">${months}<div class="sb-dp-foot"><span class="sb-dp-picked">${picked}</span><div class="sb-dp-actions"><button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm" data-dp="cancel">Batal</button><button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm" data-dp="apply"${st.start && st.end ? '' : ' disabled'}>Terapkan</button></div></div></div>`;
}
function dpState(dp) {
  const s = dp.dataset;
  return { id: dp.querySelector('.sb-dp-panel').id, range: s.type === 'range', start: s.pickStart, end: s.pickEnd, view: s.view, focus: s.focus, min: s.min, max: s.max, today: s.today || dpToday(), presets: 'presets' in s };
}
function dpDraw(dp, focus) {
  const panel = dp.querySelector('.sb-dp-panel');
  panel.innerHTML = dpPanel(dpState(dp));
  if (focus) panel.querySelector(focus === true ? `[data-date="${dp.dataset.focus}"]` : focus)?.focus();
}
function dpOpen(dp, focusGrid) {
  const s = dp.dataset, range = s.type === 'range';
  s.pickStart = (range ? s.start : s.value) || '';
  s.pickEnd = (range ? s.end : s.value) || '';
  s.focus = s.pickStart || s.today || dpToday();
  s.view = dpFirst(s.focus);
  dp.querySelector('.sb-dp-panel').hidden = false;
  dp.querySelector('.sb-dp-toggle').setAttribute('aria-expanded', 'true');
  dpDraw(dp, focusGrid);
}
function dpClose(dp, focusInput) {
  dp.querySelector('.sb-dp-panel').hidden = true;
  dp.querySelector('.sb-dp-toggle').setAttribute('aria-expanded', 'false');
  if (focusInput) dp.querySelector('input').focus();
}
function dpCommit(dp, start, end) {
  const s = dp.dataset, input = dp.querySelector('input');
  if (s.type === 'range') Object.assign(s, { start, end });
  else s.value = start;
  input.value = s.type === 'range' ? `${dpText(start)} – ${dpText(end)}` : dpText(start);
  input.removeAttribute('aria-invalid');
  dp.dispatchEvent(new CustomEvent('sb-date-change', { bubbles: true, detail: { start, end } }));
}
function dpClick(e) {
  const dp = e.target.closest?.('.sb-dp');
  document.querySelectorAll('.sb-dp').forEach(o => o !== dp && !o.querySelector('.sb-dp-panel').hidden && dpClose(o));
  const t = dp && e.target.closest('button, input');
  if (!t || t.disabled) return;
  const s = dp.dataset, open = !dp.querySelector('.sb-dp-panel').hidden;
  if (t.matches('.sb-dp-toggle')) return open ? dpClose(dp, true) : dpOpen(dp, true);
  if (t.matches('input')) return open || dpOpen(dp, false); // typing stays possible; ↓ moves into the calendar
  if (t.matches('.sb-dp-nav')) {
    s.view = dpMonthAdd(s.view, +t.dataset.step);
    s.focus = s.view;
    return dpDraw(dp, `.sb-dp-nav[data-step="${t.dataset.step}"]`);
  }
  if (t.matches('.sb-dp-day')) {
    if (t.getAttribute('aria-disabled') === 'true') return;
    const day = (s.focus = t.dataset.date);
    if (s.type !== 'range') { dpCommit(dp, day, day); return dpClose(dp, true); }
    if (!s.pickStart || s.pickEnd || day < s.pickStart) Object.assign(s, { pickStart: day, pickEnd: '' });
    else s.pickEnd = day;
    return dpDraw(dp, true);
  }
  if (t.matches('.sb-dp-preset')) {
    Object.assign(s, { pickStart: t.dataset.start, pickEnd: t.dataset.end, focus: t.dataset.start, view: dpFirst(t.dataset.start) });
    return dpDraw(dp, `.sb-dp-preset[data-start="${t.dataset.start}"][data-end="${t.dataset.end}"]`);
  }
  if (t.dataset.dp === 'apply') { dpCommit(dp, s.pickStart, s.pickEnd); return dpClose(dp, true); }
  if (t.dataset.dp === 'cancel') dpClose(dp, true);
}
function dpKeydown(e) {
  const dp = e.target.closest?.('.sb-dp');
  if (!dp) return;
  const s = dp.dataset, open = !dp.querySelector('.sb-dp-panel').hidden;
  if (e.key === 'Escape' && open) { e.preventDefault(); return dpClose(dp, true); }
  if (e.key === 'ArrowDown' && e.target.matches('input')) { e.preventDefault(); return dpOpen(dp, true); }
  const day = e.target.closest('.sb-dp-day')?.dataset.date;
  if (!day) return;
  const col = (dpDate(day).getUTCDay() + 6) % 7, year = e.shiftKey ? 12 : 1;
  const to = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7, Home: -col, End: 6 - col }[e.key];
  const next = to !== undefined ? dpAdd(day, to) : e.key === 'PageUp' ? dpShift(day, -year) : e.key === 'PageDown' ? dpShift(day, year) : null;
  if (!next) return;
  e.preventDefault();
  const shown = s.type === 'range' ? 2 : 1;
  if (next < s.view) s.view = dpFirst(next);
  else if (next >= dpMonthAdd(s.view, shown)) s.view = dpMonthAdd(next, 1 - shown);
  s.focus = next;
  dpDraw(dp, true);
}
function dpChange(e) {
  const input = e.target.closest?.('.sb-dp input');
  if (!input) return;
  const dp = input.closest('.sb-dp'), s = dp.dataset, v = input.value.trim();
  if (!v) { delete s.value; delete s.start; delete s.end; return input.removeAttribute('aria-invalid'); }
  const [a = '', b = a] = s.type === 'range' ? v.split(/\s*[–-]\s*/) : [v];
  const start = dpParse(a), end = dpParse(b);
  const ok = start && end && start <= end && !(s.min && start < s.min) && !(s.max && end > s.max);
  if (ok) dpCommit(dp, start, end);
  else input.setAttribute('aria-invalid', 'true');
}
document.addEventListener('click', dpClick);
document.addEventListener('keydown', dpKeydown);
document.addEventListener('change', dpChange);
```

## Dropdown menu

An action menu opened from a button, a row-actions icon or the account avatar. For choosing a value in a form, use Input dropdown.

### Usage

- **Dropdown menu runs an action; Input dropdown chooses a value.** Never mix both in one list.
- Group related actions with dividers. Put the exit or destructive action (Hapus, Keluar) last, after a divider.
- All items in one menu share the same Icon, Checkbox and Shortcut setting, so labels line up. Icon and Checkbox never together.
- `Checkbox` is for multi-select filters inside a menu, such as "Tampilkan kolom"; the menu stays open while the user toggles.
- Menus may be wider than 240 for long labels. Never truncate an action label.
- Show a shortcut only when the shortcut really works.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Header | Optional. Heading: 44 high, title Text sm / Semibold `gray-700`. Avatar group: 64 high, 40 px avatar with a 10 px `success-500` online dot, name Text sm / Semibold `gray-700`, email Text sm / Regular `gray-500`, gap 12. Padding `12 16`. |
| 2 | Divider | 1 px `gray-100` between the header and each group. |
| 3 | Item | 40 high, padding `10 12`, radius 8, inset 4 from the panel edge, gap 12, Text sm / Medium `gray-700`. Hover and focus `gray-50`. |
| 4 | Icon or checkbox | 16 px icon `gray-700`, or a 16 px checkbox (radius 4). Never both. |
| 5 | Shortcut | Optional, right-aligned, Text xs / Regular `gray-500`. |

The panel is 240 wide, `white`, 1 px `gray-100` border, radius 12 (like every popover panel), `shadow-lg`, and clips its content. It opens 8 below its trigger, right-aligned.

### Properties

| Component | Property | Values | Code |
| --- | --- | --- | --- |
| Dropdown | Type | Button, Icon, Avatar | `.sb-btn` + chevron, `.sb-menu-icon`, `.sb-menu-avatar` |
| Dropdown | Open | True, False | `aria-expanded` on the trigger, `hidden` on the menu |
| Dropdown menu | Header | False, Heading, Avatar group | `.sb-menu-header` + divider |
| Dropdown menu | Icon / Checkbox / Shortcut | True, False | 16 px `<svg>`; `role="menuitemcheckbox"` + `.sb-menu-box`; `.sb-menu-kbd` |
| List item | State | Default, Hover, Focus, Disabled | `:hover`, `:focus`, `aria-disabled="true"` |

### Triggers

#### Button

Secondary gray `md` with the label and a 20 px chevron-down. Open: chevron up and a `0 0 0 4px` `gray-100` ring.

```html
<div class="sb-menu-wrap">
  <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" aria-haspopup="menu" aria-expanded="false" aria-controls="tr-button">Aksi klaim<svg class="sb-btn-chevron" aria-hidden="true"><!-- chevron-down --></svg></button>
  <div class="sb-menu" id="tr-button" role="menu" aria-label="Aksi klaim" hidden>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- eye --></svg><span class="sb-menu-label">Lihat detail</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- download --></svg><span class="sb-menu-label">Unduh PDF</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- user-plus --></svg><span class="sb-menu-label">Tugaskan ulang</span></button>
    </div>
    <div class="sb-menu-sep" role="separator"></div>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- trash --></svg><span class="sb-menu-label">Hapus klaim</span></button>
    </div>
  </div>
</div>
```

#### Icon

20 px `more-vertical` for row actions ("⋯"), with a hit area of at least 32 × 32.

```html
<div class="sb-menu-wrap">
  <button class="sb-menu-icon" type="button" aria-label="Aksi baris" aria-haspopup="menu" aria-expanded="false" aria-controls="tr-icon"><svg aria-hidden="true"><!-- more-vertical --></svg></button>
  <div class="sb-menu" id="tr-icon" role="menu" aria-label="Aksi baris" hidden>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- eye --></svg><span class="sb-menu-label">Lihat detail</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- download --></svg><span class="sb-menu-label">Unduh PDF</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- user-plus --></svg><span class="sb-menu-label">Tugaskan ulang</span></button>
    </div>
    <div class="sb-menu-sep" role="separator"></div>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- trash --></svg><span class="sb-menu-label">Hapus klaim</span></button>
    </div>
  </div>
</div>
```

#### Avatar

40 px avatar for the account menu in the sidebar or header. Open: 4 px `focus-ring` ring.

```html
<div class="sb-menu-wrap">
  <button class="sb-menu-avatar" type="button" aria-label="Menu akun" aria-haspopup="menu" aria-expanded="false" aria-controls="tr-avatar">NP</button>
  <div class="sb-menu" id="tr-avatar" role="menu" aria-label="Menu akun" hidden>
    <div class="sb-menu-header" role="presentation"><span class="sb-menu-person" aria-hidden="true">NP</span><span><span class="sb-menu-name">Nama Pengguna</span><span class="sb-menu-email">email@perusahaan.com</span></span></div>
    <div class="sb-menu-sep" role="separator"></div>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- user --></svg><span class="sb-menu-label">Lihat profil</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- settings --></svg><span class="sb-menu-label">Pengaturan</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- user-plus --></svg><span class="sb-menu-label">Undang anggota</span></button>
    </div>
    <div class="sb-menu-sep" role="separator"></div>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- log-out --></svg><span class="sb-menu-label">Keluar</span></button>
    </div>
  </div>
</div>
```

### Items and states

| Part | Default | Hover / Focus | Disabled |
| --- | --- | --- | --- |
| Row (40 high, padding `10 12`, radius 8, gap 12) | no fill | `gray-50` | no fill, whole row at 50 % opacity |
| Label, Text sm / Medium | `gray-700` | `gray-700` | Default at 50 % opacity |
| Icon 16 px | `gray-700` | `gray-700` | Default at 50 % opacity |
| Checkbox 16 px, radius 4 | `white`, `gray-300` border | `brand-50` fill, `brand-600` border | Default at 50 % opacity |
| Shortcut (right-aligned) | Text xs / Regular `gray-500` | `gray-500` | Default at 50 % opacity |

#### Headers

### Checkbox menu

For multi-select filters inside a menu. Toggling an item keeps the menu open; Esc or a click outside closes it.

```html
<div class="sb-menu-wrap">
  <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" aria-haspopup="menu" aria-expanded="false" aria-controls="cb-menu">Tampilkan kolom<svg class="sb-btn-chevron" aria-hidden="true"><!-- chevron-down --></svg></button>
  <div class="sb-menu" id="cb-menu" role="menu" aria-label="Tampilkan kolom" hidden>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="true" aria-disabled="true"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">No. klaim</span></button>
      <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="true"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Peserta</span></button>
      <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="true"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Status</span></button>
      <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Nilai klaim</span></button>
      <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Tanggal masuk</span></button>
    </div>
  </div>
</div>
```

### Do and don't

**Do:** The destructive action is last, after a divider.

```html
<div class="sb-menu menu-specimen" role="menu" aria-label="Aksi baris" inert>
  <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- eye --></svg><span class="sb-menu-label">Lihat detail</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- download --></svg><span class="sb-menu-label">Unduh PDF</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- user-plus --></svg><span class="sb-menu-label">Tugaskan ulang</span></button>
    </div>
  <div class="sb-menu-sep" role="separator"></div>
  <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- trash --></svg><span class="sb-menu-label">Hapus klaim</span></button>
    </div>
</div>
```

**Don't:** Hapus klaim first, right where the pointer lands.

```html
<div class="sb-menu menu-specimen" role="menu" aria-label="Aksi baris" inert>
  <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- trash --></svg><span class="sb-menu-label">Hapus klaim</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- eye --></svg><span class="sb-menu-label">Lihat detail</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- download --></svg><span class="sb-menu-label">Unduh PDF</span></button>
    </div>
</div>
```

### Accessibility

- The trigger has `aria-haspopup="menu"`, `aria-expanded` and `aria-controls`; icon and avatar triggers also need an `aria-label`.
- The panel is `role="menu"`; items are `menuitem` or `menuitemcheckbox` with `aria-checked`. The header is `role="presentation"`, dividers `role="separator"`.
- Keyboard: Enter, Space or ↓ opens on the first item (↑ on the last); ↑ ↓ Home End move; Enter or Space picks; Esc closes and returns focus to the trigger; Tab closes.
- Disabled items keep `aria-disabled="true"` so they are announced but skipped.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Item label `gray-700` | `white` / `gray-50` | 10.46:1 / 10.01:1 | Passes |
| Shortcut, email `gray-500` | `white` | 4.97:1 | Passes |
| Checkbox border `gray-300` | `white` | 1.47:1 | **Fails** 3:1 for controls |

### Code

Load `tokens.css`, `dropdown-menu.css` (and `button.css` for the Button trigger), then `dropdown-menu.js`. Listen for `sb-menu-select` to run the action.

`dropdown-menu.css`

```css
/* Dropdown menu, Codemasters Design System
   Needs tokens.css and dropdown-menu.js;
   the Button trigger also needs button.css.

   <div class="sb-menu-wrap">
     <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md"
             aria-haspopup="menu" aria-expanded="false" aria-controls="aksi">Aksi <svg class="sb-btn-chevron" aria-hidden="true">…chevron-down…</svg></button>
     <div class="sb-menu" id="aksi" role="menu" aria-label="Aksi" hidden>
       <div class="sb-menu-group" role="group">
         <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1">
           <svg aria-hidden="true">…</svg><span class="sb-menu-label">Unduh PDF</span>
         </button>
       </div>
       <div class="sb-menu-sep" role="separator"></div>
       <div class="sb-menu-group" role="group">…last group: the exit or destructive action…</div>
     </div>
   </div>

   Triggers: .sb-btn (Button), .sb-menu-icon (Icon, more-vertical), .sb-menu-avatar (Avatar).
   Checkbox items: role="menuitemcheckbox" aria-checked + <span class="sb-menu-box">. Never with an icon.
   Shortcut: <span class="sb-menu-kbd">. Disabled item: aria-disabled="true". */

.sb-menu-wrap { position: relative; display: inline-flex; }

/* Triggers */
.sb-menu-wrap > .sb-btn[aria-expanded="true"] { box-shadow: var(--shadow-xs), 0 0 0 4px var(--bg-tertiary); } /* open: chevron up + gray-100 ring */
.sb-menu-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; margin: 0; padding: 0; border: 0; border-radius: var(--radius-md); /* hit area at least 32 x 32; radius 8 like every icon button of 32+ */
  background: none; color: var(--text-quaternary); cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-menu-icon > svg { width: 20px; height: 20px; }
.sb-menu-icon:hover, .sb-menu-icon[aria-expanded="true"] { background: var(--bg-secondary); color: var(--text-secondary); }
.sb-menu-icon:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-menu-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; margin: 0; padding: 0; border: 0; border-radius: var(--radius-full);
  background: var(--bg-brand-subtle); font: 500 var(--text-md) var(--font); color: var(--fg-brand); cursor: pointer;
  transition: box-shadow 150ms var(--ease);
}
.sb-menu-avatar:hover { box-shadow: 0 0 0 4px var(--bg-tertiary); }
.sb-menu-avatar:focus-visible, .sb-menu-avatar[aria-expanded="true"] { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }

/* Panel: 240 wide (wider for long labels, never truncated), opens 8 below, right-aligned. */
.sb-menu {
  position: absolute; z-index: 30; top: calc(100% + 8px); inset-inline-end: 0;
  box-sizing: border-box; min-width: 240px; overflow: hidden;
  background: var(--bg-primary); border: 1px solid var(--border-tertiary); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
}
.sb-menu[hidden] { display: none; }
.sb-menu-group { padding: 4px; } /* items sit inset, as rounded rows; dividers stay full width */
.sb-menu-sep { height: 1px; background: var(--bg-tertiary); }

/* Header */
.sb-menu-header { display: flex; align-items: center; gap: 12px; padding: 12px 16px; }
.sb-menu-header-title { font: 600 var(--text-sm) var(--font); color: var(--text-secondary); }
.sb-menu-person { position: relative; display: inline-flex; align-items: center; justify-content: center; flex: none; width: 40px; height: 40px; border-radius: var(--radius-full); background: var(--bg-brand-subtle); font: 500 var(--text-md) var(--font); color: var(--fg-brand); }
.sb-menu-person::after { content: ''; position: absolute; right: -1px; bottom: -1px; width: 10px; height: 10px; border: 1.5px solid var(--bg-primary); border-radius: var(--radius-full); background: var(--success-500); }
.sb-menu-name { display: block; font: 600 var(--text-sm) var(--font); color: var(--text-secondary); }
.sb-menu-email { display: block; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }

/* Item: 40 high, padding 10 12 (text still 16 from the edge), gap 12, radius 8 (12 panel - 4 padding) */
.sb-menu-item {
  box-sizing: border-box; display: flex; align-items: center; gap: 12px;
  width: 100%; height: 40px; margin: 0; padding: 0 12px; border: 0; border-radius: var(--radius-md);
  background: none; font: 500 var(--text-sm) var(--font); color: var(--text-secondary); text-align: start; white-space: nowrap;
  cursor: pointer;
}
.sb-menu-item > svg { width: 16px; height: 16px; flex: none; }
.sb-menu-item:hover, .sb-menu-item:focus { outline: none; background: var(--bg-secondary); }
.sb-menu-item:focus-visible { box-shadow: inset 0 0 0 2px var(--brand-600); }
.sb-menu-label { flex: 1; }
.sb-menu-kbd { margin-inline-start: 16px; font: 400 var(--text-xs) var(--font); color: var(--text-quaternary); }
.sb-menu-item[aria-disabled="true"] { background: none; opacity: .5; cursor: not-allowed; } /* the default look at 50 % opacity */

/* Checkbox (16 px, radius 4) */
.sb-menu-box {
  box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 16px; height: 16px; border: 1px solid var(--border-primary); border-radius: var(--radius-sm); background: var(--bg-primary); color: var(--fg-brand);
}
.sb-menu-box > svg { width: 12px; height: 12px; visibility: hidden; }
.sb-menu-item:hover .sb-menu-box, .sb-menu-item:focus .sb-menu-box, .sb-menu-item[aria-checked="true"] .sb-menu-box { background: var(--bg-brand-subtle); border-color: var(--brand-600); }
.sb-menu-item[aria-checked="true"] .sb-menu-box > svg { visibility: visible; }

@media (prefers-reduced-motion: reduce) {
  .sb-menu-icon, .sb-menu-avatar { transition: none; }
}
```

#### Script

`dropdown-menu.js`

```js
// Dropdown menu behaviour (WAI-ARIA menu button): click, Enter, Space or ↓ opens and focuses the first item,
// ↑ opens on the last; ↑ ↓ Home End move; Enter / Space picks; Esc closes back to the trigger; Tab closes.
// Checkbox items toggle and keep the menu open. Every pick fires "sb-menu-select" with the item label.
function menuParts(el) {
  const wrap = el.closest('.sb-menu-wrap');
  return wrap && { wrap, trigger: wrap.querySelector('[aria-haspopup="menu"]'), menu: wrap.querySelector('[role="menu"]') };
}
function menuItems(menu) {
  return [...menu.querySelectorAll('[role^="menuitem"]')].filter(i => i.getAttribute('aria-disabled') !== 'true');
}
function menuSetOpen(p, open, focus) {
  p.trigger.setAttribute('aria-expanded', String(open));
  p.menu.hidden = !open;
  if (open && focus) {
    const items = menuItems(p.menu);
    (focus === 'last' ? items[items.length - 1] : items[0])?.focus();
  }
}
function menuClick(e) {
  const item = e.target.closest?.('[role^="menuitem"]');
  const trigger = e.target.closest?.('.sb-menu-wrap [aria-haspopup="menu"]');
  document.querySelectorAll('.sb-menu-wrap [aria-haspopup="menu"][aria-expanded="true"]').forEach(t => {
    if (t !== trigger && !t.closest('.sb-menu-wrap').contains(e.target)) menuSetOpen(menuParts(t), false);
  });
  if (item) {
    if (item.getAttribute('aria-disabled') === 'true') return;
    const p = menuParts(item);
    if (item.getAttribute('role') === 'menuitemcheckbox') {
      item.setAttribute('aria-checked', String(item.getAttribute('aria-checked') !== 'true')); // menu stays open
    } else {
      menuSetOpen(p, false);
      p.trigger.focus();
    }
    item.dispatchEvent(new CustomEvent('sb-menu-select', { bubbles: true, detail: item.querySelector('.sb-menu-label').textContent }));
  } else if (trigger) {
    const p = menuParts(trigger);
    menuSetOpen(p, p.menu.hidden, e.detail === 0 ? 'first' : null); // keyboard "click" (Enter/Space) moves focus in
  }
}
function menuKeydown(e) {
  const trigger = e.target.closest?.('.sb-menu-wrap [aria-haspopup="menu"]');
  if (trigger && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
    e.preventDefault();
    return menuSetOpen(menuParts(trigger), true, e.key === 'ArrowUp' ? 'last' : 'first');
  }
  const item = e.target.closest?.('[role^="menuitem"]');
  if (!item) return;
  const p = menuParts(item);
  const items = menuItems(p.menu);
  const i = items.indexOf(item);
  const go = n => { e.preventDefault(); items[(n + items.length) % items.length].focus(); };
  if (e.key === 'ArrowDown') go(i + 1);
  else if (e.key === 'ArrowUp') go(i - 1);
  else if (e.key === 'Home') go(0);
  else if (e.key === 'End') go(items.length - 1);
  else if (e.key === 'Escape') { e.preventDefault(); menuSetOpen(p, false); p.trigger.focus(); }
  else if (e.key === 'Tab') menuSetOpen(p, false);
}
document.addEventListener('click', menuClick);
document.addEventListener('keydown', menuKeydown);
```

## Header bar

The top of every app page: the page title, or a breadcrumb on detail pages, on the left and the page actions on the right. Sticky, white, 80 high. Optional search and notifications.

### Usage

- Every app page starts with one header bar. It sits at the top of the page column, right of the Sidebar, and stays there while the page scrolls.
- The title is the page's one `<h1>`: the page name on list pages ("Klaim"), the record ID on detail pages ("KLM-0241").
- Detail pages add a back button and a breadcrumb. Show the parent level; fold the levels above it into "…", which opens a menu of them.
- Actions act on the whole page. One primary action at most, always last (rightmost). Secondary actions go before it; rarely used and destructive ones go into the ⋮ menu.
- Search in the header searches the whole app. A search that filters one table belongs above that table.
- The notification button shows a dot while something is unread, and says how many in its label.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Bar | Sticky, `white`, 80 high, padding `0 32`, 1 px `gray-200` bottom border. Parts 24 apart, centred vertically. |
| 2 | Back button | Button secondary gray sm, icon only (`arrow-left`). Goes to the parent level. 16 to the breadcrumb. |
| 3 | Breadcrumb | Display xs / Medium `gray-500`, hover `gray-700`; "/" in `gray-300`, 12 apart. Levels above the parent fold into "…" (opens a Dropdown menu). |
| 4 | Title | Display xs / Semibold `gray-900`, one line; a long title truncates with an ellipsis. A record ID never truncates: the breadcrumb shrinks first. |
| 5 | Status | Optional Badge md in the status colour, 12 after the title. |
| 6 | Notifications | Button secondary gray lg, icon only (`bell`). Unread: an 8 px `error-500` dot with a 2 px `white` ring. |
| 7 | Actions | Buttons lg, gap 8, primary last. Extra actions in a ⋮ Dropdown menu. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Type | List page, Detail page | List: `<h1 class="sb-header-heading">` alone. Detail: back button, `<nav aria-label="Breadcrumb">` with `ol.sb-crumbs`, then the `h1` |
| Status | True, False | A Badge md after the `h1` |
| Search | True, False | `<div class="sb-header-search" role="search">` with an Input field, between the title and the actions |
| Notifications | True, False | `.sb-header-bell` button; `.sb-header-dot` inside while something is unread |
| Actions | 0 to 3 buttons + ⋮ menu | `.sb-header-actions` with Buttons lg |

### Types

#### List page

The page name and the page actions.

#### Detail page

Back button, breadcrumb, the record ID as the title and its status. The "…" opens the levels above the parent.

#### With search

An Input field with a search icon, 320 wide. It shrinks to 200 when space runs out; after that the title truncates.

#### With notifications

The bell sits first in the actions. The dot shows only while something is unread.

### In the app

The header bar and the Sidebar head are both 80 high, so their bottom lines meet. Scroll the page: the header bar stays at the top.

### Do and don't

**Do:** One primary action, last.

```html
<header class="sb-header">
  <div class="sb-header-title">
    <h1 class="sb-header-heading">Klaim</h1>
  </div>
  <div class="sb-header-actions">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="lg"><svg aria-hidden="true"><!-- download --></svg>Unduh</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-size="lg"><svg aria-hidden="true"><!-- plus --></svg>Buat klaim</button>
  </div>
</header>
```

**Don't:** Two primary actions. Neither stands out.

```html
<header class="sb-header">
  <div class="sb-header-title">
    <h1 class="sb-header-heading">Klaim</h1>
  </div>
  <div class="sb-header-actions">
    <button class="sb-btn" type="button" data-hierarchy="primary" data-size="lg"><svg aria-hidden="true"><!-- download --></svg>Unduh</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-size="lg"><svg aria-hidden="true"><!-- plus --></svg>Buat klaim</button>
  </div>
</header>
```

**Do:** Secondary actions before the primary one.

```html
<header class="sb-header">
  <div class="sb-header-title">
    <h1 class="sb-header-heading">Klaim</h1>
  </div>
  <div class="sb-header-actions">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="lg"><svg aria-hidden="true"><!-- download --></svg>Unduh</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-size="lg"><svg aria-hidden="true"><!-- plus --></svg>Buat klaim</button>
  </div>
</header>
```

**Don't:** The primary action first. People look for it at the end.

```html
<header class="sb-header">
  <div class="sb-header-title">
    <h1 class="sb-header-heading">Klaim</h1>
  </div>
  <div class="sb-header-actions">
    <button class="sb-btn" type="button" data-hierarchy="primary" data-size="lg"><svg aria-hidden="true"><!-- plus --></svg>Buat klaim</button>
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="lg"><svg aria-hidden="true"><!-- download --></svg>Unduh</button>
  </div>
</header>
```

### Accessibility

- The title is the page's only `<h1>`, so screen reader users can jump to it.
- The breadcrumb is a `<nav aria-label="Breadcrumb">` with an ordered list. The "/" separators come from CSS with empty alt text (`content: '/' / ''`), so they are not read.
- The back button is a link with a label that names where it goes ("Kembali ke Rawat inap").
- The "…" and ⋮ buttons are WAI-ARIA menu buttons (see Dropdown menu) with labels ("Level lain", "Aksi lain").
- Search sits in a `role="search"` landmark; the input has an `aria-label` because the placeholder is not a label.
- The notification button says the count in its label ("Notifikasi, 3 baru"); the dot is decoration.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Title `gray-900` | `white` | 17.75:1 | Passes |
| Breadcrumb `gray-500` | `white` | 4.97:1 | Passes |
| Breadcrumb hover `gray-700` | `white` / `gray-50` | 10.46:1 / 10.01:1 | Passes |

### Code

Load `tokens.css`, `button.css`, `badge.css`, `input-field.css` and `dropdown-menu.css`, then `header-bar.css`. Add `dropdown-menu.js` for the "…" and ⋮ menus.

`header-bar.css`

```css
/* Header bar, Codemasters Design System
   Needs tokens.css, button.css and badge.css; input-field.css for search;
   dropdown-menu.css and dropdown-menu.js for the "…" breadcrumb and action menus. No script of its own.

   <header class="sb-header">
     <div class="sb-header-title">
       <a class="sb-btn" href="/klaim/rawat-inap" data-hierarchy="secondary-gray" data-size="sm" data-icon="only" aria-label="Kembali ke Rawat inap">…arrow-left…</a>
       <nav aria-label="Breadcrumb">
         <ol class="sb-crumbs">
           <li><div class="sb-menu-wrap"><button class="sb-crumb-more" type="button" aria-label="Level lain" aria-haspopup="menu" aria-expanded="false" aria-controls="crumbs-more">…</button>
             <div class="sb-menu" id="crumbs-more" role="menu" aria-label="Level lain" hidden>…<a class="sb-menu-item" role="menuitem" href="/klaim">…</a></div></div></li>
           <li><a class="sb-crumb" href="/klaim/rawat-inap">Rawat inap</a></li>
         </ol>
       </nav>
       <h1 class="sb-header-heading">KLM-0241</h1>
       <span class="sb-badge" data-size="md" data-color="blue">Sedang Ditinjau</span>
     </div>
     <div class="sb-header-search" role="search">…Input field with a search icon…</div>
     <div class="sb-header-actions">…buttons lg, primary last…</div>
   </header>

   List page    the title alone: <h1 class="sb-header-heading">Klaim</h1>
   Detail page  back button + breadcrumb (… for middle levels) + ID as the title + status badge
   Search       .sb-header-search between the title and the actions, 320 wide, shrinks to 200
   Bell         <button class="sb-btn sb-header-bell" … data-icon="only" aria-label="Notifikasi, 3 baru">…bell…<span class="sb-header-dot"></span></button> */

/* Bar: sticky at the top of the page column, 80 high (the sidebar head's height), padding 0 32 (the page padding). */
.sb-header {
  position: sticky; top: 0; z-index: 10;
  box-sizing: border-box; display: flex; align-items: center; gap: 24px;
  height: 80px; padding: 0 32px;
  background: var(--bg-primary); border-bottom: 1px solid var(--border-secondary);
  font-family: var(--font);
}

/* Title: Display xs / Semibold gray-900, one line; a long title truncates.
   On detail pages the ID never truncates: the breadcrumb levels shrink first. */
.sb-header-title { display: flex; flex: 1; align-items: center; gap: 12px; min-width: 0; }
.sb-header-title > :not(.sb-header-heading, nav) { flex: none; }
.sb-header-title > nav { min-width: 0; }
.sb-header-title > nav + .sb-header-heading { flex: none; }
.sb-header-heading { min-width: 0; margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font: 600 var(--display-xs) var(--font); color: var(--text-primary); }
.sb-header-title > .sb-btn { margin-inline-end: 4px; } /* back button: 16 to the breadcrumb */

/* Breadcrumb: the levels above the page in Display xs / Medium gray-500, "/" in gray-300 between them. */
.sb-crumbs { display: flex; align-items: center; gap: 12px; margin: 0; padding: 0; list-style: none; font: 500 var(--display-xs) var(--font); color: var(--text-quaternary); white-space: nowrap; }
.sb-crumbs > li { display: flex; align-items: center; min-width: 0; }
.sb-crumbs > li:has(.sb-menu-wrap) { flex: none; }
.sb-crumbs > li::after { content: '/' / ''; margin-inline-start: 12px; color: var(--border-primary); }
.sb-crumb { overflow: hidden; text-overflow: ellipsis; border-radius: var(--radius-sm); color: inherit; text-decoration: none; transition: color 150ms var(--ease); }
.sb-crumb:hover { color: var(--text-secondary); }
.sb-crumb:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-crumb-more {
  height: 32px; margin: 0; padding: 0 6px; border: 0; border-radius: var(--radius-md);
  background: none; font: inherit; color: inherit; cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-crumb-more:is(:hover, [aria-expanded="true"]) { background: var(--bg-secondary); color: var(--text-secondary); }
.sb-crumb-more:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-crumbs .sb-menu { inset-inline: 0 auto; } /* opens under the "…", left-aligned */
.sb-crumbs a.sb-menu-item { text-decoration: none; }

/* Search: an Input field, 320 wide, shrinking to 200 before the title truncates further. */
.sb-header-search { flex: 0 1 320px; min-width: 200px; margin: 0; }

/* Actions: Buttons lg, gap 8, the primary action last. */
.sb-header-actions { display: flex; flex: none; align-items: center; gap: 8px; }
.sb-header-bell { position: relative; }
.sb-header-dot { position: absolute; top: 10px; right: 11px; width: 8px; height: 8px; border-radius: var(--radius-full); background: var(--error-500); box-shadow: 0 0 0 2px var(--bg-primary); }

@media (prefers-reduced-motion: reduce) {
  .sb-crumb, .sb-crumb-more { transition: none; }
}
```

## Input dropdown

A select field: pick one value for a form field or a filter. For running an action from a button, use Dropdown menu.

### Usage

- **Input dropdown chooses a value; Dropdown menu runs an action.** Never mix both in one list.
- About 7 options are visible before the list scrolls. Above about 10 options, use the Search type.
- For 2–5 options that fit on screen, Radio buttons show every choice at once.
- The open list is as wide as the field and opens 8 below it, with the chosen option checked.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Label | Text sm / Medium `gray-700`, 6 above the field. 44 high without a label, 70 with one. |
| 2 | Field | Same box as Input field: 44 high, padding `10 14`, gap 8, `white`, 1 px `gray-300` border, radius 8, `shadow-xs`. Open/focused: `brand-300` border + 4 px `focus-ring` ring. |
| 3 | Leading element | Optional: 20 px icon `gray-500`, 24 px avatar, 10 px `success-500` dot, or 20 px search icon (Search type). |
| 4 | Value + supporting text | Text md / Regular. Placeholder `gray-500`, value `gray-900`, supporting text after it in `gray-500`. |
| 5 | Chevron | 20 px `gray-500`; turns up when open. The Search type has none. |
| 6 | Menu | Width of the field, max height 320, `white`, 1 px `gray-100` border, radius 12, `shadow-lg`, padding 4 so the options sit inset, 8 below the field. |
| 7 | Check | 20 px `brand-600` at the end of the chosen option. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Type | Default, Icon leading, Avatar leading, Dot leading, Search | leading `<svg>`, `.sb-dd-avatar` or `.sb-dd-dot` before the label; Search uses `<div class="sb-dd-trigger" data-type="search">` with an `<input role="combobox">` |
| State | Placeholder, Default (value chosen), Open/focused | `.sb-dd-placeholder`, a chosen value, `aria-expanded="true"`. Static mockups only: `data-state="open"` |
| Supporting text | True, False | `<span class="sb-dd-sup">` after the label |
| Label | True, False | label element referenced by `aria-labelledby`; without it, `aria-label` |
| Item: State | Default, Hover, Focus, Disabled | `:hover`, `data-active` (keyboard), `aria-disabled="true"` |
| Item: Check | True, False | `aria-selected="true"` shows the check |

### Types

#### Default

```html
<div class="sb-field">
  <span class="sb-field-label" id="ty-default-label">Jenis klaim</span>
  <div class="sb-dd">
    <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="ty-default-list" aria-labelledby="ty-default-label ty-default-value">
      <span class="sb-dd-value" id="ty-default-value"><span class="sb-dd-label">Inpatient</span><span class="sb-dd-sup">Rawat inap</span></span>
      <svg class="sb-dd-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </button>
    <div class="sb-dd-menu" id="ty-default-list" role="listbox" aria-labelledby="ty-default-label" hidden>
      <div class="sb-dd-opt" id="ty-default-0" role="option" aria-selected="true">
        <span class="sb-dd-main"><span class="sb-dd-label">Inpatient</span><span class="sb-dd-sup">Rawat inap</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-default-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Outpatient</span><span class="sb-dd-sup">Rawat jalan</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-default-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Maternity</span><span class="sb-dd-sup">Persalinan</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-default-3" role="option" aria-selected="false" aria-disabled="true">
        <span class="sb-dd-main"><span class="sb-dd-label">Optical</span><span class="sb-dd-sup">Kacamata</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-default-4" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Dental</span><span class="sb-dd-sup">Gigi</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
    </div>
  </div>
</div>
```

#### Icon leading

```html
<div class="sb-field">
  <span class="sb-field-label" id="ty-icon-label">Peran</span>
  <div class="sb-dd">
    <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="ty-icon-list" aria-labelledby="ty-icon-label ty-icon-value">
      <span class="sb-dd-value" id="ty-icon-value"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Admin</span></span>
      <svg class="sb-dd-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </button>
    <div class="sb-dd-menu" id="ty-icon-list" role="listbox" aria-labelledby="ty-icon-label" hidden>
      <div class="sb-dd-opt" id="ty-icon-0" role="option" aria-selected="true">
        <span class="sb-dd-main"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Admin</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-icon-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Advisor</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-icon-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Reviewer</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-icon-3" role="option" aria-selected="false">
        <span class="sb-dd-main"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Viewer</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
    </div>
  </div>
</div>
```

#### Avatar leading

```html
<div class="sb-field">
  <span class="sb-field-label" id="ty-avatar-label">Ditugaskan ke</span>
  <div class="sb-dd">
    <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="ty-avatar-list" aria-labelledby="ty-avatar-label ty-avatar-value">
      <span class="sb-dd-value" id="ty-avatar-value"><span class="sb-dd-avatar" aria-hidden="true">AA</span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">@advisor-a</span></span>
      <svg class="sb-dd-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </button>
    <div class="sb-dd-menu" id="ty-avatar-list" role="listbox" aria-labelledby="ty-avatar-label" hidden>
      <div class="sb-dd-opt" id="ty-avatar-0" role="option" aria-selected="true">
        <span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AA</span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">@advisor-a</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-avatar-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AB</span><span class="sb-dd-label">Advisor B</span><span class="sb-dd-sup">@advisor-b</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-avatar-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AC</span><span class="sb-dd-label">Advisor C</span><span class="sb-dd-sup">@advisor-c</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-avatar-3" role="option" aria-selected="false" aria-disabled="true">
        <span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AD</span><span class="sb-dd-label">Advisor D</span><span class="sb-dd-sup">@advisor-d</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
    </div>
  </div>
</div>
```

#### Dot leading

```html
<div class="sb-field">
  <span class="sb-field-label" id="ty-dot-label">Advisor online</span>
  <div class="sb-dd">
    <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="ty-dot-list" aria-labelledby="ty-dot-label ty-dot-value">
      <span class="sb-dd-value" id="ty-dot-value"><span class="sb-dd-dot" aria-hidden="true"></span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">@advisor-a</span></span>
      <svg class="sb-dd-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </button>
    <div class="sb-dd-menu" id="ty-dot-list" role="listbox" aria-labelledby="ty-dot-label" hidden>
      <div class="sb-dd-opt" id="ty-dot-0" role="option" aria-selected="true">
        <span class="sb-dd-main"><span class="sb-dd-dot" aria-hidden="true"></span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">@advisor-a</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-dot-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-dot" aria-hidden="true"></span><span class="sb-dd-label">Advisor B</span><span class="sb-dd-sup">@advisor-b</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-dot-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-dot" aria-hidden="true"></span><span class="sb-dd-label">Advisor C</span><span class="sb-dd-sup">@advisor-c</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
    </div>
  </div>
</div>
```

#### Search

```html
<div class="sb-field">
  <span class="sb-field-label" id="ty-search-label">Kota</span>
  <div class="sb-dd">
    <div class="sb-dd-trigger" data-type="search">
      <svg aria-hidden="true"><!-- search --></svg>
      <input type="text" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="ty-search-list" placeholder="Cari kota" autocomplete="off" aria-labelledby="ty-search-label">
    </div>
    <div class="sb-dd-menu" id="ty-search-list" role="listbox" aria-labelledby="ty-search-label" hidden>
      <div class="sb-dd-opt" id="ty-search-0" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Jakarta</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Bandung</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Surabaya</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-3" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Medan</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-4" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Semarang</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-5" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Makassar</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-6" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Palembang</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-7" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Denpasar</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-8" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Yogyakarta</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-9" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Malang</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-10" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Balikpapan</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-11" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Pontianak</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <p class="sb-dd-empty" hidden>Tidak ada kota yang cocok.</p>
    </div>
  </div>
</div>
```

### States

#### Menu items

| Part | Default | Hover / Focus | Disabled |
| --- | --- | --- | --- |
| Row (44 high, padding `10 10`, radius 8, gap 8) | no fill | `gray-50` | no fill, whole row at 50 % opacity |
| Label, Text md / Medium | `gray-900` | `gray-900` | Default at 50 % opacity |
| Supporting text, Text md / Regular | `gray-500` | `gray-500` | Default at 50 % opacity |
| Leading icon 20 px | `gray-500` | `gray-700` | Default at 50 % opacity |
| Check (selected) | 20 px `brand-600`, row fill `gray-50` | same | Default at 50 % opacity, fill `gray-50` |

Keyboard focus (arrow keys) looks like Hover. The scroll bar (16 wide, 8 px `gray-200` thumb, no track) shows only when the list scrolls.

### Do and don't

**Do:** 12 cities: the Search type lets the user type instead of scroll.

```html
<div class="sb-field">
  <span class="sb-field-label" id="dd-dd-search-label">Kota</span>
  <div class="sb-dd">
    <div class="sb-dd-trigger" data-type="search">
      <svg aria-hidden="true"><!-- search --></svg>
      <input type="text" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="dd-dd-search-list" placeholder="Cari kota" autocomplete="off" aria-labelledby="dd-dd-search-label" value="Yogyakarta">
    </div>
    <div class="sb-dd-menu" id="dd-dd-search-list" role="listbox" aria-labelledby="dd-dd-search-label" hidden>
      <div class="sb-dd-opt" id="dd-dd-search-0" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Jakarta</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Bandung</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Surabaya</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-3" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Medan</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-4" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Semarang</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-5" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Makassar</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-6" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Palembang</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-7" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Denpasar</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-8" role="option" aria-selected="true">
        <span class="sb-dd-main"><span class="sb-dd-label">Yogyakarta</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-9" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Malang</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-10" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Balikpapan</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-11" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Pontianak</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <p class="sb-dd-empty" hidden>Tidak ada kota yang cocok.</p>
    </div>
  </div>
</div>
```

**Don't:** Actions in a select field. Use a Dropdown menu for actions.

```html
<div class="sb-field">
  <span class="sb-field-label" id="dd-dd-actions-label">Aksi</span>
  <div class="sb-dd">
    <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="dd-dd-actions-list" aria-labelledby="dd-dd-actions-label dd-dd-actions-value">
      <span class="sb-dd-value" id="dd-dd-actions-value"><span class="sb-dd-placeholder">Pilih aksi</span></span>
      <svg class="sb-dd-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </button>
    <div class="sb-dd-menu" id="dd-dd-actions-list" role="listbox" aria-labelledby="dd-dd-actions-label" hidden>
      <div class="sb-dd-opt" id="dd-dd-actions-0" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Unduh PDF</span><span class="sb-dd-sup">Rawat inap</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-actions-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Hapus klaim</span><span class="sb-dd-sup">Rawat jalan</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-actions-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Maternity</span><span class="sb-dd-sup">Persalinan</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-actions-3" role="option" aria-selected="false" aria-disabled="true">
        <span class="sb-dd-main"><span class="sb-dd-label">Optical</span><span class="sb-dd-sup">Kacamata</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-actions-4" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Dental</span><span class="sb-dd-sup">Gigi</span></span>
        <svg class="sb-dd-check" aria-hidden="true"><!-- check --></svg>
      </div>
    </div>
  </div>
</div>
```

### Accessibility

- The field is a `combobox` (`aria-haspopup="listbox"`, `aria-expanded`, `aria-controls`); the list is a `listbox` of `option`s with `aria-selected`.
- Focus stays on the field. The highlighted option is announced through `aria-activedescendant`, so screen readers follow the arrow keys.
- Keyboard: Enter, Space or ↓ opens; ↑ ↓ Home End move; Enter selects; Esc closes and keeps focus on the field; Tab closes and moves on.
- Disabled options keep `aria-disabled="true"`, so they are read but skipped by the arrow keys.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Value, option label `gray-900` | `white` / `gray-50` | 17.75:1 / 16.98:1 | Passes |
| Placeholder, supporting text `gray-500` | `white` / `gray-50` | 4.97:1 / 4.76:1 | Passes |
| Check `brand-600` | `gray-50` | 4.84:1 | Passes (icons need 3:1) |

### Code

Load `tokens.css`, `input-dropdown.css` and `input-dropdown.js`. The script follows the WAI-ARIA select-only combobox pattern; the Search type uses the editable combobox pattern.

`input-dropdown.css`

```css
/* Input dropdown, Codemasters Design System
   Needs tokens.css and input-dropdown.js. Label and hint rules match input-field.css.

   <div class="sb-field">
     <span class="sb-field-label" id="jenis-label">Jenis klaim</span>
     <div class="sb-dd">
       <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false"
               aria-controls="jenis-list" aria-labelledby="jenis-label jenis-value">
         <span class="sb-dd-value" id="jenis-value"><span class="sb-dd-placeholder">Pilih jenis klaim</span></span>
         <svg class="sb-dd-chevron" aria-hidden="true">…chevron-down…</svg>
       </button>
       <div class="sb-dd-menu" id="jenis-list" role="listbox" aria-labelledby="jenis-label" hidden>
         <div class="sb-dd-opt" id="jenis-1" role="option" aria-selected="false">
           <span class="sb-dd-main"><span class="sb-dd-label">Inpatient</span><span class="sb-dd-sup">Rawat inap</span></span>
           <svg class="sb-dd-check" aria-hidden="true">…check…</svg>
         </div>
       </div>
     </div>
   </div>

   Leading element (Type): <svg> icon, <span class="sb-dd-avatar">, or <span class="sb-dd-dot"> before .sb-dd-label.
   Search type: <div class="sb-dd-trigger" data-type="search"> holding <svg> + <input role="combobox">, no chevron.
   Disabled option: aria-disabled="true". Disabled field: disabled on the button.
   data-state="open" on .sb-dd-trigger forces Open/focused in static mockups and docs only. */

.sb-field { display: grid; gap: 6px; } /* label, control, hint 6 apart */
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--text-secondary); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }

.sb-dd { position: relative; }

/* Field: same box as Input field */
.sb-dd-trigger {
  box-sizing: border-box; display: flex; align-items: center; gap: 8px;
  width: 100%; height: 44px; margin: 0; padding: 0 14px;
  font: 400 var(--text-md) var(--font); color: var(--text-primary); text-align: start;
  background: var(--bg-primary); border: 1px solid var(--border-primary); border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  cursor: pointer;
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-dd-trigger:hover:not(:disabled, [aria-expanded="true"], :focus-within) { border-color: var(--border-strong); }
.sb-dd-trigger:focus-visible, .sb-dd-trigger[aria-expanded="true"], .sb-dd-trigger:has([aria-expanded="true"], input:focus), .sb-dd-trigger[data-state="open"] {
  outline: none; border-color: var(--border-brand); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring);
}
.sb-dd-trigger:disabled { opacity: .5; cursor: not-allowed; } /* the default look at 50 % opacity */
.sb-dd-value, .sb-dd-main { display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0; }
.sb-dd-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sb-dd-sup { flex: none; color: var(--text-quaternary); font-weight: 400; }
.sb-dd-placeholder { color: var(--text-quaternary); }
.sb-dd-trigger > svg, .sb-dd-value > svg, .sb-dd-main > svg { width: 20px; height: 20px; flex: none; color: var(--text-quaternary); }
.sb-dd-chevron { transition: rotate 200ms var(--ease); }
.sb-dd-trigger[aria-expanded="true"] .sb-dd-chevron, .sb-dd-trigger[data-state="open"] .sb-dd-chevron { rotate: 180deg; }
.sb-dd-trigger[data-type="search"] { cursor: text; }
.sb-dd-trigger input { flex: 1; min-width: 0; height: 100%; margin: 0; padding: 0; border: 0; outline: 0; background: none; font: inherit; color: inherit; }
.sb-dd-trigger input::placeholder { color: var(--text-quaternary); opacity: 1; }

/* Leading elements */
.sb-dd-avatar {
  display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 24px; height: 24px; border-radius: var(--radius-full);
  background: var(--bg-brand-subtle); font: 500 var(--text-xs) var(--font); color: var(--fg-brand);
}
.sb-dd-dot { width: 10px; height: 10px; flex: none; border-radius: var(--radius-full); background: var(--success-500); }

/* Menu: width of the field, max height 320 (about 7 options), opens 8 below. */
.sb-dd-menu {
  position: absolute; z-index: 30; top: calc(100% + 8px); inset-inline: 0;
  box-sizing: border-box; max-height: 320px; overflow-y: auto; padding: 4px; /* options sit inset, as rounded rows */
  background: var(--bg-primary); border: 1px solid var(--border-tertiary); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
  scrollbar-width: thin; scrollbar-color: var(--border-secondary) transparent;
}
.sb-dd-menu[hidden] { display: none; }
/* _Scroll bar: 16 wide with padding 4, thumb 8 wide gray-200 radius 8, no track. Shows only when the list scrolls. */
.sb-dd-menu::-webkit-scrollbar { width: 16px; }
.sb-dd-menu::-webkit-scrollbar-thumb { background: var(--bg-quaternary); border: 4px solid transparent; border-radius: var(--radius-md); background-clip: padding-box; }

/* Option row: 44 high, padding 10 10 (text still 14 from the edge), gap 8, radius 8 (12 panel - 4 padding) */
.sb-dd-opt {
  display: flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 10px; border-radius: var(--radius-md);
  font: 500 var(--text-md) var(--font); color: var(--text-primary); cursor: pointer;
}
.sb-dd-opt:hover, .sb-dd-opt[data-active], .sb-dd-opt[aria-selected="true"] { background: var(--bg-secondary); }
.sb-dd-opt:hover .sb-dd-main > svg, .sb-dd-opt[data-active] .sb-dd-main > svg { color: var(--text-secondary); }
.sb-dd-check { width: 20px; height: 20px; flex: none; color: var(--fg-brand); visibility: hidden; }
.sb-dd-opt[aria-selected="true"] .sb-dd-check { visibility: visible; }
.sb-dd-opt[aria-disabled="true"] { background: none; opacity: .5; cursor: not-allowed; }
.sb-dd-opt[aria-disabled="true"][aria-selected="true"] { background: var(--bg-secondary); }
.sb-dd-empty { margin: 0; padding: 12px 14px; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }
.sb-dd-empty[hidden] { display: none; }

@media (prefers-reduced-motion: reduce) {
  .sb-dd-trigger, .sb-dd-chevron { transition: none; }
}
```

#### Script

`input-dropdown.js`

```js
// Input dropdown behaviour: click or Enter / Space / ↓ opens, ↑ ↓ Home End move, Enter selects,
// Esc closes, Tab closes. The Search type filters as you type. Focus stays on the field (aria-activedescendant).
// A pick fires "sb-dd-change" on .sb-dd with { value, label } (value = the option's data-value, else its label).
function ddParts(el) {
  const dd = el.closest('.sb-dd');
  return dd && { dd, trigger: dd.querySelector('[role="combobox"]'), list: dd.querySelector('[role="listbox"]') };
}
function ddOptions(list) {
  return [...list.querySelectorAll('[role="option"]')].filter(o => !o.hidden && o.getAttribute('aria-disabled') !== 'true');
}
function ddActivate(p, opt) {
  p.list.querySelectorAll('[data-active]').forEach(o => o.removeAttribute('data-active'));
  if (!opt) return p.trigger.removeAttribute('aria-activedescendant');
  opt.setAttribute('data-active', '');
  p.trigger.setAttribute('aria-activedescendant', opt.id);
  opt.scrollIntoView({ block: 'nearest' });
}
function ddSetOpen(p, open) {
  p.trigger.setAttribute('aria-expanded', String(open));
  p.list.hidden = !open;
  const opts = ddOptions(p.list);
  ddActivate(p, open ? opts.find(o => o.getAttribute('aria-selected') === 'true') || opts[0] : null);
}
function ddChoose(p, opt) {
  if (!opt || opt.getAttribute('aria-disabled') === 'true') return;
  p.list.querySelectorAll('[role="option"]').forEach(o => o.setAttribute('aria-selected', String(o === opt)));
  if (p.trigger.tagName === 'INPUT') p.trigger.value = opt.querySelector('.sb-dd-label').textContent;
  else p.dd.querySelector('.sb-dd-value').innerHTML = opt.querySelector('.sb-dd-main').innerHTML;
  ddSetOpen(p, false);
  p.trigger.focus();
  const label = opt.querySelector('.sb-dd-label').textContent;
  p.dd.dispatchEvent(new CustomEvent('sb-dd-change', { bubbles: true, detail: { value: opt.dataset.value ?? label, label } }));
}
function ddClick(e) {
  const opt = e.target.closest?.('.sb-dd [role="option"]');
  if (opt) return ddChoose(ddParts(opt), opt);
  const trigger = e.target.closest?.('.sb-dd [role="combobox"]');
  document.querySelectorAll('.sb-dd [aria-expanded="true"]').forEach(t => t !== trigger && ddSetOpen(ddParts(t), false));
  if (!trigger || trigger.disabled) return;
  const p = ddParts(trigger);
  ddSetOpen(p, trigger.tagName === 'INPUT' ? true : p.list.hidden);
}
function ddKeydown(e) {
  const trigger = e.target.closest?.('.sb-dd [role="combobox"]');
  if (!trigger) return;
  const p = ddParts(trigger);
  const open = !p.list.hidden;
  const opts = ddOptions(p.list);
  const i = opts.findIndex(o => o.hasAttribute('data-active'));
  const isButton = trigger.tagName !== 'INPUT';
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (!open) return ddSetOpen(p, true);
    ddActivate(p, opts[(i + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length]);
  } else if (open && (e.key === 'Home' || e.key === 'End')) {
    e.preventDefault();
    ddActivate(p, opts[e.key === 'Home' ? 0 : opts.length - 1]);
  } else if (e.key === 'Enter' || (isButton && e.key === ' ')) {
    e.preventDefault();
    open ? ddChoose(p, opts[i]) : ddSetOpen(p, true);
  } else if (e.key === 'Escape' && open) {
    e.preventDefault();
    e.stopPropagation();
    ddSetOpen(p, false);
  } else if (e.key === 'Tab' && open) {
    ddSetOpen(p, false);
  }
}
function ddFilter(e) {
  const input = e.target.closest?.('.sb-dd input[role="combobox"]');
  if (!input) return;
  const p = ddParts(input);
  const q = input.value.trim().toLowerCase();
  p.list.querySelectorAll('[role="option"]').forEach(o => (o.hidden = !o.querySelector('.sb-dd-label').textContent.toLowerCase().includes(q)));
  const empty = p.list.querySelector('.sb-dd-empty');
  if (empty) empty.hidden = ddOptions(p.list).length > 0;
  p.trigger.setAttribute('aria-expanded', 'true');
  p.list.hidden = false;
  ddActivate(p, ddOptions(p.list)[0]);
}
document.addEventListener('click', ddClick);
document.addEventListener('keydown', ddKeydown);
document.addEventListener('input', ddFilter);
```

## Input field

A single-line text field with a label above, an optional hint below, and an error state that says what is wrong and how to fix it.

### Usage

- **Always show a label above the field.** The placeholder is an example, never the label: it disappears as soon as the user types.
- **Hint text explains format or purpose.** In error it is replaced by the message, which says what is wrong and how to fix it ("Nomor polis harus 10 digit").
- **Show the error on blur or submit,** not while the user is still typing.
- **Money fields** use Trailing dropdown (or a plain `Rp` prefix) and keep the full-number format: `Rp 1.725.283.300`.
- For more than one line of text use Textarea input field.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Label | Text sm / Medium, `gray-700`. 6 above the field. |
| 2 | Field | 44 high, padding `10 14`, `white`, 1 px `gray-300` border, radius 8, `shadow-xs`, gap 8 between items. |
| 3 | Leading icon | Optional. 20 px, `gray-500`. |
| 4 | Value / placeholder | Text md / Regular. Placeholder `gray-500`, value `gray-900`. |
| 5 | Help icon | Optional. 16 px `help-circle`, `gray-400`, at the end. Opens a Dark tooltip on hover and focus. |
| 6 | Hint text | Optional. Text sm / Regular, `gray-500`, 6 below the field. In error it becomes the error message in `error-500`. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Type | Default, Leading dropdown, Trailing dropdown, Leading text, Payment input | `data-type` on `.sb-input` (omit for Default) |
| Leading icon | True, False | 20 px `<svg>` before the input |
| Label | True, False | `<label class="sb-field-label" for>`; without it, `aria-label` on the input |
| Hint text | True, False | `<p class="sb-field-hint" id>` + `aria-describedby` |
| Help icon | True, False | `<button class="sb-input-help">` + `<span role="tooltip">` |
| Destructive | True, False | `aria-invalid="true"` on the input |
| State | Placeholder, Filled, Focused, Disabled | empty, `value`, `:focus`, `disabled`. Static mockups only: `data-state="focus"` |

### Types

#### Default

Optional leading icon + text. Most fields: nama, email, nomor polis.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ty-default">Nomor polis</label>
  <div class="sb-input">
    <svg aria-hidden="true"><!-- file-text --></svg>
    <input id="ty-default" type="text" placeholder="10 digit nomor polis" aria-describedby="ty-default-hint">
  </div>
  <p class="sb-field-hint" id="ty-default-hint">Ada di kartu peserta, 10 digit.</p>
</div>
```

#### Leading dropdown

A dropdown (`gray-900` value + 20 px chevron, padding `10 12 10 14`) before the text. Phone number with country code.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ty-phone">Nomor telepon</label>
  <div class="sb-input" data-type="leading-dropdown">
    <select class="sb-input-select" aria-label="Kode negara"><option>ID +62</option><option>MY +60</option><option>SG +65</option></select>
    <input id="ty-phone" type="text" placeholder="812 0000 0000" inputmode="tel" aria-describedby="ty-phone-hint">
  </div>
  <p class="sb-field-hint" id="ty-phone-hint">Kami kirim kode verifikasi ke nomor ini.</p>
</div>
```

#### Trailing dropdown

Prefix text (`Rp`) + value, dropdown after it (padding `10 14`). Amount with currency.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ty-amount">Nilai klaim</label>
  <div class="sb-input" data-type="trailing-dropdown">
    <span class="sb-input-prefix" aria-hidden="true">Rp</span>
    <input id="ty-amount" type="text" placeholder="0" inputmode="numeric" value="1.725.283.300" aria-describedby="ty-amount-hint">
    <select class="sb-input-select" aria-label="Mata uang"><option>IDR</option><option>USD</option><option>MYR</option></select>
  </div>
  <p class="sb-field-hint" id="ty-amount-hint">Tulis angka penuh, tanpa singkatan.</p>
</div>
```

#### Leading text

A gray add-on (`gray-500`, padding `10 12 10 14`) joined to the input by a divider. Fixed prefix such as `https://`.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ty-url">Situs web</label>
  <div class="sb-input" data-type="leading-text">
    <span class="sb-input-addon" aria-hidden="true">https://</span>
    <input id="ty-url" type="text" placeholder="www.contoh.co.id" aria-describedby="ty-url-hint">
  </div>
  <p class="sb-field-hint" id="ty-url-hint">Alamat situs perusahaan asuransi.</p>
</div>
```

#### Payment input

34 × 24 card logo (`white`, `gray-100` border, radius 4), left padding 10. Card number.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ty-card">Nomor kartu</label>
  <div class="sb-input" data-type="payment">
    <span class="sb-input-card" aria-hidden="true"><svg aria-hidden="true"><!-- mastercard-logo --></svg></span>
    <input id="ty-card" type="text" placeholder="0000 0000 0000 0000" inputmode="numeric" aria-describedby="ty-card-hint">
  </div>
  <p class="sb-field-hint" id="ty-card-hint">Kartu debit atau kredit.</p>
</div>
```

### States

| State | Fill | Border | Text | Extra |
| --- | --- | --- | --- | --- |
| Placeholder | `white` | `gray-300` | `gray-500` | Hover: border `gray-400` |
| Filled | `white` | `gray-300` | `gray-900` | — |
| Focused | `white` | `brand-300` | `gray-900` | ring `0 0 0 4px` `focus-ring` + `shadow-xs` |
| Disabled | Default at 50 % opacity | Default at 50 % opacity | Default at 50 % opacity | not editable, `cursor: not-allowed` |
| Destructive | `white` | `error-300` | as above | help icon becomes 16 px `alert-circle` in `error-500`; hint becomes the error message in `error-500` |
| Destructive + Focused | `white` | `error-300` | `gray-900` | ring `0 0 0 4px` `error-100` |

Destructive has no Disabled variant: a disabled field cannot be in error.

### Hint and error messages

- The hint says what to enter: format, length, where to find it.
- The error replaces the hint in the same place, so the layout does not jump. It names the problem and the fix: "Nomor polis harus 10 digit", not "Input tidak valid".
- Connect both to the input with `aria-describedby`; set `aria-invalid="true"` while the error shows.
- Show the error on blur or submit. Clear it as soon as the value is valid.

```html
<div class="sb-field">
  <label class="sb-field-label" for="err-polis">Nomor polis</label>
  <div class="sb-input">
    <input id="err-polis" type="text" placeholder="10 digit nomor polis" value="01234" aria-describedby="err-polis-hint err-polis-tip" aria-invalid="true">
    <button class="sb-input-help" type="button" aria-label="Info" aria-describedby="err-polis-tip"><svg aria-hidden="true"><!-- alert-circle --></svg></button>
    <span class="sb-input-tip" role="tooltip" id="err-polis-tip">Lihat bagian depan kartu peserta.</span>
  </div>
  <p class="sb-field-hint" id="err-polis-hint">Nomor polis harus 10 digit.</p>
</div>
```

### Do and don't

**Do:** A visible label above the field.

```html
<div class="sb-field">
  <label class="sb-field-label" for="dd-label">Nomor polis</label>
  <div class="sb-input">
    <input id="dd-label" type="text" placeholder="10 digit nomor polis">
  </div>
</div>
```

**Don't:** The placeholder as the label. It vanishes while typing.

```html
<div class="sb-field">
  <div class="sb-input">
    <input id="dd-nolabel" type="text" placeholder="Nomor polis" aria-label="Nomor polis">
  </div>
</div>
```

**Do:** The error names the problem and the fix.

```html
<div class="sb-field">
  <label class="sb-field-label" for="dd-err">Nomor polis</label>
  <div class="sb-input">
    <input id="dd-err" type="text" placeholder="10 digit nomor polis" value="01234" aria-describedby="dd-err-hint" aria-invalid="true">
  </div>
  <p class="sb-field-hint" id="dd-err-hint">Nomor polis harus 10 digit.</p>
</div>
```

**Don't:** A vague error. The user has to guess what to change.

```html
<div class="sb-field">
  <label class="sb-field-label" for="dd-vague">Nomor polis</label>
  <div class="sb-input">
    <input id="dd-vague" type="text" placeholder="10 digit nomor polis" value="01234" aria-describedby="dd-vague-hint" aria-invalid="true">
  </div>
  <p class="sb-field-hint" id="dd-vague-hint">Input tidak valid.</p>
</div>
```

### Accessibility

- Connect the label with `for` / `id`. A field without a visible label needs `aria-label`.
- Point `aria-describedby` at the hint (and the tooltip when there is a help icon). In error, set `aria-invalid="true"`.
- Use the right keyboard on mobile: `inputmode="numeric"` for amounts and card numbers, `"tel"` for phone numbers.
- The help icon is a real button (`aria-label="Info"`) and its tooltip has `role="tooltip"`, so it works with keyboard focus, not only hover.
- Focus shows on the whole field: `brand-300` border and a 4 px `focus-ring` ring.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Label `gray-700` | `white` | 10.46:1 | Passes |
| Value `gray-900` | `white` | 17.75:1 | Passes |
| Placeholder, hint `gray-500` | `white` | 4.97:1 | Passes |
| Error message `error-500` | `white` | 3.76:1 | **Fails** |
| Field border `gray-300` | `white` | 1.47:1 | Below the 3:1 WCAG 1.4.11 asks for control boundaries |

> **Warning:** **Open decision.** The error message in `error-500` is 3.76:1, below AA for 14 px text. `error-600` (4.83:1) or `error-700` (6.57:1) pass. The `gray-300` border is also faint (1.47:1); the label above the field keeps it identifiable, but a darker border (`gray-400`) would help low-vision users. Both need a design team decision.

### Code

Load `tokens.css`, then `input-field.css`. States come from the input itself (`:focus`, `disabled`, `aria-invalid`), so no script is needed.

`input-field.css`

```css
/* Input field, Codemasters Design System
   Needs tokens.css.

   <div class="sb-field">
     <label class="sb-field-label" for="polis">Nomor polis</label>
     <div class="sb-input">
       <input id="polis" type="text" placeholder="10 digit nomor polis" aria-describedby="polis-hint">
     </div>
     <p class="sb-field-hint" id="polis-hint">Ada di kartu peserta, 10 digit.</p>
   </div>

   data-type on .sb-input   leading-dropdown | trailing-dropdown | leading-text | payment   (omit for Default)
   Destructive              aria-invalid="true" on the input. The hint becomes the error message.
   Disabled                 the disabled attribute on the input. A disabled field is never in error.
   data-state="focus"       on .sb-input forces Focused in static mockups and docs only. */

/* Label, control and hint sit 6 apart. */
.sb-field { display: grid; gap: 6px; }
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--text-secondary); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }

.sb-input {
  --inp-border: var(--border-primary); --inp-focus: var(--border-brand); --inp-ring: var(--focus-ring);
  position: relative; box-sizing: border-box;
  display: flex; align-items: center; gap: 8px;
  height: 44px; padding: 0 14px; /* control padding exception: 10 14 lands the height on 44 */
  background: var(--bg-primary);
  border: 1px solid var(--inp-border); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-input > svg { width: 20px; height: 20px; flex: none; color: var(--text-quaternary); }
.sb-input input {
  flex: 1; min-width: 0; height: 100%; margin: 0; padding: 0;
  font: 400 var(--text-md) var(--font); color: var(--text-primary);
  background: none; border: 0; outline: 0; /* focus shows on the whole field below */
}
.sb-input input::placeholder { color: var(--text-quaternary); opacity: 1; }

/* States */
.sb-input:hover:not(:focus-within, :has(input:disabled, [aria-invalid="true"])) { border-color: var(--border-strong); }
.sb-input:has(input:focus), .sb-input[data-state="focus"] {
  border-color: var(--inp-focus); box-shadow: var(--shadow-xs), 0 0 0 4px var(--inp-ring);
}
.sb-input:has(input:disabled) { opacity: .5; cursor: not-allowed; } /* disabled: the default look at 50 % opacity */
.sb-input input:disabled { cursor: not-allowed; }
.sb-input:has([aria-invalid="true"]) { --inp-border: var(--border-error); --inp-focus: var(--border-error); --inp-ring: var(--bg-error-subtle-hover); }
.sb-field:has([aria-invalid="true"]) .sb-field-hint { color: var(--error-500); }

/* Help icon: 16 px help-circle at the end, opens a Dark tooltip on hover and focus.
   In error it is an alert-circle in error-500. */
.sb-input-help {
  display: inline-flex; flex: none; margin: 0; padding: 0; border: 0; border-radius: var(--radius-sm);
  background: none; color: var(--fg-quaternary); cursor: help;
}
.sb-input-help > svg { width: 16px; height: 16px; }
.sb-input-help:hover, .sb-input-help:focus-visible { color: var(--text-quaternary); }
.sb-input-help:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-input:has([aria-invalid="true"]) .sb-input-help { color: var(--error-500); }
.sb-input-tip {
  position: absolute; z-index: 10; bottom: calc(100% + 8px); inset-inline-end: 4px;
  max-width: 320px; padding: 8px 12px; border-radius: var(--radius-md);
  background: var(--bg-inverse); box-shadow: var(--shadow-lg);
  font: 600 var(--text-xs) var(--font); color: var(--white); white-space: nowrap;
  visibility: hidden; opacity: 0; transition: opacity 150ms var(--ease), visibility 0s 150ms;
}
.sb-input-help:is(:hover, :focus-visible) + .sb-input-tip { visibility: visible; opacity: 1; transition: opacity 150ms var(--ease); }

/* Types */
.sb-input-select {
  flex: none; height: 100%; margin: 0; padding: 0 24px 0 0; border: 0; outline: 0; appearance: none; cursor: pointer;
  font: 400 var(--text-md) var(--font); color: var(--text-primary);
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23667085' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right center / 20px;
}
.sb-input-select:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; border-radius: var(--radius-sm); }
.sb-input[data-type="leading-dropdown"] .sb-input-select { margin-inline-end: 4px; } /* dropdown padding 10 12 10 14 */
.sb-input-prefix { flex: none; font: 400 var(--text-md) var(--font); color: var(--text-quaternary); }
.sb-input[data-type="leading-text"] { padding-inline-start: 0; gap: 0; }
.sb-input[data-type="leading-text"] input { padding-inline-start: 14px; }
.sb-input-addon {
  align-self: stretch; display: flex; align-items: center; flex: none;
  padding: 0 12px 0 14px; border-inline-end: 1px solid var(--border-primary);
  font: 400 var(--text-md) var(--font); color: var(--text-quaternary);
}
.sb-input[data-type="payment"] { padding-inline-start: 10px; }
.sb-input-card {
  display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 34px; height: 24px; box-sizing: border-box;
  background: var(--bg-primary); border: 1px solid var(--border-tertiary); border-radius: var(--radius-sm);
}
.sb-input-card > svg { width: 22px; height: 14px; }

@media (prefers-reduced-motion: reduce) {
  .sb-input, .sb-input-tip { transition: none; }
}
```

## Loading

What people see while data or an action is on its way: skeletons in the shape of the content, a spinner for waits of unknown length, and which to use when (with Button loading, Progress and Toast).

### Usage

- A skeleton stands in for content whose shape is known: the rows of a claim list, a summary card, a profile. It matches the real layout, so nothing jumps when the data arrives.
- A spinner stands in for a wait whose shape or length is unknown: a search, a panel, a submit. Always with words ("Memuat klaim…") unless it sits inside a button.
- Wait 300 ms before showing either, so fast answers never flash a loading state; once shown, keep it at least 500 ms.
- Data already on screen stays while it refreshes: fade it to 50 % with `aria-busy="true"` (as Chart does), never swap it for skeletons.
- Never stack them: one loading state per region, not a spinner inside a skeleton.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Skeleton group | The region that is loading: `aria-busy="true"` and one visually hidden "Memuat …" line. The shapes inside are `aria-hidden`. |
| 2 | Circle | Avatars and round icons: the size of the real avatar (`--sk-size`), radius full. |
| 3 | Line | `gray-100`, radius 4. Text line 12 high in a 20 line (Text sm); heading 20 high in a 30 line (Text xl). Widths vary so it reads as text. |
| 4 | Spinner | 2 px ring: the colour at 20 % with one quarter at full colour, one turn in 700 ms. Brand `brand-600` on surfaces, `white` on solid buttons (it follows the text colour). |
| 5 | Label | Text sm `gray-500`, 8 from the spinner, ending in "…". |

### Skeleton

Build the skeleton from the real component, with grey shapes in place of words and numbers; labels and headers that are already known stay as text.

#### Card

```html
<section class="sb-card" aria-busy="true" aria-label="Ringkasan klaim">
  <span class="sb-sr-only">Memuat ringkasan klaim…</span>
  <header class="sb-card-head">
    <div class="sb-card-heading" style="flex: 1">
      <span class="sb-skeleton" data-shape="heading" style="width: 45%" aria-hidden="true"></span>
      <span class="sb-skeleton" data-shape="text" style="width: 30%" aria-hidden="true"></span>
    </div>
  </header>
  <div class="sb-card-body">
    <dl class="sb-card-rows">
      <div class="sb-card-row"><dt>Total tagihan</dt><dd><span class="sb-skeleton" data-shape="text" style="width: 112px; margin-inline-start: auto" aria-hidden="true"></span></dd></div>
      <div class="sb-card-row"><dt>Ditanggung</dt><dd><span class="sb-skeleton" data-shape="text" style="width: 96px; margin-inline-start: auto" aria-hidden="true"></span></dd></div>
      <div class="sb-card-row"><dt>Tidak ditanggung</dt><dd><span class="sb-skeleton" data-shape="text" style="width: 80px; margin-inline-start: auto" aria-hidden="true"></span></dd></div>
    </dl>
  </div>
</section>
```

#### Table

Headers stay. Show as many rows as fit, or the page size when it is small; numbers align right like the real cells, status pills keep their pill shape.

```html
<div class="sb-table-wrap" aria-busy="true">
  <span class="sb-sr-only">Memuat daftar klaim…</span>
  <table class="sb-table">
    <thead><tr><th scope="col">ID Klaim</th><th scope="col">Peserta</th><th scope="col" data-num>Tagihan</th><th scope="col">Status</th></tr></thead>
    <tbody>
      <tr><td><span class="sb-skeleton" data-shape="text" style="width: 60%" aria-hidden="true"></span></td><td><span class="sb-skeleton" data-shape="text" style="width: 70%" aria-hidden="true"></span></td><td data-num><span class="sb-skeleton" data-shape="text" style="width: 80%; margin-inline-start: auto" aria-hidden="true"></span></td><td><span class="sb-skeleton" data-shape="rect" style="width: 70%; height: 22px; border-radius: var(--radius-xl)" aria-hidden="true"></span></td></tr>
      <tr><td><span class="sb-skeleton" data-shape="text" style="width: 60%" aria-hidden="true"></span></td><td><span class="sb-skeleton" data-shape="text" style="width: 55%" aria-hidden="true"></span></td><td data-num><span class="sb-skeleton" data-shape="text" style="width: 70%; margin-inline-start: auto" aria-hidden="true"></span></td><td><span class="sb-skeleton" data-shape="rect" style="width: 60%; height: 22px; border-radius: var(--radius-xl)" aria-hidden="true"></span></td></tr>
      <tr><td><span class="sb-skeleton" data-shape="text" style="width: 60%" aria-hidden="true"></span></td><td><span class="sb-skeleton" data-shape="text" style="width: 75%" aria-hidden="true"></span></td><td data-num><span class="sb-skeleton" data-shape="text" style="width: 75%; margin-inline-start: auto" aria-hidden="true"></span></td><td><span class="sb-skeleton" data-shape="rect" style="width: 65%; height: 22px; border-radius: var(--radius-xl)" aria-hidden="true"></span></td></tr>
    </tbody>
  </table>
</div>
```

#### Shapes

| Shape | Code | Size |
| --- | --- | --- |
| Text line | `data-shape="text"` | 12 high, 4 above and below (a Text sm line); set the width. Labels that are known (Total tagihan) stay as text |
| Heading | `data-shape="heading"` | 20 high, 5 above and below (a Text xl line) |
| Circle | `data-shape="circle"` | `--sk-size`, default 40 (Avatar md) |
| Block | `data-shape="rect"` | Set width, height and the radius of what it replaces (pill: `radius-xl`) |

> **Note:** The shimmer is one sweep across the whole page (`background-attachment: fixed`), 1.5 s, light `white` at 60 % (dark: 6 %). It stops with reduced motion; the grey shapes still say "loading".

### Spinner

#### Sizes

```html
<div class="sp-row">
<figure class="sp-cell"><span class="sb-spinner" data-size="sm" role="status" aria-label="Memuat"></span><figcaption class="mx">sm · 16</figcaption></figure>
<figure class="sp-cell"><span class="sb-spinner" role="status" aria-label="Memuat"></span><figcaption class="mx">md · 20</figcaption></figure>
<figure class="sp-cell"><span class="sb-spinner" data-size="lg" role="status" aria-label="Memuat"></span><figcaption class="mx">lg · 32</figcaption></figure>
<figure class="sp-cell"><span class="sb-spinner" data-size="xl" role="status" aria-label="Memuat"></span><figcaption class="mx">xl · 48</figcaption></figure>
</div>
```

| Size | px | Ring | Use |
| --- | --- | --- | --- |
| sm | 16 | 2 | Inside small buttons, list status lines (Combobox), badges |
| md | 20 | 2 | Default: buttons md to xl, inline with Text sm / md |
| lg | 32 | 3 | A card or panel loading |
| xl | 48 | 4 | A whole page or dialog loading (rare: prefer skeletons) |

#### With words

Outside a button, a spinner always says what is loading. Inline for small places, stacked and centred for a card or a page.

```html
<div aria-busy="true">
  <span class="sb-sr-only">Mencari peserta…</span>
  <div class="sb-loading"><span class="sb-spinner" data-size="sm" aria-hidden="true"></span><span>Mencari peserta…</span></div>
</div>
<div aria-busy="true">
  <span class="sb-sr-only">Memuat dokumen klaim…</span>
  <div class="sb-loading" data-layout="stack"><span class="sb-spinner" data-size="lg" aria-hidden="true"></span><span>Memuat dokumen klaim…</span></div>
</div>
```

#### On a solid fill

The spinner takes the text colour, so on a Primary button or a dark surface it turns white with no extra class. See Button → Loading.

```html
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md" aria-busy="true"><span class="sb-spinner" aria-hidden="true"></span>Mengirim…</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" aria-busy="true"><span class="sb-spinner" aria-hidden="true"></span>Menyimpan…</button>
```

### Which loading state

| Situation | Use | Example |
| --- | --- | --- |
| First load, the layout is known | Skeleton in that layout | Claim list rows, summary cards, a profile |
| Refresh of data already shown | Keep it at 50 % opacity, `aria-busy="true"` | Chart after a filter change, table after sorting on the server |
| An action started from a button | Button loading | Simpan, Kirim ke Advisor, Setujui |
| A wait of unknown length in a small place | Spinner sm / md with words | Combobox search, a panel opening |
| A task with a known end | Progress bar or circle | Uploading documents, AI analysis step 4 of 10 |
| Work that continues after people move on | Toast loading, updated to success or error | Exporting a report, sending 20 claims |
| A whole page with nothing to show yet | Skeleton of the page; spinner xl only when the layout is unknown | Opening a claim detail |

### Do and don't

**Do:** A skeleton in the shape of what is coming.

```html
<div aria-busy="true">
  <span class="sb-sr-only">Memuat profil…</span>
  <div class="sb-avatar-label" data-size="md">
    <span class="sb-skeleton" data-shape="circle" style="--sk-size: 40px" aria-hidden="true"></span>
    <div class="sb-avatar-label-text"><span class="sb-skeleton" data-shape="text" style="width: 120px" aria-hidden="true"></span><span class="sb-skeleton" data-shape="text" style="width: 180px" aria-hidden="true"></span></div>
  </div>
</div>
```

**Don't:** A big spinner with no words where the layout is known. The page jumps when the data lands.

```html
<div class="sb-loading" data-layout="stack"><span class="sb-spinner" data-size="xl"></span></div>
```

**Do:** Say what is loading.

```html
<div class="sb-loading"><span class="sb-spinner" data-size="sm" aria-hidden="true"></span><span>Memuat dokumen…</span></div>
```

**Don't:** "Mohon tunggu" says nothing about what is happening.

```html
<div class="sb-loading"><span class="sb-spinner" data-size="sm" aria-hidden="true"></span><span>Mohon tunggu…</span></div>
```

### Accessibility

- Mark the loading region with `aria-busy="true"` and remove it when the content is in; put one `sb-sr-only` "Memuat …" inside. The skeleton shapes are `aria-hidden`.
- A spinner on its own has `role="status"` and an `aria-label` ("Memuat"); next to words, the words carry the meaning and the spinner is `aria-hidden`.
- With reduced motion the shimmer stops and the spinner slows to one turn in 2 s; it never stops, because a still ring reads as stuck.
- When loading ends, move nothing: focus stays where it was. If the wait was long, a Toast can say it is done.

| Part | On | Ratio | Needs |
| --- | --- | --- | --- |
| Label `gray-500` | `white` | 4.97:1 | 4.5:1, passes |
| Spinner arc `brand-600` | `white` | 5.06:1 | 3:1 (graphic), passes |
| Skeleton `gray-100` | `white` | 1.1:1 | Decorative, exempt; the hidden label carries the meaning |

### Code

Load `tokens.css`, then `loading.css`. Skeletons reuse the real component markup (Card, Table), so load their CSS too. No script: add and remove `aria-busy` and the skeleton markup from your own code.

`loading.css`

```css
/* Loading: skeleton and spinner, Codemasters Design System
   Needs tokens.css. No script.

   Skeleton: grey shapes in the layout of the content that is coming. Mark the region busy and say so once.
   <section aria-busy="true">
     <span class="sb-sr-only">Memuat klaim…</span>
     <span class="sb-skeleton" data-shape="circle" style="--sk-size: 40px" aria-hidden="true"></span>
     <span class="sb-skeleton" data-shape="text" style="width: 60%" aria-hidden="true"></span>
   </section>

   data-shape   text (a line of Text sm) | heading (Text xl) | circle (avatar; --sk-size) | rect (any block; set width and height)
   width        on text and heading lines: vary it (100 %, 80 %, 60 %) so the block reads as a paragraph

   Spinner: a ring that turns, in the colour of its text (currentColor), so it is brand on a surface and white on a solid button.
   <span class="sb-spinner" role="status" aria-label="Memuat"></span>
   data-size    sm 16 | md 20 (default) | lg 32 | xl 48 */

/* Screen-reader-only text, for "Memuat…" next to skeletons and spinners. */
.sb-sr-only { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }

/* Skeleton: gray-100 (DESIGN.md), radius 4 for lines, full for circles. One shimmer sweeps the whole page at once
   (background-attachment: fixed), so a screen of skeletons moves together instead of flickering block by block. */
.sb-skeleton {
  --sk-shine: rgb(255 255 255 / .6);
  display: block; flex: none; box-sizing: border-box;
  border-radius: var(--radius-sm);
  background: linear-gradient(90deg, transparent 30%, var(--sk-shine) 50%, transparent 70%) var(--bg-tertiary);
  background-size: 200vw 100%; background-attachment: fixed; background-repeat: no-repeat;
  animation: sb-skeleton 1.5s ease-in-out infinite;
}
@keyframes sb-skeleton { from { background-position: 100vw 0; } to { background-position: -100vw 0; } }
.sb-skeleton[data-shape="text"] { height: 12px; margin-block: 4px; } /* 12 + 4 + 4 = the 20 px line of Text sm */
.sb-skeleton[data-shape="heading"] { height: 20px; margin-block: 5px; } /* the 30 px line of Text xl */
.sb-skeleton[data-shape="circle"] { width: var(--sk-size, 40px); height: var(--sk-size, 40px); border-radius: var(--radius-full); }
:root[data-theme="dark"] .sb-skeleton { --sk-shine: rgb(255 255 255 / .06); }

/* Spinner: a 2 px ring at 20 % of the colour, with one quarter at full colour, turning every 700 ms. */
.sb-spinner {
  --sp-size: 20px;
  display: inline-block; flex: none; box-sizing: border-box; width: var(--sp-size); height: var(--sp-size);
  border: 2px solid color-mix(in srgb, currentColor 20%, transparent); border-top-color: currentColor; border-radius: var(--radius-full);
  color: var(--fg-brand); vertical-align: middle;
  animation: sb-spin 700ms linear infinite;
}
.sb-spinner[data-size="sm"] { --sp-size: 16px; }
.sb-spinner[data-size="lg"] { --sp-size: 32px; border-width: 3px; }
.sb-spinner[data-size="xl"] { --sp-size: 48px; border-width: 4px; }
@keyframes sb-spin { to { rotate: 1turn; } }
/* A spinner with words: "Memuat klaim…" in Text sm gray-500, 8 apart. */
.sb-loading { display: inline-flex; align-items: center; gap: 8px; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }
.sb-loading[data-layout="stack"] { flex-direction: column; gap: 12px; text-align: center; }

@media (prefers-reduced-motion: reduce) {
  .sb-skeleton { animation: none; } /* the shapes alone say "loading" */
  .sb-spinner { animation-duration: 2s; } /* slower, but still turning: a still ring reads as stuck */
}
```

## Modal

A dialog that stops the page for one decision or one short form: confirmations, a destructive check, sending a claim. Native <dialog>, so focus, Esc and the inert page come from the browser.

### Usage

- Use a modal when the user must decide before going on: confirm a destructive step, leave unsaved work, or fill two or three fields that belong to one action (Kirim ke Advisor).
- Not for news. A result the user does not have to act on is a toast; an error in a form shows at the field.
- Not for long forms or anything that needs scrolling and reference to the page behind. That is a page or a side panel.
- One modal at a time. Never open a modal from a modal.
- The title asks the question or names the action, in Title Case ("Tolak Klaim?"). The primary button repeats the action ("Tolak Klaim"), never "Ya" or "OK".
- Two actions: Batal (Secondary gray) on the left, the action (Primary, or Destructive) on the right. An acknowledgement has one button.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Panel | `white`, radius 12, padding 24, gap 16, `shadow-lg`, on a `--scrim` (black 20 %). Width 424 (sm), 640 (md), 880 (lg), never wider than the screen minus 32; scrolls inside when taller than the screen minus 64. |
| 2 | Icon | Optional. 48 px circle: tone-100 fill, 8 px tone-50 ring, 24 px tone-600 icon. Error for destructive, warning for losing work, success for done, brand otherwise. |
| 3 | Title | Text xl / Semibold `gray-900` (sm: Text lg), Title Case. Asks the question or names the action. `aria-labelledby` points to it. |
| 4 | Description | Text sm `gray-500`, 4 under the title. Says what happens. `aria-describedby` points to it. |
| 5 | Close | Tertiary gray icon button sm, 16 from the top and right. Leave it out when the modal needs an answer (an acknowledgement still closes with its button and Esc). |
| 6 | Footer | Buttons md, right-aligned, gap 12, 24 under the content. In sm the buttons share the width; under 480 px they stack, primary on top. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Size | sm, md, lg | `data-size="sm"` or `"lg"`; omit for md |
| Icon | None, Brand, Error, Warning, Success | `<span class="sb-modal-icon" data-tone="…">` in the head |
| Close button | True, False | `.sb-modal-close` with `data-modal-close` |
| Body | True, False | `<div class="sb-modal-body">` for fields or longer content |
| Open, close | — | `data-modal-open="id"` on the trigger, `data-modal-close` on Batal and the close button |

### Types

#### Destructive confirmation

Error icon, the action as a Destructive Primary button. Focus starts on Batal (`autofocus`), so Enter never destroys by accident.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-open="demo-modal-1">Tolak Klaim</button>
<dialog class="sb-modal" id="demo-modal-1" data-size="sm" aria-labelledby="demo-modal-1-title" aria-describedby="demo-modal-1-desc">
  <header class="sb-modal-head">
    <span class="sb-modal-icon" data-tone="error" aria-hidden="true"><svg aria-hidden="true"><!-- trash --></svg></span>
    <div class="sb-modal-heading">
      <h2 class="sb-modal-title" id="demo-modal-1-title">Tolak Klaim?</h2>
      <p class="sb-modal-desc" id="demo-modal-1-desc">Klaim KLM-0241 dikembalikan ke rumah sakit dengan alasan penolakan. Tindakan ini tidak bisa dibatalkan.</p>
    </div>
  </header>
  <button class="sb-btn sb-modal-close" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Tutup" data-modal-close><svg aria-hidden="true"><!-- x --></svg></button>
  <footer class="sb-modal-foot">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-close autofocus>Batal</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-destructive>Tolak Klaim</button>
  </footer>
</dialog>
```

#### Warning

For losing work or a step that is hard to undo. The safe choice is the primary button.

#### Form

md, no icon, fields in the body (Input field, Textarea, Input dropdown). Keep it to a few fields; the primary button is disabled until the form can be sent.

#### Acknowledgement

Only when the user must see the result before going on. One full-width button, no close button. For anything lighter, use a toast.

### Behaviour

| What | How |
| --- | --- |
| Open | `dialog.showModal()` (`data-modal-open`). The page behind becomes inert and stops scrolling. |
| Focus | Moves into the modal: to the `autofocus` element, else the first focusable one. Tab stays inside. On close, focus returns to the button that opened it. |
| Close | Batal, the close button, Esc, or a click on the scrim. A destructive modal may skip the scrim click so a stray click does not lose the choice. |
| Motion | Fades in and scales from 96 % in 150 ms with `--ease`; the scrim fades with it. Reduced motion: no animation. |

### Do and don't

**Do:** The button says the action: Tolak Klaim.

```html
<div class="modal-live">
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-open="demo-modal-7">Lihat Contoh</button>
<dialog class="sb-modal" id="demo-modal-7" data-size="sm" aria-labelledby="demo-modal-7-title" aria-describedby="demo-modal-7-desc">
  <header class="sb-modal-head">
    <span class="sb-modal-icon" data-tone="error" aria-hidden="true"><svg aria-hidden="true"><!-- trash --></svg></span>
    <div class="sb-modal-heading">
      <h2 class="sb-modal-title" id="demo-modal-7-title">Tolak Klaim?</h2>
      <p class="sb-modal-desc" id="demo-modal-7-desc">Klaim KLM-0241 dikembalikan ke rumah sakit dengan alasan penolakan. Tindakan ini tidak bisa dibatalkan.</p>
    </div>
  </header>
  <footer class="sb-modal-foot">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-close autofocus>Batal</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-destructive>Tolak Klaim</button>
  </footer>
</dialog>
</div>
```

**Don't:** "Apakah Anda yakin?" with Ya / Tidak. People answer without reading; say what will happen.

```html
<div class="modal-live">
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-open="demo-modal-8">Lihat Contoh</button>
<dialog class="sb-modal" id="demo-modal-8" data-size="sm" aria-labelledby="demo-modal-8-title" aria-describedby="demo-modal-8-desc">
  <header class="sb-modal-head">
    <span class="sb-modal-icon" data-tone="error" aria-hidden="true"><svg aria-hidden="true"><!-- trash --></svg></span>
    <div class="sb-modal-heading">
      <h2 class="sb-modal-title" id="demo-modal-8-title">Apakah Anda yakin?</h2>
      <p class="sb-modal-desc" id="demo-modal-8-desc">Klaim KLM-0241 dikembalikan ke rumah sakit dengan alasan penolakan. Tindakan ini tidak bisa dibatalkan.</p>
    </div>
  </header>
  <footer class="sb-modal-foot">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-close>Tidak</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-modal-close>Ya</button>
  </footer>
</dialog>
</div>
```

**Do:** Batal or the safe choice on the left, the action on the right.

```html
<div class="modal-live">
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-open="demo-modal-9">Lihat Contoh</button>
<dialog class="sb-modal" id="demo-modal-9" data-size="sm" aria-labelledby="demo-modal-9-title" aria-describedby="demo-modal-9-desc">
  <header class="sb-modal-head">
    <span class="sb-modal-icon" data-tone="warning" aria-hidden="true"><svg aria-hidden="true"><!-- alert --></svg></span>
    <div class="sb-modal-heading">
      <h2 class="sb-modal-title" id="demo-modal-9-title">Simpan Perubahan?</h2>
      <p class="sb-modal-desc" id="demo-modal-9-desc">Ada perubahan pada ringkasan yang belum disimpan. Kalau keluar sekarang, perubahan itu hilang.</p>
    </div>
  </header>
  <footer class="sb-modal-foot">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-close>Buang</button>
    <button class="sb-btn" type="button" data-hierarchy="primary">Simpan</button>
  </footer>
</dialog>
</div>
```

**Don't:** Two primary buttons. Only one next step looks like one.

```html
<div class="modal-live">
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-open="demo-modal-10">Lihat Contoh</button>
<dialog class="sb-modal" id="demo-modal-10" data-size="sm" aria-labelledby="demo-modal-10-title" aria-describedby="demo-modal-10-desc">
  <header class="sb-modal-head">
    <span class="sb-modal-icon" data-tone="warning" aria-hidden="true"><svg aria-hidden="true"><!-- alert --></svg></span>
    <div class="sb-modal-heading">
      <h2 class="sb-modal-title" id="demo-modal-10-title">Simpan Perubahan?</h2>
      <p class="sb-modal-desc" id="demo-modal-10-desc">Ada perubahan pada ringkasan yang belum disimpan. Kalau keluar sekarang, perubahan itu hilang.</p>
    </div>
  </header>
  <footer class="sb-modal-foot">
    <button class="sb-btn" type="button" data-hierarchy="primary" data-modal-close>Simpan</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-destructive data-modal-close>Buang</button>
  </footer>
</dialog>
</div>
```

### Accessibility

- Use the native `<dialog>` with `showModal()`: it sets the modal role, traps focus, makes the page inert, closes on Esc and returns focus. Do not rebuild that with `<div>`s.
- Name it with `aria-labelledby` (the title) and describe it with `aria-describedby` (the description).
- The close button has `aria-label="Tutup"`. The icon is decorative (`aria-hidden`).
- In a destructive modal, start focus on Batal so Enter does the safe thing.
- Title `gray-900` on white is 17.75:1, description `gray-500` 4.97:1.

### Code

Load `tokens.css` and `button.css`, then `modal.css`, and `modal.js` to open and close.

`modal.css`

```css
/* Modal, Codemasters Design System
   Needs tokens.css and button.css; modal.js to open and close. A native <dialog> opened with showModal().

   <button class="sb-btn" type="button" data-modal-open="tolak">Tolak Klaim</button>
   <dialog class="sb-modal" id="tolak" data-size="sm" aria-labelledby="tolak-title" aria-describedby="tolak-desc">
     <header class="sb-modal-head">
       <span class="sb-modal-icon" data-tone="error">…trash…</span>
       <div class="sb-modal-heading">
         <h2 class="sb-modal-title" id="tolak-title">Tolak Klaim?</h2>
         <p class="sb-modal-desc" id="tolak-desc">…</p>
       </div>
     </header>
     <button class="sb-btn sb-modal-close" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Tutup" data-modal-close>…x…</button>
     <footer class="sb-modal-foot">
       <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-close autofocus>Batal</button>
       <button class="sb-btn" type="button" data-destructive>Tolak Klaim</button>
     </footer>
   </dialog>

   data-size   sm 424 (confirmations) | md 640 (forms, default) | lg 880 (wide content)
   data-tone   on the icon: brand | error | warning | success */

.sb-modal {
  --modal-w: 640px;
  box-sizing: border-box;
  display: grid; gap: 16px; align-content: start;
  width: min(var(--modal-w), calc(100% - 32px)); max-width: none; max-height: calc(100dvh - 64px);
  margin: auto; padding: 24px; overflow-y: auto;
  font: 400 var(--text-sm) var(--font); color: var(--text-secondary);
  background: var(--bg-primary); border: 0; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
}
.sb-modal[data-size="sm"] { --modal-w: 424px; }
.sb-modal[data-size="lg"] { --modal-w: 880px; }

/* Open and close: fade and scale from 96 %, 150 ms; the scrim fades with it. */
div.sb-modal { position: relative; } /* static specimens; a <dialog> stays fixed in the top layer */
dialog.sb-modal { opacity: 0; scale: .96; transition: opacity 150ms var(--ease), scale 150ms var(--ease), overlay 150ms allow-discrete, display 150ms allow-discrete; }
dialog.sb-modal:not([open]) { display: none; }
dialog.sb-modal[open] { opacity: 1; scale: 1; }
dialog.sb-modal::backdrop { background: transparent; transition: background-color 150ms var(--ease), overlay 150ms allow-discrete, display 150ms allow-discrete; }
dialog.sb-modal[open]::backdrop { background: var(--scrim); }
@starting-style {
  dialog.sb-modal[open] { opacity: 0; scale: .96; }
  dialog.sb-modal[open]::backdrop { background: transparent; }
}
html:has(dialog.sb-modal[open]) { overflow: hidden; } /* the page behind does not scroll */

/* Head: optional icon, title, description. The close button sits in the corner. */
.sb-modal-head { display: grid; gap: 16px; padding-inline-end: 32px; }
.sb-modal-heading { display: grid; gap: 4px; }
.sb-modal-title { margin: 0; font: 600 var(--text-xl) var(--font); color: var(--text-primary); text-wrap: balance; }
.sb-modal[data-size="sm"] .sb-modal-title { font: 600 var(--text-lg) var(--font); }
.sb-modal-desc { margin: 0; color: var(--text-quaternary); text-wrap: pretty; }
.sb-modal-close { position: absolute; top: 16px; right: 16px; }

/* Icon: 48 px circle, tone-100 fill with an 8 px tone-50 ring, 24 px tone-600 icon. */
.sb-modal-icon {
  --tone: var(--brand-600); --tone-fill: var(--bg-brand-subtle-hover); --tone-ring: var(--bg-brand-subtle);
  box-sizing: border-box; display: grid; place-items: center; width: 48px; height: 48px;
  border: 8px solid var(--tone-ring); border-radius: var(--radius-full); background: var(--tone-fill); color: var(--tone);
}
.sb-modal-icon > svg { width: 24px; height: 24px; }
.sb-modal-icon[data-tone="error"] { --tone: var(--error-600); --tone-fill: var(--bg-error-subtle-hover); --tone-ring: var(--bg-error-subtle); }
.sb-modal-icon[data-tone="warning"] { --tone: var(--warning-600); --tone-fill: var(--warning-100); --tone-ring: var(--bg-warning-subtle); }
/* Dark theme: the icon steps up to 400 on the darker fills. */
:root[data-theme="dark"] .sb-modal-icon { --tone: var(--brand-400); }
:root[data-theme="dark"] .sb-modal-icon[data-tone="error"] { --tone: var(--error-400); }
:root[data-theme="dark"] .sb-modal-icon[data-tone="warning"] { --tone: var(--warning-400); --tone-fill: var(--warning-900); }
:root[data-theme="dark"] .sb-modal-icon[data-tone="success"] { --tone: var(--success-400); --tone-fill: var(--success-900); }
.sb-modal-icon[data-tone="success"] { --tone: var(--success-600); --tone-fill: var(--success-100); --tone-ring: var(--bg-success-subtle); }

.sb-modal-body { display: grid; gap: 16px; min-width: 0; }
.sb-modal-body > p { margin: 0; }

/* Footer: actions right-aligned, gap 12, 8 more above them. In a small modal the buttons share the width. */
.sb-modal-foot { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 12px; margin-top: 8px; }
.sb-modal[data-size="sm"] .sb-modal-foot > .sb-btn { flex: 1; }
@media (max-width: 480px) {
  .sb-modal-foot { flex-direction: column-reverse; }
  .sb-modal-foot > .sb-btn { width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  dialog.sb-modal, dialog.sb-modal::backdrop { transition: none; }
}
```

#### Open and close script

`modal.js`

```js
// Modal: [data-modal-open="id"] opens <dialog id="id">, [data-modal-close] and a scrim click close it.
// Esc, the focus trap and returning focus to the opener come from showModal().
function modalClick(e) {
  const opener = e.target.closest?.('[data-modal-open]');
  if (opener) return document.getElementById(opener.dataset.modalOpen)?.showModal();
  const closer = e.target.closest?.('[data-modal-close]');
  if (closer) return closer.closest('dialog')?.close();
  // A click on the scrim lands on the dialog element itself, outside its box.
  const dialog = e.target.closest?.('dialog.sb-modal');
  if (dialog && e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  }
}
document.addEventListener('click', modalClick);
```

## Pagination

The footer of a long list: how many rows per page, which rows are shown out of how many, and two arrows to the previous and next page. One row, right-aligned under the table.

### Usage

- Use it under a table or list that is longer than one page: claims to review, invoices, members. It sits right under the list, in the same Card, 16 below the last row.
- The range says what is on screen and how much there is in all: "6–10 dari 1.542 klaim". Name the rows (klaim, invoice, peserta); "data" only when nothing better fits.
- Page sizes 5, 10, 25 and 50 cover most lists. Changing the size keeps the first row in view: on rows 11–15, switching to 10 lands on rows 11–20.
- After a page change, scroll the list (not the page) back to its first row and keep focus on the arrow that was used.
- Filters, search and sorting sit above the list, never in this row.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Label | "Baris per halaman", Text md `gray-500`, 12 from the list. |
| 2 | Page size | Input dropdown, 88 wide, 44 high: 5, 10, 25, 50. |
| 3 | Range | "6–10 dari 1.542 klaim", Text md `gray-500`, tabular figures, 24 from the list and the arrows. Read out when it changes (`aria-live="polite"`). |
| 4 | Arrows | Button secondary gray lg, icon only (44 × 44, chevron left / right), 12 apart. Disabled on the first and the last page. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Page | 1 … pages | `data-page` |
| Rows | Total and page size | `data-total`, `data-size` |
| Page sizes | List | `data-sizes="5,10,25,50"` (default) |
| Row name | Text | `data-noun="klaim"` (default "data") |

### In a table

Under a Table, 16 below it, inside the same Card. The Table page uses this footer.

### Do and don't

**Do:** Name the rows and give the total.

```html
<p class="pager-copy">1–5 dari 1.542 klaim</p>
```

**Don't:** "Halaman 1" alone: nobody knows how much is left.

```html
<p class="pager-copy">Halaman 1</p>
```

### Accessibility

- A `<nav>` with its own `aria-label` ("Halaman daftar klaim"), so it is a landmark people can tell apart from the main navigation.
- The arrows are icon-only buttons named "Halaman sebelumnya" and "Halaman berikutnya"; on the first and last page they are `disabled`.
- The page-size list is an Input dropdown labelled by "Baris per halaman".
- The range is a polite live region, so a screen reader says "6–10 dari 1.542 klaim" after each change. Focus stays on the arrow that was used, or moves to the other arrow when it became disabled.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Label and range `gray-500` | `white` | 4.97:1 | Passes |
| Arrow `gray-700` | `white` | 10.46:1 | Passes (3:1 for icons) |

### Code

Load `tokens.css`, `button.css` and `input-dropdown.css` (with `input-dropdown.js`), then `pagination.css`, and add `pagination.js`. The markup can be just the `<nav>` with its data attributes: the script draws the rest and redraws on every change. Listen for `sb-page-change` to load the page.

`pagination.css`

```css
/* Pagination, Codemasters Design System
   Needs tokens.css, button.css and input-dropdown.css (+ input-dropdown.js); pagination.js draws and updates it.

   <nav class="sb-pagination" id="klaim-pages" aria-label="Halaman daftar klaim"
        data-page="1" data-total="1542" data-size="5" data-sizes="5,10,25,50" data-noun="klaim"></nav>

   data-page, data-total, data-size   the current page, the number of rows, rows per page
   data-sizes   the page-size options (default 5, 10, 25, 50)
   data-noun    what the rows are: "1–5 dari 1.542 klaim" (default "data")
   One row, right-aligned: Baris per halaman [5 ⌄]   1–5 dari 1.542 klaim   [‹] [›] */

.sb-pagination {
  display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-end; gap: 12px;
  font: 400 var(--text-md) var(--font); color: var(--text-quaternary);
}
.sb-pagination-label { white-space: nowrap; }
.sb-pagination-size { width: 88px; }
.sb-pagination-count { margin: 0 0 0 12px; white-space: nowrap; font-variant-numeric: tabular-nums; } /* 24 from the list */
.sb-pagination-steps { display: flex; gap: 12px; margin-inline-start: 12px; } /* 24 from the range, 12 between the arrows */
```

#### Script

`pagination.js`

```js
// Pagination: draws itself from data-page, data-total and data-size; the arrows change the page and the
// Input dropdown ("sb-dd-change") the page size. Fires "sb-page-change" with { page, size }: load that page.
// Needs input-dropdown.js for the page-size list.
function pgRender(nav) {
  const s = nav.dataset, size = +s.size || 5, total = +s.total || 0, pages = Math.max(1, Math.ceil(total / size));
  const page = Math.min(Math.max(1, +s.page || 1), pages), id = nav.id || 'pg';
  const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  const num = n => n.toLocaleString('id-ID');
  const sizes = (s.sizes || '5,10,25,50').split(',').map(Number);
  const opts = sizes.map((n, i) => `<div class="sb-dd-opt" id="${id}-o${i}" role="option" aria-selected="${n === size}" data-value="${n}"><span class="sb-dd-main"><span class="sb-dd-label">${n}</span></span>${svg('M20 6 9 17l-5-5').replace('<svg ', '<svg class="sb-dd-check" ')}</div>`).join('');
  const step = (to, label, d) => `<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="lg" data-icon="only" aria-label="${label}" data-go="${to}"${to < 1 || to > pages ? ' disabled' : ''}>${svg(d)}</button>`;
  const first = total ? (page - 1) * size + 1 : 0, last = Math.min(total, page * size);
  nav.innerHTML = `<span class="sb-pagination-label" id="${id}-l">Baris per halaman</span>
<div class="sb-dd sb-pagination-size">
<button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="${id}-list" aria-labelledby="${id}-l ${id}-v"><span class="sb-dd-value" id="${id}-v"><span class="sb-dd-label">${size}</span></span>${svg('m6 9 6 6 6-6').replace('<svg ', '<svg class="sb-dd-chevron" ')}</button>
<div class="sb-dd-menu" id="${id}-list" role="listbox" aria-labelledby="${id}-l" hidden>${opts}</div>
</div>
<p class="sb-pagination-count" aria-live="polite">${num(first)}–${num(last)} dari ${num(total)} ${s.noun || 'data'}</p>
<div class="sb-pagination-steps">${step(page - 1, 'Halaman sebelumnya', 'm15 18-6-6 6-6')}${step(page + 1, 'Halaman berikutnya', 'm9 18 6-6-6-6')}</div>`;
  s.page = page;
}
function pgSet(nav, page, size, focus) {
  const s = nav.dataset;
  if (size) { page = Math.floor(((+s.page - 1) * +s.size) / size) + 1; s.size = size; } // the first row stays in view
  s.page = page;
  pgRender(nav);
  const target = nav.querySelector(focus);
  (target && !target.disabled ? target : nav.querySelector('[data-go]:not(:disabled)'))?.focus(); // first or last page: the other arrow
  nav.dispatchEvent(new CustomEvent('sb-page-change', { bubbles: true, detail: { page: +s.page, size: +s.size } }));
}
function pgClick(e) {
  const go = e.target.closest?.('.sb-pagination [data-go]');
  if (go && !go.disabled) pgSet(go.closest('.sb-pagination'), +go.dataset.go, null, `[aria-label="${go.getAttribute('aria-label')}"]`);
}
function pgSize(e) {
  const nav = e.target.closest?.('.sb-pagination');
  if (nav && +e.detail.value !== +nav.dataset.size) pgSet(nav, null, +e.detail.value, '.sb-dd-trigger');
}
document.querySelectorAll('.sb-pagination').forEach(pgRender);
document.addEventListener('click', pgClick);
document.addEventListener('sb-dd-change', pgSize);
```

## Progress bar and circle

Shows how far a measurable task or value has got: an upload, AI analysis steps, quota used. For work of unknown length use a spinner instead.

### Usage

| Use | Example | Component |
| --- | --- | --- |
| A task with a known end | Uploading claim documents, AI analysis step 4 of 10 | Progress bar |
| A share of a whole, as a headline number | Quota used, claims analysed this month | Progress circle |
| The same, in a compact card or a dashboard row | Score next to a title | Half circle, or circle `xxs` |
| Work of unknown length | Waiting for the server | Spinner, not a progress bar |

- The value text is the rounded percentage ("40%"). Put the exact number in a tooltip if someone needs it.
- The colour stays `brand-600`. When the value is itself a status (AI confidence, risk), colour a badge next to it, not the bar.
- Changes animate over 300 ms with `--ease`. Never animate backwards, except a reset to 0 when a task restarts.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Bar track | 8 high, full width, `gray-100`, radius 4 |
| 2 | Bar fill | `brand-600`, radius 4, min width 8 so 0 % still shows a dot |
| 3 | Bar label | Text sm / Medium `gray-700`. Right: gap 12, the track shrinks to fit |
| 4 | Circle track | `gray-100`, stroke 10 % of the box (16 at 160 … 28 at 280; 6 at 64) |
| 5 | Circle line | `brand-600`, round caps. From 12 o'clock, clockwise; the half circle runs left to right |
| 6 | Caption | Optional label. Text xs / Medium `gray-500` (`md`, `lg`: Text sm), above the value; `xxs`: below the circle |
| 7 | Value | Rounded percentage. Medium `gray-900`, Display xs to Display lg by size; `xxs`: Text sm `gray-700` |

### Progress bar labels

```html
<div class="sb-progress" id="pb-none" role="progressbar" aria-label="Unggah dokumen klaim" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="--value: 30">
  <div class="sb-progress-track"><div class="sb-progress-fill"></div></div>
</div>
<div class="sb-progress" data-label="right" id="pb-right" role="progressbar" aria-label="Unggah dokumen klaim" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="--value: 40">
  <div class="sb-progress-track"><div class="sb-progress-fill"></div></div>
  <span class="sb-progress-label">40%</span>
</div>
<div class="sb-progress" data-label="bottom" id="pb-bottom" role="progressbar" aria-label="Unggah dokumen klaim" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="--value: 50">
  <div class="sb-progress-track"><div class="sb-progress-fill"></div></div>
  <span class="sb-progress-label">50%</span>
</div>
<div class="sb-progress" data-label="top-floating" id="pb-top-floating" role="progressbar" aria-label="Unggah dokumen klaim" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="--value: 60">
  <div class="sb-progress-track"><div class="sb-progress-fill"></div></div>
  <span class="sb-progress-label">60%</span>
</div>
<div class="sb-progress" data-label="bottom-floating" id="pb-bottom-floating" role="progressbar" aria-label="Unggah dokumen klaim" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="--value: 70">
  <div class="sb-progress-track"><div class="sb-progress-fill"></div></div>
  <span class="sb-progress-label">70%</span>
</div>
```

| Label | Spec |
| --- | --- |
| False | Track only. Show the number somewhere else on the screen. |
| Right | Text sm / Medium `gray-700`, 12 after the track. |
| Bottom | Text sm / Medium `gray-700`, 8 below, right-aligned. |
| Top floating / Bottom floating | Light tooltip (white, `shadow-lg`, Text xs / Semibold `gray-700`) following the end of the fill, 8 away. It slides from left-aligned at 0 % to right-aligned at 100 % so it never sticks out of the bar. The bar reserves 42 px for it. |

### Progress circle sizes

```html
<div class="sb-progress-circle" data-size="xxs" id="pcs-xxs" role="progressbar" aria-labelledby="pcs-xxs-cap" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="--value: 40">
  <svg viewBox="0 0 100 100" aria-hidden="true"><circle class="sb-pc-track" cx="50" cy="50" r="45"/><circle class="sb-pc-line" cx="50" cy="50" r="45" pathLength="100"/></svg>
  <div class="sb-pc-text">
    <span class="sb-pc-caption" id="pcs-xxs-cap">Klaim dianalisis</span>
    <span class="sb-pc-value">40%</span>
  </div>
</div>
<div class="sb-progress-circle" data-size="xs" id="pcs-xs" role="progressbar" aria-labelledby="pcs-xs-cap" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="--value: 40">
  <svg viewBox="0 0 100 100" aria-hidden="true"><circle class="sb-pc-track" cx="50" cy="50" r="45"/><circle class="sb-pc-line" cx="50" cy="50" r="45" pathLength="100"/></svg>
  <div class="sb-pc-text">
    <span class="sb-pc-caption" id="pcs-xs-cap">Klaim dianalisis</span>
    <span class="sb-pc-value">40%</span>
  </div>
</div>
<div class="sb-progress-circle" data-size="sm" id="pcs-sm" role="progressbar" aria-labelledby="pcs-sm-cap" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="--value: 40">
  <svg viewBox="0 0 100 100" aria-hidden="true"><circle class="sb-pc-track" cx="50" cy="50" r="45"/><circle class="sb-pc-line" cx="50" cy="50" r="45" pathLength="100"/></svg>
  <div class="sb-pc-text">
    <span class="sb-pc-caption" id="pcs-sm-cap">Klaim dianalisis</span>
    <span class="sb-pc-value">40%</span>
  </div>
</div>
<div class="sb-progress-circle" data-size="md" id="pcs-md" role="progressbar" aria-labelledby="pcs-md-cap" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="--value: 40">
  <svg viewBox="0 0 100 100" aria-hidden="true"><circle class="sb-pc-track" cx="50" cy="50" r="45"/><circle class="sb-pc-line" cx="50" cy="50" r="45" pathLength="100"/></svg>
  <div class="sb-pc-text">
    <span class="sb-pc-caption" id="pcs-md-cap">Klaim dianalisis</span>
    <span class="sb-pc-value">40%</span>
  </div>
</div>
<div class="sb-progress-circle" data-size="lg" id="pcs-lg" role="progressbar" aria-labelledby="pcs-lg-cap" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="--value: 40">
  <svg viewBox="0 0 100 100" aria-hidden="true"><circle class="sb-pc-track" cx="50" cy="50" r="45"/><circle class="sb-pc-line" cx="50" cy="50" r="45" pathLength="100"/></svg>
  <div class="sb-pc-text">
    <span class="sb-pc-caption" id="pcs-lg-cap">Klaim dianalisis</span>
    <span class="sb-pc-value">40%</span>
  </div>
</div>
```

| Size | Box | Stroke | Value | Caption |
| --- | --- | --- | --- | --- |
| `xxs` | 64 | 6 | Text sm / Medium `gray-700` | Text xs / Medium `gray-500`, below the circle |
| `xs` | 160 | 16 | Display xs 24 / Medium `gray-900` | Text xs / Medium `gray-500`, above the value |
| `sm` | 200 | 20 | Display sm 30 / Medium `gray-900` | Text xs / Medium `gray-500` |
| `md` | 240 | 24 | Display md 36 / Medium `gray-900` | Text sm / Medium `gray-500` |
| `lg` | 280 | 28 | Display lg 48 / Medium `gray-900` | Text sm / Medium `gray-500` |

#### Half circle

A gauge that runs left to right. Its height is half the box plus the stroke.

```html
<div class="sb-progress-circle" data-size="xxs" data-shape="half" id="pch-xxs" role="progressbar" aria-labelledby="pch-xxs-cap" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="--value: 40">
  <svg viewBox="0 0 100 60" aria-hidden="true"><path class="sb-pc-track" d="M5 50a45 45 0 0 1 90 0"/><path class="sb-pc-line" d="M5 50a45 45 0 0 1 90 0" pathLength="100"/></svg>
  <div class="sb-pc-text">
    <span class="sb-pc-caption" id="pch-xxs-cap">Klaim dianalisis</span>
    <span class="sb-pc-value">40%</span>
  </div>
</div>
<div class="sb-progress-circle" data-size="xs" data-shape="half" id="pch-xs" role="progressbar" aria-labelledby="pch-xs-cap" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="--value: 40">
  <svg viewBox="0 0 100 60" aria-hidden="true"><path class="sb-pc-track" d="M5 50a45 45 0 0 1 90 0"/><path class="sb-pc-line" d="M5 50a45 45 0 0 1 90 0" pathLength="100"/></svg>
  <div class="sb-pc-text">
    <span class="sb-pc-caption" id="pch-xs-cap">Klaim dianalisis</span>
    <span class="sb-pc-value">40%</span>
  </div>
</div>
<div class="sb-progress-circle" data-size="sm" data-shape="half" id="pch-sm" role="progressbar" aria-labelledby="pch-sm-cap" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="--value: 40">
  <svg viewBox="0 0 100 60" aria-hidden="true"><path class="sb-pc-track" d="M5 50a45 45 0 0 1 90 0"/><path class="sb-pc-line" d="M5 50a45 45 0 0 1 90 0" pathLength="100"/></svg>
  <div class="sb-pc-text">
    <span class="sb-pc-caption" id="pch-sm-cap">Klaim dianalisis</span>
    <span class="sb-pc-value">40%</span>
  </div>
</div>
<div class="sb-progress-circle" data-size="md" data-shape="half" id="pch-md" role="progressbar" aria-labelledby="pch-md-cap" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="--value: 40">
  <svg viewBox="0 0 100 60" aria-hidden="true"><path class="sb-pc-track" d="M5 50a45 45 0 0 1 90 0"/><path class="sb-pc-line" d="M5 50a45 45 0 0 1 90 0" pathLength="100"/></svg>
  <div class="sb-pc-text">
    <span class="sb-pc-caption" id="pch-md-cap">Klaim dianalisis</span>
    <span class="sb-pc-value">40%</span>
  </div>
</div>
<div class="sb-progress-circle" data-size="lg" data-shape="half" id="pch-lg" role="progressbar" aria-labelledby="pch-lg-cap" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="--value: 40">
  <svg viewBox="0 0 100 60" aria-hidden="true"><path class="sb-pc-track" d="M5 50a45 45 0 0 1 90 0"/><path class="sb-pc-line" d="M5 50a45 45 0 0 1 90 0" pathLength="100"/></svg>
  <div class="sb-pc-text">
    <span class="sb-pc-caption" id="pch-lg-cap">Klaim dianalisis</span>
    <span class="sb-pc-value">40%</span>
  </div>
</div>
```

### Properties

| Component | Property | Values | Code |
| --- | --- | --- | --- |
| Progress bar | Progress | 0–100 % in steps of 10 | `--value` + `aria-valuenow` + label text (any integer works) |
| Progress bar | Label | False, Right, Bottom, Top floating, Bottom floating | `data-label`; leave out the label span for False |
| Progress circle | Size | `xxs`, `xs`, `sm`, `md`, `lg` | `data-size` |
| Progress circle | Shape | Circle, Half circle | `data-shape="half"` + the half-circle SVG |
| Progress circle | Label | True, False | `<span class="sb-pc-caption">`, also the accessible name |

### Updating the value

`setProgress(el, value)` sets the fill, `aria-valuenow` and the visible percentage in one go; CSS animates the change. Run the demo.

`progress.js`

```js
// Progress: set the value from JS. The fill animates in CSS (300 ms, --ease).
// Only ever move forward, except when the task restarts from 0.
function setProgress(el, value) {
  const v = Math.round(Math.min(100, Math.max(0, value)));
  el.style.setProperty('--value', v);
  el.setAttribute('aria-valuenow', v);
  el.querySelectorAll('.sb-progress-label, .sb-pc-value').forEach(t => (t.textContent = `${v}%`));
}

// setProgress(document.querySelector('#unggah'), 40);
```

### Do and don't

**Do:** The score stays brand; the badge carries the status colour.

```html
<div class="dd-form">
<span class="sb-badge" data-size="sm" data-color="error">Risiko FWA tinggi</span>
<div class="sb-progress-circle" data-size="xxs" data-shape="half" id="dd-pc1" role="progressbar" aria-labelledby="dd-pc1-cap" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="--value: 80">
  <svg viewBox="0 0 100 60" aria-hidden="true"><path class="sb-pc-track" d="M5 50a45 45 0 0 1 90 0"/><path class="sb-pc-line" d="M5 50a45 45 0 0 1 90 0" pathLength="100"/></svg>
  <div class="sb-pc-text">
    <span class="sb-pc-caption" id="dd-pc1-cap">Skor</span>
    <span class="sb-pc-value">80%</span>
  </div>
</div>
</div>
```

**Don't:** A red bar for a high-risk score. Red reads as "failed", not "80 % done".

```html
<div class="sb-progress" data-label="right" id="dd-pb2" role="progressbar" aria-label="Risiko FWA" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="--value: 80">
  <div class="sb-progress-track"><div class="sb-progress-fill" style="background: var(--error-600)"></div></div>
  <span class="sb-progress-label">80%</span>
</div>
```

### Accessibility

- Use `role="progressbar"` with `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`.
- Name it: `aria-labelledby` the caption, or `aria-label` when nothing visible names it.
- Children of a progressbar are presentational, so the SVG is `aria-hidden` and the percentage text is not read twice.
- Animations are turned off for `prefers-reduced-motion`.

| Pair | Ratio | Needed | Result |
| --- | --- | --- | --- |
| Fill `brand-600` on track `gray-100` | 4.59:1 | 3:1 | Passes |
| Track `gray-100` on `white` | 1.10:1 | 3:1 | Below, but not needed: the fill carries the value |
| Value `gray-900`, caption `gray-500` on `white` | 17.75:1, 4.97:1 | 4.5:1 | Passes |

### Code

Load `tokens.css` and `progress.css`. Add `progress.js` to update the value from a task.

`progress.css`

```css
/* Progress bar and progress circle, Codemasters Design System
   Needs tokens.css. progress.js sets the value.

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
.sb-progress-track { flex: 1; min-width: 0; height: 8px; border-radius: var(--radius-sm); background: var(--bg-tertiary); }
.sb-progress-fill { width: max(8px, calc(var(--value) * 1%)); height: 100%; border-radius: inherit; background: var(--brand-600); transition: width 300ms var(--ease); }
.sb-progress-label { flex: none; font: 500 var(--text-sm) var(--font); color: var(--text-secondary); font-variant-numeric: tabular-nums; }
.sb-progress[data-label="bottom"] { flex-direction: column; align-items: stretch; gap: 8px; }
.sb-progress[data-label="bottom"] .sb-progress-track { flex: none; }
.sb-progress[data-label="bottom"] .sb-progress-label { align-self: flex-end; }
/* Floating: a Light tooltip that follows the end of the fill, 8 away. The bar reserves its 34 px + 8 so it covers nothing.
   translate slides it from left-aligned at 0 % to right-aligned at 100 %, centred at 50 %, so it never leaves the bar. */
.sb-progress[data-label$="floating"] .sb-progress-label {
  position: absolute; left: calc(var(--value) * 1%); translate: calc(var(--value) * -1%) 0;
  padding: 8px 12px; border-radius: var(--radius-md); background: var(--bg-primary); box-shadow: var(--shadow-lg);
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
.sb-pc-track { stroke: var(--border-tertiary); }
.sb-pc-line { stroke: var(--brand-600); stroke-linecap: round; stroke-dasharray: var(--value) 100; transition: stroke-dasharray 300ms var(--ease); }
.sb-progress-circle:not([data-shape="half"]) .sb-pc-line { transform: rotate(-90deg); transform-origin: center; transform-box: fill-box; }
.sb-progress-circle[data-shape="half"] .sb-pc-text { align-self: end; }

.sb-pc-text { display: grid; justify-items: center; text-align: center; }
.sb-pc-caption { font: 500 var(--text-xs) var(--font); color: var(--text-quaternary); }
.sb-pc-value { font: 500 var(--display-sm) var(--font); color: var(--text-primary); font-variant-numeric: tabular-nums; }

.sb-progress-circle[data-size="xxs"] { --pc-box: 64px; }
.sb-progress-circle[data-size="xxs"] :is(.sb-pc-track, .sb-pc-line) { stroke-width: 9.375; } /* 6 px at 64 */
.sb-progress-circle[data-size="xxs"] .sb-pc-value { font: 500 var(--text-sm) var(--font); color: var(--text-secondary); }
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
```

## Sidebar

The app's main navigation: a fixed gray-900 column on the left with grouped menu items, count badges, sub-menus and the account menu. Collapses from 280 to 72 with icons and tooltips.

### Usage

- One sidebar per app, fixed on the left and as tall as the screen. Pages scroll on its right; the sidebar never scrolls with them.
- Items go to pages. Actions (Buat klaim, Unduh) belong in the page header, not in the sidebar.
- Group items under short titles ("Menu", "Manajemen"). Put the daily work first and the admin pages last.
- Every top-level item has an icon, so the collapsed sidebar still works. Labels are one to three words in sentence case.
- A count badge shows work waiting: Error for counts that need action (FWA findings), Gray for plain totals. Never show 0; hide the badge instead.
- Use a sub-menu only for sections with several pages of the same kind (Rawat inap, Rawat jalan). One level only; deeper structure belongs on the page as tabs.
- Remember the collapsed or open choice per person, so the sidebar opens the way they left it.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Head | 80 high, like the page header bar. White logo 20 high on the left, 32 × 32 collapse button on the right: `gray-400` chevron, hover `gray-800` fill and `white` chevron. |
| 2 | Group title | Text xs / Semibold `gray-400`, padding `0 10`, 8 above its items. Groups sit 24 apart. |
| 3 | Item (current page) | 44 high, radius 8, padding `0 10`, gap 12. 20 px icon and Text md / Medium label, both `gray-400`. Current page: `gray-800` fill, `white` label (Semibold) and icon. |
| 4 | Parent item | An item with a count badge (Badge sm) and a 20 px chevron that turns up when the sub-menu is open. |
| 5 | Sub-item | 40 high, Text sm, no icon; the label lines up with the parent's label (padding-start 42). |
| 6 | Profile | Avatar label group md: `white` name, `gray-400` email, `selector` icon. Opens the account menu above it. 16 above, a 1 px `gray-800` divider. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Collapsed | False (280), True (72) | `data-collapsed` on `.sb-sidebar`; the collapse button has `aria-expanded` |
| Current page | True, False | `aria-current="page"` on the item |
| Count badge | True, False | `<span class="sb-badge" data-size="sm">` after the label |
| Sub-menu | Open, Folded | The parent is a `<button>` with `aria-expanded` and `aria-controls`; the `ul.sb-side-sub` is `hidden` when folded |
| State | Default, Hover, Focused | `:hover`, `:focus-visible`. Static mockups only: `data-state="hover"` or `"focus"` |

### Types

#### Open

280 wide. The default on screens of 1440 and up.

#### Collapsed

72 wide: icons only, centred, with a light Tooltip on the right on hover and focus. Group titles turn into a 1 px `gray-800` divider, counts and the name stay for screen readers. A parent holding the current page takes the `gray-800` fill. Clicking a parent opens the sidebar with its sub-menu.

### States

| State | Fill | Label | Icon |
| --- | --- | --- | --- |
| Default | none | `gray-400`, Medium | `gray-400` |
| Hover | `gray-800` | `gray-300` | `gray-300` |
| Focused | none, 2 px `brand-400` outline inside | `gray-400` | `gray-400` |
| Current page | `gray-800` | `white`, Semibold | `white` |
| Folded parent of the current page | none (collapsed: `gray-800`) | `white` | `white` |

> **Note:** The focus outline is `brand-400`, not the usual `brand-600`: `brand-600` reaches only 3.51:1 on `gray-900`, `brand-400` 6.76:1.

### Account menu

The profile is a Dropdown menu trigger. The menu opens above the profile, left-aligned (to the right when collapsed). The last group is Keluar, after a divider.

### Do and don't

**Do:** The current page as a filled item with a white label.

```html
<div class="side-tile"><ul class="sb-side-list"><li><a class="sb-side-item" href="#/sidebar" aria-current="page"><svg aria-hidden="true"><!-- file-text --></svg><span class="sb-side-label">Klaim</span></a></li></ul></div>
```

**Don't:** Brand-coloured text only. It reads as a link and the item has no shape.

```html
<div class="side-tile"><ul class="sb-side-list"><li><a class="sb-side-item" href="#/sidebar" aria-current="page" style="background: none; color: var(--brand-400)"><svg aria-hidden="true"><!-- file-text --></svg><span class="sb-side-label">Klaim</span></a></li></ul></div>
```

**Do:** A count only where work is waiting.

```html
<div class="side-tile"><ul class="sb-side-list"><li><a class="sb-side-item" href="#/sidebar"><svg aria-hidden="true"><!-- signal --></svg><span class="sb-side-label">Analisis FWA</span><span class="sb-badge" data-size="sm" data-color="error">6</span></a></li></ul></div>
```

**Don't:** A badge with 0. Hide it instead.

```html
<div class="side-tile"><ul class="sb-side-list"><li><a class="sb-side-item" href="#/sidebar"><svg aria-hidden="true"><!-- signal --></svg><span class="sb-side-label">Analisis FWA</span><span class="sb-badge" data-size="sm" data-color="gray">0</span></a></li></ul></div>
```

### Accessibility

- The sidebar is a `<nav aria-label="Menu utama">`. Each group is a `<ul>` labelled by its title (`aria-labelledby`).
- Items are links (`<a href>`); the current page has `aria-current="page"`. Parents with a sub-menu are `<button>`s with `aria-expanded` and `aria-controls`.
- The collapse button keeps one label ("Sidebar") and reports its state with `aria-expanded`.
- Collapsed, the labels, group titles and counts are visually hidden but still read. The tooltips repeat the label, so they are `aria-hidden`.
- The profile opens a WAI-ARIA menu: Enter, Space or ↓ opens it, Esc closes it back to the profile.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Label `gray-400` | `gray-900` | 6.89:1 | Passes |
| Hover label `gray-300` | `gray-800` | 9.97:1 | Passes |
| Current label `white` | `gray-800` | 14.70:1 | Passes |
| Group title `gray-400` | `gray-900` | 6.89:1 | Passes |
| Focus outline `brand-400` | `gray-900` | 6.76:1 | Passes (3:1 needed) |

### Code

Load `tokens.css`, `badge.css`, `tooltip.css`, `avatar.css` and `dropdown-menu.css`, then `sidebar.css`. Add `sidebar.js`, `dropdown-menu.js` and `tooltip.js`.

`sidebar.css`

```css
/* Sidebar, Codemasters Design System
   Needs tokens.css, badge.css, tooltip.css, avatar.css and dropdown-menu.css for the parts inside;
   sidebar.js for collapsing and sub-menus, dropdown-menu.js for the account menu.

   <nav class="sb-sidebar" aria-label="Menu utama">
     <div class="sb-side-head">
       <img class="sb-side-logo" src="sembuh-logo-white.png" alt="Sembuh AI">
       <button class="sb-side-toggle" type="button" aria-label="Sidebar" aria-expanded="true">…chevron-left…</button>
     </div>
     <div class="sb-side-body">
       <div class="sb-side-group">
         <p class="sb-side-title" id="nav-menu">Menu</p>
         <ul class="sb-side-list" aria-labelledby="nav-menu">
           <li class="sb-tooltip-wrap">
             <a class="sb-side-item" href="/dashboard" aria-current="page">…icon…<span class="sb-side-label">Dashboard</span></a>
             <span class="sb-tooltip" data-theme="light" data-arrow="left" aria-hidden="true"><span class="sb-tooltip-title">Dashboard</span></span>
           </li>
           <li class="sb-tooltip-wrap">
             <button class="sb-side-item" type="button" aria-expanded="true" aria-controls="nav-klaim">…icon…<span class="sb-side-label">Klaim</span>
               <span class="sb-badge" data-size="sm" data-color="gray">12</span>…chevron-down…</button>
             <span class="sb-tooltip" …>…</span>
             <ul class="sb-side-sub" id="nav-klaim"><li><a class="sb-side-item" href="…"><span class="sb-side-label">Rawat inap</span></a></li>…</ul>
           </li>
         </ul>
       </div>
     </div>
     <div class="sb-side-foot">…Avatar label group as a Dropdown menu trigger…</div>
   </nav>

   data-collapsed   on .sb-sidebar: 72 wide, icons only; labels stay for screen readers and show as tooltips
   aria-current     "page" on the item of the current page
   aria-expanded    on the collapse button and on every parent item; folded sub-menus are hidden
   data-state       hover | focus on an item. Static mockups and docs only. */

.sb-sidebar {
  box-sizing: border-box; display: flex; flex-direction: column; flex: none;
  width: 280px; height: 100%; padding: 0 16px 16px;
  background: var(--gray-900); font-family: var(--font);
  transition: width 200ms var(--ease);
}
.sb-sidebar[data-collapsed] { width: 72px; }

/* Head: 80 high, the height of the page header bar, so both bottoms line up. */
.sb-side-head { display: flex; flex: none; align-items: center; justify-content: space-between; gap: 8px; height: 80px; padding-inline-start: 10px; }
.sb-side-logo { display: block; width: auto; height: 20px; }
.sb-side-toggle {
  display: inline-grid; place-items: center; flex: none; width: 32px; height: 32px; margin: 0; padding: 0;
  border: 0; border-radius: var(--radius-md); background: none; color: var(--gray-400); cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-side-toggle > svg { width: 20px; height: 20px; transition: rotate 200ms var(--ease); }
.sb-side-toggle:hover { background: var(--gray-800); color: var(--white); }
.sb-side-toggle:focus-visible { outline: 2px solid var(--brand-400); outline-offset: 0; }

/* Body: groups 24 apart; scrolls when the menu is taller than the screen. */
.sb-side-body { display: grid; flex: 1; align-content: start; gap: 24px; min-height: 0; overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--gray-700) transparent; }
.sb-side-title { margin: 0 0 8px; padding-inline: 10px; font: 600 var(--text-xs) var(--font); color: var(--gray-400); }
.sb-side-list, .sb-side-sub { display: grid; gap: 4px; margin: 0; padding: 0; list-style: none; }
.sb-side-list > li { display: block; } /* each li is a .sb-tooltip-wrap, for the collapsed tooltip */
.sb-side-sub { padding-top: 4px; }
.sb-side-sub[hidden] { display: none; }

/* Item: 44 high, radius 8. Icon and label share one colour in every state. Padding 10 puts the 20 px icon in the middle of the 72 px collapsed sidebar, so it never moves. */
.sb-side-item {
  box-sizing: border-box; display: flex; align-items: center; gap: 12px;
  width: 100%; height: 44px; margin: 0; padding: 0 10px; border: 0; border-radius: var(--radius-md);
  background: none; font: 500 var(--text-md) var(--font); color: var(--gray-400); text-align: start; text-decoration: none; white-space: nowrap;
  cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-side-item > svg { width: 20px; height: 20px; flex: none; }
.sb-side-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.sb-side-item > .sb-badge { flex: none; }
.sb-side-item > .sb-side-chevron { transition: rotate 150ms var(--ease); }
.sb-side-item[aria-expanded="true"] > .sb-side-chevron { rotate: 180deg; }
.sb-side-item:is(:hover, [data-state="hover"]) { background: var(--gray-800); color: var(--gray-300); }
.sb-side-item:is(:focus-visible, [data-state="focus"]) { outline: 2px solid var(--brand-400); outline-offset: -2px; }
/* Current page: gray-800 fill, white label and icon, Semibold. */
.sb-side-item[aria-current="page"] { background: var(--gray-800); color: var(--white); font-weight: 600; }
/* A parent whose sub-menu holds the current page keeps a white label and icon while folded. */
.sb-side-item[aria-expanded="false"]:has(+ .sb-tooltip + .sb-side-sub [aria-current="page"]) { color: var(--white); }
/* Sub-item: 40 high, Text sm, label in line with the parent's label (10 + 20 icon + 12 gap). */
.sb-side-sub .sb-side-item { height: 40px; padding-inline-start: 42px; font-size: var(--text-sm); }

/* Foot: the signed-in person, above a gray-800 divider. Opens the account menu upwards. */
.sb-side-foot { flex: none; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--gray-800); }
.sb-side-foot > .sb-menu-wrap { display: flex; }
.sb-side-profile { display: flex; width: 100%; }
.sb-side-profile > .sb-avatar-label-text { flex: 1; }
.sb-side-profile > svg { width: 20px; height: 20px; flex: none; color: var(--gray-400); }
.sb-side-foot .sb-side-profile .sb-avatar-name, .sb-side-foot .sb-side-profile:is(:hover, :focus-visible, [data-state]) .sb-avatar-name { color: var(--white); }
.sb-side-foot .sb-side-profile .sb-avatar-sub { color: var(--gray-400); }
/* On gray-900 the avatar rings are gray-700 (hover, open) and brand-400 (focus) instead of gray-100 and focus-ring. */
.sb-side-foot .sb-side-profile:is(:hover, [data-state="hover"], [aria-expanded="true"]) .sb-avatar { box-shadow: 0 0 0 4px var(--gray-700); }
.sb-side-foot .sb-side-profile:is(:focus-visible, [data-state="focus"]) .sb-avatar { box-shadow: 0 0 0 2px var(--gray-900), 0 0 0 4px var(--brand-400); }
.sb-side-foot .sb-menu { top: auto; bottom: calc(100% + 8px); inset-inline: 0 auto; }

/* Tooltips show only while collapsed, 10 px outside the sidebar's edge (16 padding + 10). */
.sb-sidebar .sb-tooltip { --tip-gap: 26px; }
.sb-sidebar:not([data-collapsed]) .sb-tooltip { display: none; }

/* Collapsed: 72 wide. Labels, group titles, counts and the name stay for screen readers; a divider replaces each later title. */
.sb-sidebar[data-collapsed] .sb-side-head { justify-content: center; padding: 0; }
.sb-sidebar[data-collapsed] .sb-side-logo,
.sb-sidebar[data-collapsed] .sb-side-chevron,
.sb-sidebar[data-collapsed] .sb-side-profile > svg,
.sb-sidebar[data-collapsed] .sb-side-sub { display: none; }
.sb-sidebar[data-collapsed] .sb-side-toggle > svg { rotate: 180deg; }
.sb-sidebar[data-collapsed] :is(.sb-side-label, .sb-side-title, .sb-side-item > .sb-badge, .sb-avatar-label-text) {
  position: absolute; width: 1px; height: 1px; margin: 0; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap;
}
.sb-sidebar[data-collapsed] .sb-side-body { gap: 16px; overflow: visible; } /* tooltips reach out to the right */
.sb-sidebar[data-collapsed] .sb-side-group + .sb-side-group { padding-top: 16px; border-top: 1px solid var(--gray-800); }
.sb-sidebar[data-collapsed] .sb-side-item:has(+ .sb-tooltip + .sb-side-sub [aria-current="page"]) { background: var(--gray-800); }
.sb-sidebar[data-collapsed] .sb-side-foot .sb-menu { bottom: 0; inset-inline-start: calc(100% + 8px); }

@media (prefers-reduced-motion: reduce) {
  .sb-sidebar, .sb-side-toggle, .sb-side-toggle > svg, .sb-side-item, .sb-side-item > .sb-side-chevron { transition: none; }
}
```

#### Script

`sidebar.js`

```js
// Sidebar: the collapse button and sub-menus. The account menu uses dropdown-menu.js, tooltips use tooltip.js.
function sidebarClick(e) {
  const btn = e.target.closest?.('.sb-side-toggle, .sb-side-item[aria-expanded]');
  if (!btn) return;
  const side = btn.closest('.sb-sidebar'), toggle = side.querySelector('.sb-side-toggle');
  const collapsed = side.hasAttribute('data-collapsed');
  if (btn === toggle) {
    side.toggleAttribute('data-collapsed', !collapsed);
    toggle.setAttribute('aria-expanded', String(collapsed));
    return;
  }
  const open = collapsed || btn.getAttribute('aria-expanded') !== 'true';
  if (collapsed) {
    side.removeAttribute('data-collapsed');
    toggle.setAttribute('aria-expanded', 'true');
  }
  btn.setAttribute('aria-expanded', String(open));
  document.getElementById(btn.getAttribute('aria-controls')).hidden = !open;
}
document.addEventListener('click', sidebarClick);
```

## Slider

Picks a value or a range by dragging, when the position matters more than the exact number: a confidence threshold, an amount range.

### Usage

- Use a slider when the position matters more than the exact number: a confidence threshold filter, an amount range.
- For exact values pair it with an Input field, or use the input alone.
- Labels show the value in the unit of the data ("Rp 5.000.000", "80%"), not always %.
- Two handles pick a range; they never cross and stay at least one step apart.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Track | 8 high, full width (320 in examples), `gray-200`, radius 4 |
| 2 | Selected range | `brand-600`, radius 4, between the handles (from 0 for a single slider) |
| 3 | Handle | 24 px circle, `white` raised (`raised-sheen-light`), 1 px `brand-600` border, `shadow-md`, centred on the value |
| 4 | Label | Optional. Bottom: Text md / Medium `gray-900`, 8 below the handle. Floating: Light tooltip with an arrow, 4 from the handle |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Left control | 0 % to 75 % | First `<input type="range">` value; leave it out for a single slider |
| Right control | 25 % to 100 % | Last `<input type="range">` value |
| Label | False, Bottom, Top floating, Bottom floating | `data-label` + one `<output class="sb-slider-value">` per handle |
| State | None in the component set; specified in DESIGN.md (Default, Hover, Focused, Disabled) | `:hover`, `:focus-visible` / `:active`, `disabled`. Static mockups only: `data-state` on the input |

### Examples

#### Single value

A threshold filter: show claims with an FWA score of at least this value.

```html
<div class="sb-field">
  <span class="sb-field-label" id="ex-single-label">Skor FWA minimum</span>
  <div class="sb-slider" data-label="bottom" data-suffix="%" role="group" aria-labelledby="ex-single-label" style="--lo: 0%; --hi: 70%" id="ex-single">
    <div class="sb-slider-rail">
      <input class="sb-slider-input" type="range" min="0" max="100" step="5" value="70" aria-label="Skor FWA minimum" aria-valuetext="70%">
      <output class="sb-slider-value" data-for="hi">70%</output>
    </div>
  </div>
</div>
```

#### Range in Rupiah

The step is Rp 500.000; labels and `aria-valuetext` use the Rupiah format.

```html
<div class="sb-field">
  <span class="sb-field-label" id="ex-range-label">Nominal klaim</span>
  <div class="sb-slider" data-label="bottom" data-prefix="Rp " role="group" aria-labelledby="ex-range-label" style="--lo: 10%; --hi: 40%" id="ex-range">
    <div class="sb-slider-rail">
      <input class="sb-slider-input" type="range" min="0" max="50000000" step="500000" value="5000000" aria-label="Nominal minimum" aria-valuetext="Rp 5.000.000">
      <input class="sb-slider-input" type="range" min="0" max="50000000" step="500000" value="20000000" aria-label="Nominal maksimum" aria-valuetext="Rp 20.000.000">
      <output class="sb-slider-value" data-for="lo">Rp 5.000.000</output>
      <output class="sb-slider-value" data-for="hi">Rp 20.000.000</output>
    </div>
  </div>
</div>
```

### Labels

| Label | Spec |
| --- | --- |
| False | Handles only. Show the values elsewhere, e.g. in inputs next to the slider. |
| Bottom | Text md / Medium `gray-900`, centred under each handle, 8 below the handle (16 below the track). The slider is 56 high. |
| Top floating / Bottom floating | Light tooltip (white, padding `8 12`, Text xs / Semibold `gray-700`, `shadow-lg`) with a 16 × 6 arrow pointing at the handle, 4 away. Centred above / below each handle. The slider reserves 44 px for it. |

### States

| State (handle) | Spec |
| --- | --- |
| Hover | `brand-50` fill |
| Focused / dragging | `0 0 0 4px focus-ring` ring + `shadow-md` |
| Disabled | Default at 50 % opacity; handle flat, no shadow |

### Keyboard

| Key | Action |
| --- | --- |
| ← → (↓ ↑) | One step |
| Page Up / Page Down | A big jump: 10 % of the range in Chrome (checked); other browsers set their own size |
| Home / End | Minimum / maximum (a range handle stops one step from the other) |
| Tab | Moves between the handles |

All of this comes from the native range input; `slider.js` only stops the handles from crossing. If Page Up / Down must be exactly 10 % everywhere, add a keydown handler for those two keys.

### Do and don't

**Do:** Labels in the unit of the data.

```html
<div class="sb-slider" data-label="bottom" data-prefix="Rp " role="group" aria-label="Skor FWA" style="--lo: 10%; --hi: 40%" id="dd-sl1">
  <div class="sb-slider-rail">
    <input class="sb-slider-input" type="range" min="0" max="50000000" step="500000" value="5000000" aria-label="Nominal minimum" aria-valuetext="Rp 5.000.000">
    <input class="sb-slider-input" type="range" min="0" max="50000000" step="500000" value="20000000" aria-label="Nominal maksimum" aria-valuetext="Rp 20.000.000">
    <output class="sb-slider-value" data-for="lo">Rp 5.000.000</output>
    <output class="sb-slider-value" data-for="hi">Rp 20.000.000</output>
  </div>
</div>
```

**Don't:** A Rupiah range shown as 10 % – 40 %. The user has to do the maths.

```html
<div class="sb-slider" data-label="bottom" data-suffix="%" role="group" aria-label="Skor FWA" style="--lo: 10%; --hi: 40%" id="dd-sl2">
  <div class="sb-slider-rail">
    <input class="sb-slider-input" type="range" min="0" max="100" step="1" value="10" aria-label="Minimum" aria-valuetext="10%">
    <input class="sb-slider-input" type="range" min="0" max="100" step="1" value="40" aria-label="Maksimum" aria-valuetext="40%">
    <output class="sb-slider-value" data-for="lo">10%</output>
    <output class="sb-slider-value" data-for="hi">40%</output>
  </div>
</div>
```

### Accessibility

- Each handle is a native range input, so it has `role="slider"` with `aria-valuenow`, `aria-valuemin` and `aria-valuemax` built in.
- Give every handle its own `aria-label` ("Nominal minimum", "Nominal maksimum") and wrap them in `role="group"` labelled by the visible title.
- `aria-valuetext` carries the formatted value ("Rp 5.000.000"), so screen readers do not read a bare number.
- The track and handle are 24 px high, the minimum target size.

| Pair | Ratio | Needed | Result |
| --- | --- | --- | --- |
| Range `brand-600` on track `gray-200` | 4.28:1 | 3:1 | Passes |
| Handle border `brand-600` on `white` | 5.06:1 | 3:1 | Passes |
| Track `gray-200` on `white` | 1.18:1 | 3:1 | Below, but the handles and range carry the value |
| Bottom label `gray-900` on `white` | 17.75:1 | 4.5:1 | Passes |

### Code

Load `tokens.css`, `slider.css` and `slider.js`. Labelled sliders in a form also use `input-field.css` for the title.

`slider.css`

```css
/* Slider, Codemasters Design System
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
.sb-slider-rail::before { left: 0; right: 0; background: var(--bg-quaternary); }
.sb-slider-rail::after { left: var(--lo); right: calc(100% - var(--hi)); background: var(--brand-600); }

/* Inputs: 24 px wider than the track so each handle centres on 0 % and 100 %. Only the handle takes the pointer. */
.sb-slider-input {
  --th-bg: var(--bg-primary); --th-bd: var(--brand-600); --th-shadow: var(--shadow-md); --th-sheen: var(--raised-sheen-light);
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
.sb-slider-input:is(:hover, [data-state="hover"]) { --th-bg: var(--bg-brand-subtle); }
.sb-slider-input:is(:focus-visible, :active, [data-state="focus"]) { --th-shadow: var(--shadow-md), 0 0 0 4px var(--focus-ring); }
.sb-slider-input:active::-webkit-slider-thumb { cursor: grabbing; }
.sb-slider-input:active::-moz-range-thumb { cursor: grabbing; }
.sb-slider:has(:disabled) { opacity: .5; } /* disabled: the default look at 50 % opacity, flat handle */
.sb-slider-input:disabled { --th-shadow: none; --th-sheen: none; }
.sb-slider-input:disabled::-webkit-slider-thumb { cursor: not-allowed; }
.sb-slider-input:disabled::-moz-range-thumb { cursor: not-allowed; }

/* Labels: centred on each handle. Bottom: Text md / Medium gray-900, 8 below the handle.
   Floating: a Light tooltip (Tooltip, Light theme) with a 16 x 6 arrow pointing at the handle, 4 away. */
.sb-slider-value { --pos: var(--hi); position: absolute; left: var(--pos); translate: -50% 0; font: 500 var(--text-md) var(--font); color: var(--text-primary); white-space: nowrap; pointer-events: none; }
.sb-slider-value[data-for="lo"] { --pos: var(--lo); }
.sb-slider[data-label="bottom"] .sb-slider-value { top: 32px; }
.sb-slider[data-label$="floating"] .sb-slider-value { padding: 8px 12px; border-radius: var(--radius-md); background: var(--bg-primary); box-shadow: var(--shadow-lg); font: 600 var(--text-xs) var(--font); color: var(--text-secondary); }
.sb-slider[data-label$="floating"] .sb-slider-value::after { content: ''; position: absolute; left: 50%; translate: -50% 0; width: 16px; height: 6px; background: var(--bg-primary); }
.sb-slider[data-label="top-floating"] .sb-slider-value { bottom: calc(100% + 10px); }
.sb-slider[data-label="top-floating"] .sb-slider-value::after { top: 100%; clip-path: polygon(0 0, 100% 0, 50% 100%); }
.sb-slider[data-label="bottom-floating"] .sb-slider-value { top: calc(100% + 10px); }
.sb-slider[data-label="bottom-floating"] .sb-slider-value::after { bottom: 100%; clip-path: polygon(50% 0, 100% 100%, 0 100%); }

@media (prefers-reduced-motion: reduce) {
  .sb-slider-input::-webkit-slider-thumb { transition: none; }
  .sb-slider-input::-moz-range-thumb { transition: none; }
}
```

#### Script

`slider.js`

```js
// Slider: keeps range handles apart and mirrors values into the fill, labels and aria-valuetext.
// Labels use the unit of the data: data-prefix="Rp " or data-suffix="%" on .sb-slider.
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
document.addEventListener('input', sliderInput);
```

## Social button

Signs the user in with an account on another platform. For third-party sign-in only.

### Usage

- Use social buttons only to sign in with a third-party account. For any other action use Button.
- Pick one theme per screen. Never mix themes in one group.
- Order in a group: Google, Facebook, Apple.
- Platform fills are the only colours allowed outside the palette, because they belong to the platform.
- Social buttons have no Disabled state.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | One size, matching Button `lg`: 44 high, padding `10 16`, radius 8, `shadow-xs`. `white` with a 1 px `gray-300` border; the Brand theme fills it with the platform colour. Logo only: 44 × 44, padding 10. |
| 2 | Logo | 24 px, gap 12. Colour logo; white on a Brand fill; `gray-400` in the Color theme. |
| 3 | Label | Text md / Semibold, `gray-700` (white on a Brand fill). "Masuk dengan …" plus the platform name. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Social | Google, Facebook, Apple, Twitter, Figma, Dribbble | `data-social="google"` |
| Supporting text | True (logo + "Masuk dengan …"), False (logo only) | Label text, or `data-icon="only"` with `aria-label` |
| Theme | Brand, Color with brand, Color | `data-theme="brand"`, `"color-brand"`, `"color"` |
| State | Default, Hover, Focused | `:hover`, `:focus-visible`. Static mockups only: `data-state` |

### Themes

| Theme | Look | Hover |
| --- | --- | --- |
| Brand | Fill in the platform colour, white logo and text. Google is the exception: white, `gray-300` border, colour logo, `gray-700` text. | Darker platform colour |
| Color with brand | White, `gray-300` border, colour logo, `gray-700` text. | `gray-50` fill |
| Color | Same as Color with brand, with a `gray-400` logo. | `gray-50` fill |

#### Platform colours

| Platform | Fill | Hover |
| --- | --- | --- |
| Facebook | `#1877F2` | `#0C63D4` |
| Twitter | `#1DA1F2` | `#0C8BD9` |
| Dribbble | `#EA4C89` | `#E62872` |
| Apple, Figma | `#000000` | `#000000` |
| Google | White (Brand theme exception) | `gray-50` |

### States

Focused is `shadow-xs` plus a 4 px `focus-ring` ring in every theme. There is no Disabled state.

### Groups

A 360 px column of full-width buttons, or a row of three equal icon buttons (3 × 112). Gap 12 in both.

```html
<div class="sb-social-group">
  <button class="sb-social" type="button" data-social="google" data-theme="color-brand">
    <svg aria-hidden="true"><!-- google-logo --></svg>
    Masuk dengan Google
  </button>
  <button class="sb-social" type="button" data-social="facebook" data-theme="color-brand">
    <svg aria-hidden="true"><!-- facebook-logo --></svg>
    Masuk dengan Facebook
  </button>
  <button class="sb-social" type="button" data-social="apple" data-theme="color-brand">
    <svg aria-hidden="true"><!-- apple-logo --></svg>
    Masuk dengan Apple
  </button>
</div>
```

```html
<div class="sb-social-group" data-style="icons">
  <button class="sb-social" type="button" data-social="google" data-theme="color-brand" data-icon="only" aria-label="Masuk dengan Google">
    <svg aria-hidden="true"><!-- google-logo --></svg>
  </button>
  <button class="sb-social" type="button" data-social="facebook" data-theme="color-brand" data-icon="only" aria-label="Masuk dengan Facebook">
    <svg aria-hidden="true"><!-- facebook-logo --></svg>
  </button>
  <button class="sb-social" type="button" data-social="apple" data-theme="color-brand" data-icon="only" aria-label="Masuk dengan Apple">
    <svg aria-hidden="true"><!-- apple-logo --></svg>
  </button>
</div>
```

### Do and don't

**Do:** One theme for the whole group.

```html
<div class="sb-social-group" data-style="icons">
  <button class="sb-social" type="button" data-social="google" data-theme="brand" data-icon="only" aria-label="Masuk dengan Google">
    <svg aria-hidden="true"><!-- google-logo --></svg>
  </button>
  <button class="sb-social" type="button" data-social="facebook" data-theme="brand" data-icon="only" aria-label="Masuk dengan Facebook">
    <svg aria-hidden="true"><!-- facebook-logo --></svg>
  </button>
  <button class="sb-social" type="button" data-social="apple" data-theme="brand" data-icon="only" aria-label="Masuk dengan Apple">
    <svg aria-hidden="true"><!-- apple-logo --></svg>
  </button>
</div>
```

**Don't:** Three themes in one group.

```html
<div class="sb-social-group" data-style="icons">
  <button class="sb-social" type="button" data-social="google" data-theme="color" data-icon="only" aria-label="Masuk dengan Google">
    <svg aria-hidden="true"><!-- google-logo --></svg>
  </button>
  <button class="sb-social" type="button" data-social="facebook" data-theme="brand" data-icon="only" aria-label="Masuk dengan Facebook">
    <svg aria-hidden="true"><!-- facebook-logo --></svg>
  </button>
  <button class="sb-social" type="button" data-social="apple" data-theme="color-brand" data-icon="only" aria-label="Masuk dengan Apple">
    <svg aria-hidden="true"><!-- apple-logo --></svg>
  </button>
</div>
```

**Do:** Sign in with an existing account.

```html
<button class="sb-social" type="button" data-social="google" data-theme="color-brand">
  <svg aria-hidden="true"><!-- google-logo --></svg>
  Masuk dengan Google
</button>
```

**Don't:** Sharing or following is not sign-in. Use Button.

```html
<button class="sb-social" type="button" data-social="facebook" data-theme="brand">
  <svg aria-hidden="true"><!-- facebook-logo --></svg>
  Bagikan ke Facebook
</button>
```

### Accessibility

- The logo `<svg>` is `aria-hidden="true"`; the label carries the name.
- Logo-only buttons need `aria-label="Masuk dengan Google"`.
- Never remove the focus ring.

| Variant | Text on fill | Ratio | AA |
| --- | --- | --- | --- |
| Color with brand, Color, Google | `gray-700` on `white` | 10.46:1 | Passes |
| Brand, Facebook | `white` on `#1877F2` | 4.23:1 | **Fails** |
| Brand, Dribbble | `white` on `#EA4C89` | 3.56:1 | **Fails** |
| Brand, Twitter | `white` on `#1DA1F2` | 2.83:1 | **Fails** |

> **Warning:** Brand theme text on Facebook, Dribbble and Twitter fills is below AA. The fills belong to the platforms, so they cannot change. Prefer Color with brand where the label must meet AA.

### Code

Load `tokens.css`, then `social-button.css`. The logos are below.

`social-button.css`

```css
/* Social button, Codemasters Design System
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
  --sc-brand: var(--text-secondary); --sc-brand-hover: var(--text-secondary);
  --sc-bg: var(--bg-primary); --sc-border: var(--border-primary); --sc-fg: var(--text-secondary); --sc-logo: var(--sc-brand);
  --sc-bg-hover: var(--bg-secondary); --sc-border-hover: var(--border-primary);
  box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; gap: 12px;
  height: 44px; padding: 0 16px;
  font: 600 var(--text-md) var(--font); white-space: nowrap; text-decoration: none;
  color: var(--sc-fg); background: var(--sc-sheen, var(--raised-sheen-light)) var(--sc-bg);
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
  --sc-sheen: var(--raised-sheen); box-shadow: var(--raised-highlight), var(--shadow-xs);
}
/* Color with brand (default): white, colour logo. Color: white, gray logo. */
.sb-social[data-theme="color"] { --sc-logo: var(--fg-quaternary); }
.sb-social[data-theme="color"] > svg * { fill: currentColor; }

/* States */
.sb-social:hover, .sb-social[data-state="hover"] { background-color: var(--sc-bg-hover); border-color: var(--sc-border-hover); }
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
```

#### Logos

`social-logos.html`

```html
<!-- Google -->
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill="#4285F4" d="M23.766 12.277c0-.816-.066-1.636-.207-2.438H12.24v4.621h6.482a5.554 5.554 0 0 1-2.399 3.647v2.998h3.867c2.271-2.09 3.576-5.177 3.576-8.828Z"/><path fill="#34A853" d="M12.24 24c3.237 0 5.966-1.062 7.955-2.896l-3.867-2.998c-1.076.731-2.465 1.146-4.083 1.146-3.131 0-5.786-2.112-6.738-4.952H1.517v3.091A12.002 12.002 0 0 0 12.24 24Z"/><path fill="#FBBC04" d="M5.503 14.3a7.188 7.188 0 0 1 0-4.594V6.615H1.517a12.01 12.01 0 0 0 0 10.776L5.503 14.3Z"/><path fill="#EA4335" d="M12.24 4.75a6.52 6.52 0 0 1 4.603 1.799l3.427-3.426A11.533 11.533 0 0 0 12.24 0 11.998 11.998 0 0 0 1.517 6.615l3.986 3.091C6.45 6.862 9.109 4.75 12.24 4.75Z"/></svg>

<!-- Facebook -->
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>

<!-- Apple -->
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>

<!-- Twitter -->
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"/></svg>

<!-- Figma -->
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill="#1ABCFE" d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"/><path fill="#0ACF83" d="M4 20a4 4 0 0 1 4-4h4v4a4 4 0 1 1-8 0Z"/><path fill="#FF7262" d="M12 0v8h4a4 4 0 1 0 0-8h-4Z"/><path fill="#F24E1E" d="M4 4a4 4 0 0 0 4 4h4V0H8a4 4 0 0 0-4 4Z"/><path fill="#A259FF" d="M4 12a4 4 0 0 0 4 4h4V8H8a4 4 0 0 0-4 4Z"/></svg>

<!-- Dribbble -->
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>
```

## Table

Rows of records: claims, invoice items, members. A gray-50 header band, gray-200 row dividers, right-aligned tabular numbers, status pills, sortable columns, row selection, grouped rows and nested rows that fold.

### Usage

- Use a table when people compare or scan many records with the same fields. For one record, use a Card with summary rows.
- A table sits in a Card. Pagination (count and pages) sits under it; filters and search sit above, outside the table.
- Numbers, amounts and dates align right with tabular figures, so digits line up. Text aligns left.
- Money is in full Rupiah. Status is a Badge sm, never coloured text.
- Every cell shows a value. A missing value is a `gray-400` "—", never a blank cell.
- The ID column links to the record. Row actions go in a "⋯" Dropdown menu in the last column.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Header | `gray-50` band with radius 8 at both ends, padding `12 16` (sm `8 12`), Text sm / Regular `gray-500`. No divider under it. |
| 2 | Sortable header | The label is the button. Idle: 16 px two-way arrow `gray-400`. Sorted: label `gray-700`, arrow `brand-600` pointing the sort direction; `aria-sort` on the `th`. One sorted column at a time. |
| 3 | Row | Padding 16 (sm `10 12`), 1 px `gray-200` divider. Hover `gray-50`, selected `brand-50`. Text sm `gray-900`. |
| 4 | ID link | Text sm / Medium `brand-700`, underlined; hover `brand-800`. |
| 5 | Number cell | Right-aligned, tabular figures. Full Rupiah. |
| 6 | Status | Badge sm in the status colour (see Badge). |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Size | md, sm | Omit, or `data-size="sm"` on the table for dense screens |
| Number column | True, False | `data-num` on the `th` and each `td` |
| Sortable | True, False | `<button class="sb-table-sort">` in the `th`; `aria-sort` when sorted; `data-value` on cells that sort by number or date |
| Selection | True, False | A first column of Checkboxes with `data-select-all` / `data-select-item` |
| Tone | Error, Warning | `data-tone` on a body row |
| Sticky first column | True, False | `data-sticky` on the table |
| Nested rows | 1, 2, 3 | `data-level` on every body row; a row with children starts with a `<button class="sb-table-fold">`; folded rows are `hidden` |

### Types

#### Default

```html
<div class="sb-table-wrap">
  <table class="sb-table">
    <thead><tr><th scope="col"><button class="sb-table-sort" type="button">ID Klaim<svg class="is-idle" aria-hidden="true"><!-- selector --></svg><svg class="is-dir" aria-hidden="true"><!-- arrow-down --></svg></button></th><th scope="col"><button class="sb-table-sort" type="button">Peserta<svg class="is-idle" aria-hidden="true"><!-- selector --></svg><svg class="is-dir" aria-hidden="true"><!-- arrow-down --></svg></button></th><th scope="col">Rumah Sakit</th><th scope="col" data-num aria-sort="descending"><button class="sb-table-sort" type="button">Tanggal<svg class="is-idle" aria-hidden="true"><!-- selector --></svg><svg class="is-dir" aria-hidden="true"><!-- arrow-down --></svg></button></th><th scope="col" data-num><button class="sb-table-sort" type="button">Tagihan<svg class="is-idle" aria-hidden="true"><!-- selector --></svg><svg class="is-dir" aria-hidden="true"><!-- arrow-down --></svg></button></th><th scope="col">Status</th></tr></thead>
    <tbody>
      <tr><td><a class="sb-table-link" href="#/table">KLM-0241</a></td><td>Budi Santoso</td><td>RS Medika Utama</td><td data-num data-value="20261002">2 Okt 2026</td><td data-num data-value="12450000">Rp 12.450.000</td><td><span class="sb-badge" data-size="sm" data-color="success">Disetujui: Sembuh</span></td></tr>
      <tr><td><a class="sb-table-link" href="#/table">KLM-0238</a></td><td>Siti Rahma</td><td>RS Harapan Kita</td><td data-num data-value="20261001">1 Okt 2026</td><td data-num data-value="3275000">Rp 3.275.000</td><td><span class="sb-badge" data-size="sm" data-color="blue">Sedang Ditinjau</span></td></tr>
      <tr><td><a class="sb-table-link" href="#/table">KLM-0236</a></td><td>Andi Wijaya</td><td>Klinik Sehat Sentosa</td><td data-num data-value="20260930">30 Sep 2026</td><td data-num data-value="875000">Rp 875.000</td><td><span class="sb-badge" data-size="sm" data-color="error">Ditolak</span></td></tr>
      <tr><td><a class="sb-table-link" href="#/table">KLM-0233</a></td><td>Maya Putri</td><td>RS Medika Utama</td><td data-num data-value="20260929">29 Sep 2026</td><td data-num data-value="21980000">Rp 21.980.000</td><td><span class="sb-badge" data-size="sm" data-color="orange">Perlu Revisi</span></td></tr>
      <tr><td><a class="sb-table-link" href="#/table">KLM-0230</a></td><td>Rizky Pratama</td><td>RS Bunda</td><td data-num data-value="20260928">28 Sep 2026</td><td data-num data-value="4610000">Rp 4.610.000</td><td><span class="sb-badge" data-size="sm" data-color="success">Disetujui: TPA</span></td></tr>
    </tbody>
  </table>
</div>
<div class="sb-table-foot"><nav class="sb-pagination" id="pg-6" aria-label="Halaman daftar klaim" data-page="1" data-total="128" data-size="5" data-noun="klaim">
<span class="sb-pagination-label" id="pg-6-l">Baris per halaman</span>
<div class="sb-dd sb-pagination-size">
  <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="pg-6-list" aria-labelledby="pg-6-l pg-6-v"><span class="sb-dd-value" id="pg-6-v"><span class="sb-dd-label">5</span></span><svg class="sb-dd-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>
  <div class="sb-dd-menu" id="pg-6-list" role="listbox" aria-labelledby="pg-6-l" hidden><div class="sb-dd-opt" id="pg-6-o0" role="option" aria-selected="true" data-value="5"><span class="sb-dd-main"><span class="sb-dd-label">5</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" id="pg-6-o1" role="option" aria-selected="false" data-value="10"><span class="sb-dd-main"><span class="sb-dd-label">10</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" id="pg-6-o2" role="option" aria-selected="false" data-value="25"><span class="sb-dd-main"><span class="sb-dd-label">25</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" id="pg-6-o3" role="option" aria-selected="false" data-value="50"><span class="sb-dd-main"><span class="sb-dd-label">50</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div></div>
</div>
<p class="sb-pagination-count" aria-live="polite">1–5 dari 128 klaim</p>
<div class="sb-pagination-steps"><button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="lg" data-icon="only" aria-label="Halaman sebelumnya" data-go="0" disabled><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg></button><button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="lg" data-icon="only" aria-label="Halaman berikutnya" data-go="2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button></div>
</nav></div>
```

#### With selection

A first column of Checkboxes sm. The header box selects all and turns indeterminate when only some rows are chosen. Selected rows are `brand-50`. Bulk actions appear above the table when something is selected.

#### Grouped

For invoices, FWA findings and benefits. A group row (chevron, number, name, total) folds its item rows; items are indented 32 on `gray-50`; the total row is `gray-100` with radius 8. Flagged items are `error-50` with `error-700` text, items to review `warning-50`.

#### Nested

For records that break down more than one level, such as claim, category and item. Every row has the same columns, and a parent row shows the sum of its children. Each level indents 28, so a child's chevron sits under its parent's label, up to 3 levels. A folded branch stays folded when its parent reopens. Use Grouped when there is only one level and a total row.

#### Amount and missing values

Converted currencies sit under the Rupiah amount in Text xs `gray-500`, separated by " | ". A value that does not exist yet is a `gray-400` "—" with an `aria-label`.

```html
<div class="sb-table-wrap">
  <table class="sb-table">
    <thead><tr><th scope="col">Item</th><th scope="col" data-num>Tagihan</th></tr></thead>
    <tbody>
      <tr><td>Rawat jalan, Singapura</td><td data-num>Rp 1.725.000<span class="sb-table-sub">SGD 145 | USD 108</span></td></tr>
      <tr><td>Kacamata</td><td data-num><span class="sb-table-empty" aria-label="Belum ada">—</span></td></tr>
    </tbody>
  </table>
</div>
```

### States

#### Rows

| State | Fill | Text |
| --- | --- | --- |
| Default | `white` | `gray-900` |
| Hover | `gray-50` | `gray-900` |
| Selected | `brand-50` | `gray-900` |
| Flagged (`data-tone="error"`) | `error-50` | `error-700` |
| Review (`data-tone="warning"`) | `warning-50` | `gray-900` |

#### Empty

Keep the header, so people see what would be there, and put the Card empty state in one full-width cell.

#### Wide tables

The table scrolls sideways inside its card. With `data-sticky` the first column (usually the ID; with selection, the checkbox and the ID) stays put. A 1 px `gray-200` edge appears once the table has scrolled, so a table at rest has no extra line.

### Do and don't

**Do:** Amounts right-aligned with tabular figures, in full Rupiah.

```html
<table class="sb-table" data-size="sm"><thead><tr><th scope="col">Item</th><th scope="col" data-num>Tagihan</th></tr></thead><tbody><tr><td>Kamar</td><td data-num>Rp 4.500.000</td></tr><tr><td>Obat</td><td data-num>Rp 875.000</td></tr></tbody></table>
```

**Don't:** Left-aligned, abbreviated amounts. Digits do not line up and the exact value is lost.

```html
<table class="sb-table" data-size="sm"><thead><tr><th scope="col">Item</th><th scope="col">Tagihan</th></tr></thead><tbody><tr><td>Kamar</td><td>Rp 4,5 jt</td></tr><tr><td>Obat</td><td>Rp 875 rb</td></tr></tbody></table>
```

**Do:** Status as a pill.

```html
<table class="sb-table" data-size="sm"><thead><tr><th scope="col">ID Klaim</th><th scope="col">Status</th></tr></thead><tbody><tr><td>KLM-0241</td><td><span class="sb-badge" data-size="sm" data-color="success">Disetujui: Sembuh</span></td></tr><tr><td>KLM-0236</td><td><span class="sb-badge" data-size="sm" data-color="error">Ditolak</span></td></tr></tbody></table>
```

**Don't:** Status as coloured text: weak contrast and unlike every other screen.

```html
<table class="sb-table" data-size="sm"><thead><tr><th scope="col">ID Klaim</th><th scope="col">Status</th></tr></thead><tbody><tr><td>KLM-0241</td><td style="color: var(--success-600)">Disetujui: Sembuh</td></tr><tr><td>KLM-0236</td><td style="color: var(--error-600)">Ditolak</td></tr></tbody></table>
```

**Do:** A dash where a value is missing.

```html
<table class="sb-table" data-size="sm"><thead><tr><th scope="col">Peserta</th><th scope="col" data-num>Klaim</th></tr></thead><tbody><tr><td>Budi Santoso</td><td data-num>3</td></tr><tr><td>Siti Rahma</td><td data-num><span class="sb-table-empty" aria-label="Belum ada">—</span></td></tr></tbody></table>
```

**Don't:** A blank cell. It reads as "still loading" or "broken".

```html
<table class="sb-table" data-size="sm"><thead><tr><th scope="col">Peserta</th><th scope="col" data-num>Klaim</th></tr></thead><tbody><tr><td>Budi Santoso</td><td data-num>3</td></tr><tr><td>Siti Rahma</td><td data-num></td></tr></tbody></table>
```

### Accessibility

- A real `<table>` with `<th scope="col">` headers (and `scope="row"` where a row has a label cell), never a grid of `<div>`s.
- Sortable headers are `<button>`s inside the `th`; the `th` carries `aria-sort="ascending"` or `"descending"`, so screen readers announce the order.
- Selection checkboxes each have an `aria-label` naming the row ("Pilih KLM-0241"); the header box says "Pilih semua klaim".
- Flagged rows also say why in the row (a pill or the text), not only with the tint.
- The group and nested chevrons are `<button>`s with `aria-expanded` and a label ("Rincian Obat"). Folded rows are `hidden`, so screen readers skip them too.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Header `gray-500` | `gray-50` | 4.76:1 | Passes |
| Cell `gray-900` | `white` / `gray-50` / `brand-50` | 17.75:1 / 16.98:1 / 16.33:1 | Passes |
| ID link `brand-700` | `white` | 6.61:1 | Passes |
| Flagged `error-700` | `error-50` | 6.05:1 | Passes |

### Code

Load `tokens.css`, `badge.css` and `checkbox.css` for the parts inside, then `table.css`. Add `table.js` for sorting, groups and nested rows, and `checkbox-select-all.js` for selection.

`table.css`

```css
/* Table, Codemasters Design System
   Needs tokens.css; badge.css for status pills, checkbox.css for row selection; table.js for sorting and groups.

   <div class="sb-table-wrap">
     <table class="sb-table">
       <thead><tr><th scope="col">ID Klaim</th>…<th scope="col" data-num>Tagihan</th></tr></thead>
       <tbody><tr><td><a class="sb-table-link" href="…">KLM-0241</a></td>…<td data-num>Rp 12.450.000</td></tr></tbody>
     </table>
   </div>

   data-size     sm  (compact rows; omit for md)
   data-sticky   on the table: the first column stays while the table scrolls sideways; its edge shows once scrolled (table.js)
   data-num      on th and td: right-aligned, tabular figures (amounts, counts, dates)
   aria-sort     on a sortable th: ascending | descending (one column at a time)
   data-tone     on a body row: error (flagged) | warning (needs review)
   data-group / data-child / tfoot   grouped table rows
   data-level    on every body row of a nested table: 1–3; a row with children starts with an .sb-table-fold button */

.sb-table-wrap { overflow-x: auto; max-width: 100%; }
.sb-table {
  --cell-py: 16px; --cell-px: 16px;
  width: 100%; border-collapse: separate; border-spacing: 0;
  font: 400 var(--text-sm) var(--font); color: var(--text-secondary);
}
.sb-table[data-size="sm"] { --cell-py: 10px; --cell-px: 12px; }
.sb-table :is(th, td) { padding: var(--cell-py) var(--cell-px); text-align: start; vertical-align: middle; white-space: nowrap; background: var(--row-bg, var(--bg-primary)); }

/* Header: a gray-50 band with rounded ends; Text sm Regular gray-500. */
.sb-table thead th { --row-bg: var(--bg-secondary); padding-block: 12px; font-weight: 400; color: var(--text-quaternary); }
.sb-table[data-size="sm"] thead th { padding-block: 8px; }
.sb-table thead th:first-child { border-radius: var(--radius-md) 0 0 var(--radius-md); }
.sb-table thead th:last-child { border-radius: 0 var(--radius-md) var(--radius-md) 0; }

/* Body: gray-200 row dividers, gray-50 on hover, brand-50 when selected. */
.sb-table tbody td { border-bottom: 1px solid var(--border-secondary); color: var(--text-primary); }
.sb-table tbody tr { transition: background-color 150ms var(--ease); }
.sb-table tbody tr[data-child] { --row-bg: var(--bg-secondary); } /* grouped items; tones below still win */
.sb-table tbody tr:is(:hover, [data-state="hover"]) { --row-bg: var(--bg-secondary); }
.sb-table tbody tr:has(.sb-check-input:checked) { --row-bg: var(--bg-brand-subtle); }
.sb-table tbody tr[data-tone="error"] { --row-bg: var(--bg-error-subtle); }
.sb-table tbody tr[data-tone="error"] td { color: var(--text-error); }
.sb-table tbody tr[data-tone="warning"] { --row-bg: var(--bg-warning-subtle); }

/* Cells */
.sb-table [data-num] { text-align: end; font-variant-numeric: tabular-nums; }
.sb-table-link { color: var(--text-brand); font-weight: 500; text-decoration: underline; text-underline-offset: 2px; text-decoration-thickness: from-font; }
.sb-table-link:hover { color: var(--text-brand-strong); }
.sb-table-link:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; border-radius: var(--radius-sm); }
.sb-table-sub { display: block; font-size: var(--text-xs); line-height: 18px; color: var(--text-quaternary); } /* second line: converted currency, email */
.sb-table-empty { color: var(--fg-quaternary); } /* "—" when a value is missing; never a blank cell */
.sb-table .sb-check { vertical-align: middle; }
.sb-table th:has(> .sb-check), .sb-table td:has(> .sb-check) { width: 16px; padding-inline-end: 0; }

/* Sortable header: the whole label is the button. Idle shows the two-way arrow in gray-400; sorted shows the direction in brand-600. */
.sb-table-sort {
  display: inline-flex; align-items: center; vertical-align: middle; gap: 4px; margin: 0; padding: 0; border: 0; border-radius: var(--radius-sm);
  background: none; font: inherit; color: inherit; cursor: pointer;
}
[data-num] > .sb-table-sort { flex-direction: row-reverse; }
.sb-table-sort:hover { color: var(--text-secondary); }
.sb-table-sort:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-table-sort > svg { width: 16px; height: 16px; flex: none; color: var(--fg-quaternary); }
th:not([aria-sort]) .sb-table-sort > .is-dir, th[aria-sort] .sb-table-sort > .is-idle { display: none; }
th[aria-sort] .sb-table-sort { color: var(--text-secondary); }
th[aria-sort] .sb-table-sort > .is-dir { color: var(--fg-brand); }
th[aria-sort="ascending"] .sb-table-sort > .is-dir { rotate: 180deg; }

/* Sticky first column, for wide tables. The cell keeps its row's background so nothing shows through. */
.sb-table[data-sticky] :is(th, td):first-child { position: sticky; left: 0; z-index: 1; }
/* With row selection the checkbox and the ID column stick together; the ID column starts after the 16 px box. */
.sb-table[data-sticky] :is(th, td):has(> .sb-check) + :is(th, td) { position: sticky; left: calc(var(--cell-px) + 16px); z-index: 1; }
/* The edge sits on the last sticky column and shows only once the table has scrolled (data-scrolled, set by table.js). */
.sb-table[data-sticky] tbody td { transition: box-shadow 150ms var(--ease); }
[data-scrolled] > .sb-table[data-sticky] tbody td:first-child:not(:has(> .sb-check)),
[data-scrolled] > .sb-table[data-sticky] tbody td:has(> .sb-check) + td { box-shadow: inset -1px 0 var(--border-secondary); }

/* Grouped table: group row (chevron, number, name, total), item rows indented on gray-50, gray-100 total row. */
.sb-table tbody tr[data-group] td { font-weight: 600; color: var(--text-primary); }
.sb-table tbody tr[data-child] td:first-child { padding-inline-start: calc(var(--cell-px) + 32px); }
.sb-table tbody tr[hidden] { display: none; }
.sb-table-fold { display: inline-grid; place-items: center; width: 24px; height: 24px; margin: -4px 8px -4px -4px; padding: 0; border: 0; border-radius: var(--radius-sm); background: none; color: var(--text-quaternary); cursor: pointer; vertical-align: middle; }
.sb-table-fold:hover { background: var(--bg-tertiary); color: var(--text-secondary); }
.sb-table-fold:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 0; }
.sb-table-fold > svg { width: 16px; height: 16px; transition: rotate 150ms var(--ease); }
.sb-table-fold[aria-expanded="true"] > svg { rotate: 90deg; }
.sb-table tfoot td { --row-bg: var(--bg-tertiary); font-weight: 600; color: var(--text-primary); }
.sb-table tfoot td:first-child { border-radius: var(--radius-md) 0 0 var(--radius-md); }
.sb-table tfoot td:last-child { border-radius: 0 var(--radius-md) var(--radius-md) 0; }

/* Nested table: each level indents 28 (the chevron's width), so a child's chevron sits under its parent's label.
   Rows without children add 28 more so their labels line up with siblings that have a chevron. */
.sb-table tbody tr[data-level="2"] { --indent: 28px; }
.sb-table tbody tr[data-level="3"] { --indent: 56px; }
.sb-table tbody tr[data-level] td:first-child { padding-inline-start: calc(var(--cell-px) + var(--indent, 0px)); }
.sb-table tbody tr[data-level]:not(:has(.sb-table-fold)) td:first-child { padding-inline-start: calc(var(--cell-px) + var(--indent, 0px) + 28px); }
.sb-table tbody tr[data-level]:has(.sb-table-fold) td:first-child { font-weight: 500; }

/* Footer: the Pagination component, 16 under the table. */
.sb-table-foot { padding-top: 16px; }

@media (prefers-reduced-motion: reduce) {
  .sb-table tbody tr, .sb-table-fold > svg { transition: none; }
}
```

#### Sort and group script

`table.js`

```js
// Table: sortable headers, foldable groups and the sticky column edge.
function tableSort(e) {
  const btn = e.target.closest?.('.sb-table-sort');
  if (!btn) return;
  const th = btn.closest('th'), table = th.closest('table'), col = th.cellIndex;
  const dir = th.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
  for (const h of table.tHead.rows[0].cells) h.removeAttribute('aria-sort');
  th.setAttribute('aria-sort', dir);
  const val = r => r.cells[col].dataset.value ?? r.cells[col].textContent.trim();
  const body = table.tBodies[0];
  const rows = [...body.rows].sort((a, b) => {
    const x = val(a), y = val(b), n = x - y;
    return (Number.isNaN(n) ? x.localeCompare(y, 'id') : n) * (dir === 'ascending' ? 1 : -1);
  });
  body.append(...rows);
}
function tableGroup(e) {
  const btn = e.target.closest?.('.sb-table-fold');
  if (!btn) return;
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', String(open));
  const row = btn.closest('tr'), level = +row.dataset.level;
  if (!level) {
    for (const r of row.closest('tbody').querySelectorAll('tr[data-child]')) r.hidden = !open;
    return;
  }
  let shut = Infinity; // level of the nearest folded row inside this branch
  for (let r = row.nextElementSibling; r && +r.dataset.level > level; r = r.nextElementSibling) {
    const l = +r.dataset.level;
    if (l <= shut) shut = Infinity;
    r.hidden = !open || l > shut;
    if (shut === Infinity && r.querySelector('.sb-table-fold[aria-expanded="false"]')) shut = l;
  }
}
function tableScroll(e) {
  const wrap = e.target.closest?.('.sb-table-wrap');
  if (wrap) wrap.toggleAttribute('data-scrolled', wrap.scrollLeft > 0);
}
document.addEventListener('click', tableSort);
document.addEventListener('click', tableGroup);
document.addEventListener('scroll', tableScroll, true); // scroll does not bubble: listen in the capture phase
```

## Tabs

Switch between panels of content in one place: the sections of a claim, the views of a card or the parts of a settings page. Four types: Folder, Underline, Segmented and Vertical.

### Usage

- Use tabs to switch between panels of content in the same place, without leaving the page. Each tab owns one panel.
- To change how the same data is shown or filtered (Hari, Minggu, Bulan), use a Button group. To go to another page, use a link or the sidebar.
- One Folder row per page, at the top of the content. Sections inside it use Underline, never a second Folder row.
- Labels are short and in Title Case, one to three words. Never wrap or truncate a label.
- When the tabs do not fit, the row scrolls sideways. No second row and no "More" menu.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Tab list | One row, gap 8, on a 1 px `gray-300` baseline. Scrolls sideways when the tabs do not fit. |
| 2 | Tab | 52 high (sm 44), padding `0 24` (sm `0 16`), radius `8 8 0 0`, 1 px `gray-300` border, `brand-50` fill, `brand-700` text. Hover: `brand-100` fill. |
| 3 | Selected tab | Raised: `brand-600` fill with `raised-sheen` and `raised-highlight`, `brand-700` border, `white` text and icon. Its bottom edge covers the baseline. |
| 4 | Icon | Optional. 20 px, gap 8, the text colour. Every tab in a row has one, or none has. |
| 5 | Label | Text sm / Medium, Title Case, never wraps. |
| 6 | Badge | Optional count, Badge sm. Error for counts that need action (FWA findings), Gray for plain totals. `white` fill on the selected Folder tab. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Type | Folder, Underline, Segmented, Vertical | `data-type` on the tab list. Vertical also sets `aria-orientation="vertical"` |
| Size | md, sm | Omit for md, `data-size="sm"` |
| Icon | True, False | `<svg>` before the label |
| Badge | True, False | `<span class="sb-badge" data-size="sm">` after the label |
| Selected | True, False | `aria-selected="true"`, `tabindex="0"`; the others `false` and `-1` |
| State | Default, Hover, Focused, Disabled | `:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state="hover"` or `"focus"` |

### Types

| Type | Use for | Height md / sm |
| --- | --- | --- |
| Folder | The sections of a detail page (claim detail). One row per page. | 52 / 44 |
| Underline | Sections inside a card or below Folder tabs; status views of a list. | 44 / 36 |
| Segmented | Two to four short views of one card (Grafik, Tabel). | 40 / 36, the whole control |
| Vertical | Settings pages and lists of five or more sections. | 40 / 36 per tab |

#### Folder

```html
<div class="sb-tabs" data-type="folder" role="tablist" aria-label="Detail klaim">
  <button class="sb-tab" type="button" role="tab" id="tabs-21-t0" aria-selected="false" aria-controls="tabs-21-p0" tabindex="-1">
    <svg aria-hidden="true"><!-- loader --></svg>
    Ringkasan Klaim
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-21-t1" aria-selected="false" aria-controls="tabs-21-p1" tabindex="-1">
    <svg aria-hidden="true"><!-- info --></svg>
    Informasi Klaim
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-21-t2" aria-selected="true" aria-controls="tabs-21-p2" tabindex="0">
    <svg aria-hidden="true"><!-- activity --></svg>
    Informasi Medis
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-21-t3" aria-selected="false" aria-controls="tabs-21-p3" tabindex="-1">
    <svg aria-hidden="true"><!-- database --></svg>
    Rincian Invoice
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-21-t4" aria-selected="false" aria-controls="tabs-21-p4" tabindex="-1">
    <svg aria-hidden="true"><!-- signal --></svg>
    FWA
    <span class="sb-badge" data-size="sm" data-color="error">6</span>
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-21-t5" aria-selected="false" aria-controls="tabs-21-p5" tabindex="-1">
    <svg aria-hidden="true"><!-- check-circle --></svg>
    Plan dan Manfaat
  </button>
</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-21-p0" aria-labelledby="tabs-21-t0" tabindex="0" hidden>Isi tab Ringkasan Klaim.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-21-p1" aria-labelledby="tabs-21-t1" tabindex="0" hidden>Isi tab Informasi Klaim.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-21-p2" aria-labelledby="tabs-21-t2" tabindex="0">Isi tab Informasi Medis.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-21-p3" aria-labelledby="tabs-21-t3" tabindex="0" hidden>Isi tab Rincian Invoice.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-21-p4" aria-labelledby="tabs-21-t4" tabindex="0" hidden>Isi tab FWA.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-21-p5" aria-labelledby="tabs-21-t5" tabindex="0" hidden>Isi tab Plan dan Manfaat.</div>
```

#### Underline

Text `gray-500`, hover `gray-700` with a `gray-300` line, selected `brand-700` with a 2 px `brand-600` line on a `gray-200` baseline. Padding `0 4`, gap 16.

```html
<div class="sb-tabs" data-type="underline" role="tablist" aria-label="Status klaim">
  <button class="sb-tab" type="button" role="tab" id="tabs-22-t0" aria-selected="true" aria-controls="tabs-22-p0" tabindex="0">
    <svg aria-hidden="true"><!-- layers --></svg>
    Semua
    <span class="sb-badge" data-size="sm" data-color="gray">128</span>
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-22-t1" aria-selected="false" aria-controls="tabs-22-p1" tabindex="-1">
    <svg aria-hidden="true"><!-- loader --></svg>
    Menunggu
    <span class="sb-badge" data-size="sm" data-color="gray">12</span>
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-22-t2" aria-selected="false" aria-controls="tabs-22-p2" tabindex="-1">
    <svg aria-hidden="true"><!-- check-circle --></svg>
    Disetujui
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-22-t3" aria-selected="false" aria-controls="tabs-22-p3" tabindex="-1">
    <svg aria-hidden="true"><!-- alert-circle --></svg>
    Ditolak
  </button>
</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-22-p0" aria-labelledby="tabs-22-t0" tabindex="0">Isi tab Semua.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-22-p1" aria-labelledby="tabs-22-t1" tabindex="0" hidden>Isi tab Menunggu.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-22-p2" aria-labelledby="tabs-22-t2" tabindex="0" hidden>Isi tab Disetujui.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-22-p3" aria-labelledby="tabs-22-t3" tabindex="0" hidden>Isi tab Ditolak.</div>
```

#### Segmented

A `gray-50` track with a `gray-200` border, radius 8, padding 4. The selected tab is `white` with a `gray-200` border and `shadow-xs`, radius 4, so the corners stay concentric. Same height as Button md.

```html
<div class="sb-tabs" data-type="segmented" role="tablist" aria-label="Tampilan data">
  <button class="sb-tab" type="button" role="tab" id="tabs-23-t0" aria-selected="true" aria-controls="tabs-23-p0" tabindex="0">
    <svg aria-hidden="true"><!-- activity --></svg>
    Grafik
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-23-t1" aria-selected="false" aria-controls="tabs-23-p1" tabindex="-1">
    <svg aria-hidden="true"><!-- list --></svg>
    Tabel
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-23-t2" aria-selected="false" aria-controls="tabs-23-p2" tabindex="-1">
    <svg aria-hidden="true"><!-- file-text --></svg>
    Catatan
    <span class="sb-badge" data-size="sm" data-color="gray">3</span>
  </button>
</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-23-p0" aria-labelledby="tabs-23-t0" tabindex="0">Isi tab Grafik.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-23-p1" aria-labelledby="tabs-23-t1" tabindex="0" hidden>Isi tab Tabel.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-23-p2" aria-labelledby="tabs-23-t2" tabindex="0" hidden>Isi tab Catatan.</div>
```

> **Note:** Segmented tabs look close to a Button group but switch panels, not the data in one panel. Grafik and Tabel are two panels: tabs. Hari, Minggu, Bulan filter one chart: Button group.

#### Vertical

The sidebar item's shape on a light surface: radius 8, padding `0 12`, text `gray-700` with a `gray-500` icon; hover `gray-50`; selected `brand-50` fill with `brand-700` text and icon. A badge sits at the end.

```html
<div class="sb-tabs" data-type="vertical" role="tablist" aria-label="Pengaturan akun" aria-orientation="vertical">
  <button class="sb-tab" type="button" role="tab" id="tabs-24-t0" aria-selected="true" aria-controls="tabs-24-p0" tabindex="0">
    <svg aria-hidden="true"><!-- user --></svg>
    Profil
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-24-t1" aria-selected="false" aria-controls="tabs-24-p1" tabindex="-1">
    <svg aria-hidden="true"><!-- user-plus --></svg>
    Tim
    <span class="sb-badge" data-size="sm" data-color="gray">4</span>
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-24-t2" aria-selected="false" aria-controls="tabs-24-p2" tabindex="-1">
    <svg aria-hidden="true"><!-- credit-card --></svg>
    Tagihan
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-24-t3" aria-selected="false" aria-controls="tabs-24-p3" tabindex="-1">
    <svg aria-hidden="true"><!-- link --></svg>
    Integrasi
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-24-t4" aria-selected="false" aria-controls="tabs-24-p4" tabindex="-1">
    <svg aria-hidden="true"><!-- settings --></svg>
    Preferensi
  </button>
</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-24-p0" aria-labelledby="tabs-24-t0" tabindex="0">Isi tab Profil.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-24-p1" aria-labelledby="tabs-24-t1" tabindex="0" hidden>Isi tab Tim.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-24-p2" aria-labelledby="tabs-24-t2" tabindex="0" hidden>Isi tab Tagihan.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-24-p3" aria-labelledby="tabs-24-t3" tabindex="0" hidden>Isi tab Integrasi.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-24-p4" aria-labelledby="tabs-24-t4" tabindex="0" hidden>Isi tab Preferensi.</div>
```

### Sizes

md for the main level, sm for sub-levels and dense cards. The text stays Text sm in both; only height and padding change.

```html
<span class="mx">md · 52</span>
<div class="sb-tabs" data-type="folder" role="tablist" aria-label="md">
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- info --></svg>
    Informasi Klaim
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="true" tabindex="0">
    <svg aria-hidden="true"><!-- activity --></svg>
    Informasi Medis
  </button>
</div>
<span class="mx">sm · 44</span>
<div class="sb-tabs" data-type="folder" data-size="sm" role="tablist" aria-label="sm">
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- info --></svg>
    Informasi Klaim
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="true" tabindex="0">
    <svg aria-hidden="true"><!-- activity --></svg>
    Informasi Medis
  </button>
</div>
```

### States

| Type | Default (fill / text) | Hover | Selected | Disabled |
| --- | --- | --- | --- | --- |
| Folder | `brand-50` / `brand-700`, `gray-300` border | `brand-100` fill | `brand-600` raised / `white`, `brand-700` border | Default at 50 % opacity |
| Underline | none / `gray-500` | `gray-700`, 2 px `gray-300` line | `brand-700`, 2 px `brand-600` line | Default at 50 % opacity |
| Segmented | none / `gray-500` | `gray-700` | `white` / `gray-800`, `gray-200` border, `shadow-xs` | Default at 50 % opacity |
| Vertical | none / `gray-700`, icon `gray-500` | `gray-50` / `gray-800` | `brand-50` / `brand-700` | Default at 50 % opacity |

> **Note:** Focus is a 2 px `brand-600` outline inside the tab, as in Button group, because the scrolling row clips anything drawn outside. On the selected Folder tab the outline is `white`, 4 px in.

### Overflow

When the tabs do not fit, the row scrolls sideways. Arrow keys move focus and scroll the selected tab into view.

```html
<div class="sb-tabs" data-type="folder" data-size="sm" role="tablist" aria-label="Detail klaim">
  <button class="sb-tab" type="button" role="tab" id="tabs-27-t0" aria-selected="false" aria-controls="tabs-27-p0" tabindex="-1">
    <svg aria-hidden="true"><!-- loader --></svg>
    Ringkasan Klaim
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-27-t1" aria-selected="false" aria-controls="tabs-27-p1" tabindex="-1">
    <svg aria-hidden="true"><!-- info --></svg>
    Informasi Klaim
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-27-t2" aria-selected="true" aria-controls="tabs-27-p2" tabindex="0">
    <svg aria-hidden="true"><!-- activity --></svg>
    Informasi Medis
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-27-t3" aria-selected="false" aria-controls="tabs-27-p3" tabindex="-1">
    <svg aria-hidden="true"><!-- database --></svg>
    Rincian Invoice
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-27-t4" aria-selected="false" aria-controls="tabs-27-p4" tabindex="-1">
    <svg aria-hidden="true"><!-- signal --></svg>
    FWA
    <span class="sb-badge" data-size="sm" data-color="error">6</span>
  </button>
  <button class="sb-tab" type="button" role="tab" id="tabs-27-t5" aria-selected="false" aria-controls="tabs-27-p5" tabindex="-1">
    <svg aria-hidden="true"><!-- check-circle --></svg>
    Plan dan Manfaat
  </button>
</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-27-p0" aria-labelledby="tabs-27-t0" tabindex="0" hidden>Isi tab Ringkasan Klaim.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-27-p1" aria-labelledby="tabs-27-t1" tabindex="0" hidden>Isi tab Informasi Klaim.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-27-p2" aria-labelledby="tabs-27-t2" tabindex="0">Isi tab Informasi Medis.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-27-p3" aria-labelledby="tabs-27-t3" tabindex="0" hidden>Isi tab Rincian Invoice.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-27-p4" aria-labelledby="tabs-27-t4" tabindex="0" hidden>Isi tab FWA.</div>
<div class="sb-tab-panel" role="tabpanel" id="tabs-27-p5" aria-labelledby="tabs-27-t5" tabindex="0" hidden>Isi tab Plan dan Manfaat.</div>
```

### Do and don't

**Do:** Folder for the page sections, Underline for the sections inside them.

```html
<div class="sb-tabs" data-type="folder" data-size="sm" role="tablist" aria-label="Contoh">
  <button class="sb-tab" type="button" role="tab" aria-selected="true" tabindex="0">
    <svg aria-hidden="true"><!-- info --></svg>
    Klaim
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- activity --></svg>
    Medis
  </button>
</div>
<div class="sb-tabs" data-type="underline" data-size="sm" role="tablist" aria-label="Contoh">
  <button class="sb-tab" type="button" role="tab" aria-selected="true" tabindex="0">
    Diagnosis
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    Tindakan
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    Obat
  </button>
</div>
```

**Don't:** Folder tabs inside Folder tabs. The two levels look equal.

```html
<div class="sb-tabs" data-type="folder" data-size="sm" role="tablist" aria-label="Contoh">
  <button class="sb-tab" type="button" role="tab" aria-selected="true" tabindex="0">
    <svg aria-hidden="true"><!-- info --></svg>
    Klaim
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- activity --></svg>
    Medis
  </button>
</div>
<div class="sb-tabs" data-type="folder" data-size="sm" role="tablist" aria-label="Contoh">
  <button class="sb-tab" type="button" role="tab" aria-selected="true" tabindex="0">
    Diagnosis
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    Tindakan
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    Obat
  </button>
</div>
```

**Do:** An icon on every tab, or on none.

```html
<div class="sb-tabs" data-type="underline" data-size="sm" role="tablist" aria-label="Contoh">
  <button class="sb-tab" type="button" role="tab" aria-selected="true" tabindex="0">
    <svg aria-hidden="true"><!-- layers --></svg>
    Semua
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- loader --></svg>
    Menunggu
  </button>
</div>
```

**Don't:** Icons on some tabs only.

```html
<div class="sb-tabs" data-type="underline" data-size="sm" role="tablist" aria-label="Contoh">
  <button class="sb-tab" type="button" role="tab" aria-selected="true" tabindex="0">
    <svg aria-hidden="true"><!-- layers --></svg>
    Semua
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    Menunggu
  </button>
</div>
```

**Do:** One row that scrolls sideways.

```html
<div class="sb-tabs" data-type="folder" data-size="sm" role="tablist" aria-label="Detail klaim">
  <button class="sb-tab" type="button" role="tab" aria-selected="true" tabindex="0">
    <svg aria-hidden="true"><!-- loader --></svg>
    Ringkasan Klaim
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- info --></svg>
    Informasi Klaim
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- activity --></svg>
    Informasi Medis
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- database --></svg>
    Rincian Invoice
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- signal --></svg>
    FWA
    <span class="sb-badge" data-size="sm" data-color="error">6</span>
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- check-circle --></svg>
    Plan dan Manfaat
  </button>
</div>
```

**Don't:** Tabs wrapped onto a second row. The selected tab loses its baseline.

```html
<div class="sb-tabs" data-type="folder" data-size="sm" role="tablist" aria-label="Detail klaim" style="flex-wrap: wrap">
  <button class="sb-tab" type="button" role="tab" aria-selected="true" tabindex="0">
    <svg aria-hidden="true"><!-- loader --></svg>
    Ringkasan Klaim
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- info --></svg>
    Informasi Klaim
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- activity --></svg>
    Informasi Medis
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- database --></svg>
    Rincian Invoice
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- signal --></svg>
    FWA
    <span class="sb-badge" data-size="sm" data-color="error">6</span>
  </button>
  <button class="sb-tab" type="button" role="tab" aria-selected="false" tabindex="-1">
    <svg aria-hidden="true"><!-- check-circle --></svg>
    Plan dan Manfaat
  </button>
</div>
```

### Accessibility

- The row is a `role="tablist"` with an `aria-label`; each tab is a `<button role="tab">` with `aria-selected` and `aria-controls`; each panel is a `role="tabpanel"` with `aria-labelledby` and `tabindex="0"`.
- Roving `tabindex`: Tab reaches the row once, on the selected tab, then moves on to the panel. ← → (↑ ↓ when vertical), Home and End move and select.
- Selection follows focus (automatic activation). For panels that load slowly, select on Enter instead and keep focus moving without selecting.
- The selected style comes from `aria-selected`, so it never shows by colour alone; Folder and Segmented also change the fill, Underline adds the line.
- A badge is read as part of the tab name ("FWA 6"). When the number needs a word, set `aria-label="FWA, 6 temuan"` on the tab.

| Tab | Text on fill | Ratio | AA |
| --- | --- | --- | --- |
| Folder, default | `brand-700` on `brand-50` | 6.09:1 | Passes |
| Folder, selected | `white` on `brand-600` | 5.06:1 | Passes |
| Underline, default | `gray-500` on `white` | 4.97:1 | Passes |
| Underline, selected | `brand-700` on `white` | 6.61:1 | Passes; the `brand-600` line is 5.06:1 (3:1 needed) |
| Segmented, default | `gray-500` on `gray-50` | 4.76:1 | Passes |
| Segmented, selected | `gray-800` on `white` | 14.70:1 | Passes |
| Vertical, selected | `brand-700` on `brand-50` | 6.09:1 | Passes |

### Code

Load `tokens.css`, `badge.css` when tabs carry a count, then `tabs.css`. Add `tabs.js` for clicks and keys.

`tabs.css`

```css
/* Tabs, Codemasters Design System
   Needs tokens.css; tabs.js for clicks and keys.

   <div class="sb-tabs" data-type="folder" role="tablist" aria-label="Detail klaim">
     <button class="sb-tab" type="button" role="tab" id="klaim-t1" aria-selected="true" aria-controls="klaim-p1" tabindex="0">…icon… Informasi Klaim</button>
     <button class="sb-tab" type="button" role="tab" id="klaim-t2" aria-selected="false" aria-controls="klaim-p2" tabindex="-1">…icon… FWA <span class="sb-badge" data-size="sm" data-color="error">6</span></button>
   </div>
   <div class="sb-tab-panel" role="tabpanel" id="klaim-p1" aria-labelledby="klaim-t1" tabindex="0">…</div>
   <div class="sb-tab-panel" role="tabpanel" id="klaim-p2" aria-labelledby="klaim-t2" tabindex="0" hidden>…</div>

   data-type   folder | underline | segmented | vertical (vertical also sets aria-orientation="vertical")
   data-size   sm (omit for md)
   Selected    aria-selected="true". The ARIA state is the style hook, so selection never shows by colour alone.
   Badge       Badge sm after the label: error for counts that need action, gray for plain totals.
   data-state  hover | focus on a tab. Static mockups and docs only. */

.sb-tabs {
  --tab-h: 44px; --tab-px: 4px;
  box-sizing: border-box;
  display: flex; gap: 8px;
  overflow-x: auto; scrollbar-width: thin; /* too many tabs scroll sideways, never a second row */
}
.sb-tab {
  --tab-icon: currentColor;
  box-sizing: border-box; flex: none;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: var(--tab-h); margin: 0; padding: 0 var(--tab-px);
  font: 500 var(--text-sm) var(--font); white-space: nowrap;
  color: var(--text-quaternary); background: none;
  border: 0; border-radius: 0;
  cursor: pointer;
  transition-property: color, background-color, border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-tab > svg { width: 20px; height: 20px; flex: none; color: var(--tab-icon); }
/* Inside the tab, like Button group: the scrolling row clips anything drawn outside. */
.sb-tab:is(:focus-visible, [data-state="focus"]) { outline: 2px solid var(--brand-600); outline-offset: -2px; }
.sb-tab:disabled { opacity: .5; cursor: not-allowed; } /* the default look at 50 % opacity */
.sb-tab-panel:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; border-radius: var(--radius-sm); }

/* Folder: the sections of a page. Tabs stand on a gray-300 baseline; the selected one fills brand-600. */
.sb-tabs[data-type="folder"] { --tab-h: 52px; --tab-px: 24px; box-shadow: inset 0 -1px var(--border-primary); }
.sb-tabs[data-type="folder"][data-size="sm"] { --tab-h: 44px; --tab-px: 16px; }
.sb-tabs[data-type="folder"] > .sb-tab {
  color: var(--text-brand); background: var(--bg-brand-subtle);
  border: 1px solid var(--border-primary); border-radius: var(--radius-md) var(--radius-md) 0 0;
}
.sb-tabs[data-type="folder"] > .sb-tab:is(:hover, [data-state="hover"]):not(:disabled, [aria-selected="true"]) { background: var(--bg-brand-subtle-hover); }
.sb-tabs[data-type="folder"] > .sb-tab[aria-selected="true"] { color: var(--white); background: var(--raised-sheen) var(--brand-600); border-color: var(--brand-700); box-shadow: var(--raised-highlight); }
.sb-tabs[data-type="folder"] > .sb-tab[aria-selected="true"]:is(:focus-visible, [data-state="focus"]) { outline-color: var(--white); outline-offset: -4px; }
.sb-tabs[data-type="folder"] > .sb-tab[aria-selected="true"] .sb-badge { --bdg-bg: var(--bg-primary); }

/* Underline: sections inside a card or below folder tabs. A 2 px line marks the selected tab. */
.sb-tabs[data-type="underline"] { gap: 16px; box-shadow: inset 0 -1px var(--border-secondary); }
.sb-tabs[data-type="underline"][data-size="sm"] { --tab-h: 36px; }
.sb-tabs[data-type="underline"] > .sb-tab { box-shadow: inset 0 -2px transparent; }
.sb-tabs[data-type="underline"] > .sb-tab:is(:hover, [data-state="hover"]):not(:disabled, [aria-selected="true"]) { color: var(--text-secondary); box-shadow: inset 0 -2px var(--border-primary); }
.sb-tabs[data-type="underline"] > .sb-tab[aria-selected="true"] { color: var(--text-brand); box-shadow: inset 0 -2px var(--brand-600); }

/* Segmented: 2 to 4 short views of one card. 40 high in all, like Button md; radius 8 = 4 inner + 4 padding. */
.sb-tabs[data-type="segmented"] {
  --tab-h: 30px; --tab-px: 12px;
  display: inline-flex; max-width: 100%; gap: 4px; padding: 4px;
  background: var(--bg-secondary); border: 1px solid var(--border-secondary); border-radius: var(--radius-md);
}
.sb-tabs[data-type="segmented"][data-size="sm"] { --tab-h: 26px; --tab-px: 10px; }
.sb-tabs[data-type="segmented"] > .sb-tab { border: 1px solid transparent; border-radius: var(--radius-sm); }
.sb-tabs[data-type="segmented"] > .sb-tab:is(:hover, [data-state="hover"]):not(:disabled, [aria-selected="true"]) { color: var(--text-secondary); }
.sb-tabs[data-type="segmented"] > .sb-tab[aria-selected="true"] { color: var(--text-primary); background: var(--raised-sheen-light) var(--bg-primary); border-color: var(--border-secondary); box-shadow: var(--shadow-xs); }

/* Vertical: settings pages and long section lists. The sidebar item's shape (radius 8) on a light surface. */
.sb-tabs[data-type="vertical"] { --tab-h: 40px; --tab-px: 12px; flex-direction: column; gap: 4px; overflow: visible; }
.sb-tabs[data-type="vertical"][data-size="sm"] { --tab-h: 36px; }
.sb-tabs[data-type="vertical"] > .sb-tab { --tab-icon: var(--text-quaternary); justify-content: flex-start; color: var(--text-secondary); border-radius: var(--radius-md); }
.sb-tabs[data-type="vertical"] > .sb-tab > .sb-badge { margin-inline-start: auto; }
.sb-tabs[data-type="vertical"] > .sb-tab:is(:hover, [data-state="hover"]):not(:disabled, [aria-selected="true"]) { --tab-icon: var(--text-secondary); color: var(--text-primary); background: var(--bg-secondary); }
.sb-tabs[data-type="vertical"] > .sb-tab[aria-selected="true"] { --tab-icon: var(--text-brand); color: var(--text-brand); background: var(--bg-brand-subtle); }

@media (prefers-reduced-motion: reduce) {
  .sb-tab { transition: none; }
}
```

#### Script

`tabs.js`

```js
// Tabs: click or ← → (↑ ↓ when vertical), Home and End select a tab and show its panel.
function tabsSelect(tab) {
  for (const t of tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]')) {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    const panel = document.getElementById(t.getAttribute('aria-controls'));
    if (panel) panel.hidden = !on;
  }
}
function tabsClick(e) {
  const tab = e.target.closest?.('.sb-tabs [role="tab"]');
  if (tab && !tab.disabled) tabsSelect(tab);
}
function tabsKeydown(e) {
  const tab = e.target.closest?.('.sb-tabs [role="tab"]');
  if (!tab) return;
  const list = tab.closest('[role="tablist"]');
  const [prev, next] = list.getAttribute('aria-orientation') === 'vertical' ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];
  const tabs = [...list.querySelectorAll('[role="tab"]:not(:disabled)')];
  const i = tabs.indexOf(tab);
  const to = { [prev]: (i - 1 + tabs.length) % tabs.length, [next]: (i + 1) % tabs.length, Home: 0, End: tabs.length - 1 }[e.key];
  if (to === undefined) return;
  e.preventDefault();
  tabsSelect(tabs[to]);
  tabs[to].focus(); // focus also scrolls a long row to the tab
}
document.addEventListener('click', tabsClick);
document.addEventListener('keydown', tabsKeydown);
```

## Textarea input field

Multi-line text: notes, rejection reasons, AI summary edits. Same label, hint and error as Input field, plus an optional character counter.

### Usage

- Use a textarea for text longer than one line: notes, reasons, AI summary edits. For one line use Input field.
- When the text needs formatting (headings, lists, bold), use the WYSIWYG editor instead.
- **Always show a label above the field.** The placeholder is an example, never the label.
- **Show the counter only when there is a limit.** Keep typing allowed past it and show the error, so text is never cut off.
- **Resize vertically only** (`resize: vertical`), never below 128.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Label | Text sm / Medium, `gray-700`. Same as Input field. |
| 2 | Box | 128 high by default, padding `10 14`, `white`, 1 px `gray-300` border, radius 8, `shadow-xs`. Text md / Regular from the top-left: placeholder `gray-500`, value `gray-900`. No help or alert icon inside. |
| 3 | Character counter | Optional. Text xs / Regular `gray-500`, bottom-right inside the box (`0/150`). Turns `error-500` past the limit (`151/150`). |
| 4 | Hint text | Text sm / Regular `gray-500`. In error it becomes the message in `error-500`. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Label | True, False | `<label class="sb-field-label" for>`; without it, `aria-label` on the textarea |
| Hint text | True, False | `<p class="sb-field-hint" id>` + `aria-describedby` |
| Show limit (base) | True, False | `data-limit="150"` on the textarea + `<span class="sb-textarea-count">` |
| Destructive | True, False | `aria-invalid="true"` on the textarea |
| State | Placeholder, Default (filled), Focused, Disabled | empty, text content, `:focus`, `disabled`. Static mockups only: `data-state="focus"` |

### States

| State | Fill | Border | Extra |
| --- | --- | --- | --- |
| Placeholder | `white` | `gray-300` | Placeholder `gray-500`. Hover: border `gray-400` |
| Default (filled) | `white` | `gray-300` | Value `gray-900` |
| Focused | `white` | `brand-300` | ring `0 0 0 4px` `focus-ring` + `shadow-xs` |
| Disabled | Default at 50 % opacity | Default at 50 % opacity | No resize, `cursor: not-allowed` |
| Destructive | `white` | `error-300` | Message in `error-500`; focused ring `error-100` |
| Over the limit | `white` | `error-300` | Counter `error-500`, message "Maksimal 150 karakter." |

### Character counter

- Show the counter only when the field has a limit.
- Never set `maxlength`: it silently drops what the user types or pastes. Let the text run over, turn the counter red and say what to do.
- The counter updates on every keystroke; the hint has `aria-live="polite"`, so screen readers hear the error once when it appears, not every count.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ta-over">Alasan penolakan</label>
  <div class="sb-textarea">
    <textarea id="ta-over" placeholder="Tulis alasan yang bisa dipahami peserta…" data-limit="150" aria-describedby="ta-over-hint ta-over-count" aria-invalid="true">Resume medis belum dilampirkan. Mohon unggah resume medis dari rumah sakit, lalu ajukan ulang klaim. Pastikan resume memuat diagnosis, tindakan dan tanggal rawat inap.</textarea>
    <span class="sb-textarea-count" id="ta-over-count" data-over>167/150</span>
  </div>
  <p class="sb-field-hint" id="ta-over-hint" aria-live="polite" data-hint="Alasan ini dikirim ke peserta." data-error="Maksimal 150 karakter.">Maksimal 150 karakter.</p>
</div>
```

### Do and don't

**Do:** Allow typing past the limit and say how to fix it.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ta-dd-over">Alasan penolakan</label>
  <div class="sb-textarea">
    <textarea id="ta-dd-over" placeholder="Tulis alasan yang bisa dipahami peserta…" data-limit="150" aria-describedby="ta-dd-over-hint ta-dd-over-count" aria-invalid="true">Resume medis belum dilampirkan. Mohon unggah resume medis dari rumah sakit, lalu ajukan ulang klaim. Pastikan resume memuat diagnosis, tindakan dan tanggal rawat inap.</textarea>
    <span class="sb-textarea-count" id="ta-dd-over-count" data-over>167/150</span>
  </div>
  <p class="sb-field-hint" id="ta-dd-over-hint" aria-live="polite" data-hint="Alasan ini dikirim ke peserta." data-error="Maksimal 150 karakter.">Maksimal 150 karakter.</p>
</div>
```

**Don't:** `maxlength` cuts the text mid-word, and the user is not told.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ta-dd-cut">Alasan penolakan</label>
  <div class="sb-textarea">
    <textarea id="ta-dd-cut" placeholder="Tulis alasan yang bisa dipahami peserta…" data-limit="150" aria-describedby="ta-dd-cut-hint ta-dd-cut-count">Resume medis belum dilampirkan. Mohon unggah resume medis dari rumah sakit, lalu ajukan ulang klaim. Pastikan resume memuat diagnosis, tindakan dan ta</textarea>
    <span class="sb-textarea-count" id="ta-dd-cut-count">150/150</span>
  </div>
  <p class="sb-field-hint" id="ta-dd-cut-hint" aria-live="polite" data-hint="Alasan ini dikirim ke peserta." data-error="Maksimal 150 karakter.">Alasan ini dikirim ke peserta.</p>
</div>
```

**Do:** A textarea for a reason that runs over several lines.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ta-dd-multi">Alasan penolakan</label>
  <div class="sb-textarea">
    <textarea id="ta-dd-multi" placeholder="Tulis alasan yang bisa dipahami peserta…">Resume medis belum dilampirkan. Mohon unggah resume medis dari rumah sakit, lalu ajukan ulang klaim.</textarea>
  </div>
</div>
```

**Don't:** A single-line input for long text. The user cannot read back what they wrote.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ta-dd-single">Alasan penolakan</label>
  <div class="sb-input">
    <input id="ta-dd-single" type="text" value="Resume medis belum dilampirkan. Mohon unggah resume medis dari rumah sakit, lalu ajukan ulang klaim.">
  </div>
</div>
```

### Accessibility

- Connect the label with `for` / `id`; a field without a visible label needs `aria-label`.
- `aria-describedby` points at the hint and the counter, so both are read when the field gets focus.
- In error set `aria-invalid="true"`; the counter script does this when the text passes the limit.
- Resize stays vertical, so a taller box never breaks the layout sideways.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Value `gray-900` | `white` | 17.75:1 | Passes |
| Placeholder, hint, counter `gray-500` | `white` | 4.97:1 | Passes |
| Error message, counter over limit `error-500` | `white` | 3.76:1 | **Fails** |

> **Warning:** Same open decision as Input field: `error-500` text is below AA. `error-600` (4.83:1) or `error-700` (6.57:1) would pass.

### Code

Load `tokens.css`, then `textarea.css`. Add `textarea-counter.js` only when a field has a limit.

`textarea.css`

```css
/* Textarea input field, Codemasters Design System
   Needs tokens.css. Label and hint rules are the same as input-field.css; loading both is safe.

   <div class="sb-field">
     <label class="sb-field-label" for="alasan">Alasan penolakan</label>
     <div class="sb-textarea">
       <textarea id="alasan" data-limit="150" aria-describedby="alasan-hint alasan-count"></textarea>
       <span class="sb-textarea-count" id="alasan-count">0/150</span>
     </div>
     <p class="sb-field-hint" id="alasan-hint" aria-live="polite"
        data-hint="Alasan ini dikirim ke peserta." data-error="Maksimal 150 karakter.">Alasan ini dikirim ke peserta.</p>
   </div>

   Show limit   data-limit on the textarea + .sb-textarea-count (needs textarea-counter.js). Never use maxlength.
   Destructive  aria-invalid="true" on the textarea.
   Disabled     the disabled attribute.
   data-state="focus" on .sb-textarea forces Focused in static mockups and docs only. */

.sb-field { display: grid; gap: 6px; } /* label, control, hint 6 apart */
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--text-secondary); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }
.sb-field:has([aria-invalid="true"]) .sb-field-hint { color: var(--error-500); }

.sb-textarea { position: relative; display: grid; }
.sb-textarea textarea {
  --ta-border: var(--border-primary); --ta-focus: var(--border-brand); --ta-ring: var(--focus-ring);
  box-sizing: border-box; width: 100%; height: 128px; min-height: 128px; margin: 0;
  padding: 10px 14px; /* control padding exception, same as Input field */
  resize: vertical;
  font: 400 var(--text-md) var(--font); color: var(--text-primary);
  background: var(--bg-primary);
  border: 1px solid var(--ta-border); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-textarea textarea::placeholder { color: var(--text-quaternary); opacity: 1; }
/* Room for the counter so the last line never runs under it: 10 + 18 + 4. */
.sb-textarea:has(.sb-textarea-count) textarea { padding-bottom: 32px; }

/* States */
.sb-textarea textarea:hover:not(:focus, :disabled, [aria-invalid="true"]) { border-color: var(--border-strong); }
.sb-textarea textarea:focus, .sb-textarea[data-state="focus"] textarea {
  outline: none; border-color: var(--ta-focus); box-shadow: var(--shadow-xs), 0 0 0 4px var(--ta-ring);
}
.sb-textarea textarea:disabled { opacity: .5; cursor: not-allowed; resize: none; } /* the default look at 50 % opacity */
.sb-textarea textarea[aria-invalid="true"] { --ta-border: var(--border-error); --ta-focus: var(--border-error); --ta-ring: var(--bg-error-subtle-hover); }

/* Character counter: bottom-right inside the box. Kept 24 from the edge so it clears the resize grip. */
.sb-textarea-count {
  position: absolute; bottom: 10px; inset-inline-end: 24px;
  font: 400 var(--text-xs) var(--font); color: var(--text-quaternary);
  pointer-events: none; font-variant-numeric: tabular-nums;
}
.sb-textarea-count[data-over] { color: var(--error-500); }

@media (prefers-reduced-motion: reduce) {
  .sb-textarea textarea { transition: none; }
}
```

#### Counter script

`textarea-counter.js`

```js
// Character counter for every textarea with data-limit. Typing past the limit is allowed:
// the counter turns red, the field goes into error and the hint says what to do. Text is never cut.
function updateCounter(e) {
  const ta = e.target.closest('.sb-textarea textarea[data-limit]');
  if (!ta) return;
  const limit = Number(ta.dataset.limit);
  const over = ta.value.length > limit;
  const count = ta.parentElement.querySelector('.sb-textarea-count');
  count.textContent = `${ta.value.length}/${limit}`;
  count.toggleAttribute('data-over', over);
  if (over) ta.setAttribute('aria-invalid', 'true');
  else ta.removeAttribute('aria-invalid');
  const hint = ta.closest('.sb-field').querySelector('.sb-field-hint[data-error]');
  if (hint) hint.textContent = over ? hint.dataset.error : hint.dataset.hint;
}
document.addEventListener('input', updateCounter);
```

## Toast

Short feedback after an action that closes itself: a white card with a status icon and a timer bar. The react-toastify API (toast.success, toast.error, toast.loading + toast.update, toast.promise) in plain JS.

### Usage

| Situation | Use |
| --- | --- |
| An action finished and the user can carry on | Success toast: "Klaim terkirim" |
| Something arrived or changed elsewhere | Info toast: "Klaim baru dari RS Medika Utama" |
| An action runs in the background | `toast.loading`, then `toast.update` to success or error (or `toast.promise`) |
| Something failed that the user can retry | Error toast with a description and an action |
| A field or form is wrong | Not a toast: show it at the field |
| The user must decide before going on | Not a toast: a Modal |

- Say what happened, in a few words and past tense: "Klaim terkirim", not "Klaim berhasil dikirim!". No exclamation marks.
- At most one action, and only one that is also possible elsewhere (Lihat Klaim, Coba Lagi).
- One toast per action. Use `toastId` for events that can repeat, so they do not pile up.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | `white`, 1 px `gray-200` border, radius 12, `shadow-lg`, padding `16 12 16 16`, gap 12, 360 wide (screen minus 32 on phones). Top right, 16 from the edges, 12 between toasts. |
| 2 | Icon | 20 px in the status colour: info `brand-600`, success `success-600`, warning `warning-600`, error `error-600`; loading a 16 px spinner. None for a default toast. |
| 3 | Message | Text sm / Semibold `gray-900`. |
| 4 | Description | Optional, Text sm / Regular `gray-600`, 4 under the message. |
| 5 | Action | Optional text button, Text sm / Semibold `brand-700`. Closes the toast. |
| 6 | Close | 28 px hit area, 20 px × `gray-400`; hover `gray-50` fill. On by default. |
| 7 | Progress bar | 3 px along the bottom in the status colour (`500` step; `brand-600` for default and info). It is the timer: it shrinks to nothing over `autoClose`, then the toast closes. Pauses on hover and focus. |

### API

The same calls as react-toastify, so code and habits carry over. `toast.js` sets `window.toast`; `toast.config()` does what `<ToastContainer>` props do.

| Call | Does |
| --- | --- |
| `toast('Pesan', options)` | A default toast, no icon. Returns its id |
| `toast.info` / `.success` / `.warning` / `.error` | The same with the status icon and bar colour. Errors are announced at once (`role="alert"`) |
| `toast.loading('Pesan')` | Spinner, no timer; stays until updated or dismissed |
| `toast.update(id, { render, type, isLoading: false, autoClose })` | Changes a toast in place, e.g. loading → success; the timer starts again |
| `toast.promise(p, { pending, success, error })` | Loading while `p` runs, then success or error in the same toast. `success` and `error` may be functions of the result |
| `toast.dismiss(id)` / `toast.dismiss()` | Closes one, or all |
| `toast.isActive(id)` | Whether that toast is on screen |
| `toast.config({ position, autoClose, hideProgressBar, closeButton, max })` | Defaults for every toast: `top-right`, 5000 ms, bar shown, × shown, 5 at most |

| Option | Type | What |
| --- | --- | --- |
| `toastId` | string | Your own id; a second toast with the same id is ignored (no duplicates) |
| `autoClose` | ms or `false` | How long it stays; `false` keeps it until closed |
| `hideProgressBar` | boolean | Hides the bar; the timer still runs |
| `closeButton` | boolean | Shows the × (default true) |
| `description` | string | A second line |
| `action` | `{ label, onClick }` | One text button; closes the toast after the click |
| `onClick`, `onClose` | function | Called on a click on the toast, and after it has closed |

```js
const id = toast.loading('Menganalisis klaim…');
try {
  await analisis(klaim);
  toast.update(id, { render: 'Analisis selesai', type: 'success', isLoading: false });
} catch {
  toast.update(id, { render: 'Analisis gagal', type: 'error', isLoading: false, description: 'Coba lagi dalam beberapa menit.' });
}
```

### Behaviour

- Slides in 16 px from its side (8 px from the top or bottom for centre positions) and fades in over 200 ms; leaves by fading and shrinking in 150 ms.
- The bar is the timer: a CSS animation as long as `autoClose`. When it ends, the toast closes. Hovering any toast or focusing inside one pauses it; it resumes where it stopped.
- New toasts stack under the older ones, 12 apart. Five at most; the oldest closes when a sixth arrives.
- A toast never takes focus, so typing is never interrupted.
- With reduced motion, toasts appear and leave without sliding; the bar still shows the time left.

### Do and don't

**Do:** A few words, past tense.

```html
<div class="toast-stage">
<div class="sb-toast" data-type="success" role="presentation"><span class="sb-toast-icon" aria-hidden="true"><svg aria-hidden="true"><!-- check-circle --></svg></span><div class="sb-toast-text"><p class="sb-toast-msg">Klaim terkirim</p></div><button class="sb-toast-close" type="button" aria-label="Tutup notifikasi" tabindex="-1"><svg aria-hidden="true"><!-- x --></svg></button><div class="sb-toast-progress" style="animation: none; scale: 0.6 1"></div></div>
</div>
```

**Don't:** A sentence with exclamation marks. The icon already says it went well.

```html
<div class="toast-stage">
<div class="sb-toast" data-type="success" role="presentation"><span class="sb-toast-icon" aria-hidden="true"><svg aria-hidden="true"><!-- check-circle --></svg></span><div class="sb-toast-text"><p class="sb-toast-msg">Selamat! Klaim Anda telah berhasil dikirim ke Advisor untuk ditinjau!</p></div><button class="sb-toast-close" type="button" aria-label="Tutup notifikasi" tabindex="-1"><svg aria-hidden="true"><!-- x --></svg></button><div class="sb-toast-progress" style="animation: none; scale: 0.6 1"></div></div>
</div>
```

**Do:** One action the user can also find elsewhere.

```html
<div class="toast-stage">
<div class="sb-toast" data-type="error" role="presentation"><span class="sb-toast-icon" aria-hidden="true"><svg aria-hidden="true"><!-- alert-circle --></svg></span><div class="sb-toast-text"><p class="sb-toast-msg">Gagal mengirim klaim</p><button class="sb-toast-action" type="button" tabindex="-1">Coba Lagi</button></div><button class="sb-toast-close" type="button" aria-label="Tutup notifikasi" tabindex="-1"><svg aria-hidden="true"><!-- x --></svg></button><div class="sb-toast-progress" style="animation: none; scale: 0.6 1"></div></div>
</div>
```

**Don't:** A decision in a toast. It closes before people read it; use a Modal.

```html
<div class="toast-stage">
<div class="sb-toast" data-type="warning" role="presentation"><span class="sb-toast-icon" aria-hidden="true"><svg aria-hidden="true"><!-- alert --></svg></span><div class="sb-toast-text"><p class="sb-toast-msg">Hapus 12 klaim?</p><button class="sb-toast-action" type="button" tabindex="-1">Hapus</button></div><button class="sb-toast-close" type="button" aria-label="Tutup notifikasi" tabindex="-1"><svg aria-hidden="true"><!-- x --></svg></button><div class="sb-toast-progress" style="animation: none; scale: 0.6 1"></div></div>
</div>
```

### Accessibility

- The toasts live in one `aria-live="polite"` region that is in the page from the start, so screen readers announce each one. Error toasts are `role="alert"`, announced at once.
- Toasts do not take focus. Anything a toast offers (Lihat Klaim, Coba Lagi) must also be possible elsewhere, because it may be gone before someone reaches it.
- The timer pauses on hover and on focus inside the toast. Give toasts with an action or a long message a longer `autoClose`, or `autoClose: false`.
- Message `gray-900` on white is 17.75:1, description `gray-600` 7.56:1, action `brand-700` 6.61:1. Icons are 3:1 or more.

### Code

Load `tokens.css` and `toast.css`, then `toast.js` once. Call `toast()` from anywhere.

`toast.css`

```css
/* Toast, Codemasters Design System
   Needs tokens.css; toast.js creates the region and the toasts. Call toast() / toast.success() from your code.

   <section class="sb-toaster" aria-label="Notifikasi" aria-live="polite" data-position="top-right">
     <div class="sb-toast" data-type="success" role="status">
       <span class="sb-toast-icon">…check-circle…</span>
       <div class="sb-toast-text">
         <p class="sb-toast-msg">Klaim terkirim</p>
         <p class="sb-toast-desc">…</p>
         <button class="sb-toast-action" type="button">Lihat Klaim</button>
       </div>
       <button class="sb-toast-close" type="button" aria-label="Tutup notifikasi">…x…</button>
       <div class="sb-toast-progress" style="animation-duration: 5000ms"></div>
     </div>
   </section>

   data-position  top-right (default) | top-center | top-left | bottom-right | bottom-center | bottom-left
   data-type      default | info | success | warning | error | loading */

.sb-toaster {
  position: fixed; z-index: 60; top: 16px; right: 16px;
  display: flex; flex-direction: column; gap: 12px;
  width: min(360px, calc(100% - 32px)); pointer-events: none;
}
.sb-toaster[data-position^="bottom"] { top: auto; bottom: 16px; }
.sb-toaster[data-position$="left"] { right: auto; left: 16px; }
.sb-toaster[data-position$="center"] { right: auto; left: 50%; translate: -50% 0; }

.sb-toast {
  --tone: var(--brand-600); --bar: var(--brand-600); --enter-x: 16px; --enter-y: 0px;
  position: relative; overflow: hidden; box-sizing: border-box; pointer-events: auto;
  display: flex; align-items: flex-start; gap: 12px;
  padding: 16px 12px 16px 16px;
  background: var(--bg-primary); border: 1px solid var(--border-secondary); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
  font: 400 var(--text-sm) var(--font); color: var(--text-tertiary);
  transition: opacity 200ms var(--ease), translate 200ms var(--ease), scale 200ms var(--ease);
}
.sb-toaster[data-position$="left"] .sb-toast { --enter-x: -16px; }
.sb-toaster[data-position$="center"] .sb-toast { --enter-x: 0px; --enter-y: -8px; }
.sb-toaster[data-position="bottom-center"] .sb-toast { --enter-y: 8px; }
@starting-style { .sb-toast { opacity: 0; translate: var(--enter-x) var(--enter-y); } }
.sb-toast[data-state="closing"] { opacity: 0; scale: .96; transition-duration: 150ms; }
.sb-toast[data-type="success"] { --tone: var(--success-600); --bar: var(--success-500); }
.sb-toast[data-type="warning"] { --tone: var(--warning-600); --bar: var(--warning-500); }
.sb-toast[data-type="error"] { --tone: var(--error-600); --bar: var(--error-500); }

.sb-toast-icon { display: inline-grid; place-items: center; flex: none; width: 20px; height: 20px; color: var(--tone); }
.sb-toast-icon > svg { width: 20px; height: 20px; }
.sb-toast-spinner { width: 16px; height: 16px; box-sizing: border-box; border: 2px solid var(--border-secondary); border-top-color: var(--brand-600); border-radius: var(--radius-full); animation: sb-toast-spin 700ms linear infinite; }
@keyframes sb-toast-spin { to { rotate: 1turn; } }

.sb-toast-text { display: grid; justify-items: start; gap: 4px; flex: 1; min-width: 0; }
.sb-toast .sb-toast-text p { margin: 0; }
.sb-toast .sb-toast-msg { font-weight: 600; color: var(--text-primary); text-wrap: pretty; }
.sb-toast .sb-toast-desc { color: var(--text-tertiary); text-wrap: pretty; }
.sb-toast-action { margin: 4px 0 0; padding: 0; border: 0; border-radius: var(--radius-sm); background: none; font: 600 var(--text-sm) var(--font); color: var(--text-brand); cursor: pointer; }
.sb-toast-action:hover { color: var(--text-brand-strong); text-decoration: underline; text-underline-offset: 2px; }
.sb-toast-close { display: inline-grid; place-items: center; flex: none; width: 28px; height: 28px; margin: -4px 0 -4px auto; padding: 0; border: 0; border-radius: var(--radius-md); background: none; color: var(--fg-quaternary); cursor: pointer; }
.sb-toast-close:hover { background: var(--bg-secondary); color: var(--text-tertiary); }
.sb-toast-close > svg { width: 20px; height: 20px; }
.sb-toast :is(.sb-toast-action, .sb-toast-close):focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }

/* Timer bar: 3 px along the bottom in the status colour, shrinking to nothing over autoClose. Paused on hover and focus. */
.sb-toast-progress {
  position: absolute; left: 0; right: 0; bottom: 0; height: 3px;
  background: var(--bar); transform-origin: left;
  animation: sb-toast-timer linear forwards;
}
.sb-toast-progress[data-hidden] { opacity: 0; }
@keyframes sb-toast-timer { from { scale: 1 1; } to { scale: 0 1; } }
.sb-toaster:hover .sb-toast-progress, .sb-toast:focus-within .sb-toast-progress { animation-play-state: paused; }

@media (prefers-reduced-motion: reduce) {
  .sb-toast { transition: none; }
  .sb-toast-spinner { animation-duration: 2s; }
}
```

#### Runtime

`toast.js`

```js
// Toast: the react-toastify API in plain JS. Load once; then call toast() anywhere.
//   toast('Perubahan disimpan')             toast.success('Klaim terkirim')
//   toast.info('Klaim baru masuk')          toast.warning('Sesi berakhir dalam 5 menit')
//   toast.error('Gagal mengirim klaim', { description: 'Periksa koneksi, lalu coba lagi.' })
//   const id = toast.loading('Mengirim klaim…');
//   toast.update(id, { render: 'Klaim terkirim', type: 'success', isLoading: false })
//   toast.promise(kirimKlaim(), { pending: 'Mengirim klaim…', success: 'Klaim terkirim', error: 'Gagal mengirim klaim' })
//   toast.dismiss(id)   toast.dismiss()   toast.isActive(id)
//   toast.config({ position: 'bottom-right', autoClose: 3000 })   // like <ToastContainer>
// Options: toastId, autoClose (ms or false), hideProgressBar, closeButton, description, action { label, onClick }, onClick, onClose.
window.toast = (function installToast(ICONS) {
  const config = { position: 'top-right', autoClose: 5000, hideProgressBar: false, closeButton: true, max: 5 };
  const live = new Map(); // toastId -> element
  let seq = 0;

  const region = document.createElement('section');
  region.className = 'sb-toaster';
  region.setAttribute('aria-label', 'Notifikasi');
  region.setAttribute('aria-live', 'polite'); // in the page before any toast, so screen readers announce them
  region.dataset.position = config.position;
  const mount = () => document.body.append(region);
  document.body ? mount() : document.addEventListener('DOMContentLoaded', mount);

  function render(el, o) {
    const type = o.isLoading ? 'loading' : o.type || 'default';
    el.dataset.type = type;
    el.setAttribute('role', type === 'error' ? 'alert' : 'status');
    el.replaceChildren();
    if (ICONS[type]) {
      const ic = document.createElement('span');
      ic.className = 'sb-toast-icon';
      ic.setAttribute('aria-hidden', 'true');
      ic.innerHTML = ICONS[type]; // our own SVG strings, never user text
      el.append(ic);
    }
    const text = document.createElement('div');
    text.className = 'sb-toast-text';
    const msg = document.createElement('p');
    msg.className = 'sb-toast-msg';
    msg.textContent = o.render; // messages are data: textContent only
    text.append(msg);
    if (o.description) {
      const d = document.createElement('p');
      d.className = 'sb-toast-desc';
      d.textContent = o.description;
      text.append(d);
    }
    if (o.action) {
      const a = document.createElement('button');
      a.type = 'button';
      a.className = 'sb-toast-action';
      a.textContent = o.action.label;
      a.addEventListener('click', () => { o.action.onClick?.(); close(el.dataset.id); });
      text.append(a);
    }
    el.append(text);
    if (o.closeButton ?? config.closeButton) {
      const x = document.createElement('button');
      x.type = 'button';
      x.className = 'sb-toast-close';
      x.setAttribute('aria-label', 'Tutup notifikasi');
      x.innerHTML = ICONS.close;
      x.addEventListener('click', () => close(el.dataset.id));
      el.append(x);
    }
    // Loading toasts and autoClose: false stay until updated or dismissed.
    const ms = o.isLoading ? false : o.autoClose ?? config.autoClose;
    if (ms) {
      const bar = document.createElement('div');
      bar.className = 'sb-toast-progress';
      bar.style.animationDuration = `${ms}ms`;
      if (o.hideProgressBar ?? config.hideProgressBar) bar.dataset.hidden = '';
      bar.addEventListener('animationend', () => close(el.dataset.id));
      el.append(bar);
    }
    el._opts = o;
  }

  function show(content, o = {}) {
    const id = String(o.toastId ?? `toast-${++seq}`);
    if (live.has(id)) return id; // same toastId: no duplicate (use toast.update to change it)
    const el = document.createElement('div');
    el.className = 'sb-toast';
    el.dataset.id = id;
    el.addEventListener('click', e => o.onClick && !e.target.closest('button') && o.onClick(e));
    render(el, { ...o, render: content });
    region.append(el);
    live.set(id, el);
    [...live.keys()].slice(0, Math.max(0, live.size - config.max)).forEach(close);
    return id;
  }

  function close(id) {
    const el = live.get(String(id));
    if (!el) return;
    live.delete(String(id));
    el.dataset.state = 'closing';
    let done = false;
    const gone = () => { if (done) return; done = true; el.remove(); el._opts.onClose?.(); };
    el.addEventListener('transitionend', gone, { once: true });
    setTimeout(gone, 300); // reduced motion has no transition to wait for
  }

  const toast = (content, o) => show(content, o);
  for (const type of ['info', 'success', 'warning', 'error']) toast[type] = (content, o) => show(content, { ...o, type });
  toast.loading = (content, o) => show(content, { ...o, isLoading: true });
  // update(id, { render, type, isLoading, autoClose, … }): change a toast in place, e.g. loading -> success.
  toast.update = (id, changes) => {
    const el = live.get(String(id));
    if (el) render(el, { ...el._opts, ...changes, render: changes.render ?? el._opts.render });
  };
  toast.promise = (promise, msgs, o = {}) => {
    const id = toast.loading(msgs.pending, o);
    const pick = (m, v) => (typeof m === 'function' ? m(v) : m);
    promise.then(
      v => toast.update(id, { render: pick(msgs.success, v), type: 'success', isLoading: false }),
      e => toast.update(id, { render: pick(msgs.error, e), type: 'error', isLoading: false }),
    );
    return promise;
  };
  toast.dismiss = id => (id === undefined ? [...live.keys()] : [id]).forEach(close);
  toast.isActive = id => live.has(String(id));
  // Like <ToastContainer position autoClose hideProgressBar closeButton limit>.
  toast.config = o => {
    Object.assign(config, o);
    region.dataset.position = config.position;
  };
  return toast;
})({
  "info": "<svg data-i=\"info\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 16v-4M12 8h.01\"/></svg>",
  "success": "<svg data-i=\"check-circle\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/><path d=\"M22 4 12 14.01l-3-3\"/></svg>",
  "warning": "<svg data-i=\"alert\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01\"/></svg>",
  "error": "<svg data-i=\"alert-circle\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 8v4M12 16h.01\"/></svg>",
  "loading": "<span class=\"sb-toast-spinner\"></span>",
  "close": "<svg data-i=\"x\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M18 6 6 18M6 6l12 12\"/></svg>"
});
```

## Toggle

An on/off switch whose change takes effect immediately, such as "Tampilkan hanya klaim saya" or a notification setting. If the choice is applied only after Save, use a Checkbox.

### Usage

- **Takes effect immediately.** Use a toggle when flipping it changes something right away. If the choice is only applied after a Save or Submit button, use a Checkbox.
- **The label says what is turned on, not the state:** "Notifikasi email", not "Aktif/Nonaktif".
- Clicking the label toggles too.
- Use the Light theme only on brand-tinted surfaces.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Track + knob | Track fully rounded with 2 px padding. Knob white, raised (`raised-sheen-light`) with `shadow-sm`, left when off, right when on; it slides in 150 ms with `--ease`. |
| 2 | Label | Optional. Text sm / Medium (`md`: Text md / Medium), `gray-700`. Says what is turned on. |
| 3 | Supporting text | Optional. Text sm / Regular (`md`: Text md / Regular, 2 px below), `gray-500`. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Pressed | True, False | `checked` |
| Size | `sm`, `md` | `data-size` on `.sb-toggle` |
| Theme | Dark (standard), Light (brand-tinted) | `data-theme="light"` (omit for Dark) |
| State | Default, Hover, Focus, Disabled | `:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state` |
| Text / Supporting text | True, False | `<label for>` / `<p id>` + `aria-describedby`; without text, `aria-label` |

### Sizes

```html
<div class="sb-toggle" data-size="sm">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-sm" aria-describedby="tg-sm-sup" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-sm">Notifikasi email</label>
    <p class="sb-toggle-sup" id="tg-sm-sup">Kirim email saat status klaim berubah.</p>
  </div>
</div>
<div class="sb-toggle" data-size="md">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-md" aria-describedby="tg-md-sup" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-md">Notifikasi email</label>
    <p class="sb-toggle-sup" id="tg-md-sup">Kirim email saat status klaim berubah.</p>
  </div>
</div>
```

| Size | Track | Knob | Gap to text | Label | Supporting text |
| --- | --- | --- | --- | --- | --- |
| `sm` | 36 × 20 | 16 | 8 | Text sm / Medium `gray-700` | Text sm / Regular `gray-500` |
| `md` | 44 × 24 | 20 | 12 | Text md / Medium `gray-700` | Text md / Regular `gray-500`, 2 px below |

### States

| State | Off (track) | On (track) |
| --- | --- | --- |
| Default | `gray-100` | `brand-600` |
| Hover | `gray-200` | `brand-700` |
| Focus | Default + `0 0 0 4px` `focus-ring` ring | Default + `0 0 0 4px` `focus-ring` ring |
| Disabled | Default at 50 % opacity, flat knob | Default at 50 % opacity, flat knob |

Disabled: the whole toggle, label included, at 50 % opacity.

### Light theme

For brand-tinted surfaces only, such as the AI summary box. Off `brand-50`, hover `brand-100`, on `brand-200`.

```html
<div class="sb-toggle" data-size="sm" data-theme="light">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-light" aria-describedby="tg-light-sup" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-light">Tampilkan ringkasan AI</label>
    <p class="sb-toggle-sup" id="tg-light-sup">Ringkasan muncul di atas detail klaim.</p>
  </div>
</div>
```

### Do and don't

**Do:** The list filters as soon as the switch flips.

```html
<div class="sb-toggle" data-size="sm">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-do-now" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-do-now">Tampilkan hanya klaim saya</label>
  </div>
</div>
```

**Don't:** Nothing happens until Simpan. Use a Checkbox in forms.

```html
<div class="dd-form"><div class="sb-toggle" data-size="sm">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-dont-save" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-dont-save">Kirim salinan ke peserta</label>
  </div>
</div>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">Simpan</button></div>
```

**Do:** The label names what is switched on.

```html
<div class="sb-toggle" data-size="sm">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-do-label" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-do-label">Notifikasi email</label>
  </div>
</div>
```

**Don't:** The label repeats the state. Aktif what?

```html
<div class="sb-toggle" data-size="sm">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-dont-label" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-dont-label">Aktif</label>
  </div>
</div>
```

### Accessibility

- Use a native checkbox with `role="switch"`: it is focusable, Space flips it, and screen readers announce "switch, on/off" from `checked`.
- Connect the label with `for` / `id`, and the supporting text with `aria-describedby`. A toggle without visible text needs `aria-label`.
- The state also shows by position (knob left or right), not only by colour.
- Focus shows a 4 px `focus-ring` ring on `:focus-visible`.

| Pair | Ratio | Needed | Result |
| --- | --- | --- | --- |
| On track `brand-600` on `white` | 5.06:1 | 3:1 | Passes |
| Off track `gray-100` on `white` | 1.10:1 | 3:1 | **Fails** |
| Light theme on track `brand-200` on `brand-50` | 1.30:1 | 3:1 | **Fails** |
| Label `gray-700`, supporting text `gray-500` on `white` | 10.46:1, 4.97:1 | 4.5:1 | Passes |

> **Warning:** The Off track barely stands out from a white page (1.10:1); the knob's `shadow-sm` is what makes it visible. WCAG 1.4.11 asks 3:1 for the parts that show a control's state. A `gray-400` off track (2.58:1) or a 1 px `gray-300` border would help. Decision for the design team.

### Code

Load `tokens.css` and `toggle.css`. No script: the switch is a native checkbox, so click, label and keyboard work out of the box. Listen for `change` to apply the setting immediately.

`toggle.css`

```css
/* Toggle, Codemasters Design System
   Needs tokens.css. No script: it is a native checkbox.

   <div class="sb-toggle" data-size="sm">
     <input class="sb-toggle-input" type="checkbox" role="switch" id="notif" aria-describedby="notif-sup">
     <div class="sb-toggle-text">
       <label class="sb-toggle-label" for="notif">Notifikasi email</label>
       <p class="sb-toggle-sup" id="notif-sup">Kirim email saat status klaim berubah.</p>
     </div>
   </div>

   data-size    sm | md
   data-theme   light: brand-tinted, only on brand-tinted surfaces (omit for the standard Dark theme)
   Pressed      the checked attribute. Disabled: the disabled attribute.
   data-state   hover | focus on the input forces a state in static mockups and docs only. */

.sb-toggle {
  --tg-w: 36px; --tg-h: 20px; --tg-knob: 16px;
  --tg-off: var(--bg-tertiary); --tg-off-hover: var(--bg-quaternary); --tg-on: var(--brand-600); --tg-on-hover: var(--brand-700);
  display: inline-flex; align-items: flex-start; gap: 8px;
}
.sb-toggle[data-size="md"] { --tg-w: 44px; --tg-h: 24px; --tg-knob: 20px; gap: 12px; }
.sb-toggle[data-theme="light"] { --tg-off: var(--bg-brand-subtle); --tg-off-hover: var(--bg-brand-subtle-hover); --tg-on: var(--brand-200); --tg-on-hover: var(--brand-200); }
:root[data-theme="dark"] .sb-toggle[data-theme="light"] { --tg-on: var(--brand-800); --tg-on-hover: var(--brand-800); }

/* Track: fully rounded, 2 px padding. Knob: white, shadow-sm, slides 150 ms. */
.sb-toggle-input {
  position: relative; flex: none; box-sizing: border-box;
  width: var(--tg-w); height: var(--tg-h); margin: 0;
  border-radius: var(--radius-full); background: var(--tg-off);
  appearance: none; cursor: pointer;
  transition: background-color 150ms var(--ease), box-shadow 150ms var(--ease);
}
.sb-toggle-input::before {
  content: ''; position: absolute; top: 2px; left: 2px;
  width: var(--tg-knob); height: var(--tg-knob); border-radius: var(--radius-full);
  background: var(--raised-sheen-light) var(--white); box-shadow: var(--shadow-sm); /* the knob stays white in both themes */
  transition: translate 150ms var(--ease);
}
.sb-toggle-input:checked { background: var(--tg-on); }
.sb-toggle-input:checked::before { translate: calc(var(--tg-w) - var(--tg-knob) - 4px) 0; }
.sb-toggle-input:hover:not(:disabled), .sb-toggle-input[data-state="hover"] { background: var(--tg-off-hover); }
.sb-toggle-input:checked:hover:not(:disabled), .sb-toggle-input:checked[data-state="hover"] { background: var(--tg-on-hover); }
.sb-toggle-input:focus-visible, .sb-toggle-input[data-state="focus"] { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }
.sb-toggle-input:disabled { cursor: not-allowed; }
.sb-toggle-input:disabled::before { background-image: none; box-shadow: none; } /* flat */

/* Text */
.sb-toggle-text { display: grid; }
.sb-toggle-label { font: 500 var(--text-sm) var(--font); color: var(--text-secondary); cursor: pointer; }
.sb-toggle-sup { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }
.sb-toggle[data-size="md"] .sb-toggle-label { font-size: 16px; line-height: 24px; }
.sb-toggle[data-size="md"] .sb-toggle-sup { margin-top: 2px; font-size: 16px; line-height: 24px; }
/* Disabled: the whole control, label included, at 50 % opacity. */
.sb-toggle:has(:disabled) { opacity: .5; }
.sb-toggle:has(:disabled) :is(.sb-toggle-label, .sb-toggle-sup) { cursor: not-allowed; }

@media (prefers-reduced-motion: reduce) {
  .sb-toggle-input, .sb-toggle-input::before { transition: none; }
}
```

## Tooltip and help icon

A small label that appears on hover or keyboard focus to explain an element or show text that was cut off. The help icon is the standard trigger after a label or inside an input.

### Usage

- A tooltip only adds a short explanation, or the full text of something truncated. Never put essential information or actions in it: it is invisible on touch screens and easy to miss.
- Icon-only buttons and collapsed sidebar items always get a title-only tooltip with their label.
- Use the help icon after a field label (or inside the input, see Input field) when a term needs one sentence of explanation.
- Default to the tooltip above the trigger. Pick another arrow only when the tooltip would leave the viewport.
- Chart tooltips are a different component: a white card, see Data display.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | Radius 8, `shadow-lg`. Padding `8 12` title only, `12` with supporting text. Max width 320. |
| 2 | Title | Text xs / Semibold. Dark: `white`; Light: `gray-700`. |
| 3 | Supporting text | Optional. Text xs / Regular, 4 below the title. Dark: `white`; Light: `gray-500`. |
| 4 | Arrow | 16 × 6 in the fill colour, 4 px from the trigger. Corner arrows sit 14 from the edge. |

### Properties

| Component | Property | Values | Code |
| --- | --- | --- | --- |
| Tooltip | Theme | Dark, Light | `data-theme="light"`; Dark is the default |
| Tooltip | Supporting text | True, False | `<span class="sb-tooltip-text">` |
| Tooltip | Arrow | None, Top center, Bottom center, Bottom left, Bottom right, Left, Right | `data-arrow`; Bottom center is the default |
| Help icon | Open | True, False | `:hover`, `:focus-visible`. Static mockups only: `data-state="open"` on the wrap |
| Help icon | Tooltip | Top no arrow, Top arrow, Top left, Top right, Bottom, Left, Right | `data-arrow`: `none`, `bottom-center`, `bottom-left`, `bottom-right`, `top-center`, `right`, `left` |

### Arrow positions

The arrow points at the trigger. Bottom center (tooltip above) is the default.

### Themes

| Theme | Fill | Title | Supporting text |
| --- | --- | --- | --- |
| Dark (default) | `gray-900` | `white` | `white` |
| Light, on dark surfaces such as the sidebar | `white` | `gray-700` | `gray-500` |

#### Dark

#### Light

### Help icon

A 16 px `help-circle` after a field label (needs `input-field.css` here), `gray-400` (hover and open `gray-500`). It is a button, so it takes keyboard focus and shows the global focus outline. Hover it or Tab to it.

```html
<div class="sb-field">
  <div class="sb-help-row">
    <label class="sb-field-label" for="tp-polis">Nomor polis</label>
    <span class="sb-tooltip-wrap">
      <button class="sb-help" type="button" aria-label="Info" aria-describedby="tp-help-tip"><svg aria-hidden="true"><!-- help-circle --></svg></button>
      <span class="sb-tooltip" role="tooltip" id="tp-help-tip" data-arrow="bottom-left">
        <span class="sb-tooltip-title">Nomor polis</span>
        <span class="sb-tooltip-text">Nomor 10 digit di kartu peserta atau di halaman pertama polis asuransi.</span>
      </span>
    </span>
  </div>
  <div class="sb-input">
    <input id="tp-polis" type="text" placeholder="10 digit nomor polis">
  </div>
</div>
```

Inside an input the same icon sits at the end of the field; see Input field.

### Icon-only buttons

Icon-only buttons get a title-only tooltip with their label. Hover or focus the button.

```html
<span class="sb-tooltip-wrap">
  <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" data-icon="only" aria-label="Unduh laporan" aria-describedby="tb-dl-tip"><svg aria-hidden="true"><!-- download --></svg></button>
  <span class="sb-tooltip" role="tooltip" id="tb-dl-tip">
    <span class="sb-tooltip-title">Unduh laporan</span>
  </span>
</span>
```

### Behaviour

| Event | Result |
| --- | --- |
| Pointer enters the trigger | Opens after ~300 ms, fades in 150 ms |
| Keyboard focus on the trigger | Opens at once |
| Pointer moves onto the tooltip | Stays open (the 150 ms fade-out covers the 10 px gap) |
| Pointer leaves, blur | Closes |
| Esc | Closes until the pointer leaves or focus moves on (`tooltip.js`) |

### Do and don't

**Do:** One short sentence that explains a term.

```html
<div class="tip-stage is-short">
<span class="sb-tooltip-wrap">
  <button class="sb-help" type="button" aria-label="Info" aria-describedby="dd-t1-tip"><svg aria-hidden="true"><!-- help-circle --></svg></button>
  <span class="sb-tooltip" role="tooltip" id="dd-t1-tip">
    <span class="sb-tooltip-title">Nomor 10 digit di kartu peserta</span>
  </span>
</span>
</div>
```

**Don't:** A rejection and a deadline in a tooltip. Essential information belongs on the page; touch users never see it.

```html
<div class="tip-stage is-short">
<span class="sb-tooltip-wrap">
  <button class="sb-help" type="button" aria-label="Info" aria-describedby="dd-t2-tip"><svg aria-hidden="true"><!-- help-circle --></svg></button>
  <span class="sb-tooltip" role="tooltip" id="dd-t2-tip">
    <span class="sb-tooltip-title">Klaim ditolak</span>
    <span class="sb-tooltip-text">Dokumen kurang. Unggah ulang sebelum 12 Okt.</span>
  </span>
</span>
</div>
```

### Accessibility

- The tooltip has `role="tooltip"` and an `id`; the trigger points at it with `aria-describedby`.
- The help icon is a `<button>` with `aria-label="Info"`, so it opens on keyboard focus, not only on hover.
- Esc closes the tooltip without moving focus, and the pointer can move onto it (WCAG 1.4.13).
- Nothing in a tooltip is focusable: no links or buttons inside.

| Pair | Ratio | Needed | Result |
| --- | --- | --- | --- |
| Dark: `white` on `gray-900` | 17.75:1 | 4.5:1 | Passes |
| Light: title `gray-700`, text `gray-500` on `white` | 10.46:1, 4.97:1 | 4.5:1 | Passes |
| Help icon `gray-400` on `white` | 2.58:1 | 3:1 | **Fails** |

> **Warning:** The help icon in `gray-400` is 2.58:1, below 3:1 for meaningful icons (same as the WYSIWYG toolbar). `gray-500` (4.97:1) passes and is already its hover colour. Decision for the design team.

### Code

Load `tokens.css` and `tooltip.css`. Showing and hiding is CSS; add `tooltip.js` so Esc closes it.

`tooltip.css`

```css
/* Tooltip and help icon, Codemasters Design System
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
  --tip-bg: var(--bg-inverse); --tip-title: var(--white); --tip-text: var(--white);
  --tip-gap: 10px; /* 6 px arrow + 4 px to the trigger */
  position: absolute; z-index: 20; bottom: calc(100% + var(--tip-gap)); left: 50%; translate: -50% 0;
  display: grid; gap: 4px; box-sizing: border-box; width: max-content; max-width: min(320px, calc(100vw - 32px));
  padding: 8px 12px; border-radius: var(--radius-md); background: var(--tip-bg); box-shadow: var(--shadow-lg);
  font: 400 var(--text-xs) var(--font); color: var(--tip-text); text-align: start; white-space: normal;
  visibility: hidden; opacity: 0; transition: opacity 150ms var(--ease), visibility 0s linear 150ms;
}
.sb-tooltip[data-theme="light"] { --tip-bg: var(--bg-primary); --tip-title: var(--text-secondary); --tip-text: var(--text-quaternary); }
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
.sb-help { display: inline-flex; flex: none; margin: 0; padding: 0; border: 0; border-radius: var(--radius-full); background: none; color: var(--fg-quaternary); cursor: help; }
.sb-help > svg { width: 16px; height: 16px; }
.sb-help:hover, .sb-help:focus-visible, .sb-tooltip-wrap[data-state="open"] > .sb-help { color: var(--text-quaternary); }
.sb-help:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
/* After a label: label + help icon on one line, 4 apart. */
.sb-help-row { display: inline-flex; align-items: center; gap: 4px; }

@media (prefers-reduced-motion: reduce) {
  .sb-tooltip { transition: none; }
}
```

#### Esc script

`tooltip.js`

```js
// Tooltip: Esc closes it until the pointer leaves or focus moves on. Showing and hiding is CSS.
function tooltipKeydown(e) {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.sb-tooltip-wrap:is(:hover, :focus-within)').forEach(w => w.setAttribute('data-dismissed', ''));
}
function tooltipReset(e) {
  const wrap = e.type === 'mouseleave' ? e.target : e.target.closest?.('.sb-tooltip-wrap');
  if (wrap?.classList?.contains('sb-tooltip-wrap')) wrap.removeAttribute('data-dismissed');
}
document.addEventListener('keydown', tooltipKeydown);
document.addEventListener('mouseleave', tooltipReset, true); // mouseleave does not bubble: listen in the capture phase
document.addEventListener('focusout', tooltipReset);
```

## Verification code

One large box per digit, for OTP and verification codes only. Also called Mega input field.

### Usage

- Use it for OTP and verification codes only. Any other number goes in an Input field.
- **4 or 6 digits.** Six digits are split 3 + 3 by a dash so they are easier to read and copy.
- Typing a digit moves focus to the next box; Backspace on an empty box goes back; pasting a full code fills all boxes.
- **The error belongs to the whole code,** not to one digit: every box turns red, and editing any box clears the error.
- Six `md` boxes need about 560 px and six `sm` boxes about 460 px. On phones narrower than that, use 4 digits.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Label | One label for the whole group: Text sm / Medium, `gray-700`. |
| 2 | Group | Row of boxes, gap 8 (`sm`) or 12 (`md`, `lg`). `role="group"` named by the label. |
| 3 | Digit box | Square, padding 8, 1 px border, radius 8, `shadow-xs`, digit centred. Size and type from the size table. |
| 4 | Separator | 6 digits only: a `-` after the third box, Display xl / Medium `gray-300`. |
| 5 | Hint text | Text sm / Regular `gray-500`. In error it becomes the message in `error-500`. |

### Properties

| Property | Values | Code |
| --- | --- | --- |
| Size | `sm`, `md`, `lg` | `data-size` on `.sb-code` |
| Digits | 4, 6 | one `<input class="sb-code-digit">` per digit; 6 adds `.sb-code-sep` after the third |
| Label | True, False | label element referenced by `aria-labelledby`; without it, `aria-label` on the group |
| Hint text | True, False | `<p class="sb-field-hint" id>` referenced by `aria-describedby` |
| State (base) | Placeholder, Filled, Focused, Disabled | empty, `value`, `:focus`, `disabled`. Static mockups only: `data-state="focus"` |
| Destructive | True, False | `aria-invalid="true"` on every digit |

### Sizes

```html
<div class="sb-field">
  <div class="sb-code" data-size="sm" role="group" aria-label="Kode verifikasi">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 4" value="4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 4" value="8">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 4" value="2">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 4" value="9">
  </div>
</div>
<div class="sb-field">
  <div class="sb-code" data-size="md" role="group" aria-label="Kode verifikasi">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 4" value="4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 4" value="8">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 4" value="2">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 4" value="9">
  </div>
</div>
<div class="sb-field">
  <div class="sb-code" data-size="lg" role="group" aria-label="Kode verifikasi">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 4" value="4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 4" value="8">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 4" value="2">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 4" value="9">
  </div>
</div>
```

| Size | Box | Digit style | Gap between boxes |
| --- | --- | --- | --- |
| `sm` | 64 × 64 | Display lg / Medium (48/60) | 8 |
| `md` | 80 × 80 | Display lg / Medium (48/60) | 12 |
| `lg` | 96 × 96 | Display xl / Medium (60/72) | 12 |

### Digits

#### 4 digits

```html
<div class="sb-field">
  <span class="sb-field-label" id="dg-4-label">Kode verifikasi</span>
  <div class="sb-code" data-size="md" role="group" aria-labelledby="dg-4-label" aria-describedby="dg-4-hint">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 4">
  </div>
  <p class="sb-field-hint" id="dg-4-hint" aria-live="polite">Kode 4 digit dikirim lewat SMS.</p>
</div>
```

#### 6 digits

```html
<div class="sb-field">
  <span class="sb-field-label" id="dg-6-label">Kode verifikasi</span>
  <div class="sb-code" data-size="sm" role="group" aria-labelledby="dg-6-label" aria-describedby="dg-6-hint">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 6">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 6">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 6">
    <span class="sb-code-sep" aria-hidden="true">-</span>
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 6">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 5 dari 6">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 6 dari 6">
  </div>
  <p class="sb-field-hint" id="dg-6-hint" aria-live="polite">Kode 6 digit dikirim ke email Anda.</p>
</div>
```

### States

| State | Fill | Border | Digit |
| --- | --- | --- | --- |
| Placeholder | `white` | `gray-300` | `0` in `gray-300` |
| Filled | `white` | `brand-300` | `brand-600` |
| Focused | `white` | `brand-300` + 4 px `focus-ring` ring | `brand-600` |
| Disabled | Default at 50 % opacity | Default at 50 % opacity | Default at 50 % opacity |
| Error | `white` | `error-300` | `error-600` |
| Error + Focused | `white` | `error-300` + 4 px `error-100` ring | `error-600` |

#### Error

Every box goes red at once and the hint becomes the message, Text sm / Regular `error-500` ("Kode salah. Sisa 2 percobaan."). Type in any box to clear it.

```html
<div class="sb-field">
  <span class="sb-field-label" id="err-code-label">Kode verifikasi</span>
  <div class="sb-code" data-size="sm" role="group" aria-labelledby="err-code-label" aria-describedby="err-code-hint">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 6" value="4" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 6" value="8" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 6" value="2" aria-invalid="true">
    <span class="sb-code-sep" aria-hidden="true">-</span>
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 6" value="9" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 5 dari 6" value="1" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 6 dari 6" value="6" aria-invalid="true">
  </div>
  <p class="sb-field-hint" id="err-code-hint" aria-live="polite" data-hint="Kode 6 digit dikirim ke email Anda.">Kode salah. Sisa 2 percobaan.</p>
</div>
```

### Do and don't

**Do:** The whole code is wrong, so every box shows the error.

```html
<div class="sb-field">
  <div class="sb-code" data-size="sm" role="group" aria-label="Kode verifikasi" aria-describedby="dd-all-hint">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 4" value="4" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 4" value="8" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 4" value="2" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 4" value="9" aria-invalid="true">
  </div>
  <p class="sb-field-hint" id="dd-all-hint" aria-live="polite" data-hint="Kode 4 digit dikirim lewat SMS.">Kode salah. Sisa 2 percobaan.</p>
</div>
```

**Don't:** One red box suggests one wrong digit. The server only knows the code failed.

```html
<div class="sb-field">
  <div class="sb-code" data-size="sm" role="group" aria-label="Kode verifikasi">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 4" value="4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 4" value="8">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 4" value="2" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 4" value="9">
  </div>
</div>
```

### Accessibility

- Give the group one label (`role="group"` + `aria-labelledby`), and each box its position: `aria-label="Digit 1 dari 6"`.
- Use `inputmode="numeric"` for the number keyboard and `autocomplete="one-time-code"` on the first box, so the phone offers the SMS code. The script spreads an autofilled code over all boxes.
- Do not set `maxlength="1"`: it blocks that autofill. The script keeps one digit per box instead.
- The hint has `aria-live="polite"`, so the error is announced once when it appears.
- ← → move between boxes; Backspace on an empty box moves back and clears it.

| Text | On | Ratio | AA (large text 3:1) |
| --- | --- | --- | --- |
| Digit `brand-600` | `white` | 5.06:1 | Passes |
| Error digit `error-600` | `white` | 4.83:1 | Passes |
| Placeholder `0` in `gray-300` | `white` | 1.47:1 | **Fails** |
| Error message `error-500` | `white` | 3.76:1 | **Fails** (14 px text needs 4.5:1) |

> **Warning:** The placeholder `0` is very faint (1.47:1). The label and hint explain the field, so it is not the only cue, but `gray-400` or no placeholder at all would be clearer. The error message has the same `error-500` issue as Input field.

### Code

Load `tokens.css`, `verification-code.css` and `verification-code.js`. The script is required: it moves focus and handles paste and autofill.

`verification-code.css`

```css
/* Verification code input field (Mega input field), Codemasters Design System
   Needs tokens.css and verification-code.js.

   <div class="sb-field">
     <span class="sb-field-label" id="otp-label">Kode verifikasi</span>
     <div class="sb-code" data-size="md" role="group" aria-labelledby="otp-label" aria-describedby="otp-hint">
       <input class="sb-code-digit" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 6">
       … one input per digit; 6 digits put <span class="sb-code-sep" aria-hidden="true">-</span> after the 3rd
     </div>
     <p class="sb-field-hint" id="otp-hint">Kode dikirim ke email Anda.</p>
   </div>

   data-size   sm | md | lg
   Error       aria-invalid="true" on every digit. The hint becomes the error message.
   Disabled    the disabled attribute on every digit.
   Filled      comes from the value itself (:not(:placeholder-shown)).
   data-state="focus" on a digit forces Focused in static mockups and docs only. */

.sb-field { display: grid; gap: 6px; } /* label, control, hint 6 apart */
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--text-secondary); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }
.sb-field:has([aria-invalid="true"]) .sb-field-hint { color: var(--error-500); }

.sb-code { --code-box: 80px; --code-gap: 12px; --code-type: var(--display-lg); display: flex; align-items: center; gap: var(--code-gap); }
.sb-code[data-size="sm"] { --code-box: 64px; --code-gap: 8px; }
.sb-code[data-size="lg"] { --code-box: 96px; --code-type: var(--display-xl); }

.sb-code-digit {
  box-sizing: border-box; flex: none;
  width: var(--code-box); height: var(--code-box); margin: 0; padding: 8px;
  font: 500 var(--code-type) var(--font); letter-spacing: var(--tracking-display); text-align: center;
  color: var(--fg-brand); caret-color: var(--fg-brand);
  background: var(--bg-primary);
  border: 1px solid var(--border-primary); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-code-digit::placeholder { color: var(--border-primary); opacity: 1; }
.sb-code-digit:not(:placeholder-shown) { border-color: var(--border-brand); }
.sb-code-digit:focus, .sb-code-digit[data-state="focus"] {
  outline: none; border-color: var(--border-brand); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring);
}
.sb-code-digit:disabled { opacity: .5; cursor: not-allowed; } /* the default look at 50 % opacity */
.sb-code-digit[aria-invalid="true"] { border-color: var(--border-error); color: var(--error-600); caret-color: var(--error-600); }
.sb-code-digit[aria-invalid="true"]:focus, .sb-code-digit[aria-invalid="true"][data-state="focus"] { box-shadow: var(--shadow-xs), 0 0 0 4px var(--bg-error-subtle-hover); }

/* 6 digits split 3 + 3 by a dash in Display xl / Medium. */
.sb-code-sep { font: 500 var(--display-xl) var(--font); letter-spacing: var(--tracking-display); color: var(--border-primary); }
:root[data-theme="dark"] .sb-code-sep, :root[data-theme="dark"] .sb-code-digit::placeholder { color: var(--gray-600); } /* faint like light's gray-300, still visible on gray-900 */

@media (prefers-reduced-motion: reduce) {
  .sb-code-digit { transition: none; }
}
```

#### Script

`verification-code.js`

```js
// Verification code boxes: typing moves to the next box, Backspace on an empty box goes back,
// ← → move between boxes, and pasting (or autofill) spreads the code over all boxes.
function codeInput(e) {
  const box = e.target.closest?.('.sb-code-digit');
  if (!box) return;
  const boxes = [...box.closest('.sb-code').querySelectorAll('.sb-code-digit')];
  const i = boxes.indexOf(box);
  const digits = box.value.replace(/\D/g, '');
  clearCodeError(box);
  if (digits.length > 1) return fillCode(boxes, i, digits); // autofill of the whole code into one box
  box.value = digits;
  if (digits) boxes[i + 1]?.focus();
}
function codeKeydown(e) {
  const box = e.target.closest?.('.sb-code-digit');
  if (!box) return;
  const boxes = [...box.closest('.sb-code').querySelectorAll('.sb-code-digit')];
  const i = boxes.indexOf(box);
  if (e.key === 'Backspace' && !box.value && i > 0) {
    e.preventDefault();
    boxes[i - 1].value = '';
    boxes[i - 1].focus();
    clearCodeError(box);
  } else if (e.key === 'ArrowLeft') boxes[i - 1]?.focus();
  else if (e.key === 'ArrowRight') boxes[i + 1]?.focus();
}
function codePaste(e) {
  const box = e.target.closest?.('.sb-code-digit');
  if (!box) return;
  e.preventDefault();
  const boxes = [...box.closest('.sb-code').querySelectorAll('.sb-code-digit')];
  clearCodeError(box);
  fillCode(boxes, boxes.indexOf(box), e.clipboardData.getData('text').replace(/\D/g, ''));
}
function fillCode(boxes, start, digits) {
  [...digits].slice(0, boxes.length - start).forEach((d, k) => (boxes[start + k].value = d));
  boxes[Math.min(start + digits.length, boxes.length - 1)].focus();
}
function clearCodeError(box) {
  const group = box.closest('.sb-code');
  const invalid = group.querySelectorAll('[aria-invalid="true"]');
  if (!invalid.length) return;
  invalid.forEach(b => b.removeAttribute('aria-invalid'));
  const hint = document.getElementById(group.getAttribute('aria-describedby'));
  if (hint && hint.dataset.hint) hint.textContent = hint.dataset.hint;
}
document.addEventListener('input', codeInput);
document.addEventListener('keydown', codeKeydown);
document.addEventListener('paste', codePaste);
```

## WYSIWYG editor

Rich-text formatting for long text a user writes or edits: the AI summary ("Edit Ringkasan") and advisor notes. Use a plain Textarea when formatting is not needed.

### Usage

- Use it for long text a user writes or edits and that needs structure: the AI summary ("Edit Ringkasan"), advisor notes.
- When formatting is not needed, use Textarea input field.
- **Toolbar or tooltip, not both,** in one editor.
- **Icon order is fixed:** Bold, Italic, H1, H2, Quote, Link, Photo, List bullet, List numbers.
- The editor area follows Textarea input field: border, focus ring, error and counter.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Toolbar | Fixed above the editor area. Desktop: row, gap 12. Mobile: column, gap 8. |
| 2 | Text-style dropdown | 240 × 44 (full width on mobile), "Normal text", Text md / Medium `gray-900`, 20 px chevron. |
| 3 | Editor icon | 32 × 32 (28 on mobile), 20 px glyph, radius 8. Inactive `gray-400`; active `brand-100` fill, `brand-700` glyph. |
| 4 | Editor area | Same box as Textarea input field: min height 128, padding `10 14`, 1 px `gray-300` border, radius 8, `shadow-xs`. |

### Properties

| Component | Property | Values | Code |
| --- | --- | --- | --- |
| Editor icon | Type | Bold, Italic, H1, H2, Quote, Link, Photo, List bullet, List numbers | `data-cmd` + `aria-label` |
| Editor icon | Active | True, False | `aria-pressed="true"` |
| Editor icon | Theme | Light, Dark | Light in `.sb-wys-toolbar`, Dark in `.sb-wys-bubble` |
| Toolbar | Breakpoint | Desktop, Mobile | `data-breakpoint="mobile"` on the toolbar |
| Tooltip | Arrow | Center, Left, Right | `data-arrow` on `.sb-wys-bubble` (set by the script) |
| Tooltip | Breakpoint | Default (336 wide), Mobile (280 wide) | `data-breakpoint="mobile"` on the bubble |

### Editor icon

| Theme | Inactive glyph | Active |
| --- | --- | --- |
| Light (on the white toolbar) | `gray-400` | `brand-100` fill, `brand-700` glyph |
| Dark (in the tooltip) | `gray-300` | `gray-600` fill, `white` glyph |

Active means the format is applied to the current selection (`aria-pressed="true"`). Every icon has an `aria-label` and a tooltip with its name and, where one works, the shortcut: "Bold · Ctrl+B". Hover adds a `gray-50` fill so the icon reads as a button.

### Toolbar

#### Desktop

```html
<div class="sb-wys">
  <div class="sb-wys-toolbar" role="toolbar" aria-label="Format teks">
    <select class="sb-wys-select" aria-label="Gaya teks"><option value="p">Normal text</option><option value="h1">Heading 1</option><option value="h2">Heading 2</option><option value="blockquote">Quote</option></select>
    <div class="sb-wys-icons">
      <button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold" aria-keyshortcuts="Control+B" data-tip="Bold · Ctrl+B"><svg aria-hidden="true"><!-- bold --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="italic" aria-pressed="false" aria-label="Italic" aria-keyshortcuts="Control+I" data-tip="Italic · Ctrl+I"><svg aria-hidden="true"><!-- italic --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h1" aria-pressed="false" aria-label="Heading 1" data-tip="Heading 1"><svg aria-hidden="true"><!-- h1 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h2" aria-pressed="false" aria-label="Heading 2" data-tip="Heading 2"><svg aria-hidden="true"><!-- h2 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="blockquote" aria-pressed="false" aria-label="Quote" data-tip="Quote"><svg aria-hidden="true"><!-- quote --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="createLink" aria-pressed="false" aria-label="Link" data-tip="Link"><svg aria-hidden="true"><!-- link --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertImage" aria-pressed="false" aria-label="Photo" data-tip="Photo"><svg aria-hidden="true"><!-- image --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertUnorderedList" aria-pressed="false" aria-label="List bullet" data-tip="List bullet"><svg aria-hidden="true"><!-- list --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertOrderedList" aria-pressed="false" aria-label="List numbers" data-tip="List numbers"><svg aria-hidden="true"><!-- list-ordered --></svg></button>
    </div>
  </div>
  <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Ringkasan AI">
    <p>Pilih teks ini, lalu format dengan toolbar.</p>
  </div>
</div>
```

#### Mobile

```html
<div class="sb-wys">
  <div class="sb-wys-toolbar" role="toolbar" aria-label="Format teks" data-breakpoint="mobile">
    <select class="sb-wys-select" aria-label="Gaya teks"><option value="p">Normal text</option><option value="h1">Heading 1</option><option value="h2">Heading 2</option><option value="blockquote">Quote</option></select>
    <div class="sb-wys-icons">
      <button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold" aria-keyshortcuts="Control+B" data-tip="Bold · Ctrl+B"><svg aria-hidden="true"><!-- bold --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="italic" aria-pressed="false" aria-label="Italic" aria-keyshortcuts="Control+I" data-tip="Italic · Ctrl+I"><svg aria-hidden="true"><!-- italic --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h1" aria-pressed="false" aria-label="Heading 1" data-tip="Heading 1"><svg aria-hidden="true"><!-- h1 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h2" aria-pressed="false" aria-label="Heading 2" data-tip="Heading 2"><svg aria-hidden="true"><!-- h2 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="blockquote" aria-pressed="false" aria-label="Quote" data-tip="Quote"><svg aria-hidden="true"><!-- quote --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="createLink" aria-pressed="false" aria-label="Link" data-tip="Link"><svg aria-hidden="true"><!-- link --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertImage" aria-pressed="false" aria-label="Photo" data-tip="Photo"><svg aria-hidden="true"><!-- image --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertUnorderedList" aria-pressed="false" aria-label="List bullet" data-tip="List bullet"><svg aria-hidden="true"><!-- list --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertOrderedList" aria-pressed="false" aria-label="List numbers" data-tip="List numbers"><svg aria-hidden="true"><!-- list-ordered --></svg></button>
    </div>
  </div>
  <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Ringkasan AI">
    <p>Pilih teks ini, lalu format dengan toolbar.</p>
  </div>
</div>
```

| Breakpoint | Layout |
| --- | --- |
| Desktop | Row, gap 12: text-style dropdown (240 × 44) + 9 icons (32 px, gap 4) |
| Mobile | Column, gap 8: full-width dropdown, then 9 icons (28 px, gap 2) |

### Floating tooltip

Appears above selected text: `gray-900` fill, radius 8, padding 8, Dark icons with gap 4, and a 16 × 6 arrow pointing at the selection. `shadow-lg` is drawn as a drop-shadow so it follows the arrow. The arrow moves Left or Right when the bubble would leave the editor.

```html
<div class="sb-wys">
  <div class="sb-wys-bubble" role="toolbar" aria-label="Format teks" data-arrow="center" hidden>
    <button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold" aria-keyshortcuts="Control+B"><svg aria-hidden="true"><!-- bold --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="italic" aria-pressed="false" aria-label="Italic" aria-keyshortcuts="Control+I"><svg aria-hidden="true"><!-- italic --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="h1" aria-pressed="false" aria-label="Heading 1"><svg aria-hidden="true"><!-- h1 --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="h2" aria-pressed="false" aria-label="Heading 2"><svg aria-hidden="true"><!-- h2 --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="blockquote" aria-pressed="false" aria-label="Quote"><svg aria-hidden="true"><!-- quote --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="createLink" aria-pressed="false" aria-label="Link"><svg aria-hidden="true"><!-- link --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="insertImage" aria-pressed="false" aria-label="Photo"><svg aria-hidden="true"><!-- image --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="insertUnorderedList" aria-pressed="false" aria-label="List bullet"><svg aria-hidden="true"><!-- list --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="insertOrderedList" aria-pressed="false" aria-label="List numbers"><svg aria-hidden="true"><!-- list-ordered --></svg></button>
  </div>
  <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Ringkasan AI">
    <p>Pilih sebagian teks ini untuk memunculkan tooltip format di atasnya.</p>
  </div>
</div>
```

### Content styles

| Element | Style |
| --- | --- |
| Heading 1 | Text lg / Semibold |
| Heading 2 | Text md / Semibold |
| Body | Text md / Regular, `gray-900` |
| Quote | 2 px `gray-300` rule on the leading side, padding 12, `gray-600` text |
| Link | `brand-700`, underlined |
| Lists | Indented 24 |

Blocks sit 8 apart. Quote, link and list styles follow the existing type and colour rules.

### Do and don't

**Do:** One way to format: the toolbar.

```html
<div class="sb-wys">
  <div class="sb-wys-toolbar" role="toolbar" aria-label="Format teks">
    <select class="sb-wys-select" aria-label="Gaya teks"><option value="p">Normal text</option><option value="h1">Heading 1</option><option value="h2">Heading 2</option><option value="blockquote">Quote</option></select>
    <div class="sb-wys-icons">
      <button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold" aria-keyshortcuts="Control+B" data-tip="Bold · Ctrl+B"><svg aria-hidden="true"><!-- bold --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="italic" aria-pressed="false" aria-label="Italic" aria-keyshortcuts="Control+I" data-tip="Italic · Ctrl+I"><svg aria-hidden="true"><!-- italic --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h1" aria-pressed="false" aria-label="Heading 1" data-tip="Heading 1"><svg aria-hidden="true"><!-- h1 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h2" aria-pressed="false" aria-label="Heading 2" data-tip="Heading 2"><svg aria-hidden="true"><!-- h2 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="blockquote" aria-pressed="false" aria-label="Quote" data-tip="Quote"><svg aria-hidden="true"><!-- quote --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="createLink" aria-pressed="false" aria-label="Link" data-tip="Link"><svg aria-hidden="true"><!-- link --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertImage" aria-pressed="false" aria-label="Photo" data-tip="Photo"><svg aria-hidden="true"><!-- image --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertUnorderedList" aria-pressed="false" aria-label="List bullet" data-tip="List bullet"><svg aria-hidden="true"><!-- list --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertOrderedList" aria-pressed="false" aria-label="List numbers" data-tip="List numbers"><svg aria-hidden="true"><!-- list-ordered --></svg></button>
    </div>
  </div>
  <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Ringkasan AI">
    <p>Toolbar saja.</p>
  </div>
</div>
```

**Don't:** Toolbar and floating tooltip together. Two controls for the same job.

```html
<div class="sb-wys">
  <div class="sb-wys-toolbar" role="toolbar" aria-label="Format teks">
    <select class="sb-wys-select" aria-label="Gaya teks"><option value="p">Normal text</option><option value="h1">Heading 1</option><option value="h2">Heading 2</option><option value="blockquote">Quote</option></select>
    <div class="sb-wys-icons">
      <button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold" aria-keyshortcuts="Control+B" data-tip="Bold · Ctrl+B"><svg aria-hidden="true"><!-- bold --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="italic" aria-pressed="false" aria-label="Italic" aria-keyshortcuts="Control+I" data-tip="Italic · Ctrl+I"><svg aria-hidden="true"><!-- italic --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h1" aria-pressed="false" aria-label="Heading 1" data-tip="Heading 1"><svg aria-hidden="true"><!-- h1 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h2" aria-pressed="false" aria-label="Heading 2" data-tip="Heading 2"><svg aria-hidden="true"><!-- h2 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="blockquote" aria-pressed="false" aria-label="Quote" data-tip="Quote"><svg aria-hidden="true"><!-- quote --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="createLink" aria-pressed="false" aria-label="Link" data-tip="Link"><svg aria-hidden="true"><!-- link --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertImage" aria-pressed="false" aria-label="Photo" data-tip="Photo"><svg aria-hidden="true"><!-- image --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertUnorderedList" aria-pressed="false" aria-label="List bullet" data-tip="List bullet"><svg aria-hidden="true"><!-- list --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertOrderedList" aria-pressed="false" aria-label="List numbers" data-tip="List numbers"><svg aria-hidden="true"><!-- list-ordered --></svg></button>
    </div>
  </div>
  <div class="sb-wys-bubble" style="position: relative; justify-self: start" data-arrow="center"><button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold" aria-keyshortcuts="Control+B"><svg aria-hidden="true"><!-- bold --></svg></button><button class="sb-wys-btn" type="button" data-cmd="italic" aria-pressed="false" aria-label="Italic" aria-keyshortcuts="Control+I"><svg aria-hidden="true"><!-- italic --></svg></button><button class="sb-wys-btn" type="button" data-cmd="h1" aria-pressed="false" aria-label="Heading 1"><svg aria-hidden="true"><!-- h1 --></svg></button><button class="sb-wys-btn" type="button" data-cmd="h2" aria-pressed="false" aria-label="Heading 2"><svg aria-hidden="true"><!-- h2 --></svg></button></div>
  <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Ringkasan AI">
    <p>Toolbar dan tooltip.</p>
  </div>
</div>
```

### Accessibility

- The toolbar is `role="toolbar"` with an `aria-label`; the editor area is `role="textbox"` with `aria-multiline="true"` and a label.
- Each icon is a button with `aria-label`, `aria-pressed` for its state, and `aria-keyshortcuts` when a shortcut exists.
- Show a shortcut in the tooltip only when it really works (Bold, Italic).
- Pressing a toolbar button with the mouse keeps the text selection, so the format applies to what the user selected.

| Pair | Ratio | Needed | Result |
| --- | --- | --- | --- |
| Inactive icon `gray-400` on `white` | 2.58:1 | 3:1 (icons) | **Fails** |
| Active icon `brand-700` on `brand-100` | 5.45:1 | 3:1 | Passes |
| Dark inactive `gray-300` on `gray-900` | 12.04:1 | 3:1 | Passes |
| Dark active `white` on `gray-600` | 7.69:1 | 3:1 | Passes |

> **Warning:** Inactive toolbar icons in `gray-400` are below the 3:1 that WCAG 1.4.11 asks for icons. `gray-500` (4.97:1) passes. Decision for the design team.

### Code

Load `tokens.css` and `wysiwyg.css`. The reference script below makes this page work with the browser's built-in editing; a production editor library should keep the same markup, classes and ARIA.

`wysiwyg.css`

```css
/* WYSIWYG editor, Codemasters Design System
   Needs tokens.css. Behaviour comes from the app's editor (reference: wysiwyg.js).

   <div class="sb-wys">
     <div class="sb-wys-toolbar" role="toolbar" aria-label="Format teks">
       <select class="sb-wys-select" aria-label="Gaya teks">…</select>
       <div class="sb-wys-icons">
         <button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold"
                 aria-keyshortcuts="Control+B" data-tip="Bold · Ctrl+B"><svg aria-hidden="true">…</svg></button>
         …
       </div>
     </div>
     <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Ringkasan"></div>
   </div>

   data-breakpoint="mobile" on .sb-wys-toolbar: column layout, 28 px icons.
   .sb-wys-bubble instead of the toolbar: floating Dark tooltip above the selection. Use one, not both. */

.sb-wys { position: relative; display: grid; gap: 12px; }

/* Toolbar */
.sb-wys-toolbar { display: flex; align-items: center; gap: 12px; }
.sb-wys-toolbar[data-breakpoint="mobile"] { flex-direction: column; align-items: stretch; gap: 8px; }
.sb-wys-select {
  box-sizing: border-box; width: 240px; height: 44px; margin: 0; padding: 0 40px 0 14px;
  font: 500 var(--text-md) var(--font); color: var(--text-primary);
  background: var(--bg-primary) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23667085' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right 14px center / 20px;
  border: 1px solid var(--border-primary); border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  appearance: none; cursor: pointer;
}
.sb-wys-select:focus-visible { outline: none; border-color: var(--border-brand); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring); }
.sb-wys-toolbar[data-breakpoint="mobile"] .sb-wys-select { width: 100%; }
.sb-wys-icons { display: flex; flex-wrap: wrap; gap: 4px; }
.sb-wys-toolbar[data-breakpoint="mobile"] .sb-wys-icons { gap: 2px; } /* 28 px icons, gap 2 */

/* Editor icon: 32 x 32, 20 px glyph, radius 8 like every icon button of 32+. Light theme on the white toolbar. */
.sb-wys-btn {
  position: relative; box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 32px; height: 32px; margin: 0; padding: 0;
  color: var(--fg-quaternary); background: none; border: 0; border-radius: var(--radius-md);
  cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-wys-btn > svg { width: 20px; height: 20px; }
.sb-wys-toolbar[data-breakpoint="mobile"] .sb-wys-btn { width: 28px; height: 28px; }
.sb-wys-btn:hover { background: var(--bg-secondary); color: var(--text-tertiary); }
.sb-wys-btn[aria-pressed="true"] { background: var(--bg-brand-subtle-hover); color: var(--text-brand); }
.sb-wys-btn:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 0; }

/* Tooltip on each icon: name and shortcut, Dark tooltip spec. */
.sb-wys-btn[data-tip]::after {
  content: attr(data-tip); position: absolute; z-index: 10; bottom: calc(100% + 8px); left: 50%; translate: -50% 0;
  padding: 8px 12px; border-radius: var(--radius-md); background: var(--bg-inverse); box-shadow: var(--shadow-lg);
  font: 600 var(--text-xs) var(--font); color: var(--white); white-space: nowrap;
  visibility: hidden; opacity: 0; transition: opacity 150ms var(--ease), visibility 0s 150ms; pointer-events: none;
}
.sb-wys-btn[data-tip]:is(:hover, :focus-visible)::after { visibility: visible; opacity: 1; transition: opacity 150ms var(--ease) 300ms; }

/* Floating tooltip (Dark): gray-900, radius 8, padding 8, icons gap 4, 16 x 6 arrow, shadow-lg drawn as a filter. */
.sb-wys-bubble {
  position: absolute; z-index: 20; display: flex; gap: 4px; padding: 8px;
  background: var(--bg-inverse); border-radius: var(--radius-md);
  filter: drop-shadow(0 12px 8px rgba(16,24,40,.08)) drop-shadow(0 4px 3px rgba(16,24,40,.03));
}
.sb-wys-bubble[hidden] { display: none; }
.sb-wys-bubble::after {
  content: ''; position: absolute; top: 100%; left: 50%; translate: -50% 0;
  border: 8px solid transparent; border-top: 6px solid var(--bg-inverse); border-bottom: 0;
}
.sb-wys-bubble[data-arrow="left"]::after { left: 24px; }
.sb-wys-bubble[data-arrow="right"]::after { left: auto; right: 8px; translate: 0 0; }
.sb-wys-bubble[data-breakpoint="mobile"] .sb-wys-btn { width: 28px; height: 28px; }
.sb-wys-bubble[data-breakpoint="mobile"] { gap: 2px; }
/* Dark theme icons (inside the tooltip) */
.sb-wys-bubble .sb-wys-btn { color: var(--gray-300); } /* on the always-dark bubble */
.sb-wys-bubble .sb-wys-btn:hover { background: rgb(255 255 255 / .1); color: var(--white); } /* white tints work on the bubble in both themes */
.sb-wys-bubble .sb-wys-btn[aria-pressed="true"] { background: rgb(255 255 255 / .2); color: var(--white); }

/* Editor area: same box as Textarea input field. */
.sb-wys-area {
  box-sizing: border-box; min-height: 128px; padding: 10px 14px;
  font: 400 var(--text-md) var(--font); color: var(--text-primary);
  background: var(--bg-primary); border: 1px solid var(--border-primary); border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  overflow-wrap: anywhere;
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-wys-area:focus { outline: none; border-color: var(--border-brand); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring); }
.sb-wys-area[aria-invalid="true"] { border-color: var(--border-error); }
.sb-wys-area[aria-invalid="true"]:focus { box-shadow: var(--shadow-xs), 0 0 0 4px var(--bg-error-subtle-hover); }
/* Content styles map to the type scale. */
.sb-wys-area > * { margin: 0; }
.sb-wys-area > * + * { margin-top: 8px; }
.sb-wys-area h1 { font: 600 var(--text-lg) var(--font); }
.sb-wys-area h2 { font: 600 var(--text-md) var(--font); }
.sb-wys-area blockquote { padding-inline-start: 12px; border-inline-start: 2px solid var(--border-primary); color: var(--text-tertiary); }
.sb-wys-area ul, .sb-wys-area ol { padding-inline-start: 24px; }
.sb-wys-area a { color: var(--text-brand); text-underline-offset: 4px; }
.sb-wys-area img { max-width: 100%; border-radius: var(--radius-md); }

@media (prefers-reduced-motion: reduce) {
  .sb-wys-btn, .sb-wys-area, .sb-wys-btn[data-tip]::after { transition: none; }
}
```

#### Reference script

`wysiwyg.js`

```js
// Reference behaviour for the WYSIWYG editor, built on the browser's own editing commands.
// In production keep the markup, CSS and ARIA and let the app's editor library do the editing.
const BLOCK_VALUES = ['p', 'h1', 'h2', 'blockquote'];
function wysClick(e) {
  const btn = e.target.closest?.('.sb-wys-btn[data-cmd]');
  if (!btn) return;
  const wys = btn.closest('.sb-wys');
  const area = wys.querySelector('.sb-wys-area');
  const cmd = btn.dataset.cmd;
  area.focus();
  if (['h1', 'h2', 'blockquote'].includes(cmd)) {
    document.execCommand('formatBlock', false, currentBlock() === cmd ? 'p' : cmd);
  } else if (cmd === 'createLink' || cmd === 'insertImage') {
    const url = prompt(cmd === 'createLink' ? 'Alamat tautan' : 'Alamat gambar', 'https://');
    if (url) document.execCommand(cmd, false, url);
  } else {
    document.execCommand(cmd);
  }
  syncWys(wys);
}
function wysMousedown(e) {
  if (e.target.closest?.('.sb-wys-btn')) e.preventDefault();
}
function wysSelect(e) {
  const select = e.target.closest?.('.sb-wys-select');
  if (!select) return;
  const wys = select.closest('.sb-wys');
  wys.querySelector('.sb-wys-area').focus();
  document.execCommand('formatBlock', false, select.value);
  syncWys(wys);
}
function currentBlock() {
  return (document.queryCommandValue('formatBlock') || 'p').toLowerCase().replace(/^div$/, 'p');
}
function syncWys(wys) {
  const block = currentBlock();
  wys.querySelectorAll('.sb-wys-btn[data-cmd]').forEach(b => {
    const cmd = b.dataset.cmd;
    const on = ['h1', 'h2', 'blockquote'].includes(cmd) ? block === cmd : ['bold', 'italic', 'insertUnorderedList', 'insertOrderedList'].includes(cmd) && document.queryCommandState(cmd);
    b.setAttribute('aria-pressed', String(Boolean(on)));
  });
  const select = wys.querySelector('.sb-wys-select');
  if (select) select.value = BLOCK_VALUES.includes(block) ? block : 'p';
}
function wysSelection() {
  const sel = document.getSelection();
  document.querySelectorAll('.sb-wys').forEach(wys => {
    const area = wys.querySelector('.sb-wys-area');
    const inside = sel.rangeCount && area.contains(sel.anchorNode);
    if (inside) syncWys(wys);
    const bubble = wys.querySelector('.sb-wys-bubble');
    if (!bubble) return;
    if (!inside || sel.isCollapsed) return (bubble.hidden = true);
    bubble.hidden = false;
    const r = sel.getRangeAt(0).getBoundingClientRect();
    const box = wys.getBoundingClientRect();
    const ideal = r.left + r.width / 2 - box.left - bubble.offsetWidth / 2;
    const left = Math.max(0, Math.min(ideal, box.width - bubble.offsetWidth));
    bubble.dataset.arrow = left < ideal ? 'right' : left > ideal ? 'left' : 'center';
    bubble.style.left = `${left}px`;
    bubble.style.top = `${r.top - box.top - bubble.offsetHeight - 8}px`;
  });
}
document.addEventListener('click', wysClick);
document.addEventListener('mousedown', wysMousedown);
document.addEventListener('change', wysSelect);
document.addEventListener('selectionchange', wysSelection);
```

## Slides

Pitch decks and presentations for Codemasters, Sembuh AI and Flipmaster: a 1920 × 1080 canvas, a 12-column grid, fixed anchors and the same tokens as the web.

### Overview

This page records the slide system from the Sembuh pitch deck kit. The team builds in **Google Slides**; a deck generated as `.pptx` opens there with every text, shape and table still editable.

- **Flexible content, consistent design.** The author owns topic, story, data and slide count. The system owns type, colour, grid, spacing, components and logo use.
- **Inter** in every deck. It is a Google Font, so Google Slides and Docs can add it from **More fonts** without installing anything. (The kit specifies Google Sans, which Google Slides does not offer.)
- Colours are the web tokens. Each company swaps only its blue scale (see Logo).

### Canvas and grid

| Item | Value |
| --- | --- |
| Canvas | 1920 × 1080 px, 16:9. In Google Slides: custom size 13.333 × 7.5 in, where 1 px = 0.5 pt |
| Margins | 80 on every side. Safe area x 80–1840, y 80–1000 |
| Content width | 1760 |
| Grid | 12 columns of 110, gutter 40 |
| Common spans | 3 col = 380 (4-up), 4 = 560 (3-up), 6 = 860 (2-up), 7 + 5 = 1010 + 710 (feature split), 12 = 1760 |
| Footer zone | y 1000–1080, below the safe area |

| Vertical anchor | y |
| --- | --- |
| Eyebrow, logo | 80 |
| Headline | 124 |
| Content top | 222. Content is top-aligned; leftover space goes to the bottom |
| Support line (optional) | Headline bottom + 16; content then starts at max(222, support bottom + 40) |
| Footer rule | 1000 |

### Typography

Inter, two weights: Regular 400 and Medium 500. Sizes are canvas px; pt is what Google Slides shows on the 13.333 × 7.5 in page.

| Token | px | pt | Line height | Weight | Colour | Use |
| --- | --- | --- | --- | --- | --- | --- |
| `title1` | 96 | 48 | 1.2 | Medium | `gray-900` | Cover title, hero statement |
| `headline1` | 48 | 24 | 1.2 | Medium | `gray-900` (white on section slides) | Slide title, agenda title |
| `headline2` | 36 | 18 | 1.2 | Medium | `gray-900` | Metric values, secondary headlines, agenda rows, back-cover tagline |
| `body_large` | 30 | 15 | 1.4 | Regular | `gray-900` | Card titles, quotes, callouts |
| `body` | 24 | 12 | 1.4 | Regular | `gray-500` | Body copy, card descriptions, support line |
| `note` | 20 | 10 | 1.4 | Regular | `gray-500` | Eyebrow (uppercase), labels, chart labels, attribution |
| `table` | 20 | 10 | 1.4 | Regular (Medium in header and group rows) | `gray-900` | Table cells |
| `footer` | 16 | 8 | 1.4 | Regular | `gray-500` (legal notice ``brand-800``) | Source, legal notice |

### Colour

| Kit name | Token | Use |
| --- | --- | --- |
| `color.primary` | `gray-900` | Primary text, headlines |
| `color.secondary` | `gray-500` | Secondary text, metadata |
| `color.grey` | `gray-300` | Borders, dividers, image placeholder |
| `color.surface` | `gray-100` | Neutral containers |
| `color.white` | `white` | Canvas, table body, text on dark blue |
| `color.blue.dark` | `brand-800` | High-emphasis blue text, legal notice, flow lines |
| `color.blue.main` | `brand-400` | Brand blue: solid fills, table header, section background |
| `color.blue.secondary` | `brand-300` | Inactive agenda rows, secondary bars |
| `color.blue.surface` | `brand-100` | Blue-tinted surfaces, table group rows |

Chart series order: `brand-400`, `brand-300`, `brand-100`, `gray-300`. The only exception is the red "today" line in a Gantt chart.

| Card variant | Fill | Border | Title / body |
| --- | --- | --- | --- |
| standard | `white` | 1 px `gray-300` | `gray-900` / `gray-500` |
| surface | `gray-100` | none | `gray-900` / `gray-500` |
| blue | `brand-100` | none | `brand-800` / `brand-800` |
| blue_main | `brand-400` | none | `white` / `white` |
| blue_dark | `brand-800` | none | `white` / `white` |
| highlight | `white` | 1 px `brand-400` | `gray-900` / `gray-500` |

> **Warning:** White on `brand-400` is 2.63:1: section slide text, table headers, the blue_main card and the section bar. It fails even the 3:1 large-text bar. `brand-800` (8.64:1) passes. Open decision for the design team.

### Spacing, radius and shadow

| Item | Value |
| --- | --- |
| Spacing tokens | 4, 8, 16, 20, 24, 28, 32, 40, 56, 64, 80 |
| Card padding | 40 |
| Radius | Cards 12; badges, bars, placeholders and the client-logo box 8; never above 16 |
| Shadow | None, anywhere |

Stack elements by measured text height plus a spacing token, never by guessed offsets.

### Slide types

| Type | Background | Logo | Contents |
| --- | --- | --- | --- |
| Cover | Light (`bg-content`) | Colour lockup, 300 wide, bottom-right, bottom edge at 1000 | Client-logo box 268 × 100 at (80, 80). Title `title1`, span 7, bottom at 906. Date line `body` at 946. No footer |
| Section | Blue (`bg-divider`) | White logo 220 wide at (1620, 80) | "Table of The Contents" `headline1` white. Agenda rows `headline2`, 70 apart from y 462; current row white with a 10 px white marker, others `brand-300` on a 4 px rail. Legal notice only |
| Content | Light | Colour logo 220 wide at (1620, 80) | Eyebrow `note` uppercase, headline `headline1`, optional support line, body from 222, full footer |
| Back cover | Light | Colour lockup, 384 wide, top-left at (80, 80) | Tagline `headline2` at 200. Contact block from 640. Website URL `body_large`, bottom at 1000 |

> **Note:** "Powered by Codemasters" sits under the logo on the cover and the back cover. Content and section slides keep the logo alone, where the 32 px logo leaves no room for a readable endorsement. Proposal: confirm with the brand owner. The back-cover tagline moves from y 160 to 200 to clear the lockup.

| Footer element | Spec |
| --- | --- |
| Rule | 1 px `gray-300`, x 80, y 1000, 1760 wide. Not on section slides |
| Source | `footer` `gray-500`, left, box at (80, 1027), 860 wide |
| Legal notice | `footer` `brand-800` (white on section slides), right-aligned, box x 1130, 710 wide, y 1017, two lines |

### Components

| Component | Spec |
| --- | --- |
| Card | Six variants (Colour), radius 12, padding 40, height fits the content |
| Metric card | surface. Label `note` uppercase, +16, value `headline2` (`brand-800` when emphasised), +8, support `note` |
| Feature card | standard. Title `body_large`, +16, description `body` |
| Process steps | standard cards on equal tracks, equal heights. Number "01" `note` `brand-400`, title `body_large`, description `body`. Optional 2 px `brand-300` connectors |
| Table | Header and rows 72 high, cell padding `16 24`. Header `brand-400` with white Medium text, centred; numbers right-aligned; group rows `brand-100`. Neutral variant: `gray-100` header |
| Bar / column chart | Native shapes, not chart objects. Bars 40 high (columns up to 160 wide), radius 8. Highlight `brand-400`, others `brand-300`. Labels `note` |
| Gantt | Neutral table, label column 200. Bars 40 high, radius 8, in `brand-800` / `brand-400` / `brand-300` |
| Quote | `body_large` `gray-900`, +24, "— attribution" `note` `gray-500` |
| Callout | blue card. Label `note` uppercase `brand-800`, +16, text `body_large` |
| Badge | `brand-100` fill, `note` `brand-800`, padding `8 16`, radius 8 |
| Section bar | 56 high, `brand-400`, radius 8, `body` Medium white, centred |
| Bullets | "—" marker `brand-400`, indent 32, gap 16, `body` `gray-500` |
| Image placeholder | `gray-300` fill, radius 8, "Place an image here". Real images fit inside the box, never stretched |
| Legend | 24 × 24 swatch, 16 to the label (`body` `gray-500`), 40 between entries |

### Patterns

Pick the pattern from the information, never the other way round: content → one primary message → relationship → structure → pattern → components → tokens.

| Information | Pattern |
| --- | --- |
| One message that needs strong emphasis | Hero message, Central statement, Large number + context |
| A claim backed by evidence | Text + visual, Text + metric, Insight + evidence |
| Several related numbers | Metric group, Headline + chart, Headline + table |
| Equal-weight concepts | Card group, Multi-column information (Highlighted card group when one matters more) |
| Change or contrast | Problem → solution, Before → after, Comparison |
| How something works | Process, Product workflow (input → AI → analysis → output), Layered architecture |
| Structure of ideas | Framework, Nested hierarchy, Hub and spoke, 2 × 2 matrix, Funnel |
| Time | Roadmap |
| Proof from outside | Quote + context, Image + caption, Screenshot + explanation, Full-bleed visual |
| Ending | Closing insight, CTA |

### Composition rules

- Every content slide uses the same anchors: eyebrow 80, headline 124, body 222, rule 1000.
- Top-align content at 222; never vertically centre a card row to fill the slide.
- Every content slide carries the footer. Section transitions repeat the agenda with the current item highlighted.
- Every x comes from the grid. Cards in a group share top edges, padding and treatment, and are never taller than their content.
- One focal point per slide; supporting content is visibly subordinate. Highlight one data point per chart.
- Headlines state the takeaway, not the topic ("Waktu analisis turun 60%", not "Hasil").
- Left-align by default; never centre dense text. Put text straight on the background instead of carding everything.
- Text too long? Simplify, remove, reorganise, change the pattern, split the slide, and only then adjust the type size.

### Do and don't

| Do | Don't |
| --- | --- |
| Only token colours, type sizes, spacing values and radii | Shadows, gradients or decorative shapes |
| Colour logo on light slides, white logo on blue or photos | Stretch, crop, rotate or recolour a logo |
| Light background for content, blue only for section slides | The section background behind ordinary content |
| Charts as native shapes in the brand blues | Embedded chart objects, which bring their own colours |
| Images at their own proportions | Radius above 16, pill shapes, heavy borders around everything |
| Varied layouts when the information differs | Crowded slides, tiny text in tables and charts |

### Google Slides

- Page setup: **File → Page setup → Custom, 13.333 × 7.5 in**, so the px values above map to pt by halving them.
- Font: Inter, added once via **Font → More fonts** (Regular and Medium). It renders the same on every machine.
- Keep everything editable: text, shapes, lines and tables stay native; never flatten a slide to an image.
- Draw charts as shapes (or paste them as shapes). Turn off autofit; set text box insets to 0 so text sits on the anchors.
- No animations or effects.

> **Note:** A shared Google Slides template (master layouts for the four slide types per company) is the next step. Until it exists, start from a deck generated with the pitch deck kit.

### Decisions and open points

| Topic | Kit says | This system |
| --- | --- | --- |
| Font | Google Sans | Inter (decided 7 Oct 2026, after trying Instrument Sans and Albert Sans) |
| Grid | Prose 124 / 24; code 110 / 40 | 110 / 40, which reproduces every card width in the reference deck |
| Card padding | Docstring 32; constant 40 | 40 |
| Headline y | 124 and 128 in different places | 124 |
| Table header | Prose: neutral fill; code: `brand-400` + white | `brand-400` + white, neutral as a variant (contrast open, see Colour) |
| `brand-400` on white | Step numbers, bullet markers | 2.63:1: fine for the marker shape, too light for the "01" text. Open |
| Endorsement | — | Cover and back cover only. Proposal |

### Slide tokens

`slides.tokens.json`

```json
{
  "canvas": {
    "width": 1920,
    "height": 1080,
    "margin": 80,
    "unit": "px; 1 px = 0.5 pt on a 13.333 × 7.5 in page"
  },
  "grid": {
    "columns": 12,
    "column": 110,
    "gutter": 40,
    "contentWidth": 1760
  },
  "anchors": {
    "eyebrow": 80,
    "logo": 80,
    "headline": 124,
    "content": 222,
    "footerRule": 1000,
    "legalText": 1017,
    "sourceText": 1027
  },
  "font": "Inter",
  "type": {
    "title1": {
      "size": 96,
      "lineHeight": 1.2,
      "weight": 500
    },
    "headline1": {
      "size": 48,
      "lineHeight": 1.2,
      "weight": 500
    },
    "headline2": {
      "size": 36,
      "lineHeight": 1.2,
      "weight": 500
    },
    "body_large": {
      "size": 30,
      "lineHeight": 1.4,
      "weight": 400
    },
    "body": {
      "size": 24,
      "lineHeight": 1.4,
      "weight": 400
    },
    "note": {
      "size": 20,
      "lineHeight": 1.4,
      "weight": 400
    },
    "table": {
      "size": 20,
      "lineHeight": 1.4,
      "weight": 400
    },
    "footer": {
      "size": 16,
      "lineHeight": 1.4,
      "weight": 400
    }
  },
  "colour": {
    "primary": "var(--gray-900)",
    "secondary": "var(--gray-500)",
    "grey": "var(--gray-300)",
    "surface": "var(--gray-100)",
    "white": "var(--white)",
    "blue.dark": "var(--brand-800)",
    "blue.main": "var(--brand-400)",
    "blue.secondary": "var(--brand-300)",
    "blue.surface": "var(--brand-100)"
  },
  "spacing": [
    4,
    8,
    16,
    20,
    24,
    28,
    32,
    40,
    56,
    64,
    80
  ],
  "radius": {
    "card": 12,
    "small": 8,
    "max": 16
  },
  "shadow": "none",
  "logo": {
    "ratio": 6.84,
    "cover": {
      "x": 1540,
      "width": 300
    },
    "content": {
      "x": 1620,
      "y": 80,
      "width": 220
    },
    "backCover": {
      "x": 80,
      "y": 80,
      "width": 384
    }
  }
}
```

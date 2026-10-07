# Codemasters Design System

> Exported from the design system dashboard. Version 0.1.0.

The shared visual language of Codemasters and its companies, Sembuh AI and Flipmaster: web apps, websites, mobile, slides, documents and posters. Every value is a token and every component documents its variants, states and rules, so each surface built from it looks and behaves the same.

Figma: [Codemasters Design System](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems)

## Contents

- Principles
- Tokens
- Logo
- Colors
- Typography
- Icons
- Shadows & Blur
- Grids & Spacing
- Button
- Button group
- Social button
- Badge
- Input field
- Textarea input field
- Verification code
- WYSIWYG editor
- Input dropdown
- Dropdown menu
- Toggle
- Checkbox and radio
- Checkbox group
- Avatar
- Tooltip and help icon
- Progress bar and circle
- Slider
- Slides

## Principles

1. **Data first, chrome second.** White cards on a near-white page; colour is reserved for status, series and the one primary action. No decorative gradients or illustrations.
2. **One primary action per view.** The blue button is the next step of the flow (Mulai Analisis, Kirim ke Advisor, Keputusan). Everything else is secondary (white, gray border) or orange for Pending.
3. **Status is always a coloured pill.** Every claim status has one fixed colour pair, used in tables, headers, summary cards and filters alike.
4. **Never empty.** Every cell, field and card shows a value. Placeholder data is deterministic (same record, same value).
5. **Full numbers.** Money is written in full Rupiah (`Rp 1.725.283.300`), never abbreviated, except on chart axis ticks.
6. **Indonesian UI copy.** Sentence case for body text, Title Case for buttons, tabs and card titles.

## Tokens

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  /* Colour */
  --white: #ffffff;
  --gray-25: #fcfcfd;
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
  --brand-25: #fafcff;
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
  --error-25: #fffbfa;
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
  --warning-25: #fffcf5;
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
  --success-25: #f6fef9;
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
  --blue-gray-25: #fcfcfd;
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
  --blue-light-25: #f5fbff;
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
  --blue-25: #f5faff;
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
  --indigo-25: #f5f8ff;
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
  --purple-25: #fafaff;
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
  --pink-25: #fef6fb;
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
  --rose-25: #fff5f6;
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
  --orange-25: #fffaf5;
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

  /* Background blur: use as backdrop-filter: var(--blur-md) */
  --blur-sm: blur(4px);
  --blur-md: blur(8px);
  --blur-lg: blur(12px);
  --blur-xl: blur(20px);

  /* Focus ring: box-shadow: 0 0 0 4px var(--focus-ring) on :focus-visible */
  --focus-ring: color-mix(in srgb, var(--brand-500) 20%, transparent);

  /* Motion */
  --ease: cubic-bezier(.22,.61,.36,1);

  /* Typography: font: 600 var(--text-sm) var(--font). Display md and larger add letter-spacing: var(--tracking-display) */
  --font: 'Inter', sans-serif;
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

- Figma: [Design system file](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems)

### Brand architecture

An endorsed brand family: the companies keep their own names and logos, and all three use this design system. Only the blue scale (`--brand-25` to `--brand-900`) differs per company.

| Brand | Role | Logo | Blue scale |
| --- | --- | --- | --- |
| Codemasters | Parent company | Symbol + wordmark | To be confirmed |
| Sembuh AI | Company (claims analysis) | Wordmark, "AI" in brand blue | Current `brand` scale (`brand-500` `#5183EB`) |
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

- Colour logo on `white`, `gray-25` and `brand-50`.
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
.sb-lockup-endorse { display: inline-flex; align-items: center; gap: 8px; margin: 0; font: 500 var(--text-xs) var(--font); color: var(--gray-500); white-space: nowrap; }
.sb-lockup-endorse img { display: block; width: auto; height: calc(var(--lockup-h) * .4); }
```

## Colors

Thirteen colour families of 11 steps each. Every colour on screen is one of these tokens, never a free-picked hex.

- Figma: [Colors](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1525-271581)
- Figma: [Notes and documentation](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1525-274384)

### Principles

Every colour is a step on one of the scales below. Token name = `--{family}-{step}` (`Rosé` is `rose`, `Blue gray` is `blue-gray`, `Blue light` is `blue-light`). Click a swatch to copy its token.

- **Define before you design.** Never pick a colour with the colour picker. Pick a colour style (Figma) or a token (code). Free-picked colours give inconsistent screens and developers cannot tell which colour to use.
- **Full scales from the start.** Every family has 11 steps (25–900), also when a screen needs only two of them.
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
| 25 | `#FCFCFD` | `#FAFCFF` | `#FFFBFA` | `#FFFCF5` | `#F6FEF9` |
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
| 25 | `#FCFCFD` | `#F5FBFF` | `#F5FAFF` | `#F5F8FF` | `#FAFAFF` | `#FEF6FB` | `#FFF5F6` | `#FFFAF5` |
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

### How the scales are used

- **Fill / border / text pattern** for any tinted element: `50` fill, `200` border, `700` text, `500` icon. Use `25` for very quiet row tints (flagged or review rows).
- **Text on white:** `700`–`900` for text; `500` and up only for icons or large text. Steps `25`–`400` never carry text on white.
- **Solid fills with white text** (buttons): `500`–`900`.
- **Grays: few, used the same way every time.** Give each gray one job and keep it in every component: `gray-300` is always the input border, `gray-200` always the divider.

#### Gray in the app

| Token | Use in the app |
| --- | --- |
| `gray-25` | Page background, subtle card fill, inner boxes |
| `gray-50` | Table header, hover row, secondary hover |
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
| `brand-25` | Inactive tab, AI summary fill |
| `brand-50` | Selected range, Secondary color button |
| `brand-100` | Secondary color button hover |
| `brand-200` | Disabled primary button, AI summary border |
| `brand-300` | Input focus border, disabled Secondary color text, light Sembuh AI series |
| `brand-500` | **Primary**: buttons, active tab, Sembuh AI series; at 20 % it is the focus ring (`--focus-ring`) |
| `brand-600` | Primary button hover, Link color text |
| `brand-700` | Secondary color / Tertiary color button text, Link color hover, table ID links, tab text |
| `brand-800` | Deep accent |

### Semantic roles

| Role | Fill | Border | Text | Icon / strong |
| --- | --- | --- | --- | --- |
| Success | `success-50` | `success-200` | `success-700` | icon `success-500` |
| Warning | `warning-50` (row tint `warning-25`) | `warning-200` / `warning-300` | `warning-700` | icon `warning-500`, strong `warning-800` |
| Error | `error-50` (row tint `error-25`) | `error-200` | `error-700` | icon `error-500`, strong `error-600` |
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
| Sembuh AI | `brand-500` | `brand-300` |
| TPA | `orange-500` | `orange-300` |
| Extra series, in order | `500` of `blue-light`, `purple`, `pink`, `indigo`, `blue-gray` | `300` of the same family |

- Approved = solid; rejected = light fill (bars, sankey) or a **dashed** line (`6 4`) in line charts.
- Line charts: one point per x label, centred on it; lines only, a dot appears on hover.
- Unfocused series fade to 15–25 % opacity on hover or legend focus.
- Up = bad (more cost) is `error-600`; down = good is `success-600`.

### Do and don't

**Do:** A token pair from the scale: `success-50` fill, `success-700` text.

```html
<span class="sb-badge" data-size="sm" data-color="success">Disetujui: Sembuh</span>
```

**Don't:** A hex from the colour picker. Close to the scale, but not on it, and it fails AA.

```html
<span class="sb-badge" data-size="sm" style="background: #e8f8ee; color: #2f9e5b">Disetujui: Sembuh</span>
```

### Changing colours in Figma

Colours are Figma styles / variables. A change to a style cascades to every component and design that uses it.

1. Open the style: click the edit icon on the colour style, or select any layer that uses it and click **Edit style**.
2. Change the colour properties.
3. Repeat for every style that changes, in one pass, so none is missed. Large files take time to update.
4. To change the brand colour, edit the **Brand** styles. Do not switch components to another family one by one.

When a Figma colour changes, update `data/foundations.js` (the scales) in the same change; this page and `tokens.css` follow.

### Tokens

`tokens.css (colour)`

```css
:root {
  /* Colour */
  --white: #ffffff;
  --gray-25: #fcfcfd;
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
  --brand-25: #fafcff;
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
  --error-25: #fffbfa;
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
  --warning-25: #fffcf5;
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
  --success-25: #f6fef9;
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
  --blue-gray-25: #fcfcfd;
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
  --blue-light-25: #f5fbff;
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
  --blue-25: #f5faff;
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
  --indigo-25: #f5f8ff;
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
  --purple-25: #fafaff;
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
  --pink-25: #fef6fb;
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
  --rose-25: #fff5f6;
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
  --orange-25: #fffaf5;
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
}
```

## Typography

One typeface, Inter, on an 11-step scale from Display 2xl to Text xs. Every text uses a style from the scale; never set a size or line height by hand.

- Figma: [Typography](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1023-36826)
- Figma: [Notes and documentation](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1518-346785)

### Typeface

**Inter** (Google Fonts), fallback `sans-serif`. One typeface for display and text.

`Load the font`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

### Type scale

Click a style name to copy its `font` declaration. Every style comes in four weights; the Figma style name is `{Style}/{Weight}`, for example `Text sm/Medium`.

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

Figma also has `Text xl/Regular underlined` and `Text lg/Medium underlined` for inline links.

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
- **Letter spacing.** Display md and larger use −2 %. Figma stores it as a percentage; in CSS write `letter-spacing: var(--tracking-display)` (`-0.02em`), never `%`.
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

> **Warning:** The app also uses **Micro 10 / 16** (stat card labels, step notes). It is off the scale and not in Figma. Do not use it in new work.

### Slides and documents

- Titles Inter Semibold 600 (Bold 700 allowed for display headings), body Inter Regular or Medium.
- Keep the ratios of the scale, for example 40 / 24 / 16 on a 16:9 slide.

### Do and don't

**Do:** A style from the scale: Text xl / Semibold.

```html
<p style="margin: 0; font: 600 var(--text-xl) var(--font); color: var(--gray-900)">Ringkasan klaim</p>
```

**Don't:** 19 / 23 set by hand. Nearly Text xl, but off the scale, so the rhythm breaks.

```html
<p style="margin: 0; font: 600 19px/23px var(--font); color: var(--gray-900)">Ringkasan klaim</p>
```

### Changing text styles in Figma

Text styles cascade to every component that uses them.

1. Open the style: click the edit-style icon next to it, or select a text layer and open it from there.
2. Change the property (typeface, size, line height).
3. Change **all** text styles in one pass, not one at a time. The **Batch Styler** plugin edits many styles at once.
4. Keep the sizes and line heights of the scale; change only the typeface if the brand needs it.

When a Figma text style changes, update the typography tokens in `data/foundations.js` in the same change.

### Tokens

`tokens.css (typography)`

```css
:root {
  /* Typography: font: 600 var(--text-sm) var(--font). Display md and larger add letter-spacing: var(--tracking-display) */
  --font: 'Inter', sans-serif;
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

- Figma: [Design system file](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems)

### Style

- **Outline, Feather style.** Drawn on a 24 × 24 grid with a 2 px round stroke, which renders at 1.67 px when the icon is 20 px.
- **Sizes 12, 16, 20, 24.** 20 is the default in buttons, inputs and menus; 16 in small controls and badges; 24 in large buttons and empty states.
- **Colour = text colour.** Icons use `currentColor`, so they follow the label next to them and every state change.
- Exported from Figma as SVG into `public/assets/`. Do not mix in filled or two-tone icons from other sets.

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

The 43 icons used in this documentation. Click one to copy its name. The full set lives in the Figma file.

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

- Figma: [Shadows](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1532-352912)
- Figma: [Blurs](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1532-352913)

### Shadows

All shadows are `gray-900` (`16, 24, 40`) at low opacity. Use only these seven; never write a custom shadow. Click one to copy its token.

| Token | Figma | CSS value |
| --- | --- | --- |
| `--shadow-xs` | `Shadow/xs` | `0 1px 2px rgba(16,24,40,.05)` |
| `--shadow-sm` | `Shadow/sm` | `0 1px 3px rgba(16,24,40,.1), 0 1px 2px rgba(16,24,40,.06)` |
| `--shadow-md` | `Shadow/md` | `0 4px 8px -2px rgba(16,24,40,.1), 0 2px 4px -2px rgba(16,24,40,.06)` |
| `--shadow-lg` | `Shadow/lg` | `0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03)` |
| `--shadow-xl` | `Shadow/xl` | `0 20px 24px -4px rgba(16,24,40,.08), 0 8px 8px -4px rgba(16,24,40,.03)` |
| `--shadow-2xl` | `Shadow/2xl` | `0 24px 48px -12px rgba(16,24,40,.18)` |
| `--shadow-3xl` | `Shadow/3xl` | `0 32px 64px -12px rgba(16,24,40,.14)` |

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

A background blur also lifts an element: it blurs what is behind a translucent surface. Use it as `backdrop-filter`. Figma's blur radius is twice the CSS value.

#### Light

#### Dark

| Token | Figma | CSS value |
| --- | --- | --- |
| `--blur-sm` | `Background blur/sm`, radius 8 | `blur(4px)` |
| `--blur-md` | `Background blur/md`, radius 16 | `blur(8px)` |
| `--blur-lg` | `Background blur/lg`, radius 24 | `blur(12px)` |
| `--blur-xl` | `Background blur/xl`, radius 40 | `blur(20px)` |

- A blur needs a translucent fill to show: **light** `rgba(255,255,255,.6)` (white 60 %) with `gray-900` text, or **dark** `rgba(52,64,84,.6)` (`gray-700` 60 %) with white text.
- Use blur sparingly, as an accent: scrims behind dialogs, overlays on images or charts. Never put body text or tables on a blurred surface without a fill.
- The app does not use blur yet; the modal scrim is a flat `rgba(0,0,0,.2)`.

`Usage`

```css
.scrim { background: rgba(255,255,255,.6); backdrop-filter: var(--blur-md); }
```

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

  /* Background blur: use as backdrop-filter: var(--blur-md) */
  --blur-sm: blur(4px);
  --blur-md: blur(8px);
  --blur-lg: blur(12px);
  --blur-xl: blur(20px);
}
```

## Grids & Spacing

A 4 px soft grid: a fixed spacing scale, four containers, column grids for desktop, tablet and mobile, and the radius set.

- Figma: [Spacing](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1532-353525)
- Figma: [Grid layouts](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1532-353584)
- Figma: [Notes and documentation](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1532-353109)

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
- Figma tip: set **Preferences → Nudge amount → Big nudge** to 8 px, so Shift + arrow moves one grid step.

#### Use in the app

| Where | Value |
| --- | --- |
| Page padding | 32 |
| Gap between cards | 24 |
| Card padding | 24 (compact cards 16) |
| Between blocks inside a card | 16 |
| Between rows of a list | 12 |
| Between inline items | 8 |

> **Warning:** The app also uses `2` and `6` (for example the 6 px gap between a field label and its control). They are off the Figma scale; use 4 or 8 in new work.

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
- **Detail page:** header bar, then fact card (7-column grid, `gray-25` fill), then sticky tab row, then tab panels.

### Radius

| Value | Token | Use |
| --- | --- | --- |
| 4 | `--radius-sm` | Checkboxes, calendar days, progress and slider tracks, targets under 24 px (help icon, badge ×) |
| 8 | `--radius-md` | Icon buttons of 32 px and up, buttons, inputs, dropdown menus, tab tops (`8 8 0 0`), inner cards, banners |
| 12 | `--radius-lg` | Cards, dialogs, popover panels |
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

## Button

Runs an action on the current page: save, submit, open a dialog, start an analysis. Seven hierarchies tell the user which action matters most.

- Figma: [Button](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1038-34411)
- Figma: [Notes and documentation](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1532-357715)

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
| 4 | Trailing icon | Optional. Same size and gap as the leading icon. A menu trigger uses chevron-down, which turns 180° when the menu is open. |

### Properties

Each Figma property maps to one attribute, so a Figma file, a slide and the code describe a button with the same words.

| Property | Figma values | Code |
| --- | --- | --- |
| Hierarchy | Primary, Secondary gray, Secondary color, Tertiary color, Tertiary gray, Link color, Link gray | `data-hierarchy="primary"` to `"link-gray"` |
| Size | `sm`, `md`, `lg`, `xl`, `2xl` (`xs` is code-only for now) | `data-size="md"` |
| Icon | False, Leading, Trailing, Dot, Only | `<svg>` before or after the label, `<span class="sb-btn-dot">`, or `data-icon="only"` with `aria-label` |
| Destructive | False, True | `data-destructive` |
| State | Default, Hover, Focused, Disabled | `:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state="hover"` or `"focus"` |

### Hierarchy

Seven levels, from the one next step (Primary) to links inside text. Primary, Secondary gray and Secondary color carry `shadow-xs`; Tertiary and Link have no box until hover.

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

| Hierarchy | Default (fill / border / text) | Hover | Disabled | Focused |
| --- | --- | --- | --- | --- |
| Primary | `brand-500` / `brand-500` / `white` | `brand-600` / `brand-600` / `white` | `brand-200` / `brand-200` / `white` | 4 px `focus-ring` ring |
| Secondary gray | `white` / `gray-300` / `gray-700` | `gray-50` / `gray-300` / `gray-800` | `white` / `gray-200` / `gray-300` | 4 px `focus-ring` ring |
| Secondary color | `brand-50` / `brand-50` / `brand-700` | `brand-100` / `brand-100` / `brand-700` | `brand-25` / `brand-25` / `brand-300` | 4 px `focus-ring` ring |
| Tertiary color | none / none / `brand-700` | `brand-50` fill | text `gray-300` | 4 px `focus-ring` ring |
| Tertiary gray | none / none / `gray-500` | `gray-50` fill, text `gray-600` | text `gray-300` | 4 px `focus-ring` ring |
| Link color | text `brand-600`, no padding | text `brand-700` | text `gray-300` | 2 px `brand-500` outline |
| Link gray | text `gray-500`, no padding | text `gray-600` | text `gray-300` | 2 px `brand-500` outline |

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

> **Note:** `xs` is new in code and not in Figma yet. Padding `6 12` uses the control padding exception (Grids & Spacing): it lands the height on 32. Add the variant to the Figma Button set before designers use it.

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
- **Dot:** a 10 px `success-500` status dot before the label, same gap as an icon. Disabled turns it to the text colour.
- **Only:** a square button, width = height. Always give it an `aria-label` and a tooltip with the same text.
- Icons are Feather-style outlines with a 1.67 px stroke at 20 px, coloured with `currentColor` so they follow the text in every state.

#### Menu trigger

A button that opens a menu carries a trailing chevron-down. Set `aria-expanded`; the chevron turns 180° in 200 ms when it is `true`.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" aria-haspopup="menu" aria-expanded="false">
  Ekspor
  <svg aria-hidden="true"><!-- chevron-down --></svg>
</button>
```

### States

Hover moves one step darker, Focused adds a ring for keyboard users, Disabled fades to the light steps. Pressing scales the button to 96 %.

- Colour changes take 150 ms with `--ease`. Press is `scale(.96)`.
- Focused shows only on `:focus-visible`, so a mouse click leaves no ring.
- The ring is `0 0 0 4px var(--focus-ring)` (`brand-500` at 20 %) in every hierarchy, on top of `shadow-xs` where the variant has one. Link hierarchies have no box, so they use the global 2 px `brand-500` outline with 2 px offset.
- Disabled has no hover and no press, and shows `cursor: not-allowed`.

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

| Hierarchy | Default | Hover | Disabled | Focused |
| --- | --- | --- | --- | --- |
| Primary | `error-600` / `error-600` / `white` | `error-700` | `error-200` | 4 px `error-100` ring |
| Secondary gray | `white` / `error-300` / `error-700` | `error-50` fill, text `error-800` | border `error-200`, text `error-300` | 4 px `error-100` ring |
| Secondary color | `error-50` / `error-50` / `error-700` | `error-100` | `error-25`, text `error-300` | 4 px `error-100` ring |
| Tertiary color, Tertiary gray | text `error-700` | `error-50` fill (gray: text `error-800`) | text `error-300` | 4 px `error-100` ring |
| Link color, Link gray | text `error-700` | text `error-800` | text `error-300` | 2 px `brand-500` outline |

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

Text against its fill, measured with the WCAG 2.1 formula. AA needs 4.5:1 for button text. Disabled states are exempt.

| Variant | Text on fill | Ratio | AA |
| --- | --- | --- | --- |
| Primary | `white` on `brand-500` | 3.62:1 | **Fails** |
| Primary, hover | `white` on `brand-600` | 5.06:1 | Passes |
| Secondary gray | `gray-700` on `white` | 10.46:1 | Passes |
| Secondary color | `brand-700` on `brand-50` | 6.09:1 | Passes |
| Tertiary color | `brand-700` on `white` | 6.61:1 | Passes |
| Tertiary gray, Link gray | `gray-500` on `white` | 4.97:1 | Passes |
| Link color | `brand-600` on `white` | 5.06:1 | Passes |
| Destructive Primary | `white` on `error-600` | 4.83:1 | Passes |
| Destructive Secondary gray, Tertiary, Link | `error-700` on `white` | 6.57:1 | Passes |
| Destructive Secondary color | `error-700` on `error-50` | 6.05:1 | Passes |

> **Warning:** **Open decision.** Primary Default (`white` on `brand-500`) is 3.62:1, below the 4.5:1 that DESIGN.md §8 requires for button text. Options: move Primary Default to `brand-600` (5.06:1) and Hover to `brand-700`, or record an exception. This page documents the current Figma spec until the design team decides.

### Code

Load `tokens.css` (on the Overview page), then `button.css`. Every colour, size and shadow is a token, so changing a token changes every button.

`button.css`

```css
/* Button, Codemasters Design System
   Figma: Shared components / Buttons / Button (node 1038-34411)
   Needs tokens.css.

   <button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Kirim</button>

   data-hierarchy    primary | secondary-gray | secondary-color | tertiary-color | tertiary-gray | link-color | link-gray
   data-size         xs | sm | md | lg | xl | 2xl   (xs: dense desktop UI only, not in Figma yet)
   data-destructive  present = Destructive=True
   data-icon="only"  square icon-only button; add aria-label
   data-state        hover | focus. Forces a state in static mockups and docs. Never ship it in live UI:
                     live states come from :hover, :focus-visible and the disabled attribute. */

.sb-btn {
  --btn-h: 40px; --btn-px: 16px; --btn-gap: 8px; --btn-icon: 20px; --btn-type: var(--text-sm);
  --btn-bg: var(--brand-500); --btn-border: var(--brand-500); --btn-fg: var(--white);
  --btn-bg-hover: var(--brand-600); --btn-border-hover: var(--brand-600); --btn-fg-hover: var(--white);
  --btn-bg-disabled: var(--brand-200); --btn-border-disabled: var(--brand-200); --btn-fg-disabled: var(--white);
  --btn-ring: var(--focus-ring); --btn-shadow: var(--shadow-xs);
  box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; gap: var(--btn-gap);
  height: var(--btn-h); padding: 0 var(--btn-px);
  font: 600 var(--btn-type) var(--font); white-space: nowrap; text-decoration: none;
  color: var(--btn-fg); background: var(--btn-bg);
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
  --btn-bg: var(--white); --btn-border: var(--gray-300); --btn-fg: var(--gray-700);
  --btn-bg-hover: var(--gray-50); --btn-border-hover: var(--gray-300); --btn-fg-hover: var(--gray-800);
  --btn-bg-disabled: var(--white); --btn-border-disabled: var(--gray-200); --btn-fg-disabled: var(--gray-300);
}
.sb-btn[data-hierarchy="secondary-color"] {
  --btn-bg: var(--brand-50); --btn-border: var(--brand-50); --btn-fg: var(--brand-700);
  --btn-bg-hover: var(--brand-100); --btn-border-hover: var(--brand-100); --btn-fg-hover: var(--brand-700);
  --btn-bg-disabled: var(--brand-25); --btn-border-disabled: var(--brand-25); --btn-fg-disabled: var(--brand-300);
}
.sb-btn[data-hierarchy^="tertiary"] {
  --btn-bg: transparent; --btn-border: transparent;
  --btn-bg-disabled: transparent; --btn-border-disabled: transparent; --btn-fg-disabled: var(--gray-300);
  --btn-shadow: 0 0 #0000;
}
.sb-btn[data-hierarchy="tertiary-color"] {
  --btn-fg: var(--brand-700); --btn-bg-hover: var(--brand-50); --btn-border-hover: var(--brand-50); --btn-fg-hover: var(--brand-700);
}
.sb-btn[data-hierarchy="tertiary-gray"] {
  --btn-fg: var(--gray-500); --btn-bg-hover: var(--gray-50); --btn-border-hover: var(--gray-50); --btn-fg-hover: var(--gray-600);
}
.sb-btn[data-hierarchy^="link"] {
  --btn-h: auto; --btn-px: 0; --btn-shadow: 0 0 #0000;
  --btn-bg: transparent; --btn-border: transparent; --btn-bg-hover: transparent; --btn-border-hover: transparent;
  --btn-bg-disabled: transparent; --btn-border-disabled: transparent; --btn-fg-disabled: var(--gray-300);
  border-width: 0;
}
.sb-btn[data-hierarchy="link-color"] { --btn-fg: var(--brand-600); --btn-fg-hover: var(--brand-700); }
.sb-btn[data-hierarchy="link-gray"]  { --btn-fg: var(--gray-500); --btn-fg-hover: var(--gray-600); }

/* Destructive=True swaps Brand and Gray for Error. */
.sb-btn[data-destructive] {
  --btn-bg: var(--error-600); --btn-border: var(--error-600); --btn-fg: var(--white);
  --btn-bg-hover: var(--error-700); --btn-border-hover: var(--error-700); --btn-fg-hover: var(--white);
  --btn-bg-disabled: var(--error-200); --btn-border-disabled: var(--error-200); --btn-fg-disabled: var(--white);
  --btn-ring: var(--error-100);
}
.sb-btn[data-destructive][data-hierarchy="secondary-gray"] {
  --btn-bg: var(--white); --btn-border: var(--error-300); --btn-fg: var(--error-700);
  --btn-bg-hover: var(--error-50); --btn-border-hover: var(--error-300); --btn-fg-hover: var(--error-800);
  --btn-bg-disabled: var(--white); --btn-border-disabled: var(--error-200); --btn-fg-disabled: var(--error-300);
}
.sb-btn[data-destructive][data-hierarchy="secondary-color"] {
  --btn-bg: var(--error-50); --btn-border: var(--error-50); --btn-fg: var(--error-700);
  --btn-bg-hover: var(--error-100); --btn-border-hover: var(--error-100); --btn-fg-hover: var(--error-700);
  --btn-bg-disabled: var(--error-25); --btn-border-disabled: var(--error-25); --btn-fg-disabled: var(--error-300);
}
.sb-btn[data-destructive][data-hierarchy^="tertiary"] {
  --btn-bg: transparent; --btn-border: transparent; --btn-fg: var(--error-700);
  --btn-bg-hover: var(--error-50); --btn-border-hover: var(--error-50); --btn-fg-hover: var(--error-700);
  --btn-bg-disabled: transparent; --btn-border-disabled: transparent; --btn-fg-disabled: var(--error-300);
}
.sb-btn[data-destructive][data-hierarchy="tertiary-gray"] { --btn-fg-hover: var(--error-800); }
.sb-btn[data-destructive][data-hierarchy^="link"] {
  --btn-bg: transparent; --btn-border: transparent; --btn-fg: var(--error-700);
  --btn-bg-hover: transparent; --btn-border-hover: transparent; --btn-fg-hover: var(--error-800);
  --btn-bg-disabled: transparent; --btn-border-disabled: transparent; --btn-fg-disabled: var(--error-300);
}

/* States */
.sb-btn:hover:not(:disabled, [aria-disabled="true"]), .sb-btn[data-state="hover"] {
  color: var(--btn-fg-hover); background: var(--btn-bg-hover); border-color: var(--btn-border-hover);
}
.sb-btn:focus-visible, .sb-btn[data-state="focus"] {
  outline: none; box-shadow: var(--btn-shadow), 0 0 0 4px var(--btn-ring);
}
.sb-btn[data-hierarchy^="link"]:focus-visible, .sb-btn[data-hierarchy^="link"][data-state="focus"] {
  box-shadow: none; outline: 2px solid var(--brand-500); outline-offset: 2px;
}
.sb-btn:disabled, .sb-btn[aria-disabled="true"] {
  color: var(--btn-fg-disabled); background: var(--btn-bg-disabled); border-color: var(--btn-border-disabled);
  cursor: not-allowed;
}
.sb-btn:disabled > .sb-btn-dot, .sb-btn[aria-disabled="true"] > .sb-btn-dot { background: currentColor; }
.sb-btn:active:not(:disabled, [aria-disabled="true"]) { scale: .96; }

/* A button that opens a menu: the trailing chevron turns when open. */
.sb-btn[aria-expanded] > svg:last-child { transition: rotate 200ms var(--ease); }
.sb-btn[aria-expanded="true"] > svg:last-child { rotate: 180deg; }

@media (prefers-reduced-motion: reduce) {
  .sb-btn, .sb-btn > svg { transition: none; }
  .sb-btn:active:not(:disabled) { scale: 1; }
}
```

## Button group

A row of joined buttons for related, equal-weight choices: a view switch (Hari, Minggu, Bulan), pagination arrows or a small set of tools.

- Figma: [Button group](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1046-10171)
- Figma: [_Button group base](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1046-9312)

### Usage

- Use a button group for related, equal-weight choices: a view switch (Hari, Minggu, Bulan), pagination arrows, or a small set of tools.
- Never put a primary action next to secondary ones in a group. Use separate Buttons for that, so the hierarchy shows.
- All segments in one group use the same Icon type.
- When the group works as a switch, only one segment is Current at a time.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Group | 40 high (same as Button `md`), 1 px `gray-300` border, radius 8, `shadow-xs`. Clips its children, so only the outer corners are rounded. |
| 2 | Segment | `white` fill, padding `10 16` (icon-only `10 12`). Current=True fills it `gray-50`. |
| 3 | Divider | 1 px `gray-300` on the trailing side of each segment. The last one is hidden by the group border. |
| 4 | Icon | Optional. 20 px, gap 8, `gray-500` (Current: `gray-800`). The Dot variant puts a 10 px `success-500` dot here instead. |
| 5 | Label | Text sm / Semibold, `gray-700` (Current: `gray-800`). Icon-only segments drop it and carry an `aria-label`. |

### Properties

| Property | Figma values | Code |
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

For status filters. The dot stays `success-500` in every state except Disabled (`gray-300`).

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
| Default | `white` / `gray-700` / `gray-500` | `gray-50` / `gray-800` / `gray-800` |
| Hover | `gray-50` / `gray-800` / `gray-700` | `gray-50` / `gray-800` / `gray-800` |
| Focused | `gray-50` / `gray-700` / `gray-700` | `gray-50` / `gray-800` / `gray-800` |
| Disabled | `white` / `gray-300` / `gray-300` | `gray-50` / `gray-300` / `gray-300` |

> **Note:** Figma's Focused state is only a `gray-50` fill, the same as Hover. Code adds the 2 px `brand-500` focus outline on `:focus-visible`, drawn inside the segment because the group clips its children.

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
- Focus shows a 2 px `brand-500` outline inside the segment on `:focus-visible`.

| Segment | Text on fill | Ratio | AA |
| --- | --- | --- | --- |
| Default | `gray-700` on `white` | 10.46:1 | Passes |
| Hover, Current | `gray-800` on `gray-50` | 14.07:1 | Passes |
| Focused | `gray-700` on `gray-50` | 10.01:1 | Passes |
| Icon, Default | `gray-500` on `white` | 4.97:1 | Passes (3:1 needed for icons) |

### Code

Load `tokens.css`, then `button-group.css`. A switch also needs the arrow-key script below; toggles and actions need none.

`button-group.css`

```css
/* Button group, Codemasters Design System
   Figma: Shared components / Button group (node 1046-10171), _Button group base (node 1046-9312)
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
  background: var(--white);
  border: 1px solid var(--gray-300); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  overflow: hidden; /* only the outer corners are rounded */
}
.sb-btn-group > button {
  --seg-icon: var(--gray-500);
  box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 100%; margin: 0; padding: 0 16px;
  font: 600 var(--text-sm) var(--font); white-space: nowrap;
  color: var(--gray-700); background: var(--white);
  border: 0; border-inline-end: 1px solid var(--gray-300); border-radius: 0;
  cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-btn-group > button:last-child { border-inline-end: 0; }
.sb-btn-group > button > svg { width: 20px; height: 20px; flex: none; color: var(--seg-icon); }
.sb-btn-group[data-icon="only"] > button { padding: 0 12px; }
.sb-btn-group-dot { width: 10px; height: 10px; flex: none; border-radius: var(--radius-full); background: var(--success-500); }

/* States (fill / text / icon). Order matters: Current overrides Hover and Focused, Disabled only fades the text. */
.sb-btn-group > button:hover:not(:disabled), .sb-btn-group > button[data-state="hover"] {
  --seg-icon: var(--gray-700); color: var(--gray-800); background: var(--gray-50);
}
.sb-btn-group > button:focus-visible, .sb-btn-group > button[data-state="focus"] {
  --seg-icon: var(--gray-700); color: var(--gray-700); background: var(--gray-50);
  outline: 2px solid var(--brand-500); outline-offset: -2px; /* inside, because the group clips */
}
.sb-btn-group > [aria-checked="true"], .sb-btn-group > [aria-pressed="true"] {
  --seg-icon: var(--gray-800); color: var(--gray-800); background: var(--gray-50);
}
.sb-btn-group > button:disabled { --seg-icon: var(--gray-300); color: var(--gray-300); cursor: not-allowed; }
.sb-btn-group > button:disabled > .sb-btn-group-dot { background: var(--gray-300); }

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

## Social button

Signs the user in with an account on another platform. For third-party sign-in only.

- Figma: [Social button](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1256-130788)
- Figma: [Social button groups](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1256-132638)

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

| Property | Figma values | Code |
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

## Badge

A small, non-interactive label for a status, category or count. Status pills, claim type tags, AI confidence and filter chips are all badges.

- Figma: [Badge](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1046-3819)
- Figma: [_Badge base](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1046-28)
- Figma: [Badge group](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1046-8088)

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

| Property | Figma values | Code |
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

> **Note:** Figma gives the paddings for `sm` only (and Dot at `md`). The CSS keeps the same rule for every size: the icon side is 2 px tighter than the text side, and a flag or avatar sits as far from the edge as from the top and bottom.

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

| Figma Color | Token family | Use in the app |
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

In Figma the fill uses `mix-blend-mode: multiply`, so it tints on coloured backgrounds. On white it is the plain `50` colour, which is what the CSS draws.

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

| Property | Figma values | Code |
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
   Figma: Shared components / Badges: _Badge base (1046-28), Badge (1046-3819), Badge group (1046-8088)
   Needs tokens.css.

   <span class="sb-badge" data-size="sm" data-color="success">Disetujui: Sembuh</span>

   data-size   sm | md | lg
   data-color  gray | primary | error | warning | success | blue-gray | blue-light | blue | indigo | purple | pink | rose | orange
   data-icon   dot | country | avatar | icon-left | icon-right | x-close | only   (omit for text only)
   A badge is not a button. The only interactive part allowed is the X close button (aria-label "Hapus …"). */

.sb-badge {
  --bdg-h: 22px; --bdg-px: 8px; --bdg-type: var(--text-xs);
  --bdg-bg: var(--gray-100); --bdg-fg: var(--gray-700); --bdg-icon: var(--gray-500);
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
.sb-badge-avatar { align-items: center; justify-content: center; background: var(--brand-50); color: var(--brand-600); }
.sb-badge-avatar > svg { width: 12px; height: 12px; }
.sb-badge-x {
  display: inline-flex; margin: -2px; padding: 2px; border: 0; border-radius: var(--radius-sm);
  background: none; color: var(--bdg-icon); cursor: pointer;
  transition: color 150ms var(--ease);
}
.sb-badge-x > svg { width: 12px; height: 12px; }
.sb-badge-x:hover { color: var(--bdg-fg); }
.sb-badge-x:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 0; }

/* Sizes. Height comes from the text line plus the vertical padding (sm 2, md 2, lg 4). */
.sb-badge[data-size="md"] { --bdg-h: 24px; --bdg-px: 10px; --bdg-type: var(--text-sm); }
.sb-badge[data-size="lg"] { --bdg-h: 28px; --bdg-px: 12px; --bdg-type: var(--text-sm); }

/* Icon variants. Figma gives the sm values; md and lg follow the same rule. */
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
.sb-badge-group > .sb-badge { --bdg-bg: var(--white); --bdg-fg: var(--g700); --bdg-icon: var(--g500); }
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
a.sb-badge-group:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 2px; }
```

## Input field

A single-line text field with a label above, an optional hint below, and an error state that says what is wrong and how to fix it.

- Figma: [Input field](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1090-57817)
- Figma: [_Input field base](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1090-57627)

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

| Property | Figma values | Code |
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
| Disabled | `gray-50` | `gray-300` | `gray-500` | not editable, `cursor: not-allowed` |
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
| Disabled text `gray-500` | `gray-50` | 4.76:1 | Passes |
| Error message `error-500` | `white` | 3.76:1 | **Fails** |
| Field border `gray-300` | `white` | 1.47:1 | Below the 3:1 WCAG 1.4.11 asks for control boundaries |

> **Warning:** **Open decision.** The error message in `error-500` is 3.76:1, below AA for 14 px text. `error-600` (4.83:1) or `error-700` (6.57:1) pass. The `gray-300` border is also faint (1.47:1); the label above the field keeps it identifiable, but a darker border (`gray-400`) would help low-vision users. Both need a design team decision.

### Code

Load `tokens.css`, then `input-field.css`. States come from the input itself (`:focus`, `disabled`, `aria-invalid`), so no script is needed.

`input-field.css`

```css
/* Input field, Codemasters Design System
   Figma: Shared components / Input fields: _Input field base (1090-57627), Input field (1090-57817)
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

/* Label, control and hint sit 6 apart: Figma component spec (DESIGN.md Input field anatomy). */
.sb-field { display: grid; gap: 6px; }
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }

.sb-input {
  --inp-border: var(--gray-300); --inp-focus: var(--brand-300); --inp-ring: var(--focus-ring);
  position: relative; box-sizing: border-box;
  display: flex; align-items: center; gap: 8px;
  height: 44px; padding: 0 14px; /* control padding exception: 10 14 lands the height on 44 */
  background: var(--white);
  border: 1px solid var(--inp-border); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-input > svg { width: 20px; height: 20px; flex: none; color: var(--gray-500); }
.sb-input input {
  flex: 1; min-width: 0; height: 100%; margin: 0; padding: 0;
  font: 400 var(--text-md) var(--font); color: var(--gray-900);
  background: none; border: 0; outline: 0; /* focus shows on the whole field below */
}
.sb-input input::placeholder { color: var(--gray-500); opacity: 1; }

/* States */
.sb-input:hover:not(:focus-within, :has(input:disabled, [aria-invalid="true"])) { border-color: var(--gray-400); }
.sb-input:has(input:focus), .sb-input[data-state="focus"] {
  border-color: var(--inp-focus); box-shadow: var(--shadow-xs), 0 0 0 4px var(--inp-ring);
}
.sb-input:has(input:disabled) { background: var(--gray-50); cursor: not-allowed; }
.sb-input input:disabled { color: var(--gray-500); cursor: not-allowed; }
.sb-input:has([aria-invalid="true"]) { --inp-border: var(--error-300); --inp-focus: var(--error-300); --inp-ring: var(--error-100); }
.sb-field:has([aria-invalid="true"]) .sb-field-hint { color: var(--error-500); }

/* Help icon: 16 px help-circle at the end, opens a Dark tooltip on hover and focus.
   In error it is an alert-circle in error-500. */
.sb-input-help {
  display: inline-flex; flex: none; margin: 0; padding: 0; border: 0; border-radius: var(--radius-sm);
  background: none; color: var(--gray-400); cursor: help;
}
.sb-input-help > svg { width: 16px; height: 16px; }
.sb-input-help:hover, .sb-input-help:focus-visible { color: var(--gray-500); }
.sb-input-help:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 2px; }
.sb-input:has([aria-invalid="true"]) .sb-input-help { color: var(--error-500); }
.sb-input-tip {
  position: absolute; z-index: 10; bottom: calc(100% + 8px); inset-inline-end: 4px;
  max-width: 320px; padding: 8px 12px; border-radius: var(--radius-md);
  background: var(--gray-900); box-shadow: var(--shadow-lg);
  font: 600 var(--text-xs) var(--font); color: var(--white); white-space: nowrap;
  visibility: hidden; opacity: 0; transition: opacity 150ms var(--ease), visibility 0s 150ms;
}
.sb-input-help:is(:hover, :focus-visible) + .sb-input-tip { visibility: visible; opacity: 1; transition: opacity 150ms var(--ease); }

/* Types */
.sb-input-select {
  flex: none; height: 100%; margin: 0; padding: 0 24px 0 0; border: 0; outline: 0; appearance: none; cursor: pointer;
  font: 400 var(--text-md) var(--font); color: var(--gray-900);
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23667085' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right center / 20px;
}
.sb-input-select:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 2px; border-radius: var(--radius-sm); }
.sb-input[data-type="leading-dropdown"] .sb-input-select { margin-inline-end: 4px; } /* dropdown padding 10 12 10 14 */
.sb-input-prefix { flex: none; font: 400 var(--text-md) var(--font); color: var(--gray-500); }
.sb-input[data-type="leading-text"] { padding-inline-start: 0; gap: 0; }
.sb-input[data-type="leading-text"] input { padding-inline-start: 14px; }
.sb-input-addon {
  align-self: stretch; display: flex; align-items: center; flex: none;
  padding: 0 12px 0 14px; border-inline-end: 1px solid var(--gray-300);
  font: 400 var(--text-md) var(--font); color: var(--gray-500);
}
.sb-input[data-type="payment"] { padding-inline-start: 10px; }
.sb-input-card {
  display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 34px; height: 24px; box-sizing: border-box;
  background: var(--white); border: 1px solid var(--gray-100); border-radius: var(--radius-sm);
}
.sb-input-card > svg { width: 22px; height: 14px; }

@media (prefers-reduced-motion: reduce) {
  .sb-input, .sb-input-tip { transition: none; }
}
```

## Textarea input field

Multi-line text: notes, rejection reasons, AI summary edits. Same label, hint and error as Input field, plus an optional character counter.

- Figma: [Textarea input field](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1238-278)
- Figma: [_Textarea input field base](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1238-80)

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

| Property | Figma values | Code |
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
| Disabled | `gray-50` | `gray-300` | Text `gray-500`, no resize, `cursor: not-allowed` |
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
| Disabled text `gray-500` | `gray-50` | 4.76:1 | Passes |
| Error message, counter over limit `error-500` | `white` | 3.76:1 | **Fails** |

> **Warning:** Same open decision as Input field: `error-500` text is below AA. `error-600` (4.83:1) or `error-700` (6.57:1) would pass.

### Code

Load `tokens.css`, then `textarea.css`. Add `textarea-counter.js` only when a field has a limit.

`textarea.css`

```css
/* Textarea input field, Codemasters Design System
   Figma: _Textarea input field base (1238-80), Textarea input field (1238-278)
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

.sb-field { display: grid; gap: 6px; } /* Figma component spec: label, control, hint 6 apart */
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-field:has([aria-invalid="true"]) .sb-field-hint { color: var(--error-500); }

.sb-textarea { position: relative; display: grid; }
.sb-textarea textarea {
  --ta-border: var(--gray-300); --ta-focus: var(--brand-300); --ta-ring: var(--focus-ring);
  box-sizing: border-box; width: 100%; height: 128px; min-height: 128px; margin: 0;
  padding: 10px 14px; /* control padding exception, same as Input field */
  resize: vertical;
  font: 400 var(--text-md) var(--font); color: var(--gray-900);
  background: var(--white);
  border: 1px solid var(--ta-border); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-textarea textarea::placeholder { color: var(--gray-500); opacity: 1; }
/* Room for the counter so the last line never runs under it: 10 + 18 + 4. */
.sb-textarea:has(.sb-textarea-count) textarea { padding-bottom: 32px; }

/* States */
.sb-textarea textarea:hover:not(:focus, :disabled, [aria-invalid="true"]) { border-color: var(--gray-400); }
.sb-textarea textarea:focus, .sb-textarea[data-state="focus"] textarea {
  outline: none; border-color: var(--ta-focus); box-shadow: var(--shadow-xs), 0 0 0 4px var(--ta-ring);
}
.sb-textarea textarea:disabled { background: var(--gray-50); color: var(--gray-500); cursor: not-allowed; resize: none; }
.sb-textarea textarea[aria-invalid="true"] { --ta-border: var(--error-300); --ta-focus: var(--error-300); --ta-ring: var(--error-100); }

/* Character counter: bottom-right inside the box. Kept 24 from the edge so it clears the resize grip. */
.sb-textarea-count {
  position: absolute; bottom: 10px; inset-inline-end: 24px;
  font: 400 var(--text-xs) var(--font); color: var(--gray-500);
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

## Verification code

One large box per digit, for OTP and verification codes only. Figma calls it Mega input field.

- Figma: [Verification code input field](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1106-66757)
- Figma: [_Mega input field base](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1106-66560)

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

| Property | Figma values | Code |
| --- | --- | --- |
| Size | `sm`, `md`, `lg` | `data-size` on `.sb-code` |
| Digits | 4, 6 | one `<input class="sb-code-digit">` per digit; 6 adds `.sb-code-sep` after the third |
| Label | True, False | label element referenced by `aria-labelledby`; without it, `aria-label` on the group |
| Hint text | True, False | `<p class="sb-field-hint" id>` referenced by `aria-describedby` |
| State (base) | Placeholder, Filled, Focused, Disabled | empty, `value`, `:focus`, `disabled`. Static mockups only: `data-state="focus"` |
| Destructive (base, to add in Figma) | True, False | `aria-invalid="true"` on every digit |

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
| Disabled | `gray-50` | `gray-300` | `gray-200` |
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
   Figma: _Mega input field base (1106-66560), Verification code input field (1106-66757)
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

.sb-field { display: grid; gap: 6px; } /* Figma component spec: label, control, hint 6 apart */
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-field:has([aria-invalid="true"]) .sb-field-hint { color: var(--error-500); }

.sb-code { --code-box: 80px; --code-gap: 12px; --code-type: var(--display-lg); display: flex; align-items: center; gap: var(--code-gap); }
.sb-code[data-size="sm"] { --code-box: 64px; --code-gap: 8px; }
.sb-code[data-size="lg"] { --code-box: 96px; --code-type: var(--display-xl); }

.sb-code-digit {
  box-sizing: border-box; flex: none;
  width: var(--code-box); height: var(--code-box); margin: 0; padding: 8px;
  font: 500 var(--code-type) var(--font); letter-spacing: var(--tracking-display); text-align: center;
  color: var(--brand-600); caret-color: var(--brand-600);
  background: var(--white);
  border: 1px solid var(--gray-300); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-code-digit::placeholder { color: var(--gray-300); opacity: 1; }
.sb-code-digit:not(:placeholder-shown) { border-color: var(--brand-300); }
.sb-code-digit:focus, .sb-code-digit[data-state="focus"] {
  outline: none; border-color: var(--brand-300); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring);
}
.sb-code-digit:disabled { background: var(--gray-50); border-color: var(--gray-300); color: var(--gray-200); cursor: not-allowed; }
.sb-code-digit:disabled::placeholder { color: var(--gray-200); }
.sb-code-digit[aria-invalid="true"] { border-color: var(--error-300); color: var(--error-600); caret-color: var(--error-600); }
.sb-code-digit[aria-invalid="true"]:focus, .sb-code-digit[aria-invalid="true"][data-state="focus"] { box-shadow: var(--shadow-xs), 0 0 0 4px var(--error-100); }

/* 6 digits split 3 + 3 by a dash in Display xl / Medium. */
.sb-code-sep { font: 500 var(--display-xl) var(--font); letter-spacing: var(--tracking-display); color: var(--gray-300); }

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

- Figma: [Editor icon](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1705-454356)
- Figma: [Toolbar](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1705-454581)
- Figma: [Tooltip](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1706-438373)

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

| Component | Property | Figma values | Code |
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

Active means the format is applied to the current selection (`aria-pressed="true"`). Every icon has an `aria-label` and a tooltip with its name and, where one works, the shortcut: "Bold · Ctrl+B". Hover adds a `gray-50` fill so the icon reads as a button; Figma does not define hover yet.

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

Blocks sit 8 apart. Quote, link and list styles are not in Figma yet; they follow the existing type and colour rules.

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
   Figma: _WYSIWYG editor icon (1705-454356), WYSIWYG toolbar (1705-454581), WYSIWYG tooltip (1706-438373)
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
  font: 500 var(--text-md) var(--font); color: var(--gray-900);
  background: var(--white) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23667085' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right 14px center / 20px;
  border: 1px solid var(--gray-300); border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  appearance: none; cursor: pointer;
}
.sb-wys-select:focus-visible { outline: none; border-color: var(--brand-300); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring); }
.sb-wys-toolbar[data-breakpoint="mobile"] .sb-wys-select { width: 100%; }
.sb-wys-icons { display: flex; flex-wrap: wrap; gap: 4px; }
.sb-wys-toolbar[data-breakpoint="mobile"] .sb-wys-icons { gap: 2px; } /* Figma spec: 28 px icons, gap 2 */

/* Editor icon: 32 x 32, 20 px glyph, radius 8 like every icon button of 32+. Light theme on the white toolbar. */
.sb-wys-btn {
  position: relative; box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 32px; height: 32px; margin: 0; padding: 0;
  color: var(--gray-400); background: none; border: 0; border-radius: var(--radius-md);
  cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-wys-btn > svg { width: 20px; height: 20px; }
.sb-wys-toolbar[data-breakpoint="mobile"] .sb-wys-btn { width: 28px; height: 28px; }
.sb-wys-btn:hover { background: var(--gray-50); color: var(--gray-600); }
.sb-wys-btn[aria-pressed="true"] { background: var(--brand-100); color: var(--brand-700); }
.sb-wys-btn:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 0; }

/* Tooltip on each icon: name and shortcut, Dark tooltip spec. */
.sb-wys-btn[data-tip]::after {
  content: attr(data-tip); position: absolute; z-index: 10; bottom: calc(100% + 8px); left: 50%; translate: -50% 0;
  padding: 8px 12px; border-radius: var(--radius-md); background: var(--gray-900); box-shadow: var(--shadow-lg);
  font: 600 var(--text-xs) var(--font); color: var(--white); white-space: nowrap;
  visibility: hidden; opacity: 0; transition: opacity 150ms var(--ease), visibility 0s 150ms; pointer-events: none;
}
.sb-wys-btn[data-tip]:is(:hover, :focus-visible)::after { visibility: visible; opacity: 1; transition: opacity 150ms var(--ease) 300ms; }

/* Floating tooltip (Dark): gray-900, radius 8, padding 8, icons gap 4, 16 x 6 arrow, shadow-lg drawn as a filter. */
.sb-wys-bubble {
  position: absolute; z-index: 20; display: flex; gap: 4px; padding: 8px;
  background: var(--gray-900); border-radius: var(--radius-md);
  filter: drop-shadow(0 12px 8px rgba(16,24,40,.08)) drop-shadow(0 4px 3px rgba(16,24,40,.03));
}
.sb-wys-bubble[hidden] { display: none; }
.sb-wys-bubble::after {
  content: ''; position: absolute; top: 100%; left: 50%; translate: -50% 0;
  border: 8px solid transparent; border-top: 6px solid var(--gray-900); border-bottom: 0;
}
.sb-wys-bubble[data-arrow="left"]::after { left: 24px; }
.sb-wys-bubble[data-arrow="right"]::after { left: auto; right: 8px; translate: 0 0; }
.sb-wys-bubble[data-breakpoint="mobile"] .sb-wys-btn { width: 28px; height: 28px; }
.sb-wys-bubble[data-breakpoint="mobile"] { gap: 2px; }
/* Dark theme icons (inside the tooltip) */
.sb-wys-bubble .sb-wys-btn { color: var(--gray-300); }
.sb-wys-bubble .sb-wys-btn:hover { background: var(--gray-700); color: var(--white); }
.sb-wys-bubble .sb-wys-btn[aria-pressed="true"] { background: var(--gray-600); color: var(--white); }

/* Editor area: same box as Textarea input field. */
.sb-wys-area {
  box-sizing: border-box; min-height: 128px; padding: 10px 14px;
  font: 400 var(--text-md) var(--font); color: var(--gray-900);
  background: var(--white); border: 1px solid var(--gray-300); border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  overflow-wrap: anywhere;
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-wys-area:focus { outline: none; border-color: var(--brand-300); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring); }
.sb-wys-area[aria-invalid="true"] { border-color: var(--error-300); }
.sb-wys-area[aria-invalid="true"]:focus { box-shadow: var(--shadow-xs), 0 0 0 4px var(--error-100); }
/* Content styles map to the type scale. */
.sb-wys-area > * { margin: 0; }
.sb-wys-area > * + * { margin-top: 8px; }
.sb-wys-area h1 { font: 600 var(--text-lg) var(--font); }
.sb-wys-area h2 { font: 600 var(--text-md) var(--font); }
.sb-wys-area blockquote { padding-inline-start: 12px; border-inline-start: 2px solid var(--gray-300); color: var(--gray-600); }
.sb-wys-area ul, .sb-wys-area ol { padding-inline-start: 24px; }
.sb-wys-area a { color: var(--brand-700); text-underline-offset: 4px; }
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

## Input dropdown

A select field: pick one value for a form field or a filter. For running an action from a button, use Dropdown menu.

- Figma: [Input dropdown](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1096-8566)
- Figma: [_Input dropdown base](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1096-2)
- Figma: [Menu item](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1096-3156)
- Figma: [Menu](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1096-4590)

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
| 6 | Menu | Width of the field, max height 320, `white`, 1 px `gray-100` border, radius 8, `shadow-lg`, padding `4 0`, 8 below the field. |
| 7 | Check | 20 px `brand-600` at the end of the chosen option. |

### Properties

| Property | Figma values | Code |
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
      <svg class="sb-dd-chevron" data-i="chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="sb-dd-menu" id="ty-default-list" role="listbox" aria-labelledby="ty-default-label" hidden>
      <div class="sb-dd-opt" id="ty-default-0" role="option" aria-selected="true">
        <span class="sb-dd-main"><span class="sb-dd-label">Inpatient</span><span class="sb-dd-sup">Rawat inap</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-default-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Outpatient</span><span class="sb-dd-sup">Rawat jalan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-default-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Maternity</span><span class="sb-dd-sup">Persalinan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-default-3" role="option" aria-selected="false" aria-disabled="true">
        <span class="sb-dd-main"><span class="sb-dd-label">Optical</span><span class="sb-dd-sup">Kacamata</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-default-4" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Dental</span><span class="sb-dd-sup">Gigi</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
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
      <svg class="sb-dd-chevron" data-i="chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="sb-dd-menu" id="ty-icon-list" role="listbox" aria-labelledby="ty-icon-label" hidden>
      <div class="sb-dd-opt" id="ty-icon-0" role="option" aria-selected="true">
        <span class="sb-dd-main"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Admin</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-icon-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Advisor</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-icon-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Reviewer</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-icon-3" role="option" aria-selected="false">
        <span class="sb-dd-main"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Viewer</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
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
      <svg class="sb-dd-chevron" data-i="chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="sb-dd-menu" id="ty-avatar-list" role="listbox" aria-labelledby="ty-avatar-label" hidden>
      <div class="sb-dd-opt" id="ty-avatar-0" role="option" aria-selected="true">
        <span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AA</span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">@advisor-a</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-avatar-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AB</span><span class="sb-dd-label">Advisor B</span><span class="sb-dd-sup">@advisor-b</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-avatar-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AC</span><span class="sb-dd-label">Advisor C</span><span class="sb-dd-sup">@advisor-c</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-avatar-3" role="option" aria-selected="false" aria-disabled="true">
        <span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AD</span><span class="sb-dd-label">Advisor D</span><span class="sb-dd-sup">@advisor-d</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
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
      <svg class="sb-dd-chevron" data-i="chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="sb-dd-menu" id="ty-dot-list" role="listbox" aria-labelledby="ty-dot-label" hidden>
      <div class="sb-dd-opt" id="ty-dot-0" role="option" aria-selected="true">
        <span class="sb-dd-main"><span class="sb-dd-dot" aria-hidden="true"></span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">@advisor-a</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-dot-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-dot" aria-hidden="true"></span><span class="sb-dd-label">Advisor B</span><span class="sb-dd-sup">@advisor-b</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-dot-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-dot" aria-hidden="true"></span><span class="sb-dd-label">Advisor C</span><span class="sb-dd-sup">@advisor-c</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
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
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Bandung</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Surabaya</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-3" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Medan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-4" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Semarang</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-5" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Makassar</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-6" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Palembang</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-7" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Denpasar</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-8" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Yogyakarta</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-9" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Malang</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-10" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Balikpapan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-11" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Pontianak</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
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
| Row (44 high, padding `10 14`, gap 8) | no fill | `gray-50` | no fill |
| Label, Text md / Medium | `gray-900` | `gray-900` | `gray-200` |
| Supporting text, Text md / Regular | `gray-500` | `gray-500` | `gray-200` |
| Leading icon 20 px | `gray-500` | `gray-700` | `gray-200` |
| Check (selected) | 20 px `brand-600`, row fill `gray-50` | same | check `gray-200`, fill `gray-25` |

Keyboard focus (arrow keys) looks like Hover. Avatars in a disabled row get `opacity: .5`. The scroll bar (16 wide, 8 px `gray-200` thumb, no track) shows only when the list scrolls.

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
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Bandung</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Surabaya</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-3" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Medan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-4" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Semarang</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-5" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Makassar</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-6" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Palembang</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-7" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Denpasar</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-8" role="option" aria-selected="true">
        <span class="sb-dd-main"><span class="sb-dd-label">Yogyakarta</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-9" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Malang</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-10" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Balikpapan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-11" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Pontianak</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
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
      <svg class="sb-dd-chevron" data-i="chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="sb-dd-menu" id="dd-dd-actions-list" role="listbox" aria-labelledby="dd-dd-actions-label" hidden>
      <div class="sb-dd-opt" id="dd-dd-actions-0" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Unduh PDF</span><span class="sb-dd-sup">Rawat inap</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-actions-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Hapus klaim</span><span class="sb-dd-sup">Rawat jalan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-actions-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Maternity</span><span class="sb-dd-sup">Persalinan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-actions-3" role="option" aria-selected="false" aria-disabled="true">
        <span class="sb-dd-main"><span class="sb-dd-label">Optical</span><span class="sb-dd-sup">Kacamata</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-actions-4" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Dental</span><span class="sb-dd-sup">Gigi</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
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
   Figma: _Input dropdown base (1096-2), _Input dropdown menu item (1096-3156), _Input dropdown menu (1096-4590),
   Input dropdown (1096-8566). Needs tokens.css and input-dropdown.js. Label and hint rules match input-field.css.

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

.sb-field { display: grid; gap: 6px; } /* Figma component spec: label, control, hint 6 apart */
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }

.sb-dd { position: relative; }

/* Field: same box as Input field */
.sb-dd-trigger {
  box-sizing: border-box; display: flex; align-items: center; gap: 8px;
  width: 100%; height: 44px; margin: 0; padding: 0 14px;
  font: 400 var(--text-md) var(--font); color: var(--gray-900); text-align: start;
  background: var(--white); border: 1px solid var(--gray-300); border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  cursor: pointer;
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-dd-trigger:hover:not(:disabled, [aria-expanded="true"], :focus-within) { border-color: var(--gray-400); }
.sb-dd-trigger:focus-visible, .sb-dd-trigger[aria-expanded="true"], .sb-dd-trigger:has([aria-expanded="true"], input:focus), .sb-dd-trigger[data-state="open"] {
  outline: none; border-color: var(--brand-300); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring);
}
.sb-dd-trigger:disabled { background: var(--gray-50); color: var(--gray-500); cursor: not-allowed; }
.sb-dd-value, .sb-dd-main { display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0; }
.sb-dd-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sb-dd-sup { flex: none; color: var(--gray-500); font-weight: 400; }
.sb-dd-placeholder { color: var(--gray-500); }
.sb-dd-trigger > svg, .sb-dd-value > svg, .sb-dd-main > svg { width: 20px; height: 20px; flex: none; color: var(--gray-500); }
.sb-dd-chevron { transition: rotate 200ms var(--ease); }
.sb-dd-trigger[aria-expanded="true"] .sb-dd-chevron, .sb-dd-trigger[data-state="open"] .sb-dd-chevron { rotate: 180deg; }
.sb-dd-trigger[data-type="search"] { cursor: text; }
.sb-dd-trigger input { flex: 1; min-width: 0; height: 100%; margin: 0; padding: 0; border: 0; outline: 0; background: none; font: inherit; color: inherit; }
.sb-dd-trigger input::placeholder { color: var(--gray-500); opacity: 1; }

/* Leading elements */
.sb-dd-avatar {
  display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 24px; height: 24px; border-radius: var(--radius-full);
  background: var(--brand-50); font: 500 var(--text-xs) var(--font); color: var(--brand-600);
}
.sb-dd-dot { width: 10px; height: 10px; flex: none; border-radius: var(--radius-full); background: var(--success-500); }

/* Menu: width of the field, max height 320 (about 7 options), opens 8 below. */
.sb-dd-menu {
  position: absolute; z-index: 30; top: calc(100% + 8px); inset-inline: 0;
  box-sizing: border-box; max-height: 320px; overflow-y: auto; padding: 4px 0;
  background: var(--white); border: 1px solid var(--gray-100); border-radius: var(--radius-md); box-shadow: var(--shadow-lg);
  scrollbar-width: thin; scrollbar-color: var(--gray-200) transparent;
}
.sb-dd-menu[hidden] { display: none; }
/* _Scroll bar: 16 wide with padding 4, thumb 8 wide gray-200 radius 8, no track. Shows only when the list scrolls. */
.sb-dd-menu::-webkit-scrollbar { width: 16px; }
.sb-dd-menu::-webkit-scrollbar-thumb { background: var(--gray-200); border: 4px solid transparent; border-radius: var(--radius-md); background-clip: padding-box; }

/* Option row: 44 high, padding 10 14, gap 8 */
.sb-dd-opt {
  display: flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 14px;
  font: 500 var(--text-md) var(--font); color: var(--gray-900); cursor: pointer;
}
.sb-dd-opt:hover, .sb-dd-opt[data-active], .sb-dd-opt[aria-selected="true"] { background: var(--gray-50); }
.sb-dd-opt:hover .sb-dd-main > svg, .sb-dd-opt[data-active] .sb-dd-main > svg { color: var(--gray-700); }
.sb-dd-check { width: 20px; height: 20px; flex: none; color: var(--brand-600); visibility: hidden; }
.sb-dd-opt[aria-selected="true"] .sb-dd-check { visibility: visible; }
.sb-dd-opt[aria-disabled="true"] { background: none; color: var(--gray-200); cursor: not-allowed; }
.sb-dd-opt[aria-disabled="true"] .sb-dd-sup, .sb-dd-opt[aria-disabled="true"] .sb-dd-main > svg, .sb-dd-opt[aria-disabled="true"] .sb-dd-check { color: var(--gray-200); }
.sb-dd-opt[aria-disabled="true"][aria-selected="true"] { background: var(--gray-25); }
.sb-dd-opt[aria-disabled="true"] .sb-dd-avatar { opacity: .5; }
.sb-dd-empty { margin: 0; padding: 12px 14px; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
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

## Dropdown menu

An action menu opened from a button, a row-actions icon or the account avatar. For choosing a value in a form, use Input dropdown.

- Figma: [Dropdown](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1050-146925)
- Figma: [Dropdown menu](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1050-105632)
- Figma: [List item](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=18-319)
- Figma: [List header](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1050-40224)

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
| 3 | Item | 40 high, padding `10 16`, gap 12, Text sm / Medium `gray-700`. Hover and focus `gray-50`. |
| 4 | Icon or checkbox | 16 px icon `gray-700`, or a 16 px checkbox (radius 4). Never both. |
| 5 | Shortcut | Optional, right-aligned, Text xs / Regular `gray-500`. |

The panel is 240 wide, `white`, 1 px `gray-100` border, radius 8, `shadow-lg`, and clips its content. It opens 8 below its trigger, right-aligned.

### Properties

| Component | Property | Figma values | Code |
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
  <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" aria-haspopup="menu" aria-expanded="false" aria-controls="tr-button">Aksi klaim<svg aria-hidden="true"><!-- chevron-down --></svg></button>
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
| Row (40 high, padding `10 16`, gap 12) | no fill | `gray-50` | no fill |
| Label, Text sm / Medium | `gray-700` | `gray-700` | `gray-200` |
| Icon 16 px | `gray-700` | `gray-700` | `gray-200` |
| Checkbox 16 px, radius 4 | `white`, `gray-300` border | `brand-50` fill, `brand-600` border | `gray-100` fill, `gray-200` border |
| Shortcut (right-aligned) | Text xs / Regular `gray-500` | `gray-500` | `gray-200` |

#### Headers

### Checkbox menu

For multi-select filters inside a menu. Toggling an item keeps the menu open; Esc or a click outside closes it.

```html
<div class="sb-menu-wrap">
  <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" aria-haspopup="menu" aria-expanded="false" aria-controls="cb-menu">Tampilkan kolom<svg aria-hidden="true"><!-- chevron-down --></svg></button>
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
   Figma: _Dropdown list item (18-319), _Dropdown list header (1050-40224), _Dropdown menu base (1050-109778),
   Dropdown (1050-146925), Dropdown menu (1050-105632). Needs tokens.css and dropdown-menu.js;
   the Button trigger also needs button.css.

   <div class="sb-menu-wrap">
     <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md"
             aria-haspopup="menu" aria-expanded="false" aria-controls="aksi">Aksi <svg aria-hidden="true">…chevron…</svg></button>
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
.sb-menu-wrap > .sb-btn[aria-expanded="true"] { box-shadow: var(--shadow-xs), 0 0 0 4px var(--gray-100); } /* open: chevron up + gray-100 ring */
.sb-menu-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; margin: 0; padding: 0; border: 0; border-radius: var(--radius-md); /* hit area at least 32 x 32; radius 8 like every icon button of 32+ */
  background: none; color: var(--gray-500); cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-menu-icon > svg { width: 20px; height: 20px; }
.sb-menu-icon:hover, .sb-menu-icon[aria-expanded="true"] { background: var(--gray-50); color: var(--gray-700); }
.sb-menu-icon:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 2px; }
.sb-menu-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; margin: 0; padding: 0; border: 0; border-radius: var(--radius-full);
  background: var(--brand-50); font: 500 var(--text-md) var(--font); color: var(--brand-600); cursor: pointer;
  transition: box-shadow 150ms var(--ease);
}
.sb-menu-avatar:hover { box-shadow: 0 0 0 4px var(--gray-100); }
.sb-menu-avatar:focus-visible, .sb-menu-avatar[aria-expanded="true"] { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }

/* Panel: 240 wide (wider for long labels, never truncated), opens 8 below, right-aligned. */
.sb-menu {
  position: absolute; z-index: 30; top: calc(100% + 8px); inset-inline-end: 0;
  box-sizing: border-box; min-width: 240px; overflow: hidden;
  background: var(--white); border: 1px solid var(--gray-100); border-radius: var(--radius-md); box-shadow: var(--shadow-lg);
}
.sb-menu[hidden] { display: none; }
.sb-menu-group { padding: 4px 0; }
.sb-menu-sep { height: 1px; background: var(--gray-100); }

/* Header */
.sb-menu-header { display: flex; align-items: center; gap: 12px; padding: 12px 16px; }
.sb-menu-header-title { font: 600 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-menu-person { position: relative; display: inline-flex; align-items: center; justify-content: center; flex: none; width: 40px; height: 40px; border-radius: var(--radius-full); background: var(--brand-50); font: 500 var(--text-md) var(--font); color: var(--brand-600); }
.sb-menu-person::after { content: ''; position: absolute; right: -1px; bottom: -1px; width: 10px; height: 10px; border: 1.5px solid var(--white); border-radius: var(--radius-full); background: var(--success-500); }
.sb-menu-name { display: block; font: 600 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-menu-email { display: block; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }

/* Item: 40 high, padding 10 16, gap 12 */
.sb-menu-item {
  box-sizing: border-box; display: flex; align-items: center; gap: 12px;
  width: 100%; height: 40px; margin: 0; padding: 0 16px; border: 0;
  background: none; font: 500 var(--text-sm) var(--font); color: var(--gray-700); text-align: start; white-space: nowrap;
  cursor: pointer;
}
.sb-menu-item > svg { width: 16px; height: 16px; flex: none; }
.sb-menu-item:hover, .sb-menu-item:focus { outline: none; background: var(--gray-50); }
.sb-menu-item:focus-visible { box-shadow: inset 0 0 0 2px var(--brand-500); }
.sb-menu-label { flex: 1; }
.sb-menu-kbd { margin-inline-start: 16px; font: 400 var(--text-xs) var(--font); color: var(--gray-500); }
.sb-menu-item[aria-disabled="true"] { background: none; color: var(--gray-200); cursor: not-allowed; }
.sb-menu-item[aria-disabled="true"] .sb-menu-kbd { color: var(--gray-200); }

/* Checkbox (16 px, radius 4) */
.sb-menu-box {
  box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 16px; height: 16px; border: 1px solid var(--gray-300); border-radius: var(--radius-sm); background: var(--white); color: var(--brand-600);
}
.sb-menu-box > svg { width: 12px; height: 12px; visibility: hidden; }
.sb-menu-item:hover .sb-menu-box, .sb-menu-item:focus .sb-menu-box, .sb-menu-item[aria-checked="true"] .sb-menu-box { background: var(--brand-50); border-color: var(--brand-600); }
.sb-menu-item[aria-checked="true"] .sb-menu-box > svg { visibility: visible; }
.sb-menu-item[aria-disabled="true"] .sb-menu-box { background: var(--gray-100); border-color: var(--gray-200); color: var(--gray-200); }

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

## Toggle

An on/off switch whose change takes effect immediately, such as "Tampilkan hanya klaim saya" or a notification setting. If the choice is applied only after Save, use a Checkbox.

- Figma: [Toggle](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1102-4208)
- Figma: [_Toggle base](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=122-3294)

### Usage

- **Takes effect immediately.** Use a toggle when flipping it changes something right away. If the choice is only applied after a Save or Submit button, use a Checkbox.
- **The label says what is turned on, not the state:** "Notifikasi email", not "Aktif/Nonaktif".
- Clicking the label toggles too.
- Use the Light theme only on brand-tinted surfaces.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Track + knob | Track fully rounded with 2 px padding. Knob white with `shadow-sm`, left when off, right when on; it slides in 150 ms with `--ease`. |
| 2 | Label | Optional. Text sm / Medium (`md`: Text md / Medium), `gray-700`. Says what is turned on. |
| 3 | Supporting text | Optional. Text sm / Regular (`md`: Text md / Regular, 2 px below), `gray-500`. |

### Properties

| Property | Figma values | Code |
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
| Disabled | `gray-100`, knob `gray-50` | `gray-100`, knob `gray-50` |

Disabled: the label and supporting text drop to `gray-300`.

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
   Figma: _Toggle base (122-3294), Toggle (1102-4208). Needs tokens.css. No script: it is a native checkbox.

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
  --tg-off: var(--gray-100); --tg-off-hover: var(--gray-200); --tg-on: var(--brand-600); --tg-on-hover: var(--brand-700);
  display: inline-flex; align-items: flex-start; gap: 8px;
}
.sb-toggle[data-size="md"] { --tg-w: 44px; --tg-h: 24px; --tg-knob: 20px; gap: 12px; }
.sb-toggle[data-theme="light"] { --tg-off: var(--brand-50); --tg-off-hover: var(--brand-100); --tg-on: var(--brand-200); --tg-on-hover: var(--brand-200); }

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
  background: var(--white); box-shadow: var(--shadow-sm);
  transition: translate 150ms var(--ease);
}
.sb-toggle-input:checked { background: var(--tg-on); }
.sb-toggle-input:checked::before { translate: calc(var(--tg-w) - var(--tg-knob) - 4px) 0; }
.sb-toggle-input:hover:not(:disabled), .sb-toggle-input[data-state="hover"] { background: var(--tg-off-hover); }
.sb-toggle-input:checked:hover:not(:disabled), .sb-toggle-input:checked[data-state="hover"] { background: var(--tg-on-hover); }
.sb-toggle-input:focus-visible, .sb-toggle-input[data-state="focus"] { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }
.sb-toggle-input:disabled { background: var(--gray-100); cursor: not-allowed; }
.sb-toggle-input:disabled::before { background: var(--gray-50); }

/* Text */
.sb-toggle-text { display: grid; }
.sb-toggle-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); cursor: pointer; }
.sb-toggle-sup { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-toggle[data-size="md"] .sb-toggle-label { font-size: 16px; line-height: 24px; }
.sb-toggle[data-size="md"] .sb-toggle-sup { margin-top: 2px; font-size: 16px; line-height: 24px; }
.sb-toggle:has(:disabled) .sb-toggle-label, .sb-toggle:has(:disabled) .sb-toggle-sup { color: var(--gray-300); cursor: not-allowed; }

@media (prefers-reduced-motion: reduce) {
  .sb-toggle-input, .sb-toggle-input::before { transition: none; }
}
```

## Checkbox and radio

One component for three selection controls, picked with Type: Checkbox for any number of options, Radio for exactly one, and Check circle for selectable cards and rows.

- Figma: [Checkbox](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1097-63652)
- Figma: [_Checkbox base](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1097-63886)

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

| Property | Figma values | Code |
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
| Disabled | `gray-100` fill, `gray-200` border | `gray-100` fill, `gray-200` border, `gray-200` mark |

Check circle, checked: solid `brand-600` with a white check (disabled: `gray-200` fill). Disabled also drops the label and supporting text to `gray-300`.

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
   Figma: _Checkbox base (1097-63886), Checkbox (1097-63652). Needs tokens.css. No script for the control itself.

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
  background: var(--white); border: 1px solid var(--gray-300); border-radius: var(--ck-r);
  color: var(--brand-600);
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
.sb-check-input:is(:checked, [type="checkbox"]:indeterminate, [data-indeterminate]) { background: var(--brand-50); border-color: var(--brand-600); }
.sb-check-input:not(:checked, [type="checkbox"]:indeterminate, [data-indeterminate], :disabled):is(:hover, [data-state="hover"]) { background: var(--brand-50); border-color: var(--brand-600); }
.sb-check-input:focus-visible, .sb-check-input[data-state="focus"] { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }
.sb-check-input:not(:checked, [type="checkbox"]:indeterminate, [data-indeterminate]):is(:focus-visible, [data-state="focus"]) { border-color: var(--brand-300); }
.sb-check-input[type]:disabled { background: var(--gray-100); border-color: var(--gray-200); color: var(--gray-200); cursor: not-allowed; }

/* Check circle: solid brand-600 with a white check when checked. */
.sb-check-input[data-variant="circle"]:checked { background: var(--brand-600); border-color: var(--brand-600); color: var(--white); }
.sb-check-input[data-variant="circle"]:checked:disabled { background: var(--gray-200); border-color: var(--gray-200); color: var(--white); }

/* Text: same layout as Toggle */
.sb-check-text { display: grid; }
.sb-check-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); cursor: pointer; }
.sb-check-sup { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-check[data-size="md"] .sb-check-label { font-size: 16px; line-height: 24px; }
.sb-check[data-size="md"] .sb-check-sup { margin-top: 2px; font-size: 16px; line-height: 24px; }
.sb-check:has(:disabled) .sb-check-label, .sb-check:has(:disabled) .sb-check-sup { color: var(--gray-300); cursor: not-allowed; }

/* A list of choices: 12 between rows. A radio group gets one visible label. */
.sb-choices { display: grid; gap: 12px; margin: 0; padding: 0; border: 0; }
.sb-choices-label { margin-bottom: 4px; padding: 0; font: 500 var(--text-sm) var(--font); color: var(--gray-700); }

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

- Figma: [Checkbox group item](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=124-2838)
- Figma: [Checkbox group](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1142-87213)

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

| Property | Figma values | Code |
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
| Hover | `white`, `brand-300` border | `brand-50` fill, `brand-500` border |
| Focused | `white`, `brand-300` border + 4 px `focus-ring` ring | `brand-50`, `brand-300` border + 4 px `focus-ring` ring |
| Disabled | `gray-50` fill, `gray-200` border | `gray-50` fill, `gray-200` border |

- Only the card shows the focus ring; the control inside keeps its Default or checked look.
- Selected text: title `brand-800`, subtitle and description `brand-600`. Disabled text stays `gray-700` / `gray-500`, selected or not.
- Icon card: the header takes the fill and border, the body stays white with a `gray-200` border.
- Payment icon, selected: "Set as default" (Link gray) turns `brand-500`.

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
| Selected "Set as default" `brand-500` on `brand-50` | 3.33:1 | 4.5:1 | **Fails** |

> **Warning:** Selected Payment icon cards turn "Set as default" `brand-500`, which is 3.33:1 on `brand-50`. `brand-600` (4.65:1) passes and already matches the Edit link. Decision for the design team.

### Code

Load `tokens.css`, `checkbox.css` and `checkbox-group.css`; add `avatar.css` for Avatar cards, `button.css` for Payment icon links and `badge.css` for Icon card badges. No script.

`checkbox-group.css`

```css
/* Checkbox group (selectable cards), Codemasters Design System
   Figma: Checkbox group item (124-2838), Checkbox group (1142-87213).
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
  --cg-bg: var(--white); --cg-bd: var(--gray-200); --cg-title: var(--gray-700); --cg-text: var(--gray-500);
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
.sb-cg-item:has(.sb-check-input:checked) { --cg-bg: var(--brand-50); --cg-bd: var(--brand-300); --cg-title: var(--brand-800); --cg-text: var(--brand-600); }
.sb-cg-item:not(:has(:disabled)):is(:hover, [data-state="hover"]) { --cg-bd: var(--brand-300); }
.sb-cg-item:has(.sb-check-input:checked):not(:has(:disabled)):is(:hover, [data-state="hover"]) { --cg-bd: var(--brand-500); }
.sb-cg-item:is(:has(.sb-check-input:focus-visible), [data-state="focus"]) { --cg-bd: var(--brand-300); box-shadow: 0 0 0 4px var(--focus-ring); }
.sb-cg-item:has(.sb-check-input:disabled) { --cg-bg: var(--gray-50); --cg-bd: var(--gray-200); --cg-title: var(--gray-700); --cg-text: var(--gray-500); cursor: not-allowed; }

/* Only the card shows focus; the control keeps its Default / checked look. */
.sb-cg-item .sb-check-input:focus-visible { box-shadow: none; }
.sb-cg-item .sb-check-input:not(:checked, [type="checkbox"]:indeterminate):focus-visible { border-color: var(--gray-300); }

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
.sb-cg-icon { display: grid; place-items: center; flex: none; box-sizing: border-box; width: 32px; height: 32px; margin-block: -2px; border: 4px solid var(--brand-50); border-radius: var(--radius-full); background: var(--brand-100); color: var(--brand-600); }
.sb-cg-icon svg { width: 16px; height: 16px; }
.sb-cg-item[data-size="md"] .sb-cg-icon { width: 40px; height: 40px; margin-block: -4px; }
.sb-cg-item[data-size="md"] .sb-cg-icon svg { width: 20px; height: 20px; }
/* Card logo tile, 46 x 32. Real brand logos come from Figma's Payment method icon set. */
.sb-cg-pay { display: grid; place-items: center; flex: none; box-sizing: border-box; width: 46px; height: 32px; border: 1px solid var(--gray-100); border-radius: var(--radius-sm); background: var(--white); color: var(--gray-700); }
.sb-cg-pay svg { width: 20px; height: 20px; }

/* Payment icon: text links sit above the stretched label, so they never toggle the card. */
.sb-cg-actions { position: relative; z-index: 2; display: flex; gap: 12px; margin-top: 8px; }
.sb-cg-item:has(.sb-check-input:checked) .sb-btn[data-hierarchy="link-gray"] { --btn-fg: var(--brand-500); --btn-fg-hover: var(--brand-600); }

/* Icon card: the header carries the selection colours, the body stays white. */
.sb-cg-item[data-type="card"] { flex-direction: column; align-items: stretch; gap: 0; padding: 0; background: var(--white); border-color: var(--gray-200); }
.sb-cg-head { display: flex; align-items: center; gap: 12px; margin: -1px -1px 0; padding: 16px 20px 16px 16px; background: var(--cg-bg); border: 1px solid var(--cg-bd); border-radius: var(--radius-md) var(--radius-md) 0 0; transition: inherit; }
.sb-cg-head .sb-cg-title, .sb-cg-item[data-size="md"] .sb-cg-head .sb-cg-title { flex: 1; font: 500 var(--text-md) var(--font); }
.sb-cg-head .sb-cg-icon { margin-block: 0; }
.sb-cg-body { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 8px 16px; padding: 16px; }
.sb-cg-body .sb-cg-text { flex: 1 1 240px; } /* narrow cards: the badge wraps below */
.sb-cg-price { margin: 0 0 4px; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-cg-price strong { font: 600 var(--display-sm) var(--font); color: var(--gray-700); }
.sb-cg-body .sb-cg-desc { color: var(--gray-500); }
.sb-cg-item[data-size="md"] .sb-cg-price strong { font: 600 var(--display-md) var(--font); }

@media (prefers-reduced-motion: reduce) {
  .sb-cg-item, .sb-cg-head { transition: none; }
}
```

## Avatar

A person or a company, shown as a photo, initials or a placeholder icon. Comes alone, in an overlapping group, or with a name and a secondary line.

- Figma: [Avatar](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=19-1012)
- Figma: [Avatar group](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1274-812)
- Figma: [Avatar label group](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=82-2793)

### Usage

- Content priority: the user's photo, then initials (first + last name, at most 2 letters), then the placeholder user icon. Never leave an avatar empty.
- Online indicator for people who can be reached now; Company badge for the organisation a user belongs to, such as the insurer of a TPA user.
- Avatar groups show at most 5 avatars, then "+N" that opens a list of the rest.
- Avatar label groups sit in the sidebar profile, dropdown headers, assignee fields and table cells (`sm`).
- Figma's demo photos and names (Olivia Rhye, Phoenix Baker) are for mock-ups only. Real screens show the user's photo or initials.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | Circle, `brand-50` fill. 24 to 64 by size. |
| 2 | Content | Photo (cover), initials (Medium, `brand-600`) or the `user` icon (`brand-600`). |
| 3 | Status icon | Optional, bottom-right, 1.5 px white border. Online: `success-500` dot. Company: logo, 2 px outside the circle. |

### Properties

| Property | Figma values | Code |
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
   Figma: Avatar (19-1012), Avatar group (1274-812), Avatar label group (82-2793). Needs tokens.css.

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
  background: var(--brand-50); color: var(--brand-600); font: 500 var(--text-md) var(--font); text-decoration: none;
}
.sb-avatar[data-size="xs"]  { --av: 24px; --av-icon: 16px; --av-dot: 6px;  --av-co: 10px; font: 500 var(--text-xs) var(--font); }
.sb-avatar[data-size="sm"]  { --av: 32px; --av-icon: 20px; --av-dot: 8px;  --av-co: 12px; font: 500 var(--text-sm) var(--font); }
.sb-avatar[data-size="lg"]  { --av: 48px; --av-icon: 28px; --av-dot: 12px; --av-co: 16px; font: 500 var(--text-lg) var(--font); }
.sb-avatar[data-size="xl"]  { --av: 56px; --av-icon: 32px; --av-dot: 14px; --av-co: 18px; font: 500 var(--text-xl) var(--font); }
.sb-avatar[data-size="2xl"] { --av: 64px; --av-icon: 32px; --av-dot: 16px; --av-co: 20px; font: 500 var(--display-xs) var(--font); }
.sb-avatar > img:not(.sb-avatar-company) { width: 100%; height: 100%; border-radius: inherit; object-fit: cover; }
.sb-avatar > svg { width: var(--av-icon); height: var(--av-icon); }

/* Status, bottom-right, 1.5 px white border. Online: success-500 dot. Company: logo, 2 px outside the circle. */
.sb-avatar-status { position: absolute; right: 0; bottom: 0; box-sizing: border-box; width: var(--av-dot); height: var(--av-dot); border: 1.5px solid var(--white); border-radius: var(--radius-full); background: var(--success-500); }
.sb-avatar-company { position: absolute; right: -2px; bottom: -2px; box-sizing: border-box; width: var(--av-co); height: var(--av-co); border: 1.5px solid var(--white); border-radius: var(--radius-full); background: var(--white); object-fit: cover; }

/* States: only for an avatar that is a button or link (account menu). A 4 px ring outside the circle. */
:is(button, a).sb-avatar { cursor: pointer; transition: box-shadow 150ms var(--ease); }
:is(button, a).sb-avatar:is(:hover, [data-state="hover"]) { box-shadow: 0 0 0 4px var(--gray-100); }
:is(button, a).sb-avatar:is(:focus-visible, [data-state="focus"]) { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }

/* ---- Avatar group: overlapping avatars with a 1.5 px white ring, then "+N", then the add button 8 apart. */
.sb-avatar-group { --av-overlap: -12px; display: inline-flex; align-items: center; gap: 8px; }
.sb-avatar-group[data-size="xs"] { --av-overlap: -4px; }
.sb-avatar-group[data-size="sm"] { --av-overlap: -8px; }
.sb-avatar-stack { display: flex; align-items: center; }
.sb-avatar-stack > :is(.sb-avatar, .sb-tooltip-wrap) + * { margin-left: var(--av-overlap); }
.sb-avatar-stack .sb-avatar { box-shadow: 0 0 0 1.5px var(--white); }
.sb-avatar-stack button.sb-avatar:is(:focus-visible, [data-state="focus"]) { box-shadow: 0 0 0 1.5px var(--white), 0 0 0 5.5px var(--focus-ring); }
/* Add: white, dashed gray-300 border (dashed in Figma), gray-400 plus icon at half the box. */
.sb-avatar-add {
  display: inline-grid; place-items: center; flex: none; box-sizing: border-box; width: var(--av, 40px); height: var(--av, 40px);
  margin: 0; padding: 0; border: 1px dashed var(--gray-300); border-radius: var(--radius-full); background: var(--white); color: var(--gray-400); cursor: pointer;
  transition-property: color, border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-avatar-group[data-size="xs"] .sb-avatar-add { --av: 24px; }
.sb-avatar-group[data-size="sm"] .sb-avatar-add { --av: 32px; }
.sb-avatar-add > svg { width: calc(var(--av, 40px) / 2); height: calc(var(--av, 40px) / 2); }
.sb-avatar-add:is(:hover, [data-state="hover"]) { border-color: var(--gray-400); color: var(--gray-500); }
.sb-avatar-add:is(:focus-visible, [data-state="focus"]) { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }

/* ---- Avatar label group: avatar + name + secondary line. Long text truncates (show it in a tooltip). */
.sb-avatar-label { display: inline-flex; align-items: center; gap: 12px; max-width: 100%; margin: 0; padding: 0; border: 0; background: none; text-align: start; text-decoration: none; }
.sb-avatar-label[data-size="sm"] { gap: 10px; } /* Figma spec; between the 8 and 12 steps */
.sb-avatar-label[data-size="xl"] { gap: 16px; }
.sb-avatar-label-text { display: grid; min-width: 0; }
.sb-avatar-name, .sb-avatar-sub { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sb-avatar-name { font: 600 var(--text-sm) var(--font); color: var(--gray-700); transition: color 150ms var(--ease); }
.sb-avatar-sub { font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-avatar-label[data-size="sm"] .sb-avatar-sub { font: 400 var(--text-xs) var(--font); }
.sb-avatar-label[data-size="lg"] .sb-avatar-name { font: 600 var(--text-md) var(--font); }
.sb-avatar-label[data-size="xl"] .sb-avatar-name { font: 600 var(--text-lg) var(--font); }
.sb-avatar-label:is([data-size="lg"], [data-size="xl"]) .sb-avatar-sub { font: 400 var(--text-md) var(--font); }
/* Clickable group (button or link): one hit target; the avatar takes the ring, the name darkens. */
:is(button, a).sb-avatar-label { cursor: pointer; }
:is(button, a).sb-avatar-label:focus-visible { outline: none; }
:is(button, a).sb-avatar-label:is(:hover, [data-state="hover"]) .sb-avatar { box-shadow: 0 0 0 4px var(--gray-100); }
:is(button, a).sb-avatar-label:is(:focus-visible, [data-state="focus"]) .sb-avatar { box-shadow: 0 0 0 4px var(--focus-ring); }
:is(button, a).sb-avatar-label:is(:hover, :focus-visible, [data-state]) .sb-avatar-name { color: var(--gray-900); }
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

## Tooltip and help icon

A small label that appears on hover or keyboard focus to explain an element or show text that was cut off. The help icon is the standard trigger after a label or inside an input.

- Figma: [Tooltip](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1052-489)
- Figma: [Help icon](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1054-13)

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

| Component | Property | Figma values | Code |
| --- | --- | --- | --- |
| Tooltip | Theme | Dark, Light | `data-theme="light"`; Dark is the default |
| Tooltip | Supporting text | True, False | `<span class="sb-tooltip-text">` |
| Tooltip | Arrow | None, Top center, Bottom center, Bottom left, Bottom right, Left, Right | `data-arrow`; Bottom center is the default |
| Help icon | Open | True, False | `:hover`, `:focus-visible`. Static mockups only: `data-state="open"` on the wrap |
| Help icon | Tooltip | Top no arrow, Top arrow, Top left, Top right, Bottom, Left, Right | `data-arrow`: `none`, `bottom-center`, `bottom-left`, `bottom-right`, `top-center`, `right`, `left` |

> **Note:** Figma names the Tooltip arrow by the side it sits on, and the Help icon tooltip by where the tooltip goes. Help icon "Left" (tooltip to the left) is `data-arrow="right"`.

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
   Figma: Tooltip (1052-489), Help icon (1054-13). Needs tokens.css; tooltip.js only for Esc to close.

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
                The arrow side names where the arrow sits, as in Figma. Pick the one that keeps the tooltip on screen.
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

/* Arrow: 16 x 6 in the fill colour. Corner arrows sit 14 from the edge (centre of Figma's 28 px frame). */
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

## Progress bar and circle

Shows how far a measurable task or value has got: an upload, AI analysis steps, quota used. For work of unknown length use a spinner instead.

- Figma: [Progress bar](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1085-57382)
- Figma: [Progress circle](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1154-89981)

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

| Component | Property | Figma values | Code |
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
```

## Slider

Picks a value or a range by dragging, when the position matters more than the exact number: a confidence threshold, an amount range.

- Figma: [Slider](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1086-534)

### Usage

- Use a slider when the position matters more than the exact number: a confidence threshold filter, an amount range.
- For exact values pair it with an Input field, or use the input alone.
- Labels show the value in the unit of the data ("Rp 5.000.000", "80%"), not always %.
- Two handles pick a range; they never cross and stay at least one step apart.

### Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Track | 8 high, full width (320 in Figma), `gray-200`, radius 4 |
| 2 | Selected range | `brand-600`, radius 4, between the handles (from 0 for a single slider) |
| 3 | Handle | 24 px circle, `white`, 1 px `brand-600` border, `shadow-md`, centred on the value |
| 4 | Label | Optional. Bottom: Text md / Medium `gray-900`, 8 below the handle. Floating: Light tooltip with an arrow, 4 from the handle |

### Properties

| Property | Figma values | Code |
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
| Disabled | Track `gray-100`, range `gray-300`, handle border `gray-300`, no shadow |

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
   Figma: Slider (1086-534). Needs tokens.css and slider.js. Native <input type="range">, one per handle.

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
/* Space for the labels, so they never cover the content around the slider. Figma's floating variants are only
   24 high and let the tooltips overhang; in code the slider reserves the room instead. */
.sb-slider[data-label="bottom"] { padding-bottom: 32px; }          /* 8 gap + 24 label, from the handle's bottom edge (Figma: 56 high) */
.sb-slider[data-label="top-floating"] { padding-top: 44px; }       /* 34 label + 6 arrow + 4 gap */
.sb-slider[data-label="bottom-floating"] { padding-bottom: 44px; }

/* Rail: 24 high (the handle). Track 8 high, gray-200; selected range brand-600 between the handles. */
.sb-slider-rail { position: relative; height: 24px; }
.sb-slider-rail::before, .sb-slider-rail::after { content: ''; position: absolute; top: 8px; height: 8px; border-radius: var(--radius-sm); }
.sb-slider-rail::before { left: 0; right: 0; background: var(--gray-200); }
.sb-slider-rail::after { left: var(--lo); right: calc(100% - var(--hi)); background: var(--brand-600); }

/* Inputs: 24 px wider than the track so each handle centres on 0 % and 100 %. Only the handle takes the pointer. */
.sb-slider-input {
  --th-bg: var(--white); --th-bd: var(--brand-600); --th-shadow: var(--shadow-md);
  position: absolute; z-index: 1; top: 0; left: -12px; width: calc(100% + 24px); height: 24px; margin: 0; /* above the rail's ::after, which paints last */
  background: none; appearance: none; -webkit-appearance: none; pointer-events: none;
}
.sb-slider-input:focus { outline: none; }
.sb-slider-input::-webkit-slider-runnable-track { height: 24px; background: none; }
.sb-slider-input::-moz-range-track { height: 24px; background: none; }
.sb-slider-input::-webkit-slider-thumb {
  box-sizing: border-box; width: 24px; height: 24px; border: 1px solid var(--th-bd); border-radius: var(--radius-full);
  background: var(--th-bg); box-shadow: var(--th-shadow); cursor: grab; pointer-events: auto; appearance: none; -webkit-appearance: none;
  transition: background-color 150ms var(--ease), box-shadow 150ms var(--ease);
}
.sb-slider-input::-moz-range-thumb {
  box-sizing: border-box; width: 24px; height: 24px; border: 1px solid var(--th-bd); border-radius: var(--radius-full);
  background: var(--th-bg); box-shadow: var(--th-shadow); cursor: grab; pointer-events: auto;
  transition: background-color 150ms var(--ease), box-shadow 150ms var(--ease);
}

/* Handle states. Focused and dragging share the ring. */
.sb-slider-input:is(:hover, [data-state="hover"]) { --th-bg: var(--brand-50); }
.sb-slider-input:is(:focus-visible, :active, [data-state="focus"]) { --th-shadow: var(--shadow-md), 0 0 0 4px var(--focus-ring); }
.sb-slider-input:active::-webkit-slider-thumb { cursor: grabbing; }
.sb-slider-input:active::-moz-range-thumb { cursor: grabbing; }
.sb-slider:has(:disabled) .sb-slider-rail::before { background: var(--gray-100); }
.sb-slider:has(:disabled) .sb-slider-rail::after { background: var(--gray-300); }
.sb-slider-input:disabled { --th-bg: var(--white); --th-bd: var(--gray-300); --th-shadow: none; }
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

## Slides

Pitch decks and presentations for Codemasters, Sembuh AI and Flipmaster: a 1920 × 1080 canvas, a 12-column grid, fixed anchors and the same tokens as the web.

- Figma: [Design system file](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems)

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

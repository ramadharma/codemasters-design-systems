---
name: Colors
slug: colors
category: Foundations
status: In Figma and app
version: 0.1.0
updated: 2026-10-07
figma: https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1525-271581
requires: tokens.css
---

# Colors

Thirteen colour families of 11 steps each. Every colour on screen is one of these tokens, never a free-picked hex.

- Figma: [Colors](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1525-271581)
- Figma: [Notes and documentation](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1525-274384)

## Principles

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

## Primary colours

The main colours; they make up most of every screen. "Aa" on each chip shows which text colour passes 4.5:1 on it, with the ratio.

### Gray

Neutral foundation. Almost everything in the UI: text, form fields, backgrounds, dividers.

### Brand

The primary colour. All interactive elements: buttons, links, inputs, active tabs. Sets the feel of the product.

### Error

Error states and destructive actions (delete, reject, remove a user).

### Warning

Potentially destructive or on-hold actions; confirmations that must catch the eye.

### Success

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

## Secondary colours

For pills, tags, alerts, labels and chart series. Use them sparingly, as accents; the primary colours take precedence.

### Blue gray

### Blue light

### Blue

### Indigo

### Purple

### Pink

### Rosé

### Orange

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

## How the scales are used

- **Fill / border / text pattern** for any tinted element: `50` fill, `200` border, `700` text, `500` icon. Use `25` for very quiet row tints (flagged or review rows).
- **Text on white:** `700`–`900` for text; `500` and up only for icons or large text. Steps `25`–`400` never carry text on white.
- **Solid fills with white text** (buttons): `500`–`900`.
- **Grays: few, used the same way every time.** Give each gray one job and keep it in every component: `gray-300` is always the input border, `gray-200` always the divider.

### Gray in the app

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

### Brand in the app

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

## Semantic roles

| Role | Fill | Border | Text | Icon / strong |
| --- | --- | --- | --- | --- |
| Success | `success-50` | `success-200` | `success-700` | icon `success-500` |
| Warning | `warning-50` (row tint `warning-25`) | `warning-200` / `warning-300` | `warning-700` | icon `warning-500`, strong `warning-800` |
| Error | `error-50` (row tint `error-25`) | `error-200` | `error-700` | icon `error-500`, strong `error-600` |
| Info | `blue-50` | `blue-200` | `blue-700` | icon `blue-500` |
| Pending (button) | `warning-500`, hover `warning-600` | `warning-500` | `white` | — |

## Status pills

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

## Data visualisation

| Series | Solid (approved / main) | Light (rejected / secondary) |
| --- | --- | --- |
| Sembuh AI | `brand-500` | `brand-300` |
| TPA | `orange-500` | `orange-300` |
| Extra series, in order | `500` of `blue-light`, `purple`, `pink`, `indigo`, `blue-gray` | `300` of the same family |

- Approved = solid; rejected = light fill (bars, sankey) or a **dashed** line (`6 4`) in line charts.
- Line charts: one point per x label, centred on it; lines only, a dot appears on hover.
- Unfocused series fade to 15–25 % opacity on hover or legend focus.
- Up = bad (more cost) is `error-600`; down = good is `success-600`.

## Do and don't

**Do:** A token pair from the scale: `success-50` fill, `success-700` text.

```html
<span class="sb-badge" data-size="sm" data-color="success">Disetujui: Sembuh</span>
```

**Don't:** A hex from the colour picker. Close to the scale, but not on it, and it fails AA.

```html
<span class="sb-badge" data-size="sm" style="background: #e8f8ee; color: #2f9e5b">Disetujui: Sembuh</span>
```

## Changing colours in Figma

Colours are Figma styles / variables. A change to a style cascades to every component and design that uses it.

1. Open the style: click the edit icon on the colour style, or select any layer that uses it and click **Edit style**.
2. Change the colour properties.
3. Repeat for every style that changes, in one pass, so none is missed. Large files take time to update.
4. To change the brand colour, edit the **Brand** styles. Do not switch components to another family one by one.

When a Figma colour changes, update `data/foundations.js` (the scales) in the same change; this page and `tokens.css` follow.

## Tokens

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

---
name: Logo
slug: logo
category: Foundations
status: In progress
version: 0.1.0
updated: 2026-10-07
figma: https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems
requires: tokens.css
---

# Logo

One system, three companies. Codemasters is the parent of Sembuh AI and Flipmaster; company materials carry their own logo with "Powered by Codemasters" underneath.

- Figma: [Design system file](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems)

## Brand architecture

An endorsed brand family: the companies keep their own names and logos, and all three use this design system. Only the blue scale (`--brand-25` to `--brand-900`) differs per company.

| Brand | Role | Logo | Blue scale |
| --- | --- | --- | --- |
| Codemasters | Parent company | Symbol + wordmark | To be confirmed |
| Sembuh AI | Company (claims analysis) | Wordmark, "AI" in brand blue | Current `brand` scale (`brand-500` `#5183EB`) |
| Flipmaster | Company | To be supplied | To be confirmed |

> **Note:** The Codemasters and Flipmaster blue scales are not defined yet. Until they are, every page and export uses the Sembuh AI scale.

## Logos

| File | Use | Status |
| --- | --- | --- |
| `assets/brand/codemasters-logo.png` | Codemasters, colour, light backgrounds | PNG from a screenshot (506 × 88). **Need SVG** and a white version |
| `assets/brand/sembuh-logo.png` | Sembuh AI, colour, light backgrounds | PNG 2052 × 300 (from the pitch deck kit). SVG preferred |
| `assets/brand/sembuh-logo-white.png` | Sembuh AI on dark or image backgrounds | PNG 2052 × 300 |
| — | Flipmaster | **Not supplied** |

Use the files as they are. Never redraw a logo, retype the wordmark in another font, or rebuild the Codemasters symbol in CSS.

## Powered by Codemasters

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

## Clear space and minimum size

| Rule | Codemasters | Sembuh AI |
| --- | --- | --- |
| Clear space on every side | Half the symbol height | The height of the "S" |
| Minimum height, screen | 24 px | 16 px |
| Minimum height, print | 8 mm | 5 mm |
| "Powered by" lockup | Company logo at least 32 px, so the Codemasters logo stays at least 13 px | — |

> **Warning:** Proposed values; confirm with the brand owner before they go into templates.

## Backgrounds

- Colour logo on `white`, `gray-25` and `brand-50`.
- White logo on `gray-900`, `brand-600` and darker, and on photos (with enough contrast behind the logo).
- Never on a mid-tone such as `brand-300` to `brand-500`, where neither version reads.

## Do and don't

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

## Code

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
.sb-lockup-main { display: block; width: auto; height: var(--lockup-h); }
.sb-lockup-endorse { display: inline-flex; align-items: center; gap: 8px; margin: 0; font: 500 var(--text-xs) var(--font); color: var(--gray-500); white-space: nowrap; }
.sb-lockup-endorse img { display: block; width: auto; height: calc(var(--lockup-h) * .4); }
```

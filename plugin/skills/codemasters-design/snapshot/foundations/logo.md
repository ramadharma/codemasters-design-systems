---
name: Logo
slug: logo
category: Foundations
status: In progress
version: 1.0.0
updated: 2026-10-14
requires: tokens.css
---

# Logo

One system, two brands. Codemasters is the parent of Sembuh AI; Sembuh AI materials carry its logo with "Powered by Codemasters" underneath.

## Brand architecture

An endorsed brand: Sembuh AI keeps its own name and logo, and both brands use this design system. Only the blue scale (`--brand-50` to `--brand-950`) differs.

| Brand | Role | Logo | Blue scale |
| --- | --- | --- | --- |
| Codemasters | Parent company | Symbol + wordmark | To be confirmed |
| Sembuh AI | Company (claims analysis) | Wordmark: "Sembuh" in `gray-900`, "AI" in `brand-400` `#6CA1F0` | Current `brand` scale (primary `brand-600` `#3966E0`) |

> **Note:** The Codemasters blue scale is not defined yet. Until it is, every page and export uses the Sembuh AI scale.

## Logos

| File | Use | Status |
| --- | --- | --- |
| `assets/brand/codemasters-logo.svg` | Codemasters, colour, light backgrounds | SVG (951.5 × 132.5). Symbol in gradients, wordmark `#051641` |
| `assets/brand/codemasters-logo-white.svg` | Codemasters on dark or image backgrounds | SVG, the colour file with a white wordmark; the symbol keeps its gradients |
| `assets/brand/sembuh-logo.svg` | Sembuh AI, colour, light backgrounds | SVG (657 × 96), the wordmark cut from the official lockup |
| `assets/brand/sembuh-logo-white.svg` | Sembuh AI on dark or image backgrounds | SVG, the colour file all white |
| `assets/brand/sembuh-powered.svg` | Sembuh AI with "Powered by Codemasters", light backgrounds | SVG (657 × 177), the official lockup |
| `assets/brand/sembuh-powered-white.svg` | The lockup on dark or image backgrounds | SVG, the colour file in white, "Powered by" in `gray-300` |
| `assets/brand/codemasters-symbol.svg` | Codemasters symbol alone: favicon, app icon, avatar | SVG, square, cut from the colour logo |

Use the files as they are. Never redraw a logo, retype the wordmark in another font, or rebuild the Codemasters symbol in CSS.

## Powered by Codemasters

Sembuh AI materials (slide covers and back covers, document headers, posters, the website footer) carry the endorsement under the logo. It is one file: use it as it is, never rebuild it from the two logos and text.

| Part | Spec |
| --- | --- |
| Sembuh AI logo | The top 54 % of the lockup |
| Gap | 30 % of the Sembuh AI logo height |
| "Powered by" | `gray-500` (`gray-300` in the white file), sentence case, never translated or abbreviated |
| Codemasters logo | 42 % of the Sembuh AI logo height, 21 % after "Powered by" |
| Alignment | Left edge of the Sembuh AI logo |
| Size | Scale the whole file by height; at 44 px tall the Codemasters logo is about 10 px |

## Clear space and minimum size

| Rule | Codemasters | Sembuh AI |
| --- | --- | --- |
| Clear space on every side | Half the symbol height | The height of the "S" |
| Minimum height, screen | 24 px | 16 px |
| Minimum height, print | 8 mm | 5 mm |
| "Powered by" lockup | — | Lockup at least 44 px tall (logo 24 px), so the Codemasters logo stays at least 10 px |

> **Warning:** Proposed values; confirm with the brand owner before they go into templates.

## Symbol

- The symbol stands alone only where the full logo cannot fit: the favicon, an app icon, a social avatar and the Company badge on an Avatar.
- Anywhere the full logo fits, use the full logo. Never put the symbol next to a typed "Codemasters".
- At least 16 px. The symbol keeps its gradients on white and on `gray-900`; it has no white version.
- Sembuh AI has no symbol: its logo is a wordmark only. A square mark for Sembuh AI (favicon, app icon) needs one from the brand owner.

## Backgrounds

### Sembuh AI

- Colour logo on `white`, `gray-50` and `brand-50`.
- White logo on `gray-900`, `brand-600` and darker, and on photos (with enough contrast behind the logo).
- Never on a mid-tone such as `brand-300` to `brand-500`, where neither version reads.

### Codemasters

- Colour logo on `white`, `gray-50` and `brand-50`.
- White logo on `gray-900` and other near-black backgrounds only. Its symbol stays blue, so it disappears on blue: never on `brand-600` or darker blues, and never on a blue photo.
- A Codemasters logo for blue backgrounds needs a one-colour white file from the brand owner.

## Do and don't

**Do:** The supplied file, at its own proportions, on a light background.

```html
<img src="assets/brand/codemasters-logo.svg" alt="Codemasters" style="height: 40px">
```

**Don't:** Stretched or squashed. Scale by height only.

```html
<img src="assets/brand/codemasters-logo.svg" alt="Codemasters, squashed" style="height: 40px; transform: scaleY(.55)">
```

**Do:** The lockup file, with the endorsement under the Sembuh AI logo.

```html
<img src="assets/brand/sembuh-powered.svg" alt="Sembuh AI, powered by Codemasters" style="height: 64px">
```

**Don't:** Recoloured, or with a shadow or other effect.

```html
<img src="assets/brand/codemasters-logo.svg" alt="Codemasters, recoloured" style="height: 40px; filter: hue-rotate(140deg) drop-shadow(0 4px 6px rgba(16,24,40,.3))">
```

**Do:** Level, on the baseline of the layout.

```html
<img src="assets/brand/sembuh-logo.svg" alt="Sembuh AI" style="height: 36px">
```

**Don't:** Rotated or set on an angle.

```html
<img src="assets/brand/sembuh-logo.svg" alt="Sembuh AI, rotated" style="height: 36px; transform: rotate(-12deg)">
```

**Do:** Colour logo on a light tint.

```html
<div style="display: grid; place-items: center; padding: 24px 32px; border-radius: 8px; background: var(--brand-50)"><img src="assets/brand/sembuh-logo.svg" alt="Sembuh AI" style="height: 32px"></div>
```

**Don't:** On a mid-tone: "AI" vanishes and "Sembuh" loses contrast.

```html
<div style="display: grid; place-items: center; padding: 24px 32px; border-radius: 8px; background: var(--brand-400)"><img src="assets/brand/sembuh-logo.svg" alt="Sembuh AI on a mid-tone" style="height: 32px"></div>
```

**Do:** White Codemasters logo on near-black.

```html
<div style="display: grid; place-items: center; padding: 24px 32px; border-radius: 8px; background: var(--gray-900)"><img src="assets/brand/codemasters-logo-white.svg" alt="Codemasters" style="height: 28px"></div>
```

**Don't:** White Codemasters logo on blue: the symbol disappears.

```html
<div style="display: grid; place-items: center; padding: 24px 32px; border-radius: 8px; background: var(--brand-700)"><img src="assets/brand/codemasters-logo-white.svg" alt="Codemasters on blue" style="height: 28px"></div>
```

- Never outline the logo, crop it, or let an edge of the frame cut through it.
- Never move the symbol away from the wordmark, change their spacing or swap their order.
- Never set the logo on a busy photo. Put it on a calm area, or on a solid panel in an allowed colour.
- Never animate parts of the logo separately.

## Name in text

| Write | Never |
| --- | --- |
| Sembuh AI | Sembuh.AI, SembuhAI, Sembuh Ai, SEMBUH AI |
| Codemasters | CodeMasters, Code Masters, CODEMASTERS |

- Write the names as the logos spell them, in the font of the surrounding text. Never imitate the logo with styled text.
- The domain is only for addresses: sembuh.ai in URLs and emails, never as the name in a sentence.
- Keep a name on one line: a non-breaking space in "Sembuh AI" (`Sembuh&nbsp;AI`).
- Names are never translated: "Powered by Codemasters" stays in English in Indonesian materials.

## Code

Logos are images: no CSS needed. Set the height and let the width follow.

`logo.html`

```html
<img src="assets/brand/codemasters-logo.svg" alt="Codemasters" height="32">
<img src="assets/brand/sembuh-powered.svg" alt="Sembuh AI, powered by Codemasters" height="56">

<!-- favicon -->
<link rel="icon" href="assets/brand/codemasters-symbol.svg" type="image/svg+xml">
```

---
name: Shadows & Blur
slug: shadows
category: Foundations
status: Ready
version: 0.1.0
updated: 2026-10-07
requires: tokens.css
---

# Shadows & Blur

Seven shadows and four background blurs that put elements on the z-axis. The higher the layer, the bigger the shadow.

## Shadows

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

## Elevation in the app

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

## Background blur

A background blur also lifts an element: it blurs what is behind a translucent surface. Use it as `backdrop-filter`.

### Light

### Dark

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

## Do and don't

**Do:** A menu on `shadow-lg`, the token for floating panels.

```html
<div class="f-dd-box" style="box-shadow: var(--shadow-lg)">Menu</div>
```

**Don't:** A custom blue glow. Shadows are always gray-900 and always from the set.

```html
<div class="f-dd-box" style="box-shadow: 0 6px 18px rgba(57,102,224,.35)">Menu</div>
```

## Tokens

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

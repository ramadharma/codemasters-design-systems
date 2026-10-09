---
name: Typography
slug: typography
category: Foundations
status: Ready
version: 1.0.0
updated: 2026-10-09
requires: tokens.css
---

# Typography

One typeface, Timeless Grotesk, on an 11-step scale from Display 2xl to Text xs. Every text uses a style from the scale; never set a size or line height by hand.

## Typeface

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

## Type scale

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

## Weights

| Weight | Use |
| --- | --- |
| Regular 400 | Body text, inputs, table cells |
| Medium 500 | Labels, tabs, values, pills |
| Semibold 600 | Titles and buttons |
| Bold 700 | Not used in the app yet. Reserve for display headings outside the app (slides, marketing) |

## Rules

- **Display vs text.** Display styles are for headings only (H1–H6), never for running copy. Text styles cover everything else: body, labels, UI elements.
- **Base size 16 px** (`Text md`): paragraphs, inputs, dropdown options, buttons. Dense app UI (tables, tabs, labels) steps down to `Text sm`.
- **Line height.** Body text 1.5–2× the size (16 → 24). The bigger the text, the tighter the ratio: display text 1–1.25× (60 → 72). The scale already does this; do not override it.
- **Letter spacing.** Display md and larger use −2 %. In CSS write `letter-spacing: var(--tracking-display)` (`-0.02em`), never `%`.
- **Numbers** use `font-variant-numeric: tabular-nums` in tables, KPIs and amounts, so digits line up.

## Use in the app

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

## Slides and documents

- Use Inter, not Timeless: Google Slides and Docs offer Inter from More fonts, Timeless has to be installed. Titles Inter Semibold 600 (Bold 700 allowed for display headings), body Inter Regular or Medium.
- Keep the ratios of the scale, for example 40 / 24 / 16 on a 16:9 slide.

## Do and don't

**Do:** A style from the scale: Text xl / Semibold.

```html
<p style="margin: 0; font: 600 var(--text-xl) var(--font); color: var(--gray-900)">Ringkasan klaim</p>
```

**Don't:** 19 / 23 set by hand. Nearly Text xl, but off the scale, so the rhythm breaks.

```html
<p style="margin: 0; font: 600 19px/23px var(--font); color: var(--gray-900)">Ringkasan klaim</p>
```

## Tokens

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

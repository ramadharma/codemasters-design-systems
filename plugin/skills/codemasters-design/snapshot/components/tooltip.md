---
name: Tooltip and help icon
slug: tooltip
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-06
requires: tokens.css
---

# Tooltip and help icon

A small label that appears on hover or keyboard focus to explain an element or show text that was cut off. The help icon is the standard trigger after a label or inside an input.

## Usage

- A tooltip only adds a short explanation, or the full text of something truncated. Never put essential information or actions in it: it is invisible on touch screens and easy to miss.
- Icon-only buttons and collapsed sidebar items always get a title-only tooltip with their label.
- Use the help icon after a field label (or inside the input, see Input field) when a term needs one sentence of explanation.
- Default to the tooltip above the trigger. Pick another arrow only when the tooltip would leave the viewport.
- Chart tooltips are a different component: a white card, see Data display.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | Radius 8, `shadow-lg`. Padding `8 12` title only, `12` with supporting text. Max width 320. |
| 2 | Title | Text xs / Semibold. Dark: `white`; Light: `gray-700`. |
| 3 | Supporting text | Optional. Text xs / Regular, 4 below the title. Dark: `white`; Light: `gray-500`. |
| 4 | Arrow | 16 × 6 in the fill colour, 4 px from the trigger. Corner arrows sit 14 from the edge. |

## Properties

| Component | Property | Values | Code |
| --- | --- | --- | --- |
| Tooltip | Theme | Dark, Light | `data-theme="light"`; Dark is the default |
| Tooltip | Supporting text | True, False | `<span class="sb-tooltip-text">` |
| Tooltip | Arrow | None, Top center, Bottom center, Bottom left, Bottom right, Left, Right | `data-arrow`; Bottom center is the default |
| Help icon | Open | True, False | `:hover`, `:focus-visible`. Static mockups only: `data-state="open"` on the wrap |
| Help icon | Tooltip | Top no arrow, Top arrow, Top left, Top right, Bottom, Left, Right | `data-arrow`: `none`, `bottom-center`, `bottom-left`, `bottom-right`, `top-center`, `right`, `left` |

## Arrow positions

The arrow points at the trigger. Bottom center (tooltip above) is the default.

## Themes

| Theme | Fill | Title | Supporting text |
| --- | --- | --- | --- |
| Dark (default) | `gray-900` | `white` | `white` |
| Light, on dark surfaces such as the sidebar | `white` | `gray-700` | `gray-500` |

### Dark

### Light

## Help icon

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

## Icon-only buttons

Icon-only buttons get a title-only tooltip with their label. Hover or focus the button.

```html
<span class="sb-tooltip-wrap">
  <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" data-icon="only" aria-label="Unduh laporan" aria-describedby="tb-dl-tip"><svg aria-hidden="true"><!-- download --></svg></button>
  <span class="sb-tooltip" role="tooltip" id="tb-dl-tip">
    <span class="sb-tooltip-title">Unduh laporan</span>
  </span>
</span>
```

## Behaviour

| Event | Result |
| --- | --- |
| Pointer enters the trigger | Opens after ~300 ms, fades in 150 ms |
| Keyboard focus on the trigger | Opens at once |
| Pointer moves onto the tooltip | Stays open (the 150 ms fade-out covers the 10 px gap) |
| Pointer leaves, blur | Closes |
| Esc | Closes until the pointer leaves or focus moves on (`tooltip.js`) |

## Do and don't

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

## Accessibility

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

## Code

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
.sb-help { display: inline-flex; flex: none; margin: 0; padding: 0; border: 0; border-radius: var(--radius-full); background: none; color: var(--gray-400); cursor: help; }
.sb-help > svg { width: 16px; height: 16px; }
.sb-help:hover, .sb-help:focus-visible, .sb-tooltip-wrap[data-state="open"] > .sb-help { color: var(--gray-500); }
.sb-help:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
/* After a label: label + help icon on one line, 4 apart. */
.sb-help-row { display: inline-flex; align-items: center; gap: 4px; }

@media (prefers-reduced-motion: reduce) {
  .sb-tooltip { transition: none; }
}
```

### Esc script

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

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-400: #98a2b3;
  --gray-500: #667085;
  --gray-700: #344054;
  --gray-900: #101828;
  --brand-600: #3966e0;
  --radius-md: 8px;
  --radius-full: 9999px;
  --shadow-lg: 0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Timeless Sans', sans-serif;
  --text-xs: 12px/18px;
}
```

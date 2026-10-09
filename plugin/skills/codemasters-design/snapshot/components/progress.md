---
name: Progress bar and circle
slug: progress
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-06
requires: tokens.css
---

# Progress bar and circle

Shows how far a measurable task or value has got: an upload, AI analysis steps, quota used. For work of unknown length use a spinner instead.

## Usage

| Use | Example | Component |
| --- | --- | --- |
| A task with a known end | Uploading claim documents, AI analysis step 4 of 10 | Progress bar |
| A share of a whole, as a headline number | Quota used, claims analysed this month | Progress circle |
| The same, in a compact card or a dashboard row | Score next to a title | Half circle, or circle `xxs` |
| Work of unknown length | Waiting for the server | Spinner, not a progress bar |

- The value text is the rounded percentage ("40%"). Put the exact number in a tooltip if someone needs it.
- The colour stays `brand-600`. When the value is itself a status (AI confidence, risk), colour a badge next to it, not the bar.
- Changes animate over 300 ms with `--ease`. Never animate backwards, except a reset to 0 when a task restarts.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Bar track | 8 high, full width, `gray-100`, radius 4 |
| 2 | Bar fill | `brand-600`, radius 4, min width 8 so 0 % still shows a dot |
| 3 | Bar label | Text sm / Medium `gray-700`. Right: gap 12, the track shrinks to fit |
| 4 | Circle track | `gray-100`, stroke 10 % of the box (16 at 160 … 28 at 280; 6 at 64) |
| 5 | Circle line | `brand-600`, round caps. From 12 o'clock, clockwise; the half circle runs left to right |
| 6 | Caption | Optional label. Text xs / Medium `gray-500` (`md`, `lg`: Text sm), above the value; `xxs`: below the circle |
| 7 | Value | Rounded percentage. Medium `gray-900`, Display xs to Display lg by size; `xxs`: Text sm `gray-700` |

## Progress bar labels

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

## Progress circle sizes

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

### Half circle

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

## Properties

| Component | Property | Values | Code |
| --- | --- | --- | --- |
| Progress bar | Progress | 0–100 % in steps of 10 | `--value` + `aria-valuenow` + label text (any integer works) |
| Progress bar | Label | False, Right, Bottom, Top floating, Bottom floating | `data-label`; leave out the label span for False |
| Progress circle | Size | `xxs`, `xs`, `sm`, `md`, `lg` | `data-size` |
| Progress circle | Shape | Circle, Half circle | `data-shape="half"` + the half-circle SVG |
| Progress circle | Label | True, False | `<span class="sb-pc-caption">`, also the accessible name |

## Updating the value

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

## Do and don't

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

## Accessibility

- Use `role="progressbar"` with `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`.
- Name it: `aria-labelledby` the caption, or `aria-label` when nothing visible names it.
- Children of a progressbar are presentational, so the SVG is `aria-hidden` and the percentage text is not read twice.
- Animations are turned off for `prefers-reduced-motion`.

| Pair | Ratio | Needed | Result |
| --- | --- | --- | --- |
| Fill `brand-600` on track `gray-100` | 4.59:1 | 3:1 | Passes |
| Track `gray-100` on `white` | 1.10:1 | 3:1 | Below, but not needed: the fill carries the value |
| Value `gray-900`, caption `gray-500` on `white` | 17.75:1, 4.97:1 | 4.5:1 | Passes |

## Code

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

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-100: #f2f4f7;
  --gray-500: #667085;
  --gray-700: #344054;
  --gray-900: #101828;
  --brand-600: #3966e0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --shadow-lg: 0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Timeless Sans', sans-serif;
  --display-lg: 48px/60px;
  --display-md: 36px/44px;
  --display-sm: 30px/38px;
  --display-xs: 24px/32px;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
}
```

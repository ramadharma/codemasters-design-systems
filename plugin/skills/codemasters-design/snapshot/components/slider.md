---
name: Slider
slug: slider
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-07
requires: tokens.css
---

# Slider

Picks a value or a range by dragging, when the position matters more than the exact number: a confidence threshold, an amount range.

## Usage

- Use a slider when the position matters more than the exact number: a confidence threshold filter, an amount range.
- For exact values pair it with an Input field, or use the input alone.
- Labels show the value in the unit of the data ("Rp 5.000.000", "80%"), not always %.
- Two handles pick a range; they never cross and stay at least one step apart.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Track | 8 high, full width (320 in examples), `gray-200`, radius 4 |
| 2 | Selected range | `brand-600`, radius 4, between the handles (from 0 for a single slider) |
| 3 | Handle | 24 px circle, `white` raised (`raised-sheen-light`), 1 px `brand-600` border, `shadow-md`, centred on the value |
| 4 | Label | Optional. Bottom: Text md / Medium `gray-900`, 8 below the handle. Floating: Light tooltip with an arrow, 4 from the handle |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Left control | 0 % to 75 % | First `<input type="range">` value; leave it out for a single slider |
| Right control | 25 % to 100 % | Last `<input type="range">` value |
| Label | False, Bottom, Top floating, Bottom floating | `data-label` + one `<output class="sb-slider-value">` per handle |
| State | None in the component set; specified in DESIGN.md (Default, Hover, Focused, Disabled) | `:hover`, `:focus-visible` / `:active`, `disabled`. Static mockups only: `data-state` on the input |

## Examples

### Single value

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

### Range in Rupiah

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

## Labels

| Label | Spec |
| --- | --- |
| False | Handles only. Show the values elsewhere, e.g. in inputs next to the slider. |
| Bottom | Text md / Medium `gray-900`, centred under each handle, 8 below the handle (16 below the track). The slider is 56 high. |
| Top floating / Bottom floating | Light tooltip (white, padding `8 12`, Text xs / Semibold `gray-700`, `shadow-lg`) with a 16 × 6 arrow pointing at the handle, 4 away. Centred above / below each handle. The slider reserves 44 px for it. |

## States

| State (handle) | Spec |
| --- | --- |
| Hover | `brand-50` fill |
| Focused / dragging | `0 0 0 4px focus-ring` ring + `shadow-md` |
| Disabled | Track `gray-100`, range `gray-300`, handle border `gray-300`, no shadow |

## Keyboard

| Key | Action |
| --- | --- |
| ← → (↓ ↑) | One step |
| Page Up / Page Down | A big jump: 10 % of the range in Chrome (checked); other browsers set their own size |
| Home / End | Minimum / maximum (a range handle stops one step from the other) |
| Tab | Moves between the handles |

All of this comes from the native range input; `slider.js` only stops the handles from crossing. If Page Up / Down must be exactly 10 % everywhere, add a keydown handler for those two keys.

## Do and don't

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

## Accessibility

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

## Code

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
.sb-slider-rail::before { left: 0; right: 0; background: var(--gray-200); }
.sb-slider-rail::after { left: var(--lo); right: calc(100% - var(--hi)); background: var(--brand-600); }

/* Inputs: 24 px wider than the track so each handle centres on 0 % and 100 %. Only the handle takes the pointer. */
.sb-slider-input {
  --th-bg: var(--white); --th-bd: var(--brand-600); --th-shadow: var(--shadow-md); --th-sheen: var(--raised-sheen-light);
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
.sb-slider-input:is(:hover, [data-state="hover"]) { --th-bg: var(--brand-50); }
.sb-slider-input:is(:focus-visible, :active, [data-state="focus"]) { --th-shadow: var(--shadow-md), 0 0 0 4px var(--focus-ring); }
.sb-slider-input:active::-webkit-slider-thumb { cursor: grabbing; }
.sb-slider-input:active::-moz-range-thumb { cursor: grabbing; }
.sb-slider:has(:disabled) .sb-slider-rail::before { background: var(--gray-100); }
.sb-slider:has(:disabled) .sb-slider-rail::after { background: var(--gray-300); }
.sb-slider-input:disabled { --th-bg: var(--white); --th-bd: var(--gray-300); --th-shadow: none; --th-sheen: none; }
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

### Script

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

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-100: #f2f4f7;
  --gray-200: #eaecf0;
  --gray-300: #d0d5dd;
  --gray-400: #98a2b3;
  --gray-700: #344054;
  --gray-900: #101828;
  --brand-50: #f0f6fe;
  --brand-600: #3966e0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-full: 9999px;
  --shadow-md: 0 4px 8px -2px rgba(16,24,40,.1), 0 2px 4px -2px rgba(16,24,40,.06);
  --shadow-lg: 0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03);
  --raised-sheen-light: linear-gradient(180deg, rgb(255 255 255 / 0), rgb(16 24 40 / .04));
  --focus-ring: color-mix(in srgb, var(--brand-600) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --text-md: 16px/24px;
  --text-xs: 12px/18px;
}
```

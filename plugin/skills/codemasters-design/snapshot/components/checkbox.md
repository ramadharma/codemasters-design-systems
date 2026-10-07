---
name: Checkbox and radio
slug: checkbox
category: Components
status: In Figma and app
version: 0.1.0
updated: 2026-10-06
figma: https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1097-63652
requires: tokens.css
---

# Checkbox and radio

One component for three selection controls, picked with Type: Checkbox for any number of options, Radio for exactly one, and Check circle for selectable cards and rows.

- Figma: [Checkbox](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1097-63652)
- Figma: [_Checkbox base](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1097-63886)

## Usage

| Type | Shape | Use |
| --- | --- | --- |
| Checkbox | Square, radius 4 | Any number of options; a single yes/no that applies on Save |
| Radio | Circle | Exactly one of 2–5 visible options. More than 5: use Input dropdown |
| Check circle | Circle, filled when checked | Selectable cards and list rows where the whole item is the target |

- A yes/no that takes effect immediately is a Toggle, not a Checkbox.
- Clicking the label toggles the control; the whole row is the hit area.
- Radios in one group share a `name` and sit in a `role="radiogroup"` with one group label. Preselect one radio when a sensible default exists.
- Table rows use Checkbox `sm` without text; the header box turns indeterminate when only some rows are selected.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Control | 16 px (`sm`) or 20 px (`md`). Sits 2 px down so it centres on the first line of the label. |
| 2 | Label | Optional. Text sm / Medium (`md`: Text md / Medium), `gray-700`. Gap 8 (`md`: 12). |
| 3 | Supporting text | Optional. Text sm / Regular (`md`: Text md / Regular, 2 px below), `gray-500`. |

## Properties

| Property | Figma values | Code |
| --- | --- | --- |
| Type | Checkbox, Radio, Check circle | `type="checkbox"`, `type="radio"`, `data-variant="circle"` |
| Checked | True, False | `checked` |
| Indeterminate | True, False (Checkbox only) | `input.indeterminate = true`; `data-indeterminate` for first paint |
| Size | `sm` (16), `md` (20) | `data-size` on `.sb-check` |
| State | Default, Hover, Focused, Disabled | `:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state` |
| Text / Supporting text | True, False | `<label for>` / `<p id>` + `aria-describedby`; without text, `aria-label` |

## Types

### Checkbox

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

### Radio

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

### Check circle

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

## Sizes

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

## States

| State | Unchecked | Checked / indeterminate |
| --- | --- | --- |
| Default | `white`, 1 px `gray-300` border | `brand-50` fill, `brand-600` border, `brand-600` check / minus / dot |
| Hover | `brand-50` fill, `brand-600` border | same as Default |
| Focused | `white`, `brand-300` border + 4 px `focus-ring` ring | Default + 4 px `focus-ring` ring |
| Disabled | `gray-100` fill, `gray-200` border | `gray-100` fill, `gray-200` border, `gray-200` mark |

Check circle, checked: solid `brand-600` with a white check (disabled: `gray-200` fill). Disabled also drops the label and supporting text to `gray-300`.

## Select all (indeterminate)

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

## Do and don't

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

## Accessibility

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

## Code

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

### Select-all script

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

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-100: #f2f4f7;
  --gray-200: #eaecf0;
  --gray-300: #d0d5dd;
  --gray-500: #667085;
  --gray-700: #344054;
  --brand-50: #f0f6fe;
  --brand-300: #9fc5f6;
  --brand-600: #3966e0;
  --radius-sm: 4px;
  --radius-full: 9999px;
  --focus-ring: color-mix(in srgb, var(--brand-500) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --text-sm: 14px/20px;
}
```

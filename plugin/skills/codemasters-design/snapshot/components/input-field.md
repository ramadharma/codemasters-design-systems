---
name: Input field
slug: input-field
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-06
requires: tokens.css
---

# Input field

A single-line text field with a label above, an optional hint below, and an error state that says what is wrong and how to fix it.

## Usage

- **Always show a label above the field.** The placeholder is an example, never the label: it disappears as soon as the user types.
- **Hint text explains format or purpose.** In error it is replaced by the message, which says what is wrong and how to fix it ("Nomor polis harus 10 digit").
- **Show the error on blur or submit,** not while the user is still typing.
- **Money fields** use Trailing dropdown (or a plain `Rp` prefix) and keep the full-number format: `Rp 1.725.283.300`.
- For more than one line of text use Textarea input field.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Label | Text sm / Medium, `gray-700`. 6 above the field. |
| 2 | Field | 44 high, padding `10 14`, `white`, 1 px `gray-300` border, radius 8, `shadow-xs`, gap 8 between items. |
| 3 | Leading icon | Optional. 20 px, `gray-500`. |
| 4 | Value / placeholder | Text md / Regular. Placeholder `gray-500`, value `gray-900`. |
| 5 | Help icon | Optional. 16 px `help-circle`, `gray-400`, at the end. Opens a Dark tooltip on hover and focus. |
| 6 | Hint text | Optional. Text sm / Regular, `gray-500`, 6 below the field. In error it becomes the error message in `error-500`. |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Type | Default, Leading dropdown, Trailing dropdown, Leading text, Payment input | `data-type` on `.sb-input` (omit for Default) |
| Leading icon | True, False | 20 px `<svg>` before the input |
| Label | True, False | `<label class="sb-field-label" for>`; without it, `aria-label` on the input |
| Hint text | True, False | `<p class="sb-field-hint" id>` + `aria-describedby` |
| Help icon | True, False | `<button class="sb-input-help">` + `<span role="tooltip">` |
| Destructive | True, False | `aria-invalid="true"` on the input |
| State | Placeholder, Filled, Focused, Disabled | empty, `value`, `:focus`, `disabled`. Static mockups only: `data-state="focus"` |

## Types

### Default

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

### Leading dropdown

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

### Trailing dropdown

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

### Leading text

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

### Payment input

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

## States

| State | Fill | Border | Text | Extra |
| --- | --- | --- | --- | --- |
| Placeholder | `white` | `gray-300` | `gray-500` | Hover: border `gray-400` |
| Filled | `white` | `gray-300` | `gray-900` | — |
| Focused | `white` | `brand-300` | `gray-900` | ring `0 0 0 4px` `focus-ring` + `shadow-xs` |
| Disabled | Default at 50 % opacity | Default at 50 % opacity | Default at 50 % opacity | not editable, `cursor: not-allowed` |
| Destructive | `white` | `error-300` | as above | help icon becomes 16 px `alert-circle` in `error-500`; hint becomes the error message in `error-500` |
| Destructive + Focused | `white` | `error-300` | `gray-900` | ring `0 0 0 4px` `error-100` |

Destructive has no Disabled variant: a disabled field cannot be in error.

## Hint and error messages

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

## Do and don't

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

## Accessibility

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
| Error message `error-500` | `white` | 3.76:1 | **Fails** |
| Field border `gray-300` | `white` | 1.47:1 | Below the 3:1 WCAG 1.4.11 asks for control boundaries |

> **Warning:** **Open decision.** The error message in `error-500` is 3.76:1, below AA for 14 px text. `error-600` (4.83:1) or `error-700` (6.57:1) pass. The `gray-300` border is also faint (1.47:1); the label above the field keeps it identifiable, but a darker border (`gray-400`) would help low-vision users. Both need a design team decision.

## Code

Load `tokens.css`, then `input-field.css`. States come from the input itself (`:focus`, `disabled`, `aria-invalid`), so no script is needed.

`input-field.css`

```css
/* Input field, Codemasters Design System
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

/* Label, control and hint sit 6 apart. */
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
.sb-input:has(input:disabled) { opacity: .5; cursor: not-allowed; } /* disabled: the default look at 50 % opacity */
.sb-input input:disabled { cursor: not-allowed; }
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
.sb-input-help:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
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
.sb-input-select:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; border-radius: var(--radius-sm); }
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

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-100: #f2f4f7;
  --gray-300: #d0d5dd;
  --gray-400: #98a2b3;
  --gray-500: #667085;
  --gray-700: #344054;
  --gray-900: #101828;
  --brand-300: #9fc5f6;
  --brand-600: #3966e0;
  --error-100: #fee4e2;
  --error-300: #fda29b;
  --error-500: #f04438;
  --radius-sm: 4px;
  --radius-md: 8px;
  --shadow-xs: 0 1px 2px rgba(16,24,40,.05);
  --shadow-lg: 0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03);
  --focus-ring: color-mix(in srgb, var(--brand-600) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Timeless Sans', sans-serif;
  --text-md: 16px/24px;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
}
```

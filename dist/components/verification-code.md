---
name: Verification code
slug: verification-code
category: Components
status: In Figma
version: 0.1.0
updated: 2026-10-06
figma: https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1106-66757
requires: tokens.css
---

# Verification code

One large box per digit, for OTP and verification codes only. Figma calls it Mega input field.

- Figma: [Verification code input field](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1106-66757)
- Figma: [_Mega input field base](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1106-66560)

## Usage

- Use it for OTP and verification codes only. Any other number goes in an Input field.
- **4 or 6 digits.** Six digits are split 3 + 3 by a dash so they are easier to read and copy.
- Typing a digit moves focus to the next box; Backspace on an empty box goes back; pasting a full code fills all boxes.
- **The error belongs to the whole code,** not to one digit: every box turns red, and editing any box clears the error.
- Six `md` boxes need about 560 px and six `sm` boxes about 460 px. On phones narrower than that, use 4 digits.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Label | One label for the whole group: Text sm / Medium, `gray-700`. |
| 2 | Group | Row of boxes, gap 8 (`sm`) or 12 (`md`, `lg`). `role="group"` named by the label. |
| 3 | Digit box | Square, padding 8, 1 px border, radius 8, `shadow-xs`, digit centred. Size and type from the size table. |
| 4 | Separator | 6 digits only: a `-` after the third box, Display xl / Medium `gray-300`. |
| 5 | Hint text | Text sm / Regular `gray-500`. In error it becomes the message in `error-500`. |

## Properties

| Property | Figma values | Code |
| --- | --- | --- |
| Size | `sm`, `md`, `lg` | `data-size` on `.sb-code` |
| Digits | 4, 6 | one `<input class="sb-code-digit">` per digit; 6 adds `.sb-code-sep` after the third |
| Label | True, False | label element referenced by `aria-labelledby`; without it, `aria-label` on the group |
| Hint text | True, False | `<p class="sb-field-hint" id>` referenced by `aria-describedby` |
| State (base) | Placeholder, Filled, Focused, Disabled | empty, `value`, `:focus`, `disabled`. Static mockups only: `data-state="focus"` |
| Destructive (base, to add in Figma) | True, False | `aria-invalid="true"` on every digit |

## Sizes

```html
<div class="sb-field">
  <div class="sb-code" data-size="sm" role="group" aria-label="Kode verifikasi">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 4" value="4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 4" value="8">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 4" value="2">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 4" value="9">
  </div>
</div>
<div class="sb-field">
  <div class="sb-code" data-size="md" role="group" aria-label="Kode verifikasi">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 4" value="4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 4" value="8">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 4" value="2">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 4" value="9">
  </div>
</div>
<div class="sb-field">
  <div class="sb-code" data-size="lg" role="group" aria-label="Kode verifikasi">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 4" value="4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 4" value="8">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 4" value="2">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 4" value="9">
  </div>
</div>
```

| Size | Box | Digit style | Gap between boxes |
| --- | --- | --- | --- |
| `sm` | 64 × 64 | Display lg / Medium (48/60) | 8 |
| `md` | 80 × 80 | Display lg / Medium (48/60) | 12 |
| `lg` | 96 × 96 | Display xl / Medium (60/72) | 12 |

## Digits

### 4 digits

```html
<div class="sb-field">
  <span class="sb-field-label" id="dg-4-label">Kode verifikasi</span>
  <div class="sb-code" data-size="md" role="group" aria-labelledby="dg-4-label" aria-describedby="dg-4-hint">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 4">
  </div>
  <p class="sb-field-hint" id="dg-4-hint" aria-live="polite">Kode 4 digit dikirim lewat SMS.</p>
</div>
```

### 6 digits

```html
<div class="sb-field">
  <span class="sb-field-label" id="dg-6-label">Kode verifikasi</span>
  <div class="sb-code" data-size="sm" role="group" aria-labelledby="dg-6-label" aria-describedby="dg-6-hint">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 6">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 6">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 6">
    <span class="sb-code-sep" aria-hidden="true">-</span>
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 6">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 5 dari 6">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 6 dari 6">
  </div>
  <p class="sb-field-hint" id="dg-6-hint" aria-live="polite">Kode 6 digit dikirim ke email Anda.</p>
</div>
```

## States

| State | Fill | Border | Digit |
| --- | --- | --- | --- |
| Placeholder | `white` | `gray-300` | `0` in `gray-300` |
| Filled | `white` | `brand-300` | `brand-600` |
| Focused | `white` | `brand-300` + 4 px `focus-ring` ring | `brand-600` |
| Disabled | `gray-50` | `gray-300` | `gray-200` |
| Error | `white` | `error-300` | `error-600` |
| Error + Focused | `white` | `error-300` + 4 px `error-100` ring | `error-600` |

### Error

Every box goes red at once and the hint becomes the message, Text sm / Regular `error-500` ("Kode salah. Sisa 2 percobaan."). Type in any box to clear it.

```html
<div class="sb-field">
  <span class="sb-field-label" id="err-code-label">Kode verifikasi</span>
  <div class="sb-code" data-size="sm" role="group" aria-labelledby="err-code-label" aria-describedby="err-code-hint">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 6" value="4" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 6" value="8" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 6" value="2" aria-invalid="true">
    <span class="sb-code-sep" aria-hidden="true">-</span>
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 6" value="9" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 5 dari 6" value="1" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 6 dari 6" value="6" aria-invalid="true">
  </div>
  <p class="sb-field-hint" id="err-code-hint" aria-live="polite" data-hint="Kode 6 digit dikirim ke email Anda.">Kode salah. Sisa 2 percobaan.</p>
</div>
```

## Do and don't

**Do:** The whole code is wrong, so every box shows the error.

```html
<div class="sb-field">
  <div class="sb-code" data-size="sm" role="group" aria-label="Kode verifikasi" aria-describedby="dd-all-hint">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 4" value="4" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 4" value="8" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 4" value="2" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 4" value="9" aria-invalid="true">
  </div>
  <p class="sb-field-hint" id="dd-all-hint" aria-live="polite" data-hint="Kode 4 digit dikirim lewat SMS.">Kode salah. Sisa 2 percobaan.</p>
</div>
```

**Don't:** One red box suggests one wrong digit. The server only knows the code failed.

```html
<div class="sb-field">
  <div class="sb-code" data-size="sm" role="group" aria-label="Kode verifikasi">
    <input class="sb-code-digit" type="text" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 4" value="4">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 2 dari 4" value="8">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 3 dari 4" value="2" aria-invalid="true">
    <input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Digit 4 dari 4" value="9">
  </div>
</div>
```

## Accessibility

- Give the group one label (`role="group"` + `aria-labelledby`), and each box its position: `aria-label="Digit 1 dari 6"`.
- Use `inputmode="numeric"` for the number keyboard and `autocomplete="one-time-code"` on the first box, so the phone offers the SMS code. The script spreads an autofilled code over all boxes.
- Do not set `maxlength="1"`: it blocks that autofill. The script keeps one digit per box instead.
- The hint has `aria-live="polite"`, so the error is announced once when it appears.
- ← → move between boxes; Backspace on an empty box moves back and clears it.

| Text | On | Ratio | AA (large text 3:1) |
| --- | --- | --- | --- |
| Digit `brand-600` | `white` | 5.06:1 | Passes |
| Error digit `error-600` | `white` | 4.83:1 | Passes |
| Placeholder `0` in `gray-300` | `white` | 1.47:1 | **Fails** |
| Error message `error-500` | `white` | 3.76:1 | **Fails** (14 px text needs 4.5:1) |

> **Warning:** The placeholder `0` is very faint (1.47:1). The label and hint explain the field, so it is not the only cue, but `gray-400` or no placeholder at all would be clearer. The error message has the same `error-500` issue as Input field.

## Code

Load `tokens.css`, `verification-code.css` and `verification-code.js`. The script is required: it moves focus and handles paste and autofill.

`verification-code.css`

```css
/* Verification code input field (Mega input field), Codemasters Design System
   Figma: _Mega input field base (1106-66560), Verification code input field (1106-66757)
   Needs tokens.css and verification-code.js.

   <div class="sb-field">
     <span class="sb-field-label" id="otp-label">Kode verifikasi</span>
     <div class="sb-code" data-size="md" role="group" aria-labelledby="otp-label" aria-describedby="otp-hint">
       <input class="sb-code-digit" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 6">
       … one input per digit; 6 digits put <span class="sb-code-sep" aria-hidden="true">-</span> after the 3rd
     </div>
     <p class="sb-field-hint" id="otp-hint">Kode dikirim ke email Anda.</p>
   </div>

   data-size   sm | md | lg
   Error       aria-invalid="true" on every digit. The hint becomes the error message.
   Disabled    the disabled attribute on every digit.
   Filled      comes from the value itself (:not(:placeholder-shown)).
   data-state="focus" on a digit forces Focused in static mockups and docs only. */

.sb-field { display: grid; gap: 6px; } /* Figma component spec: label, control, hint 6 apart */
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-field:has([aria-invalid="true"]) .sb-field-hint { color: var(--error-500); }

.sb-code { --code-box: 80px; --code-gap: 12px; --code-type: var(--display-lg); display: flex; align-items: center; gap: var(--code-gap); }
.sb-code[data-size="sm"] { --code-box: 64px; --code-gap: 8px; }
.sb-code[data-size="lg"] { --code-box: 96px; --code-type: var(--display-xl); }

.sb-code-digit {
  box-sizing: border-box; flex: none;
  width: var(--code-box); height: var(--code-box); margin: 0; padding: 8px;
  font: 500 var(--code-type) var(--font); letter-spacing: var(--tracking-display); text-align: center;
  color: var(--brand-600); caret-color: var(--brand-600);
  background: var(--white);
  border: 1px solid var(--gray-300); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-code-digit::placeholder { color: var(--gray-300); opacity: 1; }
.sb-code-digit:not(:placeholder-shown) { border-color: var(--brand-300); }
.sb-code-digit:focus, .sb-code-digit[data-state="focus"] {
  outline: none; border-color: var(--brand-300); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring);
}
.sb-code-digit:disabled { background: var(--gray-50); border-color: var(--gray-300); color: var(--gray-200); cursor: not-allowed; }
.sb-code-digit:disabled::placeholder { color: var(--gray-200); }
.sb-code-digit[aria-invalid="true"] { border-color: var(--error-300); color: var(--error-600); caret-color: var(--error-600); }
.sb-code-digit[aria-invalid="true"]:focus, .sb-code-digit[aria-invalid="true"][data-state="focus"] { box-shadow: var(--shadow-xs), 0 0 0 4px var(--error-100); }

/* 6 digits split 3 + 3 by a dash in Display xl / Medium. */
.sb-code-sep { font: 500 var(--display-xl) var(--font); letter-spacing: var(--tracking-display); color: var(--gray-300); }

@media (prefers-reduced-motion: reduce) {
  .sb-code-digit { transition: none; }
}
```

### Script

`verification-code.js`

```js
// Verification code boxes: typing moves to the next box, Backspace on an empty box goes back,
// ← → move between boxes, and pasting (or autofill) spreads the code over all boxes.
function codeInput(e) {
  const box = e.target.closest?.('.sb-code-digit');
  if (!box) return;
  const boxes = [...box.closest('.sb-code').querySelectorAll('.sb-code-digit')];
  const i = boxes.indexOf(box);
  const digits = box.value.replace(/\D/g, '');
  clearCodeError(box);
  if (digits.length > 1) return fillCode(boxes, i, digits); // autofill of the whole code into one box
  box.value = digits;
  if (digits) boxes[i + 1]?.focus();
}
function codeKeydown(e) {
  const box = e.target.closest?.('.sb-code-digit');
  if (!box) return;
  const boxes = [...box.closest('.sb-code').querySelectorAll('.sb-code-digit')];
  const i = boxes.indexOf(box);
  if (e.key === 'Backspace' && !box.value && i > 0) {
    e.preventDefault();
    boxes[i - 1].value = '';
    boxes[i - 1].focus();
    clearCodeError(box);
  } else if (e.key === 'ArrowLeft') boxes[i - 1]?.focus();
  else if (e.key === 'ArrowRight') boxes[i + 1]?.focus();
}
function codePaste(e) {
  const box = e.target.closest?.('.sb-code-digit');
  if (!box) return;
  e.preventDefault();
  const boxes = [...box.closest('.sb-code').querySelectorAll('.sb-code-digit')];
  clearCodeError(box);
  fillCode(boxes, boxes.indexOf(box), e.clipboardData.getData('text').replace(/\D/g, ''));
}
function fillCode(boxes, start, digits) {
  [...digits].slice(0, boxes.length - start).forEach((d, k) => (boxes[start + k].value = d));
  boxes[Math.min(start + digits.length, boxes.length - 1)].focus();
}
function clearCodeError(box) {
  const group = box.closest('.sb-code');
  const invalid = group.querySelectorAll('[aria-invalid="true"]');
  if (!invalid.length) return;
  invalid.forEach(b => b.removeAttribute('aria-invalid'));
  const hint = document.getElementById(group.getAttribute('aria-describedby'));
  if (hint && hint.dataset.hint) hint.textContent = hint.dataset.hint;
}
document.addEventListener('input', codeInput);
document.addEventListener('keydown', codeKeydown);
document.addEventListener('paste', codePaste);
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-200: #eaecf0;
  --gray-300: #d0d5dd;
  --gray-500: #667085;
  --gray-700: #344054;
  --brand-300: #9fc5f6;
  --brand-600: #3966e0;
  --error-100: #fee4e2;
  --error-300: #fda29b;
  --error-500: #f04438;
  --error-600: #d92d20;
  --radius-md: 8px;
  --shadow-xs: 0 1px 2px rgba(16,24,40,.05);
  --focus-ring: color-mix(in srgb, var(--brand-500) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --display-xl: 60px/72px;
  --display-lg: 48px/60px;
  --text-sm: 14px/20px;
  --tracking-display: -0.02em;
}
```

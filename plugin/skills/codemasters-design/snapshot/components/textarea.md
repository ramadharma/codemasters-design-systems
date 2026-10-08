---
name: Textarea input field
slug: textarea
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-06
requires: tokens.css
---

# Textarea input field

Multi-line text: notes, rejection reasons, AI summary edits. Same label, hint and error as Input field, plus an optional character counter.

## Usage

- Use a textarea for text longer than one line: notes, reasons, AI summary edits. For one line use Input field.
- When the text needs formatting (headings, lists, bold), use the WYSIWYG editor instead.
- **Always show a label above the field.** The placeholder is an example, never the label.
- **Show the counter only when there is a limit.** Keep typing allowed past it and show the error, so text is never cut off.
- **Resize vertically only** (`resize: vertical`), never below 128.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Label | Text sm / Medium, `gray-700`. Same as Input field. |
| 2 | Box | 128 high by default, padding `10 14`, `white`, 1 px `gray-300` border, radius 8, `shadow-xs`. Text md / Regular from the top-left: placeholder `gray-500`, value `gray-900`. No help or alert icon inside. |
| 3 | Character counter | Optional. Text xs / Regular `gray-500`, bottom-right inside the box (`0/150`). Turns `error-500` past the limit (`151/150`). |
| 4 | Hint text | Text sm / Regular `gray-500`. In error it becomes the message in `error-500`. |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Label | True, False | `<label class="sb-field-label" for>`; without it, `aria-label` on the textarea |
| Hint text | True, False | `<p class="sb-field-hint" id>` + `aria-describedby` |
| Show limit (base) | True, False | `data-limit="150"` on the textarea + `<span class="sb-textarea-count">` |
| Destructive | True, False | `aria-invalid="true"` on the textarea |
| State | Placeholder, Default (filled), Focused, Disabled | empty, text content, `:focus`, `disabled`. Static mockups only: `data-state="focus"` |

## States

| State | Fill | Border | Extra |
| --- | --- | --- | --- |
| Placeholder | `white` | `gray-300` | Placeholder `gray-500`. Hover: border `gray-400` |
| Default (filled) | `white` | `gray-300` | Value `gray-900` |
| Focused | `white` | `brand-300` | ring `0 0 0 4px` `focus-ring` + `shadow-xs` |
| Disabled | `gray-50` | `gray-300` | Text `gray-500`, no resize, `cursor: not-allowed` |
| Destructive | `white` | `error-300` | Message in `error-500`; focused ring `error-100` |
| Over the limit | `white` | `error-300` | Counter `error-500`, message "Maksimal 150 karakter." |

## Character counter

- Show the counter only when the field has a limit.
- Never set `maxlength`: it silently drops what the user types or pastes. Let the text run over, turn the counter red and say what to do.
- The counter updates on every keystroke; the hint has `aria-live="polite"`, so screen readers hear the error once when it appears, not every count.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ta-over">Alasan penolakan</label>
  <div class="sb-textarea">
    <textarea id="ta-over" placeholder="Tulis alasan yang bisa dipahami peserta…" data-limit="150" aria-describedby="ta-over-hint ta-over-count" aria-invalid="true">Resume medis belum dilampirkan. Mohon unggah resume medis dari rumah sakit, lalu ajukan ulang klaim. Pastikan resume memuat diagnosis, tindakan dan tanggal rawat inap.</textarea>
    <span class="sb-textarea-count" id="ta-over-count" data-over>167/150</span>
  </div>
  <p class="sb-field-hint" id="ta-over-hint" aria-live="polite" data-hint="Alasan ini dikirim ke peserta." data-error="Maksimal 150 karakter.">Maksimal 150 karakter.</p>
</div>
```

## Do and don't

**Do:** Allow typing past the limit and say how to fix it.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ta-dd-over">Alasan penolakan</label>
  <div class="sb-textarea">
    <textarea id="ta-dd-over" placeholder="Tulis alasan yang bisa dipahami peserta…" data-limit="150" aria-describedby="ta-dd-over-hint ta-dd-over-count" aria-invalid="true">Resume medis belum dilampirkan. Mohon unggah resume medis dari rumah sakit, lalu ajukan ulang klaim. Pastikan resume memuat diagnosis, tindakan dan tanggal rawat inap.</textarea>
    <span class="sb-textarea-count" id="ta-dd-over-count" data-over>167/150</span>
  </div>
  <p class="sb-field-hint" id="ta-dd-over-hint" aria-live="polite" data-hint="Alasan ini dikirim ke peserta." data-error="Maksimal 150 karakter.">Maksimal 150 karakter.</p>
</div>
```

**Don't:** `maxlength` cuts the text mid-word, and the user is not told.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ta-dd-cut">Alasan penolakan</label>
  <div class="sb-textarea">
    <textarea id="ta-dd-cut" placeholder="Tulis alasan yang bisa dipahami peserta…" data-limit="150" aria-describedby="ta-dd-cut-hint ta-dd-cut-count">Resume medis belum dilampirkan. Mohon unggah resume medis dari rumah sakit, lalu ajukan ulang klaim. Pastikan resume memuat diagnosis, tindakan dan ta</textarea>
    <span class="sb-textarea-count" id="ta-dd-cut-count">150/150</span>
  </div>
  <p class="sb-field-hint" id="ta-dd-cut-hint" aria-live="polite" data-hint="Alasan ini dikirim ke peserta." data-error="Maksimal 150 karakter.">Alasan ini dikirim ke peserta.</p>
</div>
```

**Do:** A textarea for a reason that runs over several lines.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ta-dd-multi">Alasan penolakan</label>
  <div class="sb-textarea">
    <textarea id="ta-dd-multi" placeholder="Tulis alasan yang bisa dipahami peserta…">Resume medis belum dilampirkan. Mohon unggah resume medis dari rumah sakit, lalu ajukan ulang klaim.</textarea>
  </div>
</div>
```

**Don't:** A single-line input for long text. The user cannot read back what they wrote.

```html
<div class="sb-field">
  <label class="sb-field-label" for="ta-dd-single">Alasan penolakan</label>
  <div class="sb-input">
    <input id="ta-dd-single" type="text" value="Resume medis belum dilampirkan. Mohon unggah resume medis dari rumah sakit, lalu ajukan ulang klaim.">
  </div>
</div>
```

## Accessibility

- Connect the label with `for` / `id`; a field without a visible label needs `aria-label`.
- `aria-describedby` points at the hint and the counter, so both are read when the field gets focus.
- In error set `aria-invalid="true"`; the counter script does this when the text passes the limit.
- Resize stays vertical, so a taller box never breaks the layout sideways.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Value `gray-900` | `white` | 17.75:1 | Passes |
| Placeholder, hint, counter `gray-500` | `white` | 4.97:1 | Passes |
| Disabled text `gray-500` | `gray-50` | 4.76:1 | Passes |
| Error message, counter over limit `error-500` | `white` | 3.76:1 | **Fails** |

> **Warning:** Same open decision as Input field: `error-500` text is below AA. `error-600` (4.83:1) or `error-700` (6.57:1) would pass.

## Code

Load `tokens.css`, then `textarea.css`. Add `textarea-counter.js` only when a field has a limit.

`textarea.css`

```css
/* Textarea input field, Codemasters Design System
   Needs tokens.css. Label and hint rules are the same as input-field.css; loading both is safe.

   <div class="sb-field">
     <label class="sb-field-label" for="alasan">Alasan penolakan</label>
     <div class="sb-textarea">
       <textarea id="alasan" data-limit="150" aria-describedby="alasan-hint alasan-count"></textarea>
       <span class="sb-textarea-count" id="alasan-count">0/150</span>
     </div>
     <p class="sb-field-hint" id="alasan-hint" aria-live="polite"
        data-hint="Alasan ini dikirim ke peserta." data-error="Maksimal 150 karakter.">Alasan ini dikirim ke peserta.</p>
   </div>

   Show limit   data-limit on the textarea + .sb-textarea-count (needs textarea-counter.js). Never use maxlength.
   Destructive  aria-invalid="true" on the textarea.
   Disabled     the disabled attribute.
   data-state="focus" on .sb-textarea forces Focused in static mockups and docs only. */

.sb-field { display: grid; gap: 6px; } /* label, control, hint 6 apart */
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-field:has([aria-invalid="true"]) .sb-field-hint { color: var(--error-500); }

.sb-textarea { position: relative; display: grid; }
.sb-textarea textarea {
  --ta-border: var(--gray-300); --ta-focus: var(--brand-300); --ta-ring: var(--focus-ring);
  box-sizing: border-box; width: 100%; height: 128px; min-height: 128px; margin: 0;
  padding: 10px 14px; /* control padding exception, same as Input field */
  resize: vertical;
  font: 400 var(--text-md) var(--font); color: var(--gray-900);
  background: var(--white);
  border: 1px solid var(--ta-border); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-textarea textarea::placeholder { color: var(--gray-500); opacity: 1; }
/* Room for the counter so the last line never runs under it: 10 + 18 + 4. */
.sb-textarea:has(.sb-textarea-count) textarea { padding-bottom: 32px; }

/* States */
.sb-textarea textarea:hover:not(:focus, :disabled, [aria-invalid="true"]) { border-color: var(--gray-400); }
.sb-textarea textarea:focus, .sb-textarea[data-state="focus"] textarea {
  outline: none; border-color: var(--ta-focus); box-shadow: var(--shadow-xs), 0 0 0 4px var(--ta-ring);
}
.sb-textarea textarea:disabled { background: var(--gray-50); color: var(--gray-500); cursor: not-allowed; resize: none; }
.sb-textarea textarea[aria-invalid="true"] { --ta-border: var(--error-300); --ta-focus: var(--error-300); --ta-ring: var(--error-100); }

/* Character counter: bottom-right inside the box. Kept 24 from the edge so it clears the resize grip. */
.sb-textarea-count {
  position: absolute; bottom: 10px; inset-inline-end: 24px;
  font: 400 var(--text-xs) var(--font); color: var(--gray-500);
  pointer-events: none; font-variant-numeric: tabular-nums;
}
.sb-textarea-count[data-over] { color: var(--error-500); }

@media (prefers-reduced-motion: reduce) {
  .sb-textarea textarea { transition: none; }
}
```

### Counter script

`textarea-counter.js`

```js
// Character counter for every textarea with data-limit. Typing past the limit is allowed:
// the counter turns red, the field goes into error and the hint says what to do. Text is never cut.
function updateCounter(e) {
  const ta = e.target.closest('.sb-textarea textarea[data-limit]');
  if (!ta) return;
  const limit = Number(ta.dataset.limit);
  const over = ta.value.length > limit;
  const count = ta.parentElement.querySelector('.sb-textarea-count');
  count.textContent = `${ta.value.length}/${limit}`;
  count.toggleAttribute('data-over', over);
  if (over) ta.setAttribute('aria-invalid', 'true');
  else ta.removeAttribute('aria-invalid');
  const hint = ta.closest('.sb-field').querySelector('.sb-field-hint[data-error]');
  if (hint) hint.textContent = over ? hint.dataset.error : hint.dataset.hint;
}
document.addEventListener('input', updateCounter);
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-300: #d0d5dd;
  --gray-400: #98a2b3;
  --gray-500: #667085;
  --gray-700: #344054;
  --gray-900: #101828;
  --brand-300: #9fc5f6;
  --error-100: #fee4e2;
  --error-300: #fda29b;
  --error-500: #f04438;
  --radius-md: 8px;
  --shadow-xs: 0 1px 2px rgba(16,24,40,.05);
  --focus-ring: color-mix(in srgb, var(--brand-500) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --text-md: 16px/24px;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
}
```

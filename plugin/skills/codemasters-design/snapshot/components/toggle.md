---
name: Toggle
slug: toggle
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-06
requires: tokens.css
---

# Toggle

An on/off switch whose change takes effect immediately, such as "Tampilkan hanya klaim saya" or a notification setting. If the choice is applied only after Save, use a Checkbox.

## Usage

- **Takes effect immediately.** Use a toggle when flipping it changes something right away. If the choice is only applied after a Save or Submit button, use a Checkbox.
- **The label says what is turned on, not the state:** "Notifikasi email", not "Aktif/Nonaktif".
- Clicking the label toggles too.
- Use the Light theme only on brand-tinted surfaces.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Track + knob | Track fully rounded with 2 px padding. Knob white with `shadow-sm`, left when off, right when on; it slides in 150 ms with `--ease`. |
| 2 | Label | Optional. Text sm / Medium (`md`: Text md / Medium), `gray-700`. Says what is turned on. |
| 3 | Supporting text | Optional. Text sm / Regular (`md`: Text md / Regular, 2 px below), `gray-500`. |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Pressed | True, False | `checked` |
| Size | `sm`, `md` | `data-size` on `.sb-toggle` |
| Theme | Dark (standard), Light (brand-tinted) | `data-theme="light"` (omit for Dark) |
| State | Default, Hover, Focus, Disabled | `:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state` |
| Text / Supporting text | True, False | `<label for>` / `<p id>` + `aria-describedby`; without text, `aria-label` |

## Sizes

```html
<div class="sb-toggle" data-size="sm">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-sm" aria-describedby="tg-sm-sup" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-sm">Notifikasi email</label>
    <p class="sb-toggle-sup" id="tg-sm-sup">Kirim email saat status klaim berubah.</p>
  </div>
</div>
<div class="sb-toggle" data-size="md">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-md" aria-describedby="tg-md-sup" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-md">Notifikasi email</label>
    <p class="sb-toggle-sup" id="tg-md-sup">Kirim email saat status klaim berubah.</p>
  </div>
</div>
```

| Size | Track | Knob | Gap to text | Label | Supporting text |
| --- | --- | --- | --- | --- | --- |
| `sm` | 36 × 20 | 16 | 8 | Text sm / Medium `gray-700` | Text sm / Regular `gray-500` |
| `md` | 44 × 24 | 20 | 12 | Text md / Medium `gray-700` | Text md / Regular `gray-500`, 2 px below |

## States

| State | Off (track) | On (track) |
| --- | --- | --- |
| Default | `gray-100` | `brand-600` |
| Hover | `gray-200` | `brand-700` |
| Focus | Default + `0 0 0 4px` `focus-ring` ring | Default + `0 0 0 4px` `focus-ring` ring |
| Disabled | `gray-100`, knob `gray-50` | `gray-100`, knob `gray-50` |

Disabled: the label and supporting text drop to `gray-300`.

## Light theme

For brand-tinted surfaces only, such as the AI summary box. Off `brand-50`, hover `brand-100`, on `brand-200`.

```html
<div class="sb-toggle" data-size="sm" data-theme="light">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-light" aria-describedby="tg-light-sup" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-light">Tampilkan ringkasan AI</label>
    <p class="sb-toggle-sup" id="tg-light-sup">Ringkasan muncul di atas detail klaim.</p>
  </div>
</div>
```

## Do and don't

**Do:** The list filters as soon as the switch flips.

```html
<div class="sb-toggle" data-size="sm">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-do-now" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-do-now">Tampilkan hanya klaim saya</label>
  </div>
</div>
```

**Don't:** Nothing happens until Simpan. Use a Checkbox in forms.

```html
<div class="dd-form"><div class="sb-toggle" data-size="sm">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-dont-save" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-dont-save">Kirim salinan ke peserta</label>
  </div>
</div>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">Simpan</button></div>
```

**Do:** The label names what is switched on.

```html
<div class="sb-toggle" data-size="sm">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-do-label" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-do-label">Notifikasi email</label>
  </div>
</div>
```

**Don't:** The label repeats the state. Aktif what?

```html
<div class="sb-toggle" data-size="sm">
  <input class="sb-toggle-input" type="checkbox" role="switch" id="tg-dont-label" checked>
  <div class="sb-toggle-text">
    <label class="sb-toggle-label" for="tg-dont-label">Aktif</label>
  </div>
</div>
```

## Accessibility

- Use a native checkbox with `role="switch"`: it is focusable, Space flips it, and screen readers announce "switch, on/off" from `checked`.
- Connect the label with `for` / `id`, and the supporting text with `aria-describedby`. A toggle without visible text needs `aria-label`.
- The state also shows by position (knob left or right), not only by colour.
- Focus shows a 4 px `focus-ring` ring on `:focus-visible`.

| Pair | Ratio | Needed | Result |
| --- | --- | --- | --- |
| On track `brand-600` on `white` | 5.06:1 | 3:1 | Passes |
| Off track `gray-100` on `white` | 1.10:1 | 3:1 | **Fails** |
| Light theme on track `brand-200` on `brand-50` | 1.30:1 | 3:1 | **Fails** |
| Label `gray-700`, supporting text `gray-500` on `white` | 10.46:1, 4.97:1 | 4.5:1 | Passes |

> **Warning:** The Off track barely stands out from a white page (1.10:1); the knob's `shadow-sm` is what makes it visible. WCAG 1.4.11 asks 3:1 for the parts that show a control's state. A `gray-400` off track (2.58:1) or a 1 px `gray-300` border would help. Decision for the design team.

## Code

Load `tokens.css` and `toggle.css`. No script: the switch is a native checkbox, so click, label and keyboard work out of the box. Listen for `change` to apply the setting immediately.

`toggle.css`

```css
/* Toggle, Codemasters Design System
   Needs tokens.css. No script: it is a native checkbox.

   <div class="sb-toggle" data-size="sm">
     <input class="sb-toggle-input" type="checkbox" role="switch" id="notif" aria-describedby="notif-sup">
     <div class="sb-toggle-text">
       <label class="sb-toggle-label" for="notif">Notifikasi email</label>
       <p class="sb-toggle-sup" id="notif-sup">Kirim email saat status klaim berubah.</p>
     </div>
   </div>

   data-size    sm | md
   data-theme   light: brand-tinted, only on brand-tinted surfaces (omit for the standard Dark theme)
   Pressed      the checked attribute. Disabled: the disabled attribute.
   data-state   hover | focus on the input forces a state in static mockups and docs only. */

.sb-toggle {
  --tg-w: 36px; --tg-h: 20px; --tg-knob: 16px;
  --tg-off: var(--gray-100); --tg-off-hover: var(--gray-200); --tg-on: var(--brand-600); --tg-on-hover: var(--brand-700);
  display: inline-flex; align-items: flex-start; gap: 8px;
}
.sb-toggle[data-size="md"] { --tg-w: 44px; --tg-h: 24px; --tg-knob: 20px; gap: 12px; }
.sb-toggle[data-theme="light"] { --tg-off: var(--brand-50); --tg-off-hover: var(--brand-100); --tg-on: var(--brand-200); --tg-on-hover: var(--brand-200); }

/* Track: fully rounded, 2 px padding. Knob: white, shadow-sm, slides 150 ms. */
.sb-toggle-input {
  position: relative; flex: none; box-sizing: border-box;
  width: var(--tg-w); height: var(--tg-h); margin: 0;
  border-radius: var(--radius-full); background: var(--tg-off);
  appearance: none; cursor: pointer;
  transition: background-color 150ms var(--ease), box-shadow 150ms var(--ease);
}
.sb-toggle-input::before {
  content: ''; position: absolute; top: 2px; left: 2px;
  width: var(--tg-knob); height: var(--tg-knob); border-radius: var(--radius-full);
  background: var(--white); box-shadow: var(--shadow-sm);
  transition: translate 150ms var(--ease);
}
.sb-toggle-input:checked { background: var(--tg-on); }
.sb-toggle-input:checked::before { translate: calc(var(--tg-w) - var(--tg-knob) - 4px) 0; }
.sb-toggle-input:hover:not(:disabled), .sb-toggle-input[data-state="hover"] { background: var(--tg-off-hover); }
.sb-toggle-input:checked:hover:not(:disabled), .sb-toggle-input:checked[data-state="hover"] { background: var(--tg-on-hover); }
.sb-toggle-input:focus-visible, .sb-toggle-input[data-state="focus"] { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }
.sb-toggle-input:disabled { background: var(--gray-100); cursor: not-allowed; }
.sb-toggle-input:disabled::before { background: var(--gray-50); }

/* Text */
.sb-toggle-text { display: grid; }
.sb-toggle-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); cursor: pointer; }
.sb-toggle-sup { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-toggle[data-size="md"] .sb-toggle-label { font-size: 16px; line-height: 24px; }
.sb-toggle[data-size="md"] .sb-toggle-sup { margin-top: 2px; font-size: 16px; line-height: 24px; }
.sb-toggle:has(:disabled) .sb-toggle-label, .sb-toggle:has(:disabled) .sb-toggle-sup { color: var(--gray-300); cursor: not-allowed; }

@media (prefers-reduced-motion: reduce) {
  .sb-toggle-input, .sb-toggle-input::before { transition: none; }
}
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f2f4f7;
  --gray-200: #eaecf0;
  --gray-300: #d0d5dd;
  --gray-500: #667085;
  --gray-700: #344054;
  --brand-50: #f0f6fe;
  --brand-100: #dfeafb;
  --brand-200: #c5dbfa;
  --brand-600: #3966e0;
  --brand-700: #2e51cd;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 3px rgba(16,24,40,.1), 0 1px 2px rgba(16,24,40,.06);
  --focus-ring: color-mix(in srgb, var(--brand-600) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --text-sm: 14px/20px;
}
```

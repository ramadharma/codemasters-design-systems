---
name: Button
slug: button
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-26
requires: tokens.css
---

# Button

Runs an action on the current page: save, submit, open a dialog, start an analysis. Six variants and the sizes of shadcn/ui, in the Codemasters colours.

## Usage

Use a button for an action on the current page. The Link variant is for links inside running text, not for actions.

- **A button looks like a button.** A rectangle with radius 10 (8 at `xs` and `sm`) and a fill or a border. Never turn an action into bare text or text with an arrow.
- **One Default per view.** Default (the brand fill) is the next step of the flow: Mulai Analisis, Kirim ke Advisor, Keputusan. Every other action steps down: Outline, then Secondary or Ghost, then Link.
- **Outline** for the other actions next to Default (Batal, Ajukan). **Secondary** for low-emphasis actions on a busy surface. **Ghost** for toolbars, icon buttons and actions inside rows.
- **Order in a row.** Least important on the left, Default on the right, gap 8.
- **Destructive** is a soft red, for the action that deletes or rejects. In a dialog whose purpose is deleting, it is the main action; elsewhere, a destructive choice among others (Tolak next to Setujui) stays Outline.
- **Labels are verbs in Title Case:** Mulai Analisis, Kirim ke Advisor, Ajukan Persetujuan, Sepakati Klaim.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | Radius 10 (`--radius-control`; 8 at `xs` and `sm`), 1 px border (transparent on filled variants), `shadow-xs` on Default and Outline. Height and padding come from the size; heights include the border. |
| 2 | Leading icon | Optional. 16 px (12 at `xs`, 14 at `sm`), `currentColor`. The padding on its side drops to 8 (6 at `xs` and `sm`), so the icon looks centred. |
| 3 | Label | Medium. Text sm at `default` and `lg`, Text xs at `xs` and `sm`. A verb in Title Case. |
| 4 | Trailing icon | Optional. Same size as the leading icon. A menu trigger uses chevron-down with `class="sb-btn-chevron"`, which turns 180° when the menu is open. |

The specimen is shown at 160 %.

## Variants

```html
<button class="sb-btn" type="button">Default</button>
<button class="sb-btn" type="button" data-variant="outline">Outline</button>
<button class="sb-btn" type="button" data-variant="secondary">Secondary</button>
<button class="sb-btn" type="button" data-variant="ghost">Ghost</button>
<button class="sb-btn" type="button" data-variant="destructive">Destructive</button>
<button class="sb-btn" type="button" data-variant="link">Link</button>
```

### Colours per state

| Variant | Default (fill / border / text) | Hover | Focused |
| --- | --- | --- | --- |
| Default | `brand-500` / none / `white` | `brand-600` | `brand-300` border, 3 px `focus-ring` |
| Outline | `white` / `gray-200` / `gray-900` | `gray-50` fill | `brand-300` border, 3 px `focus-ring` |
| Secondary | `gray-100` / none / `gray-900` | `gray-100` with 5 % `gray-900` | `brand-300` border, 3 px `focus-ring` |
| Ghost | none / none / `gray-900` | `gray-50` fill | `brand-300` border, 3 px `focus-ring` |
| Destructive | `error-600` at 10 % / none / `error-700` | `error-600` at 20 % | `error-600` at 40 % border, 3 px ring at 20 % |
| Link | text `brand-700`, no box | underline, offset 4 | 2 px `brand-300` outline |

In the dark theme Destructive takes 20 % (hover 30 %), and the semantic tokens remap the rest.

## Sizes

```html
<button class="sb-btn" type="button" data-size="xs">xs</button>
<button class="sb-btn" type="button" data-size="sm">sm</button>
<button class="sb-btn" type="button">default</button>
<button class="sb-btn" type="button" data-size="lg">lg</button>
<button class="sb-btn" type="button" data-size="xl">xl</button>
```

```html
<button class="sb-btn" type="button" data-variant="outline" data-size="icon-xs" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-variant="outline" data-size="icon-sm" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-variant="outline" data-size="icon" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-variant="outline" data-size="icon-lg" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-variant="outline" data-size="icon-xl" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
```

| Size | Height | Padding x (icon side) | Text | Icon | Gap | Radius |
| --- | --- | --- | --- | --- | --- | --- |
| `xs` | 24 | 8 (6) | Text xs / Medium | 12 | 4 | 8 |
| `sm` | 28 | 10 (6) | Text xs / Medium | 14 | 4 | 8 |
| `default` | 32 | 10 (8) | Text sm / Medium | 16 | 6 | 10 |
| `lg` | 36 | 10 (8) | Text sm / Medium | 16 | 6 | 10 |
| `xl` | 40 | 14 (12) | Text sm / Medium | 16 | 8 | 10 |
| `icon-xs` · `icon-sm` · `icon` · `icon-lg` · `icon-xl` | 24 · 28 · 32 · 36 · 40 | square | — | 12 · 16 · 16 · 16 · 16 | — | 8 · 8 · 10 · 10 · 10 |

### Choosing a size

- `default`: almost everything: forms, card toolbars, filters, dialogs. Inputs and dropdowns are 32 too, so they line up.
- `lg`: the page header's main action and form submits that should stand out a little.
- `xl` (40, our addition to the shadcn scale): roomier actions: a form's submit row, empty states, landing pages and anywhere 32 feels too tight.
- `sm`: tables, dense lists and code or toolbar headers.
- `xs`: actions inside a table row, a chip or a tight toolbar.
- Touch: every size is below the 44 px touch target. On touch screens give a button at least 44 px of tappable space (spacing around it, or a larger `::after` hit area).

## Icon

```html
<button class="sb-btn" type="button" data-variant="outline">False</button>
<button class="sb-btn" type="button" data-variant="outline">
  <svg aria-hidden="true"><!-- plus --></svg>
  Leading
</button>
<button class="sb-btn" type="button" data-variant="outline">
  Trailing
  <svg aria-hidden="true"><!-- arrow-right --></svg>
</button>
<button class="sb-btn" type="button" data-variant="outline">
  <span class="sb-btn-dot" aria-hidden="true"></span>
  Dot
</button>
<button class="sb-btn" type="button" data-variant="outline" data-size="icon" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
```

- **Leading** and **Trailing:** a 16 px icon before or after the label; the padding on that side drops by 2 (4 at `xs` and `sm`).
- **Dot:** an 8 px `success-500` status dot before the label.
- **Only:** an `icon` size, width = height. Always give it an `aria-label` and a tooltip with the same text.
- Icons are Feather-style outlines coloured with `currentColor`, so they follow the text in every state.

### Menu trigger

A button that opens a menu carries a trailing chevron-down. Set `aria-haspopup` and `aria-expanded` and give the chevron `class="sb-btn-chevron"`; it turns 180° in 200 ms when the menu is open. While open, Outline and Ghost keep their hover fill. Menu triggers do not move when pressed.

```html
<button class="sb-btn" type="button" data-variant="outline" aria-haspopup="menu" aria-expanded="false">
  Ekspor
  <svg class="sb-btn-chevron" aria-hidden="true"><!-- chevron-down --></svg>
</button>
```

## States

Hover changes the fill, Focused adds a ring for keyboard users, Disabled is the default look at 50 % opacity. Pressing moves the button down 1 px.

- Colour changes take 150 ms with `--ease`.
- Focused shows only on `:focus-visible`: the border takes the ring colour (`brand-300`) and a 3 px `focus-ring` goes around it. Link has no box, so it uses a 2 px outline.
- Invalid (`aria-invalid="true"`): `error-300` border and a 3 px `error-600` ring at 20 %, the same as an invalid field.
- Disabled: 50 % opacity, no shadow and no pointer events, so there is no hover or press either.

### Loading

After a click that waits on the server (Simpan, Kirim ke Advisor), the button stays as it is and shows a spinner in its text colour before the label, which turns into the -ing form ("Mengirim…"). `aria-busy="true"` ignores further clicks, so the action is never sent twice. Keep the button's width so the row does not jump. The spinner comes from Loading (`loading.css`).

```html
<button class="sb-btn" type="button" aria-busy="true"><span class="sb-spinner" aria-hidden="true"></span>Mengirim…</button>
<button class="sb-btn" type="button" data-variant="outline" aria-busy="true"><span class="sb-spinner" aria-hidden="true"></span>Menyimpan…</button>
<button class="sb-btn" type="button" data-variant="secondary" aria-busy="true"><span class="sb-spinner" aria-hidden="true"></span>Memuat…</button>
```

## Button row

Least important on the left, Default on the right, gap 8. Here: Batal (Ghost), Simpan Draf (Secondary), Ajukan (Outline), Kirim (Default).

```html
<div style="display: flex; justify-content: flex-end; gap: 8px; width: 100%;">
  <button class="sb-btn" type="button" data-variant="ghost">Batal</button>
  <button class="sb-btn" type="button" data-variant="secondary">Simpan Draf</button>
  <button class="sb-btn" type="button" data-variant="outline">Ajukan</button>
  <button class="sb-btn" type="button">Kirim</button>
</div>
```

## Do and don't

**Do:** One Default per view. The other action steps down.

```html
<button class="sb-btn" type="button" data-variant="outline">Batal</button>
<button class="sb-btn" type="button">Kirim</button>
```

**Don't:** Three Default buttons. Users must read every label to find the next step.

```html
<button class="sb-btn" type="button">Batal</button>
<button class="sb-btn" type="button">Simpan Draf</button>
<button class="sb-btn" type="button">Kirim</button>
```

**Do:** An action is a rectangle with a fill or a border.

```html
<button class="sb-btn" type="button" data-variant="outline">Lihat Detail</button>
```

**Don't:** Bare text with an arrow. Users have to search for the action.

```html
<span class="bare">Lihat detail →</span>
```

**Do:** Tolak is one of several choices, so it is Outline.

```html
<button class="sb-btn" type="button" data-variant="outline">Tolak</button>
<button class="sb-btn" type="button">Setujui</button>
```

**Don't:** Two loud buttons compete. Destructive is for a view whose main action deletes or rejects.

```html
<button class="sb-btn" type="button" data-variant="destructive">Tolak</button>
<button class="sb-btn" type="button">Setujui</button>
```

**Do:** A dialog whose purpose is deleting: Destructive is its main action.

```html
<button class="sb-btn" type="button" data-variant="outline">Batal</button>
<button class="sb-btn" type="button" data-variant="destructive">Hapus Klaim</button>
```

**Don't:** Vague labels. Name the result with a verb: Hapus Klaim, not Ya.

```html
<button class="sb-btn" type="button" data-variant="outline">OK</button>
<button class="sb-btn" type="button">Ya</button>
```

## Accessibility

- Use `<button type="button">` for actions and `<a class="sb-btn" href="…">` for navigation. Both take the same attributes.
- Icon-only buttons need an `aria-label` and a tooltip with the same text.
- Never remove the focus ring. Buttons show it on `:focus-visible`; Link shows a 2 px outline.
- Disable with the `disabled` attribute. Use `aria-disabled="true"` instead when the button must stay focusable, for example to show a tooltip that explains why. The CSS styles both.
- Menu triggers set `aria-haspopup="menu"` and `aria-expanded`.
- Sizes are below 44 px: on touch screens add tappable space around buttons.
- With `prefers-reduced-motion: reduce`, transitions and the 1 px press switch off.

### Contrast

Text against its fill, measured with the WCAG 2.1 formula. AA needs 4.5:1 for button text. Disabled states are exempt.

> **Warning:** Default uses `brand-500` by design decision (2026-10-26): the lighter blue suits the flat style. White text on it is 3.62:1, below AA for 12 to 14 px labels. `brand-600` (5.06:1) is the accessible alternative; switch `--btn-bg` if a product must meet AA.

| Variant | Text on fill | Ratio | AA |
| --- | --- | --- | --- |
| Default | `white` on `brand-500` | 3.62:1 | **Fails** (passes for text of 18.66 px bold or 24 px) |
| Default, hover | `white` on `brand-600` | 5.06:1 | Passes |
| Outline, Ghost | `gray-900` on `white` | 17.75:1 | Passes |
| Secondary | `gray-900` on `gray-100` | 16.11:1 | Passes |
| Destructive | `error-700` on `error-600` at 10 % | 5.65:1 | Passes |
| Link | `brand-700` on `white` | 6.61:1 | Passes |

## Code

Load `tokens.css` (on the Overview page), then `button.css`. Every colour, size and shadow is a token, so changing a token changes every button. The attribute names match shadcn/ui: `data-variant` and `data-size`.

`button.css`

```css
/* Button, Codemasters Design System
   Needs tokens.css; loading.css for the spinner of the loading state.

   <button class="sb-btn" type="button">Kirim</button>
   <button class="sb-btn" type="button" data-variant="outline" data-size="sm">Batal</button>
   <button class="sb-btn" type="button" data-variant="ghost" data-size="icon" aria-label="Hapus"><svg…/></button>

   data-variant   default (omit) | outline | secondary | ghost | destructive | link
   data-size      xs | sm | default (omit) | lg | xl | icon-xs | icon-sm | icon | icon-lg | icon-xl   (icon sizes are square; add aria-label)
   aria-invalid="true"   error border and ring, for a button that picks a value in a form
   aria-busy="true"      Loading: a <span class="sb-spinner" aria-hidden="true"> before the label, the label in -ing form ("Mengirim…")
   data-state            hover | focus. Forces a state in static mockups and docs. Never ship it in live UI. */

.sb-btn {
  --btn-h: 32px; --btn-px: 10px; --btn-px-icon: 8px; --btn-gap: 6px; --btn-icon: 16px; --btn-type: var(--text-sm); --btn-r: var(--radius-control);
  --btn-bg: var(--brand-500); --btn-border: transparent; --btn-fg: var(--white); /* brand-500 by choice: white text 3.62:1, below AA (see Contrast) */
  --btn-bg-hover: var(--brand-600); --btn-fg-hover: var(--white);
  --btn-shadow: var(--shadow-xs); --btn-ring: var(--focus-ring); --btn-ring-border: var(--border-brand);
  box-sizing: border-box; position: relative;
  display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; gap: var(--btn-gap);
  height: var(--btn-h); padding: 0 var(--btn-px);
  font: 500 var(--btn-type) var(--font); white-space: nowrap; text-decoration: none; user-select: none;
  color: var(--btn-fg); background: var(--btn-bg) padding-box;
  border: 1px solid var(--btn-border); border-radius: var(--btn-r);
  box-shadow: var(--btn-shadow);
  cursor: pointer;
  transition-property: color, background-color, border-color, box-shadow, translate;
  transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-btn > svg { width: var(--btn-icon); height: var(--btn-icon); flex: none; pointer-events: none; }
.sb-btn-dot { width: 8px; height: 8px; flex: none; border-radius: var(--radius-full); background: var(--success-500); }
/* A leading or trailing icon pulls that side's padding in a little, so the icon looks centred in the space. */
.sb-btn:has(> :is(svg, .sb-spinner, .sb-btn-dot):first-child:not(:only-child)) { padding-inline-start: var(--btn-px-icon); }
.sb-btn:has(> svg:last-child:not(:only-child)) { padding-inline-end: var(--btn-px-icon); }

/* Sizes. Height includes the 1 px border. */
.sb-btn[data-size="xs"] { --btn-h: 24px; --btn-px: 8px; --btn-px-icon: 6px; --btn-gap: 4px; --btn-icon: 12px; --btn-type: var(--text-xs); --btn-r: var(--radius-md); }
.sb-btn[data-size="sm"] { --btn-h: 28px; --btn-px: 10px; --btn-px-icon: 6px; --btn-gap: 4px; --btn-icon: 14px; --btn-type: var(--text-xs); --btn-r: var(--radius-md); }
.sb-btn[data-size="lg"] { --btn-h: 36px; }
.sb-btn[data-size="xl"] { --btn-h: 40px; --btn-px: 14px; --btn-px-icon: 12px; --btn-gap: 8px; } /* not in shadcn: a roomier size for page and form actions */
.sb-btn[data-size^="icon"] { width: var(--btn-h); padding: 0; }
.sb-btn[data-size="icon-xs"] { --btn-h: 24px; --btn-icon: 12px; --btn-r: var(--radius-md); }
.sb-btn[data-size="icon-sm"] { --btn-h: 28px; --btn-r: var(--radius-md); }
.sb-btn[data-size="icon-lg"] { --btn-h: 36px; }
.sb-btn[data-size="icon-xl"] { --btn-h: 40px; }

/* Variants. Default (brand fill) is the base above. */
.sb-btn[data-variant="outline"] {
  --btn-bg: var(--bg-primary); --btn-border: var(--border-control); --btn-fg: var(--text-primary);
  --btn-bg-hover: var(--bg-secondary); --btn-fg-hover: var(--text-primary);
}
.sb-btn[data-variant="secondary"] {
  --btn-bg: var(--bg-tertiary); --btn-fg: var(--text-primary); --btn-shadow: 0 0 #0000;
  --btn-bg-hover: color-mix(in srgb, var(--bg-tertiary), var(--text-primary) 5%); --btn-fg-hover: var(--text-primary);
}
.sb-btn[data-variant="ghost"] {
  --btn-bg: transparent; --btn-fg: var(--text-primary); --btn-shadow: 0 0 #0000;
  --btn-bg-hover: var(--bg-secondary); --btn-fg-hover: var(--text-primary);
}
.sb-btn[data-variant="destructive"] {
  --btn-bg: color-mix(in srgb, var(--error-600) 10%, transparent); --btn-fg: var(--text-error); --btn-shadow: 0 0 #0000;
  --btn-bg-hover: color-mix(in srgb, var(--error-600) 20%, transparent); --btn-fg-hover: var(--text-error);
  --btn-ring: color-mix(in srgb, var(--error-600) 20%, transparent); --btn-ring-border: color-mix(in srgb, var(--error-600) 40%, transparent);
}
:root[data-theme="dark"] .sb-btn[data-variant="destructive"] {
  --btn-bg: color-mix(in srgb, var(--error-600) 20%, transparent); --btn-bg-hover: color-mix(in srgb, var(--error-600) 30%, transparent);
  --btn-ring: color-mix(in srgb, var(--error-600) 40%, transparent);
}
/* Link: text in running copy, underlined on hover. No box, so it sits on the text baseline. */
.sb-btn[data-variant="link"] {
  --btn-h: auto; --btn-px: 0; --btn-px-icon: 0; --btn-shadow: 0 0 #0000;
  --btn-bg: transparent; --btn-bg-hover: transparent; --btn-fg: var(--text-brand); --btn-fg-hover: var(--text-brand);
  border-width: 0; text-underline-offset: 4px;
}
.sb-btn[data-variant="link"]:hover:not(:disabled), .sb-btn[data-variant="link"][data-state="hover"] { text-decoration: underline; }

/* States */
.sb-btn:hover:not(:disabled, [aria-disabled="true"]), .sb-btn[data-state="hover"] { color: var(--btn-fg-hover); background-color: var(--btn-bg-hover); }
.sb-btn[aria-expanded="true"]:is([data-variant="outline"], [data-variant="ghost"]) { background-color: var(--bg-secondary); }
/* Focused: the border takes the ring colour and a 3 px ring goes around, in every variant. */
.sb-btn:focus-visible, .sb-btn[data-state="focus"] { outline: none; border-color: var(--btn-ring-border); box-shadow: var(--btn-shadow), 0 0 0 3px var(--btn-ring); }
.sb-btn[data-variant="link"]:focus-visible, .sb-btn[data-variant="link"][data-state="focus"] { box-shadow: none; outline: 2px solid var(--border-brand); outline-offset: 2px; border-radius: var(--radius-sm); }
/* Invalid: a button that picks a value in a form (a date, a file) and holds a wrong one. */
.sb-btn[aria-invalid="true"] { border-color: var(--border-error); box-shadow: 0 0 0 3px color-mix(in srgb, var(--error-600) 20%, transparent); }
:root[data-theme="dark"] .sb-btn[aria-invalid="true"] { box-shadow: 0 0 0 3px color-mix(in srgb, var(--error-600) 40%, transparent); }
/* Disabled: the default look at half opacity, no shadow, no pointer events. */
.sb-btn:disabled, .sb-btn[aria-disabled="true"] { opacity: .5; box-shadow: none; pointer-events: none; }
/* Pressed: down 1 px. Not on menu triggers, which stay put while their menu opens. */
.sb-btn:active:not(:disabled, [aria-disabled="true"], [aria-busy="true"], [aria-haspopup]) { translate: 0 1px; }
/* Loading: the look stays (not the faded Disabled), a spinner in the text colour replaces the leading icon, clicks are ignored. */
.sb-btn[aria-busy="true"] { cursor: progress; pointer-events: none; }
.sb-btn > .sb-spinner { --sp-size: var(--btn-icon); color: inherit; }

/* A button that opens a menu: its chevron (class sb-btn-chevron) turns when open. Other icons, such as ⋮, stay put. */
.sb-btn[aria-expanded] > .sb-btn-chevron { transition: rotate 200ms var(--ease); }
.sb-btn[aria-expanded="true"] > .sb-btn-chevron { rotate: 180deg; }

@media (prefers-reduced-motion: reduce) {
  .sb-btn, .sb-btn > svg { transition: none; }
  .sb-btn:active:not(:disabled) { translate: none; }
}
```

## Tokens used

The tokens `button.css` reads, with their values. Generated from the stylesheet.

```css
:root {
  --white: #ffffff;
  --brand-500: #5183eb;
  --brand-600: #3966e0;
  --error-600: #d92d20;
  --success-500: #12b76a;
  --bg-primary: var(--white);
  --bg-secondary: var(--gray-50);
  --bg-tertiary: var(--gray-100);
  --text-primary: var(--gray-900);
  --text-brand: var(--brand-700);
  --text-error: var(--error-700);
  --border-control: var(--gray-200);
  --border-brand: var(--brand-300);
  --border-error: var(--error-300);
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-control: 10px;
  --radius-full: 9999px;
  --shadow-xs: 0 1px 2px rgba(16,24,40,.05);
  --focus-ring: color-mix(in srgb, var(--brand-600) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Timeless Sans', sans-serif;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
}
```

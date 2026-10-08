---
name: Button
slug: button
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-06
requires: tokens.css
---

# Button

Runs an action on the current page: save, submit, open a dialog, start an analysis. Seven hierarchies tell the user which action matters most.

## Usage

Use a button for an action on the current page. Link hierarchies exist for links inside running text, not for actions.

- **A button looks like a button.** Always a rectangle with radius 8 and a fill or a border. Never turn an action into bare text, an underlined word or text with an arrow; users then have to search for it.
- **One primary action per view.** Primary is the next step of the flow (Mulai Analisis, Kirim ke Advisor, Keputusan). Every other action steps down: Primary, then Secondary color or Secondary gray, then Tertiary, then Link.
- **Hierarchy, not sameness.** Never give all buttons in a row the same style. Without hierarchy, users must read every label.
- **Order in a row.** Least important on the left, Primary on the right, gap 12. Several secondary actions are fine; keep their order consistent.
- **Destructive is not automatically red.** Most destructive actions (Hapus, Tolak in a dialog with other choices) use Secondary gray. Use Destructive only when the destructive action is the primary action of the view.
- **Labels are verbs in Title Case:** Mulai Analisis, Kirim ke Advisor, Ajukan Persetujuan, Sepakati Klaim.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | Radius 8, 1 px border, `shadow-xs` on Primary and Secondary. Height and horizontal padding come from the size; heights include the border (`box-sizing: border-box`). |
| 2 | Leading icon | Optional. 20 px (16 at `xs`, 24 at `2xl`), gap 8 (4 at `xs`, 12 at `2xl`), `currentColor`. |
| 3 | Label | Semibold. Text sm at `xs`, `sm` and `md`, Text md at `lg` and `xl`, Text lg at `2xl`. A verb in Title Case. |
| 4 | Trailing icon | Optional. Same size and gap as the leading icon. A menu trigger uses chevron-down, which turns 180° when the menu is open. |

## Properties

Each property maps to one attribute, so a slide, a spec and the code describe a button with the same words.

| Property | Values | Code |
| --- | --- | --- |
| Hierarchy | Primary, Secondary gray, Secondary color, Tertiary color, Tertiary gray, Link color, Link gray | `data-hierarchy="primary"` to `"link-gray"` |
| Size | `sm`, `md`, `lg`, `xl`, `2xl` (`xs` is code-only for now) | `data-size="md"` |
| Icon | False, Leading, Trailing, Dot, Only | `<svg>` before or after the label, `<span class="sb-btn-dot">`, or `data-icon="only"` with `aria-label` |
| Destructive | False, True | `data-destructive` |
| State | Default, Hover, Focused, Disabled | `:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state="hover"` or `"focus"` |

## Hierarchy

Seven levels, from the one next step (Primary) to links inside text. Primary, Secondary gray and Secondary color carry `shadow-xs`; Tertiary and Link have no box until hover.

Primary and Secondary gray are **raised**: a sheen over the fill (lighter top, darker bottom) and, on Primary, a 1 px light line inside the top edge and a border one step darker than the fill. Secondary color, Tertiary, Link and every Disabled state stay flat. Tokens: `--raised-sheen`, `--raised-sheen-light`, `--raised-highlight` (Shadows & Blur).

```html
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Primary</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">Secondary gray</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-color" data-size="md">Secondary color</button>
<button class="sb-btn" type="button" data-hierarchy="tertiary-color" data-size="md">Tertiary color</button>
<button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="md">Tertiary gray</button>
<button class="sb-btn" type="button" data-hierarchy="link-color" data-size="md">Link color</button>
<button class="sb-btn" type="button" data-hierarchy="link-gray" data-size="md">Link gray</button>
```

### Colours per state

| Hierarchy | Default (fill / border / text) | Hover | Disabled | Focused |
| --- | --- | --- | --- | --- |
| Primary | `brand-600` + `raised-sheen` / `brand-700` / `white` | `brand-700` / `brand-800` / `white` | `brand-200` / `brand-200` / `white` | 4 px `focus-ring` ring |
| Secondary gray | `white` + `raised-sheen-light` / `gray-300` / `gray-700` | `gray-50` / `gray-300` / `gray-800` | `white` / `gray-200` / `gray-300` | 4 px `focus-ring` ring |
| Secondary color | `brand-50` / `brand-50` / `brand-700` | `brand-100` / `brand-100` / `brand-700` | `brand-50` / `brand-50` / `brand-300` | 4 px `focus-ring` ring |
| Tertiary color | none / none / `brand-700` | `brand-50` fill | text `gray-300` | 4 px `focus-ring` ring |
| Tertiary gray | none / none / `gray-500` | `gray-50` fill, text `gray-600` | text `gray-300` | 4 px `focus-ring` ring |
| Link color | text `brand-600`, no padding | text `brand-700` | text `gray-300` | 2 px `brand-600` outline |
| Link gray | text `gray-500`, no padding | text `gray-600` | text `gray-300` | 2 px `brand-600` outline |

## Sizes

```html
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="xs">xs</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">sm</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">md</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="lg">lg</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="xl">xl</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="2xl">2xl</button>
```

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="xs" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="lg" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="xl" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="2xl" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
```

| Size | Height | Padding (y x) | Icon-only | Text style | Icon | Gap |
| --- | --- | --- | --- | --- | --- | --- |
| `xs` | 32 | `6 12` | 32 × 32, padding 8 | Text sm / Semibold | 16 | 4 |
| `sm` | 36 | `8 14` | 36 × 36, padding 8 | Text sm / Semibold | 20 | 8 |
| `md` | 40 | `10 16` | 40 × 40, padding 10 | Text sm / Semibold | 20 | 8 |
| `lg` | 44 | `10 18` | 44 × 44, padding 12 | Text md / Semibold | 20 | 8 |
| `xl` | 48 | `12 20` | 48 × 48, padding 14 | Text md / Semibold | 20 | 8 |
| `2xl` | 60 | `16 28` | 60 × 60, padding 18 | Text lg / Semibold | 24 | 12 |

> **Note:** `xs` is for dense desktop UI only. Padding `6 12` uses the control padding exception (Grids & Spacing): it lands the height on 32.

### Choosing a size

- `lg`: page header actions and form submits. The app's main `.btn` is this size.
- `md`: card toolbars, filters and compact forms.
- `sm`: tables, dense lists and inline pairs such as approve and reject.
- `xs`: actions that sit inside a table row, a card header or a toolbar next to other dense controls ("Lihat", "Unduh", a row's more menu). Desktop only: at 32 px it is below the 44 px touch target.
- `xl` and `2xl`: website heroes, landing pages and slides. Not used in the app.
- On touch screens use `lg` or larger, so the target is at least 44 px.

## Icon

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">False</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">
  <svg aria-hidden="true"><!-- plus --></svg>
  Leading
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">
  Trailing
  <svg aria-hidden="true"><!-- arrow-right --></svg>
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">
  <span class="sb-btn-dot" aria-hidden="true"></span>
  Dot
</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" data-icon="only" aria-label="Tambah">
  <svg aria-hidden="true"><!-- plus --></svg>
</button>
```

- **Leading** and **Trailing:** a 20 px icon before or after the label (24 px at `2xl`), same gap as the size.
- **Dot:** a 10 px `success-500` status dot before the label, same gap as an icon. Disabled turns it to the text colour.
- **Only:** a square button, width = height. Always give it an `aria-label` and a tooltip with the same text.
- Icons are Feather-style outlines with a 1.67 px stroke at 20 px, coloured with `currentColor` so they follow the text in every state.

### Menu trigger

A button that opens a menu carries a trailing chevron-down. Set `aria-expanded`; the chevron turns 180° in 200 ms when it is `true`.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" aria-haspopup="menu" aria-expanded="false">
  Ekspor
  <svg aria-hidden="true"><!-- chevron-down --></svg>
</button>
```

## States

Hover moves one step darker, Focused adds a ring for keyboard users, Disabled fades to the light steps. Pressing scales the button to 96 %.

- Colour changes take 150 ms with `--ease`. Press is `scale(.96)`.
- Focused shows only on `:focus-visible`, so a mouse click leaves no ring.
- The ring is `0 0 0 4px var(--focus-ring)` (`brand-600` at 20 %) in every hierarchy, on top of `shadow-xs` where the variant has one. Link hierarchies have no box, so they use the global 2 px `brand-600` outline with 2 px offset.
- Disabled has no hover and no press, and shows `cursor: not-allowed`.

## Destructive

Destructive=True swaps Brand and Gray for Error. Use it only when the destructive action is the primary action of the view, so the user sees it is high-consequence.

```html
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md" data-destructive>Primary</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" data-destructive>Secondary gray</button>
<button class="sb-btn" type="button" data-hierarchy="secondary-color" data-size="md" data-destructive>Secondary color</button>
<button class="sb-btn" type="button" data-hierarchy="tertiary-color" data-size="md" data-destructive>Tertiary color</button>
<button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="md" data-destructive>Tertiary gray</button>
<button class="sb-btn" type="button" data-hierarchy="link-color" data-size="md" data-destructive>Link color</button>
<button class="sb-btn" type="button" data-hierarchy="link-gray" data-size="md" data-destructive>Link gray</button>
```

| Hierarchy | Default | Hover | Disabled | Focused |
| --- | --- | --- | --- | --- |
| Primary | `error-600` + `raised-sheen` / `error-700` / `white` | `error-700`, border `error-800` | `error-200` | 4 px `error-100` ring |
| Secondary gray | `white` / `error-300` / `error-700` | `error-50` fill, text `error-800` | border `error-200`, text `error-300` | 4 px `error-100` ring |
| Secondary color | `error-50` / `error-50` / `error-700` | `error-100` | `error-50`, text `error-300` | 4 px `error-100` ring |
| Tertiary color, Tertiary gray | text `error-700` | `error-50` fill (gray: text `error-800`) | text `error-300` | 4 px `error-100` ring |
| Link color, Link gray | text `error-700` | text `error-800` | text `error-300` | 2 px `brand-600` outline |

## Button row

Least important on the left, Primary on the right, gap 12. Here: Batal (Tertiary gray), Simpan Draf (Secondary color), Ajukan (Secondary gray), Kirim (Primary).

```html
<div style="display: flex; justify-content: flex-end; gap: 12px; width: 100%;">
  <button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="md">Batal</button>
  <button class="sb-btn" type="button" data-hierarchy="secondary-color" data-size="md">Simpan Draf</button>
  <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">Ajukan</button>
  <button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Kirim</button>
</div>
```

## Do and don't

**Do:** One Primary per view. The other action steps down the hierarchy.

```html
<button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="md">Batal</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Kirim</button>
```

**Don't:** Three Primary buttons. Users must read every label to find the next step.

```html
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Batal</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Simpan Draf</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Kirim</button>
```

**Do:** An action is a rectangle with a fill or a border.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">Lihat Detail</button>
```

**Don't:** Bare text with an arrow. Users have to search for the action.

```html
<span class="bare">Lihat detail →</span>
```

**Do:** Tolak is one of several choices, so it uses Secondary gray.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">Tolak</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Setujui</button>
```

**Don't:** Two loud buttons compete. Red is for a view whose main action is destructive.

```html
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md" data-destructive>Tolak</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Setujui</button>
```

**Do:** A dialog whose purpose is deleting: the delete is the primary action, so it is Destructive.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">Batal</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md" data-destructive>Hapus Klaim</button>
```

**Don't:** Vague labels. Name the result with a verb: Hapus Klaim, not Ya.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md">OK</button>
<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Ya</button>
```

## Accessibility

- Use `<button type="button">` for actions and `<a class="sb-btn" href="…">` for navigation. Both take the same attributes.
- Icon-only buttons need an `aria-label` and a title-only tooltip with the same text.
- Never remove the focus ring. Buttons show it on `:focus-visible`; Link hierarchies show the 2 px outline.
- Disable with the `disabled` attribute. Use `aria-disabled="true"` instead when the button must stay focusable, for example to show a tooltip that explains why. The CSS styles both.
- Menu triggers set `aria-haspopup="menu"` and `aria-expanded`.
- With `prefers-reduced-motion: reduce`, transitions and the press scale switch off.

### Contrast

Text against its fill, measured with the WCAG 2.1 formula. AA needs 4.5:1 for button text. Disabled states are exempt. On raised buttons the text sits in the middle, where the sheen is transparent, so the ratio is the plain fill.

| Variant | Text on fill | Ratio | AA |
| --- | --- | --- | --- |
| Primary | `white` on `brand-600` | 5.06:1 | Passes |
| Primary, hover | `white` on `brand-700` | 6.61:1 | Passes |
| Secondary gray | `gray-700` on `white` | 10.46:1 | Passes |
| Secondary color | `brand-700` on `brand-50` | 6.09:1 | Passes |
| Tertiary color | `brand-700` on `white` | 6.61:1 | Passes |
| Tertiary gray, Link gray | `gray-500` on `white` | 4.97:1 | Passes |
| Link color | `brand-600` on `white` | 5.06:1 | Passes |
| Destructive Primary | `white` on `error-600` | 4.83:1 | Passes |
| Destructive Secondary gray, Tertiary, Link | `error-700` on `white` | 6.57:1 | Passes |
| Destructive Secondary color | `error-700` on `error-50` | 6.05:1 | Passes |

## Code

Load `tokens.css` (on the Overview page), then `button.css`. Every colour, size and shadow is a token, so changing a token changes every button.

`button.css`

```css
/* Button, Codemasters Design System
   Needs tokens.css.

   <button class="sb-btn" type="button" data-hierarchy="primary" data-size="md">Kirim</button>

   data-hierarchy    primary | secondary-gray | secondary-color | tertiary-color | tertiary-gray | link-color | link-gray
   data-size         xs | sm | md | lg | xl | 2xl   (xs: dense desktop UI only)
   data-destructive  present = Destructive=True
   data-icon="only"  square icon-only button; add aria-label
   data-state        hover | focus. Forces a state in static mockups and docs. Never ship it in live UI:
                     live states come from :hover, :focus-visible and the disabled attribute. */

.sb-btn {
  --btn-h: 40px; --btn-px: 16px; --btn-gap: 8px; --btn-icon: 20px; --btn-type: var(--text-sm);
  --btn-bg: var(--brand-600); --btn-border: var(--brand-700); --btn-fg: var(--white);
  --btn-bg-hover: var(--brand-700); --btn-border-hover: var(--brand-800); --btn-fg-hover: var(--white);
  --btn-bg-disabled: var(--brand-200); --btn-border-disabled: var(--brand-200); --btn-fg-disabled: var(--white);
  --btn-ring: var(--focus-ring); --btn-shadow: var(--raised-highlight), var(--shadow-xs);
  --btn-sheen: var(--raised-sheen); /* raised: lighter top, darker bottom, over any fill */
  box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; gap: var(--btn-gap);
  height: var(--btn-h); padding: 0 var(--btn-px);
  font: 600 var(--btn-type) var(--font); white-space: nowrap; text-decoration: none;
  color: var(--btn-fg); background: var(--btn-sheen) var(--btn-bg);
  border: 1px solid var(--btn-border); border-radius: var(--radius-md);
  box-shadow: var(--btn-shadow);
  cursor: pointer;
  transition-property: color, background-color, border-color, box-shadow, scale;
  transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-btn > svg { width: var(--btn-icon); height: var(--btn-icon); flex: none; }
.sb-btn-dot { width: 10px; height: 10px; flex: none; border-radius: var(--radius-full); background: var(--success-500); }

/* Sizes. Height includes the 1px border. */
.sb-btn[data-size="xs"]  { --btn-h: 32px; --btn-px: 12px; --btn-icon: 16px; --btn-gap: 4px; } /* code-first size for dense rows; below 44, so never on touch */
.sb-btn[data-size="sm"]  { --btn-h: 36px; --btn-px: 14px; }
.sb-btn[data-size="lg"]  { --btn-h: 44px; --btn-px: 18px; --btn-type: var(--text-md); }
.sb-btn[data-size="xl"]  { --btn-h: 48px; --btn-px: 20px; --btn-type: var(--text-md); }
.sb-btn[data-size="2xl"] { --btn-h: 60px; --btn-px: 28px; --btn-type: var(--text-lg); --btn-icon: 24px; --btn-gap: 12px; }
.sb-btn[data-icon="only"] { width: var(--btn-h); padding: 0; }

/* Hierarchy. Primary is the base above. */
.sb-btn[data-hierarchy="secondary-gray"] {
  --btn-bg: var(--white); --btn-border: var(--gray-300); --btn-fg: var(--gray-700); --btn-sheen: var(--raised-sheen-light); --btn-shadow: var(--shadow-xs);
  --btn-bg-hover: var(--gray-50); --btn-border-hover: var(--gray-300); --btn-fg-hover: var(--gray-800);
  --btn-bg-disabled: var(--white); --btn-border-disabled: var(--gray-200); --btn-fg-disabled: var(--gray-300);
}
.sb-btn[data-hierarchy="secondary-color"] {
  --btn-bg: var(--brand-50); --btn-border: var(--brand-50); --btn-fg: var(--brand-700); --btn-sheen: none; --btn-shadow: var(--shadow-xs);
  --btn-bg-hover: var(--brand-100); --btn-border-hover: var(--brand-100); --btn-fg-hover: var(--brand-700);
  --btn-bg-disabled: var(--brand-50); --btn-border-disabled: var(--brand-50); --btn-fg-disabled: var(--brand-300);
}
.sb-btn[data-hierarchy^="tertiary"] {
  --btn-bg: transparent; --btn-border: transparent;
  --btn-bg-disabled: transparent; --btn-border-disabled: transparent; --btn-fg-disabled: var(--gray-300);
  --btn-shadow: 0 0 #0000; --btn-sheen: none;
}
.sb-btn[data-hierarchy="tertiary-color"] {
  --btn-fg: var(--brand-700); --btn-bg-hover: var(--brand-50); --btn-border-hover: var(--brand-50); --btn-fg-hover: var(--brand-700);
}
.sb-btn[data-hierarchy="tertiary-gray"] {
  --btn-fg: var(--gray-500); --btn-bg-hover: var(--gray-50); --btn-border-hover: var(--gray-50); --btn-fg-hover: var(--gray-600);
}
.sb-btn[data-hierarchy^="link"] {
  --btn-h: auto; --btn-px: 0; --btn-shadow: 0 0 #0000; --btn-sheen: none;
  --btn-bg: transparent; --btn-border: transparent; --btn-bg-hover: transparent; --btn-border-hover: transparent;
  --btn-bg-disabled: transparent; --btn-border-disabled: transparent; --btn-fg-disabled: var(--gray-300);
  border-width: 0;
}
.sb-btn[data-hierarchy="link-color"] { --btn-fg: var(--brand-600); --btn-fg-hover: var(--brand-700); }
.sb-btn[data-hierarchy="link-gray"]  { --btn-fg: var(--gray-500); --btn-fg-hover: var(--gray-600); }

/* Destructive=True swaps Brand and Gray for Error. */
.sb-btn[data-destructive] {
  --btn-bg: var(--error-600); --btn-border: var(--error-700); --btn-fg: var(--white);
  --btn-bg-hover: var(--error-700); --btn-border-hover: var(--error-800); --btn-fg-hover: var(--white);
  --btn-bg-disabled: var(--error-200); --btn-border-disabled: var(--error-200); --btn-fg-disabled: var(--white);
  --btn-ring: var(--error-100);
}
.sb-btn[data-destructive][data-hierarchy="secondary-gray"] {
  --btn-bg: var(--white); --btn-border: var(--error-300); --btn-fg: var(--error-700);
  --btn-bg-hover: var(--error-50); --btn-border-hover: var(--error-300); --btn-fg-hover: var(--error-800);
  --btn-bg-disabled: var(--white); --btn-border-disabled: var(--error-200); --btn-fg-disabled: var(--error-300);
}
.sb-btn[data-destructive][data-hierarchy="secondary-color"] {
  --btn-bg: var(--error-50); --btn-border: var(--error-50); --btn-fg: var(--error-700);
  --btn-bg-hover: var(--error-100); --btn-border-hover: var(--error-100); --btn-fg-hover: var(--error-700);
  --btn-bg-disabled: var(--error-50); --btn-border-disabled: var(--error-50); --btn-fg-disabled: var(--error-300);
}
.sb-btn[data-destructive][data-hierarchy^="tertiary"] {
  --btn-bg: transparent; --btn-border: transparent; --btn-fg: var(--error-700);
  --btn-bg-hover: var(--error-50); --btn-border-hover: var(--error-50); --btn-fg-hover: var(--error-700);
  --btn-bg-disabled: transparent; --btn-border-disabled: transparent; --btn-fg-disabled: var(--error-300);
}
.sb-btn[data-destructive][data-hierarchy="tertiary-gray"] { --btn-fg-hover: var(--error-800); }
.sb-btn[data-destructive][data-hierarchy^="link"] {
  --btn-bg: transparent; --btn-border: transparent; --btn-fg: var(--error-700);
  --btn-bg-hover: transparent; --btn-border-hover: transparent; --btn-fg-hover: var(--error-800);
  --btn-bg-disabled: transparent; --btn-border-disabled: transparent; --btn-fg-disabled: var(--error-300);
}

/* States */
.sb-btn:hover:not(:disabled, [aria-disabled="true"]), .sb-btn[data-state="hover"] {
  color: var(--btn-fg-hover); background-color: var(--btn-bg-hover); border-color: var(--btn-border-hover);
}
.sb-btn:focus-visible, .sb-btn[data-state="focus"] {
  outline: none; box-shadow: var(--btn-shadow), 0 0 0 4px var(--btn-ring);
}
.sb-btn[data-hierarchy^="link"]:focus-visible, .sb-btn[data-hierarchy^="link"][data-state="focus"] {
  box-shadow: none; outline: 2px solid var(--brand-600); outline-offset: 2px;
}
.sb-btn:disabled, .sb-btn[aria-disabled="true"] {
  color: var(--btn-fg-disabled); background: var(--btn-bg-disabled); border-color: var(--btn-border-disabled);
  box-shadow: none; cursor: not-allowed; /* disabled is flat: no sheen, highlight or shadow */
}
.sb-btn:disabled > .sb-btn-dot, .sb-btn[aria-disabled="true"] > .sb-btn-dot { background: currentColor; }
.sb-btn:active:not(:disabled, [aria-disabled="true"]) { scale: .96; }

/* A button that opens a menu: the trailing chevron turns when open. */
.sb-btn[aria-expanded] > svg:last-child { transition: rotate 200ms var(--ease); }
.sb-btn[aria-expanded="true"] > svg:last-child { rotate: 180deg; }

@media (prefers-reduced-motion: reduce) {
  .sb-btn, .sb-btn > svg { transition: none; }
  .sb-btn:active:not(:disabled) { scale: 1; }
}
```

## Tokens used

The tokens `button.css` reads, with their values. Generated from the stylesheet.

```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-200: #eaecf0;
  --gray-300: #d0d5dd;
  --gray-500: #667085;
  --gray-600: #475467;
  --gray-700: #344054;
  --gray-800: #1d2939;
  --brand-50: #f0f6fe;
  --brand-100: #dfeafb;
  --brand-200: #c5dbfa;
  --brand-300: #9fc5f6;
  --brand-600: #3966e0;
  --brand-700: #2e51cd;
  --brand-800: #2942a7;
  --error-50: #fef3f2;
  --error-100: #fee4e2;
  --error-200: #fecdca;
  --error-300: #fda29b;
  --error-600: #d92d20;
  --error-700: #b42318;
  --error-800: #912018;
  --success-500: #12b76a;
  --radius-md: 8px;
  --radius-full: 9999px;
  --shadow-xs: 0 1px 2px rgba(16,24,40,.05);
  --raised-sheen: linear-gradient(180deg, rgb(255 255 255 / .1), rgb(0 0 0 / .08));
  --raised-sheen-light: linear-gradient(180deg, rgb(255 255 255 / 0), rgb(16 24 40 / .04));
  --raised-highlight: inset 0 1px 0 rgb(255 255 255 / .28);
  --focus-ring: color-mix(in srgb, var(--brand-600) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --text-lg: 18px/28px;
  --text-md: 16px/24px;
  --text-sm: 14px/20px;
}
```

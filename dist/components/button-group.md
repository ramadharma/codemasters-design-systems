---
name: Button group
slug: button-group
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-06
requires: tokens.css
---

# Button group

A row of joined buttons for related, equal-weight choices: a view switch (Hari, Minggu, Bulan), pagination arrows or a small set of tools.

## Usage

- Use a button group for related, equal-weight choices: a view switch (Hari, Minggu, Bulan), pagination arrows, or a small set of tools.
- Never put a primary action next to secondary ones in a group. Use separate Buttons for that, so the hierarchy shows.
- All segments in one group use the same Icon type.
- When the group works as a switch, only one segment is Current at a time.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Group | 40 high (same as Button `md`), 1 px `gray-300` border, radius 8, `shadow-xs`. Clips its children, so only the outer corners are rounded. |
| 2 | Segment | `white` fill, padding `10 16` (icon-only `10 12`). Current=True is pressed in: `gray-100` fill with `pressed-inset`. |
| 3 | Divider | 1 px `gray-300` on the trailing side of each segment. The last one is hidden by the group border. |
| 4 | Icon | Optional. 20 px, gap 8, `gray-500` (Current: `gray-900`). The Dot variant puts a 10 px `success-500` dot here instead. |
| 5 | Label | Text sm / Semibold, `gray-700` (Current: `gray-900`). Icon-only segments drop it and carry an `aria-label`. |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Icon (group) | False, Leading, Only | Label only, `<svg>` before the label, or `data-icon="only"` with `aria-label` per segment |
| Icon (segment) | False, Leading, Only, Dot | Dot: `<span class="sb-btn-group-dot">` before the label |
| Current | True, False | `aria-checked="true"` (switch) or `aria-pressed="true"` (toggle) |
| State | Default, Hover, Focused, Disabled | `:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state="hover"` or `"focus"` |

## Icon

### Text

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Rentang waktu">
  <button type="button" role="radio" aria-checked="true" tabindex="0">Hari</button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">Minggu</button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">Bulan</button>
</div>
```

### Leading icon

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Tampilan">
  <button type="button" role="radio" aria-checked="true" tabindex="0">
    <svg aria-hidden="true"><!-- list --></svg>
    Daftar
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">
    <svg aria-hidden="true"><!-- grid --></svg>
    Grid
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">
    <svg aria-hidden="true"><!-- calendar --></svg>
    Kalender
  </button>
</div>
```

### Icon only

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Tampilan" data-icon="only">
  <button type="button" role="radio" aria-checked="true" tabindex="0" aria-label="Daftar">
    <svg aria-hidden="true"><!-- list --></svg>
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1" aria-label="Grid">
    <svg aria-hidden="true"><!-- grid --></svg>
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1" aria-label="Kalender">
    <svg aria-hidden="true"><!-- calendar --></svg>
  </button>
</div>
```

### Dot

For status filters. The dot stays `success-500` in every state.

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Status">
  <button type="button" role="radio" aria-checked="true" tabindex="0">
    <span class="sb-btn-group-dot" aria-hidden="true"></span>
    Aktif
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">
    <span class="sb-btn-group-dot" aria-hidden="true"></span>
    Tertunda
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">
    <span class="sb-btn-group-dot" aria-hidden="true"></span>
    Selesai
  </button>
</div>
```

## States

| State | Current=False (fill / text / icon) | Current=True |
| --- | --- | --- |
| Default | `white` raised / `gray-700` / `gray-500` | `gray-100` + `pressed-inset` / `gray-900` / `gray-900` |
| Hover | `gray-50` / `gray-800` / `gray-700` | same as Default |
| Focused | `gray-50` / `gray-700` / `gray-700` | same as Default + focus outline |
| Disabled | Default at 50 % opacity | Default at 50 % opacity |

> **Note:** Focused has the same `gray-50` fill as Hover, plus the 2 px `brand-600` focus outline on `:focus-visible`, drawn inside the segment because the group clips its children.

## Switch, toggle or actions

The same look carries three behaviours. Pick the one that matches what a click does, and set the matching ARIA; the Current style follows the ARIA state.

| Behaviour | Example | Markup |
| --- | --- | --- |
| Switch: one of several | Hari, Minggu, Bulan | `role="radiogroup"` on the group, `role="radio"` + `aria-checked` on each segment, roving `tabindex` |
| Toggle: each on or off | Tebal, Miring, Garis bawah | `role="group"`, `aria-pressed` on each segment |
| Actions: no selection | Previous and next page | `role="group"`, plain buttons, never Current |

### Switch

Tab reaches the group once, on the checked segment. ← → move and select.

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Rentang waktu">
  <button type="button" role="radio" aria-checked="true" tabindex="0">Hari</button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">Minggu</button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">Bulan</button>
</div>
```

### Toggle

```html
<div class="sb-btn-group" role="group" aria-label="Format teks" data-icon="only">
  <button type="button" aria-pressed="true" aria-label="Tebal">
    <svg aria-hidden="true"><!-- bold --></svg>
  </button>
  <button type="button" aria-pressed="false" aria-label="Miring">
    <svg aria-hidden="true"><!-- italic --></svg>
  </button>
  <button type="button" aria-pressed="false" aria-label="Garis bawah">
    <svg aria-hidden="true"><!-- underline --></svg>
  </button>
</div>
```

### Actions

```html
<div class="sb-btn-group" role="group" aria-label="Navigasi halaman" data-icon="only">
  <button type="button" aria-label="Halaman sebelumnya">
    <svg aria-hidden="true"><!-- chevron-left --></svg>
  </button>
  <button type="button" aria-label="Halaman berikutnya">
    <svg aria-hidden="true"><!-- chevron-right --></svg>
  </button>
</div>
```

## Do and don't

**Do:** Equal-weight choices of one kind.

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Rentang waktu">
  <button type="button" role="radio" aria-checked="true" tabindex="0">Hari</button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">Minggu</button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1">Bulan</button>
</div>
```

**Don't:** A primary action hidden in a group. Use separate Buttons: Batal (Tertiary gray), Kirim (Primary).

```html
<div class="sb-btn-group" role="group" aria-label="Aksi formulir">
  <button type="button">Batal</button>
  <button type="button">Simpan Draf</button>
  <button type="button">Kirim</button>
</div>
```

**Do:** One Icon type for every segment.

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Tampilan" data-icon="only">
  <button type="button" role="radio" aria-checked="true" tabindex="0" aria-label="Daftar">
    <svg aria-hidden="true"><!-- list --></svg>
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1" aria-label="Grid">
    <svg aria-hidden="true"><!-- grid --></svg>
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1" aria-label="Kalender">
    <svg aria-hidden="true"><!-- calendar --></svg>
  </button>
</div>
```

**Don't:** Icon-only segments mixed with a text segment.

```html
<div class="sb-btn-group" role="radiogroup" aria-label="Tampilan" data-icon="only">
  <button type="button" role="radio" aria-checked="true" tabindex="0" aria-label="Daftar">
    <svg aria-hidden="true"><!-- list --></svg>
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1" aria-label="Grid">
    <svg aria-hidden="true"><!-- grid --></svg>
  </button>
  <button type="button" role="radio" aria-checked="false" tabindex="-1" aria-label="Kalender">
    Kalender
  </button>
</div>
```

## Accessibility

- Never show the choice by colour alone. Set `aria-checked` (switch) or `aria-pressed` (toggle); the CSS styles Current from that attribute.
- Give the group an `aria-label` that names the choice ("Rentang waktu").
- A switch uses roving `tabindex`: the checked segment has `tabindex="0"`, the others `-1`, and ← → move the choice.
- Icon-only segments need an `aria-label` and a tooltip with the same text.
- Focus shows a 2 px `brand-600` outline inside the segment on `:focus-visible`.

| Segment | Text on fill | Ratio | AA |
| --- | --- | --- | --- |
| Default | `gray-700` on `white` | 10.46:1 | Passes |
| Hover | `gray-800` on `gray-50` | 14.07:1 | Passes |
| Current | `gray-900` on `gray-100` | 16.11:1 | Passes |
| Focused | `gray-700` on `gray-50` | 10.01:1 | Passes |
| Icon, Default | `gray-500` on `white` | 4.97:1 | Passes (3:1 needed for icons) |

## Code

Load `tokens.css`, then `button-group.css`. A switch also needs the arrow-key script below; toggles and actions need none.

`button-group.css`

```css
/* Button group, Codemasters Design System
   Needs tokens.css.

   Switch, one choice at a time (arrow keys move the choice):
   <div class="sb-btn-group" role="radiogroup" aria-label="Rentang waktu">
     <button type="button" role="radio" aria-checked="true" tabindex="0">Hari</button>
     <button type="button" role="radio" aria-checked="false" tabindex="-1">Minggu</button>
   </div>

   Toggles, each on or off: <div class="sb-btn-group" role="group"> with <button aria-pressed="true|false">.

   Current=True     aria-checked="true" (switch) or aria-pressed="true" (toggle). The ARIA state is the style hook,
                    so the choice is never shown by colour alone.
   data-icon="only" icon-only segments; each button needs aria-label
   data-state       hover | focus on a segment. Static mockups and docs only. */

.sb-btn-group {
  box-sizing: border-box;
  display: inline-flex; height: 40px;
  background: var(--white);
  border: 1px solid var(--gray-300); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  overflow: hidden; /* only the outer corners are rounded */
}
.sb-btn-group > button {
  --seg-icon: var(--gray-500);
  box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 100%; margin: 0; padding: 0 16px;
  font: 600 var(--text-sm) var(--font); white-space: nowrap;
  color: var(--gray-700); background: var(--raised-sheen-light) var(--white);
  border: 0; border-inline-end: 1px solid var(--gray-300); border-radius: 0;
  cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-btn-group > button:last-child { border-inline-end: 0; }
.sb-btn-group > button > svg { width: 20px; height: 20px; flex: none; color: var(--seg-icon); }
.sb-btn-group[data-icon="only"] > button { padding: 0 12px; }
.sb-btn-group-dot { width: 10px; height: 10px; flex: none; border-radius: var(--radius-full); background: var(--success-500); }

/* States (fill / text / icon). Order matters: Current overrides Hover and Focused. Disabled: the default look at 50 % opacity. */
.sb-btn-group > button:hover:not(:disabled), .sb-btn-group > button[data-state="hover"] {
  --seg-icon: var(--gray-700); color: var(--gray-800); background: var(--gray-50);
}
.sb-btn-group > button:focus-visible, .sb-btn-group > button[data-state="focus"] {
  --seg-icon: var(--gray-700); color: var(--gray-700); background: var(--gray-50);
  outline: 2px solid var(--brand-600); outline-offset: -2px; /* inside, because the group clips */
}
.sb-btn-group > [aria-checked="true"], .sb-btn-group > [aria-pressed="true"] {
  --seg-icon: var(--gray-900); color: var(--gray-900); background: var(--gray-100); box-shadow: var(--pressed-inset); /* pressed in, against the raised segments */
}
.sb-btn-group > button:disabled { opacity: .5; cursor: not-allowed; }

@media (prefers-reduced-motion: reduce) {
  .sb-btn-group > button { transition: none; }
}
```

### Switch keyboard script

`button-group-switch.js`

```js
// Click or ← → selects one segment in every role="radiogroup" button group.
document.addEventListener('click', e => {
  const seg = e.target.closest('.sb-btn-group[role="radiogroup"] > button');
  if (seg && !seg.disabled) select(seg);
});
document.addEventListener('keydown', e => {
  const seg = e.target.closest('.sb-btn-group[role="radiogroup"] > button');
  const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
  if (!seg || !step) return;
  e.preventDefault();
  const segs = [...seg.parentElement.children].filter(b => !b.disabled);
  const next = segs[(segs.indexOf(seg) + step + segs.length) % segs.length];
  select(next);
  next.focus();
});
function select(seg) {
  for (const b of seg.parentElement.children) {
    b.setAttribute('aria-checked', String(b === seg));
    b.tabIndex = b === seg ? 0 : -1;
  }
}
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f2f4f7;
  --gray-300: #d0d5dd;
  --gray-500: #667085;
  --gray-700: #344054;
  --gray-800: #1d2939;
  --gray-900: #101828;
  --brand-600: #3966e0;
  --success-500: #12b76a;
  --radius-md: 8px;
  --radius-full: 9999px;
  --shadow-xs: 0 1px 2px rgba(16,24,40,.05);
  --raised-sheen-light: linear-gradient(180deg, rgb(255 255 255 / 0), rgb(16 24 40 / .04));
  --pressed-inset: inset 0 1px 2px rgb(16 24 40 / .1);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Timeless Sans', sans-serif;
  --text-sm: 14px/20px;
}
```

---
name: Grids & Spacing
slug: grids-spacing
category: Foundations
status: Ready
version: 0.1.0
updated: 2026-10-07
requires: tokens.css
---

# Grids & Spacing

A 4 px soft grid: a fixed spacing scale, four containers, column grids for desktop, tablet and mobile, and the radius set.

## Spacing

A fixed set of values removes guesswork and gives every screen the same rhythm. Token number × 4 = px. Click a row to copy its token.

| Token | rem (16 px base) | px |
| --- | --- | --- |
| `--space-1` | 0.25rem | 4 |
| `--space-2` | 0.5rem | 8 |
| `--space-3` | 0.75rem | 12 |
| `--space-4` | 1rem | 16 |
| `--space-5` | 1.25rem | 20 |
| `--space-6` | 1.5rem | 24 |
| `--space-8` | 2rem | 32 |
| `--space-10` | 2.5rem | 40 |
| `--space-12` | 3rem | 48 |
| `--space-16` | 4rem | 64 |
| `--space-20` | 5rem | 80 |
| `--space-24` | 6rem | 96 |
| `--space-32` | 8rem | 128 |
| `--space-40` | 10rem | 160 |
| `--space-48` | 12rem | 192 |
| `--space-56` | 14rem | 224 |
| `--space-64` | 16rem | 256 |

### Rules

- **4 px soft grid.** Every spacing value, size and position is divisible by 4. Prefer multiples of 8; use the 4 px steps (4, 12, 20) for fine adjustments.
- **Only values from the set.** A value on the 4 px grid but not in the set is still off: use 128, not 124.
- **Line things up** on both axes, and give similar components the same values so the vertical rhythm repeats.
- **Control padding exception.** Buttons, inputs and tabs may use inner padding off the set (`10 18`, `10 14`, `9 16`) when that lands the outer height on the grid (40 / 44 / 52). Gaps between elements never do.

### Use in the app

| Where | Value |
| --- | --- |
| Page padding | 32 |
| Gap between cards | 24 |
| Card padding | 24 (compact cards 16) |
| Between blocks inside a card | 16 |
| Between rows of a list | 12 |
| Between inline items | 8 |

> **Warning:** The app also uses `2` and `6` (for example the 6 px gap between a field label and its control). They are off the scale; use 4 or 8 in new work.

## Grid layouts

| Breakpoint | Frame | Container | Side padding | Content width | Columns | Gutter | Column width |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Desktop | 1440 | 1280 (`container-xl`), centred, 80 outer margin | 32 | 1216 | 12 | 32 | 72 |
| Tablet | 768 | 768, full width | 32 | 704 | 6 | 32 | ~90.7 (auto) |
| Mobile | 375 | 375, full width | 16 | 343 | 4 | 16 | ~73.75 (auto) |

- Columns stretch (auto width); gutters and side padding are fixed.
- Inside a container, sub-grids of **12, 6, 5, 3 or 2** auto columns split a section, for example a row of 3 KPI cards or a 2-column form.
- Elements span whole columns and start on a column edge.

`Usage`

```css
.page { max-width: var(--container-xl); margin-inline: auto; padding-inline: var(--space-8); }
.page-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--space-8); }

@media (max-width: 1023px) { .page-grid { grid-template-columns: repeat(6, 1fr); } }
@media (max-width: 767px)  { .page { padding-inline: var(--space-4); } .page-grid { grid-template-columns: repeat(4, 1fr); gap: var(--space-4); } }
```

## Containers

Content sits in a centred container with a fixed max width.

| Token | rem | px |
| --- | --- | --- |
| `--container-sm` | 40rem | 640 |
| `--container-md` | 48rem | 768 |
| `--container-lg` | 64rem | 1024 |
| `--container-xl` | 80rem | 1280 |

## App layout

- **Desktop only**, minimum width 1280, designed at 1440. The grid applies to the content area right of the sidebar.
- **Sidebar:** fixed, `gray-900`; collapsed 72 (icons + tooltips), open 280. Item 44 tall, radius 8; active and hover `gray-800`.
- **Header bar:** sticky, white, 80 tall, padding `24 32`, bottom border `gray-200`. Title left (Display xs), actions right (gap 8).
- **Body:** padding 32, vertical stack with gap 24, on the 12-column grid.
- **Detail page:** header bar, then fact card (7-column grid, `gray-25` fill), then sticky tab row, then tab panels.

## Radius

| Value | Token | Use |
| --- | --- | --- |
| 4 | `--radius-sm` | Checkboxes, calendar days, progress and slider tracks, targets under 24 px (help icon, badge ×) |
| 8 | `--radius-md` | Icon buttons of 32 px and up, buttons, inputs, dropdown menus, tab tops (`8 8 0 0`), inner cards, banners |
| 12 | `--radius-lg` | Cards, dialogs, popover panels |
| 16 | `--radius-xl` | Badges, tags, chips |
| 9999 (full) | `--radius-full` | Avatar, toggle, radio, check circle, dots |

Components use only these tokens, never a px value. 6 was dropped on 7 Oct 2026: checkbox `md` and calendar days moved to 4, editor icons (icon buttons) to 8.

## Do and don't

**Do:** 16 between blocks, from the set.

```html
<div class="f-dd-stack" style="gap: var(--space-4)"><span></span><span></span><span></span></div>
```

**Don't:** 14: on no grid step of the set. Use 12 or 16.

```html
<div class="f-dd-stack" style="gap: 14px"><span></span><span></span><span></span></div>
```

## Tokens

`tokens.css (spacing, containers, radius)`

```css
:root {
  /* Spacing: token number x 4 = px */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
  --space-40: 160px;
  --space-48: 192px;
  --space-56: 224px;
  --space-64: 256px;

  /* Containers */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;

  /* Radius: 4 small parts, 8 controls, 12 containers, 16 badges, full circles */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
}
```

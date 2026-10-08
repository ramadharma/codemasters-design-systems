---
name: Icons
slug: icons
category: Foundations
status: Ready
version: 0.1.0
updated: 2026-10-07
requires: tokens.css
---

# Icons

Feather-style outline icons on a 24 grid, in four sizes. Icons take the colour of their text, so one file serves every state.

## Style

- **Outline, Feather style.** Drawn on a 24 × 24 grid with a 2 px round stroke, which renders at 1.67 px when the icon is 20 px.
- **Sizes 12, 16, 20, 24.** 20 is the default in buttons, inputs and menus; 16 in small controls and badges; 24 in large buttons and empty states.
- **Colour = text colour.** Icons use `currentColor`, so they follow the label next to them and every state change.
- SVG files in `public/assets/`. Do not mix in filled or two-tone icons from other sets.

### Sizes

| Size | Stroke on screen | Use |
| --- | --- | --- |
| 12 | 1 px | Badge icons, tiny indicators |
| 16 | 1.33 px | Small buttons, help icon, chips, menu checkmarks |
| 20 | 1.67 px | Default: buttons, inputs, menu items, sidebar |
| 24 | 2 px | Large buttons (`xl`, `2xl`), empty states |

## Colour

- Inactive sidebar icons are `gray-400` and turn white when active (sidebar `gray-900`).
- Icons inside inputs and tertiary buttons are `gray-500`; on a coloured element they take that element's text colour.
- Status icons use the `500` step of their role: `success-500`, `warning-500`, `error-500`, `blue-500`.

> **Warning:** `gray-400` on white is 2.58:1, below 3:1 for icons that carry meaning (help icon, toolbar, add button). `gray-500` (4.97:1) passes. Open decision for the design team.

## Library

The 48 icons used in this documentation. Click one to copy its name.

## Code

### Inline SVG

The default. The stroke follows `color`, so hover and active states need no extra file.

```html
<!-- Inline SVG: stroke follows the text colour. Decorative, so hidden from screen readers. -->
<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
</svg>
```

### CSS mask

For icons loaded as files that still need to change colour with state (the app's `.ic`).

`icon.css`

```css
/* Icons that change colour with state: an SVG file drawn as a mask, coloured by currentColor. */
.ic {
  display: inline-block; flex: none; width: 20px; height: 20px;
  background: currentColor;
  -webkit-mask: var(--ic) center / contain no-repeat;
  mask: var(--ic) center / contain no-repeat;
}

<span class="ic" style="--ic: url(/assets/icons/file-text.svg)" aria-hidden="true"></span>
```

## Accessibility

- An icon next to a text label is decorative: `aria-hidden="true"`.
- An icon-only button needs an `aria-label` and a title-only tooltip with the same text.
- An icon that carries meaning on its own (status, error) needs 3:1 against its background and a text alternative.

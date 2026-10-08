---
name: WYSIWYG editor
slug: wysiwyg
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-06
requires: tokens.css
---

# WYSIWYG editor

Rich-text formatting for long text a user writes or edits: the AI summary ("Edit Ringkasan") and advisor notes. Use a plain Textarea when formatting is not needed.

## Usage

- Use it for long text a user writes or edits and that needs structure: the AI summary ("Edit Ringkasan"), advisor notes.
- When formatting is not needed, use Textarea input field.
- **Toolbar or tooltip, not both,** in one editor.
- **Icon order is fixed:** Bold, Italic, H1, H2, Quote, Link, Photo, List bullet, List numbers.
- The editor area follows Textarea input field: border, focus ring, error and counter.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Toolbar | Fixed above the editor area. Desktop: row, gap 12. Mobile: column, gap 8. |
| 2 | Text-style dropdown | 240 × 44 (full width on mobile), "Normal text", Text md / Medium `gray-900`, 20 px chevron. |
| 3 | Editor icon | 32 × 32 (28 on mobile), 20 px glyph, radius 8. Inactive `gray-400`; active `brand-100` fill, `brand-700` glyph. |
| 4 | Editor area | Same box as Textarea input field: min height 128, padding `10 14`, 1 px `gray-300` border, radius 8, `shadow-xs`. |

## Properties

| Component | Property | Values | Code |
| --- | --- | --- | --- |
| Editor icon | Type | Bold, Italic, H1, H2, Quote, Link, Photo, List bullet, List numbers | `data-cmd` + `aria-label` |
| Editor icon | Active | True, False | `aria-pressed="true"` |
| Editor icon | Theme | Light, Dark | Light in `.sb-wys-toolbar`, Dark in `.sb-wys-bubble` |
| Toolbar | Breakpoint | Desktop, Mobile | `data-breakpoint="mobile"` on the toolbar |
| Tooltip | Arrow | Center, Left, Right | `data-arrow` on `.sb-wys-bubble` (set by the script) |
| Tooltip | Breakpoint | Default (336 wide), Mobile (280 wide) | `data-breakpoint="mobile"` on the bubble |

## Editor icon

| Theme | Inactive glyph | Active |
| --- | --- | --- |
| Light (on the white toolbar) | `gray-400` | `brand-100` fill, `brand-700` glyph |
| Dark (in the tooltip) | `gray-300` | `gray-600` fill, `white` glyph |

Active means the format is applied to the current selection (`aria-pressed="true"`). Every icon has an `aria-label` and a tooltip with its name and, where one works, the shortcut: "Bold · Ctrl+B". Hover adds a `gray-50` fill so the icon reads as a button.

## Toolbar

### Desktop

```html
<div class="sb-wys">
  <div class="sb-wys-toolbar" role="toolbar" aria-label="Format teks">
    <select class="sb-wys-select" aria-label="Gaya teks"><option value="p">Normal text</option><option value="h1">Heading 1</option><option value="h2">Heading 2</option><option value="blockquote">Quote</option></select>
    <div class="sb-wys-icons">
      <button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold" aria-keyshortcuts="Control+B" data-tip="Bold · Ctrl+B"><svg aria-hidden="true"><!-- bold --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="italic" aria-pressed="false" aria-label="Italic" aria-keyshortcuts="Control+I" data-tip="Italic · Ctrl+I"><svg aria-hidden="true"><!-- italic --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h1" aria-pressed="false" aria-label="Heading 1" data-tip="Heading 1"><svg aria-hidden="true"><!-- h1 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h2" aria-pressed="false" aria-label="Heading 2" data-tip="Heading 2"><svg aria-hidden="true"><!-- h2 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="blockquote" aria-pressed="false" aria-label="Quote" data-tip="Quote"><svg aria-hidden="true"><!-- quote --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="createLink" aria-pressed="false" aria-label="Link" data-tip="Link"><svg aria-hidden="true"><!-- link --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertImage" aria-pressed="false" aria-label="Photo" data-tip="Photo"><svg aria-hidden="true"><!-- image --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertUnorderedList" aria-pressed="false" aria-label="List bullet" data-tip="List bullet"><svg aria-hidden="true"><!-- list --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertOrderedList" aria-pressed="false" aria-label="List numbers" data-tip="List numbers"><svg aria-hidden="true"><!-- list-ordered --></svg></button>
    </div>
  </div>
  <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Ringkasan AI">
    <p>Pilih teks ini, lalu format dengan toolbar.</p>
  </div>
</div>
```

### Mobile

```html
<div class="sb-wys">
  <div class="sb-wys-toolbar" role="toolbar" aria-label="Format teks" data-breakpoint="mobile">
    <select class="sb-wys-select" aria-label="Gaya teks"><option value="p">Normal text</option><option value="h1">Heading 1</option><option value="h2">Heading 2</option><option value="blockquote">Quote</option></select>
    <div class="sb-wys-icons">
      <button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold" aria-keyshortcuts="Control+B" data-tip="Bold · Ctrl+B"><svg aria-hidden="true"><!-- bold --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="italic" aria-pressed="false" aria-label="Italic" aria-keyshortcuts="Control+I" data-tip="Italic · Ctrl+I"><svg aria-hidden="true"><!-- italic --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h1" aria-pressed="false" aria-label="Heading 1" data-tip="Heading 1"><svg aria-hidden="true"><!-- h1 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h2" aria-pressed="false" aria-label="Heading 2" data-tip="Heading 2"><svg aria-hidden="true"><!-- h2 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="blockquote" aria-pressed="false" aria-label="Quote" data-tip="Quote"><svg aria-hidden="true"><!-- quote --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="createLink" aria-pressed="false" aria-label="Link" data-tip="Link"><svg aria-hidden="true"><!-- link --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertImage" aria-pressed="false" aria-label="Photo" data-tip="Photo"><svg aria-hidden="true"><!-- image --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertUnorderedList" aria-pressed="false" aria-label="List bullet" data-tip="List bullet"><svg aria-hidden="true"><!-- list --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertOrderedList" aria-pressed="false" aria-label="List numbers" data-tip="List numbers"><svg aria-hidden="true"><!-- list-ordered --></svg></button>
    </div>
  </div>
  <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Ringkasan AI">
    <p>Pilih teks ini, lalu format dengan toolbar.</p>
  </div>
</div>
```

| Breakpoint | Layout |
| --- | --- |
| Desktop | Row, gap 12: text-style dropdown (240 × 44) + 9 icons (32 px, gap 4) |
| Mobile | Column, gap 8: full-width dropdown, then 9 icons (28 px, gap 2) |

## Floating tooltip

Appears above selected text: `gray-900` fill, radius 8, padding 8, Dark icons with gap 4, and a 16 × 6 arrow pointing at the selection. `shadow-lg` is drawn as a drop-shadow so it follows the arrow. The arrow moves Left or Right when the bubble would leave the editor.

```html
<div class="sb-wys">
  <div class="sb-wys-bubble" role="toolbar" aria-label="Format teks" data-arrow="center" hidden>
    <button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold" aria-keyshortcuts="Control+B"><svg aria-hidden="true"><!-- bold --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="italic" aria-pressed="false" aria-label="Italic" aria-keyshortcuts="Control+I"><svg aria-hidden="true"><!-- italic --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="h1" aria-pressed="false" aria-label="Heading 1"><svg aria-hidden="true"><!-- h1 --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="h2" aria-pressed="false" aria-label="Heading 2"><svg aria-hidden="true"><!-- h2 --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="blockquote" aria-pressed="false" aria-label="Quote"><svg aria-hidden="true"><!-- quote --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="createLink" aria-pressed="false" aria-label="Link"><svg aria-hidden="true"><!-- link --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="insertImage" aria-pressed="false" aria-label="Photo"><svg aria-hidden="true"><!-- image --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="insertUnorderedList" aria-pressed="false" aria-label="List bullet"><svg aria-hidden="true"><!-- list --></svg></button>
    <button class="sb-wys-btn" type="button" data-cmd="insertOrderedList" aria-pressed="false" aria-label="List numbers"><svg aria-hidden="true"><!-- list-ordered --></svg></button>
  </div>
  <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Ringkasan AI">
    <p>Pilih sebagian teks ini untuk memunculkan tooltip format di atasnya.</p>
  </div>
</div>
```

## Content styles

| Element | Style |
| --- | --- |
| Heading 1 | Text lg / Semibold |
| Heading 2 | Text md / Semibold |
| Body | Text md / Regular, `gray-900` |
| Quote | 2 px `gray-300` rule on the leading side, padding 12, `gray-600` text |
| Link | `brand-700`, underlined |
| Lists | Indented 24 |

Blocks sit 8 apart. Quote, link and list styles follow the existing type and colour rules.

## Do and don't

**Do:** One way to format: the toolbar.

```html
<div class="sb-wys">
  <div class="sb-wys-toolbar" role="toolbar" aria-label="Format teks">
    <select class="sb-wys-select" aria-label="Gaya teks"><option value="p">Normal text</option><option value="h1">Heading 1</option><option value="h2">Heading 2</option><option value="blockquote">Quote</option></select>
    <div class="sb-wys-icons">
      <button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold" aria-keyshortcuts="Control+B" data-tip="Bold · Ctrl+B"><svg aria-hidden="true"><!-- bold --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="italic" aria-pressed="false" aria-label="Italic" aria-keyshortcuts="Control+I" data-tip="Italic · Ctrl+I"><svg aria-hidden="true"><!-- italic --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h1" aria-pressed="false" aria-label="Heading 1" data-tip="Heading 1"><svg aria-hidden="true"><!-- h1 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h2" aria-pressed="false" aria-label="Heading 2" data-tip="Heading 2"><svg aria-hidden="true"><!-- h2 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="blockquote" aria-pressed="false" aria-label="Quote" data-tip="Quote"><svg aria-hidden="true"><!-- quote --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="createLink" aria-pressed="false" aria-label="Link" data-tip="Link"><svg aria-hidden="true"><!-- link --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertImage" aria-pressed="false" aria-label="Photo" data-tip="Photo"><svg aria-hidden="true"><!-- image --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertUnorderedList" aria-pressed="false" aria-label="List bullet" data-tip="List bullet"><svg aria-hidden="true"><!-- list --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertOrderedList" aria-pressed="false" aria-label="List numbers" data-tip="List numbers"><svg aria-hidden="true"><!-- list-ordered --></svg></button>
    </div>
  </div>
  <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Ringkasan AI">
    <p>Toolbar saja.</p>
  </div>
</div>
```

**Don't:** Toolbar and floating tooltip together. Two controls for the same job.

```html
<div class="sb-wys">
  <div class="sb-wys-toolbar" role="toolbar" aria-label="Format teks">
    <select class="sb-wys-select" aria-label="Gaya teks"><option value="p">Normal text</option><option value="h1">Heading 1</option><option value="h2">Heading 2</option><option value="blockquote">Quote</option></select>
    <div class="sb-wys-icons">
      <button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold" aria-keyshortcuts="Control+B" data-tip="Bold · Ctrl+B"><svg aria-hidden="true"><!-- bold --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="italic" aria-pressed="false" aria-label="Italic" aria-keyshortcuts="Control+I" data-tip="Italic · Ctrl+I"><svg aria-hidden="true"><!-- italic --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h1" aria-pressed="false" aria-label="Heading 1" data-tip="Heading 1"><svg aria-hidden="true"><!-- h1 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="h2" aria-pressed="false" aria-label="Heading 2" data-tip="Heading 2"><svg aria-hidden="true"><!-- h2 --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="blockquote" aria-pressed="false" aria-label="Quote" data-tip="Quote"><svg aria-hidden="true"><!-- quote --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="createLink" aria-pressed="false" aria-label="Link" data-tip="Link"><svg aria-hidden="true"><!-- link --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertImage" aria-pressed="false" aria-label="Photo" data-tip="Photo"><svg aria-hidden="true"><!-- image --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertUnorderedList" aria-pressed="false" aria-label="List bullet" data-tip="List bullet"><svg aria-hidden="true"><!-- list --></svg></button>
      <button class="sb-wys-btn" type="button" data-cmd="insertOrderedList" aria-pressed="false" aria-label="List numbers" data-tip="List numbers"><svg aria-hidden="true"><!-- list-ordered --></svg></button>
    </div>
  </div>
  <div class="sb-wys-bubble" style="position: relative; justify-self: start" data-arrow="center"><button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold" aria-keyshortcuts="Control+B"><svg aria-hidden="true"><!-- bold --></svg></button><button class="sb-wys-btn" type="button" data-cmd="italic" aria-pressed="false" aria-label="Italic" aria-keyshortcuts="Control+I"><svg aria-hidden="true"><!-- italic --></svg></button><button class="sb-wys-btn" type="button" data-cmd="h1" aria-pressed="false" aria-label="Heading 1"><svg aria-hidden="true"><!-- h1 --></svg></button><button class="sb-wys-btn" type="button" data-cmd="h2" aria-pressed="false" aria-label="Heading 2"><svg aria-hidden="true"><!-- h2 --></svg></button></div>
  <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Ringkasan AI">
    <p>Toolbar dan tooltip.</p>
  </div>
</div>
```

## Accessibility

- The toolbar is `role="toolbar"` with an `aria-label`; the editor area is `role="textbox"` with `aria-multiline="true"` and a label.
- Each icon is a button with `aria-label`, `aria-pressed` for its state, and `aria-keyshortcuts` when a shortcut exists.
- Show a shortcut in the tooltip only when it really works (Bold, Italic).
- Pressing a toolbar button with the mouse keeps the text selection, so the format applies to what the user selected.

| Pair | Ratio | Needed | Result |
| --- | --- | --- | --- |
| Inactive icon `gray-400` on `white` | 2.58:1 | 3:1 (icons) | **Fails** |
| Active icon `brand-700` on `brand-100` | 5.45:1 | 3:1 | Passes |
| Dark inactive `gray-300` on `gray-900` | 12.04:1 | 3:1 | Passes |
| Dark active `white` on `gray-600` | 7.69:1 | 3:1 | Passes |

> **Warning:** Inactive toolbar icons in `gray-400` are below the 3:1 that WCAG 1.4.11 asks for icons. `gray-500` (4.97:1) passes. Decision for the design team.

## Code

Load `tokens.css` and `wysiwyg.css`. The reference script below makes this page work with the browser's built-in editing; a production editor library should keep the same markup, classes and ARIA.

`wysiwyg.css`

```css
/* WYSIWYG editor, Codemasters Design System
   Needs tokens.css. Behaviour comes from the app's editor (reference: wysiwyg.js).

   <div class="sb-wys">
     <div class="sb-wys-toolbar" role="toolbar" aria-label="Format teks">
       <select class="sb-wys-select" aria-label="Gaya teks">…</select>
       <div class="sb-wys-icons">
         <button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold"
                 aria-keyshortcuts="Control+B" data-tip="Bold · Ctrl+B"><svg aria-hidden="true">…</svg></button>
         …
       </div>
     </div>
     <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Ringkasan"></div>
   </div>

   data-breakpoint="mobile" on .sb-wys-toolbar: column layout, 28 px icons.
   .sb-wys-bubble instead of the toolbar: floating Dark tooltip above the selection. Use one, not both. */

.sb-wys { position: relative; display: grid; gap: 12px; }

/* Toolbar */
.sb-wys-toolbar { display: flex; align-items: center; gap: 12px; }
.sb-wys-toolbar[data-breakpoint="mobile"] { flex-direction: column; align-items: stretch; gap: 8px; }
.sb-wys-select {
  box-sizing: border-box; width: 240px; height: 44px; margin: 0; padding: 0 40px 0 14px;
  font: 500 var(--text-md) var(--font); color: var(--gray-900);
  background: var(--white) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23667085' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right 14px center / 20px;
  border: 1px solid var(--gray-300); border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  appearance: none; cursor: pointer;
}
.sb-wys-select:focus-visible { outline: none; border-color: var(--brand-300); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring); }
.sb-wys-toolbar[data-breakpoint="mobile"] .sb-wys-select { width: 100%; }
.sb-wys-icons { display: flex; flex-wrap: wrap; gap: 4px; }
.sb-wys-toolbar[data-breakpoint="mobile"] .sb-wys-icons { gap: 2px; } /* 28 px icons, gap 2 */

/* Editor icon: 32 x 32, 20 px glyph, radius 8 like every icon button of 32+. Light theme on the white toolbar. */
.sb-wys-btn {
  position: relative; box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 32px; height: 32px; margin: 0; padding: 0;
  color: var(--gray-400); background: none; border: 0; border-radius: var(--radius-md);
  cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-wys-btn > svg { width: 20px; height: 20px; }
.sb-wys-toolbar[data-breakpoint="mobile"] .sb-wys-btn { width: 28px; height: 28px; }
.sb-wys-btn:hover { background: var(--gray-50); color: var(--gray-600); }
.sb-wys-btn[aria-pressed="true"] { background: var(--brand-100); color: var(--brand-700); }
.sb-wys-btn:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 0; }

/* Tooltip on each icon: name and shortcut, Dark tooltip spec. */
.sb-wys-btn[data-tip]::after {
  content: attr(data-tip); position: absolute; z-index: 10; bottom: calc(100% + 8px); left: 50%; translate: -50% 0;
  padding: 8px 12px; border-radius: var(--radius-md); background: var(--gray-900); box-shadow: var(--shadow-lg);
  font: 600 var(--text-xs) var(--font); color: var(--white); white-space: nowrap;
  visibility: hidden; opacity: 0; transition: opacity 150ms var(--ease), visibility 0s 150ms; pointer-events: none;
}
.sb-wys-btn[data-tip]:is(:hover, :focus-visible)::after { visibility: visible; opacity: 1; transition: opacity 150ms var(--ease) 300ms; }

/* Floating tooltip (Dark): gray-900, radius 8, padding 8, icons gap 4, 16 x 6 arrow, shadow-lg drawn as a filter. */
.sb-wys-bubble {
  position: absolute; z-index: 20; display: flex; gap: 4px; padding: 8px;
  background: var(--gray-900); border-radius: var(--radius-md);
  filter: drop-shadow(0 12px 8px rgba(16,24,40,.08)) drop-shadow(0 4px 3px rgba(16,24,40,.03));
}
.sb-wys-bubble[hidden] { display: none; }
.sb-wys-bubble::after {
  content: ''; position: absolute; top: 100%; left: 50%; translate: -50% 0;
  border: 8px solid transparent; border-top: 6px solid var(--gray-900); border-bottom: 0;
}
.sb-wys-bubble[data-arrow="left"]::after { left: 24px; }
.sb-wys-bubble[data-arrow="right"]::after { left: auto; right: 8px; translate: 0 0; }
.sb-wys-bubble[data-breakpoint="mobile"] .sb-wys-btn { width: 28px; height: 28px; }
.sb-wys-bubble[data-breakpoint="mobile"] { gap: 2px; }
/* Dark theme icons (inside the tooltip) */
.sb-wys-bubble .sb-wys-btn { color: var(--gray-300); }
.sb-wys-bubble .sb-wys-btn:hover { background: var(--gray-700); color: var(--white); }
.sb-wys-bubble .sb-wys-btn[aria-pressed="true"] { background: var(--gray-600); color: var(--white); }

/* Editor area: same box as Textarea input field. */
.sb-wys-area {
  box-sizing: border-box; min-height: 128px; padding: 10px 14px;
  font: 400 var(--text-md) var(--font); color: var(--gray-900);
  background: var(--white); border: 1px solid var(--gray-300); border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  overflow-wrap: anywhere;
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-wys-area:focus { outline: none; border-color: var(--brand-300); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring); }
.sb-wys-area[aria-invalid="true"] { border-color: var(--error-300); }
.sb-wys-area[aria-invalid="true"]:focus { box-shadow: var(--shadow-xs), 0 0 0 4px var(--error-100); }
/* Content styles map to the type scale. */
.sb-wys-area > * { margin: 0; }
.sb-wys-area > * + * { margin-top: 8px; }
.sb-wys-area h1 { font: 600 var(--text-lg) var(--font); }
.sb-wys-area h2 { font: 600 var(--text-md) var(--font); }
.sb-wys-area blockquote { padding-inline-start: 12px; border-inline-start: 2px solid var(--gray-300); color: var(--gray-600); }
.sb-wys-area ul, .sb-wys-area ol { padding-inline-start: 24px; }
.sb-wys-area a { color: var(--brand-700); text-underline-offset: 4px; }
.sb-wys-area img { max-width: 100%; border-radius: var(--radius-md); }

@media (prefers-reduced-motion: reduce) {
  .sb-wys-btn, .sb-wys-area, .sb-wys-btn[data-tip]::after { transition: none; }
}
```

### Reference script

`wysiwyg.js`

```js
// Reference behaviour for the WYSIWYG editor, built on the browser's own editing commands.
// In production keep the markup, CSS and ARIA and let the app's editor library do the editing.
const BLOCK_VALUES = ['p', 'h1', 'h2', 'blockquote'];
function wysClick(e) {
  const btn = e.target.closest?.('.sb-wys-btn[data-cmd]');
  if (!btn) return;
  const wys = btn.closest('.sb-wys');
  const area = wys.querySelector('.sb-wys-area');
  const cmd = btn.dataset.cmd;
  area.focus();
  if (['h1', 'h2', 'blockquote'].includes(cmd)) {
    document.execCommand('formatBlock', false, currentBlock() === cmd ? 'p' : cmd);
  } else if (cmd === 'createLink' || cmd === 'insertImage') {
    const url = prompt(cmd === 'createLink' ? 'Alamat tautan' : 'Alamat gambar', 'https://');
    if (url) document.execCommand(cmd, false, url);
  } else {
    document.execCommand(cmd);
  }
  syncWys(wys);
}
function wysMousedown(e) {
  if (e.target.closest?.('.sb-wys-btn')) e.preventDefault();
}
function wysSelect(e) {
  const select = e.target.closest?.('.sb-wys-select');
  if (!select) return;
  const wys = select.closest('.sb-wys');
  wys.querySelector('.sb-wys-area').focus();
  document.execCommand('formatBlock', false, select.value);
  syncWys(wys);
}
function currentBlock() {
  return (document.queryCommandValue('formatBlock') || 'p').toLowerCase().replace(/^div$/, 'p');
}
function syncWys(wys) {
  const block = currentBlock();
  wys.querySelectorAll('.sb-wys-btn[data-cmd]').forEach(b => {
    const cmd = b.dataset.cmd;
    const on = ['h1', 'h2', 'blockquote'].includes(cmd) ? block === cmd : ['bold', 'italic', 'insertUnorderedList', 'insertOrderedList'].includes(cmd) && document.queryCommandState(cmd);
    b.setAttribute('aria-pressed', String(Boolean(on)));
  });
  const select = wys.querySelector('.sb-wys-select');
  if (select) select.value = BLOCK_VALUES.includes(block) ? block : 'p';
}
function wysSelection() {
  const sel = document.getSelection();
  document.querySelectorAll('.sb-wys').forEach(wys => {
    const area = wys.querySelector('.sb-wys-area');
    const inside = sel.rangeCount && area.contains(sel.anchorNode);
    if (inside) syncWys(wys);
    const bubble = wys.querySelector('.sb-wys-bubble');
    if (!bubble) return;
    if (!inside || sel.isCollapsed) return (bubble.hidden = true);
    bubble.hidden = false;
    const r = sel.getRangeAt(0).getBoundingClientRect();
    const box = wys.getBoundingClientRect();
    const ideal = r.left + r.width / 2 - box.left - bubble.offsetWidth / 2;
    const left = Math.max(0, Math.min(ideal, box.width - bubble.offsetWidth));
    bubble.dataset.arrow = left < ideal ? 'right' : left > ideal ? 'left' : 'center';
    bubble.style.left = `${left}px`;
    bubble.style.top = `${r.top - box.top - bubble.offsetHeight - 8}px`;
  });
}
document.addEventListener('click', wysClick);
document.addEventListener('mousedown', wysMousedown);
document.addEventListener('change', wysSelect);
document.addEventListener('selectionchange', wysSelection);
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-300: #d0d5dd;
  --gray-400: #98a2b3;
  --gray-600: #475467;
  --gray-700: #344054;
  --gray-900: #101828;
  --brand-100: #dfeafb;
  --brand-300: #9fc5f6;
  --brand-500: #5183eb;
  --brand-700: #2e51cd;
  --error-100: #fee4e2;
  --error-300: #fda29b;
  --radius-md: 8px;
  --shadow-xs: 0 1px 2px rgba(16,24,40,.05);
  --shadow-lg: 0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03);
  --focus-ring: color-mix(in srgb, var(--brand-500) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --text-lg: 18px/28px;
  --text-md: 16px/24px;
  --text-xs: 12px/18px;
}
```

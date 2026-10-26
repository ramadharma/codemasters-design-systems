---
name: Accordion
slug: accordion
category: Components
status: In progress
version: 1.0.0
updated: 2026-10-14
requires: tokens.css
---

# Accordion

Stacked sections that open and close: FAQs, the parts of a claim, groups of filters. Each item opens on its own, divided by a line, with the chevron on the right. Native details and summary, no script.

## Usage

- Use an accordion when people need only some of a long page at a time: answers in an FAQ, the parts of a claim, groups of filters.
- Do not hide what everyone needs. Content most people read, or must act on, stays open or out of the accordion.
- Titles say what is inside, as a question in an FAQ or a noun in a detail page ("Rincian biaya").
- Use md for FAQs and detail pages, sm for side panels and filter groups.
- Meta shows the state of a section without opening it: a Badge ("Lengkap", "3 dari 4"), a total, or a count of active filters.
- Each item opens on its own. Open the first one, or the one that needs attention, when the page loads.
- For steps people must complete in order, use a stepper, not an accordion.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Item | `<details>`; 1 px `gray-200` line between items, none above the first or below the last. |
| 2 | Title | md: Text md / Semibold, sm: Text sm / Semibold, `gray-900`. Wraps; never truncated. |
| 3 | Meta | Optional. A Badge sm or Text sm `gray-500`, 12 before the chevron. |
| 4 | Chevron | 20 px `chevron-down`, `gray-400`, `gray-700` on hover; turns 180° when open, 150 ms. |
| 5 | Body | Text md (sm: Text sm) / Regular `gray-600`, 8 under the title (sm 4), any content. |

The head is the whole row: padding 20 above and below (sm 12), no side padding, so the text lines up with the content around it.

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Size | md, sm | Omit, or `data-size="sm"` on `.sb-accordion` |
| Open | True, False | `open` on the `<details>` |
| Meta | True, False | `<span class="sb-acc-meta">` before the chevron |

## Types

### FAQ

Questions as titles, short answers. md, the first answer open.

### Detail sections

The parts of a claim inside a Card. Meta tells people which part needs them; open the part that does.

### Filter groups

sm in a side panel, one group per filter, Checkboxes inside. Meta counts the active choices, so a closed group still shows it filters.

## States

| State | Look |
| --- | --- |
| Closed | Chevron points down, body hidden |
| Open | Chevron points up, body shown; the height eases in 200 ms where the browser supports it |
| Hover | Chevron `gray-700`; the whole row is the target |
| Focused | 2 px `brand-600` outline around the head, offset 2 |

## Do and don't

**Do:** Meta shows the state, so people open only what needs them.

```html
<div class="sb-accordion">
  <details class="sb-acc-item">
    <summary class="sb-acc-head">
      <span class="sb-acc-title">Rincian biaya</span>
      <span class="sb-acc-meta">Rp 12.450.000</span>
      <svg class="sb-acc-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </summary>
    <div class="sb-acc-body"><dl class="sb-card-rows"><div class="sb-card-row"><dt>Kamar</dt><dd>Rp 4.500.000</dd></div><div class="sb-card-row"><dt>Tindakan</dt><dd>Rp 7.950.000</dd></div></dl></div>
  </details>
  <details class="sb-acc-item" open>
    <summary class="sb-acc-head">
      <span class="sb-acc-title">Dokumen</span>
      <span class="sb-acc-meta"><span class="sb-badge" data-size="sm" data-color="warning">3 dari 4</span></span>
      <svg class="sb-acc-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </summary>
    <div class="sb-acc-body"><p>Kuitansi apotek belum diunggah.</p></div>
  </details>
</div>
```

**Don't:** Every section closed, nothing says where the problem is.

```html
<div class="sb-accordion">
  <details class="sb-acc-item">
    <summary class="sb-acc-head">
      <span class="sb-acc-title">Rincian biaya</span>
      <svg class="sb-acc-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </summary>
    <div class="sb-acc-body"><dl class="sb-card-rows"><div class="sb-card-row"><dt>Kamar</dt><dd>Rp 4.500.000</dd></div><div class="sb-card-row"><dt>Tindakan</dt><dd>Rp 7.950.000</dd></div></dl></div>
  </details>
  <details class="sb-acc-item">
    <summary class="sb-acc-head">
      <span class="sb-acc-title">Dokumen</span>
      <svg class="sb-acc-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </summary>
    <div class="sb-acc-body"><p>Kuitansi apotek belum diunggah.</p></div>
  </details>
</div>
```

- Do not nest an accordion inside another.
- Do not put a primary action only inside a closed section.
- Do not use an accordion for one item: show the content, or use a Card with a fold chevron.

## Accessibility

- `<details>` and `<summary>` give the toggle, its expanded state and Enter / Space for free, with no ARIA to keep in sync.
- The summary is the only control in the head. Do not put links or buttons in it.
- Find in page (⌘F) opens a closed item that holds the match.
- With reduced motion, items open at once and the chevron does not turn.

## Code

Load `tokens.css`, `badge.css` for a meta badge, then `accordion.css`. No script.

`accordion.css`

```css
/* Accordion, Codemasters Design System
   Needs tokens.css; badge.css for a meta badge. No script: <details> opens and closes itself, each item on its own.

   <div class="sb-accordion">
     <details class="sb-acc-item" open>
       <summary class="sb-acc-head">
         <span class="sb-acc-title">Berapa lama klaim diproses?</span>
         <span class="sb-acc-meta">…optional: a Badge or a short value…</span>
         <svg class="sb-acc-chevron" aria-hidden="true">…chevron-down…</svg>
       </summary>
       <div class="sb-acc-body">…</div>
     </details>
     …
   </div>

   data-size="sm" on .sb-accordion   compact rows (filter groups, side panels); omit for md
   open on a <details>                starts open. Any number can be open at once. */

.sb-accordion {
  --acc-py: 20px; --acc-type: var(--text-md); --acc-gap: 8px;
  display: grid; min-width: 0;
  font-family: var(--font);
  interpolate-size: allow-keywords; /* lets the body animate to its own height where supported */
}
.sb-accordion[data-size="sm"] { --acc-py: 12px; --acc-type: var(--text-sm); --acc-gap: 4px; }

/* Items are divided by a gray-200 line; no line above the first or below the last. */
.sb-acc-item + .sb-acc-item { border-top: 1px solid var(--border-secondary); }

/* Head: the whole row is the toggle. Title Semibold gray-900, meta and chevron at the end. */
.sb-acc-head {
  display: flex; align-items: center; gap: 12px;
  padding-block: var(--acc-py); border-radius: var(--radius-sm);
  font: 600 var(--acc-type) var(--font); color: var(--text-primary);
  list-style: none; cursor: pointer;
}
.sb-acc-head::-webkit-details-marker { display: none; }
.sb-acc-head:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-acc-title { flex: 1; min-width: 0; text-wrap: pretty; }
.sb-acc-meta { display: inline-flex; align-items: center; gap: 8px; flex: none; font-weight: 400; font-size: var(--text-sm); color: var(--text-quaternary); }
.sb-acc-chevron { width: 20px; height: 20px; flex: none; color: var(--fg-quaternary); transition-property: rotate, color; transition-duration: 150ms; transition-timing-function: var(--ease); }
.sb-acc-head:hover .sb-acc-chevron { color: var(--text-secondary); }
.sb-acc-item[open] > .sb-acc-head .sb-acc-chevron { rotate: 180deg; }

/* Body: Regular gray-600, under the title; the row's bottom padding continues below it. */
.sb-acc-body { padding-bottom: var(--acc-py); margin-top: calc(var(--acc-gap) - var(--acc-py)); font: 400 var(--acc-type) var(--font); color: var(--text-tertiary); text-wrap: pretty; }
.sb-acc-body > * { margin: 0; }
.sb-acc-body > * + * { margin-top: 12px; }

/* Open and close: the height eases in browsers that animate <details>; elsewhere it snaps. */
.sb-acc-item::details-content { block-size: 0; overflow: clip; transition: block-size 200ms var(--ease), content-visibility 200ms allow-discrete; }
.sb-acc-item[open]::details-content { block-size: auto; }

@media (prefers-reduced-motion: reduce) {
  .sb-acc-chevron, .sb-acc-item::details-content { transition: none; }
}
```

## Tokens used

```css
:root {
  --brand-600: #3966e0;
  --text-primary: var(--gray-900);
  --text-secondary: var(--gray-700);
  --text-tertiary: var(--gray-600);
  --text-quaternary: var(--gray-500);
  --fg-quaternary: var(--gray-400);
  --border-secondary: var(--gray-200);
  --radius-sm: 4px;
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Timeless Sans', sans-serif;
  --text-md: 16px/24px;
  --text-sm: 14px/20px;
}
```

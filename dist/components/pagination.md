---
name: Pagination
slug: pagination
category: Components
status: In progress
version: 1.0.0
updated: 2026-10-14
requires: tokens.css
---

# Pagination

The footer of a long list: how many rows per page, which rows are shown out of how many, and two arrows to the previous and next page. One row, right-aligned under the table.

## Usage

- Use it under a table or list that is longer than one page: claims to review, invoices, members. It sits right under the list, in the same Card, 16 below the last row.
- The range says what is on screen and how much there is in all: "6–10 dari 1.542 klaim". Name the rows (klaim, invoice, peserta); "data" only when nothing better fits.
- Page sizes 5, 10, 25 and 50 cover most lists. Changing the size keeps the first row in view: on rows 11–15, switching to 10 lands on rows 11–20.
- After a page change, scroll the list (not the page) back to its first row and keep focus on the arrow that was used.
- Filters, search and sorting sit above the list, never in this row.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Label | "Baris per halaman", Text md `gray-500`, 12 from the list. |
| 2 | Page size | Input dropdown, 88 wide, 44 high: 5, 10, 25, 50. |
| 3 | Range | "6–10 dari 1.542 klaim", Text md `gray-500`, tabular figures, 24 from the list and the arrows. Read out when it changes (`aria-live="polite"`). |
| 4 | Arrows | Button secondary gray lg, icon only (44 × 44, chevron left / right), 12 apart. Disabled on the first and the last page. |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Page | 1 … pages | `data-page` |
| Rows | Total and page size | `data-total`, `data-size` |
| Page sizes | List | `data-sizes="5,10,25,50"` (default) |
| Row name | Text | `data-noun="klaim"` (default "data") |

## In a table

Under a Table, 16 below it, inside the same Card. The Table page uses this footer.

## Do and don't

**Do:** Name the rows and give the total.

```html
<p class="pager-copy">1–5 dari 1.542 klaim</p>
```

**Don't:** "Halaman 1" alone: nobody knows how much is left.

```html
<p class="pager-copy">Halaman 1</p>
```

## Accessibility

- A `<nav>` with its own `aria-label` ("Halaman daftar klaim"), so it is a landmark people can tell apart from the main navigation.
- The arrows are icon-only buttons named "Halaman sebelumnya" and "Halaman berikutnya"; on the first and last page they are `disabled`.
- The page-size list is an Input dropdown labelled by "Baris per halaman".
- The range is a polite live region, so a screen reader says "6–10 dari 1.542 klaim" after each change. Focus stays on the arrow that was used, or moves to the other arrow when it became disabled.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Label and range `gray-500` | `white` | 4.97:1 | Passes |
| Arrow `gray-700` | `white` | 10.46:1 | Passes (3:1 for icons) |

## Code

Load `tokens.css`, `button.css` and `input-dropdown.css` (with `input-dropdown.js`), then `pagination.css`, and add `pagination.js`. The markup can be just the `<nav>` with its data attributes: the script draws the rest and redraws on every change. Listen for `sb-page-change` to load the page.

`pagination.css`

```css
/* Pagination, Codemasters Design System
   Needs tokens.css, button.css and input-dropdown.css (+ input-dropdown.js); pagination.js draws and updates it.

   <nav class="sb-pagination" id="klaim-pages" aria-label="Halaman daftar klaim"
        data-page="1" data-total="1542" data-size="5" data-sizes="5,10,25,50" data-noun="klaim"></nav>

   data-page, data-total, data-size   the current page, the number of rows, rows per page
   data-sizes   the page-size options (default 5, 10, 25, 50)
   data-noun    what the rows are: "1–5 dari 1.542 klaim" (default "data")
   One row, right-aligned: Baris per halaman [5 ⌄]   1–5 dari 1.542 klaim   [‹] [›] */

.sb-pagination {
  display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-end; gap: 12px;
  font: 400 var(--text-md) var(--font); color: var(--text-quaternary);
}
.sb-pagination-label { white-space: nowrap; }
.sb-pagination-size { width: 88px; }
.sb-pagination-count { margin: 0 0 0 12px; white-space: nowrap; font-variant-numeric: tabular-nums; } /* 24 from the list */
.sb-pagination-steps { display: flex; gap: 12px; margin-inline-start: 12px; } /* 24 from the range, 12 between the arrows */
```

### Script

`pagination.js`

```js
// Pagination: draws itself from data-page, data-total and data-size; the arrows change the page and the
// Input dropdown ("sb-dd-change") the page size. Fires "sb-page-change" with { page, size }: load that page.
// Needs input-dropdown.js for the page-size list.
function pgRender(nav) {
  const s = nav.dataset, size = +s.size || 5, total = +s.total || 0, pages = Math.max(1, Math.ceil(total / size));
  const page = Math.min(Math.max(1, +s.page || 1), pages), id = nav.id || 'pg';
  const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  const num = n => n.toLocaleString('id-ID');
  const sizes = (s.sizes || '5,10,25,50').split(',').map(Number);
  const opts = sizes.map((n, i) => `<div class="sb-dd-opt" id="${id}-o${i}" role="option" aria-selected="${n === size}" data-value="${n}"><span class="sb-dd-main"><span class="sb-dd-label">${n}</span></span>${svg('M20 6 9 17l-5-5').replace('<svg ', '<svg class="sb-dd-check" ')}</div>`).join('');
  const step = (to, label, d) => `<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="lg" data-icon="only" aria-label="${label}" data-go="${to}"${to < 1 || to > pages ? ' disabled' : ''}>${svg(d)}</button>`;
  const first = total ? (page - 1) * size + 1 : 0, last = Math.min(total, page * size);
  nav.innerHTML = `<span class="sb-pagination-label" id="${id}-l">Baris per halaman</span>
<div class="sb-dd sb-pagination-size">
<button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="${id}-list" aria-labelledby="${id}-l ${id}-v"><span class="sb-dd-value" id="${id}-v"><span class="sb-dd-label">${size}</span></span>${svg('m6 9 6 6 6-6').replace('<svg ', '<svg class="sb-dd-chevron" ')}</button>
<div class="sb-dd-menu" id="${id}-list" role="listbox" aria-labelledby="${id}-l" hidden>${opts}</div>
</div>
<p class="sb-pagination-count" aria-live="polite">${num(first)}–${num(last)} dari ${num(total)} ${s.noun || 'data'}</p>
<div class="sb-pagination-steps">${step(page - 1, 'Halaman sebelumnya', 'm15 18-6-6 6-6')}${step(page + 1, 'Halaman berikutnya', 'm9 18 6-6-6-6')}</div>`;
  s.page = page;
}
function pgSet(nav, page, size, focus) {
  const s = nav.dataset;
  if (size) { page = Math.floor(((+s.page - 1) * +s.size) / size) + 1; s.size = size; } // the first row stays in view
  s.page = page;
  pgRender(nav);
  const target = nav.querySelector(focus);
  (target && !target.disabled ? target : nav.querySelector('[data-go]:not(:disabled)'))?.focus(); // first or last page: the other arrow
  nav.dispatchEvent(new CustomEvent('sb-page-change', { bubbles: true, detail: { page: +s.page, size: +s.size } }));
}
function pgClick(e) {
  const go = e.target.closest?.('.sb-pagination [data-go]');
  if (go && !go.disabled) pgSet(go.closest('.sb-pagination'), +go.dataset.go, null, `[aria-label="${go.getAttribute('aria-label')}"]`);
}
function pgSize(e) {
  const nav = e.target.closest?.('.sb-pagination');
  if (nav && +e.detail.value !== +nav.dataset.size) pgSet(nav, null, +e.detail.value, '.sb-dd-trigger');
}
document.querySelectorAll('.sb-pagination').forEach(pgRender);
document.addEventListener('click', pgClick);
document.addEventListener('sb-dd-change', pgSize);
```

## Tokens used

```css
:root {
  --text-quaternary: var(--gray-500);
  --font: 'Timeless Sans', sans-serif;
  --text-md: 16px/24px;
}
```

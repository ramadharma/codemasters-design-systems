---
name: Table
slug: table
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-08
requires: tokens.css
---

# Table

Rows of records: claims, invoice items, members. A gray-50 header band, gray-200 row dividers, right-aligned tabular numbers, status pills, sortable columns, row selection and grouped rows.

## Usage

- Use a table when people compare or scan many records with the same fields. For one record, use a Card with summary rows.
- A table sits in a Card. Its count and page buttons sit under it; filters and search sit above, outside the table.
- Numbers, amounts and dates align right with tabular figures, so digits line up. Text aligns left.
- Money is in full Rupiah. Status is a Badge sm, never coloured text.
- Every cell shows a value. A missing value is a `gray-400` "—", never a blank cell.
- The ID column links to the record. Row actions go in a "⋯" Dropdown menu in the last column.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Header | `gray-50` band with radius 8 at both ends, padding `12 16` (sm `8 12`), Text sm / Regular `gray-500`. No divider under it. |
| 2 | Sortable header | The label is the button. Idle: 16 px two-way arrow `gray-400`. Sorted: label `gray-700`, arrow `brand-600` pointing the sort direction; `aria-sort` on the `th`. One sorted column at a time. |
| 3 | Row | Padding 16 (sm `10 12`), 1 px `gray-200` divider. Hover `gray-50`, selected `brand-50`. Text sm `gray-900`. |
| 4 | ID link | Text sm / Medium `brand-700`, underlined; hover `brand-800`. |
| 5 | Number cell | Right-aligned, tabular figures. Full Rupiah. |
| 6 | Status | Badge sm in the status colour (see Badge). |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Size | md, sm | Omit, or `data-size="sm"` on the table for dense screens |
| Number column | True, False | `data-num` on the `th` and each `td` |
| Sortable | True, False | `<button class="sb-table-sort">` in the `th`; `aria-sort` when sorted; `data-value` on cells that sort by number or date |
| Selection | True, False | A first column of Checkboxes with `data-select-all` / `data-select-item` |
| Tone | Error, Warning | `data-tone` on a body row |
| Sticky first column | True, False | `data-sticky` on the table |

## Types

### Default

```html
<div class="sb-table-wrap">
  <table class="sb-table">
    <thead><tr><th scope="col"><button class="sb-table-sort" type="button">ID Klaim<svg class="is-idle" data-i="selector" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 15 5 5 5-5M7 9l5-5 5 5"/></svg><svg class="is-dir" data-i="arrow-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></button></th><th scope="col"><button class="sb-table-sort" type="button">Peserta<svg class="is-idle" data-i="selector" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 15 5 5 5-5M7 9l5-5 5 5"/></svg><svg class="is-dir" data-i="arrow-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></button></th><th scope="col">Rumah Sakit</th><th scope="col" data-num aria-sort="descending"><button class="sb-table-sort" type="button">Tanggal<svg class="is-idle" data-i="selector" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 15 5 5 5-5M7 9l5-5 5 5"/></svg><svg class="is-dir" data-i="arrow-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></button></th><th scope="col" data-num><button class="sb-table-sort" type="button">Tagihan<svg class="is-idle" data-i="selector" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 15 5 5 5-5M7 9l5-5 5 5"/></svg><svg class="is-dir" data-i="arrow-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></button></th><th scope="col">Status</th></tr></thead>
    <tbody>
      <tr><td><a class="sb-table-link" href="#/table">KLM-0241</a></td><td>Budi Santoso</td><td>RS Medika Utama</td><td data-num data-value="20261002">2 Okt 2026</td><td data-num data-value="12450000">Rp 12.450.000</td><td><span class="sb-badge" data-size="sm" data-color="success">Disetujui: Sembuh</span></td></tr>
      <tr><td><a class="sb-table-link" href="#/table">KLM-0238</a></td><td>Siti Rahma</td><td>RS Harapan Kita</td><td data-num data-value="20261001">1 Okt 2026</td><td data-num data-value="3275000">Rp 3.275.000</td><td><span class="sb-badge" data-size="sm" data-color="blue">Sedang Ditinjau</span></td></tr>
      <tr><td><a class="sb-table-link" href="#/table">KLM-0236</a></td><td>Andi Wijaya</td><td>Klinik Sehat Sentosa</td><td data-num data-value="20260930">30 Sep 2026</td><td data-num data-value="875000">Rp 875.000</td><td><span class="sb-badge" data-size="sm" data-color="error">Ditolak</span></td></tr>
      <tr><td><a class="sb-table-link" href="#/table">KLM-0233</a></td><td>Maya Putri</td><td>RS Medika Utama</td><td data-num data-value="20260929">29 Sep 2026</td><td data-num data-value="21980000">Rp 21.980.000</td><td><span class="sb-badge" data-size="sm" data-color="orange">Perlu Revisi</span></td></tr>
      <tr><td><a class="sb-table-link" href="#/table">KLM-0230</a></td><td>Rizky Pratama</td><td>RS Bunda</td><td data-num data-value="20260928">28 Sep 2026</td><td data-num data-value="4610000">Rp 4.610.000</td><td><span class="sb-badge" data-size="sm" data-color="success">Disetujui: TPA</span></td></tr>
    </tbody>
  </table>
</div>
<div class="sb-table-foot">
  <span>Menampilkan 1–5 dari 128 klaim</span>
  <div class="sb-btn-group" role="group" aria-label="Navigasi halaman" data-icon="only">
    <button type="button" aria-label="Halaman sebelumnya" disabled><svg aria-hidden="true"><!-- chevron-left --></svg></button>
    <button type="button" aria-label="Halaman berikutnya"><svg aria-hidden="true"><!-- chevron-right --></svg></button>
  </div>
</div>
```

### With selection

A first column of Checkboxes sm. The header box selects all and turns indeterminate when only some rows are chosen. Selected rows are `brand-50`. Bulk actions appear above the table when something is selected.

### Grouped

For invoices, FWA findings and benefits. A group row (chevron, number, name, total) folds its item rows; items are indented 32 on `gray-50`; the total row is `gray-100` with radius 8. Flagged items are `error-50` with `error-700` text, items to review `warning-50`.

### Amount and missing values

Converted currencies sit under the Rupiah amount in Text xs `gray-500`, separated by " | ". A value that does not exist yet is a `gray-400` "—" with an `aria-label`.

```html
<div class="sb-table-wrap">
  <table class="sb-table">
    <thead><tr><th scope="col">Item</th><th scope="col" data-num>Tagihan</th></tr></thead>
    <tbody>
      <tr><td>Rawat jalan, Singapura</td><td data-num>Rp 1.725.000<span class="sb-table-sub">SGD 145 | USD 108</span></td></tr>
      <tr><td>Kacamata</td><td data-num><span class="sb-table-empty" aria-label="Belum ada">—</span></td></tr>
    </tbody>
  </table>
</div>
```

## States

### Rows

| State | Fill | Text |
| --- | --- | --- |
| Default | `white` | `gray-900` |
| Hover | `gray-50` | `gray-900` |
| Selected | `brand-50` | `gray-900` |
| Flagged (`data-tone="error"`) | `error-50` | `error-700` |
| Review (`data-tone="warning"`) | `warning-50` | `gray-900` |

### Empty

Keep the header, so people see what would be there, and put the Card empty state in one full-width cell.

### Wide tables

The table scrolls sideways inside its card. With `data-sticky` the first column (usually the ID) stays put, with a 1 px `gray-200` edge.

## Do and don't

**Do:** Amounts right-aligned with tabular figures, in full Rupiah.

```html
<table class="sb-table" data-size="sm"><thead><tr><th scope="col">Item</th><th scope="col" data-num>Tagihan</th></tr></thead><tbody><tr><td>Kamar</td><td data-num>Rp 4.500.000</td></tr><tr><td>Obat</td><td data-num>Rp 875.000</td></tr></tbody></table>
```

**Don't:** Left-aligned, abbreviated amounts. Digits do not line up and the exact value is lost.

```html
<table class="sb-table" data-size="sm"><thead><tr><th scope="col">Item</th><th scope="col">Tagihan</th></tr></thead><tbody><tr><td>Kamar</td><td>Rp 4,5 jt</td></tr><tr><td>Obat</td><td>Rp 875 rb</td></tr></tbody></table>
```

**Do:** Status as a pill.

```html
<table class="sb-table" data-size="sm"><thead><tr><th scope="col">ID Klaim</th><th scope="col">Status</th></tr></thead><tbody><tr><td>KLM-0241</td><td><span class="sb-badge" data-size="sm" data-color="success">Disetujui: Sembuh</span></td></tr><tr><td>KLM-0236</td><td><span class="sb-badge" data-size="sm" data-color="error">Ditolak</span></td></tr></tbody></table>
```

**Don't:** Status as coloured text: weak contrast and unlike every other screen.

```html
<table class="sb-table" data-size="sm"><thead><tr><th scope="col">ID Klaim</th><th scope="col">Status</th></tr></thead><tbody><tr><td>KLM-0241</td><td style="color: var(--success-600)">Disetujui: Sembuh</td></tr><tr><td>KLM-0236</td><td style="color: var(--error-600)">Ditolak</td></tr></tbody></table>
```

**Do:** A dash where a value is missing.

```html
<table class="sb-table" data-size="sm"><thead><tr><th scope="col">Peserta</th><th scope="col" data-num>Klaim</th></tr></thead><tbody><tr><td>Budi Santoso</td><td data-num>3</td></tr><tr><td>Siti Rahma</td><td data-num><span class="sb-table-empty" aria-label="Belum ada">—</span></td></tr></tbody></table>
```

**Don't:** A blank cell. It reads as "still loading" or "broken".

```html
<table class="sb-table" data-size="sm"><thead><tr><th scope="col">Peserta</th><th scope="col" data-num>Klaim</th></tr></thead><tbody><tr><td>Budi Santoso</td><td data-num>3</td></tr><tr><td>Siti Rahma</td><td data-num></td></tr></tbody></table>
```

## Accessibility

- A real `<table>` with `<th scope="col">` headers (and `scope="row"` where a row has a label cell), never a grid of `<div>`s.
- Sortable headers are `<button>`s inside the `th`; the `th` carries `aria-sort="ascending"` or `"descending"`, so screen readers announce the order.
- Selection checkboxes each have an `aria-label` naming the row ("Pilih KLM-0241"); the header box says "Pilih semua klaim".
- Flagged rows also say why in the row (a pill or the text), not only with the tint.
- The group chevron is a `<button>` with `aria-expanded` and a label ("Rincian Obat").

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Header `gray-500` | `gray-50` | 4.76:1 | Passes |
| Cell `gray-900` | `white` / `gray-50` / `brand-50` | 17.75:1 / 16.98:1 / 16.33:1 | Passes |
| ID link `brand-700` | `white` | 6.61:1 | Passes |
| Flagged `error-700` | `error-50` | 6.05:1 | Passes |

## Code

Load `tokens.css`, `badge.css` and `checkbox.css` for the parts inside, then `table.css`. Add `table.js` for sorting and groups, and `checkbox-select-all.js` for selection.

`table.css`

```css
/* Table, Codemasters Design System
   Needs tokens.css; badge.css for status pills, checkbox.css for row selection; table.js for sorting and groups.

   <div class="sb-table-wrap">
     <table class="sb-table">
       <thead><tr><th scope="col">ID Klaim</th>…<th scope="col" data-num>Tagihan</th></tr></thead>
       <tbody><tr><td><a class="sb-table-link" href="…">KLM-0241</a></td>…<td data-num>Rp 12.450.000</td></tr></tbody>
     </table>
   </div>

   data-size     sm  (compact rows; omit for md)
   data-sticky   on the table: the first column stays while the table scrolls sideways
   data-num      on th and td: right-aligned, tabular figures (amounts, counts, dates)
   aria-sort     on a sortable th: ascending | descending (one column at a time)
   data-tone     on a body row: error (flagged) | warning (needs review)
   data-group / data-child / tfoot   grouped table rows */

.sb-table-wrap { overflow-x: auto; max-width: 100%; }
.sb-table {
  --cell-py: 16px; --cell-px: 16px;
  width: 100%; border-collapse: separate; border-spacing: 0;
  font: 400 var(--text-sm) var(--font); color: var(--gray-700);
}
.sb-table[data-size="sm"] { --cell-py: 10px; --cell-px: 12px; }
.sb-table :is(th, td) { padding: var(--cell-py) var(--cell-px); text-align: start; vertical-align: middle; white-space: nowrap; background: var(--row-bg, var(--white)); }

/* Header: a gray-50 band with rounded ends; Text sm Regular gray-500. */
.sb-table thead th { --row-bg: var(--gray-50); padding-block: 12px; font-weight: 400; color: var(--gray-500); }
.sb-table[data-size="sm"] thead th { padding-block: 8px; }
.sb-table thead th:first-child { border-radius: var(--radius-md) 0 0 var(--radius-md); }
.sb-table thead th:last-child { border-radius: 0 var(--radius-md) var(--radius-md) 0; }

/* Body: gray-200 row dividers, gray-50 on hover, brand-50 when selected. */
.sb-table tbody td { border-bottom: 1px solid var(--gray-200); color: var(--gray-900); }
.sb-table tbody tr { transition: background-color 150ms var(--ease); }
.sb-table tbody tr[data-child] { --row-bg: var(--gray-50); } /* grouped items; tones below still win */
.sb-table tbody tr:is(:hover, [data-state="hover"]) { --row-bg: var(--gray-50); }
.sb-table tbody tr:has(.sb-check-input:checked) { --row-bg: var(--brand-50); }
.sb-table tbody tr[data-tone="error"] { --row-bg: var(--error-50); }
.sb-table tbody tr[data-tone="error"] td { color: var(--error-700); }
.sb-table tbody tr[data-tone="warning"] { --row-bg: var(--warning-50); }

/* Cells */
.sb-table [data-num] { text-align: end; font-variant-numeric: tabular-nums; }
.sb-table-link { color: var(--brand-700); font-weight: 500; text-decoration: underline; text-underline-offset: 2px; text-decoration-thickness: from-font; }
.sb-table-link:hover { color: var(--brand-800); }
.sb-table-link:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; border-radius: var(--radius-sm); }
.sb-table-sub { display: block; font-size: var(--text-xs); line-height: 18px; color: var(--gray-500); } /* second line: converted currency, email */
.sb-table-empty { color: var(--gray-400); } /* "—" when a value is missing; never a blank cell */
.sb-table .sb-check { vertical-align: middle; }
.sb-table th:has(> .sb-check), .sb-table td:has(> .sb-check) { width: 16px; padding-inline-end: 0; }

/* Sortable header: the whole label is the button. Idle shows the two-way arrow in gray-400; sorted shows the direction in brand-600. */
.sb-table-sort {
  display: inline-flex; align-items: center; gap: 4px; margin: 0; padding: 0; border: 0; border-radius: var(--radius-sm);
  background: none; font: inherit; color: inherit; cursor: pointer;
}
[data-num] > .sb-table-sort { flex-direction: row-reverse; }
.sb-table-sort:hover { color: var(--gray-700); }
.sb-table-sort:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-table-sort > svg { width: 16px; height: 16px; flex: none; color: var(--gray-400); }
th:not([aria-sort]) .sb-table-sort > .is-dir, th[aria-sort] .sb-table-sort > .is-idle { display: none; }
th[aria-sort] .sb-table-sort { color: var(--gray-700); }
th[aria-sort] .sb-table-sort > .is-dir { color: var(--brand-600); }
th[aria-sort="ascending"] .sb-table-sort > .is-dir { rotate: 180deg; }

/* Sticky first column, for wide tables. The cell keeps its row's background so nothing shows through. */
.sb-table[data-sticky] :is(th, td):first-child { position: sticky; left: 0; z-index: 1; }
.sb-table[data-sticky] tbody td:first-child { box-shadow: inset -1px 0 var(--gray-200); }

/* Grouped table: group row (chevron, number, name, total), item rows indented on gray-50, gray-100 total row. */
.sb-table tbody tr[data-group] td { font-weight: 600; color: var(--gray-900); }
.sb-table tbody tr[data-child] td:first-child { padding-inline-start: calc(var(--cell-px) + 32px); }
.sb-table tbody tr[data-child][hidden] { display: none; }
.sb-table-fold { display: inline-grid; place-items: center; width: 24px; height: 24px; margin: -4px 8px -4px -4px; padding: 0; border: 0; border-radius: var(--radius-sm); background: none; color: var(--gray-500); cursor: pointer; vertical-align: middle; }
.sb-table-fold:hover { background: var(--gray-100); color: var(--gray-700); }
.sb-table-fold:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 0; }
.sb-table-fold > svg { width: 16px; height: 16px; transition: rotate 150ms var(--ease); }
.sb-table-fold[aria-expanded="true"] > svg { rotate: 90deg; }
.sb-table tfoot td { --row-bg: var(--gray-100); font-weight: 600; color: var(--gray-900); }
.sb-table tfoot td:first-child { border-radius: var(--radius-md) 0 0 var(--radius-md); }
.sb-table tfoot td:last-child { border-radius: 0 var(--radius-md) var(--radius-md) 0; }

/* Footer: count on the left, page buttons on the right. */
.sb-table-foot { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding-top: 16px; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }

@media (prefers-reduced-motion: reduce) {
  .sb-table tbody tr, .sb-table-fold > svg { transition: none; }
}
```

### Sort and group script

`table.js`

```js
// Table: sortable headers and foldable groups.
function tableSort(e) {
  const btn = e.target.closest?.('.sb-table-sort');
  if (!btn) return;
  const th = btn.closest('th'), table = th.closest('table'), col = th.cellIndex;
  const dir = th.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
  for (const h of table.tHead.rows[0].cells) h.removeAttribute('aria-sort');
  th.setAttribute('aria-sort', dir);
  const val = r => r.cells[col].dataset.value ?? r.cells[col].textContent.trim();
  const body = table.tBodies[0];
  const rows = [...body.rows].sort((a, b) => {
    const x = val(a), y = val(b), n = x - y;
    return (Number.isNaN(n) ? x.localeCompare(y, 'id') : n) * (dir === 'ascending' ? 1 : -1);
  });
  body.append(...rows);
}
function tableGroup(e) {
  const btn = e.target.closest?.('.sb-table-fold');
  if (!btn) return;
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', String(open));
  for (const row of btn.closest('tbody').querySelectorAll('tr[data-child]')) row.hidden = !open;
}
document.addEventListener('click', tableSort);
document.addEventListener('click', tableGroup);
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f2f4f7;
  --gray-200: #eaecf0;
  --gray-400: #98a2b3;
  --gray-500: #667085;
  --gray-700: #344054;
  --gray-900: #101828;
  --brand-50: #f0f6fe;
  --brand-600: #3966e0;
  --brand-700: #2e51cd;
  --brand-800: #2942a7;
  --error-50: #fef3f2;
  --error-700: #b42318;
  --warning-50: #fffaeb;
  --radius-sm: 4px;
  --radius-md: 8px;
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
}
```

---
name: Filter bar
slug: filter-bar
category: Components
status: In progress
version: 1.0.0
updated: 2026-10-14
requires: tokens.css
---

# Filter bar

The controls above a list that narrow it down: status tabs with counts, search, filter menus, a period and the active filters as chips. Filters apply as soon as they change. On narrow screens the filters move into a sheet.

## Usage

- Use a filter bar above a list people narrow down often: claims, invoices, members. It sits in the list's Card, between the head and the table, with Pagination under the table.
- Status goes in tabs (Button group) with a count on each, because people switch status more than anything else. Keep it to five tabs or fewer, "Semua" first.
- Search finds a record by what people know: ID, name. It matches as they type.
- Other filters are menus with checkboxes, so one filter can take several values. The period is a Date picker range with quick ranges.
- Filters apply as they change, with no Terapkan button. Debounce server requests for search by about 300 ms.
- Every active filter shows as a chip under the controls, so people see why rows are missing. A chip's × removes it; "Hapus semua" clears the menus and the period.
- Keep the filters in the URL, so a filtered list can be shared and survives a reload.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Status tabs | Button group switch, 32 high. Each segment ends with a Badge sm count, white on the pressed segment. |
| 2 | Search | Input field with the search icon, 32 high. 320 wide and right-aligned when the bar is 640 or wider; below that it fills the rest of the status row, or a row of its own. |
| 3 | Period | Date picker range with quick ranges, 264 wide, empty for "Semua tanggal". |
| 4 | Filter menu | Button, Outline, with a chevron; opens a Dropdown menu of checkbox items. A Badge sm primary counts the picks. |
| 5 | Chips | Badge md with ×, on their own row. The period first, then each picked value. |
| 6 | Clear | Button, Link, "Hapus semua". Shows only with chips. |

Rows 16 apart (12 between the controls and the chips); 12 between controls, 8 between chips.

## Properties

| Part | Code |
| --- | --- |
| Status | `.sb-filter-status` Button group, `role="radiogroup"`; `data-value` on each radio (`""` for Semua) |
| Search | `.sb-filter-search` Input field with `<input type="search">` |
| Filter menu | `.sb-menu-wrap[data-filter="key"]`; `menuitemcheckbox` items with `data-value`; `.sb-filter-n` badge in the trigger |
| Period | `.sb-dp[data-type="range"][data-presets]`; `data-start` / `data-end` when set |
| Narrow sheet | `.sb-filter-more` with `popovertarget`; `.sb-filter-sheet[popover]` holds the period and the menus |
| Chips | `.sb-filter-chips` with `ul.sb-filter-chip-list` (drawn by the script) and `[data-filter-clear]` |
| Event | `sb-filter-change` on `.sb-filter`, `detail = { status, q, filters: { key: [values] }, start, end }` |

## Types

### Full

Status, search, period and menus, for the main list of a module.

### Narrow

Under 480 wide (the bar's own width, not the screen's), status takes its own row and scrolls sideways if needed. Search shares a row with a Filter button that counts the active filters. The period and the menus open in a bottom sheet; the chips stay on the page.

## States

### No filters

No chips and no "Hapus semua"; the period field shows "Semua tanggal".

### Active filters

Each menu trigger counts its picks and every value has a chip.

### No results

The table keeps its header and says so in one full-width cell. The chips stay, so the way back is one click away.

## Do and don't

**Do:** Every active filter shows as a chip.

```html
<div class="sb-filter" inert role="group" aria-label="Filter klaim">
  <div class="sb-filter-top">
    <div class="sb-btn-group sb-filter-status" role="radiogroup" aria-label="Status klaim">
      <button type="button" role="radio" aria-checked="true" tabindex="0" data-value="">Semua <span class="sb-badge" data-size="sm">2</span></button>
      <button type="button" role="radio" aria-checked="false" tabindex="-1" data-value="review">Ditinjau <span class="sb-badge" data-size="sm">0</span></button>
      <button type="button" role="radio" aria-checked="false" tabindex="-1" data-value="approved">Disetujui <span class="sb-badge" data-size="sm">2</span></button>
      <button type="button" role="radio" aria-checked="false" tabindex="-1" data-value="rejected">Ditolak <span class="sb-badge" data-size="sm">0</span></button>
    </div>
    <div class="sb-input sb-filter-search"><svg aria-hidden="true"><!-- search --></svg><input type="search" placeholder="Cari ID klaim atau peserta" aria-label="Cari klaim" value=""></div>
    <button class="sb-btn sb-filter-more" type="button" data-variant="outline" popovertarget="fb-7-sheet"><svg aria-hidden="true"><!-- filter-lines --></svg>Filter<span class="sb-badge" data-size="sm" data-color="primary">2</span></button>
  </div>
  <div class="sb-filter-row">
    <div class="sb-filter-sheet" id="fb-7-sheet" popover aria-label="Filter">
      <div class="sb-filter-sheet-head"><p class="sb-filter-sheet-title">Filter</p><button class="sb-btn" type="button" data-variant="ghost" data-size="icon-sm" aria-label="Tutup" popovertarget="fb-7-sheet" popovertargetaction="hide"><svg aria-hidden="true"><!-- x --></svg></button></div>
      <div class="sb-dp" data-type="range" data-start="2026-09-15" data-end="2026-10-14" data-today="2026-10-14" data-presets>
        <div class="sb-input">
          <button class="sb-dp-toggle" type="button" aria-label="Pilih periode" aria-haspopup="dialog" aria-expanded="false" aria-controls="fb-7-cal"><svg aria-hidden="true"><!-- calendar --></svg></button>
          <input type="text" inputmode="numeric" placeholder="Semua tanggal" aria-label="Periode" value="15/09/2026 – 14/10/2026" autocomplete="off">
        </div>
        <div class="sb-dp-panel" id="fb-7-cal" role="dialog" aria-label="Pilih periode" hidden></div>
      </div>
    <div class="sb-menu-wrap" data-filter="rs">
      <button class="sb-btn" type="button" data-variant="outline" aria-haspopup="menu" aria-expanded="false" aria-controls="fb-7-rs">Rumah sakit<span class="sb-badge sb-filter-n" data-size="sm" data-color="primary">1</span><svg class="sb-btn-chevron" aria-hidden="true"><!-- chevron-down --></svg></button>
      <div class="sb-menu" id="fb-7-rs" role="menu" aria-label="Rumah sakit" hidden>
        <div class="sb-menu-group" role="group">
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false" data-value="RS Medika Utama"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">RS Medika Utama</span></button>
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false" data-value="RS Harapan Kita"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">RS Harapan Kita</span></button>
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="true" data-value="RS Bunda"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">RS Bunda</span></button>
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false" data-value="Klinik Sehat Sentosa"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Klinik Sehat Sentosa</span></button>
        </div>
      </div>
    </div>
    <div class="sb-menu-wrap" data-filter="svc">
      <button class="sb-btn" type="button" data-variant="outline" aria-haspopup="menu" aria-expanded="false" aria-controls="fb-7-svc">Layanan<span class="sb-badge sb-filter-n" data-size="sm" data-color="primary" hidden>0</span><svg class="sb-btn-chevron" aria-hidden="true"><!-- chevron-down --></svg></button>
      <div class="sb-menu" id="fb-7-svc" role="menu" aria-label="Layanan" hidden>
        <div class="sb-menu-group" role="group">
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false" data-value="Rawat inap"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Rawat inap</span></button>
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false" data-value="Rawat jalan"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Rawat jalan</span></button>
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false" data-value="Gigi"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Gigi</span></button>
        </div>
      </div>
    </div>
      <div class="sb-filter-sheet-foot"><button class="sb-btn" type="button" data-variant="outline" data-filter-clear>Hapus semua</button><button class="sb-btn" type="button" popovertarget="fb-7-sheet" popovertargetaction="hide">Lihat hasil</button></div>
    </div>
    <div class="sb-filter-chips">
      <ul class="sb-filter-chip-list" aria-label="Filter aktif"><li><span class="sb-badge" data-size="md" data-icon="x-close">15 Sep 2026 – 14 Okt 2026<button class="sb-badge-x" type="button" data-remove="date" data-value="" aria-label="Hapus filter 15 Sep 2026 – 14 Okt 2026"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li><li><span class="sb-badge" data-size="md" data-icon="x-close">RS Bunda<button class="sb-badge-x" type="button" data-remove="rs" data-value="RS Bunda" aria-label="Hapus filter RS Bunda"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li></ul>
      <button class="sb-btn" type="button" data-variant="link" data-size="sm" data-filter-clear>Hapus semua</button>
    </div>
  </div>
</div>
```

**Don't:** Filters only inside their menus. Rows go missing and nothing on the page says why.

```html
<div class="sb-filter" inert role="group" aria-label="Filter klaim">
  <div class="sb-filter-top">
    <div class="sb-btn-group sb-filter-status" role="radiogroup" aria-label="Status klaim">
      <button type="button" role="radio" aria-checked="true" tabindex="0" data-value="">Semua <span class="sb-badge" data-size="sm">2</span></button>
      <button type="button" role="radio" aria-checked="false" tabindex="-1" data-value="review">Ditinjau <span class="sb-badge" data-size="sm">0</span></button>
      <button type="button" role="radio" aria-checked="false" tabindex="-1" data-value="approved">Disetujui <span class="sb-badge" data-size="sm">2</span></button>
      <button type="button" role="radio" aria-checked="false" tabindex="-1" data-value="rejected">Ditolak <span class="sb-badge" data-size="sm">0</span></button>
    </div>
    <div class="sb-input sb-filter-search"><svg aria-hidden="true"><!-- search --></svg><input type="search" placeholder="Cari ID klaim atau peserta" aria-label="Cari klaim" value=""></div>
    <button class="sb-btn sb-filter-more" type="button" data-variant="outline" popovertarget="fb-8-sheet"><svg aria-hidden="true"><!-- filter-lines --></svg>Filter<span class="sb-badge" data-size="sm" data-color="primary">2</span></button>
  </div>
  <div class="sb-filter-row">
    <div class="sb-filter-sheet" id="fb-8-sheet" popover aria-label="Filter">
      <div class="sb-filter-sheet-head"><p class="sb-filter-sheet-title">Filter</p><button class="sb-btn" type="button" data-variant="ghost" data-size="icon-sm" aria-label="Tutup" popovertarget="fb-8-sheet" popovertargetaction="hide"><svg aria-hidden="true"><!-- x --></svg></button></div>
      <div class="sb-dp" data-type="range" data-start="2026-09-15" data-end="2026-10-14" data-today="2026-10-14" data-presets>
        <div class="sb-input">
          <button class="sb-dp-toggle" type="button" aria-label="Pilih periode" aria-haspopup="dialog" aria-expanded="false" aria-controls="fb-8-cal"><svg aria-hidden="true"><!-- calendar --></svg></button>
          <input type="text" inputmode="numeric" placeholder="Semua tanggal" aria-label="Periode" value="15/09/2026 – 14/10/2026" autocomplete="off">
        </div>
        <div class="sb-dp-panel" id="fb-8-cal" role="dialog" aria-label="Pilih periode" hidden></div>
      </div>
    <div class="sb-menu-wrap" data-filter="rs">
      <button class="sb-btn" type="button" data-variant="outline" aria-haspopup="menu" aria-expanded="false" aria-controls="fb-8-rs">Rumah sakit<span class="sb-badge sb-filter-n" data-size="sm" data-color="primary">1</span><svg class="sb-btn-chevron" aria-hidden="true"><!-- chevron-down --></svg></button>
      <div class="sb-menu" id="fb-8-rs" role="menu" aria-label="Rumah sakit" hidden>
        <div class="sb-menu-group" role="group">
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false" data-value="RS Medika Utama"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">RS Medika Utama</span></button>
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false" data-value="RS Harapan Kita"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">RS Harapan Kita</span></button>
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="true" data-value="RS Bunda"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">RS Bunda</span></button>
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false" data-value="Klinik Sehat Sentosa"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Klinik Sehat Sentosa</span></button>
        </div>
      </div>
    </div>
    <div class="sb-menu-wrap" data-filter="svc">
      <button class="sb-btn" type="button" data-variant="outline" aria-haspopup="menu" aria-expanded="false" aria-controls="fb-8-svc">Layanan<span class="sb-badge sb-filter-n" data-size="sm" data-color="primary" hidden>0</span><svg class="sb-btn-chevron" aria-hidden="true"><!-- chevron-down --></svg></button>
      <div class="sb-menu" id="fb-8-svc" role="menu" aria-label="Layanan" hidden>
        <div class="sb-menu-group" role="group">
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false" data-value="Rawat inap"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Rawat inap</span></button>
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false" data-value="Rawat jalan"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Rawat jalan</span></button>
          <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false" data-value="Gigi"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Gigi</span></button>
        </div>
      </div>
    </div>
      <div class="sb-filter-sheet-foot"><button class="sb-btn" type="button" data-variant="outline" data-filter-clear>Hapus semua</button><button class="sb-btn" type="button" popovertarget="fb-8-sheet" popovertargetaction="hide">Lihat hasil</button></div>
    </div>
    <div class="sb-filter-chips" hidden>
      <ul class="sb-filter-chip-list" aria-label="Filter aktif"><li><span class="sb-badge" data-size="md" data-icon="x-close">15 Sep 2026 – 14 Okt 2026<button class="sb-badge-x" type="button" data-remove="date" data-value="" aria-label="Hapus filter 15 Sep 2026 – 14 Okt 2026"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li><li><span class="sb-badge" data-size="md" data-icon="x-close">RS Bunda<button class="sb-badge-x" type="button" data-remove="rs" data-value="RS Bunda" aria-label="Hapus filter RS Bunda"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li></ul>
      <button class="sb-btn" type="button" data-variant="link" data-size="sm" data-filter-clear>Hapus semua</button>
    </div>
  </div>
</div>
```

- Don't repeat the status tabs as a Status menu: two controls for one field disagree.
- Don't add a Terapkan button to the bar. Filters apply as they change; only the date range confirms, inside its calendar.

## Accessibility

- The bar is a `role="group"` named for the list ("Filter klaim"). The status tabs are a radiogroup: one Tab stop, ← → move.
- Search has an `aria-label`, since the placeholder disappears as people type.
- Menu triggers say their count in their name ("Rumah sakit 2"); each chip's × says what it removes ("Hapus filter RS Bunda").
- Removing a chip moves focus to the next chip, or to the search when none are left, so keyboard users never land on nothing.
- The sheet is a popover: Esc and a tap on the scrim close it, and focus returns to the Filter button.
- Announce the result count near the list (for example the Pagination range, which is `aria-live`).

## Code

Load `tokens.css`, the CSS of the parts (Button, Button group, Badge, Input field, Dropdown menu, Date picker), then `filter-bar.css`. Scripts: `dropdown-menu.js`, `date-picker.js`, then `filter-bar.js`.

`filter-bar.css`

```css
/* Filter bar, Codemasters Design System
   Needs tokens.css, button.css, button-group.css, badge.css, input-field.css, dropdown-menu.css + .js and
   date-picker.css + .js; filter-bar.js keeps the chips and counts in step and fires "sb-filter-change".

   <div class="sb-filter" role="group" aria-label="Filter klaim">
     <div class="sb-filter-top">
       <div class="sb-btn-group sb-filter-status" role="radiogroup" aria-label="Status klaim">
         <button type="button" role="radio" aria-checked="true" tabindex="0" data-value="">Semua <span class="sb-badge" data-size="sm">10</span></button>…
       </div>
       <div class="sb-input sb-filter-search"><svg…search…/><input type="search" placeholder="Cari ID klaim atau peserta" aria-label="Cari klaim"></div>
       <button class="sb-btn sb-filter-more" … popovertarget="klaim-filter">Filter <span class="sb-badge" data-size="sm" data-color="primary">1</span></button>
     </div>
     <div class="sb-filter-row">
       <div class="sb-filter-sheet" id="klaim-filter" popover>
         <div class="sb-filter-sheet-head">…title, close…</div>
         <div class="sb-dp" data-type="range" data-presets data-start="…" data-end="…">…Date picker…</div>
         <div class="sb-menu-wrap" data-filter="rs">…Dropdown menu with checkbox items, each with data-value; trigger holds .sb-filter-n…</div>
         <div class="sb-filter-sheet-foot">…Hapus semua, Lihat hasil…</div>
       </div>
       <div class="sb-filter-chips"><ul class="sb-filter-chip-list" aria-label="Filter aktif">…</ul><button … data-filter-clear>Hapus semua</button></div>
     </div>
   </div>

   Wide (480 and up): status and search, then the period and the menus, then the chips.
   Narrow: status on its own row, search with a Filter button; the period and the menus move into a bottom sheet
   (the popover). The chips stay on the page. */

.sb-filter { container-type: inline-size; display: grid; gap: 16px; min-width: 0; }
.sb-filter > * { min-width: 0; } /* the status row scrolls instead of widening the bar */
.sb-filter-top { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.sb-filter-row { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }

/* Every control in the bar is 32 high, like every Button, field and Button group. */
.sb-filter-status { flex: none; max-width: 100%; overflow-x: auto; scrollbar-width: none; }
.sb-filter-status > button > .sb-badge { font-variant-numeric: tabular-nums; }
.sb-filter-status > [aria-checked="true"] > .sb-badge { --bdg-bg: var(--bg-primary); } /* the pressed segment is gray-100 too */
.sb-filter-search { flex: 1 1 200px; } /* fills the rest of the status row, or a row of its own when it wraps */
.sb-filter .sb-dp { width: 264px; }
.sb-filter .sb-menu { inset-inline: 0 auto; } /* menus open from the trigger's start edge, like the calendar */
.sb-filter :is(.sb-filter-n, .sb-filter-more .sb-badge)[hidden] { display: none; }
.sb-filter-more { display: none; }

/* Wide: the sheet is only the row of filters, so the popover's own box is undone. */
.sb-filter-sheet {
  position: static; inset: auto; display: flex; flex-wrap: wrap; align-items: center; gap: 12px;
  width: auto; height: auto; margin: 0; padding: 0; overflow: visible;
  border: 0; background: none; color: inherit;
}
.sb-filter-sheet-head, .sb-filter-sheet-foot { display: none; }

/* Active filters: Badge md with ×, on their own row under the controls. "Hapus semua" ends the row. */
.sb-filter-chips { display: flex; flex: 1 1 100%; flex-wrap: wrap; align-items: center; gap: 8px; }
.sb-filter-chips[hidden] { display: none; }
.sb-filter-chip-list { display: contents; margin: 0; padding: 0; list-style: none; }
.sb-filter-chip-list > li { display: flex; }

@container (min-width: 640px) {
  .sb-filter-search { flex-grow: 0; flex-basis: 320px; margin-inline-start: auto; } /* room for both: 320, right-aligned */
}
@container (max-width: 479px) {
  .sb-filter-search { min-width: 0; }
  .sb-filter-more { display: inline-flex; }
  .sb-filter-sheet:not(:popover-open) { display: none; }
}

/* Narrow, open: a bottom sheet over the scrim, the controls full width and their panels in flow. */
.sb-filter-sheet:popover-open {
  position: fixed; inset: auto 0 0; display: grid; align-content: start; gap: 16px;
  box-sizing: border-box; width: min(100%, 480px); max-height: 85dvh; margin: auto auto 0; padding: 0 16px;
  overflow-y: auto; overscroll-behavior: contain;
  background: var(--bg-primary); border-radius: var(--radius-xl) var(--radius-xl) 0 0; box-shadow: var(--shadow-xl);
  transition-property: translate, opacity; transition-duration: 200ms; transition-timing-function: var(--ease);
}
@starting-style {
  .sb-filter-sheet:popover-open { translate: 0 24px; opacity: 0; }
}
.sb-filter-sheet::backdrop { background: var(--scrim); }
.sb-filter-sheet:popover-open > :is(.sb-filter-sheet-head, .sb-filter-sheet-foot) {
  position: sticky; z-index: 1; display: flex; align-items: center; gap: 12px; background: var(--bg-primary);
}
.sb-filter-sheet:popover-open > .sb-filter-sheet-head { top: 0; justify-content: space-between; padding-top: 16px; }
.sb-filter-sheet-title { margin: 0; font: 600 var(--text-lg) var(--font); color: var(--text-primary); }
.sb-filter-sheet:popover-open > .sb-filter-sheet-foot { bottom: 0; padding-block: 16px; border-top: 1px solid var(--border-secondary); }
.sb-filter-sheet-foot > .sb-btn { flex: 1; }
.sb-filter-sheet:popover-open > :is(.sb-dp, .sb-menu-wrap) { display: grid; width: 100%; }
.sb-filter-sheet:popover-open > .sb-menu-wrap > .sb-btn { justify-content: flex-start; }
.sb-filter-sheet:popover-open > .sb-menu-wrap > .sb-btn > .sb-btn-chevron { margin-inline-start: auto; }
.sb-filter-sheet:popover-open :is(.sb-menu, .sb-dp-panel) { position: static; min-width: 0; width: auto; margin-top: 8px; box-shadow: none; translate: none; }
.sb-filter-sheet:popover-open .sb-dp-panel { flex-direction: column; }
.sb-filter-sheet:popover-open .sb-dp-presets { display: flex; flex-wrap: wrap; width: auto; border-inline-end: 0; border-bottom: 1px solid var(--border-secondary); }
.sb-filter-sheet:popover-open .sb-dp-months { flex-direction: column; }
.sb-filter-sheet:popover-open .sb-dp-month + .sb-dp-month { border-inline-start: 0; border-top: 1px solid var(--border-secondary); }

@media (prefers-reduced-motion: reduce) {
  .sb-filter-sheet:popover-open { transition: none; }
}
```

### Filter script

`filter-bar.js`

```js
// Filter bar: keeps the chips, the menu counts and the narrow Filter button's count in step with the controls, and
// fires "sb-filter-change" with { status, q, filters, start, end } on every change: filter or load the list then.
// Status tabs move with ← →; a chip's × removes that filter; "Hapus semua" clears the menus and the period.
// Needs dropdown-menu.js and date-picker.js for the controls. Load this file after them.
const fbEsc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const fbDay = s => new Date(`${s}T00:00:00Z`).toLocaleDateString('id-ID', { timeZone: 'UTC', day: 'numeric', month: 'short', year: 'numeric' });
const fbChip = (key, value, label) => `<li><span class="sb-badge" data-size="md" data-icon="x-close">${fbEsc(label)}<button class="sb-badge-x" type="button" data-remove="${key}" data-value="${fbEsc(value)}" aria-label="Hapus filter ${fbEsc(label)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li>`;
function fbState(bar) {
  const dp = bar.querySelector('.sb-dp'), filters = {};
  for (const w of bar.querySelectorAll('.sb-menu-wrap[data-filter]')) filters[w.dataset.filter] = [...w.querySelectorAll('[aria-checked="true"]')].map(i => i.dataset.value);
  return {
    status: bar.querySelector('.sb-filter-status [aria-checked="true"]')?.dataset.value || '',
    q: bar.querySelector('.sb-filter-search input')?.value.trim() || '',
    filters,
    start: dp?.dataset.start || '',
    end: dp?.dataset.end || '',
  };
}
function fbRender(bar) {
  const st = fbState(bar), chips = [];
  if (st.start) chips.push(fbChip('date', '', `${fbDay(st.start)} – ${fbDay(st.end)}`));
  for (const w of bar.querySelectorAll('.sb-menu-wrap[data-filter]')) {
    const on = [...w.querySelectorAll('[aria-checked="true"]')], n = w.querySelector('.sb-filter-n');
    if (n) { n.textContent = on.length; n.hidden = !on.length; }
    for (const i of on) chips.push(fbChip(w.dataset.filter, i.dataset.value, i.querySelector('.sb-menu-label').textContent));
  }
  bar.querySelector('.sb-filter-chip-list').innerHTML = chips.join('');
  bar.querySelector('.sb-filter-chips').hidden = !chips.length;
  const more = bar.querySelector('.sb-filter-more .sb-badge');
  if (more) { more.textContent = chips.length; more.hidden = !chips.length; }
  return st;
}
function fbChange(bar) {
  bar.dispatchEvent(new CustomEvent('sb-filter-change', { bubbles: true, detail: fbRender(bar) }));
}
function fbSelect(seg) {
  for (const b of seg.parentElement.children) {
    b.setAttribute('aria-checked', String(b === seg));
    b.tabIndex = b === seg ? 0 : -1;
  }
  fbChange(seg.closest('.sb-filter'));
}
function fbRemove(bar, key, value) {
  if (key === 'date') {
    const dp = bar.querySelector('.sb-dp');
    delete dp.dataset.start;
    delete dp.dataset.end;
    dp.querySelector('input').value = '';
    return;
  }
  for (const i of bar.querySelectorAll(`.sb-menu-wrap[data-filter="${key}"] [aria-checked="true"]`)) {
    if (value === null || i.dataset.value === value) i.setAttribute('aria-checked', 'false');
  }
}
function fbClick(e) {
  const bar = e.target.closest?.('.sb-filter');
  if (!bar) return;
  const seg = e.target.closest('.sb-filter-status > [role="radio"]');
  const x = e.target.closest('.sb-filter-chips [data-remove]');
  const clear = e.target.closest('[data-filter-clear]');
  if (seg && !seg.disabled) return fbSelect(seg);
  if (x) { // focus goes to the next chip, else the previous one, else the search
    const i = [...bar.querySelectorAll('.sb-filter-chips [data-remove]')].indexOf(x);
    fbRemove(bar, x.dataset.remove, x.dataset.value);
    fbChange(bar);
    const left = bar.querySelectorAll('.sb-filter-chips [data-remove]');
    return (left[Math.min(i, left.length - 1)] || bar.querySelector('.sb-filter-search input'))?.focus();
  }
  if (clear) {
    fbRemove(bar, 'date');
    for (const w of bar.querySelectorAll('.sb-menu-wrap[data-filter]')) fbRemove(bar, w.dataset.filter, null);
    fbChange(bar);
    if (!clear.closest('.sb-filter-sheet')) bar.querySelector('.sb-filter-search input')?.focus(); // the chip row is gone
  }
}
function fbKeydown(e) {
  const seg = e.target.closest?.('.sb-filter-status > [role="radio"]');
  const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
  if (!seg || !step) return;
  e.preventDefault();
  const segs = [...seg.parentElement.children].filter(b => !b.disabled);
  const next = segs[(segs.indexOf(seg) + step + segs.length) % segs.length];
  fbSelect(next);
  next.focus();
}
function fbEvent(e) {
  const bar = e.target.closest?.('.sb-filter');
  if (!bar) return;
  if (e.type === 'input' && !e.target.matches('.sb-filter-search input')) return;
  if (e.type === 'change' && !(e.target.matches('.sb-dp input') && !e.target.value.trim())) return;
  fbChange(bar);
}
document.addEventListener('click', fbClick);
document.addEventListener('keydown', fbKeydown);
for (const type of ['input', 'change', 'sb-menu-select', 'sb-date-change']) document.addEventListener(type, fbEvent);
```

## Tokens used

```css
:root {
  --bg-primary: var(--white);
  --text-primary: var(--gray-900);
  --border-secondary: var(--gray-200);
  --radius-xl: 16px;
  --shadow-xl: 0 20px 24px -4px rgba(16,24,40,.08), 0 8px 8px -4px rgba(16,24,40,.03);
  --scrim: rgba(0, 0, 0, .2);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Timeless Sans', sans-serif;
  --text-lg: 18px/28px;
}
```

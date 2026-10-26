---
name: Combobox
slug: combobox
category: Components
status: In progress
version: 1.0.0
updated: 2026-10-14
requires: tokens.css
---

# Combobox

Type to find people or values and pick one or many. Picks show as chips, results can come from the server while you type, and a value that does not exist yet can be added.

## Usage

- Use a combobox when people search a long or open list: reviewers, hospitals, labels. For one value from a short, fixed list, use Input dropdown; for 2 to 6 visible choices, use Checkbox group or Toggle.
- Pick many (`data-multiple`) when the field takes a set: reviewers on a claim, hospitals in a filter. Picks show as chips in the field and the list stays open.
- Search the server (`data-async`) when the list is too long to send to the page. Show "Mencari…" while waiting, and say so when nothing matches or the request fails.
- Let people add a value (`data-creatable`) only where new values are welcome, such as labels. Never for people or hospitals: those must already exist.
- People options show the avatar, the name and the email, and the search matches both.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Field | Input field box: `gray-200` border, radius 10, `shadow-xs`, padding `3 10`; 32 high for one line and a line taller for each wrap. Leading 16 px icon (`user` for people), trailing chevron that turns when open. |
| 2 | Chip | Badge md Gray with an × that removes the pick ("Hapus Analis D"). Chips and the text sit 4 apart and wrap. |
| 3 | Values | Chips and the search text on shared lines. The text is Text md, at least 64 wide before it wraps under the chips. The placeholder ("Cari nama atau email") hides once there are chips. |
| 4 | Option | An Input dropdown option: 20 px initials avatar, name in Text sm / Regular, email in `gray-500`. 32 high, radius 8; hover and active `gray-50`. |
| 5 | Picked option | `gray-50` fill and a 20 px `brand-600` check. In Multiple the list stays open, so picks can be undone in place. |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Multiple | True, False | `data-multiple` on `.sb-cb`, `aria-multiselectable="true"` on the listbox, a `ul.sb-cb-chips` before the input |
| Async | True, False | `data-async`; the page listens for `sb-cb-search` and answers with `cbResults(cb, items)` or `cbResults(cb, null)` |
| Add new values | True, False | `data-creatable` and a hidden `.sb-cb-create` option last in the list |
| Option content | Text, Person | Person: `.sb-dd-avatar` + `.sb-dd-label` + `.sb-dd-sup` (email) |
| State | Default, Open, Disabled | Open: `aria-expanded="true"` on the input. Disabled: `disabled` on the input |

## Types

### Multiple

Picks become chips; the list stays open and the search text clears after each pick.

```html
<div class="sb-field">
  <label class="sb-field-label" for="cb-2">Reviewer</label>
  <div class="sb-cb" data-multiple>
    <div class="sb-cb-field">
      <svg aria-hidden="true"><!-- user --></svg>
      <div class="sb-cb-values">
        <ul class="sb-cb-chips" role="list" aria-label="Terpilih"><li class="sb-cb-chip" data-value="ad"><span class="sb-badge" data-size="md" data-icon="x-close">Analis D<button class="sb-badge-x" type="button" aria-label="Hapus Analis D"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li><li class="sb-cb-chip" data-value="af"><span class="sb-badge" data-size="md" data-icon="x-close">Admin F<button class="sb-badge-x" type="button" aria-label="Hapus Admin F"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li></ul>
        <input id="cb-2" type="text" role="combobox" aria-expanded="false" aria-controls="cb-2-list" aria-autocomplete="list" placeholder="Cari nama atau email" value="" autocomplete="off">
      </div>
      <svg class="sb-cb-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </div>
    <div class="sb-dd-menu sb-cb-panel" hidden>
      <div role="listbox" id="cb-2-list" aria-multiselectable="true" aria-label="Reviewer"><div class="sb-dd-opt" role="option" id="cb-2-o0" data-value="aa" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AA</span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">advisor.a@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o1" data-value="ab" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AB</span><span class="sb-dd-label">Advisor B</span><span class="sb-dd-sup">advisor.b@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o2" data-value="rc" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">RC</span><span class="sb-dd-label">Reviewer C</span><span class="sb-dd-sup">reviewer.c@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o3" data-value="ad" aria-selected="true"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AD</span><span class="sb-dd-label">Analis D</span><span class="sb-dd-sup">analis.d@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o4" data-value="ae" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AE</span><span class="sb-dd-label">Analis E</span><span class="sb-dd-sup">analis.e@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o5" data-value="af" aria-selected="true"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AF</span><span class="sb-dd-label">Admin F</span><span class="sb-dd-sup">admin.f@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o6" data-value="ag" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AG</span><span class="sb-dd-label">Admin G</span><span class="sb-dd-sup">admin.g@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-2-o7" data-value="rh" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">RH</span><span class="sb-dd-label">Reviewer H</span><span class="sb-dd-sup">reviewer.h@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div></div>
      <p class="sb-cb-status" role="status" hidden></p>
    </div>
  </div>
</div>
```

### Single person

One pick fills the field with the name and closes the list, as in Input dropdown; the field stays searchable for the next change.

```html
<div class="sb-field">
  <label class="sb-field-label" for="cb-3">Ditugaskan ke</label>
  <div class="sb-cb" data-value="rc">
    <div class="sb-cb-field">
      <svg aria-hidden="true"><!-- user --></svg>
      <div class="sb-cb-values">
        <input id="cb-3" type="text" role="combobox" aria-expanded="false" aria-controls="cb-3-list" aria-autocomplete="list" placeholder="Cari nama atau email" value="Reviewer C" autocomplete="off">
      </div>
      <svg class="sb-cb-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </div>
    <div class="sb-dd-menu sb-cb-panel" hidden>
      <div role="listbox" id="cb-3-list" aria-label="Ditugaskan ke"><div class="sb-dd-opt" role="option" id="cb-3-o0" data-value="aa" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AA</span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">advisor.a@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o1" data-value="ab" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AB</span><span class="sb-dd-label">Advisor B</span><span class="sb-dd-sup">advisor.b@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o2" data-value="rc" aria-selected="true"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">RC</span><span class="sb-dd-label">Reviewer C</span><span class="sb-dd-sup">reviewer.c@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o3" data-value="ad" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AD</span><span class="sb-dd-label">Analis D</span><span class="sb-dd-sup">analis.d@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o4" data-value="ae" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AE</span><span class="sb-dd-label">Analis E</span><span class="sb-dd-sup">analis.e@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o5" data-value="af" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AF</span><span class="sb-dd-label">Admin F</span><span class="sb-dd-sup">admin.f@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o6" data-value="ag" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AG</span><span class="sb-dd-label">Admin G</span><span class="sb-dd-sup">admin.g@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-3-o7" data-value="rh" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">RH</span><span class="sb-dd-label">Reviewer H</span><span class="sb-dd-sup">reviewer.h@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div></div>
      <p class="sb-cb-status" role="status" hidden></p>
    </div>
  </div>
</div>
```

### Async

Nothing is listed until people type. 250 ms after the last key the page asks the server; old results dim while new ones load.

```html
<div class="sb-field">
  <label class="sb-field-label" for="cb-4">Reviewer</label>
  <div class="sb-cb" data-multiple data-async>
    <div class="sb-cb-field">
      <svg aria-hidden="true"><!-- user --></svg>
      <div class="sb-cb-values">
        <ul class="sb-cb-chips" role="list" aria-label="Terpilih"></ul>
        <input id="cb-4" type="text" role="combobox" aria-expanded="false" aria-controls="cb-4-list" aria-autocomplete="list" placeholder="Cari nama atau email" value="" autocomplete="off">
      </div>
      <svg class="sb-cb-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </div>
    <div class="sb-dd-menu sb-cb-panel" hidden>
      <div role="listbox" id="cb-4-list" aria-multiselectable="true" aria-label="Reviewer"></div>
      <p class="sb-cb-status" role="status" hidden></p>
    </div>
  </div>
</div>
```

### Add new values

When nothing matches exactly, the last option offers to add what was typed. The new value is picked and joins the list.

```html
<div class="sb-field">
  <label class="sb-field-label" for="cb-5">Label klaim</label>
  <div class="sb-cb" data-multiple data-creatable>
    <div class="sb-cb-field">
      <svg aria-hidden="true"><!-- hash --></svg>
      <div class="sb-cb-values">
        <ul class="sb-cb-chips" role="list" aria-label="Terpilih"><li class="sb-cb-chip" data-value="Prioritas"><span class="sb-badge" data-size="md" data-icon="x-close">Prioritas<button class="sb-badge-x" type="button" aria-label="Hapus Prioritas"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li></ul>
        <input id="cb-5" type="text" role="combobox" aria-expanded="false" aria-controls="cb-5-list" aria-autocomplete="list" placeholder="Cari atau tambah label" value="" autocomplete="off">
      </div>
      <svg class="sb-cb-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </div>
    <div class="sb-dd-menu sb-cb-panel" hidden>
      <div role="listbox" id="cb-5-list" aria-multiselectable="true" aria-label="Label klaim"><div class="sb-dd-opt" role="option" id="cb-5-o0" data-value="Prioritas" aria-selected="true"><span class="sb-dd-main"><span class="sb-dd-label">Prioritas</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-5-o1" data-value="Butuh dokumen" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-label">Butuh dokumen</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-5-o2" data-value="Rujukan" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-label">Rujukan</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-5-o3" data-value="Kecelakaan" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-label">Kecelakaan</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-5-o4" data-value="Rawat inap" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-label">Rawat inap</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-5-o5" data-value="Kronis" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-label">Kronis</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt sb-cb-create" role="option" id="cb-5-new" hidden><span class="sb-dd-main"><svg aria-hidden="true"><!-- plus --></svg><span class="sb-dd-label">Tambah “”</span></span></div></div>
      <p class="sb-cb-status" role="status" hidden></p>
    </div>
  </div>
</div>
```

## List states

| State | Shows |
| --- | --- |
| Loading | 16 px spinner + "Mencari…" in `gray-500`. Results already shown stay, at 50 % opacity. |
| Nothing found | "Tidak ada yang cocok" in `gray-500`; with Add new values, the "Tambah …" option instead. |
| Error | 16 px `alert-circle` + "Gagal memuat. Ketik lagi untuk mencoba." in `error-700`. |
| Hint (Async, empty field) | "Ketik nama atau email" in `gray-500`. |

## Do and don't

**Do:** People found by name or email, picked as chips.

```html
<div class="sb-field">
  <label class="sb-field-label" for="cb-9">Reviewer</label>
  <div class="cb-specimen" data-multiple>
    <div class="sb-cb-field">
      <svg aria-hidden="true"><!-- user --></svg>
      <div class="sb-cb-values">
        <ul class="sb-cb-chips" role="list" aria-label="Terpilih"><li class="sb-cb-chip" data-value="ad"><span class="sb-badge" data-size="md" data-icon="x-close">Analis D<button class="sb-badge-x" type="button" aria-label="Hapus Analis D"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li><li class="sb-cb-chip" data-value="af"><span class="sb-badge" data-size="md" data-icon="x-close">Admin F<button class="sb-badge-x" type="button" aria-label="Hapus Admin F"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></span></li></ul>
        <input id="cb-9" type="text" role="combobox" aria-expanded="false" aria-controls="cb-9-list" aria-autocomplete="list" placeholder="Cari nama atau email" value="" autocomplete="off">
      </div>
      <svg class="sb-cb-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </div>
    <div class="sb-dd-menu sb-cb-panel" hidden>
      <div role="listbox" id="cb-9-list" aria-multiselectable="true" aria-label="Reviewer"><div class="sb-dd-opt" role="option" id="cb-9-o0" data-value="aa" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AA</span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">advisor.a@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o1" data-value="ab" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AB</span><span class="sb-dd-label">Advisor B</span><span class="sb-dd-sup">advisor.b@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o2" data-value="rc" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">RC</span><span class="sb-dd-label">Reviewer C</span><span class="sb-dd-sup">reviewer.c@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o3" data-value="ad" aria-selected="true"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AD</span><span class="sb-dd-label">Analis D</span><span class="sb-dd-sup">analis.d@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o4" data-value="ae" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AE</span><span class="sb-dd-label">Analis E</span><span class="sb-dd-sup">analis.e@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o5" data-value="af" aria-selected="true"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AF</span><span class="sb-dd-label">Admin F</span><span class="sb-dd-sup">admin.f@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o6" data-value="ag" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AG</span><span class="sb-dd-label">Admin G</span><span class="sb-dd-sup">admin.g@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div><div class="sb-dd-opt" role="option" id="cb-9-o7" data-value="rh" aria-selected="false"><span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">RH</span><span class="sb-dd-label">Reviewer H</span><span class="sb-dd-sup">reviewer.h@sembuh.ai</span></span><svg class="sb-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div></div>
      <p class="sb-cb-status" role="status" hidden></p>
    </div>
  </div>
</div>
```

**Don't:** "Tambah" on a list of people. A typo becomes a reviewer who does not exist.

```html
<div class="sb-field">
  <label class="sb-field-label" for="cb-10">Reviewer</label>
  <div class="cb-specimen" data-multiple data-creatable>
    <div class="sb-cb-field">
      <svg aria-hidden="true"><!-- user --></svg>
      <div class="sb-cb-values">
        <ul class="sb-cb-chips" role="list" aria-label="Terpilih"></ul>
        <input id="cb-10" type="text" role="combobox" aria-expanded="true" aria-controls="cb-10-list" aria-autocomplete="list" placeholder="Cari nama atau email" value="Budi" autocomplete="off">
      </div>
      <svg class="sb-cb-chevron" aria-hidden="true"><!-- chevron-down --></svg>
    </div>
    <div class="sb-dd-menu sb-cb-panel">
      <div role="listbox" id="cb-10-list" aria-multiselectable="true" aria-label="Reviewer"><div class="sb-dd-opt sb-cb-create" role="option" id="cb-10-new"><span class="sb-dd-main"><svg aria-hidden="true"><!-- plus --></svg><span class="sb-dd-label">Tambah “Budi”</span></span></div></div>
      <p class="sb-cb-status" role="status" hidden></p>
    </div>
  </div>
</div>
```

## Accessibility

- The input is a `role="combobox"` with `aria-expanded`, `aria-controls` and `aria-autocomplete="list"`; focus stays in it and `aria-activedescendant` points at the active option.
- The list is a `role="listbox"` (`aria-multiselectable` when picking many); picked options have `aria-selected="true"`, so the check is not the only signal.
- Each chip's × is a button named after the pick ("Hapus Analis D"). Backspace in an empty field removes the last chip.
- Loading, nothing found and errors are written in a `role="status"` line, so screen readers hear them without moving focus.

| Key | Does |
| --- | --- |
| Typing | Filters the list, or asks the server (Async) |
| ↓ / ↑ | Opens the list; moves the active option |
| Enter | Picks or un-picks the active option ("Tambah …" adds the value) |
| Backspace (empty field) | Removes the last chip |
| Esc | Closes the list |
| Tab | Closes the list and moves on |

## Code

Load `tokens.css`, `input-field.css`, `input-dropdown.css` and `badge.css`, then `combobox.css`, and add `combobox.js`. Listen for `sb-cb-change` to read the picks.

`combobox.css`

```css
/* Combobox, Codemasters Design System
   Needs tokens.css, input-field.css (label, hint), input-dropdown.css (the list and its options), badge.css (chips)
   and combobox.js.

   <div class="sb-field">
     <label class="sb-field-label" for="reviewer">Reviewer</label>
     <div class="sb-cb" data-multiple>
       <div class="sb-cb-field">
         <svg aria-hidden="true">…user…</svg>
         <div class="sb-cb-values">
           <ul class="sb-cb-chips" role="list" aria-label="Terpilih">…<li class="sb-cb-chip" data-value="ad">Badge with ×</li>…</ul>
           <input id="reviewer" type="text" role="combobox" aria-expanded="false" aria-controls="reviewer-list" aria-autocomplete="list" placeholder="Cari nama atau email" autocomplete="off">
         </div>
         <svg class="sb-cb-chevron" aria-hidden="true">…chevron-down…</svg>
       </div>
       <div class="sb-dd-menu sb-cb-panel" hidden>
         <div role="listbox" id="reviewer-list" aria-multiselectable="true" aria-label="Reviewer">….sb-dd-opt role="option"…</div>
         <p class="sb-cb-status" role="status" hidden></p>
       </div>
     </div>
   </div>

   data-multiple    pick many: chips in the field, the list stays open (omit to pick one: the label fills the field)
   data-async       results come from the page: listen for "sb-cb-search", answer with cbResults(cb, items | null)
   data-creatable   a last "Tambah …" option adds what was typed: <div class="sb-dd-opt sb-cb-create" role="option" id="…" hidden>
   Options are Input dropdown options: .sb-dd-avatar (initials), .sb-dd-label (name), .sb-dd-sup (email), .sb-dd-check. */

.sb-cb { position: relative; }

/* Field: Input field's box. It grows a line at a time as chips wrap; 3 + 24 + 3 + borders = 32 for one line. */
.sb-cb-field {
  box-sizing: border-box; display: flex; align-items: center; gap: 8px;
  min-height: 32px; padding: 3px 10px;
  background: var(--bg-primary); border: 1px solid var(--border-control); border-radius: var(--radius-control); box-shadow: var(--shadow-xs);
  cursor: text;
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-cb-field > svg { width: 16px; height: 16px; flex: none; color: var(--text-quaternary); }
.sb-cb-field:focus-within, .sb-cb:has([aria-expanded="true"]) .sb-cb-field { border-color: var(--border-brand); box-shadow: var(--shadow-xs), 0 0 0 3px var(--focus-ring); }
.sb-cb:has(input:disabled) .sb-cb-field { opacity: .5; cursor: not-allowed; }
.sb-cb-chevron { transition: rotate 200ms var(--ease); }
.sb-cb:has([aria-expanded="true"]) .sb-cb-chevron { rotate: 180deg; }

/* Values: chips and the text input share the lines, 4 apart. */
.sb-cb-values { display: flex; flex: 1; flex-wrap: wrap; align-items: center; gap: 4px; min-width: 0; }
.sb-cb-chips { display: contents; margin: 0; padding: 0; list-style: none; }
.sb-cb-chip { display: flex; }
.sb-cb-values input {
  flex: 1; width: 0; min-width: 64px; height: 24px; margin: 0; padding: 0; border: 0; outline: 0; background: none; /* 64: room to type beside the chips before wrapping */
  font: 400 var(--text-sm) var(--font); color: var(--text-primary);
}
.sb-cb-values input::placeholder { color: var(--text-quaternary); opacity: 1; }
.sb-cb-chips:not(:empty) + input::placeholder { color: transparent; } /* chips already say what is picked */

/* Panel: the Input dropdown menu, plus a status line. */
.sb-cb-panel[hidden] { display: none; }
.sb-cb-panel [role="listbox"][aria-busy="true"] { opacity: .5; } /* old results while new ones load */
.sb-cb-status { display: flex; align-items: center; gap: 8px; margin: 0; padding: 10px; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }
.sb-cb-status[hidden] { display: none; }
.sb-cb-status > svg { width: 16px; height: 16px; flex: none; }
.sb-cb-status[data-kind="error"] { color: var(--text-error); }
.sb-cb-spin { animation: sb-cb-spin 1s linear infinite; }
@keyframes sb-cb-spin { to { rotate: 360deg; } }
.sb-cb-create .sb-dd-label { color: var(--text-brand); }
.sb-cb-create .sb-dd-main > svg { color: var(--fg-brand); }

@media (prefers-reduced-motion: reduce) {
  .sb-cb-field, .sb-cb-chevron { transition: none; }
  .sb-cb-spin { animation: none; }
}
/* Phones: 16 px text in fields, so iOS does not zoom in on focus (shadcn: text-base md:text-sm). */
@media (max-width: 767px) {
  .sb-cb-values input { font-size: 16px; }
}
```

### Script

`combobox.js`

```js
// Combobox: type to filter (or, with data-async, to ask the page for results), ↑ ↓ to move, Enter or a click to pick,
// Esc to close; Backspace in an empty field removes the last chip. Fires "sb-cb-change" with { values } and, with
// data-async, "sb-cb-search" with { query }: answer it with cbResults(combobox, items) or cbResults(combobox, null) on error.
const cbEsc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const cbSvg = (d, cls) => `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
const CB_PATH = {
  "check": "M20 6 9 17l-5-5",
  "x": "M18 6 6 18M6 6l12 12",
  "loader": "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
  "alert": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 8v4M12 16h.01"
};
const cbOption = (item, selected, id) =>
    `<div class="sb-dd-opt" role="option" id="${id}" data-value="${cbEsc(item.value)}" aria-selected="${selected}"><span class="sb-dd-main">${item.initials ? `<span class="sb-dd-avatar" aria-hidden="true">${cbEsc(item.initials)}</span>` : ''}<span class="sb-dd-label">${cbEsc(item.label)}</span>${item.sub ? `<span class="sb-dd-sup">${cbEsc(item.sub)}</span>` : ''}</span>${cbSvg(CB_PATH.check, 'sb-dd-check')}</div>`;
const cbChip = (value, label) =>
    `<li class="sb-cb-chip" data-value="${cbEsc(value)}"><span class="sb-badge" data-size="md" data-icon="x-close">${cbEsc(label)}<button class="sb-badge-x" type="button" aria-label="Hapus ${cbEsc(label)}">${cbSvg(CB_PATH.x)}</button></span></li>`;
const cbFind = (root, value) => [...root.querySelectorAll('[data-value]')].find(el => el.dataset.value === value);
const cbVisible = p => [...p.list.querySelectorAll('[role="option"]')].filter(o => !o.hidden);
const cbValues = p => ('multiple' in p.cb.dataset ? [...p.chips.children].map(c => c.dataset.value) : p.cb.dataset.value ? [p.cb.dataset.value] : []);
function cbParts(el) {
  const cb = el.closest('.sb-cb');
  return cb && { cb, input: cb.querySelector('input[role="combobox"]'), panel: cb.querySelector('.sb-cb-panel'), list: cb.querySelector('[role="listbox"]'), chips: cb.querySelector('.sb-cb-chips') };
}
function cbActivate(p, opt) {
  p.list.querySelectorAll('[data-active]').forEach(o => o.removeAttribute('data-active'));
  if (!opt) return p.input.removeAttribute('aria-activedescendant');
  opt.setAttribute('data-active', '');
  p.input.setAttribute('aria-activedescendant', opt.id);
  opt.scrollIntoView({ block: 'nearest' });
}
function cbOpen(p, open) {
  p.input.setAttribute('aria-expanded', String(open));
  p.panel.hidden = !open;
  if (!open) cbActivate(p, null);
}
function cbStatus(p, kind, text) {
  const s = p.panel.querySelector('.sb-cb-status');
  const msg = { loading: [CB_PATH.loader, 'Mencari…'], empty: [null, 'Tidak ada yang cocok'], error: [CB_PATH.alert, 'Gagal memuat. Ketik lagi untuk mencoba.'], hint: [null, text] }[kind];
  s.hidden = !kind;
  s.dataset.kind = kind || '';
  s.innerHTML = kind ? `${msg[0] ? cbSvg(msg[0], kind === 'loading' ? 'sb-cb-spin' : '') : ''}${cbEsc(msg[1])}` : '';
}
function cbCreateRow(p, q) {
  const row = p.list.querySelector('.sb-cb-create');
  if (!row) return false;
  const exact = [...p.list.querySelectorAll('[role="option"]:not(.sb-cb-create) .sb-dd-label')].some(l => l.textContent.toLowerCase() === q.toLowerCase());
  row.hidden = !q || exact;
  row.querySelector('.sb-dd-label').textContent = `Tambah “${q}”`;
  return !row.hidden;
}
function cbFilter(p) {
  const q = p.input.value.trim();
  p.list.querySelectorAll('[role="option"]:not(.sb-cb-create)').forEach(o => (o.hidden = !o.textContent.toLowerCase().includes(q.toLowerCase())));
  const create = cbCreateRow(p, q);
  cbStatus(p, cbVisible(p).length || create ? null : 'empty');
}
function cbResults(cb, items) {
  const p = cbParts(cb), picked = cbValues(p), create = p.list.querySelector('.sb-cb-create');
  p.list.querySelectorAll('[role="option"]:not(.sb-cb-create)').forEach(o => o.remove());
  p.list.removeAttribute('aria-busy');
  if (!items) { if (create) create.hidden = true; return cbStatus(p, 'error'); }
  (create || p.list).insertAdjacentHTML(create ? 'beforebegin' : 'beforeend', items.map((it, i) => cbOption(it, picked.includes(it.value), `${p.list.id}-r${i}`)).join(''));
  const q = p.input.value.trim(), withCreate = cbCreateRow(p, q);
  cbStatus(p, items.length || withCreate ? null : 'empty');
}
function cbChanged(p) {
  p.cb.dispatchEvent(new CustomEvent('sb-cb-change', { bubbles: true, detail: { values: cbValues(p) } }));
}
function cbRemove(p, value) {
  cbFind(p.chips, value)?.remove();
  cbFind(p.list, value)?.setAttribute('aria-selected', 'false');
  p.input.focus();
  cbChanged(p);
}
function cbPick(p, opt) {
  if (opt.matches('.sb-cb-create')) {
    const label = p.input.value.trim();
    opt.insertAdjacentHTML('beforebegin', cbOption({ value: label, label }, false, `${p.list.id}-n${p.list.children.length}`));
    opt = opt.previousElementSibling;
  }
  const value = opt.dataset.value, label = opt.querySelector('.sb-dd-label').textContent;
  if (!('multiple' in p.cb.dataset)) {
    p.list.querySelectorAll('[aria-selected="true"]').forEach(o => o.setAttribute('aria-selected', 'false'));
    opt.setAttribute('aria-selected', 'true');
    p.cb.dataset.value = value;
    p.input.value = label;
    cbOpen(p, false);
    return cbChanged(p);
  }
  const on = opt.getAttribute('aria-selected') !== 'true';
  opt.setAttribute('aria-selected', String(on));
  if (on) p.chips.insertAdjacentHTML('beforeend', cbChip(value, label));
  else cbFind(p.chips, value)?.remove();
  if (!('async' in p.cb.dataset)) { p.input.value = ''; cbFilter(p); } // async keeps the query, so the results stay
  p.input.focus();
  cbActivate(p, cbFind(p.list, value));
  cbChanged(p);
}
function cbShow(p) {
  cbOpen(p, true);
  if (!('async' in p.cb.dataset)) cbFilter(p);
  else if (!p.input.value.trim()) cbStatus(p, 'hint', 'Ketik nama atau email');
}
function cbClick(e) {
  const cb = e.target.closest?.('.sb-cb');
  document.querySelectorAll('.sb-cb').forEach(o => o !== cb && !o.querySelector('.sb-cb-panel').hidden && cbOpen(cbParts(o), false));
  if (!cb || cb.querySelector('input').disabled) return;
  const p = cbParts(cb), x = e.target.closest('.sb-badge-x'), opt = e.target.closest('[role="option"]');
  if (x) return cbRemove(p, x.closest('.sb-cb-chip').dataset.value);
  if (opt) return cbPick(p, opt);
  if (e.target.closest('.sb-cb-field')) { p.input.focus(); if (p.panel.hidden) cbShow(p); }
}
function cbInput(e) {
  const input = e.target.closest?.('.sb-cb input[role="combobox"]');
  if (!input) return;
  const p = cbParts(input), q = input.value.trim();
  cbOpen(p, true);
  if (!('async' in p.cb.dataset)) return cbFilter(p), cbActivate(p, cbVisible(p)[0]);
  clearTimeout(p.cb.cbTimer);
  if (!q) { cbResults(p.cb, []); return cbStatus(p, 'hint', 'Ketik nama atau email'); }
  p.list.setAttribute('aria-busy', 'true');
  cbStatus(p, 'loading');
  p.cb.cbTimer = setTimeout(() => p.cb.dispatchEvent(new CustomEvent('sb-cb-search', { bubbles: true, detail: { query: q } })), 250); // wait for a pause in typing
}
function cbKeydown(e) {
  const input = e.target.closest?.('.sb-cb input[role="combobox"]');
  if (!input) return;
  const p = cbParts(input), open = !p.panel.hidden, opts = cbVisible(p), i = opts.findIndex(o => o.hasAttribute('data-active'));
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (!open) return cbShow(p);
    if (opts.length) cbActivate(p, opts[(i + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length]);
  } else if (e.key === 'Enter' && open && i >= 0) {
    e.preventDefault();
    cbPick(p, opts[i]);
  } else if (e.key === 'Escape' && open) {
    e.preventDefault();
    cbOpen(p, false);
  } else if (e.key === 'Backspace' && !input.value && 'multiple' in p.cb.dataset && p.chips.lastElementChild) {
    cbRemove(p, p.chips.lastElementChild.dataset.value); // the last chip goes, as in most tag fields
  } else if (e.key === 'Tab') {
    cbOpen(p, false);
  }
}
document.addEventListener('click', cbClick);
document.addEventListener('input', cbInput);
document.addEventListener('keydown', cbKeydown);
```

## Tokens used

```css
:root {
  --bg-primary: var(--white);
  --text-primary: var(--gray-900);
  --text-quaternary: var(--gray-500);
  --text-brand: var(--brand-700);
  --text-error: var(--error-700);
  --fg-brand: var(--brand-600);
  --border-control: var(--gray-200);
  --border-brand: var(--brand-300);
  --radius-control: 10px;
  --shadow-xs: 0 1px 2px rgba(16,24,40,.05);
  --focus-ring: color-mix(in srgb, var(--brand-600) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Timeless Sans', sans-serif;
  --text-sm: 14px/20px;
}
```

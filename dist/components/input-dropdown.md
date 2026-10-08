---
name: Input dropdown
slug: input-dropdown
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-06
requires: tokens.css
---

# Input dropdown

A select field: pick one value for a form field or a filter. For running an action from a button, use Dropdown menu.

## Usage

- **Input dropdown chooses a value; Dropdown menu runs an action.** Never mix both in one list.
- About 7 options are visible before the list scrolls. Above about 10 options, use the Search type.
- For 2–5 options that fit on screen, Radio buttons show every choice at once.
- The open list is as wide as the field and opens 8 below it, with the chosen option checked.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Label | Text sm / Medium `gray-700`, 6 above the field. 44 high without a label, 70 with one. |
| 2 | Field | Same box as Input field: 44 high, padding `10 14`, gap 8, `white`, 1 px `gray-300` border, radius 8, `shadow-xs`. Open/focused: `brand-300` border + 4 px `focus-ring` ring. |
| 3 | Leading element | Optional: 20 px icon `gray-500`, 24 px avatar, 10 px `success-500` dot, or 20 px search icon (Search type). |
| 4 | Value + supporting text | Text md / Regular. Placeholder `gray-500`, value `gray-900`, supporting text after it in `gray-500`. |
| 5 | Chevron | 20 px `gray-500`; turns up when open. The Search type has none. |
| 6 | Menu | Width of the field, max height 320, `white`, 1 px `gray-100` border, radius 8, `shadow-lg`, padding `4 0`, 8 below the field. |
| 7 | Check | 20 px `brand-600` at the end of the chosen option. |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Type | Default, Icon leading, Avatar leading, Dot leading, Search | leading `<svg>`, `.sb-dd-avatar` or `.sb-dd-dot` before the label; Search uses `<div class="sb-dd-trigger" data-type="search">` with an `<input role="combobox">` |
| State | Placeholder, Default (value chosen), Open/focused | `.sb-dd-placeholder`, a chosen value, `aria-expanded="true"`. Static mockups only: `data-state="open"` |
| Supporting text | True, False | `<span class="sb-dd-sup">` after the label |
| Label | True, False | label element referenced by `aria-labelledby`; without it, `aria-label` |
| Item: State | Default, Hover, Focus, Disabled | `:hover`, `data-active` (keyboard), `aria-disabled="true"` |
| Item: Check | True, False | `aria-selected="true"` shows the check |

## Types

### Default

```html
<div class="sb-field">
  <span class="sb-field-label" id="ty-default-label">Jenis klaim</span>
  <div class="sb-dd">
    <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="ty-default-list" aria-labelledby="ty-default-label ty-default-value">
      <span class="sb-dd-value" id="ty-default-value"><span class="sb-dd-label">Inpatient</span><span class="sb-dd-sup">Rawat inap</span></span>
      <svg class="sb-dd-chevron" data-i="chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="sb-dd-menu" id="ty-default-list" role="listbox" aria-labelledby="ty-default-label" hidden>
      <div class="sb-dd-opt" id="ty-default-0" role="option" aria-selected="true">
        <span class="sb-dd-main"><span class="sb-dd-label">Inpatient</span><span class="sb-dd-sup">Rawat inap</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-default-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Outpatient</span><span class="sb-dd-sup">Rawat jalan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-default-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Maternity</span><span class="sb-dd-sup">Persalinan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-default-3" role="option" aria-selected="false" aria-disabled="true">
        <span class="sb-dd-main"><span class="sb-dd-label">Optical</span><span class="sb-dd-sup">Kacamata</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-default-4" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Dental</span><span class="sb-dd-sup">Gigi</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
    </div>
  </div>
</div>
```

### Icon leading

```html
<div class="sb-field">
  <span class="sb-field-label" id="ty-icon-label">Peran</span>
  <div class="sb-dd">
    <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="ty-icon-list" aria-labelledby="ty-icon-label ty-icon-value">
      <span class="sb-dd-value" id="ty-icon-value"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Admin</span></span>
      <svg class="sb-dd-chevron" data-i="chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="sb-dd-menu" id="ty-icon-list" role="listbox" aria-labelledby="ty-icon-label" hidden>
      <div class="sb-dd-opt" id="ty-icon-0" role="option" aria-selected="true">
        <span class="sb-dd-main"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Admin</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-icon-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Advisor</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-icon-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Reviewer</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-icon-3" role="option" aria-selected="false">
        <span class="sb-dd-main"><svg aria-hidden="true"><!-- user --></svg><span class="sb-dd-label">Viewer</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
    </div>
  </div>
</div>
```

### Avatar leading

```html
<div class="sb-field">
  <span class="sb-field-label" id="ty-avatar-label">Ditugaskan ke</span>
  <div class="sb-dd">
    <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="ty-avatar-list" aria-labelledby="ty-avatar-label ty-avatar-value">
      <span class="sb-dd-value" id="ty-avatar-value"><span class="sb-dd-avatar" aria-hidden="true">AA</span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">@advisor-a</span></span>
      <svg class="sb-dd-chevron" data-i="chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="sb-dd-menu" id="ty-avatar-list" role="listbox" aria-labelledby="ty-avatar-label" hidden>
      <div class="sb-dd-opt" id="ty-avatar-0" role="option" aria-selected="true">
        <span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AA</span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">@advisor-a</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-avatar-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AB</span><span class="sb-dd-label">Advisor B</span><span class="sb-dd-sup">@advisor-b</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-avatar-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AC</span><span class="sb-dd-label">Advisor C</span><span class="sb-dd-sup">@advisor-c</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-avatar-3" role="option" aria-selected="false" aria-disabled="true">
        <span class="sb-dd-main"><span class="sb-dd-avatar" aria-hidden="true">AD</span><span class="sb-dd-label">Advisor D</span><span class="sb-dd-sup">@advisor-d</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
    </div>
  </div>
</div>
```

### Dot leading

```html
<div class="sb-field">
  <span class="sb-field-label" id="ty-dot-label">Advisor online</span>
  <div class="sb-dd">
    <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="ty-dot-list" aria-labelledby="ty-dot-label ty-dot-value">
      <span class="sb-dd-value" id="ty-dot-value"><span class="sb-dd-dot" aria-hidden="true"></span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">@advisor-a</span></span>
      <svg class="sb-dd-chevron" data-i="chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="sb-dd-menu" id="ty-dot-list" role="listbox" aria-labelledby="ty-dot-label" hidden>
      <div class="sb-dd-opt" id="ty-dot-0" role="option" aria-selected="true">
        <span class="sb-dd-main"><span class="sb-dd-dot" aria-hidden="true"></span><span class="sb-dd-label">Advisor A</span><span class="sb-dd-sup">@advisor-a</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-dot-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-dot" aria-hidden="true"></span><span class="sb-dd-label">Advisor B</span><span class="sb-dd-sup">@advisor-b</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-dot-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-dot" aria-hidden="true"></span><span class="sb-dd-label">Advisor C</span><span class="sb-dd-sup">@advisor-c</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
    </div>
  </div>
</div>
```

### Search

```html
<div class="sb-field">
  <span class="sb-field-label" id="ty-search-label">Kota</span>
  <div class="sb-dd">
    <div class="sb-dd-trigger" data-type="search">
      <svg aria-hidden="true"><!-- search --></svg>
      <input type="text" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="ty-search-list" placeholder="Cari kota" autocomplete="off" aria-labelledby="ty-search-label">
    </div>
    <div class="sb-dd-menu" id="ty-search-list" role="listbox" aria-labelledby="ty-search-label" hidden>
      <div class="sb-dd-opt" id="ty-search-0" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Jakarta</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Bandung</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Surabaya</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-3" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Medan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-4" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Semarang</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-5" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Makassar</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-6" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Palembang</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-7" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Denpasar</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-8" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Yogyakarta</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-9" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Malang</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-10" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Balikpapan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="ty-search-11" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Pontianak</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <p class="sb-dd-empty" hidden>Tidak ada kota yang cocok.</p>
    </div>
  </div>
</div>
```

## States

### Menu items

| Part | Default | Hover / Focus | Disabled |
| --- | --- | --- | --- |
| Row (44 high, padding `10 14`, gap 8) | no fill | `gray-50` | no fill |
| Label, Text md / Medium | `gray-900` | `gray-900` | `gray-200` |
| Supporting text, Text md / Regular | `gray-500` | `gray-500` | `gray-200` |
| Leading icon 20 px | `gray-500` | `gray-700` | `gray-200` |
| Check (selected) | 20 px `brand-600`, row fill `gray-50` | same | check `gray-200`, fill `gray-50` |

Keyboard focus (arrow keys) looks like Hover. Avatars in a disabled row get `opacity: .5`. The scroll bar (16 wide, 8 px `gray-200` thumb, no track) shows only when the list scrolls.

## Do and don't

**Do:** 12 cities: the Search type lets the user type instead of scroll.

```html
<div class="sb-field">
  <span class="sb-field-label" id="dd-dd-search-label">Kota</span>
  <div class="sb-dd">
    <div class="sb-dd-trigger" data-type="search">
      <svg aria-hidden="true"><!-- search --></svg>
      <input type="text" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="dd-dd-search-list" placeholder="Cari kota" autocomplete="off" aria-labelledby="dd-dd-search-label" value="Yogyakarta">
    </div>
    <div class="sb-dd-menu" id="dd-dd-search-list" role="listbox" aria-labelledby="dd-dd-search-label" hidden>
      <div class="sb-dd-opt" id="dd-dd-search-0" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Jakarta</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Bandung</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Surabaya</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-3" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Medan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-4" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Semarang</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-5" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Makassar</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-6" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Palembang</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-7" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Denpasar</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-8" role="option" aria-selected="true">
        <span class="sb-dd-main"><span class="sb-dd-label">Yogyakarta</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-9" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Malang</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-10" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Balikpapan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-search-11" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Pontianak</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <p class="sb-dd-empty" hidden>Tidak ada kota yang cocok.</p>
    </div>
  </div>
</div>
```

**Don't:** Actions in a select field. Use a Dropdown menu for actions.

```html
<div class="sb-field">
  <span class="sb-field-label" id="dd-dd-actions-label">Aksi</span>
  <div class="sb-dd">
    <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="dd-dd-actions-list" aria-labelledby="dd-dd-actions-label dd-dd-actions-value">
      <span class="sb-dd-value" id="dd-dd-actions-value"><span class="sb-dd-placeholder">Pilih aksi</span></span>
      <svg class="sb-dd-chevron" data-i="chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="sb-dd-menu" id="dd-dd-actions-list" role="listbox" aria-labelledby="dd-dd-actions-label" hidden>
      <div class="sb-dd-opt" id="dd-dd-actions-0" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Unduh PDF</span><span class="sb-dd-sup">Rawat inap</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-actions-1" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Hapus klaim</span><span class="sb-dd-sup">Rawat jalan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-actions-2" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Maternity</span><span class="sb-dd-sup">Persalinan</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-actions-3" role="option" aria-selected="false" aria-disabled="true">
        <span class="sb-dd-main"><span class="sb-dd-label">Optical</span><span class="sb-dd-sup">Kacamata</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="sb-dd-opt" id="dd-dd-actions-4" role="option" aria-selected="false">
        <span class="sb-dd-main"><span class="sb-dd-label">Dental</span><span class="sb-dd-sup">Gigi</span></span>
        <svg class="sb-dd-check" data-i="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
    </div>
  </div>
</div>
```

## Accessibility

- The field is a `combobox` (`aria-haspopup="listbox"`, `aria-expanded`, `aria-controls`); the list is a `listbox` of `option`s with `aria-selected`.
- Focus stays on the field. The highlighted option is announced through `aria-activedescendant`, so screen readers follow the arrow keys.
- Keyboard: Enter, Space or ↓ opens; ↑ ↓ Home End move; Enter selects; Esc closes and keeps focus on the field; Tab closes and moves on.
- Disabled options keep `aria-disabled="true"`, so they are read but skipped by the arrow keys.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Value, option label `gray-900` | `white` / `gray-50` | 17.75:1 / 16.98:1 | Passes |
| Placeholder, supporting text `gray-500` | `white` / `gray-50` | 4.97:1 / 4.76:1 | Passes |
| Check `brand-600` | `gray-50` | 4.84:1 | Passes (icons need 3:1) |

## Code

Load `tokens.css`, `input-dropdown.css` and `input-dropdown.js`. The script follows the WAI-ARIA select-only combobox pattern; the Search type uses the editable combobox pattern.

`input-dropdown.css`

```css
/* Input dropdown, Codemasters Design System
   Needs tokens.css and input-dropdown.js. Label and hint rules match input-field.css.

   <div class="sb-field">
     <span class="sb-field-label" id="jenis-label">Jenis klaim</span>
     <div class="sb-dd">
       <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false"
               aria-controls="jenis-list" aria-labelledby="jenis-label jenis-value">
         <span class="sb-dd-value" id="jenis-value"><span class="sb-dd-placeholder">Pilih jenis klaim</span></span>
         <svg class="sb-dd-chevron" aria-hidden="true">…chevron-down…</svg>
       </button>
       <div class="sb-dd-menu" id="jenis-list" role="listbox" aria-labelledby="jenis-label" hidden>
         <div class="sb-dd-opt" id="jenis-1" role="option" aria-selected="false">
           <span class="sb-dd-main"><span class="sb-dd-label">Inpatient</span><span class="sb-dd-sup">Rawat inap</span></span>
           <svg class="sb-dd-check" aria-hidden="true">…check…</svg>
         </div>
       </div>
     </div>
   </div>

   Leading element (Type): <svg> icon, <span class="sb-dd-avatar">, or <span class="sb-dd-dot"> before .sb-dd-label.
   Search type: <div class="sb-dd-trigger" data-type="search"> holding <svg> + <input role="combobox">, no chevron.
   Disabled option: aria-disabled="true". Disabled field: disabled on the button.
   data-state="open" on .sb-dd-trigger forces Open/focused in static mockups and docs only. */

.sb-field { display: grid; gap: 6px; } /* label, control, hint 6 apart */
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }

.sb-dd { position: relative; }

/* Field: same box as Input field */
.sb-dd-trigger {
  box-sizing: border-box; display: flex; align-items: center; gap: 8px;
  width: 100%; height: 44px; margin: 0; padding: 0 14px;
  font: 400 var(--text-md) var(--font); color: var(--gray-900); text-align: start;
  background: var(--white); border: 1px solid var(--gray-300); border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  cursor: pointer;
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-dd-trigger:hover:not(:disabled, [aria-expanded="true"], :focus-within) { border-color: var(--gray-400); }
.sb-dd-trigger:focus-visible, .sb-dd-trigger[aria-expanded="true"], .sb-dd-trigger:has([aria-expanded="true"], input:focus), .sb-dd-trigger[data-state="open"] {
  outline: none; border-color: var(--brand-300); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring);
}
.sb-dd-trigger:disabled { background: var(--gray-50); color: var(--gray-500); cursor: not-allowed; }
.sb-dd-value, .sb-dd-main { display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0; }
.sb-dd-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sb-dd-sup { flex: none; color: var(--gray-500); font-weight: 400; }
.sb-dd-placeholder { color: var(--gray-500); }
.sb-dd-trigger > svg, .sb-dd-value > svg, .sb-dd-main > svg { width: 20px; height: 20px; flex: none; color: var(--gray-500); }
.sb-dd-chevron { transition: rotate 200ms var(--ease); }
.sb-dd-trigger[aria-expanded="true"] .sb-dd-chevron, .sb-dd-trigger[data-state="open"] .sb-dd-chevron { rotate: 180deg; }
.sb-dd-trigger[data-type="search"] { cursor: text; }
.sb-dd-trigger input { flex: 1; min-width: 0; height: 100%; margin: 0; padding: 0; border: 0; outline: 0; background: none; font: inherit; color: inherit; }
.sb-dd-trigger input::placeholder { color: var(--gray-500); opacity: 1; }

/* Leading elements */
.sb-dd-avatar {
  display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 24px; height: 24px; border-radius: var(--radius-full);
  background: var(--brand-50); font: 500 var(--text-xs) var(--font); color: var(--brand-600);
}
.sb-dd-dot { width: 10px; height: 10px; flex: none; border-radius: var(--radius-full); background: var(--success-500); }

/* Menu: width of the field, max height 320 (about 7 options), opens 8 below. */
.sb-dd-menu {
  position: absolute; z-index: 30; top: calc(100% + 8px); inset-inline: 0;
  box-sizing: border-box; max-height: 320px; overflow-y: auto; padding: 4px 0;
  background: var(--white); border: 1px solid var(--gray-100); border-radius: var(--radius-md); box-shadow: var(--shadow-lg);
  scrollbar-width: thin; scrollbar-color: var(--gray-200) transparent;
}
.sb-dd-menu[hidden] { display: none; }
/* _Scroll bar: 16 wide with padding 4, thumb 8 wide gray-200 radius 8, no track. Shows only when the list scrolls. */
.sb-dd-menu::-webkit-scrollbar { width: 16px; }
.sb-dd-menu::-webkit-scrollbar-thumb { background: var(--gray-200); border: 4px solid transparent; border-radius: var(--radius-md); background-clip: padding-box; }

/* Option row: 44 high, padding 10 14, gap 8 */
.sb-dd-opt {
  display: flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 14px;
  font: 500 var(--text-md) var(--font); color: var(--gray-900); cursor: pointer;
}
.sb-dd-opt:hover, .sb-dd-opt[data-active], .sb-dd-opt[aria-selected="true"] { background: var(--gray-50); }
.sb-dd-opt:hover .sb-dd-main > svg, .sb-dd-opt[data-active] .sb-dd-main > svg { color: var(--gray-700); }
.sb-dd-check { width: 20px; height: 20px; flex: none; color: var(--brand-600); visibility: hidden; }
.sb-dd-opt[aria-selected="true"] .sb-dd-check { visibility: visible; }
.sb-dd-opt[aria-disabled="true"] { background: none; color: var(--gray-200); cursor: not-allowed; }
.sb-dd-opt[aria-disabled="true"] .sb-dd-sup, .sb-dd-opt[aria-disabled="true"] .sb-dd-main > svg, .sb-dd-opt[aria-disabled="true"] .sb-dd-check { color: var(--gray-200); }
.sb-dd-opt[aria-disabled="true"][aria-selected="true"] { background: var(--gray-50); }
.sb-dd-opt[aria-disabled="true"] .sb-dd-avatar { opacity: .5; }
.sb-dd-empty { margin: 0; padding: 12px 14px; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-dd-empty[hidden] { display: none; }

@media (prefers-reduced-motion: reduce) {
  .sb-dd-trigger, .sb-dd-chevron { transition: none; }
}
```

### Script

`input-dropdown.js`

```js
// Input dropdown behaviour: click or Enter / Space / ↓ opens, ↑ ↓ Home End move, Enter selects,
// Esc closes, Tab closes. The Search type filters as you type. Focus stays on the field (aria-activedescendant).
function ddParts(el) {
  const dd = el.closest('.sb-dd');
  return dd && { dd, trigger: dd.querySelector('[role="combobox"]'), list: dd.querySelector('[role="listbox"]') };
}
function ddOptions(list) {
  return [...list.querySelectorAll('[role="option"]')].filter(o => !o.hidden && o.getAttribute('aria-disabled') !== 'true');
}
function ddActivate(p, opt) {
  p.list.querySelectorAll('[data-active]').forEach(o => o.removeAttribute('data-active'));
  if (!opt) return p.trigger.removeAttribute('aria-activedescendant');
  opt.setAttribute('data-active', '');
  p.trigger.setAttribute('aria-activedescendant', opt.id);
  opt.scrollIntoView({ block: 'nearest' });
}
function ddSetOpen(p, open) {
  p.trigger.setAttribute('aria-expanded', String(open));
  p.list.hidden = !open;
  const opts = ddOptions(p.list);
  ddActivate(p, open ? opts.find(o => o.getAttribute('aria-selected') === 'true') || opts[0] : null);
}
function ddChoose(p, opt) {
  if (!opt || opt.getAttribute('aria-disabled') === 'true') return;
  p.list.querySelectorAll('[role="option"]').forEach(o => o.setAttribute('aria-selected', String(o === opt)));
  if (p.trigger.tagName === 'INPUT') p.trigger.value = opt.querySelector('.sb-dd-label').textContent;
  else p.dd.querySelector('.sb-dd-value').innerHTML = opt.querySelector('.sb-dd-main').innerHTML;
  ddSetOpen(p, false);
  p.trigger.focus();
}
function ddClick(e) {
  const opt = e.target.closest?.('.sb-dd [role="option"]');
  if (opt) return ddChoose(ddParts(opt), opt);
  const trigger = e.target.closest?.('.sb-dd [role="combobox"]');
  document.querySelectorAll('.sb-dd [aria-expanded="true"]').forEach(t => t !== trigger && ddSetOpen(ddParts(t), false));
  if (!trigger || trigger.disabled) return;
  const p = ddParts(trigger);
  ddSetOpen(p, trigger.tagName === 'INPUT' ? true : p.list.hidden);
}
function ddKeydown(e) {
  const trigger = e.target.closest?.('.sb-dd [role="combobox"]');
  if (!trigger) return;
  const p = ddParts(trigger);
  const open = !p.list.hidden;
  const opts = ddOptions(p.list);
  const i = opts.findIndex(o => o.hasAttribute('data-active'));
  const isButton = trigger.tagName !== 'INPUT';
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (!open) return ddSetOpen(p, true);
    ddActivate(p, opts[(i + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length]);
  } else if (open && (e.key === 'Home' || e.key === 'End')) {
    e.preventDefault();
    ddActivate(p, opts[e.key === 'Home' ? 0 : opts.length - 1]);
  } else if (e.key === 'Enter' || (isButton && e.key === ' ')) {
    e.preventDefault();
    open ? ddChoose(p, opts[i]) : ddSetOpen(p, true);
  } else if (e.key === 'Escape' && open) {
    e.preventDefault();
    e.stopPropagation();
    ddSetOpen(p, false);
  } else if (e.key === 'Tab' && open) {
    ddSetOpen(p, false);
  }
}
function ddFilter(e) {
  const input = e.target.closest?.('.sb-dd input[role="combobox"]');
  if (!input) return;
  const p = ddParts(input);
  const q = input.value.trim().toLowerCase();
  p.list.querySelectorAll('[role="option"]').forEach(o => (o.hidden = !o.querySelector('.sb-dd-label').textContent.toLowerCase().includes(q)));
  const empty = p.list.querySelector('.sb-dd-empty');
  if (empty) empty.hidden = ddOptions(p.list).length > 0;
  p.trigger.setAttribute('aria-expanded', 'true');
  p.list.hidden = false;
  ddActivate(p, ddOptions(p.list)[0]);
}
document.addEventListener('click', ddClick);
document.addEventListener('keydown', ddKeydown);
document.addEventListener('input', ddFilter);
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f2f4f7;
  --gray-200: #eaecf0;
  --gray-300: #d0d5dd;
  --gray-400: #98a2b3;
  --gray-500: #667085;
  --gray-700: #344054;
  --gray-900: #101828;
  --brand-50: #f0f6fe;
  --brand-300: #9fc5f6;
  --brand-600: #3966e0;
  --success-500: #12b76a;
  --radius-md: 8px;
  --radius-full: 9999px;
  --shadow-xs: 0 1px 2px rgba(16,24,40,.05);
  --shadow-lg: 0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03);
  --focus-ring: color-mix(in srgb, var(--brand-600) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --text-md: 16px/24px;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
}
```

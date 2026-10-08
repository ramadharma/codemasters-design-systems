---
name: Dropdown menu
slug: dropdown-menu
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-06
requires: tokens.css
---

# Dropdown menu

An action menu opened from a button, a row-actions icon or the account avatar. For choosing a value in a form, use Input dropdown.

## Usage

- **Dropdown menu runs an action; Input dropdown chooses a value.** Never mix both in one list.
- Group related actions with dividers. Put the exit or destructive action (Hapus, Keluar) last, after a divider.
- All items in one menu share the same Icon, Checkbox and Shortcut setting, so labels line up. Icon and Checkbox never together.
- `Checkbox` is for multi-select filters inside a menu, such as "Tampilkan kolom"; the menu stays open while the user toggles.
- Menus may be wider than 240 for long labels. Never truncate an action label.
- Show a shortcut only when the shortcut really works.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Header | Optional. Heading: 44 high, title Text sm / Semibold `gray-700`. Avatar group: 64 high, 40 px avatar with a 10 px `success-500` online dot, name Text sm / Semibold `gray-700`, email Text sm / Regular `gray-500`, gap 12. Padding `12 16`. |
| 2 | Divider | 1 px `gray-100` between the header and each group. |
| 3 | Item | 40 high, padding `10 16`, gap 12, Text sm / Medium `gray-700`. Hover and focus `gray-50`. |
| 4 | Icon or checkbox | 16 px icon `gray-700`, or a 16 px checkbox (radius 4). Never both. |
| 5 | Shortcut | Optional, right-aligned, Text xs / Regular `gray-500`. |

The panel is 240 wide, `white`, 1 px `gray-100` border, radius 8, `shadow-lg`, and clips its content. It opens 8 below its trigger, right-aligned.

## Properties

| Component | Property | Values | Code |
| --- | --- | --- | --- |
| Dropdown | Type | Button, Icon, Avatar | `.sb-btn` + chevron, `.sb-menu-icon`, `.sb-menu-avatar` |
| Dropdown | Open | True, False | `aria-expanded` on the trigger, `hidden` on the menu |
| Dropdown menu | Header | False, Heading, Avatar group | `.sb-menu-header` + divider |
| Dropdown menu | Icon / Checkbox / Shortcut | True, False | 16 px `<svg>`; `role="menuitemcheckbox"` + `.sb-menu-box`; `.sb-menu-kbd` |
| List item | State | Default, Hover, Focus, Disabled | `:hover`, `:focus`, `aria-disabled="true"` |

## Triggers

### Button

Secondary gray `md` with the label and a 20 px chevron-down. Open: chevron up and a `0 0 0 4px` `gray-100` ring.

```html
<div class="sb-menu-wrap">
  <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" aria-haspopup="menu" aria-expanded="false" aria-controls="tr-button">Aksi klaim<svg aria-hidden="true"><!-- chevron-down --></svg></button>
  <div class="sb-menu" id="tr-button" role="menu" aria-label="Aksi klaim" hidden>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- eye --></svg><span class="sb-menu-label">Lihat detail</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- download --></svg><span class="sb-menu-label">Unduh PDF</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- user-plus --></svg><span class="sb-menu-label">Tugaskan ulang</span></button>
    </div>
    <div class="sb-menu-sep" role="separator"></div>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- trash --></svg><span class="sb-menu-label">Hapus klaim</span></button>
    </div>
  </div>
</div>
```

### Icon

20 px `more-vertical` for row actions ("⋯"), with a hit area of at least 32 × 32.

```html
<div class="sb-menu-wrap">
  <button class="sb-menu-icon" type="button" aria-label="Aksi baris" aria-haspopup="menu" aria-expanded="false" aria-controls="tr-icon"><svg aria-hidden="true"><!-- more-vertical --></svg></button>
  <div class="sb-menu" id="tr-icon" role="menu" aria-label="Aksi baris" hidden>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- eye --></svg><span class="sb-menu-label">Lihat detail</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- download --></svg><span class="sb-menu-label">Unduh PDF</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- user-plus --></svg><span class="sb-menu-label">Tugaskan ulang</span></button>
    </div>
    <div class="sb-menu-sep" role="separator"></div>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- trash --></svg><span class="sb-menu-label">Hapus klaim</span></button>
    </div>
  </div>
</div>
```

### Avatar

40 px avatar for the account menu in the sidebar or header. Open: 4 px `focus-ring` ring.

```html
<div class="sb-menu-wrap">
  <button class="sb-menu-avatar" type="button" aria-label="Menu akun" aria-haspopup="menu" aria-expanded="false" aria-controls="tr-avatar">NP</button>
  <div class="sb-menu" id="tr-avatar" role="menu" aria-label="Menu akun" hidden>
    <div class="sb-menu-header" role="presentation"><span class="sb-menu-person" aria-hidden="true">NP</span><span><span class="sb-menu-name">Nama Pengguna</span><span class="sb-menu-email">email@perusahaan.com</span></span></div>
    <div class="sb-menu-sep" role="separator"></div>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- user --></svg><span class="sb-menu-label">Lihat profil</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- settings --></svg><span class="sb-menu-label">Pengaturan</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- user-plus --></svg><span class="sb-menu-label">Undang anggota</span></button>
    </div>
    <div class="sb-menu-sep" role="separator"></div>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- log-out --></svg><span class="sb-menu-label">Keluar</span></button>
    </div>
  </div>
</div>
```

## Items and states

| Part | Default | Hover / Focus | Disabled |
| --- | --- | --- | --- |
| Row (40 high, padding `10 16`, gap 12) | no fill | `gray-50` | no fill, whole row at 50 % opacity |
| Label, Text sm / Medium | `gray-700` | `gray-700` | Default at 50 % opacity |
| Icon 16 px | `gray-700` | `gray-700` | Default at 50 % opacity |
| Checkbox 16 px, radius 4 | `white`, `gray-300` border | `brand-50` fill, `brand-600` border | Default at 50 % opacity |
| Shortcut (right-aligned) | Text xs / Regular `gray-500` | `gray-500` | Default at 50 % opacity |

### Headers

## Checkbox menu

For multi-select filters inside a menu. Toggling an item keeps the menu open; Esc or a click outside closes it.

```html
<div class="sb-menu-wrap">
  <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" aria-haspopup="menu" aria-expanded="false" aria-controls="cb-menu">Tampilkan kolom<svg aria-hidden="true"><!-- chevron-down --></svg></button>
  <div class="sb-menu" id="cb-menu" role="menu" aria-label="Tampilkan kolom" hidden>
    <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="true" aria-disabled="true"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">No. klaim</span></button>
      <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="true"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Peserta</span></button>
      <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="true"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Status</span></button>
      <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Nilai klaim</span></button>
      <button class="sb-menu-item" type="button" role="menuitemcheckbox" tabindex="-1" aria-checked="false"><span class="sb-menu-box" aria-hidden="true"><svg aria-hidden="true"><!-- check --></svg></span><span class="sb-menu-label">Tanggal masuk</span></button>
    </div>
  </div>
</div>
```

## Do and don't

**Do:** The destructive action is last, after a divider.

```html
<div class="sb-menu menu-specimen" role="menu" aria-label="Aksi baris" inert>
  <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- eye --></svg><span class="sb-menu-label">Lihat detail</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- download --></svg><span class="sb-menu-label">Unduh PDF</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- user-plus --></svg><span class="sb-menu-label">Tugaskan ulang</span></button>
    </div>
  <div class="sb-menu-sep" role="separator"></div>
  <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- trash --></svg><span class="sb-menu-label">Hapus klaim</span></button>
    </div>
</div>
```

**Don't:** Hapus klaim first, right where the pointer lands.

```html
<div class="sb-menu menu-specimen" role="menu" aria-label="Aksi baris" inert>
  <div class="sb-menu-group" role="group">
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- trash --></svg><span class="sb-menu-label">Hapus klaim</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- eye --></svg><span class="sb-menu-label">Lihat detail</span></button>
      <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1"><svg aria-hidden="true"><!-- download --></svg><span class="sb-menu-label">Unduh PDF</span></button>
    </div>
</div>
```

## Accessibility

- The trigger has `aria-haspopup="menu"`, `aria-expanded` and `aria-controls`; icon and avatar triggers also need an `aria-label`.
- The panel is `role="menu"`; items are `menuitem` or `menuitemcheckbox` with `aria-checked`. The header is `role="presentation"`, dividers `role="separator"`.
- Keyboard: Enter, Space or ↓ opens on the first item (↑ on the last); ↑ ↓ Home End move; Enter or Space picks; Esc closes and returns focus to the trigger; Tab closes.
- Disabled items keep `aria-disabled="true"` so they are announced but skipped.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Item label `gray-700` | `white` / `gray-50` | 10.46:1 / 10.01:1 | Passes |
| Shortcut, email `gray-500` | `white` | 4.97:1 | Passes |
| Checkbox border `gray-300` | `white` | 1.47:1 | **Fails** 3:1 for controls |

## Code

Load `tokens.css`, `dropdown-menu.css` (and `button.css` for the Button trigger), then `dropdown-menu.js`. Listen for `sb-menu-select` to run the action.

`dropdown-menu.css`

```css
/* Dropdown menu, Codemasters Design System
   Needs tokens.css and dropdown-menu.js;
   the Button trigger also needs button.css.

   <div class="sb-menu-wrap">
     <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md"
             aria-haspopup="menu" aria-expanded="false" aria-controls="aksi">Aksi <svg aria-hidden="true">…chevron…</svg></button>
     <div class="sb-menu" id="aksi" role="menu" aria-label="Aksi" hidden>
       <div class="sb-menu-group" role="group">
         <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1">
           <svg aria-hidden="true">…</svg><span class="sb-menu-label">Unduh PDF</span>
         </button>
       </div>
       <div class="sb-menu-sep" role="separator"></div>
       <div class="sb-menu-group" role="group">…last group: the exit or destructive action…</div>
     </div>
   </div>

   Triggers: .sb-btn (Button), .sb-menu-icon (Icon, more-vertical), .sb-menu-avatar (Avatar).
   Checkbox items: role="menuitemcheckbox" aria-checked + <span class="sb-menu-box">. Never with an icon.
   Shortcut: <span class="sb-menu-kbd">. Disabled item: aria-disabled="true". */

.sb-menu-wrap { position: relative; display: inline-flex; }

/* Triggers */
.sb-menu-wrap > .sb-btn[aria-expanded="true"] { box-shadow: var(--shadow-xs), 0 0 0 4px var(--gray-100); } /* open: chevron up + gray-100 ring */
.sb-menu-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; margin: 0; padding: 0; border: 0; border-radius: var(--radius-md); /* hit area at least 32 x 32; radius 8 like every icon button of 32+ */
  background: none; color: var(--gray-500); cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-menu-icon > svg { width: 20px; height: 20px; }
.sb-menu-icon:hover, .sb-menu-icon[aria-expanded="true"] { background: var(--gray-50); color: var(--gray-700); }
.sb-menu-icon:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-menu-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; margin: 0; padding: 0; border: 0; border-radius: var(--radius-full);
  background: var(--brand-50); font: 500 var(--text-md) var(--font); color: var(--brand-600); cursor: pointer;
  transition: box-shadow 150ms var(--ease);
}
.sb-menu-avatar:hover { box-shadow: 0 0 0 4px var(--gray-100); }
.sb-menu-avatar:focus-visible, .sb-menu-avatar[aria-expanded="true"] { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }

/* Panel: 240 wide (wider for long labels, never truncated), opens 8 below, right-aligned. */
.sb-menu {
  position: absolute; z-index: 30; top: calc(100% + 8px); inset-inline-end: 0;
  box-sizing: border-box; min-width: 240px; overflow: hidden;
  background: var(--white); border: 1px solid var(--gray-100); border-radius: var(--radius-md); box-shadow: var(--shadow-lg);
}
.sb-menu[hidden] { display: none; }
.sb-menu-group { padding: 4px 0; }
.sb-menu-sep { height: 1px; background: var(--gray-100); }

/* Header */
.sb-menu-header { display: flex; align-items: center; gap: 12px; padding: 12px 16px; }
.sb-menu-header-title { font: 600 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-menu-person { position: relative; display: inline-flex; align-items: center; justify-content: center; flex: none; width: 40px; height: 40px; border-radius: var(--radius-full); background: var(--brand-50); font: 500 var(--text-md) var(--font); color: var(--brand-600); }
.sb-menu-person::after { content: ''; position: absolute; right: -1px; bottom: -1px; width: 10px; height: 10px; border: 1.5px solid var(--white); border-radius: var(--radius-full); background: var(--success-500); }
.sb-menu-name { display: block; font: 600 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-menu-email { display: block; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }

/* Item: 40 high, padding 10 16, gap 12 */
.sb-menu-item {
  box-sizing: border-box; display: flex; align-items: center; gap: 12px;
  width: 100%; height: 40px; margin: 0; padding: 0 16px; border: 0;
  background: none; font: 500 var(--text-sm) var(--font); color: var(--gray-700); text-align: start; white-space: nowrap;
  cursor: pointer;
}
.sb-menu-item > svg { width: 16px; height: 16px; flex: none; }
.sb-menu-item:hover, .sb-menu-item:focus { outline: none; background: var(--gray-50); }
.sb-menu-item:focus-visible { box-shadow: inset 0 0 0 2px var(--brand-600); }
.sb-menu-label { flex: 1; }
.sb-menu-kbd { margin-inline-start: 16px; font: 400 var(--text-xs) var(--font); color: var(--gray-500); }
.sb-menu-item[aria-disabled="true"] { background: none; opacity: .5; cursor: not-allowed; } /* the default look at 50 % opacity */

/* Checkbox (16 px, radius 4) */
.sb-menu-box {
  box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 16px; height: 16px; border: 1px solid var(--gray-300); border-radius: var(--radius-sm); background: var(--white); color: var(--brand-600);
}
.sb-menu-box > svg { width: 12px; height: 12px; visibility: hidden; }
.sb-menu-item:hover .sb-menu-box, .sb-menu-item:focus .sb-menu-box, .sb-menu-item[aria-checked="true"] .sb-menu-box { background: var(--brand-50); border-color: var(--brand-600); }
.sb-menu-item[aria-checked="true"] .sb-menu-box > svg { visibility: visible; }

@media (prefers-reduced-motion: reduce) {
  .sb-menu-icon, .sb-menu-avatar { transition: none; }
}
```

### Script

`dropdown-menu.js`

```js
// Dropdown menu behaviour (WAI-ARIA menu button): click, Enter, Space or ↓ opens and focuses the first item,
// ↑ opens on the last; ↑ ↓ Home End move; Enter / Space picks; Esc closes back to the trigger; Tab closes.
// Checkbox items toggle and keep the menu open. Every pick fires "sb-menu-select" with the item label.
function menuParts(el) {
  const wrap = el.closest('.sb-menu-wrap');
  return wrap && { wrap, trigger: wrap.querySelector('[aria-haspopup="menu"]'), menu: wrap.querySelector('[role="menu"]') };
}
function menuItems(menu) {
  return [...menu.querySelectorAll('[role^="menuitem"]')].filter(i => i.getAttribute('aria-disabled') !== 'true');
}
function menuSetOpen(p, open, focus) {
  p.trigger.setAttribute('aria-expanded', String(open));
  p.menu.hidden = !open;
  if (open && focus) {
    const items = menuItems(p.menu);
    (focus === 'last' ? items[items.length - 1] : items[0])?.focus();
  }
}
function menuClick(e) {
  const item = e.target.closest?.('[role^="menuitem"]');
  const trigger = e.target.closest?.('.sb-menu-wrap [aria-haspopup="menu"]');
  document.querySelectorAll('.sb-menu-wrap [aria-haspopup="menu"][aria-expanded="true"]').forEach(t => {
    if (t !== trigger && !t.closest('.sb-menu-wrap').contains(e.target)) menuSetOpen(menuParts(t), false);
  });
  if (item) {
    if (item.getAttribute('aria-disabled') === 'true') return;
    const p = menuParts(item);
    if (item.getAttribute('role') === 'menuitemcheckbox') {
      item.setAttribute('aria-checked', String(item.getAttribute('aria-checked') !== 'true')); // menu stays open
    } else {
      menuSetOpen(p, false);
      p.trigger.focus();
    }
    item.dispatchEvent(new CustomEvent('sb-menu-select', { bubbles: true, detail: item.querySelector('.sb-menu-label').textContent }));
  } else if (trigger) {
    const p = menuParts(trigger);
    menuSetOpen(p, p.menu.hidden, e.detail === 0 ? 'first' : null); // keyboard "click" (Enter/Space) moves focus in
  }
}
function menuKeydown(e) {
  const trigger = e.target.closest?.('.sb-menu-wrap [aria-haspopup="menu"]');
  if (trigger && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
    e.preventDefault();
    return menuSetOpen(menuParts(trigger), true, e.key === 'ArrowUp' ? 'last' : 'first');
  }
  const item = e.target.closest?.('[role^="menuitem"]');
  if (!item) return;
  const p = menuParts(item);
  const items = menuItems(p.menu);
  const i = items.indexOf(item);
  const go = n => { e.preventDefault(); items[(n + items.length) % items.length].focus(); };
  if (e.key === 'ArrowDown') go(i + 1);
  else if (e.key === 'ArrowUp') go(i - 1);
  else if (e.key === 'Home') go(0);
  else if (e.key === 'End') go(items.length - 1);
  else if (e.key === 'Escape') { e.preventDefault(); menuSetOpen(p, false); p.trigger.focus(); }
  else if (e.key === 'Tab') menuSetOpen(p, false);
}
document.addEventListener('click', menuClick);
document.addEventListener('keydown', menuKeydown);
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
  --brand-50: #f0f6fe;
  --brand-600: #3966e0;
  --success-500: #12b76a;
  --radius-sm: 4px;
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

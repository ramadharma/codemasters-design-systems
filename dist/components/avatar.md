---
name: Avatar
slug: avatar
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-07
requires: tokens.css
---

# Avatar

A person or a company, shown as a photo, initials or a placeholder icon. Comes alone, in an overlapping group, or with a name and a secondary line.

## Usage

- Content priority: the user's photo, then initials (first + last name, at most 2 letters), then the placeholder user icon. Never leave an avatar empty.
- Online indicator for people who can be reached now; Company badge for the organisation a user belongs to, such as the insurer of a TPA user.
- Avatar groups show at most 5 avatars, then "+N" that opens a list of the rest.
- Avatar label groups sit in the sidebar profile, dropdown headers, assignee fields and table cells (`sm`).
- Demo photos and names are for mock-ups only. Real screens show the user's photo or initials.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | Circle, `brand-50` fill. 24 to 64 by size. |
| 2 | Content | Photo (cover), initials (Medium, `brand-600`) or the `user` icon (`brand-600`). |
| 3 | Status icon | Optional, bottom-right, 1.5 px white border. Online: `success-500` dot. Company: logo, 2 px outside the circle. |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Size | `xs`, `sm`, `md`, `lg`, `xl`, `2xl` | `data-size` |
| Placeholder / Text | Photo, Text, Placeholder | `<img>`, initials as text, or the `user` icon `<svg>` |
| Status icon | False, Online indicator, Company | `.sb-avatar-status` or `.sb-avatar-company` inside the avatar |
| State | Default, Hover, Focused | Only on `<button>` / `<a>`: `:hover`, `:focus-visible`. Static mockups: `data-state` |

## Content

```html
<span class="sb-avatar" data-size="xl"><img src="…" alt="Nama Pengguna"></span>
<span class="sb-avatar" data-size="xl" role="img" aria-label="Nama Pengguna">NP</span>
<span class="sb-avatar" data-size="xl" role="img" aria-label="Pengguna"><svg aria-hidden="true"><!-- user --></svg></span>
```

Photo, then initials, then the placeholder. Photos take `alt` = the person's name; an avatar next to the name is decorative (`alt=""` or `aria-hidden`).

## Sizes

```html
<span class="sb-avatar" data-size="xs" role="img" aria-label="Nama Pengguna">NP<span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="sm" role="img" aria-label="Nama Pengguna">NP<span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="md" role="img" aria-label="Nama Pengguna">NP<span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="lg" role="img" aria-label="Nama Pengguna">NP<span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="xl" role="img" aria-label="Nama Pengguna">NP<span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="2xl" role="img" aria-label="Nama Pengguna">NP<span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
```

| Size | Box | Initials | Placeholder icon | Online dot | Company badge |
| --- | --- | --- | --- | --- | --- |
| `xs` | 24 | Text xs 12 / 18 | 16 | 6 | 10 |
| `sm` | 32 | Text sm 14 / 20 | 20 | 8 | 12 |
| `md` | 40 | Text md 16 / 24 | 24 | 10 | 14 |
| `lg` | 48 | Text lg 18 / 28 | 28 | 12 | 16 |
| `xl` | 56 | Text xl 20 / 30 | 32 | 14 | 18 |
| `2xl` | 64 | Display xs 24 / 32 | 32 | 16 | 20 |

## Status icons

### Online indicator

```html
<span class="sb-avatar" data-size="xs"><img src="…" alt="Advisor A"><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="sm"><img src="…" alt="Advisor B"><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="md"><img src="…" alt="Reviewer C"><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="lg"><img src="…" alt="Analis D"><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="xl"><img src="…" alt="Analis E"><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
<span class="sb-avatar" data-size="2xl"><img src="…" alt="Admin F"><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
```

### Company

```html
<span class="sb-avatar" data-size="xs" role="img" aria-label="Advisor A">AA<img class="sb-avatar-company" src="…" alt="Asuransi A"></span>
<span class="sb-avatar" data-size="sm" role="img" aria-label="Advisor B">AB<img class="sb-avatar-company" src="…" alt="Asuransi A"></span>
<span class="sb-avatar" data-size="md" role="img" aria-label="Reviewer C">RC<img class="sb-avatar-company" src="…" alt="Asuransi A"></span>
<span class="sb-avatar" data-size="lg" role="img" aria-label="Analis D">AD<img class="sb-avatar-company" src="…" alt="Asuransi A"></span>
<span class="sb-avatar" data-size="xl" role="img" aria-label="Analis E">AE<img class="sb-avatar-company" src="…" alt="Asuransi A"></span>
<span class="sb-avatar" data-size="2xl" role="img" aria-label="Admin F">AF<img class="sb-avatar-company" src="…" alt="Asuransi A"></span>
```

The green cross logo here is a generic stand-in. Use the company's own logo file, with its name as `alt`.

## States

Only an avatar that is a button or a link (the account menu) has states. A static avatar has none.

| State | Look |
| --- | --- |
| Hover | 4 px `gray-100` ring outside the circle |
| Focused | 4 px `focus-ring` ring outside the circle (`:focus-visible`) |

## Avatar group

Overlapping avatars with a 1.5 px white ring. Hover or focus "+N" to see who else is in the group.

```html
<div class="sb-avatar-group" data-size="xs">
  <div class="sb-avatar-stack">
    <span class="sb-avatar" data-size="xs"><img src="…" alt="Advisor A"></span>
    <span class="sb-avatar" data-size="xs"><img src="…" alt="Advisor B"></span>
    <span class="sb-avatar" data-size="xs" role="img" aria-label="Reviewer C">RC</span>
    <span class="sb-avatar" data-size="xs"><img src="…" alt="Analis D"></span>
    <span class="sb-avatar" data-size="xs"><img src="…" alt="Analis E"></span>
    <span class="sb-tooltip-wrap">
      <button class="sb-avatar" type="button" data-size="xs" aria-label="5 anggota lain" aria-describedby="ag-xs-more">+5</button>
      <span class="sb-tooltip" role="tooltip" id="ag-xs-more" data-arrow="bottom-right"><span class="sb-tooltip-title">Admin F, Admin G, Reviewer H, Analis I, Admin J</span></span>
    </span>
  </div>
  <button class="sb-avatar-add" type="button" aria-label="Tambah anggota"><svg aria-hidden="true"><!-- plus --></svg></button>
</div>
<div class="sb-avatar-group" data-size="sm">
  <div class="sb-avatar-stack">
    <span class="sb-avatar" data-size="sm"><img src="…" alt="Advisor A"></span>
    <span class="sb-avatar" data-size="sm"><img src="…" alt="Advisor B"></span>
    <span class="sb-avatar" data-size="sm" role="img" aria-label="Reviewer C">RC</span>
    <span class="sb-avatar" data-size="sm"><img src="…" alt="Analis D"></span>
    <span class="sb-avatar" data-size="sm"><img src="…" alt="Analis E"></span>
    <span class="sb-tooltip-wrap">
      <button class="sb-avatar" type="button" data-size="sm" aria-label="5 anggota lain" aria-describedby="ag-sm-more">+5</button>
      <span class="sb-tooltip" role="tooltip" id="ag-sm-more" data-arrow="bottom-right"><span class="sb-tooltip-title">Admin F, Admin G, Reviewer H, Analis I, Admin J</span></span>
    </span>
  </div>
  <button class="sb-avatar-add" type="button" aria-label="Tambah anggota"><svg aria-hidden="true"><!-- plus --></svg></button>
</div>
<div class="sb-avatar-group" data-size="md">
  <div class="sb-avatar-stack">
    <span class="sb-avatar" data-size="md"><img src="…" alt="Advisor A"></span>
    <span class="sb-avatar" data-size="md"><img src="…" alt="Advisor B"></span>
    <span class="sb-avatar" data-size="md" role="img" aria-label="Reviewer C">RC</span>
    <span class="sb-avatar" data-size="md"><img src="…" alt="Analis D"></span>
    <span class="sb-avatar" data-size="md"><img src="…" alt="Analis E"></span>
    <span class="sb-tooltip-wrap">
      <button class="sb-avatar" type="button" data-size="md" aria-label="5 anggota lain" aria-describedby="ag-md-more">+5</button>
      <span class="sb-tooltip" role="tooltip" id="ag-md-more" data-arrow="bottom-right"><span class="sb-tooltip-title">Admin F, Admin G, Reviewer H, Analis I, Admin J</span></span>
    </span>
  </div>
  <button class="sb-avatar-add" type="button" aria-label="Tambah anggota"><svg aria-hidden="true"><!-- plus --></svg></button>
</div>
```

| Size | Overlap | "+N" avatar | Add button |
| --- | --- | --- | --- |
| `xs` | −4 | 24, `brand-50` fill, `brand-600` 12 / 18 Medium | 24, white, 1 px dashed `gray-300` border, `gray-400` plus icon |
| `sm` | −8 | 32, Text sm Medium | 32 |
| `md` | −12 | 40, Text md Medium | 40 |

- Gap 8 between the avatars and the add button. Show at most 5 avatars, then "+N".
- "+N" is a button that lists the rest: a tooltip for a short list, a popover when the list is long or actionable.
- The add button needs `aria-label="Tambah anggota"`.

## Avatar label group

```html
<div class="sb-avatar-label" data-size="sm">
  <span class="sb-avatar" data-size="sm" aria-hidden="true"><img src="…" alt=""></span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Advisor A</span>
    <span class="sb-avatar-sub">advisor.a@perusahaan.com</span>
  </span>
</div>
<div class="sb-avatar-label" data-size="md">
  <span class="sb-avatar" data-size="md" aria-hidden="true"><img src="…" alt=""><span class="sb-avatar-status" role="img" aria-label="Online"></span></span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Advisor A</span>
    <span class="sb-avatar-sub">advisor.a@perusahaan.com</span>
  </span>
</div>
<div class="sb-avatar-label" data-size="lg">
  <span class="sb-avatar" data-size="lg" aria-hidden="true"><img src="…" alt=""></span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Advisor A</span>
    <span class="sb-avatar-sub">advisor.a@perusahaan.com</span>
  </span>
</div>
<div class="sb-avatar-label" data-size="xl">
  <span class="sb-avatar" data-size="xl" aria-hidden="true"><img src="…" alt=""></span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Advisor A</span>
    <span class="sb-avatar-sub">advisor.a@perusahaan.com</span>
  </span>
</div>
```

| Size | Avatar | Gap | Name (Semibold `gray-700`) | Secondary (Regular `gray-500`) |
| --- | --- | --- | --- | --- |
| `sm` | 32 | 10 | Text sm 14 / 20 | Text xs 12 / 18 |
| `md` | 40 | 12 | Text sm 14 / 20 | Text sm 14 / 20 |
| `lg` | 48 | 12 | Text md 16 / 24 | Text md 16 / 24 |
| `xl` | 56 | 16 | Text lg 18 / 28 | Text md 16 / 24 |

### Clickable

As a button or link the whole group is one hit target. Hover: avatar `gray-100` ring and name `gray-900`. Focus: avatar `focus-ring` ring and name `gray-900`.

```html
<button type="button" class="sb-avatar-label" data-size="md">
  <span class="sb-avatar" data-size="md" aria-hidden="true">NP</span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Nama Pengguna</span>
    <span class="sb-avatar-sub">email@perusahaan.com</span>
  </span>
</button>
<button type="button" class="sb-avatar-label" data-size="md">
  <span class="sb-avatar" data-size="md" aria-hidden="true">NP</span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Nama Pengguna</span>
    <span class="sb-avatar-sub">Hover</span>
  </span>
</button>
<button type="button" class="sb-avatar-label" data-size="md">
  <span class="sb-avatar" data-size="md" aria-hidden="true">NP</span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Nama Pengguna</span>
    <span class="sb-avatar-sub">Focused</span>
  </span>
</button>
```

### Long text

Long names and emails truncate with an ellipsis; show the full value in a tooltip.

```html
<div class="sb-avatar-label" data-size="md">
  <span class="sb-avatar" data-size="md" aria-hidden="true">NS</span>
  <span class="sb-avatar-label-text">
    <span class="sb-avatar-name">Nama Pengguna yang Sangat Panjang Sekali</span>
    <span class="sb-avatar-sub">nama.pengguna.yang.panjang@perusahaan-asuransi.co.id</span>
  </span>
</div>
```

## Do and don't

**Do:** No photo: initials. No name either: the placeholder icon.

```html
<span class="sb-avatar" data-size="lg" role="img" aria-label="Nama Pengguna">NP</span>
<span class="sb-avatar" data-size="lg" role="img" aria-label="Nama Pengguna"><svg aria-hidden="true"><!-- user --></svg></span>
```

**Don't:** An empty circle, or three letters. Initials are at most two: first and last name.

```html
<span class="sb-avatar" data-size="lg" aria-hidden="true"></span>
<span class="sb-avatar" data-size="lg" aria-hidden="true">NPA</span>
```

## Accessibility

- A photo needs `alt` = the person's name. Initials and the placeholder use `role="img"` with `aria-label`.
- An avatar next to the visible name is decorative: `alt=""` or `aria-hidden="true"`, so the name is not read twice.
- The online dot is colour only: give it `role="img"` and `aria-label="Online"`.
- An avatar that opens a menu is a `<button>` with a label such as "Akun Nama Pengguna".

| Pair | Ratio | Needed | Result |
| --- | --- | --- | --- |
| Initials and icon `brand-600` on `brand-50` | 4.65:1 | 4.5:1 | Passes |
| Name `gray-700`, secondary `gray-500` on `white` | 10.46:1, 4.97:1 | 4.5:1 | Passes |
| Add button: plus `gray-400` on `white` | 2.58:1 | 3:1 | **Fails** |
| Add button: dashed border `gray-300` on `white` | 1.47:1 | 3:1 | **Fails** |

> **Warning:** The add button is a faint `gray-400` plus inside a `gray-300` dashed border, both below 3:1. Same open decision as the help icon and input borders: `gray-500` passes.

## Code

Load `tokens.css` and `avatar.css`. Avatar groups with "+N" also use `tooltip.css`. The initials helper is optional.

`avatar.css`

```css
/* Avatar, avatar group and avatar label group, Codemasters Design System
   Needs tokens.css.

   <span class="sb-avatar" data-size="md" role="img" aria-label="Nama Pengguna">NP</span>
   <span class="sb-avatar" data-size="md"><img src="foto.jpg" alt="Nama Pengguna"></span>

   Content     photo <img> | initials (text) | placeholder user icon <svg>. In that order of preference; never empty.
   data-size   xs 24 | sm 32 | md 40 | lg 48 | xl 56 | 2xl 64
   Status      <span class="sb-avatar-status" role="img" aria-label="Online"></span> (online dot)
               <img class="sb-avatar-company" src="logo.png" alt="Nama perusahaan"> (company badge)
   State       only when the avatar is a <button> or <a>: hover and :focus-visible rings.
               data-state="hover" | "focus" forces a state in static mockups and docs only. */

.sb-avatar {
  --av: 40px; --av-icon: 24px; --av-dot: 10px; --av-co: 14px;
  position: relative; display: inline-grid; place-items: center; flex: none; box-sizing: border-box;
  width: var(--av); height: var(--av); margin: 0; padding: 0; border: 0; border-radius: var(--radius-full);
  background: var(--brand-50); color: var(--brand-600); font: 500 var(--text-md) var(--font); text-decoration: none;
}
.sb-avatar[data-size="xs"]  { --av: 24px; --av-icon: 16px; --av-dot: 6px;  --av-co: 10px; font: 500 var(--text-xs) var(--font); }
.sb-avatar[data-size="sm"]  { --av: 32px; --av-icon: 20px; --av-dot: 8px;  --av-co: 12px; font: 500 var(--text-sm) var(--font); }
.sb-avatar[data-size="lg"]  { --av: 48px; --av-icon: 28px; --av-dot: 12px; --av-co: 16px; font: 500 var(--text-lg) var(--font); }
.sb-avatar[data-size="xl"]  { --av: 56px; --av-icon: 32px; --av-dot: 14px; --av-co: 18px; font: 500 var(--text-xl) var(--font); }
.sb-avatar[data-size="2xl"] { --av: 64px; --av-icon: 32px; --av-dot: 16px; --av-co: 20px; font: 500 var(--display-xs) var(--font); }
.sb-avatar > img:not(.sb-avatar-company) { width: 100%; height: 100%; border-radius: inherit; object-fit: cover; }
.sb-avatar > svg { width: var(--av-icon); height: var(--av-icon); }

/* Status, bottom-right, 1.5 px white border. Online: success-500 dot. Company: logo, 2 px outside the circle. */
.sb-avatar-status { position: absolute; right: 0; bottom: 0; box-sizing: border-box; width: var(--av-dot); height: var(--av-dot); border: 1.5px solid var(--white); border-radius: var(--radius-full); background: var(--success-500); }
.sb-avatar-company { position: absolute; right: -2px; bottom: -2px; box-sizing: border-box; width: var(--av-co); height: var(--av-co); border: 1.5px solid var(--white); border-radius: var(--radius-full); background: var(--white); object-fit: cover; }

/* States: only for an avatar that is a button or link (account menu). A 4 px ring outside the circle. */
:is(button, a).sb-avatar { cursor: pointer; transition: box-shadow 150ms var(--ease); }
:is(button, a).sb-avatar:is(:hover, [data-state="hover"]) { box-shadow: 0 0 0 4px var(--gray-100); }
:is(button, a).sb-avatar:is(:focus-visible, [data-state="focus"]) { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }

/* ---- Avatar group: overlapping avatars with a 1.5 px white ring, then "+N", then the add button 8 apart. */
.sb-avatar-group { --av-overlap: -12px; display: inline-flex; align-items: center; gap: 8px; }
.sb-avatar-group[data-size="xs"] { --av-overlap: -4px; }
.sb-avatar-group[data-size="sm"] { --av-overlap: -8px; }
.sb-avatar-stack { display: flex; align-items: center; }
.sb-avatar-stack > :is(.sb-avatar, .sb-tooltip-wrap) + * { margin-left: var(--av-overlap); }
.sb-avatar-stack .sb-avatar { box-shadow: 0 0 0 1.5px var(--white); }
.sb-avatar-stack button.sb-avatar:is(:focus-visible, [data-state="focus"]) { box-shadow: 0 0 0 1.5px var(--white), 0 0 0 5.5px var(--focus-ring); }
/* Add: white, dashed gray-300 border, gray-400 plus icon at half the box. */
.sb-avatar-add {
  display: inline-grid; place-items: center; flex: none; box-sizing: border-box; width: var(--av, 40px); height: var(--av, 40px);
  margin: 0; padding: 0; border: 1px dashed var(--gray-300); border-radius: var(--radius-full); background: var(--raised-sheen-light) var(--white); color: var(--gray-400); cursor: pointer;
  transition-property: color, border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-avatar-group[data-size="xs"] .sb-avatar-add { --av: 24px; }
.sb-avatar-group[data-size="sm"] .sb-avatar-add { --av: 32px; }
.sb-avatar-add > svg { width: calc(var(--av, 40px) / 2); height: calc(var(--av, 40px) / 2); }
.sb-avatar-add:is(:hover, [data-state="hover"]) { border-color: var(--gray-400); color: var(--gray-500); }
.sb-avatar-add:is(:focus-visible, [data-state="focus"]) { outline: none; box-shadow: 0 0 0 4px var(--focus-ring); }

/* ---- Avatar label group: avatar + name + secondary line. Long text truncates (show it in a tooltip). */
.sb-avatar-label { display: inline-flex; align-items: center; gap: 12px; max-width: 100%; margin: 0; padding: 0; border: 0; background: none; text-align: start; text-decoration: none; }
.sb-avatar-label[data-size="sm"] { gap: 10px; } /* between the 8 and 12 steps */
.sb-avatar-label[data-size="xl"] { gap: 16px; }
.sb-avatar-label-text { display: grid; min-width: 0; }
.sb-avatar-name, .sb-avatar-sub { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sb-avatar-name { font: 600 var(--text-sm) var(--font); color: var(--gray-700); transition: color 150ms var(--ease); }
.sb-avatar-sub { font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-avatar-label[data-size="sm"] .sb-avatar-sub { font: 400 var(--text-xs) var(--font); }
.sb-avatar-label[data-size="lg"] .sb-avatar-name { font: 600 var(--text-md) var(--font); }
.sb-avatar-label[data-size="xl"] .sb-avatar-name { font: 600 var(--text-lg) var(--font); }
.sb-avatar-label:is([data-size="lg"], [data-size="xl"]) .sb-avatar-sub { font: 400 var(--text-md) var(--font); }
/* Clickable group (button or link): one hit target; the avatar takes the ring, the name darkens. */
:is(button, a).sb-avatar-label { cursor: pointer; }
:is(button, a).sb-avatar-label:focus-visible { outline: none; }
:is(button, a).sb-avatar-label:is(:hover, [data-state="hover"]) .sb-avatar { box-shadow: 0 0 0 4px var(--gray-100); }
:is(button, a).sb-avatar-label:is(:focus-visible, [data-state="focus"]) .sb-avatar { box-shadow: 0 0 0 4px var(--focus-ring); }
:is(button, a).sb-avatar-label:is(:hover, :focus-visible, [data-state]) .sb-avatar-name { color: var(--gray-900); }
.sb-avatar-label .sb-avatar { transition: box-shadow 150ms var(--ease); }

@media (prefers-reduced-motion: reduce) {
  .sb-avatar, .sb-avatar-add, .sb-avatar-name { transition: none; }
}
```

### Initials helper

`avatar-initials.js`

```js
// Avatar initials: first + last name, at most 2 letters. When there is no photo, show these;
// when there is no name either, show the placeholder user icon. Never leave an avatar empty.
function initials(name) {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return '';
  return ((words[0][0] || '') + (words.length > 1 ? words[words.length - 1][0] : '')).toUpperCase();
}

// initials('Nama Pengguna') === 'NP', initials('Advisor') === 'A'
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-100: #f2f4f7;
  --gray-300: #d0d5dd;
  --gray-400: #98a2b3;
  --gray-500: #667085;
  --gray-700: #344054;
  --gray-900: #101828;
  --brand-50: #f0f6fe;
  --brand-600: #3966e0;
  --success-500: #12b76a;
  --radius-full: 9999px;
  --raised-sheen-light: linear-gradient(180deg, rgb(255 255 255 / 0), rgb(16 24 40 / .04));
  --focus-ring: color-mix(in srgb, var(--brand-600) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --display-xs: 24px/32px;
  --text-xl: 20px/30px;
  --text-lg: 18px/28px;
  --text-md: 16px/24px;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
}
```

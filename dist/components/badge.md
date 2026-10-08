---
name: Badge
slug: badge
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-06
requires: tokens.css
---

# Badge

A small, non-interactive label for a status, category or count. Status pills, claim type tags, AI confidence and filter chips are all badges.

## Usage

- **A badge is not a button.** If it does something, use a Button. The only interactive part allowed is the X close icon.
- **Status always has a text label.** Colour alone never carries meaning.
- **One size per context:** `sm` in tables and dense lists, `md` in headers and cards, `lg` in large summary areas.
- **One colour pair per status.** A claim status keeps the same colour in tables, headers, summary cards and filters (see Status pills).

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | Radius 16 (fully rounded), no border. Height and padding from the size. Fill `50` of the colour family (Gray: `gray-100`). |
| 2 | Leading element | Optional: 8 px dot, 16 px flag or avatar, or a 12 px icon. Dot and icons use the `500` step. |
| 3 | Label | Medium weight. Text xs at `sm`, Text sm at `md` and `lg`. Text in the `700` step. |
| 4 | Trailing element | Optional: 12 px icon, or the X close button that removes the badge. |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Size | `sm`, `md`, `lg` | `data-size="sm"` |
| Icon | False, Dot, Country, Avatar, X close, Icon left, Icon right, Only | `data-icon="dot"`, `"country"`, `"avatar"`, `"x-close"`, `"icon-left"`, `"icon-right"`, `"only"` |
| Color | Gray, Primary, Error, Warning, Success, Blue gray, Blue light, Blue, Indigo, Purple, Pink, Rosé, Orange | `data-color="success"` (omit for Gray) |

## Sizes

```html
<span class="sb-badge" data-size="sm" data-color="primary">Badge sm</span>
<span class="sb-badge" data-size="md" data-color="primary">Badge md</span>
<span class="sb-badge" data-size="lg" data-color="primary">Badge lg</span>
```

| Size | Height | Padding | Text style | Icon-only |
| --- | --- | --- | --- | --- |
| `sm` | 22 | `2 8` | Text xs / Medium | 20 × 20 |
| `md` | 24 | `2 10` | Text sm / Medium | 24 × 24 |
| `lg` | 28 | `4 12` | Text sm / Medium | 28 × 28 |

## Icon

```html
<span class="sb-badge" data-size="sm" data-color="success" data-icon="dot">
  <span class="sb-badge-dot" aria-hidden="true"></span>
  Aktif
</span>
<span class="sb-badge" data-size="sm" data-icon="country">
  <span class="sb-badge-img" aria-hidden="true"><svg aria-hidden="true"><!-- flag-id --></svg></span>
  Indonesia
</span>
<span class="sb-badge" data-size="sm" data-color="primary" data-icon="avatar">
  <span class="sb-badge-img sb-badge-avatar" aria-hidden="true"><svg aria-hidden="true"><!-- user --></svg></span>
  Advisor
</span>
<span class="sb-badge" data-size="sm" data-color="success" data-icon="icon-left">
  <svg aria-hidden="true"><!-- arrow-up --></svg>
  12%
</span>
<span class="sb-badge" data-size="sm" data-color="primary" data-icon="icon-right">
  Lihat
  <svg aria-hidden="true"><!-- arrow-right --></svg>
</span>
<span class="sb-badge" data-size="sm" data-icon="x-close">
  Inpatient
  <button class="sb-badge-x" type="button" aria-label="Hapus Inpatient"><svg aria-hidden="true"><!-- x --></svg></button>
</span>
<span class="sb-badge" data-size="sm" data-color="error" data-icon="only" role="img" aria-label="Naik">
  <svg aria-hidden="true"><!-- arrow-up --></svg>
</span>
```

| Icon | Element | Gap | Padding change (sm) |
| --- | --- | --- | --- |
| Dot | 8 px dot, `500` step | 6 | left 6 (md: left 8) |
| Country, Avatar | 16 px round flag or avatar | 6 | left 3 |
| Icon left | 12 px icon, e.g. arrow-up for a trend | 4 | left 6 |
| Icon right | 12 px icon, e.g. arrow-right | 4 | right 6 |
| X close | 12 px × button that removes the badge | 4 | right 6 |
| Only | 12 px icon, no label; needs an `aria-label` | — | padding 4 |

> **Note:** Every size follows the same padding rule: the icon side is 2 px tighter than the text side, and a flag or avatar sits as far from the edge as from the top and bottom.

### Chips (X close)

A filter chip is a Gray `sm` badge with X close. The × button is the only interactive part and says what it removes: `aria-label="Hapus Inpatient"`.

```html
<span class="sb-badge" data-size="sm" data-icon="x-close">
  Inpatient
  <button class="sb-badge-x" type="button" aria-label="Hapus Inpatient"><svg aria-hidden="true"><!-- x --></svg></button>
</span>
<span class="sb-badge" data-size="sm" data-icon="x-close">
  Outpatient
  <button class="sb-badge-x" type="button" aria-label="Hapus Outpatient"><svg aria-hidden="true"><!-- x --></svg></button>
</span>
<span class="sb-badge" data-size="sm" data-icon="x-close">
  Cashless
  <button class="sb-badge-x" type="button" aria-label="Hapus Cashless"><svg aria-hidden="true"><!-- x --></svg></button>
</span>
```

## Colours

Every colour uses the same steps of its scale: fill `50`, text `700`, dot and icons `500`. **Gray** is the exception: fill `gray-100`, text `gray-700`, dot `gray-500`.

| Color | Token family | Use in the app |
| --- | --- | --- |
| Gray | `gray` (fill 100) | Neutral info, Baru, chips |
| Primary | `brand` | Selected filters, Sembuh AI labels |
| Error | `error` | Ditolak, AI confidence < 80 % |
| Warning | `warning` | Memeriksa Eligibility, AI confidence 80–89 % |
| Success | `success` | Disetujui, AI confidence ≥ 90 % |
| Blue gray | `blue-gray` | Single / Multiple claim type |
| Blue light | `blue-light` | Not used yet |
| Blue | `blue` | Siap dianalisis, Inpatient |
| Indigo | `indigo` | Siap diekstrak, Optical |
| Purple | `purple` | Siap Ditinjau, Outpatient |
| Pink | `pink` | Maternity |
| Rosé | `rose` | Not used yet |
| Orange | `orange` | Perlu Revisi, Potensi Duplikat, Dental |

The fill is the plain `50` colour of the family.

## Status pills

Every claim status has one fixed colour pair, used in tables, headers, summary cards and filters alike. Each pill is a Badge `sm`.

| Colour | Statuses |
| --- | --- |
| Gray | Baru |
| Indigo | Siap diekstrak |
| Blue | Siap dianalisis (list), Memeriksa FWA, Sedang Ditinjau, Proses QC |
| Purple | Siap dianalisis (detail), Siap Ditinjau, Sedang dianalisis |
| Warning | Memeriksa Eligibility |
| Orange | Memeriksa FWA (list), Perlu Revisi, Potensi Duplikat |
| Success | Disetujui: Sembuh, Disetujui: TPA |
| Error | Ditolak |
| Blue gray | Single, Multiple |

> **Warning:** **Open question from DESIGN.md §2.5.** Siap dianalisis is Blue in the list and Purple on the detail page, and Memeriksa FWA is both Blue and Orange. That breaks the one-colour-per-status rule. Pick one colour for each before the next release.

### Claim type tags

```html
<span class="sb-badge" data-size="sm" data-color="blue">Inpatient</span>
<span class="sb-badge" data-size="sm" data-color="purple">Outpatient</span>
<span class="sb-badge" data-size="sm" data-color="pink">Maternity</span>
<span class="sb-badge" data-size="sm" data-color="indigo">Optical</span>
<span class="sb-badge" data-size="sm" data-color="orange">Dental</span>
```

### AI confidence

**≥ 90 %** Success, **80–89 %** Warning, **< 80 %** Error. Below 80 % the claim also shows a warning banner: "AI confidence berada dibawah 80%, silakan periksa klaim kembali."

```html
<span class="sb-badge" data-size="sm" data-color="success">95%</span>
<span class="sb-badge" data-size="sm" data-color="warning">84%</span>
<span class="sb-badge" data-size="sm" data-color="error">72%</span>
```

## Badge group

A badge plus a short message in one pill, for announcements and inline notices ("Fitur baru · …", "Error · Ada masalah …"). When the whole group links somewhere, add the arrow icon and make the full pill the link target.

```html
<a class="sb-badge-group" href="#/badge/badge-group" data-size="md" data-color="primary" data-theme="light">
  <span class="sb-badge" data-size="sm">Fitur baru</span>
  Ringkasan AI kini bisa diedit
  <svg aria-hidden="true"><!-- arrow-right --></svg>
</a>
<a class="sb-badge-group" href="#/badge/badge-group" data-size="lg" data-color="primary" data-theme="light" data-badge="trailing">
  Ringkasan AI kini bisa diedit
  <span class="sb-badge" data-size="md">Baru</span>
  <svg aria-hidden="true"><!-- arrow-right --></svg>
</a>
```

| Property | Values | Code |
| --- | --- | --- |
| Badge | Leading, Trailing | `data-badge="trailing"` (omit for Leading) |
| Icon | True, False | 12 px arrow-right `<svg>` at the end |
| Size | `md`, `lg` | `data-size="md"` |
| Color | Primary, Gray, Error, Warning, Success | `data-color="primary"` |
| Theme | Light, Medium, Dark | `data-theme="light"` |

| Part | `md` | `lg` |
| --- | --- | --- |
| Container | radius 16, padding 4, gap 8 | radius 16, padding 4, gap 12 |
| Padding on the message side | 12 | 14 |
| Message text | Text xs / Medium, `700` | Text sm / Medium, `700` |
| Inner badge | Badge `sm` | Badge `md` |

| Theme | Container | Inner badge |
| --- | --- | --- |
| Light | `50` | `white` fill, `700` text |
| Medium | `100` | `50` fill, `700` text |
| Dark | `50` | solid `600` fill (Gray: `gray-700`), `white` text |

## Do and don't

**Do:** Status in colour and in words.

```html
<span class="sb-badge" data-size="sm" data-color="error" data-icon="dot">
  <span class="sb-badge-dot" aria-hidden="true"></span>
  Ditolak
</span>
```

**Don't:** Colour alone. Users who cannot tell red from orange lose the status.

```html
<span class="sb-badge" data-size="sm" data-color="error" data-icon="only" role="img" aria-label="Ditolak">
  <svg aria-hidden="true"><!-- x --></svg>
</span>
```

**Do:** An action is a Button.

```html
<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Lihat Detail</button>
```

**Don't:** A badge that looks clickable. Badges label; they do not act.

```html
<span class="sb-badge" data-size="sm" data-color="primary" data-icon="icon-right">
  Lihat Detail
  <svg aria-hidden="true"><!-- arrow-right --></svg>
</span>
```

## Accessibility

- Write the status as text. A dot or colour only supports it.
- Icon-only badges need `role="img"` and an `aria-label`.
- The X close button needs `aria-label="Hapus …"` that names what it removes, and a visible focus outline.
- A badge group that links somewhere is one `<a>`: the whole pill is the target.

Text on fill, WCAG 2.1. AA needs 4.5:1; badge text is 12–14 px.

| Pair | Ratio | AA |
| --- | --- | --- |
| Badge `700` on `50`, all 13 colours | 5.13:1 (Success) to 9.49:1 (Gray) | Passes |
| Badge group Medium: `700` on `100` | 4.72:1 (Orange) to 9.49:1 (Gray); the five group colours ≥ 4.76:1 | Passes |
| Badge group Dark: `white` on `600`, Primary / Error / Gray | 5.06:1 / 4.83:1 / 10.46:1 | Passes |
| Badge group Dark: `white` on `warning-600` | 3.49:1 | **Fails** |
| Badge group Dark: `white` on `success-600` | 3.73:1 | **Fails** |

> **Warning:** Dark theme inner badges fail AA on Warning and Success. Use Light or Medium for those colours, or move the Dark fill to `700` (white on `warning-700` is 5.43:1, on `success-700` 5.41:1). Decision for the design team.

## Code

Load `tokens.css`, then `badge.css`. It covers Badge and Badge group.

`badge.css`

```css
/* Badge, Codemasters Design System
   Needs tokens.css.

   <span class="sb-badge" data-size="sm" data-color="success">Disetujui: Sembuh</span>

   data-size   sm | md | lg
   data-color  gray | primary | error | warning | success | blue-gray | blue-light | blue | indigo | purple | pink | rose | orange
   data-icon   dot | country | avatar | icon-left | icon-right | x-close | only   (omit for text only)
   A badge is not a button. The only interactive part allowed is the X close button (aria-label "Hapus …"). */

.sb-badge {
  --bdg-h: 22px; --bdg-px: 8px; --bdg-type: var(--text-xs);
  --bdg-bg: var(--gray-100); --bdg-fg: var(--gray-700); --bdg-icon: var(--gray-500);
  box-sizing: border-box;
  display: inline-flex; align-items: center; gap: 4px;
  height: var(--bdg-h); padding: 0 var(--bdg-px);
  font: 500 var(--bdg-type) var(--font); white-space: nowrap;
  color: var(--bdg-fg); background: var(--bdg-bg);
  border-radius: var(--radius-xl); /* fully rounded, no border */
}
.sb-badge > svg { width: 12px; height: 12px; flex: none; color: var(--bdg-icon); }
.sb-badge-dot { width: 8px; height: 8px; flex: none; border-radius: var(--radius-full); background: var(--bdg-icon); }
.sb-badge-img { display: inline-flex; width: 16px; height: 16px; flex: none; border-radius: var(--radius-full); overflow: hidden; }
.sb-badge-img > svg { width: 100%; height: 100%; }
/* Placeholder avatar: user icon in brand-600 on brand-50 (DESIGN.md Avatar). Real screens use the photo or initials. */
.sb-badge-avatar { align-items: center; justify-content: center; background: var(--brand-50); color: var(--brand-600); }
.sb-badge-avatar > svg { width: 12px; height: 12px; }
.sb-badge-x {
  display: inline-flex; margin: -2px; padding: 2px; border: 0; border-radius: var(--radius-sm);
  background: none; color: var(--bdg-icon); cursor: pointer;
  transition: color 150ms var(--ease);
}
.sb-badge-x > svg { width: 12px; height: 12px; }
.sb-badge-x:hover { color: var(--bdg-fg); }
.sb-badge-x:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 0; }

/* Sizes. Height comes from the text line plus the vertical padding (sm 2, md 2, lg 4). */
.sb-badge[data-size="md"] { --bdg-h: 24px; --bdg-px: 10px; --bdg-type: var(--text-sm); }
.sb-badge[data-size="lg"] { --bdg-h: 28px; --bdg-px: 12px; --bdg-type: var(--text-sm); }

/* Icon variants. md and lg follow the sm rule. */
.sb-badge[data-icon="dot"], .sb-badge[data-icon="icon-left"] { padding-inline-start: calc(var(--bdg-px) - 2px); }
.sb-badge[data-icon="icon-right"], .sb-badge[data-icon="x-close"] { padding-inline-end: calc(var(--bdg-px) - 2px); }
.sb-badge[data-icon="dot"], .sb-badge[data-icon="country"], .sb-badge[data-icon="avatar"] { gap: 6px; }
.sb-badge[data-icon="country"], .sb-badge[data-icon="avatar"] { padding-inline-start: calc((var(--bdg-h) - 16px) / 2); }
.sb-badge[data-icon="only"] { width: var(--bdg-h); padding: 0; justify-content: center; }
.sb-badge[data-icon="only"]:not([data-size="md"], [data-size="lg"]) { --bdg-h: 20px; }

/* Colours */
.sb-badge[data-color="primary"] { --bdg-bg: var(--brand-50); --bdg-fg: var(--brand-700); --bdg-icon: var(--brand-500); }
.sb-badge[data-color="error"] { --bdg-bg: var(--error-50); --bdg-fg: var(--error-700); --bdg-icon: var(--error-500); }
.sb-badge[data-color="warning"] { --bdg-bg: var(--warning-50); --bdg-fg: var(--warning-700); --bdg-icon: var(--warning-500); }
.sb-badge[data-color="success"] { --bdg-bg: var(--success-50); --bdg-fg: var(--success-700); --bdg-icon: var(--success-500); }
.sb-badge[data-color="blue-gray"] { --bdg-bg: var(--blue-gray-50); --bdg-fg: var(--blue-gray-700); --bdg-icon: var(--blue-gray-500); }
.sb-badge[data-color="blue-light"] { --bdg-bg: var(--blue-light-50); --bdg-fg: var(--blue-light-700); --bdg-icon: var(--blue-light-500); }
.sb-badge[data-color="blue"] { --bdg-bg: var(--blue-50); --bdg-fg: var(--blue-700); --bdg-icon: var(--blue-500); }
.sb-badge[data-color="indigo"] { --bdg-bg: var(--indigo-50); --bdg-fg: var(--indigo-700); --bdg-icon: var(--indigo-500); }
.sb-badge[data-color="purple"] { --bdg-bg: var(--purple-50); --bdg-fg: var(--purple-700); --bdg-icon: var(--purple-500); }
.sb-badge[data-color="pink"] { --bdg-bg: var(--pink-50); --bdg-fg: var(--pink-700); --bdg-icon: var(--pink-500); }
.sb-badge[data-color="rose"] { --bdg-bg: var(--rose-50); --bdg-fg: var(--rose-700); --bdg-icon: var(--rose-500); }
.sb-badge[data-color="orange"] { --bdg-bg: var(--orange-50); --bdg-fg: var(--orange-700); --bdg-icon: var(--orange-500); }

/* Badge group: a badge plus a short message in one pill.
   <a class="sb-badge-group" href="…" data-color="primary" data-theme="light">
     <span class="sb-badge" data-size="sm">Fitur baru</span>
     Ringkasan AI kini bisa diedit
     <svg aria-hidden="true">…arrow-right…</svg>
   </a>
   data-size md | lg, data-color primary | gray | error | warning | success,
   data-theme light | medium | dark, data-badge leading | trailing */
.sb-badge-group {
  --g50: var(--brand-50); --g100: var(--brand-100); --g500: var(--brand-500); --g600: var(--brand-600); --g700: var(--brand-700);
  box-sizing: border-box;
  display: inline-flex; align-items: center; gap: 8px;
  padding: 4px; padding-inline-end: 12px;
  font: 500 var(--text-xs) var(--font); white-space: nowrap; text-decoration: none;
  color: var(--g700); background: var(--g50);
  border-radius: var(--radius-xl);
}
.sb-badge-group > svg { width: 12px; height: 12px; flex: none; color: var(--g500); }
.sb-badge-group > .sb-badge { --bdg-bg: var(--white); --bdg-fg: var(--g700); --bdg-icon: var(--g500); }
.sb-badge-group[data-size="lg"] { gap: 12px; padding-inline-end: 14px; font-size: 14px; line-height: 20px; }
.sb-badge-group[data-badge="trailing"] { padding-inline: 12px 4px; }
.sb-badge-group[data-badge="trailing"][data-size="lg"] { padding-inline: 14px 4px; }
.sb-badge-group[data-theme="medium"] { background: var(--g100); }
.sb-badge-group[data-theme="medium"] > .sb-badge { --bdg-bg: var(--g50); }
.sb-badge-group[data-theme="dark"] > .sb-badge { --bdg-bg: var(--g600); --bdg-fg: var(--white); --bdg-icon: var(--white); }
.sb-badge-group[data-color="gray"] { --g50: var(--gray-50); --g100: var(--gray-100); --g500: var(--gray-500); --g600: var(--gray-700); --g700: var(--gray-700); }
.sb-badge-group[data-color="error"] { --g50: var(--error-50); --g100: var(--error-100); --g500: var(--error-500); --g600: var(--error-600); --g700: var(--error-700); }
.sb-badge-group[data-color="warning"] { --g50: var(--warning-50); --g100: var(--warning-100); --g500: var(--warning-500); --g600: var(--warning-600); --g700: var(--warning-700); }
.sb-badge-group[data-color="success"] { --g50: var(--success-50); --g100: var(--success-100); --g500: var(--success-500); --g600: var(--success-600); --g700: var(--success-700); }
a.sb-badge-group:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 2px; }
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f2f4f7;
  --gray-500: #667085;
  --gray-700: #344054;
  --brand-50: #f0f6fe;
  --brand-100: #dfeafb;
  --brand-500: #5183eb;
  --brand-600: #3966e0;
  --brand-700: #2e51cd;
  --error-50: #fef3f2;
  --error-100: #fee4e2;
  --error-500: #f04438;
  --error-600: #d92d20;
  --error-700: #b42318;
  --warning-50: #fffaeb;
  --warning-100: #fef0c7;
  --warning-500: #f79009;
  --warning-600: #dc6803;
  --warning-700: #b54708;
  --success-50: #ecfdf3;
  --success-100: #d1fadf;
  --success-500: #12b76a;
  --success-600: #039855;
  --success-700: #027a48;
  --blue-gray-50: #f8f9fc;
  --blue-gray-500: #4e5ba6;
  --blue-gray-700: #363f72;
  --blue-light-50: #f0f9ff;
  --blue-light-500: #0ba5ec;
  --blue-light-700: #026aa2;
  --blue-50: #eff8ff;
  --blue-500: #2e90fa;
  --blue-700: #175cd3;
  --indigo-50: #eef4ff;
  --indigo-500: #6172f3;
  --indigo-700: #3538cd;
  --purple-50: #f4f3ff;
  --purple-500: #7a5af8;
  --purple-700: #5925dc;
  --pink-50: #fdf2fa;
  --pink-500: #ee46bc;
  --pink-700: #c11574;
  --rose-50: #fff1f3;
  --rose-500: #f63d68;
  --rose-700: #c01048;
  --orange-50: #fff6ed;
  --orange-500: #fb6514;
  --orange-700: #c4320a;
  --radius-sm: 4px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
}
```

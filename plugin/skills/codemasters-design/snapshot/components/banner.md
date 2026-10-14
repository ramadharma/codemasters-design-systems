---
name: Banner
slug: banner
category: Components
status: In progress
version: 1.0.0
updated: 2026-10-14
requires: tokens.css
---

# Banner

A message about a page, a card or a form in one of four roles: info, success, warning and error. Inline inside the content, or as a full-width strip under the header bar.

## Usage

- Use a banner for a message that stays while it is true: a claim needs review, a form could not be sent, the plan is old. For a short confirmation that goes away by itself, use a Toast.
- Pick the tone by what the person must do. Error: fix something before going on. Warning: check something before deciding. Success: an action worked and changed something lasting. Info: context that helps, nothing to do.
- Inline banners sit at the top of the card or form they are about. Page banners sit under the header bar and are about the whole page.
- One banner per place. Two messages of the same tone become one banner; never stack three.
- The title says what happened in a few words; the description says why and what to do next. A short message needs only one line.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | Radius 8, padding `14 16`, 1 px border in the tone's 200 step, fill in its 50 step. Icon and text 12 apart. |
| 2 | Icon | 20 px, the tone's 500 step: `info`, `check-circle`, `alert`, `alert-circle`. Top-aligned with the first line. |
| 3 | Title | Optional. Text sm / Semibold, the tone's 700 step. |
| 4 | Description | Text sm / Regular, the tone's 700 step, 4 below the title. Links inside are Semibold and underlined in the same colour. |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Tone | Info, Success, Warning, Error | `data-tone` (omit for Info) |
| Placement | Inline, Page | `data-placement="page"` (omit for Inline) |
| Title | True, False | `<p class="sb-banner-title">` before the description |

## Types

### Tones

| Tone | Fill | Border | Text | Icon |
| --- | --- | --- | --- | --- |
| Info | `blue-50` | `blue-200` | `blue-700` | `blue-500` `info` |
| Success | `success-50` | `success-200` | `success-700` | `success-500` `check-circle` |
| Warning | `warning-50` | `warning-200` | `warning-700` | `warning-500` `alert` |
| Error | `error-50` | `error-200` | `error-700` | `error-500` `alert-circle` |

### One line

Without a title, for short messages. The container is 48 high.

```html
<div class="sb-banner">
  <svg aria-hidden="true"><!-- info --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-desc">Data peserta diperbarui dari sistem polis 5 menit lalu.</p>
  </div>
</div>
```

### Page

Full width under the header bar: no radius, no side borders, only a bottom border; padding `12 32` so the text lines up with the page content.

## Dark theme

On dark surfaces the 50 fill glows, so the fill is 12 % of the tone's 500 over `gray-900`, with an 800 border, 300 text and 400 icon. Switch the theme in the site header to compare.

## Do and don't

**Do:** Says what went wrong and how to fix it.

```html
<div class="sb-banner" data-tone="error">
  <svg aria-hidden="true"><!-- alert-circle --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-title">Klaim gagal dikirim</p>
    <p class="sb-banner-desc">Nomor polis tidak ditemukan. Periksa nomor di kartu peserta, lalu kirim lagi.</p>
  </div>
</div>
```

**Don't:** A vague error. The person cannot act on it.

```html
<div class="sb-banner" data-tone="error">
  <svg aria-hidden="true"><!-- alert-circle --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-title">Terjadi kesalahan</p>
    <p class="sb-banner-desc">Silakan coba lagi nanti.</p>
  </div>
</div>
```

**Do:** Related messages of one tone in one banner.

```html
<div class="sb-banner" data-tone="warning">
  <svg aria-hidden="true"><!-- alert --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-desc">3 item melewati batas manfaat dan 1 obat di luar formularium.</p>
  </div>
</div>
```

**Don't:** A stack of banners. None of them stands out.

```html
<div class="sb-banner" data-tone="warning">
  <svg aria-hidden="true"><!-- alert --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-desc">3 item melewati batas manfaat.</p>
  </div>
</div>
<div class="sb-banner" data-tone="warning">
  <svg aria-hidden="true"><!-- alert --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-desc">1 obat di luar formularium.</p>
  </div>
</div>
<div class="sb-banner">
  <svg aria-hidden="true"><!-- info --></svg>
  <div class="sb-banner-text">
    <p class="sb-banner-desc">Plan 2025 dipakai.</p>
  </div>
</div>
```

## Accessibility

- The tone never shows by colour alone: each tone has its own icon, and the text says what happened.
- The icon is decoration (`aria-hidden`); the title carries the meaning.
- A banner that is on the page when it loads needs no role. A banner that appears after an action gets `role="alert"` (error, warning) or `role="status"` (info, success), so screen readers announce it.
- After a failed submit, move focus to the error banner (give it `tabindex="-1"`) so keyboard users land on the message.

| Text | On | Light | Dark | AA |
| --- | --- | --- | --- | --- |
| Info `blue-700` / dark `blue-300` | fill | 5.57:1 | 8.58:1 | Passes |
| Success `success-700` / `success-300` | fill | 5.13:1 | 9.82:1 | Passes |
| Warning `warning-700` / `warning-300` | fill | 5.20:1 | 9.63:1 | Passes |
| Error `error-700` / `error-300` | fill | 6.05:1 | 8.25:1 | Passes |

## Code

Load `tokens.css`, then `banner.css`. No script.

`banner.css`

```css
/* Banner, Codemasters Design System
   Needs tokens.css. No script.

   <div class="sb-banner" data-tone="warning">
     <svg aria-hidden="true">…alert…</svg>
     <div class="sb-banner-text">
       <p class="sb-banner-title">Klaim perlu ditinjau ulang</p>
       <p class="sb-banner-desc">3 item melewati batas manfaat rawat inap.</p>
     </div>
   </div>

   data-tone       info | success | warning | error (the icon follows the tone: info, check-circle, alert, alert-circle)
   data-placement  page: a full-width strip under the header bar (omit for inline, inside a card or form)
   One line        drop .sb-banner-title and keep only .sb-banner-desc
   role            role="alert" (error, warning) or role="status" (info, success) only when the banner appears after an action */

.sb-banner {
  --ban-bg: var(--blue-50); --ban-border: var(--blue-200); --ban-fg: var(--blue-700); --ban-icon: var(--blue-500);
  box-sizing: border-box; display: flex; align-items: flex-start; gap: 12px;
  padding: 14px 16px; /* control padding exception: 14 + the 20 px line lands one line on 48 */
  border: 1px solid var(--ban-border); border-radius: var(--radius-md);
  background: var(--ban-bg); font: 400 var(--text-sm) var(--font); color: var(--ban-fg);
}
.sb-banner > svg { width: 20px; height: 20px; flex: none; color: var(--ban-icon); }
.sb-banner-text { display: grid; flex: 1; gap: 4px; min-width: 0; }
.sb-banner-title, .sb-banner-desc { margin: 0; }
.sb-banner-title { font-weight: 600; }
.sb-banner a { color: inherit; font-weight: 600; text-decoration: underline; text-underline-offset: 2px; }
.sb-banner a:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; border-radius: var(--radius-sm); }

.sb-banner[data-tone="success"] { --ban-bg: var(--success-50); --ban-border: var(--success-200); --ban-fg: var(--success-700); --ban-icon: var(--success-500); }
.sb-banner[data-tone="warning"] { --ban-bg: var(--warning-50); --ban-border: var(--warning-200); --ban-fg: var(--warning-700); --ban-icon: var(--warning-500); }
.sb-banner[data-tone="error"] { --ban-bg: var(--error-50); --ban-border: var(--error-200); --ban-fg: var(--error-700); --ban-icon: var(--error-500); }

/* Page: full width under the header bar. No radius and no side borders, padding 12 32 (the page padding). */
.sb-banner[data-placement="page"] { padding: 12px 32px; border-width: 0 0 1px; border-radius: 0; }

/* Dark theme: a quiet tint of the 500 step over gray-900, 800 border, 300 text, 400 icon. */
:root[data-theme="dark"] .sb-banner { --ban-bg: color-mix(in srgb, var(--blue-500) 12%, var(--gray-900)); --ban-border: var(--blue-800); --ban-fg: var(--blue-300); --ban-icon: var(--blue-400); }
:root[data-theme="dark"] .sb-banner[data-tone="success"] { --ban-bg: color-mix(in srgb, var(--success-500) 12%, var(--gray-900)); --ban-border: var(--success-800); --ban-fg: var(--success-300); --ban-icon: var(--success-400); }
:root[data-theme="dark"] .sb-banner[data-tone="warning"] { --ban-bg: color-mix(in srgb, var(--warning-500) 12%, var(--gray-900)); --ban-border: var(--warning-800); --ban-fg: var(--warning-300); --ban-icon: var(--warning-400); }
:root[data-theme="dark"] .sb-banner[data-tone="error"] { --ban-bg: color-mix(in srgb, var(--error-500) 12%, var(--gray-900)); --ban-border: var(--error-800); --ban-fg: var(--error-300); --ban-icon: var(--error-400); }
```

## Tokens used

```css
:root {
  --gray-900: #101828;
  --brand-600: #3966e0;
  --error-50: #fef3f2;
  --error-200: #fecdca;
  --error-300: #fda29b;
  --error-400: #f97066;
  --error-500: #f04438;
  --error-700: #b42318;
  --error-800: #912018;
  --warning-50: #fffaeb;
  --warning-200: #fedf89;
  --warning-300: #fec84b;
  --warning-400: #fdb022;
  --warning-500: #f79009;
  --warning-700: #b54708;
  --warning-800: #93370d;
  --success-50: #ecfdf3;
  --success-200: #a6f4c5;
  --success-300: #6ce9a6;
  --success-400: #32d583;
  --success-500: #12b76a;
  --success-700: #027a48;
  --success-800: #05603a;
  --blue-50: #eff8ff;
  --blue-200: #b2ddff;
  --blue-300: #84caff;
  --blue-400: #53b1fd;
  --blue-500: #2e90fa;
  --blue-700: #175cd3;
  --blue-800: #1849a9;
  --radius-sm: 4px;
  --radius-md: 8px;
  --font: 'Timeless Sans', sans-serif;
  --text-sm: 14px/20px;
}
```

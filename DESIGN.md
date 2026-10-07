# Codemasters — Design System

The shared visual language of Codemasters and its companies, Sembuh AI and Flipmaster. It grew out of the Sembuh AI web app
(Dashboard Analitik + Insurance Portal) and is written so it can be reused for new
web pages, documentation sites, slides and other design work. Every value here is taken from the live app
(`public/css/dashboard.css`); when the two disagree, the CSS wins and this file should be updated.

---

## 1. Principles

1. **Data first, chrome second.** White cards on a near-white page; colour is reserved for status, series and the one
   primary action. No decorative gradients or illustrations.
2. **One primary action per view.** The blue button is the next step of the flow (Mulai Analisis, Kirim ke Advisor,
   Keputusan). Everything else is secondary (white, gray border) or orange for Pending.
3. **Status is always a coloured pill.** Every claim status has one fixed colour pair (§2.5) used in tables, headers,
   summary cards and filters alike.
4. **Never empty.** Every cell, field and card shows a value. Placeholder data is deterministic (same record, same value).
5. **Full numbers.** Money is written in full Rupiah (`Rp 1.725.283.300`), never abbreviated, except on chart axis ticks.
6. **Indonesian UI copy**, sentence case for body text, Title Case for buttons, tabs and card titles.

---

## 2. Colour

Source of truth: Figma **Codemasters – Design Systems → Foundations → Colors**
([node 1525-271581](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1525-271581)).
Usage notes: Figma **Foundations → Colors → Notes and documentation**
([node 1525-274384](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1525-274384)).

Every colour is a step on one of the scales below. Do not write a hex that is not on a scale; reference the token.
Token name = `--{family}-{step}` (`Rosé` is written `rose`, `Blue gray` is `blue-gray`, `Blue light` is `blue-light`).

**Define before you design.** Never pick a colour with the colour picker. Pick a colour style (Figma) or a token
(code). Free-picked colours give inconsistent screens, no hierarchy, and developers cannot tell which colour to use.

**Palette structure.** The palette has four groups:

| Group | Families | Role |
|---|---|---|
| Neutral | Gray | Foundation of the system: text, form fields, backgrounds, dividers. |
| Primary | Brand | The brand colour. All interactive elements: buttons, links, inputs. Start with one primary colour. |
| Accent | Blue gray, Blue light, Blue, Indigo, Purple, Pink, Rosé, Orange | Secondary, supporting colours. Use them to catch attention or to support Brand, and in labels and badges. |
| Feedback | Success, Warning, Error | Semantic states. Visual feedback and warnings to the user. |

**Full scales from the start.** Every family has 11 steps (25–900), also when a screen needs only two of them. The
component library grows, and a short palette boxes it in.

### 2.1 Primary colours

The main colours; they make up most of every screen.

| Family | Role |
|---|---|
| **Gray** | Neutral foundation. Almost everything in the UI: text, form fields, backgrounds, dividers. |
| **Brand** | The primary colour. All interactive elements: buttons, links, inputs, active tabs. Sets the feel of the product. |
| **Error** | Error states and destructive actions (delete, reject, remove a user). |
| **Warning** | Potentially destructive or on-hold actions; confirmations that must catch the eye. |
| **Success** | Positive actions, positive trends, successful confirmations. |

| Step | Gray | Brand | Error | Warning | Success |
|---|---|---|---|---|---|
| 25 | `#FCFCFD` | `#FAFCFF` | `#FFFBFA` | `#FFFCF5` | `#F6FEF9` |
| 50 | `#F9FAFB` | `#F0F6FE` | `#FEF3F2` | `#FFFAEB` | `#ECFDF3` |
| 100 | `#F2F4F7` | `#DFEAFB` | `#FEE4E2` | `#FEF0C7` | `#D1FADF` |
| 200 | `#EAECF0` | `#C5DBFA` | `#FECDCA` | `#FEDF89` | `#A6F4C5` |
| 300 | `#D0D5DD` | `#9FC5F6` | `#FDA29B` | `#FEC84B` | `#6CE9A6` |
| 400 | `#98A2B3` | `#6CA1F0` | `#F97066` | `#FDB022` | `#32D583` |
| 500 | `#667085` | `#5183EB` | `#F04438` | `#F79009` | `#12B76A` |
| 600 | `#475467` | `#3966E0` | `#D92D20` | `#DC6803` | `#039855` |
| 700 | `#344054` | `#2E51CD` | `#B42318` | `#B54708` | `#027A48` |
| 800 | `#1D2939` | `#2942A7` | `#912018` | `#93370D` | `#05603A` |
| 900 | `#101828` | `#273B83` | `#7A271A` | `#7A2E0E` | `#054F31` |

Plus `--white: #FFFFFF`.

### 2.2 Secondary colours

For pills, tags, alerts, labels and chart series. Use them sparingly, as accents; the primary colours take precedence.

| Step | Blue gray | Blue light | Blue | Indigo | Purple | Pink | Rosé | Orange |
|---|---|---|---|---|---|---|---|---|
| 25 | `#FCFCFD` | `#F5FBFF` | `#F5FAFF` | `#F5F8FF` | `#FAFAFF` | `#FEF6FB` | `#FFF5F6` | `#FFFAF5` |
| 50 | `#F8F9FC` | `#F0F9FF` | `#EFF8FF` | `#EEF4FF` | `#F4F3FF` | `#FDF2FA` | `#FFF1F3` | `#FFF6ED` |
| 100 | `#EAECF5` | `#E0F2FE` | `#D1E9FF` | `#E0EAFF` | `#EBE9FE` | `#FCE7F6` | `#FFE4E8` | `#FFEAD5` |
| 200 | `#D5D9EB` | `#B9E6FE` | `#B2DDFF` | `#C7D7FE` | `#D9D6FE` | `#FCCEEE` | `#FECDD6` | `#FDDCAB` |
| 300 | `#AFB5D9` | `#7CD4FD` | `#84CAFF` | `#A4BCFD` | `#BDB4FE` | `#FAA7E0` | `#FEA3B4` | `#FEB273` |
| 400 | `#717BBC` | `#36BFFA` | `#53B1FD` | `#8098F9` | `#9B8AFB` | `#F670C7` | `#FD6F8E` | `#FD853A` |
| 500 | `#4E5BA6` | `#0BA5EC` | `#2E90FA` | `#6172F3` | `#7A5AF8` | `#EE46BC` | `#F63D68` | `#FB6514` |
| 600 | `#3E4784` | `#0086C9` | `#1570EF` | `#444CE7` | `#6938EF` | `#DD2590` | `#E31B54` | `#EC4A0A` |
| 700 | `#363F72` | `#026AA2` | `#175CD3` | `#3538CD` | `#5925DC` | `#C11574` | `#C01048` | `#C4320A` |
| 800 | `#293056` | `#065986` | `#1849A9` | `#2D31A6` | `#4A1FB8` | `#9E165F` | `#A11043` | `#9C2A10` |
| 900 | `#101323` | `#0B4A6F` | `#194185` | `#2D3282` | `#3E1C96` | `#851651` | `#89123E` | `#7E2410` |

### 2.3 How the scales are used

- **Fill / border / text pattern** for any tinted element: `50` fill, `200` border, `700` text, `500` icon.
  Use `25` for very quiet row tints (flagged / review rows).
- **Text on white**: `700`–`900` for text, `500` and up only for icons or large text. Steps `25`–`400` never carry text
  on white.
- **Solid fills with white text** (buttons): `500`–`900`.

| Token | Use in the app |
|---|---|
| `gray-25` | Page background, subtle card fill, inner boxes |
| `gray-50` | Table header, hover row, secondary hover |
| `gray-100` | Chips, menu borders, dividers in menus, skeletons |
| `gray-200` | Row dividers, inner card borders |
| `gray-300` | Card, input and tab borders |
| `gray-400` | Inactive icons, muted text, input hover border |
| `gray-500` | Secondary text, labels, placeholders |
| `gray-600` | Supporting text that needs more weight than `gray-500` |
| `gray-700` | Form labels, secondary button text |
| `gray-800` | Sidebar hover / active item |
| `gray-900` | Body text, sidebar background, toast |
| `brand-25` | Inactive tab, AI summary fill |
| `brand-50` | Selected range, Secondary color button |
| `brand-100` | Secondary color button hover |
| `brand-200` | Disabled primary button, AI summary border |
| `brand-300` | Input focus border, disabled Secondary color text, light Sembuh AI series |
| `brand-500` | **Primary**: buttons, active tab, Sembuh AI series |
| `brand-600` | Primary button hover, Link color text |
| `brand-700` | Secondary color / Tertiary color button text, Link color hover, table ID links, tab text |
| `brand-800` | Deep accent |

**Grays: few, used the same way every time.** Do not add grays outside the scale. Give each gray one job and keep it
in every component, for example `gray-300` is always the input border and `gray-200` is always the divider. Reference
example from Figma, a date picker:

| Part | Token |
|---|---|
| Trigger button and input border | `gray-300` |
| Input fill | `gray-25` |
| Input value text | `gray-900` |
| Navigation chevrons, days outside the month | `gray-500` |
| Day hover fill | `gray-50` |
| Footer divider | `gray-200` |

### 2.4 Semantic roles

| Role | Fill | Border | Text | Icon / strong |
|---|---|---|---|---|
| Success | `success-50` | `success-200` | `success-700` | icon `success-500` |
| Warning | `warning-50` (row tint `warning-25`) | `warning-200` / `warning-300` | `warning-700` | icon `warning-500`, strong `warning-800` |
| Error | `error-50` (row tint `error-25`) | `error-200` | `error-700` | icon `error-500`, strong `error-600` |
| Info | `blue-50` | `blue-200` | `blue-700` | icon `blue-500` |
| Pending (button) | `warning-500`, hover `warning-600` | `warning-500` | `white` | — |

### 2.5 Status pills

One pair per status: `background / text`, always `50 / 700` of one family (Gray: `100 / 700`). Each pill is a
Badge `sm` (§6 Badges). Implemented as `.q-*` classes that set
`--qbg` and `--qfg`.

| Class | Family | Statuses |
|---|---|---|
| `q-gray` | `gray-100 / gray-700` | Baru |
| `q-indigo` | `indigo` | Siap diekstrak |
| `q-blue` | `blue` | Siap dianalisis (list), Memeriksa FWA, Sedang Ditinjau, Proses QC |
| `q-purple` | `purple` | Siap dianalisis (detail), Siap Ditinjau, Sedang dianalisis |
| `q-amber` | `warning` | Memeriksa Eligibility |
| `q-orange` | `orange` | Memeriksa FWA (list), Perlu Revisi, Potensi Duplikat |
| `q-green` | `success` | Disetujui: Sembuh, Disetujui: TPA |
| `q-red` | `error` | Ditolak |
| `q-slate` | `blue-gray` | Single / Multiple claim type |

Claim type tags: Inpatient `blue`, Outpatient `purple`, Maternity `pink`, Optical `indigo`, Dental `orange`.

AI confidence: **≥ 90 %** `success`, **80–89 %** `warning`, **< 80 %** `error`, plus a warning banner
"AI confidence berada dibawah 80%, silakan periksa klaim kembali."

### 2.6 Data visualisation

| Series | Solid (approved / main) | Light (rejected / secondary) |
|---|---|---|
| Sembuh AI | `brand-500` | `brand-300` |
| TPA | `orange-500` | `orange-300` |

- Extra series take the `500` step of a secondary family in this order: `blue-light`, `purple`, `pink`, `indigo`,
  `blue-gray`; their light variant is the `300` step.
- Approved = solid, Rejected = light fill (bars, sankey) or **dashed** line (`6 4`) in line charts.
- Line charts: one point per x label, centred on it; lines only, a dot appears on hover.
- Unfocused series fade to 15–25 % opacity on hover/legend focus.
- Up = bad (more cost) is `error-600`; down = good is `success-600`.

---

## 3. Typography

Source of truth: Figma **Foundations → Typography**
([node 1023-36826](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1023-36826)).
Usage notes: **Typography → Notes and documentation**
([node 1518-346785](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1518-346785)).

Font: **Inter** (Google Fonts), fallback `sans-serif` (decided 2026-10-07; replaced Manrope). One typeface for display and text. Numbers use
`font-variant-numeric: tabular-nums` in tables, KPIs and amounts. Every text uses a style from the scale below; do not
set a size, line height or tracking by hand.

### 3.1 Type scale

Every style has four weights: Regular 400, Medium 500, Semibold 600, Bold 700. Figma style name =
`{Style}/{Weight}`, for example `Text sm/Medium`. Rem values assume a 16 px root.

| Style | Size | Line height | Tracking | Token prefix |
|---|---|---|---|---|
| Display 2xl | 72 px / 4.5rem | 90 px / 5.625rem | -2 % (`-0.02em`) | `--display-2xl` |
| Display xl | 60 px / 3.75rem | 72 px / 4.5rem | -2 % (`-0.02em`) | `--display-xl` |
| Display lg | 48 px / 3rem | 60 px / 3.75rem | -2 % (`-0.02em`) | `--display-lg` |
| Display md | 36 px / 2.25rem | 44 px / 2.75rem | -2 % (`-0.02em`) | `--display-md` |
| Display sm | 30 px / 1.875rem | 38 px / 2.375rem | 0 | `--display-sm` |
| Display xs | 24 px / 1.5rem | 32 px / 2rem | 0 | `--display-xs` |
| Text xl | 20 px / 1.25rem | 30 px / 1.875rem | 0 | `--text-xl` |
| Text lg | 18 px / 1.125rem | 28 px / 1.75rem | 0 | `--text-lg` |
| Text md | 16 px / 1rem | 24 px / 1.5rem | 0 | `--text-md` |
| Text sm | 14 px / 0.875rem | 20 px / 1.25rem | 0 | `--text-sm` |
| Text xs | 12 px / 0.75rem | 18 px / 1.125rem | 0 | `--text-xs` |

Figma also has `Text xl/Regular underlined` and `Text lg/Medium underlined` for inline links.

### 3.2 Rules

- **Display vs text.** Display styles are for headings only (H1–H6), never for running copy. Text styles cover
  everything else: body, labels, UI elements.
- **Base size 16 px** (`Text md`): paragraphs, inputs, dropdown options, buttons. Dense app UI (tables, tabs, labels)
  steps down to `Text sm`.
- **Line height.** Body text 1.5–2× the size (16 → 24). The bigger the text, the tighter the ratio: display text
  1–1.25× (60 → 72). The scale already does this; do not override it.
- **Letter spacing.** Display md and larger use -2 %. Figma stores this as a percentage; in CSS write it as
  `letter-spacing: -0.02em`, never as `%`.
- **Weights.** Regular for body, Medium for labels, tabs and values, Semibold for titles and buttons. Bold is in the
  scale but the app does not use it yet; reserve it for display headings outside the app (slides, marketing).

### 3.3 Use in the app

| Style / weight | Use |
|---|---|
| Display xs / Semibold | Page title (header bar), breadcrumb ID, KPI value |
| Text xl / Semibold | Card title, dialog title |
| Text xl / Medium | Stat number |
| Text lg / Medium | Group title inside a card, KPI label |
| Text md / Regular · Medium · Semibold | Body, inputs, dropdown options · values · buttons |
| Text sm / Regular · Medium | Default UI text, table cells · tabs, form labels, menu items |
| Text xs / Regular · Medium | Captions, field labels in fact grids, sub-amounts · pills |
| Micro 10 / 16, Regular | Stat card labels, step notes. **Off-scale**, app only; not in Figma. Do not use in new work. |

Colour pairing: titles and values `gray-900`, labels `gray-500`, form labels `gray-700`.

### 3.4 Changing text styles in Figma

Text styles cascade to every component that uses them.

1. Open the style: click the edit-style icon next to the style, or select a text layer and click it from there.
2. Change the property (typeface, size, line height).
3. Change **all** text styles in one pass, not one at a time as you meet them. Large files take time to update. The
   **Batch Styler** plugin edits many text and colour styles at once.
4. Keep the sizes and line heights of the scale; change only the typeface if the brand needs it.

When a Figma text style changes, update §3 and §9 of this file in the same change.

---

## 4. Spacing, grid, radius, elevation, motion

Source: Figma **Foundations → Grids & spacing**: Spacing
([node 1532-353525](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1532-353525)),
Grid layouts ([node 1532-353584](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1532-353584)),
Notes and documentation ([node 1532-353109](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1532-353109)).

### 4.1 Spacing

A fixed set of spacing values removes guesswork and gives every screen the same rhythm. Pick from this set only; do not
use a value that is on the 4 px grid but not in the set (use 128, not 124).

| Token | rem (16 px base) | px |
|---|---|---|
| `--space-1` | 0.25rem | 4 |
| `--space-2` | 0.5rem | 8 |
| `--space-3` | 0.75rem | 12 |
| `--space-4` | 1rem | 16 |
| `--space-5` | 1.25rem | 20 |
| `--space-6` | 1.5rem | 24 |
| `--space-8` | 2rem | 32 |
| `--space-10` | 2.5rem | 40 |
| `--space-12` | 3rem | 48 |
| `--space-16` | 4rem | 64 |
| `--space-20` | 5rem | 80 |
| `--space-24` | 6rem | 96 |
| `--space-32` | 8rem | 128 |
| `--space-40` | 10rem | 160 |
| `--space-48` | 12rem | 192 |
| `--space-56` | 14rem | 224 |
| `--space-64` | 16rem | 256 |

Token number × 4 = px.

**Rules**
- **4 px soft grid.** Every spacing value, size and position is divisible by 4. Prefer multiples of 8; use the 4 px steps
  (4, 12, 20) only for fine adjustments.
- **Line things up.** Objects align on both axes, vertically and horizontally.
- **Same component, same spacing.** Similar components reuse the same values so the vertical rhythm repeats.
- **Control padding exception.** Buttons, inputs and tabs may use an inner padding off the set (`10 18`, `10 14`,
  `9 16`) when that makes the outer height land on the grid (40 / 44 / 52). Gaps between elements never do.
- Figma tip: set **Preferences → Nudge amount → Big nudge** to 8 px, so Shift + arrow moves by one grid step.

**Use in the app**
- Page padding 32; gap between cards 24; card padding 24 (compact cards 16).
- Inside a card: 16 between blocks, 12 between rows of a list, 8 between inline items.
- The app also uses `2` and `6` (for example the 6 px gap between a field label and its control). They are off the
  Figma scale; do not use them in new work, use 4 or 8.

### 4.2 Containers

Content sits in a centred container with a fixed max width.

| Token | rem | px |
|---|---|---|
| `--container-sm` | 40rem | 640 |
| `--container-md` | 48rem | 768 |
| `--container-lg` | 64rem | 1024 |
| `--container-xl` | 80rem | 1280 |

### 4.3 Grid layouts

| Breakpoint | Frame | Container | Side padding | Content width | Columns | Gutter | Column width |
|---|---|---|---|---|---|---|---|
| Desktop | 1440 | 1280 (`container-xl`), centred, 80 outer margin | 32 | 1216 | 12 | 32 | 72 |
| Tablet | 768 | 768, full width | 32 | 704 | 6 | 32 | ~90.7 (auto) |
| Mobile | 375 | 375, full width | 16 | 343 | 4 | 16 | ~73.75 (auto) |

- Columns stretch (auto width); gutters and side padding are fixed.
- Inside a container, sub-grids of **12, 6, 5, 3 or 2** auto columns split a section (for example a row of 3 KPI cards
  or a 2-column form).
- Elements span whole columns and start on a column edge.

**Use in the app.** The app is desktop only (min width 1280). The grid applies to the content area right of the
sidebar: body padding 32 = grid side padding, gap 24 between cards.

### 4.4 Radius

| Value | Token | Use |
|---|---|---|
| 4 | `--radius-sm` | Checkboxes, calendar days, progress and slider tracks, targets under 24 px (help icon, badge ×) |
| 8 | `--radius-md` | Icon buttons of 32 px and up, buttons, inputs, dropdown menus, tab tops (`8 8 0 0`), inner cards, banners |
| 12 | `--radius-lg` | Cards, dialogs, popover panels |
| 16 | `--radius-xl` | Badges, tags, chips |
| 9999 | `--radius-full` | Avatar, toggle, radio, check circle, dots |

Components use only these tokens. 6 was dropped (2026-10-07): checkbox `md` and calendar days use 4, editor icons (icon buttons) use 8.

### 4.5 Elevation: shadows

Source: Figma **Foundations → Shadows & blurs → Shadows**
([node 1532-352912](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1532-352912)).
A shadow puts an element on the z-axis: the higher the layer, the bigger the shadow. All shadows use `gray-900`
(`16,24,40`) at low opacity. Use only these seven; do not write a custom shadow.

| Token | Figma | CSS value |
|---|---|---|
| `--shadow-xs` | `Shadow/xs` | `0 1px 2px rgba(16,24,40,.05)` |
| `--shadow-sm` | `Shadow/sm` | `0 1px 3px rgba(16,24,40,.1), 0 1px 2px rgba(16,24,40,.06)` |
| `--shadow-md` | `Shadow/md` | `0 4px 8px -2px rgba(16,24,40,.1), 0 2px 4px -2px rgba(16,24,40,.06)` |
| `--shadow-lg` | `Shadow/lg` | `0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03)` |
| `--shadow-xl` | `Shadow/xl` | `0 20px 24px -4px rgba(16,24,40,.08), 0 8px 8px -4px rgba(16,24,40,.03)` |
| `--shadow-2xl` | `Shadow/2xl` | `0 24px 48px -12px rgba(16,24,40,.18)` |
| `--shadow-3xl` | `Shadow/3xl` | `0 32px 64px -12px rgba(16,24,40,.14)` |

Use in the app, from lowest to highest layer:

| Layer | Shadow |
|---|---|
| Page, cards, inner boxes | none (cards have only a `1px solid gray-300` border) |
| Buttons, inputs | `shadow-xs` |
| Menus, popovers, dropdown panels, toast, dialogs | `shadow-lg` |
| Floating chart tooltip | `shadow-lg` drawn as a filter so it follows the arrow shape: `filter: drop-shadow(0 12px 8px rgba(16,24,40,.08)) drop-shadow(0 4px 3px rgba(16,24,40,.03))` |

`sm`, `md`, `xl`, `2xl` and `3xl` are not used in the app yet. When a new layer needs one, keep the order: an element
that sits above another gets the bigger shadow.

### 4.6 Elevation: background blurs

Source: Figma **Foundations → Shadows & blurs → Blurs**
([node 1532-352913](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1532-352913)).
A background blur also lifts an element on the z-axis: it blurs what is behind a translucent surface. Figma's blur
radius is twice the CSS `blur()` value.

| Token | Figma | CSS value (`backdrop-filter`) |
|---|---|---|
| `--blur-sm` | `Background blur/sm`, radius 8 | `blur(4px)` |
| `--blur-md` | `Background blur/md`, radius 16 | `blur(8px)` |
| `--blur-lg` | `Background blur/lg`, radius 24 | `blur(12px)` |
| `--blur-xl` | `Background blur/xl`, radius 40 | `blur(20px)` |

- A blur needs a translucent fill to show: **light** `rgba(255,255,255,.6)` (white 60 %) with `gray-900` text, or
  **dark** `rgba(52,64,84,.6)` (`gray-700` 60 %) with white text.
- Use blur sparingly, as a style accent: scrims behind dialogs, overlays on images or charts. Never put body text or
  tables on a blurred surface that has no fill.
- The app does not use blur yet; the modal scrim is a flat `rgba(0,0,0,.2)`.

### 4.7 Motion
- Easing `--ease: cubic-bezier(.22,.61,.36,1)`; menus use `cubic-bezier(.2,0,0,1)`.
- `pop` (menus, dialogs): fade + 4 px drop, 150 ms. `rise` (cards, rows, toast): fade + 8 px rise, 300–500 ms.
- Hover colour changes 150 ms; button press `scale(.96)`; chevrons rotate 180° in 200 ms.

### 4.8 Focus

Default for any focusable element: `outline: 2px solid brand-500; outline-offset: 2px` (use `:focus-visible`).
Components with their own focus style replace it:
- **Focus ring token:** `--focus-ring: color-mix(in srgb, var(--brand-500) 20%, transparent)`, drawn as
  `box-shadow: 0 0 0 4px var(--focus-ring)`. One ring colour for every component.
- Buttons (all hierarchies except Link, incl. social buttons): the 4 px focus ring on top of `shadow-xs` where the
  variant has one (§6 Buttons); destructive buttons keep an `error-100` ring. Link buttons keep the outline.
- Inputs: border `brand-300` + the focus ring (error: border `error-300` + ring `error-100`).

---

## 5. Layout

- **Desktop app**, minimum width 1280 px, designed at 1440.
- **Sidebar**: fixed, `gray-900`; collapsed 72 px (icons + tooltips), open 280 px (labels, group titles "Menu",
  "Manajemen"). Item 44 px tall, radius 8; active/hover `gray-800`, active label and icon white, inactive icons `gray-400`.
  Profile avatar at the bottom.
- **Header bar**: sticky, white, 80 px tall, padding `24 32`, bottom border `gray-200`. Title left (Display xs),
  actions right (gap 8).
- **Body**: padding 32, vertical stack with gap 24, laid out on the 12-column grid (§4.3).
- **Detail page**: header bar → fact card (7-column grid, `gray-25` fill) → sticky tab row → tab panels.

---

## 6. Components

### Buttons

Source: Figma **Shared components → Buttons**: Button
([node 1038-34411](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1038-34411)),
Social button ([node 1256-130788](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1256-130788)),
Social button groups ([node 1256-132638](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1256-132638)),
Notes and documentation ([node 1532-357715](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1532-357715)).

Figma component `Button` with properties **Size** (`sm`, `md`, `lg`, `xl`, `2xl`) × **Hierarchy** (7) ×
**Icon** (`False`, `Leading`, `Trailing`, `Dot`, `Only`) × **Destructive** (`False`, `True`) × **State**
(`Default`, `Hover`, `Focused`, `Disabled`).

**Rules**
- **A button looks like a button.** Always a rectangle with radius 8 and a fill or a border. Do not turn an action
  into bare text, an underlined word or text with an arrow; users then have to search for it. (Link hierarchies are
  for inline links, not for actions.)
- **One primary action per view.** Every other action steps down the hierarchy: Primary → Secondary color /
  Secondary gray → Tertiary → Link. Several secondary actions are fine; give them a consistent order.
- **Order in a button row:** least important on the left, primary on the right, gap 12. Example: Batal (Tertiary
  gray) · Simpan Draf (Secondary color) · Ajukan (Secondary gray) · Kirim (Primary).
- **Without hierarchy, users must read every label.** Never give all buttons in a row the same style.
- **Destructive actions are not automatically red.** Most of them (Hapus, Tolak in a dialog with other choices) use a
  Secondary gray button. Use `Destructive=True` only when the destructive action **is** the primary action of the
  view, so the user sees it is high-consequence.
- Labels are verbs in Title Case (§7). An icon-only button always has an `aria-label` and a tooltip.

**Hierarchy × state** (fill / border / text; all have a 1 px border, `shadow-xs` on bordered variants)

| Hierarchy | Default | Hover | Disabled | Focused ring |
|---|---|---|---|---|
| Primary | `brand-500` / `brand-500` / white | `brand-600` / `brand-600` / white | `brand-200` / `brand-200` / white | `0 0 0 4px focus-ring` |
| Secondary gray | white / `gray-300` / `gray-700` | `gray-50` / `gray-300` / `gray-800` | white / `gray-200` / `gray-300` | `0 0 0 4px focus-ring` |
| Secondary color | `brand-50` / `brand-50` / `brand-700` | `brand-100` / `brand-100` / `brand-700` | `brand-25` / `brand-25` / `brand-300` | `0 0 0 4px focus-ring` |
| Tertiary color | none / none / `brand-700` | `brand-50` fill | text `gray-300` | `0 0 0 4px focus-ring` |
| Tertiary gray | none / none / `gray-500` | `gray-50` fill, text `gray-600` | text `gray-300` | `0 0 0 4px focus-ring` |
| Link color | text `brand-600`, no padding | text `brand-700` | text `gray-300` | outline (§4.8) |
| Link gray | text `gray-500`, no padding | text `gray-600` | text `gray-300` | outline (§4.8) |

Focused = Default colours plus the ring (on top of `shadow-xs` where the variant has one). Tertiary gets the ring
on its radius-8 box. Link has no box, so it uses the global focus outline (§4.8).

**Destructive=True** swaps Brand/Gray for Error:

| Hierarchy | Default | Hover | Disabled | Focused ring |
|---|---|---|---|---|
| Primary | `error-600` / `error-600` / white | `error-700` | `error-200` | `0 0 0 4px error-100` |
| Secondary gray | white / `error-300` / `error-700` | `error-50` fill, text `error-800` | border `error-200`, text `error-300` | `0 0 0 4px error-100` |
| Secondary color | `error-50` / `error-50` / `error-700` | `error-100` | `error-25`, text `error-300` | `0 0 0 4px error-100` |
| Tertiary (color, gray) | text `error-700` | `error-50` fill (gray: text `error-800`) | text `error-300` | `0 0 0 4px error-100` |
| Link (color, gray) | text `error-700` | text `error-800` | text `error-300` | outline (§4.8) |

**Sizes** (radius 8 for all)

| Size | Height | Padding (y x) | Icon-only | Text style | Icon | Icon–text gap |
|---|---|---|---|---|---|---|
| `sm` | 36 | `8 14` | 36 × 36, padding 8 | Text sm / Semibold | 20 | 8 |
| `md` | 40 | `10 16` | 40 × 40, padding 10 | Text sm / Semibold | 20 | 8 |
| `lg` | 44 | `10 18` | 44 × 44, padding 12 | Text md / Semibold | 20 | 8 |
| `xl` | 48 | `12 20` | 48 × 48, padding 14 | Text md / Semibold | 20 | 8 |
| `2xl` | 60 | `16 28` | 60 × 60, padding 18 | Text lg / Semibold | 24 | 12 |

- Heights include the 1 px border: use `box-sizing: border-box`.
- `Icon=Dot` puts a 10 px status dot before the label (same gap as an icon).
- A button that opens a menu carries a 20 px trailing chevron that rotates when open (`aria-expanded`).

**Mapping to the app** (app CSS → Figma variant)

| App class | Figma variant | Notes |
|---|---|---|
| `.btn.btn-primary` | Primary, `lg` | Hover was `brand-700`, disabled `brand-300`: move to `brand-600` / `brand-200`. |
| `.btn.btn-secondary` | Secondary gray, `lg` | Hover text `gray-800`. |
| `.btn-primary-light` | Secondary color, `lg` | Hover `brand-100`. |
| `.btn-sm.btn-outline` | Secondary gray, `md` | Padding `9 16` → `10 16`. `.btn-save` = Primary, `md`. |
| `.btn-icon` / `.dt-icon` | Secondary gray, `Icon=Only` | Needs `aria-label`. |
| `.btn-link` | Tertiary color, `sm` | |
| Reject (approve / reject pair) | Secondary color, `Destructive=True`, `sm` | |
| Approve (approve / reject pair) | — app only | `success-50` fill, `success-700` text, padding `8 14`. Not in Figma. |
| `.dt-pending` | — app only | `warning-500` fill, white text, hover `warning-600`. Not in Figma. |

#### Social buttons

For third-party sign-in only. Figma component `Social button` with properties **Social** (`Google`, `Facebook`,
`Apple`, `Twitter`, `Figma`, `Dribbble`) × **Supporting text** (`True` = icon + "Sign in with …", `False` = icon only)
× **Theme** × **State** (`Default`, `Hover`, `Focused`; no Disabled).

| Theme | Look | Hover |
|---|---|---|
| `Brand` | Fill in the platform colour, white icon and text. Google is the exception: white, `gray-300` border, colour logo, `gray-700` text. | Darker platform colour |
| `Color with brand` | White, `gray-300` border, colour logo, `gray-700` text | `gray-50` fill |
| `Color` | Same as above with a gray (`gray-400`) logo | `gray-50` fill |

Platform colours (the only colours allowed outside the palette, because they belong to the platform):

| Platform | Fill | Hover |
|---|---|---|
| Facebook | `#1877F2` | `#0C63D4` |
| Twitter | `#1DA1F2` | `#0C8BD9` |
| Dribbble | `#EA4C89` | `#E62872` |
| Apple, Figma | `#000000` | `#000000` |

- Size: 44 high, padding `10 16`, gap 12, 24 px logo, Text md / Semibold, radius 8, `shadow-xs`. Icon only: 44 × 44,
  padding 10.
- Focused: `shadow-xs` + `0 0 0 4px focus-ring` in every theme.
- Pick one theme per screen; do not mix themes in one group.

**Social button groups** (`Style` = `Buttons` | `Icons` × `Theme`): a 360 px column of full-width buttons with
gap 12, or a row of equal-width icon buttons (3 × 112) with gap 12. Order: Google, Facebook, Apple.

### Button group

Source: Figma **Shared components → Button group**
([node 1046-10171](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1046-10171)),
`_Button group base` ([node 1046-9312](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1046-9312)).

A row of joined buttons for related, equal-weight choices: a view switch (Hari / Minggu / Bulan), pagination
arrows, or a small set of tools. Not for a primary action next to secondary ones; use separate Buttons for that.

Figma component `Button group` with property **Icon** (`False` = text, `Leading` = icon + text, `Only` = icon).
Each segment is a `_Button group base` with properties **Current** (`True` / `False`), **Icon** (`False`,
`Leading`, `Only`, `Dot`) and **State** (`Default`, `Hover`, `Focused`, `Disabled`).

| Part | Spec |
|---|---|
| Group | 1 px `gray-300` border, radius 8, `shadow-xs`, clips its children (only the outer corners are rounded) |
| Segment | white fill, 1 px `gray-300` divider on the right (the last one's divider is hidden by the group border) |
| Height | 40 (same as Button `md`) |
| Text segment | padding `10 16`, Text sm / Semibold, `gray-700` |
| Icon + text segment | padding `10 16`, gap 8, 20 px icon |
| Dot segment | padding `10 16`, gap 8, 10 px `success-500` dot (status filters) |
| Icon-only segment | padding `10 12`, 20 px icon; needs an `aria-label` |

**Segment states** (fill / text / icon)

| State | Current=False | Current=True |
|---|---|---|
| Default | white / `gray-700` / `gray-500` | `gray-50` / `gray-800` / `gray-800` |
| Hover | `gray-50` / `gray-800` / `gray-700` | `gray-50` / `gray-800` / `gray-800` |
| Focused | `gray-50` / `gray-700` / `gray-700` | `gray-50` / `gray-800` / `gray-800` |
| Disabled | white / `gray-300` / `gray-300` | `gray-50` / `gray-300` / `gray-300` |

The dot keeps `success-500` in every state except Disabled (`gray-300`).

- All segments in one group use the same Icon type.
- Figma's Focused state is only a `gray-50` fill, the same as Hover. In code add the global focus outline (§4.8) on
  `:focus-visible` so keyboard focus is visible.
- The selected segment is `Current=True`; only one at a time when the group works as a switch. Use
  `aria-pressed` (toggle) or `role="radiogroup"` / `aria-checked` (switch) so the choice is not shown by colour alone.

### Badges

Source: Figma **Shared components → Badges**: `_Badge base` ([node 1046-28](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1046-28)),
Badge ([node 1046-3819](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1046-3819)), Badge group ([node 1046-8088](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1046-8088)).

A badge is a small, non-interactive label for a status, category or count. Status pills (§2.5), claim type tags,
AI confidence and chips are all badges.

Figma component `Badge` with properties **Size** (`sm`, `md`, `lg`) × **Icon** (`False`, `Dot`, `Country`, `Avatar`,
`X close`, `Icon left`, `Icon right`, `Only`) × **Color** (13).

**Sizes** (radius 16 = fully rounded, no border)

| Size | Height | Padding | Text style | Icon-only |
|---|---|---|---|---|
| `sm` | 22 | `2 8` | Text xs / Medium | 20 × 20 |
| `md` | 24 | `2 10` | Text sm / Medium | 24 × 24 |
| `lg` | 28 | `4 12` | Text sm / Medium | 28 × 28 |

| Icon | Element | Gap | Padding change (sm) |
|---|---|---|---|
| `Dot` | 8 px dot | 6 | left 6 (md: left 8) |
| `Country`, `Avatar` | 16 px flag or round avatar | 6 | left 3 |
| `Icon left` | 12 px icon (e.g. arrow-up for a trend) | 4 | left 6 |
| `Icon right` | 12 px icon (e.g. arrow-right) | 4 | right 6 |
| `X close` | 12 px × button, removes the badge | 4 | right 6 |
| `Only` | 12 px icon, no label; needs an `aria-label` | — | padding 4 (sm) |

**Colours.** Every colour uses the same steps of its scale: fill `50`, text `700`, dot and icons `500`.
**Gray** is the exception: fill `gray-100`, text `gray-700`, dot `gray-500`.

| Figma `Color` | Token family | Use in the app |
|---|---|---|
| Gray | `gray` (fill 100) | Neutral info, Baru, chips |
| Primary | `brand` | Selected filters, Sembuh AI labels |
| Error | `error` | Ditolak, AI confidence < 80 % |
| Warning | `warning` | Memeriksa Eligibility, AI confidence 80–89 % |
| Success | `success` | Disetujui, AI confidence ≥ 90 % |
| Blue gray | `blue-gray` | Single / Multiple claim type |
| Blue light | `blue-light` | — |
| Blue | `blue` | Siap dianalisis, Inpatient |
| Indigo | `indigo` | Siap diekstrak, Optical |
| Purple | `purple` | Siap Ditinjau, Outpatient |
| Pink | `pink` | Maternity |
| Rosé | `rose` | — |
| Orange | `orange` | Perlu Revisi, Potensi Duplikat, Dental |

**Rules**
- A badge is not a button. If it does something, use a Button; the only interactive part allowed is the `X close`
  icon (needs `aria-label="Hapus …"`).
- Status always has a text label; colour alone never carries meaning (§8).
- One size per context: `sm` in tables and dense lists, `md` in headers and cards, `lg` in large summary areas.
- The fill uses `mix-blend-mode: multiply` in Figma so it tints on coloured backgrounds; on white it is the plain `50`
  colour.

**Mapping to the app**: `.q-*` status pills and `.tag` = Badge `sm`; `.up-badge` = Badge `md`; `.chip` = Badge Gray
`sm` with `X close`.

#### Badge group

A badge plus a short message in one pill, for announcements and inline notices ("Fitur baru · …", "Error · Ada
masalah …"). Figma component `Badge group` with properties **Badge** (`Leading` / `Trailing`), **Icon** (`True` adds a
12 px arrow-right), **Size** (`md`, `lg`), **Color** (`Primary`, `Gray`, `Error`, `Warning`, `Success`) and
**Theme**.

| Part | `md` | `lg` |
|---|---|---|
| Container | radius 16, padding 4, gap 8 | radius 16, padding 4, gap 12 |
| Padding on the message side | 12 | 14 |
| Message text | Text xs / Medium, `700` | Text sm / Medium, `700` |
| Inner badge | Badge `sm` | Badge `md` |

| Theme | Container | Inner badge |
|---|---|---|
| Light | `50` | white fill, `700` text |
| Medium | `100` | `50` fill, `700` text |
| Dark | `50` | solid `600` fill (Gray: `gray-700`), white text |

Gray uses `gray-50` for the container. Leading puts the badge before the message, Trailing after it. When the whole
group links somewhere, add the arrow icon and make the full pill the link target.

### Input field

Source: Figma **Shared components → Input fields**: `_Input field base`
([node 1090-57627](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1090-57627)), Input field ([node 1090-57817](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1090-57817)).

Figma component `Input field` with properties **Type** × **Leading icon** × **Label** × **Hint text** × **Help icon**
(all `True` / `False`) × **Destructive** × **State** (`Placeholder`, `Filled`, `Focused`, `Disabled`).

**Anatomy** (top to bottom, gap 6)

| Part | Spec |
|---|---|
| Label | Text sm / Medium, `gray-700` |
| Input | 44 high, padding `10 14`, white, 1 px `gray-300` border, radius 8, `shadow-xs`, gap 8 between items |
| Leading icon | 20 px, `gray-500` |
| Value / placeholder | Text md / Regular; placeholder `gray-500`, value `gray-900` |
| Help icon | 16 px `help-circle`, `gray-400`, at the right end; opens a tooltip |
| Hint text | Text sm / Regular, `gray-500` |

**States**

| State | Fill | Border | Text | Extra |
|---|---|---|---|---|
| Placeholder | white | `gray-300` | `gray-500` | — |
| Filled | white | `gray-300` | `gray-900` | — |
| Focused | white | `brand-300` | `gray-900` | ring `0 0 0 4px focus-ring` + `shadow-xs` |
| Disabled | `gray-50` | `gray-300` | `gray-500` | not editable, `cursor: not-allowed` |
| Destructive | white | `error-300` | as above | help icon becomes 16 px `alert-circle` in `error-500`; hint becomes the error message in `error-500` |
| Destructive + Focused | white | `error-300` | `gray-900` | ring `0 0 0 4px error-100` |

Destructive has no Disabled variant: a disabled field cannot be in error.

**Types**

| Type | Layout | Use |
|---|---|---|
| `Default` | optional leading icon + text | Most fields (nama, email, nomor polis) |
| `Leading dropdown` | dropdown (`gray-900` value + 20 px chevron, padding `10 12 10 14`) before the text | Phone with country code |
| `Trailing dropdown` | prefix text (`Rp`) + value, dropdown after it (padding `10 14`) | Amount with currency (Rp / USD / RM) |
| `Leading text` | gray add-on (`gray-500`, padding `10 12 10 14`) joined to a bordered input | Fixed prefix such as `https://` |
| `Payment input` | 34 × 24 card logo (white, `gray-100` border, radius 4), left padding 10 | Card number |

**Rules**
- Always show a label above the field; the placeholder is an example, never the label.
- Hint text explains format or purpose. In error it is replaced by the message, which says what is wrong and how to fix
  it ("Nomor polis harus 10 digit").
- Connect label, hint and error to the input with `for` / `aria-describedby`; set `aria-invalid="true"` in error.
- Error shows on blur or submit, not while the user is still typing.
- Money fields use `Trailing dropdown` (or a plain `Rp` prefix) and keep the full-number format (§7).

**Mapping to the app**: `.money` = Input field `Default` (the app's 40 px compact version in tables is off-spec: use
44); `.pf-f` = label + input + hint.

### Textarea input field

Source: Figma `_Textarea input field base` ([node 1238-80](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1238-80)), Textarea input field
([node 1238-278](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1238-278)).

Multi-line text: notes, reasons, AI summary edits. Figma component `Textarea input field` with properties **Label** ×
**Hint text** × **Destructive** (`True` / `False`) × **State** (`Placeholder`, `Default` = filled, `Focused`,
`Disabled`). The base also has **Show limit** for a character counter.

| Part | Spec |
|---|---|
| Label, hint, error | Same as Input field (Text sm / Medium `gray-700`; Text sm / Regular `gray-500`; error `error-500`) |
| Box | 128 high by default, padding `10 14`, white, 1 px `gray-300` border, radius 8, `shadow-xs` |
| Text | Text md / Regular, starts top-left; placeholder `gray-500`, value `gray-900` |
| Character counter | Text xs / Regular `gray-500`, bottom-right inside the box (`0/150`); turns `error-500` when over the limit (`151/150`) |

States are the same as Input field: Focused = `brand-300` border + `0 0 0 4px focus-ring` ring; Disabled = `gray-50`
fill; Destructive = `error-300` border, `error-500` message, focused ring `error-100`. No help or alert icon inside the
box.

- Let the user resize vertically only (`resize: vertical`), min height 128.
- Show the counter only when there is a limit; keep typing allowed past it and show the error, so text is not cut off.

**Mapping to the app**: `.up-note` = Textarea input field (was min height ~100: use 128).

### Mega input field (verification code)

Source: Figma `_Mega input field base` ([node 1106-66560](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1106-66560)), Verification code input field
([node 1106-66757](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1106-66757)).

One large box per digit, for OTP and verification codes only. Figma component `Verification code input field` with
properties **Size** (`sm`, `md`, `lg`) × **Digits** (`4`, `6`) × **Label** × **Hint text**. Each box is a
`_Mega input field base` with **Size** × **State** (`Placeholder`, `Filled`, `Focused`, `Disabled`) × **Destructive**
(to add in Figma).

| Size | Box | Digit style | Gap between boxes |
|---|---|---|---|
| `sm` | 64 × 64 | Display lg / Medium (48/60) | 8 |
| `md` | 80 × 80 | Display lg / Medium (48/60) | 12 |
| `lg` | 96 × 96 | Display xl / Medium (60/72) | 12 |

Box: padding 8, 1 px border, radius 8, `shadow-xs`, digit centred. Label and hint as Input field, gap 6.

| State | Fill | Border | Digit |
|---|---|---|---|
| Placeholder | white | `gray-300` | `0` in `gray-300` |
| Filled | white | `brand-300` | `brand-600` |
| Focused | white | `brand-300` + 4 px `focus-ring` ring | `brand-600` |
| Disabled | `gray-50` | `gray-300` | `gray-200` |
| Error | white | `error-300` | `error-600` |
| Error + Focused | white | `error-300` + 4 px `error-100` ring | `error-600` |

**Error** applies to every box of the group at once (the code is wrong, not one digit). The hint text below becomes
the error message, Text sm / Regular `error-500` ("Kode salah. Sisa 2 percobaan."). Clear the error as soon as the user
edits any box.

- 6 digits are split 3 + 3 by a `-` in Display xl / Medium `gray-300`.
- Typing a digit moves focus to the next box; Backspace on an empty box goes back; pasting a full code fills all
  boxes. Use `inputmode="numeric"` and `autocomplete="one-time-code"`.
- Give the group one label (`aria-label` on each box: "Digit 1 of 6").

### WYSIWYG editor

Source: Figma `_WYSIWYG editor icon` ([node 1705-454356](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1705-454356)), WYSIWYG toolbar
([node 1705-454581](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1705-454581)), WYSIWYG tooltip ([node 1706-438373](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1706-438373)).

Rich-text formatting for long text a user writes or edits (AI summary "Edit Ringkasan", advisor notes). Use a plain
Textarea when formatting is not needed.

**Editor icon** (`_WYSIWYG editor icon`): **Type** (`Bold`, `Italic`, `H1`, `H2`, `Quote`, `Link`, `Photo`,
`List bullet`, `List numbers`) × **Active** × **Theme**. 32 × 32 button, 20 px glyph, radius 8.

| Theme | Inactive glyph | Active |
|---|---|---|
| Light (on white toolbar) | `gray-400` | `brand-100` fill, `brand-700` glyph |
| Dark (in the tooltip) | `gray-300` | `gray-600` fill, white glyph |

Active = the format is applied to the current selection (`aria-pressed="true"`). Each icon needs an `aria-label`
and a tooltip with the name and shortcut (Bold · Ctrl+B).

**Toolbar** (`WYSIWYG toolbar`, fixed above the editor area): **Breakpoint** `Desktop` | `Mobile`.

| Breakpoint | Layout |
|---|---|
| Desktop | Row, gap 12: text-style dropdown (240 × 44, "Normal text", Text md / Medium `gray-900`, chevron) + 9 icons (32 px, gap 4) |
| Mobile | Column, gap 8: full-width dropdown, then 9 icons (28 px, gap 2) |

Icon order is fixed: Bold, Italic, H1, H2, Quote, Link, Photo, List bullet, List numbers.

**Floating tooltip** (`WYSIWYG tooltip`): appears above selected text. `gray-900` fill, radius 8, padding 8, Dark
icons with gap 4, 16 × 6 arrow pointing at the selection, `shadow-lg` as drop-shadow. **Arrow** `Center` / `Left` /
`Right` follows where the selection sits; **Breakpoint** `Default` (336 wide) / `Mobile` (280 wide, smaller icons).

- Use the toolbar or the tooltip in one editor, not both.
- The editor area itself follows Textarea input field (border, focus ring, error, counter).
- Headings inside the editor map to the type scale: H1 = Text lg / Semibold, H2 = Text md / Semibold, body Text md /
  Regular.

### Dropdown

Two families, both built from base components (names start with `_`; designers use the full components, the bases
exist to build them):

- **Input dropdown** = a select field: pick one value for a form field or filter.
- **Dropdown menu** = an action menu opened from a button (Account menu, row actions "⋯").

#### Input dropdown bases

**`_Input dropdown base`** ([node 1096-2](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1096-2)) — the closed field. **Label** × **Type** (`Default`,
`Icon leading`, `Avatar leading`, `Dot leading`, `Search`) × **State** (`Placeholder`, `Default` = value chosen,
`Open/focused`).

| Part | Spec |
|---|---|
| Field | Same as Input field: 44 high, padding `10 14`, gap 8, white, 1 px `gray-300` border, radius 8, `shadow-xs` |
| Label | Text sm / Medium `gray-700`, gap 6 above |
| Value | Text md / Regular; placeholder `gray-500`, value `gray-900`; optional supporting text after it in `gray-500` ("@olivia") |
| Leading | 20 px icon `gray-500` · 24 px avatar · 10 px `success-500` dot · 20 px search icon (`Search` type, no chevron) |
| Trailing | 20 px chevron-down `gray-500`; chevron-up when open |
| Open/focused | `brand-300` border + `0 0 0 4px focus-ring` ring + `shadow-xs` |

**`_Input dropdown menu item`** ([node 1096-3156](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1096-3156)) — one option. **State** (`Default`, `Hover`,
`Focus`, `Disabled`) × **Type** (same 4 leading types) × **Supporting text** × **Check**.

| Part | Default | Hover / Focus | Disabled |
|---|---|---|---|
| Row (44 high, padding `10 14`, gap 8) | no fill | `gray-50` | no fill |
| Label, Text md / Medium | `gray-900` | `gray-900` | `gray-200` |
| Supporting text, Text md / Regular | `gray-500` | `gray-500` | `gray-200` |
| Leading icon 20 px | `gray-500` | `gray-700` | `gray-200` |
| Check (selected) | 20 px check `brand-600` at the right, row fill `gray-50` | same | check `gray-200`, fill `gray-25` |

Keyboard focus (arrow keys) looks like Hover. Avatars in a disabled row get `opacity: .5`.

**`_Input dropdown menu`** ([node 1096-4590](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1096-4590)) — the open list. **Type** × **Supporting text** ×
**Scrollbar**. Width = the field (320 in Figma), max height 320, white, 1 px `gray-100` border, radius 8,
`shadow-lg`, padding `4 0`, opens 8 px below the field.

**`_Scroll bar`** (component 1096:4574, `Length` = thumb size): 16 wide with padding 4, thumb 8 wide `gray-200`
radius 8, no track fill. Show it only when the list scrolls.

#### Dropdown menu bases

**`_Dropdown list item`** ([node 18-319](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=18-319)) — one action. **Icon** × **Checkbox** × **Shortcut** ×
**State** (`Default`, `Hover`, `Focus`, `Disabled`). Icon and Checkbox never together.

| Part | Default | Hover / Focus | Disabled |
|---|---|---|---|
| Row (40 high, padding `10 16`, gap 12) | no fill | `gray-50` | no fill |
| Label, Text sm / Medium | `gray-700` | `gray-700` | `gray-200` |
| Icon 16 px | `gray-700` | `gray-700` | `gray-200` |
| Checkbox 16 px, radius 4 | white, `gray-300` border | `brand-50` fill, `brand-600` border | `gray-100` fill, `gray-200` border |
| Shortcut (right-aligned) | Text xs / Regular `gray-500` | `gray-500` | `gray-200` |

**`_Dropdown list header`** ([node 1050-40224](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1050-40224)) — top of a menu. **Type** `Header` (44 high, title
Text sm / Semibold `gray-700`) or `Avatar group` (64 high: 40 px avatar with 10 px `success-500` online dot, name
Text sm / Semibold `gray-700`, email Text sm / Regular `gray-500`, gap 12). Padding `12 16`.

**`_Dropdown menu base`** ([node 1050-109778](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1050-109778)) — the panel: 240 wide, white, items stacked, groups
separated by a 1 px `gray-100` divider. As a popover it gets radius 8, 1 px `gray-100` border and `shadow-lg`
(§6 Overlays), opening 8 px below its button, right-aligned.

#### Components (what designers use)

**`Input dropdown`** ([node 1096-8566](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1096-8566)) — the select field. **State** (`Placeholder`, `Default`,
`Open/focused`) × **Type** (`Default`, `Icon leading`, `Avatar leading`, `Dot leading`, `Search`) × **Supporting
text** × **Label**. Built from `_Input dropdown base`; when open, the `_Input dropdown menu` appears 8 px below the
field, same width, with the selected option checked. 44 high, 70 with label.

**`Dropdown`** ([node 1050-146925](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1050-146925)) — a trigger plus its menu. **Type** × **Open**.

| Type | Trigger | Open | Menu position |
|---|---|---|---|
| `Button` | Button Secondary gray `md` with label + 20 px chevron-down | chevron-up + `0 0 0 4px gray-100` ring | 8 px below, right-aligned |
| `Icon` | 20 px `more-vertical` icon (row actions "⋯"), hit area at least 32 × 32 | — | 8 px below, right-aligned |
| `Avatar` | 40 px avatar (account menu in the sidebar / header) | 4 px `focus-ring` ring | 8 px below, right-aligned |

**`Dropdown menu`** ([node 1050-105632](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1050-105632)) — the panel. **Icon** × **Checkbox** × **Shortcut** (all
`True` / `False`) × **Header** (`False`, `Heading`, `Avatar group`). 240 wide, white, 1 px `gray-100` border, radius
8, `shadow-lg`, clips its content. Order: optional header, divider, groups of `_Dropdown list item` separated by
1 px `gray-100` dividers; the last group holds the exit/destructive action (Keluar).

- All items in one menu share the same Icon / Checkbox / Shortcut setting so labels line up.
- `Checkbox=True` is for multi-select filters inside a menu (e.g. "Tampilkan kolom"); the menu stays open while
  toggling.
- Menus wider than 240 are allowed for long labels; never truncate an action label.

#### Rules
- Input dropdown for choosing a **value**; Dropdown menu for running an **action**. Never mix both in one list.
- Max ~7 visible options before the list scrolls; above ~10 options use the `Search` type.
- Group related menu actions with dividers; put destructive actions (Hapus, Keluar) last, after a divider.
- Shortcuts only when the shortcut really works.
- Keyboard: Enter / Space / ↓ opens, ↑ ↓ move, Enter selects, Esc closes and returns focus to the trigger. Use
  `role="listbox"` / `option` (input dropdown) or `role="menu"` / `menuitem` (menu).

### Toggle

Source: Figma `_Toggle base` ([node 122-3294](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=122-3294)), Toggle ([node 1102-4208](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1102-4208)).

An on/off switch whose change **takes effect immediately** (e.g. "Tampilkan hanya klaim saya", notification
settings). If the choice is only applied after a Save / Submit button, use a Checkbox instead.

**`_Toggle base`**: **Pressed** × **Size** × **Theme** (`Dark` = standard, `Light` = brand-tinted) × **State**
(`Default`, `Hover`, `Focus`, `Disabled`).

| Size | Track | Knob |
|---|---|---|
| `sm` | 36 × 20 | 16 px |
| `md` | 44 × 24 | 20 px |

Track is fully rounded with 2 px padding; knob is white with `shadow-sm`, left when off, right when on (slides 150 ms,
`--ease`).

| State | Off (track) | On (track) |
|---|---|---|
| Default | `gray-100` | `brand-600` |
| Hover | `gray-200` | `brand-700` |
| Focus | Default + `0 0 0 4px focus-ring` ring | Default + `0 0 0 4px focus-ring` ring |
| Disabled | `gray-100`, knob `gray-50` | `gray-100`, knob `gray-50` |

`Theme=Light` (on brand-tinted surfaces only): off `brand-50`, hover `brand-100`, on `brand-200`.

**`Toggle`**: base + optional **Text** (label) and **Supporting text**.

| Size | Gap to text | Label | Supporting text |
|---|---|---|---|
| `sm` | 8 | Text sm / Medium `gray-700` | Text sm / Regular `gray-500` |
| `md` | 12 | Text md / Medium `gray-700` | Text md / Regular `gray-500`, 2 px below |

- The label says what is turned on, not the state ("Notifikasi email", not "Aktif/Nonaktif").
- Clicking the label toggles too. Use `role="switch"` with `aria-checked`.
- Disabled: label and supporting text drop to `gray-300`.

### Checkbox, radio, check circle

Source: Figma `_Checkbox base` ([node 1097-63886](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1097-63886)), Checkbox ([node 1097-63652](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1097-63652)).

One component for three selection controls, picked with **Type**:

| Type | Shape | Use |
|---|---|---|
| `Checkbox` | square, radius 4 | Any number of options; a single yes/no that applies on Save |
| `Radio` | circle | Exactly one of 2–5 visible options (more than 5: use Input dropdown) |
| `Check circle` | circle, filled when checked | Selectable cards / list rows where the whole item is the target |

**`_Checkbox base`**: **Checked** × **Indeterminate** (Checkbox only) × **Size** (`sm` 16 px, `md` 20 px) × **Type** ×
**State** (`Default`, `Hover`, `Focused`, `Disabled`).

| State | Unchecked | Checked / indeterminate |
|---|---|---|
| Default | white, 1 px `gray-300` border | `brand-50` fill, `brand-600` border, `brand-600` check / minus / dot |
| Hover | `brand-50` fill, `brand-600` border | same as Default |
| Focused | white, `brand-300` border + `0 0 0 4px focus-ring` ring | Default + `0 0 0 4px focus-ring` ring |
| Disabled | `gray-100` fill, `gray-200` border | `gray-100` fill, `gray-200` border, `gray-200` mark |

`Check circle` checked = solid `brand-600` with a white check (disabled: `gray-200` fill). Indeterminate (minus) =
some but not all children are checked, e.g. the "select all" box in a table header.

**`Checkbox`**: base + optional **Text** and **Supporting text**, same layout as Toggle.

| Size | Gap | Label | Supporting text |
|---|---|---|---|
| `sm` | 8 | Text sm / Medium `gray-700` | Text sm / Regular `gray-500` |
| `md` | 12 | Text md / Medium `gray-700` | Text md / Regular `gray-500`, 2 px below |

The control sits 2 px down so it centres on the first line of the label.

- Clicking the label toggles the control (`<label for>`); the whole row is the hit area.
- Radios in one group share a `name` and use `role="radiogroup"` with a group label. Always preselect one radio when
  a default makes sense.
- Disabled: label and supporting text drop to `gray-300`.
- Table rows use Checkbox `sm` without text; the header box uses Indeterminate when only some rows are selected.

### Checkbox group (selectable cards)

Source: Figma Checkbox group item ([node 124-2838](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=124-2838)), Checkbox group ([node 1142-87213](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1142-87213)).

A list of bordered cards where the **whole card** is the control. Use it when each option needs a description or
visual (plan, payment method, assignee); for short text options use plain Checkbox / Radio.

**`Checkbox group item`**: **Selected** × **Size** (`sm`, `md`) × **Type** × **State** (`Default`, `Hover`,
`Focused`, `Disabled`) × **Breakpoint** (`Desktop` 768 wide, `Mobile` 343 wide).

| Type | Content | Control |
|---|---|---|
| `Checkbox` | Checkbox + title + inline subtitle + description | checkbox left (multi-select) |
| `Radio button` | Radio + title + subtitle + description | radio left (single-select) |
| `Icon simple` | 32 px featured icon + text | check circle right |
| `Avatar` | avatar + name, handle, role | check circle right |
| `Payment icon` | card logo + text + text links (Set as default · Edit) | check circle right |
| `Icon card` | header row with icon, title, check circle; body with price/value and description | check circle top-right |

Card: radius 8, padding 16, 1 px border. Group: vertical stack, gap 12, full width.

| State | Unselected | Selected |
|---|---|---|
| Default | white, `gray-200` border | `brand-50` fill, `brand-300` border |
| Hover | white, `brand-300` border | `brand-50` fill, `brand-500` border |
| Focused | white, `brand-300` border + `0 0 0 4px focus-ring` ring | `brand-50`, `brand-300` border + `0 0 0 4px focus-ring` ring |
| Disabled | `gray-50` fill, `gray-200` border | `gray-50` fill, `gray-200` border |

Only the card shows the focus ring; the control inside stays in its Default / checked look.

| Text | Unselected | Selected |
|---|---|---|
| Title (Text sm / Medium; `md`: Text md / Medium) | `gray-700` | `brand-800` |
| Subtitle, description (Regular) | `gray-500` | `brand-600` |

- The card is one `<label>` wrapping the input; Space toggles it. Radio-type groups use `role="radiogroup"`.
- Text links inside a card (Edit) must not toggle selection.

### Avatar

Source: Figma Avatar ([node 19-1012](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=19-1012)), Avatar group ([node 1274-812](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1274-812)), Avatar label group
([node 82-2793](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=82-2793)), Notes and documentation ([node 1538-269471](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1538-269471)).

**`Avatar`**: **Size** × **Placeholder** × **Text** × **Status icon** (`False`, `Online indicator`, `Company`) ×
**State** (`Default`, `Hover`, `Focused`). Always a circle (radius 9999).

| Size | Box | Initials (Medium, `brand-600` on `brand-50`) | Placeholder icon | Online dot | Company badge |
|---|---|---|---|---|---|
| `xs` | 24 | 12 / 18 | 16 | 6 | 10 |
| `sm` | 32 | Text sm 14 / 20 | 20 | 8 | 12 |
| `md` | 40 | Text md 16 / 24 | 24 | 10 | 14 |
| `lg` | 48 | Text lg 18 / 28 | 28 | 12 | 16 |
| `xl` | 56 | Text xl 20 / 30 | 32 | 14 | 18 |
| `2xl` | 64 | Display xs 24 / 32 | 32 | 16 | 20 |

- Content priority: user photo → initials (first + last name, max 2 letters) → placeholder user icon (`brand-600`
  outline on `brand-50`). Never leave it empty.
- Online indicator: `success-500` dot with 1.5 px white border, bottom-right. Company: company logo, 1.5 px white
  border, bottom-right (e.g. the insurer of a TPA user).
- States (avatar used as a button, e.g. account menu): Hover = 4 px `gray-100` ring outside; Focused = 4 px
  `focus-ring` ring outside (`:focus-visible`). A static avatar has no states.
- Photos need `alt` = the person's name; decorative avatars next to the name use `alt=""`.

**`Avatar group`**: **Size** (`xs`, `sm`, `md`) × **Add user button** × **More users**. A row of overlapping
avatars, each with a 1.5 px white ring.

| Size | Overlap | "+N" avatar | Add button |
|---|---|---|---|
| `xs` | −4 | 24, `brand-50` fill, `brand-600` 12 / 18 Medium | 24, white, 1 px `gray-300` border, `gray-400` plus icon |
| `sm` | −8 | 32, Text sm Medium | 32 |
| `md` | −12 | 40, Text md Medium | 40 |

Gap 8 between the avatars and the add button. Show at most 5 avatars, then "+N"; the "+N" opens a list of the rest
(tooltip or popover). The add button needs `aria-label` ("Tambah anggota").

**`Avatar label group`**: avatar + name + secondary line (email, role). **Size** × **Status icon** × **State**.

| Size | Avatar | Gap | Name (Semibold `gray-700`) | Secondary (Regular `gray-500`) |
|---|---|---|---|---|
| `sm` | 32 | 10 | Text sm 14 / 20 | Text xs 12 / 18 |
| `md` | 40 | 12 | Text sm 14 / 20 | Text sm 14 / 20 |
| `lg` | 48 | 12 | Text md 16 / 24 | Text md 16 / 24 |
| `xl` | 56 | 16 | Text lg 18 / 28 | Text md 16 / 24 |

States (when the group is clickable): Hover = avatar `gray-100` ring + name `gray-900`; Focus = avatar `focus-ring`
ring + name `gray-900`. The whole group is one hit target.

Used in the sidebar profile, dropdown headers, assignee fields and table cells (`sm`). Long names and emails truncate
with an ellipsis and show the full value in a tooltip.

**Figma placeholders.** Avatar photos in Figma are saved as image fill styles (with a transparent-background variant
to recolour). Use them only in mock-ups; real screens show the user's photo or initials. Figma demo names (Olivia
Rhye, Phoenix Baker) never appear in shipped UI or documentation screenshots.

### Tooltip and help icon

Source: Figma Tooltip ([node 1052-489](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1052-489)), Help icon ([node 1054-13](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1054-13)).

**`Tooltip`**: **Theme** (`Dark`, `Light`) × **Supporting text** × **Arrow** (`None`, `Top center`, `Bottom center`,
`Bottom left`, `Bottom right`, `Left`, `Right`).

| Part | Title only | With supporting text |
|---|---|---|
| Padding | `8 12` | `12` |
| Title | Text xs / Semibold | Text xs / Semibold |
| Supporting text | — | Text xs / Regular, max width 320 |

| Theme | Fill | Title | Supporting text |
|---|---|---|---|
| `Dark` (default) | `gray-900` | white | white |
| `Light` (on dark surfaces, e.g. the sidebar) | white | `gray-700` | `gray-500` |

Radius 8, `shadow-lg`. Arrow 16 × 6 in the fill colour (28 × 6 frame for the corner positions), 4 px gap to the
trigger. Pick the arrow side that keeps the tooltip inside the viewport; default above the trigger.

- A tooltip only adds a short explanation or the full text of something truncated; never put essential information
  or actions in it (it is invisible on touch and easy to miss).
- Opens on hover after ~300 ms and on keyboard focus; closes on mouse leave, blur and Esc. Use `role="tooltip"` and
  `aria-describedby` on the trigger.
- Icon-only buttons and collapsed sidebar items always get a title-only tooltip with their label.
- Chart tooltips are a different component (white card, see Data display).

**`Help icon`**: 16 px `help-circle` placed after a label or inside an input, with **Open** × **Supporting text** ×
**Tooltip** (`Top no arrow`, `Top arrow`, `Top left`, `Top right`, `Bottom`, `Left`, `Right`). Icon `gray-400`;
hover / open `gray-500`; the tooltip it opens is `Dark`. It is a button (`aria-label="Info"`), focusable, with the
global focus outline.

### Progress bar and progress circle

Source: Figma Progress bar ([node 1085-57382](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1085-57382)), Progress circle ([node 1154-89981](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1154-89981)).

Shows how far a measurable task or value has got (upload, AI analysis step count, quota used). For unknown duration
use a spinner instead.

**`Progress bar`**: **Progress** (0–100 % in steps of 10) × **Label** (`False`, `Right`, `Bottom`, `Top floating`,
`Bottom floating`).

| Part | Spec |
|---|---|
| Track | 8 high, full width, `gray-100`, radius 4 |
| Fill | `brand-600`, radius 4, min width 8 (so 0 % still shows a dot) |
| Label `Right` | Text sm / Medium `gray-700`, gap 12, track shrinks to fit |
| Label `Bottom` | Text sm / Medium `gray-700`, 8 below, right-aligned |
| Label `Top / Bottom floating` | Light Tooltip (Text xs / Semibold `gray-700`, white, `shadow-lg`) pinned to the end of the fill, 8 away |

**`Progress circle`**: **Size** × **Shape** (`Circle`, `Half circle` gauge) × **Label** (adds a caption).

| Size | Box | Stroke | Value | Caption |
|---|---|---|---|---|
| `xxs` | 64 | 6 | Text sm / Medium `gray-700` | Text xs / Medium `gray-500`, below the circle |
| `xs` | 160 | 16 | Display xs 24 / Medium `gray-900` | Text xs / Medium `gray-500`, above the value |
| `sm` | 200 | 20 | Display sm 30 / Medium `gray-900` | Text xs / Medium `gray-500` |
| `md` | 240 | 24 | Display md 36 / Medium `gray-900` | Text sm / Medium `gray-500` |
| `lg` | 280 | 28 | Display lg 48 / Medium `gray-900` | Text sm / Medium `gray-500` |

Track `gray-100`, line `brand-600`, round caps; the circle starts at 12 o'clock and runs clockwise; the half circle
runs left to right. Half-circle height = half the box + stroke.

- Value text is the rounded percentage ("40%"); keep the full number in a tooltip if needed.
- Use `role="progressbar"` with `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"` and a label.
- Colour stays `brand-600`. When the value itself is a status (e.g. AI confidence), colour the label badge, not the
  bar.
- Animate changes over 300 ms with `--ease`; never animate backwards except on reset.

### Slider

Source: Figma Slider ([node 1086-534](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems?node-id=1086-534)).

Picks a value or a range by dragging, when the exact number matters less than the position (e.g. a confidence
threshold filter, an amount range). For exact values pair it with an Input field or use the input alone.

**`Slider`**: **Left control** (`0%`–`75%`) × **Right control** (`25%`–`100%`) × **Label** (`False`, `Bottom`,
`Top floating`, `Bottom floating`). Two handles = range; a single-value slider keeps the left handle at 0 and hides
it.

| Part | Spec |
|---|---|
| Track | 8 high, full width (320 in Figma), `gray-200`, radius 4 |
| Selected range | `brand-600`, radius 4, between the handles |
| Handle | 24 px circle, white, 1 px `brand-600` border, `shadow-md`, centred on the value |
| Label `Bottom` | Text md / Medium `gray-900`, under each handle, 8 below the track |
| Label `Top / Bottom floating` | Light Tooltip (Text xs / Semibold `gray-700`, `shadow-lg`) above / below each handle |

| State (handle) | Spec |
|---|---|
| Hover | `brand-50` fill |
| Focused / dragging | `0 0 0 4px focus-ring` ring + `shadow-md` |
| Disabled | track `gray-100`, range `gray-300`, handle border `gray-300`, no shadow |

- Labels show the value in the unit of the data ("Rp 5.000.000", "80%"), not always %.
- Keyboard: ← → step by one unit, Page Up / Down by 10 %, Home / End to the ends. Each handle is `role="slider"` with
  `aria-valuenow`, `aria-valuemin`, `aria-valuemax` and `aria-valuetext`.
- The two handles cannot cross; minimum distance = one step.

### Inputs and selection

- **Dropdown** `.dd` (`js/ui/select.js`) = Input dropdown (see Dropdown).
- **Combobox** (search user): user icon + text input + small chevron, list of "Name *email*".
- **Checkbox / radio** = see Checkbox, radio, check circle.
- **Switch** = Toggle (see Toggle).
- **Date range calendar**: two months, Monday first, 32 px day cells, range fill `brand-50`, ends `brand-500`.

### Navigation

- **Tabs** `.tab`: 52 px (44 in sub-tabs, 40 for date tabs), padding `16 24`, top radius 8, border `gray-300`,
  fill `brand-25`, text `brand-700` 14/20 500 with 20 px icon. Active: `brand-500` fill, white text and icon.
  The row sits on a `gray-300` bottom border. A tab can carry a count badge (red text, white pill when active).
- **Mini tab** `.minitab`: segmented control, `gray-25` track, selected segment white with border.
- **Breadcrumb**: back arrow, "…", "/", ID in Display xs.

### Containers

- **Card** `.card` / `.tb-card`: white, border `gray-300`, radius 12, padding 24; head row = title (20/30) + badges +
  actions right + fold chevron.
- **Inner card / box**: `gray-25` fill, border `gray-200`, radius 8, padding `12 16` (summary rows "Label …… Value").
- **AI summary box** `.tb-isum` / `.dt-sum`: `brand-25` fill, `brand-200` border, radius 8, title with loader icon in
  `brand-700`, "Edit Ringkasan" small button, fold chevron.
- **Banner** `.tb-banner`: radius 8, padding `14 16`, 20 px icon + text. Warning and info variants (§2.4).
- **Fact grid** `.dt-row` / `.tb-grid`: label 12/18 `gray-500` over value 14/20 (or 12/18 in the header card).

### Data display

- **Table** `.tbl`: 14/20, header `gray-50` band with rounded ends, header text `gray-500` 400, cells padding 16,
  row divider `gray-200`, row hover `gray-25`. Sortable headers show a two-arrow icon; the active direction turns
  `brand-500`. ID links `brand-700` underlined. First columns can stick while scrolling sideways.
- **Grouped table** (invoice, FWA, benefits): category row with chevron + number + name + total; item rows indented on
  `gray-25`; footer total row `gray-100`. Flagged rows: `error-700` text on `error-25`, review rows on `warning-25`.
- **Amount cell**: Rupiah on top, converted currencies below in 12/18 `gray-500` ("$5 | RM10").
- **Pill / tag / chip** `.tag`, `.up-badge`, `.chip`: see Badges.
- **Stat summary** `.pt-stat`: number 20/30 500 above a 10/16 label with a 4 px status dot; items divided by 1 px lines.
- **KPI strip**: arrow-shaped steps (clip-path), value 24/32 600, amount 16/24 500.
- **Legend**: 12 px rounded swatch (or 16×2 line glyph, dashed for rejected) + 14/20 500 label.
- **Chart tooltip** `.tip`: white, border `gray-300`, radius 8, `shadow-lg` as drop-shadow, 14/20 (for UI hints see
  Tooltip and help icon).

### Overlays and feedback

- **Modal** `.pt-modal` + `.pt-dialog`: scrim `rgba(0,0,0,.2)`, dialog white radius 12, padding 24, gap 16, shadow-lg.
  Widths: 424 (confirmations), 640 (forms). Title 20/30 600, body 14/20 `gray-700`, actions right-aligned
  (Batal secondary + one primary). Closes on Batal, Esc and scrim click.
- **Popover / dropdown panel** `.up-assign`, `.dt-menu`: opens 8 px under its button, right-aligned, white, radius
  8–12, shadow-lg. Menu items 14/20 500 with 16 px icon, divider `gray-100`.
- **Progress dialog** (AI working): 720 px, list of step cards (44 px icon box: number → spinner → check, title 16/24
  500, description 12/18), connected by a vertical line; optional grouped sections with a badge
  ("Proses: N detik" → "STP Klaim" / "Success").
- **Toast** `.pt-toast`: bottom centre, `gray-900` fill, white 14/20 500, radius 8, auto-hide ~3.5 s.
- **Skeleton**: `gray-100` blocks while verifying.
- **Empty state**: centred 14/20 `gray-500` message inside the card.

### Icons

Feather-style outline icons, 1.67 px stroke, sizes 12 / 16 / 20 / 24. Exported from Figma as SVG into `public/assets/`.
Icons that change colour with state are drawn as CSS masks (`.ic` with `--ic: url(...)`, colour = `currentColor`).
Inactive sidebar icons are `gray-400` and turn white when active.

---

## 7. Content rules

- Language: Bahasa Indonesia; product and technical terms stay English where the team uses them (Overview, Dashboard,
  Inpatient, Cashless, FWA).
- Money: `Rp 1.234.567` (dot thousands, space after Rp); converted lines `$5 | RM10`.
- Dates: `14 Maret 2023` (long), `18 Sep 2026` (short), `14/11/2025` (tables and inputs).
- Percentages: `95%`, `-36,17%` (comma decimals).
- Buttons are verbs: Mulai Analisis, Kirim ke Advisor, Ajukan Persetujuan, Sepakati Klaim.
- Confirmation copy: "Apakah Anda yakin untuk …?" + what happens next.

---

## 8. Accessibility

- Colour accessibility is mostly about text. Check the contrast ratio of every text element in a component against
  WCAG 2.1:

  | Level | Ratio | Rule |
  |---|---|---|
  | A (low) | < 4.5:1 | Not for any text. Allowed only on decoration and non-essential parts. |
  | AA (medium) | ≥ 4.5:1 | **Required** for all crucial UI: text, buttons, forms. Covers users with 20/40 vision loss. |
  | AAA (high) | ≥ 7:1 | Not required. Use it where possible. |

  The Figma Colors page prints the ratio on every swatch (`AA 4.95`, `AAA`); use that before you pick a text colour.
  Body text `gray-900` / `gray-700` on white; `gray-500` only for secondary text ≥ 12 px.
- Check contrast while you design: Figma plugin **A11y - Color Contrast Checker** (checks all visible text in a frame),
  or WebAIM for one foreground / background pair.
- Every icon-only button has an `aria-label`; collapsed sidebar items show their label as a tooltip.
- Visible focus ring on every interactive element; menus and dialogs close with Esc.
- Status never relies on colour alone: the pill always has its text label.

---

## 9. Tokens to copy

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --white: #ffffff;
  --gray-25: #fcfcfd; --gray-50: #f9fafb; --gray-100: #f2f4f7; --gray-200: #eaecf0; --gray-300: #d0d5dd; --gray-400: #98a2b3;
  --gray-500: #667085; --gray-600: #475467; --gray-700: #344054; --gray-800: #1d2939; --gray-900: #101828;
  --brand-25: #fafcff; --brand-50: #f0f6fe; --brand-100: #dfeafb; --brand-200: #c5dbfa; --brand-300: #9fc5f6; --brand-400: #6ca1f0;
  --brand-500: #5183eb; --brand-600: #3966e0; --brand-700: #2e51cd; --brand-800: #2942a7; --brand-900: #273b83;
  --error-25: #fffbfa; --error-50: #fef3f2; --error-100: #fee4e2; --error-200: #fecdca; --error-300: #fda29b; --error-400: #f97066;
  --error-500: #f04438; --error-600: #d92d20; --error-700: #b42318; --error-800: #912018; --error-900: #7a271a;
  --warning-25: #fffcf5; --warning-50: #fffaeb; --warning-100: #fef0c7; --warning-200: #fedf89; --warning-300: #fec84b; --warning-400: #fdb022;
  --warning-500: #f79009; --warning-600: #dc6803; --warning-700: #b54708; --warning-800: #93370d; --warning-900: #7a2e0e;
  --success-25: #f6fef9; --success-50: #ecfdf3; --success-100: #d1fadf; --success-200: #a6f4c5; --success-300: #6ce9a6; --success-400: #32d583;
  --success-500: #12b76a; --success-600: #039855; --success-700: #027a48; --success-800: #05603a; --success-900: #054f31;
  --blue-gray-25: #fcfcfd; --blue-gray-50: #f8f9fc; --blue-gray-100: #eaecf5; --blue-gray-200: #d5d9eb; --blue-gray-300: #afb5d9; --blue-gray-400: #717bbc;
  --blue-gray-500: #4e5ba6; --blue-gray-600: #3e4784; --blue-gray-700: #363f72; --blue-gray-800: #293056; --blue-gray-900: #101323;
  --blue-light-25: #f5fbff; --blue-light-50: #f0f9ff; --blue-light-100: #e0f2fe; --blue-light-200: #b9e6fe; --blue-light-300: #7cd4fd; --blue-light-400: #36bffa;
  --blue-light-500: #0ba5ec; --blue-light-600: #0086c9; --blue-light-700: #026aa2; --blue-light-800: #065986; --blue-light-900: #0b4a6f;
  --blue-25: #f5faff; --blue-50: #eff8ff; --blue-100: #d1e9ff; --blue-200: #b2ddff; --blue-300: #84caff; --blue-400: #53b1fd;
  --blue-500: #2e90fa; --blue-600: #1570ef; --blue-700: #175cd3; --blue-800: #1849a9; --blue-900: #194185;
  --indigo-25: #f5f8ff; --indigo-50: #eef4ff; --indigo-100: #e0eaff; --indigo-200: #c7d7fe; --indigo-300: #a4bcfd; --indigo-400: #8098f9;
  --indigo-500: #6172f3; --indigo-600: #444ce7; --indigo-700: #3538cd; --indigo-800: #2d31a6; --indigo-900: #2d3282;
  --purple-25: #fafaff; --purple-50: #f4f3ff; --purple-100: #ebe9fe; --purple-200: #d9d6fe; --purple-300: #bdb4fe; --purple-400: #9b8afb;
  --purple-500: #7a5af8; --purple-600: #6938ef; --purple-700: #5925dc; --purple-800: #4a1fb8; --purple-900: #3e1c96;
  --pink-25: #fef6fb; --pink-50: #fdf2fa; --pink-100: #fce7f6; --pink-200: #fcceee; --pink-300: #faa7e0; --pink-400: #f670c7;
  --pink-500: #ee46bc; --pink-600: #dd2590; --pink-700: #c11574; --pink-800: #9e165f; --pink-900: #851651;
  --rose-25: #fff5f6; --rose-50: #fff1f3; --rose-100: #ffe4e8; --rose-200: #fecdd6; --rose-300: #fea3b4; --rose-400: #fd6f8e;
  --rose-500: #f63d68; --rose-600: #e31b54; --rose-700: #c01048; --rose-800: #a11043; --rose-900: #89123e;
  --orange-25: #fffaf5; --orange-50: #fff6ed; --orange-100: #ffead5; --orange-200: #fddcab; --orange-300: #feb273; --orange-400: #fd853a;
  --orange-500: #fb6514; --orange-600: #ec4a0a; --orange-700: #c4320a; --orange-800: #9c2a10; --orange-900: #7e2410;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-5: 20px; --space-6: 24px; --space-8: 32px;
  --space-10: 40px; --space-12: 48px; --space-16: 64px; --space-20: 80px; --space-24: 96px; --space-32: 128px;
  --space-40: 160px; --space-48: 192px; --space-56: 224px; --space-64: 256px;
  --container-sm: 640px; --container-md: 768px; --container-lg: 1024px; --container-xl: 1280px;
  --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px; --radius-xl: 16px; --radius-full: 9999px;
  --shadow-xs: 0 1px 2px rgba(16,24,40,.05);
  --shadow-sm: 0 1px 3px rgba(16,24,40,.1), 0 1px 2px rgba(16,24,40,.06);
  --shadow-md: 0 4px 8px -2px rgba(16,24,40,.1), 0 2px 4px -2px rgba(16,24,40,.06);
  --shadow-lg: 0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03);
  --shadow-xl: 0 20px 24px -4px rgba(16,24,40,.08), 0 8px 8px -4px rgba(16,24,40,.03);
  --shadow-2xl: 0 24px 48px -12px rgba(16,24,40,.18);
  --shadow-3xl: 0 32px 64px -12px rgba(16,24,40,.14);
  --blur-sm: blur(4px); --blur-md: blur(8px); --blur-lg: blur(12px); --blur-xl: blur(20px); /* use: backdrop-filter: var(--blur-md) */
  --focus-ring: color-mix(in srgb, var(--brand-500) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  /* type scale, size/line-height. Use: font: 600 var(--text-sm) var(--font); display md+ add letter-spacing: var(--tracking-display) */
  --display-2xl: 72px/90px;
  --display-xl: 60px/72px;
  --display-lg: 48px/60px;
  --display-md: 36px/44px;
  --display-sm: 30px/38px;
  --display-xs: 24px/32px;
  --text-xl: 20px/30px;
  --text-lg: 18px/28px;
  --text-md: 16px/24px;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
  --tracking-display: -0.02em;
}
```

Colour tokens mirror the Figma variables one to one. The app CSS still uses `--red-*` and writes some semantic colours
inline; migrate those to `--error-*`, `--success-*`, `--warning-*` and `--blue-*` (the old `--info-*` = `--blue-*`).
`--brand-100` changed from `#E1EDFD` to `#DFEAFB`.

---

## 10. Changing colours in Figma

Colours are Figma styles / variables. A change to a style cascades to every component and design that uses it.

1. Open the style: click the edit icon on the colour style, or select any layer that uses the style and click
   **Edit style**.
2. Change the colour properties.
3. Repeat for all the styles that change, in one pass, so none is missed. Large files take time to update.
4. To change the brand colour, edit the **Brand** styles. Do not switch components to another family one by one.

When a Figma colour changes, update §2 and §9 of this file in the same change.

---

## 11. Using it outside the web (slides, documents)

- Canvas: white or `gray-25`; one accent (`brand-500`) per slide, orange only for TPA, `warning` only for warnings.
- Titles Inter 600 (700 allowed for display headings), body Inter 400/500; keep the type scale ratios above (e.g. 40 / 24 / 16 on a 16:9 slide).
- Charts follow §2.6 exactly (Sembuh AI blue, TPA orange, solid = approved, light/dashed = rejected).
- Status labels keep their pill colours from §2.5.
- Cards: white, 1 px `gray-300` border, radius 12, no shadow.

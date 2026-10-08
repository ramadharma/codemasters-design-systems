---
name: Checkbox group
slug: checkbox-group
category: Components
status: Ready
version: 0.1.0
updated: 2026-10-06
requires: tokens.css
---

# Checkbox group

Selectable cards: a list of bordered cards where the whole card is the control. Use it when each option needs a description or a visual, such as a plan, a payment method or an assignee.

## Usage

| Type | Content | Control | Use for |
| --- | --- | --- | --- |
| Checkbox | Title + inline subtitle + description | Checkbox, left | Pick any number: modules, notification channels |
| Radio button | Title + subtitle + description | Radio, left | Pick exactly one: report frequency, claim method |
| Icon simple | 32 px featured icon + text | Check circle, right | Options that read faster with an icon: data sources |
| Avatar | Avatar + name, handle, role | Check circle, right | Picking people: reviewer, assignee |
| Payment icon | Card logo + text + text links | Check circle, right | Saved payment methods, with Set as default and Edit |
| Icon card | Header (icon, title, check circle) + body (price, description, badge) | Check circle, top right | Plans and packages |

- Use cards only when each option needs a description or a visual. Short text options are plain Checkbox or Radio.
- Stack cards vertically, full width, 12 apart. One group uses one type and one size.
- Check circle types are single-select (`type="radio"`) or multi-select (`type="checkbox"`) underneath; say which in the group label when it is not obvious.
- Preselect one card in a single-select group when a sensible default exists.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Card | Radius 8, padding 16, 1 px border. Full width; the whole card is the hit area. |
| 2 | Control | Checkbox and radio, same size as the card (`sm` 16, `md` 20). Leading: 2 px down, gap 8 (`md` 12). Check circle types: trailing. |
| 3 | Title | Text sm / Medium (`md`: Text md / Medium). `gray-700`, selected `brand-800`. |
| 4 | Subtitle | Optional, inline after the title. Regular weight, `gray-500`, selected `brand-600`. |
| 5 | Description | Text sm / Regular (`md`: Text md, 2 px below). `gray-500`, selected `brand-600`. |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Selected | True, False | `checked` on the input; the card follows with `:has()` |
| Size | `sm`, `md` | `data-size` on `.sb-cg-item` |
| Type | Checkbox, Radio button, Icon simple, Avatar, Payment icon, Icon card | What sits in the row; Icon card adds `data-type="card"` |
| State | Default, Hover, Focused, Disabled | `:hover`, `:focus-visible` on the input, `disabled`. Static mockups only: `data-state` on the card |
| Breakpoint | Desktop (768), Mobile (343) | None: the card is fluid and text wraps. The Icon card badge drops below the price when narrow |

## Types

### Checkbox

```html
<div class="sb-choices" role="group" aria-labelledby="cg-mod-label">
  <span class="sb-choices-label" id="cg-mod-label">Modul analisis</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="cg-mod-0" aria-describedby="cg-mod-0-desc" checked>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-mod-0">Deteksi FWA <span class="sb-cg-sub">per klaim</span></label>
      <p class="sb-cg-desc" id="cg-mod-0-desc">Tandai klaim yang berpotensi fraud, waste atau abuse sebelum dibayar.</p>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="cg-mod-1" aria-describedby="cg-mod-1-desc" checked>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-mod-1">Ringkasan medis AI <span class="sb-cg-sub">per dokumen</span></label>
      <p class="sb-cg-desc" id="cg-mod-1-desc">Resume medis dan hasil lab diringkas jadi satu halaman.</p>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="checkbox" id="cg-mod-2" aria-describedby="cg-mod-2-desc">
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-mod-2">Verifikasi tagihan <span class="sb-cg-sub">per invoice</span></label>
      <p class="sb-cg-desc" id="cg-mod-2-desc">Tagihan rumah sakit dicocokkan dengan tarif kontrak.</p>
    </div>
  </div>
</div>
```

### Radio button

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="cg-lap-label">
  <span class="sb-choices-label" id="cg-lap-label">Frekuensi laporan</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="cg-lap-0" name="cg-lap" aria-describedby="cg-lap-0-desc" checked>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-lap-0">Harian <span class="sb-cg-sub">setiap 07.00</span></label>
      <p class="sb-cg-desc" id="cg-lap-0-desc">Ringkasan klaim kemarin dikirim ke email tim.</p>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="cg-lap-1" name="cg-lap" aria-describedby="cg-lap-1-desc">
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-lap-1">Mingguan <span class="sb-cg-sub">setiap Senin</span></label>
      <p class="sb-cg-desc" id="cg-lap-1-desc">Tren klaim dan temuan FWA selama tujuh hari terakhir.</p>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="cg-lap-2" name="cg-lap" aria-describedby="cg-lap-2-desc">
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-lap-2">Bulanan <span class="sb-cg-sub">tanggal 1</span></label>
      <p class="sb-cg-desc" id="cg-lap-2-desc">Laporan lengkap untuk rapat evaluasi bulanan.</p>
    </div>
  </div>
</div>
```

### Icon simple

```html
<div class="sb-choices" role="group" aria-labelledby="cg-src-label">
  <span class="sb-choices-label" id="cg-src-label">Sumber data klaim</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <span class="sb-cg-icon"><svg aria-hidden="true"><!-- layers --></svg></span>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-src-0">Integrasi API <span class="sb-cg-sub">real time</span></label>
      <p class="sb-cg-desc" id="cg-src-0-desc">Klaim masuk langsung dari sistem asuransi, tanpa unggah manual.</p>
    </div>
    <input class="sb-check-input" type="checkbox" id="cg-src-0" data-variant="circle" aria-describedby="cg-src-0-desc" checked>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <span class="sb-cg-icon"><svg aria-hidden="true"><!-- file-text --></svg></span>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-src-1">Unggah manual <span class="sb-cg-sub">PDF, JPG</span></label>
      <p class="sb-cg-desc" id="cg-src-1-desc">Tim mengunggah berkas klaim dari dashboard.</p>
    </div>
    <input class="sb-check-input" type="checkbox" id="cg-src-1" data-variant="circle" aria-describedby="cg-src-1-desc">
  </div>
</div>
```

### Avatar

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="cg-rev-label">
  <span class="sb-choices-label" id="cg-rev-label">Tugaskan reviewer</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <span class="sb-avatar" data-size="sm"><img src="…" alt=""></span>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-rev-0">Advisor A <span class="sb-cg-sub">@advisor.a</span></label>
      <p class="sb-cg-desc" id="cg-rev-0-desc">Medical reviewer</p>
    </div>
    <input class="sb-check-input" type="radio" id="cg-rev-0" data-variant="circle" name="cg-rev" aria-describedby="cg-rev-0-desc" checked>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <span class="sb-avatar" data-size="sm"><img src="…" alt=""></span>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-rev-1">Advisor B <span class="sb-cg-sub">@advisor.b</span></label>
      <p class="sb-cg-desc" id="cg-rev-1-desc">Claim analyst</p>
    </div>
    <input class="sb-check-input" type="radio" id="cg-rev-1" data-variant="circle" name="cg-rev" aria-describedby="cg-rev-1-desc">
  </div>
</div>
```

### Payment icon

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="cg-pay-label">
  <span class="sb-choices-label" id="cg-pay-label">Metode pembayaran</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <span class="sb-cg-pay" aria-hidden="true"><svg aria-hidden="true"><!-- credit-card --></svg></span>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-pay-0">Kartu berakhiran 1234</label>
      <p class="sb-cg-desc" id="cg-pay-0-desc">Berlaku s.d. 06/2027</p>
      <div class="sb-cg-actions">
        <button class="sb-btn" type="button" data-hierarchy="link-gray" data-size="sm">Jadikan utama</button>
        <button class="sb-btn" type="button" data-hierarchy="link-color" data-size="sm">Ubah</button>
      </div>
    </div>
    <input class="sb-check-input" type="radio" id="cg-pay-0" data-variant="circle" name="cg-pay" aria-describedby="cg-pay-0-desc" checked>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <span class="sb-cg-pay" aria-hidden="true"><svg aria-hidden="true"><!-- credit-card --></svg></span>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="cg-pay-1">Kartu berakhiran 5678</label>
      <p class="sb-cg-desc" id="cg-pay-1-desc">Berlaku s.d. 11/2026</p>
      <div class="sb-cg-actions">
        <button class="sb-btn" type="button" data-hierarchy="link-gray" data-size="sm">Jadikan utama</button>
        <button class="sb-btn" type="button" data-hierarchy="link-color" data-size="sm">Ubah</button>
      </div>
    </div>
    <input class="sb-check-input" type="radio" id="cg-pay-1" data-variant="circle" name="cg-pay" aria-describedby="cg-pay-1-desc">
  </div>
</div>
```

### Icon card

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="cg-plan-label">
  <span class="sb-choices-label" id="cg-plan-label">Paket langganan</span>
  <div class="sb-check sb-cg-item" data-size="sm" data-type="card">
    <div class="sb-cg-head">
      <span class="sb-cg-icon"><svg aria-hidden="true"><!-- layers --></svg></span>
      <label class="sb-cg-title" for="cg-plan-0">Paket Starter</label>
      <input class="sb-check-input" type="radio" id="cg-plan-0" data-variant="circle" name="cg-plan" aria-describedby="cg-plan-0-desc" checked>
    </div>
    <div class="sb-cg-body">
      <div class="sb-cg-text">
        <p class="sb-cg-price"><strong>Rp5 jt</strong> per bulan</p>
        <p class="sb-cg-desc" id="cg-plan-0-desc">Hingga 1.000 klaim per bulan dan semua modul analisis.</p>
      </div>
      <span class="sb-badge" data-size="sm" data-color="success">Paling populer</span>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm" data-type="card">
    <div class="sb-cg-head">
      <span class="sb-cg-icon"><svg aria-hidden="true"><!-- layers --></svg></span>
      <label class="sb-cg-title" for="cg-plan-1">Paket Enterprise</label>
      <input class="sb-check-input" type="radio" id="cg-plan-1" data-variant="circle" name="cg-plan" aria-describedby="cg-plan-1-desc">
    </div>
    <div class="sb-cg-body">
      <div class="sb-cg-text">
        <p class="sb-cg-price"><strong>Rp12 jt</strong> per bulan</p>
        <p class="sb-cg-desc" id="cg-plan-1-desc">Klaim tanpa batas, integrasi API dan reviewer khusus.</p>
      </div>
      <span class="sb-badge" data-size="sm" data-color="success">Hemat 20%</span>
    </div>
  </div>
</div>
```

## Sizes

```html
<div class="sb-check sb-cg-item" data-size="sm">
  <input class="sb-check-input" type="checkbox" id="sz-cg-sm" aria-describedby="sz-cg-sm-desc" checked>
  <div class="sb-cg-text">
    <label class="sb-cg-title" for="sz-cg-sm">Deteksi FWA <span class="sb-cg-sub">per klaim</span></label>
    <p class="sb-cg-desc" id="sz-cg-sm-desc">Tandai klaim yang berpotensi fraud, waste atau abuse sebelum dibayar.</p>
  </div>
</div>
<div class="sb-check sb-cg-item" data-size="md">
  <input class="sb-check-input" type="checkbox" id="sz-cg-md" aria-describedby="sz-cg-md-desc" checked>
  <div class="sb-cg-text">
    <label class="sb-cg-title" for="sz-cg-md">Deteksi FWA <span class="sb-cg-sub">per klaim</span></label>
    <p class="sb-cg-desc" id="sz-cg-md-desc">Tandai klaim yang berpotensi fraud, waste atau abuse sebelum dibayar.</p>
  </div>
</div>
```

| Size | Control | Title, description | Featured icon / avatar | Gap |
| --- | --- | --- | --- | --- |
| `sm` | 16 | Text sm (14/20) | 32 / 32 | Control 8, visual 12 |
| `md` | 20 | Text md (16/24), description 2 px below | 40 / 40 | Control 12, avatar and card logo 16, featured icon 12 |

Icon card titles are Text md in both sizes; `md` raises the price from Display sm to Display md.

## States

| State | Unselected | Selected |
| --- | --- | --- |
| Default | `white`, `gray-200` border | `brand-50` fill, `brand-300` border |
| Hover | `white`, `brand-300` border | `brand-50` fill, `brand-500` border |
| Focused | `white`, `brand-300` border + 4 px `focus-ring` ring | `brand-50`, `brand-300` border + 4 px `focus-ring` ring |
| Disabled | `gray-50` fill, `gray-200` border | `gray-50` fill, `gray-200` border |

- Only the card shows the focus ring; the control inside keeps its Default or checked look.
- Selected text: title `brand-800`, subtitle and description `brand-600`. Disabled text stays `gray-700` / `gray-500`, selected or not.
- Icon card: the header takes the fill and border, the body stays white with a `gray-200` border.
- Payment icon, selected: "Set as default" (Link gray) turns `brand-500`.

## Do and don't

**Do:** Cards when each option needs a description.

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="dd-cg-label">
  <span class="sb-choices-label" id="dd-cg-label">Frekuensi laporan</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="dd-cg-0" name="dd-cg" aria-describedby="dd-cg-0-desc" checked>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="dd-cg-0">Harian <span class="sb-cg-sub">setiap 07.00</span></label>
      <p class="sb-cg-desc" id="dd-cg-0-desc">Ringkasan klaim kemarin dikirim ke email tim.</p>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="dd-cg-1" name="dd-cg" aria-describedby="dd-cg-1-desc">
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="dd-cg-1">Mingguan <span class="sb-cg-sub">setiap Senin</span></label>
      <p class="sb-cg-desc" id="dd-cg-1-desc">Tren klaim tujuh hari terakhir.</p>
    </div>
  </div>
</div>
```

**Don't:** Cards for a short yes/no. The description only repeats the title; use Radio or a Toggle.

```html
<div class="sb-choices" role="radiogroup" aria-labelledby="dd-cg2-label">
  <span class="sb-choices-label" id="dd-cg2-label">Kirim salinan?</span>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="dd-cg2-0" name="dd-cg2" aria-describedby="dd-cg2-0-desc" checked>
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="dd-cg2-0">Ya</label>
      <p class="sb-cg-desc" id="dd-cg2-0-desc">Ya</p>
    </div>
  </div>
  <div class="sb-check sb-cg-item" data-size="sm">
    <input class="sb-check-input" type="radio" id="dd-cg2-1" name="dd-cg2" aria-describedby="dd-cg2-1-desc">
    <div class="sb-cg-text">
      <label class="sb-cg-title" for="dd-cg2-1">Tidak</label>
      <p class="sb-cg-desc" id="dd-cg2-1-desc">Tidak</p>
    </div>
  </div>
</div>
```

## Accessibility

- The input is a native checkbox or radio: Space toggles it, arrow keys move within a radio group.
- The title is the `<label for>`; its `::after` covers the card, so a click anywhere selects it. The description is linked with `aria-describedby`.
- Text links (Set as default, Edit) sit above the label layer (`z-index: 2`), so they act on their own and never toggle the card. Disable them with the card.
- Wrap the cards in `role="radiogroup"` (single select) or `role="group"` (multi select) with a visible label via `aria-labelledby`.
- The control shows selection as well as the colour, so the state does not rely on colour alone.

| Pair | Ratio | Needed | Result |
| --- | --- | --- | --- |
| Selected title `brand-800` on `brand-50` | 7.94:1 | 4.5:1 | Passes |
| Selected subtitle, description `brand-600` on `brand-50` | 4.65:1 | 4.5:1 | Passes |
| Unselected title `gray-700`, description `gray-500` on `white` | 10.46:1, 4.97:1 | 4.5:1 | Passes |
| Selected "Set as default" `brand-500` on `brand-50` | 3.33:1 | 4.5:1 | **Fails** |

> **Warning:** Selected Payment icon cards turn "Set as default" `brand-500`, which is 3.33:1 on `brand-50`. `brand-600` (4.65:1) passes and already matches the Edit link. Decision for the design team.

## Code

Load `tokens.css`, `checkbox.css` and `checkbox-group.css`; add `avatar.css` for Avatar cards, `button.css` for Payment icon links and `badge.css` for Icon card badges. No script.

`checkbox-group.css`

```css
/* Checkbox group (selectable cards), Codemasters Design System
   Needs tokens.css and checkbox.css (the control). Avatar cards also use avatar.css, Payment icon cards button.css, Icon cards badge.css.

   <div class="sb-choices" role="radiogroup" aria-labelledby="lap-label">
     <span class="sb-choices-label" id="lap-label">Frekuensi laporan</span>
     <div class="sb-check sb-cg-item" data-size="sm">
       <input class="sb-check-input" type="radio" name="lap" id="lap-1" aria-describedby="lap-1-desc" checked>
       <div class="sb-cg-text">
         <label class="sb-cg-title" for="lap-1">Harian <span class="sb-cg-sub">setiap 07.00</span></label>
         <p class="sb-cg-desc" id="lap-1-desc">Ringkasan klaim kemarin dikirim ke email tim.</p>
       </div>
     </div>
   </div>

   The label stretches over the whole card (::after), so the card is the hit area while text links inside
   stay clickable on their own. Selected, hover, focus and disabled all follow the input: no script.
   data-size     sm | md (on .sb-cg-item; also sizes the control through .sb-check)
   data-type     card = Icon card (header + body). Other types are just what sits in the row.
   data-state    hover | focus on .sb-cg-item forces a state in static mockups and docs only. */

.sb-cg-item {
  --cg-bg: var(--white); --cg-bd: var(--gray-200); --cg-title: var(--gray-700); --cg-text: var(--gray-500);
  position: relative; display: flex; width: 100%; box-sizing: border-box; padding: 16px;
  background: var(--cg-bg); border: 1px solid var(--cg-bd); border-radius: var(--radius-md);
  transition-property: background-color, border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
/* Gap: a leading checkbox or radio sits as in Checkbox (8, md 12, from .sb-check). An icon, avatar or card logo: 12 (md 16;
   the md featured icon keeps 12 because its ring already adds space). A trailing check circle uses the same gap. */
.sb-cg-item:has(> .sb-cg-icon, > .sb-avatar, > .sb-cg-pay) { gap: 12px; }
.sb-cg-item[data-size="md"]:has(> .sb-avatar, > .sb-cg-pay) { gap: 16px; }
.sb-cg-item > .sb-check-input:first-child { margin-top: 2px; } /* centres on the first line, as in Checkbox */

/* States. Disabled comes last so it wins over Selected. */
.sb-cg-item:has(.sb-check-input:checked) { --cg-bg: var(--brand-50); --cg-bd: var(--brand-300); --cg-title: var(--brand-800); --cg-text: var(--brand-600); }
.sb-cg-item:not(:has(:disabled)):is(:hover, [data-state="hover"]) { --cg-bd: var(--brand-300); }
.sb-cg-item:has(.sb-check-input:checked):not(:has(:disabled)):is(:hover, [data-state="hover"]) { --cg-bd: var(--brand-500); }
.sb-cg-item:is(:has(.sb-check-input:focus-visible), [data-state="focus"]) { --cg-bd: var(--brand-300); box-shadow: 0 0 0 4px var(--focus-ring); }
.sb-cg-item:has(.sb-check-input:disabled) { --cg-bg: var(--gray-50); --cg-bd: var(--gray-200); --cg-title: var(--gray-700); --cg-text: var(--gray-500); cursor: not-allowed; }

/* Only the card shows focus; the control keeps its Default / checked look. */
.sb-cg-item .sb-check-input:focus-visible { box-shadow: none; }
.sb-cg-item .sb-check-input:not(:checked, [type="checkbox"]:indeterminate):focus-visible { border-color: var(--gray-300); }

/* Text */
.sb-cg-text { display: grid; flex: 1; min-width: 0; }
.sb-cg-title { font: 500 var(--text-sm) var(--font); color: var(--cg-title); cursor: pointer; }
.sb-cg-title::after { content: ''; position: absolute; z-index: 1; inset: 0; border-radius: var(--radius-md); } /* the whole card is the hit area */
.sb-cg-sub { font-weight: 400; color: var(--cg-text); }
.sb-cg-desc { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--cg-text); }
.sb-cg-item[data-size="md"] .sb-cg-title { font: 500 var(--text-md) var(--font); }
.sb-cg-item[data-size="md"] .sb-cg-desc { margin-top: 2px; font: 400 var(--text-md) var(--font); }
.sb-cg-item:has(:disabled) .sb-cg-title { cursor: not-allowed; }

/* Leading visuals. Featured icon: 32 (md 40) brand-100 circle with a 4 px brand-50 ring, overhanging the text line by 2 (md 4). */
.sb-cg-icon { display: grid; place-items: center; flex: none; box-sizing: border-box; width: 32px; height: 32px; margin-block: -2px; border: 4px solid var(--brand-50); border-radius: var(--radius-full); background: var(--brand-100); color: var(--brand-600); }
.sb-cg-icon svg { width: 16px; height: 16px; }
.sb-cg-item[data-size="md"] .sb-cg-icon { width: 40px; height: 40px; margin-block: -4px; }
.sb-cg-item[data-size="md"] .sb-cg-icon svg { width: 20px; height: 20px; }
/* Card logo tile, 46 x 32. Use the real brand logos. */
.sb-cg-pay { display: grid; place-items: center; flex: none; box-sizing: border-box; width: 46px; height: 32px; border: 1px solid var(--gray-100); border-radius: var(--radius-sm); background: var(--white); color: var(--gray-700); }
.sb-cg-pay svg { width: 20px; height: 20px; }

/* Payment icon: text links sit above the stretched label, so they never toggle the card. */
.sb-cg-actions { position: relative; z-index: 2; display: flex; gap: 12px; margin-top: 8px; }
.sb-cg-item:has(.sb-check-input:checked) .sb-btn[data-hierarchy="link-gray"] { --btn-fg: var(--brand-500); --btn-fg-hover: var(--brand-600); }

/* Icon card: the header carries the selection colours, the body stays white. */
.sb-cg-item[data-type="card"] { flex-direction: column; align-items: stretch; gap: 0; padding: 0; background: var(--white); border-color: var(--gray-200); }
.sb-cg-head { display: flex; align-items: center; gap: 12px; margin: -1px -1px 0; padding: 16px 20px 16px 16px; background: var(--cg-bg); border: 1px solid var(--cg-bd); border-radius: var(--radius-md) var(--radius-md) 0 0; transition: inherit; }
.sb-cg-head .sb-cg-title, .sb-cg-item[data-size="md"] .sb-cg-head .sb-cg-title { flex: 1; font: 500 var(--text-md) var(--font); }
.sb-cg-head .sb-cg-icon { margin-block: 0; }
.sb-cg-body { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 8px 16px; padding: 16px; }
.sb-cg-body .sb-cg-text { flex: 1 1 240px; } /* narrow cards: the badge wraps below */
.sb-cg-price { margin: 0 0 4px; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-cg-price strong { font: 600 var(--display-sm) var(--font); color: var(--gray-700); }
.sb-cg-body .sb-cg-desc { color: var(--gray-500); }
.sb-cg-item[data-size="md"] .sb-cg-price strong { font: 600 var(--display-md) var(--font); }

@media (prefers-reduced-motion: reduce) {
  .sb-cg-item, .sb-cg-head { transition: none; }
}
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f2f4f7;
  --gray-200: #eaecf0;
  --gray-300: #d0d5dd;
  --gray-500: #667085;
  --gray-700: #344054;
  --brand-50: #f0f6fe;
  --brand-100: #dfeafb;
  --brand-300: #9fc5f6;
  --brand-500: #5183eb;
  --brand-600: #3966e0;
  --brand-800: #2942a7;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-full: 9999px;
  --focus-ring: color-mix(in srgb, var(--brand-500) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --display-md: 36px/44px;
  --display-sm: 30px/38px;
  --text-md: 16px/24px;
  --text-sm: 14px/20px;
}
```

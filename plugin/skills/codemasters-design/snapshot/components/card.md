---
name: Card
slug: card
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-08
requires: tokens.css
---

# Card

The container for one topic on a page: a claim summary, a table, a chart, a metric. White, bordered, radius 12. Includes the inner card, the AI summary card, metric cards and link cards.

## Usage

- One card holds one topic: a summary, a table, a chart, a form section. The title names the topic.
- Cards sit on the page 24 apart (Grids & Spacing). Blocks inside a card sit 16 apart.
- Group related values inside a card with an inner card, never with a second card in a card.
- One primary action per card at most, in the footer or the head. Other actions are Secondary gray, Tertiary or in a "more" menu.
- Cards are flat: a `gray-300` border, no shadow. Shadows are for layers that float (menus, dialogs).

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | `white`, 1 px `gray-300` border, radius 12, padding 24 (sm 16). No shadow. |
| 2 | Head | Title block on the left, actions on the right, top-aligned, gap 16. |
| 3 | Title | Text xl / Semibold (sm: Text md), `gray-900`, Title Case. A heading element at the level the page needs. Optional description below: Text sm `gray-500`, 4 apart. |
| 4 | Badge | Optional status pill or count, Badge sm, 8 after the title. |
| 5 | Actions | Buttons sm, gap 8: Secondary gray or Tertiary, an icon button with a "more" menu. |
| 6 | Fold chevron | Optional. Tertiary gray icon button sm; points up when open, down when folded. Hides the body and footer. |
| 7 | Body | Blocks 16 apart (sm 12): text, inner cards, tables, charts. |
| 8 | Footer | Optional. Actions right-aligned, gap 12, above a `gray-200` divider that runs edge to edge. |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Variant | Card, Inner, Tint | Omit, `data-variant="inner"` or `"tint"` |
| Size | md, sm | Omit for md, `data-size="sm"` |
| Description | True, False | `<p class="sb-card-desc">` under the title |
| Badge | True, False | Badge sm inside the title |
| Actions | True, False | `<div class="sb-card-actions">` with Buttons sm |
| Fold | Open, Folded | `.sb-card-fold` with `aria-expanded` and `aria-controls`; `hidden` on the body and footer |
| Footer | True, False | `<footer class="sb-card-foot">` |
| Link | True, False | `<a class="sb-card-link">` in the title |

## Types

### Card

The white card for a topic. Here with an inner card of summary rows and a footer.

```html
<section class="sb-card" aria-labelledby="card-2-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-2-title">Ringkasan Klaim <span class="sb-badge" data-size="sm" data-color="success" data-icon="dot"><span class="sb-badge-dot" aria-hidden="true"></span>Disetujui</span></h3>
      <p class="sb-card-desc">Diperbarui 7 Oktober 2026, 14.20</p>
    </div>
    <div class="sb-card-actions">
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Lihat Detail</button>
      <button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Opsi lain"><svg aria-hidden="true"><!-- more-vertical --></svg></button>
    </div>
  </header>
  <div class="sb-card-body" id="card-2-body">
    <div class="sb-card" data-variant="inner">
      <dl class="sb-card-rows">
        <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
        <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
        <div class="sb-card-row"><dt>Tidak ditanggung</dt><dd>Rp 1.250.000</dd></div>
        <div class="sb-card-row" data-total><dt>Selisih</dt><dd>Rp 1.250.000</dd></div>
      </dl>
    </div>
  </div>
  <footer class="sb-card-foot" id="card-2-foot">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Tolak</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">Setujui Klaim</button>
  </footer>
</section>
```

### Inner card

A box inside a card for a group of values: `gray-50`, 1 px `gray-200` border, radius 8, padding `12 16`, rows 8 apart. "Label …… Value" rows use a `<dl>`; values are Medium, `gray-900`, tabular, right-aligned. A total row sits above a `gray-200` line.

```html
<div class="sb-card" data-variant="inner">
  <p class="sb-card-title">Rincian Tagihan</p>
  <dl class="sb-card-rows">
    <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
    <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
    <div class="sb-card-row"><dt>Tidak ditanggung</dt><dd>Rp 1.250.000</dd></div>
    <div class="sb-card-row" data-total><dt>Selisih</dt><dd>Rp 1.250.000</dd></div>
  </dl>
</div>
```

### Tint: AI summary

For text the AI wrote: `brand-50`, 1 px `brand-200` border, radius 8, padding 16. Title Text md / Semibold `brand-700` with the `loader` icon, "Edit Ringkasan" as Secondary gray sm, fold chevron.

```html
<section class="sb-card" data-variant="tint" aria-labelledby="card-3-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-3-title"><svg aria-hidden="true"><!-- loader --></svg>Ringkasan AI</h3>
    </div>
    <div class="sb-card-actions">
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Edit Ringkasan</button>
      <button class="sb-btn sb-card-fold" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-expanded="true" aria-controls="card-3-body" aria-labelledby="card-3-title"><svg aria-hidden="true"><!-- chevron-down --></svg></button>
    </div>
  </header>
  <div class="sb-card-body" id="card-3-body">
    <p class="sb-card-text">Klaim rawat inap 3 hari untuk demam berdarah. Tagihan sesuai tarif rumah sakit rekanan; satu item obat di luar formularium (Rp 1.250.000) tidak ditanggung.</p>
  </div>
</section>
```

### Metric

A compact card (sm) for one number: label Text sm / Medium `gray-500`, value Display xs / Semibold `gray-900` tabular, then a change badge and a caption in Text xs `gray-500`. The badge colour says good or bad, not up or down: a shorter analysis time is `success` with a down arrow. Money stays in full Rupiah.

```html
<section class="sb-card" data-size="sm" aria-label="Klaim masuk">
  <dl class="sb-metric">
    <dt class="sb-metric-label">Klaim masuk</dt>
    <dd class="sb-metric-value">1.284</dd>
    <dd class="sb-metric-foot"><span class="sb-badge" data-size="sm" data-color="success" data-icon="icon-left"><svg aria-hidden="true"><!-- arrow-up --></svg>12%</span>vs bulan lalu</dd>
  </dl>
</section>
<section class="sb-card" data-size="sm" aria-label="Total tagihan">
  <dl class="sb-metric">
    <dt class="sb-metric-label">Total tagihan</dt>
    <dd class="sb-metric-value">Rp 1.725.283.300</dd>
    <dd class="sb-metric-foot"><span class="sb-badge" data-size="sm" data-color="success" data-icon="icon-left"><svg aria-hidden="true"><!-- arrow-up --></svg>8%</span>vs bulan lalu</dd>
  </dl>
</section>
<section class="sb-card" data-size="sm" aria-label="Waktu analisis rata-rata">
  <dl class="sb-metric">
    <dt class="sb-metric-label">Waktu analisis rata-rata</dt>
    <dd class="sb-metric-value">4 mnt 12 dtk</dd>
    <dd class="sb-metric-foot"><span class="sb-badge" data-size="sm" data-color="success" data-icon="icon-left"><svg aria-hidden="true"><!-- arrow-down --></svg>−60%</span>vs bulan lalu</dd>
  </dl>
</section>
<section class="sb-card" data-size="sm" aria-label="Temuan FWA">
  <dl class="sb-metric">
    <dt class="sb-metric-label">Temuan FWA</dt>
    <dd class="sb-metric-value">37</dd>
    <dd class="sb-metric-foot"><span class="sb-badge" data-size="sm" data-color="error" data-icon="icon-left"><svg aria-hidden="true"><!-- arrow-up --></svg>5</span>vs bulan lalu</dd>
  </dl>
</section>
```

### Link card

A card that opens a page. The title is the link; its hit area stretches over the whole card, so the card has one tab stop and the link text is the accessible name. Hover: `gray-50` fill and `gray-400` border. Focus: `brand-300` border and the 4 px `focus-ring` ring.

```html
<section class="sb-card" data-size="sm">
  <div class="sb-card-heading">
    <h3 class="sb-card-title"><a class="sb-card-link" href="#/card">Laporan Bulanan</a></h3>
    <p class="sb-card-desc">Klaim, tagihan dan temuan FWA per bulan.</p>
  </div>
</section>
<section class="sb-card" data-size="sm">
  <div class="sb-card-heading">
    <h3 class="sb-card-title"><a class="sb-card-link" href="#/card">Rekanan Rumah Sakit</a></h3>
    <p class="sb-card-desc">128 rumah sakit dengan tarif dan status kerja sama.</p>
  </div>
</section>
<section class="sb-card" data-size="sm">
  <div class="sb-card-heading">
    <h3 class="sb-card-title"><a class="sb-card-link" href="#/card">Pengaturan Polis</a></h3>
    <p class="sb-card-desc">Plan, manfaat dan batas tanggungan per produk.</p>
  </div>
</section>
<section class="sb-card" data-size="sm">
  <div class="sb-card-heading">
    <h3 class="sb-card-title"><a class="sb-card-link" href="#/card">Pengguna dan Akses</a></h3>
    <p class="sb-card-desc">Anggota tim, peran dan hak akses.</p>
  </div>
</section>
```

## Sizes

md for page sections, sm for compact cards in a grid (metrics, links, side panels). sm: padding 16, blocks 12 apart, title Text md.

```html
<section class="sb-card" aria-labelledby="card-4-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-4-title">Ringkasan Klaim <span class="sb-badge" data-size="sm" data-color="success" data-icon="dot"><span class="sb-badge-dot" aria-hidden="true"></span>Disetujui</span></h3>
      <p class="sb-card-desc">Diperbarui 7 Oktober 2026, 14.20</p>
    </div>
    <div class="sb-card-actions">
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Lihat Detail</button>
      <button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Opsi lain"><svg aria-hidden="true"><!-- more-vertical --></svg></button>
    </div>
  </header>
  <div class="sb-card-body" id="card-4-body">
    <div class="sb-card" data-variant="inner">
      <dl class="sb-card-rows">
        <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
        <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
        <div class="sb-card-row"><dt>Tidak ditanggung</dt><dd>Rp 1.250.000</dd></div>
        <div class="sb-card-row" data-total><dt>Selisih</dt><dd>Rp 1.250.000</dd></div>
      </dl>
    </div>
  </div>
</section>
<section class="sb-card" data-size="sm" aria-labelledby="card-5-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-5-title">Ringkasan Klaim <span class="sb-badge" data-size="sm" data-color="success" data-icon="dot"><span class="sb-badge-dot" aria-hidden="true"></span>Disetujui</span></h3>
      <p class="sb-card-desc">Diperbarui 7 Oktober 2026, 14.20</p>
    </div>
    <div class="sb-card-actions">
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Lihat Detail</button>
      <button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Opsi lain"><svg aria-hidden="true"><!-- more-vertical --></svg></button>
    </div>
  </header>
  <div class="sb-card-body" id="card-5-body">
    <div class="sb-card" data-variant="inner">
      <dl class="sb-card-rows">
        <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
        <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
        <div class="sb-card-row"><dt>Tidak ditanggung</dt><dd>Rp 1.250.000</dd></div>
        <div class="sb-card-row" data-total><dt>Selisih</dt><dd>Rp 1.250.000</dd></div>
      </dl>
    </div>
  </div>
</section>
```

## States

### Open and folded

Folding keeps the head and hides the body and footer. The chevron turns in 150 ms; the body appears without animation.

```html
<section class="sb-card" data-variant="tint" aria-labelledby="card-6-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-6-title"><svg aria-hidden="true"><!-- loader --></svg>Ringkasan AI</h3>
    </div>
    <div class="sb-card-actions">
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Edit Ringkasan</button>
      <button class="sb-btn sb-card-fold" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-expanded="true" aria-controls="card-6-body" aria-labelledby="card-6-title"><svg aria-hidden="true"><!-- chevron-down --></svg></button>
    </div>
  </header>
  <div class="sb-card-body" id="card-6-body">
    <p class="sb-card-text">Klaim rawat inap 3 hari untuk demam berdarah. Tagihan sesuai tarif rumah sakit rekanan; satu item obat di luar formularium (Rp 1.250.000) tidak ditanggung.</p>
  </div>
</section>
<section class="sb-card" data-variant="tint" aria-labelledby="card-7-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-7-title"><svg aria-hidden="true"><!-- loader --></svg>Ringkasan AI</h3>
    </div>
    <div class="sb-card-actions">
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Edit Ringkasan</button>
      <button class="sb-btn sb-card-fold" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-expanded="false" aria-controls="card-7-body" aria-labelledby="card-7-title"><svg aria-hidden="true"><!-- chevron-down --></svg></button>
    </div>
  </header>
  <div class="sb-card-body" id="card-7-body" hidden>
    <p class="sb-card-text">Klaim rawat inap 3 hari untuk demam berdarah. Tagihan sesuai tarif rumah sakit rekanan; satu item obat di luar formularium (Rp 1.250.000) tidak ditanggung.</p>
  </div>
</section>
```

### Link card

### Empty

A card never shows a blank body. Say what is missing in Text sm `gray-500`, centred, with a 24 px `gray-400` icon and, when the user can fix it, one Secondary gray button.

```html
<section class="sb-card" aria-labelledby="card-1-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-1-title">Riwayat Klaim</h3>
    </div>
  </header>
  <div class="sb-card-body" id="card-1-body">
    <div class="sb-card-empty">
      <svg aria-hidden="true"><!-- file-text --></svg>
      <p>Belum ada klaim untuk peserta ini.</p>
      <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Tambah Klaim</button>
    </div>
  </div>
</section>
```

## Do and don't

**Do:** Group values with an inner card.

```html
<div class="sb-card" data-variant="inner">
  <p class="sb-card-title">Rincian Tagihan</p>
  <dl class="sb-card-rows">
    <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
    <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
  </dl>
</div>
```

**Don't:** A white card inside a white card. The borders stack up and the levels look equal.

```html
<section class="sb-card" data-size="sm"><section class="sb-card" data-size="sm"><dl class="sb-card-rows">
  <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
  <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
</dl></section></section>
```

**Do:** A border and no shadow.

```html
<section class="sb-card" data-size="sm"><dl class="sb-card-rows">
  <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
  <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
</dl></section>
```

**Don't:** A floating shadow on a card. Shadows are for menus and dialogs that sit above the page.

```html
<section class="sb-card" data-size="sm" style="border-color: transparent; box-shadow: var(--shadow-lg)"><dl class="sb-card-rows">
  <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
  <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
</dl></section>
```

**Do:** One primary action, in the footer.

```html
<section class="sb-card" data-size="sm" aria-labelledby="card-8-title">
  <header class="sb-card-head">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="card-8-title">Ringkasan Klaim</h3>
    </div>
  </header>
  <div class="sb-card-body" id="card-8-body">
    <dl class="sb-card-rows">
      <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
      <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
    </dl>
  </div>
  <footer class="sb-card-foot" id="card-8-foot">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm">Tolak</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">Setujui Klaim</button>
  </footer>
</section>
```

**Don't:** Several primary buttons. Pick the one next step; the others are Secondary gray.

```html
<section class="sb-card" data-size="sm"><dl class="sb-card-rows">
  <div class="sb-card-row"><dt>Total tagihan</dt><dd>Rp 12.450.000</dd></div>
  <div class="sb-card-row"><dt>Ditanggung</dt><dd>Rp 11.200.000</dd></div>
</dl><footer class="sb-card-foot"><button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">Simpan</button><button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">Kirim</button><button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm">Setujui</button></footer></section>
```

## Accessibility

- A card that is a page section is a `<section>` labelled by its title (`aria-labelledby`). The title is a real heading (`h2`, `h3`) at the level the page needs.
- The fold chevron is a `<button>` with `aria-expanded` and `aria-controls` naming the body and footer; it takes its name from the title (`aria-labelledby`), and `aria-expanded` says open or folded.
- A link card has one link, in the title, so screen readers read a short name and keyboard users get one tab stop. Never wrap a whole card, with its buttons, in an `<a>`.
- Summary rows and metrics are a `<dl>`: each value is read with its label.
- The `gray-300` border is 1.47:1 against white. That is fine for a card, which also has its own content and spacing to show where it ends; the same open note as the Input field border applies to controls, not cards.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| Title `gray-900` | `white` | 17.75:1 | Passes |
| Description, row labels `gray-500` | `white` / `gray-50` | 4.97:1 / 4.76:1 | Passes |
| AI summary title `brand-700` | `brand-50` | 6.09:1 | Passes |
| Empty state `gray-500` | `white` | 4.97:1 | Passes |

## Code

Load `tokens.css`, `button.css` and `badge.css` for the parts inside, then `card.css`. Add `card.js` only for the fold chevron.

`card.css`

```css
/* Card, Codemasters Design System
   Needs tokens.css; button.css and badge.css for the parts inside; card.js only for the fold chevron.

   <section class="sb-card" aria-labelledby="ringkasan-title">
     <header class="sb-card-head">
       <div class="sb-card-heading">
         <h3 class="sb-card-title" id="ringkasan-title">Ringkasan Klaim <span class="sb-badge" …>Disetujui</span></h3>
         <p class="sb-card-desc">Diperbarui 7 Oktober 2026</p>
       </div>
       <div class="sb-card-actions">…sb-btn sm…</div>
     </header>
     <div class="sb-card-body">…</div>
     <footer class="sb-card-foot">…sb-btn…</footer>
   </section>

   data-variant  inner | tint      (omit for the white card)
   data-size     sm                (compact: padding 16)
   Link card     one <a class="sb-card-link"> in the title; its hit area covers the card.
   data-state    hover | focus on a link card. Static mockups and docs only. */

.sb-card {
  --card-py: 24px; --card-px: 24px; --card-gap: 16px;
  box-sizing: border-box; position: relative;
  display: grid; align-content: start; gap: var(--card-gap); min-width: 0;
  padding: var(--card-py) var(--card-px);
  font: 400 var(--text-sm) var(--font); color: var(--gray-700);
  background: var(--white);
  border: 1px solid var(--gray-300); border-radius: var(--radius-lg); /* cards are flat: a border, never a shadow */
}
.sb-card[data-size="sm"] { --card-py: 16px; --card-px: 16px; --card-gap: 12px; }

/* Head: title (+ badges) and description on the left, actions and the fold chevron on the right. */
.sb-card-head { display: flex; align-items: flex-start; gap: 16px; }
.sb-card-heading { display: grid; gap: 4px; flex: 1; min-width: 0; }
.sb-card-title {
  display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 0;
  font: 600 var(--text-xl) var(--font); color: var(--gray-900); text-wrap: balance;
}
.sb-card[data-size="sm"] .sb-card-title { font: 600 var(--text-md) var(--font); }
.sb-card-title > svg { width: 20px; height: 20px; flex: none; }
.sb-card-desc { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); text-wrap: pretty; }
.sb-card-actions { position: relative; z-index: 1; display: flex; align-items: center; gap: 8px; flex: none; } /* above a link card's hit area */
.sb-card-fold > svg { transition: rotate 150ms var(--ease); }
.sb-card-fold[aria-expanded="true"] > svg { rotate: 180deg; }

/* Body and footer. The footer divider runs edge to edge. */
.sb-card-body { display: grid; gap: var(--card-gap); min-width: 0; }
.sb-card-foot {
  display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 12px;
  margin-inline: calc(var(--card-px) * -1); padding: var(--card-gap) var(--card-px) 0;
  border-top: 1px solid var(--gray-200);
}
.sb-card-body[hidden], .sb-card-foot[hidden] { display: none; }
.sb-card-text { margin: 0; text-wrap: pretty; }

/* Inner card: a box inside a card. gray-50, radius 8, padding 12 16. */
.sb-card[data-variant="inner"] { --card-py: 12px; --card-px: 16px; --card-gap: 8px; background: var(--gray-50); border-color: var(--gray-200); border-radius: var(--radius-md); }
.sb-card[data-variant="inner"] .sb-card-title { font: 600 var(--text-sm) var(--font); }

/* Tint: AI summary. brand-50, brand-200 border, radius 8, title in brand-700 with the loader icon. */
.sb-card[data-variant="tint"] { --card-py: 16px; --card-px: 16px; --card-gap: 12px; background: var(--brand-50); border-color: var(--brand-200); border-radius: var(--radius-md); }
.sb-card[data-variant="tint"] .sb-card-title { font: 600 var(--text-md) var(--font); color: var(--brand-700); }

/* Summary rows: "Label …… Value". */
.sb-card-rows { display: grid; gap: 8px; margin: 0; }
.sb-card-row { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; }
.sb-card-row > dt { color: var(--gray-500); }
.sb-card-row > dd { margin: 0; font-weight: 500; color: var(--gray-900); text-align: end; font-variant-numeric: tabular-nums; }
.sb-card-row[data-total] { padding-top: 8px; border-top: 1px solid var(--gray-200); }
.sb-card-row[data-total] > dt { font-weight: 500; color: var(--gray-900); }

/* Metric: label, value, change. */
.sb-metric { display: grid; gap: 8px; margin: 0; }
.sb-metric > dd { margin: 0; }
.sb-metric-label { font: 500 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-metric-value { margin: 0; font: 600 var(--display-xs) var(--font); color: var(--gray-900); font-variant-numeric: tabular-nums; }
.sb-metric-foot { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font: 400 var(--text-xs) var(--font); color: var(--gray-500); }

/* Empty state, inside the body. */
.sb-card-empty { display: grid; justify-items: center; gap: 12px; padding: 32px 16px; text-align: center; color: var(--gray-500); text-wrap: pretty; }
.sb-card-empty > svg { width: 24px; height: 24px; color: var(--gray-400); }

/* Link card: the title link stretches over the card. Buttons inside stay clickable (z-index above). */
.sb-card-link { color: inherit; text-decoration: none; outline: none; }
.sb-card-link::after { content: ''; position: absolute; inset: -1px; border-radius: inherit; }
.sb-card:has(.sb-card-link) { transition-property: background-color, border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease); }
.sb-card:has(.sb-card-link:hover), .sb-card[data-state="hover"] { background: var(--gray-50); border-color: var(--gray-400); }
.sb-card:has(.sb-card-link:focus-visible), .sb-card[data-state="focus"] { border-color: var(--brand-300); box-shadow: 0 0 0 4px var(--focus-ring); }

@media (prefers-reduced-motion: reduce) {
  .sb-card, .sb-card-fold > svg { transition: none; }
}
```

### Fold script

`card.js`

```js
// Card fold: the chevron shows and hides the parts named in its aria-controls.
function cardFold(e) {
  const btn = e.target.closest?.('.sb-card-fold');
  if (!btn) return;
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', String(open));
  for (const id of btn.getAttribute('aria-controls').split(' ')) document.getElementById(id).hidden = !open;
}
document.addEventListener('click', cardFold);
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-200: #eaecf0;
  --gray-300: #d0d5dd;
  --gray-400: #98a2b3;
  --gray-500: #667085;
  --gray-700: #344054;
  --gray-900: #101828;
  --brand-50: #f0f6fe;
  --brand-200: #c5dbfa;
  --brand-300: #9fc5f6;
  --brand-700: #2e51cd;
  --radius-md: 8px;
  --radius-lg: 12px;
  --focus-ring: color-mix(in srgb, var(--brand-600) 20%, transparent);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --display-xs: 24px/32px;
  --text-xl: 20px/30px;
  --text-md: 16px/24px;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
}
```

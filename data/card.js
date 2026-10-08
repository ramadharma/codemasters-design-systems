// Card: the container for one topic on a page. Built from DESIGN.md Containers (Card, Inner card, AI summary),
// Data display (stat summary) and Grids & Spacing (card padding 24, gap 24, blocks 16).
(() => {
  const { esc, icon } = DS;

  // ---- The fold chevron shows and hides the body and footer it controls.
  function cardFold(e) {
    const btn = e.target.closest?.('.sb-card-fold');
    if (!btn) return;
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    for (const id of btn.getAttribute('aria-controls').split(' ')) document.getElementById(id).hidden = !open;
  }
  const SCRIPT = `// Card fold: the chevron shows and hides the parts named in its aria-controls.
${cardFold.toString().replace(/^  /gm, '')}
document.addEventListener('click', cardFold);`;

  const CSS = `/* Card, Codemasters Design System
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

   data-variant  inner | tint | framed   (omit for the white card)
   data-size     sm                (compact: padding 16)
   Link card     one <a class="sb-card-link"> in the title; its hit area covers the card.
   data-state    hover | focus on a link card. Static mockups and docs only. */

.sb-card {
  --card-py: 24px; --card-px: 24px; --card-gap: 16px; --card-title-lh: 30px; /* title line height: Text xl */
  box-sizing: border-box; position: relative;
  display: grid; align-content: start; gap: var(--card-gap); min-width: 0;
  padding: var(--card-py) var(--card-px);
  font: 400 var(--text-sm) var(--font); color: var(--gray-700);
  background: var(--white);
  border: 1px solid var(--gray-300); border-radius: var(--radius-lg); /* cards are flat: a border, never a shadow */
}
.sb-card[data-size="sm"] { --card-py: 16px; --card-px: 16px; --card-gap: 12px; --card-title-lh: 24px; }

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
/* Actions (36 px buttons) centre on the title line and overhang it, so they never make the head taller than the title. */
.sb-card-actions { position: relative; z-index: 1; display: flex; align-items: center; gap: 8px; flex: none; margin-block: calc((var(--card-title-lh) - 36px) / 2); }
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
.sb-card[data-variant="inner"] { --card-py: 12px; --card-px: 16px; --card-gap: 8px; --card-title-lh: 20px; background: var(--gray-50); border-color: var(--gray-200); border-radius: var(--radius-md); }
.sb-card[data-variant="inner"] .sb-card-title { font: 600 var(--text-sm) var(--font); }

/* Tint: AI summary. brand-50, brand-200 border, radius 8, title in brand-700 with the loader icon. */
.sb-card[data-variant="tint"] { --card-py: 16px; --card-px: 16px; --card-gap: 12px; --card-title-lh: 24px; background: var(--brand-50); border-color: var(--brand-200); border-radius: var(--radius-md); }
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

/* Framed: a gray-100 shell (one step darker than the gray-50 page) holds the head and the footer; the content sits on a white sheet with its own border and
   radius, laid over the shell's edge. For chart and table panels (head on the shell) and forms (actions on the shell). */
.sb-card[data-variant="framed"] { --card-px: 16px; --card-title-lh: 24px; gap: 0; padding: 0; background: var(--gray-100); border-color: var(--gray-200); }
.sb-card[data-variant="framed"] > .sb-card-head { padding: 12px 16px; }
.sb-card[data-variant="framed"] > .sb-card-head .sb-card-title { font: 600 var(--text-md) var(--font); color: var(--gray-700); }
.sb-card[data-variant="framed"] > .sb-card-body { margin: -1px; padding: 16px; background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); }
.sb-card[data-variant="framed"] > .sb-card-body .sb-card-title { font: 600 var(--text-md) var(--font); }
.sb-card[data-variant="framed"] > .sb-card-head + .sb-card-body { margin-top: 0; }
.sb-card[data-variant="framed"] > .sb-card-body:has(+ .sb-card-foot:not([hidden])) { margin-bottom: 0; }
.sb-card[data-variant="framed"] > .sb-card-foot { margin: 0; padding: 12px 16px; border-top: 0; }

/* Empty state, inside the body. In a chart or table area it takes a dashed frame the size of the missing content. */
.sb-card-empty { display: grid; justify-items: center; align-content: center; gap: 12px; padding: 32px 16px; text-align: center; color: var(--gray-500); text-wrap: pretty; }
.sb-card-empty > svg { width: 24px; height: 24px; color: var(--gray-400); }
.sb-card-empty p { margin: 0; }
.sb-card-empty-text { display: grid; gap: 4px; }
.sb-card-empty-title { font: 600 var(--text-md) var(--font); color: var(--gray-900); }
.sb-card-empty[data-frame="dashed"] { min-height: 160px; border: 1px dashed var(--gray-300); border-radius: var(--radius-md); }

/* Link card: the title link stretches over the card. Buttons inside stay clickable (z-index above). */
.sb-card-link { color: inherit; text-decoration: none; outline: none; }
.sb-card-link::after { content: ''; position: absolute; inset: -1px; border-radius: inherit; }
.sb-card:has(.sb-card-link) { transition-property: background-color, border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease); }
.sb-card:has(.sb-card-link:hover), .sb-card[data-state="hover"] { background: var(--gray-50); border-color: var(--gray-400); }
.sb-card:has(.sb-card-link:focus-visible), .sb-card[data-state="focus"] { border-color: var(--brand-300); box-shadow: 0 0 0 4px var(--focus-ring); }

@media (prefers-reduced-motion: reduce) {
  .sb-card, .sb-card-fold > svg { transition: none; }
}
`;

  // ---- Builders
  const ROWS = [['Total tagihan', 'Rp 12.450.000'], ['Ditanggung', 'Rp 11.200.000'], ['Tidak ditanggung', 'Rp 1.250.000']];
  const rows = (list = ROWS, total) =>
    `<dl class="sb-card-rows">\n${list.map(([l, v]) => `  <div class="sb-card-row"><dt>${esc(l)}</dt><dd>${esc(v)}</dd></div>`).join('\n')}${
      total ? `\n  <div class="sb-card-row" data-total><dt>${esc(total[0])}</dt><dd>${esc(total[1])}</dd></div>` : ''
    }\n</dl>`;
  const inner = (body, title) => `<div class="sb-card" data-variant="inner">${title ? `\n  <p class="sb-card-title">${esc(title)}</p>` : ''}\n  ${body.replace(/\n/g, '\n  ')}\n</div>`;
  const statusBadge = `<span class="sb-badge" data-size="sm" data-color="success" data-icon="dot"><span class="sb-badge-dot" aria-hidden="true"></span>Disetujui</span>`;
  const btn = (label, h = 'secondary-gray', extra = '') => `<button class="sb-btn" type="button" data-hierarchy="${h}" data-size="sm"${extra}>${label}</button>`;
  const iconBtn = (glyph, label, extra = '') => `<button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="${label}"${extra}>${icon(glyph)}</button>`;

  let uid = 0; // ids stay unique across every example on the page
  function card({
    variant, size = 'md', title = 'Ringkasan Klaim', titleIcon, desc = 'Diperbarui 7 Oktober 2026, 14.20', badge = true, actions = true,
    fold = false, open = true, footer = false, body = inner(rows(ROWS, ['Selisih', 'Rp 1.250.000'])), tag = 'h3', state,
  } = {}) {
    const id = `card-${++uid}`;
    const a = ['class="sb-card"'];
    if (variant) a.push(`data-variant="${variant}"`);
    if (size === 'sm') a.push('data-size="sm"');
    if (state) a.push(`data-state="${state}"`);
    a.push(`aria-labelledby="${id}-title"`);
    const controls = [`${id}-body`, footer ? `${id}-foot` : ''].filter(Boolean).join(' ');
    const acts = [
      typeof actions === 'string' ? actions : actions ? (variant === 'tint' ? btn('Edit Ringkasan') : `${btn('Lihat Detail')}\n      ${iconBtn('more-vertical', 'Opsi lain')}`) : '',
      fold ? iconBtn('chevron-down', '', ` aria-expanded="${open}" aria-controls="${controls}" aria-labelledby="${id}-title"`).replace(' aria-label=""', '').replace('class="sb-btn"', 'class="sb-btn sb-card-fold"') : '',
    ].filter(Boolean);
    const head = `  <header class="sb-card-head">
    <div class="sb-card-heading">
      <${tag} class="sb-card-title" id="${id}-title">${titleIcon ? icon(titleIcon) : ''}${esc(title)}${badge ? ` ${statusBadge}` : ''}</${tag}>${desc ? `\n      <p class="sb-card-desc">${esc(desc)}</p>` : ''}
    </div>${acts.length ? `\n    <div class="sb-card-actions">\n      ${acts.join('\n      ')}\n    </div>` : ''}
  </header>`;
    const parts = [head, `  <div class="sb-card-body" id="${id}-body"${open ? '' : ' hidden'}>\n    ${body.replace(/\n/g, '\n    ')}\n  </div>`];
    if (footer) parts.push(`  <footer class="sb-card-foot" id="${id}-foot"${open ? '' : ' hidden'}>\n    ${btn('Tolak')}\n    ${btn('Setujui Klaim', 'primary')}\n  </footer>`);
    return `<section ${a.join(' ')}>\n${parts.join('\n')}\n</section>`;
  }

  // Docs-only wrapper for width. DS.snippet strips it from the code.
  const stage = (html, cls = '') => `<div class="card-stage${cls ? ` ${cls}` : ''}">\n${html}\n</div>`;

  const AI_TEXT = '<p class="sb-card-text">Klaim rawat inap 3 hari untuk demam berdarah. Tagihan sesuai tarif rumah sakit rekanan; satu item obat di luar formularium (Rp 1.250.000) tidak ditanggung.</p>';
  const aiCard = (o = {}) => card({ variant: 'tint', title: 'Ringkasan AI', titleIcon: 'loader', desc: '', badge: false, fold: true, body: AI_TEXT, ...o });

  const metric = (label, value, change, good, caption = 'vs bulan lalu') =>
    `<section class="sb-card" data-size="sm" aria-label="${esc(label)}">
  <dl class="sb-metric">
    <dt class="sb-metric-label">${esc(label)}</dt>
    <dd class="sb-metric-value">${esc(value)}</dd>
    <dd class="sb-metric-foot"><span class="sb-badge" data-size="sm" data-color="${good ? 'success' : 'error'}" data-icon="icon-left">${icon(change.startsWith('-') || change.startsWith('−') ? 'arrow-down' : 'arrow-up')}${esc(change)}</span>${esc(caption)}</dd>
  </dl>
</section>`;
  const metrics = stage(
    [metric('Klaim masuk', '1.284', '12%', true), metric('Total tagihan', 'Rp 1.725.283.300', '8%', true), metric('Waktu analisis rata-rata', '4 mnt 12 dtk', '−60%', true), metric('Temuan FWA', '37', '5', false)].join('\n'),
    'is-grid'
  );

  const linkCard = (title, desc, state) =>
    `<section class="sb-card" data-size="sm"${state ? ` data-state="${state}"` : ''}>
  <div class="sb-card-heading">
    <h3 class="sb-card-title"><a class="sb-card-link" href="#/card">${esc(title)}</a></h3>
    <p class="sb-card-desc">${esc(desc)}</p>
  </div>
</section>`;
  const links = stage(
    [linkCard('Laporan Bulanan', 'Klaim, tagihan dan temuan FWA per bulan.'), linkCard('Rekanan Rumah Sakit', '128 rumah sakit dengan tarif dan status kerja sama.'), linkCard('Pengaturan Polis', 'Plan, manfaat dan batas tanggungan per produk.'), linkCard('Pengguna dan Akses', 'Anggota tim, peran dan hak akses.')].join('\n'),
    'is-grid'
  );

  const empty = card({
    title: 'Riwayat Klaim', desc: '', badge: false, actions: false,
    body: `<div class="sb-card-empty">\n  ${icon('search')}\n  <div class="sb-card-empty-text">\n    <p class="sb-card-empty-title">Belum ada klaim</p>\n    <p>Klaim peserta ini akan tampil di sini setelah dikirim rumah sakit.</p>\n  </div>\n  ${btn('Tambah Klaim')}\n</div>`,
  });
  const noData = '<div class="sb-card-empty" data-frame="dashed">\n  <p>Belum ada data untuk rentang waktu ini.</p>\n</div>';

  // Framed: a chart panel (head on the shell) and a form (actions on the shell).
  const framedPanel = card({ variant: 'framed', title: 'Klaim Masuk', desc: '', badge: false, actions: iconBtn('external-link', 'Buka Laporan Klaim'), body: noData });
  const framedForm = `<section class="sb-card" data-variant="framed" aria-labelledby="form-title">
  <div class="sb-card-body">
    <div class="sb-card-heading">
      <h3 class="sb-card-title" id="form-title">Tambah Rekanan</h3>
      <p class="sb-card-desc">Rumah sakit baru masuk daftar rekanan setelah diverifikasi.</p>
    </div>
    <div class="sb-field">
      <label class="sb-field-label" for="rs-name">Nama rumah sakit</label>
      <div class="sb-input"><input id="rs-name" type="text" placeholder="RS Medika Utama" aria-describedby="rs-hint"></div>
      <p class="sb-field-hint" id="rs-hint">Sesuai izin operasional.</p>
    </div>
  </div>
  <footer class="sb-card-foot">
    <button class="sb-btn" type="button" data-hierarchy="primary" data-size="sm" disabled>Lanjutkan</button>
  </footer>
</section>`;

  const anatomy = `<section class="sb-card" aria-label="Ringkasan Klaim" data-pin="1" data-pin-at="bottom">
  <header class="sb-card-head" data-pin="2" data-pin-at="start">
    <div class="sb-card-heading">
      <h3 class="sb-card-title"><span data-pin="3">Ringkasan Klaim</span> <span data-pin="4">${statusBadge}</span></h3>
      <p class="sb-card-desc">Diperbarui 7 Oktober 2026, 14.20</p>
    </div>
    <div class="sb-card-actions" data-pin="5">
      ${btn('Lihat Detail', 'secondary-gray', ' tabindex="-1"')}
      <span data-pin="6">${iconBtn('chevron-down', 'Lipat', ' tabindex="-1" aria-expanded="true"').replace('class="sb-btn"', 'class="sb-btn sb-card-fold"')}</span>
    </div>
  </header>
  <div class="sb-card-body" data-pin="7" data-pin-at="start">
    ${inner(rows()).replace(/\n/g, '\n    ')}
  </div>
  <footer class="sb-card-foot" data-pin="8" data-pin-at="start">${btn('Tolak', 'secondary-gray', ' tabindex="-1"')}${btn('Setujui Klaim', 'primary', ' tabindex="-1"')}</footer>
</section>`;

  DS.components.push({
    slug: 'card',
    name: 'Card',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-08',
    description: 'The container for one topic on a page: a claim summary, a table, a chart, a metric. White, bordered, radius 12. Includes the inner card, the AI summary card, metric cards and link cards.',
    css: CSS,
    cssFile: 'card.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Switch the parts on and off. The fold chevron works in the preview.' },
          {
            type: 'playground',
            initial: { size: 'md', desc: true, badge: true, actions: true, fold: false, footer: false },
            controls: [
              { key: 'size', label: 'Size', type: 'segmented', options: [['md', 'md'], ['sm', 'sm']] },
              { key: 'desc', label: 'Description', type: 'toggle' },
              { key: 'badge', label: 'Badge', type: 'toggle' },
              { key: 'actions', label: 'Actions', type: 'toggle' },
              { key: 'fold', label: 'Fold chevron', type: 'toggle' },
              { key: 'footer', label: 'Footer', type: 'toggle' },
            ],
            render: s => stage(card({ ...s, desc: s.desc ? undefined : '' })),
          },
        ],
      },
      {
        id: 'usage',
        title: 'Usage',
        blocks: [
          {
            type: 'list',
            items: [
              'One card holds one topic: a summary, a table, a chart, a form section. The title names the topic.',
              'Cards sit on the page 24 apart (Grids & Spacing). Blocks inside a card sit 16 apart.',
              'Group related values inside a card with an inner card, never with a second card in a card.',
              'One primary action per card at most, in the footer or the head. Other actions are Secondary gray, Tertiary or in a "more" menu.',
              'Cards are flat: a `gray-300` border, no shadow. Shadows are for layers that float (menus, dialogs).',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: anatomy, code: false, layout: 'anat' },
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Container', '`white`, 1 px `gray-300` border, radius 12, padding 24 (sm 16). No shadow.'],
              ['2', 'Head', 'Title block on the left, actions on the right, top-aligned, gap 16.'],
              ['3', 'Title', 'Text xl / Semibold (sm: Text md), `gray-900`, Title Case. A heading element at the level the page needs. Optional description below: Text sm `gray-500`, 4 apart.'],
              ['4', 'Badge', 'Optional status pill or count, Badge sm, 8 after the title.'],
              ['5', 'Actions', 'Buttons sm, gap 8: Secondary gray or Tertiary, an icon button with a "more" menu. Centred on the title line and allowed to overhang it, so the head is only as tall as the title.'],
              ['6', 'Fold chevron', 'Optional. Tertiary gray icon button sm; points up when open, down when folded. Hides the body and footer.'],
              ['7', 'Body', 'Blocks 16 apart (sm 12): text, inner cards, tables, charts.'],
              ['8', 'Footer', 'Optional. Actions right-aligned, gap 12, above a `gray-200` divider that runs edge to edge.'],
            ],
          },
        ],
      },
      {
        id: 'properties',
        title: 'Properties',
        blocks: [
          {
            type: 'table',
            head: ['Property', 'Values', 'Code'],
            rows: [
              ['Variant', 'Card, Inner, Tint, Framed', 'Omit, `data-variant="inner"`, `"tint"` or `"framed"`'],
              ['Size', 'md, sm', 'Omit for md, `data-size="sm"`'],
              ['Description', 'True, False', '`<p class="sb-card-desc">` under the title'],
              ['Badge', 'True, False', 'Badge sm inside the title'],
              ['Actions', 'True, False', '`<div class="sb-card-actions">` with Buttons sm'],
              ['Fold', 'Open, Folded', '`.sb-card-fold` with `aria-expanded` and `aria-controls`; `hidden` on the body and footer'],
              ['Footer', 'True, False', '`<footer class="sb-card-foot">`'],
              ['Link', 'True, False', '`<a class="sb-card-link">` in the title'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-card', text: 'Card' },
          { type: 'p', text: 'The white card for a topic. Here with an inner card of summary rows and a footer.' },
          { type: 'example', html: stage(card({ footer: true })) },
          { type: 'h3', id: 'type-inner', text: 'Inner card' },
          { type: 'p', text: 'A box inside a card for a group of values: `gray-50`, 1 px `gray-200` border, radius 8, padding `12 16`, rows 8 apart. "Label …… Value" rows use a `<dl>`; values are Medium, `gray-900`, tabular, right-aligned. A total row sits above a `gray-200` line.' },
          { type: 'example', html: stage(inner(rows(ROWS, ['Selisih', 'Rp 1.250.000']), 'Rincian Tagihan'), 'is-narrow') },
          { type: 'h3', id: 'type-tint', text: 'Tint: AI summary' },
          { type: 'p', text: 'For text the AI wrote: `brand-50`, 1 px `brand-200` border, radius 8, padding 16. Title Text md / Semibold `brand-700` with the `loader` icon, "Edit Ringkasan" as Secondary gray sm, fold chevron.' },
          { type: 'example', html: stage(aiCard()) },
          { type: 'h3', id: 'type-framed', text: 'Framed' },
          { type: 'p', text: 'A `gray-100` shell (one step darker than the `gray-50` page) with a `gray-200` border holds the head or the footer; the content sits on a white sheet with its own `gray-200` border and radius 12, laid over the shell\'s edge. Use it for chart and table panels (title and tools on the shell) and for forms (actions on the shell, so they stay apart from the fields). Head and footer padding `12 16`, sheet padding 16, title Text md / Semibold `gray-700`.' },
          { type: 'example', html: stage(`${framedPanel}\n${framedForm}`, 'is-grid is-wide') },
          { type: 'h3', id: 'type-metric', text: 'Metric' },
          { type: 'p', text: 'A compact card (sm) for one number: label Text sm / Medium `gray-500`, value Display xs / Semibold `gray-900` tabular, then a change badge and a caption in Text xs `gray-500`. The badge colour says good or bad, not up or down: a shorter analysis time is `success` with a down arrow. Money stays in full Rupiah.' },
          { type: 'example', html: metrics },
          { type: 'h3', id: 'type-link', text: 'Link card' },
          { type: 'p', text: 'A card that opens a page. The title is the link; its hit area stretches over the whole card, so the card has one tab stop and the link text is the accessible name. Hover: `gray-50` fill and `gray-400` border. Focus: `brand-300` border and the 4 px `focus-ring` ring.' },
          { type: 'example', html: links },
        ],
      },
      {
        id: 'sizes',
        title: 'Sizes',
        blocks: [
          { type: 'p', text: 'md for page sections, sm for compact cards in a grid (metrics, links, side panels). sm: padding 16, blocks 12 apart, title Text md.' },
          { type: 'example', html: stage(`${card({ footer: false })}\n${card({ size: 'sm' })}`, 'is-stack') },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'h3', id: 'state-fold', text: 'Open and folded' },
          { type: 'p', text: 'Folding keeps the head and hides the body and footer. The chevron turns in 150 ms; the body appears without animation.' },
          { type: 'example', html: stage(`${aiCard()}\n${aiCard({ open: false })}`, 'is-stack') },
          { type: 'h3', id: 'state-link', text: 'Link card' },
          { type: 'example', html: stage(['', 'hover', 'focus'].map(s => linkCard(['Default', 'Hover', 'Focused'][['', 'hover', 'focus'].indexOf(s)], 'Laporan klaim per bulan.', s)).join('\n'), 'is-grid'), code: false },
          { type: 'h3', id: 'state-empty', text: 'Empty' },
          { type: 'p', text: 'A card never shows a blank body. Say what is missing in Text sm `gray-500`, centred, with a 24 px `gray-400` icon and, when the user can fix it, one Secondary gray button.' },
          { type: 'example', html: stage(empty) },
          { type: 'p', text: 'Where a chart or table would be, keep its size and draw a dashed `gray-300` frame (radius 8, at least 160 high) with one line of text, so the layout does not jump when data arrives. A page-level empty state adds a title (Text md / Semibold `gray-900`) above the description.' },
          { type: 'example', html: stage(framedPanel), code: false },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(inner(rows(ROWS.slice(0, 2)), 'Rincian Tagihan')), text: 'Group values with an inner card.' },
              { kind: 'dont', html: stage(`<section class="sb-card" data-size="sm"><section class="sb-card" data-size="sm">${rows(ROWS.slice(0, 2))}</section></section>`), text: 'A white card inside a white card. The borders stack up and the levels look equal.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(`<section class="sb-card" data-size="sm">${rows(ROWS.slice(0, 2))}</section>`), text: 'A border and no shadow.' },
              { kind: 'dont', html: stage(`<section class="sb-card" data-size="sm" style="border-color: transparent; box-shadow: var(--shadow-lg)">${rows(ROWS.slice(0, 2))}</section>`), text: 'A floating shadow on a card. Shadows are for menus and dialogs that sit above the page.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(card({ size: 'sm', footer: true, actions: false, badge: false, desc: '', body: rows(ROWS.slice(0, 2)) })), text: 'One primary action, in the footer.' },
              { kind: 'dont', html: stage(`<section class="sb-card" data-size="sm">${rows(ROWS.slice(0, 2))}<footer class="sb-card-foot">${btn('Simpan', 'primary')}${btn('Kirim', 'primary')}${btn('Setujui', 'primary')}</footer></section>`), text: 'Several primary buttons. Pick the one next step; the others are Secondary gray.' },
            ],
          },
        ],
      },
      {
        id: 'accessibility',
        title: 'Accessibility',
        blocks: [
          {
            type: 'list',
            items: [
              'A card that is a page section is a `<section>` labelled by its title (`aria-labelledby`). The title is a real heading (`h2`, `h3`) at the level the page needs.',
              'The fold chevron is a `<button>` with `aria-expanded` and `aria-controls` naming the body and footer; it takes its name from the title (`aria-labelledby`), and `aria-expanded` says open or folded.',
              'A link card has one link, in the title, so screen readers read a short name and keyboard users get one tab stop. Never wrap a whole card, with its buttons, in an `<a>`.',
              'Summary rows and metrics are a `<dl>`: each value is read with its label.',
              'The `gray-300` border is 1.47:1 against white. That is fine for a card, which also has its own content and spacing to show where it ends; the same open note as the Input field border applies to controls, not cards.',
            ],
          },
          {
            type: 'table',
            head: ['Text', 'On', 'Ratio', 'AA'],
            rows: [
              ['Title `gray-900`', '`white`', '17.75:1', 'Passes'],
              ['Description, row labels `gray-500`', '`white` / `gray-50`', '4.97:1 / 4.76:1', 'Passes'],
              ['AI summary title `brand-700`', '`brand-50`', '6.09:1', 'Passes'],
              ['Empty state `gray-500`', '`white`', '4.97:1', 'Passes'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `button.css` and `badge.css` for the parts inside, then `card.css`. Add `card.js` only for the fold chevron.' },
          { type: 'code', lang: 'css', filename: 'card.css', code: CSS },
          { type: 'h3', id: 'card-script', text: 'Fold script' },
          { type: 'code', lang: 'js', filename: 'card.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('click', cardFold);
})();

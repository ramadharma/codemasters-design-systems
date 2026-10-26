// Accordion: stacked sections that open and close, for FAQs, the parts of a claim and groups of filters.
// Native <details> and <summary>: no script. Divider style, chevron on the right. No spec in DESIGN.md yet; no Figma component yet.
(() => {
  const { esc, icon } = DS;

  const CSS = `/* Accordion, Codemasters Design System
   Needs tokens.css; badge.css for a meta badge. No script: <details> opens and closes itself, each item on its own.

   <div class="sb-accordion">
     <details class="sb-acc-item" open>
       <summary class="sb-acc-head">
         <span class="sb-acc-title">Berapa lama klaim diproses?</span>
         <span class="sb-acc-meta">…optional: a Badge or a short value…</span>
         <svg class="sb-acc-chevron" aria-hidden="true">…chevron-down…</svg>
       </summary>
       <div class="sb-acc-body">…</div>
     </details>
     …
   </div>

   data-size="sm" on .sb-accordion   compact rows (filter groups, side panels); omit for md
   open on a <details>                starts open. Any number can be open at once. */

.sb-accordion {
  --acc-py: 20px; --acc-type: var(--text-md); --acc-gap: 8px;
  display: grid; min-width: 0;
  font-family: var(--font);
  interpolate-size: allow-keywords; /* lets the body animate to its own height where supported */
}
.sb-accordion[data-size="sm"] { --acc-py: 12px; --acc-type: var(--text-sm); --acc-gap: 4px; }

/* Items are divided by a gray-200 line; no line above the first or below the last. */
.sb-acc-item + .sb-acc-item { border-top: 1px solid var(--border-secondary); }

/* Head: the whole row is the toggle. Title Semibold gray-900, meta and chevron at the end. */
.sb-acc-head {
  display: flex; align-items: center; gap: 12px;
  padding-block: var(--acc-py); border-radius: var(--radius-sm);
  font: 600 var(--acc-type) var(--font); color: var(--text-primary);
  list-style: none; cursor: pointer;
}
.sb-acc-head::-webkit-details-marker { display: none; }
.sb-acc-head:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-acc-title { flex: 1; min-width: 0; text-wrap: pretty; }
.sb-acc-meta { display: inline-flex; align-items: center; gap: 8px; flex: none; font-weight: 400; font-size: var(--text-sm); color: var(--text-quaternary); }
.sb-acc-chevron { width: 20px; height: 20px; flex: none; color: var(--fg-quaternary); transition-property: rotate, color; transition-duration: 150ms; transition-timing-function: var(--ease); }
.sb-acc-head:hover .sb-acc-chevron { color: var(--text-secondary); }
.sb-acc-item[open] > .sb-acc-head .sb-acc-chevron { rotate: 180deg; }

/* Body: Regular gray-600, under the title; the row's bottom padding continues below it. */
.sb-acc-body { padding-bottom: var(--acc-py); margin-top: calc(var(--acc-gap) - var(--acc-py)); font: 400 var(--acc-type) var(--font); color: var(--text-tertiary); text-wrap: pretty; }
.sb-acc-body > * { margin: 0; }
.sb-acc-body > * + * { margin-top: 12px; }

/* Open and close: the height eases in browsers that animate <details>; elsewhere it snaps. */
.sb-acc-item::details-content { block-size: 0; overflow: clip; transition: block-size 200ms var(--ease), content-visibility 200ms allow-discrete; }
.sb-acc-item[open]::details-content { block-size: auto; }

@media (prefers-reduced-motion: reduce) {
  .sb-acc-chevron, .sb-acc-item::details-content { transition: none; }
}
`;

  // ---- Docs content
  const FAQ = [
    ['Berapa lama klaim diproses?', '<p>Klaim cashless diputuskan dalam 1 hari kerja. Klaim reimbursement paling lama 14 hari kerja setelah dokumen lengkap.</p>'],
    ['Dokumen apa saja yang perlu diunggah?', '<p>Invoice rumah sakit, resume medis, foto KTP peserta dan kuitansi apotek bila ada pembelian obat di luar rumah sakit.</p>'],
    ['Kenapa klaim saya ditolak?', '<p>Alasan penolakan tertulis di detail klaim. Yang paling sering: tindakan di luar polis, dokumen tidak terbaca, atau masa tunggu belum lewat.</p>'],
    ['Bisakah saya mengajukan banding?', '<p>Bisa, dalam 30 hari sejak keputusan. Buka klaim, pilih <strong>Ajukan banding</strong>, lalu lampirkan dokumen pendukung.</p>'],
  ];
  const rows = list => `<dl class="sb-card-rows">${list.map(([k, v]) => `<div class="sb-card-row"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;
  const badge = (color, label) => `<span class="sb-badge" data-size="sm" data-color="${color}">${label}</span>`;
  const CLAIM = [
    ['Data peserta', badge('success', 'Lengkap'), rows([['Nama', 'Budi Santoso'], ['No. polis', '0012 4471 20'], ['Plan', 'Gold Inpatient']])],
    ['Diagnosis', badge('success', 'Lengkap'), rows([['Utama', 'K35.8 Apendisitis akut'], ['Tanggal masuk', '2 Okt 2026'], ['Lama rawat', '3 malam']])],
    ['Rincian biaya', 'Rp 12.450.000', rows([['Kamar', 'Rp 4.500.000'], ['Tindakan', 'Rp 7.950.000']])],
    ['Dokumen', badge('warning', '3 dari 4'), '<p>Kuitansi apotek belum diunggah.</p>'],
  ];
  let uid = 0;
  const box = (label, n) => `<div class="sb-check" data-size="sm"><input class="sb-check-input" type="checkbox" id="acc-ck-${++uid}"${n ? ' checked' : ''}><div class="sb-check-text"><label class="sb-check-label" for="acc-ck-${uid}">${label}</label></div></div>`;
  const checks = (list, on = []) => `<div style="display: grid; gap: 12px">${list.map((l, i) => box(l, on.includes(i))).join('')}</div>`;
  const FILTERS = [
    ['Status', badge('primary', '2'), checks(['Sedang Ditinjau', 'Disetujui', 'Ditolak', 'Perlu Revisi'], [0, 1])],
    ['Rumah sakit', '', checks(['RS Medika Utama', 'RS Harapan Kita', 'RS Bunda'])],
    ['Layanan', '', checks(['Rawat inap', 'Rawat jalan', 'Gigi'])],
  ];

  // items: [title, meta, body]. open: indexes that start open.
  function accordion({ items = FAQ.map(([t, b]) => [t, '', b]), size = 'md', open = [0], pins = false } = {}) {
    const pin = (n, at) => (pins ? ` data-pin="${n}"${at ? ` data-pin-at="${at}"` : ''}` : '');
    const chevron = icon('chevron-down', 'sb-acc-chevron');
    const item = ([title, meta, body], i) => {
      const p = pins && i === 0;
      return `  <details class="sb-acc-item"${open.includes(i) ? ' open' : ''}${p ? pin(1, 'start') : ''}>
    <summary class="sb-acc-head"${p ? ' tabindex="-1"' : ''}>
      <span class="sb-acc-title"${p ? pin(2) : ''}>${esc(title)}</span>${meta ? `\n      <span class="sb-acc-meta">${p ? `<span${pin(3)}>${meta}</span>` : meta}</span>` : ''}
      ${p ? `<span${pin(4)}>${chevron}</span>` : chevron}
    </summary>
    <div class="sb-acc-body"${p ? pin(5, 'bottom') : ''}>${body}</div>
  </details>`;
    };
    return `<div class="sb-accordion"${size === 'sm' ? ' data-size="sm"' : ''}>\n${items.map(item).join('\n')}\n</div>`;
  }
  const stage = (html, cls = '') => `<div class="acc-stage${cls ? ` ${cls}` : ''}">\n${html}\n</div>`;
  const card = (title, html) => `<section class="sb-card" aria-label="${title}"><header class="sb-card-head"><div class="sb-card-heading"><h3 class="sb-card-title">${title}</h3></div></header><div class="sb-card-body">${html}</div></section>`;

  DS.components.push({
    slug: 'accordion',
    name: 'Accordion',
    category: 'Components',
    status: 'In progress',
    updated: '2026-10-14',
    description: 'Stacked sections that open and close: FAQs, the parts of a claim, groups of filters. Each item opens on its own, divided by a line, with the chevron on the right. Native details and summary, no script.',
    css: CSS,
    cssFile: 'accordion.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Click a row, or Tab to it and press Enter or Space. Several items can be open at once.' },
          {
            type: 'playground',
            initial: { size: 'md', meta: false },
            controls: [
              { key: 'size', label: 'Size', type: 'segmented', options: [['md', 'md'], ['sm', 'sm']] },
              { key: 'meta', label: 'Meta', type: 'toggle' },
            ],
            render: s => stage(accordion({ size: s.size, items: s.meta ? CLAIM : undefined })),
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
              'Use an accordion when people need only some of a long page at a time: answers in an FAQ, the parts of a claim, groups of filters.',
              'Do not hide what everyone needs. Content most people read, or must act on, stays open or out of the accordion.',
              'Titles say what is inside, as a question in an FAQ or a noun in a detail page ("Rincian biaya").',
              'Use md for FAQs and detail pages, sm for side panels and filter groups.',
              'Meta shows the state of a section without opening it: a Badge ("Lengkap", "3 dari 4"), a total, or a count of active filters.',
              'Each item opens on its own. Open the first one, or the one that needs attention, when the page loads.',
              'For steps people must complete in order, use a stepper, not an accordion.',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: stage(accordion({ items: CLAIM.slice(2, 3), pins: true }).replace('<div class="sb-accordion"', '<div class="sb-accordion" inert'), 'is-anat'), code: false, layout: 'anat' },
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Item', '`<details>`; 1 px `gray-200` line between items, none above the first or below the last.'],
              ['2', 'Title', 'md: Text md / Semibold, sm: Text sm / Semibold, `gray-900`. Wraps; never truncated.'],
              ['3', 'Meta', 'Optional. A Badge sm or Text sm `gray-500`, 12 before the chevron.'],
              ['4', 'Chevron', '20 px `chevron-down`, `gray-400`, `gray-700` on hover; turns 180° when open, 150 ms.'],
              ['5', 'Body', 'Text md (sm: Text sm) / Regular `gray-600`, 8 under the title (sm 4), any content.'],
            ],
          },
          { type: 'p', text: 'The head is the whole row: padding 20 above and below (sm 12), no side padding, so the text lines up with the content around it.' },
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
              ['Size', 'md, sm', 'Omit, or `data-size="sm"` on `.sb-accordion`'],
              ['Open', 'True, False', '`open` on the `<details>`'],
              ['Meta', 'True, False', '`<span class="sb-acc-meta">` before the chevron'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-faq', text: 'FAQ' },
          { type: 'p', text: 'Questions as titles, short answers. md, the first answer open.' },
          { type: 'example', html: stage(accordion()), code: false },
          { type: 'h3', id: 'type-detail', text: 'Detail sections' },
          { type: 'p', text: 'The parts of a claim inside a Card. Meta tells people which part needs them; open the part that does.' },
          { type: 'example', html: stage(card('Detail klaim KLM-0241', accordion({ items: CLAIM, open: [3] }))), code: false },
          { type: 'h3', id: 'type-filters', text: 'Filter groups' },
          { type: 'p', text: 'sm in a side panel, one group per filter, Checkboxes inside. Meta counts the active choices, so a closed group still shows it filters.' },
          { type: 'example', html: stage(card('Filter', accordion({ items: FILTERS, size: 'sm', open: [0] })), 'is-narrow'), code: false },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          {
            type: 'table',
            head: ['State', 'Look'],
            rows: [
              ['Closed', 'Chevron points down, body hidden'],
              ['Open', 'Chevron points up, body shown; the height eases in 200 ms where the browser supports it'],
              ['Hover', 'Chevron `gray-700`; the whole row is the target'],
              ['Focused', '2 px `brand-600` outline around the head, offset 2'],
            ],
          },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(accordion({ items: CLAIM.slice(2), open: [1] })), text: 'Meta shows the state, so people open only what needs them.' },
              { kind: 'dont', html: stage(accordion({ items: CLAIM.slice(2).map(([t, , b]) => [t, '', b]), open: [] })), text: 'Every section closed, nothing says where the problem is.' },
            ],
          },
          {
            type: 'list',
            items: [
              'Do not nest an accordion inside another.',
              'Do not put a primary action only inside a closed section.',
              'Do not use an accordion for one item: show the content, or use a Card with a fold chevron.',
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
              '`<details>` and `<summary>` give the toggle, its expanded state and Enter / Space for free, with no ARIA to keep in sync.',
              'The summary is the only control in the head. Do not put links or buttons in it.',
              'Find in page (⌘F) opens a closed item that holds the match.',
              'With reduced motion, items open at once and the chevron does not turn.',
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `badge.css` for a meta badge, then `accordion.css`. No script.' },
          { type: 'code', lang: 'css', filename: 'accordion.css', code: CSS },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
})();

// Table: rows of records (claims, invoices, members). Built from DESIGN.md Data display (Table, Grouped table,
// Amount cell) and the principles (status as a pill, never empty, full Rupiah).
(() => {
  const { esc, icon } = DS;

  // ---- Sort: a header button toggles ascending / descending and reorders the body by that column.
  // Cells sort by data-value when present (numbers, dates), else by their text.
  function tableSort(e) {
    const btn = e.target.closest?.('.sb-table-sort');
    if (!btn) return;
    const th = btn.closest('th'), table = th.closest('table'), col = th.cellIndex;
    const dir = th.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
    for (const h of table.tHead.rows[0].cells) h.removeAttribute('aria-sort');
    th.setAttribute('aria-sort', dir);
    const val = r => r.cells[col].dataset.value ?? r.cells[col].textContent.trim();
    const body = table.tBodies[0];
    const rows = [...body.rows].sort((a, b) => {
      const x = val(a), y = val(b), n = x - y;
      return (Number.isNaN(n) ? x.localeCompare(y, 'id') : n) * (dir === 'ascending' ? 1 : -1);
    });
    body.append(...rows);
  }
  // ---- Grouped table: the chevron folds a group's item rows.
  function tableGroup(e) {
    const btn = e.target.closest?.('.sb-table-fold');
    if (!btn) return;
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    for (const row of btn.closest('tbody').querySelectorAll('tr[data-child]')) row.hidden = !open;
  }
  const SCRIPT = `// Table: sortable headers and foldable groups.
${tableSort.toString().replace(/^  /gm, '')}
${tableGroup.toString().replace(/^  /gm, '')}
document.addEventListener('click', tableSort);
document.addEventListener('click', tableGroup);`;

  const CSS = `/* Table, Codemasters Design System
   Needs tokens.css; badge.css for status pills, checkbox.css for row selection; table.js for sorting and groups.

   <div class="sb-table-wrap">
     <table class="sb-table">
       <thead><tr><th scope="col">ID Klaim</th>…<th scope="col" data-num>Tagihan</th></tr></thead>
       <tbody><tr><td><a class="sb-table-link" href="…">KLM-0241</a></td>…<td data-num>Rp 12.450.000</td></tr></tbody>
     </table>
   </div>

   data-size     sm  (compact rows; omit for md)
   data-sticky   on the table: the first column stays while the table scrolls sideways
   data-num      on th and td: right-aligned, tabular figures (amounts, counts, dates)
   aria-sort     on a sortable th: ascending | descending (one column at a time)
   data-tone     on a body row: error (flagged) | warning (needs review)
   data-group / data-child / tfoot   grouped table rows */

.sb-table-wrap { overflow-x: auto; max-width: 100%; }
.sb-table {
  --cell-py: 16px; --cell-px: 16px;
  width: 100%; border-collapse: separate; border-spacing: 0;
  font: 400 var(--text-sm) var(--font); color: var(--gray-700);
}
.sb-table[data-size="sm"] { --cell-py: 10px; --cell-px: 12px; }
.sb-table :is(th, td) { padding: var(--cell-py) var(--cell-px); text-align: start; vertical-align: middle; white-space: nowrap; background: var(--row-bg, var(--white)); }

/* Header: a gray-50 band with rounded ends; Text sm Regular gray-500. */
.sb-table thead th { --row-bg: var(--gray-50); padding-block: 12px; font-weight: 400; color: var(--gray-500); }
.sb-table[data-size="sm"] thead th { padding-block: 8px; }
.sb-table thead th:first-child { border-radius: var(--radius-md) 0 0 var(--radius-md); }
.sb-table thead th:last-child { border-radius: 0 var(--radius-md) var(--radius-md) 0; }

/* Body: gray-200 row dividers, gray-50 on hover, brand-50 when selected. */
.sb-table tbody td { border-bottom: 1px solid var(--gray-200); color: var(--gray-900); }
.sb-table tbody tr { transition: background-color 150ms var(--ease); }
.sb-table tbody tr[data-child] { --row-bg: var(--gray-50); } /* grouped items; tones below still win */
.sb-table tbody tr:is(:hover, [data-state="hover"]) { --row-bg: var(--gray-50); }
.sb-table tbody tr:has(.sb-check-input:checked) { --row-bg: var(--brand-50); }
.sb-table tbody tr[data-tone="error"] { --row-bg: var(--error-50); }
.sb-table tbody tr[data-tone="error"] td { color: var(--error-700); }
.sb-table tbody tr[data-tone="warning"] { --row-bg: var(--warning-50); }

/* Cells */
.sb-table [data-num] { text-align: end; font-variant-numeric: tabular-nums; }
.sb-table-link { color: var(--brand-700); font-weight: 500; text-decoration: underline; text-underline-offset: 2px; text-decoration-thickness: from-font; }
.sb-table-link:hover { color: var(--brand-800); }
.sb-table-link:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; border-radius: var(--radius-sm); }
.sb-table-sub { display: block; font-size: var(--text-xs); line-height: 18px; color: var(--gray-500); } /* second line: converted currency, email */
.sb-table-empty { color: var(--gray-400); } /* "—" when a value is missing; never a blank cell */
.sb-table .sb-check { vertical-align: middle; }
.sb-table th:has(> .sb-check), .sb-table td:has(> .sb-check) { width: 16px; padding-inline-end: 0; }

/* Sortable header: the whole label is the button. Idle shows the two-way arrow in gray-400; sorted shows the direction in brand-600. */
.sb-table-sort {
  display: inline-flex; align-items: center; vertical-align: middle; gap: 4px; margin: 0; padding: 0; border: 0; border-radius: var(--radius-sm);
  background: none; font: inherit; color: inherit; cursor: pointer;
}
[data-num] > .sb-table-sort { flex-direction: row-reverse; }
.sb-table-sort:hover { color: var(--gray-700); }
.sb-table-sort:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-table-sort > svg { width: 16px; height: 16px; flex: none; color: var(--gray-400); }
th:not([aria-sort]) .sb-table-sort > .is-dir, th[aria-sort] .sb-table-sort > .is-idle { display: none; }
th[aria-sort] .sb-table-sort { color: var(--gray-700); }
th[aria-sort] .sb-table-sort > .is-dir { color: var(--brand-600); }
th[aria-sort="ascending"] .sb-table-sort > .is-dir { rotate: 180deg; }

/* Sticky first column, for wide tables. The cell keeps its row's background so nothing shows through. */
.sb-table[data-sticky] :is(th, td):first-child { position: sticky; left: 0; z-index: 1; }
/* With row selection the checkbox and the ID column stick together; the ID column starts after the 16 px box. */
.sb-table[data-sticky] :is(th, td):has(> .sb-check) + :is(th, td) { position: sticky; left: calc(var(--cell-px) + 16px); z-index: 1; }
/* The edge sits on the last sticky column. */
.sb-table[data-sticky] tbody td:first-child:not(:has(> .sb-check)),
.sb-table[data-sticky] tbody td:has(> .sb-check) + td { box-shadow: inset -1px 0 var(--gray-200); }

/* Grouped table: group row (chevron, number, name, total), item rows indented on gray-50, gray-100 total row. */
.sb-table tbody tr[data-group] td { font-weight: 600; color: var(--gray-900); }
.sb-table tbody tr[data-child] td:first-child { padding-inline-start: calc(var(--cell-px) + 32px); }
.sb-table tbody tr[data-child][hidden] { display: none; }
.sb-table-fold { display: inline-grid; place-items: center; width: 24px; height: 24px; margin: -4px 8px -4px -4px; padding: 0; border: 0; border-radius: var(--radius-sm); background: none; color: var(--gray-500); cursor: pointer; vertical-align: middle; }
.sb-table-fold:hover { background: var(--gray-100); color: var(--gray-700); }
.sb-table-fold:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 0; }
.sb-table-fold > svg { width: 16px; height: 16px; transition: rotate 150ms var(--ease); }
.sb-table-fold[aria-expanded="true"] > svg { rotate: 90deg; }
.sb-table tfoot td { --row-bg: var(--gray-100); font-weight: 600; color: var(--gray-900); }
.sb-table tfoot td:first-child { border-radius: var(--radius-md) 0 0 var(--radius-md); }
.sb-table tfoot td:last-child { border-radius: 0 var(--radius-md) var(--radius-md) 0; }

/* Footer: count on the left, page buttons on the right. */
.sb-table-foot { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding-top: 16px; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }

@media (prefers-reduced-motion: reduce) {
  .sb-table tbody tr, .sb-table-fold > svg { transition: none; }
}
`;

  // ---- Data
  const CLAIMS = [
    ['KLM-0241', 'Budi Santoso', 'RS Medika Utama', '2026-10-02', 12450000, ['success', 'Disetujui: Sembuh']],
    ['KLM-0238', 'Siti Rahma', 'RS Harapan Kita', '2026-10-01', 3275000, ['blue', 'Sedang Ditinjau']],
    ['KLM-0236', 'Andi Wijaya', 'Klinik Sehat Sentosa', '2026-09-30', 875000, ['error', 'Ditolak']],
    ['KLM-0233', 'Maya Putri', 'RS Medika Utama', '2026-09-29', 21980000, ['orange', 'Perlu Revisi']],
    ['KLM-0230', 'Rizky Pratama', 'RS Bunda', '2026-09-28', 4610000, ['success', 'Disetujui: TPA']],
  ];
  const num = n => n.toLocaleString('id-ID');
  const rp = n => `Rp ${num(n)}`;
  const date = iso => new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  const badge = ([color, label]) => `<span class="sb-badge" data-size="sm" data-color="${color}">${esc(label)}</span>`;
  const sortBtn = label => `<button class="sb-table-sort" type="button">${esc(label)}${icon('selector').replace('<svg ', '<svg class="is-idle" ')}${icon('arrow-down').replace('<svg ', '<svg class="is-dir" ')}</button>`;
  const check = (name, attrs = '') => `<span class="sb-check"><input class="sb-check-input" type="checkbox" ${attrs}></span>`;

  let uid = 0;
  function table({ size = 'md', select = false, sortable = true, sticky = false, rows = CLAIMS, sorted = 'date', tone = false, state } = {}) {
    const id = `klaim-${++uid}`;
    const th = (label, key, num) => {
      const attrs = ['scope="col"'];
      if (num) attrs.push('data-num');
      if (sortable && key && sorted === key) attrs.push('aria-sort="descending"');
      return `<th ${attrs.join(' ')}>${sortable && key ? sortBtn(label) : esc(label)}</th>`;
    };
    const head = [
      select ? `<th scope="col">${check(id, `data-select-all="${id}" aria-label="Pilih semua klaim"`)}</th>` : '',
      th('ID Klaim', 'id'), th('Peserta', 'name'), th('Rumah Sakit'), th('Tanggal', 'date', true), th('Tagihan', 'amount', true), th('Status'),
    ].filter(Boolean).join('');
    const body = rows.map(([cid, name, rs, d, amount, status], i) => {
      const attrs = [];
      if (tone && i === 2) attrs.push('data-tone="error"');
      if (tone && i === 3) attrs.push('data-tone="warning"');
      if (state && i === 1) attrs.push(`data-state="${state}"`);
      const cells = [
        select ? `<td>${check(id, `data-select-item="${id}" aria-label="Pilih ${cid}"${i === 0 ? ' checked' : ''}`)}</td>` : '',
        `<td><a class="sb-table-link" href="#/table">${cid}</a></td>`,
        `<td>${esc(name)}</td>`,
        `<td>${esc(rs)}</td>`,
        `<td data-num data-value="${d.replace(/-/g, '')}">${date(d)}</td>`,
        `<td data-num data-value="${amount}">${rp(amount)}</td>`,
        `<td>${badge(status)}</td>`,
      ].filter(Boolean);
      return `      <tr${attrs.length ? ` ${attrs.join(' ')}` : ''}>${cells.join('')}</tr>`;
    }).join('\n');
    const a = ['class="sb-table"'];
    if (size === 'sm') a.push('data-size="sm"');
    if (sticky) a.push('data-sticky');
    return `<div class="sb-table-wrap">\n  <table ${a.join(' ')}>\n    <thead><tr>${head}</tr></thead>\n    <tbody>\n${body}\n    </tbody>\n  </table>\n</div>`;
  }
  const pager = `<div class="sb-table-foot">
  <span>Menampilkan 1–5 dari 128 klaim</span>
  <div class="sb-btn-group" role="group" aria-label="Navigasi halaman" data-icon="only">
    <button type="button" aria-label="Halaman sebelumnya" disabled>${icon('chevron-left')}</button>
    <button type="button" aria-label="Halaman berikutnya">${icon('chevron-right')}</button>
  </div>
</div>`;

  // Grouped: an invoice by category.
  const INVOICE = [
    ['1', 'Kamar', 4500000, [['Kamar VIP, 3 malam', 4500000]]],
    ['2', 'Obat', 2840000, [['Paracetamol infus 1 g', 420000], ['Ondansetron 4 mg', 270000], ['Obat di luar formularium', 1250000, 'error'], ['Cairan infus RL', 900000]]],
    ['3', 'Tindakan', 1950000, [['Pemeriksaan dokter spesialis', 750000], ['Tes darah lengkap', 1200000, 'warning']]],
  ];
  const grouped = `<div class="sb-table-wrap">
  <table class="sb-table">
    <thead><tr><th scope="col">Item</th><th scope="col" data-num>Jumlah</th></tr></thead>
${INVOICE.map(([n, name, total, items], g) => `    <tbody>
      <tr data-group><td><button class="sb-table-fold" type="button" aria-expanded="${g !== 0}" aria-label="Rincian ${name}">${icon('chevron-right')}</button>${n}. ${name}</td><td data-num>${rp(total)}</td></tr>
${items.map(([label, v, t]) => `      <tr data-child${t ? ` data-tone="${t}"` : ''}${g === 0 ? ' hidden' : ''}><td>${esc(label)}</td><td data-num>${rp(v)}</td></tr>`).join('\n')}
    </tbody>`).join('\n')}
    <tfoot><tr><td>Total tagihan</td><td data-num>${rp(INVOICE.reduce((a, [, , t]) => a + t, 0))}</td></tr></tfoot>
  </table>
</div>`;

  const amount = `<div class="sb-table-wrap">
  <table class="sb-table">
    <thead><tr><th scope="col">Item</th><th scope="col" data-num>Tagihan</th></tr></thead>
    <tbody>
      <tr><td>Rawat jalan, Singapura</td><td data-num>Rp 1.725.000<span class="sb-table-sub">SGD 145 | USD 108</span></td></tr>
      <tr><td>Kacamata</td><td data-num><span class="sb-table-empty" aria-label="Belum ada">—</span></td></tr>
    </tbody>
  </table>
</div>`;

  const empty = `<div class="sb-table-wrap">
  <table class="sb-table">
    <thead><tr><th scope="col">ID Klaim</th><th scope="col">Peserta</th><th scope="col" data-num>Tagihan</th><th scope="col">Status</th></tr></thead>
    <tbody><tr><td colspan="4"><div class="sb-card-empty">${icon('search')}<div class="sb-card-empty-text"><p class="sb-card-empty-title">Tidak ada klaim yang cocok</p><p>Ubah filter atau rentang waktu.</p></div></div></td></tr></tbody>
  </table>
</div>`;

  const stage = (html, cls = '') => `<div class="table-stage${cls ? ` ${cls}` : ''}">\n${html}\n</div>`;
  const anatomy = `<div class="table-stage">
<div class="sb-table-wrap" style="overflow: visible">
  <table class="sb-table">
    <thead><tr><th scope="col"><span data-pin="1" data-pin-at="start"><button class="sb-table-sort" type="button" tabindex="-1">ID Klaim${icon('selector').replace('<svg ', '<svg class="is-idle" ')}</button></span></th><th scope="col">Peserta</th><th scope="col" data-num aria-sort="descending"><span data-pin="2"><button class="sb-table-sort" type="button" tabindex="-1">Tagihan${icon('arrow-down').replace('<svg ', '<svg class="is-dir" ')}</button></span></th><th scope="col">Status</th></tr></thead>
    <tbody>
      <tr><td><span data-pin="3" data-pin-at="start"><a class="sb-table-link" href="#/table" tabindex="-1">KLM-0241</a></span></td><td>Budi Santoso</td><td data-num>Rp 12.450.000</td><td>${badge(['success', 'Disetujui: Sembuh'])}</td></tr>
      <tr><td><span data-pin="4" data-pin-at="bottom"><a class="sb-table-link" href="#/table" tabindex="-1">KLM-0238</a></span></td><td>Siti Rahma</td><td data-num><span data-pin="5" data-pin-at="bottom">Rp 3.275.000</span></td><td><span data-pin="6" data-pin-at="bottom">${badge(['blue', 'Sedang Ditinjau'])}</span></td></tr>
    </tbody>
  </table>
</div>
</div>`;

  DS.components.push({
    slug: 'table',
    name: 'Table',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-08',
    description: 'Rows of records: claims, invoice items, members. A gray-50 header band, gray-200 row dividers, right-aligned tabular numbers, status pills, sortable columns, row selection and grouped rows.',
    css: CSS,
    cssFile: 'table.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Click a column header to sort. Selection uses the Checkbox "select all" script.' },
          {
            type: 'playground',
            initial: { size: 'md', select: false, tone: false, sticky: false },
            controls: [
              { key: 'size', label: 'Size', type: 'segmented', options: [['md', 'md'], ['sm', 'sm']] },
              { key: 'select', label: 'Row selection', type: 'toggle' },
              { key: 'tone', label: 'Flagged rows', type: 'toggle' },
              { key: 'sticky', label: 'Sticky first column', type: 'toggle' },
            ],
            render: s => stage(`${table(s)}\n${pager}`),
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
              'Use a table when people compare or scan many records with the same fields. For one record, use a Card with summary rows.',
              'A table sits in a Card. Its count and page buttons sit under it; filters and search sit above, outside the table.',
              'Numbers, amounts and dates align right with tabular figures, so digits line up. Text aligns left.',
              'Money is in full Rupiah. Status is a Badge sm, never coloured text.',
              'Every cell shows a value. A missing value is a `gray-400` "—", never a blank cell.',
              'The ID column links to the record. Row actions go in a "⋯" Dropdown menu in the last column.',
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
              ['1', 'Header', '`gray-50` band with radius 8 at both ends, padding `12 16` (sm `8 12`), Text sm / Regular `gray-500`. No divider under it.'],
              ['2', 'Sortable header', 'The label is the button. Idle: 16 px two-way arrow `gray-400`. Sorted: label `gray-700`, arrow `brand-600` pointing the sort direction; `aria-sort` on the `th`. One sorted column at a time.'],
              ['3', 'Row', 'Padding 16 (sm `10 12`), 1 px `gray-200` divider. Hover `gray-50`, selected `brand-50`. Text sm `gray-900`.'],
              ['4', 'ID link', 'Text sm / Medium `brand-700`, underlined; hover `brand-800`.'],
              ['5', 'Number cell', 'Right-aligned, tabular figures. Full Rupiah.'],
              ['6', 'Status', 'Badge sm in the status colour (see Badge).'],
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
              ['Size', 'md, sm', 'Omit, or `data-size="sm"` on the table for dense screens'],
              ['Number column', 'True, False', '`data-num` on the `th` and each `td`'],
              ['Sortable', 'True, False', '`<button class="sb-table-sort">` in the `th`; `aria-sort` when sorted; `data-value` on cells that sort by number or date'],
              ['Selection', 'True, False', 'A first column of Checkboxes with `data-select-all` / `data-select-item`'],
              ['Tone', 'Error, Warning', '`data-tone` on a body row'],
              ['Sticky first column', 'True, False', '`data-sticky` on the table'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-default', text: 'Default' },
          { type: 'example', html: stage(`${table()}\n${pager}`) },
          { type: 'h3', id: 'type-select', text: 'With selection' },
          { type: 'p', text: 'A first column of Checkboxes sm. The header box selects all and turns indeterminate when only some rows are chosen. Selected rows are `brand-50`. Bulk actions appear above the table when something is selected.' },
          { type: 'example', html: stage(table({ select: true })), code: false },
          { type: 'h3', id: 'type-grouped', text: 'Grouped' },
          { type: 'p', text: 'For invoices, FWA findings and benefits. A group row (chevron, number, name, total) folds its item rows; items are indented 32 on `gray-50`; the total row is `gray-100` with radius 8. Flagged items are `error-50` with `error-700` text, items to review `warning-50`.' },
          { type: 'example', html: stage(grouped), code: false },
          { type: 'h3', id: 'type-amount', text: 'Amount and missing values' },
          { type: 'p', text: 'Converted currencies sit under the Rupiah amount in Text xs `gray-500`, separated by " | ". A value that does not exist yet is a `gray-400` "—" with an `aria-label`.' },
          { type: 'example', html: stage(amount, 'is-narrow') },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'h3', id: 'state-rows', text: 'Rows' },
          {
            type: 'table',
            head: ['State', 'Fill', 'Text'],
            rows: [
              ['Default', '`white`', '`gray-900`'],
              ['Hover', '`gray-50`', '`gray-900`'],
              ['Selected', '`brand-50`', '`gray-900`'],
              ['Flagged (`data-tone="error"`)', '`error-50`', '`error-700`'],
              ['Review (`data-tone="warning"`)', '`warning-50`', '`gray-900`'],
            ],
          },
          { type: 'example', html: stage(table({ tone: true, sortable: false, state: 'hover' })), code: false },
          { type: 'h3', id: 'state-empty', text: 'Empty' },
          { type: 'p', text: 'Keep the header, so people see what would be there, and put the Card empty state in one full-width cell.' },
          { type: 'example', html: stage(empty), code: false },
          { type: 'h3', id: 'state-wide', text: 'Wide tables' },
          { type: 'p', text: 'The table scrolls sideways inside its card. With `data-sticky` the first column (usually the ID) stays put, with a 1 px `gray-200` edge.' },
          { type: 'example', html: stage(table({ sticky: true }), 'is-narrow'), code: false },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(`<table class="sb-table" data-size="sm"><thead><tr><th scope="col">Item</th><th scope="col" data-num>Tagihan</th></tr></thead><tbody><tr><td>Kamar</td><td data-num>Rp 4.500.000</td></tr><tr><td>Obat</td><td data-num>Rp 875.000</td></tr></tbody></table>`), text: 'Amounts right-aligned with tabular figures, in full Rupiah.' },
              { kind: 'dont', html: stage(`<table class="sb-table" data-size="sm"><thead><tr><th scope="col">Item</th><th scope="col">Tagihan</th></tr></thead><tbody><tr><td>Kamar</td><td>Rp 4,5 jt</td></tr><tr><td>Obat</td><td>Rp 875 rb</td></tr></tbody></table>`), text: 'Left-aligned, abbreviated amounts. Digits do not line up and the exact value is lost.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(`<table class="sb-table" data-size="sm"><thead><tr><th scope="col">ID Klaim</th><th scope="col">Status</th></tr></thead><tbody><tr><td>KLM-0241</td><td>${badge(['success', 'Disetujui: Sembuh'])}</td></tr><tr><td>KLM-0236</td><td>${badge(['error', 'Ditolak'])}</td></tr></tbody></table>`), text: 'Status as a pill.' },
              { kind: 'dont', html: stage(`<table class="sb-table" data-size="sm"><thead><tr><th scope="col">ID Klaim</th><th scope="col">Status</th></tr></thead><tbody><tr><td>KLM-0241</td><td style="color: var(--success-600)">Disetujui: Sembuh</td></tr><tr><td>KLM-0236</td><td style="color: var(--error-600)">Ditolak</td></tr></tbody></table>`), text: 'Status as coloured text: weak contrast and unlike every other screen.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(`<table class="sb-table" data-size="sm"><thead><tr><th scope="col">Peserta</th><th scope="col" data-num>Klaim</th></tr></thead><tbody><tr><td>Budi Santoso</td><td data-num>3</td></tr><tr><td>Siti Rahma</td><td data-num><span class="sb-table-empty" aria-label="Belum ada">—</span></td></tr></tbody></table>`), text: 'A dash where a value is missing.' },
              { kind: 'dont', html: stage(`<table class="sb-table" data-size="sm"><thead><tr><th scope="col">Peserta</th><th scope="col" data-num>Klaim</th></tr></thead><tbody><tr><td>Budi Santoso</td><td data-num>3</td></tr><tr><td>Siti Rahma</td><td data-num></td></tr></tbody></table>`), text: 'A blank cell. It reads as "still loading" or "broken".' },
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
              'A real `<table>` with `<th scope="col">` headers (and `scope="row"` where a row has a label cell), never a grid of `<div>`s.',
              'Sortable headers are `<button>`s inside the `th`; the `th` carries `aria-sort="ascending"` or `"descending"`, so screen readers announce the order.',
              'Selection checkboxes each have an `aria-label` naming the row ("Pilih KLM-0241"); the header box says "Pilih semua klaim".',
              'Flagged rows also say why in the row (a pill or the text), not only with the tint.',
              'The group chevron is a `<button>` with `aria-expanded` and a label ("Rincian Obat").',
            ],
          },
          {
            type: 'table',
            head: ['Text', 'On', 'Ratio', 'AA'],
            rows: [
              ['Header `gray-500`', '`gray-50`', '4.76:1', 'Passes'],
              ['Cell `gray-900`', '`white` / `gray-50` / `brand-50`', '17.75:1 / 16.98:1 / 16.33:1', 'Passes'],
              ['ID link `brand-700`', '`white`', '6.61:1', 'Passes'],
              ['Flagged `error-700`', '`error-50`', '6.05:1', 'Passes'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `badge.css` and `checkbox.css` for the parts inside, then `table.css`. Add `table.js` for sorting and groups, and `checkbox-select-all.js` for selection.' },
          { type: 'code', lang: 'css', filename: 'table.css', code: CSS },
          { type: 'h3', id: 'table-script', text: 'Sort and group script' },
          { type: 'code', lang: 'js', filename: 'table.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('click', tableSort);
  document.addEventListener('click', tableGroup);
})();

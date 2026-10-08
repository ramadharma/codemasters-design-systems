// Checkbox group (selectable cards). Source: DESIGN.md §6 Checkbox group, Figma nodes 124-2838 (Checkbox group item),
// 1142-87213 (Checkbox group). The control inside is Checkbox and radio (checkbox.css); this file adds the card.
(() => {
  const { esc, icon } = DS;

  const CSS = `/* Checkbox group (selectable cards), Codemasters Design System
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
`;

  let uid = 0;
  // Default input per type: Checkbox is multi-select, Radio single; the check-circle types pick with `multi`.
  const TYPES = [['checkbox', 'Checkbox'], ['radio', 'Radio button'], ['icon', 'Icon simple'], ['avatar', 'Avatar'], ['payment', 'Payment icon'], ['card', 'Icon card']];
  const SAMPLE = {
    checkbox: { title: 'Deteksi FWA', sub: 'per klaim', desc: 'Tandai klaim yang berpotensi fraud, waste atau abuse sebelum dibayar.' },
    radio: { title: 'Harian', sub: 'setiap 07.00', desc: 'Ringkasan klaim kemarin dikirim ke email tim.' },
    icon: { title: 'Integrasi API', sub: 'real time', desc: 'Klaim masuk langsung dari sistem asuransi, tanpa unggah manual.', glyph: 'layers' },
    avatar: { title: 'Advisor A', sub: '@advisor.a', desc: 'Medical reviewer', initials: 'AA' },
    payment: { title: 'Kartu berakhiran 1234', desc: 'Berlaku s.d. 06/2027' },
    card: { title: 'Paket Starter', price: 'Rp5 jt', per: 'per bulan', desc: 'Hingga 1.000 klaim per bulan dan semua modul analisis.', badge: 'Paling populer', glyph: 'layers' },
  };

  function item({ type = 'checkbox', size = 'sm', selected = false, state = 'default', multi, name, id, ...text } = {}) {
    const t = { ...SAMPLE[type], ...text };
    const key = id || `cg-${++uid}`;
    const isMulti = multi ?? (type === 'checkbox' || type === 'icon');
    const a = ['class="sb-check-input"', `type="${isMulti ? 'checkbox' : 'radio'}"`, `id="${key}"`];
    if (!['checkbox', 'radio'].includes(type)) a.push('data-variant="circle"');
    if (name) a.push(`name="${name}"`);
    a.push(`aria-describedby="${key}-desc"`);
    if (selected) a.push('checked');
    if (state === 'disabled') a.push('disabled');
    const input = `<input ${a.join(' ')}>`;
    const title = `<label class="sb-cg-title" for="${key}">${esc(t.title)}${t.sub ? ` <span class="sb-cg-sub">${esc(t.sub)}</span>` : ''}</label>`;
    const desc = `<p class="sb-cg-desc" id="${key}-desc">${esc(t.desc)}</p>`;
    const open = `<div class="sb-check sb-cg-item" data-size="${size}"${type === 'card' ? ' data-type="card"' : ''}${state === 'hover' || state === 'focus' ? ` data-state="${state}"` : ''}>`;
    const dis = state === 'disabled' ? ' disabled' : '';

    if (type === 'card') {
      return [
        open,
        '  <div class="sb-cg-head">',
        `    <span class="sb-cg-icon">${icon(t.glyph)}</span>`,
        `    ${title}`,
        `    ${input}`,
        '  </div>',
        '  <div class="sb-cg-body">',
        '    <div class="sb-cg-text">',
        `      <p class="sb-cg-price"><strong>${esc(t.price)}</strong> ${esc(t.per)}</p>`,
        `      ${desc}`,
        '    </div>',
        `    <span class="sb-badge" data-size="sm" data-color="success">${esc(t.badge)}</span>`,
        '  </div>',
        '</div>',
      ].join('\n');
    }
    const lead = {
      icon: `<span class="sb-cg-icon">${icon(t.glyph)}</span>`,
      avatar: `<span class="sb-avatar" data-size="${size}"><img src="${DS.demoPhoto(t.initials === 'AA' ? 0 : 4)}" alt=""></span>`,
      payment: `<span class="sb-cg-pay" aria-hidden="true">${icon('credit-card')}</span>`,
    }[type];
    const lines = [open];
    if (lead) lines.push(`  ${lead}`);
    else lines.push(`  ${input}`);
    lines.push('  <div class="sb-cg-text">', `    ${title}`, `    ${desc}`);
    if (type === 'payment') {
      lines.push(
        '    <div class="sb-cg-actions">',
        `      <button class="sb-btn" type="button" data-hierarchy="link-gray" data-size="sm"${dis}>Jadikan utama</button>`,
        `      <button class="sb-btn" type="button" data-hierarchy="link-color" data-size="sm"${dis}>Ubah</button>`,
        '    </div>',
      );
    }
    lines.push('  </div>');
    if (lead) lines.push(`  ${input}`);
    lines.push('</div>');
    return lines.join('\n');
  }
  const indent = (html, n = 2) => html.replace(/^/gm, ' '.repeat(n));

  // A labelled group: radiogroup for single select, group for multi select.
  const group = (id, label, role, items) => `<div class="sb-choices" role="${role}" aria-labelledby="${id}-label">
  <span class="sb-choices-label" id="${id}-label">${esc(label)}</span>
${items.map((o, i) => indent(item({ id: `${id}-${i}`, name: role === 'radiogroup' ? id : undefined, ...o }))).join('\n')}
</div>`;
  const stage = html => `<div class="cg-stage">\n${html}\n</div>`;

  const EXAMPLES = {
    checkbox: () => group('cg-mod', 'Modul analisis', 'group', [
      { type: 'checkbox', selected: true },
      { type: 'checkbox', title: 'Ringkasan medis AI', sub: 'per dokumen', desc: 'Resume medis dan hasil lab diringkas jadi satu halaman.', selected: true },
      { type: 'checkbox', title: 'Verifikasi tagihan', sub: 'per invoice', desc: 'Tagihan rumah sakit dicocokkan dengan tarif kontrak.' },
    ]),
    radio: () => group('cg-lap', 'Frekuensi laporan', 'radiogroup', [
      { type: 'radio', selected: true },
      { type: 'radio', title: 'Mingguan', sub: 'setiap Senin', desc: 'Tren klaim dan temuan FWA selama tujuh hari terakhir.' },
      { type: 'radio', title: 'Bulanan', sub: 'tanggal 1', desc: 'Laporan lengkap untuk rapat evaluasi bulanan.' },
    ]),
    icon: () => group('cg-src', 'Sumber data klaim', 'group', [
      { type: 'icon', selected: true },
      { type: 'icon', title: 'Unggah manual', sub: 'PDF, JPG', desc: 'Tim mengunggah berkas klaim dari dashboard.', glyph: 'file-text' },
    ]),
    avatar: () => group('cg-rev', 'Tugaskan reviewer', 'radiogroup', [
      { type: 'avatar', selected: true },
      { type: 'avatar', title: 'Advisor B', sub: '@advisor.b', desc: 'Claim analyst', initials: 'AB' },
    ]),
    payment: () => group('cg-pay', 'Metode pembayaran', 'radiogroup', [
      { type: 'payment', selected: true },
      { type: 'payment', title: 'Kartu berakhiran 5678', desc: 'Berlaku s.d. 11/2026' },
    ]),
    card: () => group('cg-plan', 'Paket langganan', 'radiogroup', [
      { type: 'card', selected: true },
      { type: 'card', title: 'Paket Enterprise', price: 'Rp12 jt', desc: 'Klaim tanpa batas, integrasi API dan reviewer khusus.', badge: 'Hemat 20%' },
    ]),
  };

  const STATES = [['default', 'Default'], ['hover', 'Hover'], ['focus', 'Focused'], ['disabled', 'Disabled']];
  const matrix = `<div class="cg-matrix" inert>
<span></span><span class="mx">Unselected</span><span class="mx">Selected</span>
${STATES.map(([s, l]) => `<span class="mx">${l}</span>\n${[false, true].map(sel => item({ type: 'radio', state: s, selected: sel, title: 'Harian', sub: '', desc: 'Setiap 07.00', id: `cg-m-${s}-${sel ? 'on' : 'off'}` })).join('\n')}`).join('\n')}
</div>`;

  const anatomy = `<div class="sb-check sb-cg-item" data-size="md" data-pin="1" data-pin-at="start">
  <span data-pin="2"><input class="sb-check-input" type="checkbox" checked tabindex="-1" aria-label="Contoh"></span>
  <div class="sb-cg-text">
    <span class="sb-cg-title"><span data-pin="3">Deteksi FWA</span> <span class="sb-cg-sub" data-pin="4">per klaim</span></span>
    <p class="sb-cg-desc" data-pin="5" data-pin-at="bottom">Tandai klaim berpotensi FWA sebelum dibayar.</p>
  </div>
</div>`;

  DS.components.push({
    slug: 'checkbox-group',
    name: 'Checkbox group',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-06',
    description: 'Selectable cards: a list of bordered cards where the whole card is the control. Use it when each option needs a description or a visual, such as a plan, a payment method or an assignee.',
    css: CSS,
    cssFile: 'checkbox-group.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'The card is live: click anywhere on it, or Tab to it and press Space.' },
          {
            type: 'playground',
            initial: { type: 'checkbox', size: 'sm', state: 'default', selected: true },
            controls: [
              { key: 'type', label: 'Type', type: 'segmented', options: TYPES },
              { key: 'size', label: 'Size', type: 'segmented', options: [['sm', 'sm'], ['md', 'md']] },
              { key: 'state', label: 'State', type: 'segmented', options: STATES },
              { key: 'selected', label: 'Selected', type: 'toggle' },
            ],
            render: s => stage(item({ ...s, id: 'pg-cg' })),
          },
        ],
      },
      {
        id: 'usage',
        title: 'Usage',
        blocks: [
          {
            type: 'table',
            head: ['Type', 'Content', 'Control', 'Use for'],
            rows: [
              ['Checkbox', 'Title + inline subtitle + description', 'Checkbox, left', 'Pick any number: modules, notification channels'],
              ['Radio button', 'Title + subtitle + description', 'Radio, left', 'Pick exactly one: report frequency, claim method'],
              ['Icon simple', '32 px featured icon + text', 'Check circle, right', 'Options that read faster with an icon: data sources'],
              ['Avatar', 'Avatar + name, handle, role', 'Check circle, right', 'Picking people: reviewer, assignee'],
              ['Payment icon', 'Card logo + text + text links', 'Check circle, right', 'Saved payment methods, with Set as default and Edit'],
              ['Icon card', 'Header (icon, title, check circle) + body (price, description, badge)', 'Check circle, top right', 'Plans and packages'],
            ],
          },
          {
            type: 'list',
            items: [
              'Use cards only when each option needs a description or a visual. Short text options are plain Checkbox or Radio.',
              'Stack cards vertically, full width, 12 apart. One group uses one type and one size.',
              'Check circle types are single-select (`type="radio"`) or multi-select (`type="checkbox"`) underneath; say which in the group label when it is not obvious.',
              'Preselect one card in a single-select group when a sensible default exists.',
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
              ['1', 'Card', 'Radius 8, padding 16, 1 px border. Full width; the whole card is the hit area.'],
              ['2', 'Control', 'Checkbox and radio, same size as the card (`sm` 16, `md` 20). Leading: 2 px down, gap 8 (`md` 12). Check circle types: trailing.'],
              ['3', 'Title', 'Text sm / Medium (`md`: Text md / Medium). `gray-700`, selected `brand-800`.'],
              ['4', 'Subtitle', 'Optional, inline after the title. Regular weight, `gray-500`, selected `brand-600`.'],
              ['5', 'Description', 'Text sm / Regular (`md`: Text md, 2 px below). `gray-500`, selected `brand-600`.'],
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
              ['Selected', 'True, False', '`checked` on the input; the card follows with `:has()`'],
              ['Size', '`sm`, `md`', '`data-size` on `.sb-cg-item`'],
              ['Type', 'Checkbox, Radio button, Icon simple, Avatar, Payment icon, Icon card', 'What sits in the row; Icon card adds `data-type="card"`'],
              ['State', 'Default, Hover, Focused, Disabled', '`:hover`, `:focus-visible` on the input, `disabled`. Static mockups only: `data-state` on the card'],
              ['Breakpoint', 'Desktop (768), Mobile (343)', 'None: the card is fluid and text wraps. The Icon card badge drops below the price when narrow'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: TYPES.flatMap(([k, l]) => [
          { type: 'h3', id: `type-${k}`, text: l },
          { type: 'example', html: stage(EXAMPLES[k]()) },
        ]),
      },
      {
        id: 'sizes',
        title: 'Sizes',
        blocks: [
          { type: 'example', html: stage([item({ type: 'checkbox', size: 'sm', selected: true, id: 'sz-cg-sm' }), item({ type: 'checkbox', size: 'md', selected: true, id: 'sz-cg-md' })].join('\n')) },
          {
            type: 'table',
            head: ['Size', 'Control', 'Title, description', 'Featured icon / avatar', 'Gap'],
            rows: [
              ['`sm`', '16', 'Text sm (14/20)', '32 / 32', 'Control 8, visual 12'],
              ['`md`', '20', 'Text md (16/24), description 2 px below', '40 / 40', 'Control 12, avatar and card logo 16, featured icon 12'],
            ],
          },
          { type: 'p', text: 'Icon card titles are Text md in both sizes; `md` raises the price from Display sm to Display md.' },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'example', html: matrix, code: false },
          {
            type: 'table',
            head: ['State', 'Unselected', 'Selected'],
            rows: [
              ['Default', '`white`, `gray-200` border', '`brand-50` fill, `brand-300` border'],
              ['Hover', '`white`, `brand-300` border', '`brand-50` fill, `brand-500` border'],
              ['Focused', '`white`, `brand-300` border + 4 px `focus-ring` ring', '`brand-50`, `brand-300` border + 4 px `focus-ring` ring'],
              ['Disabled', '`gray-50` fill, `gray-200` border', '`gray-50` fill, `gray-200` border'],
            ],
          },
          {
            type: 'list',
            items: [
              'Only the card shows the focus ring; the control inside keeps its Default or checked look.',
              'Selected text: title `brand-800`, subtitle and description `brand-600`. Disabled text stays `gray-700` / `gray-500`, selected or not.',
              'Icon card: the header takes the fill and border, the body stays white with a `gray-200` border.',
              'Payment icon, selected: "Set as default" (Link gray) turns `brand-500`.',
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
              { kind: 'do', html: stage(group('dd-cg', 'Frekuensi laporan', 'radiogroup', [{ type: 'radio', selected: true }, { type: 'radio', title: 'Mingguan', sub: 'setiap Senin', desc: 'Tren klaim tujuh hari terakhir.' }])), text: 'Cards when each option needs a description.' },
              {
                kind: 'dont',
                html: stage(group('dd-cg2', 'Kirim salinan?', 'radiogroup', [{ type: 'radio', title: 'Ya', sub: '', desc: 'Ya', selected: true }, { type: 'radio', title: 'Tidak', sub: '', desc: 'Tidak' }])),
                text: 'Cards for a short yes/no. The description only repeats the title; use Radio or a Toggle.',
              },
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
              'The input is a native checkbox or radio: Space toggles it, arrow keys move within a radio group.',
              'The title is the `<label for>`; its `::after` covers the card, so a click anywhere selects it. The description is linked with `aria-describedby`.',
              'Text links (Set as default, Edit) sit above the label layer (`z-index: 2`), so they act on their own and never toggle the card. Disable them with the card.',
              'Wrap the cards in `role="radiogroup"` (single select) or `role="group"` (multi select) with a visible label via `aria-labelledby`.',
              'The control shows selection as well as the colour, so the state does not rely on colour alone.',
            ],
          },
          {
            type: 'table',
            head: ['Pair', 'Ratio', 'Needed', 'Result'],
            rows: [
              ['Selected title `brand-800` on `brand-50`', '7.94:1', '4.5:1', 'Passes'],
              ['Selected subtitle, description `brand-600` on `brand-50`', '4.65:1', '4.5:1', 'Passes'],
              ['Unselected title `gray-700`, description `gray-500` on `white`', '10.46:1, 4.97:1', '4.5:1', 'Passes'],
              ['Selected "Set as default" `brand-500` on `brand-50`', '3.33:1', '4.5:1', '**Fails**'],
            ],
          },
          { type: 'note', tone: 'warning', text: 'Selected Payment icon cards turn "Set as default" `brand-500`, which is 3.33:1 on `brand-50`. `brand-600` (4.65:1) passes and already matches the Edit link. Decision for the design team.' },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `checkbox.css` and `checkbox-group.css`; add `avatar.css` for Avatar cards, `button.css` for Payment icon links and `badge.css` for Icon card badges. No script.' },
          { type: 'code', lang: 'css', filename: 'checkbox-group.css', code: CSS },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
})();

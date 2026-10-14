// Loading: skeletons for content whose shape is known, a spinner for waits of unknown length, and which one to use when.
// Built from DESIGN.md §6 Overlays and feedback (Skeleton: gray-100 blocks), Progress (spinner for unknown length) and the
// Chart refresh rule. No Figma component yet.
(() => {
  const { esc } = DS;

  const CSS = `/* Loading: skeleton and spinner, Codemasters Design System
   Needs tokens.css. No script.

   Skeleton: grey shapes in the layout of the content that is coming. Mark the region busy and say so once.
   <section aria-busy="true">
     <span class="sb-sr-only">Memuat klaim…</span>
     <span class="sb-skeleton" data-shape="circle" style="--sk-size: 40px" aria-hidden="true"></span>
     <span class="sb-skeleton" data-shape="text" style="width: 60%" aria-hidden="true"></span>
   </section>

   data-shape   text (a line of Text sm) | heading (Text xl) | circle (avatar; --sk-size) | rect (any block; set width and height)
   width        on text and heading lines: vary it (100 %, 80 %, 60 %) so the block reads as a paragraph

   Spinner: a ring that turns, in the colour of its text (currentColor), so it is brand on a surface and white on a solid button.
   <span class="sb-spinner" role="status" aria-label="Memuat"></span>
   data-size    sm 16 | md 20 (default) | lg 32 | xl 48 */

/* Screen-reader-only text, for "Memuat…" next to skeletons and spinners. */
.sb-sr-only { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }

/* Skeleton: gray-100 (DESIGN.md), radius 4 for lines, full for circles. One shimmer sweeps the whole page at once
   (background-attachment: fixed), so a screen of skeletons moves together instead of flickering block by block. */
.sb-skeleton {
  --sk-shine: rgb(255 255 255 / .6);
  display: block; flex: none; box-sizing: border-box;
  border-radius: var(--radius-sm);
  background: linear-gradient(90deg, transparent 30%, var(--sk-shine) 50%, transparent 70%) var(--bg-tertiary);
  background-size: 200vw 100%; background-attachment: fixed; background-repeat: no-repeat;
  animation: sb-skeleton 1.5s ease-in-out infinite;
}
@keyframes sb-skeleton { from { background-position: 100vw 0; } to { background-position: -100vw 0; } }
.sb-skeleton[data-shape="text"] { height: 12px; margin-block: 4px; } /* 12 + 4 + 4 = the 20 px line of Text sm */
.sb-skeleton[data-shape="heading"] { height: 20px; margin-block: 5px; } /* the 30 px line of Text xl */
.sb-skeleton[data-shape="circle"] { width: var(--sk-size, 40px); height: var(--sk-size, 40px); border-radius: var(--radius-full); }
:root[data-theme="dark"] .sb-skeleton { --sk-shine: rgb(255 255 255 / .06); }

/* Spinner: a 2 px ring at 20 % of the colour, with one quarter at full colour, turning every 700 ms. */
.sb-spinner {
  --sp-size: 20px;
  display: inline-block; flex: none; box-sizing: border-box; width: var(--sp-size); height: var(--sp-size);
  border: 2px solid color-mix(in srgb, currentColor 20%, transparent); border-top-color: currentColor; border-radius: var(--radius-full);
  color: var(--fg-brand); vertical-align: middle;
  animation: sb-spin 700ms linear infinite;
}
.sb-spinner[data-size="sm"] { --sp-size: 16px; }
.sb-spinner[data-size="lg"] { --sp-size: 32px; border-width: 3px; }
.sb-spinner[data-size="xl"] { --sp-size: 48px; border-width: 4px; }
@keyframes sb-spin { to { rotate: 1turn; } }
/* A spinner with words: "Memuat klaim…" in Text sm gray-500, 8 apart. */
.sb-loading { display: inline-flex; align-items: center; gap: 8px; font: 400 var(--text-sm) var(--font); color: var(--text-quaternary); }
.sb-loading[data-layout="stack"] { flex-direction: column; gap: 12px; text-align: center; }

@media (prefers-reduced-motion: reduce) {
  .sb-skeleton { animation: none; } /* the shapes alone say "loading" */
  .sb-spinner { animation-duration: 2s; } /* slower, but still turning: a still ring reads as stuck */
}
`;

  // ---- Docs markup
  const sk = (shape, style = '') => `<span class="sb-skeleton" data-shape="${shape}"${style ? ` style="${style}"` : ''} aria-hidden="true"></span>`;
  const busy = (inner, label = 'Memuat…', tag = 'div', cls = '') => `<${tag}${cls ? ` class="${cls}"` : ''} aria-busy="true">\n  <span class="sb-sr-only">${esc(label)}</span>\n${inner}\n</${tag}>`;
  const lines = widths => widths.map(w => `  ${sk('text', `width: ${w}`)}`).join('\n');
  const spinner = (size, extra = '') => `<span class="sb-spinner"${size && size !== 'md' ? ` data-size="${size}"` : ''}${extra}></span>`;

  // Card skeleton: the Card's own head and body, with grey shapes where the words and numbers will be.
  const card = `<section class="sb-card" aria-busy="true" aria-label="Ringkasan klaim">
  <span class="sb-sr-only">Memuat ringkasan klaim…</span>
  <header class="sb-card-head">
    <div class="sb-card-heading" style="flex: 1">
      ${sk('heading', 'width: 45%')}
      ${sk('text', 'width: 30%')}
    </div>
  </header>
  <div class="sb-card-body">
    <dl class="sb-card-rows">
${[['Total tagihan', '112px'], ['Ditanggung', '96px'], ['Tidak ditanggung', '80px']].map(([l, w]) => `      <div class="sb-card-row"><dt>${l}</dt><dd>${sk('text', `width: ${w}; margin-inline-start: auto`)}</dd></div>`).join('\n')}
    </dl>
  </div>
</section>`;
  // Table skeleton: real headers (they are known), grey cells in the body.
  const table = `<div class="sb-table-wrap" aria-busy="true">
  <span class="sb-sr-only">Memuat daftar klaim…</span>
  <table class="sb-table">
    <thead><tr><th scope="col">ID Klaim</th><th scope="col">Peserta</th><th scope="col" data-num>Tagihan</th><th scope="col">Status</th></tr></thead>
    <tbody>
${[['60%', '70%', '80%', '70%'], ['60%', '55%', '70%', '60%'], ['60%', '75%', '75%', '65%']].map(([a, b, c, d]) => `      <tr><td>${sk('text', `width: ${a}`)}</td><td>${sk('text', `width: ${b}`)}</td><td data-num>${sk('text', `width: ${c}; margin-inline-start: auto`)}</td><td>${sk('rect', `width: ${d}; height: 22px; border-radius: var(--radius-xl)`)}</td></tr>`).join('\n')}
    </tbody>
  </table>
</div>`;
  // Avatar label group skeleton.
  const person = busy(`  <div class="sb-avatar-label" data-size="md">\n    ${sk('circle', '--sk-size: 40px')}\n    <div class="sb-avatar-label-text">${sk('text', 'width: 120px')}${sk('text', 'width: 180px')}</div>\n  </div>`, 'Memuat profil…');

  const stage = (html, cls = '') => `<div class="loading-stage${cls ? ` ${cls}` : ''}">\n${html}\n</div>`;
  const SIZES = [['sm', '16'], ['md', '20'], ['lg', '32'], ['xl', '48']];

  const anatomy = `<div class="loading-stage is-anat">
<div class="sb-avatar-label" data-size="md" data-pin="1" data-pin-at="start">
  <div class="sb-skeleton" data-shape="circle" style="--sk-size: 40px" data-pin="2" aria-hidden="true"></div>
  <div class="sb-avatar-label-text"><div class="sb-skeleton" data-shape="text" style="width: 120px" data-pin="3" data-pin-at="end" aria-hidden="true"></div><span class="sb-skeleton" data-shape="text" style="width: 180px" aria-hidden="true"></span></div>
</div>
<div class="sb-loading"><span data-pin="4" data-pin-at="bottom"><span class="sb-spinner" aria-hidden="true"></span></span><span data-pin="5" data-pin-at="end">Memuat klaim…</span></div>
</div>`;

  DS.components.push({
    slug: 'loading',
    name: 'Loading',
    category: 'Components',
    status: 'In progress',
    updated: '2026-10-14',
    description: 'What people see while data or an action is on its way: skeletons in the shape of the content, a spinner for waits of unknown length, and which to use when (with Button loading, Progress and Toast).',
    css: CSS,
    cssFile: 'loading.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          {
            type: 'playground',
            initial: { kind: 'card' },
            controls: [{ key: 'kind', label: 'Show', type: 'segmented', options: [['card', 'Card'], ['table', 'Table'], ['person', 'Person'], ['spinner', 'Spinner']] }],
            render: s => stage({ card, table, person, spinner: busy(`  <div class="sb-loading">${spinner('md', ' aria-hidden="true"')}<span>Memuat klaim…</span></div>`, 'Memuat klaim…') }[s.kind], s.kind === 'table' ? 'is-wide' : ''),
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
              'A skeleton stands in for content whose shape is known: the rows of a claim list, a summary card, a profile. It matches the real layout, so nothing jumps when the data arrives.',
              'A spinner stands in for a wait whose shape or length is unknown: a search, a panel, a submit. Always with words ("Memuat klaim…") unless it sits inside a button.',
              'Wait 300 ms before showing either, so fast answers never flash a loading state; once shown, keep it at least 500 ms.',
              'Data already on screen stays while it refreshes: fade it to 50 % with `aria-busy="true"` (as Chart does), never swap it for skeletons.',
              'Never stack them: one loading state per region, not a spinner inside a skeleton.',
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
              ['1', 'Skeleton group', 'The region that is loading: `aria-busy="true"` and one visually hidden "Memuat …" line. The shapes inside are `aria-hidden`.'],
              ['2', 'Circle', 'Avatars and round icons: the size of the real avatar (`--sk-size`), radius full.'],
              ['3', 'Line', '`gray-100`, radius 4. Text line 12 high in a 20 line (Text sm); heading 20 high in a 30 line (Text xl). Widths vary so it reads as text.'],
              ['4', 'Spinner', '2 px ring: the colour at 20 % with one quarter at full colour, one turn in 700 ms. Brand `brand-600` on surfaces, `white` on solid buttons (it follows the text colour).'],
              ['5', 'Label', 'Text sm `gray-500`, 8 from the spinner, ending in "…".'],
            ],
          },
        ],
      },
      {
        id: 'skeleton',
        title: 'Skeleton',
        blocks: [
          { type: 'p', text: 'Build the skeleton from the real component, with grey shapes in place of words and numbers; labels and headers that are already known stay as text.' },
          { type: 'h3', id: 'sk-card', text: 'Card' },
          { type: 'example', html: stage(card) },
          { type: 'h3', id: 'sk-table', text: 'Table' },
          { type: 'p', text: 'Headers stay. Show as many rows as fit, or the page size when it is small; numbers align right like the real cells, status pills keep their pill shape.' },
          { type: 'example', html: stage(table, 'is-wide') },
          { type: 'h3', id: 'sk-shapes', text: 'Shapes' },
          {
            type: 'table',
            head: ['Shape', 'Code', 'Size'],
            rows: [
              ['Text line', '`data-shape="text"`', '12 high, 4 above and below (a Text sm line); set the width. Labels that are known (Total tagihan) stay as text'],
              ['Heading', '`data-shape="heading"`', '20 high, 5 above and below (a Text xl line)'],
              ['Circle', '`data-shape="circle"`', '`--sk-size`, default 40 (Avatar md)'],
              ['Block', '`data-shape="rect"`', 'Set width, height and the radius of what it replaces (pill: `radius-xl`)'],
            ],
          },
          { type: 'note', text: 'The shimmer is one sweep across the whole page (`background-attachment: fixed`), 1.5 s, light `white` at 60 % (dark: 6 %). It stops with reduced motion; the grey shapes still say "loading".' },
        ],
      },
      {
        id: 'spinner',
        title: 'Spinner',
        blocks: [
          { type: 'h3', id: 'sp-sizes', text: 'Sizes' },
          { type: 'example', html: stage(`<div class="sp-row">\n${SIZES.map(([s, px]) => `<figure class="sp-cell">${spinner(s, ' role="status" aria-label="Memuat"')}<figcaption class="mx">${s} · ${px}</figcaption></figure>`).join('\n')}\n</div>`) },
          {
            type: 'table',
            head: ['Size', 'px', 'Ring', 'Use'],
            rows: [
              ['sm', '16', '2', 'Inside small buttons, list status lines (Combobox), badges'],
              ['md', '20', '2', 'Default: buttons md to xl, inline with Text sm / md'],
              ['lg', '32', '3', 'A card or panel loading'],
              ['xl', '48', '4', 'A whole page or dialog loading (rare: prefer skeletons)'],
            ],
          },
          { type: 'h3', id: 'sp-label', text: 'With words' },
          { type: 'p', text: 'Outside a button, a spinner always says what is loading. Inline for small places, stacked and centred for a card or a page.' },
          { type: 'example', html: stage(`${busy(`  <div class="sb-loading">${spinner('sm', ' aria-hidden="true"')}<span>Mencari peserta…</span></div>`, 'Mencari peserta…')}\n${busy(`  <div class="sb-loading" data-layout="stack">${spinner('lg', ' aria-hidden="true"')}<span>Memuat dokumen klaim…</span></div>`, 'Memuat dokumen klaim…')}`, 'is-row') },
          { type: 'h3', id: 'sp-solid', text: 'On a solid fill' },
          { type: 'p', text: 'The spinner takes the text colour, so on a Primary button or a dark surface it turns white with no extra class. See Button → Loading.' },
          { type: 'example', html: stage(`<button class="sb-btn" type="button" data-hierarchy="primary" data-size="md" aria-busy="true">${spinner('md', ' aria-hidden="true"')}Mengirim…</button>\n<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="md" aria-busy="true">${spinner('md', ' aria-hidden="true"')}Menyimpan…</button>`, 'is-row') },
        ],
      },
      {
        id: 'patterns',
        title: 'Which loading state',
        blocks: [
          {
            type: 'table',
            head: ['Situation', 'Use', 'Example'],
            rows: [
              ['First load, the layout is known', 'Skeleton in that layout', 'Claim list rows, summary cards, a profile'],
              ['Refresh of data already shown', 'Keep it at 50 % opacity, `aria-busy="true"`', 'Chart after a filter change, table after sorting on the server'],
              ['An action started from a button', 'Button loading', 'Simpan, Kirim ke Advisor, Setujui'],
              ['A wait of unknown length in a small place', 'Spinner sm / md with words', 'Combobox search, a panel opening'],
              ['A task with a known end', 'Progress bar or circle', 'Uploading documents, AI analysis step 4 of 10'],
              ['Work that continues after people move on', 'Toast loading, updated to success or error', 'Exporting a report, sending 20 claims'],
              ['A whole page with nothing to show yet', 'Skeleton of the page; spinner xl only when the layout is unknown', 'Opening a claim detail'],
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
              { kind: 'do', html: stage(person), text: 'A skeleton in the shape of what is coming.' },
              { kind: 'dont', html: stage(`<div class="sb-loading" data-layout="stack">${spinner('xl')}</div>`), text: 'A big spinner with no words where the layout is known. The page jumps when the data lands.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(`<div class="sb-loading">${spinner('sm', ' aria-hidden="true"')}<span>Memuat dokumen…</span></div>`), text: 'Say what is loading.' },
              { kind: 'dont', html: stage(`<div class="sb-loading">${spinner('sm', ' aria-hidden="true"')}<span>Mohon tunggu…</span></div>`), text: '"Mohon tunggu" says nothing about what is happening.' },
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
              'Mark the loading region with `aria-busy="true"` and remove it when the content is in; put one `sb-sr-only` "Memuat …" inside. The skeleton shapes are `aria-hidden`.',
              'A spinner on its own has `role="status"` and an `aria-label` ("Memuat"); next to words, the words carry the meaning and the spinner is `aria-hidden`.',
              'With reduced motion the shimmer stops and the spinner slows to one turn in 2 s; it never stops, because a still ring reads as stuck.',
              'When loading ends, move nothing: focus stays where it was. If the wait was long, a Toast can say it is done.',
            ],
          },
          {
            type: 'table',
            head: ['Part', 'On', 'Ratio', 'Needs'],
            rows: [
              ['Label `gray-500`', '`white`', '4.97:1', '4.5:1, passes'],
              ['Spinner arc `brand-600`', '`white`', '5.06:1', '3:1 (graphic), passes'],
              ['Skeleton `gray-100`', '`white`', '1.1:1', 'Decorative, exempt; the hidden label carries the meaning'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, then `loading.css`. Skeletons reuse the real component markup (Card, Table), so load their CSS too. No script: add and remove `aria-busy` and the skeleton markup from your own code.' },
          { type: 'code', lang: 'css', filename: 'loading.css', code: CSS },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
})();

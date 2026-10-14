// Banner: a message about a page, a card or a form, in one of the four semantic roles. Built from DESIGN.md §6 Containers
// (Banner) and §2.4 Semantic roles. No Figma component yet.
(() => {
  const { esc, icon } = DS;

  // Tone: [family, icon]. Fill 50, border 200, text 700, icon 500 (DESIGN.md §2.4).
  const TONES = { info: ['blue', 'info'], success: ['success', 'check-circle'], warning: ['warning', 'alert'], error: ['error', 'alert-circle'] };

  const CSS = `/* Banner, Codemasters Design System
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

${Object.entries(TONES).slice(1).map(([t, [f]]) => `.sb-banner[data-tone="${t}"] { --ban-bg: var(--${f}-50); --ban-border: var(--${f}-200); --ban-fg: var(--${f}-700); --ban-icon: var(--${f}-500); }`).join('\n')}

/* Page: full width under the header bar. No radius and no side borders, padding 12 32 (the page padding). */
.sb-banner[data-placement="page"] { padding: 12px 32px; border-width: 0 0 1px; border-radius: 0; }

/* Dark theme: a quiet tint of the 500 step over gray-900, 800 border, 300 text, 400 icon. */
${Object.entries(TONES).map(([t, [f]]) => `:root[data-theme="dark"] .sb-banner${t === 'info' ? '' : `[data-tone="${t}"]`} { --ban-bg: color-mix(in srgb, var(--${f}-500) 12%, var(--gray-900)); --ban-border: var(--${f}-800); --ban-fg: var(--${f}-300); --ban-icon: var(--${f}-400); }`).join('\n')}
`;

  // ---- Content: one real message per tone.
  const COPY = {
    info: ['Klaim ini memakai plan lama', 'Manfaat dihitung dengan plan 2025 karena tanggal masuk sebelum 1 Januari 2026.'],
    success: ['Klaim dikirim ke Advisor', 'Advisor akan meninjau dalam 1 hari kerja. Status berubah otomatis.'],
    warning: ['Klaim perlu ditinjau ulang', '3 item melewati batas manfaat rawat inap. Periksa tab FWA sebelum menyetujui.'],
    error: ['Klaim gagal dikirim', 'Nomor polis tidak ditemukan. Periksa nomor di kartu peserta, lalu kirim lagi.'],
  };

  function banner({ tone = 'info', title = true, placement = 'inline', text, heading } = {}) {
    const [h, d] = COPY[tone];
    const a = ['class="sb-banner"'];
    if (tone !== 'info') a.push(`data-tone="${tone}"`);
    if (placement === 'page') a.push('data-placement="page"');
    const body = title ? `\n    <p class="sb-banner-title">${esc(heading || h)}</p>\n    <p class="sb-banner-desc">${esc(text || d)}</p>\n  ` : `\n    <p class="sb-banner-desc">${esc(text || d)}</p>\n  `;
    return `<div ${a.join(' ')}>\n  ${icon(TONES[tone][1])}\n  <div class="sb-banner-text">${body}</div>\n</div>`;
  }

  // Docs-only frames. DS.snippet strips them from the code.
  const stage = (html, cls = '') => `<div class="banner-stage${cls ? ` ${cls}` : ''}">\n${html}\n</div>`;
  // Page placement in context: a header bar strip, the banner, then the page body.
  const page = (o = {}) => `<div class="banner-stage is-page">
<div class="banner-page-head">KLM-0241</div>
${banner({ tone: 'warning', ...o, placement: 'page' })}
<div class="banner-page-body"></div>
</div>`;

  const anatomy = `<div class="banner-stage">
<div class="sb-banner" data-tone="warning" data-pin="1" data-pin-at="start">
  <span data-pin="2">${icon('alert')}</span>
  <div class="sb-banner-text">
    <p class="sb-banner-title"><span data-pin="3" data-pin-at="end">${esc(COPY.warning[0])}</span></p>
    <p class="sb-banner-desc"><span data-pin="4" data-pin-at="bottom">${esc(COPY.warning[1])}</span></p>
  </div>
</div>
</div>`;

  DS.components.push({
    slug: 'banner',
    name: 'Banner',
    category: 'Components',
    status: 'In progress',
    updated: '2026-10-14',
    description: 'A message about a page, a card or a form in one of four roles: info, success, warning and error. Inline inside the content, or as a full-width strip under the header bar.',
    css: CSS,
    cssFile: 'banner.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          {
            type: 'playground',
            initial: { tone: 'info', title: true, placement: 'inline' },
            controls: [
              { key: 'tone', label: 'Tone', type: 'segmented', options: [['info', 'Info'], ['success', 'Success'], ['warning', 'Warning'], ['error', 'Error']] },
              { key: 'placement', label: 'Placement', type: 'segmented', options: [['inline', 'Inline'], ['page', 'Page']] },
              { key: 'title', label: 'Title', type: 'toggle' },
            ],
            render: s => (s.placement === 'page' ? page(s) : stage(banner(s))),
            code: s => DS.snippet(banner(s)), // the page frame is a docs specimen, not markup to copy
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
              'Use a banner for a message that stays while it is true: a claim needs review, a form could not be sent, the plan is old. For a short confirmation that goes away by itself, use a Toast.',
              'Pick the tone by what the person must do. Error: fix something before going on. Warning: check something before deciding. Success: an action worked and changed something lasting. Info: context that helps, nothing to do.',
              'Inline banners sit at the top of the card or form they are about. Page banners sit under the header bar and are about the whole page.',
              'One banner per place. Two messages of the same tone become one banner; never stack three.',
              'The title says what happened in a few words; the description says why and what to do next. A short message needs only one line.',
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
              ['1', 'Container', 'Radius 8, padding `14 16`, 1 px border in the tone\'s 200 step, fill in its 50 step. Icon and text 12 apart.'],
              ['2', 'Icon', '20 px, the tone\'s 500 step: `info`, `check-circle`, `alert`, `alert-circle`. Top-aligned with the first line.'],
              ['3', 'Title', 'Optional. Text sm / Semibold, the tone\'s 700 step.'],
              ['4', 'Description', 'Text sm / Regular, the tone\'s 700 step, 4 below the title. Links inside are Semibold and underlined in the same colour.'],
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
              ['Tone', 'Info, Success, Warning, Error', '`data-tone` (omit for Info)'],
              ['Placement', 'Inline, Page', '`data-placement="page"` (omit for Inline)'],
              ['Title', 'True, False', '`<p class="sb-banner-title">` before the description'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-tones', text: 'Tones' },
          {
            type: 'table',
            head: ['Tone', 'Fill', 'Border', 'Text', 'Icon'],
            rows: [
              ['Info', '`blue-50`', '`blue-200`', '`blue-700`', '`blue-500` `info`'],
              ['Success', '`success-50`', '`success-200`', '`success-700`', '`success-500` `check-circle`'],
              ['Warning', '`warning-50`', '`warning-200`', '`warning-700`', '`warning-500` `alert`'],
              ['Error', '`error-50`', '`error-200`', '`error-700`', '`error-500` `alert-circle`'],
            ],
          },
          { type: 'example', html: stage(Object.keys(TONES).map(t => banner({ tone: t })).join('\n'), 'is-stack'), code: false },
          { type: 'h3', id: 'type-one-line', text: 'One line' },
          { type: 'p', text: 'Without a title, for short messages. The container is 48 high.' },
          { type: 'example', html: stage(banner({ title: false, text: 'Data peserta diperbarui dari sistem polis 5 menit lalu.' })) },
          { type: 'h3', id: 'type-page', text: 'Page' },
          { type: 'p', text: 'Full width under the header bar: no radius, no side borders, only a bottom border; padding `12 32` so the text lines up with the page content.' },
          { type: 'example', html: page(), code: false },
        ],
      },
      {
        id: 'dark',
        title: 'Dark theme',
        blocks: [
          { type: 'p', text: 'On dark surfaces the 50 fill glows, so the fill is 12 % of the tone\'s 500 over `gray-900`, with an 800 border, 300 text and 400 icon. Switch the theme in the site header to compare.' },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(banner({ tone: 'error' })), text: 'Says what went wrong and how to fix it.' },
              { kind: 'dont', html: stage(banner({ tone: 'error', heading: 'Terjadi kesalahan', text: 'Silakan coba lagi nanti.' })), text: 'A vague error. The person cannot act on it.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(banner({ tone: 'warning', title: false, text: '3 item melewati batas manfaat dan 1 obat di luar formularium.' })), text: 'Related messages of one tone in one banner.' },
              { kind: 'dont', html: stage(`${banner({ tone: 'warning', title: false, text: '3 item melewati batas manfaat.' })}\n${banner({ tone: 'warning', title: false, text: '1 obat di luar formularium.' })}\n${banner({ tone: 'info', title: false, text: 'Plan 2025 dipakai.' })}`, 'is-stack'), text: 'A stack of banners. None of them stands out.' },
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
              'The tone never shows by colour alone: each tone has its own icon, and the text says what happened.',
              'The icon is decoration (`aria-hidden`); the title carries the meaning.',
              'A banner that is on the page when it loads needs no role. A banner that appears after an action gets `role="alert"` (error, warning) or `role="status"` (info, success), so screen readers announce it.',
              'After a failed submit, move focus to the error banner (give it `tabindex="-1"`) so keyboard users land on the message.',
            ],
          },
          {
            type: 'table',
            head: ['Text', 'On', 'Light', 'Dark', 'AA'],
            rows: [
              ['Info `blue-700` / dark `blue-300`', 'fill', '5.57:1', '8.58:1', 'Passes'],
              ['Success `success-700` / `success-300`', 'fill', '5.13:1', '9.82:1', 'Passes'],
              ['Warning `warning-700` / `warning-300`', 'fill', '5.20:1', '9.63:1', 'Passes'],
              ['Error `error-700` / `error-300`', 'fill', '6.05:1', '8.25:1', 'Passes'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, then `banner.css`. No script.' },
          { type: 'code', lang: 'css', filename: 'banner.css', code: CSS },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
})();

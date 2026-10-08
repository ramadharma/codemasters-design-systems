// Modal: a dialog that stops the page for one decision or one short form. Native <dialog> with showModal(), so focus,
// Esc and the inert page come from the browser. Built from DESIGN.md Overlays (Modal).
(() => {
  const { esc, icon } = DS;

  // ---- Open, close and scrim click. Esc, focus trap and returning focus are native to showModal().
  function modalClick(e) {
    const opener = e.target.closest?.('[data-modal-open]');
    if (opener) return document.getElementById(opener.dataset.modalOpen)?.showModal();
    const closer = e.target.closest?.('[data-modal-close]');
    if (closer) return closer.closest('dialog')?.close();
    // A click on the scrim lands on the dialog element itself, outside its box.
    const dialog = e.target.closest?.('dialog.sb-modal');
    if (dialog && e.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
    }
  }
  const SCRIPT = `// Modal: [data-modal-open="id"] opens <dialog id="id">, [data-modal-close] and a scrim click close it.
// Esc, the focus trap and returning focus to the opener come from showModal().
${modalClick.toString().replace(/^  /gm, '')}
document.addEventListener('click', modalClick);`;

  const CSS = `/* Modal, Codemasters Design System
   Needs tokens.css and button.css; modal.js to open and close. A native <dialog> opened with showModal().

   <button class="sb-btn" type="button" data-modal-open="tolak">Tolak Klaim</button>
   <dialog class="sb-modal" id="tolak" data-size="sm" aria-labelledby="tolak-title" aria-describedby="tolak-desc">
     <header class="sb-modal-head">
       <span class="sb-modal-icon" data-tone="error">…trash…</span>
       <div class="sb-modal-heading">
         <h2 class="sb-modal-title" id="tolak-title">Tolak Klaim?</h2>
         <p class="sb-modal-desc" id="tolak-desc">…</p>
       </div>
     </header>
     <button class="sb-btn sb-modal-close" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Tutup" data-modal-close>…x…</button>
     <footer class="sb-modal-foot">
       <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-close autofocus>Batal</button>
       <button class="sb-btn" type="button" data-destructive>Tolak Klaim</button>
     </footer>
   </dialog>

   data-size   sm 424 (confirmations) | md 640 (forms, default) | lg 880 (wide content)
   data-tone   on the icon: brand | error | warning | success */

.sb-modal {
  --modal-w: 640px;
  box-sizing: border-box;
  display: grid; gap: 16px; align-content: start;
  width: min(var(--modal-w), calc(100% - 32px)); max-width: none; max-height: calc(100dvh - 64px);
  margin: auto; padding: 24px; overflow-y: auto;
  font: 400 var(--text-sm) var(--font); color: var(--gray-700);
  background: var(--white); border: 0; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
}
.sb-modal[data-size="sm"] { --modal-w: 424px; }
.sb-modal[data-size="lg"] { --modal-w: 880px; }

/* Open and close: fade and scale from 96 %, 150 ms; the scrim fades with it. */
div.sb-modal { position: relative; } /* static specimens; a <dialog> stays fixed in the top layer */
dialog.sb-modal { opacity: 0; scale: .96; transition: opacity 150ms var(--ease), scale 150ms var(--ease), overlay 150ms allow-discrete, display 150ms allow-discrete; }
dialog.sb-modal:not([open]) { display: none; }
dialog.sb-modal[open] { opacity: 1; scale: 1; }
dialog.sb-modal::backdrop { background: transparent; transition: background-color 150ms var(--ease), overlay 150ms allow-discrete, display 150ms allow-discrete; }
dialog.sb-modal[open]::backdrop { background: var(--scrim); }
@starting-style {
  dialog.sb-modal[open] { opacity: 0; scale: .96; }
  dialog.sb-modal[open]::backdrop { background: transparent; }
}
html:has(dialog.sb-modal[open]) { overflow: hidden; } /* the page behind does not scroll */

/* Head: optional icon, title, description. The close button sits in the corner. */
.sb-modal-head { display: grid; gap: 16px; padding-inline-end: 32px; }
.sb-modal-heading { display: grid; gap: 4px; }
.sb-modal-title { margin: 0; font: 600 var(--text-xl) var(--font); color: var(--gray-900); text-wrap: balance; }
.sb-modal[data-size="sm"] .sb-modal-title { font: 600 var(--text-lg) var(--font); }
.sb-modal-desc { margin: 0; color: var(--gray-500); text-wrap: pretty; }
.sb-modal-close { position: absolute; top: 16px; right: 16px; }

/* Icon: 48 px circle, tone-100 fill with an 8 px tone-50 ring, 24 px tone-600 icon. */
.sb-modal-icon {
  --tone: var(--brand-600); --tone-fill: var(--brand-100); --tone-ring: var(--brand-50);
  box-sizing: border-box; display: grid; place-items: center; width: 48px; height: 48px;
  border: 8px solid var(--tone-ring); border-radius: var(--radius-full); background: var(--tone-fill); color: var(--tone);
}
.sb-modal-icon > svg { width: 24px; height: 24px; }
.sb-modal-icon[data-tone="error"] { --tone: var(--error-600); --tone-fill: var(--error-100); --tone-ring: var(--error-50); }
.sb-modal-icon[data-tone="warning"] { --tone: var(--warning-600); --tone-fill: var(--warning-100); --tone-ring: var(--warning-50); }
.sb-modal-icon[data-tone="success"] { --tone: var(--success-600); --tone-fill: var(--success-100); --tone-ring: var(--success-50); }

.sb-modal-body { display: grid; gap: 16px; min-width: 0; }
.sb-modal-body > p { margin: 0; }

/* Footer: actions right-aligned, gap 12, 8 more above them. In a small modal the buttons share the width. */
.sb-modal-foot { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 12px; margin-top: 8px; }
.sb-modal[data-size="sm"] .sb-modal-foot > .sb-btn { flex: 1; }
@media (max-width: 480px) {
  .sb-modal-foot { flex-direction: column-reverse; }
  .sb-modal-foot > .sb-btn { width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  dialog.sb-modal, dialog.sb-modal::backdrop { transition: none; }
}
`;

  // ---- Builders. The docs show a static specimen (<div>); the code shows the <dialog>.
  let uid = 0;
  const btn = (label, h = 'secondary-gray', extra = '') => `<button class="sb-btn" type="button" data-hierarchy="${h}"${extra}>${esc(label)}</button>`;
  function modal({ size = 'md', tone, glyph, title, desc, body = '', actions, close = true, live = false, id = `modal-${++uid}` } = {}) {
    const tag = live ? 'dialog' : 'div';
    const a = ['class="sb-modal"'];
    if (live) a.push(`id="${id}"`); else a.push('role="dialog"', 'aria-modal="false"');
    if (size !== 'md') a.push(`data-size="${size}"`);
    a.push(`aria-labelledby="${id}-title"`);
    if (desc) a.push(`aria-describedby="${id}-desc"`);
    const parts = [
      `  <header class="sb-modal-head">${tone ? `\n    <span class="sb-modal-icon" data-tone="${tone}" aria-hidden="true">${icon(glyph)}</span>` : ''}
    <div class="sb-modal-heading">
      <h2 class="sb-modal-title" id="${id}-title">${esc(title)}</h2>${desc ? `\n      <p class="sb-modal-desc" id="${id}-desc">${esc(desc)}</p>` : ''}
    </div>
  </header>`,
      close ? `  <button class="sb-btn sb-modal-close" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Tutup" data-modal-close>${icon('x')}</button>` : '',
      body ? `  <div class="sb-modal-body">\n    ${body.replace(/\n/g, '\n    ')}\n  </div>` : '',
      `  <footer class="sb-modal-foot">\n    ${actions.join('\n    ')}\n  </footer>`,
    ].filter(Boolean);
    return `<${tag} ${a.join(' ')}>\n${parts.join('\n')}\n</${tag}>`;
  }
  // Static specimen on a scrim, plus the <dialog> markup as its code.
  const stage = html => `<div class="modal-stage">\n${html}\n</div>`;
  const show = (o, extra = {}) => ({ type: 'example', html: stage(modal(o)), code: DS.snippet(modal({ ...o, live: true })), ...extra });

  const REJECT = {
    size: 'sm', tone: 'error', glyph: 'trash', title: 'Tolak Klaim?',
    desc: 'Klaim KLM-0241 dikembalikan ke rumah sakit dengan alasan penolakan. Tindakan ini tidak bisa dibatalkan.',
    actions: [btn('Batal', 'secondary-gray', ' data-modal-close autofocus'), btn('Tolak Klaim', 'primary', ' data-destructive')],
  };
  const SEND = {
    title: 'Kirim ke Advisor', desc: 'Advisor meninjau klaim ini dan memberi keputusan akhir.',
    body: `<div class="sb-field">
  <label class="sb-field-label" for="advisor">Advisor</label>
  <div class="sb-input"><input id="advisor" type="text" value="dr. Rina Hartono"></div>
</div>
<div class="sb-field">
  <label class="sb-field-label" for="catatan">Catatan</label>
  <div class="sb-textarea"><textarea id="catatan" rows="3">Mohon tinjau item obat di luar formularium.</textarea></div>
</div>`,
    actions: [btn('Batal', 'secondary-gray', ' data-modal-close'), btn('Kirim ke Advisor', 'primary')],
  };
  const DONE = {
    size: 'sm', tone: 'success', glyph: 'check', title: 'Klaim Terkirim',
    desc: 'Advisor akan menerima notifikasi. Kamu bisa memantau statusnya di daftar klaim.',
    close: false, actions: [btn('Selesai', 'primary', ' data-modal-close')],
  };
  const WARN = {
    size: 'sm', tone: 'warning', glyph: 'alert', title: 'Simpan Perubahan?',
    desc: 'Ada perubahan pada ringkasan yang belum disimpan. Kalau keluar sekarang, perubahan itu hilang.',
    actions: [btn('Buang', 'secondary-gray', ' data-modal-close'), btn('Simpan', 'primary')],
  };

  const anatomy = `<div class="modal-stage">
<div class="sb-modal" data-size="sm" role="dialog" aria-modal="false" aria-labelledby="anat-title" data-pin="1">
  <header class="sb-modal-head">
    <span data-pin="2" data-pin-at="start" style="width: fit-content"><span class="sb-modal-icon" data-tone="error" aria-hidden="true">${icon('trash')}</span></span>
    <div class="sb-modal-heading">
      <h2 class="sb-modal-title" id="anat-title"><span data-pin="3" data-pin-at="start">Tolak Klaim?</span></h2>
      <p class="sb-modal-desc"><span data-pin="4" data-pin-at="start">Klaim dikembalikan ke rumah sakit.</span></p>
    </div>
  </header>
  <span data-pin="5" style="position: absolute; top: 16px; right: 16px"><button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Tutup" tabindex="-1">${icon('x')}</button></span>
  <footer class="sb-modal-foot" data-pin="6" data-pin-at="bottom">${btn('Batal', 'secondary-gray', ' tabindex="-1"')}${btn('Tolak Klaim', 'primary', ' data-destructive tabindex="-1"')}</footer>
</div>
</div>`;

  const pgOpts = s => {
    const base = { reject: REJECT, warn: WARN, done: DONE, send: SEND }[s.type];
    return { ...base, size: s.size, close: s.close, tone: s.icon ? base.tone || 'brand' : undefined, glyph: base.glyph || 'send' };
  };
  const liveDemo = (o, label) => {
    const id = `demo-modal-${++uid}`;
    return `<div class="modal-live">${btn(label, 'secondary-gray', ` data-modal-open="${id}"`)}\n${modal({ ...o, live: true, id })}</div>`;
  };

  DS.components.push({
    slug: 'modal',
    name: 'Modal',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-08',
    description: 'A dialog that stops the page for one decision or one short form: confirmations, a destructive check, sending a claim. Native <dialog>, so focus, Esc and the inert page come from the browser.',
    css: CSS,
    cssFile: 'modal.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Open the live modal: Tab stays inside it, Esc or a click on the scrim closes it, and focus returns to the button.' },
          {
            type: 'playground',
            initial: { type: 'reject', size: 'sm', icon: true, close: true },
            controls: [
              { key: 'type', label: 'Content', type: 'segmented', options: [['reject', 'Destructive'], ['warn', 'Warning'], ['done', 'Success'], ['send', 'Form']] },
              { key: 'size', label: 'Size', type: 'segmented', options: [['sm', 'sm'], ['md', 'md'], ['lg', 'lg']] },
              { key: 'icon', label: 'Icon', type: 'toggle' },
              { key: 'close', label: 'Close button', type: 'toggle' },
            ],
            render: s => `<div class="modal-pg">\n${stage(modal(pgOpts(s)))}\n${liveDemo(pgOpts(s), 'Buka Modal')}\n</div>`,
            code: s => DS.snippet(modal({ ...pgOpts(s), live: true, id: 'modal' })),
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
              'Use a modal when the user must decide before going on: confirm a destructive step, leave unsaved work, or fill two or three fields that belong to one action (Kirim ke Advisor).',
              'Not for news. A result the user does not have to act on is a toast; an error in a form shows at the field.',
              'Not for long forms or anything that needs scrolling and reference to the page behind. That is a page or a side panel.',
              'One modal at a time. Never open a modal from a modal.',
              'The title asks the question or names the action, in Title Case ("Tolak Klaim?"). The primary button repeats the action ("Tolak Klaim"), never "Ya" or "OK".',
              'Two actions: Batal (Secondary gray) on the left, the action (Primary, or Destructive) on the right. An acknowledgement has one button.',
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
              ['1', 'Panel', '`white`, radius 12, padding 24, gap 16, `shadow-lg`, on a `--scrim` (black 20 %). Width 424 (sm), 640 (md), 880 (lg), never wider than the screen minus 32; scrolls inside when taller than the screen minus 64.'],
              ['2', 'Icon', 'Optional. 48 px circle: tone-100 fill, 8 px tone-50 ring, 24 px tone-600 icon. Error for destructive, warning for losing work, success for done, brand otherwise.'],
              ['3', 'Title', 'Text xl / Semibold `gray-900` (sm: Text lg), Title Case. Asks the question or names the action. `aria-labelledby` points to it.'],
              ['4', 'Description', 'Text sm `gray-500`, 4 under the title. Says what happens. `aria-describedby` points to it.'],
              ['5', 'Close', 'Tertiary gray icon button sm, 16 from the top and right. Leave it out when the modal needs an answer (an acknowledgement still closes with its button and Esc).'],
              ['6', 'Footer', 'Buttons md, right-aligned, gap 12, 24 under the content. In sm the buttons share the width; under 480 px they stack, primary on top.'],
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
              ['Size', 'sm, md, lg', '`data-size="sm"` or `"lg"`; omit for md'],
              ['Icon', 'None, Brand, Error, Warning, Success', '`<span class="sb-modal-icon" data-tone="…">` in the head'],
              ['Close button', 'True, False', '`.sb-modal-close` with `data-modal-close`'],
              ['Body', 'True, False', '`<div class="sb-modal-body">` for fields or longer content'],
              ['Open, close', '—', '`data-modal-open="id"` on the trigger, `data-modal-close` on Batal and the close button'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-destructive', text: 'Destructive confirmation' },
          { type: 'p', text: 'Error icon, the action as a Destructive Primary button. Focus starts on Batal (`autofocus`), so Enter never destroys by accident.' },
          show(REJECT),
          { type: 'h3', id: 'type-warning', text: 'Warning' },
          { type: 'p', text: 'For losing work or a step that is hard to undo. The safe choice is the primary button.' },
          show(WARN, { code: false }),
          { type: 'h3', id: 'type-form', text: 'Form' },
          { type: 'p', text: 'md, no icon, fields in the body (Input field, Textarea, Input dropdown). Keep it to a few fields; the primary button is disabled until the form can be sent.' },
          show(SEND, { code: false }),
          { type: 'h3', id: 'type-done', text: 'Acknowledgement' },
          { type: 'p', text: 'Only when the user must see the result before going on. One full-width button, no close button. For anything lighter, use a toast.' },
          show(DONE, { code: false }),
        ],
      },
      {
        id: 'behaviour',
        title: 'Behaviour',
        blocks: [
          {
            type: 'table',
            head: ['What', 'How'],
            rows: [
              ['Open', '`dialog.showModal()` (`data-modal-open`). The page behind becomes inert and stops scrolling.'],
              ['Focus', 'Moves into the modal: to the `autofocus` element, else the first focusable one. Tab stays inside. On close, focus returns to the button that opened it.'],
              ['Close', 'Batal, the close button, Esc, or a click on the scrim. A destructive modal may skip the scrim click so a stray click does not lose the choice.'],
              ['Motion', 'Fades in and scales from 96 % in 150 ms with `--ease`; the scrim fades with it. Reduced motion: no animation.'],
            ],
          },
          { type: 'example', html: `<div class="modal-live">${liveDemo(REJECT, 'Tolak Klaim').replace('<div class="modal-live">', '').replace(/<\/div>$/, '')}\n${liveDemo(SEND, 'Kirim ke Advisor').replace('<div class="modal-live">', '').replace(/<\/div>$/, '')}</div>`, code: false, caption: 'Live: open, Tab through, press Esc.' },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(modal({ ...REJECT, close: false })), text: 'The button says the action: Tolak Klaim.' },
              { kind: 'dont', html: stage(modal({ ...REJECT, close: false, title: 'Apakah Anda yakin?', actions: [btn('Tidak'), btn('Ya', 'primary')] })), text: '"Apakah Anda yakin?" with Ya / Tidak. People answer without reading; say what will happen.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(modal({ ...WARN, close: false })), text: 'Batal or the safe choice on the left, the action on the right.' },
              { kind: 'dont', html: stage(modal({ ...WARN, close: false, actions: [btn('Simpan', 'primary'), btn('Buang', 'primary', ' data-destructive')] })), text: 'Two primary buttons. Only one next step looks like one.' },
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
              'Use the native `<dialog>` with `showModal()`: it sets the modal role, traps focus, makes the page inert, closes on Esc and returns focus. Do not rebuild that with `<div>`s.',
              'Name it with `aria-labelledby` (the title) and describe it with `aria-describedby` (the description).',
              'The close button has `aria-label="Tutup"`. The icon is decorative (`aria-hidden`).',
              'In a destructive modal, start focus on Batal so Enter does the safe thing.',
              'Title `gray-900` on white is 17.75:1, description `gray-500` 4.97:1.',
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css` and `button.css`, then `modal.css`, and `modal.js` to open and close.' },
          { type: 'code', lang: 'css', filename: 'modal.css', code: CSS },
          { type: 'h3', id: 'modal-script', text: 'Open and close script' },
          { type: 'code', lang: 'js', filename: 'modal.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('click', modalClick);
})();

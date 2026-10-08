// Toast: short feedback after an action, then it goes away. The API copies react-hot-toast (toast(), toast.success,
// toast.error, toast.loading, toast.promise, toast.dismiss, update by id, pause on hover) in plain JS; the look is
// DESIGN.md Overlays (Toast: gray-900 fill, white 14/20 Medium, radius 8, bottom centre).
(() => {
  const { esc, icon } = DS;

  // ---- The toast runtime. Runs here as DS.toast and ships as toast.js (window.toast) with the same code.
  function installToast(ICONS) {
    const DURATION = { blank: 4000, success: 3000, warning: 5000, error: 5000, loading: Infinity };
    const MAX = 3; // visible at once; older ones close
    const config = { position: 'bottom-center' };
    const live = new Map(); // id -> { el, left, started, timer }
    let seq = 0;

    const region = document.createElement('section');
    region.className = 'sb-toaster';
    region.setAttribute('aria-label', 'Notifikasi');
    region.setAttribute('aria-live', 'polite'); // in the page before any toast, so screen readers announce them
    region.dataset.position = config.position;
    const mount = () => document.body.append(region);
    document.body ? mount() : document.addEventListener('DOMContentLoaded', mount);

    // Pause every timer while the pointer or focus is on the toasts, as react-hot-toast does.
    let paused = false;
    const pause = on => {
      paused = on;
      for (const t of live.values()) on ? stop(t) : start(t);
    };
    region.addEventListener('pointerenter', () => pause(true));
    region.addEventListener('pointerleave', () => pause(false));
    region.addEventListener('focusin', () => pause(true));
    region.addEventListener('focusout', e => region.contains(e.relatedTarget) || pause(false));

    function start(t) {
      if (paused || !Number.isFinite(t.left)) return;
      t.started = Date.now();
      t.timer = setTimeout(() => close(t.id), t.left);
    }
    function stop(t) {
      clearTimeout(t.timer);
      if (t.started) t.left -= Date.now() - t.started;
      t.started = 0;
    }

    function fill(el, type, message, o) {
      el.dataset.type = type;
      el.setAttribute('role', type === 'error' ? 'alert' : 'status');
      el.replaceChildren();
      if (type !== 'blank') {
        const ic = document.createElement('span');
        ic.className = 'sb-toast-icon';
        ic.setAttribute('aria-hidden', 'true');
        ic.innerHTML = ICONS[type] || ''; // our own SVG strings, never user text
        el.append(ic);
      }
      const text = document.createElement('div');
      text.className = 'sb-toast-text';
      const msg = document.createElement('p');
      msg.className = 'sb-toast-msg';
      msg.textContent = message; // messages are data: textContent only
      text.append(msg);
      if (o.description) {
        const d = document.createElement('p');
        d.className = 'sb-toast-desc';
        d.textContent = o.description;
        text.append(d);
      }
      el.append(text);
      if (o.action) {
        const a = document.createElement('button');
        a.type = 'button';
        a.className = 'sb-toast-action';
        a.textContent = o.action.label;
        a.addEventListener('click', () => { o.action.onClick?.(); close(el.dataset.id); });
        el.append(a);
      }
      if (o.closeButton) {
        const x = document.createElement('button');
        x.type = 'button';
        x.className = 'sb-toast-close';
        x.setAttribute('aria-label', 'Tutup notifikasi');
        x.innerHTML = ICONS.close;
        x.addEventListener('click', () => close(el.dataset.id));
        el.append(x);
      }
    }

    function show(type, message, o = {}) {
      const id = o.id ?? `toast-${++seq}`;
      let t = live.get(id);
      if (t) stop(t); // same id: update in place (loading -> success)
      else {
        const el = document.createElement('div');
        el.className = 'sb-toast';
        el.dataset.id = id;
        region.append(el);
        t = { id, el };
        live.set(id, t);
        const extra = [...live.keys()].slice(0, Math.max(0, live.size - MAX));
        extra.forEach(close);
      }
      fill(t.el, type, message, o);
      t.left = o.duration ?? DURATION[type];
      start(t);
      return id;
    }

    function close(id) {
      const t = live.get(id);
      if (!t) return;
      live.delete(id);
      stop(t);
      t.el.dataset.state = 'closing';
      const gone = () => t.el.remove();
      t.el.addEventListener('transitionend', gone, { once: true });
      setTimeout(gone, 300); // reduced motion has no transition to wait for
    }

    const toast = (message, o) => show('blank', message, o);
    for (const type of ['success', 'error', 'warning', 'loading']) toast[type] = (message, o) => show(type, message, o);
    toast.dismiss = id => (id ? [id] : [...live.keys()]).forEach(close);
    toast.promise = (promise, msgs, o = {}) => {
      const id = toast.loading(msgs.loading, o);
      const pick = (m, v) => (typeof m === 'function' ? m(v) : m);
      promise.then(v => toast.success(pick(msgs.success, v), { ...o, id }), e => toast.error(pick(msgs.error, e), { ...o, id }));
      return promise;
    };
    toast.config = o => {
      Object.assign(config, o);
      region.dataset.position = config.position;
    };
    return toast;
  }

  const ICONS = {
    success: icon('check-circle'),
    error: icon('alert-circle'),
    warning: icon('alert'),
    loading: '<span class="sb-toast-spinner"></span>',
    close: icon('x'),
  };
  DS.toast = window.HTMLElement ? installToast(ICONS) : null; // the build runs the data files without a DOM
  const SCRIPT = `// Toast: the react-hot-toast API in plain JS. Load once; then call toast() anywhere.
//   toast('Disimpan')                         toast.success('Klaim terkirim')
//   toast.error('Gagal mengirim', { description: 'Periksa koneksi lalu coba lagi.' })
//   const id = toast.loading('Mengirim…');    toast.success('Klaim terkirim', { id })
//   toast.promise(fetch(url), { loading: 'Mengirim…', success: 'Klaim terkirim', error: 'Gagal mengirim' })
//   toast('Klaim dihapus', { action: { label: 'Batalkan', onClick: undo } })
//   toast.dismiss(id)   toast.dismiss()   toast.config({ position: 'top-right' })
// Options: id, duration (ms, Infinity to stay), description, action { label, onClick }, closeButton.
window.toast = (${installToast.toString().replace(/^  /gm, '')})(${JSON.stringify(ICONS, null, 2)});`;

  const CSS = `/* Toast, Codemasters Design System
   Needs tokens.css; toast.js creates the region and the toasts. Call toast() / toast.success() from your code.

   <section class="sb-toaster" aria-label="Notifikasi" aria-live="polite" data-position="bottom-center">
     <div class="sb-toast" data-type="success" role="status">
       <span class="sb-toast-icon">…check-circle…</span>
       <div class="sb-toast-text"><p class="sb-toast-msg">Klaim terkirim</p><p class="sb-toast-desc">…</p></div>
       <button class="sb-toast-action" type="button">Batalkan</button>
       <button class="sb-toast-close" type="button" aria-label="Tutup notifikasi">…x…</button>
     </div>
   </section>

   data-position  bottom-center (default) | bottom-right | bottom-left | top-center | top-right | top-left
   data-type      blank | success | error | warning | loading */

.sb-toaster {
  position: fixed; z-index: 60; inset-inline: 0; bottom: 24px;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding-inline: 16px; pointer-events: none;
}
.sb-toaster[data-position^="top"] { top: 24px; bottom: auto; flex-direction: column-reverse; } /* newest nearest the edge */
.sb-toaster[data-position$="right"] { align-items: flex-end; }
.sb-toaster[data-position$="left"] { align-items: flex-start; }

.sb-toast {
  --enter-y: 8px;
  box-sizing: border-box; pointer-events: auto;
  display: flex; align-items: center; gap: 12px;
  width: max-content; max-width: min(420px, 100%); min-height: 44px; padding: 10px 12px 10px 14px;
  background: var(--gray-900); border-radius: var(--radius-md); box-shadow: var(--shadow-lg);
  font: 500 var(--text-sm) var(--font); color: var(--white);
  transition: opacity 200ms var(--ease), translate 200ms var(--ease), scale 200ms var(--ease);
}
.sb-toaster[data-position^="top"] .sb-toast { --enter-y: -8px; }
@starting-style { .sb-toast { opacity: 0; translate: 0 var(--enter-y); scale: .96; } }
.sb-toast[data-state="closing"] { opacity: 0; scale: .96; transition-duration: 150ms; }

.sb-toast-icon { display: inline-grid; place-items: center; flex: none; width: 20px; height: 20px; }
.sb-toast-icon > svg { width: 20px; height: 20px; }
.sb-toast[data-type="success"] .sb-toast-icon { color: var(--success-400); }
.sb-toast[data-type="error"] .sb-toast-icon { color: var(--error-400); }
.sb-toast[data-type="warning"] .sb-toast-icon { color: var(--warning-400); }
.sb-toast-spinner { width: 16px; height: 16px; box-sizing: border-box; border: 2px solid var(--gray-600); border-top-color: var(--white); border-radius: var(--radius-full); animation: sb-toast-spin 700ms linear infinite; }
@keyframes sb-toast-spin { to { rotate: 1turn; } }

.sb-toast-text { display: grid; gap: 2px; min-width: 0; }
.sb-toast .sb-toast-text p { margin: 0; }
.sb-toast .sb-toast-msg { color: var(--white); text-wrap: pretty; }
.sb-toast .sb-toast-desc { font-weight: 400; color: var(--gray-300); text-wrap: pretty; }

/* Action: one text button, brand-300 on the dark fill. Close: a 20 px x in gray-400. */
.sb-toast-action {
  flex: none; margin: -6px 0 -6px 4px; padding: 6px 8px; border: 0; border-radius: var(--radius-sm);
  background: none; font: 600 var(--text-sm) var(--font); color: var(--brand-300); cursor: pointer;
}
.sb-toast-action:hover { background: var(--gray-800); }
.sb-toast-close { display: inline-grid; place-items: center; flex: none; width: 28px; height: 28px; margin: -4px -4px -4px 0; padding: 0; border: 0; border-radius: var(--radius-sm); background: none; color: var(--gray-400); cursor: pointer; }
.sb-toast-close:hover { background: var(--gray-800); color: var(--white); }
.sb-toast-close > svg { width: 20px; height: 20px; }
.sb-toast :is(.sb-toast-action, .sb-toast-close):focus-visible { outline: 2px solid var(--brand-300); outline-offset: 0; }

@media (prefers-reduced-motion: reduce) {
  .sb-toast { transition: none; }
  .sb-toast-spinner { animation-duration: 2s; }
}
`;

  // ---- Docs: static specimens, and buttons that fire the real toasts.
  const specimen = (type, message, o = {}) => `<div class="sb-toast" data-type="${type}" role="presentation">${
    type === 'blank' ? '' : `<span class="sb-toast-icon" aria-hidden="true">${ICONS[type]}</span>`
  }<div class="sb-toast-text"><p class="sb-toast-msg">${esc(message)}</p>${o.description ? `<p class="sb-toast-desc">${esc(o.description)}</p>` : ''}</div>${
    o.action ? `<button class="sb-toast-action" type="button" tabindex="-1">${esc(o.action)}</button>` : ''
  }${o.close ? `<button class="sb-toast-close" type="button" aria-label="Tutup notifikasi" tabindex="-1">${ICONS.close}</button>` : ''}</div>`;
  const stage = html => `<div class="toast-stage">\n${html}\n</div>`;

  // A trigger button carries its call as JSON; one listener runs it on DS.toast.
  const fire = (label, call) => `<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm" data-toast='${esc(JSON.stringify(call))}'>${esc(label)}</button>`;
  function runToast(e) {
    const btn = e.target.closest?.('[data-toast]');
    if (!btn) return;
    const { type, message, o = {}, promise } = JSON.parse(btn.dataset.toast);
    if (o.action) o.action = { label: o.action, onClick: () => DS.toast('Dibatalkan') };
    if (o.position) DS.toast.config({ position: o.position });
    if (promise) return DS.toast.promise(new Promise((ok, fail) => setTimeout(promise === 'fail' ? fail : ok, 1800)), { loading: 'Mengirim klaim…', success: 'Klaim terkirim', error: 'Gagal mengirim klaim' }, o);
    type === 'blank' ? DS.toast(message, o) : DS.toast[type](message, o);
  }
  document.addEventListener('click', runToast);

  const CASES = {
    blank: ['blank', 'Perubahan disimpan'],
    success: ['success', 'Klaim terkirim ke Advisor'],
    error: ['error', 'Gagal mengirim klaim'],
    warning: ['warning', 'Sesi berakhir dalam 5 menit'],
    loading: ['loading', 'Menganalisis klaim…'],
  };
  const callFor = s => {
    if (s.type === 'promise') return { promise: 'ok', o: { position: s.position } };
    const [type, message] = CASES[s.type];
    const o = { position: s.position };
    if (s.description) o.description = type === 'error' ? 'Periksa koneksi, lalu coba lagi.' : 'KLM-0241 · RS Medika Utama';
    if (s.action) o.action = 'Batalkan';
    if (s.close) o.closeButton = true;
    if (type === 'loading') o.duration = 3000; // the demo ends itself
    return { type, message, o };
  };
  const codeFor = c => {
    if (c.promise) return `toast.promise(kirimKlaim(), {\n  loading: 'Mengirim klaim…',\n  success: 'Klaim terkirim',\n  error: 'Gagal mengirim klaim',\n});`;
    const opts = [];
    if (c.o.description) opts.push(`description: '${c.o.description}'`);
    if (c.o.action) opts.push(`action: { label: '${c.o.action}', onClick: batalkan }`);
    if (c.o.closeButton) opts.push('closeButton: true');
    const fn = c.type === 'blank' ? 'toast' : `toast.${c.type}`;
    return `${c.o.position && c.o.position !== 'bottom-center' ? `toast.config({ position: '${c.o.position}' });\n` : ''}${fn}('${c.message}'${opts.length ? `, {\n  ${opts.join(',\n  ')},\n}` : ''});`;
  };

  const anatomy = `<div class="toast-stage">
<div class="sb-toast" data-type="success" role="presentation" data-pin="1" data-pin-at="start">
  <span class="sb-toast-icon" aria-hidden="true" data-pin="2">${ICONS.success}</span>
  <div class="sb-toast-text"><p class="sb-toast-msg"><span data-pin="3">Klaim terkirim</span></p><p class="sb-toast-desc"><span data-pin="4" data-pin-at="bottom">KLM-0241 · RS Medika Utama</span></p></div>
  <span data-pin="5"><button class="sb-toast-action" type="button" tabindex="-1">Batalkan</button></span>
  <span data-pin="6" data-pin-at="bottom"><button class="sb-toast-close" type="button" aria-label="Tutup notifikasi" tabindex="-1">${ICONS.close}</button></span>
</div>
</div>`;

  DS.components.push({
    slug: 'toast',
    name: 'Toast',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-08',
    description: 'Short feedback after an action that then goes away: "Klaim terkirim". The react-hot-toast API (toast.success, toast.error, toast.loading, toast.promise) in plain JS, in the design-system look.',
    css: CSS,
    cssFile: 'toast.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Pick a type and press the button. Hover a toast to pause it.' },
          {
            type: 'playground',
            initial: { type: 'success', position: 'bottom-center', description: false, action: false, close: false },
            controls: [
              { key: 'type', label: 'Type', type: 'segmented', options: [['blank', 'Blank'], ['success', 'Success'], ['error', 'Error'], ['warning', 'Warning'], ['loading', 'Loading'], ['promise', 'Promise']] },
              { key: 'position', label: 'Position', type: 'segmented', options: [['bottom-center', 'Bottom center'], ['bottom-right', 'Bottom right'], ['top-center', 'Top center'], ['top-right', 'Top right']] },
              { key: 'description', label: 'Description', type: 'toggle' },
              { key: 'action', label: 'Action', type: 'toggle' },
              { key: 'close', label: 'Close button', type: 'toggle' },
            ],
            render: s => `<div class="toast-live">${fire('Tampilkan Toast', callFor(s))}</div>`,
            code: s => codeFor(callFor(s)),
          },
        ],
      },
      {
        id: 'usage',
        title: 'Usage',
        blocks: [
          {
            type: 'table',
            head: ['Situation', 'Use'],
            rows: [
              ['An action finished and the user can carry on', 'Toast: "Klaim terkirim"'],
              ['An action is running in the background', '`toast.loading`, then the same toast turns into success or error (`toast.promise`)'],
              ['Something went wrong that the user can retry', 'Error toast with an action ("Coba Lagi")'],
              ['A field or form is wrong', 'Not a toast: show it at the field'],
              ['The user must decide before going on', 'Not a toast: a Modal'],
              ['A state that stays (offline, read-only)', 'Not a toast: a banner on the page'],
            ],
          },
          {
            type: 'list',
            items: [
              'Say what happened, in a few words and past tense: "Klaim terkirim", not "Klaim berhasil dikirim!". No exclamation marks.',
              'At most one action, and only one that is also possible elsewhere (Batalkan, Coba Lagi, Lihat).',
              'One toast per action. Three at most on screen; older ones close.',
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
              ['1', 'Container', '`gray-900`, radius 8, `shadow-lg`, padding `10 12 10 14`, gap 12, min height 44, max width 420. Bottom centre, 24 from the edge, 8 between toasts.'],
              ['2', 'Icon', '20 px. Success `success-400`, error `error-400`, warning `warning-400`, loading a 16 px spinner. None for a blank toast.'],
              ['3', 'Message', 'Text sm / Medium `white`. One line where possible.'],
              ['4', 'Description', 'Optional second line, Text sm / Regular `gray-300`.'],
              ['5', 'Action', 'Optional text button, Text sm / Semibold `brand-300`, hover `gray-800` fill. Closes the toast.'],
              ['6', 'Close', 'Optional 20 px ×, `gray-400`, hover `white`. Add it to toasts that stay longer or forever.'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'example', html: stage([specimen('blank', 'Perubahan disimpan'), specimen('success', 'Klaim terkirim ke Advisor'), specimen('error', 'Gagal mengirim klaim', { description: 'Periksa koneksi, lalu coba lagi.', action: 'Coba Lagi' }), specimen('warning', 'Sesi berakhir dalam 5 menit', { close: true }), specimen('loading', 'Menganalisis klaim…')].join('\n')), code: false },
          { type: 'example', html: `<div class="toast-live">\n${['blank', 'success', 'error', 'warning', 'loading'].map(t => fire(t[0].toUpperCase() + t.slice(1), callFor({ type: t }))).join('\n')}\n${fire('Promise', { promise: 'ok' })}\n${fire('Promise, gagal', { promise: 'fail' })}\n</div>`, code: false, caption: 'Fire the real toasts.' },
        ],
      },
      {
        id: 'api',
        title: 'API',
        blocks: [
          { type: 'p', text: 'The same calls as react-hot-toast, so code and habits carry over. `toast.js` sets `window.toast`.' },
          {
            type: 'table',
            head: ['Call', 'Does', 'Default duration'],
            rows: [
              ["`toast('Pesan')`", 'A blank toast, no icon', '4 s'],
              ["`toast.success('Pesan')`", 'Green check', '3 s'],
              ["`toast.error('Pesan')`", 'Red alert, announced at once (`role=\"alert\"`)', '5 s'],
              ["`toast.warning('Pesan')`", 'Amber warning', '5 s'],
              ["`toast.loading('Pesan')`", 'Spinner; stays until updated or dismissed. Returns the id', 'stays'],
              ["`toast.success('Pesan', { id })`", 'Updates the toast with that id in place (loading → success)', '—'],
              ['`toast.promise(p, { loading, success, error })`', 'Loading while `p` runs, then success or error in the same toast. `success` and `error` may be functions of the result', '—'],
              ['`toast.dismiss(id)` / `toast.dismiss()`', 'Closes one, or all', '—'],
              ["`toast.config({ position: 'top-right' })`", 'Moves all toasts: `bottom-center` (default), `bottom-right`, `bottom-left`, `top-center`, `top-right`, `top-left`', '—'],
            ],
          },
          {
            type: 'table',
            head: ['Option', 'Type', 'What'],
            rows: [
              ['`id`', 'string', 'Reuse to update a toast instead of adding one'],
              ['`duration`', 'ms', 'Override the default; `Infinity` keeps it until dismissed'],
              ['`description`', 'string', 'Second line'],
              ['`action`', '`{ label, onClick }`', 'One text button; the toast closes after the click'],
              ['`closeButton`', 'boolean', 'Shows the ×'],
            ],
          },
          { type: 'code', lang: 'js', code: `const id = toast.loading('Menganalisis klaim…');\ntry {\n  await analisis(klaim);\n  toast.success('Analisis selesai', { id });\n} catch {\n  toast.error('Analisis gagal', { id, action: { label: 'Coba Lagi', onClick: ulangi } });\n}` },
        ],
      },
      {
        id: 'behaviour',
        title: 'Behaviour',
        blocks: [
          {
            type: 'list',
            items: [
              'Enters from 8 px below (above for top positions) and 96 % scale in 200 ms; leaves by fading and shrinking in 150 ms.',
              'New toasts sit nearest the screen edge; the others move up. Three at most; the oldest closes when a fourth arrives.',
              'Hovering or focusing the toasts pauses every timer; they resume with the time that was left.',
              'A toast never takes focus, so typing is never interrupted.',
              'With reduced motion, toasts appear and disappear without movement.',
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
              { kind: 'do', html: stage(specimen('success', 'Klaim terkirim')), text: 'A few words, past tense.' },
              { kind: 'dont', html: stage(specimen('success', 'Selamat! Klaim Anda telah berhasil dikirim ke Advisor untuk ditinjau!')), text: 'A sentence with exclamation marks. The icon already says it went well.' },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(specimen('error', 'Gagal mengirim klaim', { action: 'Coba Lagi' })), text: 'One action the user can also find elsewhere.' },
              { kind: 'dont', html: stage(specimen('warning', 'Hapus 12 klaim?', { action: 'Hapus' })), text: 'A decision in a toast. It disappears before people read it; use a Modal.' },
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
              'The toasts live in one `aria-live="polite"` region that is in the page from the start, so screen readers announce each one. Error toasts are `role="alert"`, announced at once.',
              'Toasts do not take focus. Anything a toast offers (Batalkan, Coba Lagi) must also be possible elsewhere, because the toast may be gone before someone reaches it.',
              'Timers pause on hover and focus. Toasts with an action or important text get a longer `duration` or `closeButton`.',
              'Message `white` on `gray-900` is 17.75:1; description `gray-300` 12.04:1; action `brand-300` 9.96:1. Icons: `success-400` 9.28:1, `error-400` 6.37:1, `warning-400` 9.64:1.',
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css` and `toast.css`, then `toast.js` once. Call `toast()` from anywhere.' },
          { type: 'code', lang: 'css', filename: 'toast.css', code: CSS },
          { type: 'h3', id: 'toast-script', text: 'Runtime' },
          { type: 'code', lang: 'js', filename: 'toast.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
})();

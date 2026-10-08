// Toast: short feedback after an action that closes itself. The API copies react-toastify (toast(), toast.info,
// toast.success, toast.warning, toast.error, toast.loading + toast.update, toast.promise, toast.dismiss, autoClose,
// progress bar, pause on hover) in plain JS; the look is the design system's: a white card with a status icon and a
// timer bar in the status colour.
(() => {
  const { esc, icon } = DS;

  // ---- The toast runtime. Runs here as DS.toast and ships as toast.js (window.toast) with the same code.
  // The progress bar is the timer: a CSS animation as long as autoClose; when it ends, the toast closes. Hover and
  // focus pause the animation, so the bar and the timer can never disagree.
  function installToast(ICONS) {
    const config = { position: 'top-right', autoClose: 5000, hideProgressBar: false, closeButton: true, max: 5 };
    const live = new Map(); // toastId -> element
    let seq = 0;

    const region = document.createElement('section');
    region.className = 'sb-toaster';
    region.setAttribute('aria-label', 'Notifikasi');
    region.setAttribute('aria-live', 'polite'); // in the page before any toast, so screen readers announce them
    region.dataset.position = config.position;
    const mount = () => document.body.append(region);
    document.body ? mount() : document.addEventListener('DOMContentLoaded', mount);

    function render(el, o) {
      const type = o.isLoading ? 'loading' : o.type || 'default';
      el.dataset.type = type;
      el.setAttribute('role', type === 'error' ? 'alert' : 'status');
      el.replaceChildren();
      if (ICONS[type]) {
        const ic = document.createElement('span');
        ic.className = 'sb-toast-icon';
        ic.setAttribute('aria-hidden', 'true');
        ic.innerHTML = ICONS[type]; // our own SVG strings, never user text
        el.append(ic);
      }
      const text = document.createElement('div');
      text.className = 'sb-toast-text';
      const msg = document.createElement('p');
      msg.className = 'sb-toast-msg';
      msg.textContent = o.render; // messages are data: textContent only
      text.append(msg);
      if (o.description) {
        const d = document.createElement('p');
        d.className = 'sb-toast-desc';
        d.textContent = o.description;
        text.append(d);
      }
      if (o.action) {
        const a = document.createElement('button');
        a.type = 'button';
        a.className = 'sb-toast-action';
        a.textContent = o.action.label;
        a.addEventListener('click', () => { o.action.onClick?.(); close(el.dataset.id); });
        text.append(a);
      }
      el.append(text);
      if (o.closeButton ?? config.closeButton) {
        const x = document.createElement('button');
        x.type = 'button';
        x.className = 'sb-toast-close';
        x.setAttribute('aria-label', 'Tutup notifikasi');
        x.innerHTML = ICONS.close;
        x.addEventListener('click', () => close(el.dataset.id));
        el.append(x);
      }
      // Loading toasts and autoClose: false stay until updated or dismissed.
      const ms = o.isLoading ? false : o.autoClose ?? config.autoClose;
      if (ms) {
        const bar = document.createElement('div');
        bar.className = 'sb-toast-progress';
        bar.style.animationDuration = `${ms}ms`;
        if (o.hideProgressBar ?? config.hideProgressBar) bar.dataset.hidden = '';
        bar.addEventListener('animationend', () => close(el.dataset.id));
        el.append(bar);
      }
      el._opts = o;
    }

    function show(content, o = {}) {
      const id = String(o.toastId ?? `toast-${++seq}`);
      if (live.has(id)) return id; // same toastId: no duplicate (use toast.update to change it)
      const el = document.createElement('div');
      el.className = 'sb-toast';
      el.dataset.id = id;
      el.addEventListener('click', e => o.onClick && !e.target.closest('button') && o.onClick(e));
      render(el, { ...o, render: content });
      region.append(el);
      live.set(id, el);
      [...live.keys()].slice(0, Math.max(0, live.size - config.max)).forEach(close);
      return id;
    }

    function close(id) {
      const el = live.get(String(id));
      if (!el) return;
      live.delete(String(id));
      el.dataset.state = 'closing';
      let done = false;
      const gone = () => { if (done) return; done = true; el.remove(); el._opts.onClose?.(); };
      el.addEventListener('transitionend', gone, { once: true });
      setTimeout(gone, 300); // reduced motion has no transition to wait for
    }

    const toast = (content, o) => show(content, o);
    for (const type of ['info', 'success', 'warning', 'error']) toast[type] = (content, o) => show(content, { ...o, type });
    toast.loading = (content, o) => show(content, { ...o, isLoading: true });
    // update(id, { render, type, isLoading, autoClose, … }): change a toast in place, e.g. loading -> success.
    toast.update = (id, changes) => {
      const el = live.get(String(id));
      if (el) render(el, { ...el._opts, ...changes, render: changes.render ?? el._opts.render });
    };
    toast.promise = (promise, msgs, o = {}) => {
      const id = toast.loading(msgs.pending, o);
      const pick = (m, v) => (typeof m === 'function' ? m(v) : m);
      promise.then(
        v => toast.update(id, { render: pick(msgs.success, v), type: 'success', isLoading: false }),
        e => toast.update(id, { render: pick(msgs.error, e), type: 'error', isLoading: false }),
      );
      return promise;
    };
    toast.dismiss = id => (id === undefined ? [...live.keys()] : [id]).forEach(close);
    toast.isActive = id => live.has(String(id));
    // Like <ToastContainer position autoClose hideProgressBar closeButton limit>.
    toast.config = o => {
      Object.assign(config, o);
      region.dataset.position = config.position;
    };
    return toast;
  }

  const ICONS = {
    info: icon('info'),
    success: icon('check-circle'),
    warning: icon('alert'),
    error: icon('alert-circle'),
    loading: '<span class="sb-toast-spinner"></span>',
    close: icon('x'),
  };
  DS.toast = window.HTMLElement ? installToast(ICONS) : null; // the build runs the data files without a DOM
  const SCRIPT = `// Toast: the react-toastify API in plain JS. Load once; then call toast() anywhere.
//   toast('Perubahan disimpan')             toast.success('Klaim terkirim')
//   toast.info('Klaim baru masuk')          toast.warning('Sesi berakhir dalam 5 menit')
//   toast.error('Gagal mengirim klaim', { description: 'Periksa koneksi, lalu coba lagi.' })
//   const id = toast.loading('Mengirim klaim…');
//   toast.update(id, { render: 'Klaim terkirim', type: 'success', isLoading: false })
//   toast.promise(kirimKlaim(), { pending: 'Mengirim klaim…', success: 'Klaim terkirim', error: 'Gagal mengirim klaim' })
//   toast.dismiss(id)   toast.dismiss()   toast.isActive(id)
//   toast.config({ position: 'bottom-right', autoClose: 3000 })   // like <ToastContainer>
// Options: toastId, autoClose (ms or false), hideProgressBar, closeButton, description, action { label, onClick }, onClick, onClose.
window.toast = (${installToast.toString().replace(/^  /gm, '')})(${JSON.stringify(ICONS, null, 2)});`;

  const CSS = `/* Toast, Codemasters Design System
   Needs tokens.css; toast.js creates the region and the toasts. Call toast() / toast.success() from your code.

   <section class="sb-toaster" aria-label="Notifikasi" aria-live="polite" data-position="top-right">
     <div class="sb-toast" data-type="success" role="status">
       <span class="sb-toast-icon">…check-circle…</span>
       <div class="sb-toast-text">
         <p class="sb-toast-msg">Klaim terkirim</p>
         <p class="sb-toast-desc">…</p>
         <button class="sb-toast-action" type="button">Lihat Klaim</button>
       </div>
       <button class="sb-toast-close" type="button" aria-label="Tutup notifikasi">…x…</button>
       <div class="sb-toast-progress" style="animation-duration: 5000ms"></div>
     </div>
   </section>

   data-position  top-right (default) | top-center | top-left | bottom-right | bottom-center | bottom-left
   data-type      default | info | success | warning | error | loading */

.sb-toaster {
  position: fixed; z-index: 60; top: 16px; right: 16px;
  display: flex; flex-direction: column; gap: 12px;
  width: min(360px, calc(100% - 32px)); pointer-events: none;
}
.sb-toaster[data-position^="bottom"] { top: auto; bottom: 16px; }
.sb-toaster[data-position$="left"] { right: auto; left: 16px; }
.sb-toaster[data-position$="center"] { right: auto; left: 50%; translate: -50% 0; }

.sb-toast {
  --tone: var(--brand-600); --bar: var(--brand-600); --enter-x: 16px; --enter-y: 0px;
  position: relative; overflow: hidden; box-sizing: border-box; pointer-events: auto;
  display: flex; align-items: flex-start; gap: 12px;
  padding: 16px 12px 16px 16px;
  background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
  font: 400 var(--text-sm) var(--font); color: var(--gray-600);
  transition: opacity 200ms var(--ease), translate 200ms var(--ease), scale 200ms var(--ease);
}
.sb-toaster[data-position$="left"] .sb-toast { --enter-x: -16px; }
.sb-toaster[data-position$="center"] .sb-toast { --enter-x: 0px; --enter-y: -8px; }
.sb-toaster[data-position="bottom-center"] .sb-toast { --enter-y: 8px; }
@starting-style { .sb-toast { opacity: 0; translate: var(--enter-x) var(--enter-y); } }
.sb-toast[data-state="closing"] { opacity: 0; scale: .96; transition-duration: 150ms; }
.sb-toast[data-type="success"] { --tone: var(--success-600); --bar: var(--success-500); }
.sb-toast[data-type="warning"] { --tone: var(--warning-600); --bar: var(--warning-500); }
.sb-toast[data-type="error"] { --tone: var(--error-600); --bar: var(--error-500); }

.sb-toast-icon { display: inline-grid; place-items: center; flex: none; width: 20px; height: 20px; color: var(--tone); }
.sb-toast-icon > svg { width: 20px; height: 20px; }
.sb-toast-spinner { width: 16px; height: 16px; box-sizing: border-box; border: 2px solid var(--gray-200); border-top-color: var(--brand-600); border-radius: var(--radius-full); animation: sb-toast-spin 700ms linear infinite; }
@keyframes sb-toast-spin { to { rotate: 1turn; } }

.sb-toast-text { display: grid; justify-items: start; gap: 4px; flex: 1; min-width: 0; }
.sb-toast .sb-toast-text p { margin: 0; }
.sb-toast .sb-toast-msg { font-weight: 600; color: var(--gray-900); text-wrap: pretty; }
.sb-toast .sb-toast-desc { color: var(--gray-600); text-wrap: pretty; }
.sb-toast-action { margin: 4px 0 0; padding: 0; border: 0; border-radius: var(--radius-sm); background: none; font: 600 var(--text-sm) var(--font); color: var(--brand-700); cursor: pointer; }
.sb-toast-action:hover { color: var(--brand-800); text-decoration: underline; text-underline-offset: 2px; }
.sb-toast-close { display: inline-grid; place-items: center; flex: none; width: 28px; height: 28px; margin: -4px 0 -4px auto; padding: 0; border: 0; border-radius: var(--radius-md); background: none; color: var(--gray-400); cursor: pointer; }
.sb-toast-close:hover { background: var(--gray-50); color: var(--gray-600); }
.sb-toast-close > svg { width: 20px; height: 20px; }
.sb-toast :is(.sb-toast-action, .sb-toast-close):focus-visible { outline: 2px solid var(--brand-600); outline-offset: 2px; }

/* Timer bar: 3 px along the bottom in the status colour, shrinking to nothing over autoClose. Paused on hover and focus. */
.sb-toast-progress {
  position: absolute; left: 0; right: 0; bottom: 0; height: 3px;
  background: var(--bar); transform-origin: left;
  animation: sb-toast-timer linear forwards;
}
.sb-toast-progress[data-hidden] { opacity: 0; }
@keyframes sb-toast-timer { from { scale: 1 1; } to { scale: 0 1; } }
.sb-toaster:hover .sb-toast-progress, .sb-toast:focus-within .sb-toast-progress { animation-play-state: paused; }

@media (prefers-reduced-motion: reduce) {
  .sb-toast { transition: none; }
  .sb-toast-spinner { animation-duration: 2s; }
}
`;

  // ---- Docs: static specimens, and buttons that fire the real toasts.
  const specimen = (type, message, o = {}) => `<div class="sb-toast" data-type="${type}" role="presentation">${
    ICONS[type] ? `<span class="sb-toast-icon" aria-hidden="true">${ICONS[type]}</span>` : ''
  }<div class="sb-toast-text"><p class="sb-toast-msg">${esc(message)}</p>${o.description ? `<p class="sb-toast-desc">${esc(o.description)}</p>` : ''}${
    o.action ? `<button class="sb-toast-action" type="button" tabindex="-1">${esc(o.action)}</button>` : ''
  }</div><button class="sb-toast-close" type="button" aria-label="Tutup notifikasi" tabindex="-1">${ICONS.close}</button>${
    type === 'loading' ? '' : `<div class="sb-toast-progress" style="animation: none; scale: ${o.left ?? 0.6} 1"></div>`
  }</div>`;
  const stage = html => `<div class="toast-stage">\n${html}\n</div>`;

  // A trigger button carries its call as JSON; one listener runs it on DS.toast.
  const fire = (label, call) => `<button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="sm" data-toast='${esc(JSON.stringify(call))}'>${esc(label)}</button>`;
  function runToast(e) {
    const btn = e.target.closest?.('[data-toast]');
    if (!btn || !DS.toast) return;
    const { type, message, o = {}, promise } = JSON.parse(btn.dataset.toast);
    if (o.action) o.action = { label: o.action, onClick: () => DS.toast.info('Membuka klaim…') };
    if (o.position) DS.toast.config({ position: o.position });
    if (promise) return DS.toast.promise(new Promise((ok, fail) => setTimeout(promise === 'fail' ? fail : ok, 1800)), { pending: 'Mengirim klaim…', success: 'Klaim terkirim', error: 'Gagal mengirim klaim' }, o);
    if (type === 'loading') {
      const id = DS.toast.loading(message, o);
      return setTimeout(() => DS.toast.update(id, { render: 'Analisis selesai', type: 'success', isLoading: false }), 2000);
    }
    type === 'default' ? DS.toast(message, o) : DS.toast[type](message, o);
  }
  document.addEventListener('click', runToast);

  const CASES = {
    default: 'Perubahan disimpan',
    info: 'Klaim baru dari RS Medika Utama',
    success: 'Klaim terkirim ke Advisor',
    warning: 'Sesi berakhir dalam 5 menit',
    error: 'Gagal mengirim klaim',
    loading: 'Menganalisis klaim…',
  };
  const DESC = { error: 'Periksa koneksi, lalu coba lagi.', default: 'KLM-0241 · RS Medika Utama' };
  const callFor = s => {
    if (s.type === 'promise') return { promise: 'ok', o: { position: s.position } };
    const o = { position: s.position };
    if (s.description) o.description = DESC[s.type] || DESC.default;
    if (s.action) o.action = 'Lihat Klaim';
    if (s.progress === false) o.hideProgressBar = true;
    return { type: s.type, message: CASES[s.type], o };
  };
  const codeFor = c => {
    if (c.promise) return `toast.promise(kirimKlaim(), {\n  pending: 'Mengirim klaim…',\n  success: 'Klaim terkirim',\n  error: 'Gagal mengirim klaim',\n});`;
    if (c.type === 'loading') return `const id = toast.loading('${c.message}');\n// …when the work is done:\ntoast.update(id, { render: 'Analisis selesai', type: 'success', isLoading: false });`;
    const opts = [];
    if (c.o.description) opts.push(`description: '${c.o.description}'`);
    if (c.o.action) opts.push(`action: { label: '${c.o.action}', onClick: bukaKlaim }`);
    if (c.o.hideProgressBar) opts.push('hideProgressBar: true');
    const fn = c.type === 'default' ? 'toast' : `toast.${c.type}`;
    return `${c.o.position && c.o.position !== 'top-right' ? `toast.config({ position: '${c.o.position}' });\n` : ''}${fn}('${c.message}'${opts.length ? `, {\n  ${opts.join(',\n  ')},\n}` : ''});`;
  };

  const anatomy = `<div class="toast-stage">
<div class="sb-toast" data-type="success" role="presentation" data-pin="1" data-pin-at="start" style="width: 360px; overflow: visible">
  <span class="sb-toast-icon" aria-hidden="true" data-pin="2">${ICONS.success}</span>
  <div class="sb-toast-text"><p class="sb-toast-msg"><span data-pin="3">Klaim terkirim</span></p><p class="sb-toast-desc"><span data-pin="4" data-pin-at="end">KLM-0241 · RS Medika Utama</span></p><span data-pin="5" data-pin-at="end"><button class="sb-toast-action" type="button" tabindex="-1">Lihat Klaim</button></span></div>
  <span data-pin="6"><button class="sb-toast-close" type="button" aria-label="Tutup notifikasi" tabindex="-1">${ICONS.close}</button></span>
  <div class="sb-toast-progress" style="animation: none; scale: .6 1; border-bottom-left-radius: 12px"></div>
  <span class="anat-at" data-pin="7" data-pin-at="bottom" style="position: absolute; left: 60px; bottom: 0; width: 1px; height: 3px"></span>
</div>
</div>`;

  DS.components.push({
    slug: 'toast',
    name: 'Toast',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-08',
    description: 'Short feedback after an action that closes itself: a white card with a status icon and a timer bar. The react-toastify API (toast.success, toast.error, toast.loading + toast.update, toast.promise) in plain JS.',
    css: CSS,
    cssFile: 'toast.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Pick a type and press the button. The bar along the bottom is the timer; hover the toast to pause it.' },
          {
            type: 'playground',
            initial: { type: 'success', position: 'top-right', description: false, action: false, progress: true },
            controls: [
              { key: 'type', label: 'Type', type: 'segmented', options: [['default', 'Default'], ['info', 'Info'], ['success', 'Success'], ['warning', 'Warning'], ['error', 'Error'], ['loading', 'Loading'], ['promise', 'Promise']] },
              { key: 'position', label: 'Position', type: 'segmented', options: [['top-right', 'Top right'], ['top-center', 'Top center'], ['bottom-right', 'Bottom right'], ['bottom-center', 'Bottom center']] },
              { key: 'description', label: 'Description', type: 'toggle' },
              { key: 'action', label: 'Action', type: 'toggle' },
              { key: 'progress', label: 'Progress bar', type: 'toggle' },
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
              ['An action finished and the user can carry on', 'Success toast: "Klaim terkirim"'],
              ['Something arrived or changed elsewhere', 'Info toast: "Klaim baru dari RS Medika Utama"'],
              ['An action runs in the background', '`toast.loading`, then `toast.update` to success or error (or `toast.promise`)'],
              ['Something failed that the user can retry', 'Error toast with a description and an action'],
              ['A field or form is wrong', 'Not a toast: show it at the field'],
              ['The user must decide before going on', 'Not a toast: a Modal'],
            ],
          },
          {
            type: 'list',
            items: [
              'Say what happened, in a few words and past tense: "Klaim terkirim", not "Klaim berhasil dikirim!". No exclamation marks.',
              'At most one action, and only one that is also possible elsewhere (Lihat Klaim, Coba Lagi).',
              'One toast per action. Use `toastId` for events that can repeat, so they do not pile up.',
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
              ['1', 'Container', '`white`, 1 px `gray-200` border, radius 12, `shadow-lg`, padding `16 12 16 16`, gap 12, 360 wide (screen minus 32 on phones). Top right, 16 from the edges, 12 between toasts.'],
              ['2', 'Icon', '20 px in the status colour: info `brand-600`, success `success-600`, warning `warning-600`, error `error-600`; loading a 16 px spinner. None for a default toast.'],
              ['3', 'Message', 'Text sm / Semibold `gray-900`.'],
              ['4', 'Description', 'Optional, Text sm / Regular `gray-600`, 4 under the message.'],
              ['5', 'Action', 'Optional text button, Text sm / Semibold `brand-700`. Closes the toast.'],
              ['6', 'Close', '28 px hit area, 20 px × `gray-400`; hover `gray-50` fill. On by default.'],
              ['7', 'Progress bar', '3 px along the bottom in the status colour (`500` step; `brand-600` for default and info). It is the timer: it shrinks to nothing over `autoClose`, then the toast closes. Pauses on hover and focus.'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'example', html: stage([specimen('default', 'Perubahan disimpan', { left: 0.8 }), specimen('info', 'Klaim baru dari RS Medika Utama', { left: 0.7, action: 'Lihat Klaim' }), specimen('success', 'Klaim terkirim ke Advisor', { left: 0.55 }), specimen('warning', 'Sesi berakhir dalam 5 menit', { left: 0.4 }), specimen('error', 'Gagal mengirim klaim', { description: 'Periksa koneksi, lalu coba lagi.', action: 'Coba Lagi', left: 0.3 }), specimen('loading', 'Menganalisis klaim…')].join('\n')), code: false },
          { type: 'example', html: `<div class="toast-live">\n${['default', 'info', 'success', 'warning', 'error', 'loading'].map(t => fire(t[0].toUpperCase() + t.slice(1), callFor({ type: t }))).join('\n')}\n${fire('Promise', { promise: 'ok' })}\n${fire('Promise, gagal', { promise: 'fail' })}\n</div>`, code: false, caption: 'Fire the real toasts.' },
        ],
      },
      {
        id: 'api',
        title: 'API',
        blocks: [
          { type: 'p', text: 'The same calls as react-toastify, so code and habits carry over. `toast.js` sets `window.toast`; `toast.config()` does what `<ToastContainer>` props do.' },
          {
            type: 'table',
            head: ['Call', 'Does'],
            rows: [
              ["`toast('Pesan', options)`", 'A default toast, no icon. Returns its id'],
              ["`toast.info` / `.success` / `.warning` / `.error`", 'The same with the status icon and bar colour. Errors are announced at once (`role=\"alert\"`)'],
              ["`toast.loading('Pesan')`", 'Spinner, no timer; stays until updated or dismissed'],
              ["`toast.update(id, { render, type, isLoading: false, autoClose })`", 'Changes a toast in place, e.g. loading → success; the timer starts again'],
              ['`toast.promise(p, { pending, success, error })`', 'Loading while `p` runs, then success or error in the same toast. `success` and `error` may be functions of the result'],
              ['`toast.dismiss(id)` / `toast.dismiss()`', 'Closes one, or all'],
              ['`toast.isActive(id)`', 'Whether that toast is on screen'],
              ["`toast.config({ position, autoClose, hideProgressBar, closeButton, max })`", 'Defaults for every toast: `top-right`, 5000 ms, bar shown, × shown, 5 at most'],
            ],
          },
          {
            type: 'table',
            head: ['Option', 'Type', 'What'],
            rows: [
              ['`toastId`', 'string', 'Your own id; a second toast with the same id is ignored (no duplicates)'],
              ['`autoClose`', 'ms or `false`', 'How long it stays; `false` keeps it until closed'],
              ['`hideProgressBar`', 'boolean', 'Hides the bar; the timer still runs'],
              ['`closeButton`', 'boolean', 'Shows the × (default true)'],
              ['`description`', 'string', 'A second line'],
              ['`action`', '`{ label, onClick }`', 'One text button; closes the toast after the click'],
              ['`onClick`, `onClose`', 'function', 'Called on a click on the toast, and after it has closed'],
            ],
          },
          { type: 'code', lang: 'js', code: `const id = toast.loading('Menganalisis klaim…');\ntry {\n  await analisis(klaim);\n  toast.update(id, { render: 'Analisis selesai', type: 'success', isLoading: false });\n} catch {\n  toast.update(id, { render: 'Analisis gagal', type: 'error', isLoading: false, description: 'Coba lagi dalam beberapa menit.' });\n}` },
        ],
      },
      {
        id: 'behaviour',
        title: 'Behaviour',
        blocks: [
          {
            type: 'list',
            items: [
              'Slides in 16 px from its side (8 px from the top or bottom for centre positions) and fades in over 200 ms; leaves by fading and shrinking in 150 ms.',
              'The bar is the timer: a CSS animation as long as `autoClose`. When it ends, the toast closes. Hovering any toast or focusing inside one pauses it; it resumes where it stopped.',
              'New toasts stack under the older ones, 12 apart. Five at most; the oldest closes when a sixth arrives.',
              'A toast never takes focus, so typing is never interrupted.',
              'With reduced motion, toasts appear and leave without sliding; the bar still shows the time left.',
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
              { kind: 'dont', html: stage(specimen('warning', 'Hapus 12 klaim?', { action: 'Hapus' })), text: 'A decision in a toast. It closes before people read it; use a Modal.' },
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
              'Toasts do not take focus. Anything a toast offers (Lihat Klaim, Coba Lagi) must also be possible elsewhere, because it may be gone before someone reaches it.',
              'The timer pauses on hover and on focus inside the toast. Give toasts with an action or a long message a longer `autoClose`, or `autoClose: false`.',
              'Message `gray-900` on white is 17.75:1, description `gray-600` 7.56:1, action `brand-700` 6.61:1. Icons are 3:1 or more.',
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

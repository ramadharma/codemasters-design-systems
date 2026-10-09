---
name: Toast
slug: toast
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-08
requires: tokens.css
---

# Toast

Short feedback after an action that closes itself: a white card with a status icon and a timer bar. The react-toastify API (toast.success, toast.error, toast.loading + toast.update, toast.promise) in plain JS.

## Usage

| Situation | Use |
| --- | --- |
| An action finished and the user can carry on | Success toast: "Klaim terkirim" |
| Something arrived or changed elsewhere | Info toast: "Klaim baru dari RS Medika Utama" |
| An action runs in the background | `toast.loading`, then `toast.update` to success or error (or `toast.promise`) |
| Something failed that the user can retry | Error toast with a description and an action |
| A field or form is wrong | Not a toast: show it at the field |
| The user must decide before going on | Not a toast: a Modal |

- Say what happened, in a few words and past tense: "Klaim terkirim", not "Klaim berhasil dikirim!". No exclamation marks.
- At most one action, and only one that is also possible elsewhere (Lihat Klaim, Coba Lagi).
- One toast per action. Use `toastId` for events that can repeat, so they do not pile up.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | `white`, 1 px `gray-200` border, radius 12, `shadow-lg`, padding `16 12 16 16`, gap 12, 360 wide (screen minus 32 on phones). Top right, 16 from the edges, 12 between toasts. |
| 2 | Icon | 20 px in the status colour: info `brand-600`, success `success-600`, warning `warning-600`, error `error-600`; loading a 16 px spinner. None for a default toast. |
| 3 | Message | Text sm / Semibold `gray-900`. |
| 4 | Description | Optional, Text sm / Regular `gray-600`, 4 under the message. |
| 5 | Action | Optional text button, Text sm / Semibold `brand-700`. Closes the toast. |
| 6 | Close | 28 px hit area, 20 px × `gray-400`; hover `gray-50` fill. On by default. |
| 7 | Progress bar | 3 px along the bottom in the status colour (`500` step; `brand-600` for default and info). It is the timer: it shrinks to nothing over `autoClose`, then the toast closes. Pauses on hover and focus. |

## API

The same calls as react-toastify, so code and habits carry over. `toast.js` sets `window.toast`; `toast.config()` does what `<ToastContainer>` props do.

| Call | Does |
| --- | --- |
| `toast('Pesan', options)` | A default toast, no icon. Returns its id |
| `toast.info` / `.success` / `.warning` / `.error` | The same with the status icon and bar colour. Errors are announced at once (`role="alert"`) |
| `toast.loading('Pesan')` | Spinner, no timer; stays until updated or dismissed |
| `toast.update(id, { render, type, isLoading: false, autoClose })` | Changes a toast in place, e.g. loading → success; the timer starts again |
| `toast.promise(p, { pending, success, error })` | Loading while `p` runs, then success or error in the same toast. `success` and `error` may be functions of the result |
| `toast.dismiss(id)` / `toast.dismiss()` | Closes one, or all |
| `toast.isActive(id)` | Whether that toast is on screen |
| `toast.config({ position, autoClose, hideProgressBar, closeButton, max })` | Defaults for every toast: `top-right`, 5000 ms, bar shown, × shown, 5 at most |

| Option | Type | What |
| --- | --- | --- |
| `toastId` | string | Your own id; a second toast with the same id is ignored (no duplicates) |
| `autoClose` | ms or `false` | How long it stays; `false` keeps it until closed |
| `hideProgressBar` | boolean | Hides the bar; the timer still runs |
| `closeButton` | boolean | Shows the × (default true) |
| `description` | string | A second line |
| `action` | `{ label, onClick }` | One text button; closes the toast after the click |
| `onClick`, `onClose` | function | Called on a click on the toast, and after it has closed |

```js
const id = toast.loading('Menganalisis klaim…');
try {
  await analisis(klaim);
  toast.update(id, { render: 'Analisis selesai', type: 'success', isLoading: false });
} catch {
  toast.update(id, { render: 'Analisis gagal', type: 'error', isLoading: false, description: 'Coba lagi dalam beberapa menit.' });
}
```

## Behaviour

- Slides in 16 px from its side (8 px from the top or bottom for centre positions) and fades in over 200 ms; leaves by fading and shrinking in 150 ms.
- The bar is the timer: a CSS animation as long as `autoClose`. When it ends, the toast closes. Hovering any toast or focusing inside one pauses it; it resumes where it stopped.
- New toasts stack under the older ones, 12 apart. Five at most; the oldest closes when a sixth arrives.
- A toast never takes focus, so typing is never interrupted.
- With reduced motion, toasts appear and leave without sliding; the bar still shows the time left.

## Do and don't

**Do:** A few words, past tense.

```html
<div class="toast-stage">
<div class="sb-toast" data-type="success" role="presentation"><span class="sb-toast-icon" aria-hidden="true"><svg aria-hidden="true"><!-- check-circle --></svg></span><div class="sb-toast-text"><p class="sb-toast-msg">Klaim terkirim</p></div><button class="sb-toast-close" type="button" aria-label="Tutup notifikasi" tabindex="-1"><svg aria-hidden="true"><!-- x --></svg></button><div class="sb-toast-progress" style="animation: none; scale: 0.6 1"></div></div>
</div>
```

**Don't:** A sentence with exclamation marks. The icon already says it went well.

```html
<div class="toast-stage">
<div class="sb-toast" data-type="success" role="presentation"><span class="sb-toast-icon" aria-hidden="true"><svg aria-hidden="true"><!-- check-circle --></svg></span><div class="sb-toast-text"><p class="sb-toast-msg">Selamat! Klaim Anda telah berhasil dikirim ke Advisor untuk ditinjau!</p></div><button class="sb-toast-close" type="button" aria-label="Tutup notifikasi" tabindex="-1"><svg aria-hidden="true"><!-- x --></svg></button><div class="sb-toast-progress" style="animation: none; scale: 0.6 1"></div></div>
</div>
```

**Do:** One action the user can also find elsewhere.

```html
<div class="toast-stage">
<div class="sb-toast" data-type="error" role="presentation"><span class="sb-toast-icon" aria-hidden="true"><svg aria-hidden="true"><!-- alert-circle --></svg></span><div class="sb-toast-text"><p class="sb-toast-msg">Gagal mengirim klaim</p><button class="sb-toast-action" type="button" tabindex="-1">Coba Lagi</button></div><button class="sb-toast-close" type="button" aria-label="Tutup notifikasi" tabindex="-1"><svg aria-hidden="true"><!-- x --></svg></button><div class="sb-toast-progress" style="animation: none; scale: 0.6 1"></div></div>
</div>
```

**Don't:** A decision in a toast. It closes before people read it; use a Modal.

```html
<div class="toast-stage">
<div class="sb-toast" data-type="warning" role="presentation"><span class="sb-toast-icon" aria-hidden="true"><svg aria-hidden="true"><!-- alert --></svg></span><div class="sb-toast-text"><p class="sb-toast-msg">Hapus 12 klaim?</p><button class="sb-toast-action" type="button" tabindex="-1">Hapus</button></div><button class="sb-toast-close" type="button" aria-label="Tutup notifikasi" tabindex="-1"><svg aria-hidden="true"><!-- x --></svg></button><div class="sb-toast-progress" style="animation: none; scale: 0.6 1"></div></div>
</div>
```

## Accessibility

- The toasts live in one `aria-live="polite"` region that is in the page from the start, so screen readers announce each one. Error toasts are `role="alert"`, announced at once.
- Toasts do not take focus. Anything a toast offers (Lihat Klaim, Coba Lagi) must also be possible elsewhere, because it may be gone before someone reaches it.
- The timer pauses on hover and on focus inside the toast. Give toasts with an action or a long message a longer `autoClose`, or `autoClose: false`.
- Message `gray-900` on white is 17.75:1, description `gray-600` 7.56:1, action `brand-700` 6.61:1. Icons are 3:1 or more.

## Code

Load `tokens.css` and `toast.css`, then `toast.js` once. Call `toast()` from anywhere.

`toast.css`

```css
/* Toast, Codemasters Design System
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
```

### Runtime

`toast.js`

```js
// Toast: the react-toastify API in plain JS. Load once; then call toast() anywhere.
//   toast('Perubahan disimpan')             toast.success('Klaim terkirim')
//   toast.info('Klaim baru masuk')          toast.warning('Sesi berakhir dalam 5 menit')
//   toast.error('Gagal mengirim klaim', { description: 'Periksa koneksi, lalu coba lagi.' })
//   const id = toast.loading('Mengirim klaim…');
//   toast.update(id, { render: 'Klaim terkirim', type: 'success', isLoading: false })
//   toast.promise(kirimKlaim(), { pending: 'Mengirim klaim…', success: 'Klaim terkirim', error: 'Gagal mengirim klaim' })
//   toast.dismiss(id)   toast.dismiss()   toast.isActive(id)
//   toast.config({ position: 'bottom-right', autoClose: 3000 })   // like <ToastContainer>
// Options: toastId, autoClose (ms or false), hideProgressBar, closeButton, description, action { label, onClick }, onClick, onClose.
window.toast = (function installToast(ICONS) {
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
})({
  "info": "<svg data-i=\"info\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 16v-4M12 8h.01\"/></svg>",
  "success": "<svg data-i=\"check-circle\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/><path d=\"M22 4 12 14.01l-3-3\"/></svg>",
  "warning": "<svg data-i=\"alert\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01\"/></svg>",
  "error": "<svg data-i=\"alert-circle\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 8v4M12 16h.01\"/></svg>",
  "loading": "<span class=\"sb-toast-spinner\"></span>",
  "close": "<svg data-i=\"x\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M18 6 6 18M6 6l12 12\"/></svg>"
});
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-200: #eaecf0;
  --gray-400: #98a2b3;
  --gray-600: #475467;
  --gray-900: #101828;
  --brand-600: #3966e0;
  --brand-700: #2e51cd;
  --brand-800: #2942a7;
  --error-500: #f04438;
  --error-600: #d92d20;
  --warning-500: #f79009;
  --warning-600: #dc6803;
  --success-500: #12b76a;
  --success-600: #039855;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
  --shadow-lg: 0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Timeless Sans', sans-serif;
  --text-sm: 14px/20px;
}
```

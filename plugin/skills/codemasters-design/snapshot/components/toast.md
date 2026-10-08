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

Short feedback after an action that then goes away: "Klaim terkirim". The react-hot-toast API (toast.success, toast.error, toast.loading, toast.promise) in plain JS, in the design-system look.

## Usage

| Situation | Use |
| --- | --- |
| An action finished and the user can carry on | Toast: "Klaim terkirim" |
| An action is running in the background | `toast.loading`, then the same toast turns into success or error (`toast.promise`) |
| Something went wrong that the user can retry | Error toast with an action ("Coba Lagi") |
| A field or form is wrong | Not a toast: show it at the field |
| The user must decide before going on | Not a toast: a Modal |
| A state that stays (offline, read-only) | Not a toast: a banner on the page |

- Say what happened, in a few words and past tense: "Klaim terkirim", not "Klaim berhasil dikirim!". No exclamation marks.
- At most one action, and only one that is also possible elsewhere (Batalkan, Coba Lagi, Lihat).
- One toast per action. Three at most on screen; older ones close.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Container | `gray-900`, radius 8, `shadow-lg`, padding `10 12 10 14`, gap 12, min height 44, max width 420. Bottom centre, 24 from the edge, 8 between toasts. |
| 2 | Icon | 20 px. Success `success-400`, error `error-400`, warning `warning-400`, loading a 16 px spinner. None for a blank toast. |
| 3 | Message | Text sm / Medium `white`. One line where possible. |
| 4 | Description | Optional second line, Text sm / Regular `gray-300`. |
| 5 | Action | Optional text button, Text sm / Semibold `brand-300`, hover `gray-800` fill. Closes the toast. |
| 6 | Close | Optional 20 px ×, `gray-400`, hover `white`. Add it to toasts that stay longer or forever. |

## API

The same calls as react-hot-toast, so code and habits carry over. `toast.js` sets `window.toast`.

| Call | Does | Default duration |
| --- | --- | --- |
| `toast('Pesan')` | A blank toast, no icon | 4 s |
| `toast.success('Pesan')` | Green check | 3 s |
| `toast.error('Pesan')` | Red alert, announced at once (`role="alert"`) | 5 s |
| `toast.warning('Pesan')` | Amber warning | 5 s |
| `toast.loading('Pesan')` | Spinner; stays until updated or dismissed. Returns the id | stays |
| `toast.success('Pesan', { id })` | Updates the toast with that id in place (loading → success) | — |
| `toast.promise(p, { loading, success, error })` | Loading while `p` runs, then success or error in the same toast. `success` and `error` may be functions of the result | — |
| `toast.dismiss(id)` / `toast.dismiss()` | Closes one, or all | — |
| `toast.config({ position: 'top-right' })` | Moves all toasts: `bottom-center` (default), `bottom-right`, `bottom-left`, `top-center`, `top-right`, `top-left` | — |

| Option | Type | What |
| --- | --- | --- |
| `id` | string | Reuse to update a toast instead of adding one |
| `duration` | ms | Override the default; `Infinity` keeps it until dismissed |
| `description` | string | Second line |
| `action` | `{ label, onClick }` | One text button; the toast closes after the click |
| `closeButton` | boolean | Shows the × |

```js
const id = toast.loading('Menganalisis klaim…');
try {
  await analisis(klaim);
  toast.success('Analisis selesai', { id });
} catch {
  toast.error('Analisis gagal', { id, action: { label: 'Coba Lagi', onClick: ulangi } });
}
```

## Behaviour

- Enters from 8 px below (above for top positions) and 96 % scale in 200 ms; leaves by fading and shrinking in 150 ms.
- New toasts sit nearest the screen edge; the others move up. Three at most; the oldest closes when a fourth arrives.
- Hovering or focusing the toasts pauses every timer; they resume with the time that was left.
- A toast never takes focus, so typing is never interrupted.
- With reduced motion, toasts appear and disappear without movement.

## Do and don't

**Do:** A few words, past tense.

```html
<div class="toast-stage">
<div class="sb-toast" data-type="success" role="presentation"><span class="sb-toast-icon" aria-hidden="true"><svg aria-hidden="true"><!-- check-circle --></svg></span><div class="sb-toast-text"><p class="sb-toast-msg">Klaim terkirim</p></div></div>
</div>
```

**Don't:** A sentence with exclamation marks. The icon already says it went well.

```html
<div class="toast-stage">
<div class="sb-toast" data-type="success" role="presentation"><span class="sb-toast-icon" aria-hidden="true"><svg aria-hidden="true"><!-- check-circle --></svg></span><div class="sb-toast-text"><p class="sb-toast-msg">Selamat! Klaim Anda telah berhasil dikirim ke Advisor untuk ditinjau!</p></div></div>
</div>
```

**Do:** One action the user can also find elsewhere.

```html
<div class="toast-stage">
<div class="sb-toast" data-type="error" role="presentation"><span class="sb-toast-icon" aria-hidden="true"><svg aria-hidden="true"><!-- alert-circle --></svg></span><div class="sb-toast-text"><p class="sb-toast-msg">Gagal mengirim klaim</p></div><button class="sb-toast-action" type="button" tabindex="-1">Coba Lagi</button></div>
</div>
```

**Don't:** A decision in a toast. It disappears before people read it; use a Modal.

```html
<div class="toast-stage">
<div class="sb-toast" data-type="warning" role="presentation"><span class="sb-toast-icon" aria-hidden="true"><svg aria-hidden="true"><!-- alert --></svg></span><div class="sb-toast-text"><p class="sb-toast-msg">Hapus 12 klaim?</p></div><button class="sb-toast-action" type="button" tabindex="-1">Hapus</button></div>
</div>
```

## Accessibility

- The toasts live in one `aria-live="polite"` region that is in the page from the start, so screen readers announce each one. Error toasts are `role="alert"`, announced at once.
- Toasts do not take focus. Anything a toast offers (Batalkan, Coba Lagi) must also be possible elsewhere, because the toast may be gone before someone reaches it.
- Timers pause on hover and focus. Toasts with an action or important text get a longer `duration` or `closeButton`.
- Message `white` on `gray-900` is 17.75:1; description `gray-300` 12.04:1; action `brand-300` 9.96:1. Icons: `success-400` 9.28:1, `error-400` 6.37:1, `warning-400` 9.64:1.

## Code

Load `tokens.css` and `toast.css`, then `toast.js` once. Call `toast()` from anywhere.

`toast.css`

```css
/* Toast, Codemasters Design System
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
```

### Runtime

`toast.js`

```js
// Toast: the react-hot-toast API in plain JS. Load once; then call toast() anywhere.
//   toast('Disimpan')                         toast.success('Klaim terkirim')
//   toast.error('Gagal mengirim', { description: 'Periksa koneksi lalu coba lagi.' })
//   const id = toast.loading('Mengirim…');    toast.success('Klaim terkirim', { id })
//   toast.promise(fetch(url), { loading: 'Mengirim…', success: 'Klaim terkirim', error: 'Gagal mengirim' })
//   toast('Klaim dihapus', { action: { label: 'Batalkan', onClick: undo } })
//   toast.dismiss(id)   toast.dismiss()   toast.config({ position: 'top-right' })
// Options: id, duration (ms, Infinity to stay), description, action { label, onClick }, closeButton.
window.toast = (function installToast(ICONS) {
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
})({
  "success": "<svg data-i=\"check-circle\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/><path d=\"M22 4 12 14.01l-3-3\"/></svg>",
  "error": "<svg data-i=\"alert-circle\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 8v4M12 16h.01\"/></svg>",
  "warning": "<svg data-i=\"alert\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01\"/></svg>",
  "loading": "<span class=\"sb-toast-spinner\"></span>",
  "close": "<svg data-i=\"x\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M18 6 6 18M6 6l12 12\"/></svg>"
});
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-300: #d0d5dd;
  --gray-400: #98a2b3;
  --gray-600: #475467;
  --gray-800: #1d2939;
  --gray-900: #101828;
  --brand-300: #9fc5f6;
  --error-400: #f97066;
  --warning-400: #fdb022;
  --success-400: #32d583;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-full: 9999px;
  --shadow-lg: 0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --text-sm: 14px/20px;
}
```

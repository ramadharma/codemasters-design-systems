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

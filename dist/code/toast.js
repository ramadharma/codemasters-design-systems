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

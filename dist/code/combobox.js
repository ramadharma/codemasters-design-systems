// Combobox: type to filter (or, with data-async, to ask the page for results), ↑ ↓ to move, Enter or a click to pick,
// Esc to close; Backspace in an empty field removes the last chip. Fires "sb-cb-change" with { values } and, with
// data-async, "sb-cb-search" with { query }: answer it with cbResults(combobox, items) or cbResults(combobox, null) on error.
const cbEsc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const cbSvg = (d, cls) => `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
const CB_PATH = {
  "check": "M20 6 9 17l-5-5",
  "x": "M18 6 6 18M6 6l12 12",
  "loader": "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
  "alert": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 8v4M12 16h.01"
};
const cbOption = (item, selected, id) =>
    `<div class="sb-dd-opt" role="option" id="${id}" data-value="${cbEsc(item.value)}" aria-selected="${selected}"><span class="sb-dd-main">${item.initials ? `<span class="sb-dd-avatar" aria-hidden="true">${cbEsc(item.initials)}</span>` : ''}<span class="sb-dd-label">${cbEsc(item.label)}</span>${item.sub ? `<span class="sb-dd-sup">${cbEsc(item.sub)}</span>` : ''}</span>${cbSvg(CB_PATH.check, 'sb-dd-check')}</div>`;
const cbChip = (value, label) =>
    `<li class="sb-cb-chip" data-value="${cbEsc(value)}"><span class="sb-badge" data-size="md" data-icon="x-close">${cbEsc(label)}<button class="sb-badge-x" type="button" aria-label="Hapus ${cbEsc(label)}">${cbSvg(CB_PATH.x)}</button></span></li>`;
const cbFind = (root, value) => [...root.querySelectorAll('[data-value]')].find(el => el.dataset.value === value);
const cbVisible = p => [...p.list.querySelectorAll('[role="option"]')].filter(o => !o.hidden);
const cbValues = p => ('multiple' in p.cb.dataset ? [...p.chips.children].map(c => c.dataset.value) : p.cb.dataset.value ? [p.cb.dataset.value] : []);
function cbParts(el) {
  const cb = el.closest('.sb-cb');
  return cb && { cb, input: cb.querySelector('input[role="combobox"]'), panel: cb.querySelector('.sb-cb-panel'), list: cb.querySelector('[role="listbox"]'), chips: cb.querySelector('.sb-cb-chips') };
}
function cbActivate(p, opt) {
  p.list.querySelectorAll('[data-active]').forEach(o => o.removeAttribute('data-active'));
  if (!opt) return p.input.removeAttribute('aria-activedescendant');
  opt.setAttribute('data-active', '');
  p.input.setAttribute('aria-activedescendant', opt.id);
  opt.scrollIntoView({ block: 'nearest' });
}
function cbOpen(p, open) {
  p.input.setAttribute('aria-expanded', String(open));
  p.panel.hidden = !open;
  if (!open) cbActivate(p, null);
}
function cbStatus(p, kind, text) {
  const s = p.panel.querySelector('.sb-cb-status');
  const msg = { loading: [CB_PATH.loader, 'Mencari…'], empty: [null, 'Tidak ada yang cocok'], error: [CB_PATH.alert, 'Gagal memuat. Ketik lagi untuk mencoba.'], hint: [null, text] }[kind];
  s.hidden = !kind;
  s.dataset.kind = kind || '';
  s.innerHTML = kind ? `${msg[0] ? cbSvg(msg[0], kind === 'loading' ? 'sb-cb-spin' : '') : ''}${cbEsc(msg[1])}` : '';
}
function cbCreateRow(p, q) {
  const row = p.list.querySelector('.sb-cb-create');
  if (!row) return false;
  const exact = [...p.list.querySelectorAll('[role="option"]:not(.sb-cb-create) .sb-dd-label')].some(l => l.textContent.toLowerCase() === q.toLowerCase());
  row.hidden = !q || exact;
  row.querySelector('.sb-dd-label').textContent = `Tambah “${q}”`;
  return !row.hidden;
}
function cbFilter(p) {
  const q = p.input.value.trim();
  p.list.querySelectorAll('[role="option"]:not(.sb-cb-create)').forEach(o => (o.hidden = !o.textContent.toLowerCase().includes(q.toLowerCase())));
  const create = cbCreateRow(p, q);
  cbStatus(p, cbVisible(p).length || create ? null : 'empty');
}
function cbResults(cb, items) {
  const p = cbParts(cb), picked = cbValues(p), create = p.list.querySelector('.sb-cb-create');
  p.list.querySelectorAll('[role="option"]:not(.sb-cb-create)').forEach(o => o.remove());
  p.list.removeAttribute('aria-busy');
  if (!items) { if (create) create.hidden = true; return cbStatus(p, 'error'); }
  (create || p.list).insertAdjacentHTML(create ? 'beforebegin' : 'beforeend', items.map((it, i) => cbOption(it, picked.includes(it.value), `${p.list.id}-r${i}`)).join(''));
  const q = p.input.value.trim(), withCreate = cbCreateRow(p, q);
  cbStatus(p, items.length || withCreate ? null : 'empty');
}
function cbChanged(p) {
  p.cb.dispatchEvent(new CustomEvent('sb-cb-change', { bubbles: true, detail: { values: cbValues(p) } }));
}
function cbRemove(p, value) {
  cbFind(p.chips, value)?.remove();
  cbFind(p.list, value)?.setAttribute('aria-selected', 'false');
  p.input.focus();
  cbChanged(p);
}
function cbPick(p, opt) {
  if (opt.matches('.sb-cb-create')) {
    const label = p.input.value.trim();
    opt.insertAdjacentHTML('beforebegin', cbOption({ value: label, label }, false, `${p.list.id}-n${p.list.children.length}`));
    opt = opt.previousElementSibling;
  }
  const value = opt.dataset.value, label = opt.querySelector('.sb-dd-label').textContent;
  if (!('multiple' in p.cb.dataset)) {
    p.list.querySelectorAll('[aria-selected="true"]').forEach(o => o.setAttribute('aria-selected', 'false'));
    opt.setAttribute('aria-selected', 'true');
    p.cb.dataset.value = value;
    p.input.value = label;
    cbOpen(p, false);
    return cbChanged(p);
  }
  const on = opt.getAttribute('aria-selected') !== 'true';
  opt.setAttribute('aria-selected', String(on));
  if (on) p.chips.insertAdjacentHTML('beforeend', cbChip(value, label));
  else cbFind(p.chips, value)?.remove();
  if (!('async' in p.cb.dataset)) { p.input.value = ''; cbFilter(p); } // async keeps the query, so the results stay
  p.input.focus();
  cbActivate(p, cbFind(p.list, value));
  cbChanged(p);
}
function cbShow(p) {
  cbOpen(p, true);
  if (!('async' in p.cb.dataset)) cbFilter(p);
  else if (!p.input.value.trim()) cbStatus(p, 'hint', 'Ketik nama atau email');
}
function cbClick(e) {
  const cb = e.target.closest?.('.sb-cb');
  document.querySelectorAll('.sb-cb').forEach(o => o !== cb && !o.querySelector('.sb-cb-panel').hidden && cbOpen(cbParts(o), false));
  if (!cb || cb.querySelector('input').disabled) return;
  const p = cbParts(cb), x = e.target.closest('.sb-badge-x'), opt = e.target.closest('[role="option"]');
  if (x) return cbRemove(p, x.closest('.sb-cb-chip').dataset.value);
  if (opt) return cbPick(p, opt);
  if (e.target.closest('.sb-cb-field')) { p.input.focus(); if (p.panel.hidden) cbShow(p); }
}
function cbInput(e) {
  const input = e.target.closest?.('.sb-cb input[role="combobox"]');
  if (!input) return;
  const p = cbParts(input), q = input.value.trim();
  cbOpen(p, true);
  if (!('async' in p.cb.dataset)) return cbFilter(p), cbActivate(p, cbVisible(p)[0]);
  clearTimeout(p.cb.cbTimer);
  if (!q) { cbResults(p.cb, []); return cbStatus(p, 'hint', 'Ketik nama atau email'); }
  p.list.setAttribute('aria-busy', 'true');
  cbStatus(p, 'loading');
  p.cb.cbTimer = setTimeout(() => p.cb.dispatchEvent(new CustomEvent('sb-cb-search', { bubbles: true, detail: { query: q } })), 250); // wait for a pause in typing
}
function cbKeydown(e) {
  const input = e.target.closest?.('.sb-cb input[role="combobox"]');
  if (!input) return;
  const p = cbParts(input), open = !p.panel.hidden, opts = cbVisible(p), i = opts.findIndex(o => o.hasAttribute('data-active'));
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (!open) return cbShow(p);
    if (opts.length) cbActivate(p, opts[(i + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length]);
  } else if (e.key === 'Enter' && open && i >= 0) {
    e.preventDefault();
    cbPick(p, opts[i]);
  } else if (e.key === 'Escape' && open) {
    e.preventDefault();
    cbOpen(p, false);
  } else if (e.key === 'Backspace' && !input.value && 'multiple' in p.cb.dataset && p.chips.lastElementChild) {
    cbRemove(p, p.chips.lastElementChild.dataset.value); // the last chip goes, as in most tag fields
  } else if (e.key === 'Tab') {
    cbOpen(p, false);
  }
}
document.addEventListener('click', cbClick);
document.addEventListener('input', cbInput);
document.addEventListener('keydown', cbKeydown);

// Date picker: click the field or the calendar button, or press ↓ in the field, to open. In the calendar:
// ← → ↑ ↓ move by day and week, Home / End to the week's ends, PageUp / PageDown by month (with Shift by year),
// Enter or Space picks, Esc closes. A range needs Terapkan. Every committed value fires "sb-date-change".
const dpIso = d => d.toISOString().slice(0, 10);
const dpDate = s => new Date(`${s}T00:00:00Z`);
const dpAdd = (s, days) => { const d = dpDate(s); d.setUTCDate(d.getUTCDate() + days); return dpIso(d); };
const dpFirst = s => `${s.slice(0, 8)}01`;
const dpMonthAdd = (s, n) => { const d = dpDate(dpFirst(s)); d.setUTCMonth(d.getUTCMonth() + n); return dpIso(d); };
const dpShift = (s, n) => { const first = dpMonthAdd(s, n), last = dpAdd(dpMonthAdd(first, 1), -1); return `${first.slice(0, 8)}${String(Math.min(+s.slice(8), +last.slice(8))).padStart(2, '0')}`; };
const dpFmt = (s, o) => dpDate(s).toLocaleDateString('id-ID', { timeZone: 'UTC', ...o });
const dpToday = () => { const d = new Date(); return dpIso(new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))); };
const dpText = s => s.split('-').reverse().join('/');
const dpPresets = t => [
    ['Hari ini', t, t], ['Kemarin', dpAdd(t, -1), dpAdd(t, -1)], ['7 hari terakhir', dpAdd(t, -6), t],
    ['30 hari terakhir', dpAdd(t, -29), t], ['Bulan ini', dpFirst(t), t], ['Bulan lalu', dpMonthAdd(t, -1), dpAdd(dpFirst(t), -1)],
  ];
function dpParse(v) {
  const m = v.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!m) return null;
  const s = `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`, d = dpDate(s);
  return !Number.isNaN(+d) && dpIso(d) === s ? s : null; // rejects 31/02
}
function dpMonth(first, st, i, n) {
  const WEEK = [['Sen', 'Senin'], ['Sel', 'Selasa'], ['Rab', 'Rabu'], ['Kam', 'Kamis'], ['Jum', 'Jumat'], ['Sab', 'Sabtu'], ['Min', 'Minggu']];
  const chev = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  const nav = step => `<button class="sb-dp-nav" type="button" data-step="${step}" aria-label="${step < 0 ? 'Bulan sebelumnya' : 'Bulan berikutnya'}">${chev(step < 0 ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6')}</button>`;
  const lead = (dpDate(first).getUTCDay() + 6) % 7, days = +dpAdd(dpMonthAdd(first, 1), -1).slice(8), end = st.end || st.start;
  let rows = '';
  for (let w = 0; w < Math.ceil((lead + days) / 7); w++) {
    rows += '<tr>';
    for (let c = 0; c < 7; c++) {
      const day = dpAdd(first, w * 7 + c - lead), inMonth = day.slice(0, 7) === first.slice(0, 7);
      if (!inMonth && st.range) { rows += '<td></td>'; continue; } // two months side by side: no repeated days
      const on = st.start && day >= st.start && day <= end;
      const band = st.range && on ? ` data-range="${[day === st.start && 'start', day === end && 'end'].filter(Boolean).join(' ') || 'mid'}"` : '';
      const off = (st.min && day < st.min) || (st.max && day > st.max);
      rows += `<td${on ? ' aria-selected="true"' : ''}${band}><button class="sb-dp-day" type="button" tabindex="${day === st.focus ? 0 : -1}" data-date="${day}" aria-label="${dpFmt(day, { day: 'numeric', month: 'long', year: 'numeric' })}"${day === st.today ? ' aria-current="date"' : ''}${inMonth ? '' : ' data-outside'}${off ? ' aria-disabled="true"' : ''}>${+day.slice(8)}</button></td>`;
    }
    rows += '</tr>';
  }
  return `<div class="sb-dp-month"><div class="sb-dp-head">${i === 0 ? nav(-1) : '<span></span>'}<p class="sb-dp-title" id="${st.id}-m${i}">${dpFmt(first, { month: 'long', year: 'numeric' })}</p>${i === n - 1 ? nav(1) : '<span></span>'}</div><table class="sb-dp-grid" role="grid" aria-labelledby="${st.id}-m${i}"><thead><tr>${WEEK.map(([s, l]) => `<th scope="col" abbr="${l}">${s}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>`;
}
function dpPanel(st) {
  const views = st.range ? [st.view, dpMonthAdd(st.view, 1)] : [st.view];
  const months = `<div class="sb-dp-months" aria-live="polite">${views.map((m, i) => dpMonth(m, st, i, views.length)).join('')}</div>`;
  if (!st.range) return months;
  const short = { day: 'numeric', month: 'short', year: 'numeric' };
  const presets = st.presets ? `<div class="sb-dp-presets" role="group" aria-label="Rentang cepat">${dpPresets(st.today).map(([l, a, b]) => `<button class="sb-dp-preset" type="button" data-start="${a}" data-end="${b}" aria-pressed="${a === st.start && b === st.end}">${l}</button>`).join('')}</div>` : '';
  const picked = st.start ? `${dpFmt(st.start, short)} – ${st.end ? dpFmt(st.end, short) : '…'}` : 'Pilih tanggal awal';
  return `${presets}<div class="sb-dp-main">${months}<div class="sb-dp-foot"><span class="sb-dp-picked">${picked}</span><div class="sb-dp-actions"><button class="sb-btn" type="button" data-variant="outline" data-size="sm" data-dp="cancel">Batal</button><button class="sb-btn" type="button" data-size="sm" data-dp="apply"${st.start && st.end ? '' : ' disabled'}>Terapkan</button></div></div></div>`;
}
function dpState(dp) {
  const s = dp.dataset;
  return { id: dp.querySelector('.sb-dp-panel').id, range: s.type === 'range', start: s.pickStart, end: s.pickEnd, view: s.view, focus: s.focus, min: s.min, max: s.max, today: s.today || dpToday(), presets: 'presets' in s };
}
function dpDraw(dp, focus) {
  const panel = dp.querySelector('.sb-dp-panel');
  panel.innerHTML = dpPanel(dpState(dp));
  if (focus) panel.querySelector(focus === true ? `[data-date="${dp.dataset.focus}"]` : focus)?.focus();
}
function dpOpen(dp, focusGrid) {
  const s = dp.dataset, range = s.type === 'range';
  s.pickStart = (range ? s.start : s.value) || '';
  s.pickEnd = (range ? s.end : s.value) || '';
  s.focus = s.pickStart || s.today || dpToday();
  s.view = dpFirst(s.focus);
  dp.querySelector('.sb-dp-panel').hidden = false;
  dp.querySelector('.sb-dp-toggle').setAttribute('aria-expanded', 'true');
  dpDraw(dp, focusGrid);
}
function dpClose(dp, focusInput) {
  dp.querySelector('.sb-dp-panel').hidden = true;
  dp.querySelector('.sb-dp-toggle').setAttribute('aria-expanded', 'false');
  if (focusInput) dp.querySelector('input').focus();
}
function dpCommit(dp, start, end) {
  const s = dp.dataset, input = dp.querySelector('input');
  if (s.type === 'range') Object.assign(s, { start, end });
  else s.value = start;
  input.value = s.type === 'range' ? `${dpText(start)} – ${dpText(end)}` : dpText(start);
  input.removeAttribute('aria-invalid');
  dp.dispatchEvent(new CustomEvent('sb-date-change', { bubbles: true, detail: { start, end } }));
}
function dpClick(e) {
  const dp = e.target.closest?.('.sb-dp');
  document.querySelectorAll('.sb-dp').forEach(o => o !== dp && !o.querySelector('.sb-dp-panel').hidden && dpClose(o));
  const t = dp && e.target.closest('button, input');
  if (!t || t.disabled) return;
  const s = dp.dataset, open = !dp.querySelector('.sb-dp-panel').hidden;
  if (t.matches('.sb-dp-toggle')) return open ? dpClose(dp, true) : dpOpen(dp, true);
  if (t.matches('input')) return open || dpOpen(dp, false); // typing stays possible; ↓ moves into the calendar
  if (t.matches('.sb-dp-nav')) {
    s.view = dpMonthAdd(s.view, +t.dataset.step);
    s.focus = s.view;
    return dpDraw(dp, `.sb-dp-nav[data-step="${t.dataset.step}"]`);
  }
  if (t.matches('.sb-dp-day')) {
    if (t.getAttribute('aria-disabled') === 'true') return;
    const day = (s.focus = t.dataset.date);
    if (s.type !== 'range') { dpCommit(dp, day, day); return dpClose(dp, true); }
    if (!s.pickStart || s.pickEnd || day < s.pickStart) Object.assign(s, { pickStart: day, pickEnd: '' });
    else s.pickEnd = day;
    return dpDraw(dp, true);
  }
  if (t.matches('.sb-dp-preset')) {
    Object.assign(s, { pickStart: t.dataset.start, pickEnd: t.dataset.end, focus: t.dataset.start, view: dpFirst(t.dataset.start) });
    return dpDraw(dp, `.sb-dp-preset[data-start="${t.dataset.start}"][data-end="${t.dataset.end}"]`);
  }
  if (t.dataset.dp === 'apply') { dpCommit(dp, s.pickStart, s.pickEnd); return dpClose(dp, true); }
  if (t.dataset.dp === 'cancel') dpClose(dp, true);
}
function dpKeydown(e) {
  const dp = e.target.closest?.('.sb-dp');
  if (!dp) return;
  const s = dp.dataset, open = !dp.querySelector('.sb-dp-panel').hidden;
  if (e.key === 'Escape' && open) { e.preventDefault(); return dpClose(dp, true); }
  if (e.key === 'ArrowDown' && e.target.matches('input')) { e.preventDefault(); return dpOpen(dp, true); }
  const day = e.target.closest('.sb-dp-day')?.dataset.date;
  if (!day) return;
  const col = (dpDate(day).getUTCDay() + 6) % 7, year = e.shiftKey ? 12 : 1;
  const to = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7, Home: -col, End: 6 - col }[e.key];
  const next = to !== undefined ? dpAdd(day, to) : e.key === 'PageUp' ? dpShift(day, -year) : e.key === 'PageDown' ? dpShift(day, year) : null;
  if (!next) return;
  e.preventDefault();
  const shown = s.type === 'range' ? 2 : 1;
  if (next < s.view) s.view = dpFirst(next);
  else if (next >= dpMonthAdd(s.view, shown)) s.view = dpMonthAdd(next, 1 - shown);
  s.focus = next;
  dpDraw(dp, true);
}
function dpChange(e) {
  const input = e.target.closest?.('.sb-dp input');
  if (!input) return;
  const dp = input.closest('.sb-dp'), s = dp.dataset, v = input.value.trim();
  if (!v) { delete s.value; delete s.start; delete s.end; return input.removeAttribute('aria-invalid'); }
  const [a = '', b = a] = s.type === 'range' ? v.split(/\s*[–-]\s*/) : [v];
  const start = dpParse(a), end = dpParse(b);
  const ok = start && end && start <= end && !(s.min && start < s.min) && !(s.max && end > s.max);
  if (ok) dpCommit(dp, start, end);
  else input.setAttribute('aria-invalid', 'true');
}
document.addEventListener('click', dpClick);
document.addEventListener('keydown', dpKeydown);
document.addEventListener('change', dpChange);

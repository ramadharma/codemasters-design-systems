// Date picker: a typable date field with a calendar, for one date or a range. Built from DESIGN.md §6 Inputs
// (Date range calendar), §2.3 (the date picker grays) and §7 (date formats). No Figma component yet.
(() => {
  const { esc, icon } = DS;

  // ---- Dates are ISO strings (2026-10-14) handled in UTC, so no time zone can shift a day.
  const dpIso = d => d.toISOString().slice(0, 10);
  const dpDate = s => new Date(`${s}T00:00:00Z`);
  const dpAdd = (s, days) => { const d = dpDate(s); d.setUTCDate(d.getUTCDate() + days); return dpIso(d); };
  const dpFirst = s => `${s.slice(0, 8)}01`;
  const dpMonthAdd = (s, n) => { const d = dpDate(dpFirst(s)); d.setUTCMonth(d.getUTCMonth() + n); return dpIso(d); };
  // Same day n months on, clamped to the month's length (31 Jan + 1 month = 28 Feb).
  const dpShift = (s, n) => { const first = dpMonthAdd(s, n), last = dpAdd(dpMonthAdd(first, 1), -1); return `${first.slice(0, 8)}${String(Math.min(+s.slice(8), +last.slice(8))).padStart(2, '0')}`; };
  const dpFmt = (s, o) => dpDate(s).toLocaleDateString('id-ID', { timeZone: 'UTC', ...o });
  const dpToday = () => { const d = new Date(); return dpIso(new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))); };
  const dpText = s => s.split('-').reverse().join('/'); // 2026-10-14 → 14/10/2026 (DESIGN.md §7: inputs)
  function dpParse(v) {
    const m = v.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (!m) return null;
    const s = `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`, d = dpDate(s);
    return !Number.isNaN(+d) && dpIso(d) === s ? s : null; // rejects 31/02
  }
  const dpPresets = t => [
    ['Hari ini', t, t], ['Kemarin', dpAdd(t, -1), dpAdd(t, -1)], ['7 hari terakhir', dpAdd(t, -6), t],
    ['30 hari terakhir', dpAdd(t, -29), t], ['Bulan ini', dpFirst(t), t], ['Bulan lalu', dpMonthAdd(t, -1), dpAdd(dpFirst(t), -1)],
  ];

  // ---- Rendering: one month grid (Monday first), the panel around it. Pure functions of the state.
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

  // ---- Behaviour. The field keeps the committed value (data-value, or data-start and data-end); while the calendar is
  // open the pick lives in data-pick-start / data-pick-end, so Batal and Esc throw it away.
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
  // Typing: dd/mm/yyyy (range: two dates joined by – or -). A valid entry commits on change; anything else is marked invalid.
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

  const strip = f => f.toString().replace(/^  /gm, '');
  const HELPERS = { dpIso, dpDate, dpAdd, dpFirst, dpMonthAdd, dpShift, dpFmt, dpToday, dpText, dpPresets };
  const SCRIPT = `// Date picker: click the field or the calendar button, or press ↓ in the field, to open. In the calendar:
// ← → ↑ ↓ move by day and week, Home / End to the week's ends, PageUp / PageDown by month (with Shift by year),
// Enter or Space picks, Esc closes. A range needs Terapkan. Every committed value fires "sb-date-change".
${Object.entries(HELPERS).map(([n, f]) => `const ${n} = ${f.toString()};`).join('\n')}
${[dpParse, dpMonth, dpPanel, dpState, dpDraw, dpOpen, dpClose, dpCommit, dpClick, dpKeydown, dpChange].map(strip).join('\n')}
document.addEventListener('click', dpClick);
document.addEventListener('keydown', dpKeydown);
document.addEventListener('change', dpChange);`;

  const CSS = `/* Date picker, Codemasters Design System
   Needs tokens.css, input-field.css (the field) and button.css (the range footer); date-picker.js renders the calendar.

   <div class="sb-field">
     <label class="sb-field-label" for="masuk">Tanggal masuk</label>
     <div class="sb-dp" data-type="single" data-value="2026-10-08" data-max="2026-10-14">
       <div class="sb-input">
         <button class="sb-dp-toggle" type="button" aria-label="Pilih tanggal" aria-haspopup="dialog" aria-expanded="false" aria-controls="masuk-cal">…calendar…</button>
         <input id="masuk" type="text" inputmode="numeric" placeholder="dd/mm/yyyy" value="08/10/2026" autocomplete="off">
       </div>
       <div class="sb-dp-panel" id="masuk-cal" role="dialog" aria-label="Pilih tanggal masuk" hidden></div>
     </div>
   </div>

   data-type      single (one month, picks and closes) | range (two months, Batal and Terapkan)
   data-value     single: the date, ISO yyyy-mm-dd. Range: data-start and data-end
   data-min, data-max   dates outside are shown but cannot be picked
   data-presets   range only: the quick ranges on the left (Hari ini … Bulan lalu)
   The field shows dd/mm/yyyy (DESIGN.md §7); typed dates commit on change. */

.sb-dp { position: relative; }
.sb-dp input { font-variant-numeric: tabular-nums; }
/* Calendar button: the field's leading icon, a 32 hit area that does not widen the field. */
.sb-dp-toggle {
  display: inline-grid; place-items: center; flex: none; width: 32px; height: 32px; margin-inline: -6px; padding: 0;
  border: 0; border-radius: var(--radius-sm); background: none; color: var(--text-quaternary); cursor: pointer;
  transition: color 150ms var(--ease);
}
.sb-dp-toggle > svg { width: 20px; height: 20px; }
.sb-dp-toggle:is(:hover, [aria-expanded="true"]) { color: var(--text-secondary); }
.sb-dp-toggle:focus-visible { outline: 2px solid var(--brand-600); outline-offset: -2px; }
.sb-dp:has(.sb-dp-toggle[aria-expanded="true"]) .sb-input { border-color: var(--border-brand); box-shadow: var(--shadow-xs), 0 0 0 3px var(--focus-ring); }

/* Panel: opens 8 below the field, white, radius 12, shadow-lg. Months side by side with a divider. */
.sb-dp-panel {
  position: absolute; z-index: 30; top: calc(100% + 8px); inset-inline-start: 0;
  display: flex; width: max-content; box-sizing: border-box;
  background: var(--bg-primary); border: 1px solid var(--border-tertiary); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
  font-family: var(--font);
}
.sb-dp-panel[hidden] { display: none; }
.sb-dp[data-type="single"] .sb-dp-panel { inset-inline-end: 0; width: auto; min-width: max-content; } /* as wide as the field */
.sb-dp-main { display: grid; }
.sb-dp-months { display: flex; flex: 1; }
.sb-dp-month { flex: 1; padding: 16px; } /* months fill the panel; a single month as wide as the field */
.sb-dp-month + .sb-dp-month { border-inline-start: 1px solid var(--border-secondary); }
.sb-dp-head { display: grid; grid-template-columns: 32px 1fr 32px; align-items: center; margin-bottom: 8px; }
.sb-dp-title { margin: 0; text-align: center; font: 500 var(--text-sm) var(--font); color: var(--text-primary); } /* Text sm stops at Medium in app UI */
.sb-dp-nav {
  display: inline-grid; place-items: center; width: 32px; height: 32px; margin: 0; padding: 0;
  border: 0; border-radius: var(--radius-md); background: none; color: var(--text-quaternary); cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-dp-nav > svg { width: 20px; height: 20px; }
.sb-dp-nav:hover { background: var(--bg-secondary); color: var(--text-secondary); }
.sb-dp-nav:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 0; }

/* Grid: 32 px days, rows 4 apart; columns touch, so a range reads as one band. */
.sb-dp-grid { width: 100%; border-collapse: separate; border-spacing: 0 4px; margin-block: -4px; } /* columns share a wider panel */
.sb-dp-grid th { width: 32px; height: 32px; padding: 0; font: 500 var(--text-xs) var(--font); color: var(--text-quaternary); }
.sb-dp-grid td { padding: 0; }
.sb-dp-grid td > .sb-dp-day { margin-inline: auto; }
.sb-dp-day {
  position: relative; display: grid; place-items: center; width: 32px; height: 32px; margin: 0; padding: 0;
  border: 0; border-radius: var(--radius-sm); background: none;
  font: 400 var(--text-sm) var(--font); font-variant-numeric: tabular-nums; color: var(--text-secondary); cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-dp-day:hover { background: var(--bg-secondary); color: var(--text-primary); }
.sb-dp-day:focus-visible { z-index: 1; outline: 2px solid var(--brand-600); outline-offset: 1px; }
.sb-dp-day[data-outside], .sb-dp-day[aria-disabled="true"] { color: var(--text-disabled); }
.sb-dp-day[aria-disabled="true"] { background: none; cursor: not-allowed; }
/* Today: a 4 px dot under the number. */
.sb-dp-day[aria-current="date"]::after { content: ''; position: absolute; bottom: 4px; left: 50%; translate: -50% 0; width: 4px; height: 4px; border-radius: var(--radius-full); background: var(--fg-brand); }

/* Range: brand-50 band between the ends; each end fills half its cell, so the band starts at the end's centre. */
.sb-dp-grid td[data-range="mid"] { background: var(--bg-brand-subtle); }
.sb-dp-grid td[data-range="start"] { background: linear-gradient(to right, transparent 50%, var(--bg-brand-subtle) 50%); }
.sb-dp-grid td[data-range="end"] { background: linear-gradient(to left, transparent 50%, var(--bg-brand-subtle) 50%); }
.sb-dp-grid td[data-range="mid"]:first-child { border-radius: var(--radius-sm) 0 0 var(--radius-sm); }
.sb-dp-grid td[data-range="mid"]:last-child { border-radius: 0 var(--radius-sm) var(--radius-sm) 0; }
.sb-dp-grid td[data-range="mid"] > .sb-dp-day { color: var(--text-brand); }
.sb-dp-grid td[data-range="mid"] > .sb-dp-day:hover { background: var(--bg-brand-subtle-hover); }
/* Selected day, and both ends of a range: the primary fill. */
.sb-dp-grid td[aria-selected]:not([data-range="mid"]) > .sb-dp-day { background: var(--brand-600); color: var(--white); font-weight: 500; }
.sb-dp-grid td[aria-selected]:not([data-range="mid"]) > .sb-dp-day:hover { background: var(--brand-700); }
.sb-dp-grid td[aria-selected]:not([data-range="mid"]) > .sb-dp-day::after { background: var(--white); }

/* Presets: the quick ranges, left of the months. */
.sb-dp-presets { display: grid; align-content: start; gap: 4px; width: 160px; padding: 12px; border-inline-end: 1px solid var(--border-secondary); }
.sb-dp-preset {
  height: 36px; margin: 0; padding: 0 12px; border: 0; border-radius: var(--radius-md); background: none;
  font: 500 var(--text-sm) var(--font); color: var(--text-secondary); text-align: start; cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-dp-preset:hover { background: var(--bg-secondary); }
.sb-dp-preset[aria-pressed="true"] { background: var(--bg-brand-subtle); color: var(--text-brand); } /* the matching range: brand-50 + brand-700, apart from the gray hover */
.sb-dp-preset:focus-visible { outline: 2px solid var(--brand-600); outline-offset: -2px; }

/* Footer (range): the pick on the left, Batal and Terapkan on the right, gap 12 like any button row. */
.sb-dp-foot { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px; border-top: 1px solid var(--border-secondary); }
.sb-dp-picked { font: 500 var(--text-sm) var(--font); font-variant-numeric: tabular-nums; color: var(--text-secondary); }
.sb-dp-actions { display: flex; gap: 12px; }

@media (prefers-reduced-motion: reduce) {
  .sb-dp-toggle, .sb-dp-nav, .sb-dp-day, .sb-dp-preset { transition: none; }
}
`;

  // ---- Docs markup. Examples use a fixed today so the pages read the same every day.
  const TODAY = '2026-10-14';
  let uid = 0;
  function picker({ type = 'single', presets = false, open = false, specimen = false, value = '2026-10-08', start = '2026-10-01', end = '2026-10-14', max, invalid, disabled, label, hint, pins = false } = {}) {
    const id = `dp-${++uid}`, range = type === 'range';
    const data = [`data-type="${type}"`, range ? `data-start="${start}" data-end="${end}"` : `data-value="${value}"`, `data-today="${TODAY}"`];
    if (max) data.push(`data-max="${max}"`);
    if (presets && range) data.push('data-presets');
    const text = invalid || (range ? `${dpText(start)} – ${dpText(end)}` : value ? dpText(value) : '');
    const st = { id: `${id}-cal`, range, start: range ? start : value, end: range ? end : value, view: dpFirst(range ? start : value || TODAY), focus: range ? start : value, max, today: TODAY, presets };
    let panel = open ? dpPanel(st) : '';
    if (open) data.push(`data-view="${st.view}" data-focus="${st.focus}" data-pick-start="${st.start}" data-pick-end="${st.end}"`); // the state dpOpen would set
    if (pins) {
      panel = panel
        .replace('<div class="sb-dp-head">', '<div class="sb-dp-head" data-pin="2" data-pin-at="start">')
        .replace('<th scope="col" abbr="Senin">', '<th scope="col" abbr="Senin" data-pin="3" data-pin-at="start">')
        .replace(/<td aria-selected="true" data-range="mid">(<button class="sb-dp-day" type="button" tabindex="-1" data-date="2026-10-12")/, '<td aria-selected="true" data-range="mid" data-pin="4" data-pin-at="start">$1')
        .replace('data-date="2026-10-19"', 'data-date="2026-10-19" data-pin="5" data-pin-at="start"')
        .replace('<div class="sb-dp-foot">', '<div class="sb-dp-foot" data-pin="6" data-pin-at="start">');
    }
    const name = label || (range ? 'Periode klaim' : 'Tanggal masuk');
    return `<div class="sb-field">
  <label class="sb-field-label" for="${id}">${esc(name)}</label>
  <div class="${specimen ? 'dp-specimen' : 'sb-dp'}" ${data.join(' ')}>
    <div class="sb-input"${pins ? ' data-pin="1" data-pin-at="end"' : ''}>
      <button class="sb-dp-toggle" type="button" aria-label="Pilih tanggal" aria-haspopup="dialog" aria-expanded="${open}" aria-controls="${id}-cal"${disabled ? ' disabled' : ''}>${icon('calendar')}</button>
      <input id="${id}" type="text" inputmode="numeric" placeholder="${range ? 'dd/mm/yyyy – dd/mm/yyyy' : 'dd/mm/yyyy'}" value="${esc(text)}" autocomplete="off"${hint ? ` aria-describedby="${id}-hint"` : ''}${invalid ? ' aria-invalid="true"' : ''}${disabled ? ' disabled' : ''}>
    </div>
    <div class="sb-dp-panel" id="${id}-cal" role="dialog" aria-label="Pilih ${esc(name.toLowerCase())}"${open ? '' : ' hidden'}>${panel}</div>
  </div>${hint ? `\n  <p class="sb-field-hint" id="${id}-hint">${esc(hint)}</p>` : ''}
</div>`;
  }
  // Docs-only frame, like Input dropdown: the field sits centred and the calendar opens over the frame and the code below.
  // DS.snippet strips it.
  const stage = (html, cls = '') => `<div class="dp-stage${cls ? ` ${cls}` : ''}">\n${html}\n</div>`;
  const closed = o => DS.snippet(picker({ ...o, open: false })); // the markup to copy: the script fills the panel

  DS.components.push({
    slug: 'date-picker',
    name: 'Date picker',
    category: 'Components',
    status: 'In progress',
    updated: '2026-10-14',
    description: 'A date field people can type into or pick from a calendar: one date (one month, picks and closes) or a range (two months, quick ranges, Batal and Terapkan). Monday first, dd/mm/yyyy.',
    css: CSS,
    cssFile: 'date-picker.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Click the field to open the calendar, then a day, the arrows or a quick range. With the keyboard: ↓ in the field opens the calendar, arrows move, PageUp / PageDown change month, Enter picks, Esc closes.' },
          {
            type: 'playground',
            initial: { type: 'single', presets: true },
            controls: [
              { key: 'type', label: 'Type', type: 'segmented', options: [['single', 'Single'], ['range', 'Range']] },
              { key: 'presets', label: 'Quick ranges', type: 'toggle' },
            ],
            render: s => stage(picker(s)), // closed: the calendar opens over the frame on click, like Input dropdown
            code: s => closed(s),
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
              'Use Single for a date in a form (tanggal masuk, tanggal lahir) and Range for a period that filters a list or a report.',
              'People can always type. The calendar helps when the date is near today or when the weekday matters; a birth date is faster to type.',
              'The field shows dd/mm/yyyy, the calendar long dates, the range footer short dates (`14 Okt 2026`), as in Content rules.',
              'Limit the dates people can pick with `data-min` and `data-max` (no future tanggal masuk). Days outside the limits stay visible, so the calendar keeps its shape.',
              'Add quick ranges when most filters use the same periods. Keep the list to the six standard ones.',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: `<div class="dp-stage is-anat" inert>\n${picker({ type: 'range', open: true, pins: true, specimen: true })}\n</div>`, code: false, layout: 'anat' }, // a still specimen: always open, out of the script's reach
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Field', 'Input field with a leading calendar button (20 px icon, 32 hit area). Opens the calendar on click or ↓. Shows dd/mm/yyyy; a range joins two dates with " – ".'],
              ['2', 'Month header', 'Month and year, Text sm / Medium `gray-900`, centred. 32 × 32 chevron buttons, `gray-500`, radius 8; on a range only the outer months have them.'],
              ['3', 'Weekdays', 'Sen to Min, Monday first. Text xs / Medium `gray-500`.'],
              ['4', 'Range', 'Days between the ends on a `brand-50` band with `brand-700` numbers. The ends, like a single selected day, are `brand-600` with `white` numbers.'],
              ['5', 'Day', '32 × 32, radius 4, Text sm `gray-700`. Hover `gray-50`. Days of another month and days outside min / max: `gray-400`. Today: a 4 px brand dot under the number.'],
              ['6', 'Footer', 'Range only. The pick in short dates on the left; Batal (Outline sm) and Terapkan (Default sm, disabled until both ends are set) on the right.'],
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
              ['Type', 'Single, Range', '`data-type` on `.sb-dp`'],
              ['Value', 'A date, or a start and an end', '`data-value="2026-10-08"`, or `data-start` and `data-end` (ISO). The field shows dd/mm/yyyy'],
              ['Limits', 'Min, Max', '`data-min`, `data-max` (ISO)'],
              ['Quick ranges', 'True, False', '`data-presets` (Range only)'],
              ['State', 'Default, Open, Error, Disabled', 'Open: the calendar button\'s `aria-expanded`. Error: `aria-invalid` on the input. Disabled: `disabled` on the input and the button'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-single', text: 'Single' },
          { type: 'p', text: 'One month, as wide as the field. A click picks the day, fills the field and closes the calendar.' },
          { type: 'example', html: stage(picker({ max: TODAY })), code: closed({ max: TODAY }) },
          { type: 'h3', id: 'type-range', text: 'Range' },
          { type: 'p', text: 'Two months side by side. The first click sets the start, the second the end; a click before the start begins again. Terapkan writes the range into the field, Batal and Esc leave it as it was.' },
          { type: 'example', html: stage(picker({ type: 'range' })), code: closed({ type: 'range' }) },
          { type: 'h3', id: 'type-presets', text: 'Range with quick ranges' },
          { type: 'p', text: 'The six standard periods on the left. The one that matches the pick is marked, so a range made by hand that equals "Bulan ini" shows it too.' },
          { type: 'example', html: stage(picker({ type: 'range', presets: true })), code: closed({ type: 'range', presets: true }) },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'h3', id: 'state-field', text: 'Field' },
          {
            type: 'example',
            html: stage(`${picker({ label: 'Kosong', value: '' })}\n${picker({ label: 'Terisi' })}\n${picker({ label: 'Format salah', invalid: '31/02/2026', hint: 'Tanggal tidak ada. Tulis dd/mm/yyyy, misalnya 08/10/2026.' })}\n${picker({ label: 'Disabled', disabled: true })}`, 'is-grid'),
            code: false,
          },
          {
            type: 'table',
            head: ['State', 'Look'],
            rows: [
              ['Default', 'Input field: `gray-200` border, placeholder dd/mm/yyyy in `gray-500`.'],
              ['Open', 'The field keeps the focus look (`brand-300` border, `focus-ring`) while the calendar is open, even with focus in the calendar.'],
              ['Error', 'A typed date that does not exist, is in the wrong format or is outside min / max: Input field error state, and the hint says what to write.'],
              ['Disabled', 'Input field disabled; the calendar button cannot open.'],
            ],
          },
          { type: 'h3', id: 'state-day', text: 'Day' },
          {
            type: 'table',
            head: ['Day', 'Fill', 'Number'],
            rows: [
              ['Default', 'none', '`gray-700`'],
              ['Hover', '`gray-50`', '`gray-900`'],
              ['Today', 'none, 4 px `brand-600` dot', '`gray-700`'],
              ['Selected / range end', '`brand-600` (hover `brand-700`)', '`white`, Medium; the today dot turns `white`'],
              ['In range', '`brand-50` band (hover `brand-100`)', '`brand-700`'],
              ['Other month, outside min / max', 'none', '`gray-400`; outside min / max cannot be picked'],
              ['Focused', '2 px `brand-600` outline, 1 px out', 'as its state'],
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
              { kind: 'do', html: stage(picker({ label: 'Tanggal masuk' })), text: 'A field people can type into, dd/mm/yyyy.' },
              { kind: 'dont', html: stage(picker({ label: 'Tanggal masuk', invalid: 'Rabu, 8 Oktober 2026' }).replace(' aria-invalid="true"', '')), text: 'A long date in the field. It cannot be typed and does not fit.' },
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
              'The field is a real text input with a `<label>`, so the date can always be typed; the calendar is a shortcut, not the only way in.',
              'The calendar button has `aria-haspopup="dialog"` and `aria-expanded`; the panel is a non-modal `role="dialog"` named after the field.',
              'Each month is a `role="grid"` labelled by its month name. Weekday headers carry the full name in `abbr`. Each day is a button whose label is the full date ("14 Oktober 2026"); today has `aria-current="date"`; selected days sit in cells with `aria-selected`.',
              'One day is in the tab order at a time (roving `tabindex`). Changing month announces the new month (`aria-live="polite"`).',
              'Days that cannot be picked have `aria-disabled` and stay focusable, so arrow keys still pass over them.',
            ],
          },
          {
            type: 'table',
            head: ['Key', 'In the calendar'],
            rows: [
              ['↓ (in the field)', 'Opens the calendar on the selected day, or today'],
              ['← → ↑ ↓', 'Previous / next day, same day last / next week; crosses into other months'],
              ['Home / End', 'Monday / Sunday of the week'],
              ['PageUp / PageDown', 'Same day last / next month (Shift: year)'],
              ['Enter / Space', 'Picks the day (Single closes; Range sets the start or end)'],
              ['Esc', 'Closes without changing the field; focus returns to it'],
            ],
          },
          {
            type: 'table',
            head: ['Text', 'On', 'Ratio', 'AA'],
            rows: [
              ['Day `gray-700`', '`white`', '10.46:1', 'Passes'],
              ['Weekday `gray-500`', '`white`', '4.97:1', 'Passes'],
              ['Selected `white`', '`brand-600`', '5.06:1', 'Passes'],
              ['In range `brand-700`', '`brand-50`', '6.09:1', 'Passes'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `input-field.css` and `button.css`, then `date-picker.css`, and add `date-picker.js`. The markup is only the field and an empty panel; the script draws the calendar when it opens and fires `sb-date-change` with `{ start, end }` when a date is committed.' },
          { type: 'code', lang: 'css', filename: 'date-picker.css', code: CSS },
          { type: 'h3', id: 'dp-script', text: 'Script' },
          { type: 'code', lang: 'js', filename: 'date-picker.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('click', dpClick);
  document.addEventListener('keydown', dpKeydown);
  document.addEventListener('change', dpChange);
})();

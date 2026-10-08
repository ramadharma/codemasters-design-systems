// Button group: joined segments for equal-weight choices. Source: DESIGN.md §6 Button group, Figma nodes 1046-10171, 1046-9312.
(() => {
  const { icon, esc } = DS;

  const CSS = `/* Button group, Codemasters Design System
   Needs tokens.css.

   Switch, one choice at a time (arrow keys move the choice):
   <div class="sb-btn-group" role="radiogroup" aria-label="Rentang waktu">
     <button type="button" role="radio" aria-checked="true" tabindex="0">Hari</button>
     <button type="button" role="radio" aria-checked="false" tabindex="-1">Minggu</button>
   </div>

   Toggles, each on or off: <div class="sb-btn-group" role="group"> with <button aria-pressed="true|false">.

   Current=True     aria-checked="true" (switch) or aria-pressed="true" (toggle). The ARIA state is the style hook,
                    so the choice is never shown by colour alone.
   data-icon="only" icon-only segments; each button needs aria-label
   data-state       hover | focus on a segment. Static mockups and docs only. */

.sb-btn-group {
  box-sizing: border-box;
  display: inline-flex; height: 40px;
  background: var(--white);
  border: 1px solid var(--gray-300); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  overflow: hidden; /* only the outer corners are rounded */
}
.sb-btn-group > button {
  --seg-icon: var(--gray-500);
  box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 100%; margin: 0; padding: 0 16px;
  font: 600 var(--text-sm) var(--font); white-space: nowrap;
  color: var(--gray-700); background: var(--white);
  border: 0; border-inline-end: 1px solid var(--gray-300); border-radius: 0;
  cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-btn-group > button:last-child { border-inline-end: 0; }
.sb-btn-group > button > svg { width: 20px; height: 20px; flex: none; color: var(--seg-icon); }
.sb-btn-group[data-icon="only"] > button { padding: 0 12px; }
.sb-btn-group-dot { width: 10px; height: 10px; flex: none; border-radius: var(--radius-full); background: var(--success-500); }

/* States (fill / text / icon). Order matters: Current overrides Hover and Focused, Disabled only fades the text. */
.sb-btn-group > button:hover:not(:disabled), .sb-btn-group > button[data-state="hover"] {
  --seg-icon: var(--gray-700); color: var(--gray-800); background: var(--gray-50);
}
.sb-btn-group > button:focus-visible, .sb-btn-group > button[data-state="focus"] {
  --seg-icon: var(--gray-700); color: var(--gray-700); background: var(--gray-50);
  outline: 2px solid var(--brand-600); outline-offset: -2px; /* inside, because the group clips */
}
.sb-btn-group > [aria-checked="true"], .sb-btn-group > [aria-pressed="true"] {
  --seg-icon: var(--gray-800); color: var(--gray-800); background: var(--gray-50);
}
.sb-btn-group > button:disabled { --seg-icon: var(--gray-300); color: var(--gray-300); cursor: not-allowed; }
.sb-btn-group > button:disabled > .sb-btn-group-dot { background: var(--gray-300); }

@media (prefers-reduced-motion: reduce) {
  .sb-btn-group > button { transition: none; }
}
`;

  // Item sets per Icon type. Each set answers one real question, so labels stay specific.
  const SETS = {
    none: { label: 'Rentang waktu', items: [['Hari'], ['Minggu'], ['Bulan']] },
    leading: { label: 'Tampilan', items: [['Daftar', 'list'], ['Grid', 'grid'], ['Kalender', 'calendar']] },
    only: { label: 'Tampilan', items: [['Daftar', 'list'], ['Grid', 'grid'], ['Kalender', 'calendar']] },
    dot: { label: 'Status', items: [['Aktif'], ['Tertunda'], ['Selesai']] },
  };

  // current: index of the Current=True segment, -1 for none. mode: switch (radiogroup) | toggle (aria-pressed) | action (no state).
  function group({ icon: mode = 'none', current = 0, kind = 'switch', disabled = false, states = [], items, label, demo } = {}) {
    const set = items ? { label, items } : SETS[mode];
    const role = kind === 'switch' ? 'radiogroup' : 'group';
    const attrs = ['class="sb-btn-group"', `role="${role}"`, `aria-label="${esc(set.label)}"`];
    if (mode === 'only') attrs.push('data-icon="only"');
    if (demo) attrs.push('data-demo');
    const segs = set.items.map(([text, glyph], i) => {
      const on = Array.isArray(current) ? current.includes(i) : i === current;
      const a = ['type="button"'];
      if (kind === 'switch') a.push('role="radio"', `aria-checked="${on}"`, `tabindex="${on || (current === -1 && i === 0) ? 0 : -1}"`);
      if (kind === 'toggle') a.push(`aria-pressed="${on}"`);
      if (mode === 'only') a.push(`aria-label="${esc(text)}"`);
      if (states[i] === 'hover' || states[i] === 'focus') a.push(`data-state="${states[i]}"`);
      if (disabled) a.push('disabled');
      const inner = {
        none: [esc(text)],
        leading: [icon(glyph), esc(text)],
        only: [icon(glyph)],
        dot: ['<span class="sb-btn-group-dot" aria-hidden="true"></span>', esc(text)],
      }[mode];
      const open = `<button ${a.join(' ')}>`;
      return inner.length === 1 && mode !== 'only' ? `  ${open}${inner[0]}</button>` : `  ${open}\n    ${inner.join('\n    ')}\n  </button>`;
    });
    return `<div ${attrs.join(' ')}>\n${segs.join('\n')}\n</div>`;
  }

  // State matrix: one-segment groups so each cell shows a single state.
  const STATES = [['default', 'Default'], ['hover', 'Hover'], ['focus', 'Focused'], ['disabled', 'Disabled']];
  const cell = (on, s) => group({ kind: 'toggle', current: on ? 0 : -1, items: [['Minggu']], label: 'Contoh', states: [s], disabled: s === 'disabled' });
  const cellDot = s => group({ icon: 'dot', kind: 'toggle', current: -1, items: [['Aktif']], label: 'Contoh', states: [s], disabled: s === 'disabled' });
  const matrix = `<div class="matrix">
<span></span>${STATES.map(([, l]) => `<span class="mx">${l}</span>`).join('')}
<span class="mx">Current=False</span>${STATES.map(([s]) => cell(false, s)).join('')}
<span class="mx">Current=True</span>${STATES.map(([s]) => cell(true, s)).join('')}
<span class="mx">Dot</span>${STATES.map(([s]) => cellDot(s)).join('')}
</div>`;

  const anatomy = `<div class="sb-btn-group" role="group" aria-label="Tampilan" data-pin="1" data-pin-at="start">
  <button type="button" aria-pressed="true" tabindex="-1" data-pin="2" data-pin-at="bottom">
    <span data-pin="4">${icon('list')}</span>
    <span data-pin="5">Daftar</span>
  </button>
  <button type="button" aria-pressed="false" tabindex="-1" data-pin="3" data-pin-at="bottom edge">${icon('grid')}Grid</button>
  <button type="button" aria-pressed="false" tabindex="-1">${icon('calendar')}Kalender</button>
</div>`;

  const pagination =group({ icon: 'only', kind: 'action', items: [['Halaman sebelumnya', 'chevron-left'], ['Halaman berikutnya', 'chevron-right']], label: 'Navigasi halaman' });
  const formatting = group({ icon: 'only', kind: 'toggle', current: [0], items: [['Tebal', 'bold'], ['Miring', 'italic'], ['Garis bawah', 'underline']], label: 'Format teks', demo: true });

  DS.components.push({
    slug: 'button-group',
    name: 'Button group',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-06',
    description:
      'A row of joined buttons for related, equal-weight choices: a view switch (Hari, Minggu, Bulan), pagination arrows or a small set of tools.',
    css: CSS,
    cssFile: 'button-group.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Switch the Icon type, the Current segment and the semantics. In Switch mode the preview works with the arrow keys.' },
          {
            type: 'playground',
            initial: { icon: 'none', current: '0', kind: 'switch', disabled: false },
            controls: [
              { key: 'icon', label: 'Icon', type: 'segmented', options: [['none', 'False'], ['leading', 'Leading'], ['only', 'Only'], ['dot', 'Dot']] },
              { key: 'current', label: 'Current', type: 'segmented', options: [['0', '1st'], ['1', '2nd'], ['2', '3rd'], ['-1', 'None']] },
              { key: 'kind', label: 'Semantics', type: 'segmented', options: [['switch', 'Switch'], ['toggle', 'Toggle']] },
              { key: 'disabled', label: 'Disabled', type: 'toggle' },
            ],
            render: s => group({ ...s, current: Number(s.current), demo: true }),
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
              'Use a button group for related, equal-weight choices: a view switch (Hari, Minggu, Bulan), pagination arrows, or a small set of tools.',
              'Never put a primary action next to secondary ones in a group. Use separate Buttons for that, so the hierarchy shows.',
              'All segments in one group use the same Icon type.',
              'When the group works as a switch, only one segment is Current at a time.',
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
              ['1', 'Group', '40 high (same as Button `md`), 1 px `gray-300` border, radius 8, `shadow-xs`. Clips its children, so only the outer corners are rounded.'],
              ['2', 'Segment', '`white` fill, padding `10 16` (icon-only `10 12`). Current=True fills it `gray-50`.'],
              ['3', 'Divider', '1 px `gray-300` on the trailing side of each segment. The last one is hidden by the group border.'],
              ['4', 'Icon', 'Optional. 20 px, gap 8, `gray-500` (Current: `gray-800`). The Dot variant puts a 10 px `success-500` dot here instead.'],
              ['5', 'Label', 'Text sm / Semibold, `gray-700` (Current: `gray-800`). Icon-only segments drop it and carry an `aria-label`.'],
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
              ['Icon (group)', 'False, Leading, Only', 'Label only, `<svg>` before the label, or `data-icon="only"` with `aria-label` per segment'],
              ['Icon (segment)', 'False, Leading, Only, Dot', 'Dot: `<span class="sb-btn-group-dot">` before the label'],
              ['Current', 'True, False', '`aria-checked="true"` (switch) or `aria-pressed="true"` (toggle)'],
              ['State', 'Default, Hover, Focused, Disabled', '`:hover`, `:focus-visible`, `disabled`. Static mockups only: `data-state="hover"` or `"focus"`'],
            ],
          },
        ],
      },
      {
        id: 'icon',
        title: 'Icon',
        blocks: [
          { type: 'h3', id: 'icon-false', text: 'Text' },
          { type: 'example', html: group({}) },
          { type: 'h3', id: 'icon-leading', text: 'Leading icon' },
          { type: 'example', html: group({ icon: 'leading' }) },
          { type: 'h3', id: 'icon-only', text: 'Icon only' },
          { type: 'example', html: group({ icon: 'only' }) },
          { type: 'h3', id: 'icon-dot', text: 'Dot' },
          { type: 'p', text: 'For status filters. The dot stays `success-500` in every state except Disabled (`gray-300`).' },
          { type: 'example', html: group({ icon: 'dot' }) },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'example', html: matrix, code: false },
          {
            type: 'table',
            head: ['State', 'Current=False (fill / text / icon)', 'Current=True'],
            rows: [
              ['Default', '`white` / `gray-700` / `gray-500`', '`gray-50` / `gray-800` / `gray-800`'],
              ['Hover', '`gray-50` / `gray-800` / `gray-700`', '`gray-50` / `gray-800` / `gray-800`'],
              ['Focused', '`gray-50` / `gray-700` / `gray-700`', '`gray-50` / `gray-800` / `gray-800`'],
              ['Disabled', '`white` / `gray-300` / `gray-300`', '`gray-50` / `gray-300` / `gray-300`'],
            ],
          },
          {
            type: 'note',
            text: "Focused has the same `gray-50` fill as Hover, plus the 2 px `brand-600` focus outline on `:focus-visible`, drawn inside the segment because the group clips its children.",
          },
        ],
      },
      {
        id: 'semantics',
        title: 'Switch, toggle or actions',
        blocks: [
          { type: 'p', text: 'The same look carries three behaviours. Pick the one that matches what a click does, and set the matching ARIA; the Current style follows the ARIA state.' },
          {
            type: 'table',
            head: ['Behaviour', 'Example', 'Markup'],
            rows: [
              ['Switch: one of several', 'Hari, Minggu, Bulan', '`role="radiogroup"` on the group, `role="radio"` + `aria-checked` on each segment, roving `tabindex`'],
              ['Toggle: each on or off', 'Tebal, Miring, Garis bawah', '`role="group"`, `aria-pressed` on each segment'],
              ['Actions: no selection', 'Previous and next page', '`role="group"`, plain buttons, never Current'],
            ],
          },
          { type: 'h3', id: 'switch', text: 'Switch' },
          { type: 'p', text: 'Tab reaches the group once, on the checked segment. ← → move and select.' },
          { type: 'example', html: group({ demo: true }), caption: 'Click a segment or use the arrow keys.' },
          { type: 'h3', id: 'toggle', text: 'Toggle' },
          { type: 'example', html: formatting, caption: 'Click a segment to toggle `aria-pressed`.' },
          { type: 'h3', id: 'actions', text: 'Actions' },
          { type: 'example', html: pagination },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: group({}), text: 'Equal-weight choices of one kind.' },
              {
                kind: 'dont',
                html: group({ kind: 'action', items: [['Batal'], ['Simpan Draf'], ['Kirim']], label: 'Aksi formulir' }),
                text: 'A primary action hidden in a group. Use separate Buttons: Batal (Tertiary gray), Kirim (Primary).',
              },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: group({ icon: 'only' }), text: 'One Icon type for every segment.' },
              {
                kind: 'dont',
                html: group({ icon: 'only', items: [['Daftar', 'list'], ['Grid', 'grid'], ['Kalender', 'calendar']], label: 'Tampilan' }).replace(
                  /(<button[^>]*aria-label="Kalender"[^>]*>)\n\s*<svg[\s\S]*?<\/svg>/,
                  '$1\n    Kalender'
                ),
                text: 'Icon-only segments mixed with a text segment.',
              },
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
              'Never show the choice by colour alone. Set `aria-checked` (switch) or `aria-pressed` (toggle); the CSS styles Current from that attribute.',
              'Give the group an `aria-label` that names the choice ("Rentang waktu").',
              'A switch uses roving `tabindex`: the checked segment has `tabindex="0"`, the others `-1`, and ← → move the choice.',
              'Icon-only segments need an `aria-label` and a tooltip with the same text.',
              'Focus shows a 2 px `brand-600` outline inside the segment on `:focus-visible`.',
            ],
          },
          {
            type: 'table',
            head: ['Segment', 'Text on fill', 'Ratio', 'AA'],
            rows: [
              ['Default', '`gray-700` on `white`', '10.46:1', 'Passes'],
              ['Hover, Current', '`gray-800` on `gray-50`', '14.07:1', 'Passes'],
              ['Focused', '`gray-700` on `gray-50`', '10.01:1', 'Passes'],
              ['Icon, Default', '`gray-500` on `white`', '4.97:1', 'Passes (3:1 needed for icons)'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, then `button-group.css`. A switch also needs the arrow-key script below; toggles and actions need none.' },
          { type: 'code', lang: 'css', filename: 'button-group.css', code: CSS },
          { type: 'h3', id: 'switch-script', text: 'Switch keyboard script' },
          {
            type: 'code',
            lang: 'js',
            filename: 'button-group-switch.js',
            code: `// Click or ← → selects one segment in every role="radiogroup" button group.
document.addEventListener('click', e => {
  const seg = e.target.closest('.sb-btn-group[role="radiogroup"] > button');
  if (seg && !seg.disabled) select(seg);
});
document.addEventListener('keydown', e => {
  const seg = e.target.closest('.sb-btn-group[role="radiogroup"] > button');
  const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
  if (!seg || !step) return;
  e.preventDefault();
  const segs = [...seg.parentElement.children].filter(b => !b.disabled);
  const next = segs[(segs.indexOf(seg) + step + segs.length) % segs.length];
  select(next);
  next.focus();
});
function select(seg) {
  for (const b of seg.parentElement.children) {
    b.setAttribute('aria-checked', String(b === seg));
    b.tabIndex = b === seg ? 0 : -1;
  }
}`,
          },
        ],
      },
      {
        id: 'tokens',
        title: 'Tokens used',
        blocks: [{ type: 'tokens' }],
      },
    ],
  });

  DS.addCss(CSS);
})();

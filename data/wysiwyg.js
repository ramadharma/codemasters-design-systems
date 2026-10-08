// WYSIWYG editor: rich-text toolbar, editor icons and floating tooltip. Source: DESIGN.md §6 WYSIWYG editor,
// Figma nodes 1705-454356 (_WYSIWYG editor icon), 1705-454581 (WYSIWYG toolbar), 1706-438373 (WYSIWYG tooltip).
(() => {
  const { icon, esc } = DS;

  // Fixed order (DESIGN.md): Bold, Italic, H1, H2, Quote, Link, Photo, List bullet, List numbers.
  const TOOLS = [
    ['bold', 'bold', 'Bold', 'Ctrl+B', 'Control+B'],
    ['italic', 'italic', 'Italic', 'Ctrl+I', 'Control+I'],
    ['h1', 'h1', 'Heading 1'],
    ['h2', 'h2', 'Heading 2'],
    ['blockquote', 'quote', 'Quote'],
    ['createLink', 'link', 'Link'],
    ['insertImage', 'image', 'Photo'],
    ['insertUnorderedList', 'list', 'List bullet'],
    ['insertOrderedList', 'list-ordered', 'List numbers'],
  ];
  const BLOCKS = [['p', 'Normal text'], ['h1', 'Heading 1'], ['h2', 'Heading 2'], ['blockquote', 'Quote']];

  // ---- Reference behaviour. Production editors (TipTap, Lexical…) keep this markup, CSS and ARIA;
  // this version uses the browser's built-in editing so the docs page works with no dependency.
  function wysClick(e) {
    const btn = e.target.closest?.('.sb-wys-btn[data-cmd]');
    if (!btn) return;
    const wys = btn.closest('.sb-wys');
    const area = wys.querySelector('.sb-wys-area');
    const cmd = btn.dataset.cmd;
    area.focus();
    if (['h1', 'h2', 'blockquote'].includes(cmd)) {
      document.execCommand('formatBlock', false, currentBlock() === cmd ? 'p' : cmd);
    } else if (cmd === 'createLink' || cmd === 'insertImage') {
      const url = prompt(cmd === 'createLink' ? 'Alamat tautan' : 'Alamat gambar', 'https://');
      if (url) document.execCommand(cmd, false, url);
    } else {
      document.execCommand(cmd);
    }
    syncWys(wys);
  }
  // Keep the text selection when a toolbar button is pressed with the mouse.
  function wysMousedown(e) {
    if (e.target.closest?.('.sb-wys-btn')) e.preventDefault();
  }
  function wysSelect(e) {
    const select = e.target.closest?.('.sb-wys-select');
    if (!select) return;
    const wys = select.closest('.sb-wys');
    wys.querySelector('.sb-wys-area').focus();
    document.execCommand('formatBlock', false, select.value);
    syncWys(wys);
  }
  function currentBlock() {
    return (document.queryCommandValue('formatBlock') || 'p').toLowerCase().replace(/^div$/, 'p');
  }
  // Active = the format is applied to the current selection (aria-pressed).
  function syncWys(wys) {
    const block = currentBlock();
    wys.querySelectorAll('.sb-wys-btn[data-cmd]').forEach(b => {
      const cmd = b.dataset.cmd;
      const on = ['h1', 'h2', 'blockquote'].includes(cmd) ? block === cmd : ['bold', 'italic', 'insertUnorderedList', 'insertOrderedList'].includes(cmd) && document.queryCommandState(cmd);
      b.setAttribute('aria-pressed', String(Boolean(on)));
    });
    const select = wys.querySelector('.sb-wys-select');
    if (select) select.value = BLOCK_VALUES.includes(block) ? block : 'p';
  }
  const BLOCK_VALUES = ['p', 'h1', 'h2', 'blockquote'];
  // Floating tooltip: sits 8 px above the selection; the arrow follows when the bubble hits an edge.
  function wysSelection() {
    const sel = document.getSelection();
    document.querySelectorAll('.sb-wys').forEach(wys => {
      const area = wys.querySelector('.sb-wys-area');
      const inside = sel.rangeCount && area.contains(sel.anchorNode);
      if (inside) syncWys(wys);
      const bubble = wys.querySelector('.sb-wys-bubble');
      if (!bubble) return;
      if (!inside || sel.isCollapsed) return (bubble.hidden = true);
      bubble.hidden = false;
      const r = sel.getRangeAt(0).getBoundingClientRect();
      const box = wys.getBoundingClientRect();
      const ideal = r.left + r.width / 2 - box.left - bubble.offsetWidth / 2;
      const left = Math.max(0, Math.min(ideal, box.width - bubble.offsetWidth));
      bubble.dataset.arrow = left < ideal ? 'right' : left > ideal ? 'left' : 'center';
      bubble.style.left = `${left}px`;
      bubble.style.top = `${r.top - box.top - bubble.offsetHeight - 8}px`;
    });
  }

  const strip = f => f.toString().replace(/^  /gm, '');
  const SCRIPT = `// Reference behaviour for the WYSIWYG editor, built on the browser's own editing commands.
// In production keep the markup, CSS and ARIA and let the app's editor library do the editing.
const BLOCK_VALUES = ['p', 'h1', 'h2', 'blockquote'];
${[wysClick, wysMousedown, wysSelect, currentBlock, syncWys, wysSelection].map(strip).join('\n')}
document.addEventListener('click', wysClick);
document.addEventListener('mousedown', wysMousedown);
document.addEventListener('change', wysSelect);
document.addEventListener('selectionchange', wysSelection);`;

  const CSS = `/* WYSIWYG editor, Codemasters Design System
   Needs tokens.css. Behaviour comes from the app's editor (reference: wysiwyg.js).

   <div class="sb-wys">
     <div class="sb-wys-toolbar" role="toolbar" aria-label="Format teks">
       <select class="sb-wys-select" aria-label="Gaya teks">…</select>
       <div class="sb-wys-icons">
         <button class="sb-wys-btn" type="button" data-cmd="bold" aria-pressed="false" aria-label="Bold"
                 aria-keyshortcuts="Control+B" data-tip="Bold · Ctrl+B"><svg aria-hidden="true">…</svg></button>
         …
       </div>
     </div>
     <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Ringkasan"></div>
   </div>

   data-breakpoint="mobile" on .sb-wys-toolbar: column layout, 28 px icons.
   .sb-wys-bubble instead of the toolbar: floating Dark tooltip above the selection. Use one, not both. */

.sb-wys { position: relative; display: grid; gap: 12px; }

/* Toolbar */
.sb-wys-toolbar { display: flex; align-items: center; gap: 12px; }
.sb-wys-toolbar[data-breakpoint="mobile"] { flex-direction: column; align-items: stretch; gap: 8px; }
.sb-wys-select {
  box-sizing: border-box; width: 240px; height: 44px; margin: 0; padding: 0 40px 0 14px;
  font: 500 var(--text-md) var(--font); color: var(--gray-900);
  background: var(--white) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23667085' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right 14px center / 20px;
  border: 1px solid var(--gray-300); border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  appearance: none; cursor: pointer;
}
.sb-wys-select:focus-visible { outline: none; border-color: var(--brand-300); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring); }
.sb-wys-toolbar[data-breakpoint="mobile"] .sb-wys-select { width: 100%; }
.sb-wys-icons { display: flex; flex-wrap: wrap; gap: 4px; }
.sb-wys-toolbar[data-breakpoint="mobile"] .sb-wys-icons { gap: 2px; } /* 28 px icons, gap 2 */

/* Editor icon: 32 x 32, 20 px glyph, radius 8 like every icon button of 32+. Light theme on the white toolbar. */
.sb-wys-btn {
  position: relative; box-sizing: border-box;
  display: inline-flex; align-items: center; justify-content: center; flex: none;
  width: 32px; height: 32px; margin: 0; padding: 0;
  color: var(--gray-400); background: none; border: 0; border-radius: var(--radius-md);
  cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-wys-btn > svg { width: 20px; height: 20px; }
.sb-wys-toolbar[data-breakpoint="mobile"] .sb-wys-btn { width: 28px; height: 28px; }
.sb-wys-btn:hover { background: var(--gray-50); color: var(--gray-600); }
.sb-wys-btn[aria-pressed="true"] { background: var(--brand-100); color: var(--brand-700); }
.sb-wys-btn:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 0; }

/* Tooltip on each icon: name and shortcut, Dark tooltip spec. */
.sb-wys-btn[data-tip]::after {
  content: attr(data-tip); position: absolute; z-index: 10; bottom: calc(100% + 8px); left: 50%; translate: -50% 0;
  padding: 8px 12px; border-radius: var(--radius-md); background: var(--gray-900); box-shadow: var(--shadow-lg);
  font: 600 var(--text-xs) var(--font); color: var(--white); white-space: nowrap;
  visibility: hidden; opacity: 0; transition: opacity 150ms var(--ease), visibility 0s 150ms; pointer-events: none;
}
.sb-wys-btn[data-tip]:is(:hover, :focus-visible)::after { visibility: visible; opacity: 1; transition: opacity 150ms var(--ease) 300ms; }

/* Floating tooltip (Dark): gray-900, radius 8, padding 8, icons gap 4, 16 x 6 arrow, shadow-lg drawn as a filter. */
.sb-wys-bubble {
  position: absolute; z-index: 20; display: flex; gap: 4px; padding: 8px;
  background: var(--gray-900); border-radius: var(--radius-md);
  filter: drop-shadow(0 12px 8px rgba(16,24,40,.08)) drop-shadow(0 4px 3px rgba(16,24,40,.03));
}
.sb-wys-bubble[hidden] { display: none; }
.sb-wys-bubble::after {
  content: ''; position: absolute; top: 100%; left: 50%; translate: -50% 0;
  border: 8px solid transparent; border-top: 6px solid var(--gray-900); border-bottom: 0;
}
.sb-wys-bubble[data-arrow="left"]::after { left: 24px; }
.sb-wys-bubble[data-arrow="right"]::after { left: auto; right: 8px; translate: 0 0; }
.sb-wys-bubble[data-breakpoint="mobile"] .sb-wys-btn { width: 28px; height: 28px; }
.sb-wys-bubble[data-breakpoint="mobile"] { gap: 2px; }
/* Dark theme icons (inside the tooltip) */
.sb-wys-bubble .sb-wys-btn { color: var(--gray-300); }
.sb-wys-bubble .sb-wys-btn:hover { background: var(--gray-700); color: var(--white); }
.sb-wys-bubble .sb-wys-btn[aria-pressed="true"] { background: var(--gray-600); color: var(--white); }

/* Editor area: same box as Textarea input field. */
.sb-wys-area {
  box-sizing: border-box; min-height: 128px; padding: 10px 14px;
  font: 400 var(--text-md) var(--font); color: var(--gray-900);
  background: var(--white); border: 1px solid var(--gray-300); border-radius: var(--radius-md); box-shadow: var(--shadow-xs);
  overflow-wrap: anywhere;
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-wys-area:focus { outline: none; border-color: var(--brand-300); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring); }
.sb-wys-area[aria-invalid="true"] { border-color: var(--error-300); }
.sb-wys-area[aria-invalid="true"]:focus { box-shadow: var(--shadow-xs), 0 0 0 4px var(--error-100); }
/* Content styles map to the type scale. */
.sb-wys-area > * { margin: 0; }
.sb-wys-area > * + * { margin-top: 8px; }
.sb-wys-area h1 { font: 600 var(--text-lg) var(--font); }
.sb-wys-area h2 { font: 600 var(--text-md) var(--font); }
.sb-wys-area blockquote { padding-inline-start: 12px; border-inline-start: 2px solid var(--gray-300); color: var(--gray-600); }
.sb-wys-area ul, .sb-wys-area ol { padding-inline-start: 24px; }
.sb-wys-area a { color: var(--brand-700); text-underline-offset: 4px; }
.sb-wys-area img { max-width: 100%; border-radius: var(--radius-md); }

@media (prefers-reduced-motion: reduce) {
  .sb-wys-btn, .sb-wys-area, .sb-wys-btn[data-tip]::after { transition: none; }
}
`;

  const btn = ([cmd, glyph, name, keys, aria], pressed = false, tip = true) =>
    `<button class="sb-wys-btn" type="button" data-cmd="${cmd}" aria-pressed="${pressed}" aria-label="${name}"${aria ? ` aria-keyshortcuts="${aria}"` : ''}${tip ? ` data-tip="${name}${keys ? ` · ${keys}` : ''}"` : ''}>${icon(glyph)}</button>`;
  const icons = (pressed = [], tip = true) => TOOLS.map(t => btn(t, pressed.includes(t[0]), tip));
  const select = `<select class="sb-wys-select" aria-label="Gaya teks">${BLOCKS.map(([v, l]) => `<option value="${v}">${l}</option>`).join('')}</select>`;

  const CONTENT = '<h2>Ringkasan klaim</h2>\n    <p>Pasien dirawat <strong>3 hari</strong> dengan diagnosis demam berdarah. Dokumen pendukung lengkap.</p>\n    <ul><li>Resume medis</li><li>Invoice rumah sakit</li></ul>';

  function editor({ variant = 'toolbar', breakpoint = 'desktop', content = CONTENT, label = 'Ringkasan AI' } = {}) {
    const bp = breakpoint === 'mobile' ? ' data-breakpoint="mobile"' : '';
    const lines = ['<div class="sb-wys">'];
    if (variant === 'toolbar') {
      lines.push(`  <div class="sb-wys-toolbar" role="toolbar" aria-label="Format teks"${bp}>`, `    ${select}`, '    <div class="sb-wys-icons">', ...icons().map(b => `      ${b}`), '    </div>', '  </div>');
    } else {
      lines.push(`  <div class="sb-wys-bubble" role="toolbar" aria-label="Format teks" data-arrow="center"${bp} hidden>`, ...icons([], false).map(b => `    ${b}`), '  </div>');
    }
    lines.push(`  <div class="sb-wys-area" contenteditable="true" role="textbox" aria-multiline="true" aria-label="${esc(label)}">`, `    ${content}`, '  </div>', '</div>');
    return lines.join('\n');
  }

  // Static specimens are inert: they show the look, not the behaviour.
  const iconMatrix = `<div class="matrix" style="--cols: 2" inert>
<span></span><span class="mx">Inactive</span><span class="mx">Active</span>
<span class="mx">Light</span><div class="sb-wys-icons">${btn(TOOLS[0], false, false)}</div><div class="sb-wys-icons">${btn(TOOLS[0], true, false)}</div>
<span class="mx">Dark</span><div class="sb-wys-bubble" style="position: relative">${btn(TOOLS[0], false, false)}</div><div class="sb-wys-bubble" style="position: relative">${btn(TOOLS[0], true, false)}</div>
</div>`;
  const bubbleSpecimens = `<div class="bubble-row" inert>
${['left', 'center', 'right'].map(a => `<div class="sb-wys-bubble" style="position: relative" data-arrow="${a}">${icons(['bold'], false).join('')}</div>`).join('\n')}
<div class="sb-wys-bubble" style="position: relative" data-arrow="center" data-breakpoint="mobile">${icons(['bold'], false).join('')}</div>
</div>`;

  const anatomy = `<div class="sb-wys" style="width: 608px">
  <div class="sb-wys-toolbar" role="toolbar" aria-label="Format teks" data-pin="1" data-pin-at="start">
    <span data-pin="2">${select.replace('<select', '<select tabindex="-1"')}</span>
    <div class="sb-wys-icons">
      <span data-pin="3">${btn(TOOLS[0], true, false).replace('<button', '<button tabindex="-1"')}</span>
      ${TOOLS.slice(1).map(t => btn(t, false, false).replace('<button', '<button tabindex="-1"')).join('\n      ')}
    </div>
  </div>
  <div class="sb-wys-area" role="textbox" aria-label="Contoh" data-pin="4" data-pin-at="start"><p><strong>Pasien</strong> dirawat 3 hari.</p></div>
</div>`;

  DS.components.push({
    slug: 'wysiwyg',
    name: 'WYSIWYG editor',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-06',
    description: 'Rich-text formatting for long text a user writes or edits: the AI summary ("Edit Ringkasan") and advisor notes. Use a plain Textarea when formatting is not needed.',
    css: CSS,
    cssFile: 'wysiwyg.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'The editor is live. Select text and use the toolbar, or switch to Floating tooltip and select text to see it appear above the selection. Ctrl+B and Ctrl+I work too.' },
          {
            type: 'playground',
            initial: { variant: 'toolbar', breakpoint: 'desktop' },
            controls: [
              { key: 'variant', label: 'Controls', type: 'segmented', options: [['toolbar', 'Toolbar'], ['tooltip', 'Floating tooltip']] },
              { key: 'breakpoint', label: 'Breakpoint', type: 'segmented', options: [['desktop', 'Desktop'], ['mobile', 'Mobile']] },
            ],
            render: s => `<div class="wys-stage${s.breakpoint === 'mobile' ? ' is-mobile' : ''}">${editor(s)}</div>`,
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
              'Use it for long text a user writes or edits and that needs structure: the AI summary ("Edit Ringkasan"), advisor notes.',
              'When formatting is not needed, use Textarea input field.',
              '**Toolbar or tooltip, not both,** in one editor.',
              '**Icon order is fixed:** Bold, Italic, H1, H2, Quote, Link, Photo, List bullet, List numbers.',
              'The editor area follows Textarea input field: border, focus ring, error and counter.',
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
              ['1', 'Toolbar', 'Fixed above the editor area. Desktop: row, gap 12. Mobile: column, gap 8.'],
              ['2', 'Text-style dropdown', '240 × 44 (full width on mobile), "Normal text", Text md / Medium `gray-900`, 20 px chevron.'],
              ['3', 'Editor icon', '32 × 32 (28 on mobile), 20 px glyph, radius 8. Inactive `gray-400`; active `brand-100` fill, `brand-700` glyph.'],
              ['4', 'Editor area', 'Same box as Textarea input field: min height 128, padding `10 14`, 1 px `gray-300` border, radius 8, `shadow-xs`.'],
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
            head: ['Component', 'Property', 'Values', 'Code'],
            rows: [
              ['Editor icon', 'Type', 'Bold, Italic, H1, H2, Quote, Link, Photo, List bullet, List numbers', '`data-cmd` + `aria-label`'],
              ['Editor icon', 'Active', 'True, False', '`aria-pressed="true"`'],
              ['Editor icon', 'Theme', 'Light, Dark', 'Light in `.sb-wys-toolbar`, Dark in `.sb-wys-bubble`'],
              ['Toolbar', 'Breakpoint', 'Desktop, Mobile', '`data-breakpoint="mobile"` on the toolbar'],
              ['Tooltip', 'Arrow', 'Center, Left, Right', '`data-arrow` on `.sb-wys-bubble` (set by the script)'],
              ['Tooltip', 'Breakpoint', 'Default (336 wide), Mobile (280 wide)', '`data-breakpoint="mobile"` on the bubble'],
            ],
          },
        ],
      },
      {
        id: 'editor-icon',
        title: 'Editor icon',
        blocks: [
          { type: 'example', html: iconMatrix, code: false },
          {
            type: 'table',
            head: ['Theme', 'Inactive glyph', 'Active'],
            rows: [
              ['Light (on the white toolbar)', '`gray-400`', '`brand-100` fill, `brand-700` glyph'],
              ['Dark (in the tooltip)', '`gray-300`', '`gray-600` fill, `white` glyph'],
            ],
          },
          { type: 'p', text: 'Active means the format is applied to the current selection (`aria-pressed="true"`). Every icon has an `aria-label` and a tooltip with its name and, where one works, the shortcut: "Bold · Ctrl+B". Hover adds a `gray-50` fill so the icon reads as a button.' },
        ],
      },
      {
        id: 'toolbar',
        title: 'Toolbar',
        blocks: [
          { type: 'h3', id: 'toolbar-desktop', text: 'Desktop' },
          { type: 'example', html: `<div class="wys-stage">${editor({ content: '<p>Pilih teks ini, lalu format dengan toolbar.</p>' })}</div>` },
          { type: 'h3', id: 'toolbar-mobile', text: 'Mobile' },
          { type: 'example', html: `<div class="wys-stage is-mobile">${editor({ breakpoint: 'mobile', content: '<p>Pilih teks ini, lalu format dengan toolbar.</p>' })}</div>` },
          {
            type: 'table',
            head: ['Breakpoint', 'Layout'],
            rows: [
              ['Desktop', 'Row, gap 12: text-style dropdown (240 × 44) + 9 icons (32 px, gap 4)'],
              ['Mobile', 'Column, gap 8: full-width dropdown, then 9 icons (28 px, gap 2)'],
            ],
          },
        ],
      },
      {
        id: 'tooltip',
        title: 'Floating tooltip',
        blocks: [
          { type: 'p', text: 'Appears above selected text: `gray-900` fill, radius 8, padding 8, Dark icons with gap 4, and a 16 × 6 arrow pointing at the selection. `shadow-lg` is drawn as a drop-shadow so it follows the arrow. The arrow moves Left or Right when the bubble would leave the editor.' },
          { type: 'example', html: `<div class="wys-stage">${editor({ variant: 'tooltip', content: '<p>Pilih sebagian teks ini untuk memunculkan tooltip format di atasnya.</p>' })}</div>`, caption: 'Select some of the text.' },
          { type: 'example', html: bubbleSpecimens, code: false, caption: 'Arrow Left, Center, Right, and the Mobile breakpoint.' },
        ],
      },
      {
        id: 'content-styles',
        title: 'Content styles',
        blocks: [
          {
            type: 'table',
            head: ['Element', 'Style'],
            rows: [
              ['Heading 1', 'Text lg / Semibold'],
              ['Heading 2', 'Text md / Semibold'],
              ['Body', 'Text md / Regular, `gray-900`'],
              ['Quote', '2 px `gray-300` rule on the leading side, padding 12, `gray-600` text'],
              ['Link', '`brand-700`, underlined'],
              ['Lists', 'Indented 24'],
            ],
          },
          { type: 'p', text: 'Blocks sit 8 apart. Quote, link and list styles follow the existing type and colour rules.' },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: `<div class="wys-stage" inert>${editor({ content: '<p>Toolbar saja.</p>' })}</div>`, text: 'One way to format: the toolbar.' },
              {
                kind: 'dont',
                html: `<div class="wys-stage" inert>${editor({ content: '<p>Toolbar dan tooltip.</p>' }).replace('<div class="sb-wys-area"', `<div class="sb-wys-bubble" style="position: relative; justify-self: start" data-arrow="center">${icons([], false).slice(0, 4).join('')}</div>\n  <div class="sb-wys-area"`)}</div>`,
                text: 'Toolbar and floating tooltip together. Two controls for the same job.',
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
              'The toolbar is `role="toolbar"` with an `aria-label`; the editor area is `role="textbox"` with `aria-multiline="true"` and a label.',
              'Each icon is a button with `aria-label`, `aria-pressed` for its state, and `aria-keyshortcuts` when a shortcut exists.',
              'Show a shortcut in the tooltip only when it really works (Bold, Italic).',
              'Pressing a toolbar button with the mouse keeps the text selection, so the format applies to what the user selected.',
            ],
          },
          {
            type: 'table',
            head: ['Pair', 'Ratio', 'Needed', 'Result'],
            rows: [
              ['Inactive icon `gray-400` on `white`', '2.58:1', '3:1 (icons)', '**Fails**'],
              ['Active icon `brand-700` on `brand-100`', '5.45:1', '3:1', 'Passes'],
              ['Dark inactive `gray-300` on `gray-900`', '12.04:1', '3:1', 'Passes'],
              ['Dark active `white` on `gray-600`', '7.69:1', '3:1', 'Passes'],
            ],
          },
          { type: 'note', tone: 'warning', text: 'Inactive toolbar icons in `gray-400` are below the 3:1 that WCAG 1.4.11 asks for icons. `gray-500` (4.97:1) passes. Decision for the design team.' },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css` and `wysiwyg.css`. The reference script below makes this page work with the browser\'s built-in editing; a production editor library should keep the same markup, classes and ARIA.' },
          { type: 'code', lang: 'css', filename: 'wysiwyg.css', code: CSS },
          { type: 'h3', id: 'wysiwyg-script', text: 'Reference script' },
          { type: 'code', lang: 'js', filename: 'wysiwyg.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('click', wysClick);
  document.addEventListener('mousedown', wysMousedown);
  document.addEventListener('change', wysSelect);
  document.addEventListener('selectionchange', wysSelection);
})();

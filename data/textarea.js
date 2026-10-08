// Textarea input field: multi-line text with label, hint, error and an optional character counter.
// Source: DESIGN.md §6 Textarea input field, Figma nodes 1238-80 (_Textarea input field base), 1238-278 (Textarea input field).
(() => {
  const { esc } = DS;

  // Character counter for every textarea with data-limit. Typing past the limit is allowed:
  // the counter turns red, the field goes into error and the hint says what to do. Text is never cut.
  function updateCounter(e) {
    const ta = e.target.closest('.sb-textarea textarea[data-limit]');
    if (!ta) return;
    const limit = Number(ta.dataset.limit);
    const over = ta.value.length > limit;
    const count = ta.parentElement.querySelector('.sb-textarea-count');
    count.textContent = `${ta.value.length}/${limit}`;
    count.toggleAttribute('data-over', over);
    if (over) ta.setAttribute('aria-invalid', 'true');
    else ta.removeAttribute('aria-invalid');
    const hint = ta.closest('.sb-field').querySelector('.sb-field-hint[data-error]');
    if (hint) hint.textContent = over ? hint.dataset.error : hint.dataset.hint;
  }
  // The published script is this exact function, so the docs run what they document.
  const SCRIPT = `// Character counter for every textarea with data-limit. Typing past the limit is allowed:
// the counter turns red, the field goes into error and the hint says what to do. Text is never cut.
${updateCounter.toString().replace(/^  /gm, '')}
document.addEventListener('input', updateCounter);`;

  const CSS = `/* Textarea input field, Codemasters Design System
   Needs tokens.css. Label and hint rules are the same as input-field.css; loading both is safe.

   <div class="sb-field">
     <label class="sb-field-label" for="alasan">Alasan penolakan</label>
     <div class="sb-textarea">
       <textarea id="alasan" data-limit="150" aria-describedby="alasan-hint alasan-count"></textarea>
       <span class="sb-textarea-count" id="alasan-count">0/150</span>
     </div>
     <p class="sb-field-hint" id="alasan-hint" aria-live="polite"
        data-hint="Alasan ini dikirim ke peserta." data-error="Maksimal 150 karakter.">Alasan ini dikirim ke peserta.</p>
   </div>

   Show limit   data-limit on the textarea + .sb-textarea-count (needs textarea-counter.js). Never use maxlength.
   Destructive  aria-invalid="true" on the textarea.
   Disabled     the disabled attribute.
   data-state="focus" on .sb-textarea forces Focused in static mockups and docs only. */

.sb-field { display: grid; gap: 6px; } /* label, control, hint 6 apart */
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-field:has([aria-invalid="true"]) .sb-field-hint { color: var(--error-500); }

.sb-textarea { position: relative; display: grid; }
.sb-textarea textarea {
  --ta-border: var(--gray-300); --ta-focus: var(--brand-300); --ta-ring: var(--focus-ring);
  box-sizing: border-box; width: 100%; height: 128px; min-height: 128px; margin: 0;
  padding: 10px 14px; /* control padding exception, same as Input field */
  resize: vertical;
  font: 400 var(--text-md) var(--font); color: var(--gray-900);
  background: var(--white);
  border: 1px solid var(--ta-border); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-textarea textarea::placeholder { color: var(--gray-500); opacity: 1; }
/* Room for the counter so the last line never runs under it: 10 + 18 + 4. */
.sb-textarea:has(.sb-textarea-count) textarea { padding-bottom: 32px; }

/* States */
.sb-textarea textarea:hover:not(:focus, :disabled, [aria-invalid="true"]) { border-color: var(--gray-400); }
.sb-textarea textarea:focus, .sb-textarea[data-state="focus"] textarea {
  outline: none; border-color: var(--ta-focus); box-shadow: var(--shadow-xs), 0 0 0 4px var(--ta-ring);
}
.sb-textarea textarea:disabled { opacity: .5; cursor: not-allowed; resize: none; } /* the default look at 50 % opacity */
.sb-textarea textarea[aria-invalid="true"] { --ta-border: var(--error-300); --ta-focus: var(--error-300); --ta-ring: var(--error-100); }

/* Character counter: bottom-right inside the box. Kept 24 from the edge so it clears the resize grip. */
.sb-textarea-count {
  position: absolute; bottom: 10px; inset-inline-end: 24px;
  font: 400 var(--text-xs) var(--font); color: var(--gray-500);
  pointer-events: none; font-variant-numeric: tabular-nums;
}
.sb-textarea-count[data-over] { color: var(--error-500); }

@media (prefers-reduced-motion: reduce) {
  .sb-textarea textarea { transition: none; }
}
`;

  const C = {
    label: 'Alasan penolakan',
    placeholder: 'Tulis alasan yang bisa dipahami peserta…',
    value: 'Resume medis belum dilampirkan. Mohon unggah resume medis dari rumah sakit, lalu ajukan ulang klaim.',
    long: 'Resume medis belum dilampirkan. Mohon unggah resume medis dari rumah sakit, lalu ajukan ulang klaim. Pastikan resume memuat diagnosis, tindakan dan tanggal rawat inap.',
    hint: 'Alasan ini dikirim ke peserta.',
    required: 'Alasan penolakan wajib diisi.',
    limitError: 'Maksimal 150 karakter.',
    limit: 150,
  };

  let uid = 0;
  // state: placeholder | filled | focus | disabled. over: prefill past the limit. destructive: empty required field.
  function textarea({ state = 'placeholder', destructive = false, label = true, hint = true, limit = false, over = false, id } = {}) {
    const key = id || `ta-${++uid}`;
    const disabled = state === 'disabled' && !destructive && !over;
    const value = over ? C.long : destructive ? '' : state === 'placeholder' ? '' : C.value;
    const invalid = destructive || (limit && value.length > C.limit);
    const showHint = hint || invalid;
    const describedBy = [showHint ? `${key}-hint` : '', limit ? `${key}-count` : ''].filter(Boolean).join(' ');

    const attrs = [`id="${key}"`, `placeholder="${esc(C.placeholder)}"`];
    if (limit) attrs.push(`data-limit="${C.limit}"`);
    if (!label) attrs.push(`aria-label="${esc(C.label)}"`);
    if (describedBy) attrs.push(`aria-describedby="${describedBy}"`);
    if (invalid) attrs.push('aria-invalid="true"');
    if (disabled) attrs.push('disabled');

    const lines = ['<div class="sb-field">'];
    if (label) lines.push(`  <label class="sb-field-label" for="${key}">${esc(C.label)}</label>`);
    lines.push(`  <div class="sb-textarea"${state === 'focus' && !disabled ? ' data-state="focus"' : ''}>`);
    lines.push(`    <textarea ${attrs.join(' ')}>${esc(value)}</textarea>`);
    if (limit) lines.push(`    <span class="sb-textarea-count" id="${key}-count"${value.length > C.limit ? ' data-over' : ''}>${value.length}/${C.limit}</span>`);
    lines.push('  </div>');
    if (showHint) {
      const msg = destructive ? C.required : invalid ? C.limitError : C.hint;
      const live = limit ? ` aria-live="polite" data-hint="${esc(C.hint)}" data-error="${esc(C.limitError)}"` : '';
      lines.push(`  <p class="sb-field-hint" id="${key}-hint"${live}>${esc(msg)}</p>`);
    }
    lines.push('</div>');
    return lines.join('\n');
  }

  const stage = html => `<div class="field-stage">${html}</div>`;
  const STATES = [['placeholder', 'Placeholder'], ['filled', 'Default (filled)'], ['focus', 'Focused'], ['disabled', 'Disabled']];
  const stateStack = `<div class="matrix field-matrix" style="--cols: 1">
${[
    ...STATES.map(([s, l]) => [l, textarea({ state: s, limit: true, id: `ta-st-${s}` })]),
    ['Destructive', textarea({ destructive: true, id: 'ta-st-err' })],
    ['Over the limit', textarea({ over: true, limit: true, id: 'ta-st-over' })],
  ].map(([l, f]) => `<span class="mx">${l}</span>${f}`).join('\n')}
</div>`;

  const anatomy = `<div class="sb-field">
  <label class="sb-field-label" for="ta-anat" data-pin="1" data-pin-at="start">${esc(C.label)}</label>
  <div class="sb-textarea" data-pin="2" data-pin-at="start">
    <textarea id="ta-anat" placeholder="${esc(C.placeholder)}" tabindex="-1" aria-describedby="ta-anat-count">Resume medis belum dilampirkan.</textarea>
    <span class="sb-textarea-count" id="ta-anat-count" data-pin="3">31/${C.limit}</span>
  </div>
  <p class="sb-field-hint" data-pin="4" data-pin-at="start">${esc(C.hint)}</p>
</div>`;

  DS.components.push({
    slug: 'textarea',
    name: 'Textarea input field',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-06',
    description: 'Multi-line text: notes, rejection reasons, AI summary edits. Same label, hint and error as Input field, plus an optional character counter.',
    css: CSS,
    cssFile: 'textarea.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'The field is live: type in it, drag the corner to resize, and with Show limit on, go past 150 characters to see the error.' },
          {
            type: 'playground',
            initial: { state: 'placeholder', destructive: false, label: true, hint: true, limit: true },
            controls: [
              { key: 'state', label: 'State', type: 'segmented', options: [['placeholder', 'Placeholder'], ['filled', 'Default'], ['focus', 'Focused'], ['disabled', 'Disabled']] },
              { key: 'destructive', label: 'Destructive', type: 'toggle' },
              { key: 'label', label: 'Label', type: 'toggle' },
              { key: 'hint', label: 'Hint text', type: 'toggle' },
              { key: 'limit', label: 'Show limit', type: 'toggle' },
            ],
            render: s => stage(textarea({ ...s, id: 'pg-ta' })),
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
              'Use a textarea for text longer than one line: notes, reasons, AI summary edits. For one line use Input field.',
              'When the text needs formatting (headings, lists, bold), use the WYSIWYG editor instead.',
              '**Always show a label above the field.** The placeholder is an example, never the label.',
              '**Show the counter only when there is a limit.** Keep typing allowed past it and show the error, so text is never cut off.',
              '**Resize vertically only** (`resize: vertical`), never below 128.',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: anatomy, code: false, layout: 'anat', caption: 'Parts are spaced out to fit the numbers; the real gap between label, box and hint is 6.' },
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Label', 'Text sm / Medium, `gray-700`. Same as Input field.'],
              ['2', 'Box', '128 high by default, padding `10 14`, `white`, 1 px `gray-300` border, radius 8, `shadow-xs`. Text md / Regular from the top-left: placeholder `gray-500`, value `gray-900`. No help or alert icon inside.'],
              ['3', 'Character counter', 'Optional. Text xs / Regular `gray-500`, bottom-right inside the box (`0/150`). Turns `error-500` past the limit (`151/150`).'],
              ['4', 'Hint text', 'Text sm / Regular `gray-500`. In error it becomes the message in `error-500`.'],
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
              ['Label', 'True, False', '`<label class="sb-field-label" for>`; without it, `aria-label` on the textarea'],
              ['Hint text', 'True, False', '`<p class="sb-field-hint" id>` + `aria-describedby`'],
              ['Show limit (base)', 'True, False', '`data-limit="150"` on the textarea + `<span class="sb-textarea-count">`'],
              ['Destructive', 'True, False', '`aria-invalid="true"` on the textarea'],
              ['State', 'Placeholder, Default (filled), Focused, Disabled', 'empty, text content, `:focus`, `disabled`. Static mockups only: `data-state="focus"`'],
            ],
          },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'example', html: stateStack, code: false },
          {
            type: 'table',
            head: ['State', 'Fill', 'Border', 'Extra'],
            rows: [
              ['Placeholder', '`white`', '`gray-300`', 'Placeholder `gray-500`. Hover: border `gray-400`'],
              ['Default (filled)', '`white`', '`gray-300`', 'Value `gray-900`'],
              ['Focused', '`white`', '`brand-300`', 'ring `0 0 0 4px` `focus-ring` + `shadow-xs`'],
              ['Disabled', 'Default at 50 % opacity', 'Default at 50 % opacity', 'No resize, `cursor: not-allowed`'],
              ['Destructive', '`white`', '`error-300`', 'Message in `error-500`; focused ring `error-100`'],
              ['Over the limit', '`white`', '`error-300`', 'Counter `error-500`, message "Maksimal 150 karakter."'],
            ],
          },
        ],
      },
      {
        id: 'counter',
        title: 'Character counter',
        blocks: [
          {
            type: 'list',
            items: [
              'Show the counter only when the field has a limit.',
              'Never set `maxlength`: it silently drops what the user types or pastes. Let the text run over, turn the counter red and say what to do.',
              'The counter updates on every keystroke; the hint has `aria-live="polite"`, so screen readers hear the error once when it appears, not every count.',
            ],
          },
          { type: 'example', html: stage(textarea({ over: true, limit: true, id: 'ta-over' })), caption: 'Delete a few words to bring it back under 150.' },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(textarea({ over: true, limit: true, id: 'ta-dd-over' })), text: 'Allow typing past the limit and say how to fix it.' },
              {
                kind: 'dont',
                html: stage(textarea({ state: 'filled', limit: true, id: 'ta-dd-cut' }).replace(esc(C.value), esc(C.long.slice(0, 150))).replace(`${C.value.length}/150`, '150/150')),
                text: '`maxlength` cuts the text mid-word, and the user is not told.',
              },
            ],
          },
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: stage(textarea({ state: 'filled', hint: false, id: 'ta-dd-multi' })), text: 'A textarea for a reason that runs over several lines.' },
              {
                kind: 'dont',
                html: stage(`<div class="sb-field">\n  <label class="sb-field-label" for="ta-dd-single">${esc(C.label)}</label>\n  <div class="sb-input">\n    <input id="ta-dd-single" type="text" value="${esc(C.value)}">\n  </div>\n</div>`),
                text: 'A single-line input for long text. The user cannot read back what they wrote.',
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
              'Connect the label with `for` / `id`; a field without a visible label needs `aria-label`.',
              '`aria-describedby` points at the hint and the counter, so both are read when the field gets focus.',
              'In error set `aria-invalid="true"`; the counter script does this when the text passes the limit.',
              'Resize stays vertical, so a taller box never breaks the layout sideways.',
            ],
          },
          {
            type: 'table',
            head: ['Text', 'On', 'Ratio', 'AA'],
            rows: [
              ['Value `gray-900`', '`white`', '17.75:1', 'Passes'],
              ['Placeholder, hint, counter `gray-500`', '`white`', '4.97:1', 'Passes'],
              ['Error message, counter over limit `error-500`', '`white`', '3.76:1', '**Fails**'],
            ],
          },
          { type: 'note', tone: 'warning', text: 'Same open decision as Input field: `error-500` text is below AA. `error-600` (4.83:1) or `error-700` (6.57:1) would pass.' },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, then `textarea.css`. Add `textarea-counter.js` only when a field has a limit.' },
          { type: 'code', lang: 'css', filename: 'textarea.css', code: CSS },
          { type: 'h3', id: 'counter-script', text: 'Counter script' },
          { type: 'code', lang: 'js', filename: 'textarea-counter.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('input', updateCounter);
})();

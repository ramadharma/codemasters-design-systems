// Mega input field (verification code): one large box per digit for OTP codes.
// Source: DESIGN.md §6 Mega input field, Figma nodes 1106-66560 (_Mega input field base), 1106-66757 (Verification code input field).
(() => {
  const { esc } = DS;

  // ---- Behaviour (published as verification-code.js and run by this page)
  function codeInput(e) {
    const box = e.target.closest?.('.sb-code-digit');
    if (!box) return;
    const boxes = [...box.closest('.sb-code').querySelectorAll('.sb-code-digit')];
    const i = boxes.indexOf(box);
    const digits = box.value.replace(/\D/g, '');
    clearCodeError(box);
    if (digits.length > 1) return fillCode(boxes, i, digits); // autofill of the whole code into one box
    box.value = digits;
    if (digits) boxes[i + 1]?.focus();
  }
  function codeKeydown(e) {
    const box = e.target.closest?.('.sb-code-digit');
    if (!box) return;
    const boxes = [...box.closest('.sb-code').querySelectorAll('.sb-code-digit')];
    const i = boxes.indexOf(box);
    if (e.key === 'Backspace' && !box.value && i > 0) {
      e.preventDefault();
      boxes[i - 1].value = '';
      boxes[i - 1].focus();
      clearCodeError(box);
    } else if (e.key === 'ArrowLeft') boxes[i - 1]?.focus();
    else if (e.key === 'ArrowRight') boxes[i + 1]?.focus();
  }
  function codePaste(e) {
    const box = e.target.closest?.('.sb-code-digit');
    if (!box) return;
    e.preventDefault();
    const boxes = [...box.closest('.sb-code').querySelectorAll('.sb-code-digit')];
    clearCodeError(box);
    fillCode(boxes, boxes.indexOf(box), e.clipboardData.getData('text').replace(/\D/g, ''));
  }
  function fillCode(boxes, start, digits) {
    [...digits].slice(0, boxes.length - start).forEach((d, k) => (boxes[start + k].value = d));
    boxes[Math.min(start + digits.length, boxes.length - 1)].focus();
  }
  // The error belongs to the whole code, so editing any box clears it from every box.
  function clearCodeError(box) {
    const group = box.closest('.sb-code');
    const invalid = group.querySelectorAll('[aria-invalid="true"]');
    if (!invalid.length) return;
    invalid.forEach(b => b.removeAttribute('aria-invalid'));
    const hint = document.getElementById(group.getAttribute('aria-describedby'));
    if (hint && hint.dataset.hint) hint.textContent = hint.dataset.hint;
  }

  const strip = f => f.toString().replace(/^  /gm, '');
  const SCRIPT = `// Verification code boxes: typing moves to the next box, Backspace on an empty box goes back,
// ← → move between boxes, and pasting (or autofill) spreads the code over all boxes.
${[codeInput, codeKeydown, codePaste, fillCode, clearCodeError].map(strip).join('\n')}
document.addEventListener('input', codeInput);
document.addEventListener('keydown', codeKeydown);
document.addEventListener('paste', codePaste);`;

  const CSS = `/* Verification code input field (Mega input field), Codemasters Design System
   Needs tokens.css and verification-code.js.

   <div class="sb-field">
     <span class="sb-field-label" id="otp-label">Kode verifikasi</span>
     <div class="sb-code" data-size="md" role="group" aria-labelledby="otp-label" aria-describedby="otp-hint">
       <input class="sb-code-digit" inputmode="numeric" autocomplete="one-time-code" placeholder="0" aria-label="Digit 1 dari 6">
       … one input per digit; 6 digits put <span class="sb-code-sep" aria-hidden="true">-</span> after the 3rd
     </div>
     <p class="sb-field-hint" id="otp-hint">Kode dikirim ke email Anda.</p>
   </div>

   data-size   sm | md | lg
   Error       aria-invalid="true" on every digit. The hint becomes the error message.
   Disabled    the disabled attribute on every digit.
   Filled      comes from the value itself (:not(:placeholder-shown)).
   data-state="focus" on a digit forces Focused in static mockups and docs only. */

.sb-field { display: grid; gap: 6px; } /* label, control, hint 6 apart */
.sb-field-label { font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-field-hint { margin: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-500); }
.sb-field:has([aria-invalid="true"]) .sb-field-hint { color: var(--error-500); }

.sb-code { --code-box: 80px; --code-gap: 12px; --code-type: var(--display-lg); display: flex; align-items: center; gap: var(--code-gap); }
.sb-code[data-size="sm"] { --code-box: 64px; --code-gap: 8px; }
.sb-code[data-size="lg"] { --code-box: 96px; --code-type: var(--display-xl); }

.sb-code-digit {
  box-sizing: border-box; flex: none;
  width: var(--code-box); height: var(--code-box); margin: 0; padding: 8px;
  font: 500 var(--code-type) var(--font); letter-spacing: var(--tracking-display); text-align: center;
  color: var(--brand-600); caret-color: var(--brand-600);
  background: var(--white);
  border: 1px solid var(--gray-300); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition-property: border-color, box-shadow; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-code-digit::placeholder { color: var(--gray-300); opacity: 1; }
.sb-code-digit:not(:placeholder-shown) { border-color: var(--brand-300); }
.sb-code-digit:focus, .sb-code-digit[data-state="focus"] {
  outline: none; border-color: var(--brand-300); box-shadow: var(--shadow-xs), 0 0 0 4px var(--focus-ring);
}
.sb-code-digit:disabled { opacity: .5; cursor: not-allowed; } /* the default look at 50 % opacity */
.sb-code-digit[aria-invalid="true"] { border-color: var(--error-300); color: var(--error-600); caret-color: var(--error-600); }
.sb-code-digit[aria-invalid="true"]:focus, .sb-code-digit[aria-invalid="true"][data-state="focus"] { box-shadow: var(--shadow-xs), 0 0 0 4px var(--error-100); }

/* 6 digits split 3 + 3 by a dash in Display xl / Medium. */
.sb-code-sep { font: 500 var(--display-xl) var(--font); letter-spacing: var(--tracking-display); color: var(--gray-300); }

@media (prefers-reduced-motion: reduce) {
  .sb-code-digit { transition: none; }
}
`;

  const C = { label: 'Kode verifikasi', hint: 'Kode 6 digit dikirim ke email Anda.', hint4: 'Kode 4 digit dikirim lewat SMS.', error: 'Kode salah. Sisa 2 percobaan.', code: '482916' };

  let uid = 0;
  // state: placeholder | filled | focus | disabled. focus forces the first empty box (or the last one) into Focused.
  function code({ size = 'md', digits = 6, state = 'placeholder', destructive = false, label = true, hint = true, id } = {}) {
    const key = id || `code-${++uid}`;
    const disabled = state === 'disabled' && !destructive;
    const fill = destructive || state === 'filled' || state === 'disabled' ? C.code.slice(0, digits) : state === 'focus' ? C.code.slice(0, Math.floor(digits / 2)) : '';
    const focusAt = state === 'focus' ? Math.min(fill.length, digits - 1) : -1;
    const hintText = digits === 4 ? C.hint4 : C.hint;
    const showHint = hint || destructive;

    const boxes = Array.from({ length: digits }, (_, i) => {
      const a = ['class="sb-code-digit"', 'type="text"', 'inputmode="numeric"'];
      if (i === 0) a.push('autocomplete="one-time-code"');
      a.push('placeholder="0"', `aria-label="Digit ${i + 1} dari ${digits}"`);
      if (fill[i]) a.push(`value="${fill[i]}"`);
      if (destructive) a.push('aria-invalid="true"');
      if (disabled) a.push('disabled');
      if (i === focusAt) a.push('data-state="focus"');
      return `    <input ${a.join(' ')}>`;
    });
    if (digits === 6) boxes.splice(3, 0, '    <span class="sb-code-sep" aria-hidden="true">-</span>');

    const groupAttrs = ['class="sb-code"', `data-size="${size}"`, 'role="group"', label ? `aria-labelledby="${key}-label"` : `aria-label="${esc(C.label)}"`];
    if (showHint) groupAttrs.push(`aria-describedby="${key}-hint"`);

    const lines = ['<div class="sb-field">'];
    if (label) lines.push(`  <span class="sb-field-label" id="${key}-label">${esc(C.label)}</span>`);
    lines.push(`  <div ${groupAttrs.join(' ')}>`, ...boxes, '  </div>');
    if (showHint) lines.push(`  <p class="sb-field-hint" id="${key}-hint" aria-live="polite"${destructive ? ` data-hint="${esc(hintText)}"` : ''}>${esc(destructive ? C.error : hintText)}</p>`);
    lines.push('</div>');
    return lines.join('\n');
  }

  const STATES = [['placeholder', 'Placeholder'], ['filled', 'Filled'], ['focus', 'Focused'], ['disabled', 'Disabled']];
  // Single boxes, so each state shows on its own.
  const one = (s, extra = '') => `<input class="sb-code-digit" type="text" inputmode="numeric" placeholder="0" aria-label="Contoh ${s}" tabindex="-1"${extra}>`;
  const stateRow = `<div class="matrix" style="--cols: 6">
<span></span>${['Placeholder', 'Filled', 'Focused', 'Disabled', 'Error', 'Error + Focused'].map(l => `<span class="mx">${l}</span>`).join('')}
<span class="mx">Digit box</span>${[one('placeholder'), one('filled', ' value="4"'), one('focused', ' value="4" data-state="focus"'), one('disabled', ' value="4" disabled'), one('error', ' value="4" aria-invalid="true"'), one('error focused', ' value="4" aria-invalid="true" data-state="focus"')].map(b => `<div class="sb-code" data-size="sm">${b}</div>`).join('')}
</div>`;

  const anatomy = `<div class="sb-field">
  <div class="sb-field-label" data-pin="1" data-pin-at="start">${esc(C.label)}</div>
  <div class="sb-code" data-size="sm" data-pin="2" data-pin-at="start">
    <span data-pin="3"><input class="sb-code-digit" type="text" placeholder="0" value="4" tabindex="-1" aria-label="Digit 1 dari 6"></span>
    <input class="sb-code-digit" type="text" placeholder="0" value="8" tabindex="-1" aria-label="Digit 2 dari 6">
    <input class="sb-code-digit" type="text" placeholder="0" tabindex="-1" aria-label="Digit 3 dari 6">
    <span class="sb-code-sep" aria-hidden="true" data-pin="4">-</span>
    <input class="sb-code-digit" type="text" placeholder="0" tabindex="-1" aria-label="Digit 4 dari 6">
    <input class="sb-code-digit" type="text" placeholder="0" tabindex="-1" aria-label="Digit 5 dari 6">
    <input class="sb-code-digit" type="text" placeholder="0" tabindex="-1" aria-label="Digit 6 dari 6">
  </div>
  <p class="sb-field-hint" data-pin="5" data-pin-at="start">${esc(C.hint)}</p>
</div>`;

  DS.components.push({
    slug: 'verification-code',
    name: 'Verification code',
    category: 'Components',
    status: 'Ready',
    updated: '2026-10-06',
    description: 'One large box per digit, for OTP and verification codes only. Also called Mega input field.',
    css: CSS,
    cssFile: 'verification-code.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'The boxes are live: type digits, press Backspace on an empty box, or paste a whole code such as 482916 into the first box.' },
          {
            type: 'playground',
            initial: { size: 'md', digits: '6', state: 'placeholder', destructive: false, label: true, hint: true },
            controls: [
              { key: 'size', label: 'Size', type: 'segmented', options: [['sm', 'sm'], ['md', 'md'], ['lg', 'lg']] },
              { key: 'digits', label: 'Digits', type: 'segmented', options: [['4', '4'], ['6', '6']] },
              { key: 'state', label: 'State', type: 'segmented', options: STATES },
              { key: 'destructive', label: 'Error', type: 'toggle' },
              { key: 'label', label: 'Label', type: 'toggle' },
              { key: 'hint', label: 'Hint text', type: 'toggle' },
            ],
            render: s => code({ ...s, digits: Number(s.digits), id: 'pg-code' }),
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
              'Use it for OTP and verification codes only. Any other number goes in an Input field.',
              '**4 or 6 digits.** Six digits are split 3 + 3 by a dash so they are easier to read and copy.',
              'Typing a digit moves focus to the next box; Backspace on an empty box goes back; pasting a full code fills all boxes.',
              '**The error belongs to the whole code,** not to one digit: every box turns red, and editing any box clears the error.',
              'Six `md` boxes need about 560 px and six `sm` boxes about 460 px. On phones narrower than that, use 4 digits.',
            ],
          },
        ],
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        blocks: [
          { type: 'example', html: anatomy, code: false, layout: 'anat', caption: 'Parts are spaced out to fit the numbers; the real gap between label, boxes and hint is 6.' },
          {
            type: 'table',
            head: ['#', 'Part', 'Spec'],
            rows: [
              ['1', 'Label', 'One label for the whole group: Text sm / Medium, `gray-700`.'],
              ['2', 'Group', 'Row of boxes, gap 8 (`sm`) or 12 (`md`, `lg`). `role="group"` named by the label.'],
              ['3', 'Digit box', 'Square, padding 8, 1 px border, radius 8, `shadow-xs`, digit centred. Size and type from the size table.'],
              ['4', 'Separator', '6 digits only: a `-` after the third box, Display xl / Medium `gray-300`.'],
              ['5', 'Hint text', 'Text sm / Regular `gray-500`. In error it becomes the message in `error-500`.'],
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
              ['Size', '`sm`, `md`, `lg`', '`data-size` on `.sb-code`'],
              ['Digits', '4, 6', 'one `<input class="sb-code-digit">` per digit; 6 adds `.sb-code-sep` after the third'],
              ['Label', 'True, False', 'label element referenced by `aria-labelledby`; without it, `aria-label` on the group'],
              ['Hint text', 'True, False', '`<p class="sb-field-hint" id>` referenced by `aria-describedby`'],
              ['State (base)', 'Placeholder, Filled, Focused, Disabled', 'empty, `value`, `:focus`, `disabled`. Static mockups only: `data-state="focus"`'],
              ['Destructive', 'True, False', '`aria-invalid="true"` on every digit'],
            ],
          },
        ],
      },
      {
        id: 'sizes',
        title: 'Sizes',
        blocks: [
          { type: 'example', html: ['sm', 'md', 'lg'].map(size => code({ size, digits: 4, state: 'filled', label: false, hint: false, id: `sz-${size}` })).join('\n') },
          {
            type: 'table',
            head: ['Size', 'Box', 'Digit style', 'Gap between boxes'],
            rows: [
              ['`sm`', '64 × 64', 'Display lg / Medium (48/60)', '8'],
              ['`md`', '80 × 80', 'Display lg / Medium (48/60)', '12'],
              ['`lg`', '96 × 96', 'Display xl / Medium (60/72)', '12'],
            ],
          },
        ],
      },
      {
        id: 'digits',
        title: 'Digits',
        blocks: [
          { type: 'h3', id: 'digits-4', text: '4 digits' },
          { type: 'example', html: code({ digits: 4, id: 'dg-4' }) },
          { type: 'h3', id: 'digits-6', text: '6 digits' },
          { type: 'example', html: code({ digits: 6, size: 'sm', id: 'dg-6' }) },
        ],
      },
      {
        id: 'states',
        title: 'States',
        blocks: [
          { type: 'example', html: stateRow, code: false },
          {
            type: 'table',
            head: ['State', 'Fill', 'Border', 'Digit'],
            rows: [
              ['Placeholder', '`white`', '`gray-300`', '`0` in `gray-300`'],
              ['Filled', '`white`', '`brand-300`', '`brand-600`'],
              ['Focused', '`white`', '`brand-300` + 4 px `focus-ring` ring', '`brand-600`'],
              ['Disabled', 'Default at 50 % opacity', 'Default at 50 % opacity', 'Default at 50 % opacity'],
              ['Error', '`white`', '`error-300`', '`error-600`'],
              ['Error + Focused', '`white`', '`error-300` + 4 px `error-100` ring', '`error-600`'],
            ],
          },
          { type: 'h3', id: 'error', text: 'Error' },
          { type: 'p', text: 'Every box goes red at once and the hint becomes the message, Text sm / Regular `error-500` ("Kode salah. Sisa 2 percobaan."). Type in any box to clear it.' },
          { type: 'example', html: code({ destructive: true, size: 'sm', id: 'err-code' }) },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: code({ digits: 4, size: 'sm', destructive: true, label: false, id: 'dd-all' }), text: 'The whole code is wrong, so every box shows the error.' },
              {
                kind: 'dont',
                html: code({ digits: 4, size: 'sm', state: 'filled', label: false, hint: false, id: 'dd-one' }).replace(/(aria-label="Digit 3 dari 4" value="\d")/, '$1 aria-invalid="true"'),
                text: 'One red box suggests one wrong digit. The server only knows the code failed.',
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
              'Give the group one label (`role="group"` + `aria-labelledby`), and each box its position: `aria-label="Digit 1 dari 6"`.',
              'Use `inputmode="numeric"` for the number keyboard and `autocomplete="one-time-code"` on the first box, so the phone offers the SMS code. The script spreads an autofilled code over all boxes.',
              'Do not set `maxlength="1"`: it blocks that autofill. The script keeps one digit per box instead.',
              'The hint has `aria-live="polite"`, so the error is announced once when it appears.',
              '← → move between boxes; Backspace on an empty box moves back and clears it.',
            ],
          },
          {
            type: 'table',
            head: ['Text', 'On', 'Ratio', 'AA (large text 3:1)'],
            rows: [
              ['Digit `brand-600`', '`white`', '5.06:1', 'Passes'],
              ['Error digit `error-600`', '`white`', '4.83:1', 'Passes'],
              ['Placeholder `0` in `gray-300`', '`white`', '1.47:1', '**Fails**'],
              ['Error message `error-500`', '`white`', '3.76:1', '**Fails** (14 px text needs 4.5:1)'],
            ],
          },
          {
            type: 'note',
            tone: 'warning',
            text: 'The placeholder `0` is very faint (1.47:1). The label and hint explain the field, so it is not the only cue, but `gray-400` or no placeholder at all would be clearer. The error message has the same `error-500` issue as Input field.',
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `verification-code.css` and `verification-code.js`. The script is required: it moves focus and handles paste and autofill.' },
          { type: 'code', lang: 'css', filename: 'verification-code.css', code: CSS },
          { type: 'h3', id: 'code-script', text: 'Script' },
          { type: 'code', lang: 'js', filename: 'verification-code.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('input', codeInput);
  document.addEventListener('keydown', codeKeydown);
  document.addEventListener('paste', codePaste);
})();

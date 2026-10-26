// File upload: a drop zone and the list of files on their way, for claim documents (invoices, medical summaries, ID).
// Built with Progress bar, Button and Badge. No spec in DESIGN.md yet; no Figma component yet.
(() => {
  const { esc, icon } = DS;

  // ---- Behaviour. The component checks and lists files; the page uploads them: it listens for "sb-upload-file" and
  // reports back through detail.progress(percent), detail.done() and detail.fail(message).
  const upSvg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  const UP_PATH = {
    x: 'M18 6 6 18M6 6l12 12',
    trash: 'M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2',
    check: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3',
  };
  const upEsc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const upSize = b => (b < 1048576 ? `${Math.max(1, Math.round(b / 1024))} KB` : `${(b / 1048576).toLocaleString('id-ID', { maximumFractionDigits: 1 })} MB`);
  // One file row. Every part is there in every state; data-state shows the right ones.
  const upItem = ({ name, size, state = 'uploading', value = 0, error = '', thumb = '' }) => `<li class="sb-file" data-state="${state}">
  ${thumb ? `<img class="sb-file-thumb" src="${upEsc(thumb)}" alt="">` : `<span class="sb-file-type" aria-hidden="true">${upEsc((name.split('.').pop() || '').slice(0, 4).toUpperCase())}</span>`}
  <div class="sb-file-body">
    <p class="sb-file-name"><span>${upEsc(name)}</span>${upSvg(UP_PATH.check).replace('<svg ', '<svg class="sb-file-done" ')}</p>
    <p class="sb-file-meta">${upSize(size)}<span class="sb-file-error">${upEsc(error)}</span></p>
    <div class="sb-progress" data-label="right" role="progressbar" aria-label="Mengunggah ${upEsc(name)}" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100" style="--value: ${value}"><div class="sb-progress-track"><div class="sb-progress-fill"></div></div><span class="sb-progress-label">${value}%</span></div>
    <button class="sb-btn sb-file-retry" type="button" data-variant="link" data-size="sm">Coba lagi</button>
  </div>
  <button class="sb-file-action" type="button" aria-label="${state === 'uploading' ? 'Batalkan unggahan' : 'Hapus'} ${upEsc(name)}">${upSvg(UP_PATH.x).replace('<svg ', '<svg class="sb-file-x" ')}${upSvg(UP_PATH.trash).replace('<svg ', '<svg class="sb-file-trash" ')}</button>
</li>`;
  function upSet(item, state, value = 0, error = '') {
    const name = item.querySelector('.sb-file-name span').textContent, bar = item.querySelector('.sb-progress');
    item.dataset.state = state;
    bar.style.setProperty('--value', value);
    bar.setAttribute('aria-valuenow', value);
    bar.querySelector('.sb-progress-label').textContent = `${value}%`;
    item.querySelector('.sb-file-error').textContent = error;
    item.querySelector('.sb-file-action').setAttribute('aria-label', `${state === 'uploading' ? 'Batalkan unggahan' : 'Hapus'} ${name}`);
  }
  function upStart(up, item) {
    upSet(item, 'uploading', 0);
    up.dispatchEvent(new CustomEvent('sb-upload-file', { bubbles: true, detail: {
      file: item.upFile, item,
      progress: v => item.isConnected && upSet(item, 'uploading', Math.round(v)),
      done: () => item.isConnected && upSet(item, 'done', 100),
      fail: msg => item.isConnected && upSet(item, 'error', 0, msg || 'Gagal mengunggah'),
    } }));
  }
  // Check one file against accept and data-max-size (MB), list it, and start it when it passes.
  function upAdd(up, file) {
    const input = up.querySelector('input[type="file"]'), max = +up.dataset.maxSize || 0, n = file.name.toLowerCase();
    const okType = !input.accept || input.accept.split(',').map(a => a.trim().toLowerCase()).some(a => (a.startsWith('.') ? n.endsWith(a) : a.endsWith('/*') ? file.type.startsWith(a.slice(0, -1)) : file.type === a));
    const error = !okType ? 'Jenis file tidak didukung' : max && file.size > max * 1048576 ? `Lebih dari ${max} MB` : '';
    const thumb = !error && file.type.startsWith('image/') ? URL.createObjectURL(file) : '';
    const list = up.querySelector('.sb-upload-list');
    if (!('multiple' in up.dataset)) list.innerHTML = ''; // single: the new file replaces the old one
    list.insertAdjacentHTML('beforeend', upItem({ name: file.name, size: file.size, state: error ? 'invalid' : 'uploading', error, thumb }));
    const item = list.lastElementChild;
    item.upFile = file;
    if (!error) upStart(up, item);
  }
  function upFiles(up, files) {
    [...files].slice(0, 'multiple' in up.dataset ? undefined : 1).forEach(f => upAdd(up, f));
  }
  function upChange(e) {
    const input = e.target.closest?.('.sb-upload input[type="file"]');
    if (!input) return;
    upFiles(input.closest('.sb-upload'), input.files);
    input.value = ''; // the same file can be picked again after a removal
  }
  function upClick(e) {
    const btn = e.target.closest?.('.sb-file-action, .sb-file-retry');
    if (!btn) return;
    const item = btn.closest('.sb-file'), up = btn.closest('.sb-upload');
    if (btn.matches('.sb-file-retry')) return upStart(up, item);
    up.dispatchEvent(new CustomEvent(item.dataset.state === 'uploading' ? 'sb-upload-cancel' : 'sb-upload-remove', { bubbles: true, detail: { file: item.upFile, item } }));
    item.remove();
    up.querySelector('input[type="file"]').focus(); // back to the drop zone, which shows again in single mode
  }
  // Drag and drop: the zone lights up while files are over it.
  function upDrag(e) {
    const zone = e.target.closest?.('.sb-dropzone');
    if (!zone || !e.dataTransfer?.types.includes('Files') || zone.querySelector('input').disabled) return;
    e.preventDefault();
    if (e.type === 'dragleave' && zone.contains(e.relatedTarget)) return;
    zone.toggleAttribute('data-drag', e.type === 'dragenter' || e.type === 'dragover');
    if (e.type === 'drop') upFiles(zone.closest('.sb-upload'), e.dataTransfer.files);
  }

  const strip = f => f.toString().replace(/^  /gm, '');
  const CONSTS = { upSvg, UP_PATH, upEsc, upSize, upItem };
  const SCRIPT = `// File upload: picks and drops files, checks type (accept) and size (data-max-size, MB), lists them with a progress bar.
// The page uploads: listen for "sb-upload-file" and call detail.progress(percent), detail.done() or detail.fail(message).
// Also fires "sb-upload-cancel" and "sb-upload-remove" with { file, item }.
${Object.entries(CONSTS).map(([n, v]) => `const ${n} = ${typeof v === 'function' ? v.toString() : JSON.stringify(v, null, 2)};`).join('\n')}
${[upSet, upStart, upAdd, upFiles, upChange, upClick, upDrag].map(strip).join('\n')}
document.addEventListener('change', upChange);
document.addEventListener('click', upClick);
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(t => document.addEventListener(t, upDrag));`;

  const CSS = `/* File upload, Codemasters Design System
   Needs tokens.css, progress.css (bars), button.css ("Coba lagi"), badge.css (checklist) and file-upload.js.

   <div class="sb-upload" data-multiple data-max-size="10">
     <label class="sb-dropzone">
       <input class="sb-dropzone-input" type="file" accept=".pdf,.jpg,.jpeg,.png" multiple>
       <span class="sb-dropzone-icon"><svg aria-hidden="true">…upload-cloud…</svg></span>
       <span class="sb-dropzone-text"><strong>Klik untuk unggah</strong> atau seret ke sini</span>
       <span class="sb-dropzone-hint">PDF, JPG atau PNG, maks. 10 MB</span>
     </label>
     <ul class="sb-upload-list" aria-label="File terunggah">…file rows (file-upload.js adds them)…</ul>
   </div>

   data-multiple      many files; without it one file, and the zone hides while it is there
   data-max-size      the largest file in MB; accept on the input sets the types
   data-variant       slot: a small "Unggah" button-zone for one document in a checklist
   .sb-file data-state   uploading | done | error (upload failed: Coba lagi) | invalid (wrong type or too big) */

.sb-upload { display: grid; gap: 12px; min-width: 0; } /* long file names truncate instead of widening the row */

/* Drop zone: dashed gray-300, radius 12, the whole area is the label of the file input. */
.sb-dropzone {
  position: relative; display: grid; justify-items: center; gap: 4px; padding: 16px 24px;
  border: 1px dashed var(--border-primary); border-radius: var(--radius-lg); background: var(--bg-primary);
  font: 400 var(--text-sm) var(--font); color: var(--text-tertiary); text-align: center; cursor: pointer;
  transition-property: border-color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-dropzone-input { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; } /* kept for focus, keyboard and screen readers */
.sb-dropzone:hover { background: var(--bg-secondary); }
.sb-dropzone[data-drag] { border-style: solid; border-color: var(--fg-brand); background: var(--bg-brand-subtle); }
.sb-dropzone:has(input:focus-visible) { outline: 2px solid var(--brand-600); outline-offset: 2px; }
.sb-dropzone:has(input:disabled) { opacity: .5; cursor: not-allowed; background: none; }
.sb-dropzone-icon {
  display: grid; place-items: center; width: 40px; height: 40px; margin-bottom: 8px;
  border: 1px solid var(--border-secondary); border-radius: var(--radius-md); background: var(--bg-primary); box-shadow: var(--shadow-xs); color: var(--text-secondary);
}
.sb-dropzone-icon > svg { width: 20px; height: 20px; }
.sb-dropzone-text strong { font-weight: 600; color: var(--text-brand); }
.sb-dropzone-hint { font-size: 12px; line-height: 18px; color: var(--text-quaternary); }
.sb-upload:not([data-multiple]):has(.sb-file) > .sb-dropzone { display: none; } /* single: the file takes the zone's place */

/* File row: radius 12, padding 16; the type tag or thumbnail, name and size, the bar, one action. */
.sb-upload-list { display: grid; gap: 12px; margin: 0; padding: 0; list-style: none; }
.sb-upload-list:empty { display: none; }
.sb-file {
  display: flex; align-items: flex-start; gap: 12px; min-width: 0; padding: 16px;
  border: 1px solid var(--border-secondary); border-radius: var(--radius-lg); background: var(--bg-primary);
  font: 400 var(--text-sm) var(--font);
}
.sb-file-type, .sb-file-thumb { flex: none; width: 40px; height: 40px; border-radius: var(--radius-md); }
.sb-file-type { display: grid; place-items: center; border: 1px solid var(--border-secondary); font: 600 10px/1 var(--font); color: var(--text-tertiary); letter-spacing: .02em; }
.sb-file-thumb { object-fit: cover; outline: 1px solid rgb(0 0 0 / .1); outline-offset: -1px; } /* image outline: the edge reads on any photo */
:root[data-theme="dark"] .sb-file-thumb { outline-color: rgb(255 255 255 / .1); }
.sb-file-body { display: grid; grid-template-columns: minmax(0, 1fr); flex: 1; gap: 4px; min-width: 0; } /* the name column may shrink */
.sb-file-name { display: flex; align-items: center; gap: 8px; margin: 0; font-weight: 500; color: var(--text-secondary); }
.sb-file-name > span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sb-file-done { width: 16px; height: 16px; flex: none; color: var(--success-600); }
.sb-file-meta { display: flex; flex-wrap: wrap; gap: 0 8px; margin: 0; color: var(--text-quaternary); font-variant-numeric: tabular-nums; }
.sb-file-error { color: var(--text-error); }
.sb-file-error:empty { display: none; }
.sb-file .sb-progress { margin-top: 4px; }
.sb-file-retry { justify-self: start; }
.sb-file-action {
  display: grid; place-items: center; flex: none; width: 32px; height: 32px; margin: -6px -6px 0 0; padding: 0;
  border: 0; border-radius: var(--radius-md); background: none; color: var(--text-quaternary); cursor: pointer;
  transition-property: color, background-color; transition-duration: 150ms; transition-timing-function: var(--ease);
}
.sb-file-action > svg { width: 20px; height: 20px; }
.sb-file-action:hover { background: var(--bg-secondary); color: var(--text-secondary); }
.sb-file-action:focus-visible { outline: 2px solid var(--brand-600); outline-offset: 0; }

/* States: only the parts that apply. */
.sb-file:not([data-state="done"]) .sb-file-done,
.sb-file:not([data-state="uploading"]) .sb-progress,
.sb-file:not([data-state="error"]) .sb-file-retry,
.sb-file[data-state="uploading"] .sb-file-trash,
.sb-file:not([data-state="uploading"]) .sb-file-x { display: none; }
.sb-file:is([data-state="error"], [data-state="invalid"]) { border-color: var(--border-error); background: var(--bg-error-subtle); }
.sb-file:is([data-state="error"], [data-state="invalid"]) .sb-file-name { color: var(--text-error); }
.sb-file:is([data-state="error"], [data-state="invalid"]) .sb-file-type { border-color: var(--border-error); color: var(--text-error); }

/* Slot: one document in a checklist. The zone is a small button that still takes a drop; the file row drops its frame. */
.sb-upload[data-variant="slot"] .sb-dropzone {
  display: inline-flex; flex-direction: row; align-items: center; gap: 8px; justify-self: end; height: 36px; padding: 0 14px;
  border-style: solid; border-radius: var(--radius-md); box-shadow: var(--shadow-xs); font-weight: 600; color: var(--text-secondary);
}
.sb-upload[data-variant="slot"] .sb-dropzone > svg { width: 20px; height: 20px; color: var(--text-quaternary); }
.sb-upload[data-variant="slot"] .sb-file { padding: 8px 12px; border-radius: var(--radius-md); }
.sb-upload[data-variant="slot"] .sb-file-type, .sb-upload[data-variant="slot"] .sb-file-thumb { width: 32px; height: 32px; }

/* Checklist: one row per required document, its name and status on the left, its slot on the right. */
.sb-doclist { margin: 0; padding: 0; list-style: none; border: 1px solid var(--border-secondary); border-radius: var(--radius-lg); }
.sb-doc { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 280px); align-items: center; gap: 16px; padding: 16px; }
.sb-doc + .sb-doc { border-top: 1px solid var(--border-secondary); }
.sb-doc-head { display: grid; gap: 4px; min-width: 0; }
.sb-doc-name { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 0; font: 500 var(--text-sm) var(--font); color: var(--text-primary); }
.sb-doc-hint { margin: 0; font: 400 var(--text-xs) var(--font); color: var(--text-quaternary); }

@media (prefers-reduced-motion: reduce) {
  .sb-dropzone, .sb-file-action { transition: none; }
}
`;

  // ---- Docs markup
  const ACCEPT = '.pdf,.jpg,.jpeg,.png';
  let uid = 0;
  function upload({ multiple = true, maxSize = 10, files = [], variant, accept = ACCEPT, hint = 'PDF, JPG atau PNG, maks. 10 MB', label = 'File terunggah', disabled = false } = {}) {
    const id = `up-${++uid}`;
    const data = [multiple && 'data-multiple', `data-max-size="${maxSize}"`, variant && `data-variant="${variant}"`].filter(Boolean).join(' ');
    const zone = variant === 'slot'
      ? `<label class="sb-dropzone">\n    <input class="sb-dropzone-input" type="file" accept="${accept}"${disabled ? ' disabled' : ''}>\n    ${icon('upload-cloud')}Unggah\n  </label>`
      : `<label class="sb-dropzone">\n    <input class="sb-dropzone-input" id="${id}" type="file" accept="${accept}"${multiple ? ' multiple' : ''}${disabled ? ' disabled' : ''}>\n    <span class="sb-dropzone-icon">${icon('upload-cloud')}</span>\n    <span class="sb-dropzone-text"><strong>Klik untuk unggah</strong> atau seret ke sini</span>\n    <span class="sb-dropzone-hint">${esc(hint)}</span>\n  </label>`;
    return `<div class="sb-upload" ${data}>\n  ${zone}\n  <ul class="sb-upload-list" aria-label="${esc(label)}">${files.map(f => `\n${upItem(f)}`).join('')}</ul>\n</div>`;
  }
  const MB = 1048576;
  const FILES = {
    done: { name: 'invoice-rs-medika-utama.pdf', size: 1.2 * MB, state: 'done', value: 100 },
    uploading: { name: 'resume-medis-KLM-0241.pdf', size: 2.4 * MB, state: 'uploading', value: 64 },
    error: { name: 'hasil-lab.pdf', size: 860 * 1024, state: 'error', error: 'Gagal mengunggah. Periksa koneksi.' },
    invalid: { name: 'rontgen-thorax.dcm', size: 14.6 * MB, state: 'invalid', error: 'Jenis file tidak didukung' },
    photo: { name: 'kuitansi-apotek.jpg', size: 640 * 1024, state: 'done', value: 100, thumb: DS.demoPhoto(1) },
  };
  const DOCS = [
    ['Invoice rumah sakit', 'Wajib', 'PDF, maks. 10 MB', FILES.done],
    ['Resume medis', 'Wajib', 'PDF, maks. 10 MB', FILES.uploading],
    ['Foto KTP peserta', 'Wajib', 'JPG atau PNG, maks. 5 MB'],
    ['Kuitansi apotek', 'Opsional', 'PDF, JPG atau PNG, maks. 10 MB', FILES.photo],
  ];
  const checklist = `<ul class="sb-doclist" aria-label="Dokumen klaim">
${DOCS.map(([name, need, hint, file]) => `<li class="sb-doc">
  <div class="sb-doc-head">
    <p class="sb-doc-name">${esc(name)} <span class="sb-badge" data-size="sm"${need === 'Wajib' ? '' : ' data-color="blue-gray"'}>${need}</span></p>
    <p class="sb-doc-hint">${esc(hint)}</p>
  </div>
  ${upload({ multiple: false, variant: 'slot', files: file ? [file] : [], label: name }).replace(/\n/g, '\n  ')}
</li>`).join('\n')}
</ul>`;
  const stage = (html, cls = '') => `<div class="up-stage${cls ? ` ${cls}` : ''}">\n${html}\n</div>`;

  // Docs only: a pretend upload. Progress climbs every 200 ms; a file named with "gagal" fails at 60 %.
  document.addEventListener('sb-upload-file', e => {
    const { file, item, progress, done, fail } = e.detail;
    const name = file?.name || item.querySelector('.sb-file-name span').textContent;
    let v = 0;
    const t = setInterval(() => {
      if (!item.isConnected) return clearInterval(t);
      v = Math.min(100, v + 8 + Math.round(Math.random() * 14));
      if (/gagal/i.test(name) && v >= 60) { clearInterval(t); return fail('Gagal mengunggah. Periksa koneksi.'); }
      progress(v);
      if (v === 100) { clearInterval(t); done(); }
    }, 200);
  });

  const anatomy = `<div class="up-stage" inert>
${upload({ files: [FILES.uploading, FILES.done] })
  .replace('<label class="sb-dropzone">', '<label class="sb-dropzone" data-pin="1" data-pin-at="start">')
  .replace('<span class="sb-dropzone-text">', '<span class="sb-dropzone-text" data-pin="2" data-pin-at="end">')
  .replace('<span class="sb-file-type" aria-hidden="true">PDF</span>', '<span class="sb-file-type" aria-hidden="true" data-pin="3" data-pin-at="start">PDF</span>')
  .replace('<div class="sb-progress"', '<div class="sb-progress" data-pin="4" data-pin-at="bottom"')
  .replace('<button class="sb-file-action"', '<button class="sb-file-action" data-pin="5" data-pin-at="end"')}
</div>`;

  DS.components.push({
    slug: 'file-upload',
    name: 'File upload',
    category: 'Components',
    status: 'In progress',
    updated: '2026-10-14',
    description: 'Adds documents to a claim: a drop zone people click or drag files onto, and a row per file with its progress, then done, failed or refused. One file or many, image thumbnails, and a checklist of the documents a claim needs.',
    css: CSS,
    cssFile: 'file-upload.css',
    sections: [
      {
        id: 'playground',
        title: 'Playground',
        blocks: [
          { type: 'p', text: 'Pick or drop real files: nothing leaves your computer, the upload is pretend. A file over 10 MB or of another type is refused; a file with "gagal" in its name fails halfway so you can try Coba lagi.' },
          {
            type: 'playground',
            initial: { multiple: true },
            controls: [{ key: 'multiple', label: 'Multiple', type: 'toggle' }],
            render: s => stage(upload({ multiple: s.multiple, files: s.multiple ? [FILES.done] : [] })),
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
              'Say what fits before people pick: the types and the largest size, under the zone ("PDF, JPG atau PNG, maks. 10 MB"). Check them again in the browser, and refuse a file in its own row with the reason.',
              'Start uploading as soon as a file is picked; people keep working while the bars fill. The form\'s submit waits until every file is done.',
              'A failed upload keeps its row with Coba lagi; a refused file (wrong type, too big) can only be removed.',
              'Use one file (no `data-multiple`) for a single document such as a KTP photo: the file takes the zone\'s place and removing it brings the zone back.',
              'For a claim, list the documents it needs (Checklist): people see what is missing, and each document lands in the right slot.',
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
              ['1', 'Drop zone', 'The label of a hidden file input: 1 px dashed `gray-300`, radius 12, padding `16 24`. Hover `gray-50`; files dragged over it: solid `brand-600` border on `brand-50`. A 40 px icon box (`upload-cloud`) above the text.'],
              ['2', 'Text', '"Klik untuk unggah" Semibold `brand-700` + "atau seret ke sini" Text sm `gray-600`; the types and size limit under it in Text xs `gray-500`.'],
              ['3', 'File tag or thumbnail', '40 × 40, radius 8: the extension (PDF) in 10 px Semibold, or the image itself with a 1 px outline at 10 %.'],
              ['4', 'Progress', 'Progress bar with the percentage on the right, under the name and size. Gone when done; a `success-600` check follows the name.'],
              ['5', 'Action', '32 × 32 icon button: × cancels while uploading, the bin removes after. Named after the file ("Hapus invoice-rs-medika-utama.pdf").'],
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
              ['Files', 'One, Many', 'Many: `data-multiple` on `.sb-upload` and `multiple` on the input'],
              ['Types', 'Extensions or MIME types', '`accept=".pdf,.jpg,.jpeg,.png"` on the input'],
              ['Largest file', 'MB', '`data-max-size="10"`'],
              ['Variant', 'Zone, Slot', 'Slot: `data-variant="slot"`, for one document in a checklist'],
              ['File state', 'Uploading, Done, Error, Invalid', '`data-state` on `.sb-file` (set by the script)'],
            ],
          },
        ],
      },
      {
        id: 'types',
        title: 'Types',
        blocks: [
          { type: 'h3', id: 'type-multiple', text: 'Many files' },
          { type: 'example', html: stage(upload({ files: [FILES.done, FILES.uploading] })) },
          { type: 'h3', id: 'type-single', text: 'One file' },
          { type: 'p', text: 'The file takes the zone\'s place. Remove it and the zone comes back; pick again and the new file replaces it.' },
          { type: 'example', html: stage(upload({ multiple: false, maxSize: 5, accept: '.jpg,.jpeg,.png', hint: 'JPG atau PNG, maks. 5 MB', files: [{ ...FILES.photo, name: 'ktp-budi-santoso.jpg' }] })) },
          { type: 'h3', id: 'type-images', text: 'Image thumbnails' },
          { type: 'p', text: 'Images show themselves instead of the type tag, so people can tell two receipts apart before opening them.' },
          { type: 'example', html: stage(upload({ files: [FILES.photo, { ...FILES.photo, name: 'kuitansi-lab.jpg', thumb: DS.demoPhoto(3) }] })), code: false },
          { type: 'h3', id: 'type-checklist', text: 'Claim documents checklist' },
          { type: 'p', text: 'One row per document the claim needs: its name, Wajib or Opsional, the types it takes, and a Slot. Missing documents show "Unggah"; the rest show their file.' },
          { type: 'example', html: stage(checklist, 'is-wide') },
        ],
      },
      {
        id: 'states',
        title: 'File states',
        blocks: [
          { type: 'example', html: stage(`<ul class="sb-upload-list" aria-label="Contoh status">\n${['uploading', 'done', 'error', 'invalid'].map(k => upItem(FILES[k])).join('\n')}\n</ul>`), code: false },
          {
            type: 'table',
            head: ['State', 'Shows', 'Action'],
            rows: [
              ['Uploading', 'Progress bar and percentage', '× Batalkan unggahan'],
              ['Done', '`success-600` check after the name', 'Bin: Hapus'],
              ['Error (upload failed)', '`error-50` row, `error-300` border, the reason in `error-700`, Coba lagi', 'Bin: Hapus'],
              ['Invalid (wrong type or too big)', 'As Error, without Coba lagi: the file can never pass', 'Bin: Hapus'],
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
              { kind: 'do', html: stage(`<ul class="sb-upload-list">${upItem(FILES.invalid)}</ul>`), text: 'Refuse the file in its own row, with the reason.' },
              { kind: 'dont', html: stage(`<div class="sb-banner" data-tone="error"><div class="sb-banner-text"><p class="sb-banner-desc">Terjadi kesalahan saat mengunggah.</p></div></div>`), text: 'One vague error for the whole zone: which file, and why?' },
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
              'The zone is the `<label>` of a real file input, so Tab reaches it and Enter or Space opens the file picker; dragging is an extra, never the only way.',
              'The input is only visually hidden (not `display: none`), so it keeps focus; the zone shows the focus ring.',
              'Each bar is a `role="progressbar"` named "Mengunggah resume-medis-KLM-0241.pdf" with its value.',
              'The action button is named after the file and its state: "Batalkan unggahan …" while uploading, "Hapus …" after. After removing, focus returns to the zone.',
              'Errors are written in the row next to the file, in words, not only in red.',
            ],
          },
          {
            type: 'table',
            head: ['Text', 'On', 'Ratio', 'AA'],
            rows: [
              ['"Klik untuk unggah" `brand-700`', '`white`', '6.61:1', 'Passes'],
              ['Hint `gray-500`', '`white`', '4.97:1', 'Passes'],
              ['Error `error-700`', '`error-50`', '6.05:1', 'Passes'],
            ],
          },
        ],
      },
      {
        id: 'code',
        title: 'Code',
        blocks: [
          { type: 'p', text: 'Load `tokens.css`, `progress.css`, `button.css` and `badge.css`, then `file-upload.css`, and add `file-upload.js`. Upload from the page: listen for `sb-upload-file` and report back with `detail.progress(percent)`, `detail.done()` or `detail.fail(message)`.' },
          { type: 'code', lang: 'css', filename: 'file-upload.css', code: CSS },
          { type: 'h3', id: 'upload-script', text: 'Script' },
          { type: 'code', lang: 'js', filename: 'file-upload.js', code: SCRIPT },
        ],
      },
      { id: 'tokens', title: 'Tokens used', blocks: [{ type: 'tokens' }] },
    ],
  });

  DS.addCss(CSS);
  document.addEventListener('change', upChange);
  document.addEventListener('click', upClick);
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(t => document.addEventListener(t, upDrag));
})();

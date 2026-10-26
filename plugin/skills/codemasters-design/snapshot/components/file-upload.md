---
name: File upload
slug: file-upload
category: Components
status: In progress
version: 1.0.0
updated: 2026-10-14
requires: tokens.css
---

# File upload

Adds documents to a claim: a drop zone people click or drag files onto, and a row per file with its progress, then done, failed or refused. One file or many, image thumbnails, and a checklist of the documents a claim needs.

## Usage

- Say what fits before people pick: the types and the largest size, under the zone ("PDF, JPG atau PNG, maks. 10 MB"). Check them again in the browser, and refuse a file in its own row with the reason.
- Start uploading as soon as a file is picked; people keep working while the bars fill. The form's submit waits until every file is done.
- A failed upload keeps its row with Coba lagi; a refused file (wrong type, too big) can only be removed.
- Use one file (no `data-multiple`) for a single document such as a KTP photo: the file takes the zone's place and removing it brings the zone back.
- For a claim, list the documents it needs (Checklist): people see what is missing, and each document lands in the right slot.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Drop zone | The label of a hidden file input: 1 px dashed `gray-300`, radius 12, padding `16 24`. Hover `gray-50`; files dragged over it: solid `brand-600` border on `brand-50`. A 40 px icon box (`upload-cloud`) above the text. |
| 2 | Text | "Klik untuk unggah" Semibold `brand-700` + "atau seret ke sini" Text sm `gray-600`; the types and size limit under it in Text xs `gray-500`. |
| 3 | File tag or thumbnail | 40 × 40, radius 8: the extension (PDF) in 10 px Semibold, or the image itself with a 1 px outline at 10 %. |
| 4 | Progress | Progress bar with the percentage on the right, under the name and size. Gone when done; a `success-600` check follows the name. |
| 5 | Action | 32 × 32 icon button: × cancels while uploading, the bin removes after. Named after the file ("Hapus invoice-rs-medika-utama.pdf"). |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Files | One, Many | Many: `data-multiple` on `.sb-upload` and `multiple` on the input |
| Types | Extensions or MIME types | `accept=".pdf,.jpg,.jpeg,.png"` on the input |
| Largest file | MB | `data-max-size="10"` |
| Variant | Zone, Slot | Slot: `data-variant="slot"`, for one document in a checklist |
| File state | Uploading, Done, Error, Invalid | `data-state` on `.sb-file` (set by the script) |

## Types

### Many files

```html
<div class="sb-upload" data-multiple data-max-size="10">
  <label class="sb-dropzone">
    <input class="sb-dropzone-input" id="up-6" type="file" accept=".pdf,.jpg,.jpeg,.png" multiple>
    <span class="sb-dropzone-icon"><svg aria-hidden="true"><!-- upload-cloud --></svg></span>
    <span class="sb-dropzone-text"><strong>Klik untuk unggah</strong> atau seret ke sini</span>
    <span class="sb-dropzone-hint">PDF, JPG atau PNG, maks. 10 MB</span>
  </label>
  <ul class="sb-upload-list" aria-label="File terunggah">
<li class="sb-file">
  <span class="sb-file-type" aria-hidden="true">PDF</span>
  <div class="sb-file-body">
    <p class="sb-file-name"><span>invoice-rs-medika-utama.pdf</span><svg class="sb-file-done" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"/></svg></p>
    <p class="sb-file-meta">1,2 MB<span class="sb-file-error"></span></p>
    <div class="sb-progress" data-label="right" role="progressbar" aria-label="Mengunggah invoice-rs-medika-utama.pdf" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="--value: 100"><div class="sb-progress-track"><div class="sb-progress-fill"></div></div><span class="sb-progress-label">100%</span></div>
    <button class="sb-btn sb-file-retry" type="button" data-variant="link" data-size="sm">Coba lagi</button>
  </div>
  <button class="sb-file-action" type="button" aria-label="Hapus invoice-rs-medika-utama.pdf"><svg class="sb-file-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg><svg class="sb-file-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
</li>
<li class="sb-file">
  <span class="sb-file-type" aria-hidden="true">PDF</span>
  <div class="sb-file-body">
    <p class="sb-file-name"><span>resume-medis-KLM-0241.pdf</span><svg class="sb-file-done" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"/></svg></p>
    <p class="sb-file-meta">2,4 MB<span class="sb-file-error"></span></p>
    <div class="sb-progress" data-label="right" role="progressbar" aria-label="Mengunggah resume-medis-KLM-0241.pdf" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" style="--value: 64"><div class="sb-progress-track"><div class="sb-progress-fill"></div></div><span class="sb-progress-label">64%</span></div>
    <button class="sb-btn sb-file-retry" type="button" data-variant="link" data-size="sm">Coba lagi</button>
  </div>
  <button class="sb-file-action" type="button" aria-label="Batalkan unggahan resume-medis-KLM-0241.pdf"><svg class="sb-file-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg><svg class="sb-file-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
</li></ul>
</div>
```

### One file

The file takes the zone's place. Remove it and the zone comes back; pick again and the new file replaces it.

```html
<div class="sb-upload" data-max-size="5">
  <label class="sb-dropzone">
    <input class="sb-dropzone-input" id="up-7" type="file" accept=".jpg,.jpeg,.png">
    <span class="sb-dropzone-icon"><svg aria-hidden="true"><!-- upload-cloud --></svg></span>
    <span class="sb-dropzone-text"><strong>Klik untuk unggah</strong> atau seret ke sini</span>
    <span class="sb-dropzone-hint">JPG atau PNG, maks. 5 MB</span>
  </label>
  <ul class="sb-upload-list" aria-label="File terunggah">
<li class="sb-file">
  <img class="sb-file-thumb" src="…" alt="">
  <div class="sb-file-body">
    <p class="sb-file-name"><span>ktp-budi-santoso.jpg</span><svg class="sb-file-done" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"/></svg></p>
    <p class="sb-file-meta">640 KB<span class="sb-file-error"></span></p>
    <div class="sb-progress" data-label="right" role="progressbar" aria-label="Mengunggah ktp-budi-santoso.jpg" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="--value: 100"><div class="sb-progress-track"><div class="sb-progress-fill"></div></div><span class="sb-progress-label">100%</span></div>
    <button class="sb-btn sb-file-retry" type="button" data-variant="link" data-size="sm">Coba lagi</button>
  </div>
  <button class="sb-file-action" type="button" aria-label="Hapus ktp-budi-santoso.jpg"><svg class="sb-file-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg><svg class="sb-file-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
</li></ul>
</div>
```

### Image thumbnails

Images show themselves instead of the type tag, so people can tell two receipts apart before opening them.

### Claim documents checklist

One row per document the claim needs: its name, Wajib or Opsional, the types it takes, and a Slot. Missing documents show "Unggah"; the rest show their file.

```html
<ul class="sb-doclist" aria-label="Dokumen klaim">
<li class="sb-doc">
  <div class="sb-doc-head">
    <p class="sb-doc-name">Invoice rumah sakit <span class="sb-badge" data-size="sm">Wajib</span></p>
    <p class="sb-doc-hint">PDF, maks. 10 MB</p>
  </div>
  <div class="sb-upload" data-max-size="10" data-variant="slot">
    <label class="sb-dropzone">
      <input class="sb-dropzone-input" type="file" accept=".pdf,.jpg,.jpeg,.png">
      <svg aria-hidden="true"><!-- upload-cloud --></svg>Unggah
    </label>
    <ul class="sb-upload-list" aria-label="Invoice rumah sakit">
  <li class="sb-file">
    <span class="sb-file-type" aria-hidden="true">PDF</span>
    <div class="sb-file-body">
      <p class="sb-file-name"><span>invoice-rs-medika-utama.pdf</span><svg class="sb-file-done" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"/></svg></p>
      <p class="sb-file-meta">1,2 MB<span class="sb-file-error"></span></p>
      <div class="sb-progress" data-label="right" role="progressbar" aria-label="Mengunggah invoice-rs-medika-utama.pdf" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="--value: 100"><div class="sb-progress-track"><div class="sb-progress-fill"></div></div><span class="sb-progress-label">100%</span></div>
      <button class="sb-btn sb-file-retry" type="button" data-variant="link" data-size="sm">Coba lagi</button>
    </div>
    <button class="sb-file-action" type="button" aria-label="Hapus invoice-rs-medika-utama.pdf"><svg class="sb-file-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg><svg class="sb-file-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
  </li></ul>
  </div>
</li>
<li class="sb-doc">
  <div class="sb-doc-head">
    <p class="sb-doc-name">Resume medis <span class="sb-badge" data-size="sm">Wajib</span></p>
    <p class="sb-doc-hint">PDF, maks. 10 MB</p>
  </div>
  <div class="sb-upload" data-max-size="10" data-variant="slot">
    <label class="sb-dropzone">
      <input class="sb-dropzone-input" type="file" accept=".pdf,.jpg,.jpeg,.png">
      <svg aria-hidden="true"><!-- upload-cloud --></svg>Unggah
    </label>
    <ul class="sb-upload-list" aria-label="Resume medis">
  <li class="sb-file">
    <span class="sb-file-type" aria-hidden="true">PDF</span>
    <div class="sb-file-body">
      <p class="sb-file-name"><span>resume-medis-KLM-0241.pdf</span><svg class="sb-file-done" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"/></svg></p>
      <p class="sb-file-meta">2,4 MB<span class="sb-file-error"></span></p>
      <div class="sb-progress" data-label="right" role="progressbar" aria-label="Mengunggah resume-medis-KLM-0241.pdf" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" style="--value: 64"><div class="sb-progress-track"><div class="sb-progress-fill"></div></div><span class="sb-progress-label">64%</span></div>
      <button class="sb-btn sb-file-retry" type="button" data-variant="link" data-size="sm">Coba lagi</button>
    </div>
    <button class="sb-file-action" type="button" aria-label="Batalkan unggahan resume-medis-KLM-0241.pdf"><svg class="sb-file-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg><svg class="sb-file-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
  </li></ul>
  </div>
</li>
<li class="sb-doc">
  <div class="sb-doc-head">
    <p class="sb-doc-name">Foto KTP peserta <span class="sb-badge" data-size="sm">Wajib</span></p>
    <p class="sb-doc-hint">JPG atau PNG, maks. 5 MB</p>
  </div>
  <div class="sb-upload" data-max-size="10" data-variant="slot">
    <label class="sb-dropzone">
      <input class="sb-dropzone-input" type="file" accept=".pdf,.jpg,.jpeg,.png">
      <svg aria-hidden="true"><!-- upload-cloud --></svg>Unggah
    </label>
    <ul class="sb-upload-list" aria-label="Foto KTP peserta"></ul>
  </div>
</li>
<li class="sb-doc">
  <div class="sb-doc-head">
    <p class="sb-doc-name">Kuitansi apotek <span class="sb-badge" data-size="sm" data-color="blue-gray">Opsional</span></p>
    <p class="sb-doc-hint">PDF, JPG atau PNG, maks. 10 MB</p>
  </div>
  <div class="sb-upload" data-max-size="10" data-variant="slot">
    <label class="sb-dropzone">
      <input class="sb-dropzone-input" type="file" accept=".pdf,.jpg,.jpeg,.png">
      <svg aria-hidden="true"><!-- upload-cloud --></svg>Unggah
    </label>
    <ul class="sb-upload-list" aria-label="Kuitansi apotek">
  <li class="sb-file">
    <img class="sb-file-thumb" src="…" alt="">
    <div class="sb-file-body">
      <p class="sb-file-name"><span>kuitansi-apotek.jpg</span><svg class="sb-file-done" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"/></svg></p>
      <p class="sb-file-meta">640 KB<span class="sb-file-error"></span></p>
      <div class="sb-progress" data-label="right" role="progressbar" aria-label="Mengunggah kuitansi-apotek.jpg" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="--value: 100"><div class="sb-progress-track"><div class="sb-progress-fill"></div></div><span class="sb-progress-label">100%</span></div>
      <button class="sb-btn sb-file-retry" type="button" data-variant="link" data-size="sm">Coba lagi</button>
    </div>
    <button class="sb-file-action" type="button" aria-label="Hapus kuitansi-apotek.jpg"><svg class="sb-file-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg><svg class="sb-file-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
  </li></ul>
  </div>
</li>
</ul>
```

## File states

| State | Shows | Action |
| --- | --- | --- |
| Uploading | Progress bar and percentage | × Batalkan unggahan |
| Done | `success-600` check after the name | Bin: Hapus |
| Error (upload failed) | `error-50` row, `error-300` border, the reason in `error-700`, Coba lagi | Bin: Hapus |
| Invalid (wrong type or too big) | As Error, without Coba lagi: the file can never pass | Bin: Hapus |

## Do and don't

**Do:** Refuse the file in its own row, with the reason.

```html
<ul class="sb-upload-list"><li class="sb-file">
  <span class="sb-file-type" aria-hidden="true">DCM</span>
  <div class="sb-file-body">
    <p class="sb-file-name"><span>rontgen-thorax.dcm</span><svg class="sb-file-done" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"/></svg></p>
    <p class="sb-file-meta">14,6 MB<span class="sb-file-error">Jenis file tidak didukung</span></p>
    <div class="sb-progress" data-label="right" role="progressbar" aria-label="Mengunggah rontgen-thorax.dcm" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="--value: 0"><div class="sb-progress-track"><div class="sb-progress-fill"></div></div><span class="sb-progress-label">0%</span></div>
    <button class="sb-btn sb-file-retry" type="button" data-variant="link" data-size="sm">Coba lagi</button>
  </div>
  <button class="sb-file-action" type="button" aria-label="Hapus rontgen-thorax.dcm"><svg class="sb-file-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg><svg class="sb-file-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
</li></ul>
```

**Don't:** One vague error for the whole zone: which file, and why?

```html
<div class="sb-banner" data-tone="error"><div class="sb-banner-text"><p class="sb-banner-desc">Terjadi kesalahan saat mengunggah.</p></div></div>
```

## Accessibility

- The zone is the `<label>` of a real file input, so Tab reaches it and Enter or Space opens the file picker; dragging is an extra, never the only way.
- The input is only visually hidden (not `display: none`), so it keeps focus; the zone shows the focus ring.
- Each bar is a `role="progressbar"` named "Mengunggah resume-medis-KLM-0241.pdf" with its value.
- The action button is named after the file and its state: "Batalkan unggahan …" while uploading, "Hapus …" after. After removing, focus returns to the zone.
- Errors are written in the row next to the file, in words, not only in red.

| Text | On | Ratio | AA |
| --- | --- | --- | --- |
| "Klik untuk unggah" `brand-700` | `white` | 6.61:1 | Passes |
| Hint `gray-500` | `white` | 4.97:1 | Passes |
| Error `error-700` | `error-50` | 6.05:1 | Passes |

## Code

Load `tokens.css`, `progress.css`, `button.css` and `badge.css`, then `file-upload.css`, and add `file-upload.js`. Upload from the page: listen for `sb-upload-file` and report back with `detail.progress(percent)`, `detail.done()` or `detail.fail(message)`.

`file-upload.css`

```css
/* File upload, Codemasters Design System
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
```

### Script

`file-upload.js`

```js
// File upload: picks and drops files, checks type (accept) and size (data-max-size, MB), lists them with a progress bar.
// The page uploads: listen for "sb-upload-file" and call detail.progress(percent), detail.done() or detail.fail(message).
// Also fires "sb-upload-cancel" and "sb-upload-remove" with { file, item }.
const upSvg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
const UP_PATH = {
  "x": "M18 6 6 18M6 6l12 12",
  "trash": "M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2",
  "check": "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
};
const upEsc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const upSize = b => (b < 1048576 ? `${Math.max(1, Math.round(b / 1024))} KB` : `${(b / 1048576).toLocaleString('id-ID', { maximumFractionDigits: 1 })} MB`);
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
function upDrag(e) {
  const zone = e.target.closest?.('.sb-dropzone');
  if (!zone || !e.dataTransfer?.types.includes('Files') || zone.querySelector('input').disabled) return;
  e.preventDefault();
  if (e.type === 'dragleave' && zone.contains(e.relatedTarget)) return;
  zone.toggleAttribute('data-drag', e.type === 'dragenter' || e.type === 'dragover');
  if (e.type === 'drop') upFiles(zone.closest('.sb-upload'), e.dataTransfer.files);
}
document.addEventListener('change', upChange);
document.addEventListener('click', upClick);
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(t => document.addEventListener(t, upDrag));
```

## Tokens used

```css
:root {
  --brand-600: #3966e0;
  --success-600: #039855;
  --bg-primary: var(--white);
  --bg-secondary: var(--gray-50);
  --bg-brand-subtle: var(--brand-50);
  --bg-error-subtle: var(--error-50);
  --text-primary: var(--gray-900);
  --text-secondary: var(--gray-700);
  --text-tertiary: var(--gray-600);
  --text-quaternary: var(--gray-500);
  --text-brand: var(--brand-700);
  --text-error: var(--error-700);
  --fg-brand: var(--brand-600);
  --border-primary: var(--gray-300);
  --border-secondary: var(--gray-200);
  --border-error: var(--error-300);
  --radius-md: 8px;
  --radius-lg: 12px;
  --shadow-xs: 0 1px 2px rgba(16,24,40,.05);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Timeless Sans', sans-serif;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
}
```

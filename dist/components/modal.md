---
name: Modal
slug: modal
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-08
requires: tokens.css
---

# Modal

A dialog that stops the page for one decision or one short form: confirmations, a destructive check, sending a claim. Native <dialog>, so focus, Esc and the inert page come from the browser.

## Usage

- Use a modal when the user must decide before going on: confirm a destructive step, leave unsaved work, or fill two or three fields that belong to one action (Kirim ke Advisor).
- Not for news. A result the user does not have to act on is a toast; an error in a form shows at the field.
- Not for long forms or anything that needs scrolling and reference to the page behind. That is a page or a side panel.
- One modal at a time. Never open a modal from a modal.
- The title asks the question or names the action, in Title Case ("Tolak Klaim?"). The primary button repeats the action ("Tolak Klaim"), never "Ya" or "OK".
- Two actions: Batal (Secondary gray) on the left, the action (Primary, or Destructive) on the right. An acknowledgement has one button.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Panel | `white`, radius 12, padding 24, gap 16, `shadow-lg`, on a `--scrim` (black 20 %). Width 424 (sm), 640 (md), 880 (lg), never wider than the screen minus 32; scrolls inside when taller than the screen minus 64. |
| 2 | Icon | Optional. 48 px circle: tone-100 fill, 8 px tone-50 ring, 24 px tone-600 icon. Error for destructive, warning for losing work, success for done, brand otherwise. |
| 3 | Title | Text xl / Semibold `gray-900` (sm: Text lg), Title Case. Asks the question or names the action. `aria-labelledby` points to it. |
| 4 | Description | Text sm `gray-500`, 4 under the title. Says what happens. `aria-describedby` points to it. |
| 5 | Close | Tertiary gray icon button sm, 16 from the top and right. Leave it out when the modal needs an answer (an acknowledgement still closes with its button and Esc). |
| 6 | Footer | Buttons md, right-aligned, gap 12, 24 under the content. In sm the buttons share the width; under 480 px they stack, primary on top. |

## Properties

| Property | Values | Code |
| --- | --- | --- |
| Size | sm, md, lg | `data-size="sm"` or `"lg"`; omit for md |
| Icon | None, Brand, Error, Warning, Success | `<span class="sb-modal-icon" data-tone="…">` in the head |
| Close button | True, False | `.sb-modal-close` with `data-modal-close` |
| Body | True, False | `<div class="sb-modal-body">` for fields or longer content |
| Open, close | — | `data-modal-open="id"` on the trigger, `data-modal-close` on Batal and the close button |

## Types

### Destructive confirmation

Error icon, the action as a Destructive Primary button. Focus starts on Batal (`autofocus`), so Enter never destroys by accident.

```html
<dialog class="sb-modal" id="modal-2" data-size="sm" aria-labelledby="modal-2-title" aria-describedby="modal-2-desc">
  <header class="sb-modal-head">
    <span class="sb-modal-icon" data-tone="error" aria-hidden="true"><svg aria-hidden="true"><!-- trash --></svg></span>
    <div class="sb-modal-heading">
      <h2 class="sb-modal-title" id="modal-2-title">Tolak Klaim?</h2>
      <p class="sb-modal-desc" id="modal-2-desc">Klaim KLM-0241 dikembalikan ke rumah sakit dengan alasan penolakan. Tindakan ini tidak bisa dibatalkan.</p>
    </div>
  </header>
  <button class="sb-btn sb-modal-close" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Tutup" data-modal-close><svg aria-hidden="true"><!-- x --></svg></button>
  <footer class="sb-modal-foot">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-close autofocus>Batal</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-destructive>Tolak Klaim</button>
  </footer>
</dialog>
```

### Warning

For losing work or a step that is hard to undo. The safe choice is the primary button.

### Form

md, no icon, fields in the body (Input field, Textarea, Input dropdown). Keep it to a few fields; the primary button is disabled until the form can be sent.

### Acknowledgement

Only when the user must see the result before going on. One full-width button, no close button. For anything lighter, use a toast.

## Behaviour

| What | How |
| --- | --- |
| Open | `dialog.showModal()` (`data-modal-open`). The page behind becomes inert and stops scrolling. |
| Focus | Moves into the modal: to the `autofocus` element, else the first focusable one. Tab stays inside. On close, focus returns to the button that opened it. |
| Close | Batal, the close button, Esc, or a click on the scrim. A destructive modal may skip the scrim click so a stray click does not lose the choice. |
| Motion | Fades in and scales from 96 % in 150 ms with `--ease`; the scrim fades with it. Reduced motion: no animation. |

## Do and don't

**Do:** The button says the action: Tolak Klaim.

```html
<div class="sb-modal" role="dialog" aria-modal="false" data-size="sm" aria-labelledby="modal-11-title" aria-describedby="modal-11-desc">
  <header class="sb-modal-head">
    <span class="sb-modal-icon" data-tone="error" aria-hidden="true"><svg aria-hidden="true"><!-- trash --></svg></span>
    <div class="sb-modal-heading">
      <h2 class="sb-modal-title" id="modal-11-title">Tolak Klaim?</h2>
      <p class="sb-modal-desc" id="modal-11-desc">Klaim KLM-0241 dikembalikan ke rumah sakit dengan alasan penolakan. Tindakan ini tidak bisa dibatalkan.</p>
    </div>
  </header>
  <footer class="sb-modal-foot">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-close autofocus>Batal</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-destructive>Tolak Klaim</button>
  </footer>
</div>
```

**Don't:** "Apakah Anda yakin?" with Ya / Tidak. People answer without reading; say what will happen.

```html
<div class="sb-modal" role="dialog" aria-modal="false" data-size="sm" aria-labelledby="modal-12-title" aria-describedby="modal-12-desc">
  <header class="sb-modal-head">
    <span class="sb-modal-icon" data-tone="error" aria-hidden="true"><svg aria-hidden="true"><!-- trash --></svg></span>
    <div class="sb-modal-heading">
      <h2 class="sb-modal-title" id="modal-12-title">Apakah Anda yakin?</h2>
      <p class="sb-modal-desc" id="modal-12-desc">Klaim KLM-0241 dikembalikan ke rumah sakit dengan alasan penolakan. Tindakan ini tidak bisa dibatalkan.</p>
    </div>
  </header>
  <footer class="sb-modal-foot">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray">Tidak</button>
    <button class="sb-btn" type="button" data-hierarchy="primary">Ya</button>
  </footer>
</div>
```

**Do:** Batal or the safe choice on the left, the action on the right.

```html
<div class="sb-modal" role="dialog" aria-modal="false" data-size="sm" aria-labelledby="modal-13-title" aria-describedby="modal-13-desc">
  <header class="sb-modal-head">
    <span class="sb-modal-icon" data-tone="warning" aria-hidden="true"><svg aria-hidden="true"><!-- alert --></svg></span>
    <div class="sb-modal-heading">
      <h2 class="sb-modal-title" id="modal-13-title">Simpan Perubahan?</h2>
      <p class="sb-modal-desc" id="modal-13-desc">Ada perubahan pada ringkasan yang belum disimpan. Kalau keluar sekarang, perubahan itu hilang.</p>
    </div>
  </header>
  <footer class="sb-modal-foot">
    <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-close>Buang</button>
    <button class="sb-btn" type="button" data-hierarchy="primary">Simpan</button>
  </footer>
</div>
```

**Don't:** Two primary buttons. Only one next step looks like one.

```html
<div class="sb-modal" role="dialog" aria-modal="false" data-size="sm" aria-labelledby="modal-14-title" aria-describedby="modal-14-desc">
  <header class="sb-modal-head">
    <span class="sb-modal-icon" data-tone="warning" aria-hidden="true"><svg aria-hidden="true"><!-- alert --></svg></span>
    <div class="sb-modal-heading">
      <h2 class="sb-modal-title" id="modal-14-title">Simpan Perubahan?</h2>
      <p class="sb-modal-desc" id="modal-14-desc">Ada perubahan pada ringkasan yang belum disimpan. Kalau keluar sekarang, perubahan itu hilang.</p>
    </div>
  </header>
  <footer class="sb-modal-foot">
    <button class="sb-btn" type="button" data-hierarchy="primary">Simpan</button>
    <button class="sb-btn" type="button" data-hierarchy="primary" data-destructive>Buang</button>
  </footer>
</div>
```

## Accessibility

- Use the native `<dialog>` with `showModal()`: it sets the modal role, traps focus, makes the page inert, closes on Esc and returns focus. Do not rebuild that with `<div>`s.
- Name it with `aria-labelledby` (the title) and describe it with `aria-describedby` (the description).
- The close button has `aria-label="Tutup"`. The icon is decorative (`aria-hidden`).
- In a destructive modal, start focus on Batal so Enter does the safe thing.
- Title `gray-900` on white is 17.75:1, description `gray-500` 4.97:1.

## Code

Load `tokens.css` and `button.css`, then `modal.css`, and `modal.js` to open and close.

`modal.css`

```css
/* Modal, Codemasters Design System
   Needs tokens.css and button.css; modal.js to open and close. A native <dialog> opened with showModal().

   <button class="sb-btn" type="button" data-modal-open="tolak">Tolak Klaim</button>
   <dialog class="sb-modal" id="tolak" data-size="sm" aria-labelledby="tolak-title" aria-describedby="tolak-desc">
     <header class="sb-modal-head">
       <span class="sb-modal-icon" data-tone="error">…trash…</span>
       <div class="sb-modal-heading">
         <h2 class="sb-modal-title" id="tolak-title">Tolak Klaim?</h2>
         <p class="sb-modal-desc" id="tolak-desc">…</p>
       </div>
     </header>
     <button class="sb-btn sb-modal-close" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Tutup" data-modal-close>…x…</button>
     <footer class="sb-modal-foot">
       <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-modal-close autofocus>Batal</button>
       <button class="sb-btn" type="button" data-destructive>Tolak Klaim</button>
     </footer>
   </dialog>

   data-size   sm 424 (confirmations) | md 640 (forms, default) | lg 880 (wide content)
   data-tone   on the icon: brand | error | warning | success */

.sb-modal {
  --modal-w: 640px;
  box-sizing: border-box;
  display: grid; gap: 16px; align-content: start;
  width: min(var(--modal-w), calc(100% - 32px)); max-width: none; max-height: calc(100dvh - 64px);
  margin: auto; padding: 24px; overflow-y: auto;
  font: 400 var(--text-sm) var(--font); color: var(--gray-700);
  background: var(--white); border: 0; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
}
.sb-modal[data-size="sm"] { --modal-w: 424px; }
.sb-modal[data-size="lg"] { --modal-w: 880px; }

/* Open and close: fade and scale from 96 %, 150 ms; the scrim fades with it. */
div.sb-modal { position: relative; } /* static specimens; a <dialog> stays fixed in the top layer */
dialog.sb-modal { opacity: 0; scale: .96; transition: opacity 150ms var(--ease), scale 150ms var(--ease), overlay 150ms allow-discrete, display 150ms allow-discrete; }
dialog.sb-modal:not([open]) { display: none; }
dialog.sb-modal[open] { opacity: 1; scale: 1; }
dialog.sb-modal::backdrop { background: transparent; transition: background-color 150ms var(--ease), overlay 150ms allow-discrete, display 150ms allow-discrete; }
dialog.sb-modal[open]::backdrop { background: var(--scrim); }
@starting-style {
  dialog.sb-modal[open] { opacity: 0; scale: .96; }
  dialog.sb-modal[open]::backdrop { background: transparent; }
}
html:has(dialog.sb-modal[open]) { overflow: hidden; } /* the page behind does not scroll */

/* Head: optional icon, title, description. The close button sits in the corner. */
.sb-modal-head { display: grid; gap: 16px; padding-inline-end: 32px; }
.sb-modal-heading { display: grid; gap: 4px; }
.sb-modal-title { margin: 0; font: 600 var(--text-xl) var(--font); color: var(--gray-900); text-wrap: balance; }
.sb-modal[data-size="sm"] .sb-modal-title { font: 600 var(--text-lg) var(--font); }
.sb-modal-desc { margin: 0; color: var(--gray-500); text-wrap: pretty; }
.sb-modal-close { position: absolute; top: 16px; right: 16px; }

/* Icon: 48 px circle, tone-100 fill with an 8 px tone-50 ring, 24 px tone-600 icon. */
.sb-modal-icon {
  --tone: var(--brand-600); --tone-fill: var(--brand-100); --tone-ring: var(--brand-50);
  box-sizing: border-box; display: grid; place-items: center; width: 48px; height: 48px;
  border: 8px solid var(--tone-ring); border-radius: var(--radius-full); background: var(--tone-fill); color: var(--tone);
}
.sb-modal-icon > svg { width: 24px; height: 24px; }
.sb-modal-icon[data-tone="error"] { --tone: var(--error-600); --tone-fill: var(--error-100); --tone-ring: var(--error-50); }
.sb-modal-icon[data-tone="warning"] { --tone: var(--warning-600); --tone-fill: var(--warning-100); --tone-ring: var(--warning-50); }
.sb-modal-icon[data-tone="success"] { --tone: var(--success-600); --tone-fill: var(--success-100); --tone-ring: var(--success-50); }

.sb-modal-body { display: grid; gap: 16px; min-width: 0; }
.sb-modal-body > p { margin: 0; }

/* Footer: actions right-aligned, gap 12, 8 more above them. In a small modal the buttons share the width. */
.sb-modal-foot { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 12px; margin-top: 8px; }
.sb-modal[data-size="sm"] .sb-modal-foot > .sb-btn { flex: 1; }
@media (max-width: 480px) {
  .sb-modal-foot { flex-direction: column-reverse; }
  .sb-modal-foot > .sb-btn { width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  dialog.sb-modal, dialog.sb-modal::backdrop { transition: none; }
}
```

### Open and close script

`modal.js`

```js
// Modal: [data-modal-open="id"] opens <dialog id="id">, [data-modal-close] and a scrim click close it.
// Esc, the focus trap and returning focus to the opener come from showModal().
function modalClick(e) {
  const opener = e.target.closest?.('[data-modal-open]');
  if (opener) return document.getElementById(opener.dataset.modalOpen)?.showModal();
  const closer = e.target.closest?.('[data-modal-close]');
  if (closer) return closer.closest('dialog')?.close();
  // A click on the scrim lands on the dialog element itself, outside its box.
  const dialog = e.target.closest?.('dialog.sb-modal');
  if (dialog && e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  }
}
document.addEventListener('click', modalClick);
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-500: #667085;
  --gray-700: #344054;
  --gray-900: #101828;
  --brand-50: #f0f6fe;
  --brand-100: #dfeafb;
  --brand-600: #3966e0;
  --error-50: #fef3f2;
  --error-100: #fee4e2;
  --error-600: #d92d20;
  --warning-50: #fffaeb;
  --warning-100: #fef0c7;
  --warning-600: #dc6803;
  --success-50: #ecfdf3;
  --success-100: #d1fadf;
  --success-600: #039855;
  --radius-lg: 12px;
  --radius-full: 9999px;
  --shadow-lg: 0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03);
  --scrim: rgba(0, 0, 0, .2);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --text-xl: 20px/30px;
  --text-lg: 18px/28px;
  --text-sm: 14px/20px;
}
```

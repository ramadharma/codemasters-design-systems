// Reference behaviour for the WYSIWYG editor, built on the browser's own editing commands.
// In production keep the markup, CSS and ARIA and let the app's editor library do the editing.
const BLOCK_VALUES = ['p', 'h1', 'h2', 'blockquote'];
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
document.addEventListener('click', wysClick);
document.addEventListener('mousedown', wysMousedown);
document.addEventListener('change', wysSelect);
document.addEventListener('selectionchange', wysSelection);

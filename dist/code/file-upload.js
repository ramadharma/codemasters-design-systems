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
    <button class="sb-btn sb-file-retry" type="button" data-hierarchy="link-color" data-size="sm">Coba lagi</button>
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

// Input dropdown behaviour: click or Enter / Space / ↓ opens, ↑ ↓ Home End move, Enter selects,
// Esc closes, Tab closes. The Search type filters as you type. Focus stays on the field (aria-activedescendant).
function ddParts(el) {
  const dd = el.closest('.sb-dd');
  return dd && { dd, trigger: dd.querySelector('[role="combobox"]'), list: dd.querySelector('[role="listbox"]') };
}
function ddOptions(list) {
  return [...list.querySelectorAll('[role="option"]')].filter(o => !o.hidden && o.getAttribute('aria-disabled') !== 'true');
}
function ddActivate(p, opt) {
  p.list.querySelectorAll('[data-active]').forEach(o => o.removeAttribute('data-active'));
  if (!opt) return p.trigger.removeAttribute('aria-activedescendant');
  opt.setAttribute('data-active', '');
  p.trigger.setAttribute('aria-activedescendant', opt.id);
  opt.scrollIntoView({ block: 'nearest' });
}
function ddSetOpen(p, open) {
  p.trigger.setAttribute('aria-expanded', String(open));
  p.list.hidden = !open;
  const opts = ddOptions(p.list);
  ddActivate(p, open ? opts.find(o => o.getAttribute('aria-selected') === 'true') || opts[0] : null);
}
function ddChoose(p, opt) {
  if (!opt || opt.getAttribute('aria-disabled') === 'true') return;
  p.list.querySelectorAll('[role="option"]').forEach(o => o.setAttribute('aria-selected', String(o === opt)));
  if (p.trigger.tagName === 'INPUT') p.trigger.value = opt.querySelector('.sb-dd-label').textContent;
  else p.dd.querySelector('.sb-dd-value').innerHTML = opt.querySelector('.sb-dd-main').innerHTML;
  ddSetOpen(p, false);
  p.trigger.focus();
}
function ddClick(e) {
  const opt = e.target.closest?.('.sb-dd [role="option"]');
  if (opt) return ddChoose(ddParts(opt), opt);
  const trigger = e.target.closest?.('.sb-dd [role="combobox"]');
  document.querySelectorAll('.sb-dd [aria-expanded="true"]').forEach(t => t !== trigger && ddSetOpen(ddParts(t), false));
  if (!trigger || trigger.disabled) return;
  const p = ddParts(trigger);
  ddSetOpen(p, trigger.tagName === 'INPUT' ? true : p.list.hidden);
}
function ddKeydown(e) {
  const trigger = e.target.closest?.('.sb-dd [role="combobox"]');
  if (!trigger) return;
  const p = ddParts(trigger);
  const open = !p.list.hidden;
  const opts = ddOptions(p.list);
  const i = opts.findIndex(o => o.hasAttribute('data-active'));
  const isButton = trigger.tagName !== 'INPUT';
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (!open) return ddSetOpen(p, true);
    ddActivate(p, opts[(i + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length]);
  } else if (open && (e.key === 'Home' || e.key === 'End')) {
    e.preventDefault();
    ddActivate(p, opts[e.key === 'Home' ? 0 : opts.length - 1]);
  } else if (e.key === 'Enter' || (isButton && e.key === ' ')) {
    e.preventDefault();
    open ? ddChoose(p, opts[i]) : ddSetOpen(p, true);
  } else if (e.key === 'Escape' && open) {
    e.preventDefault();
    e.stopPropagation();
    ddSetOpen(p, false);
  } else if (e.key === 'Tab' && open) {
    ddSetOpen(p, false);
  }
}
function ddFilter(e) {
  const input = e.target.closest?.('.sb-dd input[role="combobox"]');
  if (!input) return;
  const p = ddParts(input);
  const q = input.value.trim().toLowerCase();
  p.list.querySelectorAll('[role="option"]').forEach(o => (o.hidden = !o.querySelector('.sb-dd-label').textContent.toLowerCase().includes(q)));
  const empty = p.list.querySelector('.sb-dd-empty');
  if (empty) empty.hidden = ddOptions(p.list).length > 0;
  p.trigger.setAttribute('aria-expanded', 'true');
  p.list.hidden = false;
  ddActivate(p, ddOptions(p.list)[0]);
}
document.addEventListener('click', ddClick);
document.addEventListener('keydown', ddKeydown);
document.addEventListener('input', ddFilter);

// Dropdown menu behaviour (WAI-ARIA menu button): click, Enter, Space or ↓ opens and focuses the first item,
// ↑ opens on the last; ↑ ↓ Home End move; Enter / Space picks; Esc closes back to the trigger; Tab closes.
// Checkbox items toggle and keep the menu open. Every pick fires "sb-menu-select" with the item label.
function menuParts(el) {
  const wrap = el.closest('.sb-menu-wrap');
  return wrap && { wrap, trigger: wrap.querySelector('[aria-haspopup="menu"]'), menu: wrap.querySelector('[role="menu"]') };
}
function menuItems(menu) {
  return [...menu.querySelectorAll('[role^="menuitem"]')].filter(i => i.getAttribute('aria-disabled') !== 'true');
}
function menuSetOpen(p, open, focus) {
  p.trigger.setAttribute('aria-expanded', String(open));
  p.menu.hidden = !open;
  if (open && focus) {
    const items = menuItems(p.menu);
    (focus === 'last' ? items[items.length - 1] : items[0])?.focus();
  }
}
function menuClick(e) {
  const item = e.target.closest?.('[role^="menuitem"]');
  const trigger = e.target.closest?.('.sb-menu-wrap [aria-haspopup="menu"]');
  document.querySelectorAll('.sb-menu-wrap [aria-haspopup="menu"][aria-expanded="true"]').forEach(t => {
    if (t !== trigger && !t.closest('.sb-menu-wrap').contains(e.target)) menuSetOpen(menuParts(t), false);
  });
  if (item) {
    if (item.getAttribute('aria-disabled') === 'true') return;
    const p = menuParts(item);
    if (item.getAttribute('role') === 'menuitemcheckbox') {
      item.setAttribute('aria-checked', String(item.getAttribute('aria-checked') !== 'true')); // menu stays open
    } else {
      menuSetOpen(p, false);
      p.trigger.focus();
    }
    item.dispatchEvent(new CustomEvent('sb-menu-select', { bubbles: true, detail: item.querySelector('.sb-menu-label').textContent }));
  } else if (trigger) {
    const p = menuParts(trigger);
    menuSetOpen(p, p.menu.hidden, e.detail === 0 ? 'first' : null); // keyboard "click" (Enter/Space) moves focus in
  }
}
function menuKeydown(e) {
  const trigger = e.target.closest?.('.sb-menu-wrap [aria-haspopup="menu"]');
  if (trigger && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
    e.preventDefault();
    return menuSetOpen(menuParts(trigger), true, e.key === 'ArrowUp' ? 'last' : 'first');
  }
  const item = e.target.closest?.('[role^="menuitem"]');
  if (!item) return;
  const p = menuParts(item);
  const items = menuItems(p.menu);
  const i = items.indexOf(item);
  const go = n => { e.preventDefault(); items[(n + items.length) % items.length].focus(); };
  if (e.key === 'ArrowDown') go(i + 1);
  else if (e.key === 'ArrowUp') go(i - 1);
  else if (e.key === 'Home') go(0);
  else if (e.key === 'End') go(items.length - 1);
  else if (e.key === 'Escape') { e.preventDefault(); menuSetOpen(p, false); p.trigger.focus(); }
  else if (e.key === 'Tab') menuSetOpen(p, false);
}
document.addEventListener('click', menuClick);
document.addEventListener('keydown', menuKeydown);

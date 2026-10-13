// Sidebar: the collapse button and sub-menus. The account menu uses dropdown-menu.js, tooltips use tooltip.js.
function sidebarClick(e) {
  const btn = e.target.closest?.('.sb-side-toggle, .sb-side-item[aria-expanded]');
  if (!btn) return;
  const side = btn.closest('.sb-sidebar'), toggle = side.querySelector('.sb-side-toggle');
  const collapsed = side.hasAttribute('data-collapsed');
  if (btn === toggle) {
    side.toggleAttribute('data-collapsed', !collapsed);
    toggle.setAttribute('aria-expanded', String(collapsed));
    return;
  }
  const open = collapsed || btn.getAttribute('aria-expanded') !== 'true';
  if (collapsed) {
    side.removeAttribute('data-collapsed');
    toggle.setAttribute('aria-expanded', 'true');
  }
  btn.setAttribute('aria-expanded', String(open));
  document.getElementById(btn.getAttribute('aria-controls')).hidden = !open;
}
document.addEventListener('click', sidebarClick);

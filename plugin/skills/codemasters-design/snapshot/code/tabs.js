// Tabs: click or ← → (↑ ↓ when vertical), Home and End select a tab and show its panel.
function tabsSelect(tab) {
  for (const t of tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]')) {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    const panel = document.getElementById(t.getAttribute('aria-controls'));
    if (panel) panel.hidden = !on;
  }
}
function tabsClick(e) {
  const tab = e.target.closest?.('.sb-tabs [role="tab"]');
  if (tab && !tab.disabled) tabsSelect(tab);
}
function tabsKeydown(e) {
  const tab = e.target.closest?.('.sb-tabs [role="tab"]');
  if (!tab) return;
  const list = tab.closest('[role="tablist"]');
  const [prev, next] = list.getAttribute('aria-orientation') === 'vertical' ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];
  const tabs = [...list.querySelectorAll('[role="tab"]:not(:disabled)')];
  const i = tabs.indexOf(tab);
  const to = { [prev]: (i - 1 + tabs.length) % tabs.length, [next]: (i + 1) % tabs.length, Home: 0, End: tabs.length - 1 }[e.key];
  if (to === undefined) return;
  e.preventDefault();
  tabsSelect(tabs[to]);
  tabs[to].focus(); // focus also scrolls a long row to the tab
}
document.addEventListener('click', tabsClick);
document.addEventListener('keydown', tabsKeydown);

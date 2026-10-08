// Foundations: Grids and spacing (with containers and radius). Source: DESIGN.md §4.1–4.4 and §5,
// Figma Foundations → Grids & spacing.
(() => {
  const { tokens, tokenGroupCss } = DS;
  const SPACE = Object.keys(tokens).filter(t => t.startsWith('--space-'));
  const px = t => parseInt(tokens[t], 10);

  const spacing = `<div class="f-space">
${SPACE.map(t => `<button class="f-space-row" type="button" data-copy-text="var(${t})" aria-label="Copy var(${t})"><code>${t.slice(2)}</code><span class="f-space-px">${px(t)}</span><span class="f-space-bar" style="width: ${px(t)}px"></span></button>`).join('\n')}
</div>`;

  const RADIUS = [[4, 'Checkboxes, calendar days, progress and slider tracks, targets under 24 px (help icon, badge ×)', 'radius-sm'], [8, 'Icon buttons of 32 px and up, buttons, inputs, dropdown menus, tab tops (`8 8 0 0`), inner cards, banners', 'radius-md'], [12, 'Cards, dialogs, popover panels', 'radius-lg'], [16, 'Badges, tags, chips', 'radius-xl'], [9999, 'Avatar, toggle, radio, check circle, dots', 'radius-full']];
  const radius = `<div class="f-radius">
${RADIUS.map(([r, , t]) => `<figure class="f-radius-tile"><span style="border-radius: ${r}px"></span><figcaption class="mx">${r === 9999 ? 'Full' : r}${t ? `<br><code>${t}</code>` : ''}</figcaption></figure>`).join('\n')}
</div>`;

  const CONTAINERS = ['sm', 'md', 'lg', 'xl'];
  const containers = `<div class="f-containers">
${CONTAINERS.map(c => `<div class="f-container" style="width: ${(px(`--container-${c}`) / 1280) * 100}%"><code>container-${c}</code> ${px(`--container-${c}`)}</div>`).join('\n')}
</div>`;

  // Grid diagrams drawn to scale: padding and gutters as a share of the frame width.
  const GRIDS = [['Desktop', 1280, 32, 12, 32], ['Tablet', 768, 32, 6, 32], ['Mobile', 375, 16, 4, 16]];
  const grids = `<div class="f-grids">
${GRIDS.map(([n, frame, pad, cols, gut]) => `<figure class="f-grid-frame" style="--pad: ${(pad / frame) * 100}%; --gut: ${(gut / (frame - 2 * pad)) * 100}%; max-width: ${frame === 1280 ? 100 : frame === 768 ? 60 : 30}%">
  <div class="f-grid-cols" style="grid-template-columns: repeat(${cols}, 1fr)">${'<span></span>'.repeat(cols)}</div>
  <figcaption class="mx">${n} · ${cols} columns · gutter ${gut} · padding ${pad}</figcaption>
</figure>`).join('\n')}
</div>`;

  DS.foundations.push({
    slug: 'grids-spacing',
    name: 'Grids & Spacing',
    category: 'Foundations',
    status: 'Ready',
    updated: '2026-10-07',
    description: 'A 4 px soft grid: a fixed spacing scale, four containers, column grids for desktop, tablet and mobile, and the radius set.',
    sections: [
      {
        id: 'spacing',
        title: 'Spacing',
        blocks: [
          { type: 'p', text: 'A fixed set of values removes guesswork and gives every screen the same rhythm. Token number × 4 = px. Click a row to copy its token.' },
          { type: 'example', html: spacing, code: false },
          {
            type: 'table',
            head: ['Token', 'rem (16 px base)', 'px'],
            rows: SPACE.map(t => [`\`${t}\``, `${px(t) / 16}rem`, String(px(t))]),
          },
          { type: 'h3', id: 'spacing-rules', text: 'Rules' },
          {
            type: 'list',
            items: [
              '**4 px soft grid.** Every spacing value, size and position is divisible by 4. Prefer multiples of 8; use the 4 px steps (4, 12, 20) for fine adjustments.',
              '**Only values from the set.** A value on the 4 px grid but not in the set is still off: use 128, not 124.',
              '**Line things up** on both axes, and give similar components the same values so the vertical rhythm repeats.',
              '**Control padding exception.** Buttons, inputs and tabs may use inner padding off the set (`10 18`, `10 14`, `9 16`) when that lands the outer height on the grid (40 / 44 / 52). Gaps between elements never do.',
            ],
          },
          { type: 'h3', id: 'spacing-app', text: 'Use in the app' },
          {
            type: 'table',
            head: ['Where', 'Value'],
            rows: [
              ['Page padding', '32'],
              ['Gap between cards', '24'],
              ['Card padding', '24 (compact cards 16)'],
              ['Between blocks inside a card', '16'],
              ['Between rows of a list', '12'],
              ['Between inline items', '8'],
            ],
          },
          { type: 'note', tone: 'warning', text: 'The app also uses `2` and `6` (for example the 6 px gap between a field label and its control). They are off the scale; use 4 or 8 in new work.' },
        ],
      },
      {
        id: 'grid',
        title: 'Grid layouts',
        blocks: [
          { type: 'example', html: grids, code: false },
          {
            type: 'table',
            head: ['Breakpoint', 'Frame', 'Container', 'Side padding', 'Content width', 'Columns', 'Gutter', 'Column width'],
            rows: [
              ['Desktop', '1440', '1280 (`container-xl`), centred, 80 outer margin', '32', '1216', '12', '32', '72'],
              ['Tablet', '768', '768, full width', '32', '704', '6', '32', '~90.7 (auto)'],
              ['Mobile', '375', '375, full width', '16', '343', '4', '16', '~73.75 (auto)'],
            ],
          },
          {
            type: 'list',
            items: [
              'Columns stretch (auto width); gutters and side padding are fixed.',
              'Inside a container, sub-grids of **12, 6, 5, 3 or 2** auto columns split a section, for example a row of 3 KPI cards or a 2-column form.',
              'Elements span whole columns and start on a column edge.',
            ],
          },
          { type: 'code', lang: 'css', filename: 'Usage', code: `.page { max-width: var(--container-xl); margin-inline: auto; padding-inline: var(--space-8); }\n.page-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--space-8); }\n\n@media (max-width: 1023px) { .page-grid { grid-template-columns: repeat(6, 1fr); } }\n@media (max-width: 767px)  { .page { padding-inline: var(--space-4); } .page-grid { grid-template-columns: repeat(4, 1fr); gap: var(--space-4); } }` },
        ],
      },
      {
        id: 'containers',
        title: 'Containers',
        blocks: [
          { type: 'p', text: 'Content sits in a centred container with a fixed max width.' },
          { type: 'example', html: containers, code: false },
          {
            type: 'table',
            head: ['Token', 'rem', 'px'],
            rows: CONTAINERS.map(c => [`\`--container-${c}\``, `${px(`--container-${c}`) / 16}rem`, String(px(`--container-${c}`))]),
          },
        ],
      },
      {
        id: 'app-layout',
        title: 'App layout',
        blocks: [
          {
            type: 'list',
            items: [
              '**Desktop only**, minimum width 1280, designed at 1440. The grid applies to the content area right of the sidebar.',
              '**Sidebar:** fixed, `gray-900`; collapsed 72 (icons + tooltips), open 280. Item 44 tall, radius 8; active and hover `gray-800`.',
              '**Header bar:** sticky, white, 80 tall, padding `24 32`, bottom border `gray-200`. Title left (Display xs), actions right (gap 8).',
              '**Body:** padding 32, vertical stack with gap 24, on the 12-column grid.',
              '**Detail page:** header bar, then fact card (7-column grid, `gray-50` fill), then sticky tab row, then tab panels.',
            ],
          },
        ],
      },
      {
        id: 'radius',
        title: 'Radius',
        blocks: [
          { type: 'example', html: radius, code: false },
          {
            type: 'table',
            head: ['Value', 'Token', 'Use'],
            rows: RADIUS.map(([r, use, t]) => [r === 9999 ? '9999 (full)' : String(r), t ? `\`--${t}\`` : '—', use]),
          },
          { type: 'p', text: 'Components use only these tokens, never a px value. 6 was dropped on 7 Oct 2026: checkbox `md` and calendar days moved to 4, editor icons (icon buttons) to 8.' },
        ],
      },
      {
        id: 'do-dont',
        title: "Do and don't",
        blocks: [
          {
            type: 'dodont',
            items: [
              { kind: 'do', html: '<div class="f-dd-stack" style="gap: var(--space-4)"><span></span><span></span><span></span></div>', text: '16 between blocks, from the set.' },
              { kind: 'dont', html: '<div class="f-dd-stack" style="gap: 14px"><span></span><span></span><span></span></div>', text: '14: on no grid step of the set. Use 12 or 16.' },
            ],
          },
        ],
      },
      { id: 'tokens', title: 'Tokens', blocks: [{ type: 'code', lang: 'css', filename: 'tokens.css (spacing, containers, radius)', code: tokenGroupCss('Spacing', 'Containers', 'Radius') }] },
    ],
  });
})();

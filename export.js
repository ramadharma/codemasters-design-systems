// Markdown and token exports. Shared by the dashboard (app.js, Copy / Export buttons) and the build
// (build.mjs, files in dist/), so both always produce the same text. No DOM.
(() => {
  const { meta, components, foundations, applications, snippet, tokens } = DS;
  // Components list A–Z everywhere (sidebar, cards, exports), whatever order the data files load in.
  components.sort((a, b) => a.name.localeCompare(b.name));

  const usedTokens = css => {
    const used = new Set(css.match(/--[\w-]+/g));
    return ':root {\n' + Object.keys(tokens).filter(t => used.has(t)).map(t => `  ${t}: ${tokens[t]};`).join('\n') + '\n}';
  };

  // ---- Block renderers (Markdown)
  const fence = (lang, code) => '```' + lang + '\n' + code.trim() + '\n```';
  const MD = {
    p: b => b.text,
    h3: (b, h) => `${h(3)} ${b.text}`,
    list: b => b.items.map((t, i) => `${b.ordered ? `${i + 1}.` : '-'} ${t}`).join('\n'),
    table: b => [b.head, b.head.map(() => '---'), ...b.rows].map(r => `| ${r.join(' | ')} |`).join('\n'),
    note: b => `> **${b.tone === 'warning' ? 'Warning' : 'Note'}:** ${b.text}`,
    example: b => (b.code === false ? '' : fence('html', b.code || snippet(b.html))), // captions are page hints, not spec
    code: b => (b.filename ? `\`${b.filename}\`\n\n` : '') + fence(b.lang, b.code),
    dodont: b => b.items.map(i => `**${i.kind === 'do' ? 'Do' : "Don't"}:** ${i.text}\n\n${fence('html', snippet(i.html))}`).join('\n\n'),
    playground: () => '',
    tokens: (b, h, page) => fence('css', usedTokens(page.css)),
    components: b => (b.of === 'foundations' ? foundations : b.of === 'applications' ? applications : components).map(c => `- **${c.name}**: ${c.description}`).join('\n'),
  };

  function componentMd(c, base = 1) {
    const h = n => '#'.repeat(base + n - 1);
    const out = [];
    if (base === 1)
      out.push(['---', `name: ${c.name}`, `slug: ${c.slug}`, `category: ${c.category}`, `status: ${c.status}`, `version: ${meta.version}`, `updated: ${c.updated}`, 'requires: tokens.css', '---'].join('\n'));
    out.push(`${h(1)} ${c.name}`, c.description);
    for (const s of c.sections) {
      // Playground is interactive only; the full export already carries every token once.
      if (s.blocks.some(b => b.type === 'playground' || (base > 1 && b.type === 'tokens'))) continue;
      const blocks = s.blocks.map(b => MD[b.type](b, h, c, base)).filter(Boolean);
      if (blocks.length) out.push(`${h(2)} ${s.title}`, ...blocks);
    }
    return out.join('\n\n') + '\n';
  }

  // date: shown in the header when given (dashboard downloads). The build leaves it out so dist/ only changes
  // when the system does.
  const systemMd = date =>
    [
      `# ${meta.name}`,
      `> Exported from the design system dashboard. Version ${meta.version}${date ? `, ${date.toISOString().slice(0, 10)}` : ''}.`,
      meta.intro,
      '## Contents',
      ['- Principles', '- Tokens', ...foundations.map(c => `- ${c.name}`), ...components.map(c => `- ${c.name}`), ...applications.map(c => `- ${c.name}`)].join('\n'),
      '## Principles',
      DS.principles.map((p, i) => `${i + 1}. ${p}`).join('\n'),
      '## Tokens',
      fence('css', `${DS.fontImport}\n\n${DS.tokensCss}`),
      ...foundations.map(c => componentMd(c, 2).trim()),
      ...components.map(c => componentMd(c, 2).trim()),
      ...applications.map(c => componentMd(c, 2).trim()),
    ].join('\n\n') + '\n';

  // Tokens as JSON: every CSS custom property, flat and grouped as in tokens.css.
  const tokensJson = () => ({
    name: meta.name,
    version: meta.version,
    font: { family: tokens['--font'].split(',')[0].replace(/'/g, ''), import: DS.fontImport },
    css: tokens,
    groups: Object.fromEntries(DS.tokenGroups.map(([title, t]) => [title.split(':')[0], t])),
  });

  DS.md = { usedTokens, fence, componentMd, systemMd, tokensJson };
})();

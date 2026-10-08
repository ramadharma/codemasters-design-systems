// Build: writes the design system as plain files to dist/, for skills, tools and anyone without a browser.
// Run: node build.mjs   (no dependencies; uses the same data/*.js and export.js as the dashboard)
//
// dist/
//   index.json               manifest: version + every page with its file path
//   DESIGN.md                the whole system in one file (same as "Export DESIGN.md")
//   foundations|components|applications/<slug>.md   one page each (same as "Copy Markdown")
//   principles.md            the system-wide principles alone (small; skills load it every time)
//   tokens.css, tokens.json, slides.tokens.json
//   code/<file>              every downloadable code block (button.css, slider.js, ...)
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync } from 'node:fs';
import vm from 'node:vm';

// Same load order as index.html, minus the renderer. The stub covers what data files touch at load time.
const ctx = { document: { head: { append() {} }, createElement: () => ({}), addEventListener() {} } };
ctx.window = ctx;
vm.createContext(ctx);
const scripts = [...readFileSync('index.html', 'utf8').matchAll(/<script src="([\w/.-]+\.js)"/g)].map(m => m[1]).filter(f => f !== 'app.js');
for (const file of scripts) vm.runInContext(readFileSync(file, 'utf8'), ctx, { filename: file });

const { DS } = ctx;
const { md } = DS;
const OUT = 'dist';
rmSync(OUT, { recursive: true, force: true }); // pages that were removed must disappear from dist too

const files = [];
const write = (path, text) => {
  mkdirSync(`${OUT}/${path}`.replace(/\/[^/]+$/, ''), { recursive: true });
  writeFileSync(`${OUT}/${path}`, text.endsWith('\n') ? text : `${text}\n`);
  files.push(path);
};

const pages = [...DS.foundations, ...DS.components, ...DS.applications];
const folder = p => p.category.toLowerCase();
for (const p of pages) write(`${folder(p)}/${p.slug}.md`, md.componentMd(p));

write('DESIGN.md', md.systemMd());
write('principles.md', `# ${DS.meta.name}: principles\n\n${DS.meta.intro}\n\n${DS.principles.map((p, i) => `${i + 1}. ${p}`).join('\n')}`);
write('tokens.css', `${DS.fontImport}\n\n${DS.tokensCss}`);
write('tokens.json', JSON.stringify(md.tokensJson(), null, 2));
write('slides.tokens.json', JSON.stringify(DS.slideTokens, null, 2));

// Code blocks with a real file name (not "tokens.css (colour)" or "Usage").
const code = new Map();
for (const p of pages)
  for (const b of p.sections.flatMap(s => s.blocks))
    if (b.type === 'code' && /^[\w.-]+\.(css|js|json)$/.test(b.filename || '')) code.set(b.filename, b.code);
for (const [name, text] of code) write(`code/${name}`, text);

write('index.json', JSON.stringify({
  name: DS.meta.name,
  version: DS.meta.version,
  files: { system: 'DESIGN.md', principles: 'principles.md', tokensCss: 'tokens.css', tokensJson: 'tokens.json', slideTokens: 'slides.tokens.json' },
  pages: pages.map(p => ({ slug: p.slug, name: p.name, category: p.category, status: p.status, updated: p.updated, description: p.description, path: `${folder(p)}/${p.slug}.md` })),
  code: [...code.keys()].map(name => `code/${name}`),
}, null, 2));

// The plugin ships a snapshot as its offline fallback: everything but the 300+ KB DESIGN.md.
const SNAPSHOT = 'plugin/skills/codemasters-design/snapshot';
rmSync(SNAPSHOT, { recursive: true, force: true });
cpSync(OUT, SNAPSHOT, { recursive: true, filter: src => !src.endsWith('/DESIGN.md') });

console.log(`dist/: ${files.length} files (${pages.length} pages, ${code.size} code files), version ${DS.meta.version}`);

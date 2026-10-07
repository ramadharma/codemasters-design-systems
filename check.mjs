// Data integrity check. Run: node check.mjs
// Catches the mistakes a new data/*.js file tends to make: a var() that is not a token,
// duplicate section ids, unknown block types, table rows with the wrong number of cells.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const ctx = { document: { head: { append() {} }, createElement: () => ({}), addEventListener() {} } };
ctx.window = ctx;
vm.createContext(ctx);
for (const [, file] of readFileSync('index.html', 'utf8').matchAll(/src="(data\/[\w-]+\.js)"/g)) vm.runInContext(readFileSync(file, 'utf8'), ctx);

const { DS } = ctx;
const TYPES = new Set(['p', 'h3', 'list', 'table', 'note', 'example', 'code', 'dodont', 'playground', 'tokens', 'components']);
let errors = 0;
const fail = msg => (errors++, console.error('FAIL', msg));

for (const page of [DS.overview, ...DS.foundations, ...DS.components, ...DS.applications]) {
  const blocks = page.sections.flatMap(s => s.blocks);
  const ids = [...page.sections.map(s => s.id), ...blocks.filter(b => b.id).map(b => b.id)];
  ids.filter((id, i) => ids.indexOf(id) !== i).forEach(id => fail(`${page.name}: duplicate id "${id}"`));
  blocks.filter(b => !TYPES.has(b.type)).forEach(b => fail(`${page.name}: unknown block type "${b.type}"`));
  blocks.filter(b => b.type === 'table' && b.rows.some(r => r.length !== b.head.length)).forEach(b => fail(`${page.name}: table "${b.head.join(', ')}" has a row with the wrong cell count`));
  if (!page.css) continue;
  const declared = new Set([...page.css.matchAll(/(--[\w-]+)\s*:/g)].map(m => m[1]));
  for (const [, name] of page.css.matchAll(/var\((--[\w-]+)/g)) if (!declared.has(name) && !(name in DS.tokens)) fail(`${page.name}: ${name} is not a token`);
}

console.log(errors ? `${errors} problem(s)` : `OK: ${DS.foundations.length} foundations, ${DS.components.length} components, ${DS.applications.length} applications, ${Object.keys(DS.tokens).length} tokens`);
process.exit(errors ? 1 : 0);

# Codemasters Design System

The shared design system of Codemasters, Sembuh AI and Flipmaster: a static documentation site plus plain-file exports.

## Run the site

No build step. Serve the folder and open it:

```bash
python3 -m http.server 4173
```

## Edit

`data/*.js` is the source of truth (one file per page). After a change:

```bash
node check.mjs   # tokens, ids, tables
node build.mjs   # regenerate dist/
```

Commit `dist/` with the change; CI fails when it is stale.

## Files for tools and skills

`dist/` holds the system as plain files, readable at
`https://raw.githubusercontent.com/ramadharma/codemasters-design-systems/main/dist/<file>`:

- `index.json`: version and every page with its path. Start here.
- `DESIGN.md`: the whole system in one file.
- `foundations/`, `components/`, `applications/`: one Markdown file per page.
- `tokens.css`, `tokens.json`, `slides.tokens.json`.
- `code/`: component CSS and scripts (`button.css`, `slider.js`, ...).

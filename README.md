# Codemasters Design System

The shared design system of Codemasters, Sembuh AI and Flipmaster: a static documentation site plus plain-file exports.

**Live:** https://codemasters-design-systems.pages.dev (Cloudflare Pages, deploys every push to `main`).

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
`https://codemasters-design-systems.pages.dev/dist/<file>`
(or `https://raw.githubusercontent.com/ramadharma/codemasters-design-systems/main/dist/<file>` while the repo is public):

- `index.json`: version and every page with its path. Start here.
- `DESIGN.md`: the whole system in one file.
- `foundations/`, `components/`, `applications/`: one Markdown file per page.
- `tokens.css`, `tokens.json`, `slides.tokens.json`.
- `code/`: component CSS and scripts (`button.css`, `slider.js`, ...).

## Claude skill

The repo is also a Claude Code plugin marketplace. The `codemasters` plugin has one skill, `codemasters-design`: ask for a website, app UI, pitch deck, document or poster for Codemasters, Sembuh AI or Flipmaster, or ask to refine existing work to the system. It reads the live spec from `dist/` every time (offline: `plugin/skills/codemasters-design/snapshot/`, refreshed by `node build.mjs`).

```bash
/plugin marketplace add ramadharma/codemasters-design-systems
/plugin install codemasters@codemasters-design-systems
```

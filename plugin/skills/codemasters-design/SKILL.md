---
name: codemasters-design
description: Design or refine anything with the Codemasters design system, the shared system of Codemasters, Sembuh AI and Flipmaster. Use it whenever the user asks for a website, landing page, web or app UI, component, pitch deck, slides, presentation, document, poster or social post for one of these brands, or asks to make existing work match "our design system", Codemasters, Sembuh or Flipmaster styling. It reads the latest published spec before doing anything, so colours, type, components and rules always come from the source, never from memory.
---

# Codemasters design system

One system for three companies: **Codemasters** (the parent) and its companies **Sembuh AI** and **Flipmaster**. They share every rule; only the blue scale (`--brand-25` to `--brand-900`) and the logo differ. Company materials carry "Powered by Codemasters" under the company logo.

The spec lives at `https://codemasters-design-systems.pages.dev` and changes over time. This skill holds no copy of the values on purpose. Read them first, every time.

## 1. Load the spec

Fetch exact text. Prefer `curl -s <url>` in a shell. If only a web-fetch tool exists, ask it to return the file verbatim, not a summary: a summary loses the exact values.

1. `https://codemasters-design-systems.pages.dev/dist/index.json`: the version and every page with its path.
2. The pages the task needs (routing below), at `https://codemasters-design-systems.pages.dev/dist/<path>`.
3. For code: `dist/tokens.css` and the component files in `dist/code/` (`button.css`, `input-field.css`, `slider.js`, ...).

If the site cannot be reached, try in order, and say which one you used:

- `https://raw.githubusercontent.com/ramadharma/codemasters-design-systems/main/dist/<path>`
- A local `dist/` folder, when working inside the design-system repo itself.
- `snapshot/` next to this file: the spec at the time the plugin was built. Tell the user the values may be out of date.

Never fill a gap from general knowledge. If a value is not in the spec, say so and ask, or mark it as a proposal.

## 2. Pin the brand

Ask once if the request does not say: Codemasters, Sembuh AI or Flipmaster.

- Read `foundations/logo.md` for the logo files, the "Powered by Codemasters" lockup and the blue scale per brand.
- Logo files are served from the site: `https://codemasters-design-systems.pages.dev/<path>`, with the paths listed in `logo.md` (for example `assets/brand/sembuh-logo.png`). Download them; never recreate them.
- A brand whose blue scale is still "to be confirmed" uses the current `brand` scale. Say so in the result.
- Example content in the spec (claims, FWA, Rupiah) belongs to Sembuh AI. Use the user's own content for other brands.

## 3. Route by task

Always load `principles.md`, `foundations/colors.md`, `foundations/typography.md` and `foundations/grids-spacing.md`. Then add:

| The user wants | Also load | Build |
|---|---|---|
| Website, landing page, web or app UI, a component | `components/<slug>.md` for every component used, `foundations/icons.md`, `foundations/shadows.md`; `tokens.css` and `code/*` | HTML and CSS from the documented markup and classes. In another framework, keep the tokens and the component specs and translate only the syntax |
| Pitch deck, slides, presentation | `applications/slides.md`, `slides.tokens.json`, `foundations/logo.md` | The deck on the 1920 × 1080 canvas, using its grid, anchors, slide types and patterns. Use whatever deck tooling is available (a pptx skill, python-pptx, Google Slides) and apply the spec exactly |
| Document, proposal, letter, report | `foundations/logo.md` | No Documents page exists yet. Use the foundations, say that the document layout is a proposal, and keep it simple |
| Poster, social post, banner | `foundations/logo.md`, `foundations/shadows.md` | No Social page exists yet. Same as documents: foundations only, layout marked as a proposal |
| Refine or review existing work ("make this match our design system") | Everything the work touches, plus `references/review.md` | Audit first, then fix (section 5) |
| Unclear ("something for the launch") | — | Ask which medium and which brand, then route |

`index.json` lists every page with a one-line description. Load any other page whose description fits the task.

## 4. Rules that always hold

- **Tokens only.** Every colour, size, space, radius and shadow is a token from the spec. Never a hex, px value or shadow that is not on a scale. Need something off the system? Point it out as a deviation and let the user decide; never add it silently.
- **Documented components first.** Use the documented component and its states before inventing one. When something has no component yet, build it from the tokens and say it is new.
- **Typeface, scale and weights** come from `typography.md`. Never set a size or line height by hand.
- **Logo files are used as they are.** Never redraw, recolour, stretch or retype a logo. Missing files are placeholders, and you say so.
- **The principles** (`principles.md`, load it every time) apply to everything: data first, one primary action per view, status as a coloured pill, never empty, full Rupiah numbers, Indonesian sentence case for body and Title Case for buttons, tabs and titles.
- **Accessibility notes in the spec are binding.** If the spec flags a contrast failure as an open decision, follow the spec and mention the flag.

## 5. Refine and review mode

1. Inventory what exists: colours, type, spacing, radius, shadows, components, copy.
2. Compare each against the spec with `references/review.md`.
3. Report the findings first (the table in `review.md`), then apply the fixes the user agrees to. When the user asked for the fix outright, apply it and report what changed.

## 6. Finish with

- The design-system version you used (from `index.json`) and where you read it (live site, GitHub, local or snapshot).
- The brand.
- Every deviation from the spec and every proposal the spec does not cover yet.

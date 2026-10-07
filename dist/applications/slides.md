---
name: Slides
slug: slides
category: Applications
status: In progress
version: 0.1.0
updated: 2026-10-07
figma: https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems
requires: tokens.css
---

# Slides

Pitch decks and presentations for Codemasters, Sembuh AI and Flipmaster: a 1920 × 1080 canvas, a 12-column grid, fixed anchors and the same tokens as the web.

- Figma: [Design system file](https://www.figma.com/design/MKPOHzJT5mlZhE7zq43XNG/Sembuh.AI---Design-Systems)

## Overview

This page records the slide system from the Sembuh pitch deck kit. The team builds in **Google Slides**; a deck generated as `.pptx` opens there with every text, shape and table still editable.

- **Flexible content, consistent design.** The author owns topic, story, data and slide count. The system owns type, colour, grid, spacing, components and logo use.
- **Inter** in every deck. It is a Google Font, so Google Slides and Docs can add it from **More fonts** without installing anything. (The kit specifies Google Sans, which Google Slides does not offer.)
- Colours are the web tokens. Each company swaps only its blue scale (see Logo).

## Canvas and grid

| Item | Value |
| --- | --- |
| Canvas | 1920 × 1080 px, 16:9. In Google Slides: custom size 13.333 × 7.5 in, where 1 px = 0.5 pt |
| Margins | 80 on every side. Safe area x 80–1840, y 80–1000 |
| Content width | 1760 |
| Grid | 12 columns of 110, gutter 40 |
| Common spans | 3 col = 380 (4-up), 4 = 560 (3-up), 6 = 860 (2-up), 7 + 5 = 1010 + 710 (feature split), 12 = 1760 |
| Footer zone | y 1000–1080, below the safe area |

| Vertical anchor | y |
| --- | --- |
| Eyebrow, logo | 80 |
| Headline | 124 |
| Content top | 222. Content is top-aligned; leftover space goes to the bottom |
| Support line (optional) | Headline bottom + 16; content then starts at max(222, support bottom + 40) |
| Footer rule | 1000 |

## Typography

Inter, two weights: Regular 400 and Medium 500. Sizes are canvas px; pt is what Google Slides shows on the 13.333 × 7.5 in page.

| Token | px | pt | Line height | Weight | Colour | Use |
| --- | --- | --- | --- | --- | --- | --- |
| `title1` | 96 | 48 | 1.2 | Medium | `gray-900` | Cover title, hero statement |
| `headline1` | 48 | 24 | 1.2 | Medium | `gray-900` (white on section slides) | Slide title, agenda title |
| `headline2` | 36 | 18 | 1.2 | Medium | `gray-900` | Metric values, secondary headlines, agenda rows, back-cover tagline |
| `body_large` | 30 | 15 | 1.4 | Regular | `gray-900` | Card titles, quotes, callouts |
| `body` | 24 | 12 | 1.4 | Regular | `gray-500` | Body copy, card descriptions, support line |
| `note` | 20 | 10 | 1.4 | Regular | `gray-500` | Eyebrow (uppercase), labels, chart labels, attribution |
| `table` | 20 | 10 | 1.4 | Regular (Medium in header and group rows) | `gray-900` | Table cells |
| `footer` | 16 | 8 | 1.4 | Regular | `gray-500` (legal notice ``brand-800``) | Source, legal notice |

## Colour

| Kit name | Token | Use |
| --- | --- | --- |
| `color.primary` | `gray-900` | Primary text, headlines |
| `color.secondary` | `gray-500` | Secondary text, metadata |
| `color.grey` | `gray-300` | Borders, dividers, image placeholder |
| `color.surface` | `gray-100` | Neutral containers |
| `color.white` | `white` | Canvas, table body, text on dark blue |
| `color.blue.dark` | `brand-800` | High-emphasis blue text, legal notice, flow lines |
| `color.blue.main` | `brand-400` | Brand blue: solid fills, table header, section background |
| `color.blue.secondary` | `brand-300` | Inactive agenda rows, secondary bars |
| `color.blue.surface` | `brand-100` | Blue-tinted surfaces, table group rows |

Chart series order: `brand-400`, `brand-300`, `brand-100`, `gray-300`. The only exception is the red "today" line in a Gantt chart.

| Card variant | Fill | Border | Title / body |
| --- | --- | --- | --- |
| standard | `white` | 1 px `gray-300` | `gray-900` / `gray-500` |
| surface | `gray-100` | none | `gray-900` / `gray-500` |
| blue | `brand-100` | none | `brand-800` / `brand-800` |
| blue_main | `brand-400` | none | `white` / `white` |
| blue_dark | `brand-800` | none | `white` / `white` |
| highlight | `white` | 1 px `brand-400` | `gray-900` / `gray-500` |

> **Warning:** White on `brand-400` is 2.63:1: section slide text, table headers, the blue_main card and the section bar. It fails even the 3:1 large-text bar. `brand-800` (8.64:1) passes. Open decision for the design team.

## Spacing, radius and shadow

| Item | Value |
| --- | --- |
| Spacing tokens | 4, 8, 16, 20, 24, 28, 32, 40, 56, 64, 80 |
| Card padding | 40 |
| Radius | Cards 12; badges, bars, placeholders and the client-logo box 8; never above 16 |
| Shadow | None, anywhere |

Stack elements by measured text height plus a spacing token, never by guessed offsets.

## Slide types

| Type | Background | Logo | Contents |
| --- | --- | --- | --- |
| Cover | Light (`bg-content`) | Colour lockup, 300 wide, bottom-right, bottom edge at 1000 | Client-logo box 268 × 100 at (80, 80). Title `title1`, span 7, bottom at 906. Date line `body` at 946. No footer |
| Section | Blue (`bg-divider`) | White logo 220 wide at (1620, 80) | "Table of The Contents" `headline1` white. Agenda rows `headline2`, 70 apart from y 462; current row white with a 10 px white marker, others `brand-300` on a 4 px rail. Legal notice only |
| Content | Light | Colour logo 220 wide at (1620, 80) | Eyebrow `note` uppercase, headline `headline1`, optional support line, body from 222, full footer |
| Back cover | Light | Colour lockup, 384 wide, top-left at (80, 80) | Tagline `headline2` at 200. Contact block from 640. Website URL `body_large`, bottom at 1000 |

> **Note:** "Powered by Codemasters" sits under the logo on the cover and the back cover. Content and section slides keep the logo alone, where the 32 px logo leaves no room for a readable endorsement. Proposal: confirm with the brand owner. The back-cover tagline moves from y 160 to 200 to clear the lockup.

| Footer element | Spec |
| --- | --- |
| Rule | 1 px `gray-300`, x 80, y 1000, 1760 wide. Not on section slides |
| Source | `footer` `gray-500`, left, box at (80, 1027), 860 wide |
| Legal notice | `footer` `brand-800` (white on section slides), right-aligned, box x 1130, 710 wide, y 1017, two lines |

## Components

| Component | Spec |
| --- | --- |
| Card | Six variants (Colour), radius 12, padding 40, height fits the content |
| Metric card | surface. Label `note` uppercase, +16, value `headline2` (`brand-800` when emphasised), +8, support `note` |
| Feature card | standard. Title `body_large`, +16, description `body` |
| Process steps | standard cards on equal tracks, equal heights. Number "01" `note` `brand-400`, title `body_large`, description `body`. Optional 2 px `brand-300` connectors |
| Table | Header and rows 72 high, cell padding `16 24`. Header `brand-400` with white Medium text, centred; numbers right-aligned; group rows `brand-100`. Neutral variant: `gray-100` header |
| Bar / column chart | Native shapes, not chart objects. Bars 40 high (columns up to 160 wide), radius 8. Highlight `brand-400`, others `brand-300`. Labels `note` |
| Gantt | Neutral table, label column 200. Bars 40 high, radius 8, in `brand-800` / `brand-400` / `brand-300` |
| Quote | `body_large` `gray-900`, +24, "— attribution" `note` `gray-500` |
| Callout | blue card. Label `note` uppercase `brand-800`, +16, text `body_large` |
| Badge | `brand-100` fill, `note` `brand-800`, padding `8 16`, radius 8 |
| Section bar | 56 high, `brand-400`, radius 8, `body` Medium white, centred |
| Bullets | "—" marker `brand-400`, indent 32, gap 16, `body` `gray-500` |
| Image placeholder | `gray-300` fill, radius 8, "Place an image here". Real images fit inside the box, never stretched |
| Legend | 24 × 24 swatch, 16 to the label (`body` `gray-500`), 40 between entries |

## Patterns

Pick the pattern from the information, never the other way round: content → one primary message → relationship → structure → pattern → components → tokens.

| Information | Pattern |
| --- | --- |
| One message that needs strong emphasis | Hero message, Central statement, Large number + context |
| A claim backed by evidence | Text + visual, Text + metric, Insight + evidence |
| Several related numbers | Metric group, Headline + chart, Headline + table |
| Equal-weight concepts | Card group, Multi-column information (Highlighted card group when one matters more) |
| Change or contrast | Problem → solution, Before → after, Comparison |
| How something works | Process, Product workflow (input → AI → analysis → output), Layered architecture |
| Structure of ideas | Framework, Nested hierarchy, Hub and spoke, 2 × 2 matrix, Funnel |
| Time | Roadmap |
| Proof from outside | Quote + context, Image + caption, Screenshot + explanation, Full-bleed visual |
| Ending | Closing insight, CTA |

## Composition rules

- Every content slide uses the same anchors: eyebrow 80, headline 124, body 222, rule 1000.
- Top-align content at 222; never vertically centre a card row to fill the slide.
- Every content slide carries the footer. Section transitions repeat the agenda with the current item highlighted.
- Every x comes from the grid. Cards in a group share top edges, padding and treatment, and are never taller than their content.
- One focal point per slide; supporting content is visibly subordinate. Highlight one data point per chart.
- Headlines state the takeaway, not the topic ("Waktu analisis turun 60%", not "Hasil").
- Left-align by default; never centre dense text. Put text straight on the background instead of carding everything.
- Text too long? Simplify, remove, reorganise, change the pattern, split the slide, and only then adjust the type size.

## Do and don't

| Do | Don't |
| --- | --- |
| Only token colours, type sizes, spacing values and radii | Shadows, gradients or decorative shapes |
| Colour logo on light slides, white logo on blue or photos | Stretch, crop, rotate or recolour a logo |
| Light background for content, blue only for section slides | The section background behind ordinary content |
| Charts as native shapes in the brand blues | Embedded chart objects, which bring their own colours |
| Images at their own proportions | Radius above 16, pill shapes, heavy borders around everything |
| Varied layouts when the information differs | Crowded slides, tiny text in tables and charts |

## Google Slides

- Page setup: **File → Page setup → Custom, 13.333 × 7.5 in**, so the px values above map to pt by halving them.
- Font: Inter, added once via **Font → More fonts** (Regular and Medium). It renders the same on every machine.
- Keep everything editable: text, shapes, lines and tables stay native; never flatten a slide to an image.
- Draw charts as shapes (or paste them as shapes). Turn off autofit; set text box insets to 0 so text sits on the anchors.
- No animations or effects.

> **Note:** A shared Google Slides template (master layouts for the four slide types per company) is the next step. Until it exists, start from a deck generated with the pitch deck kit.

## Decisions and open points

| Topic | Kit says | This system |
| --- | --- | --- |
| Font | Google Sans | Inter (decided 7 Oct 2026, after trying Instrument Sans and Albert Sans) |
| Grid | Prose 124 / 24; code 110 / 40 | 110 / 40, which reproduces every card width in the reference deck |
| Card padding | Docstring 32; constant 40 | 40 |
| Headline y | 124 and 128 in different places | 124 |
| Table header | Prose: neutral fill; code: `brand-400` + white | `brand-400` + white, neutral as a variant (contrast open, see Colour) |
| `brand-400` on white | Step numbers, bullet markers | 2.63:1: fine for the marker shape, too light for the "01" text. Open |
| Endorsement | — | Cover and back cover only. Proposal |

## Slide tokens

`slides.tokens.json`

```json
{
  "canvas": {
    "width": 1920,
    "height": 1080,
    "margin": 80,
    "unit": "px; 1 px = 0.5 pt on a 13.333 × 7.5 in page"
  },
  "grid": {
    "columns": 12,
    "column": 110,
    "gutter": 40,
    "contentWidth": 1760
  },
  "anchors": {
    "eyebrow": 80,
    "logo": 80,
    "headline": 124,
    "content": 222,
    "footerRule": 1000,
    "legalText": 1017,
    "sourceText": 1027
  },
  "font": "Inter",
  "type": {
    "title1": {
      "size": 96,
      "lineHeight": 1.2,
      "weight": 500
    },
    "headline1": {
      "size": 48,
      "lineHeight": 1.2,
      "weight": 500
    },
    "headline2": {
      "size": 36,
      "lineHeight": 1.2,
      "weight": 500
    },
    "body_large": {
      "size": 30,
      "lineHeight": 1.4,
      "weight": 400
    },
    "body": {
      "size": 24,
      "lineHeight": 1.4,
      "weight": 400
    },
    "note": {
      "size": 20,
      "lineHeight": 1.4,
      "weight": 400
    },
    "table": {
      "size": 20,
      "lineHeight": 1.4,
      "weight": 400
    },
    "footer": {
      "size": 16,
      "lineHeight": 1.4,
      "weight": 400
    }
  },
  "colour": {
    "primary": "var(--gray-900)",
    "secondary": "var(--gray-500)",
    "grey": "var(--gray-300)",
    "surface": "var(--gray-100)",
    "white": "var(--white)",
    "blue.dark": "var(--brand-800)",
    "blue.main": "var(--brand-400)",
    "blue.secondary": "var(--brand-300)",
    "blue.surface": "var(--brand-100)"
  },
  "spacing": [
    4,
    8,
    16,
    20,
    24,
    28,
    32,
    40,
    56,
    64,
    80
  ],
  "radius": {
    "card": 12,
    "small": 8,
    "max": 16
  },
  "shadow": "none",
  "logo": {
    "ratio": 6.84,
    "cover": {
      "x": 1540,
      "width": 300
    },
    "content": {
      "x": 1620,
      "y": 80,
      "width": 220
    },
    "backCover": {
      "x": 80,
      "y": 80,
      "width": 384
    }
  }
}
```

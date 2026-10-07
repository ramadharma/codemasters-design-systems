# Review checklist

Compare existing work against the loaded spec, one area at a time. Take every expected value from the spec pages, never from this file: it lists what to check, not the values.

| Area | Check against | Typical findings |
|---|---|---|
| Colour | `colors.md` scales and usage tables | A hex not on any scale; a gray used for two jobs; text in steps 25–400 on white; status colours that do not match the status-pill table |
| Typography | `typography.md` scale, weights, rules | Font family other than the spec's; a size or line height off the scale; display styles used for body text; missing tabular numbers on amounts and tables |
| Spacing and layout | `grids-spacing.md` | Values off the spacing set (14, 18, 22, ...); content off the column grid; inconsistent gaps between equal elements |
| Radius | `grids-spacing.md` radius table | Radii that are not tokens; checkboxes or small parts on the large radius; icon buttons not matching the icon-button rule |
| Elevation | `shadows.md` | Custom or coloured shadows; a shadow on cards (cards use a border); a layer with a smaller shadow than the one below it |
| Components | `components/<slug>.md` | A hand-built control where a component exists; wrong size or hierarchy; missing states (hover, focus, disabled); focus ring not the spec's |
| Icons | `icons.md` | Mixed icon sets, filled icons, sizes off the four steps, icons not using the text colour |
| Logo and brand | `logo.md` | Stretched or recoloured logo; missing "Powered by Codemasters" on company materials; wrong logo variant for the background |
| Slides (decks only) | `slides.md`, `slides.tokens.json` | Elements off the 12-column grid or the anchors; centred card rows; missing footer; charts embedded instead of drawn; type sizes off the slide scale |
| Copy | `principles.md` | Abbreviated Rupiah; wrong case on buttons and titles; empty cells or fields |
| Accessibility | Each page's Accessibility section | Contrast below the spec's ratios; icon-only buttons without a label; colour as the only signal |

## Report format

One row per root cause, most severe first:

| Severity | Where | Now | Should be (spec) | Spec page |
|---|---|---|---|---|

- **High:** breaks the brand or accessibility (wrong colours or logo, unreadable contrast, missing labels).
- **Medium:** off the system (values off a scale, wrong component, wrong state).
- **Low:** polish (spacing inconsistencies, copy case).

Close with the number of findings per severity, the design-system version you compared against, and what you could not check.

---
name: Chart
slug: chart
category: Components
status: Ready
version: 1.0.0
updated: 2026-10-08
requires: tokens.css
---

# Chart

Bar, line, stacked bar and donut charts in plain SVG: a validated series order, thin marks, legend, tooltip and a table view. For one number, use the Card metric instead.

## Usage

Pick the form from what the reader must do, before any colour. Sometimes the answer is not a chart.

| The reader must… | Use | Not |
| --- | --- | --- |
| See one current number | Card metric (value + change) | A one-bar chart |
| Compare amounts across a few categories or months | Bar | A donut |
| Follow a trend over time | Line (area for a single series) | Bars for 12+ points |
| See the parts of one whole | Stacked bar; donut only for ≤ 6 clearly different parts | A donut for close values |
| Read exact values across many categories | A table, or a table under the chart | More colours |

- A chart sits in a Card, usually Framed: title and tools on the shell, chart on the sheet.
- Date range and filters sit in one row above all the charts they scope, never inside a chart card.
- One y-axis per chart. Two measures with different units are two charts.

## Anatomy

| # | Part | Spec |
| --- | --- | --- |
| 1 | Legend | Above the plot, left. Always for 2+ series, none for one (the card title names it). Key 12 px, radius 4, or a 16 × 2 line for line charts (dashed for rejected); label Text sm / Medium `gray-700`. |
| 2 | Y-axis ticks | Text xs `gray-500`, tabular, right-aligned 8 left of the plot. Four or five clean steps from 0. Ticks may abbreviate (`1,2 M`); everything else uses full numbers. |
| 3 | Gridline | 1 px solid `--chart-grid` (`gray-100`). Never dashed. |
| 4 | Bar | ≤ 24 thick, 4 px rounded at the data end, square on the baseline. Touching bars sit 2 px apart. |
| 5 | Baseline | 1 px solid `--chart-axis` (`gray-300`) at 0. |
| 6 | X-axis labels | Text xs `gray-500`, centred under each band. The container includes this band, so the card never scrolls. |

## Series colours

Six series colours in a fixed order. The order and steps were checked with a colour-blind simulation (protanopia and deuteranopia): the worst neighbouring pair is ΔE 10.9 (target 8) and 19.4 for normal vision (floor 15). The 300 step of the same family marks rejected or secondary values.

- Assign in order, never skip, never cycle. A seventh series folds into "Lainnya" (`--chart-other`) or the chart splits into small charts.
- Colour follows the entity, not its rank: Sembuh AI is always `--chart-1`, also when a filter hides other series.
- `--chart-1` is the company's `brand-500`, so each company's charts take its own blue.
- Approved is solid; rejected is the 300 step in bars and a dashed line (`6 4`) in line charts.
- Status colours (success, warning, error) mean good or bad only. They never stand in as series colours.
- Text never takes a series colour. Labels, values and legends stay `gray-500` to `gray-900`; the coloured key beside them carries the identity.
- `--chart-2` and `--chart-3` are just above 3:1 on white; `--chart-other` is below it. That is why every chart has a legend and a table view.

## Types

### Bar

Grouped columns per period. The whole band is the hover target: it fills `gray-100` behind its bars, the hovered group stays and the others step back to 25 %.

```html
<figure class="sb-chart">
<ul class="sb-legend">
  <li><span class="sb-legend-key" style="--key: var(--chart-1)"></span>Sembuh AI</li>
  <li><span class="sb-legend-key" style="--key: var(--chart-2)"></span>TPA</li>
</ul>
<svg class="sb-chart-plot" viewBox="0 0 560 240" role="img" aria-label="Klaim disetujui per bulan, Sembuh AI dan TPA">
  <line class="sb-chart-base" x1="40" x2="552" y1="212" y2="212"/>
  <text x="32" y="216" text-anchor="end">0</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="161" y2="161"/>
  <text x="32" y="165" text-anchor="end">50</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="110" y2="110"/>
  <text x="32" y="114" text-anchor="end">100</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="59" y2="59"/>
  <text x="32" y="63" text-anchor="end">150</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="8" y2="8"/>
  <text x="32" y="12" text-anchor="end">200</text>
  <rect class="sb-chart-hit" data-band data-i="0" x="40" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jan: Sembuh AI 120, TPA 98" data-tip="{&quot;t&quot;:&quot;Jan&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;120&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;98&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="0" d="M57.66666666666666,212V93.60000000000001Q57.66666666666666,89.60000000000001 61.66666666666666,89.60000000000001H77.66666666666666Q81.66666666666666,89.60000000000001 81.66666666666666,93.60000000000001V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <path class="sb-chart-mark" data-i="0" d="M83.66666666666666,212V116.04Q83.66666666666666,112.04 87.66666666666666,112.04H103.66666666666666Q107.66666666666666,112.04 107.66666666666666,116.04V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="1" x="125.33333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Feb: Sembuh AI 135, TPA 102" data-tip="{&quot;t&quot;:&quot;Feb&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;135&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;102&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="1" d="M143,212V78.29999999999998Q143,74.29999999999998 147,74.29999999999998H163Q167,74.29999999999998 167,78.29999999999998V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <path class="sb-chart-mark" data-i="1" d="M169,212V111.96Q169,107.96 173,107.96H189Q193,107.96 193,111.96V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="2" x="210.66666666666666" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mar: Sembuh AI 150, TPA 110" data-tip="{&quot;t&quot;:&quot;Mar&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;150&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;110&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="2" d="M228.33333333333331,212V63Q228.33333333333331,59 232.33333333333331,59H248.33333333333331Q252.33333333333331,59 252.33333333333331,63V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <path class="sb-chart-mark" data-i="2" d="M254.33333333333331,212V103.8Q254.33333333333331,99.8 258.3333333333333,99.8H274.3333333333333Q278.3333333333333,99.8 278.3333333333333,103.8V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="3" x="296" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Apr: Sembuh AI 142, TPA 105" data-tip="{&quot;t&quot;:&quot;Apr&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;142&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;105&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="3" d="M313.6666666666667,212V71.16Q313.6666666666667,67.16 317.6666666666667,67.16H333.6666666666667Q337.6666666666667,67.16 337.6666666666667,71.16V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <path class="sb-chart-mark" data-i="3" d="M339.6666666666667,212V108.89999999999999Q339.6666666666667,104.89999999999999 343.6666666666667,104.89999999999999H359.6666666666667Q363.6666666666667,104.89999999999999 363.6666666666667,108.89999999999999V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="4" x="381.3333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mei: Sembuh AI 168, TPA 118" data-tip="{&quot;t&quot;:&quot;Mei&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;168&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;118&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="4" d="M399,212V44.640000000000015Q399,40.640000000000015 403,40.640000000000015H419Q423,40.640000000000015 423,44.640000000000015V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <path class="sb-chart-mark" data-i="4" d="M425,212V95.64Q425,91.64 429,91.64H445Q449,91.64 449,95.64V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="5" x="466.66666666666663" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jun: Sembuh AI 180, TPA 121" data-tip="{&quot;t&quot;:&quot;Jun&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;180&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;121&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="5" d="M484.3333333333333,212V32.400000000000006Q484.3333333333333,28.400000000000006 488.3333333333333,28.400000000000006H504.3333333333333Q508.3333333333333,28.400000000000006 508.3333333333333,32.400000000000006V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <path class="sb-chart-mark" data-i="5" d="M510.3333333333333,212V92.58Q510.3333333333333,88.58 514.3333333333333,88.58H530.3333333333333Q534.3333333333333,88.58 534.3333333333333,92.58V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <text x="82.66666666666666" y="232" text-anchor="middle">Jan</text>
  <text x="168" y="232" text-anchor="middle">Feb</text>
  <text x="253.33333333333331" y="232" text-anchor="middle">Mar</text>
  <text x="338.6666666666667" y="232" text-anchor="middle">Apr</text>
  <text x="424" y="232" text-anchor="middle">Mei</text>
  <text x="509.3333333333333" y="232" text-anchor="middle">Jun</text>
</svg>
<details class="sb-chart-table">
  <summary>Lihat sebagai tabel</summary>
  <table>
    <thead><tr><th scope="col">Bulan</th><th scope="col">Sembuh AI</th><th scope="col">TPA</th></tr></thead>
    <tbody>
      <tr><th scope="row">Jan</th><td>120</td><td>98</td></tr>
      <tr><th scope="row">Feb</th><td>135</td><td>102</td></tr>
      <tr><th scope="row">Mar</th><td>150</td><td>110</td></tr>
      <tr><th scope="row">Apr</th><td>142</td><td>105</td></tr>
      <tr><th scope="row">Mei</th><td>168</td><td>118</td></tr>
      <tr><th scope="row">Jun</th><td>180</td><td>121</td></tr>
    </tbody>
  </table>
</details>
<div class="sb-chart-tip" role="status" hidden></div>
</figure>
```

### Line

2 px lines, one point per label, centred on it. Hovering anywhere in a band snaps a hairline crosshair to it, shows the dots (8 px with a 2 px white ring) and lists every series in one tooltip. Rejected is dashed.

A single series gets a 10 % area under its line and no legend.

### Stacked bar

Part-to-whole per row, horizontal so long labels fit. Segments sit 2 px apart and only the far end is rounded. The total sits at the end of the row; segment values live in the tooltip and the table.

### Donut

Only for a whole split into at most six clearly different parts. 20 px ring, 2 px gaps, the total in the centre (Text md / Semibold, full Rupiah), values in the legend in full Rupiah.

## Tooltip

- `white`, 1 px `gray-200` border, radius 8, padding `8 12`, `shadow-lg` drawn as a filter. It follows the pointer, 12 right of and below it, gliding to each new position in 200 ms (`translate` transition, so it can be interrupted); it flips at the right and bottom edges and stays inside the chart. On keyboard focus it sits 8 above the focused mark. With reduced motion it jumps instead of gliding.
- Title: the period or category, Text xs / Medium `gray-700`. Rows: a 12 × 2 line key, the value (Text sm / Semibold `gray-900`, tabular), then the series name in `gray-500`. Value first: the reader already knows the series.
- Shows on hover and on keyboard focus alike. It adds detail; it never holds a value that is not also in the table view.
- Fill it with `textContent`: series names are data.

## States

### Empty

Keep the chart's size and show the Card empty state with a dashed frame, so the layout does not jump when data arrives.

### Refreshing

While new data loads, keep the last chart at 50 % opacity (`aria-busy="true"` on the figure). No skeleton, no flash.

## Do and don't

**Do:** One series, one colour. The card title names it, so no legend.

```html
<figure class="sb-chart">
<svg class="sb-chart-plot" viewBox="0 0 560 240" role="img" aria-label="Klaim disetujui per bulan, Sembuh AI">
  <line class="sb-chart-base" x1="40" x2="552" y1="212" y2="212"/>
  <text x="32" y="216" text-anchor="end">0</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="161" y2="161"/>
  <text x="32" y="165" text-anchor="end">50</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="110" y2="110"/>
  <text x="32" y="114" text-anchor="end">100</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="59" y2="59"/>
  <text x="32" y="63" text-anchor="end">150</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="8" y2="8"/>
  <text x="32" y="12" text-anchor="end">200</text>
  <rect class="sb-chart-hit" data-band data-i="0" x="40" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jan: Sembuh AI 120" data-tip="{&quot;t&quot;:&quot;Jan&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;120&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="0" d="M70.66666666666666,212V93.60000000000001Q70.66666666666666,89.60000000000001 74.66666666666666,89.60000000000001H90.66666666666666Q94.66666666666666,89.60000000000001 94.66666666666666,93.60000000000001V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="1" x="125.33333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Feb: Sembuh AI 135" data-tip="{&quot;t&quot;:&quot;Feb&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;135&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="1" d="M156,212V78.29999999999998Q156,74.29999999999998 160,74.29999999999998H176Q180,74.29999999999998 180,78.29999999999998V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="2" x="210.66666666666666" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mar: Sembuh AI 150" data-tip="{&quot;t&quot;:&quot;Mar&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;150&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="2" d="M241.33333333333331,212V63Q241.33333333333331,59 245.33333333333331,59H261.3333333333333Q265.3333333333333,59 265.3333333333333,63V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="3" x="296" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Apr: Sembuh AI 142" data-tip="{&quot;t&quot;:&quot;Apr&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;142&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="3" d="M326.6666666666667,212V71.16Q326.6666666666667,67.16 330.6666666666667,67.16H346.6666666666667Q350.6666666666667,67.16 350.6666666666667,71.16V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="4" x="381.3333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mei: Sembuh AI 168" data-tip="{&quot;t&quot;:&quot;Mei&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;168&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="4" d="M412,212V44.640000000000015Q412,40.640000000000015 416,40.640000000000015H432Q436,40.640000000000015 436,44.640000000000015V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="5" x="466.66666666666663" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jun: Sembuh AI 180" data-tip="{&quot;t&quot;:&quot;Jun&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;180&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="5" d="M497.3333333333333,212V32.400000000000006Q497.3333333333333,28.400000000000006 501.3333333333333,28.400000000000006H517.3333333333333Q521.3333333333333,28.400000000000006 521.3333333333333,32.400000000000006V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <text x="82.66666666666666" y="232" text-anchor="middle">Jan</text>
  <text x="168" y="232" text-anchor="middle">Feb</text>
  <text x="253.33333333333331" y="232" text-anchor="middle">Mar</text>
  <text x="338.6666666666667" y="232" text-anchor="middle">Apr</text>
  <text x="424" y="232" text-anchor="middle">Mei</text>
  <text x="509.3333333333333" y="232" text-anchor="middle">Jun</text>
</svg>
<div class="sb-chart-tip" role="status" hidden></div>
</figure>
```

**Don't:** A different colour per bar. Colour is for identity; the bar length already shows the amount.

```html
<figure class="sb-chart">
<svg class="sb-chart-plot" viewBox="0 0 560 240" role="img" aria-label="Klaim disetujui per bulan, Sembuh AI">
  <line class="sb-chart-base" x1="40" x2="552" y1="212" y2="212"/>
  <text x="32" y="216" text-anchor="end">0</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="161" y2="161"/>
  <text x="32" y="165" text-anchor="end">50</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="110" y2="110"/>
  <text x="32" y="114" text-anchor="end">100</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="59" y2="59"/>
  <text x="32" y="63" text-anchor="end">150</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="8" y2="8"/>
  <text x="32" y="12" text-anchor="end">200</text>
  <rect class="sb-chart-hit" data-band data-i="0" x="40" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jan: Sembuh AI 120" data-tip="{&quot;t&quot;:&quot;Jan&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;120&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="0" d="M70.66666666666666,212V93.60000000000001Q70.66666666666666,89.60000000000001 74.66666666666666,89.60000000000001H90.66666666666666Q94.66666666666666,89.60000000000001 94.66666666666666,93.60000000000001V212Z" fill="var(--chart-1)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="1" x="125.33333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Feb: Sembuh AI 135" data-tip="{&quot;t&quot;:&quot;Feb&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;135&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="1" d="M156,212V78.29999999999998Q156,74.29999999999998 160,74.29999999999998H176Q180,74.29999999999998 180,78.29999999999998V212Z" fill="var(--chart-2)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="2" x="210.66666666666666" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mar: Sembuh AI 150" data-tip="{&quot;t&quot;:&quot;Mar&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;150&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="2" d="M241.33333333333331,212V63Q241.33333333333331,59 245.33333333333331,59H261.3333333333333Q265.3333333333333,59 265.3333333333333,63V212Z" fill="var(--chart-3)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="3" x="296" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Apr: Sembuh AI 142" data-tip="{&quot;t&quot;:&quot;Apr&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;142&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="3" d="M326.6666666666667,212V71.16Q326.6666666666667,67.16 330.6666666666667,67.16H346.6666666666667Q350.6666666666667,67.16 350.6666666666667,71.16V212Z" fill="var(--chart-4)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="4" x="381.3333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mei: Sembuh AI 168" data-tip="{&quot;t&quot;:&quot;Mei&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;168&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="4" d="M412,212V44.640000000000015Q412,40.640000000000015 416,40.640000000000015H432Q436,40.640000000000015 436,44.640000000000015V212Z" fill="var(--chart-5)" pointer-events="none"/>
  <rect class="sb-chart-hit" data-band data-i="5" x="466.66666666666663" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jun: Sembuh AI 180" data-tip="{&quot;t&quot;:&quot;Jun&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;180&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="5" d="M497.3333333333333,212V32.400000000000006Q497.3333333333333,28.400000000000006 501.3333333333333,28.400000000000006H517.3333333333333Q521.3333333333333,28.400000000000006 521.3333333333333,32.400000000000006V212Z" fill="var(--chart-6)" pointer-events="none"/>
  <text x="82.66666666666666" y="232" text-anchor="middle">Jan</text>
  <text x="168" y="232" text-anchor="middle">Feb</text>
  <text x="253.33333333333331" y="232" text-anchor="middle">Mar</text>
  <text x="338.6666666666667" y="232" text-anchor="middle">Apr</text>
  <text x="424" y="232" text-anchor="middle">Mei</text>
  <text x="509.3333333333333" y="232" text-anchor="middle">Jun</text>
</svg>
<div class="sb-chart-tip" role="status" hidden></div>
</figure>
```

**Do:** A legend and a tooltip carry the values.

```html
<figure class="sb-chart">
<ul class="sb-legend">
  <li><span class="sb-legend-key" data-line="solid" style="--key: var(--chart-1)"></span>Sembuh AI</li>
  <li><span class="sb-legend-key" data-line="solid" style="--key: var(--chart-2)"></span>TPA</li>
</ul>
<svg class="sb-chart-plot" viewBox="0 0 560 240" role="img" aria-label="Tren klaim per bulan: Sembuh AI, TPA">
  <line class="sb-chart-base" x1="40" x2="552" y1="212" y2="212"/>
  <text x="32" y="216" text-anchor="end">0</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="161" y2="161"/>
  <text x="32" y="165" text-anchor="end">50</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="110" y2="110"/>
  <text x="32" y="114" text-anchor="end">100</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="59" y2="59"/>
  <text x="32" y="63" text-anchor="end">150</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="8" y2="8"/>
  <text x="32" y="12" text-anchor="end">200</text>
  <line class="sb-chart-cross" x1="40" x2="40" y1="8" y2="212"/>
  <polyline class="sb-chart-line" points="82.66666666666666,89.60000000000001 168,74.29999999999998 253.33333333333331,59 338.6666666666667,67.16 424,40.640000000000015 509.3333333333333,28.400000000000006" stroke="var(--chart-1)"/>
  <polyline class="sb-chart-line" points="82.66666666666666,112.04 168,107.96 253.33333333333331,99.8 338.6666666666667,104.89999999999999 424,91.64 509.3333333333333,88.58" stroke="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="0" cx="82.66666666666666" cy="89.60000000000001" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="0" cx="82.66666666666666" cy="112.04" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="1" cx="168" cy="74.29999999999998" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="1" cx="168" cy="107.96" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="2" cx="253.33333333333331" cy="59" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="2" cx="253.33333333333331" cy="99.8" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="3" cx="338.6666666666667" cy="67.16" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="3" cx="338.6666666666667" cy="104.89999999999999" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="4" cx="424" cy="40.640000000000015" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="4" cx="424" cy="91.64" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="5" cx="509.3333333333333" cy="28.400000000000006" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="5" cx="509.3333333333333" cy="88.58" r="4" fill="var(--chart-2)"/>
  <rect class="sb-chart-hit" data-i="0" data-x="82.66666666666666" x="40" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jan: Sembuh AI 120, TPA 98" data-tip="{&quot;t&quot;:&quot;Jan&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;120&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;98&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="1" data-x="168" x="125.33333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Feb: Sembuh AI 135, TPA 102" data-tip="{&quot;t&quot;:&quot;Feb&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;135&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;102&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="2" data-x="253.33333333333331" x="210.66666666666666" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mar: Sembuh AI 150, TPA 110" data-tip="{&quot;t&quot;:&quot;Mar&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;150&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;110&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="3" data-x="338.6666666666667" x="296" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Apr: Sembuh AI 142, TPA 105" data-tip="{&quot;t&quot;:&quot;Apr&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;142&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;105&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="4" data-x="424" x="381.3333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mei: Sembuh AI 168, TPA 118" data-tip="{&quot;t&quot;:&quot;Mei&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;168&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;118&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="5" data-x="509.3333333333333" x="466.66666666666663" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jun: Sembuh AI 180, TPA 121" data-tip="{&quot;t&quot;:&quot;Jun&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;180&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;121&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <text x="82.66666666666666" y="232" text-anchor="middle">Jan</text>
  <text x="168" y="232" text-anchor="middle">Feb</text>
  <text x="253.33333333333331" y="232" text-anchor="middle">Mar</text>
  <text x="338.6666666666667" y="232" text-anchor="middle">Apr</text>
  <text x="424" y="232" text-anchor="middle">Mei</text>
  <text x="509.3333333333333" y="232" text-anchor="middle">Jun</text>
</svg>

<div class="sb-chart-tip" role="status" hidden></div>
</figure>
```

**Don't:** A number on every point. Nobody reads them; they bury the lines.

```html
<figure class="sb-chart">
<ul class="sb-legend">
  <li><span class="sb-legend-key" data-line="solid" style="--key: var(--chart-1)"></span>Sembuh AI</li>
  <li><span class="sb-legend-key" data-line="solid" style="--key: var(--chart-2)"></span>TPA</li>
</ul>
<svg class="sb-chart-plot" viewBox="0 0 560 240" role="img" aria-label="Tren klaim per bulan: Sembuh AI, TPA">
  <line class="sb-chart-base" x1="40" x2="552" y1="212" y2="212"/>
  <text x="32" y="216" text-anchor="end">0</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="161" y2="161"/>
  <text x="32" y="165" text-anchor="end">50</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="110" y2="110"/>
  <text x="32" y="114" text-anchor="end">100</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="59" y2="59"/>
  <text x="32" y="63" text-anchor="end">150</text>
  <line class="sb-chart-grid" x1="40" x2="552" y1="8" y2="8"/>
  <text x="32" y="12" text-anchor="end">200</text>
  <line class="sb-chart-cross" x1="40" x2="40" y1="8" y2="212"/>
  <polyline class="sb-chart-line" points="82.66666666666666,89.60000000000001 168,74.29999999999998 253.33333333333331,59 338.6666666666667,67.16 424,40.640000000000015 509.3333333333333,28.400000000000006" stroke="var(--chart-1)"/>
  <polyline class="sb-chart-line" points="82.66666666666666,112.04 168,107.96 253.33333333333331,99.8 338.6666666666667,104.89999999999999 424,91.64 509.3333333333333,88.58" stroke="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="0" cx="82.66666666666666" cy="89.60000000000001" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="0" cx="82.66666666666666" cy="112.04" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="1" cx="168" cy="74.29999999999998" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="1" cx="168" cy="107.96" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="2" cx="253.33333333333331" cy="59" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="2" cx="253.33333333333331" cy="99.8" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="3" cx="338.6666666666667" cy="67.16" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="3" cx="338.6666666666667" cy="104.89999999999999" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="4" cx="424" cy="40.640000000000015" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="4" cx="424" cy="91.64" r="4" fill="var(--chart-2)"/>
  <circle class="sb-chart-dot" data-i="5" cx="509.3333333333333" cy="28.400000000000006" r="4" fill="var(--chart-1)"/>
  <circle class="sb-chart-dot" data-i="5" cx="509.3333333333333" cy="88.58" r="4" fill="var(--chart-2)"/>
  <rect class="sb-chart-hit" data-i="0" data-x="82.66666666666666" x="40" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jan: Sembuh AI 120, TPA 98" data-tip="{&quot;t&quot;:&quot;Jan&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;120&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;98&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="1" data-x="168" x="125.33333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Feb: Sembuh AI 135, TPA 102" data-tip="{&quot;t&quot;:&quot;Feb&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;135&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;102&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="2" data-x="253.33333333333331" x="210.66666666666666" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mar: Sembuh AI 150, TPA 110" data-tip="{&quot;t&quot;:&quot;Mar&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;150&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;110&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="3" data-x="338.6666666666667" x="296" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Apr: Sembuh AI 142, TPA 105" data-tip="{&quot;t&quot;:&quot;Apr&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;142&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;105&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="4" data-x="424" x="381.3333333333333" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Mei: Sembuh AI 168, TPA 118" data-tip="{&quot;t&quot;:&quot;Mei&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;168&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;118&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <rect class="sb-chart-hit" data-i="5" data-x="509.3333333333333" x="466.66666666666663" y="8" width="85.33333333333333" height="204" tabindex="0" aria-label="Jun: Sembuh AI 180, TPA 121" data-tip="{&quot;t&quot;:&quot;Jun&quot;,&quot;rows&quot;:[[&quot;Sembuh AI&quot;,&quot;180&quot;,&quot;var(--chart-1)&quot;],[&quot;TPA&quot;,&quot;121&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <text x="82.66666666666666" y="232" text-anchor="middle">Jan</text>
  <text x="168" y="232" text-anchor="middle">Feb</text>
  <text x="253.33333333333331" y="232" text-anchor="middle">Mar</text>
  <text x="338.6666666666667" y="232" text-anchor="middle">Apr</text>
  <text x="424" y="232" text-anchor="middle">Mei</text>
  <text x="509.3333333333333" y="232" text-anchor="middle">Jun</text>
  <text x="82.66666666666666" y="81.60000000000001" text-anchor="middle">120</text>
  <text x="168" y="66.29999999999998" text-anchor="middle">135</text>
  <text x="253.33333333333331" y="51" text-anchor="middle">150</text>
  <text x="338.6666666666667" y="59.16" text-anchor="middle">142</text>
  <text x="424" y="32.640000000000015" text-anchor="middle">168</text>
  <text x="509.3333333333333" y="20.400000000000006" text-anchor="middle">180</text>
  <text x="82.66666666666666" y="104.04" text-anchor="middle">98</text>
  <text x="168" y="99.96" text-anchor="middle">102</text>
  <text x="253.33333333333331" y="91.8" text-anchor="middle">110</text>
  <text x="338.6666666666667" y="96.89999999999999" text-anchor="middle">105</text>
  <text x="424" y="83.64" text-anchor="middle">118</text>
  <text x="509.3333333333333" y="80.58" text-anchor="middle">121</text>
</svg>

<div class="sb-chart-tip" role="status" hidden></div>
</figure>
```

**Do:** Parts of a whole as a stacked bar: lengths compare at a glance.

```html
<figure class="sb-chart">
<ul class="sb-legend">
  <li><span class="sb-legend-key" style="--key: var(--chart-1)"></span>Disetujui</li>
  <li><span class="sb-legend-key" style="--key: var(--chart-2)"></span>Ditolak</li>
  <li><span class="sb-legend-key" style="--key: var(--chart-3)"></span>Diproses</li>
</ul>
<svg class="sb-chart-plot" viewBox="0 0 560 152" role="img" aria-label="Status klaim per jenis layanan">
  <text x="0" y="22">Rawat inap</text>
  <path class="sb-chart-mark" data-i="0-0" d="M96,8H233.75690607734808V28H96Z" fill="var(--chart-1)" tabindex="0" aria-label="Rawat inap, Disetujui: 62" data-tip="{&quot;t&quot;:&quot;Rawat inap&quot;,&quot;rows&quot;:[[&quot;Disetujui&quot;,&quot;62&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="0-1" d="M235.75690607734808,8H265.31491712707185V28H235.75690607734808Z" fill="var(--chart-2)" tabindex="0" aria-label="Rawat inap, Ditolak: 14" data-tip="{&quot;t&quot;:&quot;Rawat inap&quot;,&quot;rows&quot;:[[&quot;Ditolak&quot;,&quot;14&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="0-2" d="M267.31491712707185,8H283.6022099447514Q287.6022099447514,8 287.6022099447514,12V24Q287.6022099447514,28 283.6022099447514,28H267.31491712707185Z" fill="var(--chart-3)" tabindex="0" aria-label="Rawat inap, Diproses: 9" data-tip="{&quot;t&quot;:&quot;Rawat inap&quot;,&quot;rows&quot;:[[&quot;Diproses&quot;,&quot;9&quot;,&quot;var(--chart-3)&quot;]]}"/>
  <text x="295.6022099447514" y="22">85</text>
  <text x="0" y="70">Rawat jalan</text>
  <path class="sb-chart-mark" data-i="1-0" d="M96,56H427.6132596685083V76H96Z" fill="var(--chart-1)" tabindex="0" aria-label="Rawat jalan, Disetujui: 148" data-tip="{&quot;t&quot;:&quot;Rawat jalan&quot;,&quot;rows&quot;:[[&quot;Disetujui&quot;,&quot;148&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="1-1" d="M429.6132596685083,56H474.9502762430939V76H429.6132596685083Z" fill="var(--chart-2)" tabindex="0" aria-label="Rawat jalan, Ditolak: 21" data-tip="{&quot;t&quot;:&quot;Rawat jalan&quot;,&quot;rows&quot;:[[&quot;Ditolak&quot;,&quot;21&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="1-2" d="M476.9502762430939,56H500Q504,56 504,60V72Q504,76 500,76H476.9502762430939Z" fill="var(--chart-3)" tabindex="0" aria-label="Rawat jalan, Diproses: 12" data-tip="{&quot;t&quot;:&quot;Rawat jalan&quot;,&quot;rows&quot;:[[&quot;Diproses&quot;,&quot;12&quot;,&quot;var(--chart-3)&quot;]]}"/>
  <text x="512" y="70">181</text>
  <text x="0" y="118">Gigi</text>
  <path class="sb-chart-mark" data-i="2-0" d="M96,104H170.64088397790056V124H96Z" fill="var(--chart-1)" tabindex="0" aria-label="Gigi, Disetujui: 34" data-tip="{&quot;t&quot;:&quot;Gigi&quot;,&quot;rows&quot;:[[&quot;Disetujui&quot;,&quot;34&quot;,&quot;var(--chart-1)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="2-1" d="M172.64088397790056,104H184.1657458563536V124H172.64088397790056Z" fill="var(--chart-2)" tabindex="0" aria-label="Gigi, Ditolak: 6" data-tip="{&quot;t&quot;:&quot;Gigi&quot;,&quot;rows&quot;:[[&quot;Ditolak&quot;,&quot;6&quot;,&quot;var(--chart-2)&quot;]]}"/>
  <path class="sb-chart-mark" data-i="2-2" d="M186.1657458563536,104H189.54696132596683Q192.9281767955801,104 192.9281767955801,107.38121546961327V120.61878453038673Q192.9281767955801,124 189.54696132596683,124H186.1657458563536Z" fill="var(--chart-3)" tabindex="0" aria-label="Gigi, Diproses: 3" data-tip="{&quot;t&quot;:&quot;Gigi&quot;,&quot;rows&quot;:[[&quot;Diproses&quot;,&quot;3&quot;,&quot;var(--chart-3)&quot;]]}"/>
  <text x="200.9281767955801" y="118">43</text>
</svg>
<div class="sb-chart-tip" role="status" hidden></div>

</figure>
```

**Don't:** Two y-axes. Where the lines cross means nothing; make two charts.

```html
<p class="chart-note">Two y-axes on one chart: claims (0–200) on the left, Rupiah (0–1 M) on the right.</p>
```

## Accessibility

- The chart is a `<figure>`; the SVG has `role="img"` and an `aria-label` that says what it shows.
- Every chart has a table view (`<details>` "Lihat sebagai tabel"): the full data, readable without colour, hover or a mouse.
- Identity never rests on colour alone: a legend for 2+ series, dashed lines for rejected, the table view.
- Hover targets are whole bands or segments, not thin lines. Each is focusable with an `aria-label` holding its values, and focus shows the same tooltip as hover.
- Series colours are 3:1 or more against white except `--chart-other`; text in and around the chart uses text colours (`gray-500` and darker).

## Code

Load `tokens.css`, then `chart.css`, and `chart.js` for the tooltip. Draw the SVG with the specs above; the markup of each mark is in the examples. The examples scale one 560 × 240 drawing; in the app, draw the SVG at its rendered width (measure the card, redraw on resize) so axis text stays 12 px.

`chart.css`

```css
/* Chart, Codemasters Design System
   Needs tokens.css (series colours --chart-1 … --chart-6, --chart-other, --chart-grid, --chart-axis); chart.js for the tooltip.
   Plain SVG, no library. Usually sits in a Card (Framed for dashboards).

   <figure class="sb-chart">
     <ul class="sb-legend">…</ul>
     <svg class="sb-chart-plot" viewBox="0 0 560 240" role="img" aria-label="…">…</svg>
     <div class="sb-chart-tip" role="status" hidden></div>
     <details class="sb-chart-table"><summary>Lihat sebagai tabel</summary><table>…</table></details>
   </figure>

   Marks: bars ≤ 24 thick with a 4 px rounded data end, 2 px gap between touching marks; lines 2 px, rejected dashed 6 4;
   dots 8 with a 2 px white ring, shown on hover. Grid and axes are solid hairlines. Text never takes a series colour. */

.sb-chart { position: relative; display: grid; gap: 16px; margin: 0; min-width: 0; font: 400 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-chart-plot { display: block; width: 100%; height: auto; overflow: visible; }
.sb-chart-plot text { font: 400 12px var(--font); fill: var(--gray-500); font-variant-numeric: tabular-nums; }
.sb-chart-plot .sb-chart-total { font: 600 var(--text-md) var(--font); fill: var(--gray-900); }
.sb-chart[data-layout="donut"] { grid-template-columns: 240px minmax(0, 1fr); align-items: center; gap: 16px 32px; }
.sb-chart[data-layout="donut"] .sb-legend { flex-direction: column; align-items: flex-start; }
.sb-chart[data-layout="donut"] > .sb-chart-table { grid-column: 1 / -1; }
@media (max-width: 560px) { .sb-chart[data-layout="donut"] { grid-template-columns: minmax(0, 1fr); justify-items: center; } }
.sb-chart-grid { stroke: var(--chart-grid); stroke-width: 1; shape-rendering: crispEdges; }
.sb-chart-base { stroke: var(--chart-axis); stroke-width: 1; shape-rendering: crispEdges; }
.sb-chart-line { fill: none; stroke-width: 2; stroke-linejoin: round; stroke-linecap: round; }
.sb-chart-line[data-dashed] { stroke-dasharray: 6 4; }
.sb-chart-area { opacity: .1; }
.sb-chart-dot { stroke: var(--white); stroke-width: 2; opacity: 0; } /* the white ring keeps it legible on the line */
.sb-chart-dot.is-on { opacity: 1; }
.sb-chart-cross { stroke: var(--gray-300); stroke-width: 1; opacity: 0; shape-rendering: crispEdges; }
.sb-chart[data-hover] .sb-chart-cross { opacity: 1; }
.sb-chart-hit { fill: transparent; outline: none; cursor: default; transition: fill 150ms var(--ease); }
.sb-chart-hit[data-band].is-on { fill: var(--gray-100); } /* bar charts: the hovered period's band fills behind its bars */
.sb-chart-mark { transition: opacity 150ms var(--ease); }
.sb-chart[data-hover] .sb-chart-mark:not(.is-on) { opacity: .25; } /* the hovered mark stays, the rest step back */
.sb-chart [data-tip]:focus-visible { stroke: var(--brand-600); stroke-width: 2; }
.sb-chart[aria-busy="true"] .sb-chart-plot { opacity: .5; } /* refetch keeps the last render, faded; no skeleton */

/* Legend: always for 2+ series. Key mirrors the mark: square for bars and segments, line for lines (dashed = rejected). */
.sb-legend { display: flex; flex-wrap: wrap; gap: 8px 16px; margin: 0; padding: 0; list-style: none; }
.sb-legend > li { display: inline-flex; align-items: center; gap: 8px; font: 500 var(--text-sm) var(--font); color: var(--gray-700); }
.sb-legend-key { --key: var(--chart-1); width: 12px; height: 12px; flex: none; border-radius: var(--radius-sm); background: var(--key); }
.sb-legend-key[data-line] { height: 2px; width: 16px; border-radius: 0; }
.sb-legend-key[data-line="dashed"] { background: repeating-linear-gradient(90deg, var(--key) 0 6px, transparent 6px 10px); }
.sb-legend-value { color: var(--gray-900); font-weight: 600; font-variant-numeric: tabular-nums; }

/* Tooltip: white, gray-200 border, radius 8, shadow-lg as a filter. Value first, then the series name. */
.sb-chart-tip {
  position: absolute; z-index: 20; top: 0; left: 0; pointer-events: none;
  transition: translate 200ms var(--ease); /* glides after the pointer, like a spring with no bounce */
  display: grid; gap: 4px; min-width: 140px; padding: 8px 12px;
  background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-md);
  filter: drop-shadow(0 12px 8px rgba(16,24,40,.08)) drop-shadow(0 4px 3px rgba(16,24,40,.03));
  font: 400 var(--text-xs) var(--font); color: var(--gray-500); white-space: nowrap;
}
.sb-chart-tip[hidden] { display: none; }
.sb-chart-tip p { margin: 0; }
.sb-chart-tip-title { font-weight: 500; color: var(--gray-700); }
.sb-chart-tip-row { --key: var(--chart-1); display: flex; align-items: center; gap: 8px; }
.sb-chart-tip-row::before { content: ''; width: 12px; height: 2px; flex: none; background: var(--key); } /* line key, not a box */
.sb-chart-tip-row > strong { font: 600 var(--text-sm) var(--font); color: var(--gray-900); font-variant-numeric: tabular-nums; }

/* Table view: the accessible twin of every chart. */
.sb-chart-table > summary { width: fit-content; font: 500 var(--text-sm) var(--font); color: var(--gray-500); cursor: pointer; }
.sb-chart-table > summary:hover { color: var(--gray-700); }
.sb-chart-table table { width: 100%; margin-top: 12px; border-collapse: collapse; font: 400 var(--text-sm) var(--font); }
.sb-chart-table :is(th, td) { padding: 8px 12px; border-bottom: 1px solid var(--gray-200); text-align: end; font-variant-numeric: tabular-nums; }
.sb-chart-table :is(th, td):first-child { text-align: start; }
.sb-chart-table th { font: 500 var(--text-xs) var(--font); color: var(--gray-500); background: var(--gray-50); }

@media (prefers-reduced-motion: reduce) {
  .sb-chart-mark, .sb-chart-tip, .sb-chart-hit { transition: none; }
}
```

### Tooltip script

`chart.js`

```js
// Chart tooltip: hover or focus any [data-tip] mark. Marks with the same data-i light up; the rest fade.
// The tooltip follows the pointer smoothly; keyboard focus pins it above the mark.
function chartTipPlace(chart, tip, e, hit, instant) {
  const c = chart.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
  let x, y;
  if (e.type.startsWith('pointer')) {
    // 12 right of and below the pointer; flips at the chart's right and bottom edges.
    const px = e.clientX - c.left, py = e.clientY - c.top;
    x = px + 12 + w <= c.width ? px + 12 : px - 12 - w;
    y = py + 12 + h <= c.height ? py + 12 : py - 12 - h;
  } else {
    const r = hit.getBoundingClientRect();
    x = r.left + r.width / 2 - c.left - w / 2;
    y = r.top - c.top - h - 8;
  }
  tip.style.transition = instant ? 'none' : ''; // appear in place, then glide
  tip.style.translate = `${Math.max(0, Math.min(x, c.width - w))}px ${y}px`;
}
function chartTip(e) {
  const chart = e.target.closest?.('.sb-chart');
  if (!chart) return;
  const tip = chart.querySelector('.sb-chart-tip');
  if (e.type === 'pointermove') return tip.hidden || chartTipPlace(chart, tip, e);
  const hit = e.target.closest('.sb-chart [data-tip]');
  const off = e.type === 'pointerout' || e.type === 'focusout';
  // Moving from one mark to the next: keep the tooltip, the next pointerover refills it.
  if (off && e.relatedTarget?.closest?.('.sb-chart [data-tip]') && e.relatedTarget.closest('.sb-chart') === chart) return;
  chart.querySelectorAll('.is-on').forEach(m => m.classList.remove('is-on'));
  if (off || !hit) {
    chart.removeAttribute('data-hover');
    tip.hidden = true;
    return;
  }
  const { t, rows } = JSON.parse(hit.dataset.tip);
  chart.setAttribute('data-hover', '');
  chart.querySelectorAll(`[data-i="${hit.dataset.i}"]`).forEach(m => m.classList.add('is-on'));
  const cross = chart.querySelector('.sb-chart-cross');
  if (cross && hit.dataset.x) cross.setAttribute('x1', hit.dataset.x), cross.setAttribute('x2', hit.dataset.x);
  // Labels are data: textContent only, never innerHTML.
  tip.replaceChildren();
  const head = document.createElement('p');
  head.className = 'sb-chart-tip-title';
  head.textContent = t;
  tip.append(head);
  for (const [label, value, color] of rows) {
    const row = document.createElement('p');
    row.className = 'sb-chart-tip-row';
    row.style.setProperty('--key', color);
    const v = document.createElement('strong');
    v.textContent = value;
    row.append(v, ` ${label}`);
    tip.append(row);
  }
  const fresh = tip.hidden;
  tip.hidden = false;
  chartTipPlace(chart, tip, e, hit, fresh);
}
for (const type of ['pointerover', 'pointerout', 'pointermove', 'focusin', 'focusout']) document.addEventListener(type, chartTip);
```

## Tokens used

```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f2f4f7;
  --gray-200: #eaecf0;
  --gray-300: #d0d5dd;
  --gray-500: #667085;
  --gray-700: #344054;
  --gray-900: #101828;
  --brand-600: #3966e0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --chart-1: var(--brand-500);
  --chart-6: var(--indigo-500);
  --chart-other: var(--gray-400);
  --chart-grid: var(--gray-100);
  --chart-axis: var(--gray-300);
  --ease: cubic-bezier(.22,.61,.36,1);
  --font: 'Inter', sans-serif;
  --text-md: 16px/24px;
  --text-sm: 14px/20px;
  --text-xs: 12px/18px;
}
```

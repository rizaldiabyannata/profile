# Design

World: **warehouse signage & pallet labels**. Every product, service, and case is a shipping label racked in a
warehouse. Source of truth for values: `app/globals.css` `:root`.

## Palette
| Token | Value | Role |
|---|---|---|
| `--floor` / `--floor-2` | #e3e3de / #d6d6d0 | Concrete page ground; alternate section band |
| `--stock` | #ffffff | Label stock (cards, header, inputs) |
| `--ink` / `--ink-2` / `--ink-3` | #131313 / #44443f / #6a6a63 | Text, rules; secondary; tertiary & placeholders |
| `--safety` | #ffd100 | The one committed field: home hero, CTA band, aisle codes, hover fill |
| `--go` | #1d6b34 | "In production" status only |

Yellow is a field or a hover fill, never small text on white. On black (aisle signs, footer) yellow is the heading colour.

## Type
- Display: Barlow Condensed 800, uppercase, line-height 0.95. h1 clamp(2.75rem, 8vw, 6rem).
- Labels/controls: Barlow Condensed 700, uppercase, +0.04–0.08em tracking, tabular numerals.
- Body: Barlow 400, 1.0625rem/1.55, max 68ch.

## Components
- **Label** (`.label`): white stock, 2px black border; rows divided by 2px rules (`.label-head`, `.label-body`).
  Heads carry an ID code (ERP-01, CASE-02) and a status.
- **Unprinted label** (`.ghost`): dashed border, transparent, ink-2 text. Used for anything not finished
  (Ticko, the mobile app). Never show unfinished work as a solid label.
- **Aisle sign** (`AisleSign`): page hero. Black ground, yellow rack code block + yellow h1, hazard-stripe bottom edge.
  Rack letters match the nav (B Services … F About, G Contact).
- **Buttons**: `.btn-ink` (black, yellow text) is the primary action; `.btn-line` secondary. Square corners, 48px min.
- **Chips / shelf**: outlined uppercase tags for modules; `.shelf` is a ruled row of stack names.
- **Hazard stripes**: only on edges of the CTA band, aisle signs, and the footer chip.
- **WhatsApp FAB**: yellow, bordered, fixed bottom-right on every page.

## Motion
Snap, never glide: `steps(2, end)` transitions; hover lifts a label 4px with a soft offset shadow. One authored
moment: the home hero label drops into place in 3 steps. All motion off under `prefers-reduced-motion`.

## Layout
Max width 1200px, 16px gutter (32px ≥720px). Breakpoints 480 / 720 / 900 / 1000. Mobile nav is a native
`<details>`. No rounded corners anywhere.

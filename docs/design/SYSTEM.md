# Trust Ledger design system: shape and depth (U1, U2)

The tokens live in `app/tokens.css` (and `brand/tokens.css`); pages use them only.

## Spacing

| Token | Value |
| --- | --- |
| `--space-1` | 0.5rem |
| `--space-2` | 0.75rem |
| `--space-3` | 1rem |
| `--space-4` | 1.5rem |
| `--space-5` | 2rem |
| `--space-6` | 3rem |
| `--space-7` | 4rem |
| `--space-8` | 6rem |

## Radius

| Token | Value |
| --- | --- |
| `--radius-note` | 3px |
| `--radius-slip` | 4px |
| `--radius-box` | 6px |
| `--radius-ledger` | 8px |

## Elevation

| Token | Offset | Blur | Opacity |
| --- | --- | --- | --- |
| `--shadow-rest` | 0px | 0px | 0 |
| `--shadow-lift` | 2px | 6px | 0.12 |
| `--shadow-box` | 6px | 16px | 0.18 |

## Widths and grid

- Content reaches 1200px (`--content-max`) in a 12-column grid from 960px, 6 columns from 640px and one column on a phone.
- Prose keeps a measure of 64ch (`--measure`).
- Nothing is wider than the viewport: the browser check fails any sideways scroll at 320px.

Type: Fraunces Variable for display, IBM Plex Sans Variable for body and IBM Plex Mono for figures; see brand/BRAND.md.

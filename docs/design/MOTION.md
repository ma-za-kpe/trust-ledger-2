# Trust Ledger motion (U3)

Motion explains change; it never decorates. One orchestrated moment greets the visitor, every other motion answers something they did.

| Token | Duration |
| --- | --- |
| `--motion-tap` | 120ms |
| `--motion-settle` | 240ms |
| `--motion-place` | 360ms |
| `--motion-slip` | 520ms |
| `--motion-load` | 700ms |

| Token | Curve |
| --- | --- |
| `--ease-ink` | cubic-bezier(0.2, 0.7, 0.2, 1) |
| `--ease-note` | cubic-bezier(0.34, 1.56, 0.64, 1) |
| `--ease-quiet` | cubic-bezier(0.4, 0, 0.2, 1) |

## Moments

| Moment | Motion | Duration | Easing |
| --- | --- | --- | --- |
| load | masthead, ledger frame, count control, then first entry or empty state drop in one beat apart | `load` | `ink` |
| count | a note lifts and drops into the cash box with a small settle | `place` | `note` |
| save | the EMMA slip stamps a check and the row settles into the ledger | `slip` | `quiet` |
| change | an edited amount re-inks in place without reflowing the page | `settle` | `ink` |
| empty | the empty ledger state fades in with a quiet underline | `settle` | `quiet` |
| error | the slip shakes once and a danger alert stamps beside it | `tap` | `note` |
| device | a device icon pulses once to confirm the entry is stored on this device | `tap` | `quiet` |

## The load moment

In order, 140ms apart (`--reveal-step`, `components/kit/Reveal.tsx`): masthead → ledger frame → count control → first entry or empty state.

- Reduced motion: Under reduced motion nothing moves and nothing is hidden; every state appears fully formed in place.
- Without JavaScript: Without JavaScript the page shows a visible static ledger notice that the scorer needs the browser to count and store cash on this device.
- Bursts: When many changes arrive at once they are coalesced into a single grouped settle so the ledger never flickers row by row.
- Focus: Focus is always a visible 2px ink-green (#1f6b45) outline offset from the element, on every interactive target.

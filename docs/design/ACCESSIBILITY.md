# Trust Ledger accessibility (U6)

- Targets are at least 44px in both directions (`--target-min`).
- Focus: A 2px focus ring in the focus color #1f6b45, offset 2px, is always visible on every focusable control — Cash Fact Row inputs, the Count Box, the Save to Device Button, and every Ledger List row — and
- Live regions: A single polite live region announces the Trust Score Gauge value, the Save to Device result, and any Error Note, so score, save, and error changes are read without moving focus.
- Every interactive control — Cash Fact Row inputs, the Count Box, the Save to Device Button, and each Ledger List row — is at least 44px in its tap target.
- Focus is always visible: a 2px ring in #1f6b45, offset 2px, on every focusable element, with no focus suppression.
- The Trust Score Gauge, the Save to Device result, and every Error Note are announced through one polite live region; focus is not moved by these updates.
- Under reduced motion, the load stagger, count, save, change, empty, error, and device moments do not move and nothing is hidden; states are conveyed by text and
- The Trader Slip, Count Box, Trust Score Gauge, and Ledger List each carry a text label and a text value, so the score and the count are readable without the ink
- Color is never the only signal: the Status Chip pairs its color with a text state (Ready to count, Counted, Scored, Saved, Not counted, Not saved), and the
- The Offline Banner states plainly that data stays on this device with no account and no cloud, so the on-device guarantee is readable, not implied.
- The Save to Device Button shows a disabled state with a text reason when there is nothing to save, rather than a silent dead control.
- axe (WCAG 2.1 AA) is clean on every page, at phone and desktop widths, in both themes; the frozen browser check enforces it.
- 30 of 46 measured pairs are fit for body text; the rest are listed in brand/BRAND.md with their limits.

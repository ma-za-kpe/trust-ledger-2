# Trust Ledger brand

Theme: **The Cash Ledger**. The physical cash box, the handwritten market ledger, the EMMA slip, and the act of counting notes in a Rwandan market.

Boldness, spent in one place: The interface is a working ledger book. The primary interaction is a tactile 'count' that feels like placing a note in a box. The visual language uses paper textures, ink-like strokes, and the sharp,戳

## Essence (B1)

| Tagline | Promise | Personality |
| --- | --- | --- |
| Count the cash. See the trust. | We turn a trader's daily cash flow into a clear, verifiable record of their ability to repay. | Honest, Tactile, Local, Precise, Quiet |

| It is | It is not |
| --- | --- |
| A tool for analysts to verify cash flow | A bank |
| Offline-first and device-local | A loan product |
| Based on real market evidence | A cloud service |
| A prototype for testing new lending models | A replacement for EMMA |
| Respectful of the trader's time | A judgment on the trader's character |

The decision, with the directions rejected, is in [DECISION.md](DECISION.md).

## Colour (B4)

22 primitives and 11 semantic roles in two themes; use the roles, never a primitive directly.

| Primitive | Value |
| --- | --- |
| `paper` | #f6f1e7 |
| `paper-dark` | #1c1813 |
| `surface` | #fffdf8 |
| `surface-dark` | #262019 |
| `ink` | #241d15 |
| `ink-dark` | #ece2d0 |
| `muted` | #6a5f4e |
| `muted-dark` | #a89a83 |
| `line` | #d8cdb8 |
| `line-dark` | #3b332a |
| `accent` | #1f6b45 |
| `accent-dark` | #57b98a |
| `accent-ink` | #ffffff |
| `accent-ink-dark` | #14201a |
| `focus` | #1f6b45 |
| `focus-dark` | #57b98a |
| `success` | #1f6b45 |
| `success-dark` | #57b98a |
| `warning` | #8a5a12 |
| `warning-dark` | #d6a24a |
| `danger` | #9c2b23 |
| `danger-dark` | #d97a6f |

| Role | Light | Dark |
| --- | --- | --- |
| `--color-ink` | #241d15 | #ece2d0 |
| `--color-paper` | #f6f1e7 | #1c1813 |
| `--color-surface` | #fffdf8 | #262019 |
| `--color-muted` | #6a5f4e | #a89a83 |
| `--color-line` | #d8cdb8 | #3b332a |
| `--color-accent` | #1f6b45 | #57b98a |
| `--color-accentInk` | #ffffff | #14201a |
| `--color-focus` | #1f6b45 | #57b98a |
| `--color-success` | #1f6b45 | #57b98a |
| `--color-warning` | #8a5a12 | #d6a24a |
| `--color-danger` | #9c2b23 | #d97a6f |

Every text role on every surface is measured in `contrast.json` (WCAG 2.x), and the crew repository's tests recompute it. These pairs are not for body text:

| Pair | Contrast | Use |
| --- | --- | --- |
| light: ink on accent | 2.57:1 | never |
| light: muted on accent | 1.03:1 | never |
| light: accentInk on paper | 1.13:1 | never |
| light: accentInk on surface | 1.02:1 | never |
| light: success on accent | 1.00:1 | never |
| light: warning on accent | 1.09:1 | never |
| light: danger on accent | 1.17:1 | never |
| light: focus on accent | 1.00:1 | never |
| dark: ink on accent | 1.88:1 | never |
| dark: muted on accent | 1.14:1 | never |
| dark: accentInk on paper | 1.05:1 | never |
| dark: accentInk on surface | 1.04:1 | never |
| dark: success on accent | 1.00:1 | never |
| dark: warning on accent | 1.05:1 | never |
| dark: danger on accent | 1.25:1 | never |
| dark: focus on accent | 1.00:1 | never |

Statuses never rely on colour alone: each has a word and an icon (docs/design/COMPONENTS.md), and success, warning and danger differ in lightness, so they read in greyscale.

## Type (B5)

| Role | Face | Package | Licence |
| --- | --- | --- | --- |
| display | Fraunces Variable | @fontsource-variable/fraunces | SIL Open Font License 1.1 (OFL-1.1), self-hosted from the pinned @fontsource package |
| body | IBM Plex Sans Variable | @fontsource-variable/ibm-plex-sans | SIL Open Font License 1.1 (OFL-1.1), self-hosted from the pinned @fontsource package |
| mono | IBM Plex Mono | @fontsource/ibm-plex-mono | SIL Open Font License 1.1 (OFL-1.1), self-hosted from the pinned @fontsource package |

| Token | Min | Max |
| --- | --- | --- |
| `--text-xs` | 12px | 12px |
| `--text-sm` | 14px | 14px |
| `--text-base` | 16px | 16px |
| `--text-lg` | 18px | 18px |
| `--text-xl` | 22px | 22px |
| `--text-2xl` | 28px | 28px |
| `--text-3xl` | 36px | 36px |
| `--text-4xl` | 48px | 48px |

- Display (Fraunces) is for page titles and section headings only; keep it at 2xl or larger and never set body copy in it.
- Body (IBM Plex Sans) carries all running text, labels and buttons at base or larger; line length stays under 70 characters.
- Figures, amounts, dates and counts use IBM Plex Mono so numbers align in a column like a cash ledger.
- Weight contrast is the rule: headings at a heavier weight, body at regular; do not use light weights for anything a user must read.
- Accent colour is reserved for the count action and focus; headings and body stay in ink so the one bold move lands.

## Logo (B3)

A square cash box drawn as a thick ink outline: a solid base, two upright side walls, and an open top with a narrow slot cut into the lid. A single accent-green note sits in the slot, its top edge peeking above the lid line. The mark is a 6

The mark sits on a 64-unit grid. Keep clear space of a quarter of its width on every side; never show it under 16px (favicon) or the lockup under 120px wide.

| File | Use |
| --- | --- |
| `logo/mark.svg` | the mark on paper; the favicon |
| `logo/mark-on-dark.svg` | the mark on the ink background |
| `logo/mark-mono.svg` | one colour: stamps, embossing, small sizes |
| `logo/mark-state-success.svg` | the mark in the success state |
| `logo/wordmark.svg` | the name alone |
| `logo/lockup.svg`, `logo/lockup-on-dark.svg` | mark and name together |

Don't:

- Do not add a second colour to the mark; it is ink plus one accent note only.
- Do not round the box corners; the cash box reads as a sharp, stamped rectangle.
- Do not place the mark on a busy or textured background; it needs quiet paper.
- Do not scale the note larger than the slot; the note must look like it is being placed in, not sitting on, the box.
- Do not set the wordmark in the display serif; it is a quiet sans, lowercase, tight.

## Iconography

Outline icons on a 24 grid, 1.5px strokes, square corners, in `icons/ui/`: `ledger`, `count`, `note`, `slip`, `device`, `check`, `alert`, `close`.

## Pattern (B8)

`patterns/ledger-rule.svg` tiles seamlessly. A single horizontal rule on paper, used only as a quiet background for the ledger book surface and empty states. It must never sit behind body text, and it is not used in the dark theme, where the box

## Voice (B6)

1. **Speak in plain, direct language. No jargon.** — Enter the cash received today.
2. **Be specific about what the data means.** — This cash flow suggests a stable business.
3. **Acknowledge the offline nature of the tool.** — Data is saved on this device.
4. **Avoid making promises about loan approval.** — This record helps you understand the trader's cash flow.
5. **Use active voice.** — You have entered the cash.
6. **Be respectful of the trader's dignity.** — The trader's cash flow is a valid form of evidence.

| Use | Avoid |
| --- | --- |
| Cash | Seamless |
| Ledger | Unlock |
| Record | Empower |
| Verify | Next-gen |
| Count | Cutting-edge |
| Device | Game-changer |
| Offline | Elevate |

Banned words: “Seamless”, “Unlock”, “Empower”, “Next-gen”, “Cutting-edge”, “Game-changer”, “Elevate”, “Synergy”, “Supercharge”, “Leverage”, “World-class”, “Effortless”.

Copy for every product state:

| State | Copy |
| --- | --- |
| empty | No cash entries yet. Start by entering the first amount. |
| loading | Counting the cash... |
| error | Could not save the entry. Check your device storage. |
| success | Cash entry saved to the ledger. |
| offline | You are offline. Data is saved on this device. |

## Not this product (D21)

- Stock photos of smiling African entrepreneurs
- Purple-to-blue gradients
- Glassmorphism panels
- Emoji icons in feature cards
- The word 'seamless'
- The word 'unlock'
- The word 'empower'
- The word 'next-gen'
- a centred hero with a purple-to-blue gradient
- three identical feature cards with emoji icons
- Inter or Roboto with no type contrast
- glassmorphism panels on a blurred blob background
- stock 'Get started' and 'Learn more' buttons side by side

Never in copy: “seamless”, “revolutionize”, “revolutionise”, “unlock”, “empower”, “next-gen”, “cutting-edge”, “game-changer”, “game changing”, “elevate”, “synergy”, “supercharge”, “leverage”, “world-class”, “effortless”, “unleash”, “harness the power”, “in today's”, “look no further”, “one-stop”.

# Trust Ledger components (U4, U5)

## Ledger Cover

The opening page of the working ledger book: it names the product, states that data stays on this device, and is the single entry point to the scorer.

Anatomy: Cover title (Fraunces display, ink on paper), Device badge (device icon + 'on this device' word, muted), Open the scorer button (accent, 44px min), Ledger spine (left ink rule with count icon), Paper texture field (paper, one boldness spend).

| State | Treatment |
| --- | --- |
| default | Cover title in ink on paper; device badge in muted; Open button in accent with accentInk label; spine rule in line. |
| hover | Open button darkens one step toward ink; spine rule shifts to accent; no layout shift. |
| focus | Open button shows a 2px focus ring in focus colour at 2px offset; keyboard-reachable first. |
| active | Open button presses in 120ms (tap); cover title nudges 2px toward the spine (settle 240ms). |
| disabled | Open button in line with muted label; device badge reads 'device not ready'; no pointer. |
| loading | Cover title and spine draw in over load 700ms, a beat apart; Open button waits until settled. |
| empty | No ledger yet: spine shows a single empty note slot; device badge reads 'no ledger on this device'. |
| error | If the device store cannot open, an alert icon and danger word replace the device badge; Open button disabled. |
| success | After a ledger is saved, a check icon and success word appear beside the device badge. |
| selected | When the scorer is open, the cover title carries an accent underline to mark the active page. |
| offline | Device badge switches to the device icon in warning with 'offline — data stays here'; all actions remain usable. |

## Trader Slip

The EMMA-style slip where the analyst records one small trader's identity and market, the first facts of the ledger.

Anatomy: Slip header (slip icon + 'Trader' word, ink), Name field (IBM Plex Sans, ink on surface), Market field (IBM Plex Sans, ink on surface), Slip edge (right torn-paper rule in line), Save slip button (accent, 44px min).

| State | Treatment |
| --- | --- |
| default | Surface card on paper; fields in ink with line underlines; slip edge in line; Save in accent. |
| hover | Save button darkens toward ink; field underlines shift to muted. |
| focus | Focused field shows a 2px focus ring in focus colour; Save button focus ring at 2px offset. |
| active | Save button presses in 120ms; slip edge settles 240ms. |
| disabled | Fields in muted with line underlines; Save in line; no pointer. |
| loading | Fields fill with a faint ink shimmer over load 700ms while the device store reads the last slip. |
| empty | Fields show muted placeholders ('name', 'market'); slip edge reads 'no trader yet'. |
| error | Missing name or market: alert icon and danger word under the field; underline in danger. |
| success | Saved slip: check icon and success word in the slip header; fields read-only in ink. |
| selected | The active trader's slip carries an accent left rule and accentInk header chip. |
| offline | Slip header shows the device icon in warning; Save still writes to the device store. |

## Cash Fact Row

One ledger line for a single cash fact (e.g. daily takings, stock on hand), the core input of the scorer.

Anatomy: Fact label (IBM Plex Sans, ink), Amount field (IBM Plex Mono, ink on surface), Unit tag (RWF, muted, mono), Row rule (bottom line in line), Row status dot (success/warning/danger).

| State | Treatment |
| --- | --- |
| default | Label in ink; amount in mono ink; unit tag muted; row rule in line; dot hidden. |
| hover | Row surface lifts to surface; row rule shifts to muted. |
| focus | Amount field shows a 2px focus ring in focus colour; label stays ink. |
| active | On entry, the amount settles 240ms and the row rule draws in (change). |
| disabled | Label and amount in muted; row rule in line; no pointer. |
| loading | Amount shows a faint mono shimmer over load 700ms while the device store hydrates. |
| empty | Amount shows a muted placeholder '0'; dot hidden; row rule in line. |
| error | Non-numeric or negative: alert icon and danger word; amount underline in danger; dot in danger. |
| success | Valid fact: dot in success; amount in ink; row rule in line. |
| selected | The row being edited carries an accent left rule and accent label. |
| offline | Row status dot area shows the device icon in warning; entry still writes to the device. |

## Count Box

The tactile 'count' — the one boldness spend — where the analyst places a note into the cash box to add a cash fact.

Anatomy: Box well (paper inset with ink rule), Note slot (note icon, muted), Count readout (IBM Plex Mono, ink), Place note button (accent, 44px min), Box shadow (soft ink, one place).

| State | Treatment |
| --- | --- |
| default | Box well in paper with an ink rule; note slot muted; readout in mono ink; Place in accent. |
| hover | Place button darkens toward ink; box shadow deepens one step. |
| focus | Place button shows a 2px focus ring in focus colour at 2px offset. |
| active | A note drops into the slot over place 360ms (count moment); readout ticks up in mono. |
| disabled | Box well in line; note slot in muted; Place in line; no pointer. |
| loading | Readout counts up over load 700ms as the device store totals the box. |
| empty | Note slot shows an empty dashed slot (empty moment); readout '0'; box well flat. |
| error | If a note cannot be placed, alert icon and danger word; box rule in danger (error moment). |
| success | After a count, a check icon and success word appear above the readout. |
| selected | The active box carries an accent rule around the well. |
| offline | Box well shows the device icon in warning; counting still writes to the device (device moment). |

## Trust Score Gauge

The read-out of the scorer: a quiet gauge that turns the entered cash facts into a trust score the analyst can read at a glance.

Anatomy: Gauge arc (ink stroke on paper, accent fill), Score number (Fraunces display, ink), Band word (e.g. 'steady', muted), Tick marks (line, mono labels), Gauge caption (IBM Plex Sans, muted).

| State | Treatment |
| --- | --- |
| default | Arc in line with accent fill to the current score; number in ink; band word muted. |
| hover | Tick labels shift to ink; arc fill deepens one step. |
| focus | Gauge is focusable; a 2px focus ring in focus colour wraps the arc. |
| active | On a new count, the arc sweeps to the new score over place 360ms (change). |
| disabled | Arc in line; number in muted; caption 'no facts yet'. |
| loading | Arc fills from zero over load 700ms while the device store computes. |
| empty | Arc empty; number '—'; band word 'no count yet' (empty moment). |
| error | If facts are invalid, alert icon and danger word; arc in danger (error moment). |
| success | A valid score: check icon and success word beside the band word. |
| selected | The gauge for the active trader carries an accent tick at the score. |
| offline | Caption shows the device icon in warning; the score still reads from the device. |

## Save to Device Button

Writes the current ledger to the device store (IndexedDB); the only persistence action, and it must be honest about where data goes.

Anatomy: Button face (accent, accentInk label), Save word (IBM Plex Sans, 'Save to this device'), Device glyph (device icon, accentInk), Press shadow (soft ink).

| State | Treatment |
| --- | --- |
| default | Face in accent; label and glyph in accentInk; press shadow soft. |
| hover | Face darkens toward ink; press shadow deepens. |
| focus | 2px focus ring in focus colour at 2px offset; label stays accentInk. |
| active | Presses in 120ms; on write, a check icon and success word flash (save moment). |
| disabled | Face in line; label in muted; no pointer. |
| loading | Label reads 'saving…' with a faint accentInk shimmer over load 700ms. |
| empty | Disabled with a muted caption 'nothing to save yet'. |
| error | If the store write fails, alert icon and danger word; face in danger (error moment). |
| success | After a write, check icon and success word; face returns to accent. |
| selected | When the ledger is the active one, the button carries an accentInk underline. |
| offline | Device glyph in warning; label reads 'save to this device (offline)'; write still succeeds locally. |

## Ledger List

The list of saved traders on this device, so the analyst can reopen a ledger; it is the offline record, not a cloud sync.

Anatomy: List header (ledger icon + 'Ledgers on this device', ink), Row (name, market, last count, mono date), Row rule (line), Open row button (accent text, 44px min), Empty slot (dashed note slot).

| State | Treatment |
| --- | --- |
| default | Rows in ink on surface; rules in line; Open in accent. |
| hover | Row lifts to surface; rule shifts to muted; Open darkens toward ink. |
| focus | Focused row shows a 2px focus ring in focus colour; Open focus ring at 2px offset. |
| active | Open presses in 120ms; the row settles 240ms. |
| disabled | Rows in muted; rules in line; no pointer. |
| loading | Rows fill in over load 700ms as the device store reads. |
| empty | A single dashed note slot with a muted word 'no ledgers on this device yet' (empty moment). |
| error | If the store cannot be read, alert icon and danger word replace the list (error moment). |
| success | After a save, a check icon and success word appear in the header. |
| selected | The open ledger's row carries an accent left rule and accent name. |
| offline | Header shows the device icon in warning; the list still reads from the device. |

## Status Chip

A small labelled chip that carries one of the product's statuses (word + icon + colour role) beside a fact, slip, or score.

Anatomy: Chip face (surface with line rule), Status icon (from the icon set), Status word (IBM Plex Sans), Colour role edge (accent/success/warning/danger).

| State | Treatment |
| --- | --- |
| default | Face in surface; icon and word in the status colour role; edge in that role. |
| hover | Face lifts to surface; edge deepens one step. |
| focus | 2px focus ring in focus colour at 2px offset when the chip is actionable. |
| active | Presses in 120ms when it toggles a filter. |
| disabled | Face in line; icon and word in muted; no pointer. |
| loading | Word shows a faint shimmer over load 700ms while the status resolves. |
| empty | No status yet: muted word '—' with a hidden icon. |
| error | Alert icon and danger word; edge in danger. |
| success | Check icon and success word; edge in success. |
| selected | The active filter chip carries an accent face with accentInk word. |
| offline | Device icon in warning; word 'offline'; edge in warning. |

## Offline Banner

A quiet band that tells the analyst the product is offline-first and that data stays on this device; it never blocks work.

Anatomy: Banner band (paper with line rule), Device glyph (device icon, warning), Banner word (IBM Plex Sans, 'offline — data stays on this'), Close control (close icon, 44px min).

| State | Treatment |
| --- | --- |
| default | Band in paper; glyph in warning; word in ink; close in muted. |
| hover | Close shifts to ink; band rule deepens one step. |
| focus | Close shows a 2px focus ring in focus colour at 2px offset. |
| active | Close presses in 120ms; the band settles 240ms. |
| disabled | Word in muted; close hidden; band in line. |
| loading | Word shows a faint shimmer over load 700ms while the connection state is checked. |
| empty | No banner shown when online; the slot collapses quietly. |
| error | If the device store is unreachable, alert icon and danger word; band rule in danger. |
| success | When back online, a check icon and success word flash before the band collapses. |
| selected | Not applicable; the banner is not selectable. |
| offline | The banner is visible; glyph in warning; word 'offline — data stays on this device' (device moment). |

## Error Note

A handwritten-style note that states an error in the product's own voice, attached to the field or action that failed.

Anatomy: Note face (surface with ink rule), Alert glyph (alert icon, danger), Error word (IBM Plex Sans, danger), Fix hint (IBM Plex Sans, muted), Dismiss control (close icon, 44px min).

| State | Treatment |
| --- | --- |
| default | Face in surface; glyph and word in danger; hint in muted. |
| hover | Dismiss shifts to ink; face rule deepens one step. |
| focus | Dismiss shows a 2px focus ring in focus colour at 2px offset. |
| active | Dismiss presses in 120ms; the note settles 240ms. |
| disabled | Word in muted; dismiss hidden; face in line. |
| loading | Word shows a faint shimmer over load 700ms while the error is confirmed. |
| empty | No error: the note is not rendered; the slot collapses. |
| error | The note is visible; glyph and word in danger; hint in muted (error moment). |
| success | Once resolved, a check icon and success word flash before the note collapses. |
| selected | Not applicable; the note is not selectable. |
| offline | If the error is a device-store failure, the device glyph in warning replaces the alert glyph. |

## Status

Every status is a word, an icon and a colour, never colour alone.

| Status | Word | Icon | Colour role |
| --- | --- | --- | --- |
| Steady | Steady | `check` | `--color-success` |
| Thin | Thin | `note` | `--color-warning` |
| Unproven | Unproven | `slip` | `--color-muted` |
| At risk | At risk | `alert` | `--color-danger` |
| Offline | Offline | `device` | `--color-warning` |

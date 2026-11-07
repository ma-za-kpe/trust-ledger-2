# Trust Ledger experience

## Information architecture

### `/`

The working scorer: the analyst opens it, enters one small trader's cash facts, counts them into the box, reads the trust score, and saves the slip to this device. Primary task: Score one trader's cash facts and save the slip to this device.

| Section | Purpose | Layout | Components | Moment |
| --- | --- | --- | --- | --- |
| Ledger Cover | Open the ledger book and state the product's honest purpose in one line, so the analyst knows they are in the working scorer, not a brochure. | band | Ledger Cover, Offline Banner | load |
| Trader Slip | The primary task, reachable from the top: the analyst enters one small trader's cash facts on a paper EMMA-style slip. | split | Trader Slip, Cash Fact Row, Status Chip, Error Note | change |
| Count Box | The tactile core: the analyst places each cash fact into the box, one note at a time, and the box fills as the count grows. | grid | Count Box, Status Chip | count |
| Trust Score Gauge | Read the result: the gauge shows the trust score the counted cash facts produce, in the product's quiet, precise voice. | split | Trust Score Gauge, Status Chip | count |
| Save to Device | Commit the slip: the analyst saves the scored trader to this device, with the device banner confirming where the data lives. | band | Save to Device Button, Offline Banner, Status Chip | save |
| Ledger List | History on this device: the slips already saved, each as a ledger row the analyst can reopen. | table | Ledger List, Status Chip | none |
| How the Score Is Counted | Explain, in three steps, how the cash facts become a trust score, so the analyst trusts the number. | steps | Status Chip | none |

### `/ledger`

The full ledger of slips saved on this device, so the analyst can review, compare, and reopen past traders. Primary task: Review and reopen the slips saved on this device.

| Section | Purpose | Layout | Components | Moment |
| --- | --- | --- | --- | --- |
| Ledger Cover | Name the page and confirm the data is on this device. | band | Ledger Cover, Offline Banner | load |
| Ledger List | Every saved slip as a ledger row, with its score and date, ready to reopen. | table | Ledger List, Status Chip | none |
| Empty Ledger | When no slip is saved yet, say so plainly and point back to the scorer. | band | Status Chip, Error Note | empty |

## Flows

- **Score and save one trader's cash facts**: Open the scorer at the top of the home page; the Trader Slip is empty and the Count Box is empty. → Enter the trader's cash facts on the Trader Slip, one Cash Fact Row at a time. → Place each fact into the Count Box; the box fills and the Status Chip updates with each count. → Read the Trust Score Gauge as it settles to the score the counted facts produce. → Press Save to Device; the Offline Banner confirms the slip is stored on this device. → See the new slip appear in the Ledger List.
- **Reopen a saved slip**: Open the Ledger List on the home page or the /ledger page. → Select a ledger row for the trader to reopen. → The Trader Slip and Count Box refill with that trader's saved cash facts. → The Trust Score Gauge settles to the saved score.
- **Recover from a bad entry**: Enter a cash fact that does not hold (for example, a blank or an impossible amount). → An Error Note appears in the product's voice, naming what is wrong. → The Status Chip shows the error state; the Count Box does not advance. → Correct the Cash Fact Row and place it again; the Error Note clears.
- **Confirm the data stays on this device**: Read the Offline Banner in the Ledger Cover and Save to Device bands. → Save a slip and watch the device banner confirm the store location. → Return to the Ledger List to see the slip held on this device, with no account or sync.

## Screen states

| Screen | empty | loading | error | success |
| --- | --- | --- | --- | --- |
| Trader Slip | The slip is blank. A single line reads: 'No trader on this slip yet. Enter the first cash fact to begin the count.' | The slip is being read from this device. A quiet line reads: 'Reading the slip from this device…' while the rows hold their place. | An Error Note sits under the offending row: 'That cash fact does not hold. Check the amount and place it again.' The Status Chip reads 'Not counted.' | Every entered fact is placed. The Status Chip reads 'Ready to count' and the slip is ready for the Count Box. |
| Count Box | The box is open and empty. A line reads: 'The box is empty. Place the first note to start the count.' | A note is being placed. The box shows the note settling into its slot while the count ticks up. | A note will not sit. An Error Note reads: 'That note will not sit in the box. Correct the fact and place it again.' The count does not advance. | The box is filled to the count. The Status Chip reads 'Counted' and the box is ready for the gauge. |
| Trust Score Gauge | The gauge is at rest. A line reads: 'No score yet. Count the cash facts to read the trust score.' | The needle is moving. A line reads: 'Counting the facts into a score…' while the gauge holds its position. | The gauge will not settle. An Error Note reads: 'The count does not hold, so there is no score yet. Fix the count and try again.' | The gauge settles to the score. A line reads: 'Trust score set. The facts count to this number.' The Status Chip reads 'Scored.' |
| Save to Device | There is nothing to save. A line reads: 'Nothing to save yet. Count a trader first.' The Save to Device Button is disabled. | The slip is being written to this device. A line reads: 'Writing the slip to this device…' while the button holds its pressed state. | The write did not land. An Error Note reads: 'The slip did not save to this device. Check the device and try again.' The Status Chip reads 'Not saved.' | The slip is saved. The Offline Banner reads: 'Saved to this device. No account, no cloud — it stays here.' The Status Chip reads 'Saved.' |
| Ledger List | The ledger is empty. A line reads: 'No slips in this ledger yet. Save one from the scorer and it will appear here.' | The ledger is being read from this device. A line reads: 'Opening the ledger from this device…' while the rows hold their place. | The ledger will not open. An Error Note reads: 'The ledger did not open from this device. Check the device and try again.' | The ledger is open. Each saved slip is a row with its trader, score, and date, ready to reopen. |

## Interactions

| Trigger | Response | Duration |
| --- | --- | --- |
| The page opens | The Ledger Cover, then the Trader Slip, then the Count Box, then the Trust Score Gauge arrive in a staggered sequence, a beat apart. | `load` |
| The analyst places a cash fact into the Count Box | The note settles into its slot and the count ticks up; the Status Chip updates. | `place` |
| The analyst edits a Cash Fact Row | The row settles to the new value and the slip's Status Chip updates. | `settle` |
| The analyst presses Save to Device | The button presses, the slip is written to this device, and the Offline Banner confirms the store. | `save` |
| A cash fact does not hold | An Error Note appears in the product's voice and the Status Chip shows the error state; the count does not advance. | `error` |
| The Count Box or Ledger List has nothing to show | The empty state line appears in the product's voice, pointing back to the next step. | `empty` |
| The device store is confirmed or fails | The Offline Banner states where the data lives, or names the device failure in the product's voice. | `device` |
| The analyst taps any control | The control gives a brief pressed response before its main action. | `tap` |

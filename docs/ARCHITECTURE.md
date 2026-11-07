# Trust Ledger: architecture

## Information architecture

| Page | Purpose | Primary task | Features |
| --- | --- | --- | --- |
| `index` Home | Explain what Trust Ledger is, who it is for, the research problem it addresses, and the research status, so a visitor understands the product before using it. | J1 | none |
| `scorer` Score | Let the analyst enter one small trader's cashflow, operating history, repayment record, and trade volume, and receive a 0-100 risk score with an approve/decline/refer recommendation. | J2 | M1 Score one borrower |
| `decisions` Decisions | List all saved decisions so the analyst can reopen any one to see the inputs and score, and so the risk officer can see the weekly batch summary. | J3 | M2 Save and review a decision, M4 Batch summary |
| `compare` Compare | Let the risk officer select two saved decisions and view them side by side with differing fields highlighted, so an inconsistent decline can be spotted and overturned. | J4 | M3 Compare two borrowers |

## Content per page

### Home (`index`)

1. hero: State the product name, one-line value proposition (a defensible risk score for borrowers with no tangible collateral), and the primary call to action to open the scorer.
2. problem: Describe the collateral-based lending problem in Rwanda, attributed to StartupTribunal research, with the three evidence points (E1, E2, E3) and the source caveat that the research was rejected by the StartupTribunal AI Tribunal and published with caveats.
3. feature: Explain the four MVP features (score, save, compare, batch summary) as the team's own concept, not as research claims, so the visitor knows what the product does.
4. caveats: State the non-goals: no live data feed, no server, no loan disbursement, no multi-user sync, and that all data stays on this device.
5. source: Link to the StartupTribunal research page and note the research status (rejected, published with caveats) so the attribution is explicit.

### Score (`scorer`)

1. form: Collect the four input fields: monthly cashflow (RWF), months in operation, on-time repayment rate (0-100%), and monthly trade volume (RWF). Each field is required; the form refuses to submit if any field is empty.
2. results: Display the computed 0-100 risk score, the recommendation band (approve / decline / refer), and a low-confidence flag if fewer than three of the four fields are filled. The analyst must acknowledge the flag before saving.
3. explainer: Show the scoring formula and its weights so the analyst can see exactly how the score was derived, addressing the risk that analysts distrust an arbitrary formula.
4. caveats: Remind the analyst that the score is a concept, not a bank decision, and that the data is stored only on this device.

### Decisions (`decisions`)

1. list: Show all saved decisions as a list, each row displaying the borrower name, date, risk score, and recommendation. Tapping a row opens the detail view.
2. results: When a decision is opened, display the full detail: borrower name, all four input values, the risk score, the recommendation, and the wall-clock time from opening the scorer to saving. This satisfies J3 (reopened decision shows the same numbers without re-entry).
3. chart: Show the weekly batch summary: a count of approve, decline, and refer decisions for the current week, so the risk officer sees the team's pattern at a glance (M4).
4. caveats: Note that decisions are stored locally in IndexedDB and are not synced to any server.

### Compare (`compare`)

1. form: Two selectors to choose which saved decisions to compare. The form requires exactly two distinct decisions to be selected before the comparison is shown.
2. results: Display the two decisions side by side, with each of the four input fields, the risk score, and the recommendation shown for both. Fields where the two decisions differ are highlighted, making it possible to identify an inconsistent decline.
3. explainer: Explain how to read the comparison: if two traders have similar inputs but very different scores or recommendations, the risk officer should review whether the decline was consistent with the team's risk appetite.

## Content model

- **Decision** (indexeddb): id (string, UUID), borrowerName (string), monthlyCashflow (number, RWF), monthsInOperation (number), onTimeRepaymentRate (number, 0-100), monthlyTradeVolume (number, RWF), riskScore (number, 0-100), recommendation (string: 'approve' | 'decline' | 'refer'), lowConfidence (boolean), savedAt (ISO 8601 timestamp), timeToSave (number, seconds). The analyst creates these records on the device; they must survive a reload and be queryable by date for the weekly summary. IndexedDB supports structured queries and is available offline in all modern browsers.

## Decisions

### ADR-1 Store decisions in IndexedDB

- Context: The product must work offline on a single device with no server. Decisions must persist across browser reloads and be queryable by date for the weekly batch summary.
- Decision: Use IndexedDB as the local database for all Decision records.
- Rejected: localStorage: rejected because it has no query capability, a 5 MB limit, and stores only strings, making the weekly summary and side-by-side comparison harder to implement.
- Rejected: A hosted database: rejected because the PRD explicitly states no server, no account, and no live data feed; the product is a single device.
- Consequences: IndexedDB is asynchronous, so all reads and writes must be handled with promises. The browser must be a modern one that supports IndexedDB. Data is tied to the browser profile and device; clearing browser data will lose all decisions.

### ADR-2 Score is a pure function of four inputs

- Context: The PRD requires that two analysts scoring the same entered data get the same score with 0 mismatches. The score must be defensible and auditable.
- Decision: The risk score is computed as a weighted sum of the four input fields (monthly cashflow, months in operation, on-time repayment rate, monthly trade volume), normalised to 0-100. The weights are fixed and displayed to the analyst. No randomness, no external data, no state beyond the inputs.
- Rejected: A machine-learning model: rejected because it would require training data, a server, or a bundled model file, and would be opaque to the analyst.
- Rejected: A rule-based system with if/else thresholds: rejected because it would produce discontinuous scores and be harder to explain to a risk committee.
- Consequences: The score is fully deterministic and reproducible. The analyst can verify the score by re-entering the same inputs. The weights are a team decision and can be adjusted by changing the formula, but the formula must be shown to the team before use.

## Non-functional requirements

- The scorer computes and displays the risk score within 100 ms of the last input field being filled.
- The form refuses to save a decision if any of the four input fields is empty; the saved record is checked for completeness on save.
- The same four input values always produce the same 0-100 risk score, verified by re-entering identical figures.
- A decision saved in the scorer is still listed on the Decisions page after a full browser reload.
- The weekly batch summary shows the count of approve, decline, and refer decisions for the current ISO week, updated within 500 ms of a new decision being saved.
- The product works fully offline: no network request is made after the initial page load, and all data is read from and written to IndexedDB.
- The product is usable on a phone screen without sideways scrolling; all text and interactive elements fit within a 360 px viewport width.
- All interactive elements are reachable by keyboard and have visible focus indicators; form fields have associated labels; the results and comparison views use semantic HTML (tables for side-by-side data) so screen readers can parse them correctly. The product meets WCAG 2.1 AA contrast and target-44

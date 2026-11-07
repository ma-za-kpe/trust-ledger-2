# Plan

## Pages

| Page | Title | Purpose | Facts |
|---|---|---|---|
| `/` | Home | Explain what Trust Ledger is, who it is for, the research problem it addresses, and the research status, so a visitor understands the product before using it. | F1, F2, F3, F4, F5 |

## Tasks

Status as of this commit.

| Issue | Task | Status |
|---|---|---|
| [#2](https://github.com/ma-za-kpe/trust-ledger-2/issues/2) | Design direction: home page and shared style | In progress |

## How the work is planned

Build one feature at a time, in this order, each to its sprint contract: M1 Score one borrower on index; M2 Save and review a decision on index; M3 Compare two borrowers on index; M4 Batch summary on index

## Experience

Home (index): Explain what Trust Ledger is, who it is for, the research problem it addresses, and the research status, so a visitor understands the product before using it.
  1. hero: State the product name, one-line value proposition (a defensible risk score for borrowers with no tangible collateral), and the primary call to action to open the scorer.
  2. problem: Describe the collateral-based lending problem in Rwanda, attributed to StartupTribunal research, with the three evidence points (E1, E2, E3) and the source caveat that the research was rejected by the StartupTribunal AI Tribunal and published with caveats.
  3. feature: Explain the four MVP features (score, save, compare, batch summary) as the team's own concept, not as research claims, so the visitor knows what the product does.
  4. caveats: State the non-goals: no live data feed, no server, no loan disbursement, no multi-user sync, and that all data stays on this device.
  5. source: Link to the StartupTribunal research page and note the research status (rejected, published with caveats) so the attribution is explicit.
Score (scorer): Let the analyst enter one small trader's cashflow, operating history, repayment record, and trade volume, and receive a 0-100 risk score with an approve/decline/refer recommendation.
  1. form: Collect the four input fields: monthly cashflow (RWF), months in operation, on-time repayment rate (0-100%), and monthly trade volume (RWF). Each field is required; the form refuses to submit if any field is empty.
  2. results: Display the computed 0-100 risk score, the recommendation band (approve / decline / refer), and a low-confidence flag if fewer than three of the four fields are filled. The analyst must acknowledge the flag before saving.
  3. explainer: Show the scoring formula and its weights so the analyst can see exactly how the score was derived, addressing the risk that analysts distrust an arbitrary formula.
  4. caveats: Remind the analyst that the score is a concept, not a bank decision, and that the data is stored only on this device.
Decisions (decisions): List all saved decisions so the analyst can reopen any one to see the inputs and score, and so the risk officer can see the weekly batch summary.
  1. list: Show all saved decisions as a list, each row displaying the borrower name, date, risk score, and recommendation. Tapping a row opens the detail view.
  2. results: When a decision is opened, display the full detail: borrower name, all four input values, the risk score, the recommendation, and the wall-clock time from opening the scorer to saving. This satisfies J3 (reopened decision shows the same numbers without re-entry).
  3. chart: Show the weekly batch summary: a count of approve, decline, and refer decisions for the current week, so the risk officer sees the team's pattern at a glance (M4).
  4. caveats: Note that decisions are stored locally in IndexedDB and are not synced to any server.
Compare (compare): Let the risk officer select two saved decisions and view them side by side with differing fields highlighted, so an inconsistent decline can be spotted and overturned.
  1. form: Two selectors to choose which saved decisions to compare. The form requires exactly two distinct decisions to be selected before the comparison is shown.
  2. results: Display the two decisions side by side, with each of the four input fields, the risk score, and the recommendation shown for both. Fields where the two decisions differ are highlighted, making it possible to identify an inconsistent decline.
  3. explainer: Explain how to read the comparison: if two traders have similar inputs but very different scores or recommendations, the risk officer should review whether the decline was consistent with the team's risk appetite.
The design system: docs/design/ and brand/; the tokens: app/tokens.css.

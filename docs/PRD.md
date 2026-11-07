# Trust Ledger: product requirements

A single, defensible risk score for a borrower with no tangible collateral, computed from the alternative data the team already holds, so the decision can be made, saved and audited on one device without a bank, a server or a live data feed.

## Problem and evidence

Rwandan lending is built on tangible collateral, so a small trader with no land or building cannot get a bank loan, and a fintech or microfinance team that wants to serve them has no standard way to judge the risk without that collateral.

- Traditional lending in Rwanda focuses almost entirely on tangible assets like land or buildings, shutting out the majority of citizens and small traders who lack formal collateral. (StartupTribunal, E1)
- This forces creditworthy people into high-interest informal lenders or blocks them from accessing capital needed for business growth, emergencies, or home improvement. (StartupTribunal, E2)
- The launch of EMMA signals that banks themselves acknowledge this broken system. (StartupTribunal, E3)

Who is hurt: Small traders and creditworthy customers in Rwanda who lack formal collateral, and the fintech and microfinance teams that want to lend to them but have no defensible way to score the risk without it.

## Personas and jobs to be done

### P1 Credit analyst at a Rwandan fintech or microfinance team

Reviews small-trader applications for working capital where the applicant has no land or building to pledge.

- Job to be done: When a small trader applies for working capital and has no tangible collateral, I want a defensible risk score built from the cashflow and repayment data I already hold, so I can approve or decline without defaulting on the decision.
- Today's workaround: A spreadsheet of gut-feel notes and phone calls to the trader's neighbours, which is slow, inconsistent and hard to defend to a risk committee.

### P2 Risk officer reviewing a batch of small-trader applications

Reviews the team's week of decisions before they go to the risk committee.

- Job to be done: When the team submits a week of applications, I want each decision to carry the same score built from the same fields, so I can audit why a creditworthy trader was declined and overturn it.
- Today's workaround: Reading each analyst's free-text notes and re-deriving the judgement by hand.

## Alternatives today

- A lender-facing loan application portal that routes trader applications to multiple lenders
- A borrower-facing loan search that matches a trader to available products
- A collateral-free risk score computed from alternative data the team already holds

## Value proposition

A single, defensible risk score for a borrower with no tangible collateral, computed from the alternative data the team already holds, so the decision can be made, saved and audited on one device without a bank, a server or a live data feed.

## Solution options and wedge

- O1: Collateral-free risk score: enter a trader's cashflow, operating history, repayment record and trade volume, get a 0-100 score and an approve/decline/refer recommendation, saved on the device.
- O2: Lender-facing loan application portal: traders submit applications and lenders respond, routing deals between many parties.
- O3: Borrower-facing loan search: a trader searches available loan products and compares terms.

Wedge: O1, Collateral-free risk score: enter a trader's cashflow, operating history, repayment record and trade volume, get a 0-100 score and an approve/decline/refer recommendation, saved on the device. Why: It is one decision the analyst makes every day, it works offline on a single device, and it directly answers the research problem (no tangible collateral, so no loan) without needing a bank, a server or a live data feed. O2 needs many lenders and borrowers online before it is useful and a server to,

## Core feature

M1 Score one borrower, for Credit analyst at a Rwandan fintech or microfinance team: The analyst sees a 0-100 risk score and an approve/decline/refer recommendation for a trader with no tangible collateral, in under two minutes, saved on the device.

- Primary action: The analyst opens the scorer, enters one small trader's cash
- Offline, on the device (indexeddb): true

## MVP scope

- M1 Score one borrower (P1): The analyst sees a 0-100 risk score and an approve/decline/refer recommendation for a trader with no tangible collateral, in under two minutes, saved on the device.
- M2 Save and review a decision (P1): The analyst saves the score with the borrower's name and the inputs, then reopens it later to see exactly which numbers drove the decision.
- M3 Compare two borrowers (P2): The risk officer opens two saved decisions side by side and sees which fields differ, so an inconsistent decline can be spotted and overturned.
- M4 Batch summary (P2): The risk officer sees how many of the saved decisions this week were approve, decline or refer, so the team's pattern is visible at a glance.

## Non-goals

- No live mobile-money or bank data feed - all borrower data is entered by the analyst from their own records
- No server, account or payment - the product is a single device that keeps its data locally
- No loan disbursement or contract - the product produces a score and a recommendation, not a loan
- No multi-user sync - one device, one team's working data

## Success metrics

- Time to a saved score: Under 2 minutes from opening the scorer to a saved decision (measured by The tool records the wall-clock time of each saved decision on the device.)
- Decision defensibility: 100% of saved decisions carry the full input set (cashflow, history, repayments, trade volume) (measured by The scorer refuses to save a decision missing any input; the saved record is checked for completeness.)
- Consistency across reviewers: 2 analysts scoring the same entered data get the same score, with 0 mismatches (measured by The score is a pure function of the inputs; the same inputs always produce the same 0-100 value, verified by re-entering identical figures.)

## Risks

- The scoring formula is arbitrary and analysts distrust it Test: Show the formula and its weights to the team before use; let them adjust weights per field and confirm the score moves in the direction they expect.
- Alternative data is incomplete for some traders, so the score is built on thin inputs Test: The scorer flags a score as 'low confidence' when fewer than three of the four input fields are filled, and the analyst must acknowledge the flag before saving.
- Data loss if the browser storage fails Test: The store handles 'unavailable' and 'quota exceeded' with a visible message and never loses a record silently; verify by filling storage and saving.

## Assumptions

- The analyst already holds the alternative data (cashflow, repayment history, trade volume) in their own records Check: Confirm with the team that these fields exist in their current workflow before the scorer is used in production.
- A 0-100 score with an approve/decline/refer band is a decision format the risk committee will accept Check: Review the band thresholds with the risk officer and adjust the cut-offs to match the team's risk appetite.
- The research claims (E1-E3) accurately describe the lending problem the product addresses Check: The claims are attributed to StartupTribunal and noted as rejected with caveats (F4); the team treats them as the problem statement, not as verified fact.

Research claims are the source's and are attributed; every feature is the team's own concept.

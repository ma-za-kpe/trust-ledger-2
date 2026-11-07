# Trust Ledger: The analyst opens the scorer, enters one small trader's cash (first release)

The approved brief, as its issue states it.

## Product

**A single, defensible risk score for a borrower with no tangible collateral, computed from the alternative data the team already holds, so the decision can be made, saved and audited on one device without a bank, a server or a live data feed.**

- For P1 Credit analyst at a Rwandan fintech or microfinance team: When a small trader applies for working capital and has no tangible collateral, I want a defensible risk score built from the cashflow and repayment data I already hold, so I can approve or decline without defaulting on the decision.
- For P2 Risk officer reviewing a batch of small-trader applications: When the team submits a week of applications, I want each decision to carry the same score built from the same fields, so I can audit why a creditworthy trader was declined and overturn it.
- Wedge: Collateral-free risk score: enter a trader's cashflow, operating history, repayment record and trade volume, get a 0-100 score and an approve/decline/refer recommendation, saved on the device. Why: It is one decision the analyst makes every day, it works offline on a single device, and it directly answers the research problem (no tangible collateral, so no loan) without needing a bank, a server or a live data feed. O2 needs many lenders and borrowers online before it is useful and a server to,
- Core feature: M1 Score one borrower, for Credit analyst at a Rwandan fintech or microfinance team; works offline (indexeddb).
- The full PRD is `docs/PRD.md`.

## User stories

### R1 Score one borrower
- [ ] Entering cashflow 500,000 RWF, operating history 24 months, repayment record 12/12 on-time, and trade volume 200,000 RWF/month produces a 0-100 score and an approve, decline, or refer recommendation within 2 minutes.
- [ ] Re-entering the identical four inputs produces the identical 0-100 score (pure function check).
- [ ] The score and recommendation appear on the device with the network disconnected (offline check).
Covers: M1 Score one borrower (for Credit analyst at a Rwandan fintech or microfinance team)

### R2 Save and review a decision
- [ ] Saving a score with borrower name 'Aline', cashflow 500,000 RWF, operating history 24 months, repayment record 12/12, trade volume 200,000 RWF/month stores the record; reopening it shows the name, all four input values, the 0-100 score, and the recommendation.
- [ ] The saved record is still listed after the browser is closed and reopened with no network (offline persistence check).
- [ ] Attempting to save a decision with one input field left empty is refused; the scorer does not create a record.
Covers: M2 Save and review a decision (for Credit analyst at a Rwandan fintech or microfinance team)

### R3 Compare two borrowers
- [ ] Selecting two saved decisions with different cashflow values (500,000 vs 300,000 RWF) and identical other fields shows the cashflow field as differing with both values listed; the other three fields are not flagged as different.
- [ ] Selecting two saved decisions with identical inputs shows no fields flagged as different.
Covers: M3 Compare two borrowers (for Risk officer reviewing a batch of small-trader applications)

### R4 View the batch summary
- [ ] Saving 3 approve, 2 decline, and 1 refer decisions this week shows the batch summary as 3 approve, 2 decline, 1 refer.
- [ ] A decision saved last week is not counted in the current-week batch summary.
Covers: M4 Batch summary (for Risk officer reviewing a batch of small-trader applications)

## Out of scope

- No live mobile-money or bank data feed - all borrower data is entered by the analyst from their own records
- No server, account or payment - the product is a single device that keeps its data locally
- No loan disbursement or contract - the product produces a score and a recommendation, not a loan
- No multi-user sync - one device, one team's working data

## Journeys

- **J1** (visitor) Understand what Trust Ledger is, who it is for, and the research problem it addresses. Observed: The product name, target audience, research problem, research status, and source link are visible on a phone without sideways scrolling.
- **J2** (visitor) Score a small trader with no tangible collateral and get a defensible recommendation. Observed: The saved decision shows the risk score, recommendation, borrower name, and all inputs, and is still listed after a reload.
- **J3** (visitor) Reopen a saved decision later to see exactly which numbers drove it. Observed: The reopened decision displays the same risk score, recommendation, and input values that were saved, without requiring re-entry.
- **J4** (visitor) Compare two saved borrower decisions side by side to spot inconsistent declines. Observed: The two decisions are shown side by side with differing fields highlighted, making it possible to identify an inconsistent decline.
- **J5** (visitor) See how many saved decisions this week were approve, decline, or refer. Observed: The summary shows the count of each recommendation type for the week's saved decisions.

## Facts the site shows

- `F1`: Status: a working prototype; its features are the team's own concept, and its data stays on this device
- `F2`: Who it is for: Fintech and analytics teams and customers in Rwanda
- `F3`: StartupTribunal research reports: Traditional lending in Rwanda focuses almost entirely on tangible assets like land or buildings, shutting out the majority of citizens and small traders who lack formal collateral. This forces creditworthy people into high-interest informal lenders or blocks them from accessing capital needed for business growth, emergencies, or home improvement. The launch of EMMA signals that banks themselves acknowledge this broken system.
- `F4`: Research status: rejected by the StartupTribunal AI Tribunal, published with caveats.
- `F5`: Research by StartupTribunal: https://startuptribunal.com/catalog/rwandans-without-collateral-denied-bank-loans

## Assumptions

- A public repository and a public site on GitHub Pages; no server or database.
- The frozen tests under `tests/` are the acceptance contract; changing them needs the owner's approval.
- Facts appear exactly as the brief gives them.

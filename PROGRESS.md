# Progress: Trust Ledger

As of this commit. Trusted code writes this file from the job's journal; every role reads it first (`AGENTS.md`, Start here).

0 of 4 features pass.

## Features

| Feature | Title | Page | Status | Passes |
| --- | --- | --- | --- | --- |
| M1 | Score one borrower | `index` | in-progress | no |
| M2 | Save and review a decision | `index` | in-progress | no |
| M3 | Compare two borrowers | `index` | in-progress | no |
| M4 | Batch summary | `index` | in-progress | no |

## Current sprint

Sprint contract: Design direction: home page and shared style

Done means, for each feature:

- [ ] M1 Score one borrower: The analyst sees a 0-100 risk score and an approve/decline/refer recommendation for a trader with no tangible collateral, in under two minutes, saved on the device. (on `index`, working offline)
- [ ] M2 Save and review a decision: The analyst saves the score with the borrower's name and the inputs, then reopens it later to see exactly which numbers drove the decision. (on `index`, working offline)
- [ ] M3 Compare two borrowers: The risk officer opens two saved decisions side by side and sees which fields differ, so an inconsistent decline can be spotted and overturned. (on `index`, working offline)
- [ ] M4 Batch summary: The risk officer sees how many of the saved decisions this week were approve, decline or refer, so the team's pattern is visible at a glance. (on `index`, working offline)

Checked by the implementer, on the exact head:

- `npm run build`
- `python tests/site_view.py && python -m unittest discover -s tests`
- `node tests/browser/qa.mjs`

Judged by the evaluator, on the rendered product: every criterion (design, originality, depth, craft, functionality) scores at least 7 of 10, and so do its 7 hidden rubric categories. Below that the task holds; it never merges.

## Recent commits

- `9caf41921e6e` on `feature/issue-2-home`: docs: product requirements, architecture and design system
- `4329888d0050` on `feature/issue-2-home`: docs: brief, plan, decisions, handoff and run record

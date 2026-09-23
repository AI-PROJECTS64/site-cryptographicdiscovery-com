# CDRI — Cryptographic Discovery Reference Index

English static editorial reference. This branch replaces the acquisition landing page with 12 factual, primary-source records. It is neither a standard nor a framework. No ranking, scoring or product testing is offered.

## Review and release

Work is on `astra/cdri` in `AI-PROJECTS64/site-cryptographicdiscovery-com`. The existing Cloudflare Pages integration creates a branch preview. The owner reviews the preview and PR before any merge; this work does not authorise a merge. No repository settings or workflows are changed.

The two acquisition PDFs, concept note, original logo and og.jpg remain in the repository unchanged. The index does not link to those legacy documents. No redirects to Contact or Editorial policy are added. Reference URLs retain the indexed www host. All CDRI pages share the existing og.jpg image. The publisher identity appears once, on a single line on Contact only.

## Editing

- `data/records.json`: factual source records and per-record last-checked dates.
- `scripts/build.py`: manual, dependency-free Python static generator; includes page text and the editorial disclaimer.
- `assets/style.css` and `assets/index.js`: responsive layout and local filtering. Records are pre-rendered and readable without JavaScript.
- Generated HTML files are committed, so Cloudflare requires no new build command or automation.

After editing records or page text, run locally:

```sh
python3 scripts/build.py
```

Do not execute the generator on a schedule. Do not update `checked` without reviewing that record's sources. Update the visible edition date and revision history when a new review is completed. Regeneration does not automatically change review dates.

## Initial evidence limits

- CISA: title and cover date confirmed in an indexed primary PDF. Direct retrieval returned an access error. The record is explicitly metadata-only.
- IBM Quantum Safe Explorer: bounded claims verified against indexed IBM 2.x documentation; direct retrieval was unavailable.
- CBOMkit, CBOMkit-theia and sonar-cryptography: dated IBM Research descriptions, not a claim about latest software releases. No third-party GitHub repository was accessed.
- All other records were checked against the linked primary publications or publisher documentation. All capability statements are documentary; no listed product was executed or benchmarked.
- `not documented` means the checked source did not establish the field, not that the feature is absent. `not applicable` prevents forcing publications and tools into misleading common categories.

## Manual weekly cycle and cost estimate

Initial planning estimate: 30–45 minutes per week (roughly 2–3 hours in a four-week month), subject to the volume of changes. This is an editorial workload estimate, not a promised turnaround or financial saving.

1. Review the existing primary URLs for changes, supersession and source status.
2. Check disputed or unavailable sources again; retain limitations if still unresolved.
3. Edit affected records and their review dates; add a dated material-change note.
4. Regenerate HTML manually; verify records, filters, sources and narrow-screen layout.
5. Submit a branch PR and Cloudflare preview for owner approval. No automatic merge.

Additional services introduced by this implementation: none. Expected additional cash cost at launch: €0 using the existing subscription and hosting. No API, paid service, analytics, external font, scheduled job or new workflow has been activated. Any later API use requires explicit approval, with the user-specified €10/month ceiling; it is not part of this build. Account-wide remaining subscription/hosting quotas are not exposed here, so they must not be claimed as measured.

## Rights

All rights reserved. Quotation with attribution and a link is welcome. No CC BY 4.0 licence is granted for CDRI. Referenced publications and software retain their respective rights and licences.


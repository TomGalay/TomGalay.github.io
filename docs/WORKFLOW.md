# Development workflow

## Implementation sequence

| Phase | Work | Exit condition |
| --- | --- | --- |
| 1. Documentation | Create brief, design, content, architecture, workflow, release, decisions, agent instructions | Coherent starter documents exist; proposed choices are labeled |
| 2. Source preparation | Obtain selected archive media/facts; inspect the intended replacement repo; scaffold separately | Two real project records; new remote cannot target `.3.0` |
| 3. Foundation | App entry, data, tokens, fonts, semantic navigation | App builds without old blueprint presentation |
| 4. Visual slice | Introduction and two substantial work sections at narrow/wide widths | Layout and mobile/web balance can be assessed in a browser |
| 5. Complete | About, experience, selected credentials, Contact, footer, gallery/disclosure behavior | No visible placeholders; every action works |
| 6. Verify | Build, production preview, keyboard/touch/reduced-motion review, asset loading | Release checks completed with evidence |
| 7. Launch | Authorized commit/push, root Pages deployment, both URLs checked | New site and archive independently available |

Phase 4 is the main visual review point. Use the proposed design defaults to create a concrete version. Revise from feedback and observed problems before expanding the whole page. Do not spend the first milestone polishing a footer or decorative animation.

## Commands

This is a documentation-only project at present. No package manifest or runnable application exists yet.

Scaffolding must provide `npm run dev`, `npm run build`, and `npm run preview`. Use `npm ci` for a verified existing lockfile. Install only when inputs are ready; do not add dependencies merely to validate documents.

## Change loop

Read the relevant documents, make one coherent change batch, run the build once an app exists, inspect affected behavior, and update material decisions. Keep the final design understandable from repository documentation without relying on chat history.

For visual changes, inspect narrow and wide widths. Broaden checks for shared navigation/layout/media changes. No test framework is needed initially; add behavioral tests when meaningful logic or regressions justify them, not to mirror markup.

Use production preview for final checks. Development-server rendering alone does not verify the deployment artifact.

## Browser checks

- Inspect 360px, 768px, and 1440px layouts, plus a 320px overflow check.
- Check name wrapping, project crops, gallery controls, and mobile navigation.
- Tab through skip link, navigation, work links, gallery controls, disclosures, Contact, and footer in a sensible order.
- Inspect focus visibility, selected state, contrast, 200% zoom, and text over media.
- Enable reduced motion and confirm that all content remains visible and interactions work.
- Test touch behavior without hover and confirm no horizontal page overflow.
- Verify selected external links, image loading/dimensions, and console/network errors.
- Record checks actually performed and any limitations; do not claim formal accessibility certification.

## Handoff

Report what changed, build results where applicable, browser checks, and remaining issues. Distinguish planned from implemented behavior and local from deployed work. Include real site/repository links after release. Do not modify the archive to repair or test the replacement.

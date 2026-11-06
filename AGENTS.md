# Agent instructions — New Portfolio

This is Isaiah Thomas Galay’s new portfolio project. It is not the blueprint archive. The intended repository is `TomGalay/TomGalay.github.io`; the archive remains `TomGalay/TomGalay.github.io.3.0`.

## Read first

- `README.md` for scope and current implementation status.
- `docs/DESIGN.md` before visual work.
- `docs/CONTENT.md` before writing public copy or migrating facts.
- `docs/ARCHITECTURE.md` and `docs/WORKFLOW.md` before implementation.
- `docs/RELEASE.md` before repository setup or deployment.

## Requirements

- No eyebrow labels, generic pills, decorative badge clusters, or skill ratings.
- Keep descriptions concise; do not add automatic subtitles below every heading.
- Use actual web and mobile work as the primary visual material.
- Do not invent professional claims, project metrics, technologies, clients, or testimonials.
- All public portfolio content belongs in `src/data.js` once the app exists.
- Prefer the documented stack and existing dependencies. Ask before adding a dependency.
- No code comments unless requested.
- Use semantic anchors/buttons, visible focus, logical reading order, touch-friendly controls, and reduced-motion fallbacks.
- Update documentation when implementation changes a documented decision.

## Verification

This project currently contains documentation only. Do not claim a build or deployment exists.

After scaffolding, `npm run build` must pass after each completed code change batch. Check affected visual behavior at narrow and wide widths. Use the production preview for release verification. No test framework is required initially; add tests for meaningful behavior when justified.

## Repository discipline

- Preserve the `.3.0` archive. Do not modify it as part of this implementation.
- Verify the remote before pushing. This project must never target the `.3.0` remote.
- Do not commit, push, or deploy without authorization for this new project. Earlier archive publishing authorization was specific to that migration.
- Never commit credentials, dependencies, or generated build output.
- Use concise imperative commit messages when a commit is authorized.

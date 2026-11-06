# Repository and release plan

## Current state

The previous portfolio was moved to `TomGalay/TomGalay.github.io.3.0`. Archive changes were committed and pushed as `1575572e`; its versioned site and a project screenshot were verified during that migration.

The React portfolio uses local folder `Portfolio-Next` and public repository `TomGalay/TomGalay.github.io`. GitHub Pages uses the supplied Actions workflow. The owner confirmed the retry of the first deployment worked.

## Repository setup

1. Check whether the intended replacement repository already exists. Reuse it if appropriate; never create duplicates based on stale assumptions.
2. Keep this new project separate from the archive directory and history. Initialize its own repository when ready to scaffold.
3. Verify origin points to `TomGalay/TomGalay.github.io` before the first push. Never push this project to `.3.0`.
4. Obtain selected facts and media from the archive. Do not copy its Git metadata, `node_modules`, `dist`, or blueprint design instructions.
5. Configure the replacement’s base as `/`. Leave the archive’s base as `/TomGalay.github.io.3.0/`.

Renaming the old repository did not automatically create the new one. The replacement repository has since been created independently and serves the root site.

## Deployment

Use GitHub Actions with separate build and deployment jobs. Build checks out source, selects an explicit supported Node version, installs from the lockfile using `npm ci`, runs `npm run build`, and uploads `dist` as a Pages artifact. Deployment publishes that artifact to the `github-pages` environment.

Verify supported action and Node versions during implementation rather than copying old versions blindly. Set Pages source to GitHub Actions. Commit source, configuration, and the lockfile. Keep build output and dependencies out of version control; historically tracked archive output is not a convention to inherit.

Deploy from `main` after authorized pushes, with manual workflow dispatch for recovery and serialized deployment concurrency. Use only the permissions required for checkout and Pages publication. No extra host or custom domain is needed for the first release.

## Launch checks

- Production build succeeds from the committed lockfile.
- Introduction, Work, About, Contact, and footer are complete at narrow and wide widths.
- No placeholder media/links, “soon” controls, or unverified claims remain.
- Title, description, favicon, and any social preview refer to the new portfolio.
- Native anchors and direct root visits work.
- Contact, App Store, WinLi Home, and selected public profile links are verified.
- Scripts, styles, and images resolve from the root build base.
- GitHub Actions reports successful deployment of the intended commit.
- Open `https://tomgalay.github.io/` and inspect the actual published page.
- Independently open `https://tomgalay.github.io/TomGalay.github.io.3.0/` and confirm the archive still works.
- Set the new repository homepage to the root URL; preserve the archive’s versioned homepage URL.

## Recovery

Fix build failures before changing deployment settings. For broken assets, inspect the base and emitted paths first. For a successful workflow with the wrong page, verify the deployed commit and Pages source before rerunning.

For a published regression, normally revert the faulty replacement commit or explicitly redeploy a known-good artifact. Do not force-push or overwrite the archive. Until the first replacement launch, the archive remains the usable published portfolio.

## Local archive checkouts

GitHub Desktop can show two `.3.0` entries because the local folders `Portfolio` and `TomGalay.github.io` both point to `TomGalay/TomGalay.github.io.3.0`. At setup, `Portfolio` was at `9f32b95` and the newer archive checkout at `1575572e`; both had clean working trees. They are two local copies of one remote, not two remote archive repositories. Leave their files intact. The replacement uses `Portfolio-Next` so its identity is clear.

## First implementation handoff

The React app and GitHub Pages workflow are implemented. Local builds pass. The first cloud environment could clone the public root repository but could not authenticate a push. The finished source was recovered into the authenticated Mac checkout for the root-site launch. A separate owner-private review deployment uses `.openai/hosting.json`; its successful publication is not evidence of a GitHub Pages release. The release source belongs in `Portfolio-Next`; authorized pushes use its authenticated GitHub Desktop session. Do not copy `node_modules`, `dist`, or a foreign `.git` directory.

Workflow references checked against the official repositories and docs: [Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [checkout](https://github.com/actions/checkout), and [setup-node](https://github.com/actions/setup-node).

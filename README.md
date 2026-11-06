# Isaiah Galay — New Portfolio

A new portfolio for a web and mobile developer with a creative eye.

**Status:** first complete implementation. React/Vite/Framer Motion, one global stylesheet, self-hosted fonts, and real project screenshots. The blueprint archive remains separate. This source is configured to publish to `https://tomgalay.github.io/` through GitHub Actions. The earlier private review deployment is separate from GitHub Pages.

## Repository identity

| Project | Repository | Website |
| --- | --- | --- |
| Preserved blueprint edition | [TomGalay.github.io.3.0](https://github.com/TomGalay/TomGalay.github.io.3.0) | [Archive](https://tomgalay.github.io/TomGalay.github.io.3.0/) |
| New portfolio | `TomGalay/TomGalay.github.io` | `https://tomgalay.github.io/` |

Renaming the old repository freed the root-site repository name; it did not create a new repository automatically. Before connecting this project, check whether that replacement repository already exists. Never push this project to the `.3.0` remote.

## Brief

Help visitors understand what Isaiah builds, see credible web and mobile work, and contact him directly. Put the work before the résumé. Show creativity through typography, composition, and useful interaction.

Owner requirements:

- No eyebrow labels above headings.
- No generic pills or badge clusters.
- Keep descriptions and subtext short.
- Make both web and mobile development clear.
- Preserve the old portfolio separately.

## Documentation

| Document | Purpose |
| --- | --- |
| [Design](docs/DESIGN.md) | Visual direction, tokens, composition, motion, responsive behavior |
| [Content](docs/CONTENT.md) | Page structure, factual source material, assets, editing rules |
| [Architecture](docs/ARCHITECTURE.md) | Stack, component responsibilities, data contracts, failure behavior |
| [Workflow](docs/WORKFLOW.md) | Implementation phases, review points, verification |
| [Release](docs/RELEASE.md) | New repository setup, Pages deployment, archive preservation, recovery |
| [Decisions](docs/DECISIONS.md) | Requirements, proposed defaults, open items |
| [Agent instructions](AGENTS.md) | Working rules for this new project |

## First release

One responsive page: introduction, two substantial project showcases, compact About/background, and direct Contact links. Start with New Life Sta Rosa and WinLi Home, subject to final content verification and asset migration. Add Mycarehub as featured work when suitable media and contribution wording are ready.

The first implementation milestone is a working desktop and mobile composition of the introduction and both project showcases. Review that composition before expanding the rest of the page.

## Running the project

```bash
npm ci
npm run dev
npm run build
npm run preview
```

All public copy lives in `src/data.js`; styles live in `src/index.css`. The project uses root base `/`. `.github/workflows/deploy.yml` builds on pull requests and deploys pushes to `main` once Pages source is set to GitHub Actions.

See [verification](docs/VERIFICATION.md) for checks and deployment limits.

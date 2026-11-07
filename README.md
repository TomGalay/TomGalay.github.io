# Isaiah Thomas Galay — Portfolio

Personal portfolio showcasing my web and mobile development work, professional experience, and background. Built as a responsive, single-page React application with real project screenshots and direct links to websites and published apps.

[View portfolio](https://tomgalay.github.io/) · [Previous portfolio](https://tomgalay.github.io/TomGalay.github.io.3.0/)

## Featured work

| Project | Showcase |
| --- | --- |
| **Mycarehub** | Public website and iOS/Android worker app, presented in separate screenshot galleries |
| **New Life Sta Rosa** | Church community app for announcements, events, videos, and livestreams |
| **WinLi Home** | Website and visual identity for a structural engineering company |

The site also includes professional experience, grouped skills, education, awards, certifications, contact links, and a résumé available to view or download.

## Features

- Responsive layouts for desktop, tablet, and mobile.
- Expandable screenshot galleries with keyboard navigation and touch swipe support.
- Native section navigation, visible keyboard focus, and reduced-motion fallbacks.
- Self-hosted fonts and WebP project screenshots.
- Static deployment to GitHub Pages, with no backend or database required.

## Tech stack

React 18 · Vite 5 · JavaScript / JSX · CSS · Framer Motion

## Getting started

Use Node.js 24, matching the GitHub Actions workflow, and npm.

```bash
git clone https://github.com/TomGalay/TomGalay.github.io.git
cd TomGalay.github.io
npm ci
npm run dev
```

Open the local URL printed by Vite.

| Command | Purpose |
| --- | --- |
| `npm ci` | Install dependencies from the lockfile |
| `npm run dev` | Start the development server |
| `npm run build` | Generate the production site in `dist/` |
| `npm run preview` | Serve the production build locally |

To check the production version locally:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  components/        Page sections, galleries, and shared UI
  App.jsx            Page composition
  data.js            Portfolio content and asset references
  index.css          Global styles and responsive layouts
  main.jsx           React entry point
public/
  fonts/             Self-hosted fonts and font licenses
  projects/          Project screenshots
  resume/            Downloadable résumé PDF
docs/                Design, content, architecture, and release notes
.github/workflows/    GitHub Pages build and deployment
```

## Updating the portfolio

Edit portfolio copy, project records, experience, and public links in [`src/data.js`](src/data.js). Add screenshots under `public/projects/`, including descriptive alt text and image dimensions in their data records. The résumé is served from `public/resume/Isaiah-Galay-Resume.pdf`.

Components live in `src/components/`; shared styling lives in `src/index.css`. Page metadata is defined in `index.html`.

After code changes, run `npm run build` and check affected behavior at narrow and wide widths using the production preview. See the [development workflow](docs/WORKFLOW.md) for the full review process and [verification notes](docs/VERIFICATION.md) for recorded checks and limitations.

## Deployment

The site is configured for **GitHub Pages** at [tomgalay.github.io](https://tomgalay.github.io/), using Vite's root base path (`/`).

The [deployment workflow](.github/workflows/deploy.yml) builds pull requests targeting `main`. Pushes to `main` build and deploy the site; manual deployment is also available through GitHub Actions. The repository's Pages source must be set to **GitHub Actions**.

This repository is [`TomGalay/TomGalay.github.io`](https://github.com/TomGalay/TomGalay.github.io). The previous portfolio is preserved separately in [`TomGalay/TomGalay.github.io.3.0`](https://github.com/TomGalay/TomGalay.github.io.3.0). See the [release guide](docs/RELEASE.md) for deployment and recovery details.

## Documentation

| Guide | Contents |
| --- | --- |
| [Design](docs/DESIGN.md) | Visual direction, typography, layout, and motion |
| [Content](docs/CONTENT.md) | Content sources, project assets, and factual editing rules |
| [Architecture](docs/ARCHITECTURE.md) | Components, data contracts, and interaction behavior |
| [Workflow](docs/WORKFLOW.md) | Development and browser review process |
| [Release](docs/RELEASE.md) | Repository setup, deployment, and recovery |
| [Verification](docs/VERIFICATION.md) | Completed checks and known verification limits |
| [Decisions](docs/DECISIONS.md) | Project requirements and implementation decisions |

## Contact

[Email](mailto:tomgalay@gmail.com) · [LinkedIn](https://www.linkedin.com/in/isaiah-thomas-galay-376990175/) · [GitHub](https://github.com/TomGalay)

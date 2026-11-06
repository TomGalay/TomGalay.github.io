# Architecture

Status: implemented React/Vite application.

## Baseline

Use a static React application built with Vite, JavaScript/JSX, CSS, and Framer Motion. Start from the previous project’s known dependency set and lockfile where compatible; assess upgrades separately before installing. Do not migrate its presentation components wholesale.

The first release needs no backend, CMS, authentication, database, analytics, contact endpoint, router, or global state library. Content changes happen in Git. One page with native hash links serves the planned experience.

## Intended files

```text
index.html
package.json
package-lock.json
vite.config.js
AGENTS.md
.github/workflows/deploy.yml
docs/
public/
  favicon.svg
  projects/
src/
  main.jsx
  App.jsx
  data.js
  index.css
  components/
    Navigation.jsx
    Hero.jsx
    Work.jsx
    ProjectGallery.jsx
    Elements.jsx
    About.jsx
    Contact.jsx
    Footer.jsx
```

App composes the page. Work orders projects. ProjectShowcase, defined within Work.jsx, renders one semantic article. ProjectGallery owns only its selected image index. Native `details`/`summary` provides optional project/experience detail. Use inline galleries initially rather than a modal viewer.

Keep one global stylesheet initially, ordered as tokens, base, layout, component classes, responsive rules, reduced-motion fallbacks. Clearly name component classes; avoid global selectors that accidentally change unrelated sections. Extract modules only when a maintenance issue justifies it.

## Data contract

| Export | Information |
| --- | --- |
| `PROFILE` | Display name, role, email, location, public profile links; optional verified résumé/availability |
| `NAVIGATION` | Stable section ID and visible label |
| `PROJECTS` | Stable ID, title, year, actual platform, contribution, summary, media, links, optional detail points, featured state |
| `EXPERIENCE` | Stable ID, company, role, start/end month, short contribution, optional detail |
| `SKILL_GROUPS` | Stable ID, group name, item names; no proficiency values |
| `EDUCATION` | Institution, qualification, period, honors |
| `CREDENTIALS` | Name, issuer, issue date, verification URL, selected state |

Media includes path, alt text, intrinsic width, and height. Links include a visible label and real URL. Missing optional content omits its action or section. Define section IDs once and reuse them for navigation and anchors.

Use `${import.meta.env.BASE_URL}projects/...` for content asset URLs. New app base is `/` for the root site. It is independent of the archive’s `/TomGalay.github.io.3.0/` base.

## Interaction ownership

- Navigation uses anchors, a skip link, and visible focus. A wrapping mobile header avoids drawer state and focus-management overhead.
- Gallery controls are buttons with explicit labels and selected state. Keep focus on the triggering control and provide a polite image-position update. Never autoplay.
- Native disclosures expose optional detail. Contribution and destination links remain visible when collapsed.
- Contact opens real email/profile destinations. Never imply an email was sent because a mail link opened.
- Motion progressively enhances content. Reduced-motion preference and motion failures must not hide meaningful text or media.
- No essential behavior depends on hover, fine pointers, or animation completion.

## Performance and accessibility

Show opening text immediately. Load prominent first-view media eagerly and below-fold images lazily. Reserve dimensions and provide responsive sources where useful. Do not download every full-size gallery image immediately or use large originals as tiny thumbnails.

Project targets to measure: initial JS at or below 150 kB gzip, CSS at or below 30 kB gzip, and first-view image transfers around 600 kB or less. These are planning targets, not current results. Prefer compression and appropriate sizes before compromising legibility.

Use semantic landmarks, one h1, sequential headings, readable contrast, visible focus, and generous touch targets (aim for 44px). Check 200% zoom and 320px width. Do not use color alone to communicate selected state.

## Failure behavior

Image containers keep their dimensions when loading fails, and alt text remains useful. Missing external destinations are content defects to fix or omit. Do not add infrastructure to compensate for unavailable content.

GitHub Pages serves the static build. Avoid history-based routes initially so direct visits require no fallback server. Social metadata belongs in `index.html`; add a preview image only once a real file exists.

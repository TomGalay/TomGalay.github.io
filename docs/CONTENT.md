# Content and assets

## Sources

The previous archive checkout’s `src/data.js` and `public/projects/` were inspected earlier in this conversation. They are the migration sources for facts, links, and existing media. Nine actual screenshots were migrated from the archive and compressed to WebP for this implementation. The archive remains separate.

Copy and audit source records when the archive is available. Employment records retain the archive’s supplied dates. Availability, phone number, and an unverified résumé download are omitted. Keep public content in the new app’s own `src/data.js`; components own presentation. Never invent outcomes, clients, technologies, metrics, or testimonials.

## Page structure

| Area | Content | Initial budget |
| --- | --- | --- |
| Introduction | Name, direct role line, project previews, navigation | No prose paragraph |
| Work | New Life Sta Rosa and WinLi Home | 20–35 words of visible summary per project |
| Project detail | Contribution, relevant implementation, links | Up to three concise factual points, expandable inline |
| About | Short introduction, grouped experience, unrated skills, education | About paragraph around 40–60 words |
| Contact | Email, LinkedIn, GitHub | No form or explanatory paragraph |
| Footer | Name, year, archive link | One compact row, wrapping on mobile |

Budgets guide editing; preserve necessary credit and useful alt text. Essential contribution and project links stay visible outside expandable detail.

## Initial work selection

| Project | Previously inspected evidence | Treatment |
| --- | --- | --- |
| New Life Sta Rosa | Six mobile screens, 2026 date, App Store URL, team-work description covering mobile app and CMS | Lead mobile showcase. Credit team involvement; do not claim sole ownership of all layers |
| WinLi Home | Three web screenshots, logo, live URL, 2024 date, design/development/branding description | Lead web showcase with a broad media canvas |
| Mycarehub | Detailed mobile, WordPress systems, and AWS experience; no matching screenshots in the inspected repo | Strong evidence in About. Feature only when media, public destinations, and contribution wording are ready |
| CryptSim | Composite image, demo link, capstone/research-award context | Optional selected earlier work |
| Chronicles of Elijah / Vapour | Composite images and source links | Optional later archive; omit initially if they dilute the main work |

Draft summaries to verify during implementation:

- New Life Sta Rosa: “Helped build a church app for announcements, events, videos, and livestreams, supported by a web CMS.”
- WinLi Home: “Designed the branding and website for a structural engineering company in Alhambra, California.”

## Asset inventory to migrate

| Archive source | Treatment |
| --- | --- |
| `public/projects/new-life-sta-rosa/newlife-1.png` through `newlife-6.png` | Preserve source names; use a representative interface screen in the hero; keep the splash screen secondary |
| `public/projects/winli/winlihome-1.png` through `winlihome-3.png` | Use the home page as the web preview; service/contact screens remain secondary |
| `public/projects/winli/logo-green-fixed.webp` | Copy if needed; preserve the actual client identity |
| `public/projects/CryptSim.webp` | Copy only if selected; inspect legibility at mobile sizes |
| Certification logos | Copy only if selected; avoid a logo wall |
| `public/favicon.svg` | Replace with a simple identity consistent with the new design |

Inspect dimensions before deciding crops. Keep originals while generating smaller display assets. Do not fabricate product screens to fill missing media. No current résumé download exists in the inspected asset set.

## Background

Group Mycarehub roles by company but retain separate dates for overlapping responsibilities. Summarize earlier freelance and internship work compactly. Use disclosure for extra detail rather than recreating the career diagram.

Keep skills grouped and unrated. Only add a technology when actual work or explicit owner confirmation supports it. Keep the degree and honors concise; selected credentials must not occupy more space than professional work.

## Before release

- Reconfirm current roles, dates, availability, and preferred phone visibility. Default Contact to professional email and public profiles.
- Verify the App Store and WinLi Home links. The previous Play Store link was `#`; omit it until a real destination exists.
- Resolve “Portfolio V1” links before reuse. Its former root repository link redirects to the blueprint edition and does not establish the first portfolio’s identity.
- Keep study period and honors date separate; the archive lists 2018–2022 study and a 2023 honors entry.
- Do not show a résumé download until a real current file is available.
- Do not ship placeholder links, “soon” buttons, or undocumented professional claims.

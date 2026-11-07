# Content and assets

## Sources

The previous archive checkout’s `src/data.js` and `public/projects/` were inspected earlier in this conversation. They are the migration sources for facts, links, and existing media. Nine actual screenshots were migrated from the archive and compressed to WebP for this implementation. The archive remains separate.

Copy and audit source records when the archive is available. Employment records retain the archive’s supplied dates. Availability, phone number, and an unverified résumé download are omitted. Keep public content in the new app’s own `src/data.js`; components own presentation. Never invent outcomes, clients, technologies, metrics, or testimonials.

## Page structure

| Area | Content | Initial budget |
| --- | --- | --- |
| Introduction | Name, direct role line, project previews, navigation | No prose paragraph |
| Work | Mycarehub first; New Life Sta Rosa and WinLi Home follow | 20–35 words per project; the featured Mycarehub summary may be longer to explain its broader scope |
| Project detail | Project summary, platform destination links, navigable images | No role subtext or contribution disclosure; professional detail lives in Experience |
| About | Short introduction, grouped experience, unrated skills, education | About paragraph around 40–60 words |
| Contact | Email, LinkedIn, GitHub | No form or explanatory paragraph |
| Footer | Name, year, archive link | One compact row, wrapping on mobile |

Budgets guide editing; preserve necessary credit and useful alt text. Essential contribution and project links stay visible outside expandable detail.

## Initial work selection

| Project | Previously inspected evidence | Treatment |
| --- | --- | --- |
| New Life Sta Rosa | Six mobile screens, 2026 date, App Store URL, team-work description covering mobile app and CMS | Lead mobile showcase. Credit team involvement; do not claim sole ownership of all layers |
| WinLi Home | Three web screenshots, logo, live URL, 2024 date, design/development/branding description | Lead web showcase with a broad media canvas |
| Mycarehub | Detailed mobile, WordPress systems, and AWS experience; 17 public web captures and eight owner-supplied worker app screens | Lead hero and Work. Show public website pages only; link website, iOS, and Android |
| CryptSim | Composite image, demo link, capstone/research-award context | Optional selected earlier work |
| Chronicles of Elijah / Vapour | Composite images and source links | Optional later archive; omit initially if they dilute the main work |

Draft summaries to verify during implementation:

- New Life Sta Rosa: “Helped build a church app for announcements, events, videos, and livestreams, supported by a web CMS.”
- WinLi Home: “Designed and built a website and visual identity for a structural engineering company in Alhambra, California.”

## Asset inventory to migrate

| Archive source | Treatment |
| --- | --- |
| `public/projects/new-life-sta-rosa/newlife-1.png` through `newlife-6.png` | Preserve source names; use a representative interface screen in the hero; keep the splash screen secondary |
| `public/projects/winli/winlihome-1.png` through `winlihome-3.png` | Use the home page as the web preview; service/contact screens remain secondary |
| `public/projects/winli/logo-green-fixed.webp` | Copy if needed; preserve the actual client identity |
| `public/projects/CryptSim.webp` | Copy only if selected; inspect legibility at mobile sizes |
| Certification logos | Copy only if selected; avoid a logo wall |
| `public/favicon.svg` | Replace with a simple identity consistent with the new design |

Inspect dimensions before deciding crops. Keep originals while generating smaller display assets. Do not fabricate product screens to fill missing media. The existing `GALAY_CV_7-26.pdf` was recovered from the owner’s supplied résumé. Serve it unchanged as `public/resume/Isaiah-Galay-Resume.pdf`.

## Background

Group Mycarehub roles by company but retain separate dates for overlapping responsibilities. Show the complete earlier freelance project history and both internships compactly, grouped by Freelance and Internships. Keep project names, role titles, exact periods, and summaries visible. Mycarehub gets the largest entry, with separate mobile and WordPress responsibilities from the owner’s résumé.

Keep skills grouped and unrated. Only add a technology when actual work or explicit owner confirmation supports it. Keep the degree visible and emphasize the linked Summa Cum Laude honor. Preserve the archive’s four organization records, three additional awards, and four competition wins in smaller disclosures with the original award/competition evidence links. The separate 2023 honors evidence is not a change to the 2018–2022 study period.

## Before release

- Reconfirm current roles, dates, availability, and preferred phone visibility. Default Contact to professional email and public profiles.
- New Life Sta Rosa has verified iOS and Android listings. Use `https://play.google.com/store/apps/details?id=com.nl.newLifeStaRosa` for Android and `https://www.newlifestarosa.com/` for its website. Show platform icons beside destination labels.
- Resolve “Portfolio V1” links before reuse. Its former root repository link redirects to the blueprint edition and does not establish the first portfolio’s identity.
- Keep study period and honors date separate; the archive lists 2018–2022 study and a 2023 honors entry.
- View and download links serve the verified two-page résumé PDF. Replace the asset when the owner supplies a newer version.
- Do not ship placeholder links, “soon” buttons, or undocumented professional claims.

## Mycarehub source and destination rules

- Website source: the new public design at `https://test.mycarehub.com.au/`. Attribute and link the work to `https://mycarehub.com.au/` per owner instruction. Do not present the test hostname in public copy.
- Active web gallery: Home, Services, About, How we work, Contact. No logged-in web dashboards or operational screens are shown.
- Mobile source: `Mycarehub-Flutter-Mobile-App/screenshots/01_login.png` through `08_shift_report_report.png`, explicitly supplied for the worker app showcase. Preserve their interface content; `_current.png` is excluded.
- Eight mobile WebP assets retain the complete screen. The initial view is Schedule.
- iOS: `https://apps.apple.com/au/app/mycarehub/id6450425879`.
- Android: `https://play.google.com/store/apps/details?id=au.com.mycarehub`.
- All seven credentials are copied from the archive’s certification records, with issuer, issue date, and original verification destinations. Do not describe them as currently active when validity is unverified.

## Experience and education update sources

The owner’s two-page `GALAY_CV_7-26.pdf` supplies Mycarehub responsibilities and dates, freelance history, and internship periods. The read-only `.3.0` archive supplies the separate Qadra Studio and JLCG role descriptions, organization records, and original linked awards/competitions. No metrics or unverified outcomes were added. New Life Android listing and its support website were verified directly against Google Play on 7 November 2026 (Asia/Manila).

## Work presentation refinement

Work has no project-count label. Mycarehub’s web gallery is labeled “Website”; inline galleries show only the selected screen name, with numeric position reserved for the enlarged viewer. The expanded Mycarehub summary covers web operations, mobile workflows, notifications, and AWS infrastructure, using the owner’s verified experience. Its legal identity is Mycarehub Pty Ltd, an Australian private company (ABN 97 663 227 834), and an approved NDIS provider; verified against [ABN Lookup](https://abr.business.gov.au/ABN/View?id=97663227834) and the [NDIS Commission](https://www.ndiscommission.gov.au/provider-registration/mycarehub-pty-ltd).

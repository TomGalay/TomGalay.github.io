# First implementation verification

Verified 6 November 2026 in the cloud development environment.

## Completed

- Production Vite build passes. The most recent measured bundle was approximately 87 kB JavaScript gzip and 4.3 kB CSS gzip, within the documented budgets.
- Real New Life Sta Rosa and WinLi Home screenshots migrated and compressed to WebP. The two opening images total about 220 kB; Archivo is self-hosted as WOFF2 with its font license files.
- Desktop visual review performed. Corrected intrinsic screenshot sizing and hero media overlap.
- Narrow and medium layouts checked through native browser zoom: approximately 337px and 674px content widths, plus the approximately 1348px desktop width. No horizontal page overflow was found. These were desktop reflow checks, not physical touch-device tests.
- Mobile gallery selection changed the selected button, image, and live position text. Web gallery selection also worked.
- Project contribution and education disclosures opened correctly.
- Copy-email action returned “Email copied”. Direct mail, GitHub, LinkedIn, App Store, website, and archive links are present. The App Store and WinLi Home destinations returned HTTP 200 during direct checks.
- Keyboard entry reaches the visible skip link. Navigation uses native anchors, and gallery controls use native buttons.
- One h1, no missing internal anchor targets, and no `href="#"` placeholder links.
- No failed completed image loads observed during browser inspection.
- Corrected a React 18 development warning by using the supported lowercase `fetchpriority` attribute.
- Contrast checked: main text on paper 14.34:1; muted text on paper 6.43:1; rust accent on paper 4.96:1. Dark-section text/accent combinations also passed the 4.5:1 project target. Exact values should be recalculated if tokens change.

## Verification limits

Reduced-motion and coarse-pointer fallbacks were reviewed in code; OS-level reduced-motion and real touch hardware were not exercised. Browser DevTools were blocked by environment policy, so responsive checks used ordinary browser zoom. No formal accessibility certification is claimed.

## Delivery boundary

The GitHub root repository is public and was cloned successfully. The first cloud environment could not authenticate a GitHub push. The source was subsequently recovered to the Mac for deployment through its authenticated GitHub Desktop checkout. A private review deployment is separate from GitHub Pages. The `.3.0` archive was read as a source only and was not modified.

The supplied GitHub Pages workflow builds and deploys pushes to `main` after GitHub Actions is selected as the Pages source. Verify the workflow result and public root URL for each release. A private review URL is not evidence that `tomgalay.github.io` has been updated.

## Mycarehub update — 7 November 2026 (Asia/Manila)

- Production build passed: 87.85 kB JS gzip and 4.95 kB CSS gzip.
- Mycarehub leads the hero and Work; its public web and worker app galleries maintain independent selection and live screen labels.
- Web selection changed to Services; mobile selection changed to Travel and Shift report with selected button state and matching media.
- All seven archive certification records render outside a disclosure, preserving their issuer, issue date, and verification destination.
- Existing résumé PDF inspected as a valid two-page document; header and Contact offer view access and Contact also provides a same-origin download action.
- Layouts at 320px, 360px, 768px, and 1440px showed no horizontal document overflow.
- Website destination uses `mycarehub.com.au`; source capture hostname is confined to documentation. Official iOS and Android listing destinations were verified.

- The View résumé action opened the served PDF in a separate browser tab.

# Design direction

Status: implemented first direction, ready for owner review. Warm paper, dark ink, rust accent, oversized Archivo Black name, actual web/mobile compositions, staggered project articles, and a dark About section. The owner’s exclusions remain requirements.

## Character

Warm, direct, expressive, and technically precise. Use an editorial layout with oversized type, generous product imagery, asymmetric composition, and one restrained accent. Each project gets its visual character from its real interface and imagery.

The blueprint’s grid, document numbers, drafting labels, stamps, coordinate cursor, and sheet navigation belong to the archive. Keep technical substance in the project evidence.

## Opening composition

- Compact header: Isaiah Galay, Work, About, Contact. Plain text links.
- One semantic h1: Isaiah Galay. A prominent supporting line: “Web & mobile developer.”
- Pair the type with an actual mobile app screen and web screenshot. Each preview links to its corresponding project below. These are different projects; do not imply they are responsive versions of the same product.
- Let the next section appear naturally. Do not force the introduction to fill the viewport.
- No introductory essay, availability badge, decorative preheading, or repeated subtitle.

## Page rhythm

Follow the opening with large project articles. Use a two-column text/media composition for one and a broad web canvas for the other. Vary proportions rather than repeating identical cards. Keep titles, contribution, and destination links close to the relevant media.

“Work”, “About”, and “Contact” are sufficient headings. Do not automatically add a paragraph beneath each. Education and selected credentials belong within About.

## Starting tokens

| Token | Initial value | Purpose |
| --- | --- | --- |
| `--paper` | `#F3F0E9` | Main background |
| `--surface` | `#E8E3D9` | Quiet secondary/media surfaces |
| `--ink` | `#20201E` | Main text |
| `--ink-muted` | `#595650` | Supporting text |
| `--accent` | `#B83C2A` | Links, focus, selected controls |
| `--on-accent` | `#FFFFFF` | Text on solid accent actions |
| `--line` | `#C8C0B3` | Decorative separators |
| `--content-width` | `1440px` | Maximum page width |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Motion easing |

Verify contrast for actual text/control pairings. Do not use the decorative line color for text or as the sole control boundary. Project imagery retains its real brand colors without adding global accents. Use one light theme for the first release.

## Typography and spacing

Start with Archivo for text and Archivo Black for display type, using families already present in the previous portfolio. Sentence case, normal readable tracking, and strong changes of scale provide hierarchy. Avoid ubiquitous uppercase microtype, stroked headlines, or gradient text.

Starting sizes: display `clamp(3.5rem, 9vw, 9rem)`, section headings `clamp(2.25rem, 5vw, 5rem)`, project titles `clamp(1.75rem, 3vw, 3rem)`, body `1rem`–`1.125rem`. Keep paragraph lines around 55–70 characters. Test wrapping rather than forcing desktop line breaks.

Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Start with page gutters of 20px on small screens, 32px on medium screens, and 64px on wide screens. Use space and alignment to group content before adding boxes.

## Media and controls

- Use real screenshots. Crop to retain recognizable content; show at least one complete mobile screen in the mobile showcase.
- Supply image dimensions or aspect ratios to prevent layout shifts.
- Device rounding belongs to a believable phone frame. General controls stay rectangular with square or subtle corners; never capsules.
- Use a solid or outlined primary action sparingly. Other actions are visible text links with clear hover/focus treatment.
- Show relevant technologies as plain text separated by commas or middots. No decorative tag inventory.
- Small offsets or rotations can add character on wide screens. They must not distort text, obscure product UI, or displace essential controls.

## Responsive behavior

| Width | Composition |
| --- | --- |
| 320–599px | Single column; name and role first; media follows; navigation wraps; no hover dependency |
| 600–959px | More spacing and wider media; two columns only where content remains comfortable |
| 960px and above | Asymmetric hero and project layouts; large display type; controlled media overlap |

DOM reading order stays logical at every width. No horizontal page scrolling, clipped names, fixed-height text containers, or essential content hidden on mobile.

## Motion

Reveal sections once with opacity and a 12–24px offset over roughly 350–600ms. Use the shared easing. Hover/focus feedback is small and immediate. Galleries change only through user input.

Reduced-motion mode removes positional reveals, tilt, and smooth scrolling while keeping every section visible. Pointer effects apply only to fine pointers. Keep the native cursor. Exclude scroll hijacking, loading sequences, continuous marquees, and decorative 3D scenes from the first release.

## Acceptance

The page must communicate both web and mobile development without reading a biography. Actual work dominates the visuals. Remove any label, paragraph, border, badge, or animation that adds no information or useful feedback.

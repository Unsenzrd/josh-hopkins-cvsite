---
name: Josh Hopkins CV
description: A single-page CV set as a signed-off press proof, with four tones, one variable sans and sage as the only accent.
colors:
  paper: "#f4f4f1"
  ink: "#161816"
  rule: "#5d635d"
  sage: "#4f6b53"
  sage-pressed: "#475f4b"
  paper-dark: "#141614"
  ink-dark: "#e9ebe6"
  rule-dark: "#9aa19a"
  sage-dark: "#a9c4ab"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 7.4vw, 6rem)"
    fontWeight: 650
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 72"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 76"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.2vw, 1.875rem)"
    fontWeight: 650
    lineHeight: 1.1
    fontVariation: "'wdth' 82"
  title-entry:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 650
    lineHeight: 1.25
    fontVariation: "'wdth' 90"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1.6vw, 1.375rem)"
    fontWeight: 600
    lineHeight: 1.3
  body-large:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.01em"
  monogram:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 88"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'tnum' 1"
  mono-slug:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  cut: "2px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  row: "14px"
  lg: "18px"
  column: "28px"
  gutter: "clamp(20px, 4vw, 48px)"
  section: "clamp(56px, 8vw, 104px)"
  page: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.cut}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.sage-pressed}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.cut}"
    padding: "0 22px"
    height: "48px"
  button-small:
    padding: "0 16px"
    height: "40px"
  nav-link:
    textColor: "{colors.rule}"
    padding: "0 10px"
    height: "44px"
  nav-link-active:
    textColor: "{colors.ink}"
  monogram:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.paper}"
    typography: "{typography.monogram}"
    rounded: "{rounded.full}"
    size: "38px"
  theme-switch-track:
    rounded: "{rounded.full}"
    padding: "0 8px"
    width: "64px"
    height: "32px"
  theme-switch-thumb:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.full}"
    size: "24px"
  theme-switch-thumb-dark:
    backgroundColor: "{colors.sage-dark}"
  now-dot:
    backgroundColor: "{colors.sage}"
    rounded: "{rounded.full}"
    size: "8px"
  location-reticle:
    textColor: "{colors.sage}"
    rounded: "{rounded.full}"
    size: "16px"
  role-note:
    backgroundColor: "transparent"
    textColor: "{colors.sage}"
    rounded: "{rounded.cut}"
    padding: "1px 7px"
  proof:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.paper}"
    padding: "4px 28px 0"
---

# Design System: Josh Hopkins CV

## Overview

**Creative North Star: "The Signed-Off Press Proof"**

The CV is a proof sheet from the print and manufacturing world Josh builds software for. A mono "Now" marker opens the role line, a mono location line sits with the contact actions, and a mono slug line at the foot of the page carries the copyright, the update date and the domain. A full-bleed sage colour bar, with a stepped tint wedge, carries the three proofs. The page closes on a sign-off block ruled in ink, not a generic footer. Every device is borrowed from press work, and each one holds real content.

Density is calm and editorial. One variable sans, Archivo, carries all hierarchy through its width axis, from a condensed display name down to full-width body text. JetBrains Mono is reserved for metadata. The palette is exactly four tones per theme. Surfaces are flat: rules and hairlines divide the sheet, and the only mass of colour is the sage bar. There is no load motion. The page is complete from the first frame. Ambient motion is limited to the colour-bar mesh, which drifts steadily at rest while a slow ghost focus wanders across the bar, lighting the links near it (a hint that it is interactive), and wakes further when a pointer takes over. The "Now" dot and the location reticle are still, so nothing in the hero implies live data.

The world rejects the category default for a developer CV: a centred hero, pill tags, equal-weight skill cards and a "Let's talk" footer.

**Key Characteristics:**
- Four tones per theme. Every other value is an alpha or `color-mix` of those four.
- One sans family whose width axis sets the hierarchy (72 for the name, 100 for body text).
- Mono only for dates, years, "Now", "Based in Wiltshire, UK", the footer slug line and the revealed email address.
- 2px square-cut corners, with four owner-approved round exceptions: the sage monogram, the theme switch, the "Now" dot and the location reticle.
- A single full-bleed sage band that carries the proofs.
- A two-column ledger: a section head on the left and ruled body rows on the right.

## Colors

The palette is a quiet green-grey neutral with one muted sage accent, mirrored for a dark theme.

### Primary
- **Proof Sage** (light `sage`, dark `sage-dark`): the only accent. It fills the solid buttons ("Email me" in the hero and sign-off, "Get in touch" in the nav), the monogram circle and the colour bar. It also marks the active nav underline, the current role's dates, the "Now" dot and label, the location reticle, the role-note chips, the list dashes, the role separator, link-hover underlines, the focus ring, the text selection, the sun icon on the theme switch in light and the switch thumb in dark. On the colour bar and the monogram, text is set in the paper tone (`--on-sage`).
- **Pressed Sage** (`sage-pressed`): the solid button's hover state. It is not a fifth tone: it is sage 86% mixed with ink 14%, and it is written as `color-mix` in the source.

### Neutral
- **Proof Paper** (light `paper`, dark `paper-dark`): the page ground, the nav ground, the text colour on sage (including the monogram letters) and the switch thumb in light.
- **Press Ink** (light `ink`, dark `ink-dark`): headings and body text, the 2px section-head and sign-off rules, and the switch-track border on hover.
- **Rule Grey** (light `rule`, dark `rule-dark`): secondary text. It sets the nav links at rest, the organisation lines, the dates, the "Based in Wiltshire, UK" line, the footer slug line, section meta, schools, footnotes, the sign-off copy and the inactive icon on the theme switch.
- **Hairline** (ink at 16%): row dividers, the nav's bottom border and the section-body top rule.
- **Strong Hairline** (ink at 34%, or 32% in dark): the outline button border and the switch-track border at rest.
- **Switch Track** (ink 8% into paper; sage 22% into paper when dark is on): the theme-switch track fill, and nothing else.

### Named Rules
**The Four Tones Rule.** Each theme has exactly four tones: paper, ink, rule and sage. Any other colour on the page must be an alpha or `color-mix` of those four. If a new colour cannot be expressed as a mix of the four, it does not belong.

**The Sage Is Signal Rule.** Sage marks only four things: action (the solid buttons and focus), currency (the active nav link, the "Now" marker, the location reticle, the current role, the role notes, the active theme on the switch), proof (the colour bar) and identity (the monogram). It is never used for decorative fills, backgrounds of cards, or body text.

## Typography

**Display Font:** Archivo, variable width 62–125 and weight 400–700 (fallback: Helvetica Neue, Arial, sans-serif)
**Body Font:** Archivo at width 100
**Label/Mono Font:** JetBrains Mono, variable weight 400–500 (fallback: ui-monospace, Cascadia Mono, Consolas, monospace)

**Character:** a contemporary grotesque that condenses into a poster-weight name and relaxes into an even reading face, set beside a mono that reads as press metadata. Both faces are self-hosted as variable woff2 files, split into Latin and Latin Extended subsets, with their OFL licences alongside. The Latin Archivo file is preloaded, and every face uses `font-display: swap`.

### Hierarchy
- **Display** (650, clamp 3.25–6rem, line-height 0.92, width 72, tracking -0.02em): the name in the hero, and nothing else.
- **Headline** (650, clamp 2–3rem, line-height 1, width 76): the sign-off heading.
- **Title** (650, clamp 1.5–1.875rem, line-height 1.1, width 82): section heads. The proof leads use the same width at clamp 1.25–1.5rem.
- **Title Entry** (650, 1.3125rem, line-height 1.25, width 90): role titles. The current role steps up to 1.625rem at width 84.
- **Lead** (600, clamp 1.1875–1.375rem, line-height 1.3): the role line, "Software Engineering Manager · CPI Group UK", opened by the inline mono "Now" marker.
- **Body Large** (400, 1.125rem, line-height 1.6): the positioning paragraph and summary prose.
- **Body** (400, 1.0625rem, line-height 1.6): lists, skills and education rows, and footnotes.
- **Label** (600, 0.9375rem, tracking 0.01em): buttons and nav links (nav links use weight 500).
- **Monogram** (700, 0.875rem, width 88, tracking 0.06em): the "JH" letters in the sage circle, and nothing else.
- **Mono** (400, 0.8125rem, tabular figures): dates, years, section meta and the update date in the footer slug. The current role's dates use weight 500 in sage. "Now" (in sage) and "Based in Wiltshire, UK" (in rule grey) use the same size at weight 500.
- **Mono Slug** (400, 0.75rem): the slug line at the foot of the page, and nowhere else.

### Named Rules
**The Width Is Hierarchy Rule.** Hierarchy comes from Archivo's width axis as much as its size: 72 for the name, 76 to 90 for headings, 100 for reading text. Do not add a second display family.

**The Mono Is Metadata Rule.** JetBrains Mono sets only dates, years, "Now", "Based in Wiltshire, UK", the footer slug line and the email address. Headings, labels and prose are never set in mono.

**The Set Measure Rule.** Every text block has a set line length: 68ch for prose, role lists and skills; 62ch for the positioning line; 40ch for the sign-off copy; 34ch for the proof sentences.

## Layout

The page is a centred column with a 1180px content width plus the gutter on each side (clamp 20–48px). The sticky nav is 60px tall on desktop and 56px at 760px and below. In-page anchors clear it with `scroll-padding-top` of the nav height plus 24px.

The hero is an unframed two-column grid, opened by clamp 48–88px of top space and closed by clamp 48–80px of bottom space: the copy on the left and a square portrait (clamp 200–280px) on the right. In the copy, the role line sits 18px under the name, the positioning 18px under the role line and the CTA row 30px below that. The CTA row holds "Email me", LinkedIn and the location line, 12px apart. There is no slug line under the hero. The colour bar then runs full-bleed. Its top tier is a 96px mesh band with the tint wedge aligned to the content edge. Below it are three proofs in equal columns, divided by hairlines in the paper tone at 40%.

Content sections use a ledger grid: a head column (minimum 180px, 1fr) beside a body column (3.2fr), with a 16px row gap and a clamp 24–64px column gap. Sections are spaced by clamp 56–104px. Rows inside the experience, skills and education lists share an 11.5rem label column (dates, category or year) with a 28px gap, and are separated by hairlines.

The recurring spacing steps are 4, 8, 12, 14, 18 and 28px.

**Responsive behaviour:**
- **At 960px and below,** sections collapse to one column, the sign-off stacks, the "Now" marker drops to its own line 6px above the role title, and the company name drops under the title in rule grey.
- **At 760px and below:**
  - The nav hides its section links.
  - The portrait becomes a 104px square beside the name. The role line, positioning and actions run full width beneath. The hero tightens to 16px of top and 18px of bottom padding, the positioning drops to 1.0625rem at line-height 1.5, and the CTA row takes a 10px row gap, with the location line wrapping onto its own line under the buttons.
  - The mesh band shrinks to 46px, and the proofs stack with top hairlines.
  - Ledger rows become single-column.
- **At 380px and below,** the portrait becomes 88px and the nav button tightens to 12px side padding.

**Print:** the page switches to white paper and black ink, with a darker sage (#3d5540). The nav, the mesh, the CTA row (and the location line with it), the email reveal and the theme switch are hidden. The colour bar becomes a band ruled top and bottom, and external links print their URLs.

## Elevation & Depth

The system is flat. Depth and structure come from line weight and one block of colour. A 2px ink rule opens each section head and the sign-off. 1px hairlines divide rows and columns. The full-bleed sage bar is the only large filled surface. The one shadow in the build is the small soft one under the theme-switch thumb, which lifts the thumb off its track so it reads as a physical slider. The "Now" dot's ring is drawn with a box-shadow spread, but it has no blur and no offset: it is a flat ring, not elevation.

### Shadow Vocabulary
- **Switch thumb:** the theme-switch thumb only. No other element takes a shadow.
  - Light: `box-shadow: 0 1px 3px color-mix(in srgb, var(--ink) 28%, transparent)`.
  - Dark: `0 1px 3px color-mix(in srgb, var(--paper) 85%, transparent)`. Both are drawn from the four tones.

### Named Rules
**The Flat Sheet Rule.** Nothing on the sheet casts a shadow or floats, except the theme-switch thumb. Separate things with a rule or a hairline. Emphasise with the sage bar or with type weight and width.

## Shapes

Corners are square-cut at 2px: buttons, the portrait image, the role-note chips and the focus ring. Borders are 1px hairlines, or 2px ink for structural rules.

Four elements are round, and all are owner-approved exceptions to the square cut. The monogram is a full circle (50% radius). The theme switch is a fully rounded pill track (999px) holding a circular thumb, and its focus ring follows the pill. The "Now" dot is an 8px circle. The location reticle is a static 16px line icon (a circle, a centre dot and four ticks).

### Named Rules
**The Few Round Things Rule.** Only the monogram, the theme switch, the "Now" dot and the location reticle are round. Everything else is cut at 2px: no pill tags, pill buttons, rounded cards or larger radii.

## Components

### Buttons
Square-cut and firm, with a sans label and no icons.
- **Shape:** square-cut corners (2px), a 48px minimum height and 22px side padding. The label is Archivo at 600.
- **Primary (solid):** a sage fill with paper-tone text and a 1px sage border. On hover the fill and border shift to the pressed sage. It carries "Email me" in the hero and the sign-off.
- **Outline:** transparent, with ink text and a strong hairline border. On hover the border turns ink. It carries LinkedIn beside "Email me", and "Copy address".
- **Small:** 40px high with 16px padding, at 0.875rem. It is used for the nav's solid "Get in touch" (a link to the sign-off) and the outline "Copy address".
- **States:** colour transitions take 0.18s on the ease-out curve (`cubic-bezier(0.16, 1, 0.3, 1)`). Pressing a button moves it down 1px. Focus is a 2px sage outline with a 3px offset.

### Chips
- **Role note:** an inline 1px sage border with sage text at 0.8125rem and weight 600, square-cut at 2px. It marks career events such as "Rejoined" or "Promoted to Senior". It is never a pill and never a skill tag.

### Cards / Containers
The system has no cards. Content sits in ruled ledger rows, or in open blocks opened by a 2px ink rule (section heads and the sign-off).
- **Ledger row:** 14px of vertical padding (26–30px for role entries), a hairline bottom border, and the 11.5rem label column.

### Navigation
A sticky bar in the paper tone with a hairline bottom border. On the left are the monogram (a 38px sage circle with "JH" in the paper tone) with no wordmark: the link's accessible name is "Josh Hopkins, back to top". On the right are the section links in rule grey at weight 500, the theme switch and a small solid "Get in touch" button that links to the sign-off. On hover a link turns ink. The link for the section in view (`aria-current`) turns ink and gains a 2px sage underline inset 10px. Every target is at least 44px. The section links hide at 760px.

### Theme Switch
A pill switch (`role="switch"`, with `aria-checked` true when dark is on) inside a hit area of at least 44px.
- **Track:** 64×32px, fully rounded, with a strong hairline border and the switch-track fill. A sun sits at the left and a moon at the right (16px line icons, inline SVG). On hover the border turns ink.
- **Thumb:** a 24px circle, inset 3px, that slides under the active icon: paper-coloured under the sun in light, sage under the moon in dark. It carries the system's one shadow.
- **Icons:** the active icon is marked (the sun in sage in light; the moon in paper over the sage thumb in dark). The inactive icon is rule grey.
- **Motion:** the thumb slides 32px over 0.3s and colours shift over 0.25s, both on the ease-out curve. The transitions are removed under reduced motion.

### Colour Bar (signature)
A full-bleed sage band with two tiers:
- **Top tier:** a canvas mesh of nodes and links drawn in the paper tone. At rest it drifts steadily, and a slow ghost focus wanders across the bar on a Lissajous-style path, brightening the links and nodes near it. When a fine pointer moves over it, the focus eases over to the pointer and the mesh wakes (links brighten near the pointer, the drift speeds up and a slight parallax follows the pointer), then the ghost takes the focus back and the mesh settles to its resting pace. Under reduced motion it draws one static frame, with a fixed lit patch.
- **Wedge:** a six-step tint wedge from paper to sage, 22×12px per patch, with a paper-tone border at 55%.
- **Lower tier:** three proofs. Each is a bold lead line (title width) plus one sentence. They are never big numbers.

### Now Marker and Location
Two separate mono 500 markers at 0.8125rem, both static. They are kept apart so one reads as present tense and the other as where Josh is based; neither implies live data.
- **Now:** inline at the start of the role line: an 8px sage dot with a static 3px sage ring at 22%, then "Now" in sage, raised with `vertical-align: 0.25em` and spaced 0.7em from the title. At 960px and below it drops to its own line above the title.
- **Location:** in the hero CTA row beside "Email me" and LinkedIn: "Based in Wiltshire, UK" in rule grey after a static 16px sage reticle (inline SVG: a circle, a filled centre dot and four ticks). At 760px and below it wraps onto its own line under the buttons.

### Slug Line and Sign-off (signature)
The slug is a wrapping row of mono metadata in rule grey. It appears only at the foot of the page: "© 2026 Josh Hopkins · Updated Sep 2026 · joshhopkins.co.uk". There is no slug under the hero. The sign-off is an open block opened by a 2px ink rule. It holds the heading, the contact actions ("Email me" and LinkedIn) and nothing else. There is no signature line. The email address is revealed in mono at weight 500 beside a small outline "Copy address" button.

### Motion
**The One Moment Rule.** The colour-bar mesh is the one ambient moment: it drifts with a wandering ghost focus at rest, wakes under the pointer and settles back. Nothing else moves on its own: the "Now" dot and the location reticle are static, so the page never implies live data. There is no load motion and there are no scroll reveals; the layout is complete from the first frame. Everything else that moves is a state change: the 0.18s colour transitions on buttons and links, the 1px button press, and the theme-switch slide. All of it is suppressed under `prefers-reduced-motion`, where the mesh is drawn once and stays still.

## Do's and Don'ts

### Do:
- **Do** express every non-token colour as an alpha or `color-mix` of paper, ink, rule and sage.
- **Do** set hierarchy with Archivo's width axis: 72 for the name, 76–90 for headings, 100 for reading text.
- **Do** give every text block a max-width: 68ch, 62ch, 40ch or 34ch.
- **Do** divide content with 1px hairlines (ink at 16%) and open sections with a 2px ink rule.
- **Do** keep corners at 2px (the monogram, the theme switch, the "Now" dot and the location reticle are the only round forms) and every interactive target at 44px or more.
- **Do** put dates, years and metadata in JetBrains Mono, with tabular figures where they align.
- **Do** mirror every token in the dark theme and in the print overrides.

### Don't:
- **Don't** add a fifth tone, a second accent or a second display family.
- **Don't** use shadows, glows or floating cards. The sheet is flat; the theme-switch thumb's small shadow is the only one.
- **Don't** use pill-shaped tags or equal-weight skill cards. Skills are ledger rows.
- **Don't** round anything beyond the monogram, the theme switch, the "Now" dot and the location reticle.
- **Don't** add load animations or scroll reveals. The colour-bar mesh is the only ambient motion; the "Now" dot and the location reticle never animate.
- **Don't** set headings or prose in mono, or use sage for body text or decorative fills.

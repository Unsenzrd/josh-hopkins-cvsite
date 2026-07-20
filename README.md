# Handoff: Josh Hopkins — CV / Personal Site

## Overview
A single-page professional CV site for Josh Hopkins (Software Engineering Manager, CPI Group UK Ltd). One scrolling page: hero/intro, summary, experience timeline, skills, education, and a contact panel. Persistent light/dark theme toggle. Built to be hosted as a static personal site on his own domain.

## About the Design Files
The bundled file in this folder — `Josh Hopkins CV (standalone).html` — is a **design reference**, a working HTML/CSS/JS prototype showing the exact intended look, copy, and behavior. It is not production code to drop onto a server as-is (it's a single inlined file with everything, including fonts and the photo, embedded for portability/preview).

**Task**: recreate this design as clean, deployable static HTML/CSS (or a lightweight framework like Astro/Next if preferred) suitable for hosting on a personal domain — semantic markup, a real image asset instead of an embedded data URL, and normal CSS instead of inline styles. If no preference is given, plain static HTML + CSS + a small vanilla JS file is the right call for a single-page CV site like this — no build step needed.

## Fidelity
**High-fidelity.** Colors, type, spacing, copy, and interactions below should be treated as final — reproduce them precisely rather than reinterpreting.

## Layout & Sections (single scrolling page, max-width 1180px content column)

1. **Sticky Nav** — logo monogram ("JH" in a gold circle) + wordmark "JOSH HOPKINS", left. Right: anchor links (Experience / Skills / Education / Contact, small-caps Cinzel, letter-spacing ~1.6px), a dark-mode toggle button (moon/sun icon swap), and a solid "Get in Touch" button (links to #contact). Nav is `position: sticky; top: 0`, semi-transparent blurred background (`backdrop-filter: blur(10px)`), 1px bottom border.

2. **Hero** — two-column grid (1.2fr / 0.8fr). Left: eyebrow label "Software Engineering Manager" (gold, small-caps, with a short rule), large serif H1 "Josh Hopkins" (Cinzel 700, clamp(44px,6.4vw,78px)), italic serif summary paragraph (Cormorant Garamond), three pill tags ("Wiltshire, UK" / ".NET / C# / ASP.NET Core" / "8+ years' experience"), two CTAs ("Contact Me" solid gold, "View Experience" outlined). Right: square portrait photo (rounded ~20px corners, ~200–240px, wrapped in a 6px gold-gradient frame with a 3px page-color inner border) — replace with a real headshot asset.

3. **Summary** — two-column row (220px label column + content): "Summary" eyebrow label, one paragraph of professional summary.

4. **Experience** (`#experience`) — vertical timeline, gold-dot markers on a vertical line, one entry per role:
   - Software Engineering Manager — CPI Group UK Ltd, Chippenham — 2023–Present (previously Senior Software Developer)
   - Enterprise Application Developer — Herman Miller Ltd (MillerKnoll), Portal Mill, Melksham — 03/2022–03/2023
   - Software Developer / Senior Software Developer — CPI Group UK Ltd, Chippenham — 10/2018–03/2022
   - Software Developer — InTouch Display Ltd, Highbridge — 09/2017–10/2018
   Each has a title, date range (right-aligned, gold), company/location line (italic, muted), and a bullet list of responsibilities — exact copy is in the HTML file, carry it over verbatim.

5. **Skills** (`#skills`) — three cards in a row (Core & Backend / Web & Cloud / Practice & Tools), each a bordered card listing technologies. Below: a row of pill badges for soft-skill highlights (Strong decision maker, Complex problem solver, Results-driven, Creative thinker, Innovative, Personable).

6. **Education** (`#education`) — three-column row of degree/year/institution, plus one line about ongoing courses (Udemy) and personal interests (family, hiking, reading, photography, art).

7. **Contact** (`#contact`, footer) — a solid rounded card (visually distinct from the page, NOT transparent) containing "Let's talk." heading, location line, an "Email Me" button, and a small JH badge. Below the card: copyright line.
   - **Important**: the email address must never appear as plain text/markup in the page source. In the prototype it's assembled only inside the click handler at runtime (string parts joined on click → `mailto:`), so it can't be scraped from static HTML. Recreate the same pattern (or an equivalent non-trivial obfuscation) — do not just put a `mailto:` link with the address as visible text or a raw href.
   - No phone number is shown by request.

## Interactions & Behavior
- **Sticky nav**: stays pinned on scroll; clicking a nav link smooth-scrolls to the section (`scroll-behavior: smooth` + `scroll-margin-top` on each section so headings clear the nav instead of hiding behind it).
- **Dark mode toggle**: button in the nav swaps a `light`/`dark` theme by re-assigning a set of CSS custom properties (background, ink/text, muted text, card, border-line colors, plus dedicated contact-panel colors so that panel stays high-contrast and theme-appropriate rather than inverting). Persisted in `localStorage` (key `jhcv-theme`) so it survives reloads.
- **Scroll reveals**: sections/content fade+rise in as they enter the viewport, done with CSS `animation-timeline: view()` (progressive enhancement — content is visible by default if unsupported, and disabled entirely under `prefers-reduced-motion` and in print).
- No JS frameworks — vanilla DOM/CSS. Fine to reimplement with plain CSS transitions/IntersectionObserver in the target codebase.

## Design Tokens

**Fonts** (Google Fonts):
- Headings/labels/nav: `Cinzel` (weights 400–800)
- Body/paragraph text: `Cormorant Garamond` (italic used for supporting copy)

**Colors** (light theme):
- `--gold: #b8894f`, `--gold-dk: #8f6431`
- `--marble` (page bg): `#f5f1e7`
- `--ink` (text): `#2b2520`
- `--muted` (secondary text): `#726858`
- `--card` (card fill): `rgba(255,253,248,0.55)`
- `--line` (borders/dividers): `rgba(138,101,8,0.16)`
- Contact panel bg: `#fdfbf5` with `1px solid var(--line)` border

**Colors** (dark theme):
- Page bg: `#171310`; text: `#f0e9da`; muted: `#a99d84`
- Card fill: `rgba(255,250,238,0.04)`; border-line: `rgba(184,137,79,0.24)`
- Contact panel bg: `#241d16`
- Gold accent stays the same in both themes.

**Radius**: 2px (buttons), 4–10px (cards/panels), 20px (portrait frame).
**Shadows**: soft, low-opacity, warm-toned (`rgba(60,44,10,…)` / `rgba(0,0,0,…)`), used sparingly on the portrait frame and contact panel only.

## Assets
- **Portrait photo**: currently an embedded placeholder headshot for preview purposes. Replace with a real photo of Josh — export it as a normal image file (`.jpg`/`.webp`) in an `assets/` folder rather than a data URL.
- No other imagery — no icons beyond the inline sun/moon SVGs in the theme toggle and the JH monogram (plain text in a circle, not an image).

## Files
- `Josh Hopkins CV (standalone).html` — the full design reference, self-contained (fonts + photo inlined) — open directly in a browser to see the exact target design and inspect the compiled markup/CSS.

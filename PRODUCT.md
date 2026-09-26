# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Senior technology hiring audiences considering Josh Hopkins for Senior Engineer, Principal Engineer, Engineering Manager, or broader technology-leadership roles:

- **Recruiters**, agency and in-house, who skim fast for level, fit and a way to get in touch.
- **Hiring managers, CTOs, VPs of Engineering and other senior technology leaders** who check credibility, leadership maturity and whether his level matches the role.

Visitors usually arrive from a CV, application, LinkedIn profile or introduction, and they are judging him, not browsing. Within roughly 15–20 seconds they need to know who he is, what level he operates at, his core strengths, and the most significant things he has achieved.

## Product Purpose

A personal CV and professional portfolio site, published at https://joshhopkins.co.uk/. It exists to present engineering credibility, leadership maturity, career progression and measurable organisational impact.

Success means both of these equally:

1. **Credibility / shortlisting:** it backs up a CV or application strongly enough that the visitor moves him forward.
2. **Contact:** the visitor emails him directly.

## Positioning

**A leader who still builds.** Josh is an engineering manager who stays hands-on: he leads a team of 7 developers and 2 QA engineers while still engineering solutions from design through delivery. He also shapes how his team adopts AI in software engineering (tooling, guardrails, reworked workflows). That combination of line leadership, hands-on C#/.NET depth and practical AI adoption, grounded in manufacturing and enterprise systems work since 2017, is the claim. AI adoption supports it; it is not the headline.

## Operating Context

- Visitors usually cross-reference the site against a CV, LinkedIn profile or job application, so facts must stay consistent with those.
- It is often read quickly, on desktop by hiring leaders and on mobile by recruiters between calls.
- Printing or saving as PDF is a realistic use, and print styles already exist.

## Capabilities and Constraints

- **Stack:** plain static HTML + CSS + a small vanilla JS file in `site/`, with no framework and no build step. Deployed by Netlify from GitHub (`Unsenzrd/josh-hopkins-cvsite`) on every push to `main`. It can be previewed locally via `.claude/launch.json` (`cv-site`, port 8420).
- **Single scrolling page:** hero, summary, experience timeline, skills, education, contact.
- **Light/dark theme toggle**, saved in `localStorage` (`jhcv-theme`).
- **Email obfuscation is mandatory:** the address must never appear as plain text or as a raw `mailto:` href in the page source. It is assembled at runtime on click.
- **No phone number** is shown, by request.
- Motion is minimal: the colour-bar mesh drifts steadily at rest while a slow ghost focus wanders across the bar, lighting the links near it (a hint that it is interactive); the pointer takes over the focus and wakes it. Under `prefers-reduced-motion` it is static, and smooth scrolling is off. There are no scroll reveals and no load animation.
- Fonts (Archivo, JetBrains Mono) are self-hosted in `site/assets/fonts/` under the SIL OFL, with no third-party font requests.
- **Owner design preferences (2026-09-26):** no crop marks; the logo is the filled circle with "JH" initials; the theme control is a clear sun/moon toggle switch; the nav action says "Get in touch", not "Email me"; the nav shows the logo only, with no name; there is no signature line; the update date appears only in the footer; the copy says "I currently lead", not "I lead"; a still "Now" marker starts the role line, and "Based in Wiltshire, UK" sits beside the hero buttons (both static, to avoid implying live data); there is no metadata line under the hero.
- `Josh Hopkins CV (standalone).html` and `support.js` at the repo root are the original prototype reference and its runtime. They are not part of the deployed site.

## Brand Commitments

- **Name:** Josh Hopkins. He uses a "JH" monogram.
- **Voice:** first-person, factual and understated, in UK English. It is professional without being salesy.
- **Binding direction set by Josh:** distinctive and personal, *not* a SaaS landing page or a generic developer portfolio. Polished and contemporary but restrained. Content and professional credibility come before decorative design.

## Evidence on Hand

- **Career history, confirmed by Josh from LinkedIn on 2026-09-26.** This is authoritative. The live site's dates are wrong in places, so correct the site to match this.
  - **CPI Group UK Ltd**, Chippenham (Josh's chosen name for the site; LinkedIn shows "CPI Books Global Group"), second stint:
    - Software Engineering Manager, May 2025–present.
    - Senior Software Developer, Feb 2023–May 2025.
  - **Herman Miller** (MillerKnoll), Melksham: Enterprise Application Developer, Mar 2022–Feb 2023.
  - **CPI**, first stint:
    - Senior Software Developer, Apr 2021–Mar 2022.
    - .NET Developer, Oct 2018–Apr 2021.
  - **InTouch Display Ltd**, Highbridge: Software Developer, Sep 2017–Oct 2018.
  - Josh left CPI and came back as a Senior Developer, then was promoted to Manager. This is a return hire plus an internal promotion, and it is worth stating.
  - LinkedIn: https://www.linkedin.com/in/jmhopkins-dev/
- **Education:** BSc (Hons) Applied Computing, Bournemouth University (2013); HND (2012) and BTEC ND L3 (2010), Bridgwater College.
- **Portrait photo:** `site/assets/img/portrait.jpg`.
- **Qualitative achievements:** leads a team of 9 (7 developers, 2 QA), drove GitHub Copilot adoption, defined AI guardrails, was Scrum Master for 12 months during an Agile transition, and built a cross-platform Shop Floor Data Capture app now in use at UK manufacturing sites.
- **Impact figures, confirmed by Josh on 2026-09-26:**
  - **Team:** 7 developers and 2 QA engineers report to Josh. He hired several of them and worked alongside the rest as a Senior Developer.
  - **GitHub Copilot:** 100% of the team now use it. This is the first few weeks of adoption, so there are no further outcome figures yet.
  - **PR throughput:** roughly 2× the number of pull requests compared with the previous month, after the AI-assisted workflow changes. This measures throughput, not time to PR. It is a one-month comparison, so present it modestly.
  - **Shop Floor Data Capture (SFDC) app:** a cross-platform console app, designed so it *could* run across multiple countries and factory systems. It is in use at UK sites only, mainly 2 sites on the South Coast. From the 2024 CV: it increased the speed and accuracy of data capture and has built-in redundancy for safety and availability. The live site's "used across multiple countries" is **wrong** and must be corrected.
  - **Years of experience:** Josh chose to **drop any years claim** (2026-09-26). Remove "10+ years" everywhere and let the dated timeline speak for itself.
- Future work must not invent metrics, outcomes, testimonials, clients or employer endorsements. Ask Josh for real figures instead.
- **Source CV:** `C:/Users/Josh/OneDrive/Documents/JMHOPKINS_CV_2024.docx`, outside the repo. It is out of date: it ends at "Senior Software Developer, 03/2023 to present" and has no Manager role. It contains Josh's **phone number and email in plain text**, so it must not be published as-is; a web version needs both removed. It needs updating, and a PDF produced, before a "Download CV" link goes live.
- **Private context (never publish):** Josh is open to Senior Engineer, Principal Engineer, Software Engineering Manager or similar roles. Pay and the chance to add value matter more than the exact title. Use this only to judge which evidence to lead with; the site must not state it.
- There are no testimonials, case studies, press or public code samples on hand.

## Product Principles

1. **Level and impact in 15–20 seconds.** Seniority, core strengths and headline achievements must be readable without scrolling deep or reading paragraphs.
2. **Credibility over decoration.** Every element either proves something about Josh or helps someone contact him. Anything purely ornamental must justify itself.
3. **Leader who still builds.** Leadership and hands-on engineering evidence stay in balance, and neither should crowd out the other.
4. **Truthful and consistent.** Every claim is traceable to his real history and matches his CV and LinkedIn. Nothing is inflated or fabricated.
5. **Personal, not templated.** It should read as one specific person's site, not a portfolio template or product marketing page.

## Accessibility & Inclusion

No product-specific standard has been set. Existing commitments are working keyboard navigation to anchors, reduced-motion support and readable output in both themes and in print.

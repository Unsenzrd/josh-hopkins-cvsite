---
target: existing CV website (site/index.html)
total_score: 16
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 4
target_identity: "file:E:\\ClaudeProjects\\josh_hopkins_CV_site\\site\\index.html"
target_fingerprint: "sha256:654edd5ba7c8d0436de8013e188786ea5312ca600f3daa73eeed0fd9c6b21ed0"
target_path: "E:\\ClaudeProjects\\josh_hopkins_CV_site\\site\\index.html"
timestamp: 2026-09-26T09-26-15Z
slug: site-index-html
---
# Critique: site/index.html (joshhopkins.co.uk)
Method: dual-agent (A design review, B detector + browser evidence) + headless Chrome captures at 1440/768/375. No source modified.

## Design Health Score: 16/32 (H7, H10 n/a), Acceptable (50%)
H1 2: no active nav state; toggle lacks aria-pressed; Email Me gives no feedback
H2 2: actual job title never stated in hero
H3 3: simple scroll; motion only off via OS
H4 2: three labels for #contact; mixed date formats; square pills vs round badges; ignores prefers-color-scheme
H5 2: contact depends on a mail client
H6 2: level only in 11.5px tracked caps; CPI tenure split across entries
H8 2: ornament that proves nothing (mesh, tilt/glare, letter flip, texture, eyebrow rule, badge cloud)
H9 1: Email Me silently fails without a mail client; no fallback

## Specificity verdict
Heritage-luxury language (Cinzel caps + Cormorant italic on cream, "ivory/onyx") that is coherent but miscast for a C#/.NET manufacturing engineering manager. Template/AI tells: plexus mesh band, the same kicker+h2 pattern x4, pill row, soft-skill badge cloud, eyebrow+gradient rule, letter-flip h1, 3D tilt+glare (including the contact panel), scroll-reveal everywhere, paper texture, "Let's talk.".
Detector: 11 CLI / 14 in-page findings. Real: Email Me + monogram-small 4.35:1 (light); dark "Get in Touch" + header monogram 4.44:1; View Experience 4.16:1 on the light end of the stripe (missed by the detector). False positives: pills "2.2:1" (actually 4.7-5.2, about 2.6 under mesh strokes); all-caps-body (single eyebrow). Also flagged: cream-palette, repeating-stripes-gradient, kicker-above-heading x4.

## Priority issues
1. [P1] 15-20s scan fails: no title/scope/achievements on the first screen; blank band at 1440x900 from reveal; mobile first role ~2300px down, page ~7400px. Fix: positioning line + 3-item proof strip, remove reveal on summary/first role, real figures from Josh. Commands: clarify, layout.
2. [P1] Miscast identity + ornament: remove mesh/tilt/glare/letter flip/texture/eyebrow rule; contemporary 17-18px body, ~68ch measure (currently ~120-139ch), sentence case. Options A1 notebook / A2 editorial serif / A3 shop-floor signal. Commands: quieter/distill, typeset.
3. [P1] Contact can silently fail: mailto only; 4.35:1 button; weak ending. Fix: reveal the runtime-assembled address with copy + feedback, optional LinkedIn/CV PDF, fix contrast, remove the JH dot. Command: harden.
4. [P1] Mobile/tablet nav: 3 rows / 158px sticky at 375; 15px link targets; 2 rows at 768; hero collapses at tablet. Fix: ≤56px mobile bar, 44px targets, rework 761-1000px. Command: adapt.
5. [P2] Experience doesn't read senior: 8 equal bullets, 20px role titles vs 36px generic h2 subtitles, confusing CPI tenure, self-assessed badges, 4 equal skill cards. Options C1 impact block / C2 lead vs build lanes / C3 compact table + disclosure. Commands: clarify, layout.

## Hero options
B1 identity + proof strip; B2 portrait-led split; B3 CV-document opening.

## Personas
Recruiter: no title line, no CV/LinkedIn, mailto may fail, mixed dates. CTO/VP Eng: undifferentiated bullets, no outcomes, badges, luxury styling. Casey: 158px header, 15px targets, CTAs below fold, long page. Sam: no skip link, no custom focus-visible, no aria-pressed, unnamed sections, div titles, contrast fails, ignores prefers-color-scheme. Jordan: grey italic lede is the only explanation; equal-weight CTAs in a busy band.

## Minor
Title tag not job title; no OG/theme-color; portrait 1085px/144KB with no srcset; unused font weights requested; 220px label gutter wastes ~18% width; skill lists use <br>; overflow-x hidden; detached footer.

## Questions
One sentence for a VP Eng? Strongest number? Would a CTO trust "Results-driven"? Outlook-web recruiter clicks Email Me? EM or Principal? What does manufacturing look like?

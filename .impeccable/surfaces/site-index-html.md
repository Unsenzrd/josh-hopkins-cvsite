---
version: 1
slug: "site-index-html"
primary_target: "site/index.html"
related_targets: []
---

# Surface brief: CV home page (site/index.html)

**Scope and mode:** the single-page CV at joshhopkins.co.uk. Mode is Persuade: the visitor decides to shortlist Josh or to email him.

**Audience and job:** recruiters, hiring managers, CTOs and VPs of Engineering, who need Josh's level, scope and proof within 15–20 seconds and a contact route that cannot silently fail. The copy source is `.impeccable/copy.md`; the facts are in PRODUCT.md.

**Constraints:**
- The email address is assembled only at runtime.
- No phone number.
- Reduced-motion and print support.
- The animated strip stays, as Josh asked.
- The world Josh pinned: an "engineering notebook", meaning neutral off-white or near-black, one contemporary sans with a mono for figures, and sage as the only accent.

**Build path:** code-led, because there is no image generation.

## Direction contract

**THESIS:** the CV is presented as a signed-off press proof from the print and manufacturing world Josh builds software for. Its slug line carries real metadata, a colour bar carries the proofs, and it ends with a sign-off, not a footer. Josh removed the crop marks on 2026-09-26, so the proof grammar now rests on the slug, the colour bar with its wedge, and the signature. It refuses the category default: a centred developer hero with pill tags, equal-weight skill cards and a "Let's talk" footer.

**OWN-WORLD:**
- **Palette:** exactly four tones per theme; any fifth tone is only an alpha mix of those four.
  - Light: paper #f4f4f1, ink #161816, rule grey #5d635d, sage #4f6b53.
  - Dark: #141614, #e9ebe6, #9aa19a, #a9c4ab.
- **Type:** Archivo (variable width and weight). The name is set condensed (width about 72, weight 650); body text is 18px at width 100. JetBrains Mono is used only for dates, the slug line and figures.
- **Components:** the JH monogram as a filled sage circle (Josh's original logo); square-cut 2px buttons; a pill sun/moon theme switch (an owner-approved exception to the 2px corners). There are no crop marks.

**STORY:** within one viewport the visitor reads the name, the role (Software Engineering Manager · CPI Group UK), the scope (7 developers and 2 QA engineers) and three proofs on the colour bar. They scroll a dated career read in reverse order, with both CPI stints and the promotion clearly marked, then reach the sign-off, where "Email me" either opens their mail app or shows the address with a copy button.

**FIRST VIEWPORT:**
- **1440×900:** a sticky 56px nav (circle monogram and name on the left; Experience, Skills and Education, the theme switch and a solid "Get in touch" button on the right).
- **Hero sheet:** a two-column grid, with no crop marks.
  - Left: the h1 name at clamp(3.25rem, 7vw, 6rem) condensed; the role line at 1.35rem weight 600; Josh's lede at about 62ch; "Email me" (solid sage) and "LinkedIn" (outline).
  - Right: a 280px square portrait plate.
- **Role line:** it starts with a still sage "Now" marker. "Based in Wiltshire, UK" (with a still reticle) sits in the button row. There is no slug line under the hero; the only slug is in the footer.
- **Colour bar:** a full-bleed sage band, visible above the fold. A step-wedge patch row and the mesh (steady drift and a wandering ghost focus at rest) in the top tier; the three proofs in three columns on flat sage below (a bold lead line plus one sentence each, not big numbers).
- **Mobile:** the portrait becomes a 104px plate beside the name; the nav drops the section links.

**FORM:** press proof sheet. It is candidate 7 of 7 on my ordered list: 1 drawing title block, 2 git/PR view, 3 grid notebook, 4 andon board, 5 changelog, 6 job traveller, 7 press proof. Seed key 1ffcbeed.

**Raises from the declined challengers:**
- Game Boy: exactly four tones.
- Plankton: the mesh answers the pointer and settles back. Josh asked for more activity at rest (2026-09-26), so an idle ghost focus now wanders across it.
- HyperCard: every role is deep-linkable, and the nav marks the active section.
- Teen quiz: the sign-off is the destination.
- Clay: every text block has a set line length.

**Signature interaction:** the colour-bar mesh wakes under the pointer and settles back. There is no load animation and there are no scroll reveals.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

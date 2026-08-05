---
name: su-web-design
description: Design and refine SU Navigation web interfaces with restrained maritime visual language, Emil Kowalski-inspired interaction polish, accessible motion, and GitHub Pages-safe implementation. Use when building, reviewing, or animating the SU Navigation website.
---

# SU Navigation Web Design

- Preserve deep navy, ocean blue, paper-white surfaces, restrained cyan accents, and editorial typography.
- Keep the vessel visible on the right of the hero and copy anchored on the left.
- Animate only for hierarchy, state, feedback, or spatial continuity.
- Use cubic-bezier(.23,1,.32,1) for responsive exits and cubic-bezier(.77,0,.175,1) for deliberate movement.
- Keep frequent feedback under 180ms; use 220–280ms for cards and 500–900ms only for hero or ambient motion.
- Animate transform and opacity; avoid layout properties.
- Use transform: scale(.97) for 100–160ms press feedback and subtle 4–8px hover movement.
- Respect prefers-reduced-motion: reduce and preserve visible :focus-visible states.
- Verify the hero at desktop, tablet, and mobile widths, including GitHub Pages base paths.
- Keep official company facts, fleet data, offices, safety policy, and contact details intact.
- Run the Pages build and compare the deployed result before claiming completion.

When reviewing motion, use a table with Before, After, and Why columns. Flag transition: all, slow UI transitions, ease-in entrances, missing press feedback, missing reduced-motion handling, and motion that competes with the vessel or headline.
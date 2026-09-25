---
name: uiux-designer
description: Skill for designing premium UI/UX layouts, color palettes, typography, and micro‑animations for web projects.
---

# UI/UX Designer Skill

This skill provides guidance, templates, and automated generation of modern, premium web UI/UX assets.

## Typical Uses
- Generate a design system (colors, fonts, spacing) based on a brand description.
- Create mock‑up images for landing pages, dashboards, or forms.
- Produce CSS snippets for glassmorphism, dark‑mode, gradients, and subtle animations.
- Offer design checklist and accessibility best‑practice recommendations.

## How to Invoke
When you need UI/UX assistance, simply ask the assistant to *use the `uiux-designer` skill* and describe the component or page you want.

## Example Prompt
```
Design a hero section for a fintech startup with a dark theme, using glassmorphism cards, a primary gradient from #0a64a0 to #1e90ff, and a call‑to‑action button with a subtle hover animation.
```

The assistant will respond with:
1. A color palette in HSL.
2. Suggested typography (Google Fonts).
3. CSS code for the hero layout and animations.
4. Optional image mock‑up (generated via `generate_image`).

## Resources
- You can place optional assets in a `resources/` folder (e.g., SVG icons, sample images).
- Example implementations can go in an `examples/` folder.

---

*This file is a stub. Extend the instructions with concrete steps, tool usage, and any scripts needed for the skill.*

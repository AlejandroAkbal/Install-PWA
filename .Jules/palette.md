## 2025-02-17 - Canvas Accessibility in Svelte

**Learning:** In Svelte, `<canvas>` elements do not support the `alt` attribute (causes type errors) or `role="img"` (causes a11y warnings).
**Action:** To make `<canvas>` elements accessible, use the `aria-label` attribute directly on the tag and provide inner fallback text instead of self-closing the tag.

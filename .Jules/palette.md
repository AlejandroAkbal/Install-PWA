## 2025-02-13 - [Canvas Accessibility in Svelte]

**Learning:** Svelte's `<canvas>` elements do not support the `alt` attribute (causes type errors) or `role="img"` (causes a11y warnings).
**Action:** To make canvas elements accessible, use `aria-label` directly on the `<canvas>` tag and provide inner fallback text inside the `<canvas>` tags for screen readers and cases where the canvas fails to load.

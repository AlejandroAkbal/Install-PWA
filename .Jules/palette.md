## 2025-02-12 - Canvas Accessibility in Svelte

**Learning:** In Svelte, `<canvas>` elements do not support the `alt` attribute (causes type errors) or `role="img"` (causes a11y warnings).
**Action:** To make canvas elements accessible, use `aria-label` directly on the `<canvas>` tag and provide inner fallback text (e.g., `<canvas aria-label="Description">Description</canvas>`).

## 2025-02-13 - Canvas elements accessibility in Svelte
**Learning:** In Svelte, `<canvas>` elements do not support the `alt` attribute (causes type errors) or `role="img"` (causes a11y warnings).
**Action:** To make canvas elements accessible, use `aria-label` directly on the `<canvas>` tag and provide inner fallback text inside the `<canvas>...</canvas>` block.

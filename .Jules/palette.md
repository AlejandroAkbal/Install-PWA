## 2024-07-26 - Canvas Accessibility in Svelte
**Learning:** Svelte's `<canvas>` elements do not accept the `alt` attribute (causes type errors) or `role="img"` (causes a11y warnings).
**Action:** To make `<canvas>` elements accessible without causing type or a11y errors, use `aria-label` directly on the `<canvas>` tag and provide inner fallback text for legacy support (e.g., `<canvas aria-label="Description">Description</canvas>`).

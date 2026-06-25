## 2026-06-25 - Canvas Accessibility Insights
**Learning:** The `<canvas>` element does not support the `alt` attribute, which causes type errors in Svelte. Furthermore, adding `role="img"` to `<canvas>` triggers an a11y warning in Svelte.
**Action:** When making `<canvas>` accessible to screen readers, avoid the `alt` attribute and `role="img"`. Instead, use `aria-label` directly on the canvas and provide fallback content (e.g., text) between the opening and closing `<canvas>` tags.

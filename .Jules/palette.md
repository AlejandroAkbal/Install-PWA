## 2024-05-24 - Canvas Accessibility Pattern
**Learning:** `alt` attributes are not natively supported on `<canvas>` elements for screen readers. Using `alt` on `<canvas>` triggers a11y linter warnings (e.g., in Svelte).
**Action:** When making a `<canvas>` accessible, use `role="img"` and `aria-label="..."` instead of the `alt` attribute to ensure proper screen reader support and avoid invalid HTML properties.

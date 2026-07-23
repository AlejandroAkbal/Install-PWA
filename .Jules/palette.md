## 2026-07-23 - Canvas Accessibility in Svelte
**Learning:** Using the `alt` attribute on a `<canvas>` element in Svelte causes a type error, and using `role="img"` can cause a11y warnings.
**Action:** Always use `aria-label` directly on the `<canvas>` element and provide descriptive inner fallback text inside the `<canvas>` tags to ensure accessibility for screen readers and users whose browsers do not support canvas.

## 2024-07-25 - Canvas Accessibility in Svelte

**Learning:** In Svelte, standard image attributes like `alt` or roles like `role="img"` on `<canvas>` elements cause type errors or accessibility warnings.
**Action:** Always use `aria-label` directly on the `<canvas>` tag and provide inner fallback text (e.g., 'Your browser does not support the canvas element.') to ensure proper accessibility for screen readers and robust fallback.

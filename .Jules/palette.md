## 2024-11-20 - Canvas accessibility in Svelte
**Learning:** Using `alt` or `role="img"` on `<canvas>` elements causes type errors or accessibility warnings in Svelte.
**Action:** Always use `aria-label` directly on the `<canvas>` tag and provide inner fallback text for screen readers.

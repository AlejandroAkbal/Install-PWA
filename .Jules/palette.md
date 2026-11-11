## 2024-05-14 - Canvas Accessibility in Svelte

**Learning:** In Svelte, `<canvas>` elements do not support the `alt` attribute (causes type errors) or `role="img"` (causes a11y warnings). The correct way to make `<canvas>` accessible for screen readers is to use the `aria-label` attribute directly on the tag and provide inner fallback text between the opening and closing `<canvas>` tags.
**Action:** When adding or modifying `<canvas>` elements, avoid using `alt` or `role="img"`. Always use `aria-label` along with inner fallback content.

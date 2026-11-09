## 2026-11-09 - [Accessibility fixes for Canvas elements]
**Learning:** In Svelte, `<canvas>` elements do not accept an `alt` attribute (causes a type error) and should not use `role="img"` (causes a11y warnings).
**Action:** Always use `aria-label` directly on the `<canvas>` tag and provide fallback text as its inner HTML for accessibility.

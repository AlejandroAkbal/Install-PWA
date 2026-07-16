## 2026-07-16 - Svelte Canvas Accessibility
**Learning:** In Svelte, `<canvas>` elements do not support the `alt` attribute (which causes type errors) or `role="img"` (which causes a11y warnings).
**Action:** To make canvas elements accessible in Svelte, use `aria-label` directly on the `<canvas>` tag and provide inner fallback text inside the canvas element.

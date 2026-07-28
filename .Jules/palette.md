## 2024-05-24 - Canvas Accessibility in Svelte
**Learning:** `svelte-check` enforces strict typing for HTML elements and fails if `alt` is used on a `<canvas>` element (since it's not a valid attribute for it), or if `role="img"` is used (which triggers an a11y warning).
**Action:** When adding accessibility to `<canvas>` elements in Svelte, always use `aria-label` directly on the `<canvas>` tag and provide inner fallback text instead of using `alt` or `role="img"`.

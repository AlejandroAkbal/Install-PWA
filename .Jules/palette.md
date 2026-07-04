## 2024-05-15 - Svelte Canvas Accessibility

**Learning:** Svelte throws type errors when using the `alt` attribute on `<canvas>` elements, and assigning `role="img"` can cause accessibility warnings. To properly make a `<canvas>` accessible in Svelte without triggering errors or warnings, use the `aria-label` attribute directly on the tag and provide an inner text fallback.
**Action:** Always use `aria-label` and inner text instead of `alt` or `role="img"` for `<canvas>` elements in Svelte components.

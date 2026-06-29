## 2025-02-12 - Canvas Accessibility in Svelte

**Learning:** In Svelte components, `<canvas>` elements do not accept an `alt` attribute (it throws a type error), and adding `role="img"` can cause an a11y warning. This is a common pitfall when trying to make graphical canvas elements accessible to screen readers.
**Action:** Instead of using the `alt` attribute on `<canvas>`, use the `aria-label` attribute directly on the tag for screen readers, and provide fallback text content _inside_ the `<canvas>...</canvas>` tags for environments where canvas is unsupported or fails to render.

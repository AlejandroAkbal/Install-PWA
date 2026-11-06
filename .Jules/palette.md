## 2024-05-24 - [Canvas Accessibility in Svelte]

**Learning:** In Svelte, `<canvas>` elements do not natively support the `alt` attribute and this causes type errors. While it's tempting to try using `role="img"` to resolve this, that will trigger an accessibility warning in svelte-check.
**Action:** To make `<canvas>` elements accessible without causing type errors or a11y warnings, assign an `aria-label` attribute directly to the `<canvas>` tag and provide standard descriptive text inside the tag itself (i.e. `<canvas aria-label="...">Fallback text</canvas>`). This ensures the content is announced correctly by screen readers.

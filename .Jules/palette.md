## 2024-07-06 - `<canvas>` accessibility in Svelte

**Learning:** Svelte strictly checks HTML attributes and throws type errors if `<canvas>` has an `alt` attribute (unlike `<img>`). Additionally, adding `role="img"` to `<canvas>` can sometimes cause a11y warnings depending on the setup.
**Action:** Always use `aria-label` directly on the `<canvas>` tag and provide inner fallback text (e.g. `<canvas aria-label="Description">Description</canvas>`) to make it accessible to screen readers while passing Svelte's type checks.

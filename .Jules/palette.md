## 2023-10-24 - [Add Copy URL Visual Feedback]
**Learning:** Added visual feedback for a copy to clipboard action to make the interface more pleasant. Fixed layout shift that happened due to text size difference between "Copy URL" and "Copied!" using a fixed width class (`w-32`) to the button. Handled rapid clicking logic using clearTimeout to prevent overlapping timeouts.
**Action:** When adding state-dependent text to buttons, always enforce a minimum or fixed width to prevent layout shifts. Ensure temporary states (like timeouts) are cleared correctly on repeated interactions.

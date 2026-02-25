### **Sprint 003: Build Static Components & Define Design System**

**Goal:** Implement the static `Header` and `Footer` components and configure the global design system (colors, fonts) in Tailwind CSS.

**Scope (In/Out):**

- **In:** Building the HTML and basic styling for the Header and Footer, adding the design system tokens to `tailwind.config.mjs`.
- **Out:** Building any other components, making navigation links functional.

**Tasks:**

1.  Update `tailwind.config.mjs` with the exact color palette and font hierarchy from section 4.0 of the spec.
2.  Implement the `Header.astro` component with placeholder navigation links.
3.  Implement the `Footer.astro` component with a copyright notice.
4.  Add the `Header` and `Footer` components to the main `src/layouts/Layout.astro` file so they appear on the page.

**Files to Touch:**

- `tailwind.config.mjs`
- `src/layouts/Layout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`

**Acceptance Criteria:**

1.  The `tailwind.config.mjs` file contains the specified color and font settings.
2.  The Header component is visible at the top of the page.
3.  The Footer component is visible at the bottom of the page.
4.  The background color of the page reflects the new `background` color from the design system.

**Verification Steps:**

1.  Run `npm run dev` and view the site in the browser.
2.  Inspect the `tailwind.config.mjs` file to confirm the design tokens are present.
3.  Confirm the Header and Footer are visible on the page.
4.  Use browser dev tools to inspect an element and verify that Tailwind utility classes (e.g., `bg-background`, `text-foreground`) are applying the correct styles.

**What Not to Do:**

- Do not implement the jump-to-section functionality for the navigation links yet.
- Do not make the components responsive yet; focus on the desktop layout first.

---

### **Sprint 003: Static Components**

**Objective:** Build out the static content sections of the portfolio (Hero, About, Contact) with their final HTML and CSS.

---

### What Changed

- **`index.html`**:
    - The `#hero` section was populated with an `<h1>` for the name and a `<p>` for the professional title.
    - The `#about` section was populated with an `<h2>` heading and a `<p>` for the personal summary.
    - The `#contact` section was populated with an `<h2>` heading and a `<ul>` containing links for Email, GitHub, and LinkedIn.

- **`style.css`**:
    - Added styles for the `#hero` section to create a bold, centered introduction.
    - Added a general style for all `h2` elements to create a consistent, underlined heading for each section.
    - Styled the `#contact` section's list and links for a clean, readable appearance.
    - Added a universal selector (`*`) to ensure all text defaults to a light color, fixing a critical visibility bug.
    - Explicitly set a brighter color for `h1` and `h2` elements to make them stand out.

---

### Acceptance Criteria

- [x] The Hero section displays a main heading and tagline.
- [x] The About section displays a heading and a paragraph.
- [x] The Contact section displays a heading and a list of links.
- [x] All static content is styled to match the design spec (dark theme, monospaced font, correct sizing and spacing).
- [x] All text is clearly visible against the dark background.

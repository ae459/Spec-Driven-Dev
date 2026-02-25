
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

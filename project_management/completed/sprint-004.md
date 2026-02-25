### **Sprint 004: Build Content Components (Hero, About, Contact)**

**Goal:** Implement the main content sections of the portfolio that display static information.

**Scope (In/Out):**

- **In:** Building the `Hero`, `About`, and `Contact` components with their specified content and links.
- **Out:** Building the `Projects` section, making components responsive.

**Tasks:**

1.  Implement the `Hero.astro` component with the main headline and value proposition.
2.  Implement the `About.astro` component with the bio and links to GitHub, LinkedIn, and a placeholder resume PDF.
3.  Implement the `Contact.astro` component with the `mailto:` email link.
4.  Add the new components to `src/pages/index.astro` in the correct order.
5.  Add `id` attributes to the component wrappers (e.g., `<section id="about">`) to prepare for navigation.

**Files to Touch:**

- `src/pages/index.astro`
- `src/components/Hero.astro`
- `src/components/About.astro`
- `src/components/Contact.astro`
- `src/components/Header.astro` (to update nav links)

**Acceptance Criteria:**

1.  The Hero, About, and Contact sections are all visible on the main page.
2.  The navigation links in the Header (`#about`, `#contact`) now jump to the correct sections on the page.
3.  The external links in the About section (GitHub, LinkedIn) open in a new tab.
4.  The email link in the Contact section is a functional `mailto:` link.

**Verification Steps:**

1.  Run `npm run dev` and view the site.
2.  Scroll to see all new sections.
3.  Click the "About" and "Contact" navigation links and verify the page scrolls to the correct section.
4.  Click the GitHub link and confirm it opens in a new tab.
5.  Click the email link and confirm it attempts to open your default email client.

**What Not to Do:**

- Do not fetch or display project data.
- Do not spend time on responsive styling yet.

---

# Sprint 004: Dynamic Content (Projects Section)

**Objective:** Use vanilla JavaScript to dynamically generate and render the "receipt-style" project cards from a structured data object.

---

### What Changed

- **`script.js`**:
  - A `projects` array was created to hold project data (title, date, description, tasks, total).
  - Logic was added to execute after the DOM is fully loaded (`DOMContentLoaded`).
  - This logic loops through the `projects` array, dynamically creates an `<article>` element for each project, and injects the generated HTML into the `#projects` section of the page.

- **`index.html`**:
  - The placeholder paragraph in the `#projects` section was removed to prepare for the dynamically injected content.

- **`style.css`**:
  - Added styles for the `.project-card` class and its internal elements (`h3`, `.date`, `.tasks`, `.total`). These styles create the final "receipt" look with a distinct background color, borders, and typography.

---

### Acceptance Criteria

- [x] Project data is stored in a JavaScript array of objects.
- [x] JavaScript is used to dynamically render projects on the page.
- [x] The script waits for the DOM to be loaded before executing.
- [x] The rendered projects are styled to look like receipts, matching the design spec.
- [x] The system is extensible, allowing for easy addition/modification of projects in the `script.js` file.

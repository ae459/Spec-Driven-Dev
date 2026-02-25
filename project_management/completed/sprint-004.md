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

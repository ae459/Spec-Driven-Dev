### **Sprint 006: Final Polish & Responsive Design**

**Goal:** Add final details, ensure all links are functional, and implement a fully responsive design for mobile and desktop.

**Scope (In/Out):**

- **In:** Adding responsive styles using Tailwind's `sm:`, `md:`, etc. prefixes. Adding all remaining links and hover states.
- **Out:** Adding new features, changing content.

**Tasks:**

1.  Add the `liveUrl` and `repoUrl` links to the `ProjectCard.astro` component, rendering them conditionally if they exist.
2.  Go through every component and add responsive utility classes to ensure the layout is clean on a 375px mobile viewport.
3.  Ensure all interactive elements (links, buttons) have a clear hover and focus state as defined in the spec.
4.  Create a `public/resume.pdf` placeholder file and link to it from the About section.

**Files to Touch:**

- All component files (`.astro`)
- `src/layouts/Layout.astro`
- `public/resume.pdf` (new)

**Acceptance Criteria:**

1.  The layout looks correct and is fully usable on both a 375px mobile screen and a 1440px desktop screen.
2.  Links to the live project and/or GitHub repo appear on project cards and are functional.
3.  The "Resume" link correctly points to the PDF file.
4.  All links and buttons have a visible hover and focus state that meets the design spec.

**Verification Steps:**

1.  Use browser developer tools to test the site in responsive mode at various screen widths.
2.  Click every single link on the page to ensure it goes to the correct destination.
3.  Use the Tab key to navigate through the page and verify that all focusable elements have a visible focus ring.
4.  Hover over every link and button to verify the hover effect.

**What Not to Do:**

- Do not add any new content or components.
- Do not change the design system.

---

## Sprint 006: Deployment

**Objective:** Organize the final project files and deploy the static portfolio to GitHub Pages.

---

### What Changed

- **File Structure Reorganization**:
  - A directory was created at the root of the project.
  - The final , `style.css`, and `script.js` files were moved into the directory. This is the standard structure for deploying a simple static site to GitHub Pages.
- **Repository Update**:
  - The new file structure was committed and pushed to the `main` branch of the GitHub repository.
- **GitHub Pages Configuration**:
  - Instructions were provided to configure the repository settings to deploy from the folder on the `main` branch.

---

### Acceptance Criteria

- [x] All project source files (, `style.css`, `script.js`) are located within a folder.
- [x] The project is successfully deployed and accessible via a GitHub Pages URL.
- [x] The repository's `main` branch is configured to deploy from the folder.

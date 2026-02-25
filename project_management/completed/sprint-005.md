### **Sprint 005: Build Project Display Component**

**Goal:** Dynamically render the list of projects from the content collection.

**Scope (In/Out):**

- **In:** Fetching all documents from the `projects` collection and rendering a "Project Card" for each one.
- **Out:** Building the detailed case study page/view, advanced styling, responsive design.

**Tasks:**

1.  In `src/components/Projects.astro`, use `Astro.glob()` or `getCollection()` to fetch all project entries.
2.  Create a loop that iterates over the fetched projects.
3.  For each project, render a `ProjectCard.astro` component, passing the project data as props.
4.  Implement the `ProjectCard.astro` component to display the `title`, `headline`, and `stack` from its props.
5.  Add an `id="projects"` to the `Projects.astro` wrapper section and update the Header navigation link.

**Files to Touch:**

- `src/components/Projects.astro`
- `src/components/ProjectCard.astro` (new)
- `src/components/Header.astro`

**Acceptance Criteria:**

1.  The "Projects" section on the main page displays a card for the `sample-project.md`.
2.  The project card correctly displays the title, headline, and technology stack from the Markdown frontmatter.
3.  The "Projects" link in the header now jumps to the correct section.

**Verification Steps:**

1.  Run `npm run dev` and view the site.
2.  Confirm the project card for "Sample Project" is visible.
3.  Add a second temporary project file (`sample-two.md`) and confirm a second card appears automatically. Delete the temporary file afterward.
4.  Click the "Projects" navigation link to verify it works.

**What Not to Do:**

- Do not create individual pages for each project.
- Do not add the project links (`liveUrl`, `repoUrl`) to the cards yet.

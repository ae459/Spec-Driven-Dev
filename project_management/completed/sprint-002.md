### **Sprint 002: Content Modeling & Schema**

**Goal:** Define the data structure for project case studies using Astro's content collections and create a sample project to validate the schema.

**Scope (In/Out):**

- **In:** Creating the content collection configuration, defining the `projects` schema, and creating one sample Markdown file.
- **Out:** Rendering any project content on the page, styling the content.

**Tasks:**

1.  Create the directory `src/content/projects/`.
2.  Create the content collection configuration file: `src/content/config.ts`.
3.  Define the `projects` collection within `config.ts` with all fields specified in the main spec (title, headline, stack, etc.).
4.  Create a sample project file: `src/content/projects/sample-project.md`.
5.  Fill the sample project file with valid frontmatter data according to the schema and some placeholder body text.

**Files to Touch:**

- `src/content/config.ts` (new)
- `src/content/projects/sample-project.md` (new)

**Acceptance Criteria:**

1.  The Astro development server runs without any errors related to the content collection.
2.  The `projects` collection schema in `src/content/config.ts` exactly matches all fields from section 3.2 of the implementation spec.
3.  The `sample-project.md` file contains all required frontmatter fields and passes schema validation.

**Verification Steps:**

1.  Run `npm run dev` and ensure there are no terminal errors.
2.  Manually compare the fields in `src/content/config.ts` against the implementation spec.
3.  Introduce a deliberate error in the `sample-project.md` frontmatter (e.g., misspell a field name) and confirm that the Astro dev server throws a helpful error message. Correct the error afterward.

**What Not to Do:**

- Do not attempt to query or render this content in any component yet.
- Do not create more than one sample project file.
- Do not add any images yet.

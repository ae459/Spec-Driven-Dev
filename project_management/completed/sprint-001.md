### **Sprint 001: Project Setup & Foundation**

**Goal:** Initialize a new Astro project, integrate and configure Tailwind CSS, and establish the basic file structure and code formatting rules. This sprint lays the groundwork for all future development.

**Scope (In/Out):**
*   **In:** Project initialization, dependency installation, configuration file creation, empty layout/page creation.
*   **Out:** Building any visible components, defining content schemas, writing any content.

**Tasks:**
1.  Run `npm create astro@latest` in the terminal to initialize the project. Select the "Empty" template.
2.  Run `npx astro add tailwind` to add and configure Tailwind CSS.
3.  Run `npm install -D prettier prettier-plugin-astro prettier-plugin-tailwindcss` to add formatting tools.
4.  Create a `.prettierrc` file to define code style rules.
5.  Create the main layout file: `src/layouts/Layout.astro`.
6.  Create the main page file: `src/pages/index.astro`.
7.  Create empty placeholder files for all future components.

**Files to Touch:**
*   `package.json` (via npm)
*   `astro.config.mjs` (via astro add)
*   `tailwind.config.mjs` (new)
*   `.prettierrc` (new)
*   `src/layouts/Layout.astro` (new)
*   `src/pages/index.astro` (new)
*   `src/components/Header.astro` (new, empty)
*   `src/components/Hero.astro` (new, empty)
*   `src/components/Projects.astro` (new, empty)
*   `src/components/About.astro` (new, empty)
*   `src/components/Contact.astro` (new, empty)
*   `src/components/Footer.astro` (new, empty)

**Acceptance Criteria:**
1.  The project runs locally without errors using `npm run dev`.
2.  A `tailwind.config.mjs` file exists and is configured in `astro.config.mjs`.
3.  A `.prettierrc` file exists in the root directory.
4.  The `src/pages/index.astro` page loads in the browser, showing a blank page.

**Verification Steps:**
1.  Run `npm run dev` and check for a successful startup.
2.  Open the browser to the local development URL and confirm a blank page is visible.
3.  Verify the existence of all files listed under "Files to Touch".
4.  Run `npx prettier --check .` to confirm the formatter is working.

**What Not to Do:**
*   Do not add any HTML content to the layout or page files other than the basic boilerplate.
*   Do not implement any components.
*   Do not define the color palette or typography in `tailwind.config.mjs` yet.

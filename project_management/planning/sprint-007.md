### **Sprint 007: Deployment**

**Goal:** Deploy the finished portfolio to Netlify via a continuous deployment pipeline connected to GitHub.

**Scope (In/Out):**

- **In:** Creating a GitHub repository, connecting it to Netlify, and successfully deploying the site.
- **Out:** Purchasing a custom domain, setting up DNS.

**Tasks:**

1.  Create a new repository on GitHub.
2.  Initialize a Git repository locally, commit all files, and push to the new GitHub repository.
3.  Sign up for a Netlify account using GitHub.
4.  In Netlify, import the new GitHub repository.
5.  Configure the build settings (Astro should be auto-detected) and trigger the first deploy.

**Files to Touch:**

- `.git/` (via git init)
- `.gitignore` (new)

**Acceptance Criteria:**

1.  The project code is successfully pushed to a GitHub repository.
2.  The Netlify site is created and linked to the GitHub repository.
3.  The initial deploy succeeds, and the site is live on a `*.netlify.app` URL.
4.  A subsequent `git push` to the `main` branch automatically triggers a new deploy on Netlify.

**Verification Steps:**

1.  Visit the live Netlify URL and confirm the site is identical to the local version.
2.  Make a small, visible change locally (e.g., change one word in the Hero section).
3.  Commit and push the change to the `main` branch.
4.  Wait a few minutes, then check the Netlify deploy logs to see the new build.
5.  Refresh the live URL and confirm the small change is now visible.

**What Not to Do:**

- Do not add any more code changes after the final verification push.
- Do not configure any advanced Netlify features like environment variables or plugins.

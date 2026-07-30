# SG-WAM Project Page

Official project page for **SG-WAM: Self-Guided World Modeling in
Geometry-Aware Policy Space**.

## Local development

```bash
npm ci
npm run dev
```

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds a static export and
deploys it to GitHub Pages. It is intentionally set to manual dispatch while
the repository is being prepared privately.

When the project is ready to be public, open **Settings → Pages** in the GitHub
repository, select **GitHub Actions** as the source, and run the workflow.

The workflow reads the Pages base URL and base path automatically, so it works
for both `username.github.io` repositories and project sites hosted under
`username.github.io/repository`.

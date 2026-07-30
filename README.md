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
deploys it to GitHub Pages after every push to `main`.

Before the first deployment, open **Settings → Pages** in the GitHub repository
and select **GitHub Actions** as the source.

The workflow reads the Pages base URL and base path automatically, so it works
for both `username.github.io` repositories and project sites hosted under
`username.github.io/repository`.

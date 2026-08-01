# SG-WAM Project Page

Official project page for **SG-WAM: Self-Guided World Modeling in
Geometry-Aware Policy Space**.

Website:

https://sg-wam.github.io

## Local Development

```bash
npm ci
npm run dev
```

## GitHub Pages

This repository deploys through GitHub Actions using
`.github/workflows/deploy-pages.yml`.

In the GitHub repository, open **Settings -> Pages** and set **Source** to
**GitHub Actions**. The workflow builds the Next.js static export and publishes
the generated `out/` directory to GitHub Pages.

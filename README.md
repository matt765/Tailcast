# Tailcast

Dark themed website template built on AstroJS, designed for technological startup business.

## Tech stack:

Astro, React, Tailwind, Framer Motion

## Live link
[https://tailcast.vercel.app/](https://tailcast.vercel.app/)

##  Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── assets
│   │   ├── icons
│   │   ├── images
│   │   └── logos
│   ├── components
│   ├── layouts
│   ├──  pages
│   └── styles
└── package.json
```

##  How to run

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |

## How to deploy via GitHub pages

Follow the instructions about how to [Deploy your Astro Site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/#how-to-deploy).

If you want to use a custom domain make sure to consider

- creating a `.public/CNAME` file containing `sub.mydomain.com`,
- [About custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages),
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site),
- [Verifying your custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) and
- [Troubleshooting custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages).

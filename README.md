# iNative Docs

Public documentation site for **iNative** — local IBM i / ILE development environment.

Built with [Astro](https://astro.build) + [@astrojs/starlight](https://starlight.astro.build).
Content lives in `src/content/docs/` (Markdown/MDX, filesystem routing).

> The runtime source stays private. This repo holds the public contract:
> what works, what doesn't, and how to report IBM i differences.

## Develop

```sh
npm install
npm run dev     # http://localhost:4321
npm run build   # static output in dist/
npm run preview
```

## Contribute

Fixes, translations, examples and typos are welcome via pull request.
Behavior reports go to Issues using the IBM i difference template
(see Community → Report a problem).

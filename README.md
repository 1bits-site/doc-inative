# iNative Docs & Community Hub

Public documentation and community hub for **iNative** — local IBM i / ILE
development environment.

The iNative runtime source code is private. This repository contains the
public documentation, compatibility information, community resources, and
the issue tracker for reporting bugs, IBM i behavior differences, feature
requests, and reproducible compatibility cases.

A public repository is not public source code: this repo is fully open and
welcomes collaboration even though the runtime stays private.

Built with [Astro](https://astro.build) + [@astrojs/starlight](https://starlight.astro.build).
Content lives in `src/content/docs/` (Markdown/MDX, filesystem routing).

> The runtime source stays private. This repository contains the public
> documentation, compatibility information, community resources, and issue
> tracker for reporting bugs, IBM i behavior differences, feature requests,
> and reproducible compatibility cases.

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
(see Community → Report a problem). How to help without code access:
see [CONTRIBUTING.md](./CONTRIBUTING.md).

# mimic-css monorepo

This repository contains both the mimic-css CLI package and the documentation website.

## Projects

- `cli/` — mimic-css CLI source, tests, and npm publish target
- `docs/` — mimic-css documentation site and runnable examples

## Commands

### CLI (`cli/`)

```bash
cd cli
npm ci
npm test
npx tsc --noEmit
```

### Docs (`docs/`)

```bash
cd docs
npm ci
npm run dev
npm run build
```

## Publishing

The GitHub Actions workflow publishes from `cli/`.

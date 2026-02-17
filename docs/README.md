# mimic-css docs site

This folder contains the mimic-css documentation website and examples.

## What this project does

- Hosts the mimic-css docs pages.
- Includes runnable examples under `src/pages/Examples`.
- Generates and watches `mimic.css` during local development.

## Project structure

```text
docs/
├── public/                # static assets
├── src/
│   ├── components/        # docs UI/web components
│   ├── layouts/           # page layouts
│   └── pages/             # docs pages and examples
├── mimic.config.mjs       # mimic-css config for docs site
├── mimic.css              # generated CSS output
└── package.json
```

## Commands

Run from `docs/`:

| Command | Action |
| :-- | :-- |
| `npm ci` | Install docs dependencies |
| `npm run dev` | Start docs dev server and run mimic-css watcher |
| `npm run build` | Type-check and build the docs site |
| `npm run preview` | Preview the production build locally |

## Related folders

- `cli/` at repository root contains the mimic-css CLI package source and tests.

# Haphazard.dev

Developer-first homepage for Haphazard.dev: a static Astro site that showcases Corwin's projects, tools, extensions, and workflow experiments.

## Projects

Project content lives in [`src/data/projects.ts`](src/data/projects.ts). Update that file to add, remove, or edit project sections on the homepage.

Each project supports:

- `title`
- `category`
- `description`
- `highlights`
- `technologies`
- `links`

## Structure

```text
/
├── public/              # favicons and static assets
├── src/
│   ├── data/
│   │   └── projects.ts  # project metadata rendered on the homepage
│   ├── layouts/
│   │   └── Layout.astro # document shell, metadata, global styles
│   └── pages/
│       └── index.astro  # homepage content and page-level styles
├── astro.config.mjs
└── package.json
```

## Development

Install dependencies:

```sh
pnpm install
```

Start the local dev server:

```sh
pnpm dev
```

Build the production site:

```sh
pnpm build
```

Preview the production build locally:

```sh
pnpm preview
```

## Design notes

The site is intentionally minimal and dev-oriented:

- static Astro output
- no client-side JavaScript required for the core page
- terminal/editor-inspired visual language
- semantic, anchorable project sections
- visible focus states and skip navigation

## Updating project content

Edit `src/data/projects.ts`, then run:

```sh
pnpm build
```

to verify the site still builds before committing.

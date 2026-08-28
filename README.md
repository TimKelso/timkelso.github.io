# timkelso.github.io

Personal portfolio site — a single vertically snapping feed of projects,
each with a screenshot, a description that expands in place, and links to
its source and live build. Bookmarked projects persist in the browser and
can be jumped back to from any point in the feed.

Live at <https://timkelso.github.io>.

## Stack

| Concern    | Choice                                                 |
| ---------- | ------------------------------------------------------ |
| Framework  | React 19                                               |
| Build      | Vite 8                                                 |
| Styling    | Tailwind CSS 4, themed with CSS custom properties      |
| Components | Atomic Design — see [ARCHITECTURE.md](ARCHITECTURE.md) |
| Deploy     | GitHub Actions → GitHub Pages                          |

## Getting started

```bash
npm ci
npm run dev
```

## Scripts

| Script                 | Does                                           |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Vite dev server with HMR                       |
| `npm run build`        | Typecheck, then build to `dist/`               |
| `npm run preview`      | Serve the production build locally             |
| `npm run typecheck`    | `tsc` only, no build                           |
| `npm run lint`         | ESLint over the project                        |
| `npm run format`       | Rewrite files with Prettier                    |
| `npm run format:check` | Fail if anything is unformatted (what CI runs) |

## Project layout

```
src/
  components/     Atoms, molecules, organisms, templates, pages
  context/        React context, grouped by feature
  data/           Project content, typed by the Project interface
  lib/            Shared helpers (cn)
  styles/         Tailwind entry point, theme tokens, @font-face rules
public/assets/    Images, fonts and favicons served from the site root
scripts/          Build-time utilities not part of the app bundle
```

## Fonts

The webfonts in `public/assets/fonts/` are Latin subsets of the Noto
families, split by `unicode-range` into `latin` and `latin-ext` files.
Regenerate them with `scripts/subset-fonts.py` after downloading the
upstream variable TTFs from [Google Fonts](https://fonts.google.com):

```bash
pip install fonttools brotli
python3 scripts/subset-fonts.py /path/to/downloaded/ttfs
```

Keep the `unicode-range` declarations in `src/styles/fonts.css` in sync
with the ranges in that script.

## Contributing

Husky runs `lint-staged` on commit and lint, format and build checks on
push. CI runs the same checks on every pull request; merges to `main`
deploy automatically.

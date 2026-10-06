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
| `npm run icons`        | Regenerate favicons and app icons in `public/` |
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

## Brand

The TK monogram and its three palettes -- **Aqua**, **Ignis** and
**Natura**, each with a Lux (light) and Nox (dark) disc colour -- are
defined once, in `src/data/brand.ts`:

- `vite.config.ts` writes each palette into `index.html` as custom
  properties on `[data-realm]`, plus a small script that picks a realm at
  random for each visit (kept for the tab's session) and points the
  favicon at it. `src/styles/tailwind.css` maps those properties onto the
  light and dark theme tokens.
- `src/components/atoms/Logo.tsx` draws the monogram inline, coloured by
  the active realm.
- `npm run icons` (`scripts/generate-icons.ts`) redraws the SVG favicons,
  the ICO and the PNG app icons. Their output is committed; rerun it after
  changing the logo or a palette.

The realm colours the intro; the project pages are a neutral grey
(`#F5F5F5` / `#0C0C0C`), so screenshots are never seen against a
competing colour, and the realm shows there only as accents.
Each palette's `brand` colours are used as designed. Its `ink` colours are
the same three shifted in lightness just far enough to reach 4.5:1 as
small text, and are used only for that.

## Fonts

The webfonts in `public/assets/fonts/` are Latin subsets of Noto Sans,
Noto Sans Mono and [Dongle](https://fonts.google.com/specimen/Dongle) (the
display face, licensed under the SIL Open Font License -- see its
`OFL.txt`), split by `unicode-range` into `latin` and `latin-ext` files.
Regenerate them with `scripts/subset-fonts.py` after downloading the
upstream TTFs from [Google Fonts](https://fonts.google.com):

```bash
pip install fonttools brotli
python3 scripts/subset-fonts.py /path/to/downloaded/ttfs
```

Keep the `unicode-range` declarations in `src/styles/fonts.css` in sync
with the ranges in that script.

## Deployment

Every push to `main` that passes CI is published to GitHub Pages by
`.github/workflows/deploy.yml`. The build is uploaded as a Pages artifact
and deployed with `actions/deploy-pages`, so there is no `gh-pages`
branch: the deployed commit and its URL are recorded under the repository's
Deployments instead.

This requires **Settings → Pages → Build and deployment → Source** to be
set to **GitHub Actions**. The custom domain is configured on that same
page rather than by a `CNAME` file — an Actions deployment ignores one if
it is present.

## Contributing

Husky runs `lint-staged` on commit and lint, format and build checks on
push. CI runs the same checks on every pull request; merges to `main`
deploy automatically.

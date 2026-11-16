# dashboard-skeleton-compostrap

The frame of an administration composed of `sidebar-skeleton-compostrap`, `sidebar-menu-compostrap`, `sidebar-menu-2-compostrap` and `theme-switcher-compostrap`: the fixed navbar with a breadcrumb, dropdowns, content boxes, the nanobar and the colors of the page. CSS only. The package `compostrap` replaces it; this package takes its look without changing the markup.

## Layout

- `src/scss/themes/_theme.scss`: the page colors `--ds-body-bg`, `--ds-surface-bg`, `--ds-content-bg`, `--ds-nanobar-bg`.
- `src/scss/components/`: `_navbar.scss` (the breadcrumb separators in Font Awesome), `_dropdown.scss`, `_nanobar.scss`; `src/scss/layout/_content.scss`: `content-box`.
- `dist/dashboard.css` is versioned; `npm run build` writes it. `index.html` is the demo; it loads the other packages from `node_modules`, so it shows their published versions.

## How it works

- The page (`--ds-body-bg`) is a shade darker than the surfaces like in compostrap: the tertiary background mixed with 1.6 % black in the light theme, the body background mixed with 45 % black in the dark one. The backgrounds of the themes come from `sidebar-skeleton`. The pill of the current page in `sidebar-menu-custom` takes `--ds-body-bg`.
- No shadows: boxes and the sidebar part from the page by their color only.
- Font Awesome stays the icon font of the old packages.

## Commands

- `npm run dev`: the demo.
- `npm run build`: the CSS into `dist/`.

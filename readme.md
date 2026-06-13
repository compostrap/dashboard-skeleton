## Dashboard skeleton
Simple and fast dashboard skeleton template combining a responsive sidebar and a multi-level menu.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/compostrap/dashboard-skeleton/blob/master/license)
[![npm version](https://badge.fury.io/js/dashboard-skeleton-compostrap.svg)](https://badge.fury.io/js/dashboard-skeleton-compostrap)
[![Build status](https://github.com/compostrap/dashboard-skeleton/actions/workflows/build.yml/badge.svg)](https://github.com/compostrap/dashboard-skeleton/actions/workflows/build.yml)

## Installation
```bash
npm install dashboard-skeleton-compostrap
```

## Styles
Load the dashboard styles after the sidebar packages, so the dashboard layer can finish the composed layout:

```javascript
import 'sidebar-skeleton-compostrap/sidebar.css';
import 'sidebar-menu-compostrap/sidebar-menu.css';
import 'sidebar-menu-2-compostrap/sidebar-custom.css';
import 'dashboard-skeleton-compostrap/dashboard.css';
```

## JavaScript Initialization
The dashboard requires initialization of its core components. Add the following to your main JavaScript file:

```javascript
import { Sidebar, ThemeSwitcher } from 'sidebar-skeleton-compostrap';
import { SidebarMenuApp } from 'sidebar-menu-compostrap';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Sidebar structure
    Sidebar.init();

    // Initialize Multi-level Menu logic
    SidebarMenuApp.init();

    // Initialize global Bootstrap theme management
    ThemeSwitcher.init();
});
```

`ThemeSwitcher.init()` is provided by `sidebar-skeleton-compostrap` and switches Bootstrap's global `data-bs-theme`.

## Built on
- [Bootstrap 5](https://getbootstrap.com)
- [Font Awesome 7](https://fontawesome.com)
- [Perfect scrollbar](https://github.com/mdbootstrap/perfect-scrollbar)
- [Nanobar](https://github.com/jacoborus/nanobar)

## Demo
- [Live demo](https://compostrap.github.io/dashboard-skeleton)

## Components
The dashboard is built by integrating these core components:
- [Sidebar skeleton](https://github.com/compostrap/sidebar-skeleton) - The structural layout and theme management.
- [Sidebar menu](https://github.com/compostrap/sidebar-menu) - The multi-level navigation logic.

## Themes
The dashboard supports Bootstrap **Light** and **Dark** themes through `data-bs-theme`.

```html
<html lang="en" data-bs-theme="light">
```

You can switch the value manually, with your own JavaScript, or by using the theme switcher from `sidebar-skeleton-compostrap`. Bootstrap components such as inputs, tables, dropdowns, and cards follow the selected theme automatically.

The dashboard keeps Bootstrap's natural surface colors:

| Theme | Page background            | Sidebar and content |
|-------|----------------------------|---------------------|
| Light | `var(--bs-tertiary-bg)`    | `var(--bs-body-bg)` |
| Dark  | `var(--bs-dark-bg-subtle)` | `var(--bs-body-bg)` |

This keeps form controls and other Bootstrap components visually aligned with the content surface without extra overrides.

The dashboard is the composition layer: it changes the global Bootstrap theme for the whole page. Sidebar packages read the same `data-bs-theme`, so no additional sidebar theme attribute is needed.

## Theme switch labels
The theme switcher uses English labels by default. If your application handles translations in HTML templates, pass translated labels through `data-*` attributes:

```html
<button
	id="theme-toggle"
	type="button"
	aria-label="Toggle theme"
	data-theme-light-label="Switch to light"
	data-theme-dark-label="Switch to dark"
>
	Switch to light
</button>
```

The JavaScript reads those values and updates the button text when the theme changes. If the attributes are missing, the default English labels are used.

## Advanced Customization
For modern visual enhancements like tinted menu backgrounds, custom icon colors, and refined alignment, we highly recommend using the **[sidebar-menu-custom](https://github.com/compostrap/sidebar-menu-custom)** package.

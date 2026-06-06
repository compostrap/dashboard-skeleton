## Dashboard skeleton
Simple and fast dashboard skeleton template combining a responsive sidebar and a multi-level menu.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/compostrap/dashboard-skeleton-compostrap/blob/master/license)
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
import { Sidebar } from 'sidebar-skeleton-compostrap';
import { SidebarMenuApp } from 'sidebar-menu-compostrap';
import { DashboardSkeleton } from 'dashboard-skeleton-compostrap';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Sidebar structure
    Sidebar.init();

    // Initialize Multi-level Menu logic
    SidebarMenuApp.init();

    // Initialize Dashboard theme management
    DashboardSkeleton.init();
});
```

`DashboardSkeleton.init()` initializes dashboard theme management. It switches Bootstrap's global `data-bs-theme` and also synchronizes the sidebar by updating `data-sidebar-theme` on the sidebar element when it is present.

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

You can switch the value manually, with your own JavaScript, or by using the dashboard theme switcher. Bootstrap components such as inputs, tables, dropdowns, and cards follow the selected theme automatically.

When used with the sidebar skeleton, the sidebar still uses its own attribute for sidebar and menu colors:

```html
<nav class="sidebar" data-sidebar-theme="light" id="navigation">
```

The dashboard is the composition layer: it changes the global Bootstrap theme for the whole page and keeps the sidebar packages in sync. The sidebar packages remain independent and continue to work with only `data-sidebar-theme` when used outside a dashboard.

## Advanced Customization
For modern visual enhancements like tinted menu backgrounds, custom icon colors, and refined alignment, we highly recommend using the **[sidebar-menu-custom](https://github.com/compostrap/sidebar-menu-custom)** package.

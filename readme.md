## Dashboard skeleton
Simple and fast dashboard skeleton template combining a responsive sidebar and a multi-level menu.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/compostrap/dashboard-skeleton-compostrap/blob/master/license)
[![npm version](https://badge.fury.io/js/dashboard-skeleton-compostrap.svg)](https://badge.fury.io/js/dashboard-skeleton-compostrap)
[![Build status](https://github.com/compostrap/dashboard-skeleton/actions/workflows/build.yml/badge.svg)](https://github.com/compostrap/dashboard-skeleton/actions/workflows/build.yml)

## Installation
```bash
npm install dashboard-skeleton-compostrap
```

## JavaScript Initialization
The dashboard requires initialization of its core components. Add the following to your main JavaScript file:

```javascript
import { SidebarSkeleton } from 'sidebar-skeleton-compostrap';
import { SidebarMenuApp } from 'sidebar-menu-compostrap';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Sidebar structure and Theme management
    SidebarSkeleton.init();

    // Initialize Multi-level Menu logic
    SidebarMenuApp.init();
});
```

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

## Sidebar themes
The dashboard natively supports **Light** and **Dark** themes. The theme state is automatically persisted in `localStorage`.

| Theme | Attribute                    |
|-------|------------------------------|
| Light | `data-sidebar-theme="light"` |
| Dark  | `data-sidebar-theme="dark"`  |

## Advanced Customization
For modern visual enhancements like tinted menu backgrounds, custom icon colors, and refined alignment, we highly recommend using the **[sidebar-menu-custom](https://github.com/compostrap/sidebar-menu-custom)** package.

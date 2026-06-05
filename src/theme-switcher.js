/**
 * Dashboard theme switcher
 * Persistent Bootstrap theme selection using localStorage.
 */
export class DashboardThemeSwitcher {
	static init() {
		const toggle = document.getElementById("theme-toggle");
		const themeTarget = document.documentElement;

		if (!toggle) {
			return;
		}

		const navigation = document.getElementById("navigation");
		const storageKey = "dashboard-theme";
		const bootstrapThemeAttr = "data-bs-theme";
		const sidebarThemeAttr = "data-sidebar-theme";

		const currentTheme =
			localStorage.getItem(storageKey) ||
			themeTarget.getAttribute(bootstrapThemeAttr) ||
			navigation?.getAttribute(sidebarThemeAttr) ||
			"light";

		this._apply(themeTarget, navigation, currentTheme);
		this._render(toggle, currentTheme);

		toggle.addEventListener("click", (event) => {
			event.preventDefault();

			const nextTheme =
				themeTarget.getAttribute(bootstrapThemeAttr) === "light"
					? "dark"
					: "light";

			this._apply(themeTarget, navigation, nextTheme);
			localStorage.setItem(storageKey, nextTheme);
			this._render(toggle, nextTheme);
		});
	}

	static _apply(themeTarget, navigation, theme) {
		themeTarget.setAttribute("data-bs-theme", theme);
		navigation?.setAttribute("data-sidebar-theme", theme);
	}

	static _render(toggle, theme) {
		toggle.innerText =
			theme === "dark"
				? "Switch to light"
				: "Switch to dark";
	}
}

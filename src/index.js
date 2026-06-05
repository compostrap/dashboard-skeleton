import "./scss/dashboard.scss";
import { DashboardThemeSwitcher } from "./theme-switcher.js";

export class DashboardSkeleton {
	static init() {
		DashboardThemeSwitcher.init();
	}
}

export { DashboardThemeSwitcher };

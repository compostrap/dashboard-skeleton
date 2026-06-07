class c {
  static init() {
    const t = document.getElementById("theme-toggle"), e = document.documentElement;
    if (!t)
      return;
    const a = document.getElementById("navigation"), i = "dashboard-theme", s = "data-bs-theme", n = localStorage.getItem(i) || e.getAttribute(s) || a?.getAttribute("data-sidebar-theme") || "light";
    this._apply(e, a, n), this._render(t, n), t.addEventListener("click", (h) => {
      h.preventDefault();
      const r = e.getAttribute(s) === "light" ? "dark" : "light";
      this._apply(e, a, r), localStorage.setItem(i, r), this._render(t, r);
    });
  }
  static _apply(t, e, a) {
    t.setAttribute("data-bs-theme", a), e?.setAttribute("data-sidebar-theme", a);
  }
  static _render(t, e) {
    t.innerText = e === "dark" ? t.dataset.themeLightLabel || "Switch to light" : t.dataset.themeDarkLabel || "Switch to dark";
  }
}
export {
  c as DashboardThemeSwitcher
};

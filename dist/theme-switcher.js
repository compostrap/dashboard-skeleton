class c {
  static init() {
    const t = document.getElementById("theme-toggle"), e = document.documentElement;
    if (!t)
      return;
    const a = document.getElementById("navigation"), i = "dashboard-theme", n = "data-bs-theme", s = localStorage.getItem(i) || e.getAttribute(n) || a?.getAttribute("data-sidebar-theme") || "light";
    this._apply(e, a, s), this._render(t, s), t.addEventListener("click", (o) => {
      o.preventDefault();
      const r = e.getAttribute(n) === "light" ? "dark" : "light";
      this._apply(e, a, r), localStorage.setItem(i, r), this._render(t, r);
    });
  }
  static _apply(t, e, a) {
    t.setAttribute("data-bs-theme", a), e?.setAttribute("data-sidebar-theme", a);
  }
  static _render(t, e) {
    t.innerText = e === "dark" ? "Switch to light" : "Switch to dark";
  }
}
export {
  c as DashboardThemeSwitcher
};

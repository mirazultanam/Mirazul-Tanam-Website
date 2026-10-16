// Shared page chrome: theme palette, footer year, contextual brand link.
const THEMES = ["default", "purple", "green", "dark"];
function applyTheme(theme) {
  if (!THEMES.includes(theme)) theme = "default";
  document.body.dataset.theme = theme;
  document
    .querySelectorAll("button[data-theme]")
    .forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.theme === theme)),
    );
}
document.querySelectorAll("button[data-theme]").forEach((b) =>
  b.addEventListener("click", (e) => {
    applyTheme(b.dataset.theme);
    try {
      localStorage.setItem("portfolio-theme", b.dataset.theme);
    } catch {}
    if (e.detail) b.blur();
  }),
);
applyTheme(document.body.dataset.theme);
document.querySelector("#year").textContent = new Date().getFullYear();

// WebKit only applies :active when a touch listener exists.
document.addEventListener("touchstart", () => {}, { passive: true });

// Brand is contextual: over the hero/about intro it jumps to contact,
// elsewhere it returns to the top.
const brand = document.querySelector(".brand"),
  sentinel = document.querySelector(".hero, .about-page");
if (brand && sentinel) {
  const isHero = sentinel.classList.contains("hero"),
    atTop = () => {
      const rect = sentinel.getBoundingClientRect();
      return isHero ? rect.bottom > 0 : rect.top >= 0;
    };
  let queued = false;
  const sync = () => {
    queued = false;
    const label = atTop() ? "Scroll to contact" : "Back to top";
    brand.setAttribute("aria-label", label);
    brand.setAttribute("title", label);
  };
  brand.addEventListener("click", (e) => {
    e.preventDefault();
    atTop()
      ? document.querySelector("#contact").scrollIntoView()
      : scrollTo({ top: 0 });
  });
  addEventListener(
    "scroll",
    () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(sync);
      }
    },
    { passive: true },
  );
  sync();
}

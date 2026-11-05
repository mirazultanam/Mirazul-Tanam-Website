// Stretch the lettering as the contact panel emerges, then settle with a spring.
(() => {
  const footer = document.querySelector("#contact"),
    title = footer?.querySelector(".contact-title-wrap");
  if (!footer || !title) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let queued = false,
    popped = false;
  function update() {
    queued = false;
    if (reduced.matches) {
      title.style.transform = "none";
      footer.classList.remove("contact-pop");
      return;
    }
    const rect = footer.getBoundingClientRect(),
      h = innerHeight;
    const progress = Math.max(0, Math.min(1, (h - rect.top) / (h * 0.72)));
    title.style.transform = `scaleY(${0.24 + 0.76 * progress})`;
    if (progress >= 0.97 && !popped) {
      footer.classList.add("contact-pop");
      popped = true;
    } else if (progress === 0 && popped) {
      footer.classList.remove("contact-pop");
      popped = false;
    }
  }
  function schedule() {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }
  addEventListener("scroll", schedule, { passive: true });
  addEventListener("resize", schedule);
  reduced.addEventListener("change", schedule);
  update();
})();

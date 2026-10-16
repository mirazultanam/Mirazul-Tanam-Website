history.scrollRestoration = "manual";
scrollTo(0, 0);
const grid = document.querySelector("#projects"),
  modal = document.querySelector("dialog");
projects.forEach((p, i) => {
  const b = document.createElement("button");
  b.className = "project";
  b.dataset.category = p.category || "";
  const img = document.createElement("img");
  img.src = p.asset;
  img.alt = `${p.title} — ${p.category || "work"}`;
  img.loading = "lazy";
  const cover = document.createElement("div");
  cover.className = "cover";
  cover.append(img);
  b.append(cover);
  b.addEventListener("click", () => openProject(i));
  grid.append(b);
});
document.querySelectorAll("[data-filter]").forEach((b) =>
  b.addEventListener("click", () => {
    const clear = b.getAttribute("aria-pressed") === "true";
    document
      .querySelectorAll("[data-filter]")
      .forEach((x) =>
        x.setAttribute("aria-pressed", String(!clear && x === b)),
      );
    document
      .querySelectorAll(".project")
      .forEach(
        (p) =>
          (p.hidden =
            !clear &&
            p.dataset.category !== "" &&
            p.dataset.category !== b.dataset.filter),
      );
  }),
);
document
  .querySelector(".modal-close")
  .addEventListener("click", () => modal.close());
let videoIO = null;
modal.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  videoIO?.disconnect();
  document.querySelectorAll("#modal-gallery video").forEach((v) => {
    v.pause();
    v.currentTime = 0;
  });
  if (projectTrigger?.isConnected)
    projectTrigger.focus({ preventScroll: true });
});

// Tilted, wrapping featured-work carousel. No automatic motion while reading.
const carouselStage = document.querySelector("#carousel-stage");
let activeSlide = 0;
const featured = projects
  .map((p, i) => ({ p, i }))
  .filter((x) => x.p.featured)
  .sort((a, b) => (a.p.featuredRank ?? 1e9) - (b.p.featuredRank ?? 1e9));
const slides = featured.map(({ p, i }, n) => {
  const b = document.createElement("button");
  b.className = "slide";
  b.setAttribute(
    "aria-label",
    `${p.label || p.title}, ${n + 1} of ${featured.length}`,
  );
  const img = document.createElement("img");
  img.src = p.asset;
  img.alt = `${p.label || p.title} — ${p.category || "work"}`;
  img.loading = "lazy";
  const label = document.createElement("span");
  label.className = "slide-label";
  label.textContent = p.label || p.title;
  b.append(img, label);
  b.addEventListener("click", () => {
    if (n === activeSlide) {
      grid.children[i].click();
    } else {
      activeSlide = n;
      renderCarousel();
    }
  });
  carouselStage.append(b);
  return b;
});
document.querySelector(".featured").hidden = !featured.length;
function renderCarousel() {
  const n = slides.length;
  slides.forEach((s, i) => {
    const delta = (i - activeSlide + n) % n;
    const role =
      delta === 0
        ? "active"
        : delta === 1
          ? "next"
          : delta === n - 1
            ? "previous"
            : "";
    s.className = "slide " + role;
    s.tabIndex = role ? 0 : -1;
    s.setAttribute("aria-hidden", String(!role));
    if (role === "active") s.setAttribute("aria-current", "true");
    else s.removeAttribute("aria-current");
  });
  document.querySelector("#carousel-status").textContent =
    `${String(activeSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
}
function moveCarousel(step) {
  activeSlide = (activeSlide + step + slides.length) % slides.length;
  renderCarousel();
}
document.querySelector(".featured").addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    e.preventDefault();
    moveCarousel(e.key === "ArrowLeft" ? -1 : 1);
  }
});
let swipeStart = null,
  suppressClick = false;
carouselStage.addEventListener("pointerdown", (e) => {
  swipeStart = { x: e.clientX, y: e.clientY };
});
carouselStage.addEventListener("pointerup", (e) => {
  if (!swipeStart) return;
  const dx = e.clientX - swipeStart.x,
    dy = e.clientY - swipeStart.y;
  swipeStart = null;
  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
    suppressClick = true;
    moveCarousel(dx < 0 ? 1 : -1);
    setTimeout(() => (suppressClick = false), 100);
  }
});
carouselStage.addEventListener("pointercancel", () => (swipeStart = null));
carouselStage.addEventListener(
  "click",
  (e) => {
    if (suppressClick) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  },
  true,
);
carouselStage.addEventListener("dragstart", (e) => e.preventDefault());
renderCarousel();
const sizeStage = () => {
  stageQueued = false;
  if (!slides.length) return;
  carouselStage.style.height =
    Math.ceil(
      slides[0].offsetTop + Math.max(...slides.map((s) => s.offsetHeight)) + 12,
    ) + "px";
};
let stageQueued = false;
const scheduleStage = () => {
  if (!stageQueued) {
    stageQueued = true;
    requestAnimationFrame(sizeStage);
  }
};
sizeStage();
addEventListener("resize", scheduleStage);
document.fonts?.ready.then(sizeStage);

let projectTrigger = null;
function openProject(index) {
  const project = projects[index];
  projectTrigger = document.activeElement;
  document.querySelector("#modal-title").textContent = project.title;
  document.querySelector("#modal-category").textContent =
    project.category || "";
  const gallery = document.querySelector("#modal-gallery");
  gallery.replaceChildren();
  (project.images || [])
    .filter((item) => item && typeof item.src === "string" && item.src.trim())
    .forEach((item, i) => {
      const figure = document.createElement("figure");
      figure.className =
        "gallery-item " + (item.layout === "full" ? "gallery-wide" : "");
      let media;
      if (item.video) {
        media = document.createElement("video");
        media.src = item.src;
        media.muted = true;
        media.loop = true;
        media.playsInline = true;
        media.preload = "metadata";
        media.setAttribute("aria-label", `${project.title} — video ${i + 1}`);
      } else {
        media = document.createElement("img");
        media.src = item.src;
        media.alt = item.alt || project.title + " image " + (i + 1);
        media.loading = i < 2 ? "eager" : "lazy";
      }
      figure.append(media);
      if (item.caption) {
        const caption = document.createElement("figcaption");
        caption.textContent = item.caption;
        figure.append(caption);
      }
      gallery.append(figure);
    });
  document.body.classList.add("modal-open");
  modal.showModal();
  modal.scrollTop = 0;
  // Videos play only while visible, so off-screen ones stay at metadata.
  videoIO?.disconnect();
  videoIO = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const v = entry.target;
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      }
    },
    { root: modal },
  );
  gallery.querySelectorAll("video").forEach((v) => videoIO.observe(v));
}
document
  .querySelector(".modal-back")
  .addEventListener("click", () => modal.close());

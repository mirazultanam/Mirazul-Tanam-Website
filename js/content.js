// Fill the DOM from data/site.js and data/about.js. The containers these
// target stay empty in the HTML; each block is guarded by element presence.
// Wrapped in an IIFE: other page scripts declare some of the same names.
(() => {
  const brand = document.querySelector(".brand");
  if (brand) brand.textContent = site.brand.initials;

  const heroName = document.querySelector(".hero h1");
  if (heroName) {
    heroName.textContent = site.hero.name.first;
    const last = document.createElement("span");
    last.textContent = site.hero.name.last;
    heroName.append(last);
    document.querySelector(".intro").textContent = site.hero.tagline;
    const stickers = document.querySelector(".stickers");
    site.stickers.forEach(({ img, alt, href, label, rotation }) => {
      const a = document.createElement("a");
      a.className = "sticker";
      a.style.setProperty("--r", rotation);
      a.href = href;
      a.setAttribute("aria-label", label);
      const image = document.createElement("img");
      image.src = img;
      image.alt = alt;
      a.append(image);
      stickers.append(a);
    });
  }

  const footer = document.querySelector("#contact");
  if (footer) {
    footer.querySelector(".small").textContent = site.contact.line;
    footer.querySelector(".contact-title-wrap h2").textContent =
      site.contact.heading;
    footer.querySelector("p").textContent = site.contact.intro;
    const links = footer.querySelector(".contact-links");
    site.contact.links.forEach(({ label, url }) => {
      const a = document.createElement("a");
      a.href = url;
      a.textContent = label;
      if (!url.startsWith("mailto:")) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      links.append(a);
    });
    const year = document.createElement("span");
    year.id = "year";
    footer.querySelector(".copyright").append(
      "© ",
      year,
      ` ${site.contact.name}`,
    );
    footer.querySelector(".note").textContent = site.contact.note;
  }

  const palette = document.querySelector(".palette");
  site.themes.forEach(({ name, swatch, label }) => {
    const b = document.createElement("button");
    b.dataset.theme = name;
    b.style.setProperty("--swatch", swatch);
    b.setAttribute("aria-label", label);
    palette.append(b);
  });

  if (typeof aboutContent !== "undefined") {
    const experience = document.querySelector(".experience");
    aboutContent.bio.forEach((text, i) => {
      const p = document.createElement("p");
      p.className = "about-statement" + (i ? " secondary" : "");
      p.textContent = text;
      experience.before(p);
    });
    const list = experience.querySelector("ul");
    aboutContent.experience.forEach(({ role, org }) => {
      const li = document.createElement("li");
      li.className = "about-statement experience-entry";
      const roleSpan = document.createElement("span");
      roleSpan.className = "experience-role";
      roleSpan.textContent = role;
      const orgSpan = document.createElement("span");
      orgSpan.className = "experience-org";
      orgSpan.textContent = org;
      li.append(roleSpan, orgSpan);
      list.append(li);
    });
    const disciplines = document.querySelector(".disciplines");
    aboutContent.disciplines.forEach((d) => {
      const span = document.createElement("span");
      span.textContent = d;
      disciplines.append(span);
    });
  }
})();

# Mirazul Tanam — Portfolio

Static two-page portfolio (vanilla HTML/CSS/JS, no build step). Deployed to
GitHub Pages (`mirazultanam.com` via `CNAME`).

## Updating the site (no coding knowledge needed)

The whole site is a handful of text files. You can edit them in your browser
on GitHub and the live site updates on its own.

Where things live:

| File                                 | What's inside                                            |
| ------------------------------------ | -------------------------------------------------------- |
| `data/site.js`                       | Name on the front page, stickers, contact links, footer  |
| `data/projects.js`                   | Your artwork, one block per project                      |
| `data/about.js`                      | About page: bio, experience list, skill tags             |
| `assets/`                            | All pictures and videos                                  |

### How to change any text

1. Go to [github.com/mirazultanam/Mirazul-Tanam-Website](https://github.com/mirazultanam/Mirazul-Tanam-Website).
2. Open the `data` folder and click the file you need (see the table above).
3. Click the pencil icon at the top right of the file.
4. Find the text you want to change. Edit only what sits between the quotes `" "`.
5. Click **Commit changes** (green button, top right).
6. Wait a minute or two, then refresh [mirazultanam.com](https://mirazultanam.com).
   Don't see the change yet? Wait a few more minutes and refresh again.

### How to add a new project

1. Upload the picture first. Open the matching folder inside `assets`
   (for example `assets/illustration`), click **Add file → Upload files**,
   drop your image in, and commit.
2. Open `data/projects.js`, copy a block that looks like the kind of project
   you're adding, paste it where you want it in the list, and change the
   text between quotes to match your uploaded file name.

A project block looks like this:

```js
{
  title: "My new drawing",
  category: "Illustration",
  cover: "assets/illustration/my-new-drawing.webp",
  images: [{ src: "assets/illustration/my-new-drawing.webp", layout: "half" }],
},
```

`cover` is the small picture shown in the grid. `images` is what people see
when they click the project. For a video, use its `.mp4` file in `images`
and add `video: true`. To show a project in the top carousel, add
`featured: true` and a `featuredLabel: "..."` with the caption you want.

### The three rules that keep the site from breaking

1. Only change text between quotes.
2. Keep every comma, quote, and brace (`{ } [ ]`) in place, even the ones
   that look stray. They are part of the code.
3. Change one thing, check the site, then change the next.

### If something goes wrong

Nothing is lost. GitHub keeps every past version. Open the file on GitHub,
click **History**, find the last version that worked, and restore it, or
ask your developer to do it, it takes a minute.

Changing the site colors touches two files and is easy to get wrong, so
leave that one to your developer.

---

## Editing content (developer reference)

Everything editable lives in `data/` — plain JS files, loaded as globals
before the renderers in `js/content.js`.

| To change                         | Edit                             |
| --------------------------------- | -------------------------------- |
| Brand initials, hero name/tagline | `data/site.js` → `brand`, `hero` |
| Hero stickers                     | `data/site.js` → `stickers`      |
| Contact links, footer text        | `data/site.js` → `contact`       |
| Color themes (names + swatches)   | `data/site.js` → `themes`        |
| Portfolio works                   | `data/projects.js`               |
| Bio, experience, disciplines      | `data/about.js`                  |

Filter buttons, theme swatches, footers, and the featured carousel are all
generated from those files — never edit generated markup.

## Project entry schema (`data/projects.js`)

```js
{
  title: "Project name",            // required
  category: "Illustration",         // required — filter buttons derive from these
  cover: "assets/…/cover.webp",     // required — cover image (Animation: animated webp)
  images: [                         // required — modal gallery, in order
    {
      src: "assets/…/file.webp",    // required (or .mp4 with video: true)
      layout: "half",               // "half" (default) or "full" (spans modal width)
      video: true,                  // omit for images; mp4s play muted/looped
      alt: "…",                     // optional image alt (falls back to title + n)
      caption: "…",                 // optional figcaption
    },
  ],
  featured: true,                   // optional — show in the Featured work carousel
  featuredRank: 1,                  // optional — carousel order (lower = earlier)
  featuredLabel: "Carousel caption",        // optional — carousel slide label (falls back to title)
}
```

- Adding a work with a new `category` automatically adds its filter button.
- Keep at least one `featured: true` entry.
- Adding a **theme** needs two edits: an entry in `data/site.js` → `themes`
  and a `body[data-theme="name"] { --paper; --ink; --accent }` block in
  `styles.css`.

## Notes

- Page `<title>` / meta descriptions stay in the HTML files (SEO).
- The theme bootstrap is inline in both HTML files and must run before any
  script; its localStorage key (`portfolio-theme`) is repeated in the inline
  scripts and `js/shared.js` — change all three together.
- Local preview: any static server (e.g. `python -m http.server`), or open
  `index.html` directly — no fetches, so `file://` works. After editing data
  files, hard-refresh (Ctrl+F5) — browsers may serve cached scripts on a soft
  reload.

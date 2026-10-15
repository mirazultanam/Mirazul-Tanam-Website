MIRAZUL TANAM — WEBSITE SOURCE
Latest published version, 15 October 2026

GET STARTED
Extract this ZIP, then open index.html in a browser.
Keep the assets folder and all scripts beside the HTML files.
No installation or build step is needed.
To host it, upload these extracted files to your static web host.

FILES
index.html — Homepage and its CSS
about.html — About, experience, and its CSS
projects.js — Work titles, descriptions, cover images and modal image lists
app.js — Gallery modals, filters, carousel, and theme controls
about.js — About-page theme controls
reading-motion.js — Scroll-driven text color changes
contact-motion.js — Contact squash-and-stretch reveal
assets/ — Fonts and concept artwork

ADD YOUR IMAGES
1. Copy your image files into assets/.
2. Open projects.js in a text editor.
3. Find the relevant work and edit its images array, for example:

"images": [
  {"src": "assets/my-work-01.jpg", "alt": "Main artwork", "layout": "half"},
  {"src": "assets/my-work-02.jpg", "alt": "Detail", "layout": "half"},
  {"src": "assets/my-work-03.jpg", "alt": "Wide composition", "layout": "full"}
]

Each work can have a different number of images. Add or remove entries as needed.
Only entries with a non-empty src are shown; there are no numbered empty slots.
Use half for paired images on desktop, or full for an image across both columns.
A single image spans the full gallery width. Mobile galleries stack vertically.
An optional caption field adds text underneath an image.
Use correct filenames, including uppercase/lowercase and extensions.

The asset field controls the cover: e.g. asset: "ink" uses assets/ink.svg.
To use a JPG/PNG cover, change the cover image path in app.js where needed.
Replace the concept artwork with your own work and add your contact details
in index.html and about.html before publishing your final public portfolio.

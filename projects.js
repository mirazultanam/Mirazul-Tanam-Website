// Each gallery shows only the images listed here with a non-empty src.
// asset is the full cover path (also used in the Featured carousel).
// featured: true marks entries for the Featured work carousel (keep at least one).
// Use layout: "full" for a wide image. Empty entries are ignored.
const projects=[
  {
    "title": "Kurbani",
    "category": "Illustration",
    "asset": "assets/illustration/kurbani.webp",
    "description": "A herdsman and his bull crossing a field of drifting clouds — a quiet take on Qurbani, devotion and provision.",
    "featured": true,
    "images": [
      {
        "src": "assets/illustration/kurbani.webp",
        "alt": "A herdsman leading a horned bull across a grassy field against floating white clouds",
        "layout": "full"
      }
    ]
  },
  {
    "title": "Ferris Wheel",
    "category": "Illustration",
    "asset": "assets/illustration/ferris-wheel.webp",
    "description": "Two riders in a ferris cabin with a Klimt hanging between them — a study in looking at art instead of each other.",
    "featured": true,
    "images": [
      {
        "src": "assets/illustration/ferris-wheel.webp",
        "alt": "Two people in a round ferris wheel cabin with Klimt's The Kiss mounted between them",
        "layout": "half"
      }
    ]
  },
  {
    "title": "Rooftop at Dusk",
    "category": "Illustration",
    "asset": "assets/illustration/rooftop-dusk.webp",
    "description": "Two figures on a rooftop as the sky burns down over the city — painted from memory of Dhaka evenings.",
    "featured": true,
    "images": [
      {
        "src": "assets/illustration/rooftop-dusk.webp",
        "alt": "Two figures sitting on a city rooftop under an orange and blue dusk sky",
        "layout": "half"
      }
    ]
  },
  {
    "title": "The Boar",
    "category": "Illustration",
    "asset": "assets/illustration/the-boar.webp",
    "description": "Character study of a suited boar holding court over a blood-moon table — noir menace in a red three-piece.",
    "featured": true,
    "images": [
      {
        "src": "assets/illustration/the-boar.webp",
        "alt": "An anthropomorphic boar in a red suit sitting at a table with a moon and dripping blood",
        "layout": "half"
      }
    ]
  },
  {
    "title": "The Elder",
    "category": "Illustration",
    "asset": "assets/illustration/the-elder.webp",
    "description": "Ink and wash: a crowd reaches through floodwater toward a glowing elder — faith and desperation in grayscale.",
    "images": [
      {
        "src": "assets/illustration/the-elder.webp",
        "alt": "Grayscale ink illustration of a bearded elder glowing above a crowd reaching through storm waves",
        "layout": "full"
      }
    ]
  },
  {
    "title": "After All This Time",
    "category": "Illustration",
    "asset": "assets/illustration/lily-always.webp",
    "description": "A cinematic frame under the tree — 'After all this time?' 'Always.'",
    "images": [
      {
        "src": "assets/illustration/lily-always.webp",
        "alt": "Two figures facing each other under a large tree, subtitled 'Lily: After all this time? -Always'",
        "layout": "full"
      }
    ]
  },
  {
    "title": "Field Wanderer",
    "category": "Illustration",
    "asset": "assets/illustration/field-wanderer.webp",
    "description": "Poster piece: a traveller carries a scroll through a golden field under a sky that reads 不要な — unnecessary.",
    "images": [
      {
        "src": "assets/illustration/field-wanderer.webp",
        "alt": "A cloaked traveller carrying a scroll across a golden field beneath large Japanese characters",
        "layout": "half"
      }
    ]
  },
  {
    "title": "Behind the Fence",
    "category": "Illustration",
    "asset": "assets/illustration/behind-the-fence.webp",
    "description": "A lone figure raises the Bangladesh flag behind a spiked fence, a crowd pressed against the other side.",
    "images": [
      {
        "src": "assets/illustration/behind-the-fence.webp",
        "alt": "A silhouetted figure holding a Bangladesh flag behind an iron fence with onlookers",
        "layout": "half"
      }
    ]
  },
  {
    "title": "Straw Hat Samurai",
    "category": "Illustration",
    "asset": "assets/illustration/straw-hat-samurai.webp",
    "description": "A ronin at rest, sword across his shoulders and cup in hand — character design exercise.",
    "images": [
      {
        "src": "assets/illustration/straw-hat-samurai.webp",
        "alt": "A seated samurai in a straw hat with a sword across his shoulders",
        "layout": "half"
      }
    ]
  },
  {
    "title": "The Scout",
    "category": "Illustration",
    "asset": "assets/illustration/the-scout.webp",
    "description": "A sketched scout checks his phone on a stack of concrete blocks — modern explorer, loose pencil texture.",
    "images": [
      {
        "src": "assets/illustration/the-scout.webp",
        "alt": "A sketched adventurer with a large backpack checking a phone while perched on concrete blocks",
        "layout": "half"
      }
    ]
  },
  {
    "title": "Volunteer Camp",
    "category": "Cartoon",
    "asset": "assets/cartoon/volunteer-camp-cover.webp",
    "description": "Cartoon of volunteers cracking up at a camp banner while someone films — cut-out style with transparent background.",
    "images": [
      {
        "src": "assets/cartoon/volunteer-camp.webp",
        "alt": "Cartoon of two laughing volunteers in front of a Bengali banner while a phone films them",
        "layout": "half"
      }
    ]
  },
  {
    "title": "Safety of Helmet First",
    "category": "Cartoon",
    "asset": "assets/cartoon/helmet-first.webp",
    "description": "A cyclist grateful for his helmet, mid-lesson — one-panel cartoon on road safety.",
    "featured": true,
    "images": [
      {
        "src": "assets/cartoon/helmet-first.webp",
        "alt": "Cartoon panel of a bruised cyclist in a helmet with a speech bubble in Bengali",
        "layout": "half"
      }
    ]
  },
  {
    "title": "No Rent",
    "category": "Cartoon",
    "asset": "assets/cartoon/no-rent.webp",
    "description": "Four-panel comic: a couple, their phones, and two very opinionated pigs commenting from the bushes.",
    "images": [
      {
        "src": "assets/cartoon/no-rent.webp",
        "alt": "Four-panel comic of a couple exchanging a phone and two pigs with speech bubbles",
        "layout": "half"
      }
    ]
  },
  {
    "title": "SOS",
    "category": "Cartoon",
    "asset": "assets/cartoon/sos.webp",
    "description": "Comic panel: a bus with a temper, wide eyes, and someone standing in the wrong place at the wrong time.",
    "images": [
      {
        "src": "assets/cartoon/sos.webp",
        "alt": "Comic page with close-up eyes, a red bus with an angry face, and Bengali speech bubbles",
        "layout": "half"
      }
    ]
  },
  {
    "title": "Girl with a Flower",
    "category": "Caricature",
    "asset": "assets/caricature/girl-with-flower.webp",
    "description": "Pencil portrait on toned paper — a pink flower tucked behind her ear.",
    "images": [
      {
        "src": "assets/caricature/girl-with-flower.webp",
        "alt": "Pencil portrait of a woman in profile with a pink flower in her hair",
        "layout": "half"
      }
    ]
  },
  {
    "title": "Jim Carrey",
    "category": "Caricature",
    "asset": "assets/caricature/jim-carrey.webp",
    "description": "Graphite caricature — that grin, pushed just past the edge.",
    "featured": true,
    "images": [
      {
        "src": "assets/caricature/jim-carrey.webp",
        "alt": "Pencil caricature of Jim Carrey with an exaggerated grin",
        "layout": "half"
      }
    ]
  },
  {
    "title": "Sketchbook Portrait",
    "category": "Caricature",
    "asset": "assets/caricature/sketchbook-portrait.webp",
    "description": "A sketchbook page, binder clips and all — portrait study against floral paper.",
    "images": [
      {
        "src": "assets/caricature/sketchbook-portrait.webp",
        "alt": "Photo of a sketchbook page with a pencil portrait of a woman and binder clips",
        "layout": "half"
      }
    ]
  },
  {
    "title": "The Topknot",
    "category": "Caricature",
    "asset": "assets/caricature/the-topknot.webp",
    "description": "Ballpoint caricature — spiky topknot, stubble, and a pendant, drawn with cross-hatching.",
    "images": [
      {
        "src": "assets/caricature/the-topknot.webp",
        "alt": "Ballpoint caricature of a man with a spiky topknot and stubble wearing a necklace",
        "layout": "half"
      }
    ]
  },
  {
    "title": "The Actor",
    "category": "Caricature",
    "asset": "assets/caricature/the-actor.webp",
    "description": "Pencil caricature of a familiar face — slicked hair, stubble, and apendant stare.",
    "images": [
      {
        "src": "assets/caricature/the-actor.webp",
        "alt": "Pencil caricature of an actor with slicked-back hair and stubble",
        "layout": "half"
      }
    ]
  },
  {
    "title": "The Couple",
    "category": "Caricature",
    "asset": "assets/caricature/the-couple.webp",
    "description": "Big-head style couple portrait in pencil — drawn as a keepsake cut-out.",
    "images": [
      {
        "src": "assets/caricature/the-couple.webp",
        "alt": "Pencil couple caricature with oversized heads on a textured gray background",
        "layout": "half"
      }
    ]
  },
  {
    "title": "Concept art",
    "category": "Concept art",
    "asset": "assets/tower.svg",
    "description": "Imagined spaces, visual worlds, and early ideas. This concept cover is a placeholder for concept art projects.",
    "images": [
      {
        "src": "assets/tower.svg",
        "alt": "Concept art concept cover",
        "layout": "half"
      }
    ]
  },
  {
    "title": "Graphic Design",
    "category": "Graphic Design",
    "asset": "assets/type.svg",
    "description": "Typography, color, and visual communication. This concept cover is a placeholder for graphic design projects.",
    "images": [
      {
        "src": "assets/type.svg",
        "alt": "Graphic Design concept cover",
        "layout": "half"
      }
    ]
  },
  {
    "title": "Architecture",
    "category": "Architecture",
    "asset": "assets/space.svg",
    "description": "Spatial thinking through mass, light, and structure. This concept cover is a placeholder for architectural drawings and project documentation.",
    "images": [
      {
        "src": "assets/space.svg",
        "alt": "Architecture concept cover",
        "layout": "half"
      }
    ]
  }
];

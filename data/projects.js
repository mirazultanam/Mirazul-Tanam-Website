// Cover = cover (Animation covers are looping animated webp; video:true items are
// muted looping mp4 players). Subfolder batches became one project each.
// featured: true marks entries for the Featured work carousel (keep at least one).
// layout "full" spans the modal width.
const projects = [
  {
    title: "Abandoned",
    category: "Concept Arts",
    cover: "assets/concept-arts/abandoned.webp",
    images: [{ src: "assets/concept-arts/abandoned.webp", layout: "half" }],
  },
  {
    title: "Abandoned02",
    category: "Concept Arts",
    cover: "assets/concept-arts/huha.webp",
    images: [{ src: "assets/concept-arts/huha.webp", layout: "half" }],
  },
  {
    title: "Moti & Jong-Bahadur",
    category: "Concept Arts",
    cover: "assets/concept-arts/Mirazul_Tanam.webp",
    images: [{ src: "assets/concept-arts/Mirazul_Tanam.webp", layout: "half" }],
  },
  {
    title: "Boar",
    category: "Concept Arts",
    cover: "assets/concept-arts/boar.webp",
    images: [{ src: "assets/concept-arts/boar.webp", layout: "half" }],
  },
  {
    title: "Exploration",
    category: "Concept Arts",
    cover: "assets/concept-arts/exploration.webp",
    images: [{ src: "assets/concept-arts/exploration.webp", layout: "full" }],
  },
  {
    title: "Fixation",
    category: "Concept Arts",
    cover: "assets/concept-arts/fixation-img-1190.webp",
    images: [
      { src: "assets/concept-arts/fixation-img-1190.webp", layout: "full" },
      { src: "assets/concept-arts/fixation-img-4544.webp", layout: "full" },
    ],
  },
  {
    title: "Lost",
    category: "Concept Arts",
    cover: "assets/concept-arts/lost-main.webp",
    images: [
      { src: "assets/concept-arts/lost-main.webp", layout: "full" },
      { src: "assets/concept-arts/lost-1.webp", layout: "half" },
      { src: "assets/concept-arts/lost-2.webp", layout: "full" },
    ],
  },
  {
    title: "The Potential",
    category: "Concept Arts",
    cover: "assets/concept-arts/the-potential.webp",
    images: [{ src: "assets/concept-arts/the-potential.webp", layout: "full" }],
  },
  {
    title: "Always, Lily",
    category: "Illustration",
    cover: "assets/illustration/always-lily.webp",
    images: [{ src: "assets/illustration/always-lily.webp", layout: "full" }],
  },
  {
    title: "Bench for one, please_",
    category: "Illustration",
    cover: "assets/illustration/bench-for-one-please.webp",
    images: [
      { src: "assets/illustration/bench-for-one-please.webp", layout: "full" },
    ],
  },
  {
    title: "Ecdydid",
    category: "Illustration",
    cover: "assets/illustration/ecdydid.webp",
    images: [{ src: "assets/illustration/ecdydid.webp", layout: "full" }],
  },
  {
    title: "Female Martyrs of the July Uprising",
    category: "Illustration",
    cover: "assets/illustration/female-martyrs-of-the-july-uprising.webp",
    featured: true,
    featuredRank: 1,
    featuredLabel:
      "Commissioned by Ministry of Women & Children Affairs, Govt. of Bangladesh",
    images: [
      {
        src: "assets/illustration/female-martyrs-of-the-july-uprising.webp",
        layout: "full",
      },
    ],
  },
  {
    title: "Hey siri_",
    category: "Illustration",
    cover: "assets/illustration/hey-siri.webp",
    images: [{ src: "assets/illustration/hey-siri.webp", layout: "half" }],
  },
  {
    title: "Home of Homeless",
    category: "Illustration",
    cover: "assets/illustration/home-of-homeless.webp",
    images: [
      { src: "assets/illustration/home-of-homeless.webp", layout: "half" },
    ],
  },
  {
    title: "Illustration",
    category: "Illustration",
    cover: "assets/illustration/illustration.webp",
    images: [{ src: "assets/illustration/illustration.webp", layout: "half" }],
  },
  {
    title: "Indipendence",
    category: "Illustration",
    cover: "assets/illustration/indipendence.webp",
    images: [{ src: "assets/illustration/indipendence.webp", layout: "half" }],
  },
  {
    title: "MIST",
    category: "Illustration",
    cover: "assets/illustration/mist-rag-yello-grid-01.webp",
    images: [
      {
        src: "assets/illustration/mist-rag-yello-grid-01.webp",
        layout: "half",
      },
      {
        src: "assets/illustration/mist-img-20231207-110519.webp",
        layout: "full",
      },
    ],
  },
  {
    title: "Pretty Ferris Wheel",
    category: "Illustration",
    cover: "assets/illustration/pretty-ferris-wheel.webp",
    images: [
      { src: "assets/illustration/pretty-ferris-wheel.webp", layout: "full" },
    ],
  },
  {
    title: "Qurbani",
    category: "Illustration",
    cover: "assets/illustration/qurbani.webp",
    images: [{ src: "assets/illustration/qurbani.webp", layout: "full" }],
  },
  {
    title: "Roof and sunset",
    category: "Illustration",
    cover: "assets/illustration/roof-and-sunset.webp",
    images: [
      { src: "assets/illustration/roof-and-sunset.webp", layout: "half" },
    ],
  },
  {
    title: "The Unwanted",
    category: "Illustration",
    cover: "assets/illustration/the-unwanted.webp",
    images: [{ src: "assets/illustration/the-unwanted.webp", layout: "half" }],
  },
  {
    title: "Vashani-Parishad",
    category: "Illustration",
    cover: "assets/illustration/vashani-parishad-img-0285.webp",
    featured: true,
    featuredRank: 6,
    featuredLabel: "Worked For _Vashani Parishad_",
    images: [
      {
        src: "assets/illustration/vashani-parishad-img-0285.webp",
        layout: "full",
      },
      {
        src: "assets/illustration/vashani-parishad-6143465222871040174-121.webp",
        layout: "full",
      },
    ],
  },
  {
    title: "Automobile Business",
    category: "Graphic Design",
    cover: "assets/graphic-design/automobile-business-insight-1.webp",
    images: [
      {
        src: "assets/graphic-design/automobile-business-insight-1.webp",
        layout: "full",
      },
      {
        src: "assets/graphic-design/automobile-business-2.webp",
        layout: "full",
      },
      {
        src: "assets/graphic-design/automobile-business-army-01.webp",
        layout: "full",
      },
      {
        src: "assets/graphic-design/automobile-business-axio.webp",
        layout: "full",
      },
      {
        src: "assets/graphic-design/automobile-business-eid-al-fitr-2026.webp",
        layout: "half",
      },
      {
        src: "assets/graphic-design/automobile-business-honda.webp",
        layout: "half",
      },
      {
        src: "assets/graphic-design/automobile-business-insight-baridhara-mosque-copy.webp",
        layout: "half",
      },
      {
        src: "assets/graphic-design/automobile-business-insight.webp",
        layout: "full",
      },
    ],
  },
  {
    title: "Bihanga Puran",
    category: "Graphic Design",
    cover: "assets/graphic-design/bihanga-puran.webp",
    featured: true,
    featuredRank: 5,
    featuredLabel: "Featured in _Bihanga Puran - A Non-political Film About Birds",
    images: [
      { src: "assets/graphic-design/bihanga-puran.webp", layout: "half" },
    ],
  },
  {
    title: "Deep Cut",
    category: "Graphic Design",
    cover: "assets/graphic-design/deep-cut-byomkesh.webp",
    images: [
      { src: "assets/graphic-design/deep-cut-byomkesh.webp", layout: "full" },
      { src: "assets/graphic-design/deep-cut-free-132.webp", layout: "full" },
      { src: "assets/graphic-design/deep-cut-jawan-mdfs.webp", layout: "full" },
    ],
  },
  {
    title: "Dhaka nitro Cover 3-01",
    category: "Graphic Design",
    cover: "assets/graphic-design/dhaka-nitro-cover-3-01.webp",
    images: [
      {
        src: "assets/graphic-design/dhaka-nitro-cover-3-01.webp",
        layout: "full",
      },
    ],
  },
  {
    title: "independence day 2026 copy",
    category: "Graphic Design",
    cover: "assets/graphic-design/independence-day-2026-copy.webp",
    images: [
      {
        src: "assets/graphic-design/independence-day-2026-copy.webp",
        layout: "half",
      },
    ],
  },
  {
    title: "MISTDS",
    category: "Graphic Design",
    cover: "assets/graphic-design/mistds-pre-reg-form.webp",
    images: [
      { src: "assets/graphic-design/mistds-pre-reg-form.webp", layout: "half" },
      { src: "assets/graphic-design/mistds-workshop.webp", layout: "half" },
    ],
  },
  {
    title: "Mohiner ghora ghash khay 1",
    category: "Graphic Design",
    cover: "assets/graphic-design/mohiner-ghora-ghash-khay-1.webp",
    images: [
      {
        src: "assets/graphic-design/mohiner-ghora-ghash-khay-1.webp",
        layout: "full",
      },
    ],
  },
  {
    title: "Studio Dhaanch",
    category: "Graphic Design",
    cover: "assets/graphic-design/studio-dhaanch-3.webp",
    images: [
      { src: "assets/graphic-design/studio-dhaanch-3.webp", layout: "full" },
      {
        src: "assets/graphic-design/studio-dhaanch-exhibition-list-october.webp",
        layout: "half",
      },
    ],
  },
  {
    title: "Jim Carey",
    category: "Caricatures and Portraits",
    cover: "assets/caricatures-and-portraits/jim-carey.webp",
    images: [
      {
        src: "assets/caricatures-and-portraits/jim-carey.webp",
        layout: "half",
      },
    ],
  },
  {
    title: "leo dicaprio",
    category: "Caricatures and Portraits",
    cover: "assets/caricatures-and-portraits/leo-dicaprio.webp",
    images: [
      {
        src: "assets/caricatures-and-portraits/leo-dicaprio.webp",
        layout: "full",
      },
    ],
  },
  {
    title: "Oishy Sarjil",
    category: "Caricatures and Portraits",
    cover: "assets/caricatures-and-portraits/oishy-sarjil.webp",
    images: [
      {
        src: "assets/caricatures-and-portraits/oishy-sarjil.webp",
        layout: "half",
      },
    ],
  },
  {
    title: "Safwan and Konthy",
    category: "Caricatures and Portraits",
    cover: "assets/caricatures-and-portraits/safwan-and-konthy.webp",
    images: [
      {
        src: "assets/caricatures-and-portraits/safwan-and-konthy.webp",
        layout: "half",
      },
    ],
  },
  {
    title: "Sketchbook Portraits",
    category: "Caricatures and Portraits",
    cover:
      "assets/caricatures-and-portraits/sketchbook-portraits-1703076776788.webp",
    images: [
      {
        src: "assets/caricatures-and-portraits/sketchbook-portraits-1703076776788.webp",
        layout: "half",
      },
      {
        src: "assets/caricatures-and-portraits/sketchbook-portraits-img-cpr.webp",
        layout: "half",
      },
    ],
  },
  {
    title: "Equality 01_",
    category: "Cartoon",
    cover: "assets/cartoon/equality-01.webp",
    featured: true,
    featuredRank: 2,
    featuredLabel:
      "Exhibited and Featured in _Cartoons for Equality_ Prevent Violence against Women and Girls",
    images: [{ src: "assets/cartoon/equality-01.webp", layout: "full" }],
  },
  {
    title: "Equality 02",
    category: "Cartoon",
    cover: "assets/cartoon/equality-02.webp",
    images: [{ src: "assets/cartoon/equality-02.webp", layout: "full" }],
  },
  {
    title: "Extortion_",
    category: "Cartoon",
    cover: "assets/cartoon/extortion.webp",
    images: [{ src: "assets/cartoon/extortion.webp", layout: "full" }],
  },
  {
    title: "Moving Forward",
    category: "Cartoon",
    cover: "assets/cartoon/moving-forward.webp",
    images: [{ src: "assets/cartoon/moving-forward.webp", layout: "half" }],
  },
  {
    title: "Rosh+Alo",
    category: "Cartoon",
    cover: "assets/cartoon/rosh-alo.webp",
    featured: true,
    featuredRank: 4,
    featuredLabel: "Featured _Rosh+Alo_",
    images: [{ src: "assets/cartoon/rosh-alo.webp", layout: "half" }],
  },
  {
    title: "Safety of Helmet",
    category: "Cartoon",
    cover: "assets/cartoon/safety-of-helmet.webp",
    featured: true,
    featuredRank: 3,
    featuredLabel:
      "Exhibited and Featured in _Safe থাকি, Safe রাখি (Safe Thaki, Safe Rakhi)_ Exhibition",
    images: [{ src: "assets/cartoon/safety-of-helmet.webp", layout: "half" }],
  },
  {
    title: "Wrong place, Wrong time",
    category: "Cartoon",
    cover: "assets/cartoon/wrong-place-wrong-time.webp",
    images: [
      { src: "assets/cartoon/wrong-place-wrong-time.webp", layout: "half" },
    ],
  },
  {
    title: "Hospital at Surma",
    category: "Architectural Illustration",
    cover: "assets/architectural-illustration/hospital-at-surma-2.webp",
    images: [
      {
        src: "assets/architectural-illustration/hospital-at-surma-2.webp",
        layout: "full",
      },
      {
        src: "assets/architectural-illustration/hospital-at-surma-21.webp",
        layout: "full",
      },
      {
        src: "assets/architectural-illustration/hospital-at-surma-22.webp",
        layout: "full",
      },
    ],
  },
  {
    title: "Housing at sylhet",
    category: "Architectural Illustration",
    cover: "assets/architectural-illustration/housing-at-sylhet.webp",
    images: [
      {
        src: "assets/architectural-illustration/housing-at-sylhet.webp",
        layout: "full",
      },
    ],
  },
  {
    title: "The SM Barrack",
    category: "Architectural Illustration",
    cover: "assets/architectural-illustration/the-sm-barrack-31.webp",
    images: [
      {
        src: "assets/architectural-illustration/the-sm-barrack-31.webp",
        layout: "full",
      },
      {
        src: "assets/architectural-illustration/the-sm-barrack-abcd.webp",
        layout: "full",
      },
    ],
  },
  {
    title: "TNT officials_ Housing at Motijheel",
    category: "Architectural Illustration",
    cover:
      "assets/architectural-illustration/tnt-officials-housing-at-motijheel-1.webp",
    images: [
      {
        src: "assets/architectural-illustration/tnt-officials-housing-at-motijheel-1.webp",
        layout: "full",
      },
      {
        src: "assets/architectural-illustration/tnt-officials-housing-at-motijheel-11.webp",
        layout: "full",
      },
      {
        src: "assets/architectural-illustration/tnt-officials-housing-at-motijheel-12.webp",
        layout: "full",
      },
    ],
  },
  {
    title: "Commissioned Motion Graphics",
    category: "Animation",
    cover:
      "assets/animation/commissioned-motion-graphics-52-lacs-rav4-cover.webp",
    images: [
      {
        src: "assets/animation/commissioned-motion-graphics-52-lacs-rav4.mp4",
        video: true,
        layout: "half",
      },
      {
        src: "assets/animation/commissioned-motion-graphics-comp-1.mp4",
        video: true,
        layout: "half",
      },
      {
        src: "assets/animation/commissioned-motion-graphics-insight-12-sec-with-music.mp4",
        video: true,
        layout: "half",
      },
    ],
  },
  {
    title: "Frame by Frame",
    category: "Animation",
    cover: "assets/animation/frame-by-frame-cover.webp",
    images: [
      {
        src: "assets/animation/frame-by-frame.mp4",
        video: true,
        layout: "full",
      },
    ],
  },
];

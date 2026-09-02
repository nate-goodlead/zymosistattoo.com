import type { PortfolioWork } from "@/types/content";

export const portfolioWorks: PortfolioWork[] = [
  {
    id: "work-01",
    slug: "swallow-shoulder",
    title: null,
    category: "black-and-grey",
    description: null,
    imageSrc: "/work/swallow-shoulder.png",
    imageAlt:
      "Black-and-grey swallow tattoo across a left shoulder and upper arm, photographed outdoors at night.",
    width: 768,
    height: 1024,
    year: null,
    featured: true,
    sortOrder: 1,
    published: true,
    status: "unknown",
  },
  {
    id: "work-02",
    slug: "blooming-with-grace",
    title: "Blooming with grace",
    category: "script",
    description: null,
    imageSrc: "/work/blooming-with-grace.png",
    imageAlt:
      "Fine-line script tattoo reading Blooming with grace on an inner forearm.",
    width: 768,
    height: 1024,
    year: null,
    featured: true,
    sortOrder: 2,
    published: true,
    status: "unknown",
  },
  {
    id: "work-03",
    slug: "dragon-shoulder",
    title: null,
    category: "black-and-grey",
    description: null,
    imageSrc: "/work/dragon-shoulder.png",
    imageAlt:
      "Black-and-grey stippled dragon tattoo on a shoulder, with a single red tail fin.",
    width: 819,
    height: 1024,
    year: null,
    featured: true,
    sortOrder: 3,
    published: true,
    status: "fresh",
  },
  {
    id: "work-04",
    slug: "flower",
    title: null,
    category: "botanical",
    description: null,
    imageSrc: "/work/flower.png",
    imageAlt:
      "Bold black flower tattoo with two leaves and a stippled shadow, photographed while fresh.",
    width: 768,
    height: 1024,
    year: null,
    featured: true,
    sortOrder: 4,
    published: true,
    status: "fresh",
  },
  {
    id: "work-05",
    slug: "hand-geometry",
    title: null,
    category: "ornamental",
    description: null,
    imageSrc: "/work/hand-geometry.png",
    imageAlt:
      "Fresh geometric tattoo on the back of a hand: intersecting lines, a circle, and a line down the middle finger.",
    width: 880,
    height: 1024,
    year: null,
    featured: true,
    sortOrder: 5,
    published: true,
    status: "fresh",
  },
  {
    id: "work-06",
    slug: "lex-orandi",
    title: "Lex Orandi Lex Credendi",
    category: "script",
    description: null,
    imageSrc: "/work/lex-orandi.png",
    imageAlt:
      "Fresh two-line italic script tattoo on an inner wrist reading Lex Orandi Lex Credendi, with a tattoo cartridge in frame.",
    width: 768,
    height: 1024,
    year: null,
    featured: true,
    sortOrder: 6,
    published: true,
    status: "fresh",
  },
  {
    id: "work-07",
    slug: "finger-stars",
    title: null,
    category: "fine-line",
    description: null,
    imageSrc: "/work/finger-stars.png",
    imageAlt:
      "Four small fine-line star tattoos on the index, middle, and ring fingers.",
    width: 768,
    height: 1024,
    year: null,
    featured: false,
    sortOrder: 7,
    published: true,
    status: "unknown",
  },
];

export function featuredWorks(limit = 8): PortfolioWork[] {
  return portfolioWorks
    .filter((work) => work.published && work.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .slice(0, limit);
}

export function publishedWorks(): PortfolioWork[] {
  return portfolioWorks
    .filter((work) => work.published)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function workBySlug(slug: string): PortfolioWork | undefined {
  return portfolioWorks.find((work) => work.slug === slug && work.published);
}

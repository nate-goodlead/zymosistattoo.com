import type { AvailableDesign } from "@/types/content";
import { studioImages } from "@/content/site";

export const availableDesigns: AvailableDesign[] = [
  {
    id: "flash-01",
    slug: "swallow-shoulder",
    title: "Swallow",
    imageSrc: "/work/swallow-shoulder.png",
    imageAlt:
      "Black-and-grey swallow tattoo across a left shoulder and upper arm, photographed outdoors at night.",
    width: 768,
    height: 1024,
    status: "tattooed",
    sizeGuidance: "Large shoulder / upper arm",
    placementGuidance: "Shoulder, wrapping onto the arm",
    priceGuidance: null,
    notes: null,
    story:
      "A large black-and-grey swallow in flight, sitting on the shoulder with the tail carrying down the arm. Photographed finished, in Haarlem.",
    processImages: [],
    sortOrder: 1,
    published: true,
  },
  {
    id: "flash-02",
    slug: "blooming-with-grace",
    title: "Blooming with grace",
    imageSrc: "/work/blooming-with-grace.png",
    imageAlt:
      "Fine-line script tattoo reading Blooming with grace on an inner forearm.",
    width: 768,
    height: 1024,
    status: "tattooed",
    sizeGuidance: "Small script",
    placementGuidance: "Inner forearm",
    priceGuidance: null,
    notes: null,
    story: "Fine-line script: “Blooming with grace.”",
    processImages: [],
    sortOrder: 2,
    published: true,
  },
  {
    id: "flash-03",
    slug: "dragon-shoulder",
    title: "Dragon",
    imageSrc: "/work/dragon-shoulder.png",
    imageAlt:
      "Black-and-grey stippled dragon tattoo on a shoulder, with a single red tail fin.",
    width: 819,
    height: 1024,
    status: "tattooed",
    sizeGuidance: "Shoulder piece",
    placementGuidance: "Outer shoulder / deltoid",
    priceGuidance: null,
    notes: null,
    story:
      "Custom black-and-grey dragon, stippled, with one red tail fin. Worked at Canvas Tattoo.",
    processImages: [studioImages.session, studioImages.machine],
    sortOrder: 3,
    published: true,
  },
  {
    id: "flash-04",
    slug: "flower",
    title: "Flower",
    imageSrc: "/work/flower.png",
    imageAlt:
      "Bold black flower tattoo with two leaves and a stippled shadow, photographed while fresh.",
    width: 768,
    height: 1024,
    status: "available",
    sizeGuidance: "Small / medium",
    placementGuidance: "Flexible",
    priceGuidance: null,
    notes: null,
    story: "A bold five-petal flower with two leaves and a light stippled shadow.",
    processImages: [],
    sortOrder: 4,
    published: true,
  },
  {
    id: "flash-05",
    slug: "hand-geometry",
    title: "Hand geometry",
    imageSrc: "/work/hand-geometry.png",
    imageAlt:
      "Fresh geometric tattoo on the back of a hand: intersecting lines, a circle, and a line down the middle finger.",
    width: 880,
    height: 1024,
    status: "tattooed",
    sizeGuidance: "Hand",
    placementGuidance: "Back of the hand, into the fingers",
    priceGuidance: null,
    notes: null,
    story: "Sketch-like geometry: a circle, crossing lines, and a line down the middle finger.",
    processImages: [],
    sortOrder: 5,
    published: true,
  },
  {
    id: "flash-06",
    slug: "lex-orandi",
    title: "Lex Orandi",
    imageSrc: "/work/lex-orandi.png",
    imageAlt:
      "Fresh two-line italic script tattoo on an inner wrist reading Lex Orandi Lex Credendi, with a tattoo cartridge in frame.",
    width: 768,
    height: 1024,
    status: "tattooed",
    sizeGuidance: "Small script",
    placementGuidance: "Inner wrist",
    priceGuidance: null,
    notes: null,
    story: "Two-line italic script: “Lex Orandi / Lex Credendi.”",
    processImages: [studioImages.machine],
    sortOrder: 6,
    published: true,
  },
  {
    id: "flash-07",
    slug: "finger-stars",
    title: "Finger stars",
    imageSrc: "/work/finger-stars.png",
    imageAlt:
      "Four small fine-line star tattoos on the index, middle, and ring fingers.",
    width: 768,
    height: 1024,
    status: "available",
    sizeGuidance: "Tiny",
    placementGuidance: "Fingers",
    priceGuidance: null,
    notes: null,
    story: "Four small fine-line stars across the fingers.",
    processImages: [],
    sortOrder: 7,
    published: true,
  },
];

export function publishedAvailableDesigns(): AvailableDesign[] {
  return availableDesigns
    .filter((design) => design.published && design.status !== "hidden")
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function previewAvailableDesigns(limit = 8): AvailableDesign[] {
  return publishedAvailableDesigns().slice(0, limit);
}

export function availableBySlug(slug: string): AvailableDesign | undefined {
  return publishedAvailableDesigns().find((design) => design.slug === slug);
}

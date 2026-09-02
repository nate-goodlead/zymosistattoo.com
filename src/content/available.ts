import type { AvailableDesign } from "@/types/content";

export const availableDesigns: AvailableDesign[] = [
  {
    id: "flash-01",
    slug: "placeholder-flash-01",
    title: "TODO_CONTENT",
    imageSrc: null,
    imageAlt: "TODO_CONTENT — original available-design drawing required",
    status: "available",
    sizeGuidance: "TODO_CONTENT",
    placementGuidance: "TODO_CONTENT",
    priceGuidance: null,
    notes: "Awaiting original flash sheet from the artist.",
    sortOrder: 1,
    published: true,
    contentFlag: "TODO_CONTENT",
  },
  {
    id: "flash-02",
    slug: "placeholder-flash-02",
    title: "TODO_CONTENT",
    imageSrc: null,
    imageAlt: "TODO_CONTENT — original available-design drawing required",
    status: "available",
    sizeGuidance: "TODO_CONTENT",
    placementGuidance: "TODO_CONTENT",
    priceGuidance: null,
    notes: null,
    sortOrder: 2,
    published: true,
    contentFlag: "TODO_CONTENT",
  },
  {
    id: "flash-03",
    slug: "placeholder-flash-03",
    title: "TODO_CONTENT",
    imageSrc: null,
    imageAlt: "TODO_CONTENT — original available-design drawing required",
    status: "reserved",
    sizeGuidance: "TODO_CONTENT",
    placementGuidance: "TODO_CONTENT",
    priceGuidance: null,
    notes: null,
    sortOrder: 3,
    published: true,
    contentFlag: "TODO_CONTENT",
  },
];

export function publishedAvailableDesigns(): AvailableDesign[] {
  return availableDesigns
    .filter((design) => design.published && design.status !== "hidden")
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function previewAvailableDesigns(limit = 3): AvailableDesign[] {
  return publishedAvailableDesigns()
    .filter((design) => design.status === "available")
    .slice(0, limit);
}

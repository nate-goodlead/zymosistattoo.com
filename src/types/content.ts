export type ContentFlag = "TODO_CONTENT";

export type WorkCategory =
  | "selected"
  | "fine-line"
  | "botanical"
  | "black-and-grey"
  | "script"
  | "ornamental"
  | "sketch";

export type WorkStatus = "fresh" | "healed" | "unknown";

export type PortfolioWork = {
  id: string;
  slug: string;
  title: string | null;
  category: WorkCategory;
  description: string | null;
  imageSrc: string | null;
  imageAlt: string;
  width: number;
  height: number;
  year: number | null;
  featured: boolean;
  sortOrder: number;
  published: boolean;
  status: WorkStatus;
  contentFlag?: ContentFlag;
};

export type AvailableDesignStatus =
  | "available"
  | "reserved"
  | "tattooed"
  | "hidden";

export type AvailableDesign = {
  id: string;
  slug: string;
  title: string | null;
  imageSrc: string | null;
  imageAlt: string;
  status: AvailableDesignStatus;
  sizeGuidance: string | null;
  placementGuidance: string | null;
  priceGuidance: string | null;
  notes: string | null;
  sortOrder: number;
  published: boolean;
  contentFlag?: ContentFlag;
};

export type ProcessStep = {
  index: string;
  title: string;
  copy: string;
  contentFlag?: ContentFlag;
};

export type SiteContent = {
  displayName: string;
  artistFirstName: string;
  locationLine: string;
  roleLine: string;
  instagramHandle: string;
  instagramUrl: string;
  email: string | null;
  statement: string;
  statementFlag: ContentFlag;
  aboutPreview: string;
  aboutPreviewFlag: ContentFlag;
  aboutBio: string;
  aboutBioFlag: ContentFlag;
  responseExpectation: string;
  responseExpectationFlag: ContentFlag;
};

import type { ProcessStep, SiteContent } from "@/types/content";

export const site: SiteContent = {
  displayName: "Zymosis Tattoo",
  artistFirstName: "Lisa",
  locationLine: "Haarlem, Netherlands",
  roleLine: "Independent tattoo artist",
  instagramHandle: "zymosistattoo",
  instagramUrl: "https://www.instagram.com/zymosistattoo/",
  email: null,
  statement: "Between sketch, gesture and structure.",
  statementFlag: "TODO_CONTENT",
  aboutPreview:
    "Lisa tattoos as a way of making art a small, lasting part of a body. Each project is shaped by thoughtful decisions, experimentation, and a commitment to something meaningful and unique.",
  aboutPreviewFlag: "TODO_CONTENT",
  aboutBio:
    "Hi hi — my name is Lisa. I think art is a big part of this world. If you want to make art a little part of your body, I want to help and provide a great experience of getting your tattoo. I have a pet snake named Noodles, an albino boa constrictor — if you want a snake tattoo, I will make the reference as accurate as possible.",
  aboutBioFlag: "TODO_CONTENT",
  responseExpectation: "Response window to be confirmed with the artist.",
  responseExpectationFlag: "TODO_CONTENT",
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Idea",
    copy: "You bring a feeling, a reference, or a fragment. We find the form.",
    contentFlag: "TODO_CONTENT",
  },
  {
    index: "02",
    title: "Direction",
    copy: "Placement, scale and drawing are decided before anything meets skin.",
    contentFlag: "TODO_CONTENT",
  },
  {
    index: "03",
    title: "Tattoo",
    copy: "The session is focused, paced, and made to last.",
    contentFlag: "TODO_CONTENT",
  },
];

export const navItems = [
  { href: "/work", label: "Work", index: "01" },
  { href: "/available", label: "Available", index: "02" },
  { href: "/about", label: "About", index: "03" },
  { href: "/book", label: "Book", index: "04" },
] as const;

export const studioImages = {
  session: {
    src: "/studio/session.png",
    alt: "Lisa tattooing a client’s shoulder in a dim studio, lit by a work lamp.",
    width: 768,
    height: 1024,
  },
  machine: {
    src: "/studio/machine.png",
    alt: "Close-up of gloved hands tattooing dark linear work on a forearm.",
    width: 880,
    height: 1024,
  },
} as const;

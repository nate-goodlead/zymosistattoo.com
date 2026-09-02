import type { ProcessStep, SiteContent } from "@/types/content";

export const site: SiteContent = {
  displayName: "Zymosis Tattoo",
  artistFirstName: "Lisa",
  studioName: "Canvas Tattoo",
  locationLine: "Canvas Tattoo, Haarlem",
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

export const howWeDoSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Get in touch",
    copy: "Share the idea. Write what you want, how large, and where it should sit — enough to start a conversation.",
  },
  {
    index: "02",
    title: "Online communication",
    copy: "We talk it through from there: direction, references, and whether it wants to be custom or an available design.",
  },
  {
    index: "03",
    title: "Consult, if needed",
    copy: "Come in for a consult when the project needs it — placement, scale, and how the piece will live on you.",
  },
  {
    index: "04",
    title: "Book the appointment",
    copy: "When the drawing and the date feel right, the session is booked. An inquiry is not a confirmed appointment.",
  },
  {
    index: "05",
    title: "Excited to work with you",
    copy: "That’s the start. The rest happens in the studio.",
  },
];

export const aftercareSections = [
  {
    title: "The first weeks",
    copy: "Keep the tattoo clean. No soaking, no sun, no picking. Follow the second-skin or bandage instructions you leave the studio with. If something feels wrong, get in touch instead of guessing.",
  },
  {
    title: "Second skin",
    copy: "Second skin is a thin film that covers a fresh tattoo. Leave it on for as long as you are told when you leave. If it leaks, lifts, or irritates, take it off, wash gently, and continue with the open-heal steps you were given.",
  },
  {
    title: "Bandage, for bigger work",
    copy: "Larger pieces may go home in a bandage instead of second skin. Keep it clean and dry, and change it as instructed. Do not leave a wet bandage on the tattoo.",
  },
  {
    title: "Big projects",
    copy: "A larger project needs a minimum of 3–4 weeks between sessions so the skin can settle before the next pass.",
  },
  {
    title: "Touch-ups",
    copy: "A touch-up is free for the first 12 weeks after the session. After that window it is a new appointment.",
  },
] as const;

export const headerNavItems = [
  { href: "/work", label: "Work" },
  { href: "/available", label: "Available" },
  { href: "/book", label: "Book" },
] as const;

export const navItems = [
  { href: "/work", label: "Work", index: "01" },
  { href: "/available", label: "Available", index: "02" },
  { href: "/how-we-do", label: "How we do", index: "03" },
  { href: "/aftercare", label: "Aftercare", index: "04" },
  { href: "/about", label: "About", index: "05" },
  { href: "/book", label: "Book", index: "06" },
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

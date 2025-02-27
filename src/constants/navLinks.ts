import { routes } from "./routes";
import { services } from "./services";

const industries = [
  { title: "Telecommunications", link: "/industries/#telecommunications" },
  { title: "Media research", link: "/industries/#media-research" },
  { title: "Fintech", link: "/industries/#fintech" },
  { title: "E-commerce", link: "/industries/#e-commerce" },
  { title: "Cryptocurrency", link: "/industries/#cryptocurrency" },
  { title: "Healthcare", link: "/industries/#healthcare" },
];

export const navLinks = [
  { title: "Services", link: routes.Services, subLinks: services },
  { title: "Industries", link: routes.Industries, anchors: industries },
  { title: "Case studies", link: routes.CaseStudy },
  { title: "About", link: routes.About },
];

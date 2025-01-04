import { routes } from "./routes";
import { services } from "./services";

export const navLinks = [
  { text: "Services", link: routes.Services, subLinks: services },
  { text: "Industries", link: routes.Industries },
  { text: "Case study", link: routes.CaseStudy },
  { text: "About", link: routes.About },
];

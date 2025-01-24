import { images } from "../assets";

export interface HeroImage {
  image: string;
  retinaImage: string;
}

export interface Overview {
  client: string;
  technologies: string;
  description: string;
  image: string;
  retinaImage: string;
}

interface CaseStudyServiceType {
  name: string;
  description: string;
  link: string;
  image: string;
  retinaImage: string;
}

export interface CaseStudyServicesType {
  text?: string;
  servicesData: CaseStudyServiceType[];
}

export interface FunctionalModule {
  moduleName: string;
  details: string[];
}

export interface OrdinaryItem {
  title: string;
  description: string;
}

export interface Achievements {
  items: OrdinaryItem[];
  image: string;
  retinaImage: string;
}

export interface CaseStudy {
  id: string;
  link: string;
  name: string;
  heroImages: HeroImage[];
  overview: Overview;
  challenges: string[];
  services?: CaseStudyServicesType;
  functionalModules?: FunctionalModule[];
  technologies: OrdinaryItem[];
  achievements: Achievements;
  description: string;
  image: keyof typeof images.casesImages;
  retinaImage: keyof typeof images.casesImages;
  bgImage1x: keyof typeof images.casesImages;
  bgImage2x: keyof typeof images.casesImages;
}

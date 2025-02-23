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

export interface caseStudyImage {
  image: string;
  retinaImage: string;
}

interface caseStudyImages {
  main: caseStudyImage;
  vertical: caseStudyImage;
  generalPage: caseStudyImage;
  fullScreenBlock: caseStudyImage;
  hp: caseStudyImage;
  hpHorizontal: caseStudyImage;
}

export interface CaseStudy {
  id: string;
  link: string;
  name: string;
  overview: Overview;
  challenges: string[];
  services?: CaseStudyServicesType;
  functionalModules?: FunctionalModule[];
  technologies: OrdinaryItem[];
  achievements: OrdinaryItem[];
  description: string;
  images: caseStudyImages;
}

export type CaseStudyCardType = "general" | "vertical" | "horizontal";

export type CaseStudyTypeMap = {
  general: "generalPage";
  vertical: "hp";
  horizontal: "hpHorizontal";
};

export interface CaseStudyMenuItem {
  id: string;
  name: string;
}

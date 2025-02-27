export interface Industry {
  name: string;
  description: string[];
  technologies: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    description: string;
  };
  caseStudy: {
    title: string;
    description: string;
    link: string;
  };
  images: {
    image: string;
    retinaImage: string;
    icon?: string;
    retinaIcon?: string;
  };
}

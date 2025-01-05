import { images } from "../assets";

export interface CaseStudy {
  id: number;
  link: string;
  name: string;
  description: string;
  image: keyof typeof images.casesImages;
  retinaImage: keyof typeof images.casesImages;
  bgImage1x: keyof typeof images.casesImages;
  bgImage2x: keyof typeof images.casesImages;
}

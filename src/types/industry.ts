import { images } from "../assets";

export interface Industry {
  id: number;
  name: string;
  description: string;
  image: keyof typeof images.industriesImages;
  retinaImage: keyof typeof images.industriesImages;
  link: string;
}
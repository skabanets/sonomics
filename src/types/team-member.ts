import { images } from "../assets";

export interface TeamMember {
  name: string;
  role: string;
  image: keyof typeof images.teamImages;
  retinaImage: keyof typeof images.teamImages;
}

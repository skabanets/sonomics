import { images } from "../assets";

export interface TeamMember {
  name: string;
  role: string;
  images: {
    desk: (keyof typeof images.teamImages)[];
  };
}

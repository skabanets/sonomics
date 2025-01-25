import { images } from "../assets";
import { teamColors } from "../constants";
import type { TeamMember } from "../types";

interface TeamMemberCardProps {
  item: TeamMember;
  index: number;
}

export const TeamMemberCard = ({ item, index }: TeamMemberCardProps) => {
  const { name, role, image, retinaImage } = item;
  const { teamImages } = images;

  const img = teamImages[image as keyof typeof teamImages];
  const retinaImg = teamImages[retinaImage as keyof typeof teamImages];

  const beforeBgColor = `bg-${teamColors[index % teamColors.length]}`;

  return (
    <li className="w-[340px]">
      <img
        srcSet={`${img} 1x, ${retinaImg} 2x`}
        src={img}
        alt={item.name}
        width="340"
        height="340"
        loading="lazy"
        className="pointer-events-none h-[340px] rounded-t-[20px] object-cover"
      />
      <div
        className={`relative rounded-b-[20px] bg-darkBgColor px-[30px] pb-[30px] pt-[50px] before:absolute before:left-[30px] before:top-[30px] before:h-[2px] before:w-[30px] before:${beforeBgColor} `}
      >
        <h5 className="mb-[8px] text-whiteTextColor">{name}</h5>
        <p className="small-text text-secondaryLightTextColor">{role}</p>
      </div>
    </li>
  );
};

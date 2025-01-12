import { images } from "../assets";
import { teamColors } from "../constants";
import type { TeamMember } from "../types";

interface TeamMemberCardProps {
  item: TeamMember;
  index: number;
}

export const TeamMemberCard = ({ item, index }: TeamMemberCardProps) => {
  const {
    name,
    role,
    images: { desk },
  } = item;
  const { teamImages } = images;

  const beforeBgColor = `bg-${teamColors[index % teamColors.length]}`;

  return (
    <li className="w-[340px] last:mr-[80px]">
      <img
        srcSet={`${teamImages[desk[0]]} 1x, ${teamImages[desk[1]]} 2x`}
        src={teamImages[desk[0]]}
        alt={item.name}
        width="340"
        height="340"
        loading="lazy"
        className="h-[340px] rounded-t-[20px] object-cover"
      />
      <div
        className={`relative rounded-b-[20px] bg-darkBgColor px-[30px] pb-[30px] pt-[50px] before:absolute before:left-[30px] before:top-[30px] before:h-[2px] before:w-[30px] before:${beforeBgColor} before:content-['''']`}
      >
        <h5 className="mb-[8px] text-whiteTextColor">{name}</h5>
        <p className="small-text text-secondaryLightTextColor">{role}</p>
      </div>
    </li>
  );
};

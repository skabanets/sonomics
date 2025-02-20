import { Link } from "react-router-dom";

import { CustomTitle } from "../components";

import type { Industry } from "../types";
import { images } from "../assets";

interface IndustryCardProps {
  index: number;
  industry: Industry;
}

export const IndustryCard = ({ index, industry }: IndustryCardProps) => {
  const { industriesImages } = images;
  const { name, description, images: imgs } = industry;

  const icon = industriesImages[imgs.icon as keyof typeof industriesImages];
  const retinaIcon = industriesImages[imgs.retinaIcon as keyof typeof industriesImages];

  return (
    <Link
      to={industry.link}
      state={{ activeIndex: index + 2 }}
      className="flex h-[346px] w-full flex-col gap-[38px] p-[30px] md:w-[340px]"
    >
      <img
        srcSet={`${icon} 1x, ${retinaIcon} 2x`}
        src={icon}
        alt={name}
        width={70}
        height={70}
        loading="lazy"
      />
      <div className="flex flex-col gap-[8px]">
        <CustomTitle
          type="h5"
          wrapperStyles="flex items-center justify-between"
          iconColor="fill-whiteTextColor"
          titleStyles="text-whiteTextColor"
          text={name}
        />
        <p className="small-text line-clamp-5 text-secondaryLightTextColor opacity-[0.6]">
          {description[0]}
        </p>
      </div>
    </Link>
  );
};

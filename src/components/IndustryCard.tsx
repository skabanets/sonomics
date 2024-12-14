import { Link } from "react-router-dom";

import { CustomTitle, Icon } from "../components";

import { Industry } from "../types";

interface IndustryCardProps {
  industry: Industry;
}

export const IndustryCard = ({ industry }: IndustryCardProps) => {
  return (
    <Link to={industry.link} className="flex h-[317px] w-[340px] flex-col gap-[38px] p-[30px]">
      <Icon id={industry.icon} className="size-10 fill-accentYellowColor" />
      <div className="flex flex-col gap-[8px]">
        <CustomTitle
          type="h5"
          wrapperStyles="flex items-center justify-between"
          iconColor="fill-whiteTextColor"
          titleStyles="text-whiteTextColor"
          text={industry.name}
        />
        <p className="text-secondaryLightTextColor opacity-[0.6]">{industry.description}</p>
      </div>
    </Link>
  );
};

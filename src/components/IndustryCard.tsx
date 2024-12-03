import { Icon } from "../components";

import { Industry } from "../types";

interface IndustryCardProps {
  industry: Industry;
}

export const IndustryCard = ({ industry }: IndustryCardProps) => {
  return (
    <li className="flex h-[317px] w-[340px] flex-col gap-[38px] rounded-[20px] bg-darkBgColor p-[30px]">
      <Icon id={industry.icon} className="size-10 fill-accentYellowColor" />
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-center justify-between">
          <h5 className="leading-[27px] text-whiteTextColor">{industry.name}</h5>
          <Icon id="arrow" className="size-[15px] fill-whiteTextColor" />
        </div>
        <p className="text-secondaryLightTextColor opacity-[0.6]">{industry.description}</p>
      </div>
    </li>
  );
};

import { Link } from "react-router-dom";

import { CustomTitle } from "../components";

import { Service } from "../types";

interface IServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: IServiceCardProps) => {
  const { link, cardTitle, features } = service;

  return (
    <Link
      to={link}
      className="border-darkBorderColor flex h-[436px] w-[390px] flex-col items-start gap-[20px] rounded-[10px] border border-solid bg-themeToggleBgColor p-[30px] transition hover:bg-primaryBgColor focus-visible:bg-primaryBgColor"
    >
      <h4>{cardTitle}</h4>
      <ul className="flex flex-1 flex-col gap-[10px]">
        {features.map((feature, index) => (
          <li
            key={index}
            className="relative pl-[16px] before:absolute before:left-0 before:top-[10px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-accentYellowColor"
          >
            {feature}
          </li>
        ))}
      </ul>
      <CustomTitle
        type="p"
        wrapperStyles="flex items-center gap-[10px] transition"
        titleStyles="text-accentRedColor big-text"
        iconColor="fill-accentRedColor"
        text="Discover more"
      />
    </Link>
  );
};

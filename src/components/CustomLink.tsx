import { Link } from "react-router-dom";

import { Icon } from "../components";

interface CustomLinkProps {
  link?: string;
  text?: string;
  layout?: "gap" | "justify-between";
  textColor?: string;
  iconColor?: string;
  padding?: string;
}

export const CustomLink = ({
  link = "/",
  layout = "gap",
  text = "View all",
  textColor = "text-accentRedColor",
  iconColor = "fill-accentRedColor",
  padding,
}: CustomLinkProps) => {
  return (
    <Link
      to={link}
      className={`flex items-center text-[20px] font-extrabold leading-[30px] ${textColor} ${layout === "gap" ? "gap-[10px]" : "justify-between"} ${padding}`}
    >
      {text}
      <Icon id="arrow" className={`size-[15px] ${iconColor}`} />
    </Link>
  );
};

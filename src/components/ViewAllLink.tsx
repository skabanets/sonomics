import { Link } from "react-router-dom";

import { Icon } from "../components";

interface ViewAllLinkProps {
  link: string;
  textColor?: string;
  iconColor?: string;
}

export const ViewAllLink = ({
  link,
  textColor = "text-accentRedColor",
  iconColor = "fill-accentRedColor",
}: ViewAllLinkProps) => {
  return (
    <Link
      to={link}
      className={`flex items-center gap-2.5 text-[20px] font-extrabold leading-[30px] ${textColor}`}
    >
      View all
      <Icon id="arrow" className={`size-[15px] ${iconColor}`} />
    </Link>
  );
};

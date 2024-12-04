import { Link } from "react-router-dom";

import { Icon } from "../components";

import { routes } from "../constants";

interface LogoProps {
  applyThemeColor?: boolean;
  className?: string;
}

export const Logo = ({ applyThemeColor, className = "" }: LogoProps) => {
  return (
    <Link to={routes.Home} className="flex items-center gap-4">
      <Icon id="logo-icon" className="h-[40px] w-[34px]" />
      <Icon
        id="logo-name"
        className={`h-[17px] w-[120px] transition ${applyThemeColor ? "fill-mainTextColor" : ""} ${className}`}
      />
    </Link>
  );
};
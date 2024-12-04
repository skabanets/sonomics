import { NavLink } from "react-router-dom";

import { navLinks } from "../constants";

interface NavMenuProps {
  className: string;
}

export const NavMenu = ({ className }: NavMenuProps) => {
  return (
    <ul className={className}>
      {navLinks.map(({ text, link }, index) => (
        <li key={index}>
          {" "}
          <NavLink className="py-[5px]" to={link}>
            {text}
          </NavLink>{" "}
        </li>
      ))}
    </ul>
  );
};

import { NavLink } from "react-router-dom";

import { navLinks } from "../constants";

interface NavMenuProps {
  listClass: string;
  linkClass: string;
}

export const NavMenu = ({ listClass, linkClass }: NavMenuProps) => {
  return (
    <ul className={listClass}>
      {navLinks.map(({ text, link }, index) => (
        <li key={index}>
          {" "}
          <NavLink className={`py-[5px] ${linkClass}`} to={link}>
            {text}
          </NavLink>{" "}
        </li>
      ))}
    </ul>
  );
};

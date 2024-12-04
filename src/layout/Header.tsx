import { NavLink } from "react-router-dom";

import { Button, Logo, ThemeToggle } from "../components";

import { navLinks } from "../constants";

export const Header = () => {
  return (
    <header className="pt-[38px]">
      <div className="container flex items-center">
        <nav className="flex w-full justify-between">
          <Logo applyThemeColor />
          <div className="flex items-center gap-[50px]">
            <ThemeToggle />
            <ul className="flex gap-[50px] font-medium text-mainTextColor">
              {navLinks.map(({ text, link }, index) => (
                <li key={index}>
                  {" "}
                  <NavLink to={link}>{text}</NavLink>{" "}
                </li>
              ))}
            </ul>
            <Button label="Contact us" />
          </div>
        </nav>
      </div>
    </header>
  );
};

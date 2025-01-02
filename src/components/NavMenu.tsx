import { MouseEvent, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useTheme } from "../hooks";
import { navLinks, ThemeMode } from "../constants";

interface NavMenuProps {
  listClass: string;
  linkClass: string;
}

export const NavMenu = ({ listClass, linkClass }: NavMenuProps) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const navMenuRef = useRef<HTMLUListElement | null>(null);
  const subMenuRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const header = document.querySelector("header");

    if (header) {
      if (navLinks[openSubMenuIndex as number]?.subLinks && theme === ThemeMode.DARK) {
        header.style.backgroundColor = "var(--nav-menu-bg)";
      } else {
        header.style.backgroundColor = "";
      }
      subMenuRef.current?.focus();
    }

    return () => {
      if (header) {
        header.style.backgroundColor = "";
      }
    };
  }, [openSubMenuIndex, theme]);

  const handleMouseEnter = (index: number) => setOpenSubMenuIndex(index);

  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
    if (navMenuRef.current && !navMenuRef.current.contains(e.relatedTarget as Node)) {
      setOpenSubMenuIndex(null);
    }
  };

  return (
    <ul className={listClass} ref={navMenuRef} onMouseLeave={handleMouseLeave}>
      {navLinks.map(({ text, link, subLinks }, index) => (
        <li
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {" "}
          <NavLink className={`inline-block py-[2px] transition ${linkClass}`} to={link}>
            {text}
          </NavLink>{" "}
          <div
            className={`submenu ${subLinks && openSubMenuIndex === index ? "visible" : ""} bg-navMenuBgColor fixed left-0 right-0 top-[120px]`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`absolute left-0 top-[-42px] h-[42px] w-full bg-transparent`}
              style={{
                backgroundColor:
                  theme === ThemeMode.DARK && openSubMenuIndex === index
                    ? "var(--nav-menu-bg)"
                    : "",
              }}
            ></div>
            <div
              className="mx-auto flex max-w-[1280px] items-center justify-between border-t-[1px] border-t-mainTextColor px-0 py-[30px]"
              ref={subMenuRef}
              tabIndex={-1}
            >
              <Link
                to={link}
                className="view-link text-themeAccentColor before:h-[2px] before:bg-themeAccentColor"
              >
                <h2>{text}</h2>
              </Link>
              <ul className="relative flex h-[102px] w-[970px] flex-col flex-wrap gap-x-[30px] gap-y-[20px] before:absolute before:left-[-66px] before:top-1/2 before:block before:h-full before:w-[1px] before:-translate-y-1/2 before:bg-mainTextColor before:content-['''']">
                {subLinks?.map((subLink, subIndex) => (
                  <li key={subIndex} className="w-[220px]">
                    <NavLink
                      className={`label inline-block size-full text-mainTextColor ${linkClass}`}
                      to={subLink.link}
                    >
                      {subLink.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

import { MouseEvent, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { navLinks } from "../constants";
import { useTheme } from "../hooks";

interface NavMenuProps {
  listClass: string;
  linkClass: string;
  isHeader?: boolean;
}

export const NavMenu = ({ isHeader, listClass, linkClass }: NavMenuProps) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navMenuRef = useRef<HTMLUListElement | null>(null);
  const subMenuRef = useRef<HTMLDivElement | null>(null);

  const { theme } = useTheme();

  useEffect(() => {
    if (isHeader && openSubMenuIndex !== null && navLinks[openSubMenuIndex]?.subLinks) {
      subMenuRef.current?.focus();
    }
  }, [isHeader, openSubMenuIndex, theme]);

  useEffect(() => {
    if (!isHeader) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollPosition(window.scrollY);
          setOpenSubMenuIndex(null);
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isHeader]);

  useEffect(() => {
    setOpenSubMenuIndex(null);
  }, [scrollPosition]);

  const handleNavLinkClick = () => {
    setIsLinkClicked(true);
    setOpenSubMenuIndex(null);
  };

  const handleMouseEnter = (index: number) => {
    setOpenSubMenuIndex(index);
    setIsLinkClicked(false);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
    const relatedTarget = e.relatedTarget;
    if (
      !isLinkClicked &&
      navMenuRef.current &&
      relatedTarget instanceof Node &&
      !navMenuRef.current.contains(relatedTarget as Node)
    ) {
      setOpenSubMenuIndex(null);
    }
  };

  return (
    <>
      <ul className={listClass} ref={navMenuRef} onMouseLeave={handleMouseLeave}>
        {navLinks.map(({ title, link, subLinks }, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {" "}
            <NavLink
              to={link}
              className={`inline-block py-[2px] transition ${linkClass}`}
              onClick={handleNavLinkClick}
            >
              {title}
            </NavLink>{" "}
            {subLinks && isHeader && (
              <div
                className={`submenu ${openSubMenuIndex === index ? "visible" : ""} fixed left-0 right-0 bg-navMenuBgColor`}
                style={{
                  top: 90 - scrollPosition + "px",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`absolute left-0 top-[-29px] h-[30px] w-full bg-navMenuBgColor`}
                ></div>
                <div
                  className="relative mx-auto flex w-[calc(100vw-160px)] max-w-[1760px] items-center justify-between border-t-[1px] border-t-mainTextColor py-[30px]"
                  ref={subMenuRef}
                  tabIndex={-1}
                >
                  <Link
                    to={link}
                    className="view-link text-themeAccentColor before:h-[2px] before:bg-themeAccentColor"
                    reloadDocument
                  >
                    <h2>{title}</h2>
                  </Link>
                  <hr className="h-[100px] w-[1px] border-none bg-mainTextColor" />
                  <ul className="flex h-[102px] w-[970px] flex-col flex-wrap gap-x-[30px] gap-y-[20px]">
                    {subLinks.map((subLink, subIndex) => (
                      <li key={subIndex} className="w-[220px]">
                        <NavLink
                          className={`label inline-block size-full text-mainTextColor ${linkClass}`}
                          to={subLink.link}
                          reloadDocument
                        >
                          {subLink.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div
        className={`submenu ${navLinks[openSubMenuIndex as number]?.subLinks ? "visible" : ""} fixed left-0 top-0 z-[-10] h-[61px] w-full bg-navMenuBgColor`}
      ></div>
    </>
  );
};

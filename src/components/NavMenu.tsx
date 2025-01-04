import { MouseEvent, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { navLinks, ThemeMode } from "../constants";
import { useTheme } from "../hooks";

interface NavMenuProps {
  headerRef?: React.RefObject<HTMLDivElement>;
  listClass: string;
  linkClass: string;
}

export const NavMenu = ({ headerRef, listClass, linkClass }: NavMenuProps) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navMenuRef = useRef<HTMLUListElement | null>(null);
  const subMenuRef = useRef<HTMLDivElement | null>(null);

  const { theme } = useTheme();

  useEffect(() => {
    const headerElement = headerRef?.current;

    if (headerElement && openSubMenuIndex !== null && navLinks[openSubMenuIndex]?.subLinks) {
      if (theme === ThemeMode.DARK) {
        headerRef.current.style.backgroundColor = "var(--nav-menu-bg)";
      } else {
        headerRef.current.style.backgroundColor = "";
      }
      subMenuRef.current?.focus();
    }

    return () => {
      if (headerElement) {
        headerElement.style.backgroundColor = "";
      }
    };
  }, [headerRef, openSubMenuIndex, theme]);

  useEffect(() => {
    if (!headerRef) return;

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
  }, [headerRef]);

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
    <ul className={listClass} ref={navMenuRef} onMouseLeave={handleMouseLeave}>
      {navLinks.map(({ text, link, subLinks }, index) => (
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
            {text}
          </NavLink>{" "}
          <div
            className={`submenu ${subLinks && openSubMenuIndex === index ? "visible" : ""} fixed left-0 right-0 bg-navMenuBgColor`}
            style={{
              top: 120 - scrollPosition + "px",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`absolute left-0 top-[-42px] h-[42px] w-full bg-navMenuBgColor`}></div>
            <div
              className="mx-auto flex max-w-[1280px] items-center justify-between border-t-[1px] border-t-mainTextColor px-0 py-[30px]"
              ref={subMenuRef}
              tabIndex={-1}
            >
              <Link
                to={link}
                className="view-link text-themeAccentColor before:h-[2px] before:bg-themeAccentColor"
                reloadDocument
              >
                <h2>{text}</h2>
              </Link>
              <ul className="relative flex h-[102px] w-[970px] flex-col flex-wrap gap-x-[30px] gap-y-[20px] before:absolute before:left-[-66px] before:top-1/2 before:block before:h-full before:w-[1px] before:-translate-y-1/2 before:bg-mainTextColor before:content-['''']">
                {subLinks?.map((subLink, subIndex) => (
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
        </li>
      ))}
    </ul>
  );
};

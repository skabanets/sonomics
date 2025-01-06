import { Link } from "react-router-dom";

import { Logo, NavMenu, ScrollUpButton } from "../components";

import { socialLinks } from "../constants";

export const Footer = () => {
  return (
    <footer className="footer bg-blackBgColor pb-[40px] pt-[80px]">
      <div className="full-hd-container flex pb-[40px]">
        <div className="mr-auto w-[281px] space-y-[22px]">
          {" "}
          <Logo className="fill-whiteTextColor" />
          <h2 className="text-whiteTextColor">Let&#8217;s work together</h2>
        </div>
        <nav className="mr-[130px]">
          <NavMenu
            listClass="flex flex-col gap-[30px] text-whiteTextColor"
            linkClass="hover:text-accentYellowColor focus-visible:text-accentYellowColor"
          />
        </nav>
        <div>
          <address className="mb-[50px] not-italic">
            <p className="label mb-[15px] text-secondaryLightTextColor">Contact us</p>
            <ul className="bold-text flex flex-col gap-[15px] text-whiteTextColor">
              <li>
                <Link
                  to="tel:+12345678990"
                  className="transition hover:text-accentYellowColor focus-visible:text-accentYellowColor"
                >
                  +1 234 567-89-90
                </Link>
              </li>
              <li>
                <Link
                  to="mailto:info@sonomics.com"
                  className="transition hover:text-accentYellowColor focus-visible:text-accentYellowColor"
                >
                  info@sonomics.com
                </Link>
              </li>
            </ul>
          </address>
          <ul className="flex gap-[15px]">
            {socialLinks.map(({ link, text }, index) => (
              <li key={index}>
                <Link
                  to={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[40px] w-[112px] items-center justify-center rounded-[90px] border border-accentRedColor px-[25px] py-[10px] text-[12px] text-whiteTextColor transition hover:bg-accentRedColor focus-visible:bg-accentRedColor active:bg-accentRedColor"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="full-hd-container relative left-0 flex items-center justify-between pt-[20px] before:absolute before:top-[-20px] before:h-[1px] before:w-[calc(100vw-160px)] before:max-w-[1760px] before:bg-grey600Color before:content-['']">
        <p className="small-text text-white">&copy; 2024 Sonomics, Inc. All rights reserved</p>
        <div className="small-text flex items-center justify-end gap-[15px] text-whiteTextColor">
          <span className="group-hover:-translate-x-full group-hover:opacity-0"> To top </span>
          <ScrollUpButton />
        </div>
      </div>
    </footer>
  );
};

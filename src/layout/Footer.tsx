import { Link } from "react-router-dom";

import { Logo, NavMenu } from "../components";

import { socialLinks } from "../constants";

export const Footer = () => {
  return (
    <footer className="footer bg-blackBgColor pb-[20px] pt-[80px]">
      <div className="container flex pb-[40px]">
        <div className="mr-auto w-[281px] space-y-[22px]">
          {" "}
          <Logo className="fill-whiteTextColor" />
          <h2 className="text-whiteTextColor">Let&#8217;s work together</h2>
        </div>
        <nav className="mr-[130px]">
          <NavMenu
            listClass="flex flex-col gap-[30px] text-whiteTextColor"
            linkClass="hover:text-accentYellowColor focus-visible:text-accentYellowColor active:text-accentYellowColor"
          />
        </nav>
        <div>
          <address className="mb-[50px] not-italic">
            <p className="label mb-[15px] text-secondaryLightTextColor">Contact us</p>
            <ul className="bold-text flex flex-col gap-[15px] text-whiteTextColor">
              <li>
                <Link
                  to="tel:+12345678990"
                  className="transition hover:text-accentYellowColor focus-visible:text-accentYellowColor active:text-accentYellowColor"
                >
                  +1 234 567-89-90
                </Link>
              </li>
              <li>
                <Link
                  to="mailto:info@sonomics.com"
                  className="transition hover:text-accentYellowColor focus-visible:text-accentYellowColor active:text-accentYellowColor"
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
                  className="flex h-[35px] w-[112px] items-center justify-center rounded-[90px] border border-accentRedColor px-[25px] py-[10px] text-[12px] text-whiteTextColor transition hover:bg-accentRedColor focus-visible:bg-accentRedColor active:bg-accentRedColor"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container max-w-[1280px] border-t border-grey600Color pt-[30px] text-center">
        <p className="small-text text-white">&copy; 2024 Sonomics, Inc. All rights reserved</p>
      </div>
    </footer>
  );
};

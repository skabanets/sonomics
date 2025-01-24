import { Link } from "react-router-dom";

import { Logo, NavMenu, ScrollUpButton } from "../components";

import { socialLinks } from "../constants";

export const Footer = () => {
  return (
    <footer className="footer bg-blackBgColor pb-[40px] pt-[80px]">
      <div className="full-hd-container pb-[30px] md:flex md:pb-[40px]">
        <div className="mb-[30px] flex flex-wrap space-y-[20px] md:mb-0 md:mr-auto md:w-[281px] md:space-y-[22px]">
          {" "}
          <Logo className="fill-whiteTextColor" />
          <h2 className="text-[34px] leading-[48px] text-whiteTextColor">
            Let&#8217;s work together
          </h2>
        </div>
        <nav className="mr-[120px] sm-max:mr-0 md:mr-[130px]">
          <NavMenu
            listClass=" flex w-full flex-wrap h-[106px] gap-x-[70px] gap-y-[40px] mb-[30px] md:mb-0 md:h-auto flex-col md:gap-[30px] text-whiteTextColor"
            linkClass="md:w-auto hover:text-accentYellowColor focus-visible:text-accentYellowColor"
          />
        </nav>
        <div className="flex flex-col justify-between">
          <address className="mb-[40px] not-italic sm-max:mb-[30px] md:mb-0">
            <p className="label mb-[15px] text-secondaryLightTextColor">Contact us</p>
            <ul className="bold-text flex flex-row gap-[50px] text-whiteTextColor sm-max:flex-wrap sm-max:gap-[15px] md:flex-col md:gap-[15px]">
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
          <ul className="flex gap-[12px] md:gap-[15px]">
            {socialLinks.map(({ link, text }, index) => (
              <li key={index}>
                <Link
                  to={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[40px] w-[112px] items-center justify-center rounded-[90px] border border-accentRedColor px-[25px] py-[10px] text-[12px] text-whiteTextColor transition hover:bg-accentRedColor focus-visible:bg-accentRedColor active:bg-accentRedColor sm-max:w-[calc((100vw-58px)/3)] sm-max:px-[12px]"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="full-hd-container relative left-0 flex items-center justify-between pt-[30px] before:absolute before:top-0 before:h-[1px] before:w-[calc(100vw-30px)] before:max-w-[360px] before:bg-grey600Color before:content-[''] md:pt-[20px] md:before:w-[calc(100vw-160px)] lg:before:max-w-[1760px]">
        <p className="small-text w-[186px] text-white sm-max:text-[14px] md:w-auto">
          &copy; 2025 Sonomics, Inc. All&nbsp;rights reserved
        </p>
        <div className="small-text flex items-center justify-end gap-[15px] text-whiteTextColor sm-max:text-[14px]">
          <span> To top </span>
          <ScrollUpButton />
        </div>
      </div>
    </footer>
  );
};

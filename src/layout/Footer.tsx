import { Link } from "react-router-dom";

import { Logo, NavMenu } from "../components";

import { socialLinks } from "../constants";

export const Footer = () => {
  return (
    <footer className="bg-blackBgColor pb-[20px] pt-[80px]">
      <div className="container flex pb-[40px]">
        <div className="mr-[416px] w-[281px] space-y-[22px]">
          {" "}
          <Logo className="fill-whiteTextColor" />
          <h2 className="text-whiteTextColor">Let&#8217;s work together</h2>
        </div>
        <nav className="mr-[130px]">
          <NavMenu className="flex flex-col gap-[30px] text-whiteTextColor" />
        </nav>
        <div>
          <address className="mb-[50px] not-italic">
            <p className="label mb-[15px] text-secondaryLightTextColor">Contact us</p>
            <ul className="bold-text flex flex-col gap-[15px] text-whiteTextColor">
              <li>
                <Link to="tel:+12345678990">+1 234 567-89-90</Link>
              </li>
              <li>
                <Link to="mailto:info@sonomics.com">info@sonomics.com</Link>
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
                  className="flex h-[35px] w-[112px] items-center justify-center rounded-[90px] border border-accentRedColor px-[25px] py-[10px] text-[12px] text-whiteTextColor"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-grey600Color container max-w-[1280px] border-t pt-[30px] text-center">
        <p className="small-text text-white">© 2024 Sonomics, Inc. All rights reserved</p>
      </div>
    </footer>
  );
};

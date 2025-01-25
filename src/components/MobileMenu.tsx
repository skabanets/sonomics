import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, ContactForm, Icon, Logo, Modal, ThemeToggle } from "../components";

import { navLinks, routes } from "../constants";
import { useModal, useTheme } from "../hooks";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  const [isOpenModal, toggleModal, handleClickOnBackdrop] = useModal();

  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`scrollbar fixed right-0 top-0 z-[20] h-full w-full bg-blackBgColor p-[15px] pb-[60px] transition ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {isOpen && (
          <>
            <div className="sticky top-0 z-[5] mb-[35px] flex justify-between bg-blackBgColor before:absolute before:left-0 before:top-[-15px] before:h-[15px] before:w-full before:bg-blackBgColor">
              <Logo className="fill-whiteTextColor" />
              <div className="small-text flex items-center gap-[10px] text-whiteTextColor">
                Close
                <button
                  type="button"
                  className="group"
                  aria-label="Close menu"
                  onClick={toggleMenu}
                >
                  <Icon
                    id="close"
                    className="size-[20px] fill-whiteTextColor transition group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
                  />
                </button>
              </div>
            </div>
            <nav className="mb-[45px] border-y border-y-secondaryLightTextColor py-[45px]">
              <ul className="mb-[40px] flex flex-col gap-[40px]">
                <li key="home">
                  <Link
                    to={routes.Home}
                    className="inline-block w-fit text-whiteTextColor hover:text-accentYellowColor focus-visible:text-accentYellowColor"
                    onClick={toggleMenu}
                    reloadDocument
                  >
                    <h2 className="text-[34px] leading-[48px]">Homepage</h2>
                  </Link>
                </li>
                {navLinks.map(({ title, link, subLinks, anchors }, index) => (
                  <li key={index}>
                    <div className="flex flex-wrap justify-between">
                      <Link
                        to={link}
                        className="text-whiteTextColor hover:text-accentYellowColor focus-visible:text-accentYellowColor"
                        onClick={toggleMenu}
                      >
                        <h2 className="text-[34px] leading-[48px]"> {title}</h2>
                      </Link>
                      {(subLinks || anchors) && (
                        <>
                          <details name="sublinks" className="group peer">
                            <summary className="flex h-full w-full cursor-pointer items-center justify-between">
                              <Icon
                                id="arrow-left"
                                className="size-5 -rotate-90 fill-whiteTextColor transition group-open:rotate-90 group-hover:fill-accentYellowColor group-focus-visible:fill-accentYellowColor"
                              />
                            </summary>
                          </details>
                          <div className="small-text grid grid-rows-[0fr] text-whiteTextColor transition peer-open:grid-rows-[1fr]">
                            <div className="overflow-hidden">
                              <ul className="mt-[20px] flex flex-col gap-[20px]">
                                {[...(subLinks || []), ...(anchors || [])].map(
                                  ({ title, link }, index) => (
                                    <li key={index} className="w-[290px]">
                                      <Link
                                        to={link}
                                        className="transition hover:text-accentYellowColor focus-visible:text-accentYellowColor"
                                        onClick={toggleMenu}
                                      >
                                        {title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <Button label="Contact us" onClick={toggleModal} />
            </nav>

            <div className="small-text flex items-center gap-[20px] text-whiteTextColor">
              {" "}
              <ThemeToggle isMobileMenu />
              {theme[0].toUpperCase() + theme.slice(1)} theme
            </div>
          </>
        )}
      </div>
      {isOpenModal && (
        <Modal {...{ toggleModal, handleClickOnBackdrop }}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

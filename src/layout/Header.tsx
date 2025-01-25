import { useState } from "react";

import {
  Button,
  ContactForm,
  Icon,
  Logo,
  MobileMenu,
  Modal,
  NavMenu,
  ThemeToggle,
} from "../components";

import { useModal } from "../hooks";

export const Header = () => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => setIsOpenMenu((prev) => !prev);

  return (
    <>
      <header className="header pt-[15px] md:pt-[22px]">
        <div className="full-hd-container flex items-center">
          <nav className="relative z-10 flex w-full justify-between">
            <Logo applyThemeColor />
            <div className="hidden items-center gap-[50px] md:flex">
              <ThemeToggle />
              <NavMenu
                listClass="flex gap-[50px] font-medium text-mainTextColor"
                linkClass="hover:text-themeAccentColor focus-visible:text-themeAccentColor"
                isHeader
              />
              <Button label="Contact us" onClick={toggleModal} />
            </div>
            <div className="small-text flex items-center gap-[10px] md:hidden">
              Menu{" "}
              <button type="button" className="group" aria-label="Open menu" onClick={toggleMenu}>
                <Icon
                  id="menu"
                  className="size-[20px] fill-mainTextColor transition group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
                />
              </button>
            </div>
          </nav>
        </div>
      </header>
      {isOpen && (
        <Modal {...{ toggleModal, handleClickOnBackdrop }}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
      <MobileMenu isOpen={isOpenMenu} toggleMenu={toggleMenu} />
    </>
  );
};

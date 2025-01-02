import { useRef } from "react";
import { Button, ContactForm, Logo, Modal, NavMenu, ThemeToggle } from "../components";

import { useModal } from "../hooks";

export const Header = () => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();
  const headerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <header ref={headerRef} className="header pt-[40px] transition !duration-150">
        <div className="container flex items-center">
          <nav className="relative z-10 flex w-full justify-between">
            <Logo applyThemeColor />
            <div className="flex items-center gap-[50px]">
              <ThemeToggle />
              <NavMenu
                headerRef={headerRef}
                listClass="flex gap-[50px] font-medium text-mainTextColor"
                linkClass="hover:text-themeAccentColor focus-visible:text-themeAccentColor"
              />
              <Button label="Contact us" onClick={toggleModal} />
            </div>
          </nav>
        </div>
      </header>
      {isOpen && (
        <Modal {...{ toggleModal, handleClickOnBackdrop }}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

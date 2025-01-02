import { Button, ContactForm, Logo, Modal, NavMenu, ThemeToggle } from "../components";

import { useModal } from "../hooks";

export const Header = () => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  return (
    <>
      <header className="header pt-[40px] transition !duration-150">
        <div className="container flex items-center">
          <nav className="relative z-10 flex w-full justify-between">
            <Logo applyThemeColor />
            <div className="flex items-center gap-[50px]">
              <ThemeToggle />
              <NavMenu
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

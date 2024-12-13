import { Button, Logo, Modal, NavMenu, ThemeToggle } from "../components";

import { useModal } from "../hooks";

export const Header = () => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();
  console.log(isOpen);

  return (
    <>
      <header className="header pt-[40px]">
        <div className="container flex items-center">
          <nav className="flex w-full justify-between">
            <Logo applyThemeColor />
            <div className="flex items-center gap-[50px]">
              <ThemeToggle />
              <NavMenu
                listClass="flex gap-[50px] font-medium text-mainTextColor"
                linkClass="hover:text-navlinkActiveColor focus-visible:text-navlinkActiveColor active:text-navlinkActiveColor"
              />
              <Button label="Contact us" onClick={toggleModal} />
            </div>
          </nav>
        </div>
      </header>
      {isOpen && (
        <Modal toggleModal={toggleModal} handleClickOnBackdrop={handleClickOnBackdrop}>
          Modal Content
        </Modal>
      )}
    </>
  );
};

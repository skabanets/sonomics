import ReactDOM from "react-dom";

import { Icon } from "../components";

interface ModalProps {
  children: React.ReactNode;
  toggleModal: () => void;
  handleClickOnBackdrop: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const modalRoot = document.querySelector("#modal-root")!;

export const Modal = ({ children, toggleModal, handleClickOnBackdrop }: ModalProps) => {
  return ReactDOM.createPortal(
    <div
      className="bg-backdropBgColor fixed inset-0 z-50 flex items-center justify-center"
      onClick={(e) => handleClickOnBackdrop(e)}
    >
      <div className="bg-modalBgColor relative z-10 max-h-[95dvh] min-h-[300px] min-w-[300px] max-w-[330px] rounded-[20px] p-[50px]">
        <div className="absolute right-[20px] top-[20px] flex items-center gap-[10px]">
          Close
          <button type="button" className="small-text" onClick={toggleModal}>
            {" "}
            <Icon id="close" className="size-[20px] fill-darkBgColor" />
          </button>
        </div>

        {children}
      </div>
    </div>,
    modalRoot
  );
};

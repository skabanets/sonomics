import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { Icon } from "../components";

interface ModalProps {
  children: React.ReactNode;
  toggleModal: () => void;
  handleClickOnBackdrop: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const modalRoot = document.querySelector("#modal-root")!;

export const Modal = ({ children, toggleModal, handleClickOnBackdrop }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  return ReactDOM.createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-backdropBgColor"
      onClick={(e) => handleClickOnBackdrop(e)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="modal relative z-10 max-h-[95dvh] min-h-[300px] min-w-[300px] rounded-[20px] bg-secondaryBgColor p-[50px] outline-none"
      >
        <div className="small-text absolute right-[20px] top-[20px] flex items-center gap-[10px]">
          Close
          <button
            type="button"
            onClick={toggleModal}
            className="focus-visible:outline focus-visible:outline-mainTextColor"
            aria-label="Close modal"
          >
            <Icon id="close" className="size-[20px] fill-mainTextColor" />
          </button>
        </div>
        {children}
      </div>
    </motion.div>,
    modalRoot
  );
};

// Main Imports
import React, { createRef, useEffect } from "react";

// Component Imports
import Button from "@components/base/Button";
import CloseIcon from "@images/icons/closeDark.svg";

// Main Render
const Modal = ({ modal, setModal }) => {
  const modalRef = createRef();

  const closeModal = (e) => {
    modalRef.current.classList.remove("active");
    setModal(false);
  };

  // If user clicked outside of the modal
  const onSelectingOutsideModal = (event) => {
    if (modalRef.current == event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", onSelectingOutsideModal, true);
    return () => {
      document.removeEventListener("click", onSelectingOutsideModal, true);
    };
  }, [modalRef]);

  return (
    <div className={`modal ${modal && "active"}`} ref={modalRef}>
      <div className="modal__box">
        <div className="modal__box-header">
          <p className="text-title1">Leave this page?</p>
          <a className="modal__box-close" onClick={() => closeModal()}>
            <img src={CloseIcon}></img>
          </a>
        </div>
        <p className="text-uiBaseline">
          If you quit during this process, you will lose all the progress you
          have made.
        </p>
        <div className="modal__box-buttons">
          <Button className="modal__box-button" type="warning" toPage="/">
            Leave
          </Button>
          <Button className="modal__box-button" onClick={() => closeModal()}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// Main Imports
import React, { createRef } from "react";

// Component Imports
import Button from "@components/base/Button";
import CloseIcon from "@images/icons/closeDark.svg";

// Main Render
const Modal = ({ modal, setModal }) => {
  const myRef = createRef();

  const closeModal = (e) => {
    myRef.current.classList.remove("active");
    setModal(false);
  };

  return (
    <div className={`modal ${modal && "active"}`} ref={myRef}>
      {/* <div className="modal__overlay"></div> */}
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

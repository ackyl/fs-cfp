// Main Imports
import React, { createRef, useEffect, useContext } from "react";

// Component Imports
import Button from "@components/base/Button";
import CloseIcon from "@images/icons/closeDark.svg";

// Context Import
import { GlobalContext } from "@context/global-context";

// Main Render
const Modal = ({ modal, setModal, savePage, formState }) => {
  const { context, saveContext } = useContext(GlobalContext);
  const modalRef = createRef();

  // If modal is true, disable the scroll
  if (modal) {
    document.body.style.overflow = "hidden";
  }

  const closeModal = () => {
    modalRef.current.classList.remove("active");
    setModal(false);
    document.body.style.overflow = "auto";
  };

  const closeModalWhileSaving = () => {
    if (savePage) {
      if (formState) {
        if (savePage === 2) {
          context.kyc.contact = formState;
        } else if (savePage === 3) {
          context.kyc.personal = formState;
        }
      }
      context.kyc.savedUntilPage = savePage;
      saveContext({
        ...context,
      });
      console.log(context);
    }
    closeModal();
  };

  // If user clicked outside of the modal
  const onSelectingOutsideModal = (event) => {
    if (modalRef.current === event.target) {
      closeModal();
    }
  };

  // Click listener
  useEffect(() => {
    document.addEventListener("click", onSelectingOutsideModal, true);
    return () => {
      document.removeEventListener("click", onSelectingOutsideModal, true);
    };
  }, [modalRef]);

  return (
    <div className={`modal ${modal && "active"}`} ref={modalRef}>
      <div className="modal__box">
        {/* Header */}
        <div className="modal__box-header">
          <p className="text-title1">Leave application?</p>
          <a className="modal__box-close" onClick={() => closeModal()}>
            <img src={CloseIcon} alt=""></img>
          </a>
        </div>

        {/* Text */}
        <p className="text-uiBaseline">
          Your application will be saved as a draft for the next 3 months, and
          you can continue anytime in that period.
        </p>

        {/* Buttons */}
        <div className="modal__box-buttons">
          <Button
            className="modal__box-button"
            type="warning"
            toPage="/"
            onClick={() => closeModalWhileSaving()}
          >
            Yes, Leave
          </Button>
          <Button className="modal__box-button" onClick={() => closeModal()}>
            No, Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

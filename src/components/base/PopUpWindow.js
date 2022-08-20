// Main Imports
import React, { useRef } from "react";

// Component Import
import Navbar from "@components/patterns/NavBar";
import Button from "@components/base/Button";

// Main Render
const PopUpWindow = ({ isActive, onClose, children }) => {
  const windowRef = useRef();

  const showPopUp = () => {
    windowRef.current.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    windowRef.current.classList.remove("active");
    document.body.style.overflow = "auto";
    onClose();
  };

  if (isActive) {
    showPopUp();
  }

  return (
    <div className="popUpWindow" ref={windowRef}>
      <Navbar onClose={closePopup}>Current Address</Navbar>
      <div className="popUpWindow-content">
        {children}
        <Button onClick={closePopup}>Done</Button>
      </div>
    </div>
  );
};

export default PopUpWindow;

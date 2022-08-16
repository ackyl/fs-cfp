// Main Imports
import React, { useState, createRef } from "react";

// Component Imports
import Button from "@components/base/Button";

// Image Imports
import ChevronDown from "@images/icons/chevronDown.svg";
import CloseIcon from "@images/icons/closeDark.svg";

// Main Render
const Dropdown = () => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [selectedInput, setSelectedInput] = useState("");
  const popUpRef = createRef();

  const setState = (option) => {
    setSelectedRadio(option);
  };

  const onShowPopup = () => {
    popUpRef.current.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const onClosePopup = () => {
    popUpRef.current.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  const onDoneSelectingRadio = () => {
    if (selectedRadio) {
      setSelectedInput(selectedRadio);
      onClosePopup();
    }
  };

  const options = ["Single", "Married", "Widowed", "Divorced"];

  return (
    <div className="dropdown">
      {/* Input */}
      <div className="dropdown-input" onClick={() => onShowPopup()}>
        <input
          id="1"
          type="text"
          placeholder=" "
          value={selectedInput}
          readOnly={true}
        />
        <label>Marital Status</label>
        <img src={ChevronDown}></img>
      </div>

      {/* Pop Up */}
      <div className="dropdown-popup" ref={popUpRef}>
        <div className="dropdown-popup__content">
          {/* Title */}
          <div className="dropdown-popup__title">
            <p className="text-title2">Marital Status</p>
            <img src={CloseIcon} onClick={() => onClosePopup()}></img>
          </div>

          {/* Radio */}
          {options.map((option) => (
            <div
              className="dropdown-popup__radio"
              htmlFor={option}
              onClick={() => setState(option)}
              key={option}
            >
              <input
                type="radio"
                name="radio"
                id={option}
                value={option}
                checked={selectedRadio === option}
              />
              <label>{option}</label>
            </div>
          ))}

          {/* Button */}
          <div className="dropdown-popup__button">
            <Button type="secondary" onClick={() => onClosePopup()}>
              Cancel
            </Button>
            <Button
              type={!selectedRadio && "disabled"}
              onClick={() => onDoneSelectingRadio()}
            >
              Done
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

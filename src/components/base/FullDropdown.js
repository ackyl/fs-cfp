// Main Imports
import React, { createRef, useEffect, useRef, useState } from "react";

// Image Imports
import ChevronDown from "@images/icons/chevronDown.svg";

// Main Render
const FullDropdown = ({
  id,
  options,
  label,
  defaultValue,
  onDropdownSelected,
}) => {
  const [selectedOption, saveSelectedOption] = useState("");
  options = options ? options : [];
  // options = [
  //   {
  //     header: "Housewife",
  //     contents: ["Housewife"],
  //   },
  //   {
  //     header: "Private Employee",
  //     contents: ["Professional", "Private Employee"],
  //   },
  // ];

  const showPopup = () => {
    popUpRef.current.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    popUpRef.current.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  // to have refernce to the pop up div
  const popUpRef = createRef();
  const optionsRef = useRef([]);

  useEffect(() => {
    optionsRef.current = optionsRef.current.slice(0, options.length);
  }, options);

  const onSearchOption = (event) => {
    const text = event.target.value;
    optionsRef.current.forEach((item) => {
      const header = item.children[0];
      const childrens = Array.from(item.children).splice(1);
      let totalChild = childrens.length;
      let hide = 0;

      // Iterate through content
      for (let i = 0; i < item.children.length; i++) {
        const selector = item.children[i];
        const isHeader = selector.className.includes("header");
        const selectorValue = selector.children[0].innerHTML;
        const included = selectorValue
          .toLowerCase()
          .includes(text.toLowerCase());
        if (!isHeader) {
          if (included) {
            selector.classList.remove("hide");
          } else {
            selector.classList.add("hide");
            hide++;
          }
        }
      }

      // If all childs are hidden, hide the header
      if (hide == totalChild) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
      }
    });
  };

  // When options are selected
  const onOptionSelected = (value) => {
    saveSelectedOption(value);
    if (onDropdownSelected) {
      onDropdownSelected(id, selectedOption);
    }
    closePopup();
  };

  return (
    <div className="dropdown">
      {/* Input */}
      <div className="dropdown-input" onClick={() => showPopup()}>
        <input
          id={id}
          type="text"
          placeholder=" "
          value={defaultValue ? defaultValue : selectedOption}
          readOnly={true}
        />
        <label>{label}</label>
        <img src={ChevronDown} alt=''></img>
      </div>

      {/* Popup */}
      <div className="fullDropdown-popup" ref={popUpRef}>
        {/* Header */}
        <div className="fullDropdown-header">
          <input
            onChange={(event) => onSearchOption(event)}
            placeholder="Search"
          ></input>
          <p className="text-title3" onClick={() => closePopup()}>
            Done
          </p>
        </div>

        {/* Options */}
        {options.map((option, i) => (
          <div key={option.header} ref={(el) => (optionsRef.current[i] = el)}>
            <div className="fullDropdown-option__header">
              <p className="text-uiSmall">{option.header}</p>
            </div>
            {option.contents.map((content) => (
              <div
                className="fullDropdown-option__content"
                key={content}
                onClick={() => onOptionSelected(content)}
              >
                <p className="text-uiBaseline">{content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullDropdown;

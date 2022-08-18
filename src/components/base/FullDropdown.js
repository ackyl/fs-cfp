// Main Imports
import React, { createRef, useEffect, useRef } from "react";

// Image Imports
import ChevronDown from "@images/icons/chevronDown.svg";
import CloseIcon from "@images/icons/closeDark.svg";

// Main Render
const FullDropdown = () => {
  const id = "";
  const defaultValue = "";
  const selectedInput = "";
  const label = "Occupation";

  const options = [
    {
      header: "Housewife",
      contents: ["Housewife"],
    },
    {
      header: "Private Employee",
      contents: ["Professional", "Private Employee"],
    },
  ];

  const showPopup = () => {
    popUpRef.current.classList.add("active");
    document.body.style.overflow = "hidden";
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

  return (
    <div className="dropdown">
      {/* Input */}
      <div className="dropdown-input" onClick={() => showPopup()}>
        <input
          id={id}
          type="text"
          placeholder=" "
          value={defaultValue ? defaultValue : selectedInput}
          readOnly={true}
        />
        <label>{label}</label>
        <img src={ChevronDown}></img>
      </div>

      {/* Popup */}
      <div className="fullDropdown-popup" ref={popUpRef}>
        <input onChange={(event) => onSearchOption(event)}></input>
        {options.map((option, i) => (
          <div key={option.header} ref={(el) => (optionsRef.current[i] = el)}>
            <div className="fullDropdown-option__header">
              <p className="text-uiSmall">{option.header}</p>
            </div>
            {option.contents.map((content) => (
              <div className="fullDropdown-option__content" key={content}>
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

// Main Imports
import React from "react";

// Image Imports
import IdFlag from "@images/icons/idFlag.svg";

// Main Render
const Input = ({
  id,
  label,
  defaultValue,
  disabled,
  flag,
  onChange,
  onClick,
  footer,
}) => {
  return (
    <div className="input" onClick={onClick}>
      <input
        id={id}
        type="text"
        placeholder=" "
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        className={disabled && !onClick ? "input-disabled" : ""}
      />
      <label>{label}</label>
      {flag && <img src={IdFlag} className="input-flag"></img>}
      {footer && <p className="text-uiSmall">{footer}</p>}
    </div>
  );
};

export default Input;

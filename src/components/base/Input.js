// Main Imports
import React from "react";

// Image Imports
import IdFlag from "@images/icons/idFlag.svg";

// Main Render
const Input = ({ id, label, defaultValue, disabled, flag, onChange }) => {
  return (
    <div className="input">
      <input
        id={id}
        type="text"
        placeholder=" "
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        className={disabled && "input-disabled"}
      />
      <label>{label}</label>
      {flag && <img src={IdFlag} className="input-flag" alt=''></img>}
    </div>
  );
};

export default Input;

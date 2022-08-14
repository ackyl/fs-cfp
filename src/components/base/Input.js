// Main Imports
import React from "react";

// Main Render
const Input = ({ id, label, defaultValue, onChange }) => {
  return (
    <div className="input">
      <input
        id={id}
        type="text"
        placeholder=" "
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;

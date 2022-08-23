// Main Imports
import React from "react";
import { Link } from "gatsby";

// Main Render
const Button = ({ toPage, type, children, className, state, onClick }) => {
  var buttonType = "button-primary";

  switch (type) {
    case "primary":
      buttonType = "button-primary";
      break;
    case "secondary":
      buttonType = "button-secondary";
      break;
    case "cta":
      buttonType = "button-cta";
      break;
    case "warning":
      buttonType = "button-warning";
      break;
    case "disabled":
      buttonType = "button-disabled";
      break;
    default:
      break;
  }

  const isEnabled = buttonType !== "button-disabled";

  if (toPage && isEnabled) {
    return (
      <Link
        className={`button ${buttonType} ${className}`}
        to={toPage}
        onClick={onClick}
        state={state}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`button ${buttonType} ${className}`}
        onClick={isEnabled ? onClick : null}
      >
        {children}
      </button>
    );
  }
};

export default Button;

// Context
/* 

  use state to pass props to another page
  state = {{ ktpPhoto: true }}

*/

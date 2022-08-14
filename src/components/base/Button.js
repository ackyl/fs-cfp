// Main Imports
import React from "react";
import { Link } from "gatsby";

// Main Render
const Button = ({ toPage, type, children, className, onClick }) => {
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
    default:
      break;
  }

  if (toPage) {
    return (
      <Link
        className={`button ${buttonType} ${className}`}
        to={toPage}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button className={`button ${buttonType} ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }
};

export default Button;

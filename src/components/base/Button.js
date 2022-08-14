// Main Imports
import React from "react";
import { Link } from "gatsby";

const Button = ({ toPage, type, children }) => {
  var buttonType = "button-primary";
  console.log(type);

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
      <Link className={`button ${buttonType}`} to={toPage}>
        {children}
      </Link>
    );
  } else {
    return <button className="button">{children}</button>;
  }
};

export default Button;

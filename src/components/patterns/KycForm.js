// Main Imports
import React from "react";

// Component Imports
import Button from "@components/base/Button";

// Main Render
const KycForm = ({
  title,
  subtitle,
  disableButton,
  toPage,
  onClick,
  children,
}) => {
  const buttonType = disableButton ? "disabled" : "primary";

  return (
    <div className="kycform">
      <p className="text-uiSmall bold kycform__title">{title}</p>
      <p className="text-uiSmall light kycform__subtitle">{subtitle}</p>
      <div className="kycform__form">{children}</div>
      <div className="kycform__button">
        <Button toPage={toPage} type={buttonType} onClick={onClick}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default KycForm;

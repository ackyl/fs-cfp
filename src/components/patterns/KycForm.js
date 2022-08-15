// Main Imports
import React from "react";
import { Link } from "gatsby";

// Component Imports
import Button from "@components/base/Button";

// Main Render
const KycForm = ({ title, subtitle, contextData, toPage, children }) => {
  const onContinue = () => {
    // save context
  };

  return (
    <div className="kycform">
      <p className="text-uiSmall bold kycform__title">{title}</p>
      <p className="text-uiSmall light kycform__subtitle">{subtitle}</p>
      <div className="kycform__form">{children}</div>
      <div className="kycform__button">
        <Button toPage={toPage}>Continue</Button>
      </div>
    </div>
  );
};

export default KycForm;

// Context
/*
  
*/

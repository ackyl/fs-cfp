// Main Imports
import React, { useContext } from "react";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";
import Button from "@components/base/Button";
import Input from "@components/base/Input";

// Context Import
import { GlobalContext } from "@context/global-context";

// Image Imports
import Image from "@images/kycKtp.png";

// Main Render
const VerifyKtp = () => {
  const { context, saveContext } = useContext(GlobalContext);

  const onChange = (event) => {
    const userValue = event.target.value;
    context.kyc.ktpNumber = userValue;
  };

  function onSubmit() {
    saveContext({
      ...context,
    });
  }

  return (
    <Layout>
      {/* NavBar */}
      <NavBar isNotice={true} isBack={true} backUrl="../onboarding">
        Verify Your Identity
      </NavBar>

      {/* Content */}
      <div className="verifyKtp">
        <img src={Image}></img>
        <p className="text-title1 verifyKtp__title">Enter KTP Number</p>
        <p className="text-subtitle verifyKtp__subtitle">
          Please enter your KTP Number to start or continue your application
        </p>

        <Input
          label="KTP Number"
          defaultValue={context.kyc.ktpNumber}
          onChange={onChange}
        ></Input>

        <Button
          toPage="/gold-kyc/document/document"
          className="verifyKtp__button"
          onClick={() => onSubmit()}
        >
          Continue
        </Button>

        <p className="text-uiTiny verifyKtp__footer">
          Please make sure the data is correct or, you might need to re-apply
          after 30 days ahead.
        </p>
      </div>
    </Layout>
  );
};

export default VerifyKtp;
// Main Imports
import React, { useContext, useState } from "react";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";
import Button from "@components/base/Button";
import Input from "@components/base/Input";

// Context Import
import { GlobalContext } from "@context/global-context";

// Main Render
const VerifyKtp = () => {
  const { context, saveContext } = useContext(GlobalContext);
  const [state, saveState] = useState(
    context.userIdentityTrust.saveForLater.ktpNumber ?? null
  );

  const enableButton = state;

  const onChange = (event) => {
    saveState(event.target.value);
  };

  function onSubmit() {
    context.userIdentityTrust.saveForLater.ktpNumber = state;
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
        <img src="/images/kycKtp.png" alt="" />
        <p className="text-title1 verifyKtp__title">Enter KTP Number</p>
        <p className="text-subtitle verifyKtp__subtitle">
          Verify your identity to start or continue your application.
        </p>

        <Input
          label="KTP Number"
          defaultValue={context.userIdentityTrust.saveForLater.ktpNumber}
          onChange={onChange}
        ></Input>

        <Button
          toPage="../document/document"
          className="verifyKtp__button"
          onClick={() => onSubmit()}
          type={enableButton ? "primary" : "disabled"}
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

// Main Imports
import React, { useContext } from "react";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";
import Button from "@components/base/Button";
import Input from "@components/base/Input";

// Context Import
import { KycContext } from "@context/kyc-context";

// Image Imports
import Image from "@images/kycKtp.png";

// Main Render
const FormKtp = () => {
  const { kyc, saveKyc } = useContext(KycContext);

  let username = kyc.username;

  const onChange = (event) => {
    const userValue = event.target.value;
    username = userValue;
  };

  function onSubmit() {
    saveKyc({
      username: username,
    });
  }

  return (
    <Layout>
      <NavBar isNotice={true} isBack={true} backUrl="../onboarding">
        Verify Your Identity
      </NavBar>
      <div className="formKtp">
        <img src={Image}></img>
        <p className="text-title1 formKtp__title">Enter KTP Number</p>
        <p className="text-subtitle formKtp__subtitle">
          Please enter your KTP Number to start or continue your application
        </p>
        <Input
          label="KTP Number"
          defaultValue={kyc.username}
          onChange={onChange}
        ></Input>
        <Button
          toPage="/"
          className="formKtp__button"
          onClick={() => onSubmit()}
        >
          Continue
        </Button>
        <p className="text-uiTiny formKtp__footer">
          Please make sure the data is correct or, you might need to re-apply
          after 30 days ahead.
        </p>
      </div>
    </Layout>
  );
};

export default FormKtp;

// Main Imports
import React, { useContext } from "react";

// Component Imports
import Layout from "@components/base/Layout";
import Button from "@components/base/Button";

// Image Imports
import WelcomeImage from "@images/welcome.svg";
import Image from "@images/complete.png";

// Main Render
const CompleteGoldKyc = () => {
  return (
    <Layout>
      <div className="completegoldkyc">
        <img src={Image}></img>
        <p className="text-uiLarge">Processing Your Registration</p>
        <p className="text-uiSmall">
          We will verify your details within 60 minutes (during working days).
          Please make sure you can be contacted during this time.
        </p>
      </div>
    </Layout>
  );
};

export default CompleteGoldKyc;

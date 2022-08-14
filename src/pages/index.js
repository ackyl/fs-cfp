// Main Imports
import React, { useContext } from "react";

// Component Imports
import Layout from "@components/base/Layout";
import Button from "@components/base/Button";

// Image Imports
import WelcomeImage from "@images/welcome.svg";

const IndexPage = () => {
  return (
    <Layout>
      <div className="home__center">
        <p className="text-title1">Welcome to FS CFP</p>
        <img src={WelcomeImage}></img>
        <Button toPage="kyc/onboarding">KYC Process</Button>
      </div>
    </Layout>
  );
};

export default IndexPage;

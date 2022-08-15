// Main Imports
import React, { useContext } from "react";

// Component Imports
import Layout from "@components/base/Layout";
import Button from "@components/base/Button";

// Image Imports
import WelcomeImage from "@images/welcome.svg";

// Main Render
const IndexPage = () => {
  return (
    <Layout>
      <div className="home__center">
        <p className="text-title1 extra">FS Design CFP</p>
        <img src={WelcomeImage}></img>
        <Button toPage="goldKyc/onboarding">KYC Process</Button>
      </div>
    </Layout>
  );
};

export default IndexPage;

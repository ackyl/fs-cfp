// Main Imports
import React from "react";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";

// Image Imports
import Image from "@images/kycOnboarding.png";

const Onboarding = () => {
  return (
    <Layout>
      <NavBar>Apply for Gold</NavBar>
      <div class="onboarding">
        <img src={Image}></img>
      </div>
    </Layout>
  );
};

export default Onboarding;

// Main Imports
import React from "react";
import { Link } from "gatsby";

// Component Imports
import Layout from "@components/base/Layout";

// Main Render
const CompleteGoldKyc = () => {
  return (
    <Layout>
      <div className="completegoldkyc">
        <img src={Image} alt=""></img>
        <p className="text-uiLarge">Your Application Has Been Submitted</p>
        <p className="text-uiSmall">
          We will verify your details within 30 minutes (during working hours).
        </p>
        <Link to="/" className="completegoldkyc-home">
          <img src="/images/icons/home.svg" alt=""></img>
        </Link>
      </div>
    </Layout>
  );
};

export default CompleteGoldKyc;

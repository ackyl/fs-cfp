// Main Imports
import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Component Imports
import Layout from "@components/base/Layout";

// Image Imports
import Image from "@images/complete.png";

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
          <StaticImage
            src="../../../static/images/icons/home.svg"
            alt=""
          ></StaticImage>
        </Link>
      </div>
    </Layout>
  );
};

export default CompleteGoldKyc;

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
        <p className="text-uiLarge">Processing Your Registration</p>
        <p className="text-uiSmall">
          We will verify your details within 60 minutes (during working days).
          Please make sure you can be contacted during this time.
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

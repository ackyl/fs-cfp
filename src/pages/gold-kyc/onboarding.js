// Main Imports
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";
import Button from "@components/base/Button";

// Image Imports
import CameraIcon from "@images/icons/camera.svg";
import CardIcon from "@images/icons/card.svg";
import PhoneIcon from "@images/icons/phone.svg";

// Main Render
const Onboarding = () => {
  return (
    <Layout>
      {/* NavBar */}
      <NavBar isClose={false} isBack backUrl="/">
        Apply for Gold
      </NavBar>

      {/* Content */}
      <div className="onboarding">
        <StaticImage
          src="../../../static/images/kycOnboarding.png"
          alt=""
        ></StaticImage>
        <p className="text-uiLarge onboarding__heading">
          Open your account in 7 minutes
        </p>
        <p className="text-uiSmall">
          We need few details info about you. You will need:
        </p>
        <div className="onboarding__section">
          <img src={CardIcon} alt=""></img>
          <p className="text-uiSmall">A government issued KTP photo</p>
        </div>
        <div className="onboarding__section">
          <img src={CameraIcon} alt=""></img>
          <p className="text-uiSmall">A clear and visible selfie</p>
        </div>
        <div className="onboarding__section">
          <img src={PhoneIcon} alt=""></img>
          <p className="text-uiSmall">Confirm your phone number</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="onboarding__footer">
        <Button toPage="../verify-ktp" type="cta">
          Get Started
        </Button>
      </div>
    </Layout>
  );
};

export default Onboarding;

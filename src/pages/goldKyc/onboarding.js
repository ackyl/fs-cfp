// Main Imports
import React from "react";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";
import Button from "@components/base/Button";

// Image Imports
import Image from "@images/kycOnboarding.png";
import CameraIcon from "@images/icons/camera.svg";
import CardIcon from "@images/icons/card.svg";
import PhoneIcon from "@images/icons/phone.svg";

// Main Render
const Onboarding = () => {
  return (
    <Layout>
      {/* NavBar */}
      <NavBar>Apply for Gold</NavBar>

      {/* Content */}
      <div className="onboarding">
        <img src={Image}></img>
        <p className="text-uiLarge onboarding__heading">
          Open your account in 7 minutes
        </p>
        <p className="text-uiSmall">
          We need few details info about you. You will need:
        </p>
        <div className="onboarding__section">
          <img src={CardIcon}></img>
          <p className="text-uiSmall">A government issued KTP photo</p>
        </div>
        <div className="onboarding__section">
          <img src={CameraIcon}></img>
          <p className="text-uiSmall">A clear and visible selfie</p>
        </div>
        <div className="onboarding__section">
          <img src={PhoneIcon}></img>
          <p className="text-uiSmall">Confirm your phone number</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="onboarding__footer">
        <Button toPage="../verifyKtp" type="cta">
          Get Started
        </Button>
      </div>
    </Layout>
  );
};

export default Onboarding;

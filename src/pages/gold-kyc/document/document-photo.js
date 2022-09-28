// Main Imports// Main Imports
import React, { useContext } from "react";
import { Link } from "gatsby";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";

// Context Import
import { GlobalContext } from "@context/global-context";

// Image Import
import KtpDummy from "@images/ktpPhotoDummy.png";
import SelfieDummy from "@images/selfiePhotoDummy.png";
import InfoIcon from "@images/icons/info.svg";
import CheckmarkIcon from "@images/icons/checkmark.svg";
import PictureButton from "@images/pictureButton.png";

// Main Render
const DocumentPhoto = ({ location }) => {
  const { context, saveContext } = useContext(GlobalContext);

  // Get the state of the page from location
  const selfie = location.state ? location.state.selfie : null;

  // Clear page state, if not it will persist
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    window.history.replaceState(null, "");
  }

  // When user finish the selfie
  const onClickSelfie = () => {
    if (selfie) {
      context.goldKyc.selfie = true;
      saveContext({
        ...context,
      });
    }
  };

  return (
    <Layout>
      {/* NavBar */}
      <NavBar isBack={true} backUrl="../document">
        {selfie ? "Take A Selfie" : "Take Ktp Photo"}
      </NavBar>

      {/* Content */}
      <div className="documentPhoto">
        <img src={selfie ? SelfieDummy : KtpDummy} alt=""></img>
        <div className="documentPhoto__column">
          <div className="documentPhoto__row">
            <img src={InfoIcon} alt=""></img>
            <p className="text-uiBaseline">
              For successful verification, let's follow these guidelines:
            </p>
          </div>
          <div className="documentPhoto__row">
            <img src={CheckmarkIcon} alt=""></img>
            <p className="text-uiBaseline">
              {selfie
                ? "Make sure your face is clearly visible in the circle area."
                : "KTP needs to be original and not the scanned, copied, or uploaded version"}
            </p>
          </div>
          <div className="documentPhoto__row">
            <img src={CheckmarkIcon} alt=""></img>
            <p className="text-uiBaseline">
              {selfie
                ? "We only need your selfie to verify your KTP, so don’t worry much!"
                : "KTP should fit the frame, not cropped, details and picture are clear"}
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Link
        to={selfie ? "../document" : "../document-review"}
        onClick={onClickSelfie}
      >
        <img className="pictureButton" src={PictureButton} alt=""></img>
      </Link>
    </Layout>
  );
};

export default DocumentPhoto;

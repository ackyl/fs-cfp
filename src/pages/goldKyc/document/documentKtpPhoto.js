// Main Imports// Main Imports
import React from "react";
import { Link } from "gatsby";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";

// Image Import
import KtpDummy from "@images/ktpPhotoDummy.png";
import InfoIcon from "@images/icons/info.svg";
import CheckmarkIcon from "@images/icons/checkmark.svg";
import PictureButton from "@images/pictureButton.png";

// Main Render
const DocumentKtpPhoto = () => {
  return (
    <Layout>
      {/* NavBar */}
      <NavBar isBack={true} backUrl="../document">
        Take Ktp Photo
      </NavBar>

      {/* Content */}
      <div className="documentKtpPhoto">
        <img src={KtpDummy}></img>
        <div className="documentKtpPhoto__row">
          <img src={InfoIcon}></img>
          <p className="text-uiBaseline">
            For successful verification, let's follow these guidelines:
          </p>
        </div>
        <div className="documentKtpPhoto__row">
          <img src={CheckmarkIcon}></img>
          <p className="text-uiBaseline">
            KTP needs to be original and not the scanned, copied, or uploaded
            version
          </p>
        </div>
        <div className="documentKtpPhoto__row">
          <img src={CheckmarkIcon}></img>
          <p className="text-uiBaseline">
            KTP should fit the frame, not cropped, details and picture are clear
          </p>
        </div>
      </div>

      {/* CTA */}
      <Link
        to="../documentReviewKtp"
        state={{
          ktpPhoto: true,
        }}
      >
        <img className="pictureButton" src={PictureButton}></img>
      </Link>
    </Layout>
  );
};

export default DocumentKtpPhoto;

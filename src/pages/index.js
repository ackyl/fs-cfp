// Main Imports
import React, { useContext } from "react";
import { StaticImage } from "gatsby-plugin-image";

// Component Imports
import Layout from "@components/base/Layout";
import Button from "@components/base/Button";
import NavBar from "@components/patterns/NavBar";

// Image Imports
import BoardImage from "@images/icons/board.svg";
import PegadaianImage from "@images/pegadaian.png";
import WealthIcon from "@images/icons/wealth.svg";
import InfoIcon from "@images/icons/infoColor.svg";
import ChevronIcon from "@images/icons/chevronRight.svg";

// Context Import
import { GlobalContext } from "@context/global-context";

// Main Render
const IndexPage = () => {
  const { context, saveContext } = useContext(GlobalContext);
  const savedUntilPage = context.kyc.savedUntilPage;

  const renderImage = () => {
    if (savedUntilPage > 0) {
      return (
        <StaticImage
          src="../../static/images/icons/board.svg"
          alt=""
          className="home-board"
          width={80}
        ></StaticImage>
      );
    } else {
      return (
        <StaticImage
          src="../../static/images/icons/mf.svg"
          alt=""
          className="home-board"
          width={100}
        ></StaticImage>
      );
    }
  };

  return (
    <Layout>
      <NavBar isWhite>Gold</NavBar>
      <div className="home-content">
        <StaticImage
          src="../../static/images/homeBg.png"
          alt=""
          loading="eager"
          className="home-bg"
        ></StaticImage>

        {/* Top */}
        <div className="home-top">
          <p
            className={`text-title2 ${savedUntilPage == 0 && "home-top__hide"}`}
          >
            Hi, Rama!
          </p>
          <div className="home-hero">
            <div className="home-row">
              <div>
                <p className="text-uiBaseline extra">
                  {savedUntilPage > 0
                    ? "We're almost there! Complete your data verification to start saving."
                    : "Start saving in Gold now!"}
                </p>
                {savedUntilPage == 0 && (
                  <p className="text-uiSmall home-row__subtitle">
                    Easy and affordable, starts from Rp 10.000!{" "}
                  </p>
                )}
              </div>

              {renderImage()}
            </div>
            <div className="home-row">
              <Button
                type="cta"
                toPage={
                  savedUntilPage > 0
                    ? "gold-kyc/save-for-later"
                    : "gold-kyc/onboarding"
                }
              >
                {savedUntilPage > 0
                  ? "Continue Verification"
                  : "Let's Get Started!"}
              </Button>
              <div>
                <p className="text-captionMicro">Powered By</p>
                <StaticImage
                  src="../../static/images/pegadaian.png"
                  alt=""
                  className="home-pegadaian"
                ></StaticImage>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="home-card">
          <img src={WealthIcon} alt=""></img>
          <div className="home-card__subtitle">
            <p className="text-title2">Gold Price Monitor</p>
            <p className="text-uiSmall">Tap here for Gold price update</p>
          </div>
          <img src={ChevronIcon} alt=""></img>
        </div>

        <div className="home-card">
          <img src={InfoIcon} alt=""></img>
          <div className="home-card__subtitle">
            <p className="text-title2">Why investing in Gold?</p>
            <p className="text-uiSmall">Learn more before you start</p>
          </div>
          <img src={ChevronIcon} alt=""></img>
        </div>

        {/* Article */}
        <div className="home-articles">
          <p className="text-title2">Dig Deeper Into Gold</p>
          <div className="home-articles__row">
            <div className="home-article">
              <p className="text-title2">What's the Benefit of Gold?</p>
            </div>
            <div className="home-article">
              <p className="text-title2">What's the Benefit of Gold?</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

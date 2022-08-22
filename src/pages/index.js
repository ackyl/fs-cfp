// Main Imports
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Component Imports
import Layout from "@components/base/Layout";
import Button from "@components/base/Button";
import NavBar from "@components/patterns/NavBar";

// Image Imports
import BgImage from "@images/homeBg.png";
import BoardImage from "@images/icons/board.svg";
import PegadaianImage from "@images/pegadaian.png";
import WealthIcon from "@images/icons/wealth.svg";
import InfoIcon from "@images/icons/infoColor.svg";
import ChevronIcon from "@images/icons/chevronRight.svg";

// Main Render
const IndexPage = () => {
  return (
    <Layout>
      <NavBar isWhite>Gold</NavBar>
      <div className="home-content">
        {/* <img src={BgImage} className="home-bg" alt=""></img> */}
        <StaticImage
          src="../../static/images/homeBg.png"
          alt=""
          loading="eager"
          className="home-bg"
        ></StaticImage>

        {/* Absolute */}
        <div className="home-absolute">
          <p className="text-title2">Hi, Rama!</p>
          <div className="home-hero">
            <div className="home-row">
              <p className="text-uiBaseline">
                We're almost there! Complete your data verification to start
                saving.
              </p>
              <img src={BoardImage} alt=""></img>
            </div>
            <div className="home-row">
              <Button type="cta" toPage="gold-kyc/onboarding">
                Continue Verification
              </Button>
              <div>
                <p className="text-captionMicro">Powered By</p>
                <img
                  src={PegadaianImage}
                  className="home-pegadaian"
                  alt=""
                ></img>
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

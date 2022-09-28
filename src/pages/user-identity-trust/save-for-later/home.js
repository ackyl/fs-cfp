// Main Imports
import React, { useContext } from "react";

// Component Imports
import Layout from "@components/base/Layout";
import Button from "@components/base/Button";
import NavBar from "@components/patterns/NavBar";

// Context Import
import { GlobalContext } from "@context/global-context";

// Main Render
const HomePage = () => {
  const { context } = useContext(GlobalContext);
  const savedUntilPage = context.userIdentityTrust.saveForLater.savedUntilPage;

  const renderImage = () => {
    if (savedUntilPage > 0) {
      return (
        <img
          src="/images/icons/board.svg"
          alt=""
          className="home-board"
          width={80}
        />
      );
    } else {
      return (
        <img
          src="/images/icons/mf.svg"
          alt=""
          className="home-board"
          width={100}
        />
      );
    }
  };

  return (
    <Layout>
      <NavBar isWhite>Gold</NavBar>
      <div className="home-content">
        <img src="/images/homeBg.png" alt="" className="home-bg" />

        {/* Top */}
        <div className="home-top">
          <p
            className={`text-title2 ${
              savedUntilPage === 0 && "home-top__hide"
            }`}
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
                {savedUntilPage === 0 && (
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
                  savedUntilPage > 0 ? "../save-for-later" : "../onboarding"
                }
              >
                {savedUntilPage > 0
                  ? "Continue Verification"
                  : "Let's Get Started!"}
              </Button>
              <div>
                <p className="text-captionMicro">Powered By</p>
                <img
                  src="/images/pegadaian.png"
                  alt=""
                  className="home-pegadaian"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="home-card">
          <img src="/images/icons/wealth.svg" alt="" />
          <div className="home-card__subtitle">
            <p className="text-title2">Price Monitor</p>
            <p className="text-uiSmall">Tap here for Gold price update</p>
          </div>
          <img src="/images/icons/chevronRight.svg" alt="" />
        </div>

        <div className="home-card">
          <img src="/images/icons/infoColor.svg" alt="" />
          <div className="home-card__subtitle">
            <p className="text-title2">Why investing in Gold?</p>
            <p className="text-uiSmall">Learn more before you start</p>
          </div>
          <img src="/images/icons/chevronRight.svg" alt="" />
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

export default HomePage;

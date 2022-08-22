// Main Imports
import React, { useContext } from "react";
import { StaticImage } from "gatsby-plugin-image";

// Component Imports
import Layout from "@components/base/Layout";
import Button from "@components/base/Button";
import NavBar from "@components/patterns/NavBar";

// Context Import
import { GlobalContext } from "@context/global-context";

// Main Render
const SaveForLater = () => {
  const { context, saveContext } = useContext(GlobalContext);
  const savedUntilPage = context.kyc.savedUntilPage - 1;
  const listOfPages = ["Documents", "Contacts", "Personal Data"];

  const finishedPages = listOfPages.slice(0, savedUntilPage);
  const remainingPages = listOfPages.slice(savedUntilPage);

  let toPage = "/";

  switch (savedUntilPage) {
    case 0:
      toPage = "../document/document";
      break;
    case 1:
      toPage = "../contact/contact";
      break;
    case 2:
      toPage = "../personal/personal";
      break;
    default:
      break;
  }

  return (
    <Layout>
      <NavBar isBack isClose={false} backUrl="/">
        Apply for Gold
      </NavBar>
      <div className="saveForLater">
        <StaticImage
          src="../../../static/images/hello.png"
          alt=""
        ></StaticImage>
        <p className="text-uiLarge extra">Welcome back, Dian!</p>
        <p className="text-uiSmall">
          We have prefilled your data from your previous verified application.
          You are one step away from completing the application!
        </p>
        <p className="text-uiSmall bold">Progress Left</p>
        <div>
          {finishedPages.map((page) => (
            <div className="saveForLater-row" key={page}>
              <div className="saveForLater-circle saveForLater-circle__done">
                <StaticImage
                  src="../../../static/images/icons/checkmark.svg"
                  alt=""
                ></StaticImage>
              </div>
              <p className="text-uiSmall">{page}</p>
            </div>
          ))}
          {remainingPages.map((page) => (
            <div className="saveForLater-row" key={page}>
              <div className="saveForLater-circle saveForLater-circle__remaining">
                <p className="text-uiTiny">{listOfPages.indexOf(page) + 1}</p>
              </div>
              <p className="text-uiSmall">{page}</p>
            </div>
          ))}
        </div>
        <Button toPage={toPage}>I'm Ready</Button>
      </div>
    </Layout>
  );
};

export default SaveForLater;

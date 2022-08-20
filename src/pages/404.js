// Main Imports
import React from "react";

// Component Imports
import Layout from "@components/base/Layout";
import Button from "@components/base/Button";

// Image Imports
import WelcomeImage from "@images/welcome.svg";

// Main Render
const NotFoundPage = () => {
  return (
    <Layout>
      <div className="home__center">
        <p className="text-title1 extra">Seems like you lost your way...</p>
        <img src={WelcomeImage} alt=''></img>
        <Button toPage="/">Take Me Home</Button>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

// Main Imports
import React from "react";

// Component Imports
import Layout from "@components/base/Layout";
import Button from "@components/base/Button";

// Main Render
const NotFoundPage = () => {
  return (
    <Layout>
      <div className="home__center">
        <p className="text-title1 extra">Seems like you lost your way...</p>
        <Button toPage="/">Take Me Home</Button>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

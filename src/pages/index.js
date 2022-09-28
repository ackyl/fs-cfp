// Main Imports
import React from "react";

// Component Imports
import Layout from "@components/base/Layout";

// Component Imports
import Button from "@components/base/Button";

// Main Render
const IndexPage = () => {
  return (
    <Layout>
      <Button type="cta" toPage="/user-identity-trust/save-for-later/home">
        Save For Later
      </Button>
    </Layout>
  );
};

export default IndexPage;

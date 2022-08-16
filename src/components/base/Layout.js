// Main Imports
import React from "react";
import "@styles/styles.sass";

// Main Render
const Layout = (props) => {
  // Fix viewport issue on mobile browser
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  return <div className={`layout ${props.className}`}>{props.children}</div>;
};

export default Layout;

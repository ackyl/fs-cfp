import React from "react";

import "@styles/styles.sass";

const Layout = (props) => {
  return <div className="layout">{props.children}</div>;
};

export default Layout;

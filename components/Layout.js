import React from "react";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ position: "relative", top: "80px" }}>{children}</div>
    </div>
  );
};

export default Layout;

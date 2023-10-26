import React from "react";
import "./Layout.css";

const Layout = ({ children, gradient, mainContent, rounded }) => {
  return (
    <div className={`div-space ${gradient} ${mainContent} ${rounded}`}>
      <div className="div-container">{children}</div>
    </div>
  );
};

export default Layout;

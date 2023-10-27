import React from "react";
import "./Layout.css";

const Layout = ({
  children,
  justify,
  gradient,
  mainContent,
  rounded,
  flex,
}) => {
  return (
    <div className={`div-space  ${gradient} ${mainContent} ${rounded}`}>
      <div className={`div-container ${justify} ${flex}`}>{children}</div>
    </div>
  );
};

export default Layout;

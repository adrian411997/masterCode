"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;

"use client";
import React from "react";
import Portada from "../../components/utilities/portada/Portada";
import Layout from "@/components/utilities/Layout/Layout";
import Contac from "@/components/Home/Contact/Contac";
import AOS from "aos";
import "aos/dist/aos.css";
import "./page.css";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const props = {
    className: "about",
    text: "Te invitamos a que nos contactes para asi poder hablar mas a fondo sobre tu proyecto y ayudarte de la manera mas eficiente posible.",
    uptitle: "CONTACTO",
    title: "Desarrollo web a medida y emprendimiento corporativo",
  };
  return (
    <>
      <Portada data={props} />
      <div className="empty"></div>
      <Contac />
      <div className="empty"></div>
    </>
  );
};

export default Contact;

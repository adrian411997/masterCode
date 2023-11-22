"use client";
import React from "react";
import Portada from "@/components/utilities/portada/Portada";
import Layout from "@/components/utilities/Layout/Layout";
import Work from "@/components/Home/Work/Work";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Servicios = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const props = {
    className: "servicio",
    text: "Somos una empresa especializada en desarrollo web a medida y servicios de externalización. Nuestro principal objetivo es crear soluciones personalizadas que se adapten a las necesidades específicas de su negocio. Contamos con un equipo de expertos en desarrollo web altamente cualificados que crearán sitios web de calidad y proporcionarán servicios de externalización fiables. Confíe en nosotros para llevar su presencia en línea al siguiente nivel. Confíe en nosotros para llevar su ecosistema digital al siguiente nivel.",
    uptitle: "SERVICIOS",
    title: "¿Qué podemos hacer por su empresa?",
  };
  return (
    <>
      <Portada data={props} />
      <Layout>
        <Work />
      </Layout>
    </>
  );
};

export default Servicios;

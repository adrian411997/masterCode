"use client";

import React from "react";
import Layout from "@/components/utilities/Layout/Layout";
import Portada from "@/components/utilities/portada/Portada";
import Work from "@/components/Home/Work/Work";
import AOS from "aos";
import "aos/dist/aos.css";
import "./page.css";
import { useEffect } from "react";
const AboutPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const props = {
    className: "about",
    text: [
      "En Master Code, somos una empresa de profesionales altamente especializados en el desarrollo de software y diseño multimedia. Llevamos dos años en el mercado nacional e internacional.",
      "Estamos enfocados en identificar y satisfacer las necesidades de nuestros clientes, brindando una asesoría de la mas alta calidad, lo que nos ha permitido desarrollar ideas de negocios y mantener una visión amplia para generar proyectos de gran envergadura en cada uno de nuestros clientes.",
    ],
    uptitle: "Sobre nosotros",
    title: "Creamos, desarrollamos y promovemos ideas para su empresa. ",
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

export default AboutPage;

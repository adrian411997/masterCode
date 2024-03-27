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
      "Master Code, es una agencia con profesionales altamente especializados y enfocados en sastisfacer las necesidades de nuestros clientes, brindando una asesoria integral de la mas alta calidad, lo que nos ha permitido desarrollar ideas de negocio y mantener una vision amplia para generar de la mano con cada uno de nuestros clientes, proyectos de gran envergadura."],
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

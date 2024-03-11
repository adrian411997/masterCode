import React from "react";
import "./About.css";
import Cards from "@/components/utilities/Cards/Cards";
import { data } from "@/components/data/data";
const About = () => {
  return (
    <>
      <div className="about-container-title">
        <h1>Acerca de nosotros</h1>
      </div>
      <div className="about-container-description">
        <p>
        <span className="name-org">Master Code</span>, es una agencia con profesionales altamente especializados y enfocados en sastisfacer las necesidades de nuestros clientes,
brindando una asesoria integral de la mas alta calidad, lo que nos ha permitido desarrollar ideas de negocio y mantener una vision amplia
para generar de la mano con cada uno de nuestros clientes, proyectos de gran envergadura.
        </p>
      </div>
      <Cards dataInfo={data} className={"about-cards"} fadeup={true} />
    </>
  );
};

export default About;

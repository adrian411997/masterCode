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
          Nuestra empresa cuenta con profesionales altamente calificados con
          muchos años de experiencia en el campo de las TI, nos dedicamos al
          desarrollo de proyectos complejos y soluciones realmente sofisticadas.
          La flexibilidad, la eficiencia y el enfoque individual a cada cliente
          son principios básicos que seguimos en nuestro trabajo.
        </p>
      </div>
      <Cards dataInfo={data} className={"about-cards"} />
    </>
  );
};

export default About;

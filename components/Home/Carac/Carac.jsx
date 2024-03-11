import React from "react";
import Cards from "../../utilities/Cards/Cards";
import "./Carac.css";
import { tools1 } from "../../data/data";
import Image from "next/image";

const Carac = () => {
  return (
    <>
      <div className="carac-space-minititle">
        <p>NUESTRO OBJETIVO ES CLARO: TU CRECIMIENTO</p>
      </div>
      <div className="carac-space-title">
        <h1>Servicios de Marketing Digital Integral</h1>
      </div>
      <div className="carac-space-description">
        <p>Como Agencia de Marketing Digital innovadora, trabajamos soluciones integrales atentas a la evolución de Internet, de las Redes Sociales y la Experiencia de los usuarios con las Marcas. Conocemos las herramientas de Marketing Digital necesarias para que puedas diferenciarte, ganar presencia y posicionar tus productos.</p>
      </div>
      <div className="carac-content">
        <Cards dataInfo={tools1} className={"ToolsFlex"} />
      </div>

      <div className="carac-button">
        <button>
          <a
            href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403872540005&text=Hola,%20tengo%20una%20consulta!"
            target={"_blank"}
            rel="noreferrer"
          >
            Agenda una entrevista con nosotros
          </a>
        </button>
      </div>
    </>
  );
};

export default Carac;

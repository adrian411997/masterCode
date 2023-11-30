import React from "react";
import Cards from "../../utilities/Cards/Cards";
import "./Carac.css";
import { tools1 } from "../../data/data";
import Image from "next/image";

const Carac = () => {
  return (
    <>
      <div className="carac-space-title">
        <h1>¿Por que elegirnos?</h1>
      </div>
      <div className="carac-content">
        <Cards dataInfo={tools1} className={"ToolsFlex"} />
      </div>

      <div className="carac-button">
        <button>
          <a
            href="https://calendly.com/mastercode-ar/30min"
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

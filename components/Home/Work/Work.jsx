import React from "react";
import { workAspects } from "@/components/data/data";
import Cards from "@/components/utilities/Cards/Cards";
import "./Work.css";

const Work = () => {
  return (
    <>
      <div className="work-description">
        <h1> Cómo trabajamos contigo</h1>
        <p>
          Ofrecemos distintos niveles de servicios para adaptarnos a las
          necesidades de nuestros clientes
        </p>
      </div>
      <Cards dataInfo={workAspects} className={"work-cards"} />
    </>
  );
};

export default Work;

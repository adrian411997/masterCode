import React from "react";
import "./home.css";
import TypewriterEffect from "../Typewriter/Typewriter";

const IndexPage = () => {
  const texts = [
    "Marketing Digital",
    "Sitios Web",
    "Publicidad Digital",
    "Diseño  Gráfico",
  ];

  return (
    <>
      <div className="homeTitle">
        <h1 className="mainTitle">Conectamos con tus clientes de forma creativa</h1>

        <TypewriterEffect
          word={texts}
          loop={10000}
          typeSpeed={100}
          deleteSpeed={20}
        />  
      </div>
      <div className="homeSubtitle">
        <p>Desbloquee con nosotros el potencial de su empresa</p>
        <a href="/servicios"> Servicios </a>

      </div>
    </>
  );
};

export default IndexPage;

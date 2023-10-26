import React from "react";
import "./home.css";
import TypewriterEffect from "../Typewriter/Typewriter";

const IndexPage = () => {
  const texts = [
    "Páginas webs",
    "Tiendas virtuales",
    "Plataformas a la medida",
    "Aplicaciones móviles",
  ];

  return (
    <>
      <div className="homeTitle">
        <h1 className="mainTitle">Aumente sus ventas con</h1>

        <TypewriterEffect
          word={texts}
          loop={10000}
          typeSpeed={100}
          deleteSpeed={20}
        />
      </div>
      <div className="homeSubtitle">
        <p>Desbloquee con nosotros el potencial de su empresa</p>
        <button> Acerca de nosotros</button>
        <span>Servicios</span>
      </div>
    </>
  );
};

export default IndexPage;

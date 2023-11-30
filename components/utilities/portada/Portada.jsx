import React from "react";
import "./Portada.css";

const Portada = ({ data }) => {
  return (
    <div className={`portadaContent ${data.className}`}>
      <div className="overlay"></div>
      <div className="portadaContainer">
        <div className="portadaDIV">
          <div className="uptitle">
            <div className="uptitleText">{data.uptitle}</div>
            <div className="linea"></div>
          </div>
        </div>
        <div className="portadaTitle">
          <h1>{data.title}</h1>
        </div>
        <div className="portadaDescription">
          {data.text.map((t, index) => (
            <p key={index}>{t}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portada;

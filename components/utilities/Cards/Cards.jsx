import React from "react";
import "./Cards.css";
import Image from "next/image";

const Cards = ({ dataInfo, className, flip, fadeup }) => {
  return (
    <div className={`card-container ${className}`}>
      {dataInfo.map((data, index) => (
        <div
          data-aos={`${fadeup ? "fade-up" : "flip-left"}`}
          data-aos-duration={data.time}
          key={index}
          className="card"
        >
          <div>
            <Image src={data.image} width={50} height={50} alt={data.title} />
          </div>
          <div className="card-title">
            <h3>{data.title}</h3>
          </div>
          <div className="card-description">
            <p>{data.description}</p>
          </div>
          {data.link ? (
            <div className="card-links">
              <a href={data.link}>Ver más</a>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Cards;

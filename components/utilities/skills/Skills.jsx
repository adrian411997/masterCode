import React from "react";
import "./Skills.css";
import { tools } from "@/components/data/data";
import Image from "next/image";

const Skills = () => {
  return (
    <>
      <h1 className="title">Estas empresas ya nos eligieron</h1>
      <div className="skills-space marquee">
        <ul className="skills-container marquee_content">
          {tools.map((t, index) => (
            <li key={index} className="skills-logo marquee_item">
              <Image width={75} height={75} alt="icono" src={t.url} />{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;

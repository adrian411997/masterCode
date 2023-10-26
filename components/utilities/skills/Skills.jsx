import React from "react";
import "./Skills.css";
import { tools } from "@/components/data/data";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="skills-space">
      <div className="skills-container">
        {tools.map((t, index) => (
          <div key={index} className="skills-logo">
            <Image width={100} height={100} alt="icono" src={t.url} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

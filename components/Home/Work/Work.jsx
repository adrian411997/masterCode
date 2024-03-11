import React from "react";
import { ourCaracs } from "@/components/data/data";
import "./Work.css";
import Image from "next/image";
const Work = () => {
  return (
    <>
      <div className="work-description">
        <h1>¿Por qué elegir a Master Code?</h1>
        <div className="work-container">
          <div className="work-container-image">
            <Image 
              src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1710127708/vecteezy_3d-idea-creativa-png-ilustracion_9343605_pps7uk.png" 
              width={460}
              height={460}    
            />
          </div>
          <div className="work-container-description">
            <ul>
              {ourCaracs.map((our,index)=>(
                <li key={index}>
                  <span>
                    <Image src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1710128546/check_pcingv.png" 
                      width={16} height={16}
                    />
                    </span>
                    {our}
                    </li>
                    ))
              }
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default Work;

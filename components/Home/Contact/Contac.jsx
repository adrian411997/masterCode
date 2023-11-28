import React from "react";
import "./Contact.css";
import Form from "@/components/utilities/Form/Form";
import Image from "next/image";

const Contac = () => {
  return (
    <div className="contact-space gradient">
      <div className="contact-container">
        <div className="action-call">
          <div className="action-title">
            <h1> ¿Estás atascado con un proyecto o te cuesta mucho?</h1>
            <p>
              Te invitamos a que nos contactes para asi poder hablar mas a fondo
              sobre tu proyecto y ayudarte de la manera mas eficiente posible.
            </p>
            <hr className="line-divided" />
            <div className="followus-icon">
              <h2>Siguenos:</h2>
              <div className="icons">
                <Image
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1701205194/logo_in_o0yrbw.png"
                  alt=""
                  width="30"
                  height={30}
                />
                <Image
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1701205194/png_link_ygkyhv.png"
                  alt=""
                  width="30"
                  height={30}
                />
                <Image
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1701205194/png_face_plj0vq.png"
                  alt=""
                  width="30"
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contac;

import React from "react";
import "./Contact.css";
import Form from "@/components/utilities/Form/Form";

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
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contac;

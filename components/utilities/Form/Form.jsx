"use client";
import React, { useState } from "react";
import "./Form.css";
import axios from "axios"

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject:"Asesoría",
    to:"adriankiko3@gmail.com",
    message: "",
    phone: "",
    toName:"Adrian"

  });
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const toSend = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    axios.post("https://systemnotifications20240311163137.azurewebsites.net/Notification", form)
      .then((response) => {
        // Maneja la respuesta exitosa si es necesario
        console.log("Solicitud enviada correctamente:", response.data);
      })
      .catch((error) => {
        // Maneja los errores de la solicitud
        console.error("Error al enviar la solicitud:", error);
      });
  };
  console.log("elform es:",form)
  return (
    <div className="form">
      <div className="form-container">
        <form 
          onSubmit={toSend}
          method="POST" 
          target="_blank"
          rel="noreferrer"
         >
          <input
            onChange={handleOnChange}
            name="name"
            className="input"
            placeholder="Tu nombre"
            type={"text"}
            autoComplete="off"
            required
          />
          <input
            onChange={handleOnChange}
            className="input"
            name="email"
            placeholder="Tu email"
            type={"email"}
            required
          />
          <input
            onChange={handleOnChange}
            className="input phoneNumber"
            name="phone"
            placeholder="Telefono"
            type={"text"}
            required
          />
          <textarea
            onChange={handleOnChange}
            name="message"
            placeholder="Déjanos tu consulta"
          />
          <input type="submit" className="button-form-contact"/>
        </form>
      </div>
    </div>
  );
};

export default Form;

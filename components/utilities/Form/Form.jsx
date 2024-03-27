"use client";
import React, { useState } from "react";
import "./Form.css";
import axios from "axios"
import Swal from "sweetalert2"

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject:"Asesoría",
    to:"mastercode.ar@gmail.com",
    message: "",
    phone: "",
    toName:"Master Code"

  });
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const toSend = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    axios.post("https://systemnotifications20240311163137.azurewebsites.net/Notification", form)
      .then(() => {
        Swal.fire({
          title:"Exito",
          text:"El mensaje se ha mandado con éxito",
          icon:"success"
        }).then((result)=>{ 
          document.getElementById('form').reset();
        }
        )
      })
      .catch((error) => {
        Swal.fire({
          title:"Error",
          text:"Algo salio mal",
          icon:"error"
        })
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
          id="form"
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

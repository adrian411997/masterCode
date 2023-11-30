"use client";
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    numero: "",
    text: "",
    know: "",
  });
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="form">
      <div className="form-container">
        <form action="submit" method="POST" encType="text/plain">
          <input
            onChange={handleOnChange}
            name="nombre"
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
            name="numero"
            placeholder="Telefono"
            type={"text"}
            required
          />
          <textarea
            onChange={handleOnChange}
            name="text"
            placeholder="Describenos tu proyecto"
          />
          <input type="submit" className="button-form-contact"></input>
        </form>
      </div>
      <div className="div-button"></div>
    </div>
  );
};

export default Form;

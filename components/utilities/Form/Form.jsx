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
  const [hideInput, setHideInput] = useState(false);
  const showInput = () => {
    if (!hideInput) {
      setHideInput(true);
    } else {
      setHideInput(false);
    }
  };
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="form">
      <div className="form-container">
        <form
          action="mailto:metrica.agenciamkt@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <input
            onChange={handleOnChange}
            name="nombre"
            className="input"
            placeholder="Tu nombre"
            type={"text"}
          />
          <input
            onChange={handleOnChange}
            className="input"
            name="email"
            placeholder="Tu email"
            type={"email"}
          />
          <input
            onChange={handleOnChange}
            className="input phoneNumber"
            name="numero"
            placeholder="Telefono"
            type={"number"}
          />
          <textarea
            onChange={handleOnChange}
            name="text"
            placeholder="Describenos tu proyecto"
          />
        </form>
      </div>
      <div className="div-button">
        <button
          className="button-form-contact"
          type="submit"
          value={"submit"}
          disabled={
            form.nombre === "" ||
            form.email === "" ||
            form.know === "" ||
            form.text === "" ||
            form.numero === ""
          }
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Form;

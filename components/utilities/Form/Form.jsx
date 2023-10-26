"use client";
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    web: "",
    pais: "",
    text: "",
    numero: "",
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
          className="input"
          name="numero"
          placeholder="Tu numero"
          type={"number"}
        />
        <input
          onChange={handleOnChange}
          className="input"
          name="web"
          placeholder="Tu Web"
          type={"url"}
        />
        <span>
          Si su pais no se encuentra en la lista, oprima Ingresar pais
        </span>
        {hideInput ? (
          <div className="contactanos-div-input">
            <input
              onChange={handleOnChange}
              className="input"
              name="pais"
              placeholder="Introduzca su pais"
            />
            <button type={"button"} onClick={showInput}>
              Atras
            </button>
          </div>
        ) : (
          <div className="contactanos-div-select">
            <select onChange={handleOnChange} name="pais">
              <option value="">Seleccione su pais</option>
              <option value="Argentina">Argentina</option>
              <option value="España">España</option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="Chile">Chile</option>
            </select>
            <button onClick={showInput} type={"button"}>
              Ingresar pais
            </button>
          </div>
        )}
        <textarea
          onChange={handleOnChange}
          name="text"
          placeholder="Cuéntanos como te podemos ayudar"
        />
        <div className="div-button">
          <button
            className="button-form-contact"
            type="submit"
            value={"submit"}
            disabled={
              form.nombre === "" ||
              form.email === "" ||
              form.web === "" ||
              form.pais === "" ||
              form.text === "" ||
              form.numero === ""
            }
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

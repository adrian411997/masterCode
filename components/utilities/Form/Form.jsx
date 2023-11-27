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
        <select name="know" onChange={handleOnChange} className="selectKnowsUs">
          <option selected value={""}>
            ¿Cómo nos conoció?
          </option>
          <option value="Busqueda por Internet">Busqueda por Internet</option>
          <option value="Referencia">Referencia</option>

          <option value="Redes sociales">Redes sociales</option>
          <option value="Evento">Evento</option>
          <option value="Anuncio">Anuncio</option>
          <option value="Por conocidos">Por conocidos</option>
          <option value="Otros...">Otros...</option>
        </select>

        <textarea
          onChange={handleOnChange}
          name="text"
          placeholder="Describenos tu proyecto"
        />
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
      </form>
    </div>
  );
};

export default Form;

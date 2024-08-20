import { useState } from "react";
import "./TextField.css";

const TextField = (props) => {
  const placeholderText = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.required}
        type="text"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default TextField;

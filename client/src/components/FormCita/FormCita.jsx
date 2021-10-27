import React, { useState } from "react";
import "./FormCita.css";

export function validate(input) {
  let errors = {};
  if (!input.nombre) {
    errors.nombre = "nombre is required";
  } else if (!/\S+\S+/.test(input.nombre)) {
    errors.nombre = "nombre is invalid";
  }
  return errors;
}

export default function FormCita() {
  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    dni: 0,
    tel: 0,
    email: "",
    mensaje: "",
  });
  const [error, setError] = useState({});

  const handleChange = function (e) {
    setInput({
      ...input,
      [e.target.nombre]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.nombre]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div classnombre="formulario-cita">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          nombre="nombre"
          type="text"
          value={input.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="apellido">Apellido</label>
        <input
          nombre="apellido"
          type="text"
          value={input.apellido}
          onChange={handleChange}
          required
        />

        <label htmlFor="dni">DNI</label>
        <input
          nombre="dni"
          type="text"
          value={input.dni}
          onChange={handleChange}
          required
        />

        <label htmlFor="tel">Teléfono</label>
        <input
          nombre="tel"
          type="tel"
          value={input.tel}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          nombre="email"
          value={input.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          nombre="mensaje"
          cols="30"
          rows="10"
          value={input.mensaje}
          required
        ></textarea>
      </form>
    </div>
  );
}

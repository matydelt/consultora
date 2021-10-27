import React, { useState } from "react";

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
  const [input, setInput] = useState({});
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

  return (
    <div classnombre="formulario-cita">
      <form>
        <label>Nombre</label>
        <input nombre="nombre" type="text" required />

        <label>Apellido</label>
        <input nombre="apellido" type="text" required />

        <label>DNI</label>
        <input nombre="dni" type="text" required />

        <label>Teléfono</label>
        <input nombre="tel" type="tel" required />

        <label>Email</label>
        <input type="email" nombre="email" required />

        <label>Mensaje</label>
        <textarea nombre="mensaje" cols="30" rows="10" required></textarea>
      </form>
    </div>
  );
}

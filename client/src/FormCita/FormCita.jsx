import React, { useState } from "react";

export function validate(input) {
  let errors = {};
  if (!input.nombre) {
    errors.nombre = "nombre es requerido";
  } else if (!/\S+\S+/.test(input.nombre)) {
    errors.nombre = "nombre is invalid";
  }

  if (!input.apellido) {
    errors.apellido = "apellido es requerido";
  } else if (!/\S+\S+/.test(input.nombre)) {
    errors.apellido = "apellido is invalid";
  }

  if (!input.dni) {
    errors.dni = "DNI es requerido";
  } else if (/^\d{8}(?:[-\s]\d{4})?$/.test(input.dni)) {
    errors.dni = "dni erroneo, ingrese el número sin puntos";
  }

  if (!input.telefono) {
    errors.telefono = "Teléfono es requerido";
  } else if (
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(
      input.telefono
    )
  ) {
    errors.telefono = "el Teléfono ingresado contiene errores";
  }

  return errors;
}

export default function FormCita() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({});
  const [error, setError] = useState({});

  const handleChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div classnombre="formulario-cita">
      <form>
        <label>Nombre</label>
        <input name="nombre" type="text" required onChange={handleChange} />

        <label>Apellido</label>
        <input name="apellido" type="text" required onChange={handleChange} />

        <label>DNI</label>
        <input name="dni" type="number" required onChange={handleChange} />

        <label>Teléfono</label>
        <input name="tel" type="tel" required onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" required onChange={handleChange} />

        <label>Mensaje</label>
        <textarea
          name="mensaje"
          cols="30"
          rows="10"
          required
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
}

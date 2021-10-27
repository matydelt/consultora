import React from "react";

export default function FormCita() {
  return (
    <div className="formulario-cita">
      <form>
        <label>Nombre</label>
        <input type="text" />
        <label>Apellido</label>
        <input type="text" />
        <label>DNI</label>
        <input type="text" />
        <label>Teléfono</label>
        <input type="tel" />
      </form>
    </div>
  );
}

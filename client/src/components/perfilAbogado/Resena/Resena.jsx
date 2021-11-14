import React from "react";

export default function Resena(params) {
  return (
    <div className="card text-white bg-primary mb-3">
      <div className="card-header">Titulo: {params.title}</div>
      <div className="card-body">
        <h5 className="card-title">Performance: {params.puntuacion}</h5>
        <p className="card-text">Mensaje:{params.mensaje}</p>
      </div>
    </div>
  );
}

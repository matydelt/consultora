import React from "react";
import "./Materia.css";

const Materia = ({ nombre }) => {
  return (
    <div className="materia">
      <h5 className="materia-nombre">{nombre}</h5>
      <button className="materia-button">Ver más información</button>
    </div>
  );
};

export default Materia;

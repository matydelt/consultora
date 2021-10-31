import React from "react";
import "./Materia.css";

const Materia = ({ nombre }) => {
  return (
    <div className="materia">
      <h5 className="materia-nombre">{nombre}</h5>
      <button className="learn-more">
        <span aria-hidden="true" class="circle">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Learn More</span>
      </button>
    </div>
  );
};

export default Materia;

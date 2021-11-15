import React from "react";
import "./SiteMateria.css";
import { gsap } from "gsap";

const SiteMateria = ({ firstName, lastName, img, abogado }) => {
  var timeline = gsap.timeline();

  const handleMouseMove = (e) => {
    let { currentTarget } = e;

    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    currentTarget.style.transform = `rotateY(${Math.floor(
      xAxis
    )}deg) rotateX(${Math.floor(yAxis)}deg)`;
  };

  return (
    <div>
      <div onMouseMove={handleMouseMove} className="site_materia_img_name">
        <img src={img} alt="Imagen Abogado" />
        <p>
          {firstName} {lastName}
        </p>
        <div className="hover_verMas">
          <p>Ver mas</p>
        </div>
      </div>
    </div>
  );
};

export default SiteMateria;

import React from "react";
import ButtonsNav from "../../ButtonsNav/ButtonsNav";
import "./About.css"

const About = ({ titleAbout, contendioAbout, titleFilosofia, contenidoFilosofia }) => {
  return (
    <div className="About_container row row-cols-md-6 justify-content-evenly">
      <seccion className="about col-md-5">
        <h3>{titleAbout}</h3>
        <p>{contendioAbout}</p>
        <div className="button_about">
          <ButtonsNav text="Leer mas sobre nosotros" link="#" />
        </div>
      </seccion>

      <seccion className="filosofia col-md-5">
        <h3>{titleFilosofia}</h3>
        <p>{contenidoFilosofia}</p>
      </seccion>
    </div>
  );
};

export default About;

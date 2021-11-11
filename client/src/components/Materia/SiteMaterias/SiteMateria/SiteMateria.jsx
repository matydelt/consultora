import React from "react";

const SiteMateria = ({ firstName, lastName, img }) => {
  return (
    <>
       <img src={img} alt="Imagen Abogado" />
      <p>
         {firstName} {lastName}
      </p>
    </>
  );
};

export default SiteMateria;

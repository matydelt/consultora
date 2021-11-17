import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Abogado = ({ abogado, frase }) => {
  return (
    <>
      <div>
        <div className="img_abogado">
          <img
            className="card-img-top"
            src={abogado.abogado.imagen}
            alt={"sad"}
          />
        </div>
        <div className="text_equipo">
          <p>
            {abogado.firstName} {abogado.lastName}
          </p>
          <p>"{frase?.message}"</p>
        </div>
      </div>
      <div className="button_ver_mas">
        <Link to={`/perfil/${abogado.slug}`}>Ver más</Link>
      </div>
    </>
  );
};

Abogado.propTypes = {
  abogado: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    slug: PropTypes.string,
    abogado: PropTypes.shape({
      imagen: PropTypes.string,
    }),
  }),
  frase: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default Abogado;

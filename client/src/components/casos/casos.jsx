import React from "react";
import PropTypes from "prop-types";
import CardCasos from "./cardCasos/cardCasos";
import "./casos.css";

function Casos({ id, casos, persona, flag }) {
  const { firstName, lastName, dni, celular } = persona;

  return (
    <>

      <div className="card mt-1 me-1 ms-1 p-4 " key={id}>
        <h4 className="mt-2 d-flex justify-content-center ">
          {firstName} {lastName}
        </h4>
        <p className="d-flex justify-content-center">dni: {dni}</p>
        <p className="d-flex justify-content-center">celular: {celular}</p>
        <div>
          <h5 className="d-flex justify-content-center">Casos</h5>
          {casos?.map((e) => {
            const {
              detalle,
              estado,
              juez,
              juzgado,
              numeroExpediente,
              numeroLiquidacion,
              medidaCautelar,
              trabaAfectiva,
              vtoMedidaCautelar,
              vtoTrabaAfectiva,
              jurisdiccion,
              materias,
              updatedAt,
            } = e;
            return (
              <CardCasos
                detalle={detalle}
                materia={materias[0].nombre}
                estado={estado}
                juez={juez}
                juzgado={juzgado}
                numeroExpediente={numeroExpediente}
                numeroLiquidacion={numeroLiquidacion}
                medidaCautelar={medidaCautelar}
                trabaAfectiva={trabaAfectiva}
                vtoMedidaCautelar={vtoMedidaCautelar}
                vtoTrabaAfectiva={vtoTrabaAfectiva}
                jurisdiccion={jurisdiccion}
                fecha={updatedAt}
                flag={flag}
                id={id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

Casos.propTypes = {
  id: PropTypes.any,
  casos: PropTypes.array.isRequired,
  persona: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    dni: PropTypes.number.isRequired,
    celular: PropTypes.number.isRequired,
  }).isRequired,
  flag: PropTypes.bool,
};
export default Casos;

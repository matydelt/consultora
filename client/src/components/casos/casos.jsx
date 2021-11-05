import React from "react";
import "./casos.css";

function Casos({ id, casos, persona }) {
  const { firstName, lastName, dni, celular } = persona;

  return (
    <div className="wrapper">
      <div className="card mt-3 me-3 ms-3 container" key={id}>
        <h4 className="mt-2 d-flex justify-content-center ">
          {firstName} {lastName}
        </h4>
        <p className="d-flex justify-content-center">DNI: {dni}</p>
        <p className="d-flex justify-content-center">Celular: {celular}</p>
        <h5
          className="d-flex justify-content-center"
          style={{ marginBottom: 10 }}
        >
          Casos
        </h5>
        <div className="d-flex flex-column align-items-center">
          {casos?.map((caso, index) => {
            const { detalle, estado, juez, juzgado, numeroExpediente } = caso;
            return (
              <div
                className="accordion accordion-flush ancho casos-border"
                id="accordionFlushExample"
                key={index}
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id={"a" + numeroExpediente}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#e" + numeroExpediente}
                      aria-expanded="false"
                      aria-controls={"e" + numeroExpediente}
                    >
                      <b>N° Expediente: {numeroExpediente}</b>
                    </button>
                  </h2>
                  <div
                    id={"e" + numeroExpediente}
                    className="accordion-collapse collapse"
                    aria-labelledby={"a" + numeroExpediente}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <ul className="list-group">
                      <li className="list-group-item">Juez: {juez}</li>
                      <li className="list-group-item">Estado: {estado}</li>
                      <li className="list-group-item">Juzgado: {juzgado}</li>
                    </ul>
                    <div className="accordion-body">Detalles: {detalle}</div>
                  </div>
                </div>
              </div>
              // <div className="conteiner card mt-3 me-3 ms-3 mb-3 " >
              //     <p className="mt-2 ms-2 d-flex justify-content-center">juez: {juez}</p>
              //     <p className="me-2 ms-2 d-flex justify-content-center">estado: {estado}</p>
              //     <p className="me-2 ms-2 d-flex justify-content-center">juzgado: {juzgado}</p>
              //     <p className="me-2 ms-2 d-flex justify-content-center">N° Expediente: {numeroExpediente}</p>
              //     <p className="me-2 ms-2 d-flex justify-content-center">detalles: {detalle}</p>
              // </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Casos;

import React from "react";
import "./casos.css"

function Casos({ id, casos, persona }) {
    const { firstName, lastName, dni, celular } = persona

    return (<>
        <div className="conteiner card mt-3 me-3 ms-3" key={id}>
            <h4 className="mt-2 d-flex justify-content-center ">{firstName} {lastName}</h4>
            <p className="d-flex justify-content-center">dni: {dni}</p>
            <p className="d-flex justify-content-center">celular: {celular}</p>
            <div>
                <h5 className="d-flex justify-content-center">Casos</h5>
                {casos?.map(e => {
                    const { detalle, estado, juez, juzgado, numeroExpediente } = e
                    return (<div className="conteiner card mt-3 me-3 ms-3 mb-3 " >
                        <p className="mt-2 ms-2 d-flex justify-content-center">juez: {juez}</p>
                        <p className="me-2 ms-2 d-flex justify-content-center">estado: {estado}</p>
                        <p className="me-2 ms-2 d-flex justify-content-center">juzgado: {juzgado}</p>
                        <p className="me-2 ms-2 d-flex justify-content-center">N° Expediente: {numeroExpediente}</p>
                        <p className="me-2 ms-2 d-flex justify-content-center">detalles: {detalle}</p>
                    </div>)
                })}
            </div>
        </div>
    </>)
}

export default Casos
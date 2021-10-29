import React from "react";


function Casos({ id, casos, persona }) {
    const { firstName, lastName, dni, celular } = persona

    return (<>
        <div className="conteiner card mt-3 me-3 ms-3" key={id}>
            <h4 className="mt-2 ">{firstName} {lastName}</h4>
            <p>dni: {dni}</p>
            <p>celular: {celular}</p>
            <div>
                <h5>Casos</h5>
                {casos?.map(e => {
                    const { detalle, estado, juez, juzgado, numeroExpediente } = e
                    return (<div className="conteiner card mt-3 me-3 ms-3 mb-3">
                        <p className="mt-2 ms-2">juez: {juez}</p>
                        <p className="me-2 ms-2">estado: {estado}</p>
                        <p className="me-2 ms-2">juzgado: {juzgado}</p>
                        <p className="me-2 ms-2">N° Expediente: {numeroExpediente}</p>
                        <p className="me-2 ms-2">detalles: {detalle}</p>
                    </div>)
                })}
            </div>
        </div>
    </>)
}

export default Casos
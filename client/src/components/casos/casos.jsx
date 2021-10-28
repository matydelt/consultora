import React from "react";


function Casos({ id, casos, persona }) {
    const { firstName, lastName, dni, celular } = persona

    return (<>
        <div className="conteiner card mt-3 me-3 ms-3" key={id}>
            <h4>{firstName} {lastName}</h4>
            <p>dni: {dni}</p>
            <p>celular: {celular}</p>
            <div>
                {casos?.map(e => {
                    const { detalle, estado, juez, juzgado, numeroExpediente } = e
                    return (<div className="conteiner card mt-3 me-3 ms-3 mb-3">
                        <p>juez: {juez}</p>
                        <p>estado: {estado}</p>
                        <p>juzgado: {juzgado}</p>
                        <p>N° Expediente: {numeroExpediente}</p>
                        <p>detalles: {detalle}</p>
                    </div>)
                })}
            </div>
        </div>
    </>)
}

export default Casos
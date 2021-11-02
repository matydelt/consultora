import React from "react";
import "./casos.css"

function Casos({ id, casos, persona }) {
    const { firstName, lastName, dni, celular } = persona

    return (<>
        <div className="card mt-3 me-3 ms-3 " key={id}>
            <h4 className="mt-2 d-flex justify-content-center ">{firstName} {lastName}</h4>
            <p className="d-flex justify-content-center">dni: {dni}</p>
            <p className="d-flex justify-content-center">celular: {celular}</p>
            <div>
                <h5 className="d-flex justify-content-center">Casos</h5>
                {casos?.map((e, i) => {
                    const { detalle, estado, juez, juzgado, numeroExpediente } = e
                    return (


                        <div class="accordion accordion-flush ancho" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id={'a'+numeroExpediente}>
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#e'+numeroExpediente} aria-expanded="false" aria-controls={'e'+numeroExpediente}>
                                    <b>N° Expediente: {numeroExpediente}</b>
                                    </button>
                                </h2>
                                <div id={'e'+numeroExpediente} class="accordion-collapse collapse" aria-labelledby={'a'+numeroExpediente} data-bs-parent="#accordionFlushExample">
                                    <ul className="list-group">
                                        <li className="list-group-item">Juez: {juez}</li>
                                        <li className="list-group-item">Estado: {estado}</li>
                                        <li className="list-group-item">Juzgado: {juzgado}</li>
                                    </ul>
                                    <div class="accordion-body">Detalles: {detalle}</div>
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



                    )
                })}
            </div>
        </div>
    </>)
}

export default Casos
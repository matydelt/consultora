/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom"
import Casos from "../casos/casos"
let aux = {
    "eMail": "prueba@gmail.com",
    "firstName": "Pepito",
    "lastName": "pe",
    "dni": 23456451,
    "celular": 11234523,
    "detalle": null,
    "clientes": [
        {
            "id": 3,
            "asunto": null,
            "persona": {
                "firstName": "matias",
                "lastName": "Taborda",
                "dni": 12336789,
                "celular": 11234523
            },
            "casos": [
                {
                    "juez": "jose pepito",
                    "numeroExpediente": 1234,
                    "juzgado": 2234,
                    "detalle": "se mamo y le pego al perro",
                    "estado": "inicio"
                }
            ]
        }
    ]
}

export default function Clientes() {   //muestra cards de cada cliente con sus casos
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        setClientes(aux.clientes)
    }, [])
    return (<div className="conteiner card mt-3 me-3 ms-3">
        {clientes?.map(e => {
            const { id, casos, persona } = e
            return (<div>
                <Casos id={id} casos={casos} persona={persona} />
                {/* <Link> */}
                <button className="btn btn-primary mt-3 mb-3">Crear caso</button>
                {/* </Link> */}
            </div>
            )
        })}

    </div>)
}
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom"
import Casos from "../casos/casos"
import "./clientes.css"
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
                "firstName": "Matias",
                "lastName": "Taborda",
                "dni": 12336789,
                "celular": 11234523
            },
            "casos": [
                {
                    "juez": "Jose pepito",
                    "numeroExpediente": 1234,
                    "juzgado": 2234,
                    "detalle": "se mamo y le pego al perro",
                    "estado": "cerrado"
                }, {
                    "juez": "jose pepito",
                    "numeroExpediente": 2314,
                    "juzgado": 412,
                    "detalle": "se mamo en plena avenida y causo choques multiples",
                    "estado": "inicio"
                }, {
                    "juez": "jose pepito",
                    "numeroExpediente": 2323114,
                    "juzgado": 4412,
                    "detalle": "se mamo en plena avenida y causo choques multiples",
                    "estado": "inicio"
                }
            ]
        },
        {
            "id": 3,
            "asunto": null,
            "persona": {
                "firstName": "julio",
                "lastName": "Cesar",
                "dni": 32415,
                "celular": 25326
            },
            "casos": [
                {
                    "juez": "jose pepito",
                    "numeroExpediente": 1234,
                    "juzgado": 2234,
                    "detalle": "asdasf",
                    "estado": "inicio"
                }, {
                    "juez": "jose pepito",
                    "numeroExpediente": 2314,
                    "juzgado": 412,
                    "detalle": "se mamo en plena avenida y causo choques multiples",
                    "estado": "inicio"
                }, {
                    "juez": "jose pepito",
                    "numeroExpediente": 2323114,
                    "juzgado": 4412,
                    "detalle": "se mamo en plena avenida y causo choques multiples",
                    "estado": "inicio"
                }
            ]
        }
    ]
}

export default function Clientes() {   //muestra cards de cada cliente con sus casos
    const [clientes, setClientes] = useState([]);


    useEffect(() => {
        setClientes([...aux.clientes])
    }, [])
    const handleClick = function (e, flag) {
        e.preventDefault()
        let cliente = JSON.parse(JSON.stringify(aux.clientes));
        if (flag === 0) {
            cliente.map(e => e.casos = e.casos.filter(e => e.estado !== "cerrado"))
            cliente = cliente.filter(e => e.casos.length > 0)
            setClientes([...cliente])
        } else if (flag === 1) {
            cliente.map(e => e.casos = e.casos.filter(e => e.estado === "cerrado"))
            cliente = cliente.filter(e => e.casos.length > 0)
            setClientes([...cliente])
        } else {
            setClientes([...aux.clientes])
        }
    }

    return (<div className="mt-3 me-3 ms-3 d-inline-flex flex-row">
        <div className="mt-3 me-3 ms-3 d-inline-flex flex-column">
            <button className=" btn  btn-danger  mt-3 mb-3" onClick={(e) => handleClick(e, 0)}>Clientes</button>
            <button className="btn  btn-danger mt-3 mb-3 " onClick={(e) => handleClick(e, 1)}>Historial</button>
            <button className="btn  btn-danger  mt-3 mb-3 " onClick={(e) => handleClick(e, 2)}>Clear All</button>
        </div>

        <div className="conteiner card mt-3 me-3 ms-3 d-inline-flex flex-column">
            {clientes?.map(e => {
                const { id, casos, persona } = e
                return (<div className="conteiner card mt-3 me-3 ms-3 mb-3 d-inline-flex flex-column">
                    <Casos key={id} id={id} casos={casos} persona={persona} />
                    {/* <Link> */}
                    <button className=" btn-warning btn mt-3 mb-3">Crear caso</button>
                    <br />
                    {/* </Link> */}
                </div>
                )
            })}

        </div>
    </div>)
}
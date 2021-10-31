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
                    "estado": "sentencia"
                }, {
                    "juez": "jose pepito",
                    "numeroExpediente": 2323114,
                    "juzgado": 4412,
                    "detalle": "se mamo en plena avenida y causo choques multiples",
                    "estado": "sentencia"
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
                    "estado": "inicial"
                }, {
                    "juez": "jose pepito",
                    "numeroExpediente": 2314,
                    "juzgado": 412,
                    "detalle": "se mamo en plena avenida y causo choques multiples",
                    "estado": "inicial"
                }, {
                    "juez": "jose pepito",
                    "numeroExpediente": 2323114,
                    "juzgado": 4412,
                    "detalle": "se mamo en plena avenida y causo choques multiples",
                    "estado": "proceso"
                }
            ]
        }
    ]
}

export default function Clientes() {   //muestra cards de cada cliente con sus casos
    const [clientes, setClientes] = useState([]);


    useEffect(() => {
        let AllClients = JSON.parse(JSON.stringify(aux.clientes));
        AllClients.map(e => e.casos = e.casos.filter(e => e.estado !== "cerrado"))
        AllClients = AllClients.filter(e => e.casos.length > 0)
        setClientes([...AllClients])
    }, [])

    const handleClick = function (e, flag) {
        e.preventDefault()
        let AllClients = JSON.parse(JSON.stringify(aux.clientes));
        if (flag === 0) {
            AllClients.map(e => e.casos = e.casos.filter(e => e.estado !== "cerrado"))
            AllClients = AllClients.filter(e => e.casos.length > 0)
            setClientes([...AllClients])
        } else if (flag === 1) {
            AllClients.map(e => e.casos = e.casos.filter(e => e.estado === "cerrado"))
            AllClients = AllClients.filter(e => e.casos.length > 0)
            setClientes([...AllClients])
        } else {
            let AllClients = JSON.parse(JSON.stringify(aux.clientes));
            AllClients.map(e => e.casos = e.casos.filter(e => e.estado !== "cerrado"))
            AllClients = AllClients.filter(e => e.casos.length > 0)
            setClientes([...AllClients])
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        let AllClients = JSON.parse(JSON.stringify(aux.clientes));
        if (e.target.value === "inicial") {
            AllClients.map(e => e.casos = e.casos.filter(e => e.estado === "inicial"))
            AllClients = AllClients.filter(e => e.casos.length > 0)
            setClientes([...AllClients])
            if (clientes.length === 0) return <h3>No hay casos con el estado inicial</h3>
        } else if (e.target.value === "Proceso") {
            AllClients.map(e => e.casos = e.casos.filter(e => e.estado === "proceso"))
            AllClients = AllClients.filter(e => e.casos.length > 0)
            setClientes([...AllClients])
            if (clientes.length === 0) return <h3>No hay casos con el estado inicial</h3>
        } else if (e.target.value === "sentencia") {
            AllClients.map(e => e.casos = e.casos.filter(e => e.estado === "sentencia"))
            AllClients = AllClients.filter(e => e.casos.length > 0)
            setClientes([...AllClients])
            if (clientes.length === 0) return <h3>No hay casos con el estado inicial</h3>
        }

    }

    return (<div className="mt-3 me-3 ms-3 d-inline-flex flex-row">
        <div className="mt-3 me-3 ms-3 d-inline-flex flex-column">
            <button className=" btn  btn-danger  mt-3 mb-3" onClick={(e) => handleClick(e, 0)}>Clientes Actuales</button>
            <button className="btn  btn-danger mt-3 mb-3 " onClick={(e) => handleClick(e, 1)}>Historial</button>
            <select class="form-select" aria-label="Default select example" onChange={e => handleChange(e)}>
                <option selected>Seleccion por estado</option>
                <option value="inicial">inicial</option>
                <option value="Proceso">Proceso</option>
                <option value="sentencia">sentencia</option>
            </select>
        </div>

        <div className="conteiner card mt-3 me-3 ms-3  flex-column">
            {clientes?.map(e => {
                const { id, casos, persona } = e
                return (<div className="conteiner card mt-3 me-3 ms-3 mb-3 d-inline-flex flex-column">
                    <Casos key={id} id={id} casos={casos} persona={persona} />
                    {/* <Link> */}
                    <button className=" btn-warning btn mt-3  ms-3 me-3">Crear caso</button>
                    <br />
                    {/* </Link> */}
                </div>
                )
            })}

        </div>
    </div >)
}
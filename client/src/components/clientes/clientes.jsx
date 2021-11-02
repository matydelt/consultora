/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { getAbogado } from "../../redux/actions";
import Casos from "../casos/casos"
import "./clientes.css"
import { Redirect } from "react-router";

let aux = {
    "eMail": "prueba4@gmail.com",
    "firstName": "asfagsdg",
    "lastName": "asdasgsdg",
    "dni": 214126234,
    "celular": 21536267,
    "detalle": null,
    "imagen": null,
    "experiencia": null,
    "estudios": null,
    "clientes": [
        {
            "id": 2,
            "asunto": null,
            "persona": {
                "firstName": "cliente123",
                "lastName": "cliente1234",
                "dni": 214125,
                "celular": 24125246
            },
            "casos": [
                {
                    "juez": "jafgs asfg",
                    "numeroExpediente": 1244,
                    "juzgado": 1234,
                    "detalle": "se mamo y no se",
                    "estado": "sentencia"
                }, {
                    "juez": "jafgs asfg",
                    "numeroExpediente": 1235,
                    "juzgado": 1234,
                    "detalle": "se mamo y cruzo una avenida con el semaforo en verde",
                    "estado": "inicial"
                }
            ]
        },
        {
            "id": 2,
            "asunto": null,
            "persona": {
                "firstName": "pedrito",
                "lastName": "sol",
                "dni": 1245623,
                "celular": 2352626
            },
            "casos": [
                {
                    "juez": "jafgs asfg",
                    "numeroExpediente": 244,
                    "juzgado": 1234,
                    "detalle": "se mamo y no se, paso algo",
                    "estado": "cerrado"
                }, {
                    "juez": "jafgs asfg",
                    "numeroExpediente": 12353,
                    "juzgado": 1234,
                    "detalle": "se mamo y cruzo una avenida con el semaforo en verde",
                    "estado": "inicial"
                }, {
                    "juez": "jafgs asfg",
                    "numeroExpediente": 12356,
                    "juzgado": 1234,
                    "detalle": "se mamo y cruzo una avenida con el semaforo en verde",
                    "estado": "proceso"
                }
            ]
        }
    ]
}


export default function Clientes() {   //muestra cards de cada cliente con sus casos
    const [clientes, setClientes] = useState([]);
    const { usuario, abogado } = useSelector(state => state)
    const dispatch = useDispatch()

    if (!usuario.abogadoId) return (<Redirect to="/" />)
    // console.log(usuario.eMail)
    // useEffect(() => {
    //     dispatch(getAbogado({ "eMail": usuario.eMail }))
    // }, [dispatch, usuario.eMail])
    useEffect(() => {
        if (clientes.length === 0) return (<p>Loading....</p>)
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

    return (
        // clientes.length === 0 ? <p>no hay clientes con estas especificaciones</p> :
        <div className="mt-3 me-3 ms-3 d-inline-flex flex-row">
            <div className="mt-3 me-3 ms-3 d-inline-flex flex-column">
                <button className=" btn  btn-danger  mt-3 mb-3" onClick={(e) => handleClick(e, 0)}>Clientes Actuales</button>
                <button className="btn  btn-danger mt-3 mb-3 " onClick={(e) => handleClick(e, 1)}>Historial</button>
                <select className="form-select" aria-label="Default select example" onChange={e => handleChange(e)}>
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
                        <Link to="/crear/caso">
                            <button className=" btn-warning btn mt-3  ms-3 me-3">Crear caso</button>
                        </Link>
                        <br />
                    </div>
                    )
                })}

            </div>
        </div >)
}
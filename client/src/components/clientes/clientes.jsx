import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { getAbogado } from "../../redux/actions";
import Casos from "../casos/casos"
import "./clientes.css"


export default function Clientes() {   //muestra cards de cada cliente con sus casos
    const [clientes, setClientes] = useState([]);
    const { usuario, abogado } = useSelector(state => state)
    const dispatch = useDispatch()

    console.log(abogado)
    if (!abogado) dispatch(getAbogado(usuario))
    useEffect(() => {
        dispatch(getAbogado(usuario))

    }, [dispatch, usuario])
    useEffect(() => {
        if (clientes.length === 0) return (<p>Loading....</p>)
        let AllClients = JSON.parse(JSON.stringify(abogado.clientes));
        AllClients.map(e => e.casos = e.casos.filter(e => e.estado !== "cerrado"))
        AllClients = AllClients.filter(e => e.casos.length > 0)
        setClientes([...AllClients])
    }, [abogado.clientes, clientes.length])

    const handleClick = function (e, flag) {
        e.preventDefault()
        let AllClients = JSON.parse(JSON.stringify(abogado.clientes));
        if (flag === 0) {
            AllClients.map(e => e.casos = e.casos.filter(e => e.estado !== "cerrado"))
            AllClients = AllClients.filter(e => e.casos.length > 0)
            setClientes([...AllClients])
        } else if (flag === 1) {
            AllClients.map(e => e.casos = e.casos.filter(e => e.estado === "cerrado"))
            AllClients = AllClients.filter(e => e.casos.length > 0)
            setClientes([...AllClients])
        } else {
            let AllClients = JSON.parse(JSON.stringify(abogado.clientes));
            AllClients.map(e => e.casos = e.casos.filter(e => e.estado !== "cerrado"))
            AllClients = AllClients.filter(e => e.casos.length > 0)
            setClientes([...AllClients])
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        let AllClients = JSON.parse(JSON.stringify(abogado.clientes));
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
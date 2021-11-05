/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { getAbogado } from "../../redux/actions";
import Casos from "../casos/casos"
import "./clientes.css"
import { Redirect } from "react-router";


export default function Clientes() {   //muestra cards de cada cliente con sus casos
    const [clientes, setClientes] = useState([]);
    const { usuario, abogado } = useSelector(state => state)
    const dispatch = useDispatch()

    if (!usuario.abogadoId) return (<Redirect to="/" />)

    // if (!abogado) {
    //     dispatch(getAbogado({ "eMail": usuario.eMail }))
    //     return (<p>Loading...</p>)
    // }
    useEffect(() => {
        dispatch(getAbogado({ "eMail": usuario.eMail }))
    }, [dispatch, usuario])
    useEffect(() => {
        if (abogado.clientes === 0) return (<h1>No hay clientes</h1>)
        let AllClients = JSON.parse(JSON.stringify(abogado.clientes));
        AllClients.map(e => e.casos = e.casos.filter(e => e.estado !== "cerrado"))
        AllClients = AllClients.filter(e => e.casos.length > 0)
        setClientes([...AllClients])
    }, [abogado.clientes])

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
        if (e.target.value === "inicio") {
            AllClients.map(e => e.casos = e.casos.filter(e => e.estado === "inicio"))
            AllClients = AllClients.filter(e => e.casos.length > 0)
            setClientes([...AllClients])
            if (clientes.length === 0) return <h3>No hay casos con el estado inicial</h3>
        } else if (e.target.value === "prueba") {
            AllClients.map(e => e.casos = e.casos.filter(e => e.estado === "prueba"))
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
        <div className="mt-3 me-3 ms-3 mb-3 d-inline-flex flex-row">
            <div className="mt-3 me-3 ms-3 d-inline-flex flex-column">
                <button className=" btn  btn-danger  mt-3 mb-3" onClick={(e) => handleClick(e, 0)}>Clientes Actuales</button>
                <button className="btn  btn-danger mt-3 mb-3 " onClick={(e) => handleClick(e, 1)}>Historial</button>
                <select className="form-select" aria-label="Default select example" onChange={e => handleChange(e)}>
                    <option selected>Seleccion por estado</option>
                    <option value="inicio">inicio</option>
                    <option value="prueba">prueba</option>
                    <option value="sentencia">sentencia</option>
                </select>
            </div>

            <div className="conteiner card mt-3 me-3 ms-3  flex-column">
                {clientes?.map(e => {
                    const { id, casos, persona } = e
                    return (<div className="conteiner card mt-3 me-3 ms-3 mb-3 d-inline-flex flex-column">
                        <Casos key={id} id={id} casos={casos} persona={persona} />
                        <Link to="/user/abogado/nuevo-caso">
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary d-flex justify-content-center mt-3 mb-3" >Crear caso </button>
                            </div>
                        </Link>
                    </div>
                    )
                })}

            </div>
        </div >)
}
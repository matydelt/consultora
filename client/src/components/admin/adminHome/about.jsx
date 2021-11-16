import React, { useState } from "react"
import { useDispatch } from "react-redux";

export default function About({ sobreNosotros, nuestraFilosofia, direccion, contacto }) {
    const [flag, setFlag] = useState(false)
    const dispatch = useDispatch();
    const [input, setInput] = useState({

    })



    return (<div className="d-flex justify-content-center">
        {
            flag ?
                <div>
                    <div className="">

                        <form className="form-group">
                            <label>Sobre Nosotros :</label>
                            <textarea placeholder="Sobre Nosotros... " className="form-control" rows="3" ></textarea ><br />
                            <label>Nuestra Filosofía :</label>
                            <textarea placeholder="Nuestra Filosofía..." className="form-control" rows="3"></textarea><br />
                            <label>Nuetra Direccion :</label>
                            <input placeholder="Nuetra Direccion..." className="form-control"></input><br />
                            <label>Contacto :</label>
                            <input placeholder=" Contacto..." className="form-control"></input><br />

                        </form>
                        <div className="d-flex justify-content-center ">
                            <button className="btn btn-warning d-flex justify-content-center ms-3 me-1">Aplicar</button>
                            <button className="btn btn-primary d-flex justify-content-center" onClick={e => { setFlag(false) }}>Terminar</button>
                        </div>
                    </div>
                </div> :
                <div>
                    <ul>
                        <p>sobre Nosotros: {sobreNosotros}</p>
                        <p>Nuestra Filosofia: {nuestraFilosofia}</p>
                        <p>Nuestra Direccion: {direccion}</p>
                        <p>Contacto: {contacto}</p>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary d-flex justify-content-center" onClick={e => { setFlag(true) }}>Modificar</button>
                    </div>
                </div>
        }
    </div>)
}
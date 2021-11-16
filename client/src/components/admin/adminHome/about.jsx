import React, { useState } from "react"
import { useDispatch } from "react-redux";

export default function About({ sobreNosotros, nuestraFilosofia, direccion, contacto }) {
    const [flag, setFlag] = useState(false)
    const dispatch = useDispatch();


    return (<div>
        {
            flag ?
                <div>
                    <form>
                        <ul>
                            <li><input placeholder="Sobre Nosotros..."></input></li>
                            <li><input placeholder="Nuestra Filosofía..."></input></li>
                            <li><input placeholder="Nuetra Direccion..."></input></li>
                            <li><input placeholder="Mi Email De Contacto..."></input></li>
                        </ul>
                    </form>
                    <button onClick={e => { setFlag(false) }}>Terminar</button>
                </div> :
                <div>
                    <ul>
                        <p>sobre Nosotros: {sobreNosotros}</p>
                        <p>Nuestra Filosofia: {nuestraFilosofia}</p>
                        <p>Nuestra Direccion: {direccion}</p>
                        <p>Contacto: {contacto}</p>
                    </ul>
                    <button onClick={e => { setFlag(true) }}>Modificar</button>
                </div>
        }
    </div>)
}
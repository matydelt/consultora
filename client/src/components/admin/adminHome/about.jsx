import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putAbout } from "../../../redux/actions/index";

export default function About(props) {
    const [flag, setFlag] = useState(false);
    const dispatch = useDispatch();

    const { sobreNosotros, nuestraFilosofia, direccion, contacto, id } =
        props.about;
    const [input, setInput] = useState({
        id,
        sobreNosotros,
        nuestraFilosofia,
        direccion,
        contacto,
    });

    return (
        <div>
            {flag ? (
                <div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            dispatch(putAbout(input));
                        }}
                    >
                        <ul>
                            <li>
                                <textarea
                                    placeholder="Sobre Nosotros..."
                                    value={input.sobreNosotros}
                                    onChange={(e) =>
                                        setInput({ ...input, sobreNosotros: e.target.value })
                                    }
                                ></textarea>
                            </li>
                            <li>
                                <textarea
                                    placeholder="Nuestra Filosofía..."
                                    value={input.nuestraFilosofia}
                                    onChange={(e) =>
                                        setInput({ ...input, nuestraFilosofia: e.target.value })
                                    }
                                ></textarea>
                            </li>
                            <li>
                                <input placeholder="Nuetra Direccion..."></input>
                            </li>
                            <li>
                                <input
                                    type="email"
                                    placeholder="Mi Email De Contacto..."
                                ></input>
                            </li>
                        </ul>
                        <button type="submit">Submit</button>
                    </form>
                    <button
                        onClick={(e) => {
                            setFlag(false);
                        }}
                    >
                        Terminar
                    </button>
                </div>
            ) : (
                <div>
                    <ul>
                        <p>Sobre Nosotros: {sobreNosotros}</p>
                        <p>Nuestra Filosofia: {nuestraFilosofia}</p>
                        <p>Nuestra Direccion: {direccion}</p>
                        <p>Contacto: {contacto}</p>
                    </ul>
                    <button
                        onClick={(e) => {
                            setFlag(true);
                        }}
                    >
                        Modificar
                    </button>
                </div>
            )}
        </div>
    );
}
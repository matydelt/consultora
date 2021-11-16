import React, { useState } from "react";

export default function Items({ item, handleDelete }) {
    const [flag, setFlag] = useState(true);
    const [input, setInput] = useState({
        descripcion: item.descripcion,
        id: item.id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        setFlag(true);
    };

    return flag ? (
        <div>

            <li className="list-group-item d-flex  justify-content-center flex-column">
                {input.descripcion}
            </li>
            <button className="btn btn-warning" onClick={() => setFlag(false)}>
                edit
            </button>
            <button className="btn btn-danger " name={input.id} onClick={e => handleDelete(e)}>
                X
            </button>
        </div>
    ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>

                <li className="list-group-item justify-content-center flex-column">
                    <input
                        value={input.descripcion}
                        onChange={(e) => setInput(e.target.value)}
                    ></input>
                </li>
                <button className="btn btn-warning" type="submit">
                    Enviar
                </button>
                <button className="btn btn-danger " name={input.id} onClick={e => handleDelete(e)}>X</button>
            </div>
        </form>
    );
}

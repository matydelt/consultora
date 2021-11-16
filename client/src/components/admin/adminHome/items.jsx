import React, { useState } from "react"

export default function Items({ item, erase }) {
    const [flag, setFlag] = useState(true)
    const [input, setInput] = useState({
        descripcion: item.descripcion,
        id: item.id
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input.item)
        setFlag(true)
    }


    return (
        flag ?
            <li className="list-group-item d-flex  justify-content-center flex-column">{input.item} <button className="btn btn-warning" onClick={e => setFlag(false)}>edit</button><button className="btn btn-danger " onClick={input}>X</button> </li> :
            <form>
                <li className="list-group-item justify-content-center flex-column"><input value={input.item} onChange={e => setInput(e.target.value)}></input><button className="btn btn-warning" type="submit" onSubmit={e => handleSubmit(e)}>Enviar</button><button className="btn btn-danger " onClick={e => erase(input)}>X</button> </li >
            </form >
    )
}
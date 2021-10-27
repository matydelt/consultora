import React, { useEffect, useState } from "react";
import { Casos } from "../casos/casos.jsx"
let aux = {
    "eMail": "prueba@gmail.com",
    "password": "asdasd",
    "firstName": "Pepito",
    "lastName": "pe",
    "dni": 23456451,
    "celular": 11234523,
    "abogado": {
        "id": 1,
        "detalle": null,
        "createdAt": "2021-10-27T20:22:00.172Z",
        "updatedAt": "2021-10-27T20:22:00.172Z",
        "clientes": [
            {
                "id": 3,
                "asunto": null,
                "createdAt": "2021-10-27T20:21:52.719Z",
                "updatedAt": "2021-10-27T20:22:16.544Z",
                "casoNumeroExpediente": null,
                "abogadoId": 1
            }
        ]
    }
}

export default function Clientes() {   //muestra cards de cada cliente con sus casos
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        setClientes([...clientes, aux])
    }, [])

    return (<>
        {clientes.map(e => {
            <Casos cliente={e.abogado.clientes} />
        })}

    </>)
}
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Casos from "../casos/casos"
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
                "firstName": "matias",
                "dni": 12336789,
                "lastName": "Taborda",
                "celular": 11234523,
                "createdAt": "2021-10-28T13:11:41.007Z",
                "updatedAt": "2021-10-28T13:11:41.016Z",
                "clienteId": 3,
                "abogadoId": null
            },
            "casos": []
        }
    ]
}

export default function Clientes() {   //muestra cards de cada cliente con sus casos
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        setClientes(aux.clientes)
    }, [])
    return (<>
        {clientes?.map(e => {
            const { id, casos, persona } = e
            return (<>
                <Casos id={id} casos={casos} persona={persona} />
            </>
            )
        })}

    </>)
}
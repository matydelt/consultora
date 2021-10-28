import React, { useEffect, useState } from "react";
let aux = [
    {
        "eMail": "prueba@gmail.com",
        "password": "asdasd",
        "firstName": "Pepito",
        "lastName": "pe",
        "dni": 23456451,
        "celular": 11234523,
        "detalle": null
    },
    [
        {
            "id": 3,
            "asunto": null,
            "createdAt": "2021-10-28T13:11:41.008Z",
            "updatedAt": "2021-10-28T13:11:46.885Z",
            "abogadoId": 1,
            "persona": {
                "firstName": "matias",
                "dni": 12336789,
                "lastName": "Taborda",
                "celular": 11234523,
                "createdAt": "2021-10-28T13:11:41.007Z",
                "updatedAt": "2021-10-28T13:11:41.016Z",
                "clienteId": 3,
                "abogadoId": null
            }
        },
        {
            "casos": []
        }
    ]
]

export default function Clientes() {   //muestra cards de cada cliente con sus casos
    const [clientes, setClientes] = useState([]);
    const [abogado, setAbogado] = useState({})

    useEffect(() => {
        setClientes([...clientes, aux[1]])
        setAbogado([...abogado, aux[0]])
    }, [abogado, clientes])
    console.log(clientes)

    return (<>
        {clientes.map(e => {

        })}

    </>)
}
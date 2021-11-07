import React from 'react';
import ConsultasUsuario from './consultasUsuario/ConsultasUsuario';
import UsuarioNavBar from './usuarioNavBar/UsuarioNavBar'

export default function HomeAbogado() {

    return (<>
        <UsuarioNavBar></UsuarioNavBar>

        <div className="container mt-5">

            <h1>Bienvenido al panel de gestiones</h1>
            <hr></hr>

            <h4 className="my-4">En este panel podrá realizar las siguientes gestiones:</h4>
            <ul>
                <li>O Generar una nueva consultas</li>
                <li>O Ver el estado de sus consultas y casos</li>
            </ul>


            {/* <ConsultasUsuario></ConsultasUsuario> */}
        </div>

    </>)
}
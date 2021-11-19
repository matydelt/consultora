import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
// import ConsultasUsuario from './consultasUsuario/ConsultasUsuario';
import UsuarioNavBar from "./usuarioNavBar/UsuarioNavBar";

export default function HomeAbogado() {
  let { usuario } = useSelector((state) => state);

  return (
    <>
      {usuario.abogadoId && <Redirect to="/"></Redirect>}

      <UsuarioNavBar></UsuarioNavBar>

      <div className="container mt-5">
        <h1>Bienvenido al panel de gestiones</h1>

        <hr></hr>

        <h4 className="my-4">
          En este panel podrá realizar las siguientes gestiones:
        </h4>
        <ul>
          <li>- Generar una nueva consultas</li>
          <li>- Ver el estado de sus consultas y casos</li>
          <li>- Abonar sus consultas</li>
          <li>
            - Gestionar turnos una vez un abogado haya aceptado su consulta
          </li>
        </ul>

        {/* <ConsultasUsuario></ConsultasUsuario> */}
      </div>
    </>
  );
}

import React from "react";

import { useSelector } from "react-redux";
import { Redirect } from "react-router";
// import ConsultasUsuario from './consultasUsuario/ConsultasUsuario';
import UsuarioNavBar from "./usuarioNavBar/UsuarioNavBar";
import Footer from '../home-Abogado/Footer/Footer'
import './HomeUsuario.css'

export default function HomeAbogado() {
  let { usuario } = useSelector((state) => state);

  return (
    <div className="homeUsuario">
      {usuario.abogadoId && <Redirect to="/"></Redirect>}

      <UsuarioNavBar></UsuarioNavBar>

      <div className="homeUsuario homePanel">
        <h1>Bienvenido al panel de gestiones.</h1>
        <h4 className="my-4">
          En este panel podrá realizar las siguientes gestiones:
        </h4>
        <ul>
          <li>Generar una nueva consultas</li>
          <li>Ver el estado de sus consultas y casos</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import NavAbogado from "./NavAbogado/NavAbogado";
import "./HomeAbogado.css";
import VistaConsultasAbogado from "../vistaConsultasAbogado/VistaConsultasAbogado";
import Clientes from "../clientes/clientes";

export default function HomeAbogado() {
  const abogado = useSelector((state) => state.abogado);
  const usuario = useSelector((state) => state.usuario);

  let history = useHistory();
  if (!abogado.abogado.hasOwnProperty("id") && usuario) {
    history.push("/");
  } else if (usuario.abogadoId === null) {
    history.push("/usuario/usuario");
  }

  return (
    <div>
      <NavAbogado />
      <h3>Clientes</h3>
      <Clientes />
      <h3>Consultas</h3>
      <VistaConsultasAbogado />

      <Footer />
    </div>
  );
}

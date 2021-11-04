import React from "react";
import Footer from "./Footer/Footer";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import NavAbogado from "./NavAbogado/NavAbogado";
import Clientes from "../clientes/clientes";
import VistaConsultasAbogado from "../vistaConsultasAbogado/VistaConsultasAbogado";

export default function HomeAbogado() {
  const { usuario, abogado } = useSelector((state) => state);

  let history = useHistory();
  if (abogado && usuario) {
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

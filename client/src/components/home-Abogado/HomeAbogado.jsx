import React, { useEffect } from "react";
import Footer from "./Footer/Footer";
import NavAbogado from "./NavAbogado/NavAbogado";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";

export default function HomeAbogado() {

  const { usuario, abogado } = useSelector(state => state)


  // let history = useHistory();
  // if (abogado && usuario) {
  //   history.push("/");
  // } else if (usuario) {
  //   history.push("/usuario/usuario");
  // }
  console.log(usuario.abogadoId)
  return (
    !usuario.abogadoId ? <Redirect to="/" /> :
      <div>
        <NavAbogado />
        <div>
          What is Lorem Ipsum? <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions
          of Lorem Ipsum.
        </div>
        <Footer />
      </div>
  );
}

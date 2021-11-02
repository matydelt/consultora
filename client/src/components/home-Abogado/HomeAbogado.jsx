import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import NavAbogado from "./NavAbogado/NavAbogado";
import "./HomeAbogado.css";
import axios from "axios";
import Casos from "../casos/casos";

export default function HomeAbogado() {
  const abogado = useSelector((state) => state.abogado);
  const usuario = useSelector((state) => state.usuario);
  const [casos, setcasos] = useState([]);

  let history = useHistory();
  if (!abogado.abogado.hasOwnProperty("id") && usuario) {
    history.push("/");
  } else if (usuario.abogadoId === null) {
    history.push("/usuario/usuario");
  }

  async function getCasos() {
    let aux = await axios.get("http://localhost:3001/casos");
    setcasos(aux.result);
  }
  useEffect(() => {
    getCasos();
  }, []);

  return (
    <div>
      <NavAbogado />
      home abogado
      <Footer />
    </div>
  );
}

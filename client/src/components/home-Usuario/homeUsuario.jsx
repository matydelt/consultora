import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCasos } from "../../redux/actions/index";
import Casos from "../casos/casos";

export default function HomeUsuario() {
  const dispatch = useDispatch();
  const { casos, usuario } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCasos(usuario.clienteId));
  }, [dispatch, usuario]);

  if (!casos.count) {
    return <p>No tienes casos</p>;
  }

  return (
    <div>
      <Casos casos={casos.result} persona={usuario} />
    </div>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCasos } from "../../redux/actions/index";

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
      <p>Home Usuario</p>
      {casos.result?.map((caso) => (
        <div>{caso}</div>
      ))}
    </div>
  );
}

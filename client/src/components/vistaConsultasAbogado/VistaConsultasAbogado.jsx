import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { asignarConsulta, getConsultas } from "../../redux/actions";
import Consulta from "../Consulta/Consulta";
import "./VistaConsultasAbogados.css";

export default function VistaConsultasAbogado() {
  const abogado = useSelector((state) => state.abogado);
  const usuario = useSelector((state) => state.usuario);

  let history = useHistory();
  if (!abogado.abogado.hasOwnProperty("id") && usuario) {
    history.push("/");
  } else if (usuario.abogadoId === null) {
    history.push("/usuario/usuario");
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConsultas());
  }, [dispatch]);

  const consultas = useSelector((state) => state.consultas);

  return (
    <>
      <div className="card-group">
        {consultas.map((consulta) => {
          return (
            <div className="card">
              <Consulta
                key={consulta.id}
                nombre={consulta.nombre}
                apellido={consulta.apellido}
                telefono={consulta.telefono}
                email={consulta.email}
                mensaje={consulta.mensaje}
                abogadoId={consulta.abogadoId}
              />
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() =>
                  dispatch(asignarConsulta(consulta.id, abogado.abogado.id))
                }
              >
                Asignar
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

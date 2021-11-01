import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConsultas } from "../../redux/actions";
import Consulta from "../Consulta/Consulta";
import "./VistaConsultasAbogados.css";

export default function VistaConsultasAbogado() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConsultas());
  }, [dispatch]);
  const consultas = useSelector((state) => state.consultas);
  console.log(consultas);
  return (
    <>
      <div className="consultas">
        {consultas.map((consulta) => {
          return (
            <Consulta
              key={consulta.id}
              nombre={consulta.nombre}
              apellido={consulta.apellido}
              telefono={consulta.telefono}
              email={consulta.email}
              mensaje={consulta.mensaje}
            />
          );
        })}
      </div>
    </>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConsultas } from "../../redux/actions";
import ModalConsulta from "./modalConsulta/ModalConsulta";
import "./VistaConsultasAbogados.css";

export default function VistaConsultasAbogado() {

  const dispatch = useDispatch();
  const consultas = useSelector((state) => state.consultas);
  const usuario = useSelector((state) => state.usuario);

  useEffect(() => {
    dispatch(getConsultas());
  }, []);
  
  console.log(consultas);

  return (
    <>
      <div className="my-5 mx-1">


        <table className="table table-hover table-striped">
          <thead className="text-center">
            <tr>
              <th scope="col">Estado</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Email</th>
              <th scope="col">Mensaje</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>

            {consultas.map((consulta, i) => {
              return (
                <tr key={i} className="text-center">
                  {consulta.abogadoId ?
                    <td className="align-middle"><span className="badge bg-warning">Tomada</span></td>
                    :
                    <td className="align-middle"><span className="badge bg-success">Libre</span></td>
                  }

                  <td className="align-middle">{consulta.nombre}</td>
                  <td className="align-middle">{consulta.apellido}</td>
                  <td className="align-middle">{consulta.telefono}</td>
                  <td className="align-middle">{consulta.email}</td>
                  <td className="align-middle" className="w-50">{consulta.mensaje}</td>
                  <td className="align-middle">

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modal${i}`}>
                      Ver detalle
                    </button>
                    <ModalConsulta consulta={consulta} usuario={usuario} modalId={i} />
                  </td>
                </tr>

              );
            })}
            <tr>
            </tr>
          </tbody>
        </table>

        {/* <ModalConsulta></ModalConsulta> */}

        {/* <div className="consultas">
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
        </div> */}



      </div>
    </>
  );
}

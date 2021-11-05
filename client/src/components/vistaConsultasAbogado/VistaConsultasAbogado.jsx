import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getConsultas } from "../../redux/actions";
import ModalConsulta from "./modalConsulta/ModalConsulta";
import TablaVistasConsultas from "./tablaVistasConsultas/TablaVistasConsultas";
import "./VistaConsultasAbogados.css";

export default function VistaConsultasAbogado() {

  const dispatch = useDispatch();
  const { consultas, usuario } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getConsultas());
  }, []);


  function actualizarConsultas() {
    dispatch(getConsultas());
    toast.success('Las consultas fueron actualizadas')
  };

  return (
    <>
      <ModalConsulta usuario={usuario} modalId={`modalConsulta`} />


      <nav className="text-center mt-5">
        <div className="nav nav-tabs text-center" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Todas</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Aceptadas</button>
          {/* <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button> */}
          <button onClick={actualizarConsultas} className="mx-5 btn btn-light border">@ Actualizar</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

          <TablaVistasConsultas consultas={consultas} usuario={usuario}></TablaVistasConsultas>

        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

          <TablaVistasConsultas consultas={consultas} usuario={usuario} aceptadas={true}></TablaVistasConsultas>

        </div>
        {/* <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div> */}
      </div>



    </>
  );
}

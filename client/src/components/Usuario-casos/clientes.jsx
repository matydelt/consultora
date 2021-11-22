import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { getAbogados, getCasos, getMaterias } from "../../redux/actions";
import swal from 'sweetalert';
import { toast } from 'react-toastify';
import Footer from "../home-Abogado/Footer/Footer";
import "./clientes.css";
import UsuarioNavBar from "../homeUsuario/usuarioNavBar/UsuarioNavBar";


export default function UsuCaso() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCasos({clienteId:usuario.clienteId}))
}, [dispatch]);
  const { usuario, casos, abogados } = useSelector(state => state);

  // const [abogadosCasos, setAbogados] = useState('');
  const [usrCasosInicio, setUsrCasosInicio] = useState('');
  const [usrCasosPruebas, setUsrCasosPruebas] = useState('');
  const [usrCasosSentencia, setUsrCasosSentencia] = useState('');
  const [usrCasosCerrado, setUsrCasosCerrado] = useState('');

function Filtros(){
  // setAbogados(CasosUsr)
  setUsrCasosInicio(casos.result.map(e=>e.estado).filter(e=>e=='inicio'))
  setUsrCasosPruebas(casos.result.map(e=>e.estado).filter(e=>e=='prueba'))
  setUsrCasosSentencia(casos.result.map(e=>e.estado).filter(e=>e=='sentencia'))
  setUsrCasosCerrado(casos.result.map(e=>e.estado).filter(e=>e=='cerrado'))
}
  return (
    <>
      <UsuarioNavBar/>

      <div className="container mt-5">
        <h1>Listado de Casos</h1>
        <hr></hr>
      </div>

      <table className="table table-hover mt-7">
        <thead>
          <tr>
            <th>Juez</th>
            <th>NroExpediente</th>
            <th>NroLiquidacion</th>
            <th>Juzgado</th>
            <th>Estado</th>
            <th>Jurisdiccion</th>
            <th>Abogado</th>
          </tr>
        </thead>
        <tbody>
          {casos?.result
            ?.map((c) => {
              console.log(abogados.filter(f=>f.id==c.abogadoId));
              console.log(c.abogadoId);
              console.log(abogados[0].id);
              return (
                <tr key={c.id} className="w-25">
                  <td> {c.juez.toUpperCase()} </td>
                  <td >{c.numeroExpediente}</td>
                  <td> {c.numeroLiquidacion} </td>
                  <td>{c.juzgado}</td>
                  <td>{c.estado.toUpperCase()}</td>
                  <td>{c.jurisdiccion}</td>
                  <td>{abogados.filter(f=>f.id==c.abogadoId)}</td>
                  {/* array.filter(e=>e.a==obj.a) */}
                </tr>
              );
            })}
        </tbody>
      </table>
      <Footer />
    </>
  );
}

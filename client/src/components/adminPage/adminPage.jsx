/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
import React, { useEffect, useState } from "react";
import {
  getClientes,
  getUsuarios,
  putClienteAbogado,
  setAbogado,
  setAdmin,
  setBann,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Navbar from "../home-page/Navbar/Navbar";
import {
  getAuth,
  sendPasswordResetEmail,
  updatePassword,
} from "@firebase/auth";

export default function AdminPage() {
  const dispatch = useDispatch()
  const [out, setOut] = useState("usuarios")
  const { usuario, clients } = useSelector(state => state)
  const allUsers = useSelector(state => state.usuarios)
  var alertPlaceholder = document.getElementById('liveAlertPlaceholder')

  useEffect(() => {
    dispatch(getClientes())
    dispatch(getUsuarios())
  }, [])


  const hadleChange = (e, type) => {
    e.preventDefault();
    let eMail = e.target.value;
    let aux = allUsers.find((e) => e.eMail === eMail);
    console.log(aux);
    if (type === "abogado") {
      if (aux.adminId !== 1 || usuario.adminId === 1) {
        let mensaje = "";
        let type = "";
        let user = { eMail: e.target.value, flag: e.target.checked };
        dispatch(setAbogado(user));
        if (user.flag) {
          mensaje = "Abogado asignado";
          type = "success";
        } else {
          mensaje = "Abogado eliminado";
          type = "danger";
        }
        var wrapper = document.createElement("div");
        wrapper.innerHTML =
          '<div class="alert alert-' +
          type +
          ' alert-dismissible" role="alert">' +
          mensaje +
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        alertPlaceholder.append(wrapper);
      } else {
        let mensaje = "No tienes estos permisos";
        let type = "danger";
        var wrapper = document.createElement("div");
        wrapper.innerHTML =
          '<div class="alert alert-' +
          type +
          ' alert-dismissible" role="alert">' +
          mensaje +
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        alertPlaceholder.append(wrapper);
      }
    } else if (type === "admin") {
      if (aux.adminId !== 1) {
        let mensaje = "";
        let type = "";
        let user = { eMail: e.target.value, flag: e.target.checked };
        dispatch(setAdmin(user));
        if (user.flag) {
          mensaje = "admin  asignado";
          type = "success";
        } else {
          mensaje = "admin eliminado";
          type = "danger";
        }
        var wrapper = document.createElement("div");
        wrapper.innerHTML =
          '<div class="alert alert-' +
          type +
          ' alert-dismissible" role="alert">' +
          mensaje +
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

        alertPlaceholder?.append(wrapper);
      } else {
        let mensaje = "no puede hacer eso!";
        let type = "danger";
        var wrapper = document.createElement("div");
        wrapper.innerHTML =
          '<div class="alert alert-' +
          type +
          ' alert-dismissible" role="alert">' +
          mensaje +
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        alertPlaceholder.append(wrapper);
      }
    } else if (type === "bann") {
      if (usuario.adminId === 1 && aux.adminId !== 1) {
        let mensaje = "";
        let type = "";
        let user = { eMail: e.target.value, flag: e.target.checked };
        dispatch(setBann(user));
        if (user.flag) {
          mensaje = "bann asignado";
          type = "success";
        } else {
          mensaje = "bann eliminado";
          type = "danger";
        }
        var wrapper = document.createElement("div");
        wrapper.innerHTML =
          '<div class="alert alert-' +
          type +
          ' alert-dismissible" role="alert">' +
          mensaje +
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        alertPlaceholder.append(wrapper);
      } else {
        let mensaje = "no puede hacer eso!";
        type = "danger";
        var wrapper = document.createElement("div");
        wrapper.innerHTML =
          '<div class="alert alert-' +
          type +
          ' alert-dismissible" role="alert">' +
          mensaje +
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        alertPlaceholder.append(wrapper);
      }
    }
  };
  const handleChangeAbogado = (e, clienteId, abogadoId) => {
    e.preventDefault()
    const cambios = { abogado: e.target.value, cliente: clienteId, abogadoAntiguo: abogadoId }
    console.log(cambios)
    if ((cambios.abogado !== undefined && cambios.abogado !== "") && cambios.cliente !== undefined) {
      dispatch(putClienteAbogado(cambios))
    }
  }
  const abogados = allUsers.filter(e => e.abogadoId !== null)
  if (usuario.adminId === undefined) return <Redirect to="/" />
  return (
    <div className="mt-3" >
      <Navbar navId={"menu"} />
      <div className=" d-flex bd-highlight">

        <div className="flex-column d-flex ">

          <button className="btn mb-3 btn-primary " onClick={e => setOut("usuarios")}>Usuarios</button>
          <button className="btn mb-3 btn-primary" onClick={e => setOut("clientes")}>Clientes</button>
        </div>
        {out === "usuarios" ?
          <div className="ms-2 me-2 mt-2 mb-3 p-2 bd-highlight w-100">
            <table className="table table-striped  ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Admin</th>
                  <th scope="col">Abogado</th>
                  <th scope="col">Banneado</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Dni</th>
                </tr>
              </thead>
              <tbody>
                {allUsers?.map((e, i) => {
                  let type = ""
                  return (
                    <tr key={i}>
                      <th scope="row">{i}</th>
                      {e.adminId ? usuario.adminId !== 1 || e.adminId === 1 ?
                        <td >
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "admin") }} defaultChecked disabled />
                        </td> :
                        <td >
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "admin") }} defaultChecked />
                        </td> : usuario.adminId !== 1 || e.adminId === 1 ?
                        <td >
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "admin") }} disabled />
                        </td> : <td >
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "admin") }} />
                        </td>
                      }
                      {e.abogadoId ? usuario.eMail === e.eMail || (e.adminId !== 1 || usuario.adminId === 1) ?
                        <td >
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "abogado") }} defaultChecked />
                        </td> :
                        <td >
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "abogado") }} defaultChecked disabled />
                        </td> : usuario.eMail !== e.eMail || (e.adminId !== 1 || usuario.adminId === 1) ?
                        <td >
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "abogado") }} />
                        </td> :
                        <td >
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "abogado") }} disabled />
                        </td>
                      }
                      {e.banned ? usuario.adminId === 1 && e.adminId !== 1 ?
                        <td >
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "bann") }} defaultChecked />
                        </td> :
                        <td >
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "bann") }} defaultChecked disabled />
                        </td> : usuario.adminId === 1 && e.adminId !== 1 ?
                        <td >
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "bann") }} />
                        </td> :
                        <td >
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "bann") }} disabled />
                        </td>
                      }
                      <td>{e.eMail}</td>
                      <td>{e.personaDni} </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div id="liveAlertPlaceholder">
              <div className="alert alert-danger alert-dismissible" role="alert">Cuidado una vez eliminado el estado de abogado el mismo pierde todo!<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>
            </div>
          </div> :
          <div className="ms-2 me-2 mt-2 mb-3 p-2 bd-highlight w-100">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Cliente</th>
                  <th scope="col">Abogado asignado</th>
                  <th scope="col">casos</th>
                </tr>
              </thead>
              <tbody>
                {
                  clients.map((e, i) => {
                    const { persona } = e
                    const personaAbogado = e.abogados[0]?.persona
                    const clienteId = e.id
                    const aux = e.casos.filter(e => e.estado !== "cerrado")
                    return (
                      <>
                        <tr key={i}>
                          <th scope="row">{i}</th>
                          <td>{persona.firstName} {persona.lastName}</td>
                          <td><select className="form-select w-25" onChange={h => handleChangeAbogado(h, clienteId, e.abogados[0]?.id)}>
                            <option value={null}>ninguno</option>
                            {e.abogados.length !== 0 ?
                              abogados.map(e => {
                                if (personaAbogado.dni === e.personaDni) {
                                  return (<option value={e.eMail} selected>{e.slug}</option>)
                                } else return <option value={e.eMail} >{e.slug} </option>
                              }) :
                              abogados.map((e, i) => {
                                if (i === 0) return (
                                  <option value={e.eMail}>{e.slug} </option>)
                                return <option value={e.eMail} >{e.slug} </option>
                              })
                            }
                          </select></td>
                          <td>{aux.length > 0 ? aux.length : "no tiene"}</td>
                        </tr>
                      </>
                    )
                  })
                }
              </tbody>
            </table>

          </div>

        }
      </div>
    </div>
  )

}

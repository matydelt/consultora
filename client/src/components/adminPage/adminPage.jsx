/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
import React, { useEffect, useState } from "react";
import {
  getUsuarios,
  setAbogado,
  setAdmin,
  setBann,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import Navbar from "../home-page/Navbar/Navbar";
import {
  getAuth,
  sendPasswordResetEmail,
  updatePassword,
} from "@firebase/auth";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";
import Materia from "../Materia/Materia";

export default function AdminPage() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { usuario } = useSelector((state) => state);
  const allUsers = useSelector((state) => state.usuarios);
  let alertPlaceholder = document.getElementById("liveAlertPlaceholder");

  useEffect(() => {
    dispatch(getUsuarios());
  }, []);

  const handleChange = (e, type) => {
    e.preventDefault();
    setCount((count) => count + 1);
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
        alertPlaceholder.append(wrapper);
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

  return !usuario.adminId ? (
    <Redirect to="/" />
  ) : (
    <div style={{ backgroundColor: "#EEEEEE" }}>
      {/* <Navbar navId={"menu"} /> */}
      <div className="ms-5 me-5 mt-3 mb-3">
        {/* <table className="table table-striped  ">
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
              let type = "";
              return (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  {e.adminId ? (
                    usuario.adminId !== 1 || e.adminId === 1 ? (
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          value={e.eMail}
                          onInput={(e) => {
                            handleChange(e, (type = "admin"));
                          }}
                          defaultChecked
                          disabled
                        />
                      </td>
                    ) : (
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          value={e.eMail}
                          onInput={(e) => {
                            handleChange(e, (type = "admin"));
                          }}
                          defaultChecked
                        />
                      </td>
                    )
                  ) : usuario.adminId !== 1 || e.adminId === 1 ? (
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        value={e.eMail}
                        onInput={(e) => {
                          handleChange(e, (type = "admin"));
                        }}
                        disabled
                      />
                    </td>
                  ) : (
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        value={e.eMail}
                        onInput={(e) => {
                          handleChange(e, (type = "admin"));
                        }}
                      />
                    </td>
                  )}
                  {e.abogadoId ? (
                    usuario.eMail === e.eMail ||
                    e.adminId !== 1 ||
                    usuario.adminId === 1 ? (
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          value={e.eMail}
                          onInput={(e) => {
                            handleChange(e, (type = "abogado"));
                          }}
                          defaultChecked
                        />
                      </td>
                    ) : (
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          value={e.eMail}
                          onInput={(e) => {
                            handleChange(e, (type = "abogado"));
                          }}
                          defaultChecked
                          disabled
                        />
                      </td>
                    )
                  ) : usuario.eMail !== e.eMail ||
                    e.adminId !== 1 ||
                    usuario.adminId === 1 ? (
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        value={e.eMail}
                        onInput={(e) => {
                          handleChange(e, (type = "abogado"));
                        }}
                      />
                    </td>
                  ) : (
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        value={e.eMail}
                        onInput={(e) => {
                          handleChange(e, (type = "abogado"));
                        }}
                        disabled
                      />
                    </td>
                  )}
                  {e.banned ? (
                    usuario.adminId === 1 && e.adminId !== 1 ? (
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          value={e.eMail}
                          onInput={(e) => {
                            handleChange(e, (type = "bann"));
                          }}
                          defaultChecked
                        />
                      </td>
                    ) : (
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          value={e.eMail}
                          onInput={(e) => {
                            handleChange(e, (type = "bann"));
                          }}
                          defaultChecked
                          disabled
                        />
                      </td>
                    )
                  ) : usuario.adminId === 1 && e.adminId !== 1 ? (
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        value={e.eMail}
                        onInput={(e) => {
                          handleChange(e, (type = "bann"));
                        }}
                      />
                    </td>
                  ) : (
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        value={e.eMail}
                        onInput={(e) => {
                          handleChange(e, (type = "bann"));
                        }}
                        disabled
                      />
                    </td>
                  )}
                  <td>{e.eMail}</td>
                  <td>{e.personaDni} </td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Route path="/admin" exact component={Dashboard} />
          <Route path="/admin/users" exact component={Materia} />
        </div>
        {/* <div id="liveAlertPlaceholder">
          <div className="alert alert-danger alert-dismissible" role="alert">
            Cuidado una vez eliminado el estado de abogado el mismo pierde todo!
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

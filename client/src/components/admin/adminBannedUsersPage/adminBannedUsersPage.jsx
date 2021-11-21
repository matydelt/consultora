import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBann } from "../../../redux/actions/index";
import FoldOutMenu from "../Sidebar/FoldOutMenu";
import "./adminBannedUsersPage.css";

const AdminBannedUsersPage = () => {
  const { usuarios } = useSelector((state) => state);
  const dispatch = useDispatch();
  let alertPlaceholder = document.getElementById("liveAlertPlaceholder");

  const getBannedUsers = () => {
    const bannedUsers = usuarios.filter((usuario) => usuario.banned === true);
    return bannedUsers;
  };

  const bannedUsers = getBannedUsers();

  const handleChange = (e, user) => {
    e.preventDefault();
    let mensaje = "";
    let type = "";
    dispatch(setBann(user));
    if (e.target.checked) {
      mensaje = "ban asignado";
      type = "success";
    } else {
      mensaje = "ban eliminado";
      type = "danger";
    }
    let wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class="alert alert-${type} alert-dismissible" role="alert">
    ${mensaje}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    alertPlaceholder.append(wrapper);
  };

  if (!bannedUsers.length) {
    return (
      <div style={{ backgroundColor: "#EEEEEE" }}>
        <FoldOutMenu />
        <div style={{ display: "flex", paddingTop: "20px" }}>
      <h1 style={{ margin: "auto" }}>Actualmente no hay usuarios banneados</h1>
      </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#EEEEEE" }}>
      <FoldOutMenu />
      <div style={{ display: "flex", paddingTop: "20px" }}>
        <div id="adminBannedUsersPage">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Banneado</th>
                <th scope="col">Usuario</th>
                <th scope="col">DNI</th>
              </tr>
            </thead>
            <tbody>
              {bannedUsers.map((user, index) => {
                return (
                  <tr key={index} style={{ verticalAlign: "middle" }}>
                    <th scope="row">{index}</th>
                      <td>
                        <label className="switch">
                          <input
                            type="checkbox"
                            defaultChecked
                            onInput={(e) => handleChange(e, user)}
                          />
                          <span className="slider"></span>
                        </label>
                      </td>
                    <td>{user.eMail}</td>
                  <td>{user.personaDni}</td>
                </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBannedUsersPage;

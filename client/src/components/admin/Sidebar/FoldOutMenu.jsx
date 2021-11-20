import "./FoldOutMenu.css";
import { Link, useLocation } from "react-router-dom";
import { getAuth, signOut } from "@firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { getUsuario } from "../../../redux/actions";

const FoldOutMenu = () => {
  const location = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();
  const auth = getAuth();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(getUsuario({}));
        history.push("/");
        toast.info("La sesión fue finalizada");
        localStorage.removeItem("username");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <nav role="navigation" className="nav-admin">
        <div id="menuToggleAdmin">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="admin-menu">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/admin">
              <li
                className={
                  location?.pathname === "/admin" ? "selected" : undefined
                }
              >
                Dashboard
              </li>
            </Link>
            <Link to="/admin/users">
              <li
                className={
                  location?.pathname === "/admin/users" ? "selected" : undefined
                }
              >
                Users
              </li>
            </Link>
            <Link to="/admin/users/new">
              <li
                className={
                  location?.pathname === "/admin/users/new"
                    ? "selected"
                    : undefined
                }
              >
                New Users
              </li>
            </Link>
            <Link to="/admin/users/banned">
              <li
                className={
                  location?.pathname === "/admin/users/banned"
                    ? "selected"
                    : undefined
                }
              >
                Banned Users
              </li>
            </Link>
            <Link to="/admin/users/clientes">
              <li
                className={
                  location?.pathname === "/admin/users/clientes"
                    ? "selected"
                    : undefined
                }
              >
                Clientes
              </li>
            </Link>
            <Link to="/admin/About">
              <li
                className={
                  location?.pathname === "/admin/About" ? "selected" : undefined
                }
              >
                About
              </li>
            </Link>
          </ul>
        </div>
        <input
          type="button"
          value="Salir👋"
          className="btn-dangerAdmin"
          onClick={logout}
        />
      </nav>
    </>
  );
};

export default FoldOutMenu;

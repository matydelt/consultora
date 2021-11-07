/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../assets/img/buffet-buffet-law.png";
import ButtonsNav from "../../ButtonsNav/ButtonsNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
import { getAuth, signOut } from "@firebase/auth";
import { getUsuario } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
const Navbar = ({ navId }) => {
  let usuario = useSelector((state) => state.usuario);
  const dispatch = useDispatch();
  const auth = getAuth();
  const history = useHistory();


  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(getUsuario({}));
        history.push("/");
        toast.info("La sesión fue finalizada");
        localStorage.removeItem('username')
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav id={navId} className="col-12 col-xl-12">
      <ul className="widht_li row col-xxl-12 justify-content-evenly align-items-center border-bottom">
        <li className="col-xl-1">
          <Link to="/">Home</Link>
        </li>

        <li className="col-xl-1">
          <ButtonsNav link="#" text="Nosotros" />
        </li>

        <img src={Logo} alt="Logo" className="col-xl-1 imgLogo" />

        <li className="col-xl-1">
          {/* <a className="textDecoration" href="#contain_title_abogado">Nuestro Equipo</a> */}
          <Link to="/abogados">
            <span className="textDecoration">Nuestro Equipo</span>
          </Link>
        </li>

        {localStorage.getItem('username') || usuario.firstName ? (
          <li>
            {!usuario.abogadoId && !usuario.dataValues && (
              <div class="dropdown">
                <a
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {localStorage.getItem('username') || usuario.firstName}
                </a>

                <ul
                  class="dropdown-menu bg-light shadow border-0"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <ButtonsNav link={"/user/panel"} text="Gestiones" />
                  <span onClick={logout} class="dropdown-item pointer">
                    Cerrar sesión
                  </span>
                </ul>
              </div>
            )}

            {(usuario?.abogadoId || usuario?.dataValues?.abogado?.id) && (
              <div class="dropdown">
                <a
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {usuario.firstName}
                </a>

                <ul
                  class="dropdown-menu bg-light shadow border-0"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {/* { <ul class="dropdown-menu bg-light shadow border-0" aria-labelledby="dropdownMenuButton1"> */}
                  {/* <span class="dropdown-item pointer" href="#">Panel</span> */}
                  <Link to="/user/abogado">
                    <span class="dropdown-item pointer">Panel</span>
                  </Link>

                  <span onClick={logout} class="dropdown-item pointer">
                    Cerrar sesión
                  </span>
                </ul>
              </div>
            )}
          </li>
        ) : (
          <li className="col-xl-1">
            {/* <Link to="/signup"> */}
            <ButtonsNav link={"/ingreso"} text="Registrate Ahora" />
            {/* Registrate Ahora */}
            {/* </Link> */}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

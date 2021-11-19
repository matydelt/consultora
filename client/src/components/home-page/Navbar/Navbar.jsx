import React from "react";
import PropTypes from "prop-types";
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
import ButtonScroll from "./ButtonScroll/ButtonScroll";
const Navbar = ({ navId }) => {
  let { usuario } = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const auth = getAuth();
  // const history = useHistory();

  // const logout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       dispatch(getUsuario({}));
  //       history.push("/");
  //       toast.info("La sesión fue finalizada");
  //       localStorage.removeItem("username");
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };

  return (
    <nav id={navId} className="col-12 col-xl-12">
      {console.log(usuario)}
      <ul className="widht_li row col-xxl-12 justify-content-evenly align-items-center border-bottom">
        <li>
          {usuario.adminId ? (
            <Link to="/admin">Admin Page</Link>
          ) : (
            <Link to="/">Home</Link>
          )}
        </li>
        <li className="col-xl-1">
          <ButtonScroll
            text="Materias"
            idScroll="#materias"
            style={{ marginLeft: "-5px", marginRigth: "5px" }}
          />
        </li>

        <li className="col-xl-1">
          <ButtonScroll text="Nosotros" idScroll="#about" />
        </li>

        <li className="col-xl-1">
          <ButtonsNav link="/abogados" text="Nuestro Equipo" />
        </li>
        <img src={Logo} alt="Logo" className="col-xl-1 imgLogo" />

        {localStorage.getItem("username") || usuario.firstName ? (
          <li>
            {usuario && !usuario.abogadoId && (
              <ButtonsNav
                link="/user/panel"
                text={localStorage.getItem("username") || usuario.firstName}
              />
            )}

            {(usuario?.abogadoId || usuario?.dataValues?.abogado?.id) && (
              <ButtonsNav link="/user/abogado" text={usuario.firstName} />
            )}
          </li>
        ) : (
          <li className="col-xl-1">
            <ButtonsNav link={"/ingreso"} text="Iniciar sesión" />
          </li>
        )}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  navId: PropTypes.string.isRequired,
};

export default Navbar;

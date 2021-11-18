import React from "react";
import PropTypes from "prop-types";
import Logo from "../assets/img/buffet-buffet-law.png";
import ButtonsNav from "../../ButtonsNav/ButtonsNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

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
        <li className="col-xl-1">
          <Link to="/">Home</Link>
        </li>

        <li className="col-xl-1">
          <ButtonsNav link="#" text="Nosotros" />
        </li>

        <img src={Logo} alt="Logo" className="col-xl-1 imgLogo" />

        <li className="col-xl-1">
          <ButtonsNav link="/abogados" text="Nuestro Equipo" />
        </li>

        {localStorage.getItem("username") || usuario.firstName ? (
          <li>
            {usuario && !usuario.abogadoId && (
              <ButtonsNav
                link="/user/panel"
                text={localStorage.getItem("username") || usuario.firstName}
              />

              // <div class="dropdown">
              //   <a
              //     class="btn dropdown-toggle"
              //     type="button"
              //     id="dropdownMenuButton1"
              //     data-bs-toggle="dropdown"
              //     aria-expanded="false"
              //   >
              //     {localStorage.getItem('username') || usuario.firstName}
              //   </a>

              //   <ul
              //     class="dropdown-menu bg-light shadow border-0"
              //     aria-labelledby="dropdownMenuButton1"
              //   >
              //     <ButtonsNav link={"/user/panel"} text="Gestiones" />
              //     <span onClick={logout} class="dropdown-item pointer">
              //       Cerrar sesión
              //     </span>
              //   </ul>
              // </div>
            )}

            {(usuario?.abogadoId) && (
              <ButtonsNav link="/user/abogado" text={usuario.firstName} />
              // <div class="dropdown">
              //   <a
              //     class="btn dropdown-toggle"
              //     type="button"
              //     id="dropdownMenuButton1"
              //     data-bs-toggle="dropdown"
              //     aria-expanded="false"
              //   >
              //     {usuario.firstName}
              //   </a>

              //   <ul
              //     class="dropdown-menu bg-light shadow border-0"
              //     aria-labelledby="dropdownMenuButton1"
              //   >

              //     <Link to="/user/abogado">
              //       <span class="dropdown-item pointer">Panel</span>
              //     </Link>
              //     <Link to="/modificar-perfil">
              //       <span class="dropdown-item pointer">Perfil</span>
              //     </Link>

              //     <span onClick={logout} class="dropdown-item pointer">
              //       Cerrar sesión
              //     </span>
              //   </ul>
              // </div>
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

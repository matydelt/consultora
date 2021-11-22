import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "@firebase/auth";
import { getUsuario } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "./SideBarAbogado.css";
import LogoBlanco from "../../home-page/assets/img/logo-blacno-sin-fondo.png";

const SideBarAbogado = ({ imagenAbogado }) => {
  let usuario = useSelector((state) => state.usuario);

  const history = useHistory();

  const dispatch = useDispatch();
  const auth = getAuth();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(getUsuario({}));
        toast.info("La sesión fue finalizada");
        localStorage.removeItem("username");
        history.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav className="navSideBar" role="navigation">
      <div>
        <img src={LogoBlanco} alt="logo" />
      </div>
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menuSideBarHome">
          <Link to="/user/abogado/modificar-perfil">
            <img
              src={
                imagenAbogado ||
                "https://www.caracteristicas.co/wp-content/uploads/2017/03/Derecho-e1564875517201.jpg"
              }
              alt="abogado"
            />
          </Link>
          <Link to="/user/abogado">Home 🏠</Link>
          <Link to="/user/abogado/modificar-perfil">Detalles 👨‍🎓</Link>
          <Link to="/user/abogado/casos">Casos 📔</Link>
          <Link to="/user/abogado/consultas">Consultas 💭</Link>
          <Link to="/user/abogado/clientes">Clientes 🙋‍♂️</Link>
          <Link to="/user/abogado/gestionar-turnos">Turnos</Link>
          <Link to="/admin">Admin</Link>
          <button onClick={logout}>Salir ❌</button>
        </ul>
      </div>
    </nav>
  );
};

export default SideBarAbogado;
import { getAuth, signOut } from "@firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getUsuario } from "../../../redux/actions";


export default function UsuarioNavBar() {

    const history = useHistory();

    const dispatch = useDispatch();
    const auth = getAuth();

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

    return (<>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/">
                        <a className="nav-item nav-link border-bottom mx-2"> {'< '}Volver al sitio</a>
                    </Link>
                    <Link to="/cita">
                        <a className="nav-item nav-link border-bottom mx-2">Nueva consulta</a>
                    </Link>
                    <Link to="/user/panel/consultas">
                        <a className="nav-item nav-link border-bottom mx-2">Consultas realizadas</a>
                    </Link>
                    <a className="nav-item nav-link border-bottom mx-2" href="#">Casos</a>
                    <span className="nav-item nav-link border-bottom mx-2 pointer" onClick={logout}>Salir</span>
                </div>
            </div>
        </nav>

    </>)
}
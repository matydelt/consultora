import { Link } from "react-router-dom";
import "./NavUsuario.css";

const NavUsuario = () => {
  return (
    <div>
      <nav id="menu-usuario">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          {/* <li className="nav-item">Mis Casos</li> */}
          <li>Añadir un Caso</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavUsuario;

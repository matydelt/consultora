import React from "react";
import { Link } from "react-router-dom";

export default function NavAbogado() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user/abogado" className="nav-link">
              Detalles
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Casos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user/abogado/consultas" className="nav-link">
              Consultas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user/abogado/clientes" className="nav-link">
              Clientes
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

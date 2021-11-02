import React from "react";
import { Link } from "react-router-dom";

export default function NavAbogado() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/user/abogado/consultas" class="nav-link">
              Consultas
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/user/abogado/clientes" class="nav-link">
              Clientes
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

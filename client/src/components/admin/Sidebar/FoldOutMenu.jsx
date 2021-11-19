import "./FoldOutMenu.css";
import { Link, useLocation } from "react-router-dom";

const FoldOutMenu = () => {
  const location = useLocation();

  return (
    <nav role="navigation" className="nav-admin">
      <div id="menuToggle">
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
                location.pathname === "/admin" ? "selected" : undefined
              }
            >
              Dashboard
            </li>
          </Link>
          <Link to="/admin/users">
            <li
              className={
                location.pathname === "/admin/users" ? "selected" : undefined
              }
            >
              Users
            </li>
          </Link>
          <Link to="/admin/users/new">
            <li
              className={
                location.pathname === "/admin/users/new"
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
                location.pathname === "/admin/users/banned"
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
                location.pathname === "/admin/users/clientes"
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
                location.pathname === "/admin/About" ? "selected" : undefined
              }
            >
              About
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default FoldOutMenu;

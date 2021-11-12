import React from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="SideBar">
        <ul>
          <li
            className={location.pathname === "/admin" ? "selected" : undefined}
          >
            <Link to="/admin">Dashboard</Link>
          </li>
          <li
            className={
              location.pathname === "/admin/users" ? "selected" : undefined
            }
          >
            <Link to="/admin/users">Users</Link>
          </li>
          <li
            className={
              location.pathname === "/admin/users/new" ? "selected" : undefined
            }
          >
            <Link to="/admin/users/new">New Users</Link>
          </li>
          <li
            className={
              location.pathname === "/admin/users/banned"
                ? "selected"
                : undefined
            }
          >
            <Link to="/admin/users/banned">Banned Users</Link>
          </li>
          <li
            className={
              location.pathname === "/admin/users/clientes"
                ? "selected"
                : undefined
            }
          >
            <Link to="/admin/users/clientes">Clientes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

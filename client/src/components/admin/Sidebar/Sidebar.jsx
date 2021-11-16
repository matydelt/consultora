import React from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="SideBar">
        <ul>
          <li>
            <div
              className={
                location.pathname === "/admin" ? "selected" : undefined
              }
            >
              <Link to="/admin">Dashboard</Link>
            </div>
          </li>
          <li>
            <div
              className={
                location.pathname === "/admin/users" ? "selected" : undefined
              }
            >
              <Link to="/admin/users">Users</Link>
            </div>
          </li>
          <li>
            <div
              className={
                location.pathname === "/admin/users/new"
                  ? "selected"
                  : undefined
              }
            >
              <Link to="/admin/users/new">New Users</Link>
            </div>
          </li>
          <li>
            <div
              className={
                location.pathname === "/admin/users/banned"
                  ? "selected"
                  : undefined
              }
            >
              <Link to="/admin/users/banned">Banned Users</Link>
            </div>
          </li>
          <li>
            <div
              className={
                location.pathname === "/admin/users/clientes"
                  ? "selected"
                  : undefined
              }
            >
              <Link to="/admin/users/clientes">Clientes</Link>
            </div>
          </li>
          <li>
            <div
              className={
                location.pathname === "/admin/About" ? "selected" : undefined
              }
            >
              <Link to="/admin/About">About</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

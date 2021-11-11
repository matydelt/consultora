import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <nav className="SideBar">
        <ul>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/users" exact={true}>
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

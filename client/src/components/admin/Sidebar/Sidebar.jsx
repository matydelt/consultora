import React, { useState } from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import FoldOutMenu from "./FoldOutMenu";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  const handleShowNav = () => setShowNav(!showNav);

  return <FoldOutMenu />;
  // return (
  //   <div className="containSideBar">
  //     <button onClick={handleShowNav} className="Button_X">
  //       {"=>"}
  //     </button>
  //     <nav className={showNav ? "SideBar active" : "SideBar"}>
  //       <button onClick={handleShowNav} className="Button_X">
  //         X
  //       </button>
  //       <ul>
  //         <li>
  //           <div
  //             className={
  //               location.pathname === "/admin" ? "selected" : undefined
  //             }
  //           >
  //             <Link to="/admin">Dashboard</Link>
  //           </div>
  //         </li>
  //         <li>
  //           <div
  //             className={
  //               location.pathname === "/admin/users" ? "selected" : undefined
  //             }
  //           >
  //             <Link to="/admin/users">Users</Link>
  //           </div>
  //         </li>
  //         <li>
  //           <div
  //             className={
  //               location.pathname === "/admin/users/new"
  //                 ? "selected"
  //                 : undefined
  //             }
  //           >
  //             <Link to="/admin/users/new">New Users</Link>
  //           </div>
  //         </li>
  //         <li>
  //           <div
  //             className={
  //               location.pathname === "/admin/users/banned"
  //                 ? "selected"
  //                 : undefined
  //             }
  //           >
  //             <Link to="/admin/users/banned">Banned Users</Link>
  //           </div>
  //         </li>
  //         <li>
  //           <div
  //             className={
  //               location.pathname === "/admin/users/clientes"
  //                 ? "selected"
  //                 : undefined
  //             }
  //           >
  //             <Link to="/admin/users/clientes">Clientes</Link>
  //           </div>
  //         </li>
  //         <li>
  //           <div
  //             className={
  //               location.pathname === "/admin/About" ? "selected" : undefined
  //             }
  //           >
  //             <Link to="/admin/About">About</Link>
  //           </div>
  //         </li>
  //       </ul>
  //     </nav>
  //   </div>
  // );
};

export default Sidebar;

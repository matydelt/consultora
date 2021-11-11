/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
import React, { useEffect } from "react";
import { getUsuarios } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Switch } from "react-router-dom";
import {
  getAuth,
  sendPasswordResetEmail,
  updatePassword,
} from "@firebase/auth";
import Dashboard from "../../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";
import AdminUsersPage from "../adminUsersPage/adminUsersPage";
import AdminNewUsersPage from "../adminNewUsersPage/adminNewUsersPage";

export default function AdminPage() {
  const dispatch = useDispatch();
  const { usuario } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUsuarios());
  }, []);

  return !usuario.adminId ? (
    <Redirect to="/" />
  ) : (
    <div style={{ backgroundColor: "#EEEEEE" }}>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Switch>
          <Route path="/admin" exact component={Dashboard} />
          <Route path="/admin/users" exact component={AdminUsersPage} />
          <Route path="/admin/users/new" exact component={AdminNewUsersPage} />
        </Switch>
      </div>
    </div>
  );
}

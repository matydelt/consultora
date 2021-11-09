import React from "react";
import Chart from "./Chart/Chart";
import UsersCard from "./UsersCard/UsersCard";
import { useSelector } from "react-redux";
import newUser from "./images/usuario.png";
import allUsers from "./images/grupo.png";
import bannedUser from "./images/usuario-ban.png";

const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

const Dashboard = () => {
  const { usuarios } = useSelector((state) => state);

  const getBannedUsers = () => {
    const bannedUsers = usuarios.filter((usuario) => usuario.banned === true);
    return bannedUsers.length;
  };

  const getUsersThisMonth = () => {
    const usersThisMonth = usuarios.filter(
      (usuario) => usuario.createdAt === `${year}-${month}`
    );
    return usersThisMonth.length;
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <UsersCard
          title="New Users This Month"
          users={getUsersThisMonth()}
          color="#4285f4"
          img={newUser}
        />
        <UsersCard
          title="Total Users"
          users={usuarios.length}
          color="#34a853"
          img={allUsers}
        />
        <UsersCard
          title="Banned Users"
          users={getBannedUsers()}
          color="#ea4335"
          img={bannedUser}
        />
      </div>
      <Chart />
    </div>
  );
};

export default Dashboard;

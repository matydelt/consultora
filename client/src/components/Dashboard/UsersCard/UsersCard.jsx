import React from "react";
import "./UsersCard.css";

const UsersCard = (props) => {
  return (
    <div className="users-card-container">
      <div className="users-card-top" style={{ backgroundColor: props.color }}>
        <div className="users-card-text">
          <p>{props.title}</p>
          <p>{props.users}</p>
        </div>
        <img src={props.img} alt={props.title} className="users-card-image" />
      </div>
      <p className="users-card-bottom">Ver Detalles</p>
    </div>
  );
};

export default UsersCard;

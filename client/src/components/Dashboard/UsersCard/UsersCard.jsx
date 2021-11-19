import React from "react";
import PropTypes from "prop-types";
import "./UsersCard.css";
import { Link } from "react-router-dom";

const UsersCard = ({ title, users, color, img, url }) => {
  return (
    <div className="users-card-container">
      <div className="users-card-top" style={{ backgroundColor: color }}>
        <div className="users-card-text">
          <p>{title}</p>
          <p>{users}</p>
        </div>
        <img src={img} alt={title} className="users-card-image" />
      </div>
      <Link to={url}>
        <p className="users-card-bottom">Ver Detalles</p>
      </Link>
    </div>
  );
};

UsersCard.propTypes = {
  title: PropTypes.string.isRequired,
  users: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default UsersCard;

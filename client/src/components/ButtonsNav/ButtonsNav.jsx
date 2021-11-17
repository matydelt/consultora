import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonsNav = ({ link, text, nameClass }) => {
  return (
    <>
      <Link className={nameClass} to={link}>
        {text}
      </Link>
    </>
  );
};

ButtonsNav.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  nameClass: PropTypes.string,
};

export default ButtonsNav;

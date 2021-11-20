import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonsNav = ({ link, text, nameClass, idScroll }) => {
  return (
    <>
      <Link id={idScroll} className={nameClass} to={link}>
        {text}
      </Link>
    </>
  );
};

export default ButtonsNav;

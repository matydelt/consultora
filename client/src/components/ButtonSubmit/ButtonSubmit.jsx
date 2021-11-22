import React from "react";
import PropTypes from "prop-types";

const ButtonSubmit = ({ type, text }) => {
  return (
    <>
      <button type={type}>{text}</button>
    </>
  );
};

ButtonSubmit.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonSubmit;

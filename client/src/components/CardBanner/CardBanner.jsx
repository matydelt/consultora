import React from "react";
import PropTypes from "prop-types";

const CardBanner = ({ nameStyle, img, text }) => {
  return (
    <div className={nameStyle}>
      <img src={img} alt="card" />
      <p>{text}</p>
    </div>
  );
};

CardBanner.propTypes = {
  nameStyle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardBanner;

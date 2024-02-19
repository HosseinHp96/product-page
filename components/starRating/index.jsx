import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
const StarRating = ({ rate, color, size }) => {
  return (
    <>
      <i data-star={rate} style={{ fontSize: size }}></i>

      <style>
        {`
                [data-star]::after {
                 color : ${color}
                }
               `}
      </style>
    </>
  );
};

StarRating.prototype = {
  rate: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.number,
};

StarRating.defaultProps = {
  rate: 0,
  color: "#ffc635",
  size: "18px",
};

export default StarRating;

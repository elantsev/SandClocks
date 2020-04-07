import React from "react";
import PropTypes from "prop-types";

const PieChart = ({ startDegree, value, color, ...props }) => {
  return (
    <svg
      fill="none"
      transform={`rotate(${startDegree - 90} 0 0)`}
      viewBox="0 0 64 64"
      {...props}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00bc9b" />
          <stop offset="100%" stopColor="#5eaefd" />
        </linearGradient>
      </defs>
      <circle
        cx="32"
        cy="32"
        r="16"
        stroke={color}
        strokeWidth="32"
        strokeDasharray={[value * 100, 100]}
      ></circle>
    </svg>
  );
};
PieChart.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
  startDegree: PropTypes.number
};

PieChart.defaultProps = {
  color: "url(#gradient)",
  startDegree: 0,
};
export default PieChart;

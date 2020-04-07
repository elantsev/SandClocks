import React from "react";
import PropTypes from "prop-types";

const DonutChart3 = ({
  startDegree,
  value1,
  value2,
  value3,
  text,
  units,
  ...props
}) => {
  const int = Math.trunc(text);
  const frac = Math.abs((text % 1).toFixed(1) * 10);
  return (
    <svg fill="none" viewBox="0 0 38 38" {...props}>
      <defs>
        <linearGradient id="paint1_linear12" x1="0%" y1="0%" x2="75%" y2="0%">
          <stop stopColor="#00E0FF" />
          <stop offset="1" stopColor="#004FAB" />
        </linearGradient>
      </defs>
      <g transform={`rotate(${startDegree - 90} 19 19)`}>
        <circle
          cx="19"
          cy="19"
          r="17"
          stroke="#FF48B6"
          strokeWidth="2"
          strokeDasharray={[value3 * 103.67, 103.67]}
        ></circle>
        <circle
          cx="19"
          cy="19"
          r="15"
          stroke="#00E0FF"
          strokeWidth="2"
          strokeDasharray={[value2 * 97.387, 97.387]}
        ></circle>
        <circle
          cx="19"
          cy="19"
          r="16"
          stroke="url(#paint1_linear12)"
          strokeWidth="4"
          strokeDasharray={[value1 * 100, 100]}
        ></circle>
      </g>
      <text
        x="19"
        y="19"
        fill="#009DB2"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="300"
      >
        {int}
        <tspan fontSize="0.85em" opacity={0.8}>
          ,{frac}
        </tspan>
      </text>
      <text fill="#009DB2" textAnchor="middle" fontSize="6">
        <tspan x="19" y="26">
          {units[0]}
        </tspan>
        <tspan x="19" y="28" fontSize="3" fontWeight="500">
          {units[1]}
        </tspan>
      </text>
    </svg>
  );
};
DonutChart3.propTypes = {
  units: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.number.isRequired,
  value3: PropTypes.number.isRequired,
  value2: PropTypes.number.isRequired,
  value1: PropTypes.number.isRequired,
  startDegree: PropTypes.number
};

DonutChart3.defaultProps = {
  startDegree: 0,
  units: ["м³", "млрд"]
};
export default DonutChart3;

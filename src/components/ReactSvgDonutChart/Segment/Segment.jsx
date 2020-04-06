import React from "react";
import PropTypes from "prop-types";

import { center, radius } from "../constants";

const Segment = ({
  stroke,
  strokeDasharray,
  strokeDashoffset,
  strokeWidth,
  title,
  startDegree
}) => (
  <circle
    transform={`rotate(${startDegree - 90} ${center.x} ${center.y})`}
    cx={center.x}
    cy={center.y}
    r={radius}
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeDasharray={strokeDasharray}
    strokeDashoffset={strokeDashoffset}
  >
    {title && <title>{title}</title>}
  </circle>
);

Segment.propTypes = {
  stroke: PropTypes.string.isRequired,
  strokeDasharray: PropTypes.string.isRequired,
  strokeDashoffset: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number,
  title: PropTypes.string,
  value: PropTypes.number.isRequired,
  startDegree: PropTypes.number
};

Segment.defaultProps = {
  strokeWidth: 5,
  startDegree: 0
};

export default Segment;

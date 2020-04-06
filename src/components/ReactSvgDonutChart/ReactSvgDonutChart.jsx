import React from "react";
import PropTypes from "prop-types";
import { center, radius } from "./constants";
import Segment from "./Segment/Segment";
import { width } from "./constants";

const ReactSvgDonutChart = ({ data, spacing, text, units, ...rest }) => {
  const total = data.reduce((prev, current) => current.value + prev, 0);
  let percentAcc = 0;
  return (
    <svg
      fill="#ff0000"
      stroke="#00FF00"
      viewBox={`0 0 ${width} ${width}`}
      {...rest}
    >
      {data.map((d, i) => {
        const percent = (d.value / Math.ceil(total)) * 100;
        const DashArrayPercent =
          spacing < 0 || percent - spacing < 0 ? percent : percent - spacing;
        const DashArraylength =
          spacing < 0 || percent + spacing > 100
            ? 100 - percent
            : 100 - percent + spacing;
        const strokeDasharray = `${DashArrayPercent} ${DashArraylength}`;
        const strokeDashoffset = i === 0 ? 0 : 100 - percentAcc;
        percentAcc += percent;
        return (
          percent > 0 && (
            <Segment
              key={i}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              {...d}
            />
          )
        );
      })}
      <circle
        cx={center.x}
        cy={center.y}
        r={radius}
        fill="#000000"
        strokeWidth="0"
      ></circle>
      <defs>
        <linearGradient
          id="ReactSvgDonutChart_gradient1"
          x1="0"
          x2="100%"
          y1="0"
          y2="5%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00F9A6"></stop>
          <stop offset="1" stopColor="#09B7C2"></stop>
        </linearGradient>
        <linearGradient
          id="ReactSvgDonutChart_gradient2"
          x1="0"
          x2="60%"
          y1="0"
          y2="80%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4009A6"></stop>
          <stop offset="1" stopColor="#09B7C2"></stop>
        </linearGradient>
        <linearGradient
          id="ReactSvgDonutChart_gradient3"
          x1="0"
          x2="100%"
          y1="0"
          y2="5%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#405906"></stop>
          <stop offset="1" stopColor="#09B7f2"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

ReactSvgDonutChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      stroke: PropTypes.string.isRequired,
      strokeWidth: PropTypes.number,
      title: PropTypes.string,
      value: PropTypes.number.isRequired
    })
  ),
  spacing: PropTypes.number
};

ReactSvgDonutChart.defaultProps = {
  data: [],
  spacing: 0
};

export default ReactSvgDonutChart;

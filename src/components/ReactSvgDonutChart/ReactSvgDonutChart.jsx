import React from "react";
import PropTypes from "prop-types";
import { center, radius } from "./constants";
import Segment from "./Segment/Segment";
import { width } from "./constants";

const ReactSvgDonutChart = ({
  data,
  spacing,
  startDegree,
  text,
  units,
  ...rest
}) => {
  const total = data.reduce((prev, current) => current.value + prev, 0);
  let percentAcc = 0;
  const int = Math.trunc(text);
  const frac = Math.abs((text % 1).toFixed(1) * 10);

  return (
    <svg viewBox={`0 0 ${width} ${width}`} {...rest}>
      <circle
        id="gray-bg"
        cx={center.x}
        cy={center.y}
        r={radius * 1.7}
        fill="rgba(0, 224, 255, 0.1)"
        strokeWidth="0.2"
        strokeDasharray="1,1"
        stroke="#000000"
      ></circle>
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
              startDegree={startDegree}
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
      <text
        x={width / 2}
        y="28"
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
        <tspan x={width / 2} y="36">
          {units[0]}
        </tspan>
        <tspan x={width / 2} y="39" fontSize="3" fontWeight="500">
          {units[1]}
        </tspan>
      </text>
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
  spacing: PropTypes.number,
  text: PropTypes.number.isRequired,
  units: PropTypes.arrayOf(PropTypes.string),
  startDegree: PropTypes.number
};

ReactSvgDonutChart.defaultProps = {
  data: [],
  spacing: 0,
  units: ["м³", "млрд"]
};

export default ReactSvgDonutChart;

import React from "react";

const PieChart = ({
  startDegree = 0,
  valuePercent = 10,
  color = "red",
  ...props
}) => {
  return (
    <svg
      width="64"
      height="64"
      fill="none"
      transform={`rotate(${startDegree - 90} 0 0)`}
      viewBox="0 0 64 64"
      {...props}
    >
      <circle
        cx="32"
        cy="32"
        r="16"
        stroke={color}
        strokeWidth="32"
        strokeDasharray={[valuePercent, 100]}
      ></circle>
    </svg>
  );
};
export default PieChart;

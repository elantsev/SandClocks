import React from "react";

const DonutChart3 = ({
  startDegree = 180,
  value1 = 0.1,
  value2 = 0.6,
  value3 = 1,
  color = "url(#paint1_linear)",
  ...props
}) => {
  return (
    <svg
      fill="none"
      transform={`rotate(${startDegree - 90} 0 0)`}
      viewBox="0 0 38 38"
      {...props}
    >
      <defs>
        <linearGradient id="paint1_linear12" x1="0%" y1="0%" x2="75%" y2="0%">
          <stop stop-color="#00E0FF" />
          <stop offset="1" stop-color="#004FAB" />
        </linearGradient>
      </defs>
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
    </svg>
  );
};
export default DonutChart3;

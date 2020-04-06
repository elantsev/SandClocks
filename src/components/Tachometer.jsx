import React from "react";

function Tachometer({ value }) {
  const int = Math.trunc(value * 100);
  const frac = Math.abs(((value * 100) % 1).toFixed(1) * 10);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-50 0 941 914">
      {/* нижняя, серая шкала */}
      <path
        fill="#E6E6E6"
        fillRule="evenodd"
        stroke="#2F296B"
        strokeWidth="2.023"
        d="M150.981 731.613C81.908 662.516 39.922 567.677 39.922 463.355 39.922 252 210.573 82.645 420.5 82.645c209.927 0 380.578 169.355 380.578 380.71 0 104.322-41.986 199.161-111.059 268.258-6.771 6.774-16.252 9.484-16.252 20.322 0 12.194 9.481 21.678 20.316 21.678 9.48 0 12.189-5.419 18.961-12.194C791.597 685.548 839 579.871 839 463.355c0-231.678-186.903-420-418.5-420S2 231.677 2 463.355c0 115.161 47.403 220.838 123.248 296.71 8.126 6.774 10.835 13.548 20.315 13.548 10.835 0 20.316-9.484 20.316-21.678 0-9.483-8.127-13.548-14.898-20.322z"
        clipRule="evenodd"
      ></path>
      {/* верхняя, цветная шкала. надо применить маску или clip-path */}
      <path
        fill="url(#paint1_linear)"
        fillRule="evenodd"
        stroke="#2F296B"
        strokeWidth="2.023"
        d="M150.981 731.613C81.908 662.516 39.922 567.677 39.922 463.355 39.922 252 210.573 82.645 420.5 82.645c209.927 0 380.578 169.355 380.578 380.71 0 104.322-41.986 199.161-111.059 268.258-6.771 6.774-16.252 9.484-16.252 20.322 0 12.194 9.481 21.678 20.316 21.678 9.48 0 12.189-5.419 18.961-12.194C791.597 685.548 839 579.871 839 463.355c0-231.678-186.903-420-418.5-420S2 231.677 2 463.355c0 115.161 47.403 220.838 123.248 296.71 8.126 6.774 10.835 13.548 20.315 13.548 10.835 0 20.316-9.484 20.316-21.678 0-9.483-8.127-13.548-14.898-20.322z"
        clipRule="nonzero"
        mask="url(#cut-off-bottom)"
      ></path>
      {/* указатель-треугольник */}
      <path
        fill="#00E0FF"
        fillRule="evenodd"
        d="M500.407 51.484l-18.961-25.742L462.484 0l44.695 6.774 44.694 6.774-25.733 18.968-25.733 18.968z"
        clipRule="evenodd"
        transform={`rotate(${value * 279.5 + 209} 420.5 463)`}
      ></path>

      <text
        x="420"
        y="500"
        fill="#009DB2"
        textAnchor="middle"
        fontSize="250"
        fontWeight="300"
      >
        {int}
        <tspan fontSize="0.85em" opacity={0.8}>
          ,{frac}
        </tspan>
      </text>
      <text x="420" y="700" fill="#009DB2" textAnchor="middle" fontSize="200">
        %
      </text>

      <defs>
        <defs>
          <mask id="cut-off-bottom">
            {/* вспомогательный круг */} 
            <circle
              transform="rotate(130 420.5 463)"
              cx="420.5"
              cy="463"
              r="400.5"
              strokeWidth="50"
              stroke="#ffffff"
              strokeDasharray={[value * 1954, 2512]}
            ></circle>
          </mask>
        </defs>
        <linearGradient
          id="paint1_linear"
          x1="0"
          x2="0%"
          y1="0"
          y2="2%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ffF9A6"></stop>
          <stop offset="1" stopColor="#09B7C2"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Tachometer;

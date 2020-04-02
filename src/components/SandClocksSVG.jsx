import React from "react";
import s from "./SandClocksSVG.module.css";
import SandClockSVG from "./SandClockSVG";

function SandClocksSVG({ scale, data1, data2, className, shift, ...rest }) {
  // Базовые размеры приняты из макета.
  // уровень песка и пунктирных линий приходят в компонент числом в пределах шкалы,
  // а в svg идет пропорциональное число в виде абсолютных координат в диапазоне от начала до конца песочных часов (1280=0%, 175=100%)

  const getInt = value => Math.trunc(value);
  const getFrac = value => Math.abs((value % 1).toFixed(1) * 10);
  const getHight = (value, from = 1282, to = 175) =>
    from -
    ((value - scale[0]) / (scale[scale.length - 1] - scale[0])) * (from - to);
  const height1 = getHight(data1.value);
  const height2 = getHight(data2.value);

  const getSandLevel = (value, from = scale[0], to = scale[scale.length - 1]) =>
    (value - from) / (to - from);
  const sandLevel1 = getSandLevel(data1.value);
  const sandLevel2 = getSandLevel(data2.value);

  const heightDiff = Math.abs((height2 + height1) / 2 + 60);
  const DifferenceBlock = ({ value1, value2 }) => {
    const int = getInt(value2 - value1);
    const frac = getFrac(value2 - value1);

    const percentDiff = (
      ((data2.value - data1.value) / data1.value) *
      100
    ).toFixed();
    return (
      <>
        {/* данные */}
        <text
          x={shift / 2 + 1000}
          y={heightDiff}
          fill="#ffffff"
          fontSize="160"
          fontWeight="400"
        >
          {int},<tspan fontSize="0.85em">{frac}</tspan>
          <tspan x={shift / 2 + 1310} fontSize="0.85em">
            ({percentDiff}%)
          </tspan>
        </text>
        {/* вертикальная стрелка */}
        <svg
          width="37"
          height={height1 - height2}
          x={shift / 2 + 1280}
          y={height2}
          preserveAspectRatio="none"
          viewBox="0 0 37 441"
          fill="none"
        >
          <path
            d="M20.2678 0.732233C19.2915 -0.244078 17.7085 -0.244078 16.7322 0.732233L0.82233 16.6421C-0.15398 17.6184 -0.15398 19.2014 0.82233 20.1777C1.79864 21.154 3.38155 21.154 4.35786 20.1777L18.5 6.03553L32.6421 20.1777C33.6184 21.154 35.2014 21.154 36.1777 20.1777C37.154 19.2014 37.154 17.6184 36.1777 16.6421L20.2678 0.732233ZM16.7322 440.268C17.7085 441.244 19.2915 441.244 20.2678 440.268L36.1777 424.358C37.154 423.382 37.154 421.799 36.1777 420.822C35.2014 419.846 33.6184 419.846 32.6421 420.822L18.5 434.964L4.35786 420.822C3.38155 419.846 1.79864 419.846 0.82233 420.822C-0.15398 421.799 -0.15398 423.382 0.82233 424.358L16.7322 440.268ZM16 2.5L16 438.5H21L21 2.5L16 2.5Z"
            fill="white"
          />
        </svg>
      </>
    );
  };

  return (
    <div className={`${s.SandClocks} ${className}`} {...rest} id="mydiv">
      <svg
        // width={221 + (221 * shift) / 2214}
        // height="133"
        viewBox={`0 0 ${2214 + shift} 1329`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={2214 + shift} height="1329" fill="black" />
        <SandClockSVG value={sandLevel1} x="398" y="131" />
        <SandClockSVG value={sandLevel2} x={1545 + shift} y="131" />

        {/*  Шкала  */}
        <svg width={125} y={80} viewBox="0 0 125 1082" fill="none">
          <path
            d="M22.821 402h-7.265v-48.164l-14.57 5.352v-6.563l20.703-7.773h1.132V402zm49.532-56.914v6.133h-1.329c-5.625.104-10.104 1.771-13.437 5s-5.26 7.773-5.781 13.633c2.995-3.438 7.083-5.157 12.265-5.157 4.948 0 8.894 1.745 11.836 5.235 2.969 3.489 4.453 7.994 4.453 13.515 0 5.86-1.601 10.547-4.804 14.063-3.177 3.515-7.448 5.273-12.813 5.273-5.443 0-9.857-2.083-13.242-6.25-3.385-4.192-5.078-9.583-5.078-16.172v-2.773c0-10.469 2.226-18.464 6.68-23.984 4.479-5.547 11.132-8.386 19.96-8.516h1.29zm-9.493 25.625c-2.474 0-4.752.742-6.836 2.227-2.083 1.484-3.528 3.346-4.336 5.585v2.657c0 4.687 1.055 8.463 3.165 11.328 2.109 2.864 4.74 4.297 7.89 4.297 3.255 0 5.807-1.198 7.656-3.594 1.875-2.396 2.813-5.534 2.813-9.414 0-3.906-.95-7.057-2.852-9.453-1.875-2.422-4.375-3.633-7.5-3.633zm61.719 7.031c0 8.464-1.445 14.753-4.336 18.867-2.89 4.115-7.409 6.172-13.554 6.172-6.068 0-10.56-2.005-13.477-6.015-2.917-4.037-4.427-10.052-4.531-18.047v-9.649c0-8.359 1.445-14.57 4.336-18.632 2.89-4.063 7.422-6.094 13.593-6.094 6.12 0 10.625 1.966 13.516 5.898 2.891 3.906 4.375 9.948 4.453 18.125v9.375zm-7.226-9.883c0-6.119-.86-10.573-2.579-13.359-1.718-2.812-4.44-4.219-8.164-4.219-3.698 0-6.393 1.393-8.086 4.18-1.692 2.786-2.565 7.07-2.617 12.851v11.563c0 6.146.886 10.69 2.657 13.633 1.796 2.916 4.505 4.375 8.125 4.375 3.567 0 6.21-1.38 7.929-4.141 1.745-2.76 2.656-7.109 2.735-13.047v-11.836zM22.821 742h-7.265v-48.164l-14.57 5.352v-6.563l20.703-7.773h1.132V742zm24.492-28.516l2.891-28.359h29.14v6.68H56.338l-1.719 15.507c2.787-1.64 5.95-2.46 9.492-2.46 5.183 0 9.297 1.718 12.344 5.156 3.047 3.411 4.57 8.034 4.57 13.867 0 5.859-1.588 10.482-4.765 13.867-3.151 3.36-7.565 5.039-13.242 5.039-5.026 0-9.128-1.393-12.305-4.179-3.177-2.787-4.987-6.641-5.43-11.563h6.836c.443 3.255 1.602 5.716 3.477 7.383 1.875 1.64 4.349 2.461 7.422 2.461 3.359 0 5.99-1.146 7.89-3.438 1.927-2.291 2.89-5.455 2.89-9.492 0-3.802-1.04-6.849-3.124-9.141-2.057-2.317-4.805-3.476-8.242-3.476-3.151 0-5.625.69-7.422 2.07l-1.914 1.563-5.782-1.485zm77.266 4.258c0 8.464-1.445 14.753-4.336 18.867-2.89 4.115-7.409 6.172-13.554 6.172-6.068 0-10.56-2.005-13.477-6.015-2.917-4.037-4.427-10.052-4.531-18.047v-9.649c0-8.359 1.445-14.57 4.336-18.632 2.89-4.063 7.422-6.094 13.593-6.094 6.12 0 10.625 1.966 13.516 5.898 2.891 3.906 4.375 9.948 4.453 18.125v9.375zm-7.226-9.883c0-6.119-.86-10.573-2.579-13.359-1.718-2.812-4.44-4.219-8.164-4.219-3.698 0-6.393 1.393-8.086 4.18-1.692 2.786-2.565 7.07-2.617 12.851v11.563c0 6.146.886 10.69 2.657 13.633 1.796 2.916 4.505 4.375 8.125 4.375 3.567 0 6.21-1.38 7.929-4.141 1.745-2.76 2.656-7.109 2.735-13.047v-11.836zM22.821 1081h-7.265v-48.16l-14.57 5.35v-6.57l20.703-7.77h1.132V1081zm51.68-19.1h7.89v5.9h-7.89v13.2h-7.266v-13.2H41.337v-4.26l25.469-39.42H74.5v37.78zm-24.96 0h17.694v-27.89l-.859 1.56-16.836 26.33zm75.038-5.16c0 8.47-1.445 14.75-4.336 18.87-2.89 4.11-7.409 6.17-13.554 6.17-6.068 0-10.56-2-13.477-6.01-2.917-4.04-4.427-10.06-4.531-18.05v-9.65c0-8.36 1.445-14.57 4.336-18.63 2.89-4.06 7.422-6.1 13.593-6.1 6.12 0 10.625 1.97 13.516 5.9 2.891 3.91 4.375 9.95 4.453 18.13v9.37zm-7.226-9.88c0-6.12-.86-10.57-2.579-13.36-1.718-2.81-4.44-4.22-8.164-4.22-3.698 0-6.393 1.39-8.086 4.18-1.692 2.79-2.565 7.07-2.617 12.85v11.57c0 6.14.886 10.69 2.657 13.63 1.796 2.91 4.505 4.37 8.125 4.37 3.567 0 6.21-1.38 7.929-4.14 1.745-2.76 2.656-7.11 2.735-13.04v-11.84zM22.72 58h-7.266V9.836L.883 15.187V8.625L21.585.852h1.133V58zM80.61 5.187L57.055 58h-7.578L72.954 7.062H42.172V1.125H80.61v4.063zm43.867 28.555c0 8.464-1.445 14.753-4.336 18.867-2.891 4.115-7.409 6.172-13.555 6.172-6.067 0-10.56-2.005-13.476-6.015-2.917-4.037-4.427-10.052-4.531-18.047V25.07c0-8.36 1.445-14.57 4.335-18.633 2.891-4.062 7.422-6.093 13.594-6.093 6.12 0 10.625 1.966 13.516 5.898 2.89 3.906 4.375 9.948 4.453 18.125v9.375zm-7.227-9.883c0-6.12-.859-10.573-2.578-13.359-1.719-2.813-4.44-4.219-8.164-4.219-3.698 0-6.393 1.393-8.086 4.18-1.692 2.786-2.565 7.07-2.617 12.851v11.563c0 6.146.885 10.69 2.656 13.633 1.797 2.916 4.505 4.375 8.125 4.375 3.568 0 6.211-1.38 7.93-4.14 1.745-2.761 2.656-7.11 2.734-13.048V23.86z"
            fill="#00E0FF"
          />
        </svg>

        {/* данные */}
        <text x="540" y="100" fill="#00E0FF" fontSize="100">
          {data1.date}
        </text>
        <text x="590" y="400" fill="#ffffff" fontSize="160" fontWeight="400">
          {getInt(data1.value)},
          <tspan fontSize="0.85em">{getFrac(data1.value)}</tspan>
        </text>
        <path
          d={`M150 ${height1} h${1400 + shift / 2}`}
          stroke="#ffffff"
          strokeDasharray="20,20"
          strokeWidth="5"
        />
        <text x={shift + 1700} y="100" fill="#00E0FF" fontSize="100">
          {data2.date}
        </text>
        <text
          x={1680 + shift}
          y="400"
          fill="#ffffff"
          fontSize="160"
          fontWeight="400"
        >
          {getInt(data2.value)},
          <tspan fontSize="0.85em">{getFrac(data2.value)}</tspan>
        </text>
        <path
          d={`M150 ${height2} h${2050 + shift}`}
          stroke="#ffffff"
          strokeDasharray="20,20"
          strokeWidth="5"
        />

        <DifferenceBlock value1={data1.value} value2={data2.value} />
      </svg>
    </div>
  );
}

export default SandClocksSVG;

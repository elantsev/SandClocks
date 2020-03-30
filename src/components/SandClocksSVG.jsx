import React from "react";
import s from "./SandClocksSVG.module.css";

function SandClocksSVG({ scale, data1, data2, className, ...rest }) {
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
          x="1000"
          y={heightDiff}
          fill="#ffffff"
          fontSize="160"
          fontWeight="400"
        >
          {int},<tspan fontSize="0.85em">{frac}</tspan>
          <tspan x="1310" fontSize="0.85em">
            ({percentDiff}%)
          </tspan>
        </text>
        {/* вертикальная стрелка */}
        <svg
          width="37"
          height={height1 - height2}
          x="1280"
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
    <div className={`${s.SandClocks} ${className}`} {...rest}>
      <svg
        viewBox="0 0 2214 1329"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="2214" height="1329" fill="black" />
        <mask
          id="mask1"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="428"
          y="129"
          width="601"
          height="1200"
        >
          <path  
            d="M428.639 129H1028.02C1028.02 729 765.628 580.883 765.628 729C765.628 877.117 1028.02 729 1028.02 1329H428.639C428.638 729 691.028 877.117 691.028 729C691.028 580.883 428.636 729 428.639 129Z"
            fill="#C4C4C4"
          />
        </mask>
        <g mask="url(#mask1)">
          {/* уровень песка в первых часах */}
          <path d={`M433 1282 h600 V${height1} h-600`} fill="#00E0FF" />
        </g>
        <mask
          id="mask2"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="1579"
          y="129"
          width="600"
          height="1200"
        >
          <path
            d="M1579.16 129H2178.54C2178.54 729 1916.15 580.883 1916.15 729C1916.15 877.117 2178.54 729 2178.54 1329H1579.16C1579.16 729 1841.55 877.117 1841.55 729C1841.55 580.883 1579.16 729 1579.16 129Z"
            fill="#C4C4C4"
          />
        </mask>
        <g mask="url(#mask2)">
          {/* уровень песка во вторых часах */}
          <path d={`M1578 1282 h600 V${height2} h-600`} fill="#00E0FF" />
        </g>
        <path
          d="M1029.02 131.5C1028.65 429.32 963.303 540.927 898.694 596.562C882.452 610.548 866.192 621.053 850.879 630.118C845.662 633.205 840.526 636.142 835.53 638.998C825.944 644.479 816.874 649.664 808.747 655.055C796.315 663.302 785.739 672.242 778.295 683.962C770.826 695.722 766.631 710.09 766.631 729C766.631 747.91 770.826 762.278 778.295 774.038C785.739 785.759 796.315 794.698 808.747 802.945C816.874 808.337 825.944 813.522 835.53 819.002C840.526 821.858 845.662 824.795 850.879 827.883C866.192 836.947 882.452 847.452 898.694 861.438C963.303 917.073 1028.65 1028.68 1029.02 1326.5H434.643C435.006 1028.68 500.358 917.073 564.967 861.438C581.209 847.452 597.469 836.947 612.782 827.883C617.999 824.795 623.135 821.858 628.132 819.002C637.717 813.521 646.787 808.337 654.914 802.945C667.346 794.698 677.922 785.759 685.366 774.038C692.835 762.278 697.03 747.91 697.03 729C697.03 710.09 692.835 695.722 685.366 683.962C677.922 672.242 667.346 663.302 654.914 655.055C646.786 649.664 637.717 644.479 628.131 638.998C623.135 636.142 617.998 633.205 612.781 630.118C597.468 621.054 581.208 610.548 564.966 596.562C500.356 540.927 435.005 429.321 434.643 131.5H1029.02Z"
          fill="#00E0FF"
          fillOpacity="0.2"
          stroke="#00E0FF"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <rect
          x="398.679"
          y="131.539"
          width="666.303"
          height="43"
          rx="17.5"
          fill="black"
          stroke="#00E0FF"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <rect
          x="398.679"
          y="1283.38"
          width="666.303"
          height="43"
          rx="17.5"
          fill="black"
          stroke="#00E0FF"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M2175.54 131.5C2175.17 429.32 2109.82 540.927 2045.21 596.562C2028.97 610.548 2012.71 621.053 1997.4 630.117C1992.18 633.205 1987.04 636.142 1982.05 638.998C1972.46 644.479 1963.39 649.664 1955.26 655.055C1942.83 663.302 1932.26 672.241 1924.81 683.962C1917.34 695.722 1913.15 710.09 1913.15 729C1913.15 747.91 1917.34 762.278 1924.81 774.038C1932.26 785.759 1942.83 794.698 1955.26 802.945C1963.39 808.337 1972.46 813.521 1982.05 819.002C1987.04 821.858 1992.18 824.795 1997.4 827.883C2012.71 836.947 2028.97 847.452 2045.21 861.438C2109.82 917.073 2175.17 1028.68 2175.54 1326.5H1581.16C1581.52 1028.68 1646.88 917.073 1711.48 861.438C1727.73 847.452 1743.99 836.947 1759.3 827.883C1764.52 824.795 1769.65 821.858 1774.65 819.002C1784.24 813.521 1793.3 808.336 1801.43 802.945C1813.86 794.698 1824.44 785.759 1831.88 774.038C1839.35 762.278 1843.55 747.91 1843.55 729C1843.55 710.09 1839.35 695.722 1831.88 683.962C1824.44 672.241 1813.86 663.302 1801.43 655.055C1793.3 649.664 1784.23 644.479 1774.65 638.998C1769.65 636.142 1764.52 633.205 1759.3 630.117C1743.99 621.053 1727.73 610.548 1711.48 596.562C1646.87 540.927 1581.52 429.32 1581.16 131.5H2175.54Z"
          fill="#00E0FF"
          fillOpacity="0.2"
          stroke="#00E0FF"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <rect
          x="1545.2"
          y="131.539"
          width="666.303"
          height="43"
          rx="17.5"
          fill="black"
          stroke="#00E0FF"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <rect
          x="1545.2"
          y="1283.38"
          width="666.303"
          height="43"
          rx="17.5"
          fill="black"
          stroke="#00E0FF"
          strokeWidth="5"
          strokeLinejoin="round"
        />

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
          d={`M150 ${height1} h1400`}
          stroke="#ffffff"
          strokeDasharray="20,20"
          strokeWidth="5"
        />
        <text x="1700" y="100" fill="#00E0FF" fontSize="100">
          {data2.date}
        </text>
        <text x="1680" y="400" fill="#ffffff" fontSize="160" fontWeight="400">
          {getInt(data2.value)},
          <tspan fontSize="0.85em">{getFrac(data2.value)}</tspan>
        </text>
        <path
          d={`M150 ${height2} h2050`}
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

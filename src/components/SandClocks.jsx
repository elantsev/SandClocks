import React from "react";
import s from "./SandClocks.module.css";
import SandClockSVG from "./SandClockSVG";

function SandClocks({ scale, data1, data2, className, ...rest }) {
  const Scale = ({ scale }) => (
    <div className={s.scale}>
      {scale.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );

  const getHight = (value, from = 3.5, to = 81) =>
    from + ((value - scale[0]) / (scale[scale.length - 1] - scale[0])) * to;
  const getSandLevel = (value, from = scale[0], to = scale[scale.length - 1]) =>
    (value - from) / (to - from);

  const height1 = getHight(data1.value);
  const height2 = getHight(data2.value);
  const sandLevel1 = getSandLevel(data1.value);
  const sandLevel2 = getSandLevel(data2.value);

  console.log(height1, sandLevel1);

  const hightDiff = (height2 + height1) / 2 - 8;

  const Difference = ({ value1, value2 }) => {
    const [int, frac] = (value2 - value1)
      .toFixed(1)
      .toString()
      .split(".");

    const percentDiff = (((value2 - value1) / value2) * 100).toFixed();
    return (
      <p className={s.difference} style={{ bottom: `${hightDiff}%` }}>
        {int},<span>{frac}</span> <span>({percentDiff}%)</span>
      </p>
    );
  };

  return (
    <div className={`${s.SandClocks} ${className}`} {...rest}>
      <Scale scale={scale} />
      <SandClockSVG value={sandLevel1} className={s.sandClock1} />
      <SandClockSVG value={sandLevel2} className={s.sandClock2} />
      <div className={s.dashLine1} style={{ bottom: `${height1}%` }}></div>
      <div className={s.dashLine2} style={{ bottom: `${height2}%` }}></div>
      <Difference value1={data1.value} value2={data2.value} />
      {/* вертикальная стрелка */}
      <svg
        className={s.arrow}
        style={{
          bottom: `${height1}%`,
          height: `${(sandLevel2 - sandLevel1) * 80}%`
        }}
        width="37"
        // height={500}
        preserveAspectRatio="none"
        viewBox="0 0 37 441"
        fill="none"
      >
        <path
          d="M20.2678 0.732233C19.2915 -0.244078 17.7085 -0.244078 16.7322 0.732233L0.82233 16.6421C-0.15398 17.6184 -0.15398 19.2014 0.82233 20.1777C1.79864 21.154 3.38155 21.154 4.35786 20.1777L18.5 6.03553L32.6421 20.1777C33.6184 21.154 35.2014 21.154 36.1777 20.1777C37.154 19.2014 37.154 17.6184 36.1777 16.6421L20.2678 0.732233ZM16.7322 440.268C17.7085 441.244 19.2915 441.244 20.2678 440.268L36.1777 424.358C37.154 423.382 37.154 421.799 36.1777 420.822C35.2014 419.846 33.6184 419.846 32.6421 420.822L18.5 434.964L4.35786 420.822C3.38155 419.846 1.79864 419.846 0.82233 420.822C-0.15398 421.799 -0.15398 423.382 0.82233 424.358L16.7322 440.268ZM16 2.5L16 438.5H21L21 2.5L16 2.5Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default SandClocks;

import React from "react";
import s from "./SandClocks.module.css";
import SandClock from "./SandClock";

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

  const hight1 = getHight(data1.value);
  const hight2 = getHight(data2.value);
  const hightDiff = (hight2 + hight1) / 2 - 8;

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
      <SandClock sandLevel={hight1} {...data1} />
      <SandClock sandLevel={hight2} {...data2} />
      
      <div className={s.dashLine1} style={{ bottom: `${hight1}%` }}></div>
      <div className={s.dashLine2} style={{ bottom: `${hight2}%` }}></div>
      <Difference value1={data1.value} value2={data2.value} />
    </div>
  );
}

export default SandClocks;

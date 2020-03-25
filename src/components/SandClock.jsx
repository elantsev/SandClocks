import React from "react";
import s from "./SandClock.module.css";
import { ReactComponent as SandClockIcon } from "../img/sandClockIcon.svg";

function SandClock({ sandLevel, value, date, className, ...rest }) {
  if (typeof sandLevel === "number") sandLevel = sandLevel + "%";
  const [int, frac] = (+value)
    .toFixed(1)
    .toString()
    .split(".");
  return (
    <div className={`${s.SandClock} ${className}`} {...rest}>
      <div className={s.sand} style={{ height: sandLevel }}></div>
      <p className={s.value}>
        {int},<span>{frac}</span>
      </p>
      <p className={s.date}>{date}</p>
      <SandClockIcon />
    </div>
  );
}

export default SandClock;

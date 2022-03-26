import React from "react";
import { Props } from "./types";

export const Button = ({
  text = "Default",
  variant,
  color = "default",
  size,
  disabled,
  disableShadow,
  startIcon,
  endIcon,
  shape,
}: Props) => {
  const isColored = color && !variant && !disabled;

  const styles = `
  btn
  ${size ? `btn_${size}` : "btn_md"} 
  ${variant ? `btn_${variant}` : ""} 
  ${isColored ? `btn_${color}` : ""} 
  ${size ? `btn_${size}` : ""}
  ${disabled ? "btn_disabled" : ""} 
  ${disableShadow ? "btn_disable-shadow" : ""}
  ${shape ? `btn_${shape}` : ""}`
    .replace(/\s+/g, " ")
    .trim();

  return (
    <button className={styles}>
      {startIcon}
      {text}
      {endIcon}
    </button>
  );
};

import React from "react";

enum variants {
  outline = "btn_outline",
  text = "btn_text",
}

enum colors {
  default = "btn_default",
  primary = "btn_primary",
  secondary = "btn_secondary",
  danger = "btn_danger",
}

enum sizes {
  sm = "btn_sm",
  md = "btn_md",
  lg = "btn_lg",
}

interface Props {
  text?: string;
  variant?: variants;
  color?: colors;
  size?: sizes;
  disabled?: boolean;
  disableShadow?: boolean;
}

export const Button = ({
  text = "Default",
  variant,
  color,
  size,
  disabled,
  disableShadow,
}: Props) => {
  const styles = `
  btn
  ${variant ? variant : ""} 
  ${color ? color : ""} 
  ${size ? size : ""}
  ${disabled ? "btn_disabled" : ""} 
  ${disableShadow ? "btn_disable-shadow" : ""}`
    .replace(/\s+/g, " ")
    .trim();

  return <button className={styles}>{text}</button>;
};

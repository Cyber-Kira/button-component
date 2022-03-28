import React from "react";
import { Props } from "./types";

export const Input = ({
  error,
  disabled,
  fullWidth = true,
  label,
  helperText,
  value,
  placeholder,
  multiline,
  rows,
  startIcon,
  endIcon,
  size = "md",
}: Props) => {
  const styles = `
  input
  ${fullWidth ? "input_full-width" : ""}
  ${error ? "input_error" : ""}
  ${disabled && !error ? "input_disabled" : ""}
  ${size ? `input_${size}` : ""}
  ${multiline ? `input_multiline` : ""}
  
  `
    .replace(/\s+/g, " ")
    .trim();

  const inputElement = (
    <input
      className={styles}
      placeholder={placeholder}
      value={value}
      type="text"
    ></input>
  );

  const textareaElement = (
    <textarea
      className={styles}
      placeholder={placeholder}
      value={value}
    ></textarea>
  );

  return (
    <div className="input-wrapper">
      {multiline ? textareaElement : inputElement}
      <label className="input-label">{label}</label>
      {helperTextElement}
      {startIconElement}
      {endIconElement}
    </div>
  );
};

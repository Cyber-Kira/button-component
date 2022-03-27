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
    <label className="input-label">
      {startIcon}
      {label}
      {multiline ? textareaElement : inputElement}
      {helperText}
      {endIcon}
    </label>
  );
};

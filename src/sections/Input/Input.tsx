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

  const startIconElement = (
    <div className="input-icon input-icon_start">{startIcon}</div>
  );

  const endIconElement = (
    <div className="input-icon input-icon_end">{endIcon}</div>
  );

  const helperTextElement = (
    <span className="input__helper-text">{helperText}</span>
  );

  const inputElement = (
    <input
      className={styles}
      placeholder={placeholder}
      value={value}
      type="text"
      disabled={disabled}
    />
  );

  const textareaElement = (
    <textarea
      className={styles}
      placeholder={placeholder}
      value={value}
      rows={+row < 6 ? +row : 6}
      disabled={disabled}
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

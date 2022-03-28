// The label inside the input component is unnecessary and
// should be removed when I create a Form component that has
// a labeled element. But for the sake of simplicity and the
// given design I won't remove it yet.

import React from "react";
import { Props } from "./types";

export const Input = ({
  error,
  disabled,
  fullWidth = false,
  label,
  helperText,
  value,
  placeholder,
  multiline,
  row = "3",
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
  ${multiline ? `input_multiline` : ""}`
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

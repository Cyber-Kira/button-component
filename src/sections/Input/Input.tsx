// The label inside the input component is unnecessary and
// should be removed when I create a Form component that has
// a labeled element. But for the sake of simplicity and the
// given design I won't remove it yet.

import React, { useState } from "react";
import { Props } from "./types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
  password = false,
}: Props) => {
  const [focusStyles, setFocusStyles] = useState(false);
  const [hoverStyles, setHoverStyles] = useState(false);
  const [passwordVisibility, togglepasswordVisibility] = useState(!password);
  const [inputValue, setinputValue] = useState(value);

  const passwordIcon = passwordVisibility ? (
    <VisibilityIcon fontSize="small" />
  ) : (
    <VisibilityOffIcon fontSize="small" />
  );

  const styles = `
  input
  ${fullWidth ? "input_full-width" : ""}
  ${error ? "input_error" : ""}
  ${disabled && !error ? "input_disabled" : ""}
  ${size ? `input_${size}` : ""}
  ${multiline ? `input_multiline` : ""}
  ${focusStyles ? `input_focused` : ""}
  ${password ? `input_password` : ""}
  ${focusStyles && error && !multiline ? `input_focused-error` : ""}
  ${startIcon && !endIcon && !multiline ? `input_with-icon_start` : ""}
  ${endIcon && !startIcon && !multiline ? `input_with-icon_end` : ""}
  ${startIcon && endIcon && !multiline ? `input_with-icon_both` : ""}`
    .replace(/\s+/g, " ")
    .trim();

  const startIconElement = (
    <div className="input-icon input-icon_start">{startIcon}</div>
  );

  const endIconElement = (
    <div className="input-icon input-icon_end">{endIcon}</div>
  );

  const passwordIconElement = (
    <button
      onClick={() => togglepasswordVisibility(!passwordVisibility)}
      className="input-icon_password"
    >
      {passwordIcon}
    </button>
  );

  const helperTextElement = (
    <span
      className={`
      input__helper-text 
      ${error ? `input__helper-text_error` : ""}
      ${hoverStyles && error ? `input__helper-text_error-hover` : ""}
      ${focusStyles && error ? `input__helper-text_error-focus` : ""}`}
    >
      {helperText}
    </span>
  );

  const inputLabelElement = (
    <label
      className={`
    input-label 
    ${focusStyles ? "input-label_focused" : ""}
    ${error ? `input-label_focused-error` : ""}
    ${focusStyles && error ? `input-label_error` : ""}
    ${hoverStyles && error ? `input-label_error-hover` : ""}`}
    >
      {label}
    </label>
  );

  const inputElement = (
    <input
      className={styles}
      placeholder={placeholder}
      value={inputValue}
      type={passwordVisibility ? "text" : "password"}
      disabled={disabled}
      onFocus={() => setFocusStyles(true)}
      onBlur={() => setFocusStyles(false)}
      onMouseEnter={() => setHoverStyles(true)}
      onMouseLeave={() => setHoverStyles(false)}
      onChange={(e) => setinputValue(e.target.value)}
    />
  );

  const textareaElement = (
    <textarea
      className={styles}
      placeholder={placeholder}
      value={inputValue}
      rows={+row < 6 ? +row : 6}
      disabled={disabled}
      onFocus={() => setFocusStyles(true)}
      onBlur={() => setFocusStyles(false)}
      onMouseEnter={() => setHoverStyles(true)}
      onMouseLeave={() => setHoverStyles(false)}
      onChange={(e) => setinputValue(e.target.value)}
    ></textarea>
  );

  return (
    <div className="input-wrapper">
      <div
        className={`
          icons-container
          ${fullWidth ? "icons-container_full-width" : ""}`}
      >
        {!multiline ? inputElement : textareaElement}
        {!multiline ? startIconElement : null}
        {!multiline && !password ? endIconElement : null}
        {password ? passwordIconElement : null}
      </div>
      {inputLabelElement}
      {helperTextElement}
    </div>
  );
};

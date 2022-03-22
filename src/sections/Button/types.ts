export enum variants {
  outline = "btn_outline",
  text = "btn_text",
}

export enum colors {
  default = "btn_default",
  primary = "btn_primary-color",
  secondary = "btn_secondary-color",
  danger = "btn_danger-color",
}

export enum sizes {
  sm = "btn_sm",
  md = "btn_md",
  lg = "btn_lg",
}

export interface Props {
  text?: string;
  variant?: variants;
  color?: colors;
  size?: sizes;
  disabled?: boolean;
  disableShadow?: boolean;
}

import { ReactElement } from "react";

type variants = "outline" | "text";
type colors = "default" | "primary" | "secondary" | "danger";
type sizes = "sm" | "md" | "lg";
type shapes = "default" | "circle";

export interface Props {
  children?: React.ReactNode;
  variant?: variants;
  color?: colors;
  size?: sizes;
  disabled?: boolean;
  disableShadow?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  shape?: shapes;
  tooltip?: string;
  handleClick?: () => void;
}

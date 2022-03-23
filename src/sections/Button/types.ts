export type variants = "outline" | "text";

export type colors = "default" | "primary" | "secondary" | "danger";

export type sizes = "sm" | "md" | "lg";

export interface Props {
  text?: string;
  variant?: variants;
  color?: colors;
  size?: sizes;
  disabled?: boolean;
  disableShadow?: boolean;
}

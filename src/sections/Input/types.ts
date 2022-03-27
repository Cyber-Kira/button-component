type sizes = "sm" | "md";

export interface Props {
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  value?: string;
  multiline?: string;
  rows?: string;
  placeholder?: string;
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: sizes;
}

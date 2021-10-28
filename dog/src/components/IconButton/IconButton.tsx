/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-underscore-dangle */
import React from "react";
import { IconButton } from "@mui/material";

interface Props {
  icon: React.ReactElement;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "clear";
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonSize = {
  small: "px-2 py-2",
  medium: "px-4 py-4",
  large: "px-6 py-6",
};

const ButtonStyle: {
  outlined: React.CSSProperties;
  contained: React.CSSProperties;
  clear: React.CSSProperties;
} = {
  outlined: {
    border: "2px solid #6A4BFF !important",
  },
  contained: {
    border: "none",
  },
  clear: {
    border: "none",
  },
};
const ButtonTypes = {
  contained: "bg-primary-brand shadow-brand-primary-base",
  outlined: "",
  secondary: "bg-button-background-secondary-onSurface",
  clear: "",
};

const _IconButton: React.FC<Props> = ({
  icon,
  variant = "contained",
  className = "",
  size = "medium",
  onClick,
  disabled = false,
}): React.ReactElement => {
  const classNames: string = `rounded-lg ${ButtonTypes[variant]} ${ButtonSize[size]} ${className}`;
  const styles = ButtonStyle[variant] as React.CSSProperties;

  return (
    <IconButton
      className={`${classNames}`}
      style={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </IconButton>
  );
};

export default _IconButton;

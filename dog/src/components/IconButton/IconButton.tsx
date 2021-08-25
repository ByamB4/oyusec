import { IconButton } from "@material-ui/core";
import React from "react";

interface Props {
  className?: string;
  icon: React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: "small" | "medium" | "large";
  variant?: "outlined" | "primary" | "secondary" | "clear";
  disabled?: true | false;
}
const _IconButton: React.FC<Props> = ({
  className = "",
  icon,
  onClick,
  size = "medium",
  variant = "primary",
  disabled = false,
}) => {
  const cNames = `${className}`;

  return (
    <IconButton className={`${cNames}`} disabled={disabled} onClick={onClick}>
      {icon}
    </IconButton>
  );
};

export default _IconButton;

import React from "react";
import { Avatar } from "@mui/material";

interface Props {
  className?: string;
  src: string;
  size?: "32" | "40" | "56" | "80" | "112" | "120" | "176";
  alt?: string;
}

const _Avatar: React.FC<Props> = ({
  className = "",
  src,
  size = "40",
}): React.ReactElement => {
  let sx: number | null = null;
  switch (size) {
    case "32":
      sx = 32;
      break;
    case "40":
      sx = 40;
      break;
    case "56":
      sx = 56;
      break;
    case "80":
      sx = 80;
      break;
    case "112":
      sx = 112;
      break;
    case "120":
      sx = 120;
      break;
    case "176":
      sx = 176;
      break;
  }

  return (
    <Avatar
      className={`border-4 border-primary-purple ${className}`}
      src={src}
      sx={{
        width: sx,
        height: sx,
      }}
    />
  );
};

export default _Avatar;

/* eslint-disable no-underscore-dangle */
import React from "react";
import { Avatar } from "@mui/material";

interface Props {
  className?: string;
  src: string;
  size?: 32 | 40 | 56 | 80 | 112 | 120 | 176;
  alt?: string;
}

const _Avatar: React.FC<Props> = ({
  className = "",
  src,
  size = 40,
  alt = "",
}): React.ReactElement => {
  return (
    <Avatar
      className={`border-4 border-primary-purple ${className}`}
      src={src}
      alt={alt}
      sx={{
        width: size,
        height: size,
      }}
    />
  );
};

export default _Avatar;

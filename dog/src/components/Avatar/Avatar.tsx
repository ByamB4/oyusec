import { FC, ReactElement } from "react";
import { Avatar as MuiAvatar } from "@mui/material";

interface Props {
  className?: string;
  src: string;
  size?: 32 | 40 | 56 | 80 | 112 | 120 | 176;
  alt?: string;
}

const Avatar: FC<Props> = ({
  className = "",
  src,
  size = 40,
  alt = "",
}): ReactElement => {
  let classNames: string = className;
  switch (size) {
    case 32:
      classNames += " border";
      break;
    case 40:
      classNames += " border-2";
      break;
    case 56:
      classNames += " border-2";
      break;
    case 80:
      classNames += " border-2";
      break;
    case 112:
      classNames += " border-4";
      break;
    case 120:
      classNames += " border-4";
      break;
    case 176:
      classNames += " border-8";
      break;
    default:
      classNames += " border";
  }

  return (
    <MuiAvatar
      className={`border-primary-purple ${classNames}`}
      src={src}
      alt={alt}
      sx={{
        width: size,
        height: size,
      }}
    />
  );
};

export default Avatar;

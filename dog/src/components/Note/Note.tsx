import { Typography } from "@mui/material";
import React from "react";

interface Props {
  className?: string;
  text: string;
}

const Note: React.FC<Props> = ({ className = "", text = "" }):React.ReactElement => {
  return (
    <div className={`flex h-full bg-secondary-darkGrey ${className}`}>
      <div className="h-auto w-2 bg-secondary-yellow" />
      <Typography variant="h6" className="px-2 py-1">
        {text}
      </Typography>
    </div>
  );
};

export default Note;

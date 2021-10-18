import { Typography } from "@mui/material";
import { IconContentCopy } from "icons/Filled";
import React from "react";

interface Props {
  className?: string;
  text: string;
}

const Note: React.FC<Props> = ({
  className = "",
  text = "",
}): React.ReactElement => {
  return (
    <div className={`flex bg-secondary-darkGrey ${className}`}>
      <div className="w-2 bg-secondary-yellow" />
      <Typography variant="h6" className="px-2 py-1 w-full">
        {text}
      </Typography>
      <div className="flex items-center p-1">
        <IconContentCopy
          width={24}
          height={24}
          className="text-text-darkGrey hover:text-text-grey hover:cursor-pointer"
          onClick={() => navigator.clipboard.writeText(text)}
        />
      </div>
    </div>
  );
};

export default Note;

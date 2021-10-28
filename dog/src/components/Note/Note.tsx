/* eslint-disable @typescript-eslint/no-floating-promises */
import { Typography } from "@mui/material";
import { IconContentCopy } from "icons/Filled";
import { IconCheck } from "icons/Lined";
import { ReactElement, FC, useState } from "react";
import { delay } from "utils";

interface Props {
  className?: string;
  text: string;
}

const Note: FC<Props> = ({ className = "", text = "" }): ReactElement => {
  const [copied, setCopied] = useState<boolean>(false);

  const _ = async () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    await delay(2000).then(() => setCopied(false));
  };

  return (
    <div className={`flex bg-secondary-darkGrey ${className}`}>
      <div className="w-2 bg-secondary-yellow" />
      <Typography variant="h6" className="px-2 py-1 w-full">
        {text}
      </Typography>
      <div className="flex items-center p-1">
        {copied ? (
          <IconCheck width={22} height={22} />
        ) : (
          <IconContentCopy
            width={24}
            height={24}
            className="text-text-darkGrey hover:text-text-grey hover:cursor-pointer"
            onClick={() => _()}
          />
        )}
      </div>
    </div>
  );
};

export default Note;

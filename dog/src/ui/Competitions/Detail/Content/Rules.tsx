import { ICompetitionTabContent } from "interfaces";
import { Typography } from "@mui/material";
import { handleCompetitionTabContentIcon } from "utils/handlers";
import React from "react";

interface Props {
  className?: string;
  content: ICompetitionTabContent;
}

const Rules: React.FC<Props> = ({
  className = "",
  content,
}): React.ReactElement => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex gap-4 items-center">
        {handleCompetitionTabContentIcon(content)}
        <Typography variant="h5">{content.title}</Typography>
      </div>
      {content.rules.map((rule: string) => (
        <Typography key={rule}>► {rule}</Typography>
      ))}
    </div>
  );
};

export default Rules;

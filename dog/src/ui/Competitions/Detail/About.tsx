import React from "react";
import Image from "next/image";
import { ICompetition, ICompetitionAuthor } from "interfaces";
import { safeCompetitionThumbnail } from "utils/safe";
import { Typography } from "@mui/material";
import { Avatar } from "components";

interface Props {
  className?: string;
  competition: ICompetition;
}

const Detail: React.FC<Props> = ({
  className = "",
  competition,
}): React.ReactElement => {
  return (
    <div className={`grid grid-cols-4 gap-1 ${className}`}>
      <div className="flex col-span-1 justify-center">
        <Image
          src={safeCompetitionThumbnail(competition)}
          height={300}
          width={300}
          alt={competition.name}
          objectFit="contain"
        />
      </div>
      <div className="col-span-1 flex flex-col flex-wrap gap-4">
        <Typography variant="h3" className="text-center">
          {competition.name}
        </Typography>
        <div className="flex flex-wrap gap-4">
          {competition.authors.map((author: ICompetitionAuthor) => (
            <Avatar
              size={80}
              className="border-2 rounded-xl"
              src={author.user.avatar}
              key={author.user.id}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-4">
        <Typography variant="h3" className="text-center">
          Ивээн тэтгэгч
        </Typography>
        <div className="flex flex-wrap gap-4">
          {competition.authors.map((author: ICompetitionAuthor) => (
            <Avatar
              size={80}
              className="border-2 rounded-xl"
              src={author.user.avatar}
              key={author.user.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;

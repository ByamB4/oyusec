import React from "react";
import { Typography } from "@mui/material";
import ArrowLeft from "icons/Lined/ArrowCircleLeft";
import { IChallenge } from "interfaces";

interface Props {
  className?: string;
  curChall: string;
  sCurChall: any;
  chall: IChallenge;
}

const Challenge: React.FC<Props> = ({
  className = "",
  curChall,
  sCurChall,
  chall,
}): React.ReactElement => {
  const active = curChall === chall.id;

  const handleCurChall = (): void => {
    if (active) {
      sCurChall("");
    } else {
      sCurChall(chall.id);
    }
  };

  return (
    <div
      className={`flex items-center justify-between rounded-md p-3 hover:cursor-pointer transition-width transition-slowest duration-300 ease ${className} ${
        active
          ? "w-4/5 bg-gradient-to-r from-secondary-blue via-primary-purple to-primary-purple"
          : "w-full bg-primary-light1"
      }`}
      onClick={() => handleCurChall()}
    >
      <Typography variant="h4">{chall.name}</Typography>
      <ArrowLeft
        width={24}
        height={24}
        className={`${
          active ? "transform rotate-180 duration-500 ease-in-out" : ""
        }`}
      />
    </div>
  );
};

export default Challenge;

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Typography } from "@mui/material";
import ArrowLeft from "icons/Lined/ArrowCircleLeft";
import { IChallenge } from "interfaces";

interface Props {
  className?: string;
  currentChallenge: IChallenge;
  setCurrentChallenge: any;
  challenge: IChallenge;
  style?: React.CSSProperties;
}

const Challenge: React.FC<Props> = ({
  className = "",
  currentChallenge,
  setCurrentChallenge,
  challenge,
  style,
}): React.ReactElement => {
  const active = currentChallenge.id === challenge.id;

  const handleRootClick = (): void => {
    if (active) {
      setCurrentChallenge({} as IChallenge);
    } else {
      setCurrentChallenge(challenge);
    }
  };

  return (
    <div
      className={`flex items-center justify-between rounded-md p-3 hover:cursor-pointer transition-width transition-slowest duration-300 ease ${className} ${
        active
          ? "w-4/5 bg-gradient-to-r from-secondary-blue via-primary-purple to-primary-purple"
          : "w-full bg-primary-light1"
      }`}
      onClick={() => handleRootClick()}
      style={style}
    >
      <Typography variant="h5">{challenge.name}</Typography>
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

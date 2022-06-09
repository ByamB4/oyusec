import React from "react";
import { Typography } from "@mui/material";
import { IChallenge } from "interfaces";

interface Props {
  className?: string;
  activeChallenge: IChallenge;
}

const RequestedChallenge: React.FC<Props> = ({
  className = "",
  activeChallenge,
}): React.ReactElement => {
  return (
    <div className={`flex flex-col gap-6 w-full px-12 ${className}`}>
      <Typography
        variant="h2"
        className="text-center"
        style={{
          color: "#F9EAE1",
        }}
      >
        {activeChallenge.name}
      </Typography>
      <div className="flex w-full justify-between">
        <Typography variant="h5" className="uppercase text-text-grey">
          Нэмсэн
        </Typography>
        <Typography variant="h5">ByamB4</Typography>
      </div>
      <div className="flex w-full justify-between">
        <Typography variant="h5" className="uppercase text-text-grey">
          Төрөл
        </Typography>
        <Typography variant="h5">Урвуу инженерчлэл</Typography>
      </div>
      <div className="flex w-full justify-between">
        <Typography variant="h5" className="uppercase text-text-grey">
          Огноо
        </Typography>
        <Typography variant="h5">2021 - 08 - 21</Typography>
      </div>
    </div>
  );
};

export default RequestedChallenge;

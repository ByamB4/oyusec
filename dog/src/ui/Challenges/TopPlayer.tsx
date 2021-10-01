import React from "react";
import Avatar from "components/Avatar";
import { DEFAULT } from "configs";
import { safeUserAvatar } from "utils/safe";
import { Typography } from "@mui/material";

interface Props {
  className?: string;
}

const TopPlayer: React.FC<Props> = ({ className = "" }): React.ReactElement => {
  return (
    <div className={`flex ${className}`}>
      <Avatar size="176" src={safeUserAvatar(DEFAULT.user)} />
      <div>
        <Typography
          variant="h6"
          className="font-normal uppercase text-text-lineDark"
        >
          Today top player
        </Typography>
        <Typography className="text-3xl">ByamB4</Typography>
        <Typography className="text-3xl" style={{ fontFamily: "Exo2" }}>
          ByamB4
        </Typography>
      </div>
    </div>
  );
};
export default TopPlayer;

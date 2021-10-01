import React from "react";
import Avatar from "components/Avatar";
import { DEFAULT } from "configs";
import { safeCompetitionThumbnail, safeUserAvatar } from "utils/safe";
import { Typography } from "@mui/material";
import Chip from "components/Chip";
import UserTitle from "components/UserTitle";

interface Props {
  className?: string;
}

const Contest: React.FC<Props> = ({ className = "" }): React.ReactElement => {
  const rightItems = [
    {
      label: "Rating",
      value: "30",
    },
    {
      label: "Enrollment",
      value: "Team",
    },
    {
      label: "Time left",
      value: "3d 12h",
    },
  ];

  return (
    <div
      className={`flex gap-4 items-center bg-primary-light1 rounded-3xl p-5 ${className}`}
    >
      <Avatar size="176" src={safeCompetitionThumbnail(DEFAULT.competition)} />
      <div className="flex flex-col h-full justify-between py-4">
        <Typography
          variant="h6"
          className="font-normal uppercase text-text-grey"
        >
          Удахгүй болох тэмцээн
        </Typography>
        <Typography variant="h2">First Blood #2</Typography>
        <div className="flex gap-2">
          {DEFAULT.competition.tags.map((it) => (
            <Chip key={it.id}>
              <Typography variant="h6">{it.label}</Typography>
            </Chip>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full justify-between py-4 ml-6">
        {rightItems.map((it, _) => (
          <div className="flex gap-12 justify-between" key={_}>
            <Typography
              variant="h6"
              className="font-normal uppercase text-text-grey"
            >
              {it.label}
            </Typography>
            <Typography variant="h6" className="font-bold">
              {it.value}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Contest;

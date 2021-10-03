import React from "react";
import IconTrophy from "icons/Lined/Trophy";
import { colors, DEFAULT } from "configs";
import IconSword from "icons/Lined/Sword";
import IconScript from "icons/Lined/Script";
import IconFire from "icons/Filled/Fire";
import {
  styled,
  linearProgressClasses,
  LinearProgress,
  Typography,
} from "@mui/material";
import { UserTitle } from "components";

interface Props {
  className?: string;
}
const BorderLinearProgress = styled(LinearProgress)(() =>
  // { theme }
  ({
    height: 13,
    borderRadius: 50,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "rgba(33, 150, 243, 0.3)",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 50,
      backgroundColor: colors.secondary.blue,
    },
  })
);

const AppFooter: React.FC<Props> = ({ className = "" }): React.ReactElement => {
  return (
    <div
      className={`bg-primary-dark flex items-center justify-between text-white py-2 px-4 ${className}`}
    >
      <div className="flex gap-10">
        <div className="flex items-center">
          <IconTrophy width={32} height={32} />
          <Typography variant="h3">#2</Typography>
        </div>
        <UserTitle user={DEFAULT.user} />
      </div>
      <div className="flex gap-10 max-w-3xl w-full">
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-end">
            <IconFire fill="#fff" width={28} height={28} />
          </div>
          <div>
            <BorderLinearProgress variant="determinate" value={28} />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-end">
            <IconScript fill="#fff" width={28} height={28} />
          </div>
          <div>
            <BorderLinearProgress variant="determinate" value={72} />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-end">
            <IconSword fill="#fff" width={28} height={28} />
          </div>
          <div>
            <BorderLinearProgress variant="determinate" value={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;

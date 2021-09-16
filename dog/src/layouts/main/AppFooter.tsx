import React from "react";
import IconTrophy from "icons/Lined/Trophy";
import { Typography } from "@material-ui/core";
import LinearProgress, {
  linearProgressClasses,
} from "@material-ui/core/LinearProgress";
import { styled } from "@material-ui/core/styles";
import { colors } from "configs";
import IconSword from "icons/Lined/Sword";
import IconScript from "icons/Lined/Script";
import IconFire from "icons/Filled/Fire";

interface Props {
  className?: string;
}
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 50,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "rgba(33, 150, 243, 0.3)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 50,
    backgroundColor: colors.secondary.blue,
  },
}));

const AppFooter: React.FC<Props> = ({ className = "" }) => {
  return (
    <div
      className={`bg-primary-dark flex items-center justify-between text-white py-2 px-4 ${className}`}
    >
      <div className="flex gap-10">
        <div className="flex items-center">
          <IconTrophy width={36} height={36} />
          <Typography variant="h3">#2</Typography>
        </div>
        <div className="flex flex-col">
          <Typography variant="h3">
            <span>Byam</span>
            <span className="text-secondary-red">B4</span>
          </Typography>
          <Typography variant="body1" className="text-text-darkGrey">
            Hecker
          </Typography>
        </div>
      </div>
      <div className="flex gap-10 max-w-3xl w-full">
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-end">
            <IconFire fill="#fff" width={32} height={32} />
          </div>
          <div>
            <BorderLinearProgress variant="determinate" value={50} />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-end">
            <IconScript fill="#fff" width={32} height={32} />
          </div>
          <div>
            <BorderLinearProgress variant="determinate" value={50} />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-end">
            <IconSword fill="#fff" width={32} height={32} />
          </div>
          <div>
            <BorderLinearProgress variant="determinate" value={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;

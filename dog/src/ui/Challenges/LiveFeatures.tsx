import React from "react";
import { DesktopTopPlayer, DesktopContest, DesktopAddChallenge } from ".";

interface Props {
  className?: string;
}

const LiveFeatures: React.FC<Props> = ({
  className = "",
}): React.ReactElement => {
  return (
    <div className={`flex gap-8 ${className}`}>
      <DesktopTopPlayer />
      <DesktopContest />
      <div className="flex flex-col">
        <DesktopAddChallenge />
      </div>
    </div>
  );
};
export default LiveFeatures;

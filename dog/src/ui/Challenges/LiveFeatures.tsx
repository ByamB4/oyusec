import React from "react";
import { DesktopTopPlayer, DesktopContest } from ".";

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
    </div>
  );
};
export default LiveFeatures;

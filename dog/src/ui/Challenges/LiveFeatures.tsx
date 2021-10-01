import React from "react";
import { DesktopTopPlayer } from ".";

interface Props {
  className?: string;
}

const LiveFeatures: React.FC<Props> = ({
  className = "",
}): React.ReactElement => {
  return (
    <div className={`flex ${className}`}>
      <DesktopTopPlayer />
    </div>
  );
};
export default LiveFeatures;

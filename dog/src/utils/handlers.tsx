import IconEye from "icons/Lined/Eye";
import IconStar from "icons/Lined/Star";
import React from "react";

export const handleChallChipColor = (val: string) => {
  switch (val) {
    case "solved": {
      return "deepBlue";
    }
    case "score": {
      return "darkViolet";
    }
  }
};

export const handleChallIcon = (val: string): React.ReactChild => {
  switch (val) {
    case "solved":
      return <IconEye width={20} height={20} />;
    case "score":
      return <IconStar width={20} height={20} />;
    // TODO: change default icon
    default:
      return <IconStar width={20} height={20} />;
  }
};

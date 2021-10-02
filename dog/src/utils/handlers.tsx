import {
  IconBugFilled,
  IconCubeScanFilled,
  IconFileSearchFilled,
  IconLockFilled,
  IconPuzzleFilled,
  IconSkullFilled,
  IconWebFilled,
} from "icons/Filled";
import IconEye from "icons/Lined/Eye";
import IconStar from "icons/Lined/Star";
import { IChallengeCategory } from "interfaces";
import React from "react";

export const handleChallChipColor = (
  val: string
): "primary" | "red" | "deepBlue" | "darkViolet" => {
  switch (val) {
    case "solved": {
      return "deepBlue";
    }
    case "score": {
      return "darkViolet";
    }
    default:
      return "deepBlue";
  }
};

export const handleChallIcon = (val: string): React.ReactChild | undefined => {
  switch (val) {
    case "solved":
      return <IconEye width={20} height={20} />;
    case "score":
      return <IconStar width={20} height={20} />;
  }
};

export const challCatIcon = (
  cat: IChallengeCategory
): React.ReactChild | undefined => {
  switch (cat.key) {
    case "forensics":
      return <IconFileSearchFilled width={20} height={20} />;
    case "misc":
      return <IconPuzzleFilled width={20} height={20} />;
    case "crypto":
      return <IconLockFilled width={20} height={20} />;
    case "web":
      return <IconWebFilled width={20} height={20} />;
    case "pwn":
      return <IconSkullFilled width={20} height={20} />;
    case "reversing":
      return <IconBugFilled width={20} height={20} />;
    case "requested":
      return <IconCubeScanFilled width={20} height={20} />;
  }
};

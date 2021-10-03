import { IChallengeCategory } from "interfaces";
import {
  IconBugFilled,
  IconCubeScanFilled,
  IconFileSearchFilled,
  IconLockFilled,
  IconPuzzleFilled,
  IconSkullFilled,
  IconWebFilled,
} from "icons/Filled";
import { IconEyeLined, IconStarLined } from "icons/Lined";

export const handleChallengeChipColor = (
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

export const handleChallengeIcon = (
  val: string
): React.ReactChild | undefined => {
  switch (val) {
    case "solved":
      return <IconEyeLined width={20} height={20} />;
    case "score":
      return <IconStarLined width={20} height={20} />;
  }
};

export const handleChallengeCategoryIcon = (
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

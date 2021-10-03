import { IChallengeCategory } from "interfaces";
import {
  IconBug,
  IconCubeScan,
  IconFileSearch,
  IconLock,
  IconPuzzle,
  IconSkull,
  IconWeb,
} from "icons/Filled";
import { IconEye, IconStar } from "icons/Lined";

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
      return <IconEye width={20} height={20} />;
    case "score":
      return <IconStar width={20} height={20} />;
  }
};

export const handleChallengeCategoryIcon = (
  cat: IChallengeCategory
): React.ReactChild | undefined => {
  switch (cat.key) {
    case "forensics":
      return <IconFileSearch width={20} height={20} />;
    case "misc":
      return <IconPuzzle width={20} height={20} />;
    case "crypto":
      return <IconLock width={20} height={20} />;
    case "web":
      return <IconWeb width={20} height={20} />;
    case "pwn":
      return <IconSkull width={20} height={20} />;
    case "reversing":
      return <IconBug width={20} height={20} />;
    case "requested":
      return <IconCubeScan width={20} height={20} />;
  }
};

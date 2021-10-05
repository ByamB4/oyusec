import { IChallengeCategory, ICompetitionState } from "interfaces";
import {
  IconBug,
  IconCubeScan,
  IconFileSearch,
  IconFire,
  IconLock,
  IconPuzzle,
  IconSkull,
  IconWeb,
} from "icons/Filled";
import {
  IconBaselineQuery,
  IconChart,
  IconEye,
  IconScript,
  IconStar,
  IconSwords,
  IconTimeLapse,
} from "icons/Lined";

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

export const handleCompetitionsRootTabIcon = (
  state: ICompetitionState
): React.ReactChild | undefined => {
  switch (state.key) {
    case "live": {
      return <IconFire width={24} height={24} />;
    }
    case "coming": {
      return <IconTimeLapse width={24} height={24} />;
    }
    case "archive": {
      return <IconLock width={24} height={24} />;
    }
    case "requested": {
      return <IconCubeScan width={24} height={24} />;
    }
  }
};

export const handleCompetitionTabIcon = (
  state: any
): React.ReactChild | undefined => {
  switch (state.key) {
    case "about": {
      return <IconScript width={24} height={24} />;
    }
    case "challenges": {
      return <IconSwords width={24} height={24} />;
    }
    case "scoreboard": {
      return <IconChart width={24} height={24} />;
    }
    case "statistics": {
      return <IconBaselineQuery width={24} height={24} />;
    }
  }
};

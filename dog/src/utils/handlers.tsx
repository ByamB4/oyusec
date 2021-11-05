import { ReactElement } from "react";
import {
  IChallengeCategory,
  ICompetitionState,
  ICompetitionTab,
  ICompetitionTabContent,
} from "interfaces";
import {
  IconAccountCircle,
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
  IconAccount,
  IconBaselineQuery,
  IconChart,
  IconEye,
  IconFacebook,
  IconFile,
  IconGithub,
  IconInstagram,
  IconLinkedIn,
  IconScript,
  IconShutdown,
  IconStar,
  IconSwords,
  IconTimeLapse,
  IconTwitter,
  IconYoutube,
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

export const handleChallengeIcon = (val: string): ReactElement | undefined => {
  switch (val) {
    case "solved":
      return <IconEye width={20} height={20} />;
    case "score":
      return <IconStar width={20} height={20} />;
    default:
      return <></>;
  }
};

export const handleChallengeCategoryIcon = (
  cat: IChallengeCategory
): ReactElement | undefined => {
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
    default:
      return <></>;
  }
};

export const handleCompetitionsRootTabIcon = (
  state: ICompetitionState
): ReactElement | undefined => {
  switch (state.key) {
    case "live":
      return <IconFire width={24} height={24} />;
    case "coming":
      return <IconTimeLapse width={24} height={24} />;
    case "archive":
      return <IconLock width={24} height={24} />;
    case "requested":
      return <IconCubeScan width={24} height={24} />;
    default:
      return <></>;
  }
};

export const handleCompetitionTabIcon = (
  tab: ICompetitionTab
): ReactElement | undefined => {
  switch (tab.type.key) {
    case "about":
      return <IconScript width={24} height={24} />;

    case "challenges":
      return <IconSwords width={24} height={24} />;

    case "scoreboard":
      return <IconChart width={24} height={24} />;

    case "statistics":
      return <IconBaselineQuery width={24} height={24} />;
    default:
      return <></>;
  }
};

export const handleCompetitionTabContentIcon = (
  content: ICompetitionTabContent
): ReactElement | undefined => {
  switch (content.type.key) {
    case "about":
      return <IconScript width={22} height={22} />;

    case "rule":
      return <IconFile width={22} height={22} />;

    case "prize":
      return <IconChart width={22} height={22} />;
    default:
      return <></>;
  }
};

export const handleIcon = (
  val: string,
  size = 24,
  color = "white"
): ReactElement => {
  switch (val) {
    case "facebook":
      return <IconFacebook width={size} height={size} fill={color} />;
    case "instagram":
      return <IconInstagram width={size} height={size} fill={color} />;
    case "youtube":
      return <IconYoutube width={size} height={size} fill={color} />;
    case "twitter":
      return <IconTwitter width={size} height={size} fill={color} />;
    case "linkedin":
      return <IconLinkedIn width={size} height={size} fill={color} />;
    case "github":
      return <IconGithub width={size} height={size} fill={color} />;
    case "account":
      return <IconAccount width={size} height={size} fill={color} />;
      case "account-circle":
        return <IconAccountCircle width={size} height={size} fill={color} />;
    case "shutdown":
      return <IconShutdown width={size} height={size} stroke={color} />;
    default:
      return <></>;
  }
};

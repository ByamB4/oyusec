import {
  IChallengeCategory,
  IChallengeNote,
  IChallengeTag,
  IChallengeState,
} from "interfaces";

export default interface IChallenge {
  id: string;
  name: string;
  tags: IChallengeTag[];
  notes: IChallengeNote[];
  description: string;
  state: IChallengeState;
  category: IChallengeCategory;
}

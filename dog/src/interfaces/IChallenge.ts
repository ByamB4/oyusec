import {
  IChallengeCategory,
  IChallengeNote,
  IChallengeTag,
  IChallengeState,
  IUser,
} from "interfaces";

export default interface IChallenge {
  id: string;
  name: string;
  tags: IChallengeTag[];
  notes: IChallengeNote[];
  description: string;
  state: IChallengeState;
  category: IChallengeCategory;
  value: number;

  authors: IUser[];
}

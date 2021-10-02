import { IChallengeCategory, IChallengeTag } from "interfaces";

export default interface IChallenge {
  id: string;
  name: string;
  tags: IChallengeTag[];
  category: IChallengeCategory;
}

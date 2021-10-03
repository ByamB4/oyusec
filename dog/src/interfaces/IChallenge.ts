import { IChallengeCategory, IChallengeNote, IChallengeTag } from "interfaces";

export default interface IChallenge {
  id: string;
  name: string;
  tags: IChallengeTag[];
  notes: IChallengeNote[];
  description: string;
  category: IChallengeCategory;
}

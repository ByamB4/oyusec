import { ICompetitionTag } from "interfaces";

export default interface ICompetition {
  name: string;
  image: string;
  tags: ICompetitionTag[];
}

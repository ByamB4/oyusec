import { ICompetitionTabContentType } from "interfaces";

export default interface ICompetitionTabContent {
  id: string;
  type: ICompetitionTabContentType;
  title: string;
  description: string;
  rules: string[];
}

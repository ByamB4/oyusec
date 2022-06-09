import { ICompetitionTabContent, ICompetitionTabType } from "interfaces";

export default interface ICompetitionTab {
  id: string;
  visible: boolean;
  loginRequired: boolean;
  participantRequired: boolean;
  name: string;
  type: ICompetitionTabType;
  contents: ICompetitionTabContent[];
}

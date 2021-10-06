import {
  ICompetitionAuthor,
  ICompetitionState,
  ICompetitionTab,
  ICompetitionTag,
} from "interfaces";

export default interface ICompetition {
  id: string;
  name: string;
  image: string;
  thumbnailImage: string;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
  updatedAt: Date;
  slug: string;
  tabs: ICompetitionTab[];
  authors: ICompetitionAuthor[];
  state: ICompetitionState;
  tags: ICompetitionTag[];
}

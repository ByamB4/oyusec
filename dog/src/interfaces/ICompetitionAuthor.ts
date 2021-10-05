import { ICompetition, IUser } from "interfaces";

export default interface ICompetitionAuthor {
  user: IUser;
  competition: ICompetition;
}

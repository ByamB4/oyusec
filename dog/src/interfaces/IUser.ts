import { IUserTag } from "interfaces";

export default interface IUser {
  firstName: string;
  lastName: string;
  avatar: string;
  username: string;
  rank: string;
  tags: IUserTag[];
}

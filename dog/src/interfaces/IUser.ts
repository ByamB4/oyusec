import { IUserTag } from "interfaces";

export default interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  username: string;
  rank: string;
  tags: IUserTag[];
}

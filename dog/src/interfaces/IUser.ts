import { ISocialLink, IUserTag } from "interfaces";

export default interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  cover: string;
  avatar: string;
  username: string;
  socialLinks?: ISocialLink;
  rank: string;
  tags: IUserTag[];
}

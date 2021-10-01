import { DEFAULT } from "configs";
import { IUser } from "interfaces";

export const safeUserAvatar = (user: IUser): string => {
  if (user.avatar) {
    return user.avatar;
  }
  return DEFAULT.user.avatar;
};

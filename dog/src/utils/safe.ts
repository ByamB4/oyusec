import { DEFAULT } from "configs";
import { ICompetition, IUser } from "interfaces";

export const safeUserAvatar = (user: IUser): string => {
  if (user.avatar) {
    return user.avatar;
  }
  return DEFAULT.user.avatar;
};

export const safeCompetitionThumbnail = (comp: ICompetition): string => {
  if (comp.image) {
    return comp.image;
  }
  return DEFAULT.competition.image;
};

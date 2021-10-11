import { DEFAULT } from "configs";
import { ICompetition, IUser } from "interfaces";

export const safeUserAvatar = (user: Partial<IUser>): string => {
  if (user.avatar) {
    return user.avatar;
  }
  return DEFAULT.user.avatar!;
};

export const safeUserCover = (user: Partial<IUser>): string => {
  if (user.cover) {
    return user.cover;
  }
  return DEFAULT.user.cover!;
};

export const safeCompetitionThumbnail = (
  comp: Partial<ICompetition>
): string => {
  // if (comp.thumbnailImage) {
  //   return comp.thumbnailImage;
  // }
  return DEFAULT.competition.thumbnailImage!;
};

export const safeCompetitionImage = (comp: Partial<ICompetition>): string => {
  if (comp.image) {
    return comp.image;
  }
  return DEFAULT.competition.image!;
};

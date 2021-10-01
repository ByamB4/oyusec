import { IUser } from "interfaces";

export const APP_NAME = "OyuSec";

interface IDEFAULT {
  title: string;
  user: IUser;
}

export const DEFAULT: IDEFAULT = {
  title: "OyuSec",
  user: {
    firstName: "Byambadalai",
    lastName: "Sumiya",
    username: "ByamB4",
    avatar: `${process.env.STATIC_ROOT}/img/users/me.jpg`,
  },
};

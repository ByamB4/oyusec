import { ICompetition, IUser } from "interfaces";
// Development purposes
import { v4 as uuidv4 } from "uuid";

export const APP_NAME = "OyuSec";

interface IDEFAULT {
  title: string;
  user: IUser;
  competition: ICompetition;
}

export const DEFAULT: IDEFAULT = {
  title: "OyuSec",
  user: {
    firstName: "Byambadalai",
    lastName: "Sumiya",
    username: "ByamB4",
    avatar: `${process.env.STATIC_ROOT}/img/users/me.jpg`,
    rank: "Hecker",
    tags: [
      { label: "Contributer", id: uuidv4() },
      { label: "Core", id: uuidv4() },
      { label: "Developer", id: uuidv4() },
    ],
  },
  competition: {
    name: "First Blood #2",
    image: `${process.env.STATIC_ROOT}/img/competitions/default.png`,
    tags: [
      { label: "Шагналтай", id: uuidv4() },
      { label: "Веб", id: uuidv4() },
    ],
  },
};

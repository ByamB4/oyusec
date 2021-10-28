/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
import { ICompetition, IUser } from "interfaces";
import { competitionTabContentTypes, competitionTabTypes } from "utils/fake";
import { v4 } from "uuid";
const faker = require("faker");

export const APP_NAME = "OyuSec";

interface IDEFAULT {
  title: string;
  user: Partial<IUser>;
  competition: Partial<ICompetition>;
}

export const TITLE = {
  DEFAULT: "OyuSec",
  homepage: {
    index: "Нүүр хуудас",
  },
  challenges: {
    index: "Бодлогууд",
  },
  competitions: {
    index: "Тэмцээн",
  },
};

export const DEFAULT: IDEFAULT = {
  title: "OyuSec",
  user: {
    firstName: "Byambadalai",
    lastName: "Sumiya",
    username: "ByamB4",
    avatar: `${process.env.STATIC_ROOT}/img/users/me.jpg`,
    rank: "Hecker",
    cover: `${process.env.STATIC_ROOT}/img/users/cover.png`,
    socialLinks: {
      facebookLink: "https://facebook.com/byamb4",
      instagramLink: "https://facebook.com/byamb4",
      twitterLink: "https://facebook.com/byamb4",
      linkedinLink: "https://facebook.com/byamb4",
      githubLink: "https://facebook.com/byamb4",
      youtubeLink: "https://facebook.com/byamb4",
    },
    tags: [
      { label: "Contributor", id: v4() },
      { label: "Core", id: v4() },
      { label: "Developer", id: v4() },
    ],
  },
  competition: {
    id: v4(),
    name: "First Blood #2",
    image: `${process.env.STATIC_ROOT}/img/competitions/default.png`,
    thumbnailImage: `${process.env.STATIC_ROOT}/img/competitions/thumbnail.png`,
    // state: {},
    slug: "first-blood-2",
    tags: [
      { label: "Шагналтай", id: v4() },
      { label: "Веб", id: v4() },
    ],
    tabs: Array.from({ length: 10 }, () => ({
      id: v4(),
      visible: true,
      loginRequired: false,
      participantRequired: false,
      name: faker.name.findName(),
      // type: Math.random(  ),
      type: competitionTabTypes[
        Math.floor(Math.random() * competitionTabTypes.length)
      ],
      contents: Array.from({ length: 10 }, () => ({
        id: v4(),
        type: competitionTabContentTypes[
          Math.floor(Math.random() * competitionTabContentTypes.length)
        ],
        rules: Array.from({ length: 4 }, () => faker.lorem.paragraph()),
        title: faker.name.findName(),
        description: faker.lorem.paragraphs(),
      })),
    })),
    authors: Array.from({ length: 6 }, () => ({
      user: {
        id: v4(),
        firstName: "Byambadalai",
        lastName: "Sumiya",
        username: "ByamB4",
        avatar: `${process.env.STATIC_ROOT}/img/users/me.jpg`,
        rank: "Hecker",
        tags: [],
        cover: "",
      },
      competition: {
        id: v4(),
        name: "First Blood #2",
        image: `${process.env.STATIC_ROOT}/img/competitions/default.png`,
        thumbnailImage: `${process.env.STATIC_ROOT}/img/competitions/thumbnail.png`,
        // state: {},
        slug: "first-blood-2",
        // createdAt: ,
        createdAt: "" as any,
        endDate: "" as any,
        startDate: "" as any,
        authors: [],
        state: {} as any,
        updatedAt: "" as any,
        tags: [],
        tabs: [],
      },
    })),
  },
};

import {
  IChallenge,
  IChallengeCategory,
  IChallengeState,
  ICompetition,
  ICompetitionState,
} from "interfaces";
import { v4 } from "uuid";

var faker = require("faker");

export const challengeCategoryList: IChallengeCategory[] = [
  {
    id: v4(),
    key: "forensics",
    value: "Forensics",
  },
  {
    id: v4(),
    key: "misc",
    value: "Misc",
  },
  {
    id: v4(),
    value: "Crypto",
    key: "crypto",
  },
  {
    id: v4(),
    value: "Web",
    key: "web",
  },
  {
    id: v4(),
    value: "Pwn",
    key: "pwn",
  },
  {
    id: v4(),
    value: "Reversing",
    key: "reversing",
  },
  {
    id: v4(),
    key: "requested",
    value: "Requested",
  },
];

export const challengeStateList: IChallengeState[] = [
  {
    id: v4(),
    key: "visible",
    value: "Visible",
  },
  {
    id: v4(),
    key: "hidden",
    value: "Hidden",
  },
  {
    id: v4(),
    key: "locked",
    value: "Visible",
  },
  {
    id: v4(),
    key: "requested",
    value: "Requested",
  },
];

export const challengeList: IChallenge[] = Array.from({ length: 200 }, () => ({
  id: v4(),
  name: faker.name.findName(),
  tags: [],
  description: faker.lorem.paragraphs(),
  notes: Array.from({ length: 2 }, () => ({
    id: v4(),
    label: faker.lorem.sentence(),
  })),
  state:
    challengeStateList[Math.floor(Math.random() * challengeStateList.length)],
  category:
    challengeCategoryList[
      Math.floor(Math.random() * challengeCategoryList.length)
    ],
}));

export const featureTopPlayer = {
  challenge: 6,
  competition: 1,
  score: 986,
};

export const competitionStateList: ICompetitionState[] = [
  {
    id: v4(),
    key: "live",
    value: "live",
  },
  {
    id: v4(),
    key: "coming",
    value: "Coming",
  },
  {
    id: v4(),
    key: "archive",
    value: "Archive",
  },
  {
    id: v4(),
    key: "requested",
    value: "Requested",
  },
];

export const competitionDetailTabs: any = [
  {
    id: v4(),
    key: "about",
    value: "тухай",
  },
  {
    id: v4(),
    key: "challenges",
    value: "бодлогууд",
  },
  {
    id: v4(),
    key: "scoreboard",
    value: "онооны самбар",
  },
  {
    id: v4(),
    key: "statistics",
    value: "статистик",
  },
];

export const competitionList: ICompetition[] = Array.from(
  { length: 200 },
  () => ({
    id: v4(),
    name: faker.name.findName(),
    image: faker.image.imageUrl(),
    thumbnailImage: faker.image.imageUrl(),
    slug: faker.lorem.slug(),
    tags: [],
    state:
      competitionStateList[
        Math.floor(Math.random() * competitionStateList.length)
      ],
    authors: [],
    startDate: faker.date.future(),
    endDate: faker.date.future(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
  })
);

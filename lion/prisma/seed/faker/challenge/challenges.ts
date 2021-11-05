import { PrismaClient } from '@prisma/client';
var faker = require('faker');

const prisma = new PrismaClient();

export const challengesData = async (CHALLENGE_SIZE: number = 10) => {
  const res: any[] = [];
  const CATEGORIES = await prisma.challengeCategory.findMany({});
  const STATES = await prisma.challengeState.findMany({});

  for (let i = 0; i < CHALLENGE_SIZE; i++) {
    res.push({
      name: `Fake Challenge ${faker.name.findName()}`,
      challengeCategoryId: faker.random.arrayElement(CATEGORIES).id,
      challengeStateId: faker.random.arrayElement(STATES).id,
      description: faker.lorem.sentences(),
      value: faker.datatype.number(),
    });
  }

  return res;
};

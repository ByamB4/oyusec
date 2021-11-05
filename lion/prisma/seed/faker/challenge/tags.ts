import { PrismaClient } from '@prisma/client';
var faker = require('faker');

const prisma = new PrismaClient();

export const challengeTags = async (SIZE: number = 10) => {
  const res: any[] = [];
  const CHALLENGES = await prisma.challenge.findMany({});

  for (let i = 0; i < CHALLENGES.length; i++) {
    for (let j = 0; j < SIZE; j++) {
      res.push({
        challengeId: CHALLENGES[i].id,
        label: faker.internet.avatar(),
      });
    }
  }

  return res;
};

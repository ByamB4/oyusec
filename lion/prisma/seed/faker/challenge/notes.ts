import { PrismaClient } from '@prisma/client';
var faker = require('faker');

const prisma = new PrismaClient();

export const challengesNotes = async (NOTES_SIZE: number = 10) => {
  const res: any[] = [];
  const CHALLENGES = await prisma.challenge.findMany({});

  for (let i = 0; i < CHALLENGES.length; i++) {
    for (let j = 0; j < NOTES_SIZE; j++) {
      res.push({
        challengeId: CHALLENGES[i].id,
        label: faker.internet.avatar(),
      });
    }
  }

  return res;
};

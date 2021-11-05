import {
  challengeCategories,
  challengeStates,
  challengesData,
  challengesNotes,
  challengeTags,
} from '../faker/challenge';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const DEBUG_GUTTER = '    ';

export const initialize = async () => {
  console.log('============== INITIALIZING FAKE DATA ==============');
  await challenges();
};

const challenges = async () => {
  console.log(`[*] Challenges`);
  for (const data of challengeCategories) {
    await prisma.challengeCategory.create({ data });
  }
  console.log(`${DEBUG_GUTTER}[+] Categories`);

  for (const data of challengeStates) {
    await prisma.challengeState.create({ data });
  }
  console.log(`${DEBUG_GUTTER}[+] States`);

  for (const data of await challengesData()) {
    await prisma.challenge.create({ data });
  }
  console.log(`${DEBUG_GUTTER}[+] Data`);

  for (const data of await challengesNotes()) {
    await prisma.challengeNote.create({ data });
  }
  console.log(`${DEBUG_GUTTER}[+] Notes`);
  for (const data of await challengeTags()) {
    await prisma.challengeTag.create({ data });
  }
  console.log(`${DEBUG_GUTTER}[+] Tags`);
};

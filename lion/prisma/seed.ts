import { PrismaClient } from '@prisma/client';
import { initializeFake } from './seed/faker';

const prisma = new PrismaClient();

const FAKER: boolean = true;

async function main() {
  if (FAKER) {
    await initializeFake();
  }
  console.log('[+] Done');
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(0);
  })
  .finally(() => {
    prisma.$disconnect();
  });

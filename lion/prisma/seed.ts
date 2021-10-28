import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
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

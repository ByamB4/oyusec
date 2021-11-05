/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `dob` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `education` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `facebookAccessToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `facebookRefreshToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `googleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `industryId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isInvestor` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isMentor` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isModerator` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isUser` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `remember_token` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_type_value` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
DROP COLUMN "age",
DROP COLUMN "description",
DROP COLUMN "dob",
DROP COLUMN "education",
DROP COLUMN "facebookAccessToken",
DROP COLUMN "facebookRefreshToken",
DROP COLUMN "gender",
DROP COLUMN "googleId",
DROP COLUMN "industryId",
DROP COLUMN "isAdmin",
DROP COLUMN "isInvestor",
DROP COLUMN "isMentor",
DROP COLUMN "isModerator",
DROP COLUMN "isUser",
DROP COLUMN "password",
DROP COLUMN "phoneNumber",
DROP COLUMN "remember_token",
DROP COLUMN "title",
DROP COLUMN "user_type",
DROP COLUMN "user_type_value",
DROP COLUMN "website";

-- CreateTable
CREATE TABLE "UserChallenge" (
    "id" TEXT NOT NULL,
    "challengeId" TEXT,
    "userId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Challenge" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" INTEGER NOT NULL,
    "challengeStateId" TEXT NOT NULL,
    "challengeCategoryId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeTag" (
    "id" TEXT NOT NULL,
    "label" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "challengeId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeNote" (
    "id" TEXT NOT NULL,
    "label" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "challengeId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeState" (
    "id" TEXT NOT NULL,
    "key" VARCHAR(255) NOT NULL,
    "value" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeCategory" (
    "id" TEXT NOT NULL,
    "key" VARCHAR(255) NOT NULL,
    "value" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Challenge.id_unique" ON "Challenge"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ChallengeTag.id_unique" ON "ChallengeTag"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ChallengeNote.id_unique" ON "ChallengeNote"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ChallengeState.id_unique" ON "ChallengeState"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ChallengeCategory.id_unique" ON "ChallengeCategory"("id");

-- AddForeignKey
ALTER TABLE "UserChallenge" ADD FOREIGN KEY ("challengeId") REFERENCES "Challenge"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChallenge" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Challenge" ADD FOREIGN KEY ("challengeStateId") REFERENCES "ChallengeState"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Challenge" ADD FOREIGN KEY ("challengeCategoryId") REFERENCES "ChallengeCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeTag" ADD FOREIGN KEY ("challengeId") REFERENCES "Challenge"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeNote" ADD FOREIGN KEY ("challengeId") REFERENCES "Challenge"("id") ON DELETE SET NULL ON UPDATE CASCADE;

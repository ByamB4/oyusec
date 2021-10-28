-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" VARCHAR(255) DEFAULT E'',
    "lastName" VARCHAR(255) DEFAULT E'',
    "dob" DATE,
    "gender" VARCHAR(255),
    "education" VARCHAR(255),
    "website" VARCHAR(255) DEFAULT E'',
    "address" VARCHAR(255) DEFAULT E'',
    "industryId" TEXT,
    "age" VARCHAR(255),
    "avatar" VARCHAR(255) DEFAULT E'default.png',
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255),
    "remember_token" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phoneNumber" VARCHAR(50),
    "user_type" VARCHAR(100),
    "user_type_value" VARCHAR(100),
    "description" VARCHAR(1000) NOT NULL DEFAULT E'',
    "isMentor" BOOLEAN NOT NULL DEFAULT false,
    "isInvestor" BOOLEAN NOT NULL DEFAULT false,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isModerator" BOOLEAN NOT NULL DEFAULT false,
    "isUser" BOOLEAN NOT NULL DEFAULT true,
    "title" VARCHAR(255) DEFAULT E'',
    "facebookAccessToken" VARCHAR(255),
    "facebookRefreshToken" VARCHAR(255),
    "googleId" VARCHAR(255),
    "googleAccessToken" VARCHAR(255),
    "googleRefreshToken" VARCHAR(255),
    "verified" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.id_unique" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

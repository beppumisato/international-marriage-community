-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "headerImageUrl" TEXT NOT NULL DEFAULT '',
    "iconImageUrl" TEXT NOT NULL DEFAULT '',
    "nickname" TEXT NOT NULL,
    "myNationality" TEXT NOT NULL DEFAULT '',
    "partnerNationality" TEXT NOT NULL DEFAULT '',
    "introduction" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

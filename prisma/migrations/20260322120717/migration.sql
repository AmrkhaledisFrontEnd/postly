/*
  Warnings:

  - You are about to drop the column `receiverId` on the `Pending` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `Pending` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sentRequestsId,receivedRequestsId]` on the table `Pending` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `receivedRequestsId` to the `Pending` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sentRequestsId` to the `Pending` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pending" DROP CONSTRAINT "Pending_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Pending" DROP CONSTRAINT "Pending_senderId_fkey";

-- DropIndex
DROP INDEX "Pending_senderId_receiverId_key";

-- AlterTable
ALTER TABLE "Pending" DROP COLUMN "receiverId",
DROP COLUMN "senderId",
ADD COLUMN     "receivedRequestsId" TEXT NOT NULL,
ADD COLUMN     "sentRequestsId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pending_sentRequestsId_receivedRequestsId_key" ON "Pending"("sentRequestsId", "receivedRequestsId");

-- AddForeignKey
ALTER TABLE "Pending" ADD CONSTRAINT "Pending_sentRequestsId_fkey" FOREIGN KEY ("sentRequestsId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pending" ADD CONSTRAINT "Pending_receivedRequestsId_fkey" FOREIGN KEY ("receivedRequestsId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

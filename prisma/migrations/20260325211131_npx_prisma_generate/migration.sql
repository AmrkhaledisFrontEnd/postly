/*
  Warnings:

  - A unique constraint covering the columns `[postId,userId]` on the table `SavePost` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SavePost_postId_userId_key" ON "SavePost"("postId", "userId");

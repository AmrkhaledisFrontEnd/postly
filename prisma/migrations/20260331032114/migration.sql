-- DropForeignKey
ALTER TABLE "SavePost" DROP CONSTRAINT "SavePost_postId_fkey";

-- DropForeignKey
ALTER TABLE "SavePost" DROP CONSTRAINT "SavePost_userId_fkey";

-- AddForeignKey
ALTER TABLE "SavePost" ADD CONSTRAINT "SavePost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavePost" ADD CONSTRAINT "SavePost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

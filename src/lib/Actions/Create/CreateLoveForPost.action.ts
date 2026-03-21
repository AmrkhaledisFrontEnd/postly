"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
// ===============================================
export const CreateLoveAction = async (
  userId: string,
  postId: string,
): Promise<{ success: boolean; message?: string }> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: { id: true },
    });
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    if (!user || !post) return { success: false, message: "" };
    const isExistingLove = await prisma.love.findUnique({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });
    if (isExistingLove) {
      await prisma.love.delete({
        where: {
          userId_postId: {
            userId,
            postId,
          },
        },
      });
    } else if (!isExistingLove) {
      await prisma.love.create({
        data: {
          userId,
          postId,
        },
      });
    }
    revalidatePath("/feed");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, message: "This post cannot be liked" };
  }
};

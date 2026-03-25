"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
// =============================================================
export const SavePostAction = async (
  postId: string,
  userId: string,
): Promise<{ success: boolean; message: string }> => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      select: { id: true },
    });
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: { id: true },
    });
    if (!user || !post)
      return {
        success: false,
        message: "The post is not found or you need to log in",
      };
    const isExistingSave = await prisma.savePost.findUnique({
      where: {
        postId_userId: {
          postId,
          userId,
        },
      },
    });
    if (isExistingSave) {
      await prisma.savePost.delete({
        where: {
          id: isExistingSave.id,
        },
      });
      revalidatePath("/feed");
      return {
        success: true,
        message: "The post has been removed from favorites",
      };
    }
    await prisma.savePost.create({
      data: {
        postId,
        userId,
      },
    });
    revalidatePath("/feed");
    return { success: true, message: "The post has been added to favorites" };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "This post could not be saved. Please try again",
    };
  }
};

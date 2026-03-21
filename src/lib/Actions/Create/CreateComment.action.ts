"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
// ==========================================================
export const CreateCommentAction = async (
  userId: string,
  postId: string,
  commentContent: string,
): Promise<{ success: boolean; message: string }> => {
  try {
    if (!commentContent.trim())
      return { success: false, message: "You cannot add an empty comment" };
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
    if (!post || !user)
      return { success: false, message: "You cannot add a comment" };
    await prisma.comment.create({
      data: {
        userId,
        postId,
        content: commentContent,
      },
    });
    revalidatePath("/feed");
    return { success: true, message: "Your comment has been sent" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Unable to add a comment" };
  }
};

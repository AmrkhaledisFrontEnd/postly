"use server";
import { prisma } from "@/lib/prisma";
// ============================================
export const DeleteStoryAction = async (
  storyId: string,
): Promise<{ success: boolean; message: string }> => {
  try {
    const story = await prisma.story.findUnique({
        where:{
            id:storyId
        }
    })
    if(!story) return {success:false,message:"The story is not available"}
    await prisma.story.delete({
      where: {
        id: storyId,
      },
    });
    return {success:true,message:"Your story has been deleted"}
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred the story could not be deleted",
    };
  }
};

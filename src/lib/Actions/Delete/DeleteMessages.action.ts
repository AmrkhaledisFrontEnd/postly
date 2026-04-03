"use server";
import { prisma } from "@/lib/prisma";
// ==================================
export const DeleteMessagesAction = async (
  senderId: string,
  receiverId: string,
): Promise<{ success: boolean; message: string }> => {
  try {
    await prisma.message.deleteMany({
      where: {
        OR: [
          { senderId: senderId, receiverId: receiverId },
          { senderId: receiverId, receiverId: senderId },
        ],
      },
    });
    return {success:true,message:"The chat has been deleted"}
  } catch (error) {
    console.log(error);
    return { success: false, message: "The chat cannot be deleted" };
  }
};

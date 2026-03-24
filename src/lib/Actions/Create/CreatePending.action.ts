"use server";
import { prisma } from "@/lib/prisma";
// =============================================================
export const CreatePendingAction = async (
  sentRequestsId: string,
  receivedRequestsId: string,
): Promise<{ success: boolean; message: string }> => {
  try {
    const userSentRequests = await prisma.user.findUnique({
      where: {
        id: sentRequestsId,
      },
      select: { id: true },
    });
    const userReceivedRequests = await prisma.user.findUnique({
      where: {
        id: receivedRequestsId,
      },
      select: { id: true },
    });
    if (!userReceivedRequests || !userSentRequests)
      return {
        success: false,
        message: "An unexpected error occurred. Please try again",
      };
    if (sentRequestsId === receivedRequestsId)
      return {
        success: false,
        message: "You cannot send a follow request to yourself",
      };
    const isExistingPending = await prisma.pending.findUnique({
      where: {
        sentRequestsId_receivedRequestsId: {
          sentRequestsId,
          receivedRequestsId,
        },
      },
    });
    if (isExistingPending) {
      await prisma.pending.delete({
        where: {
          id: isExistingPending.id,
        },
      });
      return {
        success: true,
        message: "The follow up request has been cancelled",
      };
    } else if (!isExistingPending) {
      await prisma.pending.create({
        data: {
          sentRequestsId,
          receivedRequestsId,
        },
      });
    }
    return { success: true, message: "A follow up request has been sent" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "An error occurred. Please try again" };
  }
};

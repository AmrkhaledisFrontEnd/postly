"use server";
import { prisma } from "@/lib/prisma";
// =====================================================
export const FollowAction = async (
  followerId: string,
  followingId: string,
): Promise<{ success: boolean; message: string }> => {
  try {
    if (followerId === followingId) {
      return { success: false, message: "You can't follow yourself" };
    }
    const follower = await prisma.user.findUnique({
      where: {
        id: followerId,
      },
    });
    const following = await prisma.user.findUnique({
      where: {
        id: followingId,
      },
    });
    if (!follower || !following)
      return {
        success: false,
        message: "User not found or invalid follower/following IDs",
      };
    const isExistingFollowing = await prisma.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId,
          followingId,
        },
      },
    });
    if (isExistingFollowing) {
      await prisma.follow.delete({
        where: {
          id: isExistingFollowing.id,
        },
      });
      return {
        success: true,
        message: `you have unfollowed ${following.name}`,
      };
    }
    const sentRequestsId = followerId;
    const receivedRequestsId = followingId;
    await prisma.$transaction([
      prisma.follow.create({
        data: {
          followerId,
          followingId,
        },
      }),
      prisma.pending.delete({
        where: {
          sentRequestsId_receivedRequestsId: {
            sentRequestsId,
            receivedRequestsId,
          },
        },
      }),
    ]);
    return {
      success: true,
      message: `${follower.name} has become one of your followers`,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong, please try again later",
    };
  }
};

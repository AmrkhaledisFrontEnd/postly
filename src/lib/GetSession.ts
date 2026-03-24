"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

// =====================================================================
export const GetSession = async () => {
  const session = await auth();

  if (!session?.user) return null;
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      posts: {
        include: {
          user: true,
        },
      },
      receiverRequests: {
        include: {
          sentRequests: true,
        },
      },
      followers: {
        include: {
          follower: true,
        },
      },
      followings: {
        include: {
          following: true,
        },
      },
    },
  });

  return user || null;
};

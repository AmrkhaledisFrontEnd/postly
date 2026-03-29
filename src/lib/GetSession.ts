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
          follower: {
            include: {
              stories: {
                include: {
                  user: true,
                },
              },
            },
          },
        },
      },
      followings: {
        include: {
          following: {
            include: {
              stories: {
                include: {
                  user: true,
                },
              },
            },
          },
        },
      },
      savePosts: {
        include: {
          post: {
            include: {
              user: true,
            },
          },
          user: true,
        },
      },
      receivedMessages: {
        include: {
          sender: true,
        },
        orderBy: { createdAt: "desc" },
        take: 3,
      },
      stories: {
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return user || null;
};

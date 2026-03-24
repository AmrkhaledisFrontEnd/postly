import { Cache } from "../Cache/Cache";
import { prisma } from "@/lib/prisma";
// ===============================================================
export const getUsers = Cache(
  async () => {
    const users = await prisma.user.findMany({
      take: 9,
      include: {
        followers: true,
        followings: true,
      },
    });
    return users;
  },
  ["users"],
  { revalidate: 3600 },
);

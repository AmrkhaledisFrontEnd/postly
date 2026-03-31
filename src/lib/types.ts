import { Prisma } from "@prisma/client";
// ============================================================================
export type StoryType = Prisma.StoryGetPayload<{
  include: {
    user: true;
  };
}>;
export type UserDbType = Prisma.UserGetPayload<{
  include: {
    posts: {
      include: {
        user: true;
      };
    };
  };
}>;
export type PostDbCacheType = Prisma.PostGetPayload<{
  include: {
    user: true;
    loves: true;
    comments: {
      include: {
        user: true;
      };
    };
    savePosts: {
      include: {
        user: true;
      };
    };
  };
}>;
export type UserWithRelations = Prisma.UserGetPayload<{
  include: {
    receiverRequests: {
      include: {
        sentRequests: true;
      };
    };
    followers: {
      include: {
        follower: true;
      };
    };
    followings: {
      include: {
        following: true;
      };
    };
    savePosts: {
      include: {
        post: {
          include: {
            user: true;
          };
        };
        user: true;
      };
    };
    sentMessages: {
      include: {
        receiver: true;
      };
    };
  };
}>;

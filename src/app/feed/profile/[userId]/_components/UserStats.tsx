import { Prisma } from "@prisma/client";
// =======================================================
type User = Prisma.UserGetPayload<{
  include: {
    posts: true;
    followers: true;
    followings: true;
  };
}>;
function UserStats({ user }: { user: User }) {
  const userStats = [
    { id: "posts", count: user.posts.length, label: "Posts" },
    { id: "followers", count: user.followers.length, label: "Followers" },
    { id: "following", count: user.followings.length, label: "Following" },
  ];
  return (
    <div className="flex items-center sm:gap-10 gap-5 pt-1 flex-wrap">
      {userStats.map((state) => (
        <p
          key={state.id}
          className="flex items-center sm:gap-2 gap-1 font-semibold text-gray-500 sm:text-sm text-xs"
        >
          <span className="font-sembold sm:text-[16px] shadow rounded-full bg-indigo-500 sm:size-6 size-4 flex items-center justify-center text-white">
            {state.count}
          </span>
          {state.label}
        </p>
      ))}
    </div>
  );
}

export default UserStats;

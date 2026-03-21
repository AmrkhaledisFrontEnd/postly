import { Prisma } from "@prisma/client";
// =======================================================
type User = Prisma.UserGetPayload<{
  include: {
    posts: true;
  };
}>;
function UserStats({ user }: { user: User }) {
  const userStats = [
    { id: "posts", count: user.posts.length, label: "Posts" },
    { id: "followers", count: 3, label: "Followers" },
    { id: "following", count: 1, label: "Following" },
  ];
  return (
    <div className="flex items-center gap-10 pt-1">
      {userStats.map((state) => (
        <p
          key={state.id}
          className="flex items-center gap-2 font-semibold text-gray-500 text-sm"
        >
          <span className="font-sembold text-[16px] shadow rounded-full bg-indigo-500 size-6 flex items-center justify-center text-white">
            {state.count}
          </span>
          {state.label}
        </p>
      ))}
    </div>
  );
}

export default UserStats;

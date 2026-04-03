import PageHeader from "@/components/PageHeader/PageHeader";
import { GetSession } from "@/lib/GetSession";
import { User } from "@prisma/client";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import UserActions from "./_components/UserActions";
// ========================================================================
export const metadata: Metadata = {
  title: "Postly | Messages",
  description: "Talk to your friends and family",
};
async function page() {
  const userSession = await GetSession();
  if (!userSession) return redirect("/login");
  const followingUsers = userSession.followings.map((f) => f.following);
  const messageSenders = userSession.receivedMessages.map(
    (message) => message.sender,
  );
  const messageReceivers = userSession.sentMessages.map(
    (message) => message.receiver,
  );
  const relatedUsers = [
    ...followingUsers,
    ...messageSenders,
    ...messageReceivers,
  ];
  const uniqueUsersMap = new Map();
  for (const user of relatedUsers) {
    if (!uniqueUsersMap.has(user.id)) {
      uniqueUsersMap.set(user.id, user);
    }
  }
  const uniqueUsers = [...uniqueUsersMap.values()];
  return (
    <main className="flex-1 min-h-screen bg-indigo-50  sm:p-5 p-3 space-y-10">
      <PageHeader title="Messages" subtitle="Talk to your friends and family" />
      <ul className="grid lg:grid-cols-2 gap-2">
        {uniqueUsers.length > 0 &&
          uniqueUsers.map((user: User) => (
            <li
              key={user.id}
              className="shadow bg-white sm:p-5 p-3 rounded-md flex flex-col justify-between gap-5"
            >
              <div className="flex gap-2 items-center">
                <Image
                  src={user.image ? user.image : "/user.jpg"}
                  alt="user image"
                  width={50}
                  height={50}
                  className="object-cover rounded-full sm:size-12 size-10 shrink-0"
                />
                <div>
                  <h3 className="font-bold sm:text-[18px] text-slate-700 capitalize">
                    {user.name}
                  </h3>
                  <h4 className="text-gray-400 font-normal text-xs">
                    {user.username}
                  </h4>
                  <p className="sm:line-clamp-2 line-clamp-1 sm:text-sm text-gray-500 text-xs">
                    {user.bio}
                  </p>
                </div>
              </div>
              <UserActions user={user} userSession={userSession} />
            </li>
          ))}
      </ul>
    </main>
  );
}

export default page;

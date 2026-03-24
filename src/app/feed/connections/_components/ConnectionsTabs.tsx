"use client";
import { HiUsers } from "react-icons/hi2";
import { useState } from "react";
import UserCard from "./UserCard";
import { UserWithRelations } from "@/lib/types";
// ===================================================================
function ConnectionsTabs({
  userSession,
}: {
  userSession: UserWithRelations;
}) {
  const [currentTap, setCurrentTap] = useState("followers");
  const taps = [
    { value: "followers", label: "Followers" },
    { value: "following", label: "Followings" },
    { value: "pending", label: "Pending" },
  ];
  const followers = userSession.followers.map((f) => f.follower);
  const following = userSession.followings.map((f) => f.following);
  const pending = userSession.receiverRequests.map((u) => u.sentRequests);
  const usersMap: any = {
    followers,
    following,
    pending,
  };
  const users: UserWithRelations[] | [] = usersMap[currentTap] || [];
  return (
    <>
      <div className="bg-white py-3 px-6 rounded-md shadow w-fit flex items-center gap-10">
        {taps.map((tap) => (
          <button
            onClick={() => setCurrentTap(tap.value)}
            key={tap.value}
            className={`flex items-center gap-2 hover:text-slate-900 transition-css font-bold text-sm
                 ${currentTap === tap.value ? "text-slate-900 cursor-default" : "cursor-pointer text-slate-500"} 
                `}
          >
            <HiUsers size={20} />
            {tap.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 w-full">
        {users.map(
          (user: UserWithRelations) =>
            user.id !== userSession.id && (
              <UserCard
                key={user.id}
                user={user}
                tapText={currentTap}
                userSession={userSession}
              />
            ),
        )}
      </div>
    </>
  );
}

export default ConnectionsTabs;

"use client";

import { CreatePendingAction } from "@/lib/Actions/Create/CreatePending.action";
import { FollowAction } from "@/lib/Actions/Create/Follow.action";
import { UserWithRelations } from "@/lib/types";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiUserPlus } from "react-icons/fi";
// ================================================================

function ButtonFolllow({
  user,
  userSession,
}: {
  user: UserWithRelations;
  userSession: User;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const isExistingPending = user.receiverRequests.find(
    (u) => u.sentRequestsId === userSession.id,
  );
  const isExistingFollow = user.followers.find(
    (f) => f.followerId === userSession.id,
  );
  const handleCreatePending = async () => {
    setLoading(true);
    const action = isExistingFollow
      ? FollowAction(userSession.id, user.id)
      : CreatePendingAction(userSession.id, user.id);
    const result = await action;
    setLoading(false);
    if (!result.success)
      return toast.error(result.message, { className: "toast-font" });
    toast.success(result.message, { className: "toast-font" });
    router.refresh();
  };

  return (
    <button
      onClick={handleCreatePending}
      disabled={loading}
      className="text-white disabled:from-gray-300 disabled:cursor-default disabled:scale-100 disabled:to-gray-300 disabled:text-gray-500 w-fit flex items-center tracking-[0.3px] gap-2 hover:scale-102 transition-css active:scale-95 justify-center bg-linear-to-r from-indigo-500 to-purple-500 py-2 px-10 rounded-md cursor-pointer"
    >
      {isExistingFollow ? (
        "Unfollow"
      ) : isExistingPending ? (
        "Requested"
      ) : (
        <>
          <FiUserPlus /> Follow
        </>
      )}
    </button>
  );
}

export default ButtonFolllow;

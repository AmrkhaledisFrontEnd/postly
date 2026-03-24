"use client";
import { FollowAction } from "@/lib/Actions/Create/Follow.action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
// ========================================================================
function ButtonAcceptFollow({
  followerId,
  followingId,
}: {
  followerId: string;
  followingId: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleCreateFollow = async () => {
    setLoading(true);
    const result = await FollowAction(followerId, followingId);
    setLoading(false);
    if (!result.success)
      return toast.error(result.message, { className: "toast-font" });
    toast.success(result.message, { className: "toast-font" });
    router.refresh();
  };
  return (
    <button
      onClick={handleCreateFollow}
      disabled={loading}
      className="text-slate-800 h-8 flex items-center justify-center hover:scale-103 transition-css cursor-pointer bg-gray-200 py-2 px-4 rounded font-medium text-sm tracking-[0.4px] flex-1"
    >
      Accept
    </button>
  );
}

export default ButtonAcceptFollow;

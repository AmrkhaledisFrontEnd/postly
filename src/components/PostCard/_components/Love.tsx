"use client";
import { LoveAction } from "@/lib/Actions/Create/LoveForPost.action";
import { PostDbCacheType } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
// =====================================================================
function Love({ userId, post }: { userId: string; post: PostDbCacheType }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const isExistingLove = post.loves.find((l) => l.userId === userId);
  const handleLove = async () => {
    setLoading(true);
    const result = await LoveAction(userId, post.id);
    setLoading(false);
    if (!result.success && result.message)
      return toast.error(result.message, { className: "toast-font" });
    router.refresh();
  };
  return (
    <button
      onClick={handleLove}
      disabled={loading}
      className="flex button items-center gap-1 cursor-pointer text-[17px] hover:scale-110 transition-css active:scale-95"
    >
      {loading ? (
        <div className="size-4 rounded-full border-2 border-t-transparent border-b-transparent border-red-500 animate-spin"/>
      ) : isExistingLove ? (
        <FaHeart className="fill-red-500" />
      ) : (
        <FaRegHeart />
      )}
      <span className="text-sm font-semibold">{post.loves.length}</span>
    </button>
  );
}

export default Love;

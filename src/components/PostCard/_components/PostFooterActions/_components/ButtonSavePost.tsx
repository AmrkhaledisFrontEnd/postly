"use client";
import { SavePostAction } from "@/lib/Actions/Create/SavePost.action";
import { PostDbCacheType } from "@/lib/types";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
// ==================================================================
function ButtonSavePost({
  post,
  userSession,
}: {
  post: PostDbCacheType;
  userSession: User;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSavePost = async () => {
    setLoading(true);
    const result = await SavePostAction(post.id, userSession.id);
    setLoading(false);
    if (!result.success)
      return toast.error(result.message, { className: "toast-font" });
    toast.success(result.message, { className: "toast-font" });
    router.refresh();
  };
  const isExistingSavePost = post.savePosts.find(
    (s) => s.userId === userSession.id,
  );
  return (
    <button
      onClick={handleSavePost}
      disabled={loading}
      className="flex items-center  gap-1 cursor-pointer text-[17px] hover:scale-110 transition-css active:scale-95"
    >
      {loading ? (
        <div className="size-4 rounded-full border-2 border-t-transparent border-b-transparent border-green-500 animate-spin"/>
      ) : isExistingSavePost ? (
        <FaBookmark className="text-green-500" />
      ) : (
        <FaRegBookmark />
      )}
      <span className="text-sm font-semibold ">{post.savePosts.length}</span>
    </button>
  );
}

export default ButtonSavePost;

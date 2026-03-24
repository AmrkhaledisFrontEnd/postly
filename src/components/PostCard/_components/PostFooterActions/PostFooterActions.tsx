"use client";
import { FaRegComment } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import Love from "../Love";
import { User } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { PostDbCacheType } from "@/lib/types";
import Link from "next/link";
import ButtonDeletePost from "./_components/ButtonDeletePost";
// ===================================================================
function PostFooterActions({
  post,
  userSession,
  setShowComments,
  showComments,
}: {
  post: PostDbCacheType;
  userSession: User;
  setShowComments: Dispatch<SetStateAction<boolean>>;
  showComments: boolean;
}) {
  return (
    <div className="w-full flex items-center justify-between pt-3 border-t border-t-gray-200">
      <div className="flex items-center gap-5 ">
        <Love userId={userSession.id} post={post} />
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex button items-center gap-1 cursor-pointer text-[17px] hover:scale-110 transition-css active:scale-95"
        >
          <FaRegComment />
          <span className="text-sm font-semibold">{post.comments.length}</span>
        </button>
        <button className="flex items-center gap-1 cursor-pointer text-[17px] hover:scale-110 transition-css active:scale-95">
          <LuShare2 />
          <span className="text-sm font-semibold">5</span>
        </button>
      </div>
      {post.userId === userSession.id && (
        <div className="flex items-center gap-1.5">
          <Link
            href={`/feed/post/edit/${post.id}`}
            className="text-[19px] hover:scale-105 text-slate-600 hover:text-black transition-css"
          >
            <FaRegEdit />
          </Link>
          <ButtonDeletePost post={post} userSessionId={userSession.id} />
        </div>
      )}
    </div>
  );
}

export default PostFooterActions;

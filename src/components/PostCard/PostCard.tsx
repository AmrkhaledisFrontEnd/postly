"use client";
import { FaRegComment } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";
import { PostDbCacheType } from "@/lib/types";
import Love from "./_components/Love";
import { User } from "@prisma/client";
import PublisherDetails from "./_components/PublisherDetails";
import PostContent from "./_components/PostContent";
import CreateComment from "./_components/CreateComment";
import { useEffect, useRef, useState } from "react";
import Comments from "./_components/Comments";
//=============================================================================
function PostCard({
  post,
  userSession,
}: {
  post: PostDbCacheType;
  userSession: User;
}) {
  const [showComments, setShowComments] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [showComments]);
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (!e.target.closest(".button, .boxComments"))
          setShowComments(false);
      }
    };
    document.addEventListener("click", handle);
    return () => {
      document.removeEventListener("click", handle);
    };
  }, []);
  return (
    <li className="bg-white shadow rounded-xl p-5 space-y-3 list-none relative">
      <p className="absolute uppercase text-shadow-2xs font-semibold flex items-center gap-1 right-4 top-2 text-slate-500 text-xs">
        <span className="text-white text-sm size-5 flex items-center justify-center rounded-full shadow bg-indigo-500">
          {post.comments.length}
        </span>{" "}
        comment
      </p>
      <PublisherDetails post={post} />
      <PostContent post={post} />
      <div className="flex items-center gap-5 pt-3 border-t border-t-gray-200">
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
      {showComments && (
        <div className="boxComments">
          <CreateComment
            userSession={userSession}
            inputRef={inputRef}
            postId={post.id}
          />
          {post.comments.length > 0 && showComments && (
            <Comments post={post}  />
          )}
        </div>
      )}
    </li>
  );
}

export default PostCard;

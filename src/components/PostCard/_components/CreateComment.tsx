"use client";
import { CreateCommentAction } from "@/lib/Actions/Create/CreateComment.action";
import { User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RefObject, useState } from "react";
import toast from "react-hot-toast";
import { IoSend } from "react-icons/io5";
// =======================================================================
function CreateComment({
  userSession,
  inputRef,
  postId,
}: {
  userSession: User;
  inputRef: RefObject<HTMLInputElement | null>;
  postId: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const handleCreateComment = async () => {
    if (!commentContent.trim())
      return toast.error("You cannot add an empty comment", {
        className: "toast-font",
      });
    setLoading(true);
    const result = await CreateCommentAction(
      userSession.id,
      postId,
      commentContent,
    );
    setLoading(false);
    if (!result.success)
      return toast.error(result.message, { className: "toast-font" });
    setCommentContent("");
    toast.success(result.message, { className: "toast-font" });
    router.refresh();
  };
  return (
    <div className="flex items-center gap-2 w-full mt-5">
      <Image
        src={userSession.image ? userSession.image : "/user.jpg"}
        alt="your image"
        width={50}
        height={50}
        className="rounded-full object-cover sm:size-10 size-8 shrink-0"
      />
      <div className="flex items-center gap-1 border-b border-b-gray-500 w-full  focus-within:border-b-indigo-500">
        <input
        dir="auto"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleCreateComment();
          }}
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          disabled={loading}
          ref={inputRef}
          type="text"
          className=" outline-none py-1 flex-1 sm:text-[15px] text-sm"
          placeholder="Add Comment..."
        />
        <button
          onClick={handleCreateComment}
          disabled={loading}
          className="sm:text-xl cursor-pointer text-indigo-500 hover:translate-x-2 px-2 transition-css hover:scale-105"
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
}

export default CreateComment;

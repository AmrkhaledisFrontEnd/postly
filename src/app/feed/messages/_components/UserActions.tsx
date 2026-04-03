"use client";
import { DeleteMessagesAction } from "@/lib/Actions/Delete/DeleteMessages.action";
import { User } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  MdChatBubbleOutline,
  MdDeleteOutline,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
// =======================================
function UserActions({ user, userSession }: { user: User; userSession: User }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleDeleteMessages = async () => {
    setLoading(true);
    const result = await DeleteMessagesAction(userSession.id, user.id);
    setLoading(false);
    if (!result.success)
      return toast.error(result.message, { className: "toast-font" });
    router.refresh();
  };
  return (
    <div className="flex gap-3 text-gray-500 justify-end">
      <Link
        href={`/feed/messages/${user.id}`}
        className="sm:text-[18px] cursor-pointer hover:text-black transition-css active:scale-95 hover:scale-104 bg-gray-100 p-2 rounded-md"
      >
        <MdChatBubbleOutline />
      </Link>
      <Link
        href={`/feed/profile/${user.id}`}
        className="sm:text-[18px] cursor-pointer hover:text-black transition-css active:scale-95 hover:scale-104 bg-gray-100 p-2 rounded-md"
      >
        <MdOutlineRemoveRedEye />
      </Link>
      <button
        onClick={handleDeleteMessages}
        disabled={loading}
        className="sm:text-[18px] disabled:cursor-default disabled:bg-gray-200 disabled:text-gray-400 cursor-pointer hover:text-black transition-css active:scale-95 hover:scale-104 bg-gray-100 p-2 rounded-md"
      >
        <MdDeleteOutline />
      </button>
    </div>
  );
}

export default UserActions;

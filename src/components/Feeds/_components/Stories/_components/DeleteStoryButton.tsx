"use client";
import { DeleteStoryAction } from "@/lib/Actions/Delete/DeleteStory";
import { StoryType } from "@/lib/types";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
// ===================================================
function DeleteStoryButton({
  storyId,
  setViewStory
}: {
  storyId: string;
  setViewStory: Dispatch<SetStateAction<StoryType | null>>;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleDeleteStory = async () => {
    setLoading(true);
    const result = await DeleteStoryAction(storyId);
    setLoading(false);
    if (!result.success)
      return toast.error(result.message, { className: "toast-font" });
    setViewStory(null)
    router.refresh();
    toast.success(result.message, { className: "toast-font" });
  };
  return (
    <button
      onClick={handleDeleteStory}
      disabled={loading}
      className="absolute bottom-2 right-2 active:scale-90 hover:scale-105 transition-css sm:text-xl cursor-pointer bg-gray-200 text-gray-400 shadow p-2 rounded-full"
    >
      <MdDeleteOutline />
    </button>
  );
}

export default DeleteStoryButton;

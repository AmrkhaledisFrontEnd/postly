"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DeletePostAction } from "@/lib/Actions/Delete/DeletePost.action";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";
// ====================================================================
function ButtonDeletePost({
  post,
  userSessionId,
}: {
  post: Post;
  userSessionId: string;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleDeletePost = async () => {
    setLoading(true);
    const result = await DeletePostAction(post.id, userSessionId);
    setLoading(false);
    if (!result.success)
      return toast.error(result.message, { className: "toast-font" });
    toast.success(result.message, { className: "toast-font" });
    router.refresh();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="text-[21px] active:scale-90 hover:scale-105 cursor-pointer text-slate-600 hover:text-black transition-css">
          <MdOutlineDelete />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure the post will be deleted?
          </AlertDialogTitle>
          <AlertDialogDescription>
            If you click on delete, the post will be permanently deleted from
            our servers and you will not be able to retrieve it.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeletePost} disabled={loading}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ButtonDeletePost;

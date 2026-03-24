import { PostDbCacheType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// ===================================================
dayjs.extend(relativeTime);

function Comments({ post }: { post: PostDbCacheType }) {
  const comments = post.comments.sort((a, b) => {
    if (a.userId === post.userId) return -1;
    if (b.userId === post.userId) return 1;
    return 0;
  });
  return (
    <ul className="space-y-4 mt-8">
      {comments.map((comment) => (
        <li key={comment.id} className="flex gap-2">
          <Image
            src={comment.user.image ? comment.user.image : "/user.jpg"}
            alt="user image"
            width={60}
            height={60}
            className="rounded-full ssm:size-10 size-8 shrink-0 object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <Link
                href={`/feed/profile/${comment.userId}`}
                className="font-semibold sm:text-[18px] capitalize hover:underline"
              >
                {comment.user.name}
              </Link>
              {comment.userId === post.userId && (
                <span className="sm:text-xs text-[11px] px-1.5 text-white bg-gray-400 sm:rounded-md rounded font-bold">
                  Author
                </span>
              )}
              <h3 className="font-normal sm:text-xs text-[11px] text-gray-500">
                {dayjs(comment.createdAt).fromNow()}
              </h3>
            </div>
            <p className="sm:text-[15px] text-sm">{comment.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Comments;

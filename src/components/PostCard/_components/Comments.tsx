import { PostDbCacheType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// ===================================================
dayjs.extend(relativeTime);

function Comments({ post }: { post: PostDbCacheType }) {
  return (
    <ul className="space-y-3 mt-8">
      {post.comments.map((comment) => (
        <li key={comment.id} className="flex gap-2">
          <Image
            src={comment.user.image ? comment.user.image : "/user.jpg"}
            alt="user image"
            width={60}
            height={60}
            className="rounded-full size-10 object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <Link
                href={`/feed/profile/${comment.userId}`}
                className="font-semibold text-[18px] capitalize hover:underline"
              >
                {comment.user.name}
              </Link>
              {comment.userId === post.userId && <span className="text-xs px-1.5 text-white bg-gray-400 rounded-md font-bold">Author</span>}
              <h3 className="font-normal text-xs text-gray-500">
                {dayjs(comment.createdAt).fromNow()}
              </h3>
            </div>
            <p>{comment.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Comments;

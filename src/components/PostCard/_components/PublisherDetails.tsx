import { PostDbCacheType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// =========================================================================
dayjs.extend(relativeTime);
function PublisherDetails({ post }: { post: PostDbCacheType }) {
  return (
    <div className="flex gap-2">
      <Image
        src={post.user.image ? post.user.image : "/user.jpg"}
        alt="user image"
        width={50}
        height={50}
        className="rounded-full object-cover size-11"
      />
      <div>
        <Link
          href={`/feed/profile/${post.userId}`}
          className="text-[18px] font-semibold capitalize hover:underline"
        >
          {post.user.name}
        </Link>
        <h4 className="text-xs text-gray-400 font-normal">
          {dayjs(post.createdAt).fromNow()}
        </h4>
      </div>
    </div>
  );
}

export default PublisherDetails;

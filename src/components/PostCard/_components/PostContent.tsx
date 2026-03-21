import { PostDbCacheType } from "@/lib/types";
import PostMedia from "./PostMedia";
// ====================================================
function PostContent({post}:{post:PostDbCacheType}) {
  return (
    <div className="space-y-2">
      <p>{post.content}</p>
      <PostMedia post={post} />
    </div>
  );
}

export default PostContent;

"use client";
import PostCard from "../../../PostCard/PostCard";
import { PostDbCacheType, UserWithRelations } from "@/lib/types";
// ===============================================================================
function Posts({
  posts,
  userSession,
}: {
  posts: PostDbCacheType[];
  userSession: UserWithRelations;
}) {
  return (
    <ul className="w-full space-y-3">
      {posts.map((post: any) => (
        <PostCard key={post.id} post={post} userSession={userSession} />
      ))}
    </ul>
  );
}

export default Posts;

import { GetSession } from "@/lib/GetSession";
import PostCard from "../../../PostCard/PostCard";
import { PostDbCacheType } from "@/lib/types";
import { redirect } from "next/navigation";
// ===============================================================================
async function Posts({ posts }: { posts: PostDbCacheType[] }) {
  const userSession = await GetSession();
  if (!userSession) return redirect("/login");
  return (
    <ul className="w-full space-y-3">
      {posts.map((post: any) => (
        <PostCard key={post.id} post={post} userSession={userSession} />
      ))}
    </ul>
  );
}

export default Posts;

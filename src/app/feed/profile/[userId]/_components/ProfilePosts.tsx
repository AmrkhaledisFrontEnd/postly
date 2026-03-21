import PostCard from "@/components/PostCard/PostCard";
import { GetSession } from "@/lib/GetSession";
import { PostDbCacheType } from "@/lib/types";
import { redirect } from "next/navigation";
// ======================================================
async function ProfilePosts({ posts }: { posts: PostDbCacheType[] }) {
  const userSession = await GetSession();
  if (!userSession) return redirect("/login");
  return (
    <ul className="space-y-2">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} userSession={userSession} />
      ))}
    </ul>
  );
}

export default ProfilePosts;

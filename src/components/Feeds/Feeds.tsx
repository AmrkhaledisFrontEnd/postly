import Posts from "./_components/Posts/Posts";
import Stories from "./_components/Stories/Stories";
import { redirect } from "next/navigation";
import { GetUserWithRelations } from "@/lib/GetUserWithRelations";
import { getPosts } from "@/lib/DBCache/getPosts";
// ==========================================================================
async function Feeds() {
  const userSession = await GetUserWithRelations();
  if (!userSession) return redirect("/login");
  const followersStories = userSession.followers
    .map((f) => f.follower.stories)
    .flat();
  const followingsStories = userSession.followings
    .map((f) => f.following.stories)
    .flat();
  const stories = [
    ...userSession.stories,
    ...followersStories,
    ...followingsStories,
  ];
  const posts = await getPosts();
  return (
    <main className="flex-1 py-10 lg:px-0 px-3 space-y-10">
      <Stories stories={stories} userId={userSession.id} />
      <Posts posts={posts} />
    </main>
  );
}

export default Feeds;

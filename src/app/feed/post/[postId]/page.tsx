import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard/PostCard";
import { GetSession } from "@/lib/GetSession";
//==================================================================
async function PostShow({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params;
  if (!postId) return redirect("/feed");
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
    include: {
      user: true,
      loves: true,
      comments: {
        include: {
          user: true,
        },
      },
      savePosts: {
        include: {
          user: true,
        },
      },
    },
  });
  if (!post) return redirect("/feed");
  const userSession = await GetSession();
  if (!userSession) return redirect("/login");
  return (
    <main className="p-5 flex-1 space-y-10 flex items-center justify-center h-[90vh]">
      <div className="w-full">
        <PostCard post={post} userSession={userSession} />
      </div>
    </main>
  );
}

export default PostShow;

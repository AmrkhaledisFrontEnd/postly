import PostCard from "../../../PostCard/PostCard";
// ===============================================================================
function Posts({ posts }: { posts: any }) {
  return (
    <ul className="w-full space-y-3">
      {posts.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default Posts;

type Post = {
  id: number;
  title: string;
};

const getPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 8000));
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Something went wrong");
  const posts: Post[] = await response.json();
  return posts;
};

const PostsList = async () => {
  const posts = await getPosts();
  return (
    <>
      <h2 className="text-lg font-bold mt-4">記事一覧</h2>
      <ul>{posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </>
  );
};

export default PostsList;

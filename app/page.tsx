import BlogContent from "@/components/Content/Content";
import { fetchPosts } from "@/lib/contentful";

const HomePage = async () => {
  const posts = await fetchPosts();

  return <BlogContent posts={posts} />;
};

export default HomePage;

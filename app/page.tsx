import { client } from "@/lib/contentful";
import BlogContent from "@/components/Content/Content";

interface BlogPost {
  title: string;
  slug: string;
  content: string;
  imageUrl?: string;
}

async function fetchPosts(): Promise<BlogPost[]> {
  try {
    const res = await client.getEntries({ content_type: "blogPost" });
    return res.items.map((item: any) => ({
      title: item.fields.title,
      slug: item.fields.slug,
      content: item.fields.content || "",
      imageUrl: item.fields.featuredImage?.fields?.file?.url || "",
      excerpt: item.fields.excerpt || "",
      author: item.fields.author || "",
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

const HomePage = async () => {
  const posts = await fetchPosts(); // Server-side fetching
  console.log("check=>", posts);

  return <BlogContent posts={posts} />;
};

export default HomePage;

import { createClient } from "contentful";

export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  imageUrl?: string;
  excerpt?: string;
  author?: string;
  date?: string;
}
export interface AboutUsContent {
  title: string;
  content: string;
  imageUrl?: string;
}
export async function fetchPosts(): Promise<BlogPost[]> {
  try {
    const res = await client.getEntries({ content_type: "blogPost" });
    return res.items.map((item: any) => ({
      title: item.fields.title,
      slug: item.fields.slug,
      content: item.fields.content || "",
      imageUrl: item.fields.featuredImage?.fields?.file?.url || "",
      excerpt: item.fields.excerpt || "",
      author: item.fields.author || "",
      date: item.fields.date || "",
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

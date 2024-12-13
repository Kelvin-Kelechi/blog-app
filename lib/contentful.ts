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

const spaceId = "8b30oz6ewy5i";
const accessToken = "shuZJ0RHQYm5FhPWoRxYi6fR_h04zTFSREGiSNWhZ_o";

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

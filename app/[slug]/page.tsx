"use client";

import React, { useEffect, useState } from "react";
import { useDarkMode } from "../providers/DarkmodeProvider";
import DetailRightSection from "@/components/DetailRightSection/DetailRightSection";
import PostContent from "@/components/PostContent/PostContent";
import { usePosts } from "../providers/PostProvider";

export default function PostDetail({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { darkMode } = useDarkMode();
  const { posts } = usePosts();
  const [slug, setSlug] = useState<string | null>(null);

  // Resolve params Promise to get slug
  useEffect(() => {
    paramsPromise.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [paramsPromise]);

  if (!slug) {
    return (
      <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
      </div>
    );
  }

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">Post Not Found</h1>
          <p className="mt-4">The post you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? "bg-black" : "bg-white"}>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section - Post Content */}
          <div
            className={`md:col-span-2 p-6 rounded-lg shadow-md ${
              darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
          >
            <PostContent darkMode={darkMode} post={post} />
          </div>

          {/* Right Section */}
          <DetailRightSection posts={posts} />
        </div>
      </div>
    </div>
  );
}

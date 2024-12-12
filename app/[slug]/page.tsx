"use client";

import React, { useEffect, useState } from "react";
import { useDarkMode } from "../providers/DarkmodeProvider";
import RecentPosts from "@/components/RecentPosts/RecentPosts";
import PostContent from "@/components/PostContent/PostContent";
import { usePosts } from "../providers/PostProvider";
import { InfinitySpin } from "react-loader-spinner";

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
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      </div>
    );
  }

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
        <div className="container flex justify-center mx-auto px-4 py-48">
          <InfinitySpin width="200" color="#AB47BC" />
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? "bg-black" : "bg-white"}>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className={`md:col-span-2 p-6 rounded-lg shadow-md ${
              darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
          >
            <PostContent darkMode={darkMode} post={post} />
          </div>

          <RecentPosts posts={posts} />
        </div>
      </div>
    </div>
  );
}

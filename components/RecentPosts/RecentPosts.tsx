import { useDarkMode } from "@/app/providers/DarkmodeProvider";
import Link from "next/link";
import React from "react";
import { IoMdSearch } from "react-icons/io";

const RecentPosts: React.FC<{
  posts: any;
}> = ({ posts }) => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`md:col-span-1 p-6 rounded-lg shadow-md ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`p-6 rounded-lg shadow-md ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <h3
          className={`text-lg font-semibold ${
            darkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Recent Posts
        </h3>
        <ul className="mt-4 space-y-4">
          {posts.map((post: any, index: any) => (
            <li key={index}>
              <Link
                href={`/posts/${post.slug}`}
                className={`text-purple-500 hover:underline ${
                  darkMode ? "text-purple-500" : "text-purple-600"
                }`}
              >
                {post?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentPosts;

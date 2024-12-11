import { useDarkMode } from "@/app/providers/DarkmodeProvider";
import Link from "next/link";
import React from "react";
import { IoMdSearch } from "react-icons/io";

const RightSection: React.FC<{
  posts: any;
  searchTerm: any;
  setSearchTerm: any;
}> = ({ posts, searchTerm, setSearchTerm }) => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`md:col-span-1 p-6 rounded-lg shadow-md ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`p-6 rounded-lg shadow-md mb-6 ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <h3
          className={`text-lg font-semibold ${
            darkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Search
        </h3>
        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full border rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 ${
              darkMode
                ? "text-gray-200 bg-gray-800 border-gray-700 focus:ring-purple-500"
                : "text-gray-900 bg-gray-100 border-gray-300 focus:ring-purple-500"
            }`}
          />
          <button
            className={`absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 ${
              darkMode ? "hover:text-gray-200" : "hover:text-gray-800"
            }`}
          >
            <IoMdSearch size={25} />
          </button>
        </div>
      </div>

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

export default RightSection;

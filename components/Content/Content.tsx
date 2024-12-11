"use client"; // Marking this component as client-side

import { useDarkMode } from "@/app/providers/DarkmodeProvider";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { client } from "@/lib/contentful";
import PostCard from "../PostCard/PostCard";

interface BlogPost {
  title: string;
  slug: string;
}

const BlogContent: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  const { darkMode } = useDarkMode(); // Client-side hook
  const postsPerPage = 4; // Set how many posts to show per page
  const [currentPage, setCurrentPage] = useState(1); // Track current page

  // Calculate the posts to display for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total number of pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!posts) {
    return <div>No posts available</div>;
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
            {posts.length === 0 ? (
              <p>No posts available</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {currentPosts.map((post: any, index: any) => (
                  <PostCard key={index} post={post} />
                ))}
              </div>
            )}
            {totalPages > 1 && (
              <div className="mt-6 flex justify-center space-x-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-full bg-purple-500 text-white ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Prev
                </button>
                <span className="text-lg font-semibold">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-full bg-purple-500 text-white ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Right Section - Search & Recent Posts */}
          <div
            className={`md:col-span-1 p-6 rounded-lg shadow-md ${
              darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
          >
            {/* Search Bar */}
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
                  className={`w-full border rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 ${
                    darkMode
                      ? "text-gray-200 bg-gray-800 border-gray-700 focus:ring-purple-500"
                      : "text-gray-900 bg-gray-100 border-gray-300 focus:ring-purple-500"
                  }`}
                />
                <button className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-800">
                  <IoMdSearch size={25} />
                </button>
              </div>
            </div>

            {/* Recent Posts */}
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
                {posts.map((post, i) => (
                  <li key={i}>
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

            {/* Pagination Controls */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;

"use client";

import { useDarkMode } from "@/app/providers/DarkmodeProvider";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { client } from "@/lib/contentful";
import PostCard from "../PostCard/PostCard";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import RightSection from "../RightSection/RightSection";

interface BlogPost {
  title: string;
  slug: string;
}

const BlogContent: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  const { darkMode } = useDarkMode();
  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!posts) {
    return (
      <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
        <div className="container flex justify-center mx-auto px-4 py-48">
          <h2 className="text-xl md:text-2xl"> No post available</h2>
        </div>
      </div>
    );
  }
  console.log("=>", posts);
  return (
    <div className={darkMode ? "bg-black" : "bg-white"}>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className={`md:col-span-2 p-6 rounded-lg shadow-md ${
              darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
          >
            {filteredPosts.length === 0 ? (
              <div className="flex items-center justify-center h-full w-full">
                <div className={`text-center p-6   rounded-lg  `}>
                  <div className="mb-4 flex justify-center">
                    <IoMdSearch
                      size={40}
                      className="text-gray-500 dark:text-gray-400"
                    />
                  </div>
                  <h2
                    className={`text-2xl font-semibold ${
                      darkMode ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    No Results Found
                  </h2>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {currentPosts.map((post: any, index: any) => (
                  <Link key={index} href={`/${post.slug}`}>
                    <PostCard key={post.slug} post={post} />
                  </Link>
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
                  <MdArrowBackIos />
                </button>
                <span
                  className={`text-lg font-semibold ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
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
                  <MdArrowForwardIos />
                </button>
              </div>
            )}
          </div>

          <RightSection
            posts={posts}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;

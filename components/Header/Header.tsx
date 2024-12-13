"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FiSun, FiMoon } from "react-icons/fi";
import { useDarkMode } from "@/app/providers/DarkmodeProvider";
import { usePosts } from "@/app/providers/PostProvider";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const { posts } = usePosts();

  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) =>
          post.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };
  const Links = [
    { link: "Home", href: "/" },
    { link: "About", href: "/about" },
    { link: "Services", href: "/services" },
    { link: "Contact", href: "/contact" },
  ];
  return (
    <header
      className={`${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"
      } shadow-md sticky top-0 z-10 transition-colors duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="text-2xl md:text-3xl font-poppins font-bold text-purple-600 hover:text-purple-400 transition duration-300">
          <Link href="/">Purplify</Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          {Links.map((link, i) => (
            <Link key={i} href={link.href} className="hover:text-gray-500">
              {link.link}
            </Link>
          ))}
        </nav>

        <div className="relative hidden md:block w-64">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
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
          {searchQuery && (
            <div
              className={`absolute mt-2 w-full ${
                darkMode ? "bg-gray-800" : "bg-gray-200"
              }   ${
                darkMode ? "border-gray-700" : "border-gray-300"
              } rounded-lg shadow-lg max-h-48 overflow-y-auto`}
            >
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, i) => (
                  <Link
                    key={i}
                    href={`/${post.slug}`}
                    className={`block px-4 py-2 text-sm hover:bg-purple-500 ${
                      darkMode ? "" : "hover:text-white"
                    }`}
                  >
                    {post.title}
                  </Link>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                  No results found
                </div>
              )}
            </div>
          )}
        </div>

        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <IoMdClose
              size={25}
              className={`${darkMode ? "" : "text-gray-800"}`}
            />
          ) : (
            <TbMenu
              size={25}
              className={`${darkMode ? "" : "text-gray-800"}`}
            />
          )}
        </button>

        <div className="flex items-center">
          <label htmlFor="darkModeToggle" className="cursor-pointer">
            <div className="relative">
              <input
                id="darkModeToggle"
                type="checkbox"
                className="hidden"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <div
                className={`w-12 h-6 bg-gray-300 rounded-full transition-all duration-300 ${
                  darkMode ? "bg-purple-500" : "bg-purple-500"
                }`}
              >
                <div
                  className={`w-6 h-6 ${
                    darkMode ? "bg-white" : "bg-gray-800"
                  } rounded-full transition-all duration-300 transform ${
                    darkMode ? "translate-x-6" : ""
                  }`}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {darkMode ? (
                      <FiSun className="text-yellow-500" size={18} />
                    ) : (
                      <FiMoon className="text-yellow-300" size={18} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          className={`md:hidden ${
            darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"
          }   transition-all duration-300`}
        >
          <div className="flex flex-col space-y-4 p-4">
            {Links.map((link, i) => (
              <Link key={i} href={link.href} className="hover:text-gray-500">
                {link.link}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

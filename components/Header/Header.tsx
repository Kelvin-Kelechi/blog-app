"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FiSun, FiMoon } from "react-icons/fi";
import { useDarkMode } from "@/app/providers/DarkmodeProvider";
import { BiSolidGridAlt } from "react-icons/bi";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"
      } shadow-md sticky top-0 z-10 transition-colors duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-poppins font-bold text-purple-600 hover:text-purple-400 transition duration-300">
          <a href="/">Purplify</a>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <a href="/home" className="hover:text-gray-500">
            Home
          </a>
          <a href="/about" className="hover:text-gray-500">
            About
          </a>
          <a href="/services" className="hover:text-gray-500">
            Services
          </a>
          <a href="/contact" className="hover:text-gray-500">
            Contact
          </a>
        </nav>

        {/* Search Bar */}
        <div className="relative hidden md:block w-64">
          <input
            type="text"
            placeholder="Search..."
            className={`w-full border rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 ${
              darkMode
                ? "text-gray-200 bg-gray-800 focus:ring-purple-500"
                : "text-gray-800 bg-white focus:ring-purple-500"
            }`}
          />
          <button className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-200">
            <IoMdSearch size={25} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <BiSolidGridAlt
            size={25}
            className={`${darkMode ? "" : "text-gray-800"}`}
          />
        </button>

        {/* Dark Mode Switch */}
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
                  {/* Icon inside the toggle switch */}
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav
          className={`md:hidden ${
            darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"
          }   transition-all duration-300`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <a
              href="/home"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              About
            </a>
            <a
              href="/services"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              Services
            </a>
            <a
              href="/contact"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

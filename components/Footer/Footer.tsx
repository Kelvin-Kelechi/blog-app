"use client"
import { useDarkMode } from "@/app/providers/DarkmodeProvider";
import React from "react";
 import {   FaXTwitter } from "react-icons/fa6";
 import { FaInstagram } from "react-icons/fa";
 import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useDarkMode();  

  return (
    <footer
      className={`py-8 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 border-b ${
            darkMode ? "border-gray-700" : "border-gray-300"
          } pb-6`}
        >
          {/* About Section */}
          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              About Us
            </h3>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Welcome to{" "}
              <span className="text-purple-600 font-bold">Purplify</span>, where
              we share insights, stories, and tips on a variety of topics. Stay
              tuned for regular updates!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about"
                  className={`hover:underline ${
                    darkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/categories"
                  className={`hover:underline ${
                    darkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`hover:underline ${
                    darkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className={`hover:underline ${
                    darkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Subscribe
            </h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 rounded ${
                  darkMode
                    ? "bg-gray-800 text-gray-200"
                    : "bg-white text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            &copy; {new Date().getFullYear()} Purplify. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-white ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              <FaXTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-white ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-white ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

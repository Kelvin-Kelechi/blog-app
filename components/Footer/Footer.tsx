"use client";
import { useDarkMode } from "@/app/providers/DarkmodeProvider";
import React from "react";

import Link from "next/link";
import { Links, socialLinks } from "./data";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer
      className={`py-8 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
   
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 border-b ${
            darkMode ? "border-gray-700" : "border-gray-300"
          } pb-6`}
        >
  
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

          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {Links.map((link, i) => (
                <li key={i}>
                  {" "}
                  <Link
                    key={i}
                    href={link.href}
                    className="hover:text-gray-500"
                  >
                    {link.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Connect With Us
            </h3>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-white h-[50px] ${
                    darkMode ? "text-gray-200" : "text-gray-900"
                  } text-3xl`}  
                >
                  {React.createElement(link.icon)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-center">
          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            &copy; {new Date().getFullYear()} Purplify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

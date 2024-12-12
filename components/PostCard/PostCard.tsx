import { useDarkMode } from "@/app/providers/DarkmodeProvider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";  

const PostCard: React.FC<{ post: any }> = ({ post }) => {
  const { darkMode } = useDarkMode();

  const { title, slug, excerpt, imageUrl, author, date } = post;
  const formattedDate = dayjs(date).format("MMMM D, YYYY"); 
  return (
   
    
      <div
        className={`p-6 rounded-lg shadow-md ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        
        <div className="mb-4">
          <Image
            src={`https:${imageUrl}`}
            alt="Featured Image"
            width={600}
            height={400}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <div className="flex items-center mb-4">
          <Image
            width={50}
            height={50}
            src={`https:${author.fields.picture.fields.file.url}`}
            alt=""
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <span
            className={`text-sm font-bold ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {author.fields.name} || {formattedDate}
          </span>
        </div>

        <h2
          className={`text-xl font-semibold ${
            darkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          <Link href="/post/1">{title}</Link>
        </h2>
        <p
          className={`mt-2 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          } line-clamp-3`}
        >
          {excerpt}
        </p>

        <Link
          href={`/${slug}`}
          className={`mt-4 block ${
            darkMode
              ? "text-purple-500 hover:underline"
              : "text-purple-600 hover:underline"
          }`}
        >
          Read more
        </Link>
      </div>
 
  );
};

export default PostCard;

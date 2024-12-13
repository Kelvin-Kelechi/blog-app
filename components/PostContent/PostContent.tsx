import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import Link from "next/link";
export default function PostContent({
  darkMode,
  post,
}: {
  darkMode: boolean;
  post: any;
}) {
  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className={darkMode ? "text-white" : "text-black"}>{children}</p>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <Link href={node.data.uri} className="text-blue-500 underline">
          {children}
        </Link>
      ),
    },
  };
  const formattedDate = format(parseISO(post.date), "MMMM d, yyyy");

  return (
    <div>
      <h1
        className={`md:text-4xl text-2xl font-bold ${
          darkMode ? "text-white " : "text-gray-800"
        }`}
      >
        {post.title}
      </h1>

      <div className="mt-4">
        {post.imageUrl && (
          <Image
            src={`https:${post.imageUrl}`}
            alt={post.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
        )}
      </div>
      <div className="flex items-center mb-4 mt-4">
        <Image
          width={50}
          height={50}
          src={`https:${post.author.fields.picture.fields.file.url}`}
          alt=""
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <span
          className={`text-sm font-bold ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {post.author.fields.name} || {formattedDate}
        </span>
      </div>
      <div className="mt-6">
        {documentToReactComponents(post.content, richTextOptions)}
      </div>
    </div>
  );
}

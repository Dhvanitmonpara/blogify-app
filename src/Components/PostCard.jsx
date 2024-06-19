import React from "react";
import bucketService from "../appwrite/bucketConfig";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function PostCard({ $id, title, featuredImage, content }) {
  return (
    <Link to={`/post/${$id}`} className="">
      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={bucketService.filePreview(featuredImage)}
          alt={title}
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-7 text-gray-400 h-7 text-nowrap overflow-hidden">
            {parse(content)}
          </p>
          <div className="flex items-center flex-wrap text-purple-400">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
